import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function PersistenciaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Banco de Dados e CRUD"
        subtitle="SQLite por decisão didática — e o CRUD completo sobre ele"
        colorClass="text-accent2"
        badge="Backend"
      />

      <TheoryBlock title="A escolha do banco">
        <p>
          O guia é explícito sobre o critério: <em>"para fins didáticos, escolhemos um BD mais simples
          que não precisa de instalação em servidor externo"</em>. A escolha recai sobre{' '}
          <strong>SQLite com better-sqlite3</strong> — <em>"arquivo único, zero servidor externo,
          perfeito pra curso"</em>.
        </p>
        <p>
          A decisão elimina um atrito real: instalar e configurar um SGBD antes de escrever a primeira
          linha de código é onde muita gente desiste.
        </p>
      </TheoryBlock>

      <Subsection title="O módulo de conexão" accentClass="text-accent">
        <CodeBlock
          language="javascript"
          code={`// db.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

const dbPath = path.join(dbDir, 'contatos.db');
const db = new Database(dbPath);

// Criação da tabela (roda uma vez e garante estrutura)
db.prepare(\`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    idade INTEGER,
    genero TEXT,
    interesses TEXT,
    mensagem TEXT NOT NULL,
    aceite INTEGER NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )
\`).run();

module.exports = db;`}
        />
      </Subsection>

      <HighlightBox title="Por que CREATE TABLE IF NOT EXISTS" accent="var(--color-accent4)">
        <p>
          O comentário do próprio guia resume: <em>"quando o app sobe, se não existir
          data/contatos.db, ele cria e garante a tabela"</em>.
        </p>
        <p>
          A operação é <strong>idempotente</strong>: rodar uma vez cria; rodar de novo não faz nada e
          não quebra. A consequência prática é que <strong>quem clona o repositório roda e
          funciona</strong>, sem passo manual de migração — o que num contexto de curso vale muito.
        </p>
      </HighlightBox>

      <Subsection title="A tabela do exemplo" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'id INTEGER PRIMARY KEY AUTOINCREMENT',
              description: 'Chave primária gerada pelo banco — não é responsabilidade da aplicação.',
              accent: 'accent',
            },
            {
              title: 'NOT NULL em nome, email, mensagem e aceite',
              description:
                'A obrigatoriedade também é declarada no banco, e não só validada na aplicação — defesa em profundidade.',
              accent: 'accent2',
            },
            {
              title: 'criado_em DATETIME DEFAULT CURRENT_TIMESTAMP',
              description: 'O banco carimba a data automaticamente na inserção, sem a aplicação precisar informar.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As operações do CRUD" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'CREATE — inserir',
              description:
                'db.prepare com INSERT INTO, seguido de .run() com os valores. O prepare compila a consulta uma vez e a reutiliza.',
            },
            {
              title: 'READ — listar e buscar',
              description:
                '.all() devolve todas as linhas; .get() devolve uma só. É a diferença entre a listagem e a busca por id.',
            },
            {
              title: 'UPDATE — editar',
              description:
                'A seção E do guia constrói a edição: carregar o registro, exibir o formulário preenchido e gravar as alterações.',
            },
            {
              title: 'DELETE — excluir',
              description:
                'A seção D do guia. Se o registro não for encontrado, o comportamento adotado é voltar para a lista.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Consultas preparadas" accentClass="text-accent4">
        <CodeBlock
          language="javascript"
          code={`// Inserção com parâmetros nomeados
const stmt = db.prepare(\`
  INSERT INTO contatos (nome, email, idade, genero, interesses, mensagem, aceite)
  VALUES (@nome, @email, @idade, @genero, @interesses, @mensagem, @aceite)
\`);
stmt.run({ nome, email, idade, genero, interesses, mensagem, aceite });

// Leitura
const contatos = db.prepare('SELECT * FROM contatos').all();`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Usar <strong>parâmetros</strong> em vez de concatenar strings na consulta não é preferência de
          estilo: é o que impede <strong>injeção de SQL</strong>. O valor é enviado separado do comando,
          e nunca é interpretado como parte dele.
        </p>
      </Subsection>
    </section>
  );
}
