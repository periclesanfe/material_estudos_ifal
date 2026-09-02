import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import LmmdSections from './LmmdSections';
import { LMMD_EXAMS, LMMD_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 28% 35%, rgba(99, 102, 241,0.16) 0%, transparent 50%), radial-gradient(circle at 72% 62%, rgba(59, 130, 246,0.10) 0%, transparent 44%)';

export default function LmmdContent() {
  return (
    <SubjectContentLayout
      sections={LMMD_SECTIONS}
      exams={LMMD_EXAMS}
      codigo="LMMD"
      eyebrow="1º período · 80h · LMMD"
      title={(
        <>
          Lógica Matemática<br /><span className="gradient-text">e Matemática Discreta</span>
        </>
      )}
      description="Conjuntos · Relações · Funções · Combinatória · Sequências · Somatórios · Lógica Proposicional"
      heroBackground={heroBackground}
      renderSection={sectionId => <LmmdSections activeSection={sectionId} />}
    />
  );
}
