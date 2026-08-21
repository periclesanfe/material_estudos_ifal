import IntroSection from './sections/IntroSection';
import NiveisSection from './sections/NiveisSection';
import CpuRiscSection from './sections/CpuRiscSection';
import ParalelismoSection from './sections/ParalelismoSection';
import MemoriaSection from './sections/MemoriaSection';
import EntradaSaidaSection from './sections/EntradaSaidaSection';
import DesempenhoSection from './sections/DesempenhoSection';
import LogicaDigitalSection from './sections/LogicaDigitalSection';
import CircuitosSection from './sections/CircuitosSection';
import MipsBasicoSection from './sections/MipsBasicoSection';
import MipsPraticaSection from './sections/MipsPraticaSection';
import MipsProcedimentosSection from './sections/MipsProcedimentosSection';
import IsaFormatosSection from './sections/IsaFormatosSection';
import CaminhoDadosSection from './sections/CaminhoDadosSection';
import QuizSection from './sections/QuizSection';
import type { AocpSectionId } from './data';

interface AocpSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de AOCP_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<AocpSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  niveis: NiveisSection,
  'cpu-risc': CpuRiscSection,
  paralelismo: ParalelismoSection,
  memoria: MemoriaSection,
  'entrada-saida': EntradaSaidaSection,
  desempenho: DesempenhoSection,
  'logica-digital': LogicaDigitalSection,
  circuitos: CircuitosSection,
  'mips-basico': MipsBasicoSection,
  'mips-pratica': MipsPraticaSection,
  'mips-procedimentos': MipsProcedimentosSection,
  'isa-formatos': IsaFormatosSection,
  'caminho-dados': CaminhoDadosSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is AocpSectionId {
  return id in SECTION_COMPONENTS;
}

export default function AocpSections({ activeSection }: AocpSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
