import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { GPJT_EXAMS, GPJT_GUIDE_CONTEXT, GPJT_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="42 questões filtráveis pelas quatro atividades avaliativas da disciplina"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={GPJT_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={GPJT_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Gerência de Projeto para gerar lotes de 1, 5 ou 10
                perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={GPJT_GUIDE_CONTEXT} topics={GPJT_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={GPJT_GUIDE_CONTEXT} topics={GPJT_TOPICS} />}
      />
    </section>
  );
}
