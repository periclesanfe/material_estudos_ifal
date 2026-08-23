import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function BetsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Apostas Online"
        subtitle="Por que este tema entra numa disciplina de educação financeira"
        colorClass="text-accent5"
        badge="Comportamento"
      />

      <TheoryBlock title="Um tema de dívida, não de moral">
        <p>
          As bets entram no programa conectadas ao bloco de dívidas, e não como discussão sobre vício ou
          legalidade. A razão é prática: <strong>as perdas costumam ser financiadas com crédito caro</strong> —
          cartão e cheque especial —, alimentando exatamente o ciclo que os capítulos anteriores procuram
          desfazer.
        </p>
      </TheoryBlock>

      <Subsection title="A matemática do produto" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'A margem está embutida na cotação',
              description:
                'As casas operam com uma margem própria já incorporada às odds. O resultado é que o valor esperado do apostador é NEGATIVO — não por azar, mas por construção do produto.',
              accent: 'accent5',
            },
            {
              title: 'Quanto mais se aposta, mais se converge',
              description:
                'Ganhos pontuais existem e são reais. Mas com o aumento do número de apostas o resultado converge para a média esperada — que é negativa. O tempo trabalha contra o apostador, não a favor.',
              accent: 'accent3',
            },
            {
              title: 'Ilusão de controle',
              description:
                'Conhecer futebol, estudar estatísticas ou acompanhar times cria a sensação de vantagem informacional. Ela não altera a margem embutida na cotação, que é o fator determinante do resultado no longo prazo.',
              accent: 'accent4',
            },
            {
              title: 'Caráter aditivo',
              description:
                'Recompensa variável e imprevisível é o desenho de reforço mais difícil de interromper. Somado à disponibilidade permanente no celular, produz padrão de uso que pouco se parece com lazer ocasional.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Onde isso encontra os outros capítulos" accent="var(--color-accent5)">
        <p>
          O tema atravessa toda a disciplina. Entra pelo <strong>autoconhecimento</strong> — é o oposto do
          autocontrole descrito no bloco de poupança. Passa pelo <strong>crédito</strong> — perdas financiadas
          por rotativo a juros livremente pactuados. E desemboca no <strong>superendividamento</strong>, quando
          o conjunto das dívidas deixa de caber na renda.
        </p>
        <p className="text-sm">
          O material trata o assunto por meio de um questionário aplicado à turma. Este resumo apresenta a
          análise conceitual discutida; as respostas individuais dos estudantes não fazem parte do conteúdo
          público.
        </p>
      </HighlightBox>
    </section>
  );
}
