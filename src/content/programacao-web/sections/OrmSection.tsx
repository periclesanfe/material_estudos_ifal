import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function OrmSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Impedância e Sequelize"
        subtitle="O problema do SQL manual — e a demonstração final da arquitetura"
        colorClass="text-accent5"
        badge="Arquitetura"
      />

      <TheoryBlock title="O problema do SQL manual">
        <p>
          Escrever SQL à mão <strong>funciona</strong> — foi assim que o CRUD do curso foi construído.
          Mas o guia lista os atritos concretos que aparecem com o tempo:
        </p>
      </TheoryBlock>

      <Subsection title="Os cinco sintomas" accentClass="text-accent">
        <ColoredPanelList
          items={[
            { title: 'SQL espalhado pelo código', description: 'Consultas em vários arquivos, sem lugar único para revisar.' },
            {
              title: 'A sintaxe SQL varia entre bancos',
              description: 'O que funciona no SQLite pode não funcionar no Postgres — e a diferença só aparece na migração.',
            },
            {
              title: 'Conversão manual de tipos',
              description: 'String para array, boolean para integer — o desenvolvedor precisa lembrar de fazer nas duas direções.',
            },
            { title: 'Abertura de conexão e montagem dinâmica de consultas', description: 'Trabalho repetitivo e propenso a erro.' },
            {
              title: 'Testar exige limpar tabelas ou criar DB temporário',
              description: 'O acoplamento ao banco contamina a suíte de testes.',
            },
          ]}
        />
        <HighlightBox title="Isso tem nome" accent="var(--color-accent4)">
          <p>
            O conjunto desses atritos entre o mundo dos <strong>objetos</strong> e o mundo das{' '}
            <strong>tabelas</strong> chama-se <strong>impedância objeto-relacional</strong>.
          </p>
          <p>
            São dois modelos de dados diferentes — objetos têm herança, referências e coleções
            aninhadas; tabelas têm linhas, colunas e chaves — e traduzir entre eles à mão é um trabalho
            constante.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O que um ORM faz" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Mapeia classes ↔ tabelas',
              description: 'A classe Contato corresponde à tabela contatos.',
              accent: 'accent',
            },
            {
              title: 'Mapeia atributos ↔ colunas',
              description: 'O atributo nome (string) corresponde à coluna nome (VARCHAR).',
              accent: 'accent2',
            },
            {
              title: 'Gera SQL automaticamente',
              description: 'findAll() vira SELECT, create() vira INSERT, update() vira UPDATE.',
              accent: 'accent3',
            },
            {
              title: 'Faz conversão de tipos',
              description: 'Array vira string, boolean vira integer no SQLite — nos dois sentidos, sem intervenção.',
              accent: 'accent4',
            },
            {
              title: 'Permite trocar o banco sem reescrever o service',
              description: 'O ORM absorve as diferenças de dialeto SQL entre os SGBDs.',
              accent: 'accent5',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>ORM</strong> significa <em>Object-Relational Mapping</em>. Ele não substitui o banco
          relacional — faz a ponte com ele.
        </p>
      </Subsection>

      <Subsection title="Sequelize: a demonstração da arquitetura" accentClass="text-accent2">
        <ExampleBox title="A troca, camada por camada">
          <p>
            <strong>ANTES</strong> — SQL manual:
          </p>
          <CodeBlock
            language="text"
            code={`ContatoService
  → ContatoRepository (interface)
      → ContatoRepositorySqlite (SQL manual)
          → better-sqlite3`}
          />
          <p>
            <strong>AGORA</strong> — com ORM:
          </p>
          <CodeBlock
            language="text"
            code={`ContatoService
  → ContatoRepository (interface)      ← a MESMA interface
      → ContatoRepositorySequelize (ORM)
          → ContatoModel (Sequelize)
              → Sequelize → SQLite`}
          />
        </ExampleBox>
      </Subsection>

      <HighlightBox title="O ponto-chave do Ports & Adapters" accent="var(--color-accent5)">
        <p>O guia é enfático: <strong>nada muda nas camadas superiores</strong>.</p>
        <p>
          Views (EJS), controllers, services, entidades de domínio e rotas permanecem{' '}
          <strong>exatamente iguais</strong>. Somente a camada de <strong>Infrastructure</strong> muda.
        </p>
        <p>
          <em>"Esse é o ponto-chave do Ports & Adapters (Arquitetura Hexagonal)"</em> — e é a
          demonstração prática de que a promessa feita na seção de arquitetura se cumpre. O service
          continua conversando com a mesma port; quem está do outro lado dela deixou de importar.
        </p>
      </HighlightBox>

      <Subsection title="O modelo Sequelize" accentClass="text-accent4">
        <CodeBlock
          language="javascript"
          code={`const ContatoModel = sequelize.define('Contato', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  genero: DataTypes.STRING,
  interesses: DataTypes.STRING,
});`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Compare com o <code>CREATE TABLE</code> escrito à mão na seção de persistência: a mesma
          estrutura, declarada em JavaScript. O Sequelize gera o SQL correspondente ao dialeto do banco
          configurado — e é essa indireção que permite trocar de SGBD sem reescrever a definição.
        </p>
      </Subsection>
    </section>
  );
}
