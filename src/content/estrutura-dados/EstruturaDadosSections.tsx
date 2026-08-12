import IntroSection from './sections/IntroSection';
import PythonSection from './sections/PythonSection';
import StringsListasSection from './sections/StringsListasSection';
import RecursividadeSection from './sections/RecursividadeSection';
import BigOSection from './sections/BigOSection';
import TADSection from './sections/TADSection';
import ListasSection from './sections/ListasSection';
import PilhasSection from './sections/PilhasSection';
import FilasSection from './sections/FilasSection';
import DequeSection from './sections/DequeSection';
import ListasEncadeadasSection from './sections/ListasEncadeadasSection';
import PesquisaSection from './sections/PesquisaSection';
import HashingSection from './sections/HashingSection';
import OrdenacaoSection from './sections/OrdenacaoSection';
import ArvoresSection from './sections/ArvoresSection';
import ArvoresBuscaSection from './sections/ArvoresBuscaSection';
import QuizSection from './sections/QuizSection';
import type { EstruturaDadosSectionId } from './data';

interface EstruturaDadosSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de ESTRUTURA_DADOS_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<EstruturaDadosSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  python: PythonSection,
  'strings-listas': StringsListasSection,
  recursividade: RecursividadeSection,
  'big-o': BigOSection,
  tad: TADSection,
  listas: ListasSection,
  pilhas: PilhasSection,
  filas: FilasSection,
  deque: DequeSection,
  'listas-encadeadas': ListasEncadeadasSection,
  pesquisa: PesquisaSection,
  hashing: HashingSection,
  ordenacao: OrdenacaoSection,
  arvores: ArvoresSection,
  'arvores-busca': ArvoresBuscaSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is EstruturaDadosSectionId {
  return id in SECTION_COMPONENTS;
}

export default function EstruturaDadosSections({ activeSection }: EstruturaDadosSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
