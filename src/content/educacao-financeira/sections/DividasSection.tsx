import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function DividasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Endividado, Inadimplente ou Superendividado"
        subtitle="Três estados diferentes — e confundi-los atrapalha a saída"
        colorClass="text-accent5"
        badge="Dívidas"
      />

      <TheoryBlock title="Dívida não é o problema">
        <p>
          O material começa desfazendo uma associação automática: <strong>ter dívida não é sinal de descontrole</strong>.
          Financiar um imóvel, parcelar um curso ou tomar crédito para um negócio são decisões financeiras
          legítimas. O problema aparece quando a dívida deixa de caber na renda.
        </p>
        <p>
          Distinguir os três estados importa porque cada um pede uma resposta diferente — e porque a lei trata o
          terceiro de forma específica.
        </p>
      </TheoryBlock>

      <Subsection title="Os três estados" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'ENDIVIDADO — tem dívidas e consegue pagá-las',
              description:
                'Situação administrável e comum. As parcelas estão em dia e cabem no orçamento. Aqui o trabalho é preventivo: acompanhar o comprometimento da renda para que não vire o próximo estado.',
            },
            {
              title: 'INADIMPLENTE — não paga a dívida',
              description:
                'Na definição do Banco Central, é quem não cumpre a obrigação assumida. As consequências vão além do juro: protesto do título, negativação do nome e restrição de crédito para novas operações.',
            },
            {
              title: 'SUPERENDIVIDADO — não consegue pagar o conjunto das dívidas',
              description:
                'Não é atraso pontual: é a impossibilidade de honrar todas as dívidas sem comprometer o mínimo existencial — o necessário para viver com dignidade. Tem lei própria justamente por ser um problema estrutural, e não de má-fé.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O custo que não aparece na fatura" accentClass="text-accent4">
        <HighlightBox title="Fobia financeira" accent="var(--color-accent5)">
          <p>
            O material nomeia a relação entre dívidas acumuladas e <strong>sofrimento psíquico</strong>, com
            custos reais de saúde física e mental.
          </p>
          <p>
            Nomear isso não é digressão: a paralisia que a dívida provoca — não abrir a fatura, não atender o
            credor, adiar a planilha — é exatamente o comportamento que impede resolver o problema. Por isso o
            primeiro dos dez passos de saída é, literalmente, colocar tudo no papel.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Um retrato do endividamento no Brasil" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Cartão de crédito lidera',
              description:
                'Nas pesquisas de endividamento das famílias, o cartão aparece como principal tipo de dívida, seguido de carnês e financiamentos — coerente com ser a modalidade de crédito mais acessível e de juros mais altos.',
              accent: 'accent',
            },
            {
              title: 'Dado datado, e é preciso dizer',
              description:
                'Os percentuais discutidos em aula vêm de levantamentos de setembro de 2021. Servem para mostrar a ordem de grandeza e a composição das dívidas, não como retrato do presente — indicadores de endividamento mudam rápido.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
