import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import FdbdSections from './FdbdSections';
import { FDBD_EXAMS, FDBD_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 26% 32%, rgba(52,211,153,0.14) 0%, transparent 50%), radial-gradient(circle at 74% 64%, rgba(108,99,255,0.12) 0%, transparent 46%)';

export default function FdbdContent() {
  return (
    <SubjectContentLayout
      sections={FDBD_SECTIONS}
      exams={FDBD_EXAMS}
      eyebrow="3º período · 80h · FDBD"
      codigo="FDBD"
      title={(
        <>
          Fundamentos de<br /><span className="gradient-text">Banco de Dados</span>
        </>
      )}
      description="BD e SGBD · Arquitetura · Modelo ER e EER · Modelo relacional · Transformação · Normalização · Álgebra relacional · SQL (DDL, DML, DTL, DQL)"
      heroBackground={heroBackground}
      renderSection={sectionId => <FdbdSections activeSection={sectionId} />}
    />
  );
}
