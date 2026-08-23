import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function PanoramaUmlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Panorama dos Diagramas UML"
        subtitle="Os 14 diagramas da UML 2.5, a divisão estrutural × comportamental e os dois usos da linguagem"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que modelar">
        <p>
          Existe uma <strong>lacuna</strong> entre os requisitos (o que o sistema faz, nível alto) e
          o código (como ele faz, nível baixo). Os <strong>modelos de software</strong> preenchem
          essa lacuna: documentam a solução para o problema definido pelos requisitos. A UML foi
          proposta em <strong>1995</strong> para fundir as notações concorrentes e padronizada em
          1997; a versão atual, <strong>2.5</strong>, tem <strong>14 diagramas</strong>.
        </p>
        <p>
          "Por que tantos diagramas?" — porque cada um oferece uma <strong>visão diferente</strong>{' '}
          do sistema. E o material é explícito: <strong>não é obrigatório usar todos</strong>; em
          cada situação ou domínio, escolhem-se os que agregam.
        </p>
      </TheoryBlock>

      <Subsection title="Os 14 diagramas" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Família"
          leftLabel="ESTRUTURAIS (a estrutura do código)"
          rightLabel="COMPORTAMENTAIS (a execução)"
          rows={[
            { criterion: 'Principais', left: 'Classes · Objetos · Componentes', right: 'Caso de uso · Atividades · Máquina de estados' },
            { criterion: 'Demais', left: 'Pacotes · Implantação (deployment) · Estrutura composta · Perfil', right: 'Interação: Sequência · Comunicação · Visão geral de interação · Temporização' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A pergunta que resolve qualquer classificação: <strong>o diagrama mostra ESTRUTURA ou
          COMPORTAMENTO?</strong> O de <strong>objetos</strong> é estrutural — mostra instâncias com
          seus valores num instante, complementando o de classes. Os quatro de{' '}
          <strong>interação</strong> são todos comportamentais.
        </p>
      </Subsection>

      <Subsection title="Quando usar cada um" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Caso de uso', description: 'Visão dos agentes externos: o que o sistema oferece e para quem. O ponto de partida de tudo.' },
            { title: 'Classes', description: 'O mais utilizado; serve de base para os demais. Define a estrutura e os relacionamentos.' },
            { title: 'Objetos', description: 'Exemplifica o modelo de classes com instâncias e valores concretos — ótimo para explicar um cenário confuso.' },
            { title: 'Sequência e comunicação', description: 'Como os objetos colaboram para realizar um caso de uso.' },
            { title: 'Atividades', description: 'Processos de negócio e fluxos com decisões e paralelismo.' },
            { title: 'Máquina de estados', description: 'Objetos cujo comportamento muda conforme o estado (pedido, conta, oferta de disciplina).' },
            { title: 'Componentes', description: 'As partes lógicas substituíveis do sistema, com suas interfaces — no exemplo bancário: interface do caixa, firewall, gerenciador de contas, SGBD.' },
            { title: 'Pacotes e implantação', description: 'A organização em módulos e a distribuição física em servidores — cobrados na arquitetura do projeto da AV2.' },
          ]}
        />
      </Subsection>

      <Subsection title="Os dois usos da UML" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Uso"
          leftLabel="Blueprint (planta detalhada)"
          rightLabel="Sketch (esboço)"
          rows={[
            { criterion: 'Pretensão', left: 'Modelo completo, formal e preciso do sistema', right: 'Uso informal e leve, sem pretensão de completude' },
            { criterion: 'Objetivo', left: 'Servir de especificação rigorosa, às vezes gerando código', right: 'CONVERSAR sobre ou DOCUMENTAR uma parte do código ou do projeto' },
            { criterion: 'Ferramenta típica', left: 'Ferramentas CASE (Enterprise Architect, Papyrus, Visual Paradigm)', right: 'Quadro branco, draw.io, PlantUML' },
            { criterion: 'Hoje', left: 'Menos comum', right: 'O uso MAIS comum' },
          ]}
        />
      </Subsection>

      <HighlightBox title="A frase que resume" accent="var(--color-accent3)">
        <p>
          "Muitas vezes, um diagrama UML vale mais do que 1000 linhas de código." O ponto não é
          desenhar tudo — é desenhar <strong>o que é difícil de enxergar lendo o código</strong>: a
          arquitetura, a colaboração entre objetos distantes, o ciclo de vida de uma entidade
          central.
        </p>
      </HighlightBox>
    </section>
  );
}
