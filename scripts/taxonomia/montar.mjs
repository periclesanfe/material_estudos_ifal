#!/usr/bin/env node
/**
 * montar.mjs — monta o dataset da taxonomia a partir das fontes por matéria.
 *
 * A fonte de verdade editável à mão é src/data/taxonomia/fontes/<CODIGO>.json,
 * um por matéria. Tudo o mais é derivado: centralidade, contagens, checksums e
 * o resumo consumido pela página de matéria. Rode este script depois de mexer
 * em qualquer fonte, senão o validador acusa checksum divergente.
 *
 *   npm run taxonomia:montar
 *
 * Entradas
 *   src/data/taxonomia/fontes/<CODIGO>.json   micro-tópicos e arestas internas
 *   src/data/taxonomia/fontes/_cross.json     arestas entre matérias (opcional)
 *   src/data/curriculum.ts                    período, eixo e slug de cada matéria
 *   scripts/taxonomia/ppc_fichas.json         ementas extraídas do PPC
 *
 * Saídas (todas em src/data/taxonomia/)
 *   topicos.json, dependencias.json, disciplinas.json, manifest.json, resumo.ts
 */

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DS = resolve(RAIZ, 'src', 'data', 'taxonomia');
const TAX = resolve(DS, 'fontes');

/**
 * Ordem das matérias no grafo. Define qual token --color-taxo-N cada uma recebe
 * (ver src/index.css), então mexer aqui muda a cor de todas as seguintes.
 * Matéria nova entra no fim para não repintar o que já está publicado.
 */
const ORDEM = ['ALPG', 'LMMD', 'LPGM', 'ESTD', 'METC', 'APBD', 'TABD', 'PDSW', 'CORG', 'MKCE'];

/**
 * Cor de referência por matéria, espelhando --color-taxo-1..10 do tema escuro.
 * Fica no dataset só para consumidor externo (quem baixar o JSON e plotar por
 * conta própria). A interface NÃO usa este campo: ela lê os tokens do CSS, para
 * acompanhar o tema claro e o modo limpo.
 */
const CORES_REFERENCIA = [
  '#6c63ff', '#4ecdc4', '#ff6b6b', '#ffb703', '#a8e6cf',
  '#f78bdc', '#61a5ff', '#c9a227', '#ff9166', '#9d8cff',
];

// ─────────────────────────────────────────────── grade curricular do repo
const curriculo = (() => {
  const src = readFileSync(resolve(RAIZ, 'src', 'data', 'curriculum.ts'), 'utf8');
  const re = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*code:\s*'([^']+)',\s*period:\s*([^,]+),\s*axis:\s*'([^']+)',\s*hours:\s*(\d+)/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    const per = m[5].trim().replace(/'/g, '');
    out.push({ id: m[1], nome: m[2], slug: m[3], codigo: m[4], periodo: per === 'optativa' ? 9 : +per, eixo: m[6], horas: +m[7] });
  }
  return out;
})();
const porCodigo = new Map(curriculo.map(c => [c.codigo, c]));

// ─────────────────────────────────────────────── ementas do PPC
const fichas = JSON.parse(readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), 'ppc_fichas.json'), 'utf8'));

// ─────────────────────────────────────────────── carrega a taxonomia extraída
if (!existsSync(TAX)) { console.error('taxonomia/ não existe'); process.exit(1); }
const arquivos = readdirSync(TAX).filter(f => f.endsWith('.json') && !f.startsWith('_'));
if (!arquivos.length) { console.error('nenhum arquivo de disciplina em taxonomia/'); process.exit(1); }

let topicos = [];
let arestas = [];
const disciplinasVistas = [];

/**
 * Normaliza texto vindo do extrator: tira travessão (padrão de escrita do projeto)
 * e o prefixo "você domina se consegue", que duplicava o rótulo do painel.
 */
const limpaTexto = s => String(s ?? '')
  .replace(/\s*[—–]\s*/g, ', ')
  .replace(/\s+/g, ' ')
  .trim();

const limpaEvidencia = s => {
  let t = limpaTexto(s).replace(/^voc[êe]\s+domina\s+se\s+(consegue\s+)?/i, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
};

const ignorados = [];

for (const f of arquivos) {
  let d;
  try {
    d = JSON.parse(readFileSync(resolve(TAX, f), 'utf8'));
  } catch (e) {
    // arquivo incompleto (extração interrompida no meio): ignora e segue
    ignorados.push(`${f}: ${e.message.split('\n')[0].slice(0, 80)}`);
    continue;
  }
  if (!Array.isArray(d.topicos) || !d.topicos.length) {
    ignorados.push(`${f}: sem tópicos`);
    continue;
  }
  const cod = d.disciplina?.codigo || f.replace('.json', '');
  const grade = porCodigo.get(cod);
  disciplinasVistas.push({
    codigo: cod,
    codigoPPC: d.disciplina?.codigoPPC || cod,
    nome: d.disciplina?.nome || grade?.nome || cod,
    periodo: grade?.periodo ?? d.disciplina?.periodo ?? 9,
    eixo: grade?.eixo || null,
    slug: grade?.slug || null,
    cor: CORES_REFERENCIA[Math.max(0, ORDEM.indexOf(cod)) % CORES_REFERENCIA.length],
  });
  for (const t of d.topicos || []) {
    topicos.push({
      ...t,
      nome: limpaTexto(t.nome),
      descricao: limpaTexto(t.descricao),
      checagem: limpaTexto(t.checagem),
      unidade: limpaTexto(t.unidade),
      evidencia: (t.evidencia || []).map(limpaEvidencia),
      disciplina: cod,
      periodo: grade?.periodo ?? d.disciplina?.periodo ?? 9,
    });
  }
  for (const a of d.arestas || []) {
    arestas.push({ ...a, razao: limpaTexto(a.razao), escopo: 'interna' });
  }
}

// arestas entre disciplinas
const crossPath = resolve(TAX, '_cross.json');
if (existsSync(crossPath)) {
  const c = JSON.parse(readFileSync(crossPath, 'utf8'));
  for (const a of (Array.isArray(c) ? c : c.arestas || [])) {
    arestas.push({ ...a, razao: limpaTexto(a.razao), escopo: 'cruzada' });
  }
}

const disciplinas = disciplinasVistas.sort(
  (a, b) => (ORDEM.indexOf(a.codigo) + 1 || 99) - (ORDEM.indexOf(b.codigo) + 1 || 99)
);

// ─────────────────────────────────────────────── reprovações da passagem adversarial
const reprovadas = new Set();
const rebaixadas = new Set();
const repPath = resolve(dirname(fileURLToPath(import.meta.url)), 'reprovacoes.json');
if (existsSync(repPath)) {
  for (const r of JSON.parse(readFileSync(repPath, 'utf8'))) {
    const k = `${r.topicoId}|${r.prerequisitoId}`;
    if (r.acao === 'rebaixar_para_soft') rebaixadas.add(k);
    else if (r.acao === 'remover' || r.acao === 'inverter') reprovadas.add(k);
  }
}

// ─────────────────────────────────────────────── saneamento
const problemas = [];
const ids = new Set(topicos.map(t => t.id));
const dupIds = topicos.map(t => t.id).filter((v, i, a) => a.indexOf(v) !== i);
if (dupIds.length) problemas.push(`ids duplicados: ${[...new Set(dupIds)].join(', ')}`);

const antes = arestas.length;
arestas = arestas.filter(a => {
  const k = `${a.topicoId}|${a.prerequisitoId}`;
  if (reprovadas.has(k)) return false;
  if (!ids.has(a.topicoId)) { problemas.push(`aresta aponta para tópico inexistente: ${a.topicoId}`); return false; }
  if (!ids.has(a.prerequisitoId)) { problemas.push(`pré-requisito inexistente: ${a.prerequisitoId}`); return false; }
  if (a.topicoId === a.prerequisitoId) { problemas.push(`auto-aresta: ${a.topicoId}`); return false; }
  return true;
});
for (const a of arestas) if (rebaixadas.has(`${a.topicoId}|${a.prerequisitoId}`)) a.forca = 'soft';

// dedup
const vistas = new Set();
arestas = arestas.filter(a => {
  const k = `${a.topicoId}|${a.prerequisitoId}`;
  if (vistas.has(k)) return false;
  vistas.add(k);
  return true;
});

// período invertido: pré-requisito de período estritamente maior
const porId = new Map(topicos.map(t => [t.id, t]));
const invertidasPeriodo = arestas.filter(a => {
  const t = porId.get(a.topicoId), p = porId.get(a.prerequisitoId);
  return p.periodo > t.periodo && p.periodo !== 9 && t.periodo !== 9;
});

// ciclos
const idxDe = new Map(topicos.map((t, i) => [t.id, i]));
const adj = topicos.map(() => []);
for (const a of arestas) adj[idxDe.get(a.topicoId)].push(idxDe.get(a.prerequisitoId));
const cor = new Int8Array(topicos.length);
const ciclos = [];
(function detecta() {
  const caminho = [];
  const anda = n => {
    cor[n] = 1; caminho.push(n);
    for (const m of adj[n]) {
      if (cor[m] === 1) ciclos.push([...caminho.slice(caminho.indexOf(m)), m].map(i => topicos[i].id));
      else if (cor[m] === 0) anda(m);
    }
    cor[n] = 2; caminho.pop();
  };
  for (let i = 0; i < topicos.length; i++) if (cor[i] === 0) anda(i);
})();

// centralidade: fração dos tópicos que dependem deste, transitivamente
const filhos = topicos.map(() => []);
for (const a of arestas) filhos[idxDe.get(a.prerequisitoId)].push(idxDe.get(a.topicoId));
const memo = new Array(topicos.length).fill(null);
const alcanca = (n, guarda) => {
  if (memo[n]) return memo[n];
  if (guarda.has(n)) return new Set();
  guarda.add(n);
  const s = new Set();
  for (const f of filhos[n]) { s.add(f); for (const x of alcanca(f, guarda)) s.add(x); }
  guarda.delete(n);
  memo[n] = s;
  return s;
};
const alcanceN = topicos.map((_, i) => alcanca(i, new Set()).size);
const maxAlc = Math.max(1, ...alcanceN);
topicos.forEach((t, i) => { t.centralidade = +(alcanceN[i] / maxAlc).toFixed(4); });

// ─────────────────────────────────────────────── dataset no molde os-taxonomy
mkdirSync(DS, { recursive: true });

const jsonTopicos = {
  versao: 'v1',
  totalTopicos: topicos.length,
  topicos: topicos.map(t => ({
    id: t.id,
    tipo: t.tipo,
    disciplina: t.disciplina,
    periodo: t.periodo,
    unidade: t.unidade,
    nome: t.nome,
    descricao: t.descricao,
    ordem: t.ordem,
    centralidade: t.centralidade,
    evidencia: t.evidencia || [],
    checagem: t.checagem || '',
    avaliacoes: t.avaliacoes || [],
    ementaPPC: t.ementaPPC || [],
    fonte: t.fonte || '',
  })),
};

const jsonArestas = {
  versao: 'v1',
  totalArestas: arestas.length,
  dependencias: arestas.map(a => ({
    topicoId: a.topicoId,
    prerequisitoId: a.prerequisitoId,
    forca: a.forca,
    razao: a.razao,
    origem: a.origem,
    trecho: a.trecho || '',
    escopo: a.escopo,
  })),
};

const jsonDisciplinas = {
  versao: 'v1',
  totalDisciplinas: disciplinas.length,
  fonte: 'PPC do Bacharelado em Sistemas de Informação — IFAL',
  disciplinas: disciplinas.map(d => {
    const ficha = fichas.find(f => f.codigo_ppc === d.codigoPPC);
    return { ...d, ementa: ficha?.ementa || '', unidadesEmenta: ficha?.unidadesEmenta || [] };
  }),
};

const escreve = (nome, obj) => {
  const txt = JSON.stringify(obj, null, 2) + '\n';
  writeFileSync(resolve(DS, nome), txt, 'utf8');
  return { bytes: Buffer.byteLength(txt), sha256: createHash('sha256').update(txt).digest('hex') };
};

const meta = {
  'topicos.json': escreve('topicos.json', jsonTopicos),
  'dependencias.json': escreve('dependencias.json', jsonArestas),
  'disciplinas.json': escreve('disciplinas.json', jsonDisciplinas),
};

const porDisc = {};
for (const t of topicos) porDisc[t.disciplina] = (porDisc[t.disciplina] || 0) + 1;
const porTipo = {};
for (const t of topicos) porTipo[t.tipo] = (porTipo[t.tipo] || 0) + 1;

escreve('manifest.json', {
  dataset: 'Taxonomia de Aprendizagem — BSI/IFAL',
  versao: 'v0.1-rascunho',
  geradoEm: process.env.STAMP || null,
  contagens: {
    topicos: topicos.length,
    topicosPorDisciplina: porDisc,
    topicosPorTipo: porTipo,
    dependencias: arestas.length,
    dependenciasDuras: arestas.filter(a => a.forca === 'hard').length,
    dependenciasCruzadas: arestas.filter(a => a.escopo === 'cruzada').length,
    disciplinas: disciplinas.length,
    disciplinasNaGrade: curriculo.length,
  },
  arquivos: meta,
  excluido: ['progresso individual de aluno (nunca publicado)', 'material autoral dos professores na íntegra'],
  avisos: { ciclos: ciclos.length, periodoInvertido: invertidasPeriodo.length, problemas: problemas.length },
});

// ─────────────────────────────────────────────── resumo leve, seguro para carga eager
//
// A página de matéria é carregada de imediato e só precisa saber se existe
// taxonomia e quantos conceitos são. Importar o dataset inteiro lá arrastaria
// meio megabyte de JSON para o bundle principal, então este módulo minúsculo é
// gerado à parte.
{
  const linhas = disciplinas.map(d => {
    const meus = topicos.filter(t => t.disciplina === d.codigo);
    const internas = arestas.filter(a => porId.get(a.topicoId)?.disciplina === d.codigo && a.escopo === 'interna').length;
    const deFora = arestas.filter(a => porId.get(a.topicoId)?.disciplina === d.codigo && a.escopo === 'cruzada').length;
    const maisCentral = [...meus].sort((a, b) => b.centralidade - a.centralidade)[0];
    return `  ${d.codigo}: {
    conceitos: ${meus.length},
    dependenciasInternas: ${internas},
    dependenciasDeFora: ${deFora},
    conceitoMaisCentral: ${JSON.stringify(maisCentral?.nome ?? '')},
  },`;
  });

  const conteudo = `/**
 * Resumo da taxonomia por matéria. GERADO, não editar à mão.
 *
 * Existe para que a página de matéria, que carrega de imediato, possa mostrar o
 * atalho para a trilha sem arrastar o dataset inteiro para o bundle principal.
 * O dado completo vive em src/data/taxonomia/ e só é carregado na rota /trilha.
 */

export interface ResumoDisciplina {
  conceitos: number;
  dependenciasInternas: number;
  /** Pré-requisitos que vêm de outra matéria. */
  dependenciasDeFora: number;
  /** O conceito da matéria que mais trava conteúdo adiante. */
  conceitoMaisCentral: string;
}

export const resumoPorDisciplina: Record<string, ResumoDisciplina> = {
${linhas.join('\n')}
};

export function getResumoTaxonomia(codigo: string): ResumoDisciplina | undefined {
  return resumoPorDisciplina[codigo];
}
`;
  writeFileSync(resolve(DS, 'resumo.ts'), conteudo, 'utf8');
}

// ─────────────────────────────────────────────── relatório
const pct = n => `${((n / topicos.length) * 100).toFixed(0)}%`;
console.log(`
TAXONOMIA MONTADA
  tópicos ............... ${topicos.length}
  dependências .......... ${arestas.length}  (${arestas.filter(a => a.forca === 'hard').length} hard / ${arestas.filter(a => a.forca === 'soft').length} soft)
  entre disciplinas ..... ${arestas.filter(a => a.escopo === 'cruzada').length}
  com trecho de prova ... ${arestas.filter(a => a.trecho && a.trecho.length > 10).length} (${((arestas.filter(a => a.trecho && a.trecho.length > 10).length / arestas.length) * 100).toFixed(0)}%)
  por origem ............ ${JSON.stringify(arestas.reduce((o, a) => (o[a.origem] = (o[a.origem] || 0) + 1, o), {}))}
  disciplinas ........... ${disciplinas.length} de ${curriculo.length} da grade
  raízes (sem prereq) ... ${topicos.filter(t => !arestas.some(a => a.topicoId === t.id)).length}
  com ementa do PPC ..... ${topicos.filter(t => (t.ementaPPC || []).length).length} (${pct(topicos.filter(t => (t.ementaPPC || []).length).length)})

SANEAMENTO
  arquivos ignorados .... ${ignorados.length}${ignorados.length ? '\n    - ' + ignorados.join('\n    - ') : ''}
  arestas descartadas ... ${antes - arestas.length}
  ciclos ................ ${ciclos.length}${ciclos.length ? ' >>> ' + ciclos.slice(0, 3).map(c => c.join('→')).join(' | ') : ''}
  período invertido ..... ${invertidasPeriodo.length}${invertidasPeriodo.length ? ' >>> ' + invertidasPeriodo.slice(0, 4).map(a => `${a.topicoId}←${a.prerequisitoId}`).join(', ') : ''}
  outros problemas ...... ${problemas.length}${problemas.length ? '\n    - ' + problemas.slice(0, 8).join('\n    - ') : ''}

MAIS CENTRAIS (o que trava mais coisa)
${[...topicos].sort((a, b) => b.centralidade - a.centralidade).slice(0, 10)
    .map(t => `  ${t.centralidade.toFixed(3)}  ${t.nome} [${t.disciplina}]`).join('\n')}

saídas em src/data/taxonomia/: topicos, dependencias, disciplinas, manifest, resumo.ts
`);
