import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function TunisSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Segurança, Crimes e Direitos"
        subtitle="Os compromissos de Túnis — e a recusa de trocar direitos por segurança"
        colorClass="text-accent5"
        badge="AV2"
      />

      <TheoryBlock title="O que muda de Genebra para Túnis">
        <p>
          Genebra estabeleceu princípios e um plano. Túnis, dois anos depois, enfrenta os problemas que a prática
          trouxe: <strong>segurança, crime, comércio e governo eletrônico</strong>.
        </p>
        <p>
          E enfrenta com uma preocupação constante — que as medidas de segurança não sirvam de pretexto para
          suprimir os direitos que Genebra afirmou.
        </p>
      </TheoryBlock>

      <Subsection title="§39 — cultura global de segurança cibernética" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'O objetivo',
              description:
                'Criar confiança e segurança na utilização das TIC, fortalecendo a estrutura de confiança. Reafirma a necessidade de promover, desenvolver e implementar uma CULTURA GLOBAL DE SEGURANÇA CIBERNÉTICA, conforme a resolução 57/239 da Assembleia Geral da ONU.',
            },
            {
              title: 'Exige duas frentes',
              description:
                'Ação NACIONAL e cooperação INTERNACIONAL — nenhuma das duas basta sozinha, porque a rede não respeita fronteiras.',
            },
            {
              title: 'Segurança e privacidade juntas',
              description:
                'A cultura de segurança deve reforçar a segurança AO PASSO QUE aprimora a proteção da informação, da privacidade e dos dados pessoais. Aparecem como aliadas, não como opostos.',
            },
            {
              title: 'Sem receita única',
              description:
                'O desenvolvimento contínuo dessa cultura deve levar em conta o nível de desenvolvimento social e econômico de cada país e respeitar os aspectos orientados ao desenvolvimento.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="§40 — crimes cibernéticos" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'O problema da jurisdição',
              description:
                'Destaca a importância da persecução aos crimes cibernéticos, INCLUINDO aquele cometido em uma determinada jurisdição que venha a ter efeitos em outra — a transnacionalidade que define o problema.',
              accent: 'accent',
            },
            {
              title: 'A resposta proposta',
              description:
                'Ferramentas e ações eficazes nos âmbitos nacional e internacional, promovendo cooperação entre as agências responsáveis pela aplicação de leis contra crimes cibernéticos.',
              accent: 'accent2',
            },
            {
              title: 'O chamado aos governos',
              description:
                'Desenvolver a legislação necessária para a investigação e a repressão a crimes cibernéticos, observando os marcos existentes.',
              accent: 'accent3',
            },
            {
              title: 'Os marcos citados',
              description:
                'As Resoluções 55/63 e 56/121 da ONU sobre "Combate ao uso indevido das tecnologias de informação com fins criminosos", e a Convenção do Conselho Europeu sobre Crime Cibernético.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="§42 — o parágrafo mais importante do bloco" accent="var(--color-accent5)">
        <p>
          O documento reafirma o compromisso com a <strong>liberdade de buscar, receber, transmitir e usar a
          informação</strong>, em particular para a criação, o acúmulo e a difusão do conhecimento.
        </p>
        <p>
          E então faz a afirmação decisiva: as medidas tomadas para garantir a estabilidade e a segurança da
          Internet e para combater crimes cibernéticos e spam <strong>devem proteger e respeitar</strong> as
          disposições relativas à <strong>privacidade e à liberdade de expressão</strong> contidas na Declaração
          Universal dos Direitos Humanos e na Declaração de Princípios de Genebra.
        </p>
        <p>
          É a recusa explícita do trade-off. Segurança <em>não</em> é licença para suprimir direitos — e é
          justamente por ser um argumento tão comum que o documento precisou dizer isso por escrito.
        </p>
      </HighlightBox>

      <Subsection title="§43, §44, §47 e §48" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: '§43 — usos positivos',
              description:
                'Reitera o compromisso com os usos positivos da Internet e de outras TIC, e com medidas apropriadas e preventivas contra a utilização abusiva, conforme a seção de Dimensões Éticas de Genebra.',
            },
            {
              title: '§44 — terrorismo',
              description:
                'Ressalta a importância de combater o terrorismo em todas as suas formas e modos de manifestação na Internet, RESPEITANDO OS DIREITOS HUMANOS e em conformidade com o direito internacional.',
            },
            {
              title: '§47 — proteção ao consumidor',
              description:
                'Reconhece o aumento do volume e do valor dos negócios eletrônicos, dentro e fora das fronteiras nacionais. Solicita leis e práticas nacionais de PROTEÇÃO AO CONSUMIDOR que compra bens e serviços on-line, e mecanismos para sua aplicação — a confiança do consumidor é tratada como condição da expansão do comércio eletrônico.',
            },
            {
              title: '§48 — governo eletrônico',
              description:
                'Nota com satisfação a crescente utilização das TIC pelos governos para servir aos cidadãos, e incentiva os países que ainda não o fizeram a desenvolver programas e estratégias de governo eletrônico.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Por que isso importa para quem trabalha com sistemas" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed">
          Os quatro parágrafos desenham o campo de trabalho de boa parte dos egressos: sistemas de governo
          eletrônico, plataformas de comércio eletrônico, sistemas de segurança da informação. Em cada um deles,
          decisões técnicas concretas — que dados coletar, o que registrar em log, o que exigir do usuário —
          realizam ou contrariam esses compromissos.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          O §42 é o que dá o critério: quando a solução mais segura é também a mais invasiva, a resposta não é
          automática. Há um direito do outro lado da balança que o documento se recusou a dispensar.
        </p>
      </Subsection>
    </section>
  );
}
