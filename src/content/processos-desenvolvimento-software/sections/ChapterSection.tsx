import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import type { PdswChapterContent } from '../data';

/**
 * Renderiza qualquer um dos dez capítulos do livro-base a partir de
 * PDSW_CHAPTER_CONTENT. Os capítulos compartilham a mesma estrutura visual, então
 * são um componente único parametrizado pelo capítulo, e não um arquivo por capítulo.
 */
export default function ChapterSection({ chapter }: { chapter: PdswChapterContent }) {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title={`Capítulo ${chapter.number}: ${chapter.title}`}
        subtitle={chapter.subtitle}
        colorClass="text-accent3"
        badge={chapter.exam}
      />

      <HighlightBox title="Foco do capítulo" accent="var(--color-accent3)">
        <p>{chapter.focus}</p>
        <p>
          Leitura-base:{' '}
          <a className="text-accent underline-offset-4 hover:underline" href={chapter.sourceUrl} target="_blank" rel="noreferrer">
            Engenharia de Software Moderna, capítulo {chapter.number}
          </a>
          .
        </p>
      </HighlightBox>

      {chapter.subsections.map(subsection => (
        <div key={subsection.title} className="space-y-3">
          <div>
            <h3 className="mb-1 font-display text-xl font-bold text-accent">{subsection.title}</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{subsection.description}</p>
          </div>
          {subsection.concepts && <ConceptGrid items={subsection.concepts} columns="md:grid-cols-2 lg:grid-cols-3" />}
          {subsection.panels && <PanelList items={subsection.panels} />}
          {subsection.flow && (
            <HighlightBox title="Fluxo mental" accent="var(--color-accent4)">
              <FlowDiagram items={subsection.flow} />
            </HighlightBox>
          )}
          {subsection.code && <CodeBlock code={subsection.code.content} language={subsection.code.language} />}
        </div>
      ))}
    </section>
  );
}
