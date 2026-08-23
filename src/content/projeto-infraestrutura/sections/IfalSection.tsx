import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, StatStrip, PanelList, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function IfalSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Rede Convergente do Campus"
        subtitle="Projeto de cabeamento estruturado para o IFAL Maceió — 50 questões"
        colorClass="text-accent5"
        badge="Estudos de caso"
      />

      <TheoryBlock title="O que significa uma rede CONVERGENTE">
        <p>
          O projeto pede uma única infraestrutura que carregue{' '}
          <strong>quatro serviços com exigências diferentes</strong>: dados com backbone de 10 Gbps, telefonia IP,
          câmeras 4K e automação predial.
        </p>
        <p>
          É a convergência que torna o projeto difícil. Voz precisa de baixo jitter; vídeo 4K consome banda
          constante; a automação traz dispositivos IoT com superfície de ataque própria. Colocar tudo na mesma
          rede sem segmentação é garantir que o pico de uso da internet pelos alunos degrade a imagem das câmeras.
        </p>
      </TheoryBlock>

      <Subsection title="Os números do cenário" accentClass="text-accent">
        <StatStrip
          items={[
            { label: '4 pontos', value: 'por sala de aula', accent: 'text-accent' },
            { label: '40 pontos', value: 'por laboratório de informática', accent: 'text-accent2' },
            { label: '10 Gbps', value: 'no backbone interpredial, do CPD central aos blocos distantes', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Somam-se o monitoramento IP em <strong>todos os corredores e áreas externas</strong> e os sensores de
          presença com controle de iluminação via rede em <strong>todos os auditórios</strong>. O backbone liga o
          CPD central (próximo à entrada) aos blocos distantes — Mecânica, Laboratórios de Química, Ginásio.
        </p>
      </Subsection>

      <Subsection title="Os eixos das 50 questões" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Normas e categorias',
              description:
                'Por que Cat6a é obrigatório para automação de iluminação via PoE++ (802.3bt); F/UTP × S/FTP e o NEXT em ambiente com motores; por que não usar cabos CCA (Copper Clad Aluminum) alimentando câmeras PTZ via PoE; limite de ocupação de canaleta segundo a NBR 14565; e a perda máxima de inserção de um canal Cat6 de 90 metros.',
            },
            {
              title: 'Fibra óptica',
              description:
                'Dispersão modal em fibras multimodo e como ela limita a rede; perda máxima aceitável por emenda de fusão segundo as normas internacionais; e a função do ODF (Optical Distribution Frame) no rack central.',
            },
            {
              title: 'Infraestrutura física e dimensionamento',
              description:
                'Aterramento de rack de telecomunicações × rack de servidores (TIA-607); cálculo de unidades de rack para 240 pontos com organizador 1U por patch panel de 24 portas; instalação em área de umidade e calor (refeitório); distância mínima entre cabo Cat6 e cabo de 220V; e taxa de preenchimento de conduítes em curvas de 90 graus (TIA-569).',
            },
            {
              title: 'Wi-Fi e propagação',
              description:
                'Multipercurso no pátio central e como o MIMO do Wi-Fi 6 lida com ele; cálculo da Zona de Fresnel para um enlace de 200 m em 5 GHz e a altura mínima das antenas; e por que canais de 80 MHz em 5 GHz podem ser problemáticos em ambiente denso.',
            },
            {
              title: 'CFTV e QoS',
              description:
                'Largura de banda média de uma câmera 4K a 30 fps com codec H.265; capacidade de comutação (backplane) do switch central para 50 câmeras; VLANs de voz e vídeo contra jitter no horário de pico; e o cálculo de PoE Budget — um switch de 370 W sustenta 24 câmeras de 15,4 W?',
            },
            {
              title: 'Automação, IoT e segurança',
              description:
                'Vantagem do MQTT sobre HTTP para sensores de presença; proteção contra ataques de Mirai Botnet em dispositivos IoT; e por que o Gateway de Automação precisa de redundância física.',
            },
            {
              title: 'Testes e certificação',
              description:
                'Certificador Fluke DSX × testador de continuidade e quais parâmetros cada um mede; PS-NEXT (Power Sum NEXT) e por que importa mais que o NEXT simples em 1000Base-T; etiquetagem segundo a TIA-606-B; Return Loss e o efeito de uma curva acentuada; e por que não destrançar mais de 13 mm no keystone.',
            },
            {
              title: 'Telefonia IP e lógica de rede',
              description:
                'Como o SIP estabelece uma chamada entre blocos; o MOS (Mean Opinion Score) como medida de qualidade; o papel do jitter buffer; topologia estrela estendida; failover com BGP ou Dual-WAN se o link da RNP cair; STP contra loops; LACP e o ganho real de banda; SD-WAN entre campi; VLAN trunking 802.1Q; e CM × CMP (plenum) na propagação de chamas.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A questão que fecha o projeto" accentClass="text-accent4">
        <PanelList
          columns=""
          items={[
            {
              title: 'Questão 50 — descarte ecológico',
              description:
                'Elaborar um plano de descarte ecológico para os cabos Cat5 antigos que serão substituídos, seguindo a legislação vigente. É o lembrete de que um projeto de substituição de infraestrutura gera resíduo eletrônico — e que isso também é responsabilidade do projetista.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Sobre o gabarito" accent="var(--color-accent3)">
        <p>
          O enunciado anuncia um "Gabarito Técnico" ao final, mas <strong>ele não consta no arquivo</strong>
          distribuído. Por isso as 50 questões aparecem aqui como <strong>mapa de estudo</strong> — os temas que a
          disciplina considera exigíveis — e não com respostas atribuídas ao professor.
        </p>
        <p>
          O próprio enunciado explica a dificuldade proposital: as questões foram desenhadas para "que os alunos
          pesquisem a fundo, fugindo de respostas óbvias de IA".
        </p>
      </HighlightBox>
    </section>
  );
}
