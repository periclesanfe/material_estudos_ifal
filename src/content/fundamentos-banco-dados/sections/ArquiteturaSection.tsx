import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function ArquiteturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arquitetura e Modelos de Dados"
        subtitle="Esquema × instância, os três níveis ANSI-SPARC e a classificação dos SGBDs — até NoSQL"
        colorClass="text-accent"
      />

      <TheoryBlock title="Modelos de dados e a dupla esquema/instância">
        <p>
          <strong>Modelo de dados</strong> é uma representação — normalmente gráfica — que abstrai estruturas reais
          mais complexas. Elmasri os divide em <strong>conceituais</strong> (alto nível, próximos do usuário),{' '}
          <strong>representativos/de implementação</strong> (os usados pelos SGBDs comerciais, como o relacional) e{' '}
          <strong>físicos</strong> (detalhes de armazenamento).
        </p>
        <p>
          <strong>Esquema</strong> é a <em>descrição</em> do banco, definida no projeto e raramente alterada
          (desenhada no diagrama de esquema). <strong>Instância (estado)</strong> é o conteúdo em um dado momento:
          o banco nasce no <em>estado vazio</em>, ganha o <em>estado inicial</em> na carga e evolui a cada
          atualização para novos <em>estados atuais</em> — cabendo ao SGBD garantir que todo estado seja{' '}
          <strong>válido</strong> (satisfaça estrutura e restrições do esquema).
        </p>
      </TheoryBlock>

      <Subsection title="A arquitetura de três esquemas (ANSI-SPARC)" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Nível EXTERNO — as visões de cada grupo de usuários (cada um vê só o que precisa)',
            'Nível CONCEITUAL — a visão global da organização: entidades, relacionamentos e restrições, independente de hardware e software',
            'Nível INTERNO — como o SGBD armazena de fato: estruturas, arquivos e caminhos de acesso',
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Independência LÓGICA',
              description: 'Alterar o esquema CONCEITUAL sem mexer nos esquemas externos nem nas aplicações. É a mais difícil de alcançar.',
              accent: 'accent',
            },
            {
              title: 'Independência FÍSICA',
              description: 'Alterar o esquema INTERNO (organização em disco, índices) sem mexer no conceitual. Existe na maioria dos SGBDs.',
              accent: 'accent2',
            },
          ]}
        />
        <HighlightBox title="Atenção: dois livros, duas nomenclaturas" accent="var(--color-accent4)">
          <p>
            As definições acima são as do <strong>Elmasri</strong> — as canônicas, cobradas classicamente. O Rob
            &amp; Coronel descreve <em>quatro</em> níveis (externo, conceitual, interno e físico) e nomeia as
            independências de forma deslocada (lógica = interno sem afetar conceitual; física = físico sem afetar
            interno). Se a questão citar ANSI-SPARC ou três esquemas, use Elmasri.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As linguagens do SGBD" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'DDL — Data Definition Language', description: 'Define os esquemas (conceitual e, na prática, também o externo). É o CREATE/ALTER/DROP do SQL.' },
            { title: 'SDL — Storage Definition Language', description: 'Define o esquema interno (armazenamento). Nos SGBDs atuais, parâmetros físicos cumprem o papel.' },
            { title: 'VDL — View Definition Language', description: 'Define as visões dos usuários; na maioria dos SGBDs, a própria DDL faz isso (CREATE VIEW).' },
            { title: 'DML — Data Manipulation Language', description: 'Manipula o banco populado. Alto nível/não procedural (SQL: diz O QUE quer) ou baixo nível/procedural (registro a registro).' },
          ]}
        />
      </Subsection>

      <Subsection title="Classificação dos SGBDs" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Critério"
          leftLabel="Opções"
          rightLabel="Exemplos / observações"
          rows={[
            { criterion: 'Modelo de dados', left: 'Relacional (SQL) · objeto · NoSQL · XML nativo · hierárquico legado', right: 'Relacional domina; NoSQL cresce para big data' },
            { criterion: 'NoSQL', left: 'Chave-valor · documento (JSON) · grafo (nós e arestas) · colunar', right: 'Chave-valor: acesso rapidíssimo pela chave; documento: consulta os campos do JSON' },
            { criterion: 'Nº de usuários', left: 'Monousuário · multiusuário', right: 'A maioria dos sistemas reais é multiusuário' },
            { criterion: 'Distribuição', left: 'Centralizado · distribuído (SGBDD)', right: 'Distribuído homogêneo (mesmo software em todos os nós) ou heterogêneo' },
            { criterion: 'Arquitetura', left: 'Centralizada · cliente/servidor 2 camadas · 3 camadas', right: 'Na de 3 camadas, um servidor de aplicação fica entre o cliente e o BD' },
          ]}
        />
      </Subsection>

      <Subsection title="De onde viemos: a evolução dos modelos" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'Sistemas de arquivos (anos 1960) — programação extensiva, sem consultas ad hoc',
            'Hierárquico — árvore pai→filho, só 1:M, sem independência estrutural',
            'Em rede (CODASYL/DBTG) — registro com vários pais; nasceram esquema, subesquema e DML',
            'Relacional (Codd, 1970) — tabelas, tuplas e o SGBDR escondendo a complexidade',
            'ER (Chen, 1976) — o padrão gráfico de modelagem conceitual',
            'Orientado a objetos e relacional estendido — dados complexos',
            'XML e NoSQL — dados semiestruturados e não estruturados da web',
          ]}
        />
      </Subsection>
    </section>
  );
}
