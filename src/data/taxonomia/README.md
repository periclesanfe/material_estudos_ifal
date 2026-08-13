# Taxonomia de Aprendizagem do BSI/IFAL

Um grafo de pré-requisitos do curso: o conteúdo do site decomposto em **micro-tópicos**
(um conceito ensinável cada) e ligado por **dependências** do tipo "não dá para aprender
X sem antes aprender Y".

Não é um índice novo do site. É a camada que responde a perguntas que o site hoje não
responde:

- Eu errei hashing na AV2. **Qual conceito anterior está faltando?**
- Vou estudar árvore binária de busca. **O que preciso saber antes, na ordem?**
- Sou contribuidor novo e quero escrever conteúdo. **Qual lacuna desbloqueia mais matéria?**
- O professor cobrou "os assuntos que antecedem na sequência didática". **Quais são, exatamente?**

## Por que isso não é invenção nossa

Duas fontes ancoram cada registro:

1. **O material das disciplinas neste repositório.** As dependências já estão escritas em
   prosa dentro de `src/content/**`, só não estão estruturadas. Exemplo real, de
   `estrutura-dados/data.ts`:

   > "não é possível aplicar busca binária em lista encadeada porque não há acesso por
   > índice em O(1) — chegar ao meio já exigiria percorrer metade dos nós"

   Isso é uma aresta de pré-requisito escrita em português. Toda aresta com
   `origem: "texto"` carrega no campo `trecho` a citação verbatim que a sustenta.

2. **O PPC do curso** (`.docs/bacharelado-em-sistemas-de-informacao.pdf`). A ementa oficial
   de cada componente entra em `ementaPPC`, e os pré-requisitos declarados no Quadro 2 da
   matriz curricular entram como arestas `origem: "ppc"`.

O PPC declara pré-requisito no nível de **disciplina** e são só 7 no curso inteiro. Este
dataset desce isso para o nível de **conceito**, que é onde o aluno realmente trava.

## Formato

```
dataset/
├── topicos.json         # os micro-tópicos (nós do grafo)
├── dependencias.json    # as arestas (topicoId depende de prerequisitoId)
├── disciplinas.json     # as 64 disciplinas da grade + ementa do PPC
└── manifest.json        # contagens e checksum SHA-256 de cada arquivo
validar.mjs              # checagem de integridade, sem dependência nenhuma
```

### Um tópico

```json
{
  "id": "mt_ESTD_18",
  "tipo": "PROCEDIMENTAL",
  "disciplina": "ESTD",
  "periodo": 3,
  "unidade": "Pesquisa e busca",
  "nome": "Busca binária",
  "descricao": "Exige lista ordenada. Compara o elemento do meio e descarta metade da lista a cada passo, o que dá O(log n).",
  "ordem": 18,
  "centralidade": 0.084,
  "evidencia": [
    "Implementar a versão iterativa com índices início e fim",
    "Justificar por que a técnica não se aplica a lista encadeada"
  ],
  "checagem": "Você consegue explicar por que n/2^i = 1 implica i = log n?",
  "avaliacoes": ["AV2", "final"],
  "ementaPPC": ["Visão geral das estruturas de dados"],
  "fonte": "src/content/estrutura-dados/sections/PesquisaSection.tsx"
}
```

`centralidade` é derivada, não escrita à mão: é a fração dos tópicos do grafo que dependem
deste, direta ou indiretamente. Serve para ordenar o que estudar primeiro.

### Uma dependência

```json
{
  "topicoId": "mt_ESTD_18",
  "prerequisitoId": "mt_ESTD_09",
  "forca": "hard",
  "razao": "Sem lista ordenada a busca binária não tem invariante para descartar metade",
  "origem": "texto",
  "trecho": "Busca binária: exige lista ordenada; compara o elemento do meio e descarta metade da lista a cada passo",
  "escopo": "interna"
}
```

- `forca`: `hard` = sem o pré-requisito o conceito é incompreensível. `soft` = ajuda e dá
  contexto, mas o conceito se sustenta.
- `origem`: `texto` (citação do material, exige `trecho`), `ppc` (ementa ou Quadro 2) ou
  `inferido` (dependência que qualquer professor da área assinaria, e aí a `razao` tem que
  se explicar sozinha).
- `escopo`: `interna` (dentro da disciplina) ou `cruzada` (entre disciplinas).

O campo `trecho` existe por um motivo específico. O dataset que inspirou o formato, a
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy), tem 3.221 arestas
sem nenhuma prova de origem, e as issues #5, #11 e #18 de lá são justamente sobre arestas
sem sentido e nomes que contradizem a descrição. Exigir a citação no schema é o que impede
o mesmo defeito aqui.

## Validação

```bash
node validar.mjs
```

Checa, e falha com código diferente de zero em qualquer uma:

- integridade referencial: toda ponta de aresta resolve para um tópico existente
- aciclicidade: nenhum ciclo de pré-requisito (A antes de B antes de A)
- coerência de ordem: dentro da disciplina o pré-requisito sempre tem `ordem` menor
- coerência de período: pré-requisito nunca vem de um período posterior, e optativa nunca
  é pré-requisito de obrigatória
- a regra da prova: `origem: "texto"` sem `trecho` é erro, não aviso
- padrão de escrita do projeto: travessão proibido em campo de texto
- os checksums declarados no `manifest.json`

## Como contribuir com a taxonomia

1. Escolha uma disciplina que já tenha conteúdo em `src/content/`.
2. Leia o material inteiro, inclusive a constante `<MATERIA>_GUIDE_CONTEXT` do `data.ts`,
   que costuma ser a fonte mais densa.
3. Quebre em micro-tópicos: **uma ideia ensinável cada**. "Pilha (LIFO)" é micro-tópico.
   "Estruturas lineares" não é, é `unidade`.
4. Crie aresta só quando você conseguir dizer, em uma linha, por que o conceito não fecha
   sem o outro. **Aresta errada é pior que aresta ausente**: ela ensina na ordem errada.
5. Rode `node validar.mjs` antes de abrir o PR.

## Licença e crédito

O **formato** (os nomes de campo, a ideia de micro-tópico com grafo de pré-requisito,
`hard`/`soft`, o manifest com checksum, o validador sem dependência) é inspirado na
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy), © Generative Spark,
Inc., publicada sob ODbL 1.0 e CC BY-SA 4.0.

Nenhum registro de dados da Marble foi copiado para cá. Isto importa juridicamente: a ODbL
tem share-alike sobre **banco de dados derivado**, e reimplementar um formato não cria
derivação. Se algum dia importarmos tópicos ou arestas de lá, a obrigação passa a valer e
este dataset tem que sair sob ODbL, com a atribuição exigida por eles.

O conteúdo em si é derivado do material dos professores do IFAL, com o mesmo crédito que o
resto do repositório já pratica. A ementa e os pré-requisitos vêm do PPC do curso, que é
documento público institucional.

> **Nota para o mantenedor:** o repositório hoje não tem arquivo `LICENSE`. Vale decidir isso
> antes de o dataset circular fora do GitHub. O modelo em camadas da Marble (uma licença para
> a estrutura do banco, outra para o texto autoral, e a licença de origem preservada para
> material de terceiro) resolve exatamente o caso de um repositório que mistura código
> próprio com resumo de material de professor.
