import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, StatStrip } from '../../../components/sections';

export default function SairDividasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Dez Passos para Sair das Dívidas"
        subtitle="Uma ordem de prioridade que segue a lógica da perda, não a do tamanho"
        colorClass="text-accent"
        badge="Meu Bolso em Dia"
      />

      <Subsection title="O roteiro completo" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Listar todas as dívidas: credor, valor, taxa de juros e vencimento',
            'Levantar receitas e despesas para saber quanto sobra de verdade',
            'Cortar gastos supérfluos e buscar renda extra',
            'Definir a ordem de prioridade de pagamento',
            'Negociar com os credores — e comparar propostas',
            'Formalizar o acordo por escrito, com o CET explícito',
            'Pagar a primeira parcela e cobrar a retirada do nome',
            'Evitar novas dívidas enquanto o acordo corre',
            'Reorganizar limites de crédito',
            'Construir a reserva de emergência para não voltar',
          ]}
        />
      </Subsection>

      <Subsection title="A ordem de prioridade — e sua lógica" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: '1º — Serviços essenciais',
              description:
                'Água, luz, gás e internet. O corte interrompe o funcionamento da casa e, hoje, a capacidade de trabalhar e estudar. É a dívida cuja inadimplência tem efeito imediato sobre a vida.',
            },
            {
              title: '2º — Dívidas com bem dado em garantia',
              description:
                'Financiamento de veículo e de imóvel. Não pagar aqui não custa apenas juros: custa o BEM. Perder o carro ou a casa desfaz anos de pagamento e costuma sair muito mais caro que o juro evitado.',
            },
            {
              title: '3º — Dívidas de juros mais altos',
              description:
                'Rotativo do cartão e cheque especial. Crescem mais rápido que todas as outras, mas não tiram nada de você imediatamente — por isso vêm depois das duas categorias acima, e não antes.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          É comum ouvir "pague primeiro a de maior juro". O material qualifica essa regra: ela vale{' '}
          <strong>depois</strong> de garantir os serviços essenciais e os bens em garantia. Maximizar economia de
          juros enquanto se perde o carro é um mau negócio.
        </p>
      </Subsection>

      <Subsection title="Regras práticas com número" accentClass="text-accent4">
        <StatStrip
          items={[
            {
              label: '5 dias',
              value: 'Prazo para o nome sair da lista de inadimplentes após pagar a PRIMEIRA parcela do acordo — não é preciso quitar tudo',
              accent: 'text-accent',
            },
            {
              label: '½ da renda',
              value: 'Teto recomendado para a SOMA de todos os limites de crédito — cartões, cheque especial, crediários',
              accent: 'text-accent2',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que reorganizar os limites faz parte da saída" accent="var(--color-accent3)">
        <p>
          Limite de crédito disponível funciona como um convite permanente. Manter limites altos depois de sair
          das dívidas é preservar intacta a condição que produziu o problema — daí a regra de manter a soma dos
          limites abaixo de metade da renda líquida mensal.
        </p>
        <p>
          E o décimo passo fecha o ciclo com a reserva de emergência: sem ela, o próximo imprevisto recomeça tudo,
          porque a única fonte disponível de recursos volta a ser o crédito caro.
        </p>
      </HighlightBox>
    </section>
  );
}
