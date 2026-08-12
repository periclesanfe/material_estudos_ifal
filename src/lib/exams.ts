/**
 * Vocabulário de avaliações compartilhado por seções e questões.
 *
 * Antes existiam dois sistemas paralelos: seções usavam `exam: string` livre
 * ('AV1', 'N1 / AV1', 'S1') e questões usavam `exam: \`prova${number}\``, o que
 * fazia a mesma matéria exibir "AV1" na pill da seção e "Prova 1" no filtro de
 * quiz. Agora a matéria declara suas próprias avaliações em `EXAMS` e tanto
 * seções quanto questões apontam para os mesmos ids via `exams: string[]`.
 *
 * O campo `exam` (singular) continua aceito como legado para que as matérias
 * sejam migradas uma de cada vez.
 */

/** Avaliação declarada por uma matéria (ex.: AV1, N1 / AV2, S1). */
export interface ExamDefinition {
  /** Identificador estável usado em `exams` de seções e questões. */
  id: string;
  /** Rótulo exibido ao aluno, com o vocabulário que o professor usa. */
  label: string;
  /** Texto curto explicando o que a avaliação cobra. */
  description?: string;
}

/** Item que pode pertencer a uma ou mais avaliações. */
export interface ExamTagged {
  /** Lista de ids de avaliação (modelo atual). */
  exams?: readonly string[];
  /** Avaliação única (modelo legado, ainda usado por matérias não migradas). */
  exam?: string;
}

/** Avaliação sintética que reúne todo o conteúdo da matéria. */
export const FINAL_EXAM_ID = 'AVF';

/** Rótulo da avaliação final, exibida sempre por último no seletor. */
export const FINAL_EXAM_LABEL = 'Final (tudo)';

/**
 * Normaliza os dois modelos numa lista única. `exams` tem precedência; na
 * ausência dela, o `exam` legado vira uma lista de um item.
 */
export function examIdsOf(item: ExamTagged): readonly string[] {
  if (item.exams && item.exams.length > 0) return item.exams;
  return item.exam ? [item.exam] : [];
}

/** Diz se o item pertence à avaliação escolhida. */
export function belongsToExam(item: ExamTagged, examId: string): boolean {
  return examIdsOf(item).includes(examId);
}

/**
 * Ordem em que as avaliações aparecem no seletor. Quando a matéria declara
 * `EXAMS`, a ordem é a declarada; senão cai na ordem de aparição dos itens.
 */
export function resolveExamOrder(
  items: readonly ExamTagged[],
  declared?: readonly ExamDefinition[],
): readonly ExamDefinition[] {
  const used = new Set(items.flatMap(item => examIdsOf(item)));

  if (declared && declared.length > 0) {
    // Mantém a ordem declarada e esconde avaliações sem nenhum conteúdo.
    return declared.filter(exam => used.has(exam.id));
  }

  const seen: ExamDefinition[] = [];
  for (const item of items) {
    for (const id of examIdsOf(item)) {
      if (!seen.some(exam => exam.id === id)) seen.push({ id, label: id });
    }
  }
  return seen;
}
