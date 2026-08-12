import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { codeListaEncadeada } from './snippets';
import { linkedListConcepts, linkedListOperations, linkedVsArray, sortedLinkedList } from './blocks';

export default function ListasEncadeadasSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Encadeadas"
        subtitle="Nós ligados por referências, estrutura dinâmica sem deslocamentos"
        colorClass="text-accent4"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={linkedListConcepts} />
      </Subsection>

      <Subsection title="Operações e complexidades" accentClass="text-accent3">
        <PanelList items={linkedListOperations} />
      </Subsection>

      <Subsection title="Implementação completa" accentClass="text-accent4">
        <CodeBlock code={codeListaEncadeada} language="python" />
      </Subsection>

      <Subsection title="Lista Encadeada vs Array" accentClass="text-accent5">
        <ComparisonTable rows={linkedVsArray} leftLabel="Lista Encadeada" rightLabel="Array (lista Python)" />
      </Subsection>

      <Subsection title="Lista encadeada ordenada" accentClass="text-accent2">
        <PanelList items={sortedLinkedList} />
      </Subsection>

      <HighlightBox title="Remoção do head" accent="var(--color-accent4)">
        <p>
          Para remover um nó, é necessário manter referência ao nó anterior para poder fazer <code>anterior._proximo = nó._proximo</code>. Caso especial: remover o head — apenas atualize head para o próximo nó.
        </p>
      </HighlightBox>
    </section>
  );
}