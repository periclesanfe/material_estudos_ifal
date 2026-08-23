import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';

export default function EticaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Ética como Construção Social"
        subtitle="Não nascemos prontos — logo, não se nasce ético"
        colorClass="text-accent3"
        badge="AV1"
      />

      <TheoryBlock title="A definição">
        <p>
          A disciplina trabalha com uma formulação precisa: ética é a{' '}
          <strong>ciência que estuda o comportamento moral do homem em sociedade</strong>.
        </p>
        <p>
          Repare no que a definição já exclui: não é sentimento, não é intuição, não é norma estatal. É estudo —
          e estudo de algo que só existe <em>em sociedade</em>.
        </p>
      </TheoryBlock>

      <Subsection title="As cinco características" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'É uma construção social',
              description:
                'Não é dada nem herdada. É produzida coletivamente, ao longo do tempo, por pessoas que precisaram conviver.',
              accent: 'accent',
            },
            {
              title: 'É referente a tempo, espaço, grupo e cultura',
              description:
                'O que uma sociedade considera aceitável muda entre épocas e lugares. Isso não dissolve a ética em relativismo — mas exige explicitar de onde se fala.',
              accent: 'accent2',
            },
            {
              title: 'É fundamental para o desenvolvimento humano',
              description:
                'Não é ornamento nem exigência formal: é condição de uma vida em comum que funcione.',
              accent: 'accent3',
            },
            {
              title: 'Trabalha com dilemas e conflitos',
              description:
                'O objeto da ética não são os casos fáceis. São as situações em que valores legítimos se chocam e alguma coisa vai ser perdida de qualquer jeito.',
              accent: 'accent4',
            },
            {
              title: 'Envolve processos de tomada de decisão',
              description:
                'Ética não é apenas julgar o que os outros fizeram: é decidir, sob incerteza, o que fazer — que é a situação real de quem trabalha.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A afirmação central" accent="var(--color-accent5)">
        <p className="text-center text-lg font-semibold text-accent5 my-2">
          NÃO NASCEMOS PRONTOS. LOGO, NÃO SE NASCE ÉTICO.
        </p>
        <p>
          A ética é uma <strong>construção social</strong> — e a consequência é otimista: se ela é construída, pode
          ser aprendida, discutida e revista. É precisamente o que justifica a existência de uma disciplina como
          esta.
        </p>
        <p>
          A afirmação também desarma um álibi comum: ninguém pode alegar que "é assim que eu sou". Se a conduta é
          construída, ela é responsabilidade de quem a constrói.
        </p>
      </HighlightBox>

      <Subsection title="As palavras-chave" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Vida', description: 'O contexto em que tudo acontece.' },
            { title: 'Reflexão', description: 'O ato de parar e examinar antes de agir.' },
            { title: 'Comportamento humano', description: 'O objeto de estudo da ética.' },
            { title: 'Cultura', description: 'O que dá forma ao que se considera aceitável.' },
            { title: 'Liberdade', description: 'Sem ela não há escolha, e sem escolha não há ética.' },
            { title: 'Escolha', description: 'O momento em que a liberdade se realiza.' },
            { title: 'Decisões', description: 'As escolhas efetivamente tomadas.' },
            { title: 'Consequências', description: 'O que as decisões produzem no mundo e nos outros.' },
            { title: 'Responsabilidade', description: 'Assumir as consequências — o elo com o texto de Boff.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As nove palavras formam uma cadeia: sem <em>liberdade</em> não há <em>escolha</em>; sem escolha não há{' '}
          <em>decisão</em>; toda decisão tem <em>consequências</em>; e assumi-las é <em>responsabilidade</em>.
        </p>
      </Subsection>

      <Subsection title="As inquietações do nosso tempo" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed">
          O material situa a discussão sob dois rótulos: a <strong>"vida líquida moderna"</strong> e a{' '}
          <strong>"sociedade da informação"</strong>. E provoca com trocadilhos sobre a existência digital:{' '}
          <em>"digito, logo penso?"</em>, <em>"publico, logo sou?"</em>, <em>"eu quero é (com)partilhar…"</em>
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          As brincadeiras com o <em>cogito</em> cartesiano têm um ponto sério: se a existência passa a ser
          medida por publicação e compartilhamento, muda o que as pessoas fazem — e muda a responsabilidade de
          quem projeta as plataformas onde isso acontece.
        </p>
      </Subsection>
    </section>
  );
}
