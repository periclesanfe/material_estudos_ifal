import IntroSection from './sections/IntroSection';
import SadDecisaoSection from './sections/SadDecisaoSection';
import BiEtlSection from './sections/BiEtlSection';
import DataWarehouseSection from './sections/DataWarehouseSection';
import PandasSection from './sections/PandasSection';
import AssociacaoSection from './sections/AssociacaoSection';
import AgrupamentoSection from './sections/AgrupamentoSection';
import ArvoresSection from './sections/ArvoresSection';
import RegressaoSection from './sections/RegressaoSection';
import RedesNeuraisSection from './sections/RedesNeuraisSection';
import AhpSection from './sections/AhpSection';
import ProjetoSection from './sections/ProjetoSection';
import QuizSection from './sections/QuizSection';
import type { SadeSectionId } from './data';

interface SadeSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de SADE_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<SadeSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'sad-decisao': SadDecisaoSection,
  'bi-etl': BiEtlSection,
  'data-warehouse': DataWarehouseSection,
  pandas: PandasSection,
  associacao: AssociacaoSection,
  agrupamento: AgrupamentoSection,
  arvores: ArvoresSection,
  regressao: RegressaoSection,
  'redes-neurais': RedesNeuraisSection,
  ahp: AhpSection,
  projeto: ProjetoSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is SadeSectionId {
  return id in SECTION_COMPONENTS;
}

export default function SadeSections({ activeSection }: SadeSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
