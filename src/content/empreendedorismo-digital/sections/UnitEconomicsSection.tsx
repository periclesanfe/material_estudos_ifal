import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  PanelList,
  ColoredPanelList,
  ComparisonTable,
  StatStrip,
  ExampleBox,
} from '../../../components/sections';
import {
  organicVsPaid,
  contentIntent,
  csVsSupport,
  churnAndGrowthLevers,
  unitEconomicsFormulas,
  ltvCacBenchmarks,
  unitEconomicsWorked,
} from './blocks';

export default function UnitEconomicsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Aquisição, Retenção e Unit Economics"
        subtitle="Adquirir clientes economicamente e aumentar o valor entregue ao longo do relacionamento — e as contas que dizem se crescer faz sentido"
        colorClass="text-accent3"
        badge="Pitch Deck"
      />

      <Subsection title="Orgânico e pago" accentClass="text-accent">
        <ComparisonTable
          rows={organicVsPaid}
          leftLabel="Orgânico"
          rightLabel="Pago"
          criterionLabel="Critério"
        />
      </Subsection>

      <Subsection title="Intenção do conteúdo" accentClass="text-accent2">
        <PanelList items={contentIntent} />
      </Subsection>

      <Subsection title="Customer Success e suporte" accentClass="text-accent4">
        <ComparisonTable
          rows={csVsSupport}
          leftLabel="Customer Success"
          rightLabel="Suporte"
          criterionLabel="Aspecto"
        />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          O CRM organiza dados, interações e oportunidades; o Customer Success usa esses dados para agir antes de o
          cliente pedir. Em SaaS B2B, onboarding, adoção, valor percebido e renovação precisam ser acompanhados como
          etapas com dono, não como consequência natural do produto.
        </p>
      </Subsection>

      <Subsection title="Churn, expansão e indicação" accentClass="text-accent5">
        <ColoredPanelList items={churnAndGrowthLevers} />
      </Subsection>

      <HighlightBox title="NRR — retenção líquida de receita" accent="var(--color-accent5)">
        <p>
          <strong>NRR = (receita inicial − churn − contração + expansão) ÷ receita inicial × 100.</strong>
        </p>
        <p>
          Acima de 100% indica que a expansão supera as perdas: a base cresce sozinha, sem cliente novo. Isso não
          elimina a necessidade de aquisição — demonstra a força econômica da base já conquistada, o que é uma
          informação diferente.
        </p>
      </HighlightBox>

      <Subsection title="As fórmulas de unidade" accentClass="text-accent">
        <PanelList items={unitEconomicsFormulas} columns="" />
      </Subsection>

      <Subsection title="Como ler o resultado" accentClass="text-accent2">
        <ColoredPanelList items={ltvCacBenchmarks} />
      </Subsection>

      <ExampleBox title="Exemplo completo, do CAC ao payback">
        <p>
          Uma startup gasta <strong>R$ 60.000</strong> em vendas e marketing no período e conquista{' '}
          <strong>100 clientes</strong>. O ARPU mensal é <strong>R$ 150</strong>, a margem bruta é de{' '}
          <strong>80%</strong> e o churn mensal é de <strong>4%</strong>.
        </p>
        <p>
          CAC = 60.000 ÷ 100 = <strong>R$ 600</strong>. LTV = 150 × 0,80 ÷ 0,04 = 120 ÷ 0,04 ={' '}
          <strong>R$ 3.000</strong>. Logo LTV/CAC = 3.000 ÷ 600 = <strong>5</strong>. A margem de contribuição mensal
          por cliente é 150 × 0,80 = R$ 120, então o payback = 600 ÷ 120 = <strong>5 meses</strong>.
        </p>
      </ExampleBox>

      <Subsection title="Os quatro resultados" accentClass="text-accent4">
        <StatStrip items={unitEconomicsWorked} />
      </Subsection>

      <HighlightBox title="A leitura não para no resultado positivo" accent="var(--color-accent2)">
        <p>
          LTV/CAC de 5 parece confortável, mas antes de comemorar verifique <strong>concentração</strong> de receita em
          poucos clientes, <strong>maturidade das coortes</strong>, <strong>custos de suporte</strong>,{' '}
          <strong>inadimplência</strong> e — o mais importante — se o churn realmente permanecerá em 4%.
        </p>
        <p>
          Um LTV projetado pode parecer alto simplesmente porque ainda não há histórico suficiente para desmenti-lo. Com
          três meses de operação, dividir por um churn de 4% é uma extrapolação, não uma medição.
        </p>
      </HighlightBox>

      <HighlightBox title="Coortes e churn líquido negativo" accent="var(--color-accent3)">
        <p>
          A análise de coorte separa clientes por mês de entrada, canal ou plano e acompanha a retenção de cada grupo.
          Se a expansão dos clientes sobreviventes supera cancelamentos e reduções, ocorre{' '}
          <strong>churn líquido de receita negativo</strong> — refletido por um NRR acima de 100%.
        </p>
        <p>
          Segmentar o CAC por canal melhora decisões pelo mesmo motivo: a média esconde que um canal traz clientes a R$
          200 e outro a R$ 1.400, e é possível estar cortando o barato para financiar o caro sem perceber.
        </p>
      </HighlightBox>
    </section>
  );
}
