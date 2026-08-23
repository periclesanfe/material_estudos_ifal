import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import InfrSections from './InfrSections';
import { INFR_EXAMS, INFR_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 20% 25%, rgba(56,189,248,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(167,139,250,0.12) 0%, transparent 46%)';

export default function InfrContent() {
  return (
    <SubjectContentLayout
      sections={INFR_SECTIONS}
      exams={INFR_EXAMS}
      eyebrow="Optativa · 80h · INFR"
      codigo="INFR"
      title={(
        <>
          Projeto de<br /><span className="gradient-text">Infraestrutura</span>
        </>
      )}
      description="Normas de cabeamento · Limites da TIA-568 · Categorias e blindagens · Pinagem · Fibra óptica · As cinco etapas do projeto · Cenários-cliente · PoE · Diagnóstico de camada 1 · Micro-ISP GPON"
      heroBackground={heroBackground}
      renderSection={sectionId => <InfrSections activeSection={sectionId} />}
    />
  );
}
