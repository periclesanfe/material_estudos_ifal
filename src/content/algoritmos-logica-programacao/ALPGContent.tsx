import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import ALPGSections from './ALPGSections';
import { ALPG_EXAMS, ALPG_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 26% 32%, rgba(99, 102, 241,0.16) 0%, transparent 46%), radial-gradient(circle at 74% 60%, rgba(34, 197, 94,0.12) 0%, transparent 44%)';

export default function ALPGContent() {
  return (
    <SubjectContentLayout
      sections={ALPG_SECTIONS}
      exams={ALPG_EXAMS}
      codigo="ALPG"
      eyebrow="1º período · 80h · ALPG"
      title={(
        <>
          Algoritmos e<br /><span className="gradient-text">Lógica de Programação</span>
        </>
      )}
      description="Lógica · Python · Condicionais · Repetição · Listas · Funções · Strings · Exceções"
      heroBackground={heroBackground}
      renderSection={sectionId => <ALPGSections activeSection={sectionId} />}
    />
  );
}
