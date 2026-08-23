import IntroSection from './sections/IntroSection';
import JavaJvmSection from './sections/JavaJvmSection';
import TiposCastingSection from './sections/TiposCastingSection';
import ControleFluxoSection from './sections/ControleFluxoSection';
import ArraysSection from './sections/ArraysSection';
import ClassesObjetosSection from './sections/ClassesObjetosSection';
import ConstrutoresSection from './sections/ConstrutoresSection';
import EncapsulamentoSection from './sections/EncapsulamentoSection';
import HerancaSection from './sections/HerancaSection';
import PolimorfismoSection from './sections/PolimorfismoSection';
import InterfacesSection from './sections/InterfacesSection';
import ExcecoesCamadasSection from './sections/ExcecoesCamadasSection';
import JdbcSection from './sections/JdbcSection';
import TestesSection from './sections/TestesSection';
import PadroesSection from './sections/PadroesSection';
import QuizSection from './sections/QuizSection';
import type { PoobSectionId } from './data';

interface PoobSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de POOB_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<PoobSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'java-jvm': JavaJvmSection,
  'tipos-casting': TiposCastingSection,
  'controle-fluxo': ControleFluxoSection,
  arrays: ArraysSection,
  'classes-objetos': ClassesObjetosSection,
  construtores: ConstrutoresSection,
  encapsulamento: EncapsulamentoSection,
  heranca: HerancaSection,
  polimorfismo: PolimorfismoSection,
  interfaces: InterfacesSection,
  'excecoes-camadas': ExcecoesCamadasSection,
  jdbc: JdbcSection,
  testes: TestesSection,
  padroes: PadroesSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is PoobSectionId {
  return id in SECTION_COMPONENTS;
}

export default function PoobSections({ activeSection }: PoobSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
