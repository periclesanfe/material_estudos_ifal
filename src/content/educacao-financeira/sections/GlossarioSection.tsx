import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ConceptGrid } from '../../../components/sections';

export default function GlossarioSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Glossário Essencial"
        subtitle="O vocabulário mínimo para ler um contrato de crédito ou um extrato de investimento"
        colorClass="text-accent3"
        badge="Banco Central"
      />

      <HighlightBox title="A fonte">
        <p>
          O <strong>Glossário Simplificado de Termos Financeiros</strong>, do Departamento de Educação Financeira
          do Banco Central do Brasil (novembro de 2013), reúne <strong>114 verbetes</strong> explicados em
          linguagem cotidiana. A seleção abaixo cobre os termos que aparecem no restante da disciplina.
        </p>
      </HighlightBox>

      <Subsection title="Crédito e dívida" accentClass="text-accent">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'CET — Custo Efetivo Total',
              description:
                'O custo completo de uma operação de crédito: juros, tarifas, tributos e demais encargos. É o número que permite comparar propostas — duas ofertas com a mesma taxa de juros podem ter CETs bem diferentes.',
            },
            {
              title: 'Amortização',
              description:
                'A parcela do pagamento que abate o valor principal da dívida. O que não é amortização é juro — e uma prestação pode ser quase inteiramente juro no início do contrato.',
            },
            {
              title: 'Inadimplente',
              description: 'Quem não paga a dívida assumida, ficando sujeito a protesto, negativação e restrição de crédito.',
            },
            {
              title: 'Superendividamento',
              description:
                'Impossibilidade de pagar o conjunto das dívidas sem comprometer o mínimo existencial. Tem tratamento legal específico.',
            },
            {
              title: 'Crédito rotativo',
              description:
                'Financiamento automático do saldo não pago da fatura do cartão. Dura cerca de 30 dias e não pode se repetir no mês seguinte.',
            },
            {
              title: 'Garantia',
              description:
                'Bem ou compromisso que assegura o pagamento de uma dívida. Crédito com garantia costuma ter juros menores — e inadimplência mais cara, porque custa o bem.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Juros e correção" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Juros simples',
              description: 'Incidem apenas sobre o capital inicial, período após período. Crescimento linear.',
              accent: 'accent',
            },
            {
              title: 'Juros compostos',
              description:
                'Incidem sobre o capital acrescido dos juros já acumulados — "juros sobre juros". Crescimento acelerado.',
              accent: 'accent2',
            },
            {
              title: 'Inflação',
              description:
                'Aumento generalizado de preços, que corrói o poder de compra. É o que torna a rentabilidade nominal enganosa e a rentabilidade real relevante.',
              accent: 'accent3',
            },
            {
              title: 'Taxa Selic',
              description:
                'Taxa básica de juros da economia, definida pelo Copom. Serve de referência para as demais taxas praticadas no país.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Investimentos" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Liquidez',
              description:
                'A facilidade e a velocidade de converter um investimento em dinheiro sem perda relevante de valor.',
            },
            {
              title: 'Rentabilidade bruta × líquida',
              description:
                'Bruta é o rendimento após custos e taxas, antes de IR e inflação. Líquida é o que efetivamente sobra — a única que mede ganho de poder de compra.',
            },
            {
              title: 'FGC — Fundo Garantidor de Créditos',
              description:
                'Garante aplicações em caso de falência da instituição financeira, até R$ 250.000 por CPF e por instituição.',
            },
            {
              title: 'Renda fixa × renda variável',
              description:
                'Na renda fixa, as regras de remuneração são conhecidas na aplicação. Na variável — ações, por exemplo —, o retorno depende do desempenho do mercado.',
            },
            {
              title: 'IOF',
              description:
                'Imposto sobre Operações Financeiras. Em aplicações de renda fixa, segue tabela regressiva diária que zera a partir do 30º dia.',
            },
            {
              title: 'Copom',
              description:
                'Comitê de Política Monetária do Banco Central, responsável por definir a meta da taxa Selic em reuniões periódicas.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Para o que serve saber isso" accent="var(--color-accent5)">
        <p>
          O vocabulário financeiro não é enfeite: ele é a condição para ler um contrato antes de assinar e para
          contestar uma cobrança indevida. Boa parte das decisões ruins descritas nesta disciplina começa em não
          entender o que estava escrito — e um glossário de 114 verbetes é uma barreira de entrada bem baixa
          diante do custo de errar.
        </p>
      </HighlightBox>
    </section>
  );
}
