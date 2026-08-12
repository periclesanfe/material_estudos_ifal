import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { codeDeque } from './snippets';
import { dequeConcepts, dequeVsOthers } from './blocks';

export default function DequeSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Deque (Double-Ended Queue)"
        subtitle="Inserção e remoção nas duas extremidades em O(1)"
        colorClass="text-accent3"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={dequeConcepts} />
      </Subsection>

      <Subsection title="Deque vs Fila" accentClass="text-accent4">
        <ComparisonTable rows={dequeVsOthers} leftLabel="Deque" rightLabel="Fila" />
      </Subsection>

      <Subsection title="collections.deque na prática" accentClass="text-accent2">
        <CodeBlock code={codeDeque} language="python" />
      </Subsection>

      <HighlightBox title="collections.deque em Python">
        <p>
          <code>append()</code>/<code>pop()</code> para o fim; <code>appendleft()</code>/<code>popleft()</code> para o início. Ambas O(1). <code>rotate(k)</code> desloca k posições. <code>maxlen</code> cria deque de tamanho fixo (circular buffer).
        </p>
      </HighlightBox>
    </section>
  );
}