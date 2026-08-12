import { useMemo, type ReactNode } from 'react';
import {
  FINAL_EXAM_ID,
  FINAL_EXAM_LABEL,
  belongsToExam,
  resolveExamOrder,
  type ExamDefinition,
  type ExamTagged,
} from '../../lib/exams';

export interface ExamModeSection extends ExamTagged {
  id: string;
  shortTitle: string;
}

interface ExamModeProps {
  sections: readonly ExamModeSection[];
  /** Avaliações declaradas pela matéria; sem elas a ordem vem das seções. */
  exams?: readonly ExamDefinition[];
  /** Avaliação selecionada: um id (ex: "av1") ou "AVF" (tudo). */
  selectedExam: string;
  onSelectExam: (exam: string) => void;
  renderSection: (sectionId: string) => ReactNode;
}

/** Seções que não fazem parte do estudo de prova (introdução e quizzes). */
function isStudySection(section: ExamModeSection): boolean {
  return section.id !== 'intro' && !/quiz/i.test(section.id);
}

/**
 * Modo Prova: mostra TODO o conteúdo da avaliação escolhida numa única página,
 * sem cortes — uma seção após a outra. "AVF" reúne todas as seções de estudo.
 */
export default function ExamMode({ sections, exams, selectedExam, onSelectExam, renderSection }: ExamModeProps) {
  const options = useMemo(() => [
    ...resolveExamOrder(sections, exams),
    { id: FINAL_EXAM_ID, label: FINAL_EXAM_LABEL },
  ], [exams, sections]);

  // Seção de estudo pertencente à avaliação escolhida (AVF = todas).
  const examSections = useMemo(() => sections.filter(section => (
    isStudySection(section)
    && (selectedExam === FINAL_EXAM_ID || belongsToExam(section, selectedExam))
  )), [sections, selectedExam]);

  return (
    <div className="page-wrap pb-20 pt-5 md:pt-6">
      {/* Seletor de avaliação */}
      <div
        role="tablist"
        aria-label="Avaliação para estudar"
        className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex flex-wrap gap-2 mb-6"
      >
        {options.map(exam => {
          const selected = exam.id === selectedExam;
          return (
            <button
              key={exam.id}
              type="button"
              role="tab"
              aria-selected={selected}
              title={exam.description}
              onClick={() => onSelectExam(exam.id)}
              className={`study-pill px-4 py-1.5 ${selected ? 'active' : ''}`}
            >
              {exam.label}
            </button>
          );
        })}
      </div>

      {examSections.length === 0 ? (
        <p className="text-text-muted text-sm">
          Nenhum conteúdo marcado para esta avaliação.
        </p>
      ) : (
        <div key={selectedExam} className="panel-enter space-y-12 md:space-y-16">
          {examSections.map(section => (
            <section key={section.id} aria-label={section.shortTitle}>
              {renderSection(section.id)}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
