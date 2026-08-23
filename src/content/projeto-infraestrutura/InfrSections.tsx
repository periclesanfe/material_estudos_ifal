import IntroSection from './sections/IntroSection';
import NormasSection from './sections/NormasSection';
import DistanciasSection from './sections/DistanciasSection';
import CategoriasSection from './sections/CategoriasSection';
import BlindagemSection from './sections/BlindagemSection';
import PinagemSection from './sections/PinagemSection';
import MidiasSection from './sections/MidiasSection';
import EtapasSection from './sections/EtapasSection';
import CenariosSection from './sections/CenariosSection';
import EquipamentosSection from './sections/EquipamentosSection';
import IfalSection from './sections/IfalSection';
import GalpoesSection from './sections/GalpoesSection';
import DiagnosticoSection from './sections/DiagnosticoSection';
import IspSection from './sections/IspSection';
import FerramentasSection from './sections/FerramentasSection';
import QuizSection from './sections/QuizSection';
import type { InfrSectionId } from './data';

interface InfrSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de INFR_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<InfrSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  normas: NormasSection,
  distancias: DistanciasSection,
  categorias: CategoriasSection,
  blindagem: BlindagemSection,
  pinagem: PinagemSection,
  midias: MidiasSection,
  etapas: EtapasSection,
  cenarios: CenariosSection,
  equipamentos: EquipamentosSection,
  ifal: IfalSection,
  galpoes: GalpoesSection,
  diagnostico: DiagnosticoSection,
  isp: IspSection,
  ferramentas: FerramentasSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is InfrSectionId {
  return id in SECTION_COMPONENTS;
}

export default function InfrSections({ activeSection }: InfrSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
