import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import EtsoSections from './EtsoSections';
import { ETSO_EXAMS, ETSO_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 26% 24%, rgba(251,146,60,0.14) 0%, transparent 50%), radial-gradient(circle at 74% 72%, rgba(139,92,246,0.13) 0%, transparent 46%)';

export default function EtsoContent() {
  return (
    <SubjectContentLayout
      sections={ETSO_SECTIONS}
      exams={ETSO_EXAMS}
      eyebrow="Optativa · 40h · ETSO"
      codigo="ETSO"
      title={(
        <>
          Ética, Tecnologia<br /><span className="gradient-text">e Sociedade</span>
        </>
      )}
      description="Paradigma da complexidade · Ética como construção social · Leonardo Boff · As cinco éticas · Logística reversa · Dilemas e decisão · Cúpula Mundial sobre a Sociedade da Informação · UNESCO e IA · Os códigos da SBC"
      heroBackground={heroBackground}
      renderSection={sectionId => <EtsoSections activeSection={sectionId} />}
    />
  );
}
