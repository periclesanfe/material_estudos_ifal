import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import { bmlCycle, metricTypes, innovationAccounting, pivotTypes, mvpTypes, hypothesisToExperiment } from './blocks';

export default function LeanMvpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Lean Startup, Experimentação e MVP"
        subtitle="Ciclos curtos de construir, medir e aprender no lugar de previsões longas — e o experimento mínimo capaz de responder a cada pergunta"
        colorClass="text-accent"
        badge="Lean e MVP"
      />

      <Subsection title="O ciclo" accentClass="text-accent2">
        <FlowDiagram items={bmlCycle} />
      </Subsection>

      <HighlightBox title="Planeje o ciclo de trás para frente">
        <p>
          A ordem de execução é construir, medir, aprender. A ordem de <strong>planejamento</strong> é a inversa:
          primeiro define-se o <strong>aprendizado necessário</strong>, depois a <strong>métrica</strong> que o revela e
          só então o <strong>MVP</strong> capaz de produzi-la.
        </p>
        <p>
          Sem essa lógica, a equipe constrói algo pequeno e rápido — e incapaz de responder à pergunta estratégica. O
          objetivo do Lean não é lançar depressa: é <strong>reduzir incerteza por unidade de tempo e recurso</strong>.
        </p>
      </HighlightBox>

      <Subsection title="Métrica acionável ou métrica de vaidade?" accentClass="text-accent3">
        <ComparisonTable
          rows={metricTypes}
          leftLabel="Acionável"
          rightLabel="De vaidade"
          criterionLabel="Critério"
        />
      </Subsection>

      <Subsection title="Contabilidade da inovação" accentClass="text-accent4">
        <PanelList items={innovationAccounting} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="De Concluído para Validado" accent="var(--color-accent4)">
        <p>
          Uma história tecnicamente concluída não é necessariamente valiosa. O estudo da TechNova acrescenta o estado{' '}
          <strong>Validado</strong> depois de Concluído: a funcionalidade precisa produzir o comportamento esperado no
          usuário, não apenas passar nos testes.
        </p>
        <p>
          Integração contínua, pequenos lotes, implantação contínua e capacidade de rollback formam o sistema que torna
          barato experimentar. Quanto menor o custo de publicar e reverter, mais hipóteses cabem no mesmo mês.
        </p>
      </HighlightBox>

      <Subsection title="Os seis tipos de pivot" accentClass="text-accent5">
        <ConceptGrid items={pivotTypes} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Pivot não é desistência" accent="var(--color-accent5)">
        <p>
          Pivot é uma <strong>mudança estruturada</strong> que preserva o aprendizado e altera uma hipótese fundamental.
          A TechNova realizou um pivot <em>zoom-in</em> ao reconhecer que a descoberta social gerava mais valor que o
          fluxo completo de compra: a funcionalidade virou o produto.
        </p>
      </HighlightBox>

      <Subsection title="Os seis tipos de MVP" accentClass="text-accent">
        <ConceptGrid items={mvpTypes} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Mínimo não é precário" accent="var(--color-accent2)">
        <p>
          MVP é a versão ou experimento com o <strong>menor esforço capaz de completar um ciclo de aprendizagem
          validada</strong>. Mínimo significa suficiente para testar a hipótese central — não malfeito. Um protótipo
          confuso não gera aprendizado: gera ruído.
        </p>
      </HighlightBox>

      <Subsection title="Qual experimento para qual hipótese" accentClass="text-accent3">
        <CriteriaMatrix
          criterionLabel="Hipótese"
          headers={['Experimento indicado', 'O que medir', 'O que ele NÃO prova']}
          rows={hypothesisToExperiment}
          caption="A última coluna é a que evita a conclusão errada: cada experimento responde a uma pergunta e cala sobre as outras."
        />
      </Subsection>

      <HighlightBox title="Os limites do método" accent="var(--color-accent2)">
        <p>
          Feedback de curto prazo empurra o produto para melhorias incrementais. Usuários descrevem necessidades a
          partir das experiências que conhecem, então inovações radicais exigem visão e teoria de valor — é o teto
          epistemológico do método.
        </p>
        <p>
          Lean não elimina estratégia, ética, pesquisa técnica ou compreensão sistêmica. Ela disciplina o teste das
          hipóteses mais incertas, e apenas isso.
        </p>
      </HighlightBox>
    </section>
  );
}
