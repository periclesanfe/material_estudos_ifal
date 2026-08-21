import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function IdentificacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Identificação de Classes e VCP"
        subtitle="Como sair do texto dos requisitos para o diagrama — Abbott, BCE e a Visão de Classes Participantes"
        colorClass="text-accent"
      />

      <TheoryBlock title="O problema que persiste">
        <p>
          Nas palavras do material: "apesar de todas as vantagens que a OO pode trazer, um problema
          fundamental ainda persiste — identificar <strong>corretamente</strong> e{' '}
          <strong>completamente</strong> objetos, atributos e operações". As técnicas a seguir não
          são exclusivas: usam-se várias, em conjunto.
        </p>
      </TheoryBlock>

      <Subsection title="Técnica 1 — Categorias de conceitos" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Varrer o domínio com uma lista de categorias comuns, procurando candidatos em cada uma:
        </p>
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Conceitos concretos', description: 'Edifícios, carros, salas de aula, produtos.' },
            { title: 'Papéis de pessoas', description: 'Professores, alunos, empregados, clientes.' },
            { title: 'Eventos', description: 'Ocorrências em data e hora: reuniões, pedidos, aulas, aterrissagens.' },
            { title: 'Lugares', description: 'Escritórios, filiais, salas, locais de pouso.' },
            { title: 'Organizações', description: 'Departamentos, projetos, campanhas, turmas.' },
            { title: 'Conceitos abstratos', description: 'Princípios ou ideias não tangíveis: reservas, vendas, inscrições.' },
          ]}
        />
      </Subsection>

      <Subsection title="Técnica 2 — Análise Textual de Abbott (ATA)" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="No texto"
          leftLabel="O que destacar"
          rightLabel="O que sugere"
          rows={[
            { criterion: 'Substantivos e adjetivos', left: 'Destacar todos, depois remover sinônimos', right: 'Classe candidata · atributo · ou nada (irrelevante para o sistema)' },
            { criterion: 'Verbos de AÇÃO', left: 'calcular, confirmar, cancelar, comprar, depositar, sacar', right: 'OPERAÇÕES em potencial' },
            { criterion: 'Verbos com sentido de "TER"', left: 'o pedido TEM itens; a turma POSSUI alunos', right: 'AGREGAÇÃO ou COMPOSIÇÃO' },
            { criterion: 'Verbos com sentido de "SER"', left: 'o gerente É UM funcionário', right: 'GENERALIZAÇÃO (herança)' },
            { criterion: 'Demais verbos', left: 'o cliente faz o pedido; o professor ministra a disciplina', right: 'ASSOCIAÇÕES' },
          ]}
        />
        <HighlightBox title="As limitações da ATA" accent="var(--color-accent4)">
          <p>
            É simples de aplicar, mas o resultado <strong>depende da qualidade do documento</strong>:
            dependendo do estilo do texto, a técnica gera muitas candidatas que não viram classe, ou
            deixa de revelar uma classe importante que o autor não escreveu explicitamente. As
            variações linguísticas — muitas formas de dizer a mesma coisa — são o maior ruído.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Técnica 3 — Análise de casos de uso (a do UP)" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed">
          Também chamada de <strong>identificação dirigida por casos de uso</strong>, é um caso
          particular da ATA e a técnica preconizada pelo Processo Unificado. A premissa: a realização
          de um caso de uso é <strong>responsabilidade de um conjunto de objetos que colaboram</strong>.
          Analisa-se o texto de cada caso de uso — fluxo principal, alternativos, de exceção, pré e
          pós-condições — identificando as classes necessárias para produzir aquele comportamento.
          Quando <strong>todos</strong> os casos de uso tiverem sido analisados, a grande maioria das
          classes terá aparecido.
        </p>
      </Subsection>

      <Subsection title="A categorização BCE" accentClass="text-accent4">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Proposta por <strong>Ivar Jacobson (1992)</strong>, agrupa os objetos pelo{' '}
          <strong>tipo de responsabilidade</strong>, com os estereótipos{' '}
          <code>&lt;&lt;boundary&gt;&gt;</code>, <code>&lt;&lt;control&gt;&gt;</code> e{' '}
          <code>&lt;&lt;entity&gt;&gt;</code>. Tem correspondência — mas{' '}
          <strong>não equivalência</strong> — com o MVC, e é a ligação entre a análise (o quê) e o
          projeto (como).
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'ENTIDADE',
              description: 'Repositório das informações e das REGRAS DE NEGÓCIO; representa conceitos do domínio. Normalmente PERSISTENTE, com várias instâncias, participando de vários casos de uso e com ciclo de vida LONGO — um Pedido pode existir por anos.',
              accent: 'accent',
            },
            {
              title: 'FRONTEIRA',
              description: 'Comunica o sistema com os atores: traduz eventos do ator em eventos de sistema e apresenta os resultados. Altamente dependente do ambiente. Dois tipos: com atores humanos (telas, relatórios, páginas) e com não humanos (protocolos).',
              accent: 'accent2',
            },
            {
              title: 'CONTROLE',
              description: 'A ponte entre fronteira e entidade. Controla a lógica de execução DE UM CASO DE USO, decidindo o que fazer quando ocorre um evento de sistema — age como gerente dos demais objetos.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Por que importa:</strong> se cada objeto é especialista em um dos três tipos de
          tarefa, as mudanças ficam <strong>localizadas</strong>. Trocar a tela não mexe na regra de
          negócio; mudar a regra não mexe na tela.
        </p>
      </Subsection>

      <Subsection title="A Visão de Classes Participantes (VCP)" accentClass="text-accent2">
        <ExampleBox title="Uma VCP por caso de uso — recomendação do UP">
          <p>
            A VCP (<em>View Of Participating Classes</em>) é o diagrama das classes cujos objetos
            participam da realização de <strong>um</strong> caso de uso. A receita de construção:
            adicione uma <strong>fronteira</strong> para cada elemento de interface principal (tela
            ou relatório); uma <strong>fronteira</strong> para cada ator não humano; um ou mais{' '}
            <strong>controladores</strong> para gerenciar a realização; e uma{' '}
            <strong>entidade</strong> para cada conceito do negócio — essas vindas do modelo
            conceitual.
          </p>
          <p>
            No exemplo do material (caso de uso <em>Realizar Inscrição</em>): atores Aluno e
            Professor; fronteiras <code>FormularioInscricao</code> e <code>SistemaFaturamento</code>;
            controle <code>ControladorInscricao</code>; entidades Aluno, Turma, Disciplina, Oferta,
            ListaEspera, Sala, Aula, Participacao e Pre-requisito.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
