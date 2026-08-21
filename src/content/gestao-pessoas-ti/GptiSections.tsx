import IntroSection from './sections/IntroSection';
import RecursosNaturezaSection from './sections/RecursosNaturezaSection';
import MotivacaoSection from './sections/MotivacaoSection';
import TeoriasXYSection from './sections/TeoriasXYSection';
import ModernaGpSection from './sections/ModernaGpSection';
import ProcessosSection from './sections/ProcessosSection';
import MercadoSection from './sections/MercadoSection';
import RecrutamentoSection from './sections/RecrutamentoSection';
import SelecaoSection from './sections/SelecaoSection';
import CargosSection from './sections/CargosSection';
import DesempenhoSection from './sections/DesempenhoSection';
import RemuneracaoSection from './sections/RemuneracaoSection';
import TreinamentoSection from './sections/TreinamentoSection';
import QvtSection from './sections/QvtSection';
import CulturaSection from './sections/CulturaSection';
import QuizSection from './sections/QuizSection';
import type { GptiSectionId } from './data';

interface GptiSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de GPTI_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<GptiSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'recursos-natureza': RecursosNaturezaSection,
  motivacao: MotivacaoSection,
  'teorias-xy': TeoriasXYSection,
  'moderna-gp': ModernaGpSection,
  processos: ProcessosSection,
  mercado: MercadoSection,
  recrutamento: RecrutamentoSection,
  selecao: SelecaoSection,
  cargos: CargosSection,
  desempenho: DesempenhoSection,
  remuneracao: RemuneracaoSection,
  treinamento: TreinamentoSection,
  qvt: QvtSection,
  cultura: CulturaSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is GptiSectionId {
  return id in SECTION_COMPONENTS;
}

export default function GptiSections({ activeSection }: GptiSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
