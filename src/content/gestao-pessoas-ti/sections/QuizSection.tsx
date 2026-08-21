import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { GPTI_EXAMS, GPTI_GUIDE_CONTEXT, GPTI_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="38 questões filtráveis pelas duas provas e pelos trabalhos em grupo"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={GPTI_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={GPTI_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Gestão de Pessoas em TI para gerar lotes de 1, 5 ou 10
                perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={GPTI_GUIDE_CONTEXT} topics={GPTI_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={GPTI_GUIDE_CONTEXT} topics={GPTI_TOPICS} />}
      />
    </section>
  );
}
