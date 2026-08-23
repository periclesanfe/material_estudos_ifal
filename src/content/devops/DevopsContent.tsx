import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import DevopsSections from './DevopsSections';
import { DEVO_EXAMS, DEVO_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 24% 28%, rgba(34,211,238,0.15) 0%, transparent 50%), radial-gradient(circle at 76% 70%, rgba(129,140,248,0.13) 0%, transparent 46%)';

export default function DevopsContent() {
  return (
    <SubjectContentLayout
      sections={DEVO_SECTIONS}
      exams={DEVO_EXAMS}
      eyebrow="Optativa · 80h · DEVO"
      codigo="DEVO"
      title={(
        <>
          <span className="gradient-text">DevOps</span>
        </>
      )}
      description="Cultura e ciclo · Muro da confusão · Linux e linha de comando · Permissões · Containers e Docker · Kubernetes e GitOps · YAML · BlueGreen e Canary"
      heroBackground={heroBackground}
      renderSection={sectionId => <DevopsSections activeSection={sectionId} />}
    />
  );
}
