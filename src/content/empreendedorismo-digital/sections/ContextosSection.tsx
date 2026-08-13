import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ColoredPanelList, StatStrip } from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import {
  intrapreneurshipEnablers,
  intrapreneurshipBarriers,
  intrapreneurshipExamples,
  impactChain,
  outputOutcomeImpact,
  gemHeadlineStats,
  gemMotivations,
  gemProfiles,
} from './blocks';

export default function ContextosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Intraempreendedorismo, Impacto Social e GEM 2024"
        subtitle="Onde mais se empreende além da startup independente — dentro de organizações existentes, no campo do impacto social, e em que escala isso acontece no Brasil"
        colorClass="text-accent"
      />

      <HighlightBox title="Duas formas de empreender que não são startup">
        <p>
          <strong>Intraempreendedorismo</strong> cria inovação dentro de organizações existentes. O termo foi difundido
          por Gifford Pinchot III: o intraempreendedor usa recursos e infraestrutura da organização, mas age com
          iniciativa, criatividade, visão estratégica e risco calculado.
        </p>
        <p>
          <strong>Empreendedorismo social</strong> cria soluções sustentáveis para problemas sociais, ambientais ou
          culturais. A organização pode ter ou não fins lucrativos, mas precisa equilibrar missão, sustentabilidade
          financeira e governança.
        </p>
      </HighlightBox>

      <Subsection title="O que favorece o intraempreendedorismo" accentClass="text-accent2">
        <PanelList items={intrapreneurshipEnablers} />
      </Subsection>

      <Subsection title="O que o trava" accentClass="text-accent3">
        <ColoredPanelList items={intrapreneurshipBarriers} />
      </Subsection>

      <Subsection title="Casos conhecidos" accentClass="text-accent4">
        <PanelList items={intrapreneurshipExamples} />
      </Subsection>

      <HighlightBox title="Inovação interna exige condições, não só gente criativa" accent="var(--color-accent4)">
        <p>
          Os exemplos acima costumam ser contados como histórias de indivíduos geniais. A leitura correta é a oposta:
          eles só existiram porque a organização tinha tolerância ao erro, alguma autonomia de alocação e um caminho
          para transformar iniciativa em produto.
        </p>
        <p>
          Sem essas condições institucionais, o colaborador criativo apenas se frustra — e frequentemente sai para
          empreender por conta própria.
        </p>
      </HighlightBox>

      <Subsection title="Teoria da mudança" accentClass="text-accent5">
        <FlowDiagram items={impactChain} />
      </Subsection>

      <Subsection title="Output, outcome e impacto" accentClass="text-accent">
        <CriteriaMatrix
          criterionLabel="Nível"
          headers={['O que mede', 'No FilaZero']}
          rows={outputOutcomeImpact}
          caption="Indicadores devem distinguir entrega de transformação. Número de atendimentos é entrega; melhoria de acesso é transformação."
        />
      </Subsection>

      <HighlightBox title="Inovação social não é entregar para" accent="var(--color-accent2)">
        <p>
          A inovação social deve envolver a comunidade, respeitar o contexto e evitar tratar beneficiários apenas como
          receptores passivos. Negócios sociais enfrentam captação difícil, burocracia, o equilíbrio entre retorno e
          impacto, e escalabilidade em contextos que variam muito entre si.
        </p>
        <p>
          Tecnologia e IA ampliam alcance, mas também introduzem riscos de exclusão, viés e privacidade — que em
          serviços públicos recaem justamente sobre quem tem menos alternativa.
        </p>
      </HighlightBox>

      <Subsection title="GEM 2024: os números" accentClass="text-accent3">
        <StatStrip items={gemHeadlineStats} />
      </Subsection>

      <Subsection title="Perfis do estudo" accentClass="text-accent4">
        <PanelList items={gemProfiles} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Motivações declaradas" accentClass="text-accent5">
        <StatStrip items={gemMotivations} />
      </Subsection>

      <HighlightBox title="Como interpretar sem exagerar" accent="var(--color-accent5)">
        <p>
          As motivações <strong>coexistem</strong>: empreender por necessidade não significa ausência de inovação, e
          indica que a falta de alternativas influenciou a entrada. Políticas públicas precisam diferenciar
          subsistência, oportunidade e crescimento — são fenômenos distintos sob o mesmo número.
        </p>
        <p>
          Segundo o relatório, cerca de <strong>31%</strong> dos estabelecidos operavam sem empregados e menos de 20%
          tinham cinco ou mais. Aproximadamente <strong>800 mil</strong> novos negócios indicaram inovação ou clientes
          nacionais e cerca de <strong>130 mil</strong>, alcance internacional. Ou seja: alta atividade empreendedora{' '}
          <em>não implica</em> alta inovação ou internacionalização.
        </p>
        <p>
          O mesmo vale para digitalização. Entre os iniciais, 96,2% usavam tecnologias digitais para vender e 81,9%
          pretendiam ampliar o uso em seis meses; entre os estabelecidos, 94,4% e 76,1%. Digitalização virou
          infraestrutura básica — usar aplicativo não garante transformação de modelo, produtividade nem vantagem
          competitiva.
        </p>
      </HighlightBox>
    </section>
  );
}
