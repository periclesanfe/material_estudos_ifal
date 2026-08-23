import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Sub, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function MatrizesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Matrizes e seus Tipos"
        subtitle="A tabela de números que a computação chama de array bidimensional"
        colorClass="text-accent2"
        badge="Álgebra linear"
      />

      <TheoryBlock title="Definição">
        <p>
          Uma <strong>matriz</strong> é uma tabela retangular de números organizada em{' '}
          <InlineFormula>m</InlineFormula> linhas e <InlineFormula>n</InlineFormula> colunas. Diz-se que ela é
          de <strong>ordem m×n</strong> — e a convenção é sempre <strong>linhas × colunas</strong>, nessa ordem.
        </p>
        <p>
          Confundir a ordem é a origem da maior parte dos erros em multiplicação de matrizes, onde ela decide se
          a operação sequer existe.
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="Elemento genérico"
        accent="accent2"
        caption="O elemento da linha i e coluna j. O primeiro índice é sempre a linha."
        where={[
          { symbol: <Sub base="a" idx="ij" />, meaning: 'elemento na linha i, coluna j' },
          { symbol: 'm', meaning: 'número de linhas' },
          { symbol: 'n', meaning: 'número de colunas' },
        ]}
      >
        A <span className="op">=</span> [<Sub base="a" idx="ij" />]<sub className="num">m×n</sub>
      </FormulaBlock>

      <Subsection title="Tipos por formato" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Matriz LINHA — ordem 1×n',
              description: 'Uma única linha. Em computação, é o vetor simples.',
            },
            {
              title: 'Matriz COLUNA — ordem m×1',
              description:
                'Uma única coluna. É a forma em que os vetores aparecem quando multiplicados por uma matriz de transformação.',
            },
            {
              title: 'Matriz QUADRADA — m = n',
              description:
                'Mesmo número de linhas e colunas. Só nela fazem sentido diagonal principal, traço, determinante e inversa — três das quatro coisas mais importantes da matéria.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Tipos por conteúdo" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            { title: 'Matriz NULA', description: 'Todos os elementos iguais a zero. É o elemento neutro da adição.' },
            {
              title: 'Matriz DIAGONAL',
              description: 'Quadrada, com zeros em todas as posições fora da diagonal principal.',
            },
            {
              title: 'Matriz IDENTIDADE (I)',
              description:
                'Diagonal com todos os elementos da diagonal iguais a 1. É o elemento neutro da multiplicação: A·I = I·A = A. É o análogo matricial do número 1.',
            },
            {
              title: 'Matriz TRIANGULAR superior e inferior',
              description:
                'Superior tem zeros ABAIXO da diagonal; inferior tem zeros ACIMA. A forma triangular é justamente o objetivo do escalonamento.',
            },
            {
              title: 'Matriz SIMÉTRICA',
              description:
                'Igual à sua própria transposta. Guarde este tipo: a matriz de adjacência de todo grafo não dirigido é simétrica.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A diagonal principal" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed">
          Numa matriz quadrada, a <strong>diagonal principal</strong> reúne os elementos em que o índice da linha
          é igual ao da coluna — isto é, <InlineFormula>i <span className="op">=</span> j</InlineFormula>. Vai do
          canto superior esquerdo ao inferior direito.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          A <strong>diagonal secundária</strong> é a outra, em que{' '}
          <InlineFormula>i <span className="op">+</span> j <span className="op">=</span> n <span className="op">+</span> <span className="num">1</span></InlineFormula>.
          Ela aparece no cálculo do determinante de ordem 2.
        </p>
      </Subsection>

      <HighlightBox title="Matriz é array bidimensional" accent="var(--color-accent5)">
        <p>
          A correspondência com a programação é direta e vale explicitar: uma matriz é exatamente o{' '}
          <strong>array bidimensional</strong>, e percorrê-la é o <strong>for aninhado</strong> — o laço externo
          nas linhas, o interno nas colunas.
        </p>
        <p>
          Só há uma armadilha: matemáticos indexam a partir de 1, e a maioria das linguagens indexa a partir de
          0. O elemento <InlineFormula><Sub base="a" idx="11" /></InlineFormula> da matemática é o{' '}
          <code>a[0][0]</code> do código.
        </p>
      </HighlightBox>
    </section>
  );
}
