import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  ComparisonTable,
} from '../../../components/sections';

export default function TcpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Protocolo TCP"
        subtitle="Orientado a conexão, confiável e orientado a fluxo de BYTES"
        colorClass="text-accent2"
        badge="Av2"
      />

      <Subsection title="As características que o definem" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Orientado para conexão',
              description:
                'Antes de qualquer dado, as duas pontas trocam um handshake e combinam parâmetros. A "conexão" existe apenas como estado nos sistemas finais — a rede não sabe dela.',
              accent: 'accent',
            },
            {
              title: 'Confiável e ordenado',
              description:
                'A aplicação recebe exatamente o que foi enviado, na ordem certa, sem lacunas nem duplicatas.',
              accent: 'accent2',
            },
            {
              title: 'Fluxo de BYTES',
              description:
                'O TCP não preserva fronteiras de mensagem. Dois envios da aplicação podem chegar juntos ou partidos — é a aplicação que precisa delimitar suas mensagens.',
              accent: 'accent3',
            },
            {
              title: 'Full-duplex e ponto a ponto',
              description:
                'Dados fluem nos dois sentidos simultaneamente na mesma conexão, sempre entre exatamente dois processos — não existe multicast em TCP.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O handshake de três vias" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'Cliente → SYN, com seu número de sequência inicial',
            'Servidor → SYN-ACK, confirmando e enviando o seu próprio número inicial',
            'Cliente → ACK, confirmando o do servidor — a partir daqui os dados fluem',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Três vias, e não duas, porque <strong>ambos os lados</strong> precisam anunciar seu número de sequência
          inicial e ter certeza de que o outro o recebeu. O encerramento usa FIN e ACK de cada lado,
          independentemente para cada sentido.
        </p>
      </Subsection>

      <Subsection title="O cabeçalho — 20 bytes no mínimo" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Portas de origem e destino',
              description: 'Junto com os IPs, formam a quádrupla que identifica a conexão.',
            },
            {
              title: 'Número de sequência',
              description:
                'Conta BYTES do fluxo, não segmentos — característica definidora do TCP.',
            },
            {
              title: 'Número de reconhecimento',
              description: 'O próximo byte que este lado espera receber — implicitamente confirma tudo que veio antes.',
            },
            {
              title: 'Janela de recepção',
              description: 'Quantos bytes este lado ainda consegue aceitar. É o mecanismo do controle de fluxo.',
            },
            {
              title: 'Checksum',
              description: 'Detecção de erros sobre cabeçalho e dados.',
            },
            {
              title: 'Bits de flag',
              description: 'SYN e FIN para abrir e fechar, ACK para confirmar, RST para abortar, PSH e URG para tratamento especial.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="ACK cumulativo e retransmissão" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'ACK cumulativo',
              description:
                'Reconhecer o byte N significa que TUDO até N-1 chegou. Um ACK posterior cobre os anteriores — o protocolo tolera perder ACKs isolados.',
              accent: 'accent',
            },
            {
              title: 'Temporizador adaptativo',
              description:
                'O prazo de retransmissão é estimado dinamicamente a partir da média móvel do RTT e do seu desvio. Um valor fixo seria ruim: redes variam demais.',
              accent: 'accent3',
            },
            {
              title: 'Retransmissão rápida',
              description:
                'Ao receber TRÊS ACKs duplicados, o remetente retransmite o segmento suspeito sem esperar o temporizador estourar.',
              accent: 'accent4',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A lógica dos três ACKs duplicados: se segmentos posteriores continuam chegando, a rede está funcionando
          — apenas <em>um</em> segmento se perdeu. Não há razão para esperar o temporizador inteiro.
        </p>
      </Subsection>

      <HighlightBox title="Controle de FLUXO — não confundir" accent="var(--color-accent5)">
        <ComparisonTable
          leftLabel="Controle de FLUXO"
          rightLabel="Controle de CONGESTIONAMENTO"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Protege quem', left: 'O RECEPTOR, de ser afogado por dados que não consegue processar', right: 'A REDE, de ser saturada por remetentes demais' },
            { criterion: 'Mecanismo', left: 'Janela de recepção, anunciada explicitamente no cabeçalho', right: 'Janela de congestionamento, inferida pela perda de pacotes' },
            { criterion: 'Quem informa', left: 'O próprio receptor diz quanto aceita', right: 'Ninguém informa — o remetente deduz observando perdas' },
          ]}
        />
        <p>
          Um receptor lento numa rede vazia, ou um receptor rápido numa rede congestionada, mostram que os dois
          problemas são <strong>independentes</strong> — e por isso exigem mecanismos separados.
        </p>
      </HighlightBox>
    </section>
  );
}
