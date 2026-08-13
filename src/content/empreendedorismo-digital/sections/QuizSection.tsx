import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader, Subsection, PanelList } from '../../../components/sections';
import { EMPD_EXAMS, EMPD_GUIDE_CONTEXT, EMPD_TOPICS, QUIZ_DATA } from '../data';
import { discursiveAnswerSteps, examChecklist } from './blocks';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="32 questões cobrindo a disciplina inteira — dos fundamentos ao pitch, com as contas de CAC, LTV, payback e NRR resolvidas passo a passo no retorno"
        colorClass="text-accent"
      />

      <Subsection title="Antes de responder: o checklist" accentClass="text-accent2">
        <PanelList items={examChecklist} />
      </Subsection>

      <Subsection title="Modelo de resposta discursiva" accentClass="text-accent3">
        <FlowDiagram items={discursiveAnswerSteps} />
      </Subsection>

      <HighlightBox title="O que faz uma resposta ser forte" accent="var(--color-accent3)">
        <p>
          Uma resposta forte não apenas diz o que é: explica <strong>por que importa</strong>, <strong>como
          funciona</strong>, <strong>quais métricas testam a hipótese</strong> e <strong>que decisão decorre da
          evidência</strong>. Comece pela definição direta em uma ou duas frases, desenvolva o mecanismo e as condições,
          inclua um exemplo aplicado — de preferência FilaZero, Twitch ou TechNova — e conclua com a implicação
          gerencial.
        </p>
        <p>
          Em questões discursivas, sinalize a pergunta antes de respondê-la. Conteúdo correto perde valor quando o
          leitor não consegue casar cada resposta com a pergunta correspondente.
        </p>
      </HighlightBox>

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={EMPD_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={EMPD_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Empreendedorismo Digital para gerar lotes de 1, 5 ou 10 perguntas
                inéditas com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={EMPD_GUIDE_CONTEXT} topics={EMPD_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={EMPD_GUIDE_CONTEXT} topics={EMPD_TOPICS} />}
      />
    </section>
  );
}
