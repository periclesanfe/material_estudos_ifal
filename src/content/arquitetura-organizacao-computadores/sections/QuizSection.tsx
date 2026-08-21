import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { AOCP_EXAMS, AOCP_GUIDE_CONTEXT, AOCP_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="40 questões sobre toda a disciplina — incluindo os três exercícios numéricos de desempenho e as armadilhas do assembly"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={AOCP_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={AOCP_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Arquitetura e Organização de Computadores para gerar lotes
                de 1, 5 ou 10 perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={AOCP_GUIDE_CONTEXT} topics={AOCP_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={AOCP_GUIDE_CONTEXT} topics={AOCP_TOPICS} />}
      />
    </section>
  );
}
