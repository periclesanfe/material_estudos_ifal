# Skill: Taxonomy Creation

## Objetivo
Taxonomizar uma matéria: quebrar o conteúdo dela em micro-tópicos e ligá-los por
dependências de pré-requisito, dentro do dataset em `src/data/taxonomia/`.

## As duas regras que valem mais que as outras

### 1. Aresta errada é pior que aresta ausente
Aresta que falta apenas encurta a trilha: o aluno vê menos do que precisava ver, e a lacuna
aparece na próxima revisão. Aresta errada **ensina na ordem errada**: manda estudar o que não
era necessário, esconde o que era, e ainda por cima não parece defeito. O validador confere
estrutura, não semântica, e a interface exibe a ligação inventada com a mesma confiança das
outras. Na dúvida, deixe a aresta de fora e registre a dúvida na descrição do PR.

### 2. Origem `texto` sem `trecho` é erro, não aviso
Em `scripts/taxonomia/validar.mjs` a checagem da prova usa `exige`, não `alerta`: aresta com
`origem: "texto"` e `trecho` vazio (ou com menos de 10 caracteres) faz
`npm run taxonomia:validar` sair com código diferente de zero.

O motivo é concreto. O formato foi inspirado na
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy), que tem **3.221 arestas
sem nenhuma prova de origem**, e as issues #5, #11 e #18 de lá são justamente sobre ligação sem
sentido e nome que contradiz a descrição. Sem o campo de prova, uma aresta não é auditável seis
meses depois: só resta acreditar em quem escreveu. O `trecho` também não é burocracia interna,
ele vai para a tela, citado embaixo de "Por que depende" em `/trilha`.

Verbatim ou nada. Paráfrase no campo `trecho` é a mesma falha com aparência de prova.

## Passo a Passo

### 1. Preparação
- Escolher matéria que **já tenha conteúdo** em `src/content/<slug>/`. A taxonomia é derivada
  do material, não da ementa solta.
- Ler o conteúdo inteiro, inclusive a constante `<MATERIA>_GUIDE_CONTEXT` do `data.ts` e os
  arquivos de `sections/`, que é onde as dependências já estão escritas em prosa.
- Ler a ementa da disciplina no PPC (`.docs/bacharelado-em-sistemas-de-informacao.pdf`).
- Conferir se a disciplina já existe em `src/data/taxonomia/disciplinas.json`.

### 2. Quebrar em micro-tópicos
Uma ideia ensinável por tópico. O teste é a pergunta de checagem: se ela não couber em uma
frase, o tópico é grande demais. "Pilha (LIFO)" é micro-tópico; "Estruturas lineares" não é,
é `unidade`.

```json
{
  "id": "mt_ESTD_33",
  "tipo": "PROCEDIMENTAL",
  "disciplina": "ESTD",
  "periodo": 3,
  "unidade": "Hashing",
  "nome": "Função hash, slot e funções aritméticas",
  "descricao": "A função hash mapeia uma chave para uma posição (slot) da tabela...",
  "ordem": 33,
  "centralidade": 0.0909,
  "evidencia": ["Calcular o slot de um item pelos três métodos"],
  "checagem": "Calcule o slot de 44 em uma tabela de 11 posições pelo método do módulo.",
  "avaliacoes": ["AV2"],
  "ementaPPC": [],
  "fonte": "src/content/estrutura-dados/sections/HashingSection.tsx"
}
```

- `id` no padrão `mt_<CODIGO>_<nn>`, com o código da própria disciplina.
- `ordem` é a sequência didática **do professor**, não a sua preferência de ensino.
- `tipo`: `CONCEITUAL`, `PROCEDIMENTAL`, `REPRESENTACIONAL`, `LINGUAGEM` ou `META`.
- `evidencia` e `checagem` só geram aviso no validador, mas preencha os dois: são eles que
  transformam o tópico em algo verificável em vez de um rótulo.
- `avaliacoes` só quando o professor declarou (AV1, AV2, final, projeto). Não estime.
- `ementaPPC` recebe o trecho da ementa que **cobre de fato** o tópico, ou fica vazio.
- `centralidade` é derivada do grafo, calculada depois de fechar as arestas. Nunca chutada.
- As matérias já taxonomizadas têm entre 42 e 60 micro-tópicos (`manifest.json`).

### 3. Criar as arestas
Só crie a aresta quando você conseguir dizer, em uma linha, por que o conceito não fecha sem o
outro. Essa linha é o campo `razao`.

```json
{
  "topicoId": "mt_ESTD_33",
  "prerequisitoId": "mt_ESTD_02",
  "forca": "hard",
  "razao": "A função hash mais usada é o resto da divisão pelo tamanho da tabela.",
  "origem": "texto",
  "trecho": "hash(item) = item % tamanho_tabela. Simples e eficiente. Ex: 44 % 11 = 0.",
  "escopo": "interna"
}
```

- `forca`: pergunte se o aluno consegue acompanhar a explicação sem o pré-requisito. Consegue,
  mas perde contexto, é `soft`. Não consegue, é `hard`.
- `origem`: `texto` (citação do material, exige `trecho`), `ppc` (ementa ou Quadro 2 da matriz)
  ou `inferido`. Em `inferido` a `razao` tem que se explicar sozinha, porque é tudo que sobra.
- `escopo`: `cruzada` exige que o tópico da outra disciplina já exista no dataset.
- Ligue ao pré-requisito imediato, não a toda a cadeia atrás dele: o fecho transitivo é
  calculado por `getTrilha()`, e aresta redundante só suja o grafo.
- Ordem e período são checados: dentro da disciplina o pré-requisito tem `ordem` menor, e entre
  disciplinas ele nunca vem de período posterior.

### 4. Recalcular a centralidade
`centralidade` é o alcance transitivo do tópico (quantos conceitos dependem dele, direta ou
indiretamente) normalizado pelo maior alcance do grafo, com 4 casas. Recalcule para o dataset
inteiro, não só para a matéria nova: uma aresta cruzada muda o número dos outros.

### 5. Atualizar o `manifest.json`
As contagens e os checksums são validados. Atualize `contagens`, `geradoEm` e, para cada
arquivo, `bytes` e `sha256`:

```bash
node -e "
const { createHash } = require('node:crypto');
const { readFileSync } = require('node:fs');
for (const f of ['topicos.json', 'dependencias.json', 'disciplinas.json']) {
  const b = readFileSync('src/data/taxonomia/' + f);
  console.log(f, b.length, createHash('sha256').update(b).digest('hex'));
}
"
```

### 6. Validar
```bash
npm run taxonomia:validar   # exige: código 0
npx tsc -b && npm run build
```

Aviso não bloqueia, mas leia: tópico sem nenhuma aresta quase sempre é aresta esquecida, não
conceito isolado de verdade.

### 7. Registrar
1. Em `src/data/taxonomia/disciplinas.json` → a disciplina, com `codigo`, `codigoPPC`, `nome`,
   `periodo`, `eixo`, `slug`, `cor`, `ementa` e `unidadesEmenta`.
2. Em `src/data/contribuicoes.json` → a entrega, com `tipo: "dados"`, refletida em
   `docs/contribuicoes/LOG.md`.
3. Branch `feat/taxonomia-<slug>`, commit em português.

## Proibido
- Aresta cuja `razao` não caiba em uma linha (é sinal de que você não sabe por que ela existe)
- `trecho` parafraseado, resumido ou traduzido: verbatim ou nada
- Dependência que "faz sentido na área" mas não está no material nem no PPC, entrando como
  `texto` ou `ppc`
- Travessão em `nome`, `descricao` ou `checagem`: o validador reprova
- Ciclo, auto-aresta, optativa como pré-requisito de obrigatória
- Copiar a descrição autoral do professor na íntegra em `descricao`: resuma, como no resto do
  repositório
- Editar `topicos.json` ou `dependencias.json` sem refazer o `manifest.json`

## Checklist antes do PR
- [ ] Todo micro-tópico tem `evidencia` e `checagem` preenchidos
- [ ] Toda aresta `origem: "texto"` tem `trecho` verbatim do material
- [ ] Toda aresta tem `razao` de uma linha que explica a dependência
- [ ] `hard` e `soft` revisados um por um, não todos `hard` por comodidade
- [ ] `centralidade` recalculada para o dataset inteiro
- [ ] `manifest.json` com contagens, bytes e sha256 atualizados
- [ ] `npm run taxonomia:validar` sem erro, avisos lidos e justificados
- [ ] `npx tsc -b` e `npm run build` passam

## Referência
- `src/data/taxonomia/README.md`: formato dos arquivos e procedência do dado
- `.docs/TAXONOMIA.md`: arquitetura, invariantes e consumo pelo app
- `ESTD` (Estrutura de Dados) como matéria modelo: é a mais densa em arestas com citação
