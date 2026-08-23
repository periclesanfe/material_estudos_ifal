import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function AutoconhecimentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Autoconhecimento e Diagnóstico"
        subtitle="Antes de decidir para onde ir, descobrir onde se está"
        colorClass="text-accent"
        badge="Comportamento"
      />

      <TheoryBlock title="A fotografia financeira">
        <p>
          O primeiro passo de qualquer organização financeira é um diagnóstico — o material chama de{' '}
          <strong>fotografia financeira</strong>: quanto dinheiro entra, quanto sai e para onde vai.
        </p>
        <p>
          Parece elementar, e é justamente por isso que costuma ser pulado. Muita gente sabe quanto ganha e
          quanto tem de dívida, mas não sabe responder para onde foi o dinheiro do mês passado.
        </p>
      </TheoryBlock>

      <Subsection title="As perguntas do diagnóstico" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Qual é a sua idade hoje?', description: 'Define o horizonte de acumulação disponível.', accent: 'accent' },
            {
              title: 'Qual a idade prevista para a aposentadoria — e o prazo em anos?',
              description: 'Transforma um plano difuso em um número de anos concreto.',
              accent: 'accent2',
            },
            { title: 'Qual é a sua renda média mensal?', description: 'O que entra, de forma consistente.', accent: 'accent3' },
            {
              title: 'Qual é o gasto médio mensal da família?',
              description: 'O número mais importante do diagnóstico — e o que quase ninguém sabe de cabeça.',
              accent: 'accent4',
            },
            {
              title: 'Qual o valor total aproximado dos seus investimentos?',
              description: 'O ponto de partida do patrimônio.',
              accent: 'accent5',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Note que <strong>três das cinco perguntas envolvem gasto ou patrimônio</strong>, e apenas uma trata de
          renda. É uma escolha deliberada: a organização financeira depende muito mais do que se faz com o
          dinheiro do que de quanto ele é.
        </p>
      </Subsection>

      <Subsection title="Rentabilidade bruta × líquida" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Rentabilidade BRUTA"
          rightLabel="Rentabilidade LÍQUIDA"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que já está descontado',
              left: 'Os custos do investimento e as taxas de administração',
              right: 'Tudo isso MAIS o Imposto de Renda no resgate e a inflação do período',
            },
            {
              criterion: 'Onde aparece',
              left: 'É a rentabilidade divulgada nos relatórios do banco ou da corretora',
              right: 'É o que efetivamente sobra para você',
            },
            {
              criterion: 'O que responde',
              left: 'Quanto a aplicação rendeu nominalmente',
              right: 'Quanto o seu PODER DE COMPRA cresceu',
            },
          ]}
        />
        <HighlightBox title="A faixa realista" accent="var(--color-accent4)">
          <p>
            O material dá o número: a rentabilidade líquida de investimentos conservadores costuma ficar entre{' '}
            <strong>3% e 6% ao ano</strong>. É um dado útil para calibrar expectativas — e para reconhecer
            promessas irreais quando aparecerem.
          </p>
          <p>
            É também o número que alimenta o cálculo da independência financeira, mais adiante: quanto menor a
            rentabilidade líquida esperada, maior o patrimônio necessário para viver dela.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
