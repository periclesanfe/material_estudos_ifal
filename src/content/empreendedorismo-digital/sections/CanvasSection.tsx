import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { canvasBlocks, resourceVsActivity, filaZeroCanvas } from './blocks';

export default function CanvasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Business Model Canvas"
        subtitle="Um mapa visual de hipóteses sobre criação, entrega e captura de valor — que deve mudar sempre que os experimentos gerarem evidência nova"
        colorClass="text-accent4"
        badge="Canvas"
      />

      <HighlightBox title="São nove blocos, não sete">
        <p>
          A armadilha mais comum do Canvas é preencher os blocos "óbvios" e deixar <strong>Canais</strong> e{' '}
          <strong>Atividades-Chave</strong> implícitos. Sem canais, não se sabe como o cliente descobre, avalia, compra
          e recebe suporte; sem atividades-chave, não se sabe o que a empresa precisa <em>fazer</em> todos os dias para
          a proposta existir.
        </p>
        <p>
          Confira os nove, um a um, e explicite as relações entre eles. O Canvas não é um plano definitivo: é um
          conjunto de hipóteses, e é assim que ele deve ser lido e defendido.
        </p>
      </HighlightBox>

      <Subsection title="Os nove blocos" accentClass="text-accent">
        <ConceptGrid items={canvasBlocks} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Recurso ou atividade?" accentClass="text-accent2">
        <ComparisonTable
          rows={resourceVsActivity}
          leftLabel="Recursos-Chave"
          rightLabel="Atividades-Chave"
          criterionLabel="Critério"
        />
      </Subsection>

      <HighlightBox title="Proposta de valor não é lista de funcionalidades" accent="var(--color-accent2)">
        <p>
          "Agendamento online, senha digital e notificação por SMS" é uma lista de funcionalidades. "Saber a que horas
          serei atendido, sem precisar chegar de madrugada" é uma proposta de valor: descreve a mudança na vida do
          cliente, não o mecanismo que a produz.
        </p>
        <p>
          A diferença aparece no teste mais simples: a funcionalidade responde <em>o que o sistema faz</em>; a proposta
          de valor responde <em>que dor deixa de existir</em>.
        </p>
      </HighlightBox>

      <Subsection title="Canvas aplicado: FilaZero Saúde" accentClass="text-accent3">
        <PanelList items={filaZeroCanvas} />
      </Subsection>

      <HighlightBox title="Coerência interna: os blocos não são independentes" accent="var(--color-accent5)">
        <p>
          Uma proposta voltada a população vulnerável exige <strong>canais acessíveis</strong> e baixo consumo de dados —
          o que descarta um aplicativo pesado antes mesmo de discuti-lo.
        </p>
        <p>
          Se o pagador é o <strong>governo</strong>, o ciclo de vendas tende a ser mais longo, o que aumenta o CAC, a
          necessidade de capital de giro e a dependência de contratos. E se a receita é <strong>recorrente</strong>,
          relacionamento, suporte e retenção precisam sustentar a renovação — não bastam para a primeira venda.
        </p>
        <p>
          Mudar um bloco força a revisão dos outros. É essa cadeia que a banca costuma cobrar quando pede "explique como
          a escolha do segmento altera canais e relacionamento".
        </p>
      </HighlightBox>
    </section>
  );
}
