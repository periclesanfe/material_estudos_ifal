# Estratégia de adoção do Duolingo no material_estudos_ifal

Fecha a pesquisa dos 5 eixos e os 2 protótipos. Escreve a decisão, a ordem dos commits e
o que fica de fora.

Destino real: `github.com/periclesanfe/material_estudos_ifal`, mantido por Péricles Feitoza,
publicado em GitHub Pages sob `/material_estudos_ifal/`. A fork do Falcão é
`github.com/Falkzera/material_estudos_ifal`.

Esta pasta está no `.gitignore` (commit `f96927b`). Nada daqui vai para o PR. O que o
mantenedor precisa ler tem que ser repetido no corpo de cada PR.

---

## 1. A decisão: cenário A

**Duolingo manda na FORMA e na COREOGRAFIA. O projeto manda na COR e na LETRA.**

Vem do Duolingo: a física do pressável (labio de 4px, blur zero, afundar exatamente a
espessura do labio, desabilitado permanentemente afundado), a assimetria pedagógica do
feedback (acerto 300 ms que trava, erro 800 ms que esfria a partir de 62%), o anel de
seleção interno em vez de halo externo, a regra da tripla semântica (fundo pálido + borda +
texto), e a disciplina de grade de 4px.

Fica do projeto: a paleta, as fontes, o tema escuro por padrão, os três temas
(escuro, `html[data-theme='light']`, `html[data-clean-mode='true']`), o corpo em 16px a 17px,
a revelação por `clip-path` e o teto de 350 ms para movimento.

### Por quê, em cinco razões medidas

**1. É o único cenário ortogonal à briga que já existe no repositório.** A camada de cor e
de letra é exatamente a que está em disputa: `upstream/main` usa Playfair Display + Source
Sans 3 + roxo `#6c63ff`; a branch `refactor/design-system-e-ux` (15 commits, nenhum enviado)
troca por Fraunces + Plus Jakarta Sans + indigo `#6366f1`. Um terceiro sistema de cor e
letra entrando por cima disso é o pior momento possível. A forma não briga com nenhum dos
dois, porque a receita do labio lê só `--color-accent` e `--color-border`, tokens que
existem nas duas bases.

**2. Custa zero quilobyte.** Nenhuma fonte nova (seção 6), nenhuma dependência nova. O eixo
de movimento do Duolingo usa palavra-chave nativa do CSS em 97% dos 325 usos medidos, então
a coreografia é CSS puro. O esqueleto usa `--animate-pulse-soft`, que já está declarado em
`src/index.css:39` do `upstream/main` com `@keyframes pulse-soft` em `:140`, e que **nenhum
arquivo do repositório usa**. Num site estático de faculdade onde o `index-*.js` tem 223 kB
e o chunk da `/trilha` tem 618 kB, "não cresce o bundle" é o argumento mais forte que existe.

**3. Cada etapa vira um defeito com número, não um gosto.** O botão primário reprova WCAG AA
hoje nas duas bases: branco sobre `#6c63ff` dá 4,32:1; `#12100c` sobre `#6366f1` dá 4,25:1;
`#fffefb` sobre `#6366f1` dá 4,43:1. O mínimo é 4,5:1, e rótulo de botão a 15px/700 não é
"texto grande" pela WCAG (large = 18,66px bold), logo não há isenção. No tema claro da branch
o texto de acerto do quiz (`text-accent5`, `#22c55e` sobre o cartão `#f6f7fa`) dá **2,13:1**.
Mantenedor recusa gosto; raramente recusa aritmética com print do antes e do depois.

**4. O cenário C é impossível como prometido.** Sem Feather Bold e sem Duolingo Sans não se
adota a identidade, só o formato. E herda os buracos do Duolingo: zero esqueleto, zero
spinner, zero `@media (prefers-reduced-motion)`, zero token de duração e de espaçamento, zero
grade de ícone, e nenhum valor de tema escuro conhecido para quatro fundos semânticos
(sea-sponge, walking-fish, iguana, canary). Cada buraco desses vira decisão local sem
upstream para consultar. Em repositório público que carrega o nome de uma instituição
federal, copiar paleta + forma + letra de uma marca também é o único cenário que é risco de
trade dress.

**5. O cenário B precisa de uma política, e não existe quem a sustente.** B só funciona se a
fronteira for de rota ou de tela cheia, mecanizada em escopo de CSS ou em regra de lint. O
`CODEOWNERS` do repositório cobre `/src/content/`, `/src/components/`, `/src/data/`,
`/.github/` e os arquivos de config da raiz, todos para `@periclesanfe`. Não existe dono de
design, e o histórico tem 7 contribuidores com rotação (periclesanfe 84 commits, Isaque 9,
quokequack 6, Marina Medeiros 6, Lucas Matheus 3, mais dois com 1). Política não mecanizada
decai em um semestre, e B decaído é A com passos extras e dois conjuntos de componentes para
manter.

### O que me faria mudar de ideia

Três gatilhos concretos, não "depende":

- **Para B:** se o projeto ganhar um modo de prática como rota própria de tela cheia
  (por exemplo `/praticar`, o `ExamMode.tsx` promovido a rota com o chrome saindo), E o
  mantenedor aceitar a fronteira mecânica (atributo `data-superficie="pratica"` no nó raiz da
  rota mais uma regra de lint que proíbe token do vocabulário Duolingo fora dela). Sem os
  dois, não. Botão Duolingo dentro de cartão do projeto a 8px de distância é exatamente o
  frankenstein a evitar.
- **Para C corrigido:** se o mantenedor pedir explicitamente "quero que pareça o Duolingo".
  Aí entra com Nunito + Baloo 2 (OFL) e com as correções de AA da seção 9, nunca o C fiel.
- **Para abortar a etapa 5:** se o print do antes e depois do labio nos dois temas mostrar o
  que o protótipo 1 mediu, que no escuro a faixa de luminância entre o chão `#0f1117` e uma
  face neutra é 0,016 contra 0,296 numa face saturada, cerca de 18x menos. O labio não
  desaparece no escuro, fica fraco. Se ficar fraco demais no print, a etapa 5 morre e a
  adoção termina na etapa 4, que já é a parte que vale.

---

## 2. O contrato: o que toda etapa pode ler

Nenhuma etapa escreve hex em corpo de componente. Toda etapa lê apenas nomes que existem
em `upstream/main` **e** na branch, o que é o que faz a sequência sobreviver a qualquer das
duas bases:

- Cor: `--color-accent`, `--color-border`, `--color-border-hover`, `--color-card`,
  `--color-card-hover`, `--color-bg`, `--color-text`, `--color-text-muted`,
  `--color-success`, `--color-error`, `--color-warning`, `--color-accent2`, `--color-accent5`
- Animação: `--animate-fade-in`, `--animate-fade-up`, `--animate-spin`, `--animate-pulse-soft`
- Classe: `.study-surface`, `.btn-primary`, `.btn-secondary`, `.page-wrap`, `.content-stack`,
  `.reading-measure`, `.glass`, `.study-pill`, `.concept-card`, `.kahoot-answer-button`

**As duas únicas exceções, e como fechá-las.** Se a base for `upstream/main`, dois nomes que
o `Skeleton.tsx` do protótipo 2 usa não existem lá:

| Uso no protótipo | Onde | Em `upstream/main` |
|---|---|---|
| `border-rule` | `src/components/ui/Skeleton.tsx:282` | trocar por `border-border/60` |
| `var(--radius-md)`, `var(--radius-full)` | `Skeleton.tsx:99,184,304,308` | trocar por `10px` e `9999px` |

Cuidado que custa caro se passar batido: `@theme { --radius-lg: 16px }` no Tailwind 4
**redefine a utilitária** `rounded-lg`. Na branch `rounded-lg` vale 16px; em `upstream/main`
vale o padrão do Tailwind, 8px. Portanto "declarar os tokens de raio" NÃO é um commit
visualmente neutro em cima de `upstream/main`: mexeria nos 39 usos de `rounded-lg` e nos 30
de `rounded-xl`. Não faça esse commit isolado.

### As duas parametrizações que o protótipo 1 provou, e que a sequência herda

1. **Profundidade é parâmetro, não ramo.** O labio (`box-shadow: 0 4px 0`, blur zero) e a
   sombra difusa do projeto são o mesmo slot, `--btn-depth`. Com `--lip: 0px` e uma sombra
   difusa no slot, a receita do labio degrada para o botão atual sem nenhum `if`. É isso que
   permite reverter a etapa 5 mudando dois valores de token em vez de revertendo componentes.
2. **A animação de feedback é escolhida pelo nome.** `animation-name` aceita `var()`, então
   `--fb-entrada-ok` guarda o nome da `@keyframes`. Trocar a linguagem de feedback é trocar
   uma string.

---

## 3. Etapa 0: o pré-requisito que NÃO é adoção do Duolingo

A branch `refactor/design-system-e-ux` tem 15 commits e zero PR aberto. Ela mistura o
pipeline da taxonomia, a página da trilha, um fix de CI e um refactor visual completo. Ela é
o maior diff em jogo e o maior risco de rejeição do conjunto, e **a sequência do Duolingo não
espera por ela** (seção 2 explica como).

Duas regressões que eu medi nessa branch e que precisam ser consertadas antes de o PR dela
abrir, senão a primeira impressão do trabalho de design do Falcão no repositório é uma
regressão:

**0a. Sete sombras coloridas deixaram de existir no CSS construído.** A troca de acento
`#6c63ff` para `#6366f1` virou `rgba(99, 102, 241, 0.2)` **com espaço** dentro de valor
arbitrário do Tailwind, e valor arbitrário com espaço literal não é emitido. Prova:
`grep -c "0 0 0 3px" dist/assets/*.css` devolve 0; das nove `shadow-[...]` do código, só as
duas sem espaço (`rgba(0,0,0,0.26)` e `rgba(0,0,0,0.28)`) aparecem na folha construída. Em
`upstream/main` as mesmas nove funcionam, porque lá estão escritas `rgba(108,99,255,0.3)`.

Os sete call sites mortos:

```
src/components/ui/QuizTabs.tsx:55                     shadow-[0_6px_18px_rgba(99, 102, 241,0.3)]
src/components/ui/KahootQuiz.tsx:201                  shadow-[0_0_0_3px_rgba(99, 102, 241,0.22)]
src/components/ui/KahootQuiz.tsx:242                  shadow-[0_0_0_3px_rgba(34, 197, 94,0.22)]
src/components/ui/KahootQuiz.tsx:244                  shadow-[0_0_0_3px_rgba(239, 68, 68,0.22)]
src/components/layout/Sidebar.tsx:149                 shadow-[0_6px_16px_rgba(99, 102, 241,0.2)]
src/components/layout/Sidebar.tsx:261                 shadow-[0_6px_16px_rgba(99, 102, 241,0.2)]
src/components/layout/sidebar/SidebarSubjectLink.tsx:17  shadow-[0_6px_16px_rgba(99, 102, 241,0.2)]
```

O conserto não é só tirar o espaço. A pesquisa do eixo de forma diz o que colocar no lugar:
o Duolingo usa **anel interno** (`inset 0 0 0 3px`) e **nunca halo externo desfocado**, e o
maior blur do sistema dele é zero. Os três `0 0 0 3px` já são anel de zero blur, só estão do
lado de fora: viram `inset`, escritos com `color-mix` sobre o token em vez de rgba na mão,
o que também resolve o "no hardcoded hex in component bodies". Os quatro halos coloridos
(`0 6px 18px`, `0 6px 16px`) saem: são exatamente o "colored glow" que o próprio refactor
disse estar removendo.

**0b. O tema claro da branch reprovou AA em quatro lugares que `upstream/main` acertava.** O
`html[data-theme='light']` da branch não redefine `--success`, `--danger`, `--warning`,
`--info` (só existem em `:root`, `src/index.css:40-43`), e o `upstream/main` redefinia todos
("variante de contraste corrigida no tema claro"). Resultado sobre o cartão claro `#f6f7fa`:

| Token | Branch, tema claro | Upstream, tema claro |
|---|---|---|
| acerto | `#22c55e` = **2,13:1** | `#19764f`, corrigido |
| erro | `#ef4444` = **3,51:1** | `#c83f54`, corrigido |
| informação | `#3b82f6` = **3,43:1** | `#0d817b`, corrigido |
| aviso | `#f59e0b` = **2,00:1** | `#8a6600`, corrigido |

Isso aparece na cara do aluno em `KahootQuiz.tsx:165,268-269`, que é o texto que diz se ele
acertou. A etapa 3 desta sequência conserta exatamente isso; se a branch 0 sair antes, ela
sai com o conserto embutido.

---

## 4. A sequência: seis etapas, risco crescente, cada uma um commit revertível

Regra de todas: base `upstream/main` (ou a branch 0 já mergeada, indiferente pelo contrato da
seção 2), uma branch por etapa, um PR por etapa, e os três gates do CI verdes
(`npx tsc -b`, `npm run lint`, `npm run build`, definidos em `.github/workflows/ci.yml`).
Reverter = `git revert` de um commit, sem tocar em nenhuma outra etapa.

### Etapa 1. Esqueleto de carregamento (risco baixo, o menor raio de impacto)

Branch `feat/esqueleto-de-carregamento`.
Commit: `feat(carregamento): esqueleto na geometria do conteúdo em vez de spinner`

Entra:
- novo `src/components/ui/Skeleton.tsx` (do protótipo 2, com as duas trocas da seção 2)
- novo `src/hooks/useEsqueletoVisivel.ts`
- editado `src/pages/SubjectPage.tsx:20-29`: o `SubjectContentFallback` (círculo girando de
  8px com a frase "Carregando conteúdo da matéria") vira
  `<SkeletonComLimiar><SkeletonPaginaMateria /></SkeletonComLimiar>`

Por que é o menor raio: **zero linha de CSS**. O token `--animate-pulse-soft` e a
`@keyframes pulse-soft` já existem em `src/index.css` do `upstream/main` e ninguém usava.
Zero dependência nova. Nenhum pixel de página carregada muda: só o estado de espera de uma
rota muda, e ele hoje é um spinner de 8px onde vai entrar uma página de 2000px.

Duas coisas a conferir antes de abrir, e elas não são opcionais:
- as medidas do `SkeletonPaginaMateria` espelham o `SubjectHero.tsx` e o `SectionNav.tsx`
  **da branch**, que estão +70/-24 e +19 linhas à frente do `upstream/main`. Reconferir na
  base escolhida o clamp do título, a régua de baixo e o sobrescrito em mono. Esqueleto com
  geometria errada troca a espera por um salto de layout, e aí o remédio virou doença.
- `src/pages/LoadingLab.tsx` **não entra no PR**. Página sem rota é código morto e o
  mantenedor vai perguntar. Registrar a rota localmente para validar, tirar antes de commitar,
  e guardar o arquivo em `.docs/duolingo/lab/`.

Sem shimmer, e a razão vai no corpo do PR em uma linha: laço infinito de 1,2s a 2s por
passada é o teto de duração ignorado, e numa grade de 20 cartões são 20 elementos repintando
sem parar justamente enquanto a CPU faz o parse do chunk pedido.

### Etapa 2. Prefetch de rota e limite de erro (risco baixo)

Branch `perf/prefetch-de-rota-no-hover`.
Commit: `perf(navegacao): aquece o chunk da rota no hover, no foco e no toque`

Entra:
- novo `src/hooks/usePrefetchRota.ts` (do protótipo 2)
- novo `src/components/ui/LimiteDeErro.tsx` (componente de classe, `componentDidCatch`; sem
  dependência nova, `react-error-boundary` fica de fora)
- editados os call sites que espalham os handlers: `src/components/layout/sidebar/SidebarSubjectLink.tsx`,
  `src/components/ui/SubjectCatalog.tsx` (o `NavLink` do cartão), `src/components/trilha/AtalhoTrilha.tsx`
- editado `src/pages/SubjectPage.tsx`: `<LimiteDeErro>` em volta do `<Suspense>`

Por que vem depois da 1 e não antes: a etapa 1 cria um modo de falha novo. Chunk que falha
(deploy no meio da sessão, rede caindo) deixa o `Suspense` pendurado, e esqueleto pendurado
para sempre é pior que spinner pendurado para sempre, porque parece conteúdo. A etapa 2 fecha
o que a etapa 1 abriu.

Os 80 ms de intenção não são enfeite: a sidebar lista as 40 e tantas matérias do curso, e sem
a espera atravessar a lista com o mouse baixaria meio site. `Save-Data` e 2G cancelam o
palpite. O registro de aquecidos é por rota e vive no módulo, porque a mesma matéria aparece
na sidebar e no catálogo.

`startTransition` fica **fora** desta etapa. É a única linha da pesquisa que exige medir
antes de escrever: o React Router 7 já envolve parte das navegações em transição, então
sem medição o commit é fé. Se a medição mostrar ganho, vira etapa 2b.

### Etapa 3. Contraste AA no botão primário e nas triplas do quiz (risco baixo)

Branch `fix/contraste-aa-no-botao-e-no-feedback`.
Commit: `fix(acessibilidade): rótulo do botão primário e texto de feedback reprovavam AA`

Entra:
- editado `src/index.css`, `.btn-primary`: a face passa a ser derivada do acento, não o
  acento cru. `background: color-mix(in srgb, var(--color-accent) 85%, black)`, rótulo
  branco. Medido: `#5457cd` com branco dá **5,80:1** com o indigo da branch, e `#5c54d9` dá
  **5,64:1** com o roxo do upstream. Antes eram 4,25:1 e 4,32:1. A face derivada por
  `color-mix` preserva a propriedade de o acento ser tintável em runtime: trocar o acento
  re-tinge face e labio juntos, sem token novo.
- editado `src/index.css`, bloco `html[data-theme='light']`: redefinir `--success`,
  `--danger`, `--info`, `--warning` como o `upstream/main` fazia. Valores medidos sobre o
  cartão claro `#f6f7fa`: acerto `color-mix(60% preto)` = `#147638` = 5,33:1; erro
  `color-mix(75% preto)` = `#b33333` = 5,70:1; informação `color-mix(75% preto)` = `#2c62b9`
  = 5,51:1; aviso `color-mix(60% preto)` = `#935f07` = 5,05:1.
- editado `src/index.css`, tema escuro: o erro `#ef4444` sobre o cartão `#1a1d28` dá 4,46:1 e
  reprova por 0,04. `color-mix(in srgb, var(--color-error) 85%, white)` = `#f16060` = 5,26:1.
- editados `src/components/ui/KahootQuiz.tsx:165,242,244,268-269`: as classes de feedback
  passam a ler os tokens corrigidos.

O que este commit **não** faz: não muda nenhuma cor de marca, nenhum raio, nenhuma
geometria. É a regra da tripla do Duolingo (fundo pálido + borda + texto) com o defeito do
Duolingo já corrigido. Vale dizer no PR que a própria referência reprova aqui: Tree Frog
`#58a700` sobre Sea Sponge `#d7ffb8` dá 2,72:1, Fire Ant sobre Walking Fish dá 3,46:1, Whale
sobre Iguana dá 2,81:1, Guinea Pig sobre Canary dá 3,04:1. Copiar o Duolingo fiel seria
importar quatro reprovações.

### Etapa 4. Permanência assimétrica do feedback (risco médio)

Branch `feat/feedback-do-quiz-com-permanencia-assimetrica`.
Commit: `feat(quiz): acerto some em 300ms, erro insiste 800ms e esfria a partir de 62%`

Entra:
- editado `src/index.css`: `@keyframes duo-acerto` (0% e 100% seguram a tripla de acerto,
  `forwards`) e `@keyframes duo-erro` (0% a 62% seguram a tripla de erro, o resto lava para
  neutro), mais os tokens `--dur-dwell-ok: 300ms`, `--dur-dwell-err: 800ms`,
  `--hold-stop: 62%`
- editado `src/components/ui/KahootQuiz.tsx:266-274`: a caixa de resposta recebe a classe de
  estado
- editado `src/components/ui/QuizCard.tsx` no mesmo padrão

Escopo é **um** componente de quiz, não o site. Se for recusado, nada mais cai.

O conflito de duração se dissolve em vez de ser negociado. O teto de 350 ms do sistema do
projeto é sobre **movimento**; o próprio projeto já estoura o teto nas revelações
(`revela` em `src/lib/movimento.ts` usa 440 ms). São três grandezas diferentes: movimento
(até 350 ms), revelação (440 a 550 ms) e **permanência** (300 ms no acerto, 800 ms no erro).
Nada se move por 800 ms; é a cor que esfria. Permanência é a categoria que o projeto não
nomeou e que o Duolingo mediu.

O argumento do PR é pedagógico e tem número: o som de erro e o de acerto do Duolingo saem no
**mesmo** volume, 0,35; o que difere é a duração. Ele pune por tempo, não por intensidade.
Num quiz de estudo isso é a diferença entre "vira a página" e "olha o que errou".

A cor continua entrando por `clip-path` (a revelação radial do projeto), não com corte seco:
o que se adota é a assimetria da permanência, não o pop. Movimento reduzido substitui a
trilha em vez de apagar o feedback, cobrindo as duas fontes (`@media` do sistema, que
`src/index.css:724` já resolve globalmente, e o atributo, que é o único caminho que o
Duolingo cobre e que não protege ninguém antes do bundle carregar).

### Etapa 5. A física do pressável, o labio (risco alto)

Branch `feat/botao-com-fisica-de-pressionavel`.
Commit: `feat(visual): botão primário e cartão de resposta ganham aresta e afundam ao toque`

Entra:
- editado `src/index.css`, `.btn-primary`: `border-width: 0 0 4px` com
  `border-color: transparent` (a borda inferior transparente reserva o espaço do labio, então
  não há layout shift), um `::before` com `inset: 0` que pinta a face, `box-shadow: 0 4px 0`
  sem blur para o labio, `:active` com `translateY(4px)` e `box-shadow: none`,
  `:disabled` permanentemente afundado com o labio removido
- editado `src/components/ui/KahootQuiz.tsx:255`, o `.kahoot-answer-button`
- o labio sai de `--color-primary-lip: color-mix(in srgb, var(--color-accent) 64%, black)`

Escopo mínimo e deliberado: **só** o botão primário e o cartão de resposta do quiz. Não o
`.study-surface`, não o `.concept-card`, não a `.study-pill`. Razão de projeto, não de medo:
o Duolingo pode ter blur zero em tudo porque a tela de lição tem quatro elementos; uma página
de matéria aqui empilha dezenas de `.study-surface`, e trinta cartões com aresta dura de 4px
leem como trinta botões. Profundidade física fica reservada ao que é pressionável, que é o
que a própria pesquisa achou no campo de formulário do Duolingo (chapado, sem labio).

Três coisas que só aparecem implementando, e que precisam estar no corpo do PR:
- a borda inferior de 4px muda o box model de todo botão e desloca 4px quem alinha ao lado
  dele. Conferir as fileiras de `flex gap-2` em `SubjectPage.tsx:65-82` e `KahootQuiz.tsx:280`.
- superfície translúcida e labio são incompatíveis: face translúcida deixa o labio aparecer
  através e lê como erro de impressão. Toda face pressável fica opaca; o vidro (`.glass`)
  segue só em superfície não pressável.
- no tema escuro o labio é fraco por geometria, não por implementação: a faixa de luminância
  entre o chão `#0f1117` e uma face neutra é 0,016 contra 0,296 numa face saturada. Por isso
  o labio só vai na face saturada, e quem depende dele para entender "isso é pressionável"
  continua tendo a borda.

Reverter é barato por construção: `--lip: 0px` mais uma sombra difusa em `--btn-depth`
devolve o botão de antes sem tocar em componente nenhum.

### Etapa 6. Grade de 4px e alturas de controle (risco alto, e a recomendação é não abrir)

Branch `refactor/grade-de-4px-e-alturas-de-controle`, se um dia.

Seria: altura de botão 50px, altura de campo 48px, padding `0 16px`, borda estrutural única
de 2px, e os raios reduzidos a dois canônicos (16px no pressável, 12px no cartão). Hoje o
projeto tem 4 raios utilitários mais 10 valores literais distintos em `src/index.css`
(10px, 999px, 50%, 7px, 20px, 9px, 8px, 4px, 16px, 0.12rem).

Por que não abrir: o diff toca padding e altura de dezenas de componentes, a justificativa é
100% estética, e nem o Duolingo tem token de espaçamento (a aderência a múltiplos de 4 é de
69,0% em 335 valores medidos, com 10px e 15px como exceções reais em 15% da amostra). Pedir a
outra pessoa para revisar centenas de linhas de padding em nome de uma grade que a própria
referência não cumpre é queimar crédito. Se o assunto voltar, vira issue com a lista dos 10
valores e a proposta de consolidar em 3, não vira PR.

---

## 5. Onde skeleton e lazy loading entram, e por que na frente

Entram nas etapas **1 e 2**, antes de qualquer coisa visual. Quatro razões:

1. São as únicas duas etapas puramente aditivas: arquivo novo mais um call site. Nenhum pixel
   de página carregada muda.
2. São agnósticas de paleta e de fonte, então sobrevivem à briga da seção 3 e não dependem de
   qual base ganhar.
3. Custam zero quilobyte e usam um token que o repositório já declarava e não usava. Isso é
   verdadeiro e é lisonjeiro, e vale escrito no PR.
4. Elas compram o crédito que a etapa 5 vai gastar. Duas contribuições pequenas, medidas e
   aceitas mudam a leitura do PR seguinte de "estranho refazendo meu visual" para "quem já
   mandou coisa boa".

**Achado que muda o enquadramento e precisa estar no PR:** o Duolingo tem **zero** esqueleto,
zero shimmer, zero pulse, zero spinner e zero `prefers-reduced-motion` no CSS de produção.
Logo o eixo de carregamento não é adoção do Duolingo, é invenção nossa, e a pesquisa serve
para provar que a referência não tem o que copiar. Não vender isso como "o Duolingo faz
assim", porque não faz.

**O que NÃO trocar por esqueleto:** os dois spinners de geração por IA, em
`src/components/ui/AIKahootQuiz.tsx:189` e `src/components/ui/AIQuizGenerator.tsx:219`.
Esqueleto vale quando a geometria do que vem é conhecida; ali a saída do modelo é de tamanho
imprevisível e a espera passa de 5 s. Esqueleto parado por 20 s lê como página quebrada,
spinner lê como trabalho em andamento. Spinner fica, e ganha só o `LimiteDeErro` da etapa 2.

---

## 6. A fonte: nenhuma do Duolingo entra, e a diferença é assumida

As três estão fora, e não por escrúpulo excessivo:

| Fonte | Fundição | Situação |
|---|---|---|
| Feather Bold | Fontsmith (Krista Radoeva, 2019) | proprietária e intransferível |
| Duolingo Sans | Bezier Inc., variável 100 a 900 | proprietária e intransferível |
| DIN Next Rounded | Monotype/Linotype | comercial, licença por domínio |

O repositório é público e publica em GitHub Pages. Servir um `woff2` a partir do repositório
é distribuição, não uso interno. Nenhuma das três pode entrar, em nenhum cenário.

**Decisão: não entra fonte nenhuma.** O projeto fica com o que tem, e nas duas bases o que
ele tem é livre e adequado: `upstream/main` usa Playfair Display + Source Sans 3 + Orbitron;
a branch usa Fraunces + Plus Jakarta Sans + JetBrains Mono + Orbitron. Adicionar uma quinta
família ao `@import` do `src/index.css` custa uma requisição bloqueante em site estático e
não compra nada para material de estudo.

**A substituta, para quando alguém perguntar:** Nunito (OFL, Google Fonts) no texto, porque é
a substituta que a **própria Duolingo** indica e a altura-x dela bate com a da DIN; Baloo 2
(OFL) no display por presença, ou Fredoka por fidelidade métrica. Ficam documentadas aqui e
não entram no código.

**A diferença visual, assumida sem rodeio:** sem Feather Bold não existe a voz do Duolingo.
O que atravessa é o retângulo arredondado e a física, não a letra. Quem abrir esperando "ficou
igual ao Duolingo" vai encontrar a geometria e não a identidade, e isso é o resultado
pretendido, não uma concessão.

Duas notas de letra que valem, e são de graça:
- O projeto já liga `tabular-nums` em `KahootQuiz.tsx:123,184` e no contador do
  `SubjectCatalog`. O Duolingo **não** liga algarismo tabular, apesar de a Duolingo Sans ter
  a feature `tnum`. Aqui o projeto já está melhor que a referência; manter.
- O rótulo de botão em CAIXA ALTA com tracking de 0,8px, que é assinatura do Duolingo, fica
  **fora** (seção 7, item 5).

---

## 7. O que NÃO adotar do Duolingo

Um sistema de lições curtas de idioma tem escolhas que não sobrevivem a material de estudo
denso de faculdade. Onze recusas, com o motivo:

1. **Corpo de 20px com entrelinha 1,4.** O corpo do Duolingo é 20px porque a tela mostra uma
   frase. Aqui existem `ComparisonTable`, `CodeBlock`, `MultiCodeBlock`, `TruthTable`, 462
   conceitos e tabela verdade. `upstream/main` usa 17px/1,65 e a branch usa 16px/1,7. Manter.
   Subir para 20px reflui toda tabela e todo bloco de código e acrescenta cerca de um quarto
   de rolagem numa página de 2000px.
2. **As regras de display da Feather.** Minúscula forçada, tracking `-0.02em`, mínimo 30px,
   sempre à esquerda, nunca hifenizar. Título de matéria aqui é nome próprio e tem código
   (`Lógica Matemática e Matemática Discreta`, `ALPG`, `TABD`): minúscula forçada destrói o
   código. E `hyphens: none` briga com o `break-words hyphens-auto` de `KahootQuiz.tsx:230`,
   que existe porque enunciado de questão é longo.
3. **O papel `label` grande, 24px em caixa alta com tracking positivo.** O projeto já tem
   esse idioma, a 11px com tracking de 0,14em a 0,18em, e funciona. A 24px vira grito.
4. **O brilho branco a 20% na barra de progresso** (`--progress-shine-*`). Gesto lúdico que
   aponta para nada, e não existe barra de progresso de lição aqui.
5. **Rótulo de botão em caixa alta com tracking 0,8px.** Em português rótulo em caixa alta
   fica mais longo que em inglês ("PRÓXIMA PERGUNTA" contra "NEXT") e perde legibilidade de
   diacrítico a 15px. Fica em caixa de frase. É recusa deliberada de uma assinatura da
   referência.
6. **A transição de tela de 500ms.** Já existe troca de página em 260 ms
   (`PADRAO` em `src/lib/movimento.ts`). Meio segundo entre matérias num site de leitura é
   espera, não polimento.
7. **O som.** Cinco variantes de acerto e uma de erro, volumes 0,35 e 0,5. Site lido em sala
   e em biblioteca, sem pipeline de asset de áudio, e é a parte que mais lê como jogo.
8. **O tema escuro deles.** `#131f24` azulado com o verde clareado por estética (`#93d333`,
   e a pesquisa é explícita que foi estética e não contraste). O escuro daqui é `#0f0f12` ou
   `#0f1117`. Adotar o deles é o cenário C pela porta de trás.
9. **Blur zero como regra geral.** Adotar só no pressável (etapa 5). Cartão mantém a sombra
   suave em camadas.
10. **`html[reduced-motion]` como único caminho de movimento reduzido.** O Duolingo depende de
    um atributo que o JavaScript escreve, o que não protege ninguém antes do bundle carregar.
    Aqui o `@media (prefers-reduced-motion: reduce)` de `src/index.css:724` já zera duração de
    animação e de transição globalmente. Manter o `@media` como fonte primária.
11. **As quatro triplas semânticas fiéis.** Reprovam AA sobre os próprios fundos (2,72:1 a
    3,46:1, medidos na seção 4, etapa 3). Adotar a **regra** da tripla, nunca os valores.

---

## 8. O risco no PR, com franqueza

Fatos do destino, não impressão: Falcão tem **zero** PR aberto ou mergeado em
`periclesanfe/material_estudos_ifal`, e 15 commits na fork que nunca foram enviados. O
`CODEOWNERS` manda `/src/components/`, `/src/content/`, `/src/data/`, `/.github/` e a config
da raiz para `@periclesanfe`, então qualquer etapa que toque `src/components/` pede revisão
dele automaticamente (todas pedem, menos as que só mexem em `src/index.css`, `src/hooks/` e
`src/pages/`, que não têm regra de dono). O CI de PR roda `npx tsc -b`, `npm run lint` e
`npm run build`. O `pull_request_template.md` tem caixa "Melhoria de UI/UX" e pede
**screenshots** para mudança visual, o que é a porta de entrada do antes e depois.

| Etapa | Chance de rejeição | O que a derruba | Como reduzir |
|---|---|---|---|
| 1. Esqueleto | ~15% | "eu prefiro o spinner"; medida do esqueleto errada | GIF antes/depois com rede a 3G; dizer que usa `--animate-pulse-soft` que o próprio repo já declarava em `index.css:39` e ninguém usava; explicar o limiar de 200 ms e a permanência de 320 ms como remédio contra pisca-pisca |
| 2. Prefetch | ~20% | "isso vai baixar o site inteiro do aluno" | print da aba Network com as 40 matérias na sidebar provando que os 80 ms de intenção contêm; citar o corte por `Save-Data` e 2G; medir o antes e depois em ms; separar o `LimiteDeErro` em PR próprio se ele torcer o nariz para componente de classe |
| 3. Contraste AA | ~10%, a mais fácil | quase nada; é bug | tabela de razões medidas antes e depois; citar a regra da WCAG (rótulo 15px/700 não é texto grande, large = 18,66px bold); deixar explícito que nenhuma cor de marca muda, só a tinta do texto |
| 4. Permanência assimétrica | ~35% | é a primeira que é gosto | vídeo de 8 s; enquadrar como pedagogia com o número (mesmo volume 0,35 nos dois sons, o que difere é a duração); limitar a UM componente e dizer isso no título do PR |
| 5. O labio | ~50 a 60% | é mudança de identidade visual e o diff mais largo | **entregar antes como issue com imagem, não como PR**: print dos quatro estados nos dois temas, e perguntar se ele quer. Se ele quiser, abrir Draft PR. Escopo mínimo (só botão primário e cartão de resposta). Explicar a borda inferior transparente que evita layout shift. Mostrar o dado de que o labio no escuro tem 1/18 da faixa, para ele ver que não estamos vendendo mágica |
| 6. Grade de 4px | ~75% | diff enorme, justificativa 100% estética | não abrir. Vira issue com a lista dos 10 raios literais |

Redutores que valem para todas:

- **Uma etapa, um PR, nunca empilhar.** O erro mais provável desse projeto é sair um PR com
  as 15 commits da branch 0 mais a adoção do Duolingo dentro. Isso é rejeição quase certa,
  não por mérito, mas por tamanho.
- **Nenhuma dependência nova em nenhuma etapa.** Vale dizer no corpo do PR. Para comparação
  honesta: a branch 0 já traz `motion`, que sai num chunk de 128 kB
  (`dist/assets/movimento-*.js`) num site cujo `index-*.js` tem 223 kB. A adoção do Duolingo
  é CSS e não acrescenta nada, e isso é argumento a favor.
- **Antes e depois em imagem, sempre, e nos dois temas.** O template já pede. Para as etapas
  4 e 5 mandar vídeo curto, porque o assunto é tempo e gesto, e print não mostra tempo.
- **Título de PR que nomeia o defeito, não a inspiração.** "rótulo do botão primário reprova
  WCAG AA (4,25:1)" abre porta; "adota o design system do Duolingo" fecha. A palavra Duolingo
  entra no corpo, como procedência da técnica, nunca no título.
- **Cada PR carrega as três linhas de razão que importam.** Esta pasta está no `.gitignore`,
  logo o mantenedor não tem acesso ao raciocínio: se não estiver no corpo do PR, não existe.

---

## 9. Inventário e estado ao vivo (13/08/2026, 09h50)

O trabalho começou a ser integrado enquanto este documento era escrito. Registro o que já
existe, porque muda o que fazer a seguir.

### 9.1. As etapas 1 e 2 já foram integradas, mas no lugar errado da árvore

Commit `6fe95a7 feat(carregamento): esqueleto com limiar e prefetch da matéria na intenção`,
em `refactor/design-system-e-ux`. Ele traz `src/components/ui/Skeleton.tsx`,
`src/hooks/useEsqueletoVisivel.ts`, `src/hooks/usePrefetchRota.ts`, edita
`src/pages/SubjectPage.tsx` e acrescenta `src/content/registro.ts`, tirando os importadores de
dentro da chamada de `lazy()` para que o mesmo importador sirva ao clique e ao aquecimento.
Essa extração é a peça que faltava e está certa. O `LoadingLab.tsx` ficou fora do commit, que
é o comportamento correto (página sem rota é código morto).

Três correções de rota, em ordem:

1. **Etapas 1 e 2 saíram como um commit só.** Se o PR for único, o título tem que nomear o
   defeito ("a matéria mostrava spinner de 8px onde entra uma página de 2000px, e o chunk só
   começava a baixar no clique"), não as duas técnicas.
2. **O commit está preso na branch de 15 commits.** É exatamente o risco da seção 3. O
   remédio é um `git cherry-pick 6fe95a7` sobre uma branch derivada de `upstream/main`, e aí
   aplicar as duas adaptações da seção 2 (`border-rule` em `Skeleton.tsx:282`, os
   `var(--radius-*)` em `Skeleton.tsx:99,184,304,308`). A superfície de conflito do cherry-pick
   é `src/pages/SubjectPage.tsx`, que diverge em 2 linhas entre as bases.
3. **Reconferir a geometria do esqueleto contra a base escolhida** antes de abrir, pelo motivo
   da etapa 1.

### 9.2. Alguém está implementando o labio agora, e há três defeitos a corrigir

`src/index.css` e `src/components/ui/QuizCard.tsx` estão modificados na árvore de trabalho: as
alternativas do quiz ganharam `.quiz-option-base` com labio, afundamento no `:active`, e as
classes `.quiz-option-certa` e `.quiz-option-errada`. A direção é a certa e a técnica escolhida
(borda inferior de 4px animada para 2px em vez do `::before` com `box-shadow`) é uma variante
legítima: o topo desce 2px, a base fica parada, altura total constante. Três problemas
concretos:

- **O AA da etapa 3 não foi feito, e o código novo carrega o defeito para dentro.**
  `text-success` e `text-error` resolvem para `--success` e `--danger`, que o bloco
  `html[data-theme='light']` não redefine. No tema claro isso é 2,13:1 no acerto e 3,51:1 no
  erro, sobre o próprio fundo que o código acabou de pintar. A etapa 3 tem que vir antes ou
  junto, nunca depois.
- **Amarrou o quiz à branch não mergeada.** As regras usam `--accent-primary`, `--success` e
  `--danger`, que são os tokens canônicos e **não existem em `upstream/main`**. Trocar por
  `--color-accent`, `--color-success` e `--color-error` custa seis substituições e devolve a
  independência de base descrita na seção 2.
- **O erro sacode, e sacudir é o contrário do achado.** `@keyframes quiz-sacode` translada em
  X por 340 ms. A contribuição do Duolingo aqui é punir por **tempo** e não por
  **intensidade**: o som de erro e o de acerto saem no mesmo volume 0,35, e o que difere é a
  duração (300 ms contra 800 ms). Sacudida é intensidade, é movimento que se nota, e briga com
  a regra da casa. O erro deve segurar a cor até 62% e lavar no resto, sem deslocamento.
  Também remove os quatro `!important`, que só existem porque a classe de estado disputa
  `border-color` com a classe base.

### 9.3. Os arquivos de laboratório, agora em lugar seguro

Copiei os três para `.docs/duolingo/lab/`, que é pasta ignorada, então não há como vazarem
para um PR:

```
.docs/duolingo/lab/duolingo-tokens.css   1700 linhas, os 3 cenários escopados por classe
.docs/duolingo/lab/DesignLab.tsx         a página que renderiza os três com o MESMO markup
.docs/duolingo/lab/LoadingLab.tsx        a vitrine dos esqueletos ao lado do conteúdo real
```

Os dois primeiros estavam em
`/Users/falcao/Projects/governanca-mais-react/.claude/worktrees/wf_c555143e-446-6/src/`, onde
não compilam e não têm sentido. O terceiro veio da cópia durável em
`.../wf_c555143e-446-7/prototipo-carregamento/src/pages/`, porque já tinha sido apagado do
disco uma vez por um `reset` de outro agente. Copiei, não movi: as origens seguem intactas.

### 9.4. Para que serve o laboratório, e o que ele não é

Ele é o **verificador**, não o entregável: a página mede as 56 razões de
contraste em runtime via `getComputedStyle`, e foi ela que pegou um erro do próprio protótipo
(`--ok-fg` do cenário A claro a 4,14:1, porque 62% de mistura era simétrico mas o limite do
verde é 58%). Para rodar: importar o CSS e registrar uma rota temporária, validar, remover.
Nada disso entra em PR.

Do cenário A do `duolingo-tokens.css`, o que a sequência aproveita é o bloco `.dl-cenario-a`
(promovido para `:root` e `html[data-theme='light']`, não copiado inteiro) e as receitas
`.dl-btn`, `.dl-btn::before`, `.dl-feedback` e `.dl-field`, reescritas com os nomes de token
da seção 2. As três camadas do protótipo (primitivos, contrato semântico, receitas) não
sobrevivem como arquitetura de arquivo: aqui elas viram `src/index.css` e as classes que já
existem (`.btn-primary`, `.kahoot-answer-button`, `.study-surface`).

---

## 10. Apêndice: os números, todos medidos

Fórmula de razão de contraste da WCAG 2.1, aplicada sobre os hex resolvidos. Fundos com
transparência resolvidos por mistura com a superfície de baixo.

**Botão primário, rótulo de 15px/700 (não é texto grande, mínimo 4,5:1):**

| Combinação | Razão | Veredito |
|---|---|---|
| `#ffffff` sobre `#6c63ff` (upstream, hoje) | 4,32:1 | reprova |
| `#12100c` sobre `#6366f1` (branch escuro, hoje) | 4,25:1 | reprova |
| `#fffefb` sobre `#6366f1` (branch claro, hoje) | 4,43:1 | reprova |
| `#ffffff` sobre `#5457cd` (`color-mix` 85%, indigo) | 5,80:1 | passa |
| `#ffffff` sobre `#5c54d9` (`color-mix` 85%, roxo) | 5,64:1 | passa |

**Triplas de feedback, tema claro da branch, sobre o cartão `#f6f7fa`:**

| Papel | Hoje | Corrigido | Razão corrigida |
|---|---|---|---|
| acerto | `#22c55e` = 2,13:1 | `#147638` (60% preto) | 5,33:1 |
| erro | `#ef4444` = 3,51:1 | `#b33333` (75% preto) | 5,70:1 |
| informação | `#3b82f6` = 3,43:1 | `#2c62b9` (75% preto) | 5,51:1 |
| aviso | `#f59e0b` = 2,00:1 | `#935f07` (60% preto) | 5,05:1 |

**Tema escuro da branch, sobre o cartão `#1a1d28`:** acerto `#22c55e` = 7,37:1 (passa);
erro `#ef4444` = 4,46:1 (reprova por 0,04), corrigido para `#f16060` = 5,26:1.

**O Duolingo fiel, para provar que copiar não serve:** branco sobre Feather Green `#58cc02` =
2,09:1; branco sobre Tree Frog `#58a700` = 3,02:1; `#3c3c3c` sobre Feather Green = 5,28:1
(é assim que o Duolingo resolve os botões amarelos, e é a saída que preserva o verde). Triplas:
Tree Frog sobre Sea Sponge = 2,72:1; Fire Ant sobre Walking Fish = 3,46:1; Whale sobre Iguana
= 2,81:1; Guinea Pig sobre Canary = 3,04:1. Corrigidas para 5,17:1, 5,95:1, 4,89:1 e 6,86:1.
O texto secundário Wolf `#777777` dá 4,48:1 sobre branco e 4,18:1 sobre Polar `#f7f7f7`, e o
conserto óbvio engana: `#767676` é o cinza mínimo sobre branco (4,54:1) mas ainda reprova
sobre Polar (4,24:1), que é a superfície de cartão deles. O primeiro cinza que passa nos dois
chãos é `#717171` (4,88:1 e 4,56:1).

**Sombras mortas na branch (etapa 0a):** `grep -c "0 0 0 3px" dist/assets/*.css` = 0. Das nove
`shadow-[...]` do código, sete têm espaço literal dentro do valor arbitrário e não são
emitidas; as duas sem espaço aparecem na folha como
`shadow-\[0_6px_16px_rgba\(0\,0\,0\,0\.26\)\]` e `shadow-\[0_8px_22px_rgba\(0\,0\,0\,0\.28\)\]`.

**Faixa de luminância no escuro (etapa 5):** entre o chão `#0f1117` e a face, 0,016 na face
neutra `#242836` contra 0,296 na face saturada `#818cf8`, cerca de 18x.

**Bundle atual da branch:** 20 chunks em `dist/assets/`. `TrilhaPage` 618 kB,
`index` 223 kB, `EstruturaDadosContent` 169 kB, `TABDContent` 164 kB, `movimento` 128 kB
(a biblioteca Motion). A adoção do Duolingo em cenário A acrescenta 0 kB de dependência.
