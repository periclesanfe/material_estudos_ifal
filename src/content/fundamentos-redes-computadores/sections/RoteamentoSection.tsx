import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function RoteamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Algoritmos e Protocolos de Roteamento"
        subtitle="Duas famílias de algoritmos e a fronteira entre técnica e política"
        colorClass="text-accent4"
        badge="Av2"
      />

      <TheoryBlock title="O problema">
        <p>
          Dada uma rede com custos nos enlaces, como cada roteador descobre o melhor caminho até cada destino —
          sem que ninguém tenha uma visão privilegiada do todo, e com a topologia mudando ao longo do tempo?
        </p>
      </TheoryBlock>

      <Subsection title="Estado de enlace × vetor de distâncias" accentClass="text-accent">
        <ComparisonTable
          leftLabel="ESTADO DE ENLACE (Dijkstra)"
          rightLabel="VETOR DE DISTÂNCIAS (Bellman-Ford)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que cada nó conhece',
              left: 'O GRAFO COMPLETO da rede — todos os enlaces e seus custos',
              right: 'Apenas o custo até seus VIZINHOS e as estimativas que eles anunciam',
            },
            {
              criterion: 'Como obtém a informação',
              left: 'Cada roteador difunde o estado de seus enlaces a TODOS os outros',
              right: 'Cada roteador troca vetores periodicamente apenas com os vizinhos',
            },
            {
              criterion: 'Onde ocorre o cálculo',
              left: 'Localmente e por completo — cada nó calcula os caminhos mais curtos para todos os destinos',
              right: 'Distribuído e iterativo — a solução emerge das trocas sucessivas',
            },
            {
              criterion: 'Fraqueza característica',
              left: 'Tráfego de difusão e processamento em redes grandes',
              right: 'Contagem ao infinito — más notícias se propagam lentamente',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A contagem ao infinito é o problema clássico do vetor de distâncias: quando um enlace cai, os nós podem
          ficar se convencendo mutuamente de rotas que não existem mais, aumentando o custo aos poucos. Técnicas
          como o <strong>envenenamento reverso</strong> mitigam o efeito, sem eliminá-lo em todos os casos.
        </p>
      </Subsection>

      <Subsection title="Sistemas autônomos — por que a Internet é dividida" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Escala',
              description:
                'Nenhum algoritmo faria os roteadores da Internet inteira convergirem. Dividir em sistemas autônomos (AS) torna o problema tratável.',
              accent: 'accent',
            },
            {
              title: 'Autonomia administrativa',
              description:
                'Cada operadora quer decidir como roteia dentro da própria rede, sem que outra imponha suas métricas.',
              accent: 'accent2',
            },
            {
              title: 'A consequência',
              description:
                'Dois níveis de roteamento: protocolos INTRA-AS dentro de cada sistema e um protocolo INTER-AS entre eles.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os protocolos na prática" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'RIP — intra-AS, vetor de distâncias',
              description:
                'Usa contagem de SALTOS como métrica. Simples e adequado a redes pequenas; a métrica ignora capacidade dos enlaces — um salto por link de 10 Mbps custa o mesmo que um de 10 Gbps.',
            },
            {
              title: 'OSPF — intra-AS, estado de enlace',
              description:
                'Usa Dijkstra sobre a visão completa da topologia. Converge rápido, admite hierarquia em áreas e métricas configuráveis. É o padrão em redes corporativas de porte.',
            },
            {
              title: 'BGP — inter-AS, vetor de caminho',
              description:
                'Anuncia o CAMINHO completo de sistemas autônomos até o destino, não apenas o custo. E decide considerando POLÍTICA COMERCIAL, não só distância técnica.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A diferença essencial do BGP" accent="var(--color-accent3)">
        <p>
          Dentro de um AS, uma única administração busca <strong>eficiência técnica</strong>: o menor custo é o
          melhor caminho, e ponto.
        </p>
        <p>
          Entre sistemas autônomos, entram <strong>relações comerciais</strong>. Uma operadora pode se recusar a
          transportar tráfego de terceiros mesmo tendo o caminho mais curto, porque não é paga para isso. O
          "melhor" caminho no BGP é aquele que a política permite — e é por isso que a rota que seus pacotes
          seguem nem sempre é a geograficamente mais direta.
        </p>
      </HighlightBox>

      <Subsection title="Broadcast e multicast" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Roteamento BROADCAST',
              description:
                'Entregar um pacote a TODOS os nós da rede. A inundação ingênua causaria tempestades de duplicatas — daí técnicas como inundação controlada por número de sequência e árvores de cobertura.',
              accent: 'accent',
            },
            {
              title: 'Roteamento MULTICAST',
              description:
                'Entregar apenas a um GRUPO de interessados, sem replicar o tráfego para quem não pediu. O IGMP gerencia a adesão entre hospedeiro e roteador local; protocolos como o PIM constroem as árvores entre roteadores.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
