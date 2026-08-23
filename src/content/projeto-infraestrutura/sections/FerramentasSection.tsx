import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function FerramentasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Ferramentas e Cursos"
        subtitle="O ferramental prático da disciplina"
        colorClass="text-accent2"
        badge="Processo de projeto"
      />

      <Subsection title="Cada ferramenta cobre uma etapa" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Cisco Packet Tracer',
              description:
                'Simulação de redes — montar a topologia, configurar equipamentos e testar o comportamento antes de existir hardware. Tem curso próprio na trilha da turma.',
              accent: 'accent',
            },
            {
              title: 'Google Earth Pro',
              description:
                'Planejamento geográfico: marcar a sede, desenhar polígonos, contar imóveis e medir distâncias com a régua. É a ferramenta central do projeto de micro-ISP.',
              accent: 'accent2',
            },
            {
              title: 'draw.io e Lucidchart',
              description:
                'Diagramas de arquitetura de rede — a entrega da quinta etapa do processo de projeto, a documentação técnica.',
              accent: 'accent3',
            },
            {
              title: 'Revit',
              description:
                'Quantitativo de cabos a partir do projeto arquitetônico. Faz a ponte entre a planta do prédio e a lista de materiais.',
              accent: 'accent4',
            },
            {
              title: 'Certificador Fluke DSX',
              description:
                'Validação física do que foi instalado: mede atenuação, NEXT, PS-NEXT e Return Loss. Muito mais que um testador de continuidade — e o motivo do desafio "diagnosticar sem os R$ 50 mil".',
              accent: 'accent5',
            },
            {
              title: 'Canva',
              description:
                'Identidade visual do provedor na Fase 5 do projeto "Meu Bairro Conectado" — porque um ISP também precisa de marca.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os cursos EAD da Cisco NetAcad" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Conceitos Básicos de Redes',
              description:
                'A Atividade 01 exigia 40% do curso; a VA02 pedia a conclusão dos 100%. Quem não tinha começado podia fazer 60% do zero para garantir a nota.',
            },
            {
              title: 'Exploring Networking with Cisco Packet Tracer',
              description:
                'Curso de 3 horas que substituiu a aula remota de 23/01 — a entrega era o certificado de conclusão.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que os cursos cobrem" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Comunicação e componentes',
              description:
                'Conceitos de comunicação em rede, tipos, componentes e conexões, e as mídias de rede mais comuns.',
            },
            {
              title: 'Sem fio',
              description:
                'Configurar dispositivos móveis para conectividade sem fio e um roteador sem fio integrado com conexão segura à Internet.',
            },
            {
              title: 'Padrões e Ethernet',
              description:
                'A importância dos padrões e protocolos nas comunicações, e como ocorre a comunicação em redes Ethernet.',
            },
            {
              title: 'Endereçamento',
              description:
                'Recursos do endereço IP, uso do IPv4 na comunicação e na segmentação de rede, recursos do IPv6 e configuração de servidor DHCP.',
            },
            {
              title: 'Roteamento e ARP',
              description:
                'Como os roteadores conectam as redes, como o ARP possibilita a comunicação e como criar uma LAN totalmente conectada.',
            },
            {
              title: 'Serviços e diagnóstico',
              description:
                'Como os clientes acessam serviços de Internet, a função dos serviços da camada de aplicação e o uso de ferramentas para testar e resolver problemas de conectividade.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A visita técnica" accent="var(--color-accent3)">
        <p>
          A disciplina incluiu uma visita a uma distribuidora de equipamentos de segurança e tecnologia em Maceió.
          É o complemento natural de um curso que insiste em Lista de Materiais e orçamento: ver o equipamento
          fisicamente, com preço e disponibilidade reais, muda a forma de especificar um projeto.
        </p>
      </HighlightBox>
    </section>
  );
}
