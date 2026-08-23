import IntroSection from './sections/IntroSection';
import AutoconhecimentoSection from './sections/AutoconhecimentoSection';
import PatrimonioSection from './sections/PatrimonioSection';
import PlanejamentoSection from './sections/PlanejamentoSection';
import DividasSection from './sections/DividasSection';
import SairDividasSection from './sections/SairDividasSection';
import CartaoSection from './sections/CartaoSection';
import ChequeEspecialSection from './sections/ChequeEspecialSection';
import BetsSection from './sections/BetsSection';
import PouparSection from './sections/PouparSection';
import TripeSection from './sections/TripeSection';
import TesouroSection from './sections/TesouroSection';
import GlossarioSection from './sections/GlossarioSection';
import QuizSection from './sections/QuizSection';
import type { EdfiSectionId } from './data';

interface EdfiSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de EDFI_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<EdfiSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  autoconhecimento: AutoconhecimentoSection,
  patrimonio: PatrimonioSection,
  planejamento: PlanejamentoSection,
  dividas: DividasSection,
  'sair-dividas': SairDividasSection,
  cartao: CartaoSection,
  'cheque-especial': ChequeEspecialSection,
  bets: BetsSection,
  poupar: PouparSection,
  tripe: TripeSection,
  tesouro: TesouroSection,
  glossario: GlossarioSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is EdfiSectionId {
  return id in SECTION_COMPONENTS;
}

export default function EdfiSections({ activeSection }: EdfiSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
