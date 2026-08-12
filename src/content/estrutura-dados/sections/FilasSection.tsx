import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { queueConcepts, queueCircular, queueVsStack, floodFillConcepts, floodFillSteps } from './blocks';
import { codeFilaArray, codeFloodFill } from './snippets';

export default function FilasSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Filas (Queue)"
        subtitle="Princípio FIFO, array circular e aplicações"
        colorClass="text-accent2"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={queueConcepts} />
      </Subsection>

      <Subsection title="Por que usar array circular?" accentClass="text-accent3">
        <PanelList items={queueCircular} />
      </Subsection>

      <Subsection title="Implementação com array circular" accentClass="text-accent4">
        <CodeBlock code={codeFilaArray} language="python" />
      </Subsection>

      <Subsection title="Pilha vs Fila" accentClass="text-accent5">
        <ComparisonTable rows={queueVsStack} leftLabel="Fila (FIFO)" rightLabel="Pilha (LIFO)" />
      </Subsection>

      <Subsection title="Aplicação: coloração de regiões">
        <PanelList items={floodFillConcepts} />
      </Subsection>

      <Subsection title="O algoritmo em cinco passos" accentClass="text-accent3">
        <FlowDiagram items={floodFillSteps} />
      </Subsection>

      <Subsection title="Implementação com os testes da atividade" accentClass="text-accent2">
        <CodeBlock code={codeFloodFill} language="python" />
      </Subsection>

      <HighlightBox title="É a mesma ideia do BFS" accent="var(--color-accent3)">
        <p>
          O professor dedicou um material inteiro a esta aplicação em computação gráfica, com duas atividades e os
          resultados esperados prontos para conferir. Trocar a fila por uma pilha transforma o mesmo algoritmo em
          busca em profundidade — o desenho final fica igual, muda a ordem em que os pixels são visitados.
        </p>
      </HighlightBox>
    </section>
  );
}