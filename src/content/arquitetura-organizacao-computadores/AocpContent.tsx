import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import AocpSections from './AocpSections';
import { AOCP_EXAMS, AOCP_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 22% 30%, rgba(56,189,248,0.15) 0%, transparent 50%), radial-gradient(circle at 78% 68%, rgba(251,146,60,0.12) 0%, transparent 46%)';

export default function AocpContent() {
  return (
    <SubjectContentLayout
      sections={AOCP_SECTIONS}
      exams={AOCP_EXAMS}
      eyebrow="2º período · 80h · AOCP"
      codigo="AOCP"
      title={(
        <>
          Arquitetura e Organização de<br /><span className="gradient-text">Computadores</span>
        </>
      )}
      description="Máquinas de níveis · CPU e ciclo de execução · RISC × CISC · Paralelismo · Memória e E/S · Desempenho · Lógica digital · Assembly MIPS · Formatos de instrução · Caminho de dados"
      heroBackground={heroBackground}
      renderSection={sectionId => <AocpSections activeSection={sectionId} />}
    />
  );
}
