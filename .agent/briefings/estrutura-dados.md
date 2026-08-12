# Briefing: Estrutura de Dados (ESTD)

## Identificação
| Campo | Valor |
|---|---|
| Código | ESTD |
| Slug | `estrutura-dados` |
| Período | 3º |
| Eixo | FPG (Formação Profissional Geral) |
| Carga horária | 80h |
| Estado atual | `hasContent: true` — **enriquecimento**, não criação |

## Material da turma
| Campo | Valor |
|---|---|
| Pasta | `.classroom/estd-2023-1/` |
| Turma | ESTD-2023-1 · BSI · Lab 103 (arquivada) |
| Professor | Ricardo (ricardo@ifal.edu.br) |
| Anexos | 35 PDFs — todos legíveis com a ferramenta Read |
| Itens no mural | 58 (10 avisos, 35 materiais, 13 atividades) |

### Anexos de aula (ordem didática do professor)
```
00-apresentacao · 00-python · 00-exercicios-em-python
01-strings-listas · 02-recursividade · 03-tad · 04-listas
05-pilhas · 06-filas · 07-aplicacoes-filas · 08-deque
09-listas-encadeadas · 10-listas-encadeadas-ordenadas
11-pesquisa · 12-hashing · 13-ordenacao · 13-ordenacao-quicksort
14-arvores-1 · 14-arvores-2 · 14-arvores-3 · 14-arvores-4
```

### Listas de exercícios (fonte para quizzes)
```
lista01-revisao · lista02-funcoes · lista03-string · lista03-tad
lista04-recursividade · lista05-pilhas · lista06-filas · lista07-deque
lista08-listas-encadeadas · lista08-pesquisa · lista10-ordenacao-p
```

### Miniprojetos aplicados
```
pilhas-labirinto · lista-encadeada-domino-23-1 · hashing-gerenciador-eventos
```

## Estado atual do conteúdo
`src/content/estrutura-dados/` — 14 seções, 33 questões de quiz, `GUIDE_CONTEXT` de ~1.400
palavras. `EstruturaDadosSections.tsx` tem **1.740 linhas** (o padrão do projeto é
componente < 150 linhas — provável achado do crítico de código).

Seções atuais: intro, python, strings-listas, recursividade, tad, listas, pilhas, filas,
deque, listas-encadeadas, pesquisa, hashing, ordenacao, arvores.

## Lacunas já identificadas (ponto de partida, não lista fechada)

1. **Notação Big O não tem seção própria.** O professor postou material dedicado
   ("Notação Big O (para ler)") e o assunto aparece nos **três** blocos de avaliação —
   AV1, AV2 e Prova Final. Hoje está diluído no site.
2. **Árvores em quatro PDFs, uma seção no site.** Maior bloco de material da turma
   (`14-arvores-1` a `14-arvores-4`), possivelmente subdimensionado.
3. **Listas de exercícios pouco aproveitadas.** 11 listas do professor — matéria-prima
   direta para quizzes aplicados em vez de questões só teóricas.
4. **Miniprojetos ignorados.** Labirinto com pilhas, dominó com lista encadeada,
   gerenciador de eventos com hashing — exemplos concretos de aplicação real.

## Assuntos de prova (declarados pelo professor no mural)
| Avaliação | Assuntos |
|---|---|
| AV1 | Recursividade, Pilhas, Filas, Deques, Big O |
| AV2 | Listas encadeadas, Busca, Ordenação, Árvores, Big O |
| Final | Recursividade + (ver `INDICE.md` para a lista completa) |

## Instruções específicas
- **Enriquecer, não reescrever.** O conteúdo atual está bom e alinhado à turma.
- Priorizar as lacunas acima, validando cada uma contra o material antes de agir.
- Linguagem da disciplina: **Python** (é o que o professor usa).
- Citar: Prof. Ricardo · ESTD · BSI/IFAL · 2023.1
- Se dividir `EstruturaDadosSections.tsx`, preservar o comportamento do nav sticky.

## Referências
- Padrão de conteúdo: `.skills/content_creation.md`
- Padrão de quiz: `.skills/quiz_creation.md`
- Matéria modelo: `src/content/marketing-comercio-eletronico/`
