import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, StatStrip } from '../../../components/sections';
import { codePilhaArray } from './snippets';
import { stackConcepts, stackApplications, stackComplexity } from './blocks';

export default function PilhasSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pilhas (Stack)"
        subtitle="Princípio LIFO, operações e aplicações práticas"
        colorClass="text-accent"
      />

      <Subsection title="Conceitos fundamentais" accentClass="text-accent2">
        <ConceptGrid items={stackConcepts} />
      </Subsection>

      <Subsection title="Complexidade das operações" accentClass="text-accent3">
        <StatStrip items={stackComplexity} />
      </Subsection>

      <Subsection title="Implementação e aplicação" accentClass="text-accent4">
        <CodeBlock code={codePilhaArray} language="python" />
      </Subsection>

      <Subsection title="Outras aplicações de pilhas" accentClass="text-accent5">
        <PanelList items={stackApplications} />
      </Subsection>

      <HighlightBox title="Algoritmo is_matched()">
        <p>
          Para cada caractere da expressão: símbolo abrindo (parêntese, colchete ou chave) → push. Símbolo fechando → se pilha vazia ou top não corresponde ao par → retorna False. No fim, a pilha deve estar vazia para a expressão ser válida.
        </p>
      </HighlightBox>
    </section>
  );
}