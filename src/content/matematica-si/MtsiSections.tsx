import IntroSection from './sections/IntroSection';
import MatrizesSection from './sections/MatrizesSection';
import OperacoesSection from './sections/OperacoesSection';
import DeterminantesSection from './sections/DeterminantesSection';
import SistemasSection from './sections/SistemasSection';
import EscalonamentoSection from './sections/EscalonamentoSection';
import TransformacoesSection from './sections/TransformacoesSection';
import RelacoesSection from './sections/RelacoesSection';
import EquivalenciaSection from './sections/EquivalenciaSection';
import FuncoesSection from './sections/FuncoesSection';
import RecursaoSection from './sections/RecursaoSection';
import GrafosSection from './sections/GrafosSection';
import PercursosSection from './sections/PercursosSection';
import AplicacoesSection from './sections/AplicacoesSection';
import QuizSection from './sections/QuizSection';
import type { MtsiSectionId } from './data';

interface MtsiSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de MTSI_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<MtsiSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  matrizes: MatrizesSection,
  operacoes: OperacoesSection,
  determinantes: DeterminantesSection,
  sistemas: SistemasSection,
  escalonamento: EscalonamentoSection,
  transformacoes: TransformacoesSection,
  relacoes: RelacoesSection,
  equivalencia: EquivalenciaSection,
  funcoes: FuncoesSection,
  recursao: RecursaoSection,
  grafos: GrafosSection,
  percursos: PercursosSection,
  aplicacoes: AplicacoesSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is MtsiSectionId {
  return id in SECTION_COMPONENTS;
}

export default function MtsiSections({ activeSection }: MtsiSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
