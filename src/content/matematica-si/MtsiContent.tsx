import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import MtsiSections from './MtsiSections';
import { MTSI_EXAMS, MTSI_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 22% 26%, rgba(129,140,248,0.16) 0%, transparent 50%), radial-gradient(circle at 78% 70%, rgba(45,212,191,0.12) 0%, transparent 46%)';

export default function MtsiContent() {
  return (
    <SubjectContentLayout
      sections={MTSI_SECTIONS}
      exams={MTSI_EXAMS}
      eyebrow="2º período · 80h · MTSI"
      codigo="MTSI"
      title={(
        <>
          Matemática para<br /><span className="gradient-text">Sistemas de Informação</span>
        </>
      )}
      description="Matrizes e determinantes · Sistemas lineares · Escalonamento de Gauss · Transformações lineares · Relações e equivalência · Funções e bijeção · Recursão · Grafos, BFS e DFS"
      heroBackground={heroBackground}
      renderSection={sectionId => <MtsiSections activeSection={sectionId} />}
    />
  );
}
