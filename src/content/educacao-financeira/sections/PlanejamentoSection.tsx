import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ExampleBox,
} from '../../../components/sections';

export default function PlanejamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Planejamento Financeiro Familiar"
        subtitle="Quatro etapas — e o saldo que revela em que situação a família realmente está"
        colorClass="text-accent3"
        badge="Febraban"
      />

      <Subsection title="As quatro etapas" accentClass="text-accent">
        <FlowDiagram
          items={[
            'Analisar a situação financeira atual',
            'Estabelecer objetivos e transformá-los em metas mensais',
            'Buscar o equilíbrio do orçamento',
            'Acompanhar e revisar o planejamento periodicamente',
          ]}
        />
      </Subsection>

      <Subsection title="Etapa 1 — a situação atual" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed mb-4">
          Levantar tudo o que entra e tudo o que sai. As despesas se classificam por duas dimensões
          independentes, que costumam ser confundidas:
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Fixas × Variáveis',
              description:
                'Critério: previsibilidade do VALOR. Fixas repetem valor igual ou parecido todo mês — aluguel, mensalidade escolar, financiamento. Variáveis oscilam — mercado, água, luz, transporte.',
              accent: 'accent',
            },
            {
              title: 'Essenciais × Supérfluas',
              description:
                'Critério: necessidade. Essenciais são indispensáveis à vida da família. Supérfluas podem ser cortadas ou adiadas — e é nelas que o ajuste começa.',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As duas dimensões se cruzam: um financiamento de carro é <em>fixo e supérfluo</em>; a conta de luz é{' '}
          <em>variável e essencial</em>. Confundir "fixo" com "obrigatório" é o que faz muita gente concluir que
          não há nada a cortar.
        </p>
      </Subsection>

      <Subsection title="O saldo — e o que ele significa" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'Saldo POSITIVO — receitas maiores que despesas',
              description:
                'Há folga. O passo seguinte é decidir o destino dela conscientemente: quitar dívidas caras, montar a reserva de emergência ou investir para os objetivos. Sobra sem destino tende a virar consumo não planejado.',
            },
            {
              title: 'Saldo EMPATADO — receitas iguais às despesas',
              description:
                'Não é equilíbrio, é aperto. Sem folga nem reserva, qualquer imprevisto vira dívida. O objetivo passa a ser gerar sobra, ainda que pequena, para iniciar a reserva de emergência.',
            },
            {
              title: 'Saldo NEGATIVO — despesas maiores que receitas',
              description:
                'A situação exige ação nas duas pontas: reduzir gastos (começando pelos supérfluos) e buscar aumento de renda. Manter o negativo significa financiá-lo com crédito caro — cartão ou cheque especial —, o que agrava o problema mês a mês.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Etapa 2 — de objetivo a meta mensal" accentClass="text-accent5">
        <ExampleBox title="A conta que transforma intenção em número">
          <p>
            Um objetivo é "trocar de celular". Uma meta é <strong>R$ 600 em 6 meses</strong>, o que significa
            poupar <strong>R$ 100 por mês</strong>.
          </p>
          <p>
            A diferença é verificabilidade: no fim de cada mês dá para saber se a meta foi cumprida, em vez de
            descobrir no sexto mês que não vai dar. O material sugere organizar os objetivos em{' '}
            <strong>curto, médio e longo prazo</strong>, cada um com valor e prazo definidos.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Etapas 3 e 4 — equilíbrio e revisão" accent="var(--color-accent2)">
        <p>
          O equilíbrio se busca cortando supérfluos, renegociando fixos e, quando possível, ampliando a renda. A
          revisão periódica existe porque <strong>orçamento é hipótese, não fato</strong>: o valor previsto para
          o mercado quase nunca é o valor gasto.
        </p>
        <p>
          Sem a etapa 4, o planejamento vira um documento feito uma vez e nunca mais consultado — que é o
          destino mais comum das planilhas de orçamento familiar.
        </p>
      </HighlightBox>
    </section>
  );
}
