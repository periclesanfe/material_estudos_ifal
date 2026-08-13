# Mapa: turmas do Classroom → matérias do PPC

Correspondência entre as pastas de `.classroom/` (material raspado, não versionado) e as
matérias da grade em `src/data/curriculum.ts`. Serve de referência para montar o briefing
de cada agente autor.

Levantado em 12/08/2026, com 25 turmas coletadas.

## Obrigatórias

| Turma | Código | Matéria | Período | Material | Conteúdo |
|---|---|---|---|---|---|
| `fnsi-2022-1-bsi` | FUSI | Fundamentos de Sistemas de Informação | 1º | 21 MB | — |
| `alpg-bsi-1p-2022-1` | ALPG | Algoritmos e Lógica de Programação | 1º | 16 MB | PR aberto |
| `intw-bsi-2022-1` | INTW | Introdução às Tecnologias Web | 1º | 23 MB | — |
| `matem-tica-discreta` | LMMD | Lógica Matemática e Matemática Discreta | 1º | 20 MB | — |
| `fundamentos-de-matem-tica-i` | MTSI | Matemática para Sistemas de Informação | 2º | 642 MB | — |
| `fundamentos-da-gest-o-organizacional-2022-2` | FGEO | Fundamentos da Gestão Organizacional | 2º | 12 KB | — |
| `arqc-turma-2022-2` | AOCP | Arquitetura e Organização de Computadores | 2º | 103 MB | — |
| `lnpg-turma-2022-2` | LPGM | Linguagem de Programação | 2º | 5,3 MB | PR aberto |
| `fnbd-2023-1-bsi` | FDBD | Fundamentos de Banco de Dados | 3º | 29 MB | — |
| `estd-2023-1` | ESTD | Estrutura de Dados | 3º | 4,9 MB | ✅ publicado |
| `apbd-2023-2` | APBD | Administração e Projeto de Banco de Dados | 4º | 37 MB | ✅ publicado |
| `fnrc-turma-2023-2` | FRDC | Fundamentos de Redes de Computadores | 4º | 50 MB | — |
| `proo-bsi-4p-2023-2` | POOB | Programação Orientada a Objetos | 4º | 8,1 MB | — |
| `gest-o-de-pessoas-em-ti-2023-2` | GPTI | Gestão de Pessoas em TI | 4º | 28 MB | — |
| `tabd-2024-1` | TABD | Tópicos Avançados de Banco de Dados | 5º | 70 MB | PR aberto |
| `pweb2-bsi-2024-1` | PGWB | Programação Web | 5º | 2,7 MB | — |
| `apsi-bsi-2024-1` | APSI | Análise e Projeto de Sistemas de Informação | 5º | 118 MB | — |
| `geren-de-projetos-2024` | GPJT | Gerência de Projeto | 5º | 29 MB | — |
| `empreendedorismo-digital-bsi-2026-2` | EMPD | Empreendedorismo Digital | 6º | 3,1 MB | ✅ publicado |
| `sad-2026` | SADE | Sistemas de Apoio à Decisão | 8º | 101 MB | — |

## Optativas

| Turma | Código | Matéria | Material | Conteúdo |
|---|---|---|---|---|
| `2026-1-mkce165` | MKCE | Marketing e Comércio Eletrônico | 8,7 MB | ✅ publicado |
| `devops-turma-2025-1` | DEVO | DevOps | 19 MB | — |
| `projeto-de-infraestrutura` | INFR | Projeto de Infraestrutura | 9,2 MB | — |
| `educa-o-financeira-bsi-2024-2` | EDFI | Educação Financeira | 11 MB | — |
| `etecsoc-2023-2` | ETSO | Ética e Sociedade | 34 MB | — |

## Matérias com conteúdo sem turma coletada

`CORG` (Comportamento Organizacional), `METC` (Metodologia Científica) e `PDSW` (Processos
de Desenvolvimento de Software) foram escritas sem material do professor. Se as turmas
aparecerem, valem uma rodada de enriquecimento.

## Sem turma e sem conteúdo

`INGT` (Inglês Técnico, 1º período) é a única do 1º período sem material coletado.

## Notas

- **ETSO — Ética e Sociedade** não constava na grade e foi adicionada às optativas
  humanísticas. O código `ETSO` foi criado aqui: se o PPC usar outro, ajustar.
- **EMPD — o nome da pasta engana.** A pasta coletada é `...bsi-2026-2`, mas a turma é de
  **2026.1**, confirmado pela mantenedora; é esse o semestre que o conteúdo credita. O material
  da turma não chegou a ser baixado: o conteúdo foi escrito só a partir da apostila. Professor:
  Anderson Rodrigues Gomes. Se a turma for coletada, vale uma rodada de enriquecimento.
- **`fundamentos-de-matem-tica-i` → MTSI**: a turma tem 5 materiais, nenhuma atividade, e o
  acervo é de nivelamento (Coleção Iezzi, apoio de Fundamental/Médio, introdução ao cálculo).
  Tratada como MTSI por decisão do mantenedor. **O agente autor deve considerar a ementa do
  PPC como referência primária**, já que o material da turma é mais raso que a disciplina.
- As turmas `flutter` e `rn-jan-2023-s-bados` foram descartadas: não correspondem a
  disciplinas do curso.
