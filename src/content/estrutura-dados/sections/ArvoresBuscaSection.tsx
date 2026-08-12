import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import {
  codeBst,
  codeSucessor,
  codeHeap,
} from './snippets';
import { bstMapOperations, bstDeleteCases, bstComplexity, heapConcepts, heapOperations } from './blocks';

export default function ArvoresBuscaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores de Busca e Heap"
        subtitle="BST como TAD Map, os três casos da remoção e fila de prioridade com binary heap"
        colorClass="text-accent5"
      />

      <Subsection title="A BST implementa o TAD Map">
        <PanelList items={bstMapOperations} />
      </Subsection>

      <Subsection title="Implementação da BST" accentClass="text-accent2">
        <CodeBlock code={codeBst} language="python" />
      </Subsection>

      <Subsection title="Remover um nó: os três casos" accentClass="text-accent3">
        <ConceptGrid items={bstDeleteCases} />
      </Subsection>

      <Subsection title="Encontrando o sucessor" accentClass="text-accent4">
        <CodeBlock code={codeSucessor} language="python" />
      </Subsection>

      <Subsection title="Complexidade das operações na BST" accentClass="text-accent5">
        <ComparisonTable rows={bstComplexity} leftLabel="Complexidade" rightLabel="Casos balanceada / degenerada" />
      </Subsection>

      <HighlightBox title="BST degenerada" accent="var(--color-accent2)">
        <p>
          Inserir elementos em ordem crescente cria uma árvore "em linha" — a altura h passa a ser n e a busca degrada
          para O(n). Manter a árvore balanceada é o que preserva h ≈ log n.
        </p>
      </HighlightBox>

      <Subsection title="Fila de prioridade e binary heap">
        <ConceptGrid items={heapConcepts} />
      </Subsection>

      <Subsection title="As operações do heap" accentClass="text-accent3">
        <PanelList items={heapOperations} />
      </Subsection>

      <Subsection title="Implementação do binary heap" accentClass="text-accent4">
        <CodeBlock code={codeHeap} language="python" />
      </Subsection>

      <HighlightBox title="Duas propriedades, sempre nessa ordem">
        <p>
          Toda operação do heap primeiro faz o movimento que <strong>preserva a estrutura</strong> (anexar ao fim, ou
          mover o último item para a raiz) e só depois faz as trocas que <strong>restauram a ordem</strong> (percUp ou
          percDown). Como a árvore é balanceada, essas trocas percorrem no máximo log n níveis.
        </p>
      </HighlightBox>
    </section>
  );
}
