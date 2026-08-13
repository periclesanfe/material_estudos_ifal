import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { startupDefinition, startupLifecycle, pmfSignals, incubatorVsAccelerator } from './blocks';

export default function StartupsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Startups e Ecossistema Digital"
        subtitle="Por que ser digital não basta para ser startup — e por que crescer antes do product-market fit costuma só amplificar o desperdício"
        colorClass="text-accent2"
      />

      <HighlightBox title="A definição, palavra por palavra">
        <p>
          Startup é uma <strong>organização temporária</strong> em busca de um modelo de negócio{' '}
          <strong>repetível</strong>, <strong>escalável</strong> e <strong>sustentável</strong> sob condições de
          extrema incerteza. Temporária porque, quando o modelo é encontrado, a organização deixa de ser uma equipe de
          busca e passa a executar.
        </p>
      </HighlightBox>

      <Subsection title="Os quatro elementos" accentClass="text-accent">
        <ConceptGrid items={startupDefinition} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Software sob encomenda contra SaaS" accent="var(--color-accent2)">
        <p>
          Uma fábrica de software sob encomenda pode ser <strong>muito lucrativa</strong> e ainda assim não ser
          escalável: cada projeto exige trabalho proporcional, então dobrar a receita exige praticamente dobrar a
          equipe. Um SaaS multitenant serve milhares de clientes com a mesma base tecnológica — desde que aquisição,
          suporte e infraestrutura permaneçam economicamente controlados.
        </p>
        <p>
          Esse é o exemplo a usar quando a questão pedir "um negócio digital que não é startup". Não é sobre o
          faturamento; é sobre a relação entre crescimento de receita e crescimento de custo.
        </p>
      </HighlightBox>

      <Subsection title="Ciclo de vida" accentClass="text-accent3">
        <FlowDiagram items={startupLifecycle} />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          <strong>Ideação</strong> formula problema, público e hipótese de valor. <strong>Validação</strong> traz
          descoberta de clientes, experimentos, MVP e as primeiras evidências de demanda. <strong>Operação</strong>{' '}
          estabiliza entrega, processos, métricas e receita recorrente. <strong>Escala</strong> expande canais, equipe,
          infraestrutura e mercados — e só deve começar depois da evidência de product-market fit.
        </p>
      </Subsection>

      <Subsection title="Sinais de product-market fit" accentClass="text-accent4">
        <PanelList items={pmfSignals} />
      </Subsection>

      <HighlightBox title="Por que escalar cedo é perigoso" accent="var(--color-accent2)">
        <p>
          Product-market fit é a situação em que um mercado relevante demonstra demanda consistente pela solução.
          Investir em aquisição antes disso significa pagar para levar pessoas a um produto que elas não vão manter — o
          CAC é gasto, a retenção não aparece, e o resultado é um funil furado operando em volume maior.
        </p>
        <p>
          Crescimento antes do ajuste <strong>não corrige</strong> o modelo: apenas amplifica o desperdício e consome o
          caixa que financiaria a próxima rodada de aprendizado.
        </p>
      </HighlightBox>

      <Subsection title="Incubadora ou aceleradora?" accentClass="text-accent5">
        <ComparisonTable
          rows={incubatorVsAccelerator}
          leftLabel="Incubadora"
          rightLabel="Aceleradora"
          criterionLabel="Aspecto"
        />
      </Subsection>

      <HighlightBox title="As estruturas são complementares" accent="var(--color-accent5)">
        <p>
          A escolha depende do estágio, das necessidades e do custo do apoio. Capital acompanhado de mentoria, rede e
          conhecimento setorial pode valer mais do que dinheiro isolado — e é exatamente esse o argumento de quem aceita
          diluir participação para entrar num programa.
        </p>
      </HighlightBox>
    </section>
  );
}
