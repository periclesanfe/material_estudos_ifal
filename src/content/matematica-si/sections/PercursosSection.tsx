import HighlightBox from '../../../components/ui/HighlightBox';
import { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList, ConceptGrid } from '../../../components/sections';

export default function PercursosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Representação e Percurso de Grafos"
        subtitle="Como guardar um grafo na memória — e como caminhar por ele"
        colorClass="text-accent3"
        badge="Estruturas discretas"
      />

      <Subsection title="Duas representações, dois compromissos" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Matriz de adjacência"
          rightLabel="Lista de adjacência"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Como guarda',
              left: 'Uma matriz n×n em que a posição (i,j) indica se há aresta de i para j',
              right: 'Para cada vértice, a lista dos seus vizinhos',
            },
            {
              criterion: 'Espaço',
              left: 'O(n²) sempre — mesmo com pouquíssimas arestas',
              right: 'O(V + E) — proporcional ao que existe de fato',
            },
            {
              criterion: '"i e j são vizinhos?"',
              left: 'O(1) — consulta direta a uma posição',
              right: 'O(grau de i) — precisa percorrer a lista',
            },
            {
              criterion: 'Percorrer os vizinhos de i',
              left: 'O(n) — varre a linha inteira, mesmo as posições vazias',
              right: 'O(grau de i) — só o que existe',
            },
            {
              criterion: 'Melhor para',
              left: 'Grafos DENSOS, e quando se consulta adjacência o tempo todo',
              right: 'Grafos ESPARSOS — que são a maioria dos casos reais',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A matriz de um grafo não dirigido é simétrica" accent="var(--color-accent4)">
        <p>
          Se a aresta não tem sentido, então a posição <InlineFormula>(i, j)</InlineFormula> e a{' '}
          <InlineFormula>(j, i)</InlineFormula> guardam a mesma informação — e isso é exatamente a definição de{' '}
          <strong>matriz simétrica</strong>, vista no início da disciplina.
        </p>
        <p>
          É a conexão mais direta entre os dois blocos da matéria: a álgebra linear fornece a estrutura de dados
          com que a teoria dos grafos trabalha.
        </p>
      </HighlightBox>

      <Subsection title="Os dois percursos fundamentais" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'BFS — Busca em Largura, usa FILA',
              description:
                'Visita os vértices por CAMADAS: primeiro todos os vizinhos, depois os vizinhos dos vizinhos. A fila é o que produz essa ordem — e é ela que garante encontrar o caminho MÍNIMO EM NÚMERO DE ARESTAS em grafos não ponderados.',
            },
            {
              title: 'DFS — Busca em Profundidade, usa PILHA',
              description:
                'Avança o máximo possível por um caminho antes de retroceder. Usa pilha explícita ou a própria pilha de recursão — por isso costuma ser escrita recursivamente. Serve para detectar ciclos e para ordenação topológica.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois algoritmos são quase idênticos no código: a única diferença estrutural é{' '}
          <strong>fila contra pilha</strong>. Trocar a estrutura muda completamente a ordem de visita — e o
          problema que cada um resolve.
        </p>
      </Subsection>

      <Subsection title="Custos" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Com lista de adjacência: O(V + E)',
              description:
                'Cada vértice é visitado uma vez e cada aresta é examinada uma vez. É o custo ótimo: não dá para resolver o problema sem ao menos olhar para tudo.',
              accent: 'accent',
            },
            {
              title: 'Com matriz de adjacência: O(V²)',
              description:
                'Descobrir os vizinhos de um vértice exige varrer a linha inteira, inclusive as posições vazias. Em grafo esparso, é desperdício puro.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os algoritmos clássicos que vêm depois" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'DIJKSTRA — caminho de menor custo',
              description:
                'Generaliza a BFS para grafos PONDERADOS com pesos não negativos, trocando a fila comum por uma fila de PRIORIDADE. É o algoritmo por trás de aplicativos de rota.',
            },
            {
              title: 'KRUSKAL e PRIM — árvore geradora mínima',
              description:
                'Encontram o subconjunto de arestas que conecta todos os vértices com custo total mínimo. Aplicam-se a projeto de redes: ligar todos os pontos gastando o mínimo de cabo.',
            },
            {
              title: 'Ordenação topológica',
              description:
                'Baseada na DFS, ordena vértices de um dígrafo acíclico respeitando as dependências. É como compiladores decidem a ordem de compilação e gerenciadores de pacotes a ordem de instalação — e é uma relação de ORDEM PARCIAL em ação.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O fecho da disciplina" accent="var(--color-accent2)">
        <p>
          Repare no que acabou de acontecer: a <strong>fila</strong> e a <strong>pilha</strong> que definem BFS e
          DFS são exatamente as estruturas que ESTD, no período seguinte, vai estudar em detalhe. A{' '}
          <strong>árvore</strong> definida aqui como grafo conexo sem ciclos vira lá uma estrutura de dados com
          inserção, remoção e balanceamento.
        </p>
        <p>
          MTSI não é pré-requisito burocrático de ESTD: é literalmente a definição do que ESTD vai implementar.
        </p>
      </HighlightBox>
    </section>
  );
}
