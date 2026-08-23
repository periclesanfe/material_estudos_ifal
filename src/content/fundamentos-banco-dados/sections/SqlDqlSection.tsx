import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function SqlDqlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="SQL — Consultas (DQL)"
        subtitle="SELECT, filtros, funções de linha nos dois dialetos, agregação e o par GROUP BY/HAVING"
        colorClass="text-accent"
      />

      <TheoryBlock title="A anatomia do SELECT">
        <p>
          <code>SELECT [DISTINCT] colunas FROM tabelas [WHERE linhas] [GROUP BY grupos] [HAVING grupos]
          [ORDER BY ordem]</code>. O <code>DISTINCT</code> elimina duplicatas; aliases entram com <code>AS</code>{' '}
          (ou aspas para rótulos formatados); <code>ORDER BY</code> aceita nome de coluna, posição na lista ou
          alias, com <code>ASC</code> (padrão) e <code>DESC</code>. Este é o bloco a que a turma dedicou mais aulas
          — sete encontros só de DQL.
        </p>
      </TheoryBlock>

      <Subsection title="Filtros do WHERE" accentClass="text-accent2">
        <CodeBlock
          language="sql"
          title="Os operadores, na base Vendas da professora"
          code={`-- comparação e lógicos (parênteses importam: AND liga antes de OR!)
SELECT nome_cliente, endereco FROM Cliente
WHERE (CEP >= 30077000 AND CEP <= 30079000) OR cidade = 'São Paulo';

-- BETWEEN é inclusivo:
SELECT codigo_produto, descricao FROM Produto
WHERE valor_unitario BETWEEN 0.32 AND 2.00;

-- IN testa contra uma lista:
SELECT nome_vendedor FROM Vendedor WHERE faixa_comissao IN ('A', 'B');

-- LIKE: % = qualquer sequência; _ = exatamente um caractere
SELECT nome FROM Empregado WHERE endereco LIKE '%Salvador%';
SELECT pnome FROM Funcionario WHERE datanasc LIKE '________5_';  -- década de 50!

-- NULL só com IS NULL / IS NOT NULL (nunca = NULL):
SELECT nome FROM Funcionarios WHERE snome IS NULL;`}
        />
      </Subsection>

      <Subsection title="Funções de linha: Oracle nos slides, MySQL na prática" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Tarefa"
          leftLabel="Oracle (decks teóricos)"
          rightLabel="MySQL (aulas práticas)"
          rows={[
            { criterion: 'Data atual', left: 'SYSDATE (com hora, via DUAL)', right: 'CURDATE() só data · SYSDATE()/NOW() com hora' },
            { criterion: 'Somar dias', left: 'data + 15', right: 'DATE_ADD(CURDATE(), 15)' },
            { criterion: 'Dias entre datas', left: 'data1 − data2', right: "DATEDIFF('2022-03-02','2021-12-05')" },
            { criterion: 'Outras unidades', left: 'MONTHS_BETWEEN, ADD_MONTHS', right: 'TIMESTAMPDIFF(MONTH|YEAR|..., d1, d2) · PERIOD_DIFF' },
            { criterion: 'Partes da data', left: "TO_CHAR(data, 'MM'/'YYYY')", right: 'EXTRACT(DAY|MONTH|YEAR FROM data) · YEAR(), MONTHNAME(), DAYNAME()' },
            { criterion: 'Formatar', left: "TO_CHAR(data, 'DD/MM/YYYY')", right: "DATE_FORMAT(data, '%d/%m/%Y') — %M nome do mês, %W nome do dia" },
            { criterion: 'Truncar número', left: 'TRUNC(45.926, 2) → 45.92', right: 'TRUNCATE(45.926, 2)' },
            { criterion: 'Trocar NULL', left: 'NVL(comissao, 0)', right: 'IFNULL/COALESCE (o slide usa NVL)' },
          ]}
        />
        <ExampleBox title="Valores que caem prontos em prova">
          <p>
            <code>ROUND(45.926, 2) = 45.93</code> · <code>TRUNC(45.926, 2) = 45.92</code> (corta, não arredonda) ·{' '}
            <code>MOD(1600, 300) = 100</code> · <code>SUBSTR('CursoSql', 1, 5) = 'Curso'</code> ·{' '}
            <code>LENGTH('CursoSql') = 8</code> · <code>LPAD('CursoSql', 15, '*') = '*******CursoSql'</code>. E a
            idade aproximada no MySQL: <code>YEAR(CURDATE()) − YEAR(data_nascimento)</code> (ignora mês/dia — a
            professora usa com essa ressalva).
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Agregação, GROUP BY e HAVING" accentClass="text-accent5">
        <CodeBlock
          language="sql"
          title="Da lista da turma — contagem por pedido e filtro de grupos"
          code={`-- Funções de grupo: COUNT, SUM, AVG, MAX, MIN
SELECT SUM(vl_sal), AVG(vl_sal), MAX(vl_sal), MIN(vl_sal) FROM FUNC;

-- Quantos produtos em cada pedido:
SELECT num_pedido, COUNT(*) AS total_produtos
FROM item_pedido
GROUP BY num_pedido;

-- ... e só os pedidos com mais de 3 produtos (HAVING filtra GRUPOS):
SELECT num_pedido, COUNT(*) AS total_produtos
FROM item_pedido
GROUP BY num_pedido
HAVING COUNT(*) > 3;

-- WHERE (linhas, ANTES de agrupar) + HAVING (grupos, DEPOIS):
SELECT cd_depto, AVG(vl_sal)
FROM FUNC
WHERE in_sexo = 'F'
GROUP BY cd_depto
HAVING AVG(vl_sal) > 3000;`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As três regras que resolvem 90% das questões: <strong>(1)</strong> toda coluna do SELECT fora de função
          de grupo <em>deve</em> estar no GROUP BY; <strong>(2)</strong> função de grupo <em>não pode</em> no WHERE
          — grupo se filtra no HAVING; <strong>(3)</strong> agregações ignoram NULL, <em>exceto</em>{' '}
          <code>COUNT(*)</code>, que conta linhas inteiras — por isso <code>COUNT(*) ≥ COUNT(coluna)</code>.
        </p>
      </Subsection>

      <HighlightBox title="Coluna calculada — direto da 2ª prova" accent="var(--color-accent3)">
        <p>
          Questão 3.4: "primeiro e último nome e o valor que cada empregado recebe por ano" —{' '}
          <code>SELECT NM_FUNC, NM_SOBRENOME, VL_SAL * 12 AS VALOR_ANO FROM FUNC;</code>. Expressões aritméticas
          entram direto na lista do SELECT, e o alias dá nome ao resultado. Na base Vendas, o mesmo padrão:{' '}
          <code>(salario_fixo * 1.75) + 120 AS novo_salario</code>.
        </p>
      </HighlightBox>
    </section>
  );
}
