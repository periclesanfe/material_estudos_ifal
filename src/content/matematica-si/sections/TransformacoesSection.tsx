import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function TransformacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Transformações Lineares"
        subtitle="Onde as matrizes deixam de ser tabelas e viram movimento"
        colorClass="text-accent2"
        badge="Álgebra linear"
      />

      <TheoryBlock title="A definição">
        <p>
          Uma <strong>transformação linear</strong> é uma função entre espaços vetoriais que{' '}
          <strong>preserva as duas operações fundamentais</strong>: a soma de vetores e a multiplicação por
          escalar.
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="As duas condições"
        accent="accent2"
        caption="Somar antes ou depois de transformar dá no mesmo — e escalar antes ou depois também."
      >
        T(u <span className="op">+</span> v) <span className="op">=</span> T(u) <span className="op">+</span>{' '}
        T(v)
        <br />
        T(k <span className="op">·</span> u) <span className="op">=</span> k <span className="op">·</span> T(u)
      </FormulaBlock>

      <HighlightBox title="O teste rápido: a origem não se move" accent="var(--color-accent4)">
        <p>
          Uma consequência imediata das duas condições: fazendo <InlineFormula>k <span className="op">=</span>{' '}
          <span className="num">0</span></InlineFormula>, obtém-se{' '}
          <InlineFormula>T(<span className="num">0</span>) <span className="op">=</span> <span className="num">0</span></InlineFormula>.
        </p>
        <p>
          <strong>Toda transformação linear leva o vetor nulo no vetor nulo.</strong> É o teste mais rápido que
          existe: se a função move a origem, ela não é linear — e nem vale a pena verificar o resto.
        </p>
      </HighlightBox>

      <Subsection title="Toda transformação linear é uma matriz" accentClass="text-accent">
        <p className="text-text-muted leading-relaxed">
          Este é o resultado que amarra a disciplina: <strong>toda transformação linear entre espaços de dimensão
          finita pode ser representada por uma matriz</strong>, e aplicá-la a um vetor é exatamente{' '}
          <strong>multiplicar a matriz pelo vetor</strong>.
        </p>
        <FormulaBlock label="Transformação como produto" accent="accent">
          T(v) <span className="op">=</span> M <span className="op">·</span> v
        </FormulaBlock>
        <p className="text-text-muted leading-relaxed">
          É por isso que matrizes são tão centrais em computação. Uma placa de vídeo não "entende" rotação — ela
          multiplica matrizes por vetores, milhões de vezes por segundo.
        </p>
      </Subsection>

      <Subsection title="As transformações do plano" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'ESCALA',
              description:
                'Multiplica as coordenadas por fatores. Fatores iguais nos dois eixos mudam o tamanho mantendo a forma; fatores diferentes deformam.',
            },
            {
              title: 'ROTAÇÃO',
              description:
                'Gira a figura por um ângulo em torno da origem. A matriz usa senos e cossenos do ângulo, e seu determinante é sempre 1 — rotação não altera áreas.',
            },
            {
              title: 'CISALHAMENTO',
              description:
                'Inclina a figura, deslocando pontos proporcionalmente à sua altura. É o que transforma um retângulo em paralelogramo — a fonte itálica é um cisalhamento.',
            },
            {
              title: 'REFLEXÃO',
              description:
                'Espelha em relação a um eixo. Seu determinante é NEGATIVO, coerente com a leitura geométrica: a orientação foi invertida.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Compor é multiplicar" accentClass="text-accent5">
        <ExampleBox title="A ordem das operações é a ordem das matrizes">
          <p>
            Aplicar uma transformação e depois outra corresponde a <strong>multiplicar as duas matrizes</strong>.
            E como a multiplicação de matrizes não é comutativa, <strong>a ordem importa</strong>.
          </p>
          <p>
            <strong>Rotacionar 45° e depois transladar 10 unidades</strong> coloca a figura num lugar; transladar
            10 e depois rotacionar 45° coloca em outro — porque na segunda ordem a rotação também gira o
            deslocamento já aplicado.
          </p>
          <p>
            É o erro mais comum de quem começa em computação gráfica, e a álgebra prevê o problema antes de a
            tela mostrar.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A translação e as coordenadas homogêneas" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'O problema',
              description:
                'Transladar move a origem, e toda transformação linear precisa fixá-la. Logo, a translação NÃO é linear — e não pode ser representada por uma matriz 2×2 comum.',
              accent: 'accent5',
            },
            {
              title: 'A solução: coordenadas homogêneas',
              description:
                'Acrescenta-se uma dimensão: o ponto (x, y) vira (x, y, 1), e usam-se matrizes 3×3. Nesse espaço ampliado, a translação também vira multiplicação de matriz.',
              accent: 'accent',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O ganho prático é uniformidade: escala, rotação, cisalhamento, reflexão e translação passam a ser{' '}
          <strong>todas</strong> multiplicações de matriz, e uma sequência inteira de operações pode ser
          pré-multiplicada numa <strong>única matriz</strong> aplicada de uma vez a cada vértice. É assim que
          toda API gráfica funciona.
        </p>
      </Subsection>
    </section>
  );
}
