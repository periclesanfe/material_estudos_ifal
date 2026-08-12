import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import {
  codeRepresentacoes,
  codeTravessias,
} from './snippets';
import {
  treeVocabulary,
  treeRepresentations,
  treeTraversals,
  parseTreeRules,
  parseTreeConcepts,
} from './blocks';

export default function ArvoresSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores — Conceitos e Representações"
        subtitle="Vocabulário, lista de listas, nós e referências, travessias e árvore de análise"
        colorClass="text-accent3"
      />

      <Subsection title="Vocabulário da aula">
        <PanelList items={treeVocabulary} />
      </Subsection>

      <Subsection title="Duas formas de representar" accentClass="text-accent4">
        <ConceptGrid items={treeRepresentations} />
      </Subsection>

      <Subsection title="As duas representações em código" accentClass="text-accent5">
        <CodeBlock code={codeRepresentacoes} language="python" />
      </Subsection>

      <Subsection title="Travessias de árvore binária" accentClass="text-accent2">
        <PanelList items={treeTraversals} />
      </Subsection>

      <Subsection title="As três travessias em código" accentClass="text-accent3">
        <CodeBlock code={codeTravessias} language="python" />
      </Subsection>

      <Subsection title="Árvore de análise (parse tree)">
        <PanelList items={parseTreeConcepts} />
      </Subsection>

      <Subsection title="Regras para construir a árvore de análise" accentClass="text-accent4">
        <FlowDiagram items={parseTreeRules} />
      </Subsection>

      <HighlightBox title="Onde a pilha reaparece" accent="var(--color-accent5)">
        <p>
          Construir a parse tree de <code>(3+(4*5))</code> exige voltar ao nó pai, mas a interface da árvore só oferece{' '}
          <code>getLeftChild</code> e <code>getRightChild</code>. A solução da aula é empilhar o nó atual antes de descer
          e desempilhar ao encontrar <code>)</code> — a mesma pilha estudada na AV1.
        </p>
      </HighlightBox>
    </section>
  );
}
