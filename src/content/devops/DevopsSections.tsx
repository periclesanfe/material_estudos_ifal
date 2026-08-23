import IntroSection from './sections/IntroSection';
import CulturaSection from './sections/CulturaSection';
import MuroSection from './sections/MuroSection';
import LoopSection from './sections/LoopSection';
import RoadmapSection from './sections/RoadmapSection';
import LinuxBaseSection from './sections/LinuxBaseSection';
import LinuxTextoSection from './sections/LinuxTextoSection';
import LinuxProcessosSection from './sections/LinuxProcessosSection';
import LinuxPermissoesSection from './sections/LinuxPermissoesSection';
import ContainersSection from './sections/ContainersSection';
import DockerSection from './sections/DockerSection';
import KubernetesSection from './sections/KubernetesSection';
import YamlSection from './sections/YamlSection';
import EstrategiasSection from './sections/EstrategiasSection';
import QuizSection from './sections/QuizSection';
import type { DevoSectionId } from './data';

interface DevopsSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de DEVO_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<DevoSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  cultura: CulturaSection,
  muro: MuroSection,
  loop: LoopSection,
  roadmap: RoadmapSection,
  'linux-base': LinuxBaseSection,
  'linux-texto': LinuxTextoSection,
  'linux-processos': LinuxProcessosSection,
  'linux-permissoes': LinuxPermissoesSection,
  containers: ContainersSection,
  docker: DockerSection,
  kubernetes: KubernetesSection,
  yaml: YamlSection,
  estrategias: EstrategiasSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is DevoSectionId {
  return id in SECTION_COMPONENTS;
}

export default function DevopsSections({ activeSection }: DevopsSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
