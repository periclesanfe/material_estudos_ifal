# Estudo: visualizador interativo de algoritmos

**Motivação:** os slides do Prof. Ricardo Nunes ensinam ordenação por **sequência de estados
do array**, com destaque no elemento em foco e um rótulo explicando cada passo. O site hoje
mostra o código Python e o resultado final — perde-se justamente o meio, que é onde o aluno
entende.

## Evidência no material

`13-ordenacao.pdf` (12 páginas) é quase inteiro composto por essas sequências:

| Algoritmo | O que o slide mostra | Rótulo de cada passo |
|---|---|---|
| Bubble sort | 9 estados da primeira varredura | "Exchange" / "No Exchange" / "93 in place after first pass" |
| Selection sort | 9 estados, um por varredura | "93 is largest", "44 is largest stays in place" |
| Insertion sort | 9 estados + detalhe da 5ª varredura | "inserted 26", "93>31 so shift it to the right" |
| Shell sort | sublistas por incremento 3 e 4, depois merge | "sublist 1 sorted", "1 shift for 20" |

**O professor escreveu "Visualize em https://visualgo.net/en/sorting" cinco vezes** no mesmo
PDF, além de linkar o comparador da Toptal. Ele queria visualização interativa e terceirizou
porque não tinha. Construir isso no site não é enfeite: é atender a uma intenção didática
explícita do material.

Os slides ainda trazem **três questões de "qual o estado da lista após N varreduras"**
(bubble, selection, shell) — o tipo de questão que um visualizador com controle de passo
responde sozinho.

## Escopo proposto

Um componente `AlgorithmVisualizer` que executa o algoritmo **gerando os passos**, e uma
UI que percorre esses passos.

### Modelo de dados
```ts
interface AlgorithmStep {
  /** Estado do array neste passo. */
  array: number[];
  /** Índices em foco (comparação, elemento sendo inserido). */
  highlight?: number[];
  /** Índices já em posição final. */
  sorted?: number[];
  /** Explicação do passo, no vocabulário do professor. */
  label: string;
}

type StepGenerator = (input: number[]) => AlgorithmStep[];
```

A geração é **pura e síncrona** — o algoritmo roda inteiro e devolve a lista de passos. Sem
`setTimeout` dentro da lógica, sem estado assíncrono. A animação é só o índice do passo atual.
Isso mantém o algoritmo testável e o componente burro.

### Controles
- Anterior / Próximo (passo a passo — o modo que ensina)
- Play / Pause com velocidade ajustável
- Reiniciar
- Array de entrada: o **do slide** (`[54, 26, 93, 17, 77, 31, 44, 55, 20]`) como padrão,
  com opção de embaralhar

Usar o array do slide por padrão é o detalhe que faz o aluno reconhecer o que viu em aula.

### Reúso
Um único componente serve para os 5 algoritmos de ordenação. Cada um contribui só o seu
`StepGenerator`. Os geradores ficam ao lado dos snippets Python já verificados, para que
código exibido e passos visualizados venham da mesma fonte.

## Onde aplicar, por ordem de retorno

| Prioridade | Onde | Por quê |
|---|---|---|
| 1 | Ordenação (5 algoritmos) | O material é literalmente sequência de estados; um componente cobre tudo |
| 2 | Busca binária | O slide deduz n/2ⁱ = 1; ver o intervalo encolher torna o log₂n óbvio |
| 3 | Pilha / Fila / Deque | push/pop e enqueue/dequeue são naturalmente animáveis |
| 4 | Hashing | Colisão e sondagem quadrática (1, 4, 9, 16) são difíceis de imaginar sem ver |
| 5 | Árvores / Heap | Maior valor didático, **maior custo** — exige layout de árvore em SVG |

Recomendo **fechar a prioridade 1 primeiro e avaliar**. É onde o material é mais explícito,
o modelo de dados (array) é o mais simples, e um só componente rende cinco visualizações.

## Restrições
- **Sem dependência nova.** O projeto não tem lib de animação e não deveria ganhar uma por
  isso. Array de divs com transição CSS resolve; SVG só nas árvores (prioridade 5).
- Componente < 150 linhas — separar controles, faixa do array e geradores.
- Sem `any`; cores só via variáveis do design system (`--color-accent` para foco,
  `--color-accent5` para ordenado).
- **Acessibilidade:** os controles precisam ser `button` navegáveis por teclado, e o rótulo
  do passo deve ir para um `aria-live="polite"` — senão a visualização não existe para quem
  usa leitor de tela. Respeitar `prefers-reduced-motion` desligando o play automático.
- Mobile: 9 elementos numa faixa cabem; acima disso precisa rolar ou reduzir.

## Riscos
- **Escopo.** Cinco algoritmos × geração de passos é trabalho real. Fatiar por prioridade
  evita um PR gigante.
- **Divergência.** Se o gerador de passos e o snippet Python forem escritos separadamente,
  eles vão divergir na primeira correção. Manter no mesmo arquivo e testar que o estado final
  do gerador bate com o `sorted()` do Python.
- **Virar enfeite.** Animação sem o rótulo explicativo é bonita e não ensina. O `label` de
  cada passo é a parte que importa — deve sair do vocabulário do professor ("93 in place after
  first pass"), traduzido.

## Recomendação
PR separado do de conteúdo, depois dos ajustes da rodada 1. Começar pela ordenação, com o
array do slide como entrada padrão. Se funcionar bem ali, estender para busca binária e
estruturas lineares.
