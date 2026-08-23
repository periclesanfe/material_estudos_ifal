import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Pow, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function RecursaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Definições Recursivas"
        subtitle="Definir uma coisa em termos de si mesma, sem cair em círculo"
        colorClass="text-accent"
        badge="Estruturas discretas"
      />

      <TheoryBlock title="Os dois componentes obrigatórios">
        <p>
          Uma definição é <strong>recursiva</strong> quando se refere a si mesma em instâncias menores. Para que
          isso não vire um círculo vicioso, toda recursão bem formada precisa de duas partes:
        </p>
        <p>
          <strong>CASO BASE</strong> — um ou mais casos que se resolvem diretamente, <em>sem</em> chamar a
          recursão. É onde ela para.
        </p>
        <p>
          <strong>PASSO RECURSIVO</strong> — reduz o problema a uma instância <em>menor</em> de si mesmo,
          aproximando-se do caso base.
        </p>
        <p>
          Faltar o caso base — ou o passo não aproximar dele — produz recursão infinita, que na prática{' '}
          <strong>estoura a pilha de execução</strong> (stack overflow).
        </p>
      </TheoryBlock>

      <Subsection title="O exemplo mínimo: fatorial" accentClass="text-accent2">
        <FormulaBlock
          label="Fatorial"
          accent="accent2"
          caption="Uma linha para parar, uma linha para prosseguir. Toda recursão tem essa forma."
          where={[
            { symbol: '0! = 1', meaning: 'caso base — encerra sem recursão' },
            { symbol: 'n!', meaning: 'passo — reduz de n para n−1' },
          ]}
        >
          n! <span className="op">=</span> n <span className="op">·</span> (n <span className="op">−</span>{' '}
          <span className="num">1</span>)!
        </FormulaBlock>
      </Subsection>

      <Subsection title="Fibonacci e o custo escondido" accentClass="text-accent3">
        <FormulaBlock
          label="Sequência de Fibonacci"
          accent="accent3"
          caption="Dois casos base, e um passo que chama a recursão DUAS vezes — é daí que vem o problema."
        >
          F(n) <span className="op">=</span> F(n <span className="op">−</span> <span className="num">1</span>){' '}
          <span className="op">+</span> F(n <span className="op">−</span> <span className="num">2</span>)
        </FormulaBlock>
        <ExampleBox title="Por que a versão ingênua é lenta">
          <p>
            Calcular <InlineFormula>F(<span className="num">5</span>)</InlineFormula> chama{' '}
            <InlineFormula>F(<span className="num">4</span>)</InlineFormula> e{' '}
            <InlineFormula>F(<span className="num">3</span>)</InlineFormula>. Mas{' '}
            <InlineFormula>F(<span className="num">4</span>)</InlineFormula> chama{' '}
            <InlineFormula>F(<span className="num">3</span>)</InlineFormula> de novo — e{' '}
            <InlineFormula>F(<span className="num">3</span>)</InlineFormula> inteiro é recalculado do zero.
          </p>
          <p>
            A árvore de chamadas repete subproblemas exponencialmente. O custo é aproximadamente{' '}
            <InlineFormula>O(<Pow base="2" exp="n" />)</InlineFormula> — calcular{' '}
            <InlineFormula>F(<span className="num">50</span>)</InlineFormula> assim leva um tempo absurdo.
          </p>
          <p>
            A solução é <strong>memoização</strong>: guardar cada valor já calculado numa tabela e consultá-la
            antes de recursar. O custo cai para <InlineFormula>O(n)</InlineFormula>. É o exemplo introdutório
            clássico de <strong>programação dinâmica</strong>.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Torres de Hanói" accentClass="text-accent4">
        <FormulaBlock
          label="Número mínimo de movimentos"
          accent="accent4"
          caption="Com 3 discos são 7 movimentos; com 20, mais de um milhão."
        >
          M(n) <span className="op">=</span> <Pow base="2" exp="n" /> <span className="op">−</span>{' '}
          <span className="num">1</span>
        </FormulaBlock>
        <p className="text-text-muted text-sm leading-relaxed">
          O problema é o exemplo mais usado de recursão com <strong>dois casos recursivos</strong>: mover n−1
          discos para o pino auxiliar, mover o maior para o destino, e mover os n−1 de volta sobre ele.
        </p>
      </Subsection>

      <HighlightBox title="Recursão e indução são a mesma ideia" accent="var(--color-accent5)">
        <p>
          A <strong>indução matemática</strong> prova que uma propriedade vale para todos os naturais a partir de
          um <strong>caso base</strong> e de um <strong>passo indutivo</strong>. A recursão constrói a partir de
          um <strong>caso base</strong> e de um <strong>passo recursivo</strong>.
        </p>
        <p>
          São a mesma estrutura em direções opostas — e a consequência é prática:{' '}
          <strong>a indução é a ferramenta natural para provar que um algoritmo recursivo está correto</strong>,
          porque a estrutura da prova espelha exatamente a estrutura do algoritmo.
        </p>
      </HighlightBox>

      <Subsection title="Recursão e iteração" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Toda recursão vira iteração',
              description:
                'Basta gerenciar explicitamente uma PILHA, fazendo à mão o que a pilha de execução fazia sozinha. O algoritmo fica mais verboso, mas não estoura a pilha do sistema.',
              accent: 'accent',
            },
            {
              title: 'Recursão de CAUDA',
              description:
                'Quando a chamada recursiva é a ÚLTIMA operação da função, não há nada a fazer depois dela — e o compilador pode reaproveitar o mesmo quadro de pilha. É a tail call optimization, que permite recursões profundas sem estouro.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Por que recursão importa tanto em computação" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Estruturas recursivas pedem algoritmos recursivos',
              description:
                'Uma árvore é definida recursivamente — um nó com subárvores, que são árvores. Percorrê-la recursivamente é escrever a definição como código, e a versão iterativa é sempre mais confusa.',
            },
            {
              title: 'Dividir para conquistar',
              description:
                'Merge sort, quick sort e busca binária dividem o problema ao meio e recursam. É a família de algoritmos que transforma O(n²) em O(n log n).',
            },
            {
              title: 'Backtracking',
              description:
                'Explorar possibilidades e desfazer quando dá errado — resolver labirintos, sudoku, e o percurso em profundidade em grafos, tema da penúltima seção.',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
