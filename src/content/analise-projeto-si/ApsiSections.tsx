import IntroSection from './sections/IntroSection';
import EngenhariaSoftwareSection from './sections/EngenhariaSoftwareSection';
import ProcessosSection from './sections/ProcessosSection';
import RupSection from './sections/RupSection';
import NegocioRequisitosSection from './sections/NegocioRequisitosSection';
import CasosUsoSection from './sections/CasosUsoSection';
import DocumentosSection from './sections/DocumentosSection';
import ClassesSection from './sections/ClassesSection';
import IdentificacaoSection from './sections/IdentificacaoSection';
import InteracaoSection from './sections/InteracaoSection';
import AtividadesEstadosSection from './sections/AtividadesEstadosSection';
import PanoramaUmlSection from './sections/PanoramaUmlSection';
import ArquiteturaSection from './sections/ArquiteturaSection';
import DiagramaCodigoSection from './sections/DiagramaCodigoSection';
import QuizSection from './sections/QuizSection';
import type { ApsiSectionId } from './data';

interface ApsiSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de APSI_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<ApsiSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'engenharia-software': EngenhariaSoftwareSection,
  processos: ProcessosSection,
  rup: RupSection,
  'negocio-requisitos': NegocioRequisitosSection,
  'casos-uso': CasosUsoSection,
  documentos: DocumentosSection,
  classes: ClassesSection,
  identificacao: IdentificacaoSection,
  interacao: InteracaoSection,
  'atividades-estados': AtividadesEstadosSection,
  'panorama-uml': PanoramaUmlSection,
  arquitetura: ArquiteturaSection,
  'diagrama-codigo': DiagramaCodigoSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is ApsiSectionId {
  return id in SECTION_COMPONENTS;
}

export default function ApsiSections({ activeSection }: ApsiSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
