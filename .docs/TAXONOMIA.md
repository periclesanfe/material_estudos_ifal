# Taxonomia de Aprendizagem do BSI

**Motivação:** o site já responde "o que é este assunto". Ele não responde "o que eu precisava
saber antes". Essa informação existe, escrita em prosa dentro de `src/content/**` ("não é
possível aplicar busca binária em lista encadeada porque não há acesso por índice em O(1)"),
mas em prosa ela não é consultável. A taxonomia é essa camada estruturada: o conteúdo do curso
decomposto em conceitos ensináveis e ligado por dependências de pré-requisito.

## O que é

Um grafo dirigido acíclico versionado em JSON, dentro do repositório, sem backend:

- **nó**: um micro-tópico, ou seja um único conceito ensinável
- **aresta**: "não dá para aprender X sem antes aprender Y"

Não é um índice novo do site nem um menu alternativo. É o dado que permite quatro perguntas
que o site não respondia:

| Pergunta | O que a taxonomia usa |
|---|---|
| Errei hashing na AV2, qual conceito anterior está faltando? | fecho transitivo dos pré-requisitos |
| Vou estudar árvore binária de busca, o que vem antes e em que ordem? | mesma trilha, lida de cima para baixo |
| Sou contribuidor novo, qual lacuna desbloqueia mais matéria? | alcance transitivo (`centralidade`) |
| Quais assuntos antecedem este na sequência didática? | `ordem` dentro da disciplina mais arestas cruzadas |

## Por que existe separado do conteúdo

O PPC declara pré-requisito no nível de **disciplina**, e são só 7 no curso inteiro. O aluno não
trava numa disciplina, trava num conceito. A taxonomia desce a mesma ideia para o nível de
conceito, que é onde a dúvida acontece.

O dataset também é deliberadamente independente dos componentes React. Ele é lido por
`src/lib/grafoTrilha.ts` (que não importa React) e pela página `/trilha`, mas nada no formato
depende de como o site desenha. Trocar a visualização não mexe no dado.

## De onde vem o dado

| Fonte | O que entra | Como é marcada |
|---|---|---|
| Material das disciplinas em `src/content/**` (slides e apostilas dos professores, resumidos pelo repositório) | micro-tópicos, `descricao`, `evidencia`, `checagem`, `avaliacoes` e a maioria das arestas | `origem: "texto"`, com a citação verbatim em `trecho` |
| PPC do curso (`.docs/bacharelado-em-sistemas-de-informacao.pdf`) | `ementa`, `unidadesEmenta`, `ementaPPC` e os pré-requisitos do Quadro 2 | `origem: "ppc"` |
| Conhecimento da área, quando o material pula a ligação óbvia | arestas que qualquer professor assinaria | `origem: "inferido"`, e aí a `razao` tem que se explicar sozinha |

Nada é gerado a partir de outra taxonomia pronta. O campo `fonte` de cada tópico aponta o
arquivo do repositório de onde ele saiu, e o `trecho` de cada aresta aponta a frase que a
sustenta. É o que torna o dataset auditável por quem não escreveu.

## O modelo

### Nó: micro-tópico

| Campo | Tipo | Papel |
|---|---|---|
| `id` | `string` | Identificador estável, padrão `mt_<CODIGO>_<nn>` |
| `tipo` | `TipoTopico` | `CONCEITUAL`, `PROCEDIMENTAL`, `REPRESENTACIONAL`, `LINGUAGEM` ou `META` |
| `disciplina` | `string` | Código da matéria, o mesmo de `curriculum.ts` |
| `periodo` | `number` | Período do curso, com 9 representando optativa |
| `unidade` | `string` | Agrupador didático dentro da disciplina |
| `nome` / `descricao` | `string` | O conceito e o que ele é, em uma frase densa |
| `ordem` | `number` | Posição na sequência didática do professor |
| `centralidade` | `number` | Derivada do grafo, nunca escrita à mão |
| `evidencia` | `string[]` | Critérios observáveis de domínio |
| `checagem` | `string` | Pergunta em linguagem natural que verifica o domínio |
| `avaliacoes` | `string[]` | Provas em que o professor declarou cobrar o assunto |
| `ementaPPC` | `string[]` | Trechos da ementa oficial que cobrem o tópico |
| `fonte` | `string` | Arquivo do repositório de onde o tópico foi derivado |

O critério de granularidade é a pergunta de checagem: se ela não cabe em uma frase, o tópico é
grande demais e o que você tem é uma `unidade`.

### Aresta: dependência

| Campo | Valores | Papel |
|---|---|---|
| `topicoId` / `prerequisitoId` | `string` | O tópico que depende e o que precisa vir antes |
| `forca` | `hard`, `soft` | `hard`: sem o pré-requisito o conceito é incompreensível. `soft`: ajuda e dá contexto, mas o conceito se sustenta |
| `razao` | `string` | Uma linha dizendo por que o conceito não fecha sem o outro |
| `origem` | `texto`, `ppc`, `inferido` | Procedência da afirmação |
| `trecho` | `string` | Citação verbatim que sustenta a aresta, obrigatória quando `origem` é `texto` |
| `escopo` | `interna`, `cruzada` | Dentro da disciplina ou entre disciplinas |

A distinção `hard`/`soft` é o que impede a trilha de virar uma lista de tudo que já foi visto no
curso: `soft` entra no grafo e no desenho, mas é a `hard` que responde "sem isto você não passa
daqui". No layout, aresta `hard` puxa mais forte que `soft` (`grafoTrilha.ts`).

O `trecho` existe por um motivo específico, e é a única obrigação condicional do schema: ele deixa
de ser opcional quando a `origem` é `texto`. Ver "Invariantes" abaixo e
`.skills/taxonomy_creation.md`.

### Disciplina

`disciplinas.json` guarda `codigo`, `codigoPPC` (às vezes diferente do usado no repositório),
`nome`, `periodo`, `eixo`, `slug`, `cor`, `ementa` e `unidadesEmenta`. O `slug` é o que amarra o
grafo de volta à página da matéria.

## Cobertura hoje

Snapshot de `src/data/taxonomia/manifest.json` (`versao: v0.1-rascunho`). O manifest é a fonte
das contagens: qualquer número citado fora dele envelhece sozinho.

| Medida | Valor |
|---|---|
| Micro-tópicos | 462 |
| Dependências | 640, das quais 392 `hard` |
| Dependências cruzadas entre disciplinas | 35 |
| Disciplinas com taxonomia | 9 de 64 na grade |
| Tópicos por tipo | 234 conceituais, 124 procedimentais, 50 de linguagem, 39 representacionais, 15 meta |

Por disciplina: ALPG 45, LPGM 60, ESTD 60, METC 45, APBD 60, TABD 45, PDSW 45, CORG 60, MKCE 42.

No dado atual, 607 das 640 arestas carregam citação verbatim, e as 33 restantes são as
`inferido`. Medindo o grafo: 41 conceitos não dependem de nada (os pontos de partida) e a cadeia
de pré-requisitos mais longa tem 16 níveis. O conceito mais central é
`mt_LPGM_11` ("Variável, identificador e atribuição"), que destrava 110 dos 462 tópicos.

## Invariantes que o validador garante

`npm run taxonomia:validar` roda `scripts/taxonomia/validar.mjs`, sem nenhuma dependência, e sai
com código diferente de zero em qualquer falha. Ele separa **erro** (bloqueia) de **aviso**
(registra e segue).

| Invariante | Erro se |
|---|---|
| Contagens declaradas | `totalTopicos`, `totalArestas` ou `manifest.contagens` divergem do arquivo |
| Formato do id | fora de `mt_<COD>_<nn>`, duplicado, ou com prefixo que não bate com a disciplina |
| Integridade referencial | ponta de aresta aponta para tópico inexistente, ou aresta duplicada, ou auto-aresta |
| Vocabulário fechado | `tipo`, `forca` ou `origem` fora dos valores previstos |
| Aciclicidade | existe ciclo A antes de B antes de A (o relatório imprime o caminho) |
| Coerência de ordem | dentro da disciplina o pré-requisito tem `ordem` maior ou igual à do dependente |
| Coerência de período | pré-requisito vem de período posterior, ou optativa é pré-requisito de obrigatória |
| **Regra da prova** | `origem: "texto"` sem `trecho` com pelo menos 10 caracteres |
| Padrão de escrita | travessão em `nome`, `descricao` ou `checagem` |
| Checksums | `bytes` ou `sha256` do `manifest.json` divergem do arquivo real |

Fica em aviso: tópico sem `evidencia`, tópico sem `checagem` e tópico sem nenhuma aresta.

**Por que a regra da prova é erro e não aviso.** O formato foi inspirado na
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy), que tem 3.221 arestas sem
nenhuma prova de origem, e as issues #5, #11 e #18 de lá são exatamente sobre ligação sem sentido
e nome que contradiz a descrição. Uma taxonomia sem procedência não é corrigível: ninguém
consegue distinguir a aresta certa da inventada depois do fato, e a única saída é confiar. Exigir
a citação no schema é o que impede o mesmo defeito aqui, e é a razão pela qual aresta errada é
tratada como pior que aresta ausente: a ausente encurta a trilha, a errada ensina na ordem
errada com a mesma aparência de correção.

## Como consumir do app

`src/data/taxonomia/index.ts` carrega os JSON e monta os índices na primeira consulta, memorizando
o resultado. Importar o módulo é barato; quem só quer saber se uma disciplina tem taxonomia não
paga o custo de montar o grafo inteiro.

| Função | Devolve |
|---|---|
| `getTopico(id)` | o `Topico`, ou `undefined` |
| `getTopicosPorDisciplina(codigo)` | os tópicos da matéria, na ordem da sequência didática |
| `temTaxonomia(codigo)` | se a disciplina já foi taxonomizada |
| `getDisciplinaTaxonomia(codigo)` | a ficha da disciplina, com ementa e cor |
| `getPrerequisitos(id)` | as arestas diretas de entrada, com `razao` e `trecho` |
| `getDesbloqueia(id)` | as arestas diretas de saída |
| `getTrilha(id)` | fecho transitivo dos pré-requisitos, ordenado por profundidade |
| `contaDesbloqueados(id)` | quantos tópicos dependem deste, direta ou indiretamente |
| `getMaisCentrais(limite)` | os tópicos que travam mais o curso |

```tsx
import { contaDesbloqueados, getPrerequisitos, getTopico, getTrilha } from '../data/taxonomia';

const topico = getTopico('mt_ESTD_33');            // Função hash, slot e funções aritméticas
const trilha = getTrilha('mt_ESTD_33');            // 7 conceitos, do ponto de partida até ele
const diretos = getPrerequisitos('mt_ESTD_33');    // 2 arestas, cada uma com razao e trecho
const travados = contaDesbloqueados('mt_ESTD_33'); // 10 conceitos dependem dele
```

`getTrilha` devolve a lista **na ordem de estudo**: ordena por profundidade no grafo, com período
e `ordem` como critério de desempate, então a trilha lida de cima para baixo é o roteiro. Ela
carrega um conjunto de visitados mesmo o grafo sendo acíclico, porque dado corrompido não deve
travar a interface.

### O caminho barato, para quem carrega de imediato

Os três JSON somam cerca de 730 kB (`manifest.json`), e por isso o dataset completo só entra no
bundle da rota `/trilha`, que é `lazy`. A página de matéria carrega de imediato e não pode pagar
por isso, então existe um segundo módulo, menor:

```tsx
import { getResumoTaxonomia } from '../data/taxonomia/resumo';

const resumo = getResumoTaxonomia('ESTD');
// { conceitos, dependenciasInternas, dependenciasDeFora, conceitoMaisCentral }
```

`resumo.ts` é **gerado**, não editado à mão, e traz quatro números por matéria. É o que o
`AtalhoTrilha` usa para aparecer só nas matérias que já têm taxonomia (`if (!resumo) return null`,
sem guarda em quem chama) e mandar o aluno para `/trilha?materia=<CODIGO>`.

A citação é o que separa este dataset de um palpite, e por isso ela chega à tela em vez de ficar
só no arquivo (`TrilhaPage.tsx`):

```tsx
<p className="text-text-muted">{d.razao}</p>
{d.trecho && (
  <p className="mt-1 border-l border-border pl-2 text-[11px] italic text-text-muted/85">
    “{d.trecho}”
  </p>
)}
```

## Como a visualização usa isso

A rota `/trilha` (`src/pages/TrilhaPage.tsx`, carregada com `lazy` em `App.tsx`) monta o grafo
inteiro num canvas 2D, sem lib de terceiros:

1. `src/lib/grafoTrilha.ts` recebe apenas `{ id, disciplina, periodo, ordem }` de cada nó e
   `{ topicoId, prerequisitoId, forca }` de cada aresta, e devolve posições. Não importa React,
   então o layout pode ser exercitado sozinho.
2. A forma de funil não é imposta: a altura vem da profundidade no grafo (ou do período, no outro
   eixo) e o raio acompanha a densidade daquela altura. Onde há muito conceito o grafo abre, onde
   há pouco ele afunila.
3. O ângulo vem da disciplina, o que mantém cada matéria como um lobo de cor legível. A cor sai
   dos tokens `--color-taxo-*` do design system, não do dataset.
4. Clicar num nó chama `fecharTrilha`, que devolve o fecho de pré-requisitos com a profundidade
   de cada um. A profundidade alimenta a animação: a luz sobe da raiz até o conceito escolhido,
   na ordem em que o aluno estudaria.
5. O painel lateral usa `getTrilha`, `getPrerequisitos` e `contaDesbloqueados`, e o tópico
   selecionado vive na query string (`?topico=mt_ESTD_33`), o que torna qualquer conceito
   linkável.
6. `?materia=<CODIGO>` abre o grafo focado em uma matéria, ocultando as outras pela legenda. As
   matérias que **fornecem** pré-requisitos cruzados a ela continuam visíveis, porque "o que vem
   antes desta matéria" não se responde escondendo justamente quem vem antes.

O layout é determinístico: a semente é o índice do nó, então o mesmo dataset desenha sempre o
mesmo grafo, e uma mudança no desenho significa mudança no dado.

## O que ainda falta

1. **55 das 64 matérias sem taxonomia.** O gargalo não é a taxonomia, é o conteúdo: só 9 matérias
   têm material em `src/content/`, e essas 9 já estão cobertas. Toda matéria nova aqui depende de
   `.skills/content_creation.md` acontecer primeiro.
2. **O validador não roda no CI.** `.github/workflows/ci.yml` roda `tsc`, `lint` e `build`. Um PR
   que edite o dataset e esqueça o `manifest.json` passa no CI e só quebra para quem rodar
   `npm run taxonomia:validar` na mão.
3. **Nada no repositório calcula os campos derivados.** `centralidade`, os checksums do manifest e
   o `resumo.ts` (que diz "GERADO, não editar à mão") saem de um montador que não está versionado
   aqui: hoje são passo manual, descrito em `.skills/taxonomy_creation.md`. Um
   `scripts/taxonomia/derivar.mjs` que gerasse os três fecharia a lacuna. Enquanto não existir,
   `resumo.ts` pode divergir do dataset sem que o validador perceba, porque ele não olha o resumo.
4. **`centralidade` documentada de um jeito e gravada de outro.** `tipos.ts` e o README do dataset
   dizem "fração dos tópicos que dependem deste", mas no dado ela está normalizada pelo maior
   alcance do grafo: o tópico mais central vale 1,0 e destrava 110 dos 462. Alinhar texto e dado.
5. **`fonte` com prefixo inconsistente.** 240 registros começam com `ifal/src/...` e 222 com
   `src/...`. Só o segundo resolve a partir da raiz do repositório.
6. **`disciplinas.json` só tem as taxonomizadas.** O README do dataset descreve o arquivo como
   "as 64 disciplinas da grade", e hoje ele tem 9. Ou o arquivo cresce, ou o texto muda.
7. **Cinco funções de consulta sem consumidor.** `temTaxonomia`, `getTopicosPorDisciplina`,
   `getDesbloqueia`, `getDisciplinaTaxonomia` e `getMaisCentrais` estão implementadas e nada as
   chama. Duas delas a `TrilhaPage` refaz na mão (`disciplinasTaxonomia.find` no lugar de
   `getDisciplinaTaxonomia`, e uma ordenação por `centralidade` no lugar de `getMaisCentrais`).
   Ou passam a ser usadas, ou saem.
8. **Quiz e taxonomia não se falam.** Nenhuma pergunta de `QUIZ_DATA` referencia `id` de tópico,
   então o caso de uso que abre este documento ("errei hashing na AV2") ainda depende de o aluno
   achar o conceito no grafo por conta própria. Ligar as duas pontas é o próximo ganho grande, e
   é o que transformaria o erro no quiz em trilha de recuperação.

## Procedência e licença

O formato (nomes de campo, micro-tópico com grafo de pré-requisito, `hard`/`soft`, manifest com
checksum, validador sem dependência) é inspirado na Marble Skill Taxonomy, © Generative Spark,
Inc., publicada sob ODbL 1.0 e CC BY-SA 4.0. **Nenhum registro de dado foi copiado de lá**, e isso
importa juridicamente: a ODbL tem share-alike sobre banco de dados derivado, e reimplementar um
formato não cria derivação. Se algum dia importarmos tópicos ou arestas, a obrigação passa a valer.

O conteúdo é derivado do material dos professores do IFAL, com o mesmo crédito que o resto do
repositório pratica, e a ementa vem do PPC, documento público institucional. O detalhamento fica
em `src/data/taxonomia/README.md`, inclusive a pendência de o repositório não ter arquivo
`LICENSE`.
