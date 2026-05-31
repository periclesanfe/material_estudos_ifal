import { useEffect, useMemo, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SubjectContentSection {
  id: string;
  shortTitle: string;
  exam?: string;
}

interface SubjectContentLayoutProps {
  sections: readonly SubjectContentSection[];
  eyebrow: string;
  title: ReactNode;
  description: string;
  heroBackground: string;
  renderSection: (sectionId: string) => ReactNode;
}

export default function SubjectContentLayout({
  sections,
  eyebrow,
  title,
  description,
  heroBackground,
  renderSection,
}: SubjectContentLayoutProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionIds = useMemo(() => new Set(sections.map(section => section.id)), [sections]);
  const topicParam = searchParams.get('topic');
  const activeSection = topicParam && sectionIds.has(topicParam) ? topicParam : 'intro';
  const verticalReading = searchParams.get('view') === 'vertical';

  useEffect(() => {
    if (!verticalReading || activeSection === 'intro') return;

    const frameId = window.requestAnimationFrame(() => {
      document
        .getElementById(`subject-section-${activeSection}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeSection, verticalReading]);

  const selectSection = (sectionId: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (sectionId === 'intro') {
      nextParams.delete('topic');
    } else {
      nextParams.set('topic', sectionId);
    }

    setSearchParams(nextParams);
  };

  const setReadingMode = (nextVerticalReading: boolean) => {
    const nextParams = new URLSearchParams(searchParams);

    if (nextVerticalReading) {
      nextParams.set('view', 'vertical');
    } else {
      nextParams.delete('view');
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <div>
      {(verticalReading || activeSection === 'intro') && (
        <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute inset-0" style={{ background: heroBackground }} />
          </div>

          <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
            {title}
          </h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
            {description}
          </p>
        </div>
      )}

      <div className="page-wrap">
        <nav className="sticky top-2 z-40 glass border border-border rounded-xl p-2.5 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
            {sections.map(section => (
              <button
                key={section.id}
                type="button"
                onClick={() => selectSection(section.id)}
                className={`study-pill px-3 py-1.5 inline-flex items-center gap-1.5 ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.exam && (
                  <span className="text-[10px] font-black opacity-75">{section.exam}</span>
                )}
                {section.shortTitle}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-card/70 p-1 text-xs font-bold lg:w-[12rem]">
            <button
              type="button"
              onClick={() => setReadingMode(false)}
              aria-pressed={!verticalReading}
              className={`rounded-md px-2 py-1.5 transition-colors ${!verticalReading ? 'bg-accent text-white' : 'text-text-muted hover:text-text'}`}
            >
              Tópicos
            </button>
            <button
              type="button"
              onClick={() => setReadingMode(true)}
              aria-pressed={verticalReading}
              className={`rounded-md px-2 py-1.5 transition-colors ${verticalReading ? 'bg-accent text-white' : 'text-text-muted hover:text-text'}`}
            >
              Leitura
            </button>
          </div>
        </nav>
      </div>

      <div className={`page-wrap pb-20 ${activeSection === 'intro' || verticalReading ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}>
        {verticalReading ? (
          <div className="space-y-12 md:space-y-14">
            {sections.map(section => (
              <article key={section.id} id={`subject-section-${section.id}`} className="scroll-mt-28">
                {renderSection(section.id)}
              </article>
            ))}
          </div>
        ) : (
          renderSection(activeSection)
        )}
      </div>
    </div>
  );
}
