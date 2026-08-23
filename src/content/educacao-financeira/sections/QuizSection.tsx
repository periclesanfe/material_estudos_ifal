import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { EDFI_EXAMS, EDFI_GUIDE_CONTEXT, EDFI_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="38 questões sobre comportamento, dívidas, crédito e investimentos — todas ancoradas nas cartilhas e no glossário"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={EDFI_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={EDFI_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Educação Financeira para gerar lotes de 1, 5 ou 10
                perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={EDFI_GUIDE_CONTEXT} topics={EDFI_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={EDFI_GUIDE_CONTEXT} topics={EDFI_TOPICS} />}
      />
    </section>
  );
}
