import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  StatStrip,
  ExampleBox,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function PouparSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quem Sonha, Poupa"
        subtitle="Poupar é comportamento antes de ser produto financeiro"
        colorClass="text-accent"
        badge="Investimentos"
      />

      <TheoryBlock title="A fórmula do sucesso dos poupadores">
        <p className="text-center text-lg font-semibold text-accent my-4">
          autocontrole = mais paciência − menos procrastinação
        </p>
        <p>
          <strong>Paciência</strong> é a capacidade de postergar gratificações — o viés do futuro.{' '}
          <strong>Procrastinação</strong> é a dificuldade de executar planos já decididos — o viés do presente.
          São coisas distintas: dá para querer o futuro e ainda assim adiar o depósito.
        </p>
        <p>
          O material é direto ao afirmar que o hábito de poupar se relaciona{' '}
          <strong>mais a esses comportamentos internos do que a fatores externos</strong> como renda ou
          escolaridade.
        </p>
      </TheoryBlock>

      <Subsection title="O teste do marshmallow" accentClass="text-accent2">
        <ExampleBox title="Quinze minutos que previram décadas">
          <p>
            No experimento conduzido por Walter Mischel em Stanford, crianças recebiam uma escolha: comer um
            doce imediatamente ou esperar cerca de 15 minutos sozinhas na sala e receber dois.
          </p>
          <p>
            O acompanhamento posterior encontrou associação entre a capacidade de esperar e melhores resultados
            na vida adulta — nas relações, na profissão e na vida financeira. Não foi inteligência nem origem
            familiar: foi a disposição de postergar a gratificação.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A caça aos custos invisíveis" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          O material propõe somar os gastos pequenos e recorrentes: o cafezinho diário, a academia que não se
          frequenta, o pacote de TV que não se assiste, a anuidade de três cartões, as assinaturas de aplicativos
          esquecidas.
        </p>
        <StatStrip
          items={[
            { label: 'R$ 41', value: 'por dia — nenhum item isolado parece relevante', accent: 'text-accent' },
            { label: 'R$ 840', value: 'por mês — já é uma prestação', accent: 'text-accent2' },
            { label: 'R$ 10.080', value: 'por ano — invisíveis exatamente por serem pequenos', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O argumento não é "corte o cafezinho". É que o orçamento raramente se desequilibra por um gasto grande
          e visível — desequilibra-se pela soma de gastos pequenos que nunca são somados.
        </p>
      </Subsection>

      <Subsection title="Juros simples × juros compostos" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Juros SIMPLES"
          rightLabel="Juros COMPOSTOS"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Base de cálculo',
              left: 'Incidem sempre sobre o capital inicial',
              right: 'Incidem, a cada período, sobre o capital MAIS os juros já acumulados',
            },
            { criterion: 'Apelido', left: '—', right: '"Juros sobre juros"' },
            {
              criterion: 'Comportamento no tempo',
              left: 'Crescimento linear',
              right: 'Crescimento acelerado — discreto no início, dominante no fim',
            },
            {
              criterion: 'Para quem trabalham',
              left: 'A favor de quem investe, contra quem deve — na mesma proporção',
              right: 'É o mesmo mecanismo que multiplica a poupança de longo prazo e faz a dívida do cartão explodir',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que o tempo faz — simulação a 13,75% ao ano" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Em 10 anos', description: 'R$ 12 mil aportados viram cerca de R$ 25,5 mil. Os juros já superaram os aportes.', accent: 'accent' },
            { title: 'Em 25 anos', description: 'R$ 30 mil aportados viram mais de R$ 260 mil. A maior parte do montante é juros, não aporte.', accent: 'accent3' },
            {
              title: 'A lição',
              description:
                'A maior parte do patrimônio final não vem do esforço de poupar mais — vem de ter começado antes. Tempo é a variável que não se compra depois.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Consumo consciente e prosperidade" accent="var(--color-accent2)">
        <p>
          O bloco fecha com a distinção entre <strong>ter dinheiro</strong> e <strong>ser próspero</strong>. A
          prosperidade descrita no material não é um patamar de renda: é a relação entre o que se ganha, o que se
          gasta e o que isso permite escolher.
        </p>
        <p>
          Daí o gancho com os indicadores patrimoniais: quem gasta menos precisa de patrimônio menor para ser
          independente. Consumo consciente não é privação — é a redução do denominador de todos os cálculos.
        </p>
      </HighlightBox>
    </section>
  );
}
