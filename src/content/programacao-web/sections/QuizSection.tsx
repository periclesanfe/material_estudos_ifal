import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { PGWB_EXAMS, PGWB_GUIDE_CONTEXT, PGWB_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="46 questões sobre HTTP, DOM, Express, cookies, arquitetura e ORM"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={PGWB_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={PGWB_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Programação Web 2 para gerar lotes de 1, 5 ou 10
                perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={PGWB_GUIDE_CONTEXT} topics={PGWB_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={PGWB_GUIDE_CONTEXT} topics={PGWB_TOPICS} />}
      />
    </section>
  );
}
