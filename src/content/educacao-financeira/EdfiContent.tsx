import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import EdfiSections from './EdfiSections';
import { EDFI_EXAMS, EDFI_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 22% 28%, rgba(52,211,153,0.15) 0%, transparent 50%), radial-gradient(circle at 78% 68%, rgba(251,191,36,0.12) 0%, transparent 46%)';

export default function EdfiContent() {
  return (
    <SubjectContentLayout
      sections={EDFI_SECTIONS}
      exams={EDFI_EXAMS}
      eyebrow="Optativa · 40h · EDFI"
      codigo="EDFI"
      title={(
        <>
          Educação<br /><span className="gradient-text">Financeira</span>
        </>
      )}
      description="Autoconhecimento · Indicadores patrimoniais · Planejamento familiar · Dívidas e superendividamento · Cartão de crédito · Cheque especial · Bets · Juros compostos · Tripé dos investimentos · Tesouro Direto"
      heroBackground={heroBackground}
      renderSection={sectionId => <EdfiSections activeSection={sectionId} />}
    />
  );
}
