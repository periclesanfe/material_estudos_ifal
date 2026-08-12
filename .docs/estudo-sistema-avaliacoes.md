# Estudo: sistema de avaliações (seções em múltiplas provas)

**Motivação:** Big O cai em AV1, AV2 e na Final, mas o campo `exam` de uma seção aceita
um único valor. Hoje a seção está marcada como `AV1` e **some do Modo Prova quando o aluno
seleciona AV2** — exatamente onde o professor cobra o assunto de novo.

## Diagnóstico

O problema é maior que o campo. Existem hoje **dois sistemas de avaliação paralelos e
incompatíveis** no mesmo projeto.

### Sistema A — seções (`SECTIONS[].exam`)
- Tipo: `exam?: string` — texto livre
- Valores em uso: `'AV1'`, `'AV2'`, `'N1 / AV1'`, `'N1 / AV2'`, `'N2 / AV4'`, `'S1'`
- Consumido por `ExamMode.tsx` (agrupa seções) e `SubjectContentLayout.tsx:180` (badge na pill)
- Rótulo exibido = o próprio valor do campo

### Sistema B — questões (`QUIZ_DATA[].exam`)
- Tipo: `QuizExam = \`prova${number}\`` — template literal
- Valores em uso: `'prova1'`, `'prova2'`, `'prova4'`
- Consumido por `ExamQuizSelector.tsx`
- Rótulo exibido = `"Prova N"`, derivado do número; sobrescrevível por `examLabels`

### Consequência
Na mesma matéria, a seção diz **"AV1"** na pill e o filtro de quiz diz **"Prova 1"** para
o mesmo conteúdo. O professor do ESTD usa "AV1/AV2". PDSW precisou de `examLabels` justamente
para contornar isso — é a prova de que o modelo `prova${number}` não serve.

APBD já força a barra em `'N1 / AV1'` e faz `.replace('N1 / ', '')` para exibir. Ou seja: o
campo virou string concatenada porque não suporta a estrutura real.

## Opções

### Opção 1 — `exam` aceita array
```ts
exam?: string | string[]   // 'AV1' | ['AV1', 'AV2']
```
- **Prós:** menor mudança possível; retrocompatível se aceitar string; resolve o caso do Big O
- **Contras:** não unifica os dois sistemas; a divergência AV1/Prova 1 continua;
  `ExamMode` precisa achatar a lista para montar as opções, e a ordem de aparição
  (hoje derivada da ordem das seções) fica ambígua quando uma seção pertence a duas provas

### Opção 2 — `exams: string[]` sempre, e unificar o vocabulário (recomendada)
Um único conceito de avaliação para seções e questões, declarado pela matéria.

```ts
// data.ts da matéria
export const EXAMS = [
  { id: 'av1', label: 'AV1', description: 'Recursividade, pilhas, filas, deques, Big O' },
  { id: 'av2', label: 'AV2', description: 'Listas encadeadas, busca, ordenação, árvores, Big O' },
] as const;

SECTIONS: [{ id: 'bigo', exams: ['av1', 'av2'] }]
QUIZ_DATA: [{ id: 'q1', exams: ['av1'] }]
```
- **Prós:** acaba com AV1×Prova 1; `examLabels` deixa de ser necessário; a matéria nomeia
  as próprias avaliações (AV/N/S, o que o professor usar); ordem explícita; uma questão
  também pode valer para duas provas
- **Contras:** toca 6 matérias, 2 componentes compartilhados e ~185 declarações de `exam`;
  precisa de migração cuidadosa

### Opção 3 — deixar como está e duplicar a seção
Criar `bigo-av1` e `bigo-av2` com o mesmo conteúdo.
- **Contras:** duplicação de conteúdo, duas pills no nav para a mesma coisa, e o aluno vê
  o assunto repetido em "Final (tudo)". **Descartada.**

## Recomendação

**Opção 2**, em dois PRs separados:

**PR 1 — infraestrutura (compartilhado, sem mudança visível)**
1. Introduzir `exams?: string[]` em `ExamModeSection` e `QuizQuestionData`, mantendo `exam`
   como legado aceito
2. Normalizar na leitura: `const list = section.exams ?? (section.exam ? [section.exam] : [])`
3. `ExamMode`: seção aparece se `list.includes(selectedExam)`; opções derivadas de `EXAMS`
   quando a matéria declarar, com fallback para a ordem de aparição
4. Badge da pill: exibir múltiplos rótulos (`AV1 · AV2`) — cuidado com o espaço no mobile,
   a pill já é apertada
5. `ExamQuizSelector`: consumir os mesmos ids; `examLabels` vira redundante mas continua
   funcionando

**PR 2 — migração por matéria**, uma de cada vez, começando pelo ESTD (declarar `EXAMS`
com `av1`/`av2`, marcar Big O com `['av1','av2']`, converter `prova1`/`prova2` das questões).

Fazer os dois no mesmo PR mistura mudança de infraestrutura compartilhada com conteúdo de
uma matéria — se algo quebrar nas outras cinco, o rollback leva junto o trabalho do ESTD.

## Risco
`ExamMode` e `ExamQuizSelector` são compartilhados pelas 6 matérias com conteúdo. Qualquer
mudança precisa ser verificada em todas — não só no ESTD. O fallback para `exam` legado é o
que permite migrar uma matéria por vez sem quebrar as outras.

## Fora do escopo, mas relacionado
`ExamQuizSelector` rotula "Prova 1 / Prova 2" enquanto o professor do ESTD diz "AV1/AV2".
A Opção 2 resolve isso de graça.
