import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, StatStrip, ComparisonTable } from '../../../components/sections';
import { codeBigOClasses } from './snippets';
import { bigOConcepts, bigOClasses, bigOByStructure, bigOSortSummary } from './blocks';

export default function BigOSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Análise de Desempenho — Notação Big O"
        subtitle="O critério para comparar algoritmos e escolher a estrutura certa"
        colorClass="text-accent3"
        badge="AV1 · AV2 · Final"
      />

      <HighlightBox title="Por que este assunto tem seção própria">
        <p>
          A notação Big O é o único conteúdo que o professor listou nos <strong>três</strong> blocos de avaliação:
          AV1, AV2 e prova final. Ela não é um tópico isolado — é a linguagem usada para justificar cada escolha de
          estrutura no resto da disciplina.
        </p>
      </HighlightBox>

      <Subsection title="Como ler a notação">
        <ConceptGrid items={bigOConcepts} />
      </Subsection>

      <Subsection title="As classes que aparecem na disciplina" accentClass="text-accent2">
        <PanelList items={bigOClasses} columns="" />
      </Subsection>

      <Subsection title="Uma classe, um exemplo em código" accentClass="text-accent4">
        <CodeBlock code={codeBigOClasses} language="python" />
      </Subsection>

      <Subsection title="Custo por estrutura estudada" accentClass="text-accent5">
        <ComparisonTable rows={bigOByStructure} leftLabel="Operações baratas" rightLabel="Operações caras / condições" />
      </Subsection>

      <Subsection title="Ordenação em três faixas" accentClass="text-accent3">
        <StatStrip items={bigOSortSummary} />
      </Subsection>

      <HighlightBox title="De onde vêm esses números" accent="var(--color-accent5)">
        <p>
          Cada complexidade acima foi contada nas aulas a partir do número de comparações. No bubble sort, a soma das
          varreduras dá (n²/2) − (n/2), que vira O(n²). Na busca binária, se são necessárias i comparações até sobrar
          um item, então n/2ⁱ = 1, logo i = log n. Material do Prof. MSc. Ricardo Nunes · ESTD · BSI/IFAL · 2023.1.
        </p>
      </HighlightBox>
    </section>
  );
}
