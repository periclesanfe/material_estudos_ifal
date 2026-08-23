import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { Frac, InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function GrafosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Grafos: Definições e Propriedades"
        subtitle="A estrutura que modela qualquer coisa conectada a qualquer coisa"
        colorClass="text-accent2"
        badge="Estruturas discretas"
      />

      <TheoryBlock title="Definição formal">
        <p>
          Um <strong>grafo</strong> <InlineFormula>G</InlineFormula> é um par formado por um conjunto{' '}
          <InlineFormula>V</InlineFormula> de <strong>vértices</strong> (ou nós) e um conjunto{' '}
          <InlineFormula>E</InlineFormula> de <strong>arestas</strong> que conectam pares de vértices.
        </p>
        <p>
          O desenho com bolinhas e linhas é apenas <em>uma</em> representação. O grafo é a estrutura matemática —
          e ela independe de como se escolhe desenhá-la.
        </p>
      </TheoryBlock>

      <FormulaBlock label="Grafo" accent="accent2" caption="Vértices e as arestas que os conectam.">
        G <span className="op">=</span> (V, E)
      </FormulaBlock>

      <Subsection title="Variedades de grafo" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'NÃO DIRIGIDO',
              description:
                'As arestas não têm sentido — se A se conecta a B, B se conecta a A. Modela relações simétricas, como amizade mútua ou um cabo de rede.',
            },
            {
              title: 'DIRIGIDO (dígrafo)',
              description:
                'Cada aresta tem origem e destino. Modela relações assimétricas: "segue" numa rede social, dependência entre módulos, links da web.',
            },
            {
              title: 'PONDERADO',
              description:
                'As arestas carregam pesos — distância, custo, capacidade, tempo. É o que permite perguntar pelo caminho mais BARATO, e não só pelo mais curto em número de saltos.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Grau e o lema do aperto de mãos" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          O <strong>grau</strong> de um vértice é o número de arestas incidentes nele. Em dígrafos, distingue-se{' '}
          <strong>grau de entrada</strong> e <strong>grau de saída</strong>.
        </p>
        <FormulaBlock
          label="Lema do aperto de mãos"
          accent="accent3"
          caption="Cada aresta tem duas pontas e contribui com 1 para o grau de cada uma — por isso a soma dá o dobro."
        >
          <span className="op">Σ</span> grau(v) <span className="op">=</span> <span className="num">2</span>
          <span className="op">·</span> |E|
        </FormulaBlock>
        <HighlightBox title="A consequência elegante" accent="var(--color-accent4)">
          <p>
            Como a soma dos graus é sempre par, o número de vértices de <strong>grau ímpar</strong> tem que ser{' '}
            <strong>par</strong>. Não existe grafo com exatamente três vértices de grau ímpar.
          </p>
          <p>
            O nome vem da versão social do resultado: numa festa, o número de pessoas que apertaram um número
            ímpar de mãos é sempre par.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Caminhos, ciclos e conexidade" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'CAMINHO',
              description: 'Uma sequência de vértices em que cada um se liga ao seguinte por uma aresta.',
              accent: 'accent',
            },
            {
              title: 'CICLO',
              description:
                'Um caminho que começa e termina no mesmo vértice. Detectar ciclos é problema central em dependências — um ciclo significa impasse.',
              accent: 'accent2',
            },
            {
              title: 'CONEXO',
              description:
                'Existe caminho entre qualquer par de vértices. Um grafo não conexo se divide em componentes conexas isoladas.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Grafos com nome próprio" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'ÁRVORE — conexo e sem ciclos',
              description:
                'Uma árvore com n vértices tem exatamente n−1 arestas: o mínimo para manter tudo conectado. Acrescentar qualquer aresta cria um ciclo; remover qualquer uma desconecta. É o grafo mais econômico possível.',
            },
            {
              title: 'COMPLETO — todos ligados a todos',
              description:
                'Existe aresta entre cada par de vértices. É o extremo oposto da árvore: o grafo mais denso possível.',
            },
            {
              title: 'BIPARTIDO — dois lados sem arestas internas',
              description:
                'Os vértices se dividem em dois conjuntos, e toda aresta liga um lado ao outro. Modela emparelhamentos: alunos e disciplinas, tarefas e máquinas, candidatos e vagas.',
            },
          ]}
        />
        <FormulaBlock
          label="Arestas do grafo completo"
          accent="accent5"
          caption="É o número de pares distintos de vértices — combinação de n tomados 2 a 2."
        >
          |E| <span className="op">=</span>{' '}
          <Frac
            over={
              <>
                n(n <span className="op">−</span> <span className="num">1</span>)
              </>
            }
            under={<span className="num">2</span>}
          />
        </FormulaBlock>
        <p className="text-text-muted text-sm leading-relaxed">
          Com 10 vértices são 45 arestas; com 100, são 4.950. O crescimento quadrático é a razão de grafos
          completos serem raros na prática — e de a maioria dos grafos reais ser <strong>esparsa</strong>, fato
          que decide a representação escolhida na próxima seção.
        </p>
      </Subsection>
    </section>
  );
}
