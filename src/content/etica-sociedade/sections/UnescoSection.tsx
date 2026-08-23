import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ColoredPanelList, PanelList, TheoryBlock } from '../../../components/sections';

export default function UnescoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Recomendação sobre a Ética da IA"
        subtitle="UNESCO, 2022 — de princípios declarados a instrumentos de avaliação"
        colorClass="text-accent2"
        badge="AV2"
      />

      <TheoryBlock title="O problema que ela resolve">
        <p>
          Declarações de princípios sobre IA são abundantes — quase toda organização publicou a sua. O que
          costuma faltar é o passo seguinte: <strong>como saber se um país está preparado</strong> para
          implementar IA de acordo com esses princípios, e como medir o impacto de um sistema concreto.
        </p>
        <p>
          A Recomendação de 2022 responde a isso determinando o desenvolvimento de <strong>dois
          instrumentos</strong>, e não apenas de mais uma lista de valores.
        </p>
      </TheoryBlock>

      <Subsection title="Os dois recursos-chave" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'RAM — Metodologia de Avaliação de Prontidão',
              description:
                'Readiness Assessment Methodology. Avalia o quanto um país está preparado para implementar IA de forma alinhada aos valores da Recomendação.',
              accent: 'accent',
            },
            {
              title: 'EIA — Avaliação de Impacto Ético',
              description:
                'Ethical Impact Assessment. Avalia o impacto ético de sistemas de IA concretos, não a prontidão geral do país.',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois constituem os <strong>principais pilares da implementação da IA</strong> em cada país. Seu
          propósito declarado: avaliar e promover a <strong>resiliência de leis, políticas e instituições
          existentes</strong> diante dessa implementação, e o alinhamento dos sistemas de IA com os valores e
          princípios estabelecidos.
        </p>
      </Subsection>

      <Subsection title="O que a Recomendação estabelece" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Valores e princípios',
              description:
                'Elabora os valores e princípios que devem orientar a concepção ética, o desenvolvimento e o uso da IA — as três etapas, não apenas o uso final.',
            },
            {
              title: 'Ações dos Estados-membros',
              description:
                'Estabelece as ações necessárias dos Estados-membros para garantir a proteção desses valores e princípios. Atribui responsabilidade a atores concretos.',
            },
            {
              title: 'Regulamentação eficaz',
              description:
                'Defende explicitamente uma regulamentação eficaz — a Recomendação não se limita à autorregulação do setor.',
            },
            {
              title: 'Áreas de política',
              description:
                'Fornece recomendações em várias áreas, entre elas GÊNERO, MEIO AMBIENTE e COMUNICAÇÃO E INFORMAÇÃO.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As cinco dimensões da RAM" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Jurídico e regulatório',
              description: 'As leis e normas existentes dão conta dos problemas que a IA cria?',
            },
            {
              title: 'Social e cultural',
              description: 'Como a sociedade compreende, discute e aceita a tecnologia.',
            },
            { title: 'Econômico', description: 'As condições econômicas de desenvolvimento e adoção.' },
            {
              title: 'Científico e educacional',
              description: 'A capacidade de pesquisa e a formação de pessoas — onde a universidade entra.',
            },
            {
              title: 'Tecnológico e infraestrutura',
              description: 'A base material sem a qual nada acontece.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Cada dimensão é dividida em subcategorias com <strong>indicadores qualitativos e quantitativos</strong>.
          Note o desenho: a prontidão de um país para a IA <strong>não é medida apenas por capacidade
          técnica</strong> — a dimensão tecnológica é uma entre cinco.
        </p>
      </Subsection>

      <HighlightBox title="Comparação como método" accent="var(--color-accent3)">
        <p>
          Além de fornecer informações ricas sobre o status individual de cada país, a RAM produz{' '}
          <strong>informações comparativas</strong>, com um objetivo declarado: que os países{' '}
          <strong>aprendam uns com os outros</strong>.
        </p>
        <p>
          É a mesma lógica da solidariedade digital da CMSI, aplicada a um problema novo — e uma resposta ao que
          Morin chamaria de necessidade de uma política de civilização planetária: problemas globais não se
          resolvem país a país, em isolamento.
        </p>
      </HighlightBox>
    </section>
  );
}
