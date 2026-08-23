import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  PanelList,
  StatStrip,
  ExampleBox,
  TheoryBlock,
} from '../../../components/sections';

export default function TesouroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tesouro Direto"
        subtitle="Emprestar dinheiro ao governo — os cinco títulos, os custos e a tributação"
        colorClass="text-accent4"
        badge="Investimentos"
      />

      <TheoryBlock title="O que é, em uma frase">
        <p>
          Investir no Tesouro Direto é <strong>emprestar dinheiro ao Governo Federal</strong> em troca de
          remuneração. Os títulos são emitidos pelo Tesouro Nacional para financiar a dívida pública, e a B3 faz
          a custódia.
        </p>
        <p>
          A taxa básica de referência da economia — a <strong>Selic</strong> — é definida pelo{' '}
          <strong>Copom</strong>, o Comitê de Política Monetária do Banco Central. Ela baliza a remuneração do
          Tesouro Selic e, indiretamente, as demais taxas do país.
        </p>
      </TheoryBlock>

      <Subsection title="Os cinco títulos" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Tesouro SELIC',
              description:
                'Acompanha a taxa Selic. Tem baixa volatilidade e resgate a qualquer momento sem perda relevante — é o título indicado para a reserva de emergência.',
            },
            {
              title: 'Tesouro PREFIXADO',
              description:
                'A taxa é conhecida no momento da compra: você sabe exatamente quanto receberá no vencimento. Em contrapartida, o resgate antecipado se sujeita à marcação a mercado, podendo render mais ou menos que o contratado.',
            },
            {
              title: 'Tesouro IPCA+',
              description:
                'Paga a inflação do período MAIS uma taxa real acordada. É o título que garante ganho acima da inflação, protegendo o poder de compra no longo prazo.',
            },
            {
              title: 'Tesouro RENDA+',
              description:
                'Voltado à complementação da aposentadoria. Não paga tudo no vencimento: converte o valor acumulado em 240 PARCELAS MENSAIS — vinte anos de renda. Carência de 60 dias.',
            },
            {
              title: 'Tesouro EDUCA+',
              description:
                'Pensado para custear o período de estudos. Paga 60 AMORTIZAÇÕES MENSAIS — cinco anos —, coincidindo com a duração típica de um curso superior. Carência de 60 dias.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Renda+ e Educa+ são os <strong>únicos que não devolvem o principal de uma só vez</strong>. Essa é a
          diferença estrutural entre eles e os três primeiros — e a razão de existirem: transformar patrimônio
          acumulado em fluxo de renda no momento em que ele será usado.
        </p>
      </Subsection>

      <Subsection title="Os custos" accentClass="text-accent2">
        <StatStrip
          items={[
            {
              label: '0,20% a.a.',
              value: 'Taxa de custódia da B3, cobrada semestralmente sobre o valor dos títulos',
              accent: 'text-accent',
            },
            {
              label: '0% a 2% a.a.',
              value: 'Taxa da instituição financeira — varia entre corretoras e bancos, e muitas isentam',
              accent: 'text-accent2',
            },
          ]}
        />
        <ExampleBox title="Custódia no Renda+ e no Educa+">
          <p>
            Nesses dois títulos a custódia é <strong>escalonada pelo tempo de permanência</strong> e cobrada
            apenas no resgate antecipado: <strong>0,50%</strong>, <strong>0,20%</strong> ou{' '}
            <strong>0,10%</strong> ao ano, conforme a faixa de prazo — no Educa+, os limiares ficam em 7 e 14
            anos.
          </p>
          <p>
            Quem leva o título até o fim e recebe as parcelas conforme previsto não paga a taxa. O desenho
            recompensa exatamente o comportamento para o qual o produto foi criado.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A tributação — IR regressivo" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Até 180 dias', description: '22,5% sobre o rendimento' },
            { title: 'De 181 a 360 dias', description: '20% sobre o rendimento' },
            { title: 'De 361 a 720 dias', description: '17,5% sobre o rendimento' },
            { title: 'Acima de 721 dias', description: '15% sobre o rendimento — a alíquota mínima' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A tabela é <strong>regressiva</strong>: quanto mais tempo o dinheiro fica aplicado, menor o imposto. O
          IR incide sobre o <strong>rendimento</strong>, nunca sobre o capital investido.
        </p>
      </Subsection>

      <Subsection title="O IOF — o argumento contra o resgate imediato" accentClass="text-accent5">
        <HighlightBox title="96% no primeiro dia" accent="var(--color-accent5)">
          <p>
            O IOF segue tabela regressiva <strong>diária</strong> nos primeiros 30 dias: começa em{' '}
            <strong>96% do rendimento</strong> no primeiro dia, cai a cada dia — cerca de{' '}
            <strong>50% no décimo quinto</strong> — e <strong>zera a partir do 30º dia</strong>.
          </p>
          <p>
            É o motivo aritmético pelo qual renda fixa não serve como conta corrente: resgatar em poucos dias
            entrega quase todo o rendimento ao imposto. Como o IR, o IOF incide sobre o rendimento, não sobre o
            valor aplicado — não se perde capital, apenas o ganho.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Sem FGC — e por que isso não é um problema" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'O FGC protege contra a quebra do BANCO',
              description:
                'Sua função é cobrir o investidor quando a instituição financeira falha. No Tesouro Direto, o devedor não é o banco.',
              accent: 'accent',
            },
            {
              title: 'Aqui o devedor é o Tesouro Nacional',
              description:
                'Os títulos são emitidos e garantidos pelo próprio Tesouro Nacional — o emissor considerado de menor risco de crédito do país.',
              accent: 'accent3',
            },
            {
              title: 'Os títulos ficam no CPF do investidor',
              description:
                'Estão registrados em nome do investidor, não da corretora. Se a instituição quebrar, os títulos migram para outra — o dinheiro não se perde no processo.',
              accent: 'accent4',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Uma curiosidade que o material registra e que fecha o argumento: o próprio FGC investe boa parte de
          suas reservas em títulos públicos federais.
        </p>
      </Subsection>
    </section>
  );
}
