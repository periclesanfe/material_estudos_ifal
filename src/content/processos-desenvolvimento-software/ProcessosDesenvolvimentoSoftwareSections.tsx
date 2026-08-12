import ChapterSection from './sections/ChapterSection';
import IntroSection from './sections/IntroSection';
import LivroSection from './sections/LivroSection';
import QuizSection from './sections/QuizSection';
import SeminarioSection from './sections/SeminarioSection';
import { PDSW_CHAPTER_CONTENT } from './data';

interface ProcessosDesenvolvimentoSoftwareSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente, para as seções escritas à mão. Os dez
 * capítulos não aparecem aqui: eles vêm de PDSW_CHAPTER_CONTENT e são todos
 * renderizados por ChapterSection. A ordem de exibição vem de PDSW_SECTIONS.
 */
const SECTION_COMPONENTS: Record<string, () => React.ReactElement> = {
  intro: IntroSection,
  seminario: SeminarioSection,
  livro: LivroSection,
  quiz: QuizSection,
};

export default function ProcessosDesenvolvimentoSoftwareSections({
  activeSection,
}: ProcessosDesenvolvimentoSoftwareSectionsProps) {
  const chapter = PDSW_CHAPTER_CONTENT.find(item => item.id === activeSection);

  if (chapter) {
    return <ChapterSection chapter={chapter} />;
  }

  const Section = SECTION_COMPONENTS[activeSection] ?? IntroSection;
  return <Section />;
}
