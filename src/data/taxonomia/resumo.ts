/**
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
  FUSI: {
    conceitos: 45,
    dependenciasInternas: 53,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Dado, processo e informação",
  },
  ALPG: {
    conceitos: 45,
    dependenciasInternas: 72,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Modelo entrada, processamento e saída",
  },
  INTW: {
    conceitos: 45,
    dependenciasInternas: 70,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Internet e Web não são a mesma coisa",
  },
  LPGM: {
    conceitos: 60,
    dependenciasInternas: 72,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Variável, identificador e atribuição",
  },
  ESTD: {
    conceitos: 60,
    dependenciasInternas: 98,
    dependenciasDeFora: 14,
    conceitoMaisCentral: "Tipos primitivos e tipagem dinâmica",
  },
  METC: {
    conceitos: 45,
    dependenciasInternas: 34,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Resumo e resenha",
  },
  APBD: {
    conceitos: 60,
    dependenciasInternas: 76,
    dependenciasDeFora: 10,
    conceitoMaisCentral: "Constraints de integridade",
  },
  TABD: {
    conceitos: 45,
    dependenciasInternas: 65,
    dependenciasDeFora: 3,
    conceitoMaisCentral: "Business Intelligence: definicao e origem",
  },
  PDSW: {
    conceitos: 45,
    dependenciasInternas: 72,
    dependenciasDeFora: 3,
    conceitoMaisCentral: "Natureza do software",
  },
  EMPD: {
    conceitos: 45,
    dependenciasInternas: 64,
    dependenciasDeFora: 0,
    conceitoMaisCentral: "Empreender é explorar oportunidade sob incerteza",
  },
  CORG: {
    conceitos: 60,
    dependenciasInternas: 71,
    dependenciasDeFora: 2,
    conceitoMaisCentral: "Definição de comportamento organizacional",
  },
  MKCE: {
    conceitos: 42,
    dependenciasInternas: 46,
    dependenciasDeFora: 3,
    conceitoMaisCentral: "Definição de marketing",
  },
};

export function getResumoTaxonomia(codigo: string): ResumoDisciplina | undefined {
  return resumoPorDisciplina[codigo];
}
