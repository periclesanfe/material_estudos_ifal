import CodeBlock from '../../../components/ui/CodeBlock';
import DatabaseSchema from '../../../components/ui/DatabaseSchema';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function SqlDdlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="SQL — DDL"
        subtitle="As cinco sublinguagens e a definição de estruturas: CREATE, constraints, ALTER e DROP"
        colorClass="text-accent"
      />

      <TheoryBlock title="Um padrão com cinco frentes">
        <p>
          O SQL nasceu na IBM nos anos 1970 (como SEQUEL) e ganhou o primeiro padrão ANSI em <strong>1986</strong>{' '}
          (revisões: SQL92, SQL:1999, 2003, 2008, 2011, 2016). A linguagem se divide em cinco sublinguagens —
          taxonomia que a prova cobra: <strong>DDL</strong> (CREATE, ALTER, DROP — define estruturas),{' '}
          <strong>DML</strong> (INSERT, UPDATE, DELETE — manipula dados), <strong>DQL</strong> (SELECT — consulta),{' '}
          <strong>DTL</strong> (COMMIT, ROLLBACK — transações) e <strong>DCL</strong> (GRANT, REVOKE — permissões).
        </p>
      </TheoryBlock>

      <Subsection title="CREATE TABLE e as restrições" accentClass="text-accent2">
        <CodeBlock
          language="sql"
          title="O exemplo canônico do deck — constraints NOMEADAS, em nível de coluna e de tabela (Oracle)"
          code={`CREATE TABLE tab_departamento (
  num_departamento    NUMBER(10)    CONSTRAINT nn_depto_numdepto NOT NULL,
  nom_departamento    VARCHAR2(100) CONSTRAINT nn_depto_nomdepto NOT NULL,
  qtd_empregados      NUMBER(4),
  num_nss_gerente     NUMBER(10)    CONSTRAINT nn_depto_numnssger NOT NULL,
  dat_inicio_gerencia DATE          CONSTRAINT nn_depto_datiniger NOT NULL,
  -- nível de TABELA (obrigatório para PK composta):
  CONSTRAINT departamento_pk        PRIMARY KEY (num_departamento),
  CONSTRAINT departamento_nssger_un UNIQUE (num_nss_gerente),
  CONSTRAINT depto_empregado_fk     FOREIGN KEY (num_nss_gerente)
      REFERENCES tab_empregado (num_nss)
);`}
        />
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'PRIMARY KEY', description: 'Única e NOT NULL implícito. PK composta só em nível de tabela: PRIMARY KEY (a, b).', accent: 'accent' },
            { title: 'FOREIGN KEY ... REFERENCES', description: 'Integridade referencial. Ações: ON DELETE/ON UPDATE com CASCADE, SET NULL ou SET DEFAULT.', accent: 'accent2' },
            { title: 'UNIQUE', description: 'A "chave alternativa": valores irrepetíveis sem ser a PK.', accent: 'accent3' },
            { title: 'NOT NULL', description: 'Obriga valor. Sem nome, o Oracle batiza a constraint de SYS_Cn — nomeie as suas.', accent: 'accent4' },
            { title: 'CHECK', description: 'Domínio: CHECK (SEMESTRE = 1 OR SEMESTRE = 2); CHECK (CLASSIF >= 0 AND CLASSIF <= 20).', accent: 'accent5' },
            { title: 'DEFAULT', description: "Valor quando omitido: DAT_CADASTRO DEFAULT SYSDATE; COD_ESTADO DEFAULT 'AL'.", accent: 'accent' },
          ]}
        />
      </Subsection>

      <Subsection title="ALTER e DROP: a estrutura evolui" accentClass="text-accent3">
        <CodeBlock
          language="sql"
          title="A atividade da turma, passo a passo (sintaxe MySQL)"
          code={`-- promover PK depois da criação:
ALTER TABLE PROFESSOR ADD PRIMARY KEY (numeroreg);

-- NOT NULL a posteriori entra por MODIFY (é modificação da coluna):
ALTER TABLE DISCIPLINA MODIFY ementa CHAR(30) NOT NULL;

-- tabela associativa: PK composta que TAMBÉM é FK (o N:N na prática)
CREATE TABLE ESCOLHE (
  codoferta INT,
  matricula INT,
  PRIMARY KEY (codoferta, matricula),
  FOREIGN KEY (codoferta) REFERENCES OFERTA (codoferta),
  FOREIGN KEY (matricula) REFERENCES ALUNO (matricula)
);

-- FKs por ALTER, coluna removida e recriada:
ALTER TABLE OFERTA ADD FOREIGN KEY (numeroreg)    REFERENCES PROFESSOR (numeroreg);
ALTER TABLE OFERTA ADD FOREIGN KEY (codisciplina) REFERENCES DISCIPLINA (codisciplina);
ALTER TABLE OFERTA DROP COLUMN turno;
ALTER TABLE OFERTA ADD turno CHAR(1);`}
        />
        <DatabaseSchema
          title="O resultado da atividade — o esquema acadêmico depois de todos os ALTER"
          defaultView="relacional"
          views={['er', 'relacional']}
          caption="Os comandos acima constroem este esquema, mas em pedaços: aqui ele aparece montado. ESCOLHE é a associativa que resolve o N:N entre ALUNO e OFERTA, e OFERTA guarda as duas FKs promovidas por ALTER. Alterne para o ER e a mesma associativa reaparece como losango — é o passo 6 da transformação, lido de trás para frente."
          ddl={`CREATE TABLE PROFESSOR (
  numeroreg     INT          PRIMARY KEY,
  nome          CHAR(40)     NOT NULL
);

CREATE TABLE DISCIPLINA (
  codisciplina  INT          PRIMARY KEY,
  nome          CHAR(40)     NOT NULL,
  ementa        CHAR(30)     NOT NULL         -- NOT NULL entrou por MODIFY
);

CREATE TABLE ALUNO (
  matricula     INT          PRIMARY KEY,
  nome          CHAR(40)     NOT NULL
);

CREATE TABLE OFERTA (
  codoferta     INT          PRIMARY KEY,
  numeroreg     INT,                          -- FK promovida por ALTER
  codisciplina  INT,                          -- FK promovida por ALTER
  turno         CHAR(1),                      -- removida e recriada
  FOREIGN KEY (numeroreg)    REFERENCES PROFESSOR (numeroreg),
  FOREIGN KEY (codisciplina) REFERENCES DISCIPLINA (codisciplina)
);

CREATE TABLE ESCOLHE (                        -- o N:N na prática
  codoferta     INT,
  matricula     INT,
  PRIMARY KEY (codoferta, matricula),
  FOREIGN KEY (codoferta) REFERENCES OFERTA (codoferta),
  FOREIGN KEY (matricula) REFERENCES ALUNO (matricula)
);`}
        />
        <ExampleBox title="A regra que cai em prova">
          <p>
            Constraints <strong>não se modificam</strong> — apenas se <strong>adicionam</strong> (ADD) e{' '}
            <strong>removem</strong> (DROP). A exceção é o NOT NULL, tratado como propriedade da coluna via{' '}
            <code>MODIFY</code>. E <code>DROP TABLE</code> apaga a estrutura inteira (dados inclusos) — diferente
            do <code>DELETE</code>, que remove linhas e é DML.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Tipos de dados e o ambiente da turma" accent="var(--color-accent3)">
        <p>
          Numéricos: <code>INT/INTEGER</code>, <code>SMALLINT</code>, <code>DECIMAL(p,e)</code>,{' '}
          <code>FLOAT</code> (Oracle usa <code>NUMBER</code>); texto: <code>CHAR(n)</code> fixo e{' '}
          <code>VARCHAR(n)</code> variável (Oracle: <code>VARCHAR2</code>); temporais: <code>DATE</code>,{' '}
          <code>TIME</code>, <code>TIMESTAMP</code>. A prática roda no <strong>MySQL via XAMPP/phpMyAdmin</strong> —
          e o gabarito da 2ª prova usa exatamente esse dialeto. Regras de nomes: começar por letra, até 30
          caracteres, sem palavras reservadas.
        </p>
      </HighlightBox>
    </section>
  );
}
