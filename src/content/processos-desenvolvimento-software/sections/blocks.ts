// Blocos de dados das seções de Processos de Desenvolvimento de Software.
// O grosso do conteúdo da matéria (capítulos, avaliações, critérios do seminário e
// quiz) já vive em ../data.ts; aqui ficam apenas os blocos que eram declarados
// dentro dos próprios componentes de seção.
// Fonte: livro Engenharia de Software Moderna, de Marco Tulio Valente, materiais
// locais de PDSW e orientações do Prof. Elvys Alves Soares.

import type { PdswConcept } from '../data';

/** Cards de abertura da Visão Geral. */
export const overviewItems: PdswConcept[] = [
  {
    title: 'Roteiro por capítulos',
    description: 'A navegação agora acompanha os dez capítulos do livro-base, com subdivisões internas para os temas mais densos.',
    accent: 'accent',
  },
  {
    title: 'Avaliação sem perder contexto',
    description: 'O mapa de N1 e N2 aparece no início, mas o estudo segue a progressão conceitual do livro.',
    accent: 'accent3',
  },
  {
    title: 'Teoria conectada à prática',
    description: 'Cada capítulo liga conceitos a decisões de projeto, atividades locais, quiz e exemplos de implementação.',
    accent: 'accent5',
  },
];

/** Estrutura recomendada para a apresentação do seminário. */
export const seminarFlow = ['Tema', 'Objetivos', 'Prós e contras', 'Demonstração', 'Perguntas', 'Fechamento'];

/** O professor usa "N1 / AV1", "N1 / AV2" e "N2 / AV4"; o rótulo padrão do seletor é "Prova 1/2". */
export const pdswExamLabels = {
  prova1: {
    label: 'N1 / AV1',
    description: 'Capítulos 1 a 4: introdução, processos, requisitos e modelos.',
  },
  prova2: {
    label: 'N1 / AV2',
    description: 'Capítulos 5 a 7: princípios de projeto, padrões e arquitetura.',
  },
  prova4: {
    label: 'N2 / AV4',
    description: 'Capítulos 8 a 10: testes, refactoring e DevOps.',
  },
};
