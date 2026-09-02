#!/usr/bin/env node
/**
 * extrair-bibliografia.mjs — extrai a bibliografia das fichas do ementário do PPC.
 *
 * A extração que já existia (scripts/taxonomia/ppc_fichas.json) pegou só a
 * ementa e descartou as duas listas de bibliografia que cada ficha traz. Este
 * script faz a passagem que faltava e grava o resultado ao lado, para não
 * mexer no insumo de que a taxonomia depende.
 *
 *   npm run ppc:bibliografia
 *
 * Requer o pdftotext (poppler): `brew install poppler`.
 *
 * Entrada
 *   .docs/bacharelado-em-sistemas-de-informacao.pdf   PPC oficial, 131 páginas
 *
 * Saída
 *   scripts/ppc/ppc_bibliografia.json   uma entrada por ficha, com página de origem
 *
 * O parser trabalha página por página (o form feed que o pdftotext emite),
 * porque a ficha é o registro e ela nunca cruza a quebra de página. Isso é o
 * que impede a bibliografia de uma matéria de vazar para a seguinte quando
 * um dos cabeçalhos falta.
 */

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PDF = resolve(RAIZ, '.docs', 'bacharelado-em-sistemas-de-informacao.pdf');
const SAIDA = resolve(RAIZ, 'scripts', 'ppc', 'ppc_bibliografia.json');

let texto;
try {
  texto = execFileSync('pdftotext', ['-layout', PDF, '-'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
} catch (e) {
  console.error(`falha ao rodar pdftotext: ${e.message}`);
  console.error('instale o poppler (brew install poppler) e rode de novo.');
  process.exit(1);
}

/**
 * Rótulos que encerram uma lista de bibliografia dentro da ficha.
 *
 * O bullet opcional no começo é por causa de IDCO (p.112), onde o rótulo da
 * complementar foi digitado como item da lista ("● Bibliografia
 * Complementar"). Sem tolerar o bullet, o rótulo virava referência e as duas
 * listas se somavam.
 */
const FIM_DE_BLOCO =
  /^[●•▪◦]?\s*(Bibliografia\s+Complementar|Bibliografia\s+Básica|Ementa|Componente\s+Curricular|Carga\s+Horária|Pré-requisitos?)\b/i;

/** Uma "referência" que é só o rótulo de um bloco não é referência. */
const E_ROTULO = /^[●•▪◦]?\s*Bibliografia\s+(Básica|Complementar)\s*\.?$/i;

/**
 * Cabeçalho e rodapé que o pdftotext repete em toda página.
 *
 * Sem o `^\s*` o rodapé de TSAS (p.84), que o layout imprime na mesma linha da
 * última referência, entrava grudado nela. Não é ancorado no fim porque as
 * duas linhas do brasão aparecem concatenadas em algumas páginas.
 */
const RUIDO =
  /^\s*(PROJETO PEDAGÓGICO|BACHARELADO EM SISTEMAS|MINISTÉRIO DA EDUCAÇÃO|INSTITUTO FEDERAL|PRÓ-REITORIA|\d+\s*$)/i;

/**
 * Junta as linhas de uma lista em referências.
 *
 * Uma referência quebra em até quatro linhas no PDF e a continuação vem
 * indentada. As fichas usam dois formatos, e o parser precisa dos dois:
 *
 * - com bullet (a maioria): o bullet abre uma referência nova, o resto é
 *   continuação.
 * - sem bullet nenhum (EDFI p.107, TSAS p.84): aí o que abre a referência é a
 *   indentação — a primeira linha começa mais à esquerda que a continuação.
 *   Como fallback, a linha que começa com o padrão de sobrenome em caixa alta
 *   seguido de vírgula também abre, que é a forma ABNT de toda ficha.
 *
 * O `-` que TOSI (p.82) imprime no lugar da lista cai fora pelo filtro de
 * tamanho no fim: é uma referência de um caractere.
 */
function referencias(linhas) {
  const uteis = linhas.filter(l => l.trim() && !RUIDO.test(l.trim()));
  if (!uteis.length) return [];

  const temBullet = uteis.some(l => /^\s*[●•▪◦]/.test(l));

  // sem bullets, a indentação mínima do bloco é a coluna onde as referências abrem
  const recuoBase = temBullet ? 0 : Math.min(...uteis.map(l => l.match(/^\s*/)[0].length));

  const out = [];
  for (const bruta of uteis) {
    const linha = bruta.trim();
    const recuo = bruta.match(/^\s*/)[0].length;

    const bullet = linha.match(/^[●•▪◦]\s*(.+)$/);
    if (bullet) {
      out.push(bullet[1].trim());
      continue;
    }

    if (temBullet) {
      // dentro de uma lista com bullets, linha sem bullet é continuação
      if (out.length) out[out.length - 1] += ` ${linha}`;
      continue;
    }

    // Sem bullets a indentação não serve sozinha: em TSAS (p.84) o bloco é todo
    // rente à esquerda, continuação inclusive. O que separa uma referência da
    // seguinte é a forma da entrada — ABNT abre com autor, e o resto é
    // continuação. As duas condições abaixo são o que sobra de sinal:
    //
    //   AUTOR      SOBRENOME em caixa alta ou Capitalizado seguido de vírgula
    //              ou de ponto, no começo da linha.
    //   ÓRFÃ       a linha anterior terminou sem pontuação de fecho, então a
    //              referência claramente continua, mesmo que esta comece com
    //              algo que pareça autor.
    // Sem bullets, o que abre uma referência é a indentação: a primeira linha
    // fica no recuo base e a continuação vem recuada. Vale para EDFI (p.107),
    // a única ficha sem bullet que o parser resolve — TSAS (p.84), onde o
    // bloco é todo rente à esquerda e a indentação não diz nada, está em
    // TRANSCRITAS.
    const recuada = recuo > recuoBase + 1;
    if (!out.length || !recuada) out.push(linha);
    else out[out.length - 1] += ` ${linha}`;
  }

  return out
    .map(r =>
      r
        .replace(/\s+/g, ' ')
        // o brasão às vezes cai na mesma linha da última referência
        .replace(
          /\s*(INSTITUTO FEDERAL DE ALAGOAS|MINISTÉRIO DA EDUCAÇÃO|PRÓ-REITORIA DE ENSINO|PROJETO PEDAGÓGICO DO CURSO.*|BACHARELADO EM SISTEMAS DE INFORMAÇÃO)\s*/gi,
          ' ',
        )
        // o PDF fecha várias referências com ".." ou ". ."
        .replace(/\s*\.\s*\.\s*$/, '.')
        .replace(/\s+/g, ' ')
        .trim(),
    )
    .filter(r => r.length > 8 && !E_ROTULO.test(r))
    // O PPC repete a mesma obra dentro de um bloco em três fichas (INTW, INGT
    // e DEVO). É defeito do documento e não informa nada ao aluno, então cai
    // aqui — mantendo a ordem da primeira aparição.
    .filter((r, i, todas) => todas.indexOf(r) === i);
}

/**
 * Extrai as linhas cruas de um bloco que começa no rótulo `titulo`.
 *
 * O bullet opcional antes do rótulo é o caso de IDCO (p.112), que digitou o
 * cabeçalho da complementar como item da lista.
 */
function linhasDoBloco(linhas, titulo) {
  const re = new RegExp(`^[●•▪◦]?\\s*${titulo}\\s*$`, 'i');
  const inicio = linhas.findIndex(l => re.test(l.trim()));
  if (inicio === -1) return null;

  const corpo = [];
  for (let i = inicio + 1; i < linhas.length; i++) {
    if (FIM_DE_BLOCO.test(linhas[i].trim())) break;
    corpo.push(linhas[i]);
  }
  return corpo;
}

function bloco(linhas, titulo) {
  const corpo = linhasDoBloco(linhas, titulo);
  return corpo ? referencias(corpo) : [];
}

/**
 * Parte um bloco de bibliografia em duas listas na linha em branco.
 *
 * Quatro fichas (ALPG p.50, INTW p.51, LNPG p.58, PDSW p.78) esquecem de
 * imprimir o rótulo "Bibliografia Complementar": as duas listas ficam sob
 * "Bibliografia Básica", separadas apenas por uma linha vazia. Sem esta função
 * as duas se somariam numa básica de oito itens, o que contradiz o padrão de
 * três básicas e cinco complementares que o resto do PPC segue.
 *
 * Só parte quando a divisão é convincente: um único intervalo em branco com
 * bullets dos dois lados. O intervalo pode ter mais de uma linha vazia (em
 * PDSW, p.78, são duas), então linhas vazias consecutivas contam como um
 * intervalo só — de outro modo a ficha era rejeitada por "duas divisões".
 * Fichas com mais de um intervalo assim ficam intactas: ali a divisão seria
 * chute.
 */
function parteNaLinhaVazia(corpo) {
  const eBullet = l => /^\s*[●•▪◦]/.test(l);

  const intervalos = [];
  for (let i = 0; i < corpo.length; i++) {
    if (corpo[i].trim()) continue;
    let fim = i;
    while (fim + 1 < corpo.length && !corpo[fim + 1].trim()) fim++;
    if (corpo.slice(0, i).some(eBullet) && corpo.slice(fim + 1).some(eBullet)) {
      intervalos.push({ inicio: i, fim });
    }
    i = fim;
  }
  if (intervalos.length !== 1) return null;

  const { inicio, fim } = intervalos[0];
  return [referencias(corpo.slice(0, inicio)), referencias(corpo.slice(fim + 1))];
}

/**
 * Fichas transcritas à mão, que substituem o resultado do parser.
 *
 * Só TSAS (p.84) precisa disso, e a razão é que ali a fronteira entre duas
 * referências é ambígua até para leitura humana do texto extraído: o bloco não
 * tem bullet nenhum, é todo rente à esquerda, e várias entradas terminam em
 * URL — cujo ponto final é indistinguível do ponto que fecha a referência. Três
 * páginas do PPC não têm bullet (TOSI, EDFI e esta); as outras duas o parser
 * resolve, então tunar mais o heurístico seria complicar o código por uma
 * página só. Transcrever é mais curto e é exato.
 *
 * Duas coisas vêm do PPC como estão e NÃO são para consertar aqui:
 * a entrada da GARCIA/GALVÃO FILHO está truncada em "São Paulo:" no original,
 * e a da SARTORETTO tem a URL quebrada com espaços ("http://www. assistiva.
 * com. br"). Corrigir seria inventar dado que o documento oficial não traz.
 */
const TRANSCRITAS = {
  TSAS: {
    bibliografiaBasica: [
      'BERSCH, R. Introdução a Tecnologia Assistiva. Porto Alegre, CEDI. Disponível em http://soplaar.com/material_individual/pdf/144S832O4P507L538A401R111.pdf.',
      'COSTA, A. B. Tecnologia social e políticas públicas. São Paulo: Instituto Pólis; Brasília.',
      'GARCIA, J. C. D.; GALVÃO FILHO, T. A. Pesquisa Nacional de Tecnologia Assistiva. São Paulo:',
      'SONZA, A. P. Acessibilidade e tecnologia assistiva: pensando a inclusão sociodigital de PNEs. 2013. Disponível em http://www.bengalalegal.com/blog/?p=2526.',
    ],
    bibliografiaComplementar: [
      'Brasil. Subsecretaria Nacional de Promoção dos Direitos da Pessoa com Deficiência. Comitê de Ajudas Técnicas. Tecnologia Assistiva. Brasília: CORDE, 2009. Disponível em http://www.pessoacomdeficiencia.gov.br/app/sites/default/files/publicacoes/livro-tecnologiaassistiva.pdf.',
      'Portal Nacional de Tecnologia Assistiva - http://www.assistiva.org.br/.',
      'Instituto de Tecnologia Social. Tecnologia Social: experiências inovadoras em extensão universitária. São Paulo: ITS BRASIL/MCTI-SECIS, 2012. Disponível em http://itsbrasil.org.br/publicacoes/%5Bterm-raw%5D/tecnologia-social-experiencias-inovadoras-emextensao-universitaria.',
      'Tecnologias Sociais: experiências exemplares. São Paulo: ITS BRASIL/MCTI-SECIS, 2012. Disponível em http://itsbrasil.org.br/publicacoes/%5Bterm-raw%5D/tecnologia-social-experienciasexemplares-i',
      'GALVÃO FILHO, Teófilo Alves. Tecnologia assistiva para uma escola inclusiva: apropriação, demanda e perspectivas. 2009.',
      'SARTORETTO, Mara L.; BERSCH, Rita. O que é tecnologia assistiva. Recuperado de http://www. assistiva. com. br/tassistiva. html[Links], 2014.',
    ],
  },
};

// ─────────────────────────────────────────────── uma ficha por página
const paginas = texto.split('\f');
const fichas = [];
const semCodigo = [];

paginas.forEach((pagina, i) => {
  const numero = i + 1;
  const codigo = pagina.match(/Código:\s*([A-Z][A-Z0-9]*(?:\s+\d+)?)/);
  if (!codigo) return;

  // "PINT 1" na página do Projeto Integrador: o número faz parte do código impresso
  const cod = codigo[1].replace(/\s+/g, ' ').trim();
  const linhas = pagina.split('\n');

  let basica = bloco(linhas, 'Bibliografia\\s+Básica');
  let complementar = bloco(linhas, 'Bibliografia\\s+Complementar');
  let semRotulo = false;
  let transcrita = false;
  let complementarSemRotulo = false;

  // ficha que esqueceu o rótulo da complementar: as duas listas estão sob a básica
  if (basica.length && !complementar.length) {
    const partido = parteNaLinhaVazia(linhasDoBloco(linhas, 'Bibliografia\\s+Básica') ?? []);
    if (partido && partido[0].length && partido[1].length) {
      [basica, complementar] = partido;
      complementarSemRotulo = true;
    }
  }

  const mao = TRANSCRITAS[cod];
  if (mao) {
    basica = mao.bibliografiaBasica;
    complementar = mao.bibliografiaComplementar;
    transcrita = true;
  }

  // A ficha do DevOps (p.116) não imprime nenhum dos dois rótulos: as listas
  // vêm direto depois da ementa. Sem os rótulos não há como saber o que é
  // básica e o que é complementar, então tudo entra como básica e o campo
  // `bibliografiaSemRotulo` avisa quem consome.
  if (!basica.length && !complementar.length) {
    const ementa = linhas.findIndex(l => /^\s*Ementa\s*$/i.test(l));
    if (ementa !== -1) {
      const soltas = referencias(linhas.slice(ementa + 1).filter(l => /^\s*[●•▪◦]/.test(l) || /^\s{4,}\S/.test(l)));
      if (soltas.length) {
        basica = soltas;
        semRotulo = true;
      }
    }
  }

  if (!basica.length && !complementar.length) {
    semCodigo.push(`p.${numero} ${cod}: nenhuma referência encontrada`);
    return;
  }

  const nome = pagina.match(/Componente\s+Curricular:\s*(.+?)\s{2,}(?:Código|$)/);

  fichas.push({
    codigo_ppc: cod,
    // o nome aqui é só para o revisor conferir a página; quem consome usa a grade
    nome: nome ? nome[1].replace(/\s+/g, ' ').trim() : '',
    pagina: numero,
    bibliografiaBasica: basica,
    bibliografiaComplementar: complementar,
    // true quando a ficha não separa básica de complementar (só DEVO, p.116)
    ...(semRotulo ? { bibliografiaSemRotulo: true } : {}),
    // true quando a ficha foi transcrita à mão (só TSAS, p.84)
    ...(transcrita ? { transcritaAMao: true } : {}),
    // true quando o rótulo da complementar faltava e a divisão veio da linha vazia
    ...(complementarSemRotulo ? { complementarInferida: true } : {}),
  });
});

writeFileSync(
  SAIDA,
  `${JSON.stringify(
    {
      versao: 'v1',
      fonte: 'Ementário do PPC do BSI/IFAL, seção 18 — extraído de .docs/bacharelado-em-sistemas-de-informacao.pdf',
      gerado: 'scripts/ppc/extrair-bibliografia.mjs — não editar à mão',
      total: fichas.length,
      fichas,
    },
    null,
    2,
  )}\n`,
);

const refs = fichas.reduce((n, f) => n + f.bibliografiaBasica.length + f.bibliografiaComplementar.length, 0);
console.log(`${fichas.length} fichas com bibliografia, ${refs} referências no total`);
console.log(`  sem complementar: ${fichas.filter(f => !f.bibliografiaComplementar.length).length}`);
if (semCodigo.length) {
  console.log(`\nfichas sem nenhuma referência (${semCodigo.length}):`);
  for (const s of semCodigo) console.log(`  - ${s}`);
}

/**
 * Aviso de colagem.
 *
 * Nas fichas sem bullet a fronteira entre duas referências é ambígua, e o
 * parser pode juntar duas numa. Em vez de esconder isso, o script aponta as
 * suspeitas: referência muito longa, ou com dois "Disponível em", que nenhuma
 * entrada ABNT legítima tem. Serve para quem for revisar saber onde olhar.
 */
const suspeitas = [];
for (const f of fichas) {
  for (const [campo, lista] of [
    ['básica', f.bibliografiaBasica],
    ['complementar', f.bibliografiaComplementar],
  ]) {
    for (const r of lista) {
      if (r.length > 320 || (r.match(/Disponível em/gi) || []).length > 1) {
        suspeitas.push(`p.${f.pagina} ${f.codigo_ppc} (${campo}): ${r.slice(0, 70)}…`);
      }
    }
  }
}
if (suspeitas.length) {
  console.log(`\nreferências possivelmente coladas, revisar à mão (${suspeitas.length}):`);
  for (const s of suspeitas) console.log(`  ! ${s}`);
}
