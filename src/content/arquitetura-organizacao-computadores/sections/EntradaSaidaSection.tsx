import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function EntradaSaidaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Barramentos e Entrada/Saída"
        subtitle="Como CPU, memória e periféricos conversam — e como se decide quem fala primeiro"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Barramento e controlador">
        <p>
          Um <strong>barramento</strong> é um caminho elétrico comum entre vários dispositivos. Tanenbaum os
          chama de "cola" que mantém a integridade do sistema: em vez de ligar cada par de componentes com fios
          próprios, todos compartilham as mesmas linhas e se revezam.
        </p>
        <p>
          Cada dispositivo de E/S tem um <strong>controlador</strong>, cuja função é dupla: comandar o
          dispositivo em si e gerenciar seu acesso ao barramento. É ele que traduz "leia este setor" nos sinais
          elétricos que o mecanismo entende.
        </p>
      </TheoryBlock>

      <Subsection title="Síncrono × assíncrono" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Barramento síncrono"
          rightLabel="Barramento assíncrono"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Clock',
              left: 'Tem uma linha comandada por oscilador de cristal',
              right: 'Não tem clock mestre',
            },
            {
              criterion: 'Duração das operações',
              left: 'Toda atividade toma um número INTEIRO de ciclos de barramento',
              right: 'Cada ciclo dura exatamente o tempo requerido pela transação',
            },
            {
              criterion: 'Vantagem',
              left: 'Projeto simples; a temporização é previsível',
              right: 'Adapta-se a dispositivos rápidos e lentos sem desperdício',
            },
            {
              criterion: 'Custo',
              left: 'O ciclo tem de acomodar o dispositivo mais lento; os rápidos esperam',
              right: 'Exige sinais de handshake, tornando o protocolo mais complexo',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Arbitragem: quem vira mestre do barramento" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Se dois dispositivos quiserem controlar o barramento ao mesmo tempo, é preciso um critério de desempate
          — a <strong>arbitragem</strong>. Ela pode ser centralizada, com um árbitro dedicado, ou descentralizada,
          com a decisão emergindo do próprio protocolo.
        </p>
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Árbitro centralizado de um nível',
              description:
                'Usa encadeamento em série (daisy chain): a concessão passa de dispositivo em dispositivo, e o primeiro que a quiser fica com ela. Consequência importante: a prioridade é definida pela POSIÇÃO física na cadeia.',
            },
            {
              title: 'Árbitro com dois níveis',
              description:
                'Introduz linhas de prioridade distintas. Quando há requisições em vários níveis, o árbitro concede apenas ao de prioridade mais alta — e o encadeamento resolve os empates dentro de cada nível.',
            },
            {
              title: 'Arbitragem descentralizada',
              description:
                'Sem árbitro dedicado: no exemplo do material, três linhas bastam para que os próprios dispositivos cheguem a um acordo sobre quem assume o barramento.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="PCI e USB" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'PCI — Peripheral Component Interconnect',
              description:
                'O principal barramento de E/S dos PCs, com árbitro centralizado, sinais obrigatórios e opcionais e transações de 32 bits. O PCI Express (PCIe) é a evolução mais rápida, trocando o barramento compartilhado por enlaces seriais ponto a ponto.',
              accent: 'accent',
            },
            {
              title: 'USB — Universal Serial Bus',
              description:
                'Pensado para periféricos de baixa velocidade — mouses, teclados —, ganhou versões cada vez mais rápidas. O sistema é um hub-raiz ligado ao barramento principal, do qual saem ramificações até os dispositivos.',
              accent: 'accent2',
            },
            {
              title: 'O quadro do USB',
              description:
                'O hub-raiz transmite um novo quadro a cada 1,00 ± 0,05 ms, em quatro tipos: controle, isócrono (para áudio e vídeo, que precisam de taxa constante), volume e interrupção.',
              accent: 'accent3',
            },
            {
              title: 'PIO — Parallel Input/Output',
              description:
                'Interface de E/S paralela, como o Intel 8255A, que pode ser vista pelo sistema como um dispositivo de E/S ou como parte da memória. Aparece no material junto com decodificação de endereço total e parcial.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Dispositivos de entrada e saída" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Monitores e RAM de vídeo',
              description:
                'A tela LCD é atualizada de 60 a 100 vezes por segundo a partir da RAM DE VÍDEO, memória especial que guarda um ou mais mapas de bits. Uma tela de 1.920×1.080 exige um valor por pixel na RAM de vídeo — mais de dois milhões deles.',
              accent: 'accent',
            },
            {
              title: 'Apontadores e sensores',
              description:
                'Mouse, touchpad opaco e touch screen transparente. O Wiimote (2006) somou botões tradicionais a sensores de movimento em três dimensões transmitidos em tempo real por Bluetooth; o Kinect foi além, usando visão computacional para inferir posição, orientação e movimento do corpo.',
              accent: 'accent2',
            },
            {
              title: 'Impressoras',
              description:
                'Laser, jato de tinta (gotículas de cerca de 1 picolitro lançadas por uma cabeça móvel), tinta sólida à base de cera, cera com fita em quatro cores, sublimação de corante com cabeçote térmico que vaporiza tintas CMYK e térmica com agulhas aquecidas.',
              accent: 'accent3',
            },
            {
              title: 'Modems e transmissão',
              description:
                'Combinam modulação de amplitude, frequência e fase, com taxas na faixa de 56 kbps. Quanto ao sentido: SIMPLEX transmite só numa direção, HALF-DUPLEX numa direção por vez e FULL-DUPLEX nas duas simultaneamente. Em sistemas de TV a cabo, centenas de usuários compartilham o mesmo cabo até o headend.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Codificação de caracteres" accentClass="text-accent">
        <HighlightBox title="De ASCII a UTF-8">
          <p>
            A ideia de partida é simples: mapear cada caractere para um número. O <strong>ASCII</strong> fez isso
            com 7 bits — 128 caracteres, cada um em um byte. Bastou para o inglês e para quase nada além dele.
          </p>
          <p>
            O <strong>Unicode</strong> respondeu designando a cada caractere um valor único de 16 bits, chamado{' '}
            <strong>ponto de código</strong>, com apoio de linguagens como Java e de sistemas como o Windows. Mas
            gastar 2 bytes por caractere dobrava o tamanho de todo o texto ocidental já existente e quebrava a
            compatibilidade com o ASCII.
          </p>
          <p>
            O <strong>UTF-8</strong> resolveu com <strong>tamanho variável, de 1 a 4 bytes</strong>: os códigos 0
            a 127 continuam ocupando um único byte e são idênticos ao ASCII, enquanto os comprimentos maiores dão
            conta de cerca de dois bilhões de caracteres. Compatibilidade retroativa mais economia — é por isso
            que ele domina a web.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
