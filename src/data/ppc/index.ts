/**
 * Acesso às ementas oficiais do PPC.
 *
 * O JSON é GERADO por scripts/ppc/montar-ementas.mjs a partir da extração das
 * fichas do ementário (scripts/taxonomia/ppc_fichas.json), casada com a grade
 * em src/data/curriculum.ts. Rode `npm run ppc:montar` depois de mexer na
 * extração ou na grade.
 *
 * A chave é o código LOCAL da matéria, o mesmo de `curriculum.ts` e o mesmo que
 * as páginas de matéria já passam para `SubjectContentLayout`. O código oficial
 * do PPC vem dentro do registro, no campo `codigoPPC`, porque em 17 matérias os
 * dois divergem (ver .docs/AUDITORIA-GRADE-PPC.md).
 */

import ementasJson from './ementas.json';

export interface EmentaPPC {
  /** Código impresso na ficha do ementário do PPC. */
  codigoPPC: string;
  /** Nome da matéria conforme a grade (as fichas trazem nome truncado pelo PDF). */
  nome: string;
  periodo: number | 'optativa';
  cargaHoraria: number;
  /** Pré-requisito declarado na ficha, ou null quando não há. */
  preRequisito: string | null;
  /** Texto corrido da ementa, como está no PPC. */
  ementa: string;
  /** A ementa quebrada nas unidades que ela enumera. */
  unidades: string[];
}

interface ArquivoEmentas {
  versao: string;
  fonte: string;
  total: number;
  ementas: Record<string, EmentaPPC>;
}

const arquivo = ementasJson as unknown as ArquivoEmentas;

export const FONTE_EMENTAS = arquivo.fonte;

/** Ementa oficial de uma matéria, pelo código da grade. */
export function getEmentaPPC(codigo: string): EmentaPPC | undefined {
  return arquivo.ementas[codigo];
}

export function temEmentaPPC(codigo: string): boolean {
  return codigo in arquivo.ementas;
}
