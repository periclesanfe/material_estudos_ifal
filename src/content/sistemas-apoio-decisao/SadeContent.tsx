import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import SadeSections from './SadeSections';
import { SADE_EXAMS, SADE_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 22% 30%, rgba(251,191,36,0.13) 0%, transparent 50%), radial-gradient(circle at 78% 66%, rgba(52,211,153,0.12) 0%, transparent 46%)';

export default function SadeContent() {
  return (
    <SubjectContentLayout
      sections={SADE_SECTIONS}
      exams={SADE_EXAMS}
      eyebrow="8º período · 80h · SADE"
      codigo="SADE"
      title={(
        <>
          Sistemas de<br /><span className="gradient-text">Apoio à Decisão</span>
        </>
      )}
      description="Decisão e SAD · BI e ETL · Data warehouse · Pandas · Regras de associação · K-means · Árvores · Regressão · Redes neurais · AHP"
      heroBackground={heroBackground}
      renderSection={sectionId => <SadeSections activeSection={sectionId} />}
    />
  );
}
