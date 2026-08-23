import IntroSection from './sections/IntroSection';
import CamadasSection from './sections/CamadasSection';
import ComutacaoSection from './sections/ComutacaoSection';
import DesempenhoSection from './sections/DesempenhoSection';
import AplicacaoSection from './sections/AplicacaoSection';
import HttpSection from './sections/HttpSection';
import FtpEmailSection from './sections/FtpEmailSection';
import DnsSection from './sections/DnsSection';
import TransporteSection from './sections/TransporteSection';
import ConfiavelSection from './sections/ConfiavelSection';
import TcpSection from './sections/TcpSection';
import CongestionamentoSection from './sections/CongestionamentoSection';
import CamadaRedeSection from './sections/CamadaRedeSection';
import IpSection from './sections/IpSection';
import RoteamentoSection from './sections/RoteamentoSection';
import SocketsSection from './sections/SocketsSection';
import QuizSection from './sections/QuizSection';
import type { FrdcSectionId } from './data';

interface FrdcSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de FRDC_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<FrdcSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  camadas: CamadasSection,
  comutacao: ComutacaoSection,
  desempenho: DesempenhoSection,
  aplicacao: AplicacaoSection,
  http: HttpSection,
  'ftp-email': FtpEmailSection,
  dns: DnsSection,
  transporte: TransporteSection,
  confiavel: ConfiavelSection,
  tcp: TcpSection,
  congestionamento: CongestionamentoSection,
  'camada-rede': CamadaRedeSection,
  ip: IpSection,
  roteamento: RoteamentoSection,
  sockets: SocketsSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is FrdcSectionId {
  return id in SECTION_COMPONENTS;
}

export default function FrdcSections({ activeSection }: FrdcSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
