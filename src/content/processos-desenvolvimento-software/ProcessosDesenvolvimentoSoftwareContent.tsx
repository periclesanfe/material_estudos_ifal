import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import ProcessosDesenvolvimentoSoftwareSections from './ProcessosDesenvolvimentoSoftwareSections';
import { PDSW_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 28% 38%, rgba(99, 102, 241,0.15) 0%, transparent 48%), radial-gradient(circle at 72% 58%, rgba(59, 130, 246,0.10) 0%, transparent 42%)';

export default function ProcessosDesenvolvimentoSoftwareContent() {
  return (
    <SubjectContentLayout
      sections={PDSW_SECTIONS}
      codigo="PDSW"
      eyebrow="6º período · 80h · PDSW"
      title={(
        <>
          Processos de<br /><span className="gradient-text">Desenvolvimento</span>
        </>
      )}
      description="Engenharia de Software · Processos · Requisitos · Projeto · Arquitetura · Testes · DevOps"
      heroBackground={heroBackground}
      renderSection={sectionId => <ProcessosDesenvolvimentoSoftwareSections activeSection={sectionId} />}
    />
  );
}
