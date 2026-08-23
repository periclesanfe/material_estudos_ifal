import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ConceptGrid } from '../../../components/sections';

export default function SeminariosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A AV2 e os Temas da Turma"
        subtitle="O ciclo de seminários — quando os estudantes escolhem o que discutir"
        colorClass="text-accent5"
        badge="AV2"
      />

      <p className="text-text-muted leading-relaxed">
        A segunda avaliação foi um ciclo de seminários em equipes de 4 a 5 pessoas, com temas escolhidos pelos
        próprios estudantes. O que a turma escolheu discutir é, em si, um dado interessante.
      </p>

      <Subsection title="Os quatro temas apresentados" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: '"Uma humanidade artificial"',
              description:
                'Título que sugere a pergunta mais ampla do bloco: o que acontece com o humano quando a máquina passa a ocupar funções que definíamos como nossas.',
            },
            {
              title: '"Algoritmos de decisão e preconceitos sociais"',
              description:
                'O viés algorítmico — sistemas que reproduzem e amplificam discriminações existentes nos dados com que foram treinados. Conecta diretamente com o Art. 6º do Código de Ética da SBC.',
            },
            {
              title: '"Lucros Virtuais ou Perdas Reais? Explorando o Dilema Ético dos Jogos de Azar Online"',
              description:
                'As apostas online, tema que atravessou o debate público brasileiro no período. Envolve design que explora vulnerabilidade, publicidade e endividamento.',
            },
            {
              title: '"A Dualidade Ética da Inteligência Artificial: Impactos Positivos e Negativos na Sociedade Moderna"',
              description:
                'A recusa da resposta simples: a IA não é boa nem má em si, e o trabalho consiste em examinar as duas direções em vez de escolher um lado de antemão.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Vale notar a concentração: <strong>três dos quatro temas</strong> tratam de inteligência artificial ou
          de algoritmos. Diz algo sobre as inquietações de uma turma de Sistemas de Informação em 2024 — e
          confirma a escolha da professora de dedicar um deck inteiro ao estudo de caso de IA.
        </p>
      </Subsection>

      <Subsection title="As regras do jogo" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Equipes', description: 'Grupos de 4 a 5 pessoas, formados pelos próprios estudantes.' },
            {
              title: 'Tempo',
              description: '35 a 40 minutos por equipe; seminários individuais, 10 a 15 minutos.',
            },
            {
              title: 'Envio prévio dos slides',
              description:
                'Até as 15 horas do dia da apresentação, em atividade aberta na sala virtual para esse fim.',
            },
            {
              title: 'Equipamento',
              description:
                'Cada equipe leva o próprio notebook; o data-show é fornecido. A equipe do dia chega dez minutos antes para organizar o espaço.',
            },
            {
              title: 'Entrega prévia da organização',
              description:
                'Houve atividade separada para envio de títulos, sumários e nomes dos componentes das equipes — a organização precedia a apresentação.',
            },
            {
              title: 'Espaço para perguntas',
              description:
                'Nos dias com duas equipes, após as apresentações abria-se o espaço para perguntas e comentários gerais.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O seminário como atividade acadêmica formal" accent="var(--color-accent4)">
        <p>
          As orientações são explícitas: <em>"o seminário é uma atividade acadêmica formal, logo, deve-se
          observar vestuário, adequação da fala, conteúdo, organização, leiaute dos slides, além da capacidade de
          trabalho em equipe"</em>.
        </p>
        <p>
          Não é exigência de formalidade pela formalidade. Apresentar em público é parte do exercício
          profissional — e a disciplina trata a apresentação como conteúdo, não como envoltório do conteúdo.
        </p>
      </HighlightBox>

      <Subsection title="A regra mais interessante" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Também é avaliada a PRESENÇA nas apresentações das outras equipes',
              description:
                'A justificativa dada é direta: "a atividade é parte da nossa jornada do semestre". Não se trata de cada grupo cumprir sua tarefa e ir embora.',
              accent: 'accent5',
            },
            {
              title: 'É coerente com toda a disciplina',
              description:
                'Se a ética nasce quando o outro emerge diante de nós, e se diante do outro ninguém pode ficar indiferente, então ouvir os colegas não é cortesia — é a aplicação mais simples possível da tese que a disciplina passou o semestre desenvolvendo.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
