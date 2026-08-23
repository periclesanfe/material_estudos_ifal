import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Frac, Sub, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function EscalonamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cramer e Eliminação de Gauss"
        subtitle="O método elegante e o método que os computadores usam"
        colorClass="text-accent"
        badge="Álgebra linear"
      />

      <Subsection title="A Regra de Cramer" accentClass="text-accent2">
        <TheoryBlock title="Quando se aplica">
          <p>
            Cramer resolve sistemas em que o <strong>número de equações é igual ao de incógnitas</strong> e o{' '}
            <strong>determinante da matriz dos coeficientes é diferente de zero</strong> — ou seja, apenas
            sistemas do tipo SPD.
          </p>
        </TheoryBlock>
        <FormulaBlock
          label="Regra de Cramer"
          accent="accent2"
          caption="Cada incógnita é o quociente entre dois determinantes."
          where={[
            { symbol: <Sub base="D" idx="i" />, meaning: 'determinante de A com a coluna i trocada pelos termos independentes' },
            { symbol: 'D', meaning: 'determinante da matriz dos coeficientes' },
          ]}
        >
          <Sub base="x" idx="i" /> <span className="op">=</span>{' '}
          <Frac over={<Sub base="D" idx="i" />} under="D" />
        </FormulaBlock>
      </Subsection>

      <HighlightBox title="Por que Cramer não é usado na prática" accent="var(--color-accent5)">
        <p>
          Para um sistema <InlineFormula>n <span className="op">×</span> n</InlineFormula>, Cramer exige calcular{' '}
          <strong>n+1 determinantes</strong>. E determinantes de ordem alta são caríssimos de calcular pela
          definição.
        </p>
        <p>
          O resultado é um método de custo <strong>fatorial</strong> na abordagem ingênua — inviável já para
          sistemas de poucas dezenas de incógnitas, quanto mais para os milhares de equações de um problema real.
        </p>
        <p>
          Cramer é valioso para <strong>demonstrar</strong> resultados teóricos e resolver sistemas pequenos à
          mão. Para computar, usa-se escalonamento.
        </p>
      </HighlightBox>

      <Subsection title="Escalonamento — eliminação de Gauss" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          A ideia é transformar o sistema em outro <strong>equivalente</strong> — com exatamente as mesmas
          soluções — mas em forma <strong>triangular</strong>, que se resolve de trás para frente por simples
          substituição.
        </p>
        <ColoredPanelList
          items={[
            {
              title: '1. Trocar duas linhas de lugar',
              description: 'A ordem das equações não muda o sistema — trocar é sempre seguro.',
            },
            {
              title: '2. Multiplicar uma linha por um escalar NÃO NULO',
              description:
                'Multiplicar uma equação inteira por 3 não altera suas soluções. A exigência de "não nulo" é essencial: multiplicar por zero apagaria a equação.',
            },
            {
              title: '3. Somar a uma linha um múltiplo de outra',
              description:
                'É a operação que efetivamente elimina incógnitas, zerando os coeficientes abaixo da diagonal, uma coluna de cada vez.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As três são chamadas <strong>operações elementares sobre linhas</strong>, e todas{' '}
          <strong>preservam o conjunto solução</strong> — é isso que torna o método legítimo.
        </p>
      </Subsection>

      <Subsection title="Como o escalonamento revela a classificação" accentClass="text-accent4">
        <ExampleBox title="A forma escalonada entrega a resposta">
          <p>
            <strong>Linha do tipo 0 = k</strong>, com k diferente de zero: contradição. O sistema é{' '}
            <strong>impossível (SI)</strong>.
          </p>
          <p>
            <strong>Linha inteiramente nula (0 = 0)</strong>: aquela equação não trazia informação nova. Sobra
            grau de liberdade — sistema <strong>possível e indeterminado (SPI)</strong>.
          </p>
          <p>
            <strong>Uma incógnita por linha, sem contradição</strong>: sistema{' '}
            <strong>possível e determinado (SPD)</strong>, e a substituição regressiva dá a solução.
          </p>
          <p>
            Ou seja: o mesmo procedimento resolve o sistema <em>e</em> o classifica, sem precisar calcular
            determinante nenhum antes.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="O custo — e por que ele importa" accent="var(--color-accent3)">
        <p>
          A eliminação de Gauss custa <InlineFormula>O(n³)</InlineFormula>. Comparada ao custo proibitivo de
          Cramer, a diferença é entre resolver um sistema de mil incógnitas em segundos ou não resolver nunca.
        </p>
        <p>
          É o mesmo <InlineFormula>O(n³)</InlineFormula> da multiplicação de matrizes — não por acaso: os dois
          problemas são profundamente aparentados, e avanços num costumam beneficiar o outro.
        </p>
        <p className="text-sm">
          Bibliotecas numéricas reais acrescentam <strong>pivotamento parcial</strong> — escolher como pivô o
          maior elemento da coluna — para reduzir erro de arredondamento em ponto flutuante. A matemática é a
          mesma; a estabilidade numérica é que melhora.
        </p>
      </HighlightBox>
    </section>
  );
}
