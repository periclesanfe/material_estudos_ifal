/**
 * Tipos da taxonomia de aprendizagem do BSI.
 *
 * O dataset é um grafo dirigido acíclico: cada nó é um micro-tópico (um conceito
 * ensinável) e cada aresta é uma dependência de pré-requisito. Ver
 * `src/data/taxonomia/README.md` para o formato e a procedência dos dados.
 */

/** Natureza do conhecimento que o tópico exige. */
export type TipoTopico =
  | 'CONCEITUAL'
  | 'PROCEDIMENTAL'
  | 'REPRESENTACIONAL'
  | 'LINGUAGEM'
  | 'META';

/**
 * `hard`: sem o pré-requisito o tópico é incompreensível.
 * `soft`: ajuda e dá contexto, mas o tópico se sustenta sem ele.
 */
export type ForcaDependencia = 'hard' | 'soft';

/**
 * De onde veio a dependência.
 * `texto`: citação verbatim do material da disciplina (exige o campo `trecho`).
 * `ppc`: ementa oficial ou Quadro 2 da matriz curricular.
 * `inferido`: dependência que qualquer professor da área assinaria.
 */
export type OrigemDependencia = 'texto' | 'ppc' | 'inferido';

/** Dentro da mesma disciplina ou entre disciplinas diferentes. */
export type EscopoDependencia = 'interna' | 'cruzada';

export interface Topico {
  /** Identificador estável, no padrão `mt_<CODIGO>_<nn>`. */
  id: string;
  tipo: TipoTopico;
  /** Código da disciplina, o mesmo de `curriculum.ts`. */
  disciplina: string;
  /** Período do curso. 9 representa optativa. */
  periodo: number;
  /** Agrupador didático dentro da disciplina. */
  unidade: string;
  nome: string;
  descricao: string;
  /** Posição na sequência didática da disciplina. */
  ordem: number;
  /** Fração dos tópicos que dependem deste, direta ou indiretamente. Derivada. */
  centralidade: number;
  /** Critérios observáveis de domínio. */
  evidencia: string[];
  /** Pergunta em linguagem natural que verifica o domínio. */
  checagem: string;
  /** Avaliações em que o tópico é cobrado, quando o professor declarou. */
  avaliacoes: string[];
  /** Trechos da ementa oficial do PPC que cobrem este tópico. */
  ementaPPC: string[];
  /** Arquivo do repositório de onde o tópico foi derivado. */
  fonte: string;
}

export interface Dependencia {
  /** O tópico que depende. */
  topicoId: string;
  /** O tópico que precisa vir antes. */
  prerequisitoId: string;
  forca: ForcaDependencia;
  /** Uma linha explicando por que o tópico não fecha sem o pré-requisito. */
  razao: string;
  origem: OrigemDependencia;
  /** Citação verbatim que sustenta a aresta. Obrigatória quando `origem` é `texto`. */
  trecho: string;
  escopo: EscopoDependencia;
}

export interface DisciplinaTaxonomia {
  /** Código usado no repositório, o mesmo de `curriculum.ts`. */
  codigo: string;
  /** Código na ficha do PPC, que às vezes difere do usado no repositório. */
  codigoPPC: string;
  nome: string;
  periodo: number;
  eixo: string | null;
  slug: string | null;
  /** Cor da disciplina no grafo. */
  cor: string;
  /** Ementa oficial do PPC. */
  ementa: string;
  /** A ementa quebrada em unidades. */
  unidadesEmenta: string[];
}

export interface ArquivoTopicos {
  versao: string;
  totalTopicos: number;
  topicos: Topico[];
}

export interface ArquivoDependencias {
  versao: string;
  totalArestas: number;
  dependencias: Dependencia[];
}

export interface ArquivoDisciplinas {
  versao: string;
  totalDisciplinas: number;
  fonte: string;
  disciplinas: DisciplinaTaxonomia[];
}
