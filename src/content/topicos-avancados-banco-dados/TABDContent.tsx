import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import TABDSections from './TABDSections';
import { TABD_EXAMS, TABD_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 28% 30%, rgba(108,99,255,0.16) 0%, transparent 46%), radial-gradient(circle at 72% 62%, rgba(78,205,196,0.11) 0%, transparent 44%)';

export default function TABDContent() {
  return (
    <SubjectContentLayout
      sections={TABD_SECTIONS}
      exams={TABD_EXAMS}
      codigo="TABD"
      eyebrow="5º período · 80h · TABD"
      title={(
        <>
          Tópicos Avançados<br /><span className="gradient-text">de Banco de Dados</span>
        </>
      )}
      description="Projetos práticos · Business Intelligence · Data Warehouse · Modelagem Dimensional · ETL · OLAP · Power BI · Big Data · Mineração de Dados"
      heroBackground={heroBackground}
      renderSection={sectionId => <TABDSections activeSection={sectionId} />}
    />
  );
}
