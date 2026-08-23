import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList } from '../../../components/sections';

export default function EtapasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="As Cinco Etapas do Projeto de Redes"
        subtitle="Da análise de requisitos à documentação final"
        colorClass="text-accent3"
        badge="Processo de projeto"
      />

      <Subsection title="A agenda" accentClass="text-accent">
        <FlowDiagram
          items={[
            'Levantamento de requisitos',
            'Elaboração do projeto lógico',
            'Desenvolvimento do projeto físico',
            'Testes de implementação e validação',
            'Documentação técnica',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A ordem é o conteúdo. O <strong>lógico vem antes do físico</strong> porque a topologia e o endereçamento
          determinam que equipamentos comprar — comprar switches antes de definir a arquitetura é o erro que o
          processo existe para evitar. E o caso da metalúrgica mostra o custo disso: o gestor anterior foi
          demitido depois de trocar switches sem diagnóstico.
        </p>
      </Subsection>

      <Subsection title="1. Levantamento de requisitos" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Identificação das necessidades do negócio',
              description:
                'Definir com clareza o que o negócio precisa, compreender os objetivos estratégicos para alinhar a solução às metas, e avaliar expectativas de performance e disponibilidade.',
            },
            {
              title: 'Mapeamento de usuários, aplicações e tráfego',
              description:
                'Quem acessa a rede, quais aplicações usam e qual volume e tipo de tráfego esperar. É o que permite dimensionar em vez de chutar.',
            },
            {
              title: 'Análise de restrições técnicas e orçamentárias',
              description:
                'A infraestrutura existente impõe limites técnicos; o orçamento define escopo e escolhas viáveis. Esta análise é o que alinha expectativas e garante que o projeto saia do papel.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="2. Projeto lógico" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Topologia',
              description:
                'Define a estrutura de interconexão e o caminho dos dados. A escolha afeta escalabilidade, desempenho e facilidade de manutenção.',
            },
            {
              title: 'Protocolos, serviços e endereçamento IP',
              description:
                'Protocolos adequados garantem comunicação eficiente e interoperabilidade; o esquema de IP organizado facilita gestão e roteamento.',
            },
            {
              title: 'Segurança e redundância',
              description:
                'Segurança protege contra ameaças e acessos não autorizados; redundância assegura continuidade em caso de falha. Juntas, elevam a confiabilidade.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="3. Projeto físico" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Escolha de equipamentos',
              description:
                'Switches, roteadores e servidores, mais o planejamento da infraestrutura que os suporta e mantém a performance.',
            },
            {
              title: 'Distribuição de cabeamento e pontos de acesso',
              description:
                'Planejar a instalação para cobertura completa, posicionar APs minimizando interferências e deixar caminho para expansões futuras.',
            },
            {
              title: 'Ambiente e condições operacionais',
              description:
                'Temperatura e umidade controladas protegem os equipamentos; espaço físico suficiente facilita manutenção e previne problemas.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="4. Testes e 5. Documentação" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Testes de conectividade',
              description: 'Garantem a interligação correta entre dispositivos, sem falhas nem interrupções.',
            },
            {
              title: 'Verificação de desempenho e segurança',
              description:
                'Medir velocidade e latência, testar a capacidade para a demanda simultânea prevista e verificar os mecanismos de segurança.',
            },
            {
              title: 'Correção de falhas e ajustes finais',
              description: 'Ajustar com base nos testes ANTES do uso final — é o que separa entrega de improviso.',
            },
            {
              title: 'Registro de requisitos e decisões',
              description:
                'Documentar promove transparência e facilita revisões e auditorias futuras. A decisão de hoje é o mistério de amanhã se não for registrada.',
            },
            {
              title: 'Diagramas e manuais de operação',
              description:
                'Diagramas de arquitetura tornam visível a conexão entre dispositivos; manuais guiam os técnicos nos procedimentos.',
            },
            {
              title: 'Procedimentos de manutenção e atualização',
              description:
                'Mantêm a rede segura e eficiente ao longo do tempo e acompanham as mudanças tecnológicas e do negócio.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A conclusão da aula" accent="var(--color-accent2)">
        <p>
          O deck fecha com três ideias: o projeto exige <strong>planejamento detalhado</strong> para atender às
          necessidades específicas da organização; a <strong>execução cuidadosa</strong> é o que garante
          eficiência e segurança; e seguir as etapas na ordem é o que assegura uma rede que funciona conforme foi
          projetada — em vez de uma que funciona por sorte.
        </p>
      </HighlightBox>
    </section>
  );
}
