import IntroSection from './sections/IntroSection';
import HistoriaSection from './sections/HistoriaSection';
import HttpSection from './sections/HttpSection';
import HtmlUrlSection from './sections/HtmlUrlSection';
import DomSection from './sections/DomSection';
import FetchSection from './sections/FetchSection';
import EstruturaSection from './sections/EstruturaSection';
import ExpressSection from './sections/ExpressSection';
import RotasSection from './sections/RotasSection';
import ValidacaoSection from './sections/ValidacaoSection';
import CookiesSection from './sections/CookiesSection';
import PersistenciaSection from './sections/PersistenciaSection';
import CamadasSection from './sections/CamadasSection';
import TestesSection from './sections/TestesSection';
import OrmSection from './sections/OrmSection';
import AtividadesSection from './sections/AtividadesSection';
import QuizSection from './sections/QuizSection';
import type { PgwbSectionId } from './data';

interface PgwbSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de PGWB_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<PgwbSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  historia: HistoriaSection,
  http: HttpSection,
  'html-url': HtmlUrlSection,
  dom: DomSection,
  fetch: FetchSection,
  estrutura: EstruturaSection,
  express: ExpressSection,
  rotas: RotasSection,
  validacao: ValidacaoSection,
  cookies: CookiesSection,
  persistencia: PersistenciaSection,
  camadas: CamadasSection,
  testes: TestesSection,
  orm: OrmSection,
  atividades: AtividadesSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is PgwbSectionId {
  return id in SECTION_COMPONENTS;
}

export default function PgwbSections({ activeSection }: PgwbSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
