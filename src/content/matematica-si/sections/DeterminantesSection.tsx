import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Frac, Pow, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ConceptGrid, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function DeterminantesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Determinante e Matriz Inversa"
        subtitle="Um número que decide se a transformação pode ser desfeita"
        colorClass="text-accent4"
        badge="Álgebra linear"
      />

      <TheoryBlock title="O que é">
        <p>
          O <strong>determinante</strong> é um número associado a toda matriz <strong>quadrada</strong> — e só a
          matrizes quadradas. Ele condensa, num único valor, informação suficiente para responder à pergunta
          mais importante sobre a matriz: ela é inversível?
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="Determinante de ordem 2"
        accent="accent4"
        caption="Produto da diagonal principal menos produto da diagonal secundária."
      >
        det <span className="op">=</span> ad <span className="op">−</span> bc
      </FormulaBlock>

      <Subsection title="Ordens maiores" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Regra de SARRUS — só ordem 3',
              description:
                'Repetem-se as duas primeiras colunas ao lado da matriz e somam-se os produtos das diagonais descendentes, subtraindo os das ascendentes. Vale APENAS para 3×3 — aplicá-la a 4×4 é erro comum.',
              accent: 'accent',
            },
            {
              title: 'Teorema de LAPLACE — qualquer ordem',
              description:
                'Expande o determinante em cofatores ao longo de uma linha ou coluna, reduzindo o problema a determinantes menores. É recursivo por natureza — e é o caminho para ordem 4 em diante.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A leitura geométrica" accentClass="text-accent5">
        <ExampleBox title="O determinante mede distorção de área e volume">
          <p>
            Toda matriz quadrada representa uma transformação do espaço. O determinante diz{' '}
            <strong>por qual fator essa transformação multiplica áreas</strong> (em 2D) ou{' '}
            <strong>volumes</strong> (em 3D).
          </p>
          <p>
            Determinante <strong>2</strong>: a transformação dobra as áreas.{' '}
            Determinante <strong>negativo</strong>: além de escalar, ela inverteu a orientação — é o que uma
            reflexão faz.
          </p>
          <p>
            Determinante <strong>zero</strong>: a área virou zero. A transformação{' '}
            <strong>achatou o espaço</strong> numa dimensão menor — um plano virou reta, ou uma reta virou ponto.
          </p>
        </ExampleBox>
      </Subsection>

      <FormulaBlock
        label="Condição de inversibilidade"
        accent="accent5"
        caption="Uma matriz quadrada tem inversa se, e somente se, seu determinante é diferente de zero."
      >
        det(A) <span className="op">≠</span> <span className="num">0</span>{' '}
        <span className="op">⟺</span> <span className="op">∃</span> <Pow base="A" exp="−1" />
      </FormulaBlock>

      <HighlightBox title="Por que determinante zero impede a inversão" accent="var(--color-accent4)">
        <p>
          A leitura geométrica responde de imediato. Se a transformação achatou o espaço, ela{' '}
          <strong>destruiu informação</strong>: pontos que antes eram distintos foram parar no mesmo lugar.
        </p>
        <p>
          Desfazer exigiria saber de onde cada ponto veio — e essa informação não existe mais. Não há inversa
          possível, não por limitação de técnica, mas porque a operação perdeu o que seria necessário para
          voltar.
        </p>
        <p>
          Matrizes com determinante zero são chamadas <strong>singulares</strong>; as demais,{' '}
          <strong>não singulares</strong> ou <strong>inversíveis</strong>.
        </p>
      </HighlightBox>

      <Subsection title="A matriz inversa" accentClass="text-accent2">
        <FormulaBlock label="Definição da inversa" accent="accent2">
          A <span className="op">·</span> <Pow base="A" exp="−1" /> <span className="op">=</span>{' '}
          <Pow base="A" exp="−1" /> <span className="op">·</span> A <span className="op">=</span> I
        </FormulaBlock>
        <p className="text-text-muted leading-relaxed">
          A inversa é a matriz que, multiplicada pela original, devolve a identidade — desfazendo exatamente o
          que a original fez. Para ordem 2 há fórmula fechada:
        </p>
        <FormulaBlock label="Inversa de ordem 2" accent="accent3">
          <Pow base="A" exp="−1" /> <span className="op">=</span>{' '}
          <Frac over={<span className="num">1</span>} under="ad − bc" />{' '}
          <span className="op">·</span> [d <span className="op">−</span>b <span className="op">;</span>{' '}
          <span className="op">−</span>c a]
        </FormulaBlock>
        <p className="text-text-muted text-sm leading-relaxed">
          Repare que o determinante aparece no <strong>denominador</strong>. É a razão algébrica de determinante
          zero inviabilizar a inversa: seria divisão por zero — a mesma conclusão a que a geometria chega por
          outro caminho.
        </p>
        <p className="text-text-muted text-sm leading-relaxed mt-2">
          Para ordens maiores usa-se escalonamento com a identidade ao lado, ou a matriz adjunta dividida pelo
          determinante — e o método de <InlineFormula>O(n³)</InlineFormula> é o que os computadores executam.
        </p>
      </Subsection>
    </section>
  );
}
