import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import ExportSubjectActions from '../../components/ui/ExportSubjectActions';
import MarketingSections from './MarketingSections';
import { MARKETING_GUIDE_CONTEXT, MARKETING_SECTIONS, QUIZ_DATA } from './data';

const heroBackground =
  'radial-gradient(circle at 30% 35%, rgba(99, 102, 241,0.15) 0%, transparent 48%), radial-gradient(circle at 70% 60%, rgba(239, 68, 68,0.1) 0%, transparent 42%)';

export default function MarketingContent() {
  return (
    <SubjectContentLayout
      sections={MARKETING_SECTIONS}
      codigo="MKCE"
      eyebrow="Optativa · Gestão de TI · 80h"
      title={(
        <>
          Marketing &<br /><span className="gradient-text">Comércio Eletrônico</span>
        </>
      )}
      description="Conceitos Iniciais · Mix de Marketing · Marketing de Relacionamento · Pesquisa · Segmentação"
      heroBackground={heroBackground}
      heroActions={(
        <ExportSubjectActions
          title="Marketing e Comércio Eletrônico"
          fileName="marketing-comercio-eletronico"
          guideContext={MARKETING_GUIDE_CONTEXT}
          quizData={QUIZ_DATA}
        />
      )}
      renderSection={sectionId => <MarketingSections activeSection={sectionId} />}
    />
  );
}
