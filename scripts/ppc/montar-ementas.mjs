#!/usr/bin/env node
/**
 * montar-ementas.mjs — gera o módulo de ementas oficiais consumido pelas páginas de matéria.
 *
 * A fonte de verdade é scripts/taxonomia/ppc_fichas.json, a extração das 67 fichas
 * do ementário do PPC (seção 18, páginas 49 a 116). Este script casa cada ficha
 * com a linha correspondente de src/data/curriculum.ts e escreve um único JSON
 * chaveado pelo código LOCAL da grade, que é o que as páginas já passam.
 *
 *   npm run ppc:montar
 *
 * Entradas
 *   scripts/taxonomia/ppc_fichas.json   ementas extraídas do PPC
 *   scripts/ppc/ppc_bibliografia.json   bibliografia das fichas (npm run ppc:bibliografia)
 *   src/data/curriculum.ts              código local, nome, período e carga de cada matéria
 *
 * Saída
 *   src/data/ppc/ementas.json
 *
 * Por que um passo de geração e não leitura direta do JSON de fichas: as fichas
 * vêm do extrator e trazem nome truncado pela quebra de linha do PDF
 * ("Fundamentos de Sistemas de"), período nulo nas optativas e três nomes
 * vazios. Resolver isso em tempo de execução, em toda página de matéria, seria
 * pagar repetidamente por um problema que se resolve uma vez aqui.
 */

import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SAIDA = resolve(RAIZ, 'src', 'data', 'ppc');

/**
 * Código local da grade -> código oficial do ementário do PPC.
 *
 * Só entram aqui os divergentes. Quem não está no mapa usa o próprio código,
 * que já é o oficial. A tabela é a da auditoria em .docs/AUDITORIA-GRADE-PPC.md,
 * onde cada linha foi confirmada por nome, período e carga horária na ficha.
 *
 * Não corrija isto mexendo em curriculum.ts: `code` lá é exibido nos cards e nos
 * cabeçalhos das matérias publicadas, e trocá-lo mudaria a interface sem que a
 * auditoria tenha decidido isso.
 */
const CODIGO_PPC = {
  FUSI: 'FNSI',
  FGEO: 'FNGO',
  AOCP: 'ARQC',
  LPGM: 'LNPG',
  SORG: 'SCOG',
  ETAP: 'ESTA',
  FDBD: 'FNBD',
  IHCC: 'INHC',
  FRDC: 'FNRC',
  POOB: 'PROO',
  GVTI: 'GOTI',
  PGWB: 'PWEB',
  GPJT: 'GEPJ',
  PISI: 'PJSI',
  GSEI: 'GESI',
  LSOP: 'LSOR',
  ETSO: 'ETCA',
  // A grade usa GPTI para Gestão de Pessoas em TI e GCPT para Gerência de Redes;
  // ambos já são os códigos das fichas, então não precisam de tradução.
};

/**
 * O PPC imprime dois `PINT`: Projeto Integrador do 5º período (p. 72, impresso
 * "PINT 1") e Propriedade Intelectual optativa (p. 103). A extração deduplica
 * por chave e mantém só a segunda, então o Projeto Integrador do 5º período
 * fica sem ficha e é resolvido pelo id, não pelo código.
 */
const POR_ID = {
  pint: null, // Projeto Integrador (5º): ficha perdida na deduplicação, ver auditoria
  prtint: 'PINT', // Propriedade Intelectual (optativa)
};

// ─────────────────────────────────────────────── grade curricular do repo
const curriculo = (() => {
  const src = readFileSync(resolve(RAIZ, 'src', 'data', 'curriculum.ts'), 'utf8');
  const re =
    /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*code:\s*'([^']+)',\s*period:\s*([^,]+),\s*axis:\s*'([^']+)',\s*hours:\s*(\d+)/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    const per = m[5].trim().replace(/'/g, '');
    out.push({
      id: m[1],
      nome: m[2],
      slug: m[3],
      codigo: m[4],
      periodo: per === 'optativa' ? 'optativa' : Number(per),
      eixo: m[6],
      horas: Number(m[7]),
    });
  }
  return out;
})();

if (!curriculo.length) {
  console.error('não consegui ler nenhuma linha de curriculum.ts — o regex casa com o formato atual?');
  process.exit(1);
}

// ─────────────────────────────────────────────── fichas do ementário
const fichas = JSON.parse(readFileSync(resolve(RAIZ, 'scripts', 'taxonomia', 'ppc_fichas.json'), 'utf8'));
const porCodigoPPC = new Map(fichas.map(f => [f.codigo_ppc, f]));

// ─────────────────────────────────────────────── bibliografia das fichas
// Opcional: se o arquivo não existe, as ementas saem sem bibliografia em vez de
// falhar, porque a extração depende do pdftotext estar instalado.
const bibliografia = (() => {
  try {
    const arq = JSON.parse(readFileSync(resolve(RAIZ, 'scripts', 'ppc', 'ppc_bibliografia.json'), 'utf8'));
    return new Map(arq.fichas.map(f => [f.codigo_ppc, f]));
  } catch {
    console.warn('aviso: ppc_bibliografia.json não encontrado — rode `npm run ppc:bibliografia` primeiro.');
    return new Map();
  }
})();

/**
 * Quebra a ementa nas unidades que o PPC enumera.
 *
 * A quebra é refeita a partir da ementa em vez de aproveitar `unidadesEmenta`
 * do extrator porque aquela lista é inconsistente: em 12 matérias ela deixou
 * duas ou três frases grudadas numa unidade só (APBD, APSI, PGWB), e em outras
 * o PPC separa os tópicos por ponto e vírgula, não por ponto (SINT, GCPT), o
 * que o extrator não tratou. Refazer aqui dá uma lista uniforme.
 *
 * O separador só vale fora de parênteses: as fichas de redes trazem listas
 * pontuadas dentro deles ("TMN do ITU-T, OSI/NM da ISO, SNMP da Internet"), e
 * cortar ali picaria a unidade no meio.
 *
 * Quando a ementa é uma frase única (PJSI, TOSI), sobra uma unidade e o
 * componente a mostra como parágrafo, que é o formato honesto para esse caso.
 */
function unidades(ficha) {
  const ementa = String(ficha.ementa || '').trim();
  if (!ementa) return [];

  const partes = [];
  let atual = '';
  let profundidade = 0;

  for (const ch of ementa) {
    if (ch === '(' || ch === '[') profundidade++;
    else if (ch === ')' || ch === ']') profundidade = Math.max(0, profundidade - 1);

    if ((ch === '.' || ch === ';') && profundidade === 0) {
      partes.push(atual);
      atual = '';
      continue;
    }
    atual += ch;
  }
  partes.push(atual);

  const limpas = partes.map(p => p.trim()).filter(p => p.length > 2);

  // fallback: se a quebra não produziu nada utilizável, fica a lista do extrator
  if (!limpas.length) return (ficha.unidadesEmenta || []).map(u => u.trim()).filter(Boolean);
  return limpas;
}

// ─────────────────────────────────────────────── casamento
const ementas = {};
const semFicha = [];

for (const c of curriculo) {
  const codigoPPC = c.id in POR_ID ? POR_ID[c.id] : (CODIGO_PPC[c.codigo] ?? c.codigo);
  const ficha = codigoPPC ? porCodigoPPC.get(codigoPPC) : undefined;
  const bib = codigoPPC ? bibliografia.get(codigoPPC) : undefined;

  const texto = String(ficha?.ementa || '').trim();
  const basica = bib?.bibliografiaBasica ?? [];
  const complementar = bib?.bibliografiaComplementar ?? [];

  // Entra quem tem ementa OU bibliografia: a ficha do DevOps (p.116) tem as
  // referências mas a ementa saiu vazia da extração, e ainda assim vale
  // mostrar os livros da disciplina.
  if (!texto && !basica.length && !complementar.length) {
    semFicha.push(`${c.codigo} (${c.nome})${ficha ? ' — ficha existe mas está vazia' : ' — sem ficha no ementário'}`);
    continue;
  }

  ementas[c.codigo] = {
    codigoPPC,
    // nome e carga saem da grade, conferida contra o Quadro 2: as fichas trazem
    // nome truncado pela quebra de linha do PDF e três delas vêm vazias.
    nome: c.nome,
    periodo: c.periodo,
    cargaHoraria: c.horas,
    // a ficha é a única fonte do pré-requisito declarado no ementário
    preRequisito: String(ficha?.preRequisito || '').trim() || null,
    ementa: texto,
    unidades: ficha ? unidades(ficha) : [],
    bibliografiaBasica: basica,
    bibliografiaComplementar: complementar,
    // a ficha não separa básica de complementar (só DEVO)
    ...(bib?.bibliografiaSemRotulo ? { bibliografiaSemRotulo: true } : {}),
  };
}

mkdirSync(SAIDA, { recursive: true });
writeFileSync(
  resolve(SAIDA, 'ementas.json'),
  `${JSON.stringify(
    {
      versao: 'v1',
      fonte: 'Ementário do PPC do Bacharelado em Sistemas de Informação — IFAL, seção 18 (p. 49-116)',
      gerado: 'scripts/ppc/montar-ementas.mjs — não editar à mão',
      total: Object.keys(ementas).length,
      ementas,
    },
    null,
    2,
  )}\n`,
);

console.log(`ementas.json: ${Object.keys(ementas).length} de ${curriculo.length} matérias da grade`);
if (semFicha.length) {
  console.log(`\nsem ementa (${semFicha.length}):`);
  for (const s of semFicha) console.log(`  - ${s}`);
}
