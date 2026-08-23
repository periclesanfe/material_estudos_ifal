import IntroSection from './sections/IntroSection';
import ComplexidadeSection from './sections/ComplexidadeSection';
import EticaSection from './sections/EticaSection';
import BoffSection from './sections/BoffSection';
import ClassificacaoSection from './sections/ClassificacaoSection';
import AmbientalSection from './sections/AmbientalSection';
import DecisaoSection from './sections/DecisaoSection';
import CasosSection from './sections/CasosSection';
import CmsiSection from './sections/CmsiSection';
import DimensoesSection from './sections/DimensoesSection';
import TunisSection from './sections/TunisSection';
import UnescoSection from './sections/UnescoSection';
import SbcSection from './sections/SbcSection';
import CodigoEticaSection from './sections/CodigoEticaSection';
import CodigoCondutaSection from './sections/CodigoCondutaSection';
import SeminariosSection from './sections/SeminariosSection';
import QuizSection from './sections/QuizSection';
import type { EtsoSectionId } from './data';

interface EtsoSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de ETSO_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<EtsoSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  complexidade: ComplexidadeSection,
  etica: EticaSection,
  boff: BoffSection,
  classificacao: ClassificacaoSection,
  ambiental: AmbientalSection,
  decisao: DecisaoSection,
  casos: CasosSection,
  cmsi: CmsiSection,
  dimensoes: DimensoesSection,
  tunis: TunisSection,
  unesco: UnescoSection,
  sbc: SbcSection,
  'codigo-etica': CodigoEticaSection,
  'codigo-conduta': CodigoCondutaSection,
  seminarios: SeminariosSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is EtsoSectionId {
  return id in SECTION_COMPONENTS;
}

export default function EtsoSections({ activeSection }: EtsoSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
