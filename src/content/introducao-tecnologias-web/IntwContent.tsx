import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import IntwSections from './IntwSections';
import { INTW_EXAMS, INTW_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 28% 35%, rgba(56,189,248,0.16) 0%, transparent 50%), radial-gradient(circle at 72% 62%, rgba(251,146,60,0.10) 0%, transparent 42%)';

export default function IntwContent() {
  return (
    <SubjectContentLayout
      sections={INTW_SECTIONS}
      exams={INTW_EXAMS}
      codigo="INTW"
      eyebrow="1º período · 40h · INTW"
      title={(
        <>
          Introdução às<br /><span className="gradient-text">Tecnologias Web</span>
        </>
      )}
      description="TIC · Internet e HTTP · HTML5 · Semântica · Tabelas · Formulários · CSS · Flexbox · JavaScript e DOM"
      heroBackground={heroBackground}
      renderSection={sectionId => <IntwSections activeSection={sectionId} />}
    />
  );
}
