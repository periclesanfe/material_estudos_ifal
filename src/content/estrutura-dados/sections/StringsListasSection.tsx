import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { codeStringsListas } from './snippets';
import { stringConcepts, listConcepts, strVsListComparison } from './blocks';

export default function StringsListasSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Strings e Listas"
        subtitle="Sequências imutáveis e mutáveis, métodos, aliasing e clonagem"
        colorClass="text-accent2"
      />

      <Subsection title="Propriedades de Strings">
        <ConceptGrid items={stringConcepts} />
      </Subsection>

      <Subsection title="Propriedades de Listas" accentClass="text-accent3">
        <ConceptGrid items={listConcepts} />
      </Subsection>

      <Subsection title="String vs Lista" accentClass="text-accent5">
        <ComparisonTable rows={strVsListComparison} leftLabel="String" rightLabel="Lista" />
      </Subsection>

      <Subsection title="Exemplo: aliasing, clone e imutabilidade" accentClass="text-accent2">
        <CodeBlock code={codeStringsListas} language="python" />
      </Subsection>

      <HighlightBox title="Identidade vs igualdade">
        <p>
          Use <code>a is b</code> para verificar se são o mesmo objeto na memória. Use <code>a == b</code> para verificar se têm o mesmo valor. Para clonar uma lista: <code>b = a[:]</code>.
        </p>
      </HighlightBox>
    </section>
  );
}