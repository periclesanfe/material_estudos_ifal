import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import PgwbSections from './PgwbSections';
import { PGWB_EXAMS, PGWB_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 20% 28%, rgba(52,211,153,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 68%, rgba(56,189,248,0.13) 0%, transparent 46%)';

export default function PgwbContent() {
  return (
    <SubjectContentLayout
      sections={PGWB_SECTIONS}
      exams={PGWB_EXAMS}
      eyebrow="5º período · 80h · PGWB"
      codigo="PGWB"
      title={(
        <>
          Programação<br /><span className="gradient-text">Web 2</span>
        </>
      )}
      description="HTTP e a arquitetura da Web · HTML e URL · DOM e Fetch API · Node/Express · Rotas e validação no backend · Cookies e sessões · CRUD com SQLite · Arquitetura em camadas e Ports & Adapters · Jest e Supertest · ORM com Sequelize"
      heroBackground={heroBackground}
      renderSection={sectionId => <PgwbSections activeSection={sectionId} />}
    />
  );
}
