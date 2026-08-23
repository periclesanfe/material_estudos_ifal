import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function ComplexidadeSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Paradigma da Complexidade"
        subtitle="Edgar Morin e a recusa de pensar o mundo em pedaços"
        colorClass="text-accent2"
        badge="AV1"
      />

      <TheoryBlock title="Por que começar por aqui">
        <p>
          A disciplina não abre pela definição de ética — abre pelo <strong>pensamento complexo</strong>. É uma
          escolha deliberada: antes de perguntar o que é certo fazer, é preciso decidir como se vai pensar o
          problema.
        </p>
        <p>
          E a resposta de Morin é que problemas de sociedades complexas não admitem respostas fragmentadas. Quem
          separa a questão técnica da questão social já respondeu errado antes de começar.
        </p>
      </TheoryBlock>

      <Subsection title="Complexus — o que é tecido junto" accentClass="text-accent">
        <ExampleBox title="A etimologia é a tese">
          <p>
            <strong>Complexo</strong> vem do latim <em>complexus</em>: "o que é tecido junto". Não é sinônimo de{' '}
            <em>complicado</em>.
          </p>
          <p>
            Complicado é aquilo que tem muitas partes, mas que pode ser desmontado e remontado. Complexo é aquilo
            cujos fios estão entrelaçados de tal modo que separá-los destrói o objeto. Daí a síntese que o
            material cita de Petraglia (2022): na complexidade, <strong>"tudo se liga a tudo"</strong>.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="O que o pensamento complexo questiona" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Não questiona a ciência',
              description:
                'Questiona o paradigma da razão e a ciência como ÚNICO modo de interpretar a realidade. A diferença é importante: não é anticiência, é contra o monopólio de um único modo de conhecer.',
              accent: 'accent',
            },
            {
              title: 'Busca religar saberes',
              description:
                'Procura religar os conhecimentos dispersos e integrar cultura científica e cultura humanística — que a especialização moderna separou.',
              accent: 'accent2',
            },
            {
              title: 'A justificativa é prática',
              description:
                'Não se pode responder às indagações de um cotidiano multidimensional e imprevisível de maneira fragmentada ou disciplinar. Os problemas precisam de respostas de várias áreas ao mesmo tempo.',
              accent: 'accent3',
            },
            {
              title: 'Surgiu nos anos 60',
              description:
                'A epistemologia da complexidade de Edgar Morin — considerado um humanista planetário — data da década de 1960 e continua sendo lida como pensamento atual.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Uma política de civilização planetária" accent="var(--color-accent5)">
        <p>
          Ao longo de sua obra, Morin convida a estabelecer uma <strong>política de civilização planetária</strong>,
          tendo a <strong>educação como brecha</strong> para essa construção. Ele propõe uma nova via para o
          futuro da humanidade, que compreende <strong>amor, fraternidade e a regeneração do humanismo</strong>.
        </p>
        <p>
          A formulação que sintetiza sua posição: ele <strong>"nos faz renunciar ao melhor dos mundos, mas não
          desistir de um mundo melhor"</strong>. É uma posição entre o utopismo e o cinismo — abandona-se a
          perfeição como meta, sem abandonar a melhora como possibilidade.
        </p>
        <p>
          E acrescenta um argumento contra o desânimo: cada um pode fazer a sua parte, porque a história mostra
          que muitas mudanças <strong>começaram com iniciativas marginais</strong> que depois tomaram forma.
        </p>
      </HighlightBox>

      <Subsection title="Por que isso importa para quem faz sistemas" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed">
          Um sistema de informação nunca é apenas técnico. Ele organiza trabalho, distribui acesso, torna algumas
          coisas visíveis e outras invisíveis, e produz consequências para pessoas que nunca participaram das
          decisões de projeto.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Pensar esse objeto "de maneira fragmentada ou disciplinar" — só como arquitetura, só como requisito, só
          como desempenho — é precisamente o que o paradigma da complexidade recusa. As seções seguintes
          desdobram essa recusa em critérios concretos.
        </p>
      </Subsection>
    </section>
  );
}
