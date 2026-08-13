# Auditoria da grade curricular contra o PPC oficial

Conferência de `src/data/curriculum.ts` linha por linha contra o PPC do Bacharelado em Sistemas
de Informação do IFAL, o arquivo `.docs/bacharelado-em-sistemas-de-informacao.pdf` (131 páginas).
Auditoria e correção feitas em 12/08/2026, na branch `feat/taxonomia-e-trilha-de-aprendizado`.

O achado central é simples de enunciar e desconfortável de aceitar: **17 dos códigos da grade não
existem no PPC**. Foram inventados quando a grade foi digitada, provavelmente por abreviação
intuitiva do nome da matéria (Fundamentos de Sistemas de Informação virou `FUSI`, Programação Web
virou `PGWB`), e desde então convivem com os códigos oficiais sem que ninguém notasse. Além
disso, **três matérias do PPC nunca entraram na grade** e **um código estava duplicado** em duas
matérias diferentes.

Esta correção mexeu em um único arquivo de dados, `src/data/curriculum.ts`, e apenas no campo
`code` das linhas divergentes, mais três linhas novas. Nenhum `id`, `slug`, `name`, `period`,
`axis`, `hours` ou `hasContent` foi tocado, porque `slug` e `id` são chaves de roteamento e de
vínculo com o conteúdo publicado: mexer neles quebraria URLs vivas e a associação com as páginas
de matéria.

## As duas fontes dentro do PPC, e qual vence

O PPC descreve a matriz curricular duas vezes, e as duas versões não são idênticas:

- **Quadro 2** (páginas 23 a 26): a matriz oficial, com número sequencial, eixo, nome em caixa
  alta, carga horária em hora-aula, pré-requisito e carga em horas. É o que fecha os subtotais por
  período.
- **Seção 18, o ementário** (páginas 49 a 116): uma ficha por página, cada uma com `Código:`,
  `Carga Horária:`, `Período:` e a ementa completa. É a única fonte dos códigos, porque o Quadro 2
  não traz código nenhum.

Os códigos saíram das fichas, que é o único lugar do documento onde eles aparecem. Os nomes e as
cargas horárias foram conferidos contra o Quadro 2, que é a matriz que fecha os subtotais. Onde as
duas fontes discordam, a grade seguiu o Quadro 2 e está certa: isso está registrado adiante, na
seção do que não foi mexido, porque é exatamente ali que uma segunda auditoria apressada inventaria
achados.

## A aritmética que fecha

| Quantidade | Valor |
|---|---|
| Fichas no ementário do PPC (seção 18, páginas 49 a 116), uma por página, todas com `Código:` preenchido | **68** |
| Linhas na grade antes da correção | **65** |
| Matérias do PPC ausentes na grade (`ARQS`, `PDSI`, `GECO`) | **3** |
| Linhas na grade depois da correção | **68** |

Fecha nas duas direções, e isso é o que dá confiança no número: as 3 ausentes explicam a diferença
inteira, e **nenhuma linha da grade sobra**. Todas as 65 linhas antigas casam com uma ficha do
ementário. Não existe matéria na grade que o PPC não tenha, só o contrário.

Uma ressalva sobre o insumo, para quem for refazer a conta com extração automática: uma extração
ingênua das fichas devolve **67**, não 68. A que se perde é a de **Projeto Integrador (EAD)**, da
página 72, cujo código impresso é `PINT 1`, descartada por deduplicação de chave contra o `PINT` de
Propriedade Intelectual (página 103). É a mesma armadilha da seção da colisão, mais abaixo.

## 1. Os 17 códigos divergentes

Ordem da tabela igual à ordem das linhas no arquivo, para o revisor conferir o diff de cima a
baixo. A coluna "Ficha" é a página do PDF onde está a ficha do ementário que traz o código oficial.

| Matéria (nome na grade) | Antes | Depois | Ficha | Quadro 2 |
|---|---|---|---|---|
| Fundamentos de Sistemas de Informação | `FUSI` | `FNSI` | p. 49 | nº 1 |
| Fundamentos da Gestão Organizacional | `FGEO` | `FNGO` | p. 56 | nº 8 |
| Arquitetura e Organização de Computadores | `AOCP` | `ARQC` | p. 57 | nº 9 |
| Linguagem de Programação | `LPGM` | `LNPG` | p. 58 | nº 10 |
| Sociologia das Organizações | `SORG` | `SCOG` | p. 59 | nº 11 |
| Estatística Aplicada | `ETAP` | `ESTA` | p. 60 | nº 12 |
| Fundamentos de Banco de Dados | `FDBD` | `FNBD` | p. 61 | nº 13 |
| Interação Humano-Computador | `IHCC` | `INHC` | p. 65 | nº 17 |
| Fundamentos de Redes de Computadores | `FRDC` | `FNRC` | p. 67 | nº 19 |
| Programação Orientada a Objetos | `POOB` | `PROO` | p. 68 | nº 20 |
| Governança em Tecnologia da Informação | `GVTI` | `GOTI` | p. 70 | nº 23 |
| Programação Web | `PGWB` | `PWEB` | p. 73 | nº 26 |
| Gerência de Projeto | `GPJT` | `GEPJ` | p. 75 | nº 28 |
| Projeto Integrador em SI | `PISI` | `PJSI` | p. 77 | nº 31 |
| Gestão da Segurança da Informação | `GSEI` | `GESI` | p. 79 | nº 35 |
| Laboratório de Sistemas Operacionais | `LSOP` | `LSOR` | p. 113 | optativa (Figura 7, p. 34) |
| Ética e Sociedade | `ETSO` | `ETCA` | p. 106 | optativa (Figura 5, p. 33) |

Em todas as 17, a identidade da matéria foi confirmada por três coincidências simultâneas na
ficha: nome, período e carga horária. Nas duas últimas, que são optativas e por isso não têm
número no Quadro 2, a ficha diz "Período: Optativa Infraestrutura" (p. 113) e "Período: Optativa
Humanística" (p. 106), e as figuras de itinerário confirmam.

### Por que essas 17 são invenção local, e não erro de leitura do PDF

O teste é direto: **nenhum dos 17 códigos antigos aparece em lugar nenhum do PDF**. Buscando cada
um no texto extraído das 131 páginas, `FUSI`, `FGEO`, `AOCP`, `LPGM`, `SORG`, `FDBD`, `IHCC`,
`POOB`, `PGWB`, `GPJT`, `GSEI`, `FRDC`, `GVTI`, `LSOP`, `PISI` e `ETSO` dão zero ocorrências.
`ETAP` dá uma única, e não é código: é o título "AS ETAPAS DO PENSAMENTO SOCIOLÓGICO" na
bibliografia da página 59.

Há duas corroborações independentes dentro do próprio repositório, e elas valem mais que a busca
no PDF porque foram produzidas por outras pessoas, sem relação com esta auditoria:

1. **Os nomes das turmas do Classroom**, mapeados em `.docs/mapa-turmas-materias.md`, foram
   batizados pelos professores com os códigos **oficiais**: `fnsi-2022-1-bsi` (e não `fusi`),
   `arqc-turma-2022-2`, `lnpg-turma-2022-2`, `fnbd-2023-1-bsi`, `fnrc-turma-2023-2`,
   `proo-bsi-4p-2023-2`, `pweb2-bsi-2024-1`, `etecsoc-2023-2`. Oito acertos em oito.
2. **O conteúdo já publicado neste repositório também usa o código oficial.** O cabeçalho do guia
   de Linguagem de Programação, em `src/content/linguagem-programacao/LPGMContent.tsx:14`, imprime
   `2º período · 80h · LNPG`, e o resumo em `data.ts:23` abre com "GUIA DE LINGUAGEM DE PROGRAMAÇÃO
   (LNPG)". Ou seja: até esta correção, o card do catálogo dizia `LPGM` e a página da própria
   matéria dizia `LNPG`. A incoerência era visível na interface, para qualquer aluno.

O dataset da taxonomia já reconhecia parte do problema por conta própria:
`src/data/taxonomia/disciplinas.json` carrega um campo `codigoPPC` e nele `LPGM` aponta para
`LNPG`. Esse campo continua correto e não precisou de ajuste.

## 2. A colisão do código `PINT`

Antes desta correção, o valor `PINT` aparecia em **duas** linhas do arquivo:

```ts
{ id: 'pint',   name: 'Projeto Integrador',      slug: 'projeto-integrador',      code: 'PINT', period: 5,          axis: 'EXT', hours: 40, ... }
{ id: 'prtint', name: 'Propriedade Intelectual', slug: 'propriedade-intelectual', code: 'PINT', period: 'optativa', axis: 'FHS', hours: 40, ... }
```

O PPC tem as duas matérias, com códigos diferentes:

- **Propriedade Intelectual (EAD)**, ficha da página 103: `Código: PINT`. Está certa e **não foi
  tocada**.
- **Projeto Integrador (EAD)**, ficha da página 72: `Código: PINT 1`, `Carga Horária: 40 Horas`,
  `Período: 5º`, `Carga Horária Semanal: 02h`. É a linha do 5º período, e o `code` dela passou a
  ser `'PINT 1'`.

O numeral não é ruído de extração. Conferido na imagem renderizada da página 72, o `1` está em
negrito, no mesmo corpo e na mesma linha de base de `PINT`, e não existe nota de rodapé em nenhum
lugar daquela página que ele pudesse estar referenciando. É o que está impresso. Ainda assim é
estranho o suficiente para virar pergunta à coordenação, e está na lista do fim deste documento.

**Atenção para não confundir dois componentes parecidos.** O `PJSI` da tabela anterior é o
**Projeto Integrador em Sistemas de Informação** do 6º período (80 hora-aula, ficha da página 77,
Quadro 2 nº 31), a linha de `id: 'pisi'`. O `PINT 1` é o **Projeto Integrador** do 5º período (40
hora-aula, ficha da página 72, Quadro 2 nº 25). São matérias distintas, e a seção 9.9 do PPC
(página 36) diz isso com todas as letras, ao tratar da curricularização da extensão: os componentes
"Projeto Integrador (33,33 horas na modalidade semipresencial)" e "Projeto Integrador em Sistemas
de Informação (66,66 horas na modalidade presencial)" atendem aos requisitos. Duas matérias, dois
códigos.

### A colisão não quebrava nada hoje, e é justamente por isso que ela é perigosa

Vale ser honesto sobre a severidade, senão o revisor perde tempo procurando um bug que não existe.
No estado atual da árvore, `code` tem quatro consumidores, e **os quatro são de exibição**:

| Local | O que faz | Quebrava? |
|---|---|---|
| `src/components/ui/SubjectCatalog.tsx:19` | monta o subtítulo do card, `${period} · ${hours}h · ${code}` | Não. Só ambiguidade visual: um card dizia "5º Período · 40h · PINT" e outro "Optativa · 40h · PINT". A key da lista é `subject.id`, que é único (`pint` contra `prtint`) |
| `src/pages/SubjectPage.tsx:53` | imprime o código no cabeçalho da matéria | Não. A página resolve por slug, via `getSubjectBySlug`, e cada slug é único |
| `src/pages/SubjectPage.tsx:89` | linha "Código" da tabela de metadados | Não. Mesmo motivo |
| `src/data/updates.ts:119` | `codigo: subject?.code ?? entry.materiaCodigo` | Não. O `subject` vem de `getSubjectBySlug(entry.materiaSlug)`, o agrupamento é por slug, e nenhuma entrada de `UPDATES` aponta para essas duas matérias |

Nenhum teste, lint ou schema exige unicidade de `code`, então o CI passava verde com a duplicata.

A armadilha é o próximo consumidor. Uma busca por código escrita com
`subjects.find(s => s.code === algumCodigo)` devolve a **primeira** ocorrência, então `PINT`
resolveria sempre para Projeto Integrador e Propriedade Intelectual ficaria inalcançável por
código, silenciosamente e sem erro nenhum. Esta branch já chegou perto disso uma vez: a
`TrilhaPage` resolvia a matéria por código, e o commit `b4772da` ("resolve a matéria pelo slug, não
pelo código duplicado") trocou a resolução para slug precisamente para fugir da duplicata. A
correção de agora ataca a causa em vez do sintoma, e a mesma armadilha reapareceu na extração das
fichas do PPC, que perdeu a ficha da página 72 por deduplicar `PINT 1` contra `PINT`. Um valor
duplicado que "não quebra nada" já custou duas soluções de contorno.

## 3. As três matérias ausentes

As três são optativas do eixo de formação flexível (`FPF`), coerente com as outras 24 optativas de
itinerário e com o Quadro 3 (página 27), que reserva 400 hora-aula de optativas ao FPF. Todas
entraram com `hasContent: false`, porque não há conteúdo escrito para elas.

Cada uma tem **prova dupla e independente**: a ficha do ementário, que dá código, carga horária e
itinerário, e a figura do itinerário, que é um desenho da lista de optativas daquele eixo e a
nomeia com a carga horária ao lado.

| Código | Nome | C.H. | Itinerário | Ficha do ementário | Figura do itinerário |
|---|---|---|---|---|---|
| `ARQS` | Arquitetura de Software | 80h | Desenvolvimento de Software | p. 86: "Período: Optativa Desenvolvimento", "Carga Horária: 80 Horas", 04h semanais | Figura 6 (p. 34) desenha "Arquitetura de Software (80h)" dentro do quadro "Itinerário Desenvolvimento de Software" |
| `PDSI` | Processamento Digital de Sinais e Imagens | 80h | Desenvolvimento de Software | p. 91: "Processamento Digital de Sinais e Imagens", "Período: Optativa Desenvolvimento", 80 Horas | Figura 6 (p. 34) desenha "Processamento Digital de Sinais e Imagens (80h)" |
| `GECO` | Gestão do Conhecimento | 80h | Gestão de TI | p. 100: "Gestão do Conhecimento", "Período: Optativa Gestão de TI", 80h | Figura 8 (p. 35) desenha "Gestão do Conhecimento (80h)" no quadro "Itinerário Gestão de Tecnologia da Informação" |

As três linhas novas foram acrescentadas ao fim do bloco do seu itinerário, seguindo o precedente
de `AGIL`, que também foi um acréscimo posterior ao bloco de Desenvolvimento.

### Por que essas três passaram batido

Não foi descuido de quem digitou a grade, foi uma peculiaridade do layout do PDF. Nas fichas de
`GECO` (p. 100), `ETCA` (p. 106) e `LIBR` (p. 105), o nome do componente está na **linha de baixo**
do rótulo "Componente Curricular:", e não ao lado dele. Qualquer leitura que espere nome e rótulo
na mesma linha simplesmente não vê a matéria. Foi esse o mecanismo que fez o PR #38 afirmar, de
boa-fé, que "o código `ETSO` foi criado aqui por não constar no PPC". Consta: página 106, ficha
completa, `Código: ETCA`, 40h, "Período: Optativa Humanística", com ementa de oito unidades, e
desenhada na Figura 5 (p. 33).

### Contagem por itinerário, antes e depois

| Itinerário | Fichas no PPC | O que a figura do PPC diz | Grade antes | Grade depois |
|---|---|---|---|---|
| Desenvolvimento de Software | 11 | Figura 6 diz "10 (dez)" e desenha 10 | 9 | 11 |
| Infraestrutura de Comunicação | 8 | Figura 7 diz "08 (oito)" e desenha 8 | 8 | 8 |
| Gestão de TI | 6 | Figura 8 diz "06 (seis)" e desenha 6 | 5 | 6 |
| Humanística e suplementar | 6 | Figura 5 desenha 6 | 6 | 6 |

O descasamento de 11 contra 10 em Desenvolvimento é **do PPC**, não da grade. A Figura 6 desenha
exatamente as 10 fichas em ordem alfabética, de Arquitetura de Software a Sistemas Inteligentes, e
não desenha **Metodologias Ágeis**, cuja ficha (p. 96, `AGIL`) foi anexada no fim do bloco, fora da
ordem alfabética, como se tivesse sido incluída depois de o desenho estar pronto. `AGIL` está na
grade e continua justificada pela própria ficha. Nada a fazer aqui.

## 4. O que não foi mexido, e por quê

Esta seção existe para poupar a próxima auditoria. Cada item abaixo **parece** divergência e não é,
ou é divergência cuja correção não cabia nesta mudança.

**Carga horária, período e eixo: zero divergências.** As 65 linhas antigas foram conferidas uma a
uma contra o Quadro 2 (páginas 23 a 26). Nenhuma diferença de `hours`, `period` ou `axis`. As 40
hora-aula batem em INTW (nº 3), GPTI (nº 21), Projeto Integrador (nº 25), PPAP (nº 36), TOSI
(nº 38), PSIF (nº 41), TSAS (nº 42) e nas 6 optativas humanísticas; 80 hora-aula em todas as
demais obrigatórias e nas 24 optativas do eixo flexível.

**Dois nomes divergem do PPC e ficaram como estão**, porque a tarefa era restrita ao campo `code` e
porque `name` alimenta a interface e a comunicação com os alunos, o que merece decisão do
mantenedor:

| Nome na grade | Nome no PPC | Fonte |
|---|---|---|
| Laboratório de Sistemas Operacionais | Laboratório de Sistemas Operacionais **de Redes** | Ficha p. 113, com a continuação "de Redes" na segunda linha da célula; a Figura 7 (p. 34) escreve "Laboratório de Sistemas Operacionais e Redes (80h)" |
| Ética e Sociedade | Ética, **Tecnologia** e Sociedade | Ficha p. 106; a Figura 5 (p. 33) desenha "Ética, Tecnologia e Sociedade (40h)"; a turma coletada chama-se `etecsoc-2023-2` |

**PPAP: o PPC contradiz a si mesmo, e a grade seguiu o Quadro 2.** Projeto de Pesquisa Aplicada tem
40 hora-aula no Quadro 2 (nº 36, p. 25) e 80h na ficha (p. 80). A grade tem 40, que é o valor que
fecha o subtotal do 7º período (400 hora-aula). **Não mexer.** Quem comparar a grade só contra as
fichas vai enxergar um erro que não existe.

**Gerência de Projeto está marcada como `OPT` no Quadro 2.** A linha 28 do Quadro 2 (p. 25) traz
`FPG | GERÊNCIA DE PROJETO | 80 | - | OPT | 66,66`. Mas a ficha (p. 75) diz "Período: 5", o
subtotal do 5º período (440 hora-aula) só fecha somando as 80h dela, e ela não aparece em nenhuma
das Figuras 5 a 8, que listam as optativas. É quase certamente erro de digitação do PPC, e a grade,
que a trata como obrigatória do 5º período, está certa.

**Seis nomes do ementário divergem do Quadro 2, e a grade seguiu o Quadro 2.** Em todos os seis a
grade está certa: "Tópicos Avançados **de** Banco de Dados" (Quadro 2 nº 24) contra "em Banco de
Dados" na ficha (p. 71); "Gerência de **Projeto**" (nº 28) contra "Projetos" (p. 75); "Gestão **da**
Segurança da Informação" (nº 35) contra "de Segurança" (p. 79); "Pesquisa em **Sistemas** de
Informação" (nº 41) contra "Sistema" (p. 83); "**Sistemas** de Apoio à Decisão" (nº 43) contra
"Sistema" (p. 85); "Introdução **às** Tecnologias Web" (nº 3) contra "a Tecnologias Web" (p. 51).

**A grade não modela a modalidade EAD.** O PPC marca cinco componentes como semipresenciais: INTW
(Quadro 2 nº 3 e ficha p. 51), Projeto Integrador (nº 25, p. 72), Propriedade Intelectual (p. 103),
Negócios Sociais (p. 104) e Educação Financeira (p. 107), além do slot "OPTATIVA SUPLEMENTAR (EAD)"
(nº 30). A interface `Subject` não tem campo para isso. É lacuna de modelagem, não erro de dado.

**`.docs/mapa-turmas-materias.md` continua com os códigos antigos.** As duas tabelas de lá e a nota
que afirma que `ETSO` não consta no PPC precisam de alinhamento. Ficou fora desta mudança, que se
limitou a `curriculum.ts`, e é um acerto de uma passada só.

## 5. Perguntas para a coordenação, não para o código

1. O numeral em `PINT 1` (ficha da página 72) é mesmo parte do código? Se for erro de digitação do
   PPC, o valor correto provavelmente é outro código de quatro letras, e a linha do Projeto
   Integrador do 5º período muda de novo. Se o espaço no meio incomodar em algum consumo futuro,
   `PINT1` é o desvio mínimo, mas isso é decisão de quem mantém o PPC.
2. Gerência de Projeto é obrigatória do 5º período (como diz a ficha e como o subtotal exige) ou
   optativa (como diz a coluna do Quadro 2, nº 28)?
3. Projeto de Pesquisa Aplicada tem 40 hora-aula (Quadro 2, nº 36) ou 80h (ficha, p. 80)?

## 6. Validação executada

Rodado depois da edição, tudo verde:

| Verificação | Resultado |
|---|---|
| Contagem de matérias | **68** |
| Códigos duplicados | **nenhum** (`PINT` e `PINT 1` são strings distintas) |
| `id` duplicados | **nenhum** |
| `npm run lint` | exit 0 |
| `npm run build` (`tsc -b && vite build`) | exit 0 |

O diff em `src/data/curriculum.ts` é de 21 inserções e 18 remoções: 18 linhas com o `code` trocado,
que são as 17 da tabela da seção 1 mais o `PINT 1` da seção 2, e 3 linhas novas da seção 3. A
verificação de que nada além de `code` mudou foi feita mecanicamente, e não a olho: cada uma das 18
linhas removidas tem uma linha adicionada idêntica em `id`, `name`, `slug`, `period`, `axis`,
`hours`, `optativeCategory` e `hasContent`, diferindo só no `code`. As 3 restantes são as linhas
novas.

**Cuidado com um gate que engana neste repositório:** `npx tsc --noEmit` retorna exit 0 sem
verificar nada. O `tsconfig.json` da raiz tem `"files": []` e só carrega `references`, então esse
comando compila **zero** arquivos de `src/` (confirmado com `--listFiles`). O typecheck que
realmente vale é o `tsc -b` que roda dentro de `npm run build`, e é esse que está registrado acima.
