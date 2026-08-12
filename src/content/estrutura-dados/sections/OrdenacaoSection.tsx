import AlgorithmVisualizer from '../../../components/ui/algorithm/AlgorithmVisualizer';
import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable } from '../../../components/sections';
import {
  codeBubble,
  codeShell,
  codeMerge,
  codeQuick,
} from './snippets';
import { sortConcepts, sortComplexity } from './blocks';

export default function OrdenacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Algoritmos de Ordenação"
        subtitle="Bubble, Selection, Insertion, Shell, Merge e Quick Sort em análise comparativa"
        colorClass="text-accent2"
      />

      <Subsection title="Os principais algoritmos">
        <ConceptGrid items={sortConcepts} columns="md:grid-cols-2 lg:grid-cols-3" />
      </Subsection>

      <Subsection title="Visualizador passo a passo" accentClass="text-accent">
        <p className="mb-3 text-sm text-text-muted">
          Os slides ensinam ordenação como uma <strong>sequência de estados do array</strong>, com o elemento em foco
          destacado e um rótulo explicando cada passo. O array padrão é o da aula —{' '}
          <code className="text-accent3">[54, 26, 93, 17, 77, 31, 44, 55, 20]</code> — e os rótulos seguem o vocabulário
          do professor (“Troca”, “93 no lugar após a 1ª varredura”, “93 &gt; 31, desloca para a direita”).
        </p>
        <AlgorithmVisualizer />
      </Subsection>

      <Subsection title="Bubble Sort e Selection Sort" accentClass="text-accent3">
        <CodeBlock code={codeBubble} language="python" />
      </Subsection>

      <Subsection title="Shell Sort" accentClass="text-accent2">
        <CodeBlock code={codeShell} language="python" />
      </Subsection>

      <Subsection title="Merge Sort" accentClass="text-accent4">
        <CodeBlock code={codeMerge} language="python" />
      </Subsection>

      <Subsection title="Quick Sort com partição in-place">
        <CodeBlock code={codeQuick} language="python" />
      </Subsection>

      <HighlightBox title="Mediana de três" accent="var(--color-accent3)">
        <p>
          O quick sort degrada para O(n²) quando o split point cai muito à esquerda ou à direita, gerando divisões
          desiguais. A técnica da <strong>mediana de três</strong> reduz esse risco: pega-se o primeiro, o último e o
          elemento do meio, e usa-se o valor mediano entre eles como pivô.
        </p>
      </HighlightBox>

      <Subsection title="Análise de complexidade" accentClass="text-accent5">
        <ComparisonTable rows={sortComplexity} leftLabel="Complexidade de tempo" rightLabel="Espaço e estabilidade" />
      </Subsection>

      <HighlightBox title="Algoritmo estável">
        <p>
          Mantém a ordem relativa de elementos com chaves iguais. Bubble, Insertion e Merge são estáveis. Selection e Quick Sort (implementação padrão) não são.
        </p>
      </HighlightBox>

      <HighlightBox title="Na prática" accent="var(--color-accent5)">
        <p>
          Python usa Timsort (híbrido de Merge Sort + Insertion Sort), O(n log n), estável. Para dados quase ordenados, Insertion Sort é imbatível. Merge Sort garante O(n log n) mas usa O(n) espaço extra.
        </p>
      </HighlightBox>
    </section>
  );
}