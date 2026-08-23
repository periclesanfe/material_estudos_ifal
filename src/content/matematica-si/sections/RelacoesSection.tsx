import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ConceptGrid, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function RelacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Produto Cartesiano e Relações"
        subtitle="A estrutura de onde o banco de dados relacional tirou o nome"
        colorClass="text-accent3"
        badge="Estruturas discretas"
      />

      <TheoryBlock title="Produto cartesiano">
        <p>
          Dados dois conjuntos <InlineFormula>A</InlineFormula> e <InlineFormula>B</InlineFormula>, o{' '}
          <strong>produto cartesiano</strong> <InlineFormula>A <span className="op">×</span> B</InlineFormula> é o
          conjunto de <strong>todos</strong> os pares ordenados possíveis, com o primeiro elemento em A e o
          segundo em B.
        </p>
        <p>
          "Ordenado" é essencial: o par <InlineFormula>(a, b)</InlineFormula> é diferente de{' '}
          <InlineFormula>(b, a)</InlineFormula>.
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="Cardinalidade do produto cartesiano"
        accent="accent3"
        caption="Cada elemento de A se combina com cada elemento de B."
      >
        |A <span className="op">×</span> B| <span className="op">=</span> |A| <span className="op">·</span> |B|
      </FormulaBlock>

      <Subsection title="O que é uma relação" accentClass="text-accent">
        <ExampleBox title="Qualquer subconjunto serve">
          <p>
            Uma <strong>relação</strong> de A em B é <strong>qualquer subconjunto</strong> do produto cartesiano
            A × B. Nada além disso.
          </p>
          <p>
            Ou seja: uma relação é apenas um <strong>critério que seleciona quais pares interessam</strong>. Se A
            é o conjunto de alunos e B o de disciplinas, o produto cartesiano tem todos os pares imagináveis; a
            relação "está matriculado em" seleciona só os pares verdadeiros.
          </p>
          <p>
            Como qualquer subconjunto vale, o conjunto vazio é uma relação, e o produto cartesiano inteiro
            também é.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Domínio e imagem" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'DOMÍNIO',
              description:
                'O conjunto dos PRIMEIROS elementos dos pares que estão na relação — os elementos de A que efetivamente se relacionam com alguém.',
              accent: 'accent',
            },
            {
              title: 'IMAGEM',
              description:
                'O conjunto dos SEGUNDOS elementos — os elementos de B que são atingidos por alguém.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Quatro formas de representar a mesma relação" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Conjunto de pares',
              description: 'A forma mais direta: listar os pares que pertencem à relação.',
              accent: 'accent',
            },
            {
              title: 'Diagrama de flechas',
              description: 'Dois círculos com os elementos e setas ligando os pares. Boa para visualizar, ruim para calcular.',
              accent: 'accent2',
            },
            {
              title: 'Grafo',
              description:
                'Vértices são os elementos e arestas são os pares. É a ponte para o bloco de grafos, mais adiante.',
              accent: 'accent3',
            },
            {
              title: 'MATRIZ DE ADJACÊNCIA',
              description:
                'Uma matriz de 0s e 1s: a posição (i,j) vale 1 se o par está na relação. É a representação que o computador usa — e conecta este bloco diretamente com o de matrizes.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que se chama relacional" accent="var(--color-accent5)">
        <p>
          O nome do <strong>modelo relacional</strong> de banco de dados vem literalmente daqui, e não é
          metáfora.
        </p>
        <p>
          Uma <strong>tabela é uma relação</strong> no sentido matemático: um subconjunto do produto cartesiano
          dos domínios de suas colunas. Cada linha é uma <strong>tupla</strong>; o conjunto de linhas é o
          subconjunto que satisfaz o critério.
        </p>
        <p>
          A conexão continua na normalização: as <strong>dependências funcionais</strong> que fundamentam a
          primeira, segunda e terceira formas normais são, elas próprias, relações — com as propriedades que a
          próxima seção examina.
        </p>
      </HighlightBox>
    </section>
  );
}
