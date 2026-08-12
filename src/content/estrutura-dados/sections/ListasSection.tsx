import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, StatStrip } from '../../../components/sections';
import { codeListaSequencial } from './snippets';
import { listInterface, listComplexity } from './blocks';

export default function ListasSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Sequenciais"
        subtitle="Interface de TAD lista e análise de complexidade das operações"
        colorClass="text-accent5"
      />

      <Subsection title="Interface da Lista como TAD">
        <PanelList items={listInterface} />
      </Subsection>

      <Subsection title="Complexidade das operações" accentClass="text-accent3">
        <StatStrip items={listComplexity} />
      </Subsection>

      <Subsection title="Exemplo com complexidades comentadas" accentClass="text-accent5">
        <CodeBlock code={codeListaSequencial} language="python" />
      </Subsection>

      <HighlightBox title="O que significa O(1) amortizado?">
        <p>
          O asterisco em O(1)* indica <strong>amortizado</strong>: na maior parte das vezes é O(1), mas eventualmente o array dobra de tamanho (O(n) pontual). A média ao longo de n operações ainda é O(1).
        </p>
      </HighlightBox>
    </section>
  );
}