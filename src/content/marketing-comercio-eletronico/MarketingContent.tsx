import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import MarketingSections from './MarketingSections';
import { MARKETING_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 30% 35%, rgba(108,99,255,0.15) 0%, transparent 48%), radial-gradient(circle at 70% 60%, rgba(255,107,107,0.1) 0%, transparent 42%)';

export default function MarketingContent() {
  return (
    <SubjectContentLayout
      sections={MARKETING_SECTIONS}
      eyebrow="Optativa · Gestão de TI · 80h"
      title={(
        <>
          Marketing &<br /><span className="gradient-text">Comércio Eletrônico</span>
        </>
      )}
      description="Conceitos Iniciais · Mix de Marketing · Marketing de Relacionamento · Pesquisa · Segmentação"
      heroBackground={heroBackground}
      renderSection={sectionId => <MarketingSections activeSection={sectionId} />}
    />
  );
}
