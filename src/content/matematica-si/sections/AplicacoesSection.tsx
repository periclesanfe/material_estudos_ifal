import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ComparisonTable } from '../../../components/sections';

export default function AplicacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Onde Cada Bloco Reaparece no Curso"
        subtitle="Por que esta disciplina não é pré-requisito burocrático"
        colorClass="text-accent4"
      />

      <p className="text-text-muted leading-relaxed">
        Toda disciplina de matemática em curso de computação enfrenta a mesma pergunta:{' '}
        <em>onde é que eu vou usar isso?</em> Para MTSI a resposta é curta — em quase tudo que vem depois. Esta
        seção mapeia bloco a bloco.
      </p>

      <Subsection title="O mapa" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Bloco da ementa"
          rightLabel="Onde reaparece"
          criterionLabel="Tema"
          rows={[
            {
              criterion: 'Matrizes e sistemas',
              left: 'Tabelas de números e a resolução de A·x = b',
              right: 'Computação gráfica, processamento de imagem, aprendizado de máquina, simulação, otimização',
            },
            {
              criterion: 'Transformações lineares',
              left: 'Funções que preservam soma e escala, representadas por matrizes',
              right: 'Toda renderização 2D e 3D — escala, rotação, projeção de câmera',
            },
            {
              criterion: 'Relações',
              left: 'Subconjuntos do produto cartesiano',
              right: 'Modelo relacional de banco de dados, normalização, dependências funcionais',
            },
            {
              criterion: 'Funções',
              left: 'Injeção, sobrejeção, bijeção e inversa',
              right: 'Hashing, criptografia, codificação, compressão',
            },
            {
              criterion: 'Recursão',
              left: 'Caso base e passo recursivo',
              right: 'Percurso de árvores, dividir para conquistar, backtracking, programação dinâmica',
            },
            {
              criterion: 'Grafos',
              left: 'Vértices, arestas e percursos',
              right: 'Redes de computadores, dependências entre módulos, grafo da web, redes sociais, roteamento',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As conexões mais diretas" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'ESTD (3º período) — o destino imediato',
              description:
                'A árvore que aqui é "grafo conexo sem ciclos" vira estrutura de dados com inserção e balanceamento. A fila e a pilha da BFS e da DFS viram tipos abstratos de dados. Os algoritmos recursivos são o último tópico da ementa de ESTD, e começam exatamente onde esta disciplina para.',
            },
            {
              title: 'FDBD e APBD — banco de dados',
              description:
                'O modelo relacional É teoria de relações. Tabela é relação, linha é tupla, e as dependências funcionais que fundamentam a normalização são relações com as propriedades estudadas aqui.',
            },
            {
              title: 'Análise de algoritmos',
              description:
                'O O(n³) da multiplicação de matrizes, o O(2ⁿ) do Fibonacci ingênuo e o O(V+E) dos percursos em grafo são os primeiros contatos com análise de complexidade — feita sobre problemas concretos, antes de virar teoria.',
            },
            {
              title: 'Redes de computadores',
              description:
                'Topologia de rede é grafo. Roteamento é caminho mínimo. Os algoritmos de Dijkstra e de árvore geradora mínima aparecem em protocolos reais, como OSPF e Spanning Tree.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Uma observação sobre o vocabulário" accent="var(--color-accent5)">
        <p>
          Há um ganho menos óbvio que o das aplicações diretas: esta disciplina fornece o{' '}
          <strong>vocabulário com que os problemas de computação são formulados</strong>.
        </p>
        <p>
          Dizer que "a função de hash não é injetora" é mais preciso e mais curto do que descrever colisões por
          extenso. Reconhecer que um problema "é um grafo bipartido" imediatamente traz consigo os algoritmos que
          servem para ele. Perceber que uma estrutura "é uma relação de ordem parcial" indica que ordenação
          topológica resolve.
        </p>
        <p>
          O nome certo não é formalidade: é o que permite reconhecer que um problema novo já foi resolvido antes,
          sob outro disfarce.
        </p>
      </HighlightBox>
    </section>
  );
}
