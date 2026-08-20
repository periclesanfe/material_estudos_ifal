import IntroSection from './sections/IntroSection';
import SistemasBdSection from './sections/SistemasBdSection';
import ArquiteturaSection from './sections/ArquiteturaSection';
import ModeloErSection from './sections/ModeloErSection';
import ModeloEerSection from './sections/ModeloEerSection';
import ModeloRelacionalSection from './sections/ModeloRelacionalSection';
import TransformacaoSection from './sections/TransformacaoSection';
import NormalizacaoSection from './sections/NormalizacaoSection';
import AlgebraSection from './sections/AlgebraSection';
import SqlDdlSection from './sections/SqlDdlSection';
import SqlDmlDtlSection from './sections/SqlDmlDtlSection';
import SqlDqlSection from './sections/SqlDqlSection';
import SqlJoinsSection from './sections/SqlJoinsSection';
import QuizSection from './sections/QuizSection';
import type { FdbdSectionId } from './data';

interface FdbdSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de FDBD_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<FdbdSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'sistemas-bd': SistemasBdSection,
  arquitetura: ArquiteturaSection,
  'modelo-er': ModeloErSection,
  'modelo-eer': ModeloEerSection,
  'modelo-relacional': ModeloRelacionalSection,
  transformacao: TransformacaoSection,
  normalizacao: NormalizacaoSection,
  algebra: AlgebraSection,
  'sql-ddl': SqlDdlSection,
  'sql-dml-dtl': SqlDmlDtlSection,
  'sql-dql': SqlDqlSection,
  'sql-joins': SqlJoinsSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is FdbdSectionId {
  return id in SECTION_COMPONENTS;
}

export default function FdbdSections({ activeSection }: FdbdSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
