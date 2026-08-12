import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { PDSW_GUIDE_CONTEXT, PDSW_TOPICS, QUIZ_DATA } from '../data';
import { pdswExamLabels } from './blocks';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Questões organizadas por N1 / AV1, N1 / AV2 e N2 / AV4, com alternativas normais, Kahoot e geração por IA."
        colorClass="text-accent"
      />
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={pdswExamLabels} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={pdswExamLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa o contexto da disciplina para gerar lotes de perguntas inéditas por avaliação ou capítulo.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />}
      />
    </section>
  );
}
