import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function SqlDmlDtlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="SQL — DML e Transações"
        subtitle="INSERT, UPDATE, DELETE — e o ACID que garante que nada fique pela metade"
        colorClass="text-accent"
      />

      <Subsection title="Os três comandos de manipulação" accentClass="text-accent2">
        <CodeBlock
          language="sql"
          title="INSERT, UPDATE e DELETE — com as variações que a prova cobra"
          code={`-- INSERT com lista de colunas (as omitidas ficam NULL ou DEFAULT):
INSERT INTO FUNC (VL_SAL, CD_MAT, NM_FUNC, CD_DEPTO, IN_SEXO, NM_SOBRENOME)
VALUES (1838, 272, 'Laura', 'D21', 'F', 'Pereira');

-- INSERT ... SELECT: copia linhas de outra consulta
INSERT INTO FUNC (CD_MAT, NM_FUNC, NM_SOBRENOME, CD_DEPTO, IN_SEXO)
SELECT CD_MAT + CD_MAT/20, NM_SOBRENOME, NM_FUNC, 'D01', IN_SEXO
FROM FUNC WHERE CD_DEPTO = 'E21';

-- UPDATE com filtro (SEM WHERE altera a tabela INTEIRA — cuidado!):
UPDATE FUNC SET NR_RAMAL = 4176 WHERE CD_MAT IN (272, 274);

-- UPDATE com SUBCONSULTA (questão 3.8 da 2ª prova):
UPDATE FUNC
SET VL_SAL = VL_SAL * 1.2
WHERE CD_DEPTO = (SELECT CD_DEPTO FROM PROJ WHERE NM_PROJ = 'PRODX');

-- DELETE (idem: sem WHERE apaga tudo):
DELETE FROM INSCRICAO WHERE CLASSIF IS NULL;`}
        />
        <ExampleBox title="Quando cada restrição é validada">
          <p>
            PK, UNIQUE, NOT NULL e CHECK são verificadas em <strong>INSERT e UPDATE</strong>. A{' '}
            <strong>FOREIGN KEY é a única validada também no DELETE</strong> — apagar uma linha referenciada viola
            a integridade referencial. Boa pegadinha de prova.
          </p>
        </ExampleBox>
      </Subsection>

      <TheoryBlock title="Transações e ACID">
        <p>
          Uma <strong>transação</strong> é um conjunto de instruções DML tratado como unidade indivisível. O
          exemplo canônico: transferir R$ 50 da conta A para a B (débito + crédito). As quatro propriedades{' '}
          <strong>ACID</strong>: <strong>Atomicidade</strong> — tudo ou nada: se o sistema cai após o débito, o
          débito é desfeito; <strong>Consistência</strong> — o banco vai de estado válido a estado válido;{' '}
          <strong>Isolamento</strong> — transações concorrentes não enxergam estados intermediários umas das
          outras; <strong>Durabilidade</strong> — após o COMMIT, nem falha de energia apaga o efeito.
        </p>
        <p>
          A transação começa na primeira DML e termina com <strong>COMMIT</strong> (confirma),{' '}
          <strong>ROLLBACK</strong> (desfaz tudo), um comando <strong>DDL/DCL</strong> (que causa commit
          implícito!), o fim da sessão ou uma falha.
        </p>
      </TheoryBlock>

      <Subsection title="SAVEPOINT: rollback parcial" accentClass="text-accent5">
        <CodeBlock
          language="sql"
          title="O exercício da aula — qual o valor final da nota?"
          code={`UPDATE T_Notas SET val_nota = 8 WHERE num_matricula = 10;
SAVEPOINT point_A;
UPDATE T_Notas SET val_nota = val_nota + 1 WHERE num_matricula = 10;  -- vira 9
ROLLBACK TO SAVEPOINT point_A;   -- desfaz SÓ o que veio após o savepoint → volta a 8
COMMIT;                           -- persiste

-- Resposta: 8. O rollback parcial preserva o primeiro UPDATE;
-- um ROLLBACK completo (sem savepoint) voltaria ao valor original.`}
        />
      </Subsection>

      <Subsection title="Resumo dos comandos DTL" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: 'COMMIT', description: 'Torna permanentes todas as alterações pendentes da transação. Ponto sem retorno — a durabilidade assume daqui.', accent: 'accent' },
            { title: 'ROLLBACK', description: 'Descarta todas as alterações pendentes, voltando ao último commit.', accent: 'accent2' },
            { title: 'SAVEPOINT nome', description: 'Marca um ponto intermediário dentro da transação.', accent: 'accent3' },
            { title: 'ROLLBACK TO SAVEPOINT nome', description: 'Desfaz apenas o que veio depois da marca; o resto da transação segue pendente.', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Armadilha do commit implícito" accent="var(--color-accent4)">
        <p>
          Executar um <code>CREATE</code>/<code>ALTER</code>/<code>DROP</code> no meio de uma transação{' '}
          <strong>commita implicitamente</strong> o que estava pendente — o ROLLBACK que vier depois já não desfaz
          nada. DDL e transação não se misturam.
        </p>
      </HighlightBox>
    </section>
  );
}
