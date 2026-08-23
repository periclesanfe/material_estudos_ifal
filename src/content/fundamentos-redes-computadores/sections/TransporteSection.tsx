import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  PanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function TransporteSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Multiplexação e UDP"
        subtitle="Da entrega entre máquinas à entrega entre processos"
        colorClass="text-accent4"
        badge="Av2"
      />

      <TheoryBlock title="O que a camada de transporte acrescenta">
        <p>
          O IP entrega datagramas de um <strong>hospedeiro</strong> a outro. Mas numa máquina rodam dezenas de
          processos ao mesmo tempo — navegador, cliente de e-mail, atualizador do sistema.
        </p>
        <p>
          A camada de transporte estende a entrega hospedeiro a hospedeiro para{' '}
          <strong>entrega processo a processo</strong>. É essa a sua função essencial, e tudo mais que TCP e UDP
          fazem é acréscimo sobre ela.
        </p>
      </TheoryBlock>

      <Subsection title="Multiplexação e demultiplexação" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'MULTIPLEXAÇÃO — na origem',
              description:
                'Reunir dados provenientes de vários sockets, encapsular cada porção com o cabeçalho apropriado e passar os segmentos à camada de rede.',
              accent: 'accent',
            },
            {
              title: 'DEMULTIPLEXAÇÃO — no destino',
              description:
                'Examinar cada segmento que chega e entregá-lo ao socket correto, entre todos os abertos naquele hospedeiro.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Como cada protocolo demultiplexa" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="UDP — pelo PAR"
          rightLabel="TCP — pela QUÁDRUPLA"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Campos usados',
              left: 'IP de destino e porta de destino',
              right: 'IP e porta de ORIGEM mais IP e porta de DESTINO',
            },
            {
              criterion: 'Dois remetentes distintos, mesmo destino',
              left: 'Caem no MESMO socket',
              right: 'Vão para sockets DIFERENTES',
            },
            {
              criterion: 'Consequência',
              left: 'A aplicação precisa distinguir os remetentes por conta própria',
              right: 'Um servidor mantém uma conexão separada para cada cliente, todas na porta 80',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          É por isso que milhares de pessoas acessam o mesmo servidor web na porta 80 sem que suas requisições se
          misturem: a quádrupla torna cada conexão única.
        </p>
      </Subsection>

      <Subsection title="UDP — o mínimo possível" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed mb-4">
          O UDP faz pouco além de multiplexação/demultiplexação e uma verificação simples de erros. Não é
          orientado para conexão: não há handshake prévio, nem controle de congestionamento, nem garantia de
          entrega ou de ordem. Escolher UDP é quase falar diretamente com o IP.
        </p>
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Porta de origem', description: 'Identifica o processo remetente (opcional em algumas situações).' },
            { title: 'Porta de destino', description: 'O campo essencial da demultiplexação.' },
            { title: 'Comprimento', description: 'Tamanho do segmento, cabeçalho mais dados.' },
            { title: 'Checksum', description: 'Detecta erros de bit ocorridos na transmissão.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Quatro campos, <strong>8 bytes de cabeçalho</strong> — contra os 20 bytes mínimos do TCP.
        </p>
      </Subsection>

      <HighlightBox title="Quando o UDP é a escolha certa" accent="var(--color-accent4)">
        <p>
          Quando o <strong>atraso de estabelecer conexão é inaceitável</strong> (uma consulta DNS não vale três
          vias de handshake), quando a aplicação quer <strong>controle fino</strong> sobre o que envia e quando,
          e quando <strong>perder um pacote ocasional é melhor que atrasar</strong>.
        </p>
        <p>
          Numa chamada de voz, retransmitir um trecho perdido entregaria áudio velho e inútil — melhor seguir
          adiante com uma falha imperceptível. Daí o UDP em DNS, voz e vídeo em tempo real e jogos: a aplicação
          decide o que fazer com a perda, em vez de o transporte decidir por ela.
        </p>
      </HighlightBox>
    </section>
  );
}
