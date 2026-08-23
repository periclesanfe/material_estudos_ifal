import IntroSection from './sections/IntroSection';
import OQueEProjetoSection from './sections/OQueEProjetoSection';
import ProgramaPortfolioSection from './sections/ProgramaPortfolioSection';
import PmbokSection from './sections/PmbokSection';
import CicloVidaSection from './sections/CicloVidaSection';
import StakeholdersSection from './sections/StakeholdersSection';
import IniciacaoTapSection from './sections/IniciacaoTapSection';
import EscopoSection from './sections/EscopoSection';
import EapSection from './sections/EapSection';
import CronogramaSection from './sections/CronogramaSection';
import RiscosSection from './sections/RiscosSection';
import CustosSection from './sections/CustosSection';
import ExecucaoControleSection from './sections/ExecucaoControleSection';
import EncerramentoSection from './sections/EncerramentoSection';
import AgilSection from './sections/AgilSection';
import QuizSection from './sections/QuizSection';
import type { GpjtSectionId } from './data';

interface GpjtSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de GPJT_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<GpjtSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'o-que-e-projeto': OQueEProjetoSection,
  'programa-portfolio': ProgramaPortfolioSection,
  pmbok: PmbokSection,
  'ciclo-vida': CicloVidaSection,
  stakeholders: StakeholdersSection,
  'iniciacao-tap': IniciacaoTapSection,
  escopo: EscopoSection,
  eap: EapSection,
  cronograma: CronogramaSection,
  riscos: RiscosSection,
  custos: CustosSection,
  'execucao-controle': ExecucaoControleSection,
  encerramento: EncerramentoSection,
  agil: AgilSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is GpjtSectionId {
  return id in SECTION_COMPONENTS;
}

export default function GpjtSections({ activeSection }: GpjtSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
