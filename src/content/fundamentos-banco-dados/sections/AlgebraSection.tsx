import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function AlgebraSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Álgebra Relacional"
        subtitle="A linguagem formal por trás do SQL: σ, π, junções, conjuntos e a divisão que responde 'para todos'"
        colorClass="text-accent"
      />

      <TheoryBlock title="Dois grupos de operações">
        <p>
          A professora organiza a álgebra em dois grupos. Operações da <strong>teoria de conjuntos</strong>: união
          (∪), interseção (∩), diferença (−) e produto cartesiano (×). Operações <strong>de banco</strong>: seleção
          (σ), projeção (π) e junção (⋈). Como toda operação devolve uma relação, elas se <strong>compõem</strong>:
          π<sub>nome</sub>(σ<sub>numdep=5</sub>(EMPREGADO)) — primeiro filtra as linhas, depois escolhe a coluna.
          Todos os exemplos da disciplina usam o esquema EMPRESA do Elmasri (EMPREGADO, DEPARTAMENTO, PROJETO,
          DEPENDENTE).
        </p>
      </TheoryBlock>

      <Subsection title="As operações essenciais" accentClass="text-accent2">
        <PanelList
          columns=""
          items={[
            {
              title: 'σ — Seleção (filtra LINHAS)',
              description: 'σ_dno=4(EMPREGADO); condições compostas: σ_(DNO=4 AND SALARIO>25000) OR (DNO=5 AND SALARIO>30000)(EMPREGADO). Subconjunto horizontal.',
            },
            {
              title: 'π — Projeção (escolhe COLUNAS)',
              description: 'π_UNOME,PNOME,SALARIO(EMPREGADO). Subconjunto vertical — e as tuplas duplicadas são ELIMINADAS no resultado.',
            },
            {
              title: '∪ ∩ − — exigem união-compatibilidade',
              description: 'Mesmo número de atributos com os mesmos domínios. Na diferença, a ordem importa (R − S ≠ S − R). Exemplo da aula: SSNs do departamento 5 ∪ SSNs dos seus supervisores.',
            },
            {
              title: '× — Produto cartesiano',
              description: 'Todos os pares possíveis; não exige compatibilidade e "sozinho não tem sentido" — ganha significado seguido de uma seleção, como no exemplo dos dependentes de cada empregada (σ sexo → π → × DEPENDENTE → σ SSN=ESSN → π).',
            },
            {
              title: '⋈ — Junção (× seguido de σ)',
              description: 'DEP_GER ← DEPARTAMENTO ⋈_GERSSN=SSN EMPREGADO combina tuplas relacionadas. EQUIJUNÇÃO usa só =; JUNÇÃO NATURAL (*) elimina a coluna repetida e exige atributos de MESMO NOME — daí a RENOMEAÇÃO ρ antes (DNUMERO → DNUM).',
            },
            {
              title: '÷ — Divisão ("para todos")',
              description: 'Empregados que trabalham em TODOS os projetos em que Smith trabalha. R(Z) ÷ S(X) exige X ⊂ Z. Sempre que a pergunta tiver "todos", pense na divisão.',
            },
            {
              title: 'ℱ — Funções agregadas e agrupamento',
              description: 'DNO ℱ COUNT SSN, AVG SALARIO (EMPREGADO): número de empregados e média salarial por departamento — o ancestral do GROUP BY.',
            },
            {
              title: '⟕ ⟖ — Junções externas',
              description: 'A junção natural descarta tuplas sem correspondente; as EXTERNAS preservam (com NULL): à esquerda mantém toda tupla de R — "todos os empregados e, se houver, o departamento que gerenciam".',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Junção theta e o conjunto completo" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Conceito"
          leftLabel="Definição"
          rightLabel="Pegadinha de prova"
          rows={[
            { criterion: 'Junção theta', left: 'Condição Ai θ Bj com θ ∈ {=, <, ≤, >, ≥, ≠}', right: 'A equijunção é o caso particular θ igual a =' },
            { criterion: 'Conjunto completo', left: '{σ, π, ∪, −, ×} expressa TODAS as operações', right: 'Junção, interseção e divisão NÃO são primitivas — são deriváveis' },
            { criterion: 'União-compatibilidade', left: 'Mesmo nº de atributos, mesmos domínios', right: 'Vale para ∪, ∩ e −; o produto cartesiano NÃO exige' },
          ]}
        />
      </Subsection>

      <Subsection title="Exercício da turma: o hospital" accentClass="text-accent5">
        <CodeBlock
          language="sql"
          title="Esquema + consultas selecionadas (notação em comentário)"
          code={`-- Ambulatórios(nroa, andar, capacidade)   Médicos(codm, CPF, nome, idade,
-- cidade, especialidade, nroa)            Pacientes(codp, ..., doença)
-- Consultas(codm, codp, data, hora)       Funcionários(codf, ..., salário)

-- 1.1 Ortopedistas com mais de 55 anos (σ com condição composta):
--     σ especialidade='ortopedia' ∧ idade>55 (Médicos)

-- 5. Nome dos médicos com consulta e as datas (junção + projeção):
--     π nome,data (Médicos ⋈ codm Consultas)

-- 7. Ambulatórios com capacidade MAIOR que a do ambulatório 100
--    (self-join theta com renomeação):
--     π A.nroa (σ A.capacidade > B.capacidade (
--        ρ_A(Ambulatórios) × σ nroa=100 (ρ_B(Ambulatórios))))

-- 8. Nome, CPF e idade de médicos, pacientes e funcionários de Florianópolis
--    (união tripla — projetar ANTES para garantir a compatibilidade):
--     π nome,CPF,idade (σ cidade='Florianópolis'(Médicos))
--   ∪ π nome,CPF,idade (σ cidade='Florianópolis'(Pacientes))
--   ∪ π nome,CPF,idade (σ cidade='Florianópolis'(Funcionários))

-- 9. Funcionários com salário < 500 que NÃO estão internados (diferença por CPF):
--     π nome,CPF (σ salário<500 (Funcionários)) − π nome,CPF (Pacientes)`}
        />
      </Subsection>

      <HighlightBox title="Da álgebra para o SQL" accent="var(--color-accent3)">
        <p>
          O mapa mental que conecta as próximas seções: σ → <code>WHERE</code>; π → lista do <code>SELECT</code>{' '}
          (com <code>DISTINCT</code> fazendo a eliminação de duplicatas); ⋈ → <code>JOIN</code>; ∪/∩/− →{' '}
          <code>UNION/INTERSECT/MINUS</code>; ℱ → <code>GROUP BY</code> com funções de agregação; ⟕ →{' '}
          <code>LEFT OUTER JOIN</code>. A divisão não tem comando direto — em SQL ela vira dupla negação com{' '}
          <code>NOT EXISTS</code>.
        </p>
      </HighlightBox>
    </section>
  );
}
