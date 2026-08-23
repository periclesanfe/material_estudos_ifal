import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { FRDC_EXAMS, FRDC_GUIDE_CONTEXT, FRDC_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="46 questões percorrendo a pilha de cima para baixo, na ordem dos quatro módulos"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={FRDC_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={FRDC_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Fundamentos de Redes de Computadores para gerar lotes de 1,
                5 ou 10 perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={FRDC_GUIDE_CONTEXT} topics={FRDC_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={FRDC_GUIDE_CONTEXT} topics={FRDC_TOPICS} />}
      />
    </section>
  );
}
