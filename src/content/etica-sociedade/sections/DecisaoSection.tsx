import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function DecisaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Dilema, Conflito e Decisão"
        subtitle="A tríade que estrutura os estudos de caso"
        colorClass="text-accent2"
        badge="AV1"
      />

      <Subsection title="A tríade" accentClass="text-accent">
        <FlowDiagram items={['01 — DILEMA', '02 — CONFLITO', '03 — DECISÃO']} />
      </Subsection>

      <TheoryBlock title="Por que essa sequência">
        <p>
          É a operacionalização da tese de Boff. Se me faço um ser ético ao assumir a responsabilidade pelas
          consequências dos meus atos, então preciso de um método para chegar até o ato — e a tríade é esse
          método.
        </p>
      </TheoryBlock>

      <Subsection title="O que cada etapa significa" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'DILEMA',
              description:
                'A situação em que TODAS as alternativas disponíveis têm algum custo ético. Não é a escolha entre o certo e o errado — essa é fácil. É a escolha em que alguma coisa se perde de qualquer maneira.',
              accent: 'accent',
            },
            {
              title: 'CONFLITO',
              description:
                'A tensão entre valores, interesses ou obrigações que se chocam: o dever contratual contra o dever legal, a lealdade ao empregador contra a responsabilidade para com terceiros.',
              accent: 'accent3',
            },
            {
              title: 'DECISÃO',
              description:
                'O momento em que a pessoa assume um dos caminhos, com suas consequências. Não decidir também é decidir — e, segundo Boff, também define quem se é.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que a disciplina usa estudos de caso" accent="var(--color-accent4)">
        <p>
          Porque dilemas não se resolvem no abstrato. Concordar que "deve-se agir com integridade" não custa nada
          — o custo aparece quando a integridade implica perder um contrato milionário, contrariar quem paga o
          salário ou recusar o projeto que garantiria a promoção.
        </p>
        <p>
          Os dois casos da AV1, na seção seguinte, foram construídos exatamente assim: cada um coloca um valor
          defensável contra outro valor defensável, e exige do estudante uma posição justificada.
        </p>
      </HighlightBox>

      <Subsection title="A IA como estudo de caso" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed">
          O segundo deck da disciplina aplica a tríade à <strong>inteligência artificial</strong>, reunindo casos
          noticiados: a aproximação da IA do grande público em exposições, o volume de investimento das empresas
          brasileiras em IA, a demissão de um engenheiro do Google por afirmar que uma IA teria consciência, e a
          ascensão das influenciadoras virtuais.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          A tarefa proposta ao final do deck é direta: <strong>escrever sobre o impacto das IA na vida
          humana</strong>. Três dos quatro seminários da AV2 acabaram tratando de IA ou de algoritmos — o tema
          claramente pegou.
        </p>
      </Subsection>
    </section>
  );
}
