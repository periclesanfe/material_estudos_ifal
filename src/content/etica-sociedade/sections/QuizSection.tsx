import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { ETSO_EXAMS, ETSO_GUIDE_CONTEXT, ETSO_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="48 questões sobre complexidade, ética, dilemas, documentos internacionais e os códigos da SBC"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={ETSO_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={ETSO_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Ética, Tecnologia e Sociedade para gerar lotes de 1, 5 ou
                10 perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={ETSO_GUIDE_CONTEXT} topics={ETSO_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={ETSO_GUIDE_CONTEXT} topics={ETSO_TOPICS} />}
      />
    </section>
  );
}
