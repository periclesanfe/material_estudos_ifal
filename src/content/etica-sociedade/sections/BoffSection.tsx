import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function BoffSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Como Nasce a Ética"
        subtitle="Leonardo Boff e a tese de que a ética nasce do encontro"
        colorClass="text-accent4"
        badge="AV1"
      />

      <TheoryBlock title="Uma tese relacional">
        <p>
          O texto de Boff propõe algo diferente das duas respostas mais comuns. A ética não nasce{' '}
          <em>de dentro</em> — não é intuição ou consciência individual —, nem <em>de cima</em> — não é norma
          imposta. Ela nasce <strong>entre</strong>: do encontro com o outro.
        </p>
      </TheoryBlock>

      <Subsection title="As formulações do texto" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: '"A ética surge quando o outro emerge diante de nós."',
              description:
                'É o ponto de partida. Sozinho no mundo, não há questão ética a resolver — a questão aparece com a presença de alguém que pode ser afetado pelo que faço.',
            },
            {
              title: '"Diante do outro ninguém pode ficar indiferente."',
              description:
                'A indiferença não é neutralidade: é já uma resposta. Ignorar o outro é uma posição, e uma posição que produz consequências.',
            },
            {
              title: '"A ética surge a partir do modo como se estabelece a relação com os diferentes tipos de outro."',
              description:
                'Não há um único outro. Há o próximo, o distante, o desconhecido, o que virá depois de nós — e o modo de me relacionar com cada um define minha ética.',
            },
            {
              title: '"Sem passar pelo outro, toda ética é antiética."',
              description:
                'A formulação mais forte do texto. Uma ética construída só a partir dos próprios interesses contradiz sua própria origem — por mais coerente que pareça por dentro.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Como alguém se faz um ser ético" accentClass="text-accent3">
        <ExampleBox title="A citação completa">
          <p>
            <em>
              "Ao assumir minha responsabilidade ou demitir-me dela, me faço um ser ético. Dou-me conta da
              consequência dos meus atos. Eles podem ser bons ou ruins para o outro e para mim."
            </em>
          </p>
          <p>
            Repare no que o texto inclui deliberadamente: <strong>"ou demitir-me dela"</strong>. Nos dois casos a
            pessoa se define eticamente. A omissão não é ausência de escolha — é uma escolha com consequências,
            e por isso também constitui o sujeito.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Quem é o outro, para quem faz sistemas?" accent="var(--color-accent4)">
        <p>
          O texto deixa a pergunta em aberto — <em>"quem é o outro?"</em> — e é aí que a disciplina a conecta com
          a área.
        </p>
        <p>
          Para quem projeta sistemas, o outro é o <strong>usuário que nunca se encontra</strong>: a pessoa do
          outro lado da tela, representada no projeto por uma linha numa tabela, um registro, uma métrica de
          engajamento. É um outro fácil de esquecer, precisamente porque a mediação técnica o torna abstrato.
        </p>
        <p>
          Boff oferece o critério que atravessa o resto da disciplina: qualquer decisão de projeto que não passe
          por essa pessoa — que otimize métricas sem perguntar o que acontece com ela — já contradiz a ideia de
          ética que a fundamenta.
        </p>
      </HighlightBox>

      <Subsection title="A atividade da turma" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed">
          A primeira atividade de fixação da AV1 partiu de outra leitura na mesma direção: a entrevista de{' '}
          <strong>Luciano Floridi</strong> sobre <em>ética digital on e offline</em>, publicada pelo IHU/Unisinos.
          A tarefa era enviar um comentário-síntese do que cada estudante considerou importante — exercício de
          leitura e posicionamento, não de reprodução.
        </p>
      </Subsection>
    </section>
  );
}
