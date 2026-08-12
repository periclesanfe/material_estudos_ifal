import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, PanelList } from '../../../components/sections';
import { PDSW_SEMINAR_CRITERIA } from '../data';
import { seminarFlow } from './blocks';

export default function SeminarioSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Seminário"
        subtitle="Critérios de avaliação e roteiro de preparação para o tema definido pelo professor."
        colorClass="text-accent5"
        badge="N2 / S1"
      />
      <PanelList items={PDSW_SEMINAR_CRITERIA} />
      <HighlightBox title="Estrutura recomendada" accent="var(--color-accent5)">
        <FlowDiagram items={seminarFlow} />
      </HighlightBox>
      <HighlightBox title="Como demonstrar domínio">
        <p>
          Apresente o problema, defina o conceito central, mostre um exemplo prático ou teórico, discuta vantagens e limitações, conecte com Engenharia de Software Moderna e reserve tempo para perguntas.
        </p>
      </HighlightBox>
    </section>
  );
}
