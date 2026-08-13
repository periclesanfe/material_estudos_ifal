import IntroSection from './sections/IntroSection';
import FundamentosSection from './sections/FundamentosSection';
import StartupsSection from './sections/StartupsSection';
import OportunidadesSection from './sections/OportunidadesSection';
import CanvasSection from './sections/CanvasSection';
import CustomerDevelopmentSection from './sections/CustomerDevelopmentSection';
import LeanMvpSection from './sections/LeanMvpSection';
import ArquiteturasSection from './sections/ArquiteturasSection';
import UnitEconomicsSection from './sections/UnitEconomicsSection';
import FinanciamentoSection from './sections/FinanciamentoSection';
import PlanoPitchSection from './sections/PlanoPitchSection';
import ContextosSection from './sections/ContextosSection';
import CasosSection from './sections/CasosSection';
import QuizSection from './sections/QuizSection';
import type { EmpdSectionId } from './data';

interface EmpdSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de EMPD_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<EmpdSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  fundamentos: FundamentosSection,
  startups: StartupsSection,
  oportunidades: OportunidadesSection,
  canvas: CanvasSection,
  'customer-development': CustomerDevelopmentSection,
  'lean-mvp': LeanMvpSection,
  arquiteturas: ArquiteturasSection,
  'unit-economics': UnitEconomicsSection,
  financiamento: FinanciamentoSection,
  'plano-pitch': PlanoPitchSection,
  contextos: ContextosSection,
  casos: CasosSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is EmpdSectionId {
  return id in SECTION_COMPONENTS;
}

export default function EmpdSections({ activeSection }: EmpdSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
