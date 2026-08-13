import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ColoredPanelList } from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import { cdFlow, cdPhases, searchVsExecution, strongEvidence, cdPathologies } from './blocks';

export default function CustomerDevelopmentSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Customer Development"
        subtitle="Quatro fases que separam procurar um modelo de negócio de executá-lo — e as patologias que fazem equipes pularem a primeira metade"
        colorClass="text-accent5"
        badge="Cust. Dev."
      />

      <Subsection title="As quatro fases, na ordem" accentClass="text-accent">
        <FlowDiagram items={cdFlow} />
      </Subsection>

      <HighlightBox title="Duas buscam, duas executam">
        <p>
          <strong>Customer Discovery</strong> e <strong>Customer Validation</strong> procuram hipóteses válidas: existe
          o problema, e existe um jeito repetível de vender a solução? <strong>Customer Creation</strong> e{' '}
          <strong>Company Building</strong> executam e escalam um modelo já comprovado.
        </p>
        <p>
          Essa fronteira é a pergunta mais cobrada da seção. Inverter a ordem — investir em aquisição e estrutura antes
          de validar — é a definição operacional de escala prematura.
        </p>
      </HighlightBox>

      <Subsection title="O que cada fase entrega" accentClass="text-accent2">
        <ConceptGrid items={cdPhases} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="A fronteira entre busca e execução" accentClass="text-accent3">
        <CriteriaMatrix
          criterionLabel="Fase"
          headers={['Momento', 'Pergunta que responde', 'Como se responde']}
          rows={searchVsExecution}
          caption="Se a pergunta da fase ainda não tem resposta apoiada em comportamento observado, a fase seguinte não deveria começar."
        />
      </Subsection>

      <HighlightBox title="Por que elogio não é evidência" accent="var(--color-accent2)">
        <p>
          Uma declaração como <em>"eu usaria"</em> vale pouco sem contexto, frequência, custo atual e comprometimento.
          As perguntas da descoberta devem explorar <strong>comportamento passado</strong> — o que a pessoa fez da
          última vez que teve o problema — e não intenção futura, que é barata de declarar e cara de confiar.
        </p>
        <p>
          Em vendas complexas, mapeie usuário, decisor econômico, influenciador técnico, aprovador jurídico e
          bloqueadores. Elogio de quem não assina contrato não move a hipótese.
        </p>
      </HighlightBox>

      <Subsection title="Evidência que sustenta uma validação" accentClass="text-accent4">
        <PanelList items={strongEvidence} />
      </Subsection>

      <Subsection title="As cinco patologias" accentClass="text-accent2">
        <ColoredPanelList items={cdPathologies} />
      </Subsection>

      <HighlightBox title="Pivotar faz parte" accent="var(--color-accent3)">
        <p>
          Se as hipóteses não se sustentam na validação, realiza-se um <strong>pivot</strong> e retorna-se à descoberta.
          Isso não é fracasso: é o mecanismo previsto pelo método. O problema não é voltar — é insistir depois que a
          evidência já disse para voltar.
        </p>
      </HighlightBox>
    </section>
  );
}
