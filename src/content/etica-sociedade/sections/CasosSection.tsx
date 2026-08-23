import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, ExampleBox } from '../../../components/sections';

export default function CasosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Dois Dilemas da AV1"
        subtitle="Atividades em grupo — extraídas do perfil @eticalizando, com adaptação"
        colorClass="text-accent4"
        badge="AV1"
      />

      <Subsection title="Estudo de caso 1 — a denúncia" accentClass="text-accent5">
        <ExampleBox title="O enunciado">
          <p>
            Sua empresa de TI, <strong>pela primeira vez</strong>, está prestando serviço para uma grande
            multinacional. Para realizar o trabalho, foi preciso assinar um{' '}
            <strong>contrato milionário</strong> que obriga a respeitar o código de ética da contratante.
          </p>
          <p>
            Um dos tópicos desse código determina que, ao presenciar qualquer ato ilícito ou indevido, ele deve
            ser reportado ao canal de denúncias da empresa contratante —{' '}
            <strong>não importando se você é funcionário ou terceiro</strong>.
          </p>
          <p>
            Durante uma reunião virtual <strong>gravada por você</strong>, o seu contato nessa empresa faz uma
            série de comentários racistas e homofóbicos, além de confessar que agride moralmente a equipe que
            lidera, alegando que essa postura garante produtividade e agiliza os projetos desenvolvidos em
            co-criação com a sua empresa.
          </p>
          <p>
            <strong>Você faz uma denúncia? Você forneceria a gravação como prova da ilicitude?</strong>
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="O que está em tensão no caso 1" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'A obrigação existe e alcança você',
              description:
                'A cláusula é explícita ao dizer "não importando se você é funcionário ou terceiro". Não há a saída de alegar que o problema é interno da contratante.',
            },
            {
              title: 'O custo comercial é concreto',
              description:
                'É o primeiro contrato com uma grande multinacional, e é milionário. Denunciar o contato pode custar a relação — e é justamente isso que faz do caso um dilema, e não uma questão fácil.',
            },
            {
              title: 'A gravação é uma segunda decisão',
              description:
                'Dá para concluir que se deve denunciar e ainda hesitar sobre entregar a gravação. Entram aí a legitimidade da prova, o modo como ela foi obtida e a exposição das pessoas envolvidas.',
            },
            {
              title: 'Há pessoas sendo agredidas agora',
              description:
                'A equipe liderada pelo contato sofre agressão moral continuada. Boff diria: o outro emergiu diante de você — e a indiferença já é uma resposta.',
            },
            {
              title: 'A justificativa dele envolve o projeto',
              description:
                'Ele alega que a postura serve para agilizar projetos desenvolvidos EM CO-CRIAÇÃO com a sua empresa. A violência é apresentada como método a serviço do trabalho de ambos.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Estudo de caso 2 — o aplicativo manipulador" accentClass="text-accent3">
        <ExampleBox title="O enunciado">
          <p>
            Você trabalha em uma startup de tecnologia e o seu novo desafio é desenvolver um aplicativo que gere
            alto engajamento <strong>a partir da manipulação do comportamento dos usuários</strong>.
          </p>
          <p>
            <strong>Você toparia o desafio?</strong> (Justifique sua resposta — <em>não vale Sim ou Não</em>.)
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare que o enunciado nomeia a manipulação <strong>abertamente</strong>, sem eufemismo. Não há zona
          cinzenta a descobrir nem intenção a interpretar: a questão é o que você faz sabendo exatamente o que
          está sendo pedido.
        </p>
      </Subsection>

      <Subsection title="O que está em tensão no caso 2" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Engajamento não é o problema',
              description:
                'Projetar algo que as pessoas queiram usar é legítimo. O enunciado especifica o MEIO — manipulação do comportamento —, e é o meio que está em questão.',
              accent: 'accent',
            },
            {
              title: 'O álibi do executor',
              description:
                '"Eu só implemento a especificação." O caso testa exatamente essa saída: quem constrói a ferramenta compartilha a responsabilidade pelo que ela faz?',
              accent: 'accent3',
            },
            {
              title: 'A quem serve o produto',
              description:
                'É a pergunta do artigo de Eduardo Nuvens indicado na disciplina — "ética na tecnologia: a critérios de que(m) e para que(m)?". Um app assim serve à métrica, não ao usuário.',
              accent: 'accent4',
            },
            {
              title: 'O outro, de novo',
              description:
                'O usuário manipulado é o outro de Boff em sua forma mais abstrata: alguém que você nunca verá, cuja atenção e cujo tempo são o produto que está sendo vendido.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que a justificativa é obrigatória" accent="var(--color-accent2)">
        <p>
          O enunciado do segundo caso é explícito: <strong>"não vale Sim ou Não"</strong>. A exigência é
          pedagógica e coerente com toda a disciplina.
        </p>
        <p>
          Em ética, a posição isolada informa pouco — o que pode ser examinado, contestado e revisto é o{' '}
          <strong>raciocínio que a sustenta</strong>. Duas pessoas podem chegar à mesma resposta por caminhos
          muito diferentes, e é o caminho que revela quais valores foram efetivamente considerados.
        </p>
      </HighlightBox>
    </section>
  );
}
