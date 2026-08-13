import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import EmpdSections from './EmpdSections';
import { EMPD_EXAMS, EMPD_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 24% 32%, rgba(108,99,255,0.16) 0%, transparent 50%), radial-gradient(circle at 76% 66%, rgba(255,159,67,0.10) 0%, transparent 46%)';

export default function EmpdContent() {
  return (
    <SubjectContentLayout
      sections={EMPD_SECTIONS}
      exams={EMPD_EXAMS}
      eyebrow="6º período · 80h · EMPD"
      title={(
        <>
          Empreendedorismo<br /><span className="gradient-text">Digital</span>
        </>
      )}
      description="Startups · Oportunidade · Canvas · Customer Development · Lean e MVP · Unit Economics · Financiamento · Pitch"
      heroBackground={heroBackground}
      renderSection={sectionId => <EmpdSections activeSection={sectionId} />}
    />
  );
}
