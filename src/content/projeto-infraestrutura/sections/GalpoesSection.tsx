import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ConceptGrid } from '../../../components/sections';

export default function GalpoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Três Plantas de 8.400 m²"
        subtitle="Mesma metragem, três problemas completamente diferentes"
        colorClass="text-accent"
        badge="Estudos de caso"
      />

      <p className="text-text-muted leading-relaxed">
        O desafio declarado é integrar <strong>conectividade, segurança física e lógica, e automação</strong> em
        uma área de 8.400 m². Os três layouts têm a mesma área — e é justamente isso que torna o exercício
        interessante: a metragem não determina o projeto, o uso do espaço determina.
      </p>

      <Subsection title="1. Centro de distribuição (logística)" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Layout',
              description:
                '10 corredores verticais de 100 metros cada, com estantes formando barreira física. Sala de TI no canto superior esquerdo (coordenada 0,0).',
            },
            {
              title: 'Pontos de rede',
              description: '10 pontos para câmeras nos cantos, 20 APs no teto e 20 pontos para as docas de carregamento.',
            },
            {
              title: 'O desafio real: ROAMING',
              description:
                'Como levar o sinal até o final do corredor, a 120 metros, sem que o coletor de dados perca a conexão AO TROCAR DE CORREDOR. Não é problema de potência — é de continuidade de sessão entre APs.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="2. Fábrica de manufatura (Indústria 4.0)" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Layout',
              description:
                '4 grandes linhas de produção paralelas no centro, área administrativa nos fundos a 120 metros. Sala de TI no centro da parede lateral direita — posicionada assim justamente para diminuir a distância média dos cabos.',
            },
            {
              title: 'Pontos de rede',
              description: '30 pontos para máquinas (CLPs), 10 APs industriais e 10 pontos para escritórios de supervisão.',
            },
            {
              title: 'O desafio real: EMI',
              description:
                'Os cabos precisam atravessar o teto da fábrica. Como evitar a interferência dos motores das máquinas no sinal dos dados — o problema que a blindagem e a fibra resolvem.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="3. Estúdio de eventos (exposições)" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'Layout',
              description:
                'Um grande vão livre com apenas 4 colunas centrais de sustentação e palco fixo numa das extremidades, a 70 metros. Sala de TI no backstage.',
            },
            {
              title: 'Pontos de rede',
              description:
                '20 APs de alta densidade, 15 pontos de piso para estandes e 15 pontos para a área de transmissão e imprensa.',
            },
            {
              title: 'O desafio real: densidade e flexibilidade',
              description:
                '500 pessoas conectadas simultaneamente em dia de evento — e nenhuma parede interna onde fixar tomadas. Daí as caixas de piso e colunas retráteis: o layout muda toda semana.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Requisitos obrigatórios para os três" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Cabeamento certificável',
              description:
                'Cat6A ou superior, que passe em certificação com Fluke ou similar — a exigência vem da distância combinada com a largura de banda.',
            },
            {
              title: 'Wi-Fi com roaming em 120 metros',
              description: 'O usuário não pode desconectar ao caminhar pelo galpão.',
            },
            {
              title: 'Sala de TI (data center local)',
              description:
                'Climatização com redundância, nobreak que monitore temperatura e umidade, e segurança lógica.',
            },
            {
              title: 'Conectividade redundante',
              description: 'Dois links de internet (primário e backup) e IP público para acesso remoto via VPN.',
            },
            {
              title: 'Passagens de infraestrutura',
              description: 'Definir e justificar: tubos, canaletas ou cabos soltos?',
            },
            {
              title: 'Detalhamento',
              description:
                'A instrução final do enunciado é explícita: desenvolver o projeto com o máximo de detalhe, demonstrando especificações e desenhos.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As questões deixadas em aberto" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Wi-Fi 6 (802.11ax) ou Wi-Fi 7?',
              description:
                'Qual é mais adequado ao ambiente, e como MU-MIMO e OFDMA ajudam na estabilidade com muitos dispositivos móveis simultâneos.',
              accent: 'accent',
            },
            {
              title: '802.3at ou 802.3bt?',
              description:
                'Qual padrão de switch PoE é necessário para alimentar câmeras, Access Points e automação de portas ao mesmo tempo.',
              accent: 'accent2',
            },
            {
              title: 'Por que fazer site survey?',
              description:
                'Por que é impossível garantir sinal "chutando" a posição das antenas, e como a atenuação de metal e concreto muda o projeto.',
              accent: 'accent3',
            },
            {
              title: 'LSZH ou CM/CMR?',
              description:
                'Segurança de incêndio: qual classificação de cabo usar, considerando fumaça e propagação de chama.',
              accent: 'accent4',
            },
            {
              title: 'Backup local ou nuvem?',
              description:
                'Onde armazenar os dados das câmeras e do sistema de automação — e justificar a escolha para o cenário.',
              accent: 'accent5',
            },
            {
              title: 'Automação na mesma rede da administração?',
              description:
                'É seguro? A resposta esperada passa por segmentação em VLANs — e a pergunta pede justificativa, não sim ou não.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A pergunta que amarra tudo" accent="var(--color-accent5)">
        <p>
          <em>"Se um cabo Cat6A passar de 90 metros, o que acontece com a certificação? Como resolver isso no
          galpão de 120 metros de fundo?"</em>
        </p>
        <p>
          Não existe categoria de cobre que resolva — o limite do canal é normativo. As saídas são arquitetônicas:
          reposicionar a sala de TI (como faz a planta da fábrica), criar um ponto de distribuição intermediário
          ou migrar aquele trecho para fibra.
        </p>
      </HighlightBox>
    </section>
  );
}
