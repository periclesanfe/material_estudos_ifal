import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import GpjtSections from './GpjtSections';
import { GPJT_EXAMS, GPJT_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 25% 30%, rgba(251,191,36,0.14) 0%, transparent 50%), radial-gradient(circle at 75% 68%, rgba(99,102,241,0.13) 0%, transparent 46%)';

export default function GpjtContent() {
  return (
    <SubjectContentLayout
      sections={GPJT_SECTIONS}
      exams={GPJT_EXAMS}
      eyebrow="5º período · 80h · GPJT"
      codigo="GPJT"
      title={(
        <>
          Gerência de<br /><span className="gradient-text">Projeto</span>
        </>
      )}
      description="Projeto, programa e portfólio · PMBOK 6 e 7 · Partes interessadas · Termo de Abertura · Escopo e SMART · EAP · Caminho crítico · Riscos · Valor agregado · Encerramento · Ágil × tradicional"
      heroBackground={heroBackground}
      renderSection={sectionId => <GpjtSections activeSection={sectionId} />}
    />
  );
}
