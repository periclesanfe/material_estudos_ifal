import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import ComportamentoOrganizacionalSections from './ComportamentoOrganizacionalSections';
import { COMPORTAMENTO_ORGANIZACIONAL_SECTIONS } from './data';

const heroBackground =
  'linear-gradient(135deg, rgba(108, 99, 255, 0.13), transparent 38%), linear-gradient(215deg, rgba(78, 205, 196, 0.1), transparent 42%)';

export default function ComportamentoOrganizacionalContent() {
  return (
    <SubjectContentLayout
      sections={COMPORTAMENTO_ORGANIZACIONAL_SECTIONS}
      eyebrow="Optativa do 8º período · Gestão de TI · 80h · CORG"
      title={(
        <>
          Comportamento<br /><span className="gradient-text">Organizacional</span>
        </>
      )}
      description="Indivíduos · Motivação · Grupos · Comunicação · Liderança · Conflito e Negociação"
      heroBackground={heroBackground}
      renderSection={sectionId => <ComportamentoOrganizacionalSections activeSection={sectionId} />}
    />
  );
}
