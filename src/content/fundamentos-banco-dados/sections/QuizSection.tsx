import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { FDBD_EXAMS, FDBD_GUIDE_CONTEXT, FDBD_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="38 questões no vocabulário da professora — incluindo os erros reais dos gabaritos como pegadinhas"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={FDBD_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={FDBD_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Fundamentos de Banco de Dados para gerar lotes de 1, 5 ou
                10 perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={FDBD_GUIDE_CONTEXT} topics={FDBD_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={FDBD_GUIDE_CONTEXT} topics={FDBD_TOPICS} />}
      />
    </section>
  );
}
