import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CargosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cargos e Desenho de Cargos"
        subtitle="Definir o que uma pessoa faz — e, junto com isso, decidir se o trabalho será motivador"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="Cargo, funções e tarefas" accentClass="text-accent2">
        <ExampleBox title="O desdobramento, no exemplo do cargo de Comprador">
          <CodeBlock
            language="python"
            code={`CARGO: Comprador
  │
  ├── FUNÇÃO: Pesquisar e desenvolver fontes de suprimentos
  │     └── TAREFA: Pesquisar preços, condições de pagamento e prazos de entrega
  │
  ├── FUNÇÃO: Coordenar pesquisas de suprimentos
  │     └── TAREFA: Comparar as ofertas de fornecedores
  │
  ├── FUNÇÃO: Programar requisições de compras
  │     └── TAREFA: Decidir sobre a oferta mais favorável
  │
  └── FUNÇÃO: Efetuar as compras requisitadas
        └── TAREFA: Negociar a compra com o fornecedor escolhido`}
          />
          <p className="mt-3">
            A decomposição vai do mais geral ao mais específico: o <strong>cargo</strong> é o conjunto,
            as <strong>funções</strong> são os grandes blocos de responsabilidade e as{' '}
            <strong>tarefas</strong> são as ações concretas. É essa granularidade que permite descrever com
            precisão o que alguém realmente faz — e, mais adiante, avaliar se está fazendo bem.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="As quatro relações estruturais de um cargo" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Nível hierárquico',
              description: 'A posição do cargo no organograma — em que altura da estrutura ele se encontra.',
              accent: 'accent',
            },
            {
              title: 'Subordinação',
              description: 'A quem o cargo se reporta: seu superior hierárquico.',
              accent: 'accent2',
            },
            {
              title: 'Supervisão',
              description: 'Quem se reporta ao cargo: seus subordinados diretos.',
              accent: 'accent3',
            },
            {
              title: 'Relações laterais',
              description:
                'As interfaces horizontais com outros cargos. É a dimensão mais esquecida nas descrições — e a que mais determina o dia a dia de quem trabalha em projetos.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que é desenho de cargos" accentClass="text-accent4">
        <TheoryBlock title="As definições do material">
          <p>
            <strong>Desenho de cargos é o processo de organizar o trabalho por tarefas que são necessárias para
            desempenhar um cargo específico.</strong>
          </p>
          <p>
            E, na formulação mais completa: o desenho de cargos envolve o <strong>conteúdo do cargo</strong>, as{' '}
            <strong>qualificações do ocupante</strong> e as <strong>recompensas</strong>, no sentido de atender
            às necessidades dos empregados <em>e</em> da organização.
          </p>
          <p>
            É também descrito como a informação utilizada para estruturar e modificar os elementos, deveres e
            tarefas de determinados cargos, e como a organização das tarefas e atividades de um cargo, das
            qualificações necessárias ao ocupante e de sua posição na organização do trabalho como um todo.
          </p>
        </TheoryBlock>
        <HighlightBox title="Duas coisas que essas definições revelam" accent="var(--color-accent4)">
          <p>
            A primeira é a inclusão das <strong>recompensas</strong>. Desenhar um cargo não é apenas listar o que
            a pessoa faz — é também definir o que ela recebe em troca, atendendo aos dois lados da relação.
          </p>
          <p>
            A segunda é mais sutil, e conecta esta seção à teoria de Herzberg:{' '}
            <strong>o conteúdo do cargo é onde moram os fatores motivacionais</strong>. Quem desenha um cargo
            está decidindo quanta responsabilidade ele terá, que variedade de tarefas comportará e que
            possibilidade de progresso oferecerá. Ou seja: está decidindo, antecipadamente, se aquele trabalho
            terá chance de motivar alguém — ou se restará apenas torná-lo tolerável por meio de fatores
            higiênicos.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
