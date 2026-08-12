import { useMemo, useState } from 'react';
import { belongsToExam, resolveExamOrder, type ExamDefinition } from '../../lib/exams';
import KahootQuiz from './KahootQuiz';
import QuizCard, { type QuizExam, type QuizQuestionData } from './QuizCard';

type ReviewMode = 'quiz' | 'kahoot';

interface ExamLabel {
  label: string;
  description?: string;
}

interface ExamQuizSelectorProps {
  questions: QuizQuestionData[];
  mode: ReviewMode;
  /** Avaliações declaradas pela matéria; substituem o modelo `prova${number}`. */
  exams?: readonly ExamDefinition[];
  /** Legado: renomeia as avaliações `prova${number}`. Redundante com `exams`. */
  examLabels?: Partial<Record<QuizExam, ExamLabel>>;
}

const TODOS = 'todos';

const ordinais = ['primeira', 'segunda', 'terceira', 'quarta', 'quinta', 'sexta', 'sétima', 'oitava', 'nona', 'décima'];

/** Número da prova no modelo legado `prova${number}`, ou null fora dele. */
function provaNumber(examId: string): number | null {
  const match = /^prova(\d+)$/.exec(examId);
  return match ? Number(match[1]) : null;
}

/**
 * Preenche rótulo e descrição de uma avaliação que a matéria não declarou —
 * ou seja, um id legado `prova${number}`, que vira "Prova N".
 */
function legacyExam(examId: string, examLabels?: ExamQuizSelectorProps['examLabels']): ExamDefinition {
  const num = provaNumber(examId);
  const custom = examLabels?.[examId as QuizExam];

  return {
    id: examId,
    label: custom?.label ?? (num === null ? examId : `Prova ${num}`),
    description: custom?.description
      ?? (num === null
        ? `Revisa somente os conteúdos de ${examId}.`
        : `Revisa somente os conteúdos da ${ordinais[num - 1] ?? `${num}ª`} avaliação.`),
  };
}

export default function ExamQuizSelector({ questions, mode, exams, examLabels }: ExamQuizSelectorProps) {
  const [selectedExam, setSelectedExam] = useState<string>(TODOS);

  const examOptions = useMemo(() => {
    // Com `EXAMS` declarado, a matéria já nomeou e ordenou suas avaliações.
    // Sem ele, os ids são legados (`prova1`, `prova2`, ...): viram "Prova N"
    // e são ordenados pelo número, não pela ordem de aparição das questões.
    const ordered = exams?.length
      ? resolveExamOrder(questions, exams)
      : resolveExamOrder(questions)
        .map(exam => legacyExam(exam.id, examLabels))
        .sort((a, b) => (provaNumber(a.id) ?? 0) - (provaNumber(b.id) ?? 0));

    return [
      { id: TODOS, label: 'Todas', description: 'Mistura os conteúdos de todas as avaliações.' },
      ...ordered,
    ];
  }, [examLabels, exams, questions]);

  const filteredQuestions = useMemo(() => (
    selectedExam === TODOS
      ? questions
      : questions.filter(question => belongsToExam(question, selectedExam))
  ), [questions, selectedExam]);

  return (
    <div className="space-y-4">
      <div className="study-surface p-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Conteúdo da avaliação">
          {examOptions.map(option => {
            const active = selectedExam === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedExam(option.id)}
                aria-selected={active}
                className={`rounded-lg border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-accent bg-accent/10 text-text'
                    : 'border-border bg-bg/40 text-text-muted hover:border-border-hover hover:text-text'
                }`}
              >
                <span className="block text-sm font-bold">{option.label}</span>
                <span className="block text-[11px] leading-snug">{option.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {mode === 'quiz' ? (
        <div>
          {filteredQuestions.map(question => (
            <QuizCard key={question.id} data={question} />
          ))}
        </div>
      ) : (
        <KahootQuiz key={selectedExam} questions={filteredQuestions} />
      )}
    </div>
  );
}
