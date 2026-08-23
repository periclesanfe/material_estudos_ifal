import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Sub, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function OperacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Operações com Matrizes"
        subtitle="Somar é fácil; multiplicar é onde a intuição quebra"
        colorClass="text-accent3"
        badge="Álgebra linear"
      />

      <Subsection title="As operações simples" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'ADIÇÃO — exige MESMA ORDEM',
              description:
                'Feita elemento a elemento: soma-se cada posição com a posição correspondente. É comutativa e associativa, como a soma de números. Matrizes de ordens diferentes simplesmente não se somam.',
            },
            {
              title: 'MULTIPLICAÇÃO POR ESCALAR',
              description:
                'Multiplica-se cada elemento pelo número. Geometricamente, escala a transformação sem mudar sua natureza.',
            },
            {
              title: 'TRANSPOSIÇÃO',
              description:
                'Troca linhas por colunas. A transposta de uma matriz m×n é uma matriz n×m. Uma matriz igual à sua transposta é simétrica.',
            },
          ]}
        />
      </Subsection>

      <TheoryBlock title="A multiplicação de matrizes">
        <p>
          Esta é a operação que quebra a intuição de quem espera que funcione elemento a elemento, como a soma.{' '}
          <strong>Não funciona</strong>.
        </p>
        <p>
          Ela só é definida quando o número de <strong>colunas da primeira</strong> é igual ao número de{' '}
          <strong>linhas da segunda</strong>. E o resultado herda as linhas da primeira e as colunas da segunda.
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="Condição de compatibilidade"
        accent="accent3"
        caption="Os números internos precisam coincidir; os externos formam a ordem do resultado."
      >
        (m <span className="op">×</span> <strong>n</strong>) <span className="op">·</span> (<strong>n</strong>{' '}
        <span className="op">×</span> p) <span className="op">=</span> (m <span className="op">×</span> p)
      </FormulaBlock>

      <FormulaBlock
        label="Elemento do produto"
        accent="accent4"
        caption="Cada elemento do resultado é a soma dos produtos da linha i da primeira pela coluna j da segunda."
        where={[
          { symbol: <Sub base="c" idx="ij" />, meaning: 'elemento na linha i, coluna j do produto' },
          { symbol: 'n', meaning: 'a dimensão comum — colunas de A e linhas de B' },
        ]}
      >
        <Sub base="c" idx="ij" /> <span className="op">=</span> <Sub base="a" idx="i1" />
        <Sub base="b" idx="1j" /> <span className="op">+</span> <Sub base="a" idx="i2" />
        <Sub base="b" idx="2j" /> <span className="op">+</span> … <span className="op">+</span>{' '}
        <Sub base="a" idx="in" />
        <Sub base="b" idx="nj" />
      </FormulaBlock>

      <Subsection title="Um exemplo que fixa a regra" accentClass="text-accent5">
        <ExampleBox title="A é 2×3 e B é 3×4">
          <p>
            <strong>A·B existe?</strong> As 3 colunas de A batem com as 3 linhas de B. Sim — e o resultado é{' '}
            <InlineFormula>2 <span className="op">×</span> 4</InlineFormula>.
          </p>
          <p>
            <strong>B·A existe?</strong> Exigiria que as 4 colunas de B batessem com as 2 linhas de A. Não batem.
            O produto <strong>não existe</strong>.
          </p>
          <p>
            É a demonstração mais limpa de que a multiplicação não é comutativa: aqui, um dos produtos nem chega
            a existir.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="A não comutatividade tem consequência visual" accent="var(--color-accent5)">
        <p>
          Mesmo entre matrizes quadradas de mesma ordem, em que os dois produtos existem, em geral{' '}
          <InlineFormula>A<span className="op">·</span>B <span className="op">≠</span> B<span className="op">·</span>A</InlineFormula>.
        </p>
        <p>
          Isso não é curiosidade algébrica. Como composição de transformações corresponde a produto de matrizes,
          a não comutatividade significa que <strong>rotacionar e depois transladar</strong> produz um resultado
          diferente de <strong>transladar e depois rotacionar</strong> — como qualquer pessoa que já mexeu em
          software gráfico descobriu na prática.
        </p>
        <p className="text-sm">
          A multiplicação <em>é</em> associativa e distributiva em relação à adição. Só a comutatividade se
          perde.
        </p>
      </HighlightBox>

      <Subsection title="O custo computacional" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed">
          O algoritmo ingênuo tem <strong>três laços aninhados</strong>: para cada uma das{' '}
          <InlineFormula>n²</InlineFormula> posições do resultado, somam-se <InlineFormula>n</InlineFormula>{' '}
          produtos. O custo é <InlineFormula>O(n³)</InlineFormula>.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          É um dos exemplos mais usados em análise de complexidade — e otimizar multiplicação de matrizes
          continua sendo problema de pesquisa ativo, porque ela está no núcleo de praticamente todo trabalho
          com gráficos e aprendizado de máquina.
        </p>
      </Subsection>
    </section>
  );
}
