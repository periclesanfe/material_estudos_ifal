import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { codeRecursividade } from './snippets';
import { recursionConcepts, recursionExamples, recursionFlow } from './blocks';

export default function RecursividadeSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Recursividade"
        subtitle="Caso base, redução ao caso base e pilha de chamadas"
        colorClass="text-accent3"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={recursionConcepts} />
      </Subsection>

      <Subsection title="Como a recursão funciona" accentClass="text-accent2">
        <FlowDiagram items={recursionFlow} />
      </Subsection>

      <Subsection title="Exemplos clássicos em código" accentClass="text-accent3">
        <CodeBlock code={codeRecursividade} language="python" />
      </Subsection>

      <Subsection title="Mais exemplos" accentClass="text-accent4">
        <PanelList items={recursionExamples} />
      </Subsection>

      <HighlightBox title="Cuidado com recursão infinita" accent="var(--color-accent2)">
        <p>
          Toda função recursiva precisa de: (1) caso base explícito e (2) garantia de que cada chamada aproxima o problema do caso base. Sem isso → recursão infinita → StackOverflow.
        </p>
      </HighlightBox>

      <HighlightBox title="Quem subestima recursividade na AV1 paga na AV2" accent="var(--color-accent4)">
        <p>
          O assunto tem material curto e cai na AV1 <strong>e</strong> na prova final — mas o custo real de não dominá-lo
          aparece depois. As três travessias de árvore, a avaliação da árvore de análise, o merge sort e o quick sort são
          todos definidos recursivamente, e todos caem na AV2. Vale também ligar este tópico à{' '}
          <strong>busca binária recursiva</strong>: ela é O(log n) em número de chamadas, mas se a recursão passar uma
          fatia da lista em vez de índices, cada chamada copia elementos e a análise deixa de valer — o detalhe está
          detalhado na seção Pesquisa e Busca.
        </p>
      </HighlightBox>
    </section>
  );
}