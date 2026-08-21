import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { APSI_EXAMS, APSI_GUIDE_CONTEXT, APSI_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="40 questões cobrindo requisitos, RUP, UML e arquitetura — no vocabulário da disciplina"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={APSI_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={APSI_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Análise e Projeto de Sistemas de Informação
                para gerar lotes de 1, 5 ou 10 perguntas inéditas, com alternativas, resposta correta
                e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={APSI_GUIDE_CONTEXT} topics={APSI_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={APSI_GUIDE_CONTEXT} topics={APSI_TOPICS} />}
      />
    </section>
  );
}
