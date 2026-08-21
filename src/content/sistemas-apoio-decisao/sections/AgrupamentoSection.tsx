import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function AgrupamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Agrupamento e K-Means"
        subtitle="Descobrir grupos sem rótulos — e escolher o k com o método do cotovelo"
        colorClass="text-accent"
      />

      <TheoryBlock title="Aprendizado não supervisionado">
        <p>
          Agrupar é segmentar itens que compartilham alguma similaridade, sem amostra de
          treinamento e sem rótulos — <strong>aprendizado não supervisionado</strong>. O objetivo:
          que a semelhança <strong>dentro</strong> de um cluster seja maior que a semelhança{' '}
          <strong>entre</strong> clusters, formando grupos geralmente disjuntos.
        </p>
        <p>
          A similaridade vem de uma função de <strong>distância</strong>: quanto menor a
          distância, maior a similaridade. A mais usada é a <strong>euclidiana</strong> — que,
          como diz o material, "pode ser provada pela aplicação repetida do teorema de
          Pitágoras". Atenção: escolhas diferentes de atributos, medidas de proximidade e
          algoritmos levam a <strong>resultados diferentes</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Três tipos de agrupamento" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Exclusive', description: 'Cada registro pertence a UM único grupo. Se está num, não está em nenhum outro. É o caso do k-means.', accent: 'accent' },
            { title: 'Overlapping', description: 'Um registro pode participar de mais de um grupo simultaneamente.', accent: 'accent2' },
            { title: 'Hierárquico', description: 'Há hierarquia entre os grupos, e cada grupo pode ter subgrupos — a estrutura que o dendrograma representa.', accent: 'accent3' },
          ]}
        />
      </Subsection>

      <Subsection title="As quatro fases do k-means" accentClass="text-accent3">
        <FlowDiagram
          items={[
            '1. INICIALIZAÇÃO — escolher aleatoriamente k centroides (os pontos centrais iniciais)',
            '2. ATRIBUIÇÃO — calcular a distância de cada ponto a todos os centroides; cada ponto vai para o cluster do centroide MAIS PRÓXIMO',
            '3. MOVIMENTAÇÃO — recalcular cada centroide como a MÉDIA dos pontos do seu cluster',
            '4. OTIMIZAÇÃO — repetir 2 e 3 até estabilizar: nenhum ponto muda de cluster, ou atinge-se o limite de iterações',
          ]}
        />
        <ExampleBox title="A intuição, com números pequenos">
          <p>
            O exemplo do material: com centroides em <strong>1</strong> e <strong>10</strong>, o
            dado <strong>7</strong> vai para o cluster do 10 — sua diferença é 3, contra 6 para o
            cluster do 1. Repita isso para todos os pontos, recalcule as médias, repita de novo.
            O nome "k-<em>means</em>" vem justamente da fase 3: o centroide é a{' '}
            <strong>média</strong> dos pontos do grupo.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Escolhendo o k: o método do cotovelo" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          O <strong>SSE</strong> (soma dos erros quadráticos, ou inércia) mede a discrepância
          entre os pontos e os centroides. Como ele <strong>sempre diminui</strong> quando k
          aumenta — no limite, cada ponto vira seu próprio cluster com SSE zero —, não se escolhe
          o menor valor. Plota-se o SSE em função de k e procura-se onde a curva{' '}
          <strong>"dobra"</strong>: o cotovelo.
        </p>
        <CodeBlock
          language="python"
          title="Os valores reais do exemplo com o dataset Iris"
          code={`k=1  -> SSE = 680,82     # queda enorme
k=2  -> SSE = 152,37     # ainda grande
k=3  -> SSE =  78,94     # <- o COTOVELO: daqui em diante as quedas são pequenas
k=4  -> SSE =  57,35
k=5  -> SSE =  46,54
k=6  -> SSE =  39,20
...
k=10 -> SSE =  26,38

# k = 3 — coerente com a realidade: o Iris tem três espécies.
# Acurácia obtida na comparação com os rótulos reais: 0,89`}
        />
      </Subsection>

      <Subsection title="Limitações e cuidados" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Dependência da inicialização',
              description: 'O material aponta como o "principal problema": centroides iniciais ruins levam a agrupamentos ruins. Daí rodar várias vezes (n_init) ou usar k-means++.',
              accent: 'accent',
            },
            {
              title: 'Normalização é essencial',
              description: 'Variáveis em escalas diferentes distorcem a distância euclidiana: renda em milhares esmaga idade em dezenas, e o cluster vira um mapa da variável de maior magnitude.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O exercício da turma: Mall Customers" accent="var(--color-accent3)">
        <p>
          O dataset traz <em>CustomerID, Gender, Age, Education, Marital Status, Annual Income
          (k$)</em> e <em>Spending Score (1-100)</em>. As perguntas do exercício: quais variáveis
          usar no k-means, que <strong>pré-processamento</strong> aplicar, qual o melhor{' '}
          <strong>k</strong>, como <strong>interpretar</strong> cada cluster encontrado e como
          isso vira segmentação de clientes na prática. As demais questões cobrem o funcionamento
          do algoritmo, duas vantagens e duas limitações, a distância euclidiana com normalização
          e o método do cotovelo.
        </p>
      </HighlightBox>
    </section>
  );
}
