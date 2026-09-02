# Ementas oficiais do PPC

`ementas.json` é **gerado**. Não edite à mão.

```bash
npm run ppc:bibliografia   # extrai a bibliografia do PDF (precisa do pdftotext)
npm run ppc:links          # fila de obras que ainda não têm link
npm run ppc:montar         # casa fichas + grade + links e escreve ementas.json
```

## Os links da bibliografia

Cada referência pode carregar um `url` e um `tipoLink`, e a interface mostra o
tipo como etiqueta ("texto livre", "biblioteca IFAL", "catálogo", "onde
comprar") — porque as quatro coisas são diferentes para quem clica, e sem dizer
qual é todo link parece prometer o texto completo.

Os links vivem em `scripts/ppc/links_bibliografia.json`, que é a **única parte
da pipeline editada à mão**. A chave é a `chaveDaObra` (ver
`scripts/ppc/chave-obra.mjs`), derivada do texto da referência e estável contra
as variações de caixa, acento e pontuação que o PPC introduz na mesma obra
entre fichas.

Duas regras que o arquivo registra e o gerador respeita:

- **`url: null` é decisão, não pendência.** Significa "pesquisei e não há
  destino legítimo para esta" — a obra sai da fila do `ppc:links` e a `nota`
  explica o porquê. Quatro entradas estão assim hoje, todas de URL que o
  próprio PPC publica e que morreu.
- **Não se indexa pirataria.** Cópia de livro de editora hospedada sem
  autorização (PDF em blog, drive, repositório de terceiros) não entra, mesmo
  quando é o primeiro resultado da busca. Onde não há acesso livre legítimo,
  vale catálogo ou compra. O material é público e institucional.

### Por que a URL dentro do texto não é clicável

Onze referências trazem o endereço impresso na própria ficha, e ele **fica no
texto sem virar link**. A extração do PDF corrompeu vários: hífen de quebra de
linha comido (`inovadoras-emextensao`), espaços injetados no meio do endereço
(`http://www. assistiva. com. br`), sufixo `[Links]`. E dos que estão íntegros,
conferindo um por um: `bengalalegal.com` devolve 500 com certificado TLS
inválido, `sisp.gov.br` e `pessoacomdeficiencia.gov.br` devolvem 404, e
`assistiva.org.br` expirou e hoje redireciona para um site pessoal sem relação
com o assunto — esse último é pior que link morto. O link confiável é sempre o
da etiqueta, conferido à mão.

O consumo é pelo `index.ts`: `getEmentaPPC('FDBD')`. A chave é o código **local**
da matéria, o mesmo de `curriculum.ts` e o mesmo que as páginas de matéria já
passam para `SubjectContentLayout`. O código oficial do PPC vai dentro do
registro, em `codigoPPC`, porque em 17 matérias os dois divergem — ver
`.docs/AUDITORIA-GRADE-PPC.md`.

## De onde vem cada campo

| Campo | Fonte | Por quê |
|---|---|---|
| `ementa`, `unidades`, `preRequisito` | ficha do ementário (seção 18 do PPC) | é o texto normativo |
| `nome`, `periodo`, `cargaHoraria` | `src/data/curriculum.ts` | as fichas trazem nome truncado pela quebra de linha do PDF ("Fundamentos de Sistemas de") e três vêm vazias; a grade foi conferida contra o Quadro 2, que fecha os subtotais |
| `bibliografiaBasica`, `bibliografiaComplementar` | ficha, extraída do PDF | a extração antiga só pegou a ementa |
| `url`, `tipoLink` de cada referência | `scripts/ppc/links_bibliografia.json`, curado à mão | ver a seção dos links |

## Cobertura

64 das 65 linhas da grade. Fica de fora só o **Projeto Integrador do 5º
período**: o PPC imprime dois `PINT` (Projeto Integrador na p. 72, como
"PINT 1", e Propriedade Intelectual na p. 103) e a deduplicação por chave da
extração manteve apenas o segundo.

Das 27 páginas de matéria publicadas, **todas as 27** exibem o bloco. DevOps
aparece pela bibliografia: a ficha dele (p. 116) tem as referências mas a
ementa saiu vazia da extração.

## Os defeitos do PPC que o extrator contorna

Estes não são bugs do script — são irregularidades do documento oficial, e cada
uma exigiu tratamento. Se a extração for refeita, é aqui que ela quebra.

| Ficha | O que o PPC faz de errado | Tratamento |
|---|---|---|
| ALPG p.50, INTW p.51, LNPG p.58, PDSW p.78, GCMS | esquece o rótulo "Bibliografia Complementar": as duas listas ficam sob a básica, separadas só por linha vazia | divide no único intervalo em branco com bullets dos dois lados (linhas vazias consecutivas contam como um intervalo — em PDSW são duas) |
| IDCO p.112 | digita o rótulo da complementar como item da lista: `● Bibliografia Complementar` | os regexes de rótulo toleram bullet à frente |
| DEVO p.116 | não imprime rótulo nenhum, e a ementa também sai vazia | tudo entra como básica, com a flag `bibliografiaSemRotulo`; a interface então rotula só "Bibliografia", sem prometer a distinção que o documento não faz |
| TSAS p.84 | bloco sem bullet nenhum, todo rente à esquerda, com entradas terminando em URL — o ponto do endereço é indistinguível do ponto que fecha a referência | transcrito à mão em `TRANSCRITAS`, com a flag `transcritaAMao`. Duas imperfeições do original são preservadas de propósito: a entrada `GARCIA/GALVÃO FILHO` está truncada em "São Paulo:" e a da `SARTORETTO` tem a URL quebrada com espaços |
| TOSI p.82 | imprime `-` no lugar das duas listas | fica sem bibliografia, corretamente |
| INTW, INGT, DEVO | repetem a mesma obra dentro de um bloco | deduplicado, mantendo a ordem da primeira aparição |

As `unidades` também são refeitas a partir da ementa em vez de aproveitar
`unidadesEmenta` do extrator antigo: aquela lista deixava frases grudadas em 12
matérias (APBD, APSI, PGWB entre elas) e não tratava as fichas que separam
tópicos por ponto e vírgula (SINT, GCPT). A quebra ignora o que está entre
parênteses, senão as listas pontuadas das fichas de redes seriam picadas no
meio.

## Custo no bundle

O JSON entra no chunk compartilhado `sections`, que toda página de matéria
carrega: ~97 kB minificado, **~27 kB em gzip** — para as 64 ementas e as 518
referências. Se crescer muito mais, vale quebrar por matéria e carregar sob
demanda.
