#!/usr/bin/env node
/**
 * validar.mjs — checagem de integridade da taxonomia, sem nenhuma dependência.
 *
 * Verifica estrutura, integridade referencial (toda ponta de aresta resolve),
 * aciclicidade, coerência de período, contagens declaradas e os checksums do manifest.
 * Sai com código diferente de zero em qualquer falha.
 *
 *   npm run taxonomia:validar
 *
 * No molde do scripts/validate.mjs do dataset os-taxonomy da Marble (ODbL 1.0).
 */

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'data', 'taxonomia');
const le = n => JSON.parse(readFileSync(resolve(DIR, n), 'utf8'));
const bytes = n => readFileSync(resolve(DIR, n));

const erros = [];
const avisos = [];
const exige = (cond, msg) => { if (!cond) erros.push(msg); };
const alerta = (cond, msg) => { if (!cond) avisos.push(msg); };

const T = le('topicos.json');
const D = le('dependencias.json');
const S = le('disciplinas.json');
const M = le('manifest.json');

// ── contagens declaradas batem com a realidade
exige(T.totalTopicos === T.topicos.length, `topicos: totalTopicos ${T.totalTopicos} != ${T.topicos.length}`);
exige(D.totalArestas === D.dependencias.length, `dependencias: totalArestas ${D.totalArestas} != ${D.dependencias.length}`);
exige(S.totalDisciplinas === S.disciplinas.length, `disciplinas: totalDisciplinas != length`);
exige(M.contagens.topicos === T.topicos.length, `manifest: contagem de tópicos divergente`);
exige(M.contagens.dependencias === D.dependencias.length, `manifest: contagem de dependências divergente`);

// ── tópicos
const TIPOS = new Set(['CONCEITUAL', 'PROCEDIMENTAL', 'REPRESENTACIONAL', 'LINGUAGEM', 'META']);
const codigos = new Set(S.disciplinas.map(d => d.codigo));
const ids = new Set();
const porId = new Map();

for (const t of T.topicos) {
  exige(/^mt_[A-Z]{3,5}_\d{2,3}$/.test(t.id), `id fora do padrão mt_<COD>_<nn>: ${t.id}`);
  exige(!ids.has(t.id), `id duplicado: ${t.id}`);
  ids.add(t.id);
  porId.set(t.id, t);
  exige(TIPOS.has(t.tipo), `${t.id}: tipo inválido "${t.tipo}"`);
  exige(codigos.has(t.disciplina), `${t.id}: disciplina "${t.disciplina}" não está em disciplinas.json`);
  exige(typeof t.nome === 'string' && t.nome.length > 2, `${t.id}: nome vazio`);
  exige(typeof t.descricao === 'string' && t.descricao.length > 10, `${t.id}: descrição vazia ou curta demais`);
  exige(Number.isInteger(t.periodo) && t.periodo >= 1 && t.periodo <= 9, `${t.id}: período inválido ${t.periodo}`);
  exige(Array.isArray(t.evidencia), `${t.id}: evidencia não é array`);
  alerta(t.evidencia.length > 0, `${t.id}: sem nenhum critério de evidência`);
  alerta(typeof t.checagem === 'string' && t.checagem.length > 10, `${t.id}: sem pergunta de checagem`);
  // o id precisa carregar o código da própria disciplina
  exige(t.id.startsWith(`mt_${t.disciplina}_`), `${t.id}: prefixo do id não bate com a disciplina ${t.disciplina}`);
  // regra de escrita do projeto: nada de travessão em texto de interface
  for (const [campo, valor] of Object.entries({ nome: t.nome, descricao: t.descricao, checagem: t.checagem })) {
    exige(!/[—–]/.test(String(valor || '')), `${t.id}: travessão proibido no campo ${campo}`);
  }
}

// ── arestas
const FORCAS = new Set(['hard', 'soft']);
const ORIGENS = new Set(['texto', 'ppc', 'inferido']);
const chaves = new Set();

for (const a of D.dependencias) {
  const k = `${a.topicoId}|${a.prerequisitoId}`;
  exige(!chaves.has(k), `aresta duplicada: ${k}`);
  chaves.add(k);
  exige(ids.has(a.topicoId), `aresta com topicoId inexistente: ${a.topicoId}`);
  exige(ids.has(a.prerequisitoId), `aresta com prerequisitoId inexistente: ${a.prerequisitoId}`);
  exige(a.topicoId !== a.prerequisitoId, `auto-aresta: ${a.topicoId}`);
  exige(FORCAS.has(a.forca), `${k}: força inválida "${a.forca}"`);
  exige(ORIGENS.has(a.origem), `${k}: origem inválida "${a.origem}"`);
  exige(typeof a.razao === 'string' && a.razao.length > 10, `${k}: razão ausente ou curta demais`);
  // a regra que impede o defeito clássico de taxonomia gerada por máquina
  exige(a.origem !== 'texto' || (a.trecho && a.trecho.length > 10),
        `${k}: origem "texto" sem trecho de prova`);

  const t = porId.get(a.topicoId), p = porId.get(a.prerequisitoId);
  if (t && p) {
    if (t.disciplina === p.disciplina) {
      exige(p.ordem < t.ordem, `${k}: dentro de ${t.disciplina} o pré-requisito tem ordem ${p.ordem} >= ${t.ordem}`);
    } else if (t.periodo !== 9 && p.periodo !== 9) {
      exige(p.periodo <= t.periodo, `${k}: pré-requisito do ${p.periodo}º período trava tópico do ${t.periodo}º`);
    } else {
      exige(t.periodo === 9, `${k}: optativa não pode ser pré-requisito de obrigatória`);
    }
  }
}

// ── aciclicidade
{
  const iDe = new Map(T.topicos.map((t, i) => [t.id, i]));
  const adj = T.topicos.map(() => []);
  for (const a of D.dependencias) {
    if (iDe.has(a.topicoId) && iDe.has(a.prerequisitoId)) adj[iDe.get(a.topicoId)].push(iDe.get(a.prerequisitoId));
  }
  const cor = new Int8Array(T.topicos.length);
  const caminho = [];
  const anda = n => {
    cor[n] = 1; caminho.push(n);
    for (const m of adj[n]) {
      if (cor[m] === 1) {
        erros.push(`ciclo: ${[...caminho.slice(caminho.indexOf(m)), m].map(i => T.topicos[i].id).join(' -> ')}`);
      } else if (cor[m] === 0) anda(m);
    }
    cor[n] = 2; caminho.pop();
  };
  for (let i = 0; i < T.topicos.length; i++) if (cor[i] === 0) anda(i);
}

// ── tópicos órfãos: nem dependem nem são dependidos
{
  const tocados = new Set();
  for (const a of D.dependencias) { tocados.add(a.topicoId); tocados.add(a.prerequisitoId); }
  const orfaos = T.topicos.filter(t => !tocados.has(t.id));
  alerta(orfaos.length === 0, `${orfaos.length} tópicos sem nenhuma aresta: ${orfaos.slice(0, 6).map(t => t.id).join(', ')}`);
}

// ── checksums do manifest
for (const [nome, decl] of Object.entries(M.arquivos || {})) {
  const b = bytes(nome);
  exige(b.length === decl.bytes, `${nome}: ${b.length} bytes, manifest diz ${decl.bytes}`);
  const sha = createHash('sha256').update(b).digest('hex');
  exige(sha === decl.sha256, `${nome}: sha256 divergente do manifest`);
}

// ── relatório
if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s):`);
  for (const a of avisos.slice(0, 20)) console.log(`  ~ ${a}`);
  if (avisos.length > 20) console.log(`  ~ ...e mais ${avisos.length - 20}`);
}

if (erros.length) {
  console.error(`\n${erros.length} erro(s):`);
  for (const e of erros.slice(0, 40)) console.error(`  x ${e}`);
  if (erros.length > 40) console.error(`  x ...e mais ${erros.length - 40}`);
  process.exit(1);
}

const duras = D.dependencias.filter(a => a.forca === 'hard').length;
console.log(`\nvalido: ${T.topicos.length} topicos, ${D.dependencias.length} dependencias (${duras} hard), ${S.disciplinas.length} disciplinas.`);
console.log('integridade referencial, aciclicidade, coerencia de periodo e checksums: OK\n');
