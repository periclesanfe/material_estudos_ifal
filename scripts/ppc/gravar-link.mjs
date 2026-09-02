#!/usr/bin/env node
/**
 * gravar-link.mjs — grava uma decisão de link em links_bibliografia.json.
 *
 * Existe para a chave nunca ser digitada à mão: ela é longa (até 140
 * caracteres), e truncá-la faz o link sumir em silêncio — foi exatamente o erro
 * que aconteceu na primeira rodada, com as onze entradas iniciais. Aqui a chave
 * é derivada da referência, e o script recusa referência que não exista na
 * bibliografia extraída.
 *
 *   node scripts/ppc/gravar-link.mjs --ref "SOMMERVILLE, Ian. …" \
 *     --url https://… --tipo institucional --nota "por que este destino"
 *
 * Para registrar que não existe destino legítimo, omita --url:
 *
 *   node scripts/ppc/gravar-link.mjs --ref "…" --nota "procurei X e Y, nada"
 *
 * Aceita também --lote <arquivo.json>, com uma lista de
 * { ref, url?, tipo?, nota } — é como as rodadas de curadoria gravam vários de
 * uma vez sem repetir o custo de abrir e reescrever o arquivo.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chaveDaObra } from './chave-obra.mjs';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const ARQ_LINKS = resolve(RAIZ, 'scripts', 'ppc', 'links_bibliografia.json');

const TIPOS_VALIDOS = new Set(['livre', 'institucional', 'catalogo', 'compra']);

function arg(nome) {
  const i = process.argv.indexOf(`--${nome}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : undefined;
}

// ─── referências que realmente existem na bibliografia, por chave
const { fichas } = JSON.parse(readFileSync(resolve(RAIZ, 'scripts', 'ppc', 'ppc_bibliografia.json'), 'utf8'));
const existentes = new Map();
for (const f of fichas) {
  for (const texto of [...f.bibliografiaBasica, ...f.bibliografiaComplementar]) {
    const chave = chaveDaObra(texto);
    if (!existentes.has(chave)) existentes.set(chave, { texto, materias: new Set() });
    existentes.get(chave).materias.add(f.codigo_ppc);
  }
}

const arqLinks = JSON.parse(readFileSync(ARQ_LINKS, 'utf8'));

const lote = (() => {
  const caminho = arg('lote');
  if (caminho) return JSON.parse(readFileSync(resolve(caminho), 'utf8'));
  const ref = arg('ref');
  if (!ref) {
    console.error('uso: --ref "<referência>" [--url <url> --tipo <tipo>] --nota "<motivo>"');
    process.exit(1);
  }
  return [{ ref, url: arg('url'), tipo: arg('tipo'), nota: arg('nota') }];
})();

const hoje = new Date().toISOString().slice(0, 10);
let gravados = 0;
const problemas = [];

for (const item of lote) {
  const chave = chaveDaObra(item.ref);
  const existe = existentes.get(chave);

  if (!existe) {
    problemas.push(`referência não existe na bibliografia extraída: ${item.ref.slice(0, 70)}…`);
    continue;
  }
  if (item.url && !item.tipo) {
    problemas.push(`falta --tipo para: ${item.ref.slice(0, 70)}…`);
    continue;
  }
  if (item.tipo && !TIPOS_VALIDOS.has(item.tipo)) {
    problemas.push(`tipo inválido "${item.tipo}" (use ${[...TIPOS_VALIDOS].join(', ')})`);
    continue;
  }
  if (!item.nota) {
    problemas.push(`falta nota para: ${item.ref.slice(0, 70)}…`);
    continue;
  }

  arqLinks.links[chave] = {
    url: item.url ?? null,
    tipo: item.url ? item.tipo : null,
    nota: item.nota,
    conferidoEm: hoje,
  };
  gravados++;
}

if (problemas.length) {
  console.error(`\n${problemas.length} problema(s):`);
  for (const p of problemas) console.error(`  ! ${p}`);
  if (!gravados) process.exit(1);
}

// ordena as chaves para o diff do git ficar legível entre rodadas
arqLinks.links = Object.fromEntries(Object.entries(arqLinks.links).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(ARQ_LINKS, `${JSON.stringify(arqLinks, null, 2)}\n`);

const total = Object.keys(arqLinks.links).length;
const comUrl = Object.values(arqLinks.links).filter(l => l.url).length;
console.log(`gravados: ${gravados} · total decidido: ${total} (${comUrl} com link, ${total - comUrl} sem destino)`);
