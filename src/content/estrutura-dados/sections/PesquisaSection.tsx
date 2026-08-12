import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { codeBusca } from './snippets';
import { searchConcepts, binarySearchSteps, searchComparison, sequentialSearchCases } from './blocks';

export default function PesquisaSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pesquisa e Busca"
        subtitle="Busca sequencial O(n) e busca binária O(log n), dividir e conquistar"
        colorClass="text-accent5"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={searchConcepts} />
      </Subsection>

      <Subsection title="Passo a passo da busca binária" accentClass="text-accent2">
        <FlowDiagram items={binarySearchSteps} />
      </Subsection>

      <Subsection title="Implementação dos dois algoritmos" accentClass="text-accent3">
        <CodeBlock code={codeBusca} language="python" />
      </Subsection>

      <Subsection title="Busca Sequencial vs Busca Binária" accentClass="text-accent5">
        <ComparisonTable rows={searchComparison} leftLabel="Sequencial" rightLabel="Binária" />
      </Subsection>

      <Subsection title="Busca sequencial em número de comparações" accentClass="text-accent4">
        <ComparisonTable
          rows={sequentialSearchCases}
          leftLabel="Melhor e pior caso"
          rightLabel="Caso médio"
        />
      </Subsection>

      <HighlightBox title="O que a lista ordenada muda de fato" accent="var(--color-accent3)">
        <p>
          Em lista não ordenada, procurar um item <strong>ausente</strong> obriga a percorrer os n elementos, sempre. Em
          lista ordenada, a busca pode parar assim que encontra um valor maior que o procurado — o caso médio de item
          ausente cai de n para n/2. Mesmo assim, a técnica continua sendo O(n): a diferença é constante, não de classe.
        </p>
      </HighlightBox>

      <HighlightBox title="Por que O(log n)?">
        <p>
          A busca binária divide o espaço de busca ao meio a cada passo. Se são necessárias i comparações até restar um
          único item, então n/2ⁱ = 1, ou seja, 2ⁱ = n e i = log n. Para n = 1.000.000, são no máximo cerca de 20
          comparações.
        </p>
      </HighlightBox>

      <HighlightBox title="Cuidado com a versão recursiva" accent="var(--color-accent2)">
        <p>
          A análise acima supõe que o slice <code>lista[:meio]</code> custa O(1) — mas ele custa O(k), porque copia os
          elementos. A versão iterativa com os índices <code>inicio</code> e <code>fim</code> não tem esse problema.
        </p>
      </HighlightBox>
    </section>
  );
}