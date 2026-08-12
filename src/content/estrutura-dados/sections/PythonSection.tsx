import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { codePythonBasico } from './snippets';
import { pythonTypes, pythonOperators, pythonControlFlow, pythonFunctionsConcepts } from './blocks';

export default function PythonSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Python Básico"
        subtitle="Tipos primitivos, operadores, estruturas de controle e funções"
        colorClass="text-accent"
      />

      <Subsection title="Tipos primitivos em Python" accentClass="text-accent2">
        <ConceptGrid items={pythonTypes} columns="md:grid-cols-2 lg:grid-cols-4" />
      </Subsection>

      <Subsection title="Operadores especiais" accentClass="text-accent3">
        <PanelList items={pythonOperators} />
      </Subsection>

      <Subsection title="Estruturas de controle" accentClass="text-accent4">
        <PanelList items={pythonControlFlow} />
      </Subsection>

      <Subsection title="Funções e conceitos-chave" accentClass="text-accent5">
        <ConceptGrid items={pythonFunctionsConcepts} />
      </Subsection>

      <Subsection title="Exemplo prático">
        <CodeBlock code={codePythonBasico} language="python" />
      </Subsection>

      <HighlightBox title="Atenção na prova" accent="var(--color-accent3)">
        <p>
          <code>input()</code> sempre retorna str. Sem conversão explícita, <code>2 + "3"</code> gera TypeError. Use <code>int(input())</code> ou <code>float(input())</code> para ler números.
        </p>
      </HighlightBox>
    </section>
  );
}