import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  PanelList,
  StatStrip,
} from '../../../components/sections';

export default function CartaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cartão de Crédito"
        subtitle="O meio de pagamento mais usado do país — e o que a fatura precisa informar"
        colorClass="text-accent2"
        badge="Crédito"
      />

      <Subsection title="Uma peculiaridade brasileira" accentClass="text-accent">
        <p className="text-text-muted leading-relaxed mb-4">
          O Brasil é o país que mais usa cartão de crédito na América Latina, e parte da explicação é uma
          invenção local: a <strong>compra parcelada</strong>, surgida nos anos 1990 para substituir o cheque
          pré-datado. Ela não existe na maioria dos mercados.
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Até 40 dias sem juros',
              description:
                'Quem compra logo após o fechamento da fatura e paga o valor total no vencimento usa o dinheiro do banco sem custo. É o uso mais vantajoso do cartão — e depende de pagar o TOTAL.',
              accent: 'accent',
            },
            {
              title: 'Data de fechamento × vencimento',
              description:
                'O fechamento define em qual fatura a compra entra; o vencimento é quando ela precisa ser paga. A diferença entre as duas datas é o prazo de crédito gratuito.',
              accent: 'accent2',
            },
            {
              title: 'CET na fatura',
              description:
                'O Custo Efetivo Total deve constar na fatura: juros, tarifas, tributos e demais encargos reunidos num único número. É por ele que se comparam ofertas de crédito.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O crédito rotativo" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'O que é',
              description:
                'Quando o cliente não paga o valor total da fatura, o saldo restante é automaticamente financiado. É crédito tomado sem que ninguém precise pedir — e com uma das taxas mais altas do mercado.',
            },
            {
              title: 'Pagamento mínimo: 15% da fatura',
              description:
                'É o menor valor aceito para não ficar inadimplente. Mas pagar o mínimo significa financiar os 85% restantes na taxa do rotativo — o caminho mais rápido para o efeito bola de neve.',
            },
            {
              title: 'Prazo máximo: cerca de 30 dias, sem repetição',
              description:
                'O rotativo NÃO pode se repetir no mês seguinte. Na segunda vez, a instituição é obrigada a oferecer o PARCELAMENTO do saldo, que tem juros menores. É uma proteção regulatória contra o uso continuado da linha mais cara.',
            },
            {
              title: 'Juros livremente pactuados',
              description:
                'Diferentemente do cheque especial, o cartão NÃO tem teto de juros definido pelo Banco Central. As taxas variam entre instituições, o que torna a comparação uma responsabilidade do cliente.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As cinco tarifas permitidas" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Anuidade', description: 'Pela manutenção do cartão. É a tarifa mais comum — e a mais negociável.' },
            { title: 'Emissão de segunda via', description: 'Em caso de perda, roubo ou dano do cartão.' },
            { title: 'Saque com o cartão de crédito', description: 'O saque não tem prazo de carência: os juros correm desde o primeiro dia.' },
            { title: 'Pagamento de contas com o cartão', description: 'Pela utilização do cartão para quitar boletos e contas.' },
            { title: 'Avaliação emergencial de limite', description: 'Pela análise de aumento de limite fora do fluxo regular.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A lista é <strong>taxativa</strong>: nenhuma outra tarifa pode ser cobrada. Saber isso é a diferença
          entre aceitar uma cobrança e contestá-la.
        </p>
      </Subsection>

      <HighlightBox title="Cartão de crédito × cartão de débito" accent="var(--color-accent2)">
        <StatStrip
          items={[
            { label: 'Crédito', value: 'Você usa o dinheiro do BANCO e paga depois — com prazo, mas com risco de juros', accent: 'text-accent2' },
            { label: 'Débito', value: 'Você usa o SEU dinheiro, debitado na hora — sem prazo, mas sem risco de dívida', accent: 'text-accent' },
          ]}
        />
        <p>
          A distinção parece óbvia até se observar o comportamento: no crédito, o gasto e a dor de pagar ficam
          separados por até 40 dias. É essa distância que torna o cartão um instrumento útil para quem tem
          controle e perigoso para quem não tem.
        </p>
      </HighlightBox>
    </section>
  );
}
