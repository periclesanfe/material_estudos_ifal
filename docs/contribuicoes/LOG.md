# Log Visual De Contribuicoes

Fonte estruturada: [`src/data/contribuicoes.json`](../../src/data/contribuicoes.json).

## Contribuintes

| ID | Nome | Matricula | Email institucional | Curso | Observacoes |
| --- | --- | --- | --- | --- | --- |
| isaque-braga | Isaque Braga | 2024001384 | isb15@aluno.ifal.edu.br | Sistemas de Informação | |
| maria-luisa-alaquoke | Maria Luisa Alaquoke Ferreira dos Santos | 2024001400 | mlafs2@aluno.ifal.edu.br | Sistemas de Informação | |
| pericles-feitoza | Péricles Feitoza | 2022000806 | paf1@aluno.ifal.edu.br | Sistemas de Informação | Mantenedor |
| marina-medeiros | Marina Medeiros Correia de Paffer | 13177016402 | mmcp1@aluno.ifal.edu.br | Sistemas de Informação | |

## Contribuicoes Por Materia

| Data | Materia | Tipo | Quem | Onde | Como | Referencia | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-13 | Marketing e Comércio Eletrônico (MKCE) | conteudo_materia | pericles-feitoza | src/content/marketing-comercio-eletronico/data.ts | Responsável pelo conteúdo da matéria | — | incorporado |
| 2026-05-12 | Comportamento Organizacional (CORG) | conteudo_materia | pericles-feitoza | src/content/comportamento-organizacional/data.ts | Responsável pelo conteúdo da matéria | — | incorporado |
| 2026-05-31 | Metodologia Científica (METC) | conteudo_materia | isaque-braga | src/content/metodologia-cientifica/data.ts | Adiciona conteúdo completo com seções navegáveis e quiz de revisão | #18 | incorporado |
| 2026-06-11 | Estrutura de Dados (ESTD) | conteudo_materia | isaque-braga | src/content/estrutura-dados/data.ts | Adiciona conteúdo completo com exemplos usando CodeBlock | #19 | incorporado |
| 2026-06-17 | Processos de Desenvolvimento de Software (PDSW) | conteudo_materia | marina-medeiros | src/content/processos-desenvolvimento-software/data.ts | Responsável pelo conteúdo da matéria, por capítulos com leitor do livro base | #21 | incorporado |
| 2026-06-21 | Administração e Projeto de Banco de Dados (APBD) | conteudo_materia | maria-luisa-alaquoke | src/content/administracao-projeto-banco-dados/data.ts | Responsável pelo conteúdo da matéria | — | incorporado |
| 2026-08-12 | Empreendedorismo Digital (EMPD) | conteudo_materia | marina-medeiros | src/content/empreendedorismo-digital/ | Cria o conteúdo com 14 seções, avaliações por atividade e 32 questões conferidas por execução | #47 | incorporado |
| 2026-08-20 | Fundamentos de Banco de Dados (FDBD) | conteudo_materia | pericles-feitoza | src/content/fundamentos-banco-dados/ | Cria o conteúdo com 14 seções a partir do material completo da turma 2023.1 (com gabaritos oficiais) e 38 questões de quiz | — | incorporado |

## Contribuicoes Do Projeto

Use esta tabela para melhorias gerais, revisoes, issues, documentacao, infraestrutura e ajustes que nao pertencem a uma unica materia.

| Data | Escopo | Tipo | Quem | Onde | Como | Referencia | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-31 | projeto | codigo | isaque-braga | src/components/quiz/ExamQuizSelector.tsx | Refatoração do filtro de provas para número dinâmico via useMemo | #17 | incorporado |
| 2026-06-11 | projeto | codigo | isaque-braga | src/components/ui/CodeBlock.tsx | Componente CodeBlock com syntax highlighting para 8 linguagens | #19 | incorporado |

## Checklist Para Novas Entradas

- [ ] O contribuinte existe em `src/data/contribuicoes.json`.
- [ ] A contribuicao informa quem, quando, onde, como, tipo e status.
- [ ] Se for materia, `materiaSlug` e `materiaCodigo` foram preenchidos.
- [ ] Se veio de issue ou PR, a referencia foi registrada.
- [ ] O registro visual desta pagina foi atualizado quando necessario.
