import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  ExampleBox,
} from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import {
  businessPlanSections,
  financialPlanItems,
  planFormulas,
  profitabilityVsReturn,
  swotActions,
  pitchSlides,
  tamSamSom,
  pitchMetrics,
} from './blocks';

export default function PlanoPitchSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Plano de Negócio e Pitch Deck"
        subtitle="O mesmo negócio em dois formatos: a versão longa que organiza operação e finanças, e a de cinco minutos que busca a próxima decisão"
        colorClass="text-accent5"
        badge="Pitch Deck"
      />

      <HighlightBox title="Plano e Canvas não competem">
        <p>
          O Canvas é um mapa de <strong>hipóteses</strong>, feito para mudar. O plano de negócio apresenta{' '}
          <strong>maior detalhamento operacional e projeções</strong> — é onde as hipóteses viram números, prazos e
          responsáveis. Um não substitui o outro: o Canvas antecede e alimenta o plano.
        </p>
      </HighlightBox>

      <Subsection title="As seções do plano" accentClass="text-accent">
        <PanelList items={businessPlanSections} />
      </Subsection>

      <HighlightBox title="O sumário executivo é escrito por último" accent="var(--color-accent2)">
        <p>
          Ele aparece primeiro e é redigido no fim, porque só depois de fechar mercado, modelo, equipe e finanças é
          possível resumi-los com coerência. Escrevê-lo antes produz um resumo do que se <em>pretendia</em> concluir,
          que quase nunca é o que o plano acabou concluindo.
        </p>
      </HighlightBox>

      <Subsection title="O plano financeiro, item a item" accentClass="text-accent3">
        <PanelList items={financialPlanItems} />
      </Subsection>

      <Subsection title="Os indicadores" accentClass="text-accent4">
        <PanelList items={planFormulas} columns="" />
      </Subsection>

      <ExampleBox title="Ponto de equilíbrio na prática">
        <p>
          Uma operação tem <strong>R$ 50.000</strong> de custos fixos mensais e margem de contribuição de{' '}
          <strong>40%</strong>. O ponto de equilíbrio é 50.000 ÷ 0,40 = <strong>R$ 125.000</strong> de receita por mês.
        </p>
        <p>
          Abaixo disso a operação consome caixa; acima, cada real adicional contribui com 40 centavos para o lucro. Note
          que a conta divide pela <em>margem percentual</em>, não pela receita — dividir por 0,60 (o custo variável) é o
          erro mais comum aqui.
        </p>
      </ExampleBox>

      <Subsection title="Lucratividade e rentabilidade" accentClass="text-accent5">
        <ComparisonTable
          rows={profitabilityVsReturn}
          leftLabel="Lucratividade"
          rightLabel="Rentabilidade"
          criterionLabel="Aspecto"
        />
      </Subsection>

      <Subsection title="SWOT que vira decisão" accentClass="text-accent">
        <CriteriaMatrix
          criterionLabel="Quadrante"
          headers={['Origem', 'Ação que deve decorrer']}
          rows={swotActions}
          caption="A utilidade da matriz está em gerar decisões. Listas genéricas de forças e ameaças não produzem estratégia nenhuma."
        />
      </Subsection>

      <Subsection title="A narrativa do pitch, slide a slide" accentClass="text-accent2">
        <PanelList items={pitchSlides} />
      </Subsection>

      <Subsection title="TAM, SAM e SOM" accentClass="text-accent3">
        <ConceptGrid items={tamSamSom} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Estimativa bottom-up é mais defensável" accent="var(--color-accent3)">
        <p>
          Estimativas <strong>bottom-up</strong> partem do número de clientes potenciais, do preço e da capacidade de
          aquisição da equipe. Aplicar um percentual arbitrário sobre um relatório de mercado amplo — "vamos capturar 1%
          de um mercado de bilhões" — é o tipo de número que o investidor descarta na hora.
        </p>
        <p>
          Para o FilaZero: quantos municípios têm UBS elegíveis, quanto se cobraria por unidade por mês, quantas
          unidades a equipe consegue implantar por trimestre. Isso é um SOM que se pode discutir.
        </p>
      </HighlightBox>

      <Subsection title="O que o investidor observa" accentClass="text-accent4">
        <PanelList items={pitchMetrics} />
      </Subsection>

      <HighlightBox title="Design e apresentação" accent="var(--color-accent4)">
        <p>
          Aproximadamente <strong>10 a 15 slides</strong>, fontes grandes, uma ideia principal por tela e gráficos
          legíveis. Evite parágrafos: a fala contém a explicação, o slide fornece estrutura e evidência. Numa
          apresentação de cinco minutos, ensaie tempo, transições e resposta a perguntas.
        </p>
        <p>
          Métricas que ainda não foram observadas precisam ser <strong>rotuladas como metas</strong>. Apresentar
          projeção como resultado é o erro que mais rápido destrói credibilidade — e é irrecuperável depois que o
          investidor percebe.
        </p>
      </HighlightBox>

      <HighlightBox title="Moat: por que uma lista de funcionalidades não basta" accent="var(--color-accent5)">
        <p>
          <strong>Moat</strong> é a capacidade de defender a posição conquistada. Funcionalidades são copiáveis em
          semanas; o que sustenta uma posição são efeitos de rede, custo de troca, dados proprietários, integrações
          profundas, marca ou vantagem regulatória.
        </p>
        <p>
          Responder "nosso diferencial é a interface" é responder que não há moat — apenas uma dianteira temporária.
        </p>
      </HighlightBox>
    </section>
  );
}
