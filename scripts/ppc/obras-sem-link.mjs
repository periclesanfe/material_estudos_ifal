#!/usr/bin/env node
/**
 * obras-sem-link.mjs — lista as obras da bibliografia que ainda não têm link.
 *
 * É a fila de trabalho da curadoria: cada linha é uma obra a pesquisar, na
 * ordem em que vale atacar (quem é citada por mais matérias primeiro, porque
 * um link ali aparece em mais páginas).
 *
 *   npm run ppc:links              # a fila inteira
 *   npm run ppc:links -- --n 20    # só as 20 primeiras
 *   npm run ppc:links -- --json    # para alimentar outro script
 *
 * O que já foi decidido NÃO reaparece: obra com `url` preenchida sai da fila, e
 * obra marcada com `url: null` também — o null é uma decisão registrada ("não
 * existe destino legítimo para esta"), não uma pendência. Por isso a fila
 * encurta de verdade conforme o trabalho anda.
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chaveDaObra } from './chave-obra.mjs';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

const args = process.argv.slice(2);
const comoJson = args.includes('--json');
const limite = (() => {
  const i = args.indexOf('--n');
  return i !== -1 && args[i + 1] ? Number(args[i + 1]) : Infinity;
})();

const { fichas } = JSON.parse(readFileSync(resolve(RAIZ, 'scripts', 'ppc', 'ppc_bibliografia.json'), 'utf8'));
const { links } = JSON.parse(readFileSync(resolve(RAIZ, 'scripts', 'ppc', 'links_bibliografia.json'), 'utf8'));

/** chave -> { texto, materias: Set, bloco } */
const obras = new Map();
for (const f of fichas) {
  for (const [bloco, lista] of [
    ['basica', f.bibliografiaBasica],
    ['complementar', f.bibliografiaComplementar],
  ]) {
    for (const texto of lista) {
      const chave = chaveDaObra(texto);
      const atual = obras.get(chave);
      if (atual) {
        atual.materias.add(f.codigo_ppc);
        // a básica manda: se a obra é básica em alguma matéria, é prioridade
        if (bloco === 'basica') atual.bloco = 'basica';
      } else {
        obras.set(chave, { chave, texto, materias: new Set([f.codigo_ppc]), bloco });
      }
    }
  }
}

const pendentes = [...obras.values()]
  .filter(o => !(o.chave in links))
  .sort(
    (a, b) =>
      b.materias.size - a.materias.size ||
      (a.bloco === b.bloco ? 0 : a.bloco === 'basica' ? -1 : 1) ||
      a.texto.localeCompare(b.texto, 'pt-BR'),
  );

const decididas = Object.entries(links);
const comUrl = decididas.filter(([, v]) => v.url).length;

if (comoJson) {
  console.log(
    JSON.stringify(
      pendentes.slice(0, limite).map(o => ({
        chave: o.chave,
        texto: o.texto,
        materias: [...o.materias],
        bloco: o.bloco,
      })),
      null,
      2,
    ),
  );
} else {
  console.log(`obras únicas na bibliografia: ${obras.size}`);
  console.log(`  já decididas: ${decididas.length} (${comUrl} com link, ${decididas.length - comUrl} sem destino legítimo)`);
  console.log(`  pendentes:    ${pendentes.length}`);
  console.log(`\nfila (citações · bloco · obra):`);
  for (const o of pendentes.slice(0, limite)) {
    const n = String(o.materias.size).padStart(2);
    console.log(`  ${n}x  ${o.bloco === 'basica' ? 'B' : 'C'}  ${o.texto.slice(0, 96)}`);
    console.log(`        ${o.chave}`);
  }
  if (pendentes.length > limite) console.log(`\n  … e outras ${pendentes.length - limite}`);
}
