import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import FundamentosSISections from './FundamentosSISections';
import { FUNDAMENTOS_SI_EXAMS, FUNDAMENTOS_SI_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 28% 35%, rgba(108,99,255,0.16) 0%, transparent 50%), radial-gradient(circle at 72% 62%, rgba(52,211,153,0.10) 0%, transparent 44%)';

export default function FundamentosSIContent() {
  return (
    <SubjectContentLayout
      sections={FUNDAMENTOS_SI_SECTIONS}
      exams={FUNDAMENTOS_SI_EXAMS}
      codigo="FUSI"
      eyebrow="1º período · 80h · FUSI"
      title={(
        <>
          Fundamentos de<br /><span className="gradient-text">Sistemas de Informação</span>
        </>
      )}
      description="Dado e informação · CBIS · Organizações · Hardware · Software · Banco de dados · Redes · Internet · E-commerce · Conversão numérica"
      heroBackground={heroBackground}
      renderSection={sectionId => <FundamentosSISections activeSection={sectionId} />}
    />
  );
}
