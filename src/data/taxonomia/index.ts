/**
 * Acesso à taxonomia de aprendizagem do BSI.
 *
 * Os JSON são carregados uma vez e os índices derivados são construídos na
 * primeira consulta, então importar este módulo é barato: quem só quer saber se
 * uma disciplina tem taxonomia não paga o custo de montar o grafo inteiro.
 */

import dependenciasJson from './dependencias.json';
import disciplinasJson from './disciplinas.json';
import topicosJson from './topicos.json';
import type {
  ArquivoDependencias,
  ArquivoDisciplinas,
  ArquivoTopicos,
  Dependencia,
  DisciplinaTaxonomia,
  Topico,
} from './tipos';

export type * from './tipos';

export const topicos: Topico[] = (topicosJson as ArquivoTopicos).topicos;
export const dependencias: Dependencia[] = (dependenciasJson as ArquivoDependencias).dependencias;
export const disciplinasTaxonomia: DisciplinaTaxonomia[] = (disciplinasJson as ArquivoDisciplinas).disciplinas;

/** Índices construídos sob demanda e memorizados. */
interface Indices {
  porId: Map<string, Topico>;
  porDisciplina: Map<string, Topico[]>;
  /** id do tópico -> pré-requisitos diretos. */
  prerequisitos: Map<string, Dependencia[]>;
  /** id do tópico -> tópicos que dependem dele diretamente. */
  desbloqueia: Map<string, Dependencia[]>;
  disciplinaPorCodigo: Map<string, DisciplinaTaxonomia>;
}

let cache: Indices | null = null;

function indices(): Indices {
  if (cache) return cache;

  const porId = new Map<string, Topico>();
  const porDisciplina = new Map<string, Topico[]>();
  for (const t of topicos) {
    porId.set(t.id, t);
    const lista = porDisciplina.get(t.disciplina);
    if (lista) lista.push(t);
    else porDisciplina.set(t.disciplina, [t]);
  }
  for (const lista of porDisciplina.values()) lista.sort((a, b) => a.ordem - b.ordem);

  const prerequisitos = new Map<string, Dependencia[]>();
  const desbloqueia = new Map<string, Dependencia[]>();
  for (const d of dependencias) {
    const pre = prerequisitos.get(d.topicoId);
    if (pre) pre.push(d);
    else prerequisitos.set(d.topicoId, [d]);

    const des = desbloqueia.get(d.prerequisitoId);
    if (des) des.push(d);
    else desbloqueia.set(d.prerequisitoId, [d]);
  }

  cache = {
    porId,
    porDisciplina,
    prerequisitos,
    desbloqueia,
    disciplinaPorCodigo: new Map(disciplinasTaxonomia.map(d => [d.codigo, d])),
  };
  return cache;
}

export function getTopico(id: string): Topico | undefined {
  return indices().porId.get(id);
}

/** Tópicos de uma disciplina, na ordem da sequência didática. */
export function getTopicosPorDisciplina(codigo: string): Topico[] {
  return indices().porDisciplina.get(codigo) ?? [];
}

export function temTaxonomia(codigo: string): boolean {
  return indices().porDisciplina.has(codigo);
}

export function getDisciplinaTaxonomia(codigo: string): DisciplinaTaxonomia | undefined {
  return indices().disciplinaPorCodigo.get(codigo);
}

/** Pré-requisitos diretos de um tópico. */
export function getPrerequisitos(id: string): Dependencia[] {
  return indices().prerequisitos.get(id) ?? [];
}

/** Tópicos que dependem diretamente deste. */
export function getDesbloqueia(id: string): Dependencia[] {
  return indices().desbloqueia.get(id) ?? [];
}

/**
 * Fecho transitivo dos pré-requisitos: tudo que precisa ser aprendido antes,
 * em qualquer profundidade. O próprio tópico não entra no resultado.
 *
 * O grafo é acíclico (o validador garante), mas a travessia carrega um conjunto
 * de visitados de qualquer forma: dado corrompido não deve travar a interface.
 */
export function getTrilha(id: string): Topico[] {
  const { porId, prerequisitos } = indices();
  const vistos = new Set<string>();
  const fila = [id];

  while (fila.length) {
    const atual = fila.pop() as string;
    for (const d of prerequisitos.get(atual) ?? []) {
      if (!vistos.has(d.prerequisitoId)) {
        vistos.add(d.prerequisitoId);
        fila.push(d.prerequisitoId);
      }
    }
  }

  const profundidade = new Map<string, number>();
  const calcula = (no: string, guarda: Set<string>): number => {
    const memo = profundidade.get(no);
    if (memo !== undefined) return memo;
    if (guarda.has(no)) return 0;
    guarda.add(no);
    let maior = 0;
    for (const d of prerequisitos.get(no) ?? []) {
      if (!vistos.has(d.prerequisitoId)) continue;
      const v = 1 + calcula(d.prerequisitoId, guarda);
      if (v > maior) maior = v;
    }
    guarda.delete(no);
    profundidade.set(no, maior);
    return maior;
  };

  return [...vistos]
    .map(v => porId.get(v))
    .filter((t): t is Topico => Boolean(t))
    .sort((a, b) => {
      const pa = calcula(a.id, new Set());
      const pb = calcula(b.id, new Set());
      // menor profundidade primeiro: a trilha lida de cima para baixo é a ordem de estudo
      return pa - pb || a.periodo - b.periodo || a.ordem - b.ordem;
    });
}

/**
 * Quantos tópicos dependem deste, direta ou indiretamente. É a medida de
 * "o quanto este conceito trava o curso".
 */
export function contaDesbloqueados(id: string): number {
  const { desbloqueia } = indices();
  const vistos = new Set<string>();
  const fila = [id];
  while (fila.length) {
    const atual = fila.pop() as string;
    for (const d of desbloqueia.get(atual) ?? []) {
      if (!vistos.has(d.topicoId)) {
        vistos.add(d.topicoId);
        fila.push(d.topicoId);
      }
    }
  }
  return vistos.size;
}

/** Os tópicos mais centrais do curso, do que trava mais para o que trava menos. */
export function getMaisCentrais(limite = 10): Topico[] {
  return [...topicos].sort((a, b) => b.centralidade - a.centralidade).slice(0, limite);
}
