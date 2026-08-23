import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import GptiSections from './GptiSections';
import { GPTI_EXAMS, GPTI_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 24% 30%, rgba(244,114,182,0.14) 0%, transparent 50%), radial-gradient(circle at 76% 68%, rgba(56,189,248,0.12) 0%, transparent 46%)';

export default function GptiContent() {
  return (
    <SubjectContentLayout
      sections={GPTI_SECTIONS}
      exams={GPTI_EXAMS}
      eyebrow="4º período · 40h · GPTI"
      codigo="GPTI"
      title={(
        <>
          Gestão de Pessoas<br />em <span className="gradient-text">TI</span>
        </>
      )}
      description="Motivação, Maslow e Herzberg · Teorias X e Y · Os seis processos · Recrutamento e seleção · Cargos e desempenho · Remuneração · Treinamento · QVT · Cultura organizacional"
      heroBackground={heroBackground}
      renderSection={sectionId => <GptiSections activeSection={sectionId} />}
    />
  );
}
