import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import FrdcSections from './FrdcSections';
import { FRDC_EXAMS, FRDC_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 24% 26%, rgba(45,212,191,0.15) 0%, transparent 50%), radial-gradient(circle at 76% 70%, rgba(129,140,248,0.12) 0%, transparent 46%)';

export default function FrdcContent() {
  return (
    <SubjectContentLayout
      sections={FRDC_SECTIONS}
      exams={FRDC_EXAMS}
      eyebrow="4º período · 80h · FRDC"
      codigo="FRDC"
      title={(
        <>
          Fundamentos de<br /><span className="gradient-text">Redes de Computadores</span>
        </>
      )}
      description="Modelo de camadas · Comutação de pacotes · Atrasos e vazão · HTTP, FTP, e-mail e DNS · UDP e TCP · Transferência confiável · Controle de congestionamento · IP e sub-redes · Roteamento · Sockets"
      heroBackground={heroBackground}
      renderSection={sectionId => <FrdcSections activeSection={sectionId} />}
    />
  );
}
