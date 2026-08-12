import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { codeTad } from './snippets';
import { tadConcepts, tadObjectives, tadHierarchy } from './blocks';

export default function TADSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tipos Abstratos de Dados (TAD)"
        subtitle="Separação entre interface e implementação, o conceito central de ED"
        colorClass="text-accent4"
      />

      <Subsection title="Conceitos fundamentais">
        <ConceptGrid items={tadConcepts} />
      </Subsection>

      <Subsection title="Hierarquia TAD → Implementação" accentClass="text-accent3">
        <FlowDiagram items={tadHierarchy} />
      </Subsection>

      <Subsection title="Objetivos e características" accentClass="text-accent5">
        <PanelList items={tadObjectives} />
      </Subsection>

      <Subsection title="Exemplo: TAD Data em Python" accentClass="text-accent4">
        <CodeBlock code={codeTad} language="python" />
      </Subsection>

      <HighlightBox title="Interface vs Implementação">
        <p>
          O TAD define <strong>O QUÊ</strong> pode ser feito (interface pública). A implementação define <strong>COMO</strong> fazer (estrutura de armazenamento e algoritmos). Quem usa o TAD não precisa saber como está implementado.
        </p>
      </HighlightBox>
    </section>
  );
}