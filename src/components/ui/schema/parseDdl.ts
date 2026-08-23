/**
 * Leitor de DDL: transforma `CREATE TABLE` em um modelo navegável.
 *
 * A razão de existir um parser, em vez de uma prop com as tabelas já descritas
 * em objeto, é ter UMA fonte de verdade. O esquema desenhado e o SQL mostrado ao
 * lado saem do mesmo texto, então é impossível o diagrama envelhecer enquanto o
 * código evolui — o erro mais comum em material didático de banco de dados.
 *
 * O recorte é deliberado: reconhece o subconjunto de DDL que a graduação usa
 * (colunas, tipos, PK, FK, UNIQUE, NOT NULL, CHECK) e ignora o resto sem
 * quebrar. Não é um validador de SQL; é um leitor de estrutura.
 */

export interface Coluna {
  nome: string;
  tipo: string;
  pk: boolean;
  fk?: { tabela: string; coluna: string };
  notNull: boolean;
  unique: boolean;
  /** Comentário `--` na mesma linha, aproveitado como glosa da coluna. */
  nota?: string;
}

export interface Tabela {
  nome: string;
  colunas: Coluna[];
}

export interface Ligacao {
  de: string;
  deColuna: string;
  para: string;
  paraColuna: string;
  /** Deduzida: PK composta com 2 FKs indica tabela associativa (N:M). */
  cardinalidade: '1:N' | '1:1' | 'N:M';
}

export interface Esquema {
  tabelas: Tabela[];
  ligacoes: Ligacao[];
  /** Tabelas que só existem para resolver um N:M. */
  associativas: Set<string>;
}

/** Remove comentários de bloco e guarda os de linha por número de linha. */
function separarComentarios(sql: string): { limpo: string; notas: Map<number, string> } {
  const notas = new Map<number, string>();
  const semBloco = sql.replace(/\/\*[\s\S]*?\*\//g, '');

  const linhas = semBloco.split('\n').map((linha, i) => {
    // Só trata `--` fora de aspas, para não mutilar uma string com hífens.
    let dentro: string | null = null;
    for (let c = 0; c < linha.length; c++) {
      const ch = linha[c];
      if (dentro) {
        if (ch === dentro) dentro = null;
        continue;
      }
      if (ch === "'" || ch === '"') dentro = ch;
      else if (ch === '-' && linha[c + 1] === '-') {
        const nota = linha.slice(c + 2).trim();
        if (nota) notas.set(i, nota);
        return linha.slice(0, c);
      }
    }
    return linha;
  });

  return { limpo: linhas.join('\n'), notas };
}

/**
 * Divide pelas vírgulas de topo, respeitando parênteses.
 *
 * Necessário porque `NUMERIC(10,2)` e `CHECK (a IN (1,2))` trazem vírgulas que
 * NÃO separam definições — um `split(',')` ingênuo parte a coluna ao meio.
 */
function partesDeTopo(corpo: string): string[] {
  const partes: string[] = [];
  let profundidade = 0;
  let atual = '';
  let dentro: string | null = null;

  for (const ch of corpo) {
    if (dentro) {
      atual += ch;
      if (ch === dentro) dentro = null;
      continue;
    }
    if (ch === "'" || ch === '"') { dentro = ch; atual += ch; continue; }
    if (ch === '(') profundidade++;
    if (ch === ')') profundidade--;
    if (ch === ',' && profundidade === 0) { partes.push(atual); atual = ''; continue; }
    atual += ch;
  }
  if (atual.trim()) partes.push(atual);
  return partes;
}

const IDENT = String.raw`[A-Za-z_À-ſ][\wÀ-ſ]*`;

/** Tira aspas/colchetes/crases de um identificador citado. */
function limparIdent(bruto: string): string {
  return bruto.trim().replace(/^["`[]|["`\]]$/g, '');
}

export function parseDdl(sql: string): Esquema {
  const { limpo, notas } = separarComentarios(sql);
  const tabelas: Tabela[] = [];
  const ligacoes: Ligacao[] = [];

  // Índice linha→posição, para casar o comentário `--` com a coluna daquela linha.
  const offsets: number[] = [];
  let acc = 0;
  for (const linha of limpo.split('\n')) { offsets.push(acc); acc += linha.length + 1; }
  const linhaDe = (pos: number) => {
    let lo = 0, hi = offsets.length - 1, r = 0;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (offsets[mid] <= pos) { r = mid; lo = mid + 1; } else hi = mid - 1;
    }
    return r;
  };

  const reCreate = new RegExp(
    String.raw`CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:${IDENT}\s*\.\s*)?(["\`[]?${IDENT}["\`\]]?)\s*\(`,
    'gi',
  );

  let m: RegExpExecArray | null;
  while ((m = reCreate.exec(limpo)) !== null) {
    const nomeTabela = limparIdent(m[1]);

    // Acha o parêntese que fecha o CREATE, contando aninhamento.
    const inicio = m.index + m[0].length;
    let profundidade = 1;
    let fim = inicio;
    while (fim < limpo.length && profundidade > 0) {
      if (limpo[fim] === '(') profundidade++;
      else if (limpo[fim] === ')') profundidade--;
      if (profundidade === 0) break;
      fim++;
    }

    const corpo = limpo.slice(inicio, fim);
    const colunas: Coluna[] = [];
    const pksDeclaradas = new Set<string>();
    const pendentesFk: { colunas: string[]; tabela: string; refs: string[] }[] = [];

    let posRelativa = 0;
    for (const parteBruta of partesDeTopo(corpo)) {
      const parte = parteBruta.trim();
      // Posição do texto ÚTIL, não do começo do fragmento: a vírgula anterior
      // deixa a quebra de linha dentro deste pedaço, então usar o início cruo
      // atribuiria o comentário da coluna anterior a esta.
      const posAbs = inicio + posRelativa + parteBruta.indexOf(parte);
      posRelativa += parteBruta.length + 1;
      if (!parte) continue;

      // ---- Restrições de tabela (PRIMARY KEY (...), FOREIGN KEY (...)) ----
      const mPk = parte.match(/^(?:CONSTRAINT\s+\S+\s+)?PRIMARY\s+KEY\s*\(([^)]*)\)/i);
      if (mPk) {
        for (const c of mPk[1].split(',')) pksDeclaradas.add(limparIdent(c).toLowerCase());
        continue;
      }

      const mFk = parte.match(
        new RegExp(
          String.raw`^(?:CONSTRAINT\s+\S+\s+)?FOREIGN\s+KEY\s*\(([^)]*)\)\s*REFERENCES\s+(?:${IDENT}\s*\.\s*)?(["\`[]?${IDENT}["\`\]]?)\s*(?:\(([^)]*)\))?`,
          'i',
        ),
      );
      if (mFk) {
        pendentesFk.push({
          colunas: mFk[1].split(',').map(limparIdent),
          tabela: limparIdent(mFk[2]),
          refs: mFk[3] ? mFk[3].split(',').map(limparIdent) : [],
        });
        continue;
      }

      if (/^(?:CONSTRAINT|CHECK|UNIQUE|INDEX|KEY)\b/i.test(parte)) continue;

      // ---- Definição de coluna ----
      const mCol = parte.match(new RegExp(String.raw`^(["\`[]?${IDENT}["\`\]]?)\s+(.*)$`, 's'));
      if (!mCol) continue;

      const nome = limparIdent(mCol[1]);
      const resto = mCol[2];

      const mTipo = resto.match(/^([A-Za-z][\w ]*?)\s*(\([^)]*\))?(?=\s|$)/);
      const tipo = mTipo ? (mTipo[1].trim() + (mTipo[2] ?? '')).toUpperCase() : '';

      const mRef = resto.match(
        new RegExp(
          String.raw`REFERENCES\s+(?:${IDENT}\s*\.\s*)?(["\`[]?${IDENT}["\`\]]?)\s*(?:\(\s*(${IDENT})\s*\))?`,
          'i',
        ),
      );

      colunas.push({
        nome,
        tipo,
        pk: /\bPRIMARY\s+KEY\b/i.test(resto),
        fk: mRef ? { tabela: limparIdent(mRef[1]), coluna: mRef[2] ? limparIdent(mRef[2]) : 'id' } : undefined,
        notNull: /\bNOT\s+NULL\b/i.test(resto),
        unique: /\bUNIQUE\b/i.test(resto),
        nota: notas.get(linhaDe(posAbs)),
      });
    }

    // Aplica PK e FK declaradas no nível da tabela.
    for (const col of colunas) {
      if (pksDeclaradas.has(col.nome.toLowerCase())) col.pk = true;
    }
    for (const p of pendentesFk) {
      p.colunas.forEach((nomeCol, i) => {
        const col = colunas.find(c => c.nome.toLowerCase() === nomeCol.toLowerCase());
        if (col) col.fk = { tabela: p.tabela, coluna: p.refs[i] ?? p.refs[0] ?? 'id' };
      });
    }

    tabelas.push({ nome: nomeTabela, colunas });
  }

  // ---- Ligações e detecção de tabela associativa ----
  const associativas = new Set<string>();
  const nomeReal = new Map(tabelas.map(t => [t.nome.toLowerCase(), t.nome]));

  for (const t of tabelas) {
    const pks = t.colunas.filter(c => c.pk);
    // Associativa: a PK é composta E toda parte dela é FK. É o desenho canônico
    // de resolução de N:M, então merece leitura própria no diagrama.
    const eAssociativa = pks.length >= 2 && pks.every(c => c.fk);
    if (eAssociativa) associativas.add(t.nome);

    for (const col of t.colunas) {
      if (!col.fk) continue;
      const alvo = nomeReal.get(col.fk.tabela.toLowerCase());
      if (!alvo) continue;
      ligacoes.push({
        de: t.nome,
        deColuna: col.nome,
        para: alvo,
        paraColuna: col.fk.coluna,
        cardinalidade: eAssociativa ? 'N:M' : col.unique || col.pk ? '1:1' : '1:N',
      });
    }
  }

  return { tabelas, ligacoes, associativas };
}
