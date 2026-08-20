import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function SqlJoinsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="SQL — Junções e Subconsultas"
        subtitle="As duas sintaxes de JOIN, o OUTER que preserva, e as subconsultas da leitura obrigatória"
        colorClass="text-accent"
      />

      <Subsection title="JOIN nas duas sintaxes (como a professora cobra)" accentClass="text-accent2">
        <CodeBlock
          language="sql"
          title="Da aula de quadro de 18/10 — a mesma consulta, dos dois jeitos"
          code={`-- Sintaxe 1: junção implícita no WHERE
SELECT F.NOME, F.SALARIO
FROM FUNC F, DEPARTAMENTO D
WHERE F.CDEPTO = D.CODIGO         -- condição de JUNÇÃO
  AND D.NOME = 'ADMINISTRACAO';   -- condição de FILTRO

-- Sintaxe 2: INNER JOIN ... ON (a junção fica explícita)
SELECT F.NOME, F.SALARIO
FROM FUNC F INNER JOIN DEPARTAMENTO D ON (F.CDEPTO = D.CODIGO)
WHERE D.NOME = 'ADMINISTRACAO';

-- Regra: n tabelas exigem pelo menos n−1 condições de junção.
-- Sem elas, o resultado é o PRODUTO CARTESIANO (todas × todas).`}
        />
      </Subsection>

      <Subsection title="OUTER JOIN e autojunção" accentClass="text-accent3">
        <CodeBlock
          language="sql"
          title="O exemplo do quadro: quem fica de fora aparece com NULL"
          code={`SELECT F.NOME, D.NOME
FROM FUNC F RIGHT OUTER JOIN DEPARTAMENTO D ON (F.MATR = D.GERSSN);
-- ADRIANA BROAD    | ADMINISTRACAO
-- BERNARDO CANTINO | FINANCEIRO
-- CARLA ANTUNES    | NULL   ← preservadas pelo OUTER;
-- PEDRO ERNESTO    | NULL   ← o INNER as descartaria

-- AUTOJUNÇÃO: a tabela entra duas vezes, com aliases
SELECT E.NOME AS empregado, SUP.NOME AS supervisor
FROM EMPREGADO E, EMPREGADO SUP
WHERE E.SUPERIDENT = SUP.IDENT;   -- atenção à DIREÇÃO da condição!`}
        />
        <ComparisonTable
          criterionLabel="Variante"
          leftLabel="O que preserva"
          rightLabel="Uso típico"
          rows={[
            { criterion: 'INNER JOIN', left: 'Só as linhas com correspondência', right: 'A junção padrão do dia a dia' },
            { criterion: 'LEFT OUTER', left: 'Todas as linhas da tabela à ESQUERDA (NULL no resto)', right: '"Todos os clientes e, se houver, seus pedidos"' },
            { criterion: 'RIGHT OUTER', left: 'Todas as da DIREITA', right: 'Espelho do LEFT' },
            { criterion: 'FULL OUTER', left: 'Todas as de ambas', right: 'Auditorias de correspondência (Oracle; MySQL simula com UNION)' },
          ]}
        />
      </Subsection>

      <Subsection title="Operadores de conjunto" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <code>UNION</code> empilha resultados e <strong>elimina duplicatas</strong>; <code>UNION ALL</code>{' '}
          mantém tudo (e não ordena); <code>INTERSECT</code> devolve o comum; <code>MINUS</code> (Oracle;{' '}
          <code>EXCEPT</code> no padrão) subtrai — e aqui <strong>a ordem das consultas importa</strong>. Regras:
          mesmo número de colunas com tipos compatíveis, e <code>ORDER BY</code> apenas no final da última
          consulta. Faltou coluna numa das partes? Complete com literal: <code>SELECT nome, 'Não informado' ...</code>
        </p>
      </Subsection>

      <Subsection title="Subconsultas (slides 62–70 — leitura obrigatória da turma)" accentClass="text-accent4">
        <CodeBlock
          language="sql"
          title="Linha única, múltiplas linhas, correlacionada e EXISTS"
          code={`-- LINHA ÚNICA: comparadores simples
SELECT NM_FUNC FROM FUNC
WHERE VL_SAL > (SELECT AVG(VL_SAL) FROM FUNC WHERE CD_DEPTO = 'D11');

-- MÚLTIPLAS LINHAS: IN, ANY, ALL
SELECT NM_FUNC FROM FUNC
WHERE CD_MAT IN (SELECT CD_GERENTE FROM DEPTO);

SELECT NM_FUNC FROM FUNC
WHERE DT_ADM < ALL (SELECT DT_INI FROM PROJ);  -- antes de TODOS os projetos

-- CORRELACIONADA: executa uma vez POR LINHA da consulta externa
SELECT F2.NM_FUNC FROM FUNC F2
WHERE F2.VL_SAL > (SELECT AVG(VL_SAL) FROM FUNC
                   WHERE CD_DEPTO = F2.CD_DEPTO);  -- referência à externa

-- EXISTS: testa existência (para na primeira linha encontrada)
SELECT NM_FUNC FROM FUNC
WHERE EXISTS (SELECT 'X' FROM DEPTO WHERE CD_GERENTE = CD_MAT);

-- Também na 2ª prova (questão 3.7): gerentes que NÃO respondem por projeto
SELECT F.CD_MAT, F.NM_FUNC
FROM FUNC F, DEPTO D
WHERE F.CD_MAT = D.CD_GERENTE
  AND D.CD_DEPTO NOT IN (SELECT CD_DEPTO FROM PROJ);`}
        />
        <ExampleBox title="A armadilha do NOT IN com NULL">
          <p>
            Se a subconsulta devolver um NULL, o <code>NOT IN</code> vira uma cadeia de <code>≠ NULL</code> — cujo
            resultado é "desconhecido" — e a consulta externa <strong>não retorna linha nenhuma</strong>. As
            correções do slide: blindar a subconsulta (<code>NOT IN (SELECT NVL(CD_GERENTE, 0) ...)</code>) ou
            reescrever com <code>NOT EXISTS</code>, que é imune.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Erros clássicos — documentados no próprio gabarito da turma" accent="var(--color-accent4)">
        <p>
          Três deslizes reais que viraram lição: <strong>(1)</strong> responder "quem NÃO tem dependente" com{' '}
          <code>!=</code> em produto cartesiano — basta existir um dependente alheio para o par passar; ausência se
          testa com <code>NOT IN</code>/<code>NOT EXISTS</code>/<code>LEFT JOIN ... IS NULL</code>;{' '}
          <strong>(2)</strong> inverter a direção da autojunção (lista os subordinados em vez do supervisor);{' '}
          <strong>(3)</strong> juntar empregado a projeto pelo <em>departamento</em> em vez da tabela de alocação
          (TRABALHANDO) — o caminho da junção segue as FKs do relacionamento, não qualquer coluna em comum.
        </p>
      </HighlightBox>
    </section>
  );
}
