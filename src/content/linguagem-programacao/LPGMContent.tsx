import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import LPGMSections from './LPGMSections';
import { LPGM_EXAMS, LPGM_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 26% 30%, rgba(108,99,255,0.16) 0%, transparent 46%), radial-gradient(circle at 74% 64%, rgba(78,205,196,0.11) 0%, transparent 44%)';

export default function LPGMContent() {
  return (
    <SubjectContentLayout
      sections={LPGM_SECTIONS}
      exams={LPGM_EXAMS}
      codigo="LPGM"
      eyebrow="2º período · 80h · LNPG"
      title={(
        <>
          Linguagem de<br /><span className="gradient-text">Programação</span>
        </>
      )}
      description="A disciplina foi dada em Python, com projeto final em C — as demais linguagens entram para comparar conceitos"
      heroBackground={heroBackground}
      renderSection={sectionId => <LPGMSections activeSection={sectionId} />}
    />
  );
}
