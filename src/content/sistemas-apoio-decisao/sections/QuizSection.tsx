import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { SADE_EXAMS, SADE_GUIDE_CONTEXT, SADE_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="38 questões com os cálculos e exemplos resolvidos do material da turma"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={SADE_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={SADE_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Sistemas de Apoio à Decisão para gerar
                lotes de 1, 5 ou 10 perguntas inéditas, com alternativas, resposta correta e
                explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={SADE_GUIDE_CONTEXT} topics={SADE_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={SADE_GUIDE_CONTEXT} topics={SADE_TOPICS} />}
      />
    </section>
  );
}
