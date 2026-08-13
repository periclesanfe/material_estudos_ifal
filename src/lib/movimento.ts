import type { Transition, Variants } from 'motion/react';

/**
 * Vocabulário de movimento do projeto.
 *
 * Uma decisão governa o arquivo: o movimento aqui é MECÂNICO, não elástico. Não
 * há mola, não há salto, não há escala que estufa. A referência é composição
 * tipográfica sendo revelada, e não elemento de interface pulando na tela, o que
 * é o tique visual mais comum de aplicação gerada às pressas.
 *
 * Na prática: curva com saída rápida e chegada calma, deslocamento curto (nunca
 * mais de 10 px), e duração entre 160 e 320 ms. Movimento que se nota é
 * movimento errado.
 *
 * Tudo aqui respeita `prefers-reduced-motion` via `useMovimentoReduzido`.
 */

/** Curva padrão: arranca rápido, chega devagar, sem passar do ponto. */
export const CURVA = [0.22, 0.61, 0.36, 1] as const;

/** Curva de saída: um pouco mais seca, porque sair não precisa de graça. */
export const CURVA_SAIDA = [0.4, 0, 1, 1] as const;

export const RAPIDO: Transition = { duration: 0.18, ease: CURVA };
export const PADRAO: Transition = { duration: 0.26, ease: CURVA };
export const CALMO: Transition = { duration: 0.34, ease: CURVA };

/**
 * Transição de layout compartilhado, usada no indicador que desliza entre abas.
 * É o único lugar com mola, e de propósito: o indicador acompanha o dedo, e
 * curva pura nesse caso parece travada.
 */
export const DESLIZE: Transition = { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 };

/** Página entrando e saindo. O deslocamento é mínimo: quem lê não quer voo. */
export const pagina: Variants = {
  inicio: { opacity: 0, y: 6 },
  visivel: { opacity: 1, y: 0, transition: PADRAO },
  saida: { opacity: 0, y: -4, transition: { duration: 0.14, ease: CURVA_SAIDA } },
};

/**
 * Contêiner que revela os filhos em cascata. O atraso entre irmãos é curto:
 * cascata longa vira espera, e o aluno já viu essa página vinte vezes.
 */
export const cascata: Variants = {
  inicio: {},
  visivel: {
    transition: { staggerChildren: 0.035, delayChildren: 0.02 },
  },
  saida: {},
};

/** Item da cascata. */
export const item: Variants = {
  inicio: { opacity: 0, y: 8 },
  visivel: { opacity: 1, y: 0, transition: PADRAO },
  saida: { opacity: 0, transition: { duration: 0.12 } },
};

/**
 * Revelação por máscara vertical: o bloco aparece como texto sendo composto,
 * de cima para baixo, em vez de surgir inteiro. Usado nos títulos.
 */
export const revela: Variants = {
  inicio: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visivel: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.44, ease: CURVA },
  },
  saida: { opacity: 0, transition: { duration: 0.12 } },
};

/** Painel lateral e folha mobile, que entram pela borda. */
export const painel: Variants = {
  inicio: { opacity: 0, x: 12 },
  visivel: { opacity: 1, x: 0, transition: PADRAO },
  saida: { opacity: 0, x: 8, transition: { duration: 0.14, ease: CURVA_SAIDA } },
};

/** Conteúdo que troca no mesmo lugar, como a seção ativa de uma matéria. */
export const troca: Variants = {
  inicio: { opacity: 0, y: 10 },
  visivel: { opacity: 1, y: 0, transition: PADRAO },
  saida: { opacity: 0, y: -6, transition: { duration: 0.13, ease: CURVA_SAIDA } },
};
