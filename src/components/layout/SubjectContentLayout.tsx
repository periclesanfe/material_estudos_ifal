import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FINAL_EXAM_ID, type ExamDefinition } from '../../lib/exams';
import ExamMode from './ExamMode';
import SectionNav, { type SectionNavItem } from './SectionNav';
import SubjectHero from './SubjectHero';

type SubjectContentSection = SectionNavItem;

interface SubjectContentLayoutProps {
  sections: readonly SubjectContentSection[];
  /** Avaliações declaradas pela matéria; sem elas os ids das seções viram rótulo. */
  exams?: readonly ExamDefinition[];
  eyebrow: string;
  title: ReactNode;
  description: string;
  heroBackground: string;
  /** Ações exibidas na capa (ex.: exportar .md/PDF). Só aparecem na introdução. */
  heroActions?: ReactNode;
  renderSection: (sectionId: string) => ReactNode;
}

export default function SubjectContentLayout({
  sections,
  exams,
  eyebrow,
  title,
  description,
  heroBackground,
  heroActions,
  renderSection,
}: SubjectContentLayoutProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionIds = useMemo(() => new Set(sections.map(section => section.id)), [sections]);
  const topicParam = searchParams.get('topic');
  const activeSection = topicParam && sectionIds.has(topicParam) ? topicParam : 'intro';

  const examMode = searchParams.get('modo') === 'prova';
  const selectedExam = searchParams.get('av') || FINAL_EXAM_ID;

  const contentRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef(false);

  const toggleExamMode = (enable: boolean) => {
    const nextParams = new URLSearchParams(searchParams);
    if (enable) {
      nextParams.set('modo', 'prova');
      nextParams.delete('topic');
    } else {
      nextParams.delete('modo');
      nextParams.delete('av');
    }
    setSearchParams(nextParams);
  };

  const selectExam = (exam: string) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('modo', 'prova');
    nextParams.set('av', exam);
    setSearchParams(nextParams);
  };

  const selectSection = (sectionId: string, moveFocusToContent = false) => {
    const nextParams = new URLSearchParams(searchParams);

    if (sectionId === 'intro') {
      nextParams.delete('topic');
    } else {
      nextParams.set('topic', sectionId);
    }

    setSearchParams(nextParams);
    // O painel é remontado a cada seção (key={activeSection}); o foco é aplicado no efeito
    // abaixo, já com o nó novo montado.
    pendingFocusRef.current = moveFocusToContent;
  };

  // Após escolher uma seção, leva o foco ao conteúdo para leitores de tela e teclado.
  useEffect(() => {
    if (!pendingFocusRef.current) return;
    pendingFocusRef.current = false;
    contentRef.current?.focus();
  }, [activeSection]);

  if (examMode) {
    return (
      <div>
        <div className="page-wrap pt-5 md:pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase">Modo Prova</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text">Estudar para a avaliação</h2>
            </div>
            <button
              type="button"
              onClick={() => toggleExamMode(false)}
              className="btn-secondary px-4 py-2 text-sm"
            >
              ← Voltar ao conteúdo
            </button>
          </div>
        </div>
        <ExamMode
          sections={sections}
          exams={exams}
          selectedExam={selectedExam}
          onSelectExam={selectExam}
          renderSection={renderSection}
        />
      </div>
    );
  }

  return (
    <div>
      {activeSection === 'intro' && (
        <SubjectHero eyebrow={eyebrow} title={title} description={description} background={heroBackground} actions={heroActions} />
      )}

      <div className="page-wrap flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <button
          type="button"
          onClick={() => toggleExamMode(true)}
          className="sticky top-2 z-40 btn-primary shrink-0 px-4 py-2 text-sm inline-flex items-center justify-center gap-1.5"
        >
          <span aria-hidden>📝</span> Modo Prova
        </button>
        <SectionNav
          sections={sections}
          exams={exams}
          activeSection={activeSection}
          onSelect={selectSection}
          panelId="painel-conteudo"
        />
      </div>

      <div
        ref={contentRef}
        id="painel-conteudo"
        role="tabpanel"
        tabIndex={-1}
        key={activeSection}
        aria-labelledby={`tab-${activeSection}`}
        className={`page-wrap pb-20 focus:outline-none panel-enter ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}
      >
        {renderSection(activeSection)}
      </div>
    </div>
  );
}
