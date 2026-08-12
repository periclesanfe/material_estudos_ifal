import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import EstruturaDadosSections from './EstruturaDadosSections';
import { ESTRUTURA_DADOS_EXAMS, ESTRUTURA_DADOS_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 30% 38%, rgba(108,99,255,0.16) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251,191,36,0.10) 0%, transparent 42%)';

export default function EstruturaDadosContent() {
  return (
    <SubjectContentLayout
      sections={ESTRUTURA_DADOS_SECTIONS}
      exams={ESTRUTURA_DADOS_EXAMS}
      codigo="ESTD"
      eyebrow="3º período · 80h · ESTD"
      title={(
        <>
          Estrutura<br /><span className="gradient-text">de Dados</span>
        </>
      )}
      description="Python · Recursividade · Big O · TAD · Pilhas · Filas · Hashing · Ordenação · Árvores e BST"
      heroBackground={heroBackground}
      renderSection={sectionId => <EstruturaDadosSections activeSection={sectionId} />}
    />
  );
}
