import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import PoobSections from './PoobSections';
import { POOB_EXAMS, POOB_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 25% 30%, rgba(244,114,182,0.14) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(96,165,250,0.12) 0%, transparent 46%)';

export default function PoobContent() {
  return (
    <SubjectContentLayout
      sections={POOB_SECTIONS}
      exams={POOB_EXAMS}
      eyebrow="4º período · 80h · POOB"
      codigo="POOB"
      title={(
        <>
          Programação<br /><span className="gradient-text">Orientada a Objetos</span>
        </>
      )}
      description="Java e JVM · Tipos e casting · Controle de fluxo · Arrays · Classes e objetos · Encapsulamento · Herança · Polimorfismo · Interfaces · Exceções e camadas · JDBC · JUnit · Padrões"
      heroBackground={heroBackground}
      renderSection={sectionId => <PoobSections activeSection={sectionId} />}
    />
  );
}
