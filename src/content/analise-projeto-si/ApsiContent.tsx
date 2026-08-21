import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import ApsiSections from './ApsiSections';
import { APSI_EXAMS, APSI_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 24% 34%, rgba(96,165,250,0.15) 0%, transparent 50%), radial-gradient(circle at 76% 62%, rgba(244,114,182,0.11) 0%, transparent 46%)';

export default function ApsiContent() {
  return (
    <SubjectContentLayout
      sections={APSI_SECTIONS}
      exams={APSI_EXAMS}
      eyebrow="5º período · 80h · APSI"
      codigo="APSI"
      title={(
        <>
          Análise e Projeto de<br /><span className="gradient-text">Sistemas de Informação</span>
        </>
      )}
      description="Engenharia de software · Processos e RUP · Requisitos · Casos de uso · UML completa · Arquitetura · SOLID e padrões"
      heroBackground={heroBackground}
      renderSection={sectionId => <ApsiSections activeSection={sectionId} />}
    />
  );
}
