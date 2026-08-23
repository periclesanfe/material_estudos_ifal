import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ColoredPanelList, StatStrip, PanelList } from '../../../components/sections';

export default function IspSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Meu Bairro Conectado (GPON)"
        subtitle="Projetar um provedor de internet usando a própria casa como NOC"
        colorClass="text-accent4"
        badge="Estudos de caso"
      />

      <p className="text-text-muted leading-relaxed">
        O objetivo declarado: projetar um <strong>ISP fictício baseado em fibra óptica (tecnologia GPON)</strong>,
        utilizando a própria casa do aluno como Centro de Operações de Rede. É o projeto que junta tudo — mídia,
        topologia, dimensionamento, orçamento e até posicionamento de mercado.
      </p>

      <Subsection title="As seis fases" accentClass="text-accent">
        <FlowDiagram
          items={[
            'Estudo: FTTH, equipamentos e topologia óptica',
            'Planejamento no Google Earth Pro',
            'Projeto final: mapa .kmz e Lista de Materiais',
            'Orçamento do investimento inicial',
            'Identidade visual e logo',
            'O diferencial competitivo',
          ]}
        />
      </Subsection>

      <Subsection title="Fase 1 — o vocabulário da rede óptica" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'FTTH — Fiber to the Home',
              description:
                'Fibra até a casa do assinante. O estudo começa pela diferença entre cabos metálicos e fibra — e por que a segunda venceu na última milha.',
              accent: 'accent',
            },
            {
              title: 'OLT — na sede',
              description:
                'O equipamento concentrador do provedor, instalado no NOC. É o ponto de partida de todos os enlaces.',
              accent: 'accent2',
            },
            {
              title: 'DIO — Distribuidor Interno Óptico',
              description: 'Organiza e distribui as fibras dentro da sede, entre a OLT e as saídas para a rua.',
              accent: 'accent3',
            },
            {
              title: 'ONU / ONT — na casa do cliente',
              description:
                'Termina o enlace óptico e converte para elétrico. A ONT, especificamente, já integra roteador Wi-Fi e portas LAN.',
              accent: 'accent4',
            },
            {
              title: 'Splitters — 1:64 ou 1:128',
              description:
                'Divisores de sinal: uma fibra que sai da OLT atende dezenas de clientes. É o que torna o GPON economicamente viável.',
              accent: 'accent5',
            },
            {
              title: 'CTO — Caixa de Terminação Óptica',
              description:
                'As caixinhas pretas nos postes. Cada CTO atende tipicamente 8 ou 16 clientes — número que define quantas caixas o bairro precisa.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Fase 2 — o projeto vira geografia" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Localização da sede',
              description: 'Marcar a própria casa no Google Earth Pro — ela é o NOC do provedor.',
            },
            {
              title: 'Delimitação da área',
              description: 'Desenhar um polígono cobrindo 4 a 5 quarteirões ao redor da sede.',
            },
            {
              title: 'Cálculo de viabilidade',
              description:
                'Contar quantas casas e prédios existem na área escolhida e usar a ferramenta de RÉGUA para medir a distância total de cabos necessários nas ruas.',
            },
            {
              title: 'Posicionamento das CTOs',
              description:
                'Marcar onde ficariam as caixas nos postes. A dica pedagógica do enunciado: com 8 ou 16 clientes por CTO, quantas caixas o seu bairro precisa?',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Fase 3 e 4 — a entrega e o dinheiro" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Mapa do projeto',
              description:
                'Um arquivo .kmz do Google Earth ou um print detalhado com as rotas dos cabos e os pontos de atendimento.',
            },
            {
              title: 'BOM — Bill of Materials',
              description:
                'Metros de fibra (por exemplo, fibra AS-80), quantidade de CTOs e splitters, e o modelo de OLT sugerido para a sede.',
            },
          ]}
        />
        <StatStrip
          items={[
            { label: '64 a 128', value: 'clientes iniciais — o porte de um micro-ISP', accent: 'text-accent4' },
            { label: '4 a 5', value: 'quarteirões cobertos pelo polígono do projeto', accent: 'text-accent2' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A BOM é o que transforma um desenho bonito em projeto orçável — e as quantidades saem diretamente da
          medição com a régua e da contagem de imóveis dentro do polígono.
        </p>
      </Subsection>

      <Subsection title="Fases 5 e 6 — marca e estratégia" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Identidade visual',
              description:
                'A marca deve refletir velocidade e confiança. Sugestões do enunciado: ícones de ondas, luz ou conexões rápidas; azul para confiança e laranja ou roxo para tecnologia e energia. Ferramenta sugerida: Canva.',
            },
            {
              title: 'Como vencer as grandes operadoras',
              description:
                'As grandes têm preço; o pequeno provedor vence no serviço. O aluno deve escrever três diferenciais — os exemplos dados são atendimento humanizado ("o técnico mora na sua rua"), instalação em até 24 horas contra os 7 dias das grandes, e entrega de 100% da velocidade contratada.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que este projeto fecha a disciplina" accent="var(--color-accent2)">
        <p>
          É o único trabalho em que o aluno percorre a cadeia inteira: escolhe a mídia (fibra), define a topologia
          (GPON com splitters), dimensiona pelo território real, monta a lista de materiais, calcula o
          investimento e ainda precisa justificar por que alguém contrataria esse provedor.
        </p>
        <p>
          É a mesma lógica dos outros cenários levada ao limite — só que agora o cliente é o próprio bairro, e o
          projetista é o dono do negócio.
        </p>
      </HighlightBox>
    </section>
  );
}
