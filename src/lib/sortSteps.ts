/**
 * Geradores de passos dos algoritmos de ordenação.
 *
 * A geração é PURA e SÍNCRONA: cada função roda o algoritmo inteiro e devolve a
 * lista completa de estados. Não há `setTimeout` aqui — a animação do componente
 * é apenas o índice do passo atual. Isso mantém os algoritmos testáveis.
 *
 * Os rótulos seguem o vocabulário dos slides do Prof. Ricardo Nunes
 * (`13-ordenacao.pdf`), traduzidos: "Exchange" → "Troca", "93 in place after
 * first pass" → "93 no lugar após a 1ª varredura", "93>31 so shift it to the
 * right" → "93 > 31, desloca para a direita".
 *
 * Cada gerador espelha o snippet Python exibido na mesma seção
 * (`src/content/estrutura-dados/sections/snippets.ts`), para que código e
 * visualização não divirjam.
 */

export interface AlgorithmStep {
  /** Estado do array neste passo. */
  array: number[];
  /** Índices em foco (comparação, elemento sendo inserido). */
  highlight?: number[];
  /** Índices já em posição final. */
  sorted?: number[];
  /**
   * Posição "vazia" durante um deslocamento. Os slides desenham a célula em
   * branco enquanto o valor está sendo carregado para ser reinserido — é o
   * buraco que o insertion sort abre ao empurrar os maiores para a direita.
   */
  hole?: number;
  /** Explicação do passo, no vocabulário do professor. */
  label: string;
}

export type StepGenerator = (input: number[]) => AlgorithmStep[];

/** Array usado nos slides do professor — o padrão do visualizador. */
export const SLIDE_ARRAY: readonly number[] = [54, 26, 93, 17, 77, 31, 44, 55, 20];

/** Índices de `de` (inclusivo) até `ate` (inclusivo). */
function faixa(de: number, ate: number): number[] {
  const saida: number[] = [];
  for (let i = de; i <= ate; i += 1) saida.push(i);
  return saida;
}

const ordinal = (n: number) => `${n}ª`;

/**
 * Bubble sort na versão otimizada do slide (`shortBubbleSort`): compara pares
 * adjacentes e para cedo quando uma varredura inteira não faz nenhuma troca.
 * Rótulos "Troca"/"Sem troca" e "X no lugar após a Nª varredura" vêm do slide.
 */
export const bubbleSortSteps: StepGenerator = (input) => {
  const lista = [...input];
  const n = lista.length;
  const passos: AlgorithmStep[] = [
    { array: [...lista], label: 'Lista inicial. O bubble sort compara pares adjacentes.' },
  ];

  for (let i = 0; i < n - 1; i += 1) {
    const jaOrdenados = faixa(n - i, n - 1);
    let trocou = false;

    for (let j = 0; j < n - 1 - i; j += 1) {
      const par = [j, j + 1];
      if (lista[j] > lista[j + 1]) {
        [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
        trocou = true;
        passos.push({
          array: [...lista],
          highlight: par,
          sorted: jaOrdenados,
          label: `Troca: ${lista[j + 1]} > ${lista[j]}, então trocam de lugar.`,
        });
      } else {
        passos.push({
          array: [...lista],
          highlight: par,
          sorted: jaOrdenados,
          label: `Sem troca: ${lista[j]} < ${lista[j + 1]}, já estão em ordem.`,
        });
      }
    }

    const posicaoFinal = n - 1 - i;
    passos.push({
      array: [...lista],
      sorted: faixa(posicaoFinal, n - 1),
      label: `${lista[posicaoFinal]} no lugar após a ${ordinal(i + 1)} varredura.`,
    });

    if (!trocou) {
      passos.push({
        array: [...lista],
        sorted: faixa(0, n - 1),
        label: 'Nenhuma troca nesta varredura: a lista já está ordenada, o algoritmo para cedo.',
      });
      return passos;
    }
  }

  passos.push({ array: [...lista], sorted: faixa(0, n - 1), label: 'Lista ordenada.' });
  return passos;
};

/**
 * Selection sort na versão da aula (`selectionSort1`): procura o MAIOR da parte
 * não ordenada e o leva para o fim — uma única troca por varredura.
 * Rótulos "93 is largest" / "44 is largest stays in place" vêm do slide.
 */
export const selectionSortSteps: StepGenerator = (input) => {
  const lista = [...input];
  const n = lista.length;
  const passos: AlgorithmStep[] = [
    {
      array: [...lista],
      label: 'Lista inicial. Cada varredura procura o MAIOR valor e o leva para o fim.',
    },
  ];

  for (let posicaoFinal = n - 1; posicaoFinal > 0; posicaoFinal -= 1) {
    const jaOrdenados = faixa(posicaoFinal + 1, n - 1);
    let posicaoMaior = 0;

    for (let posicao = 1; posicao <= posicaoFinal; posicao += 1) {
      if (lista[posicao] > lista[posicaoMaior]) posicaoMaior = posicao;
      passos.push({
        array: [...lista],
        highlight: [posicao, posicaoMaior],
        sorted: jaOrdenados,
        label: `Comparando ${lista[posicao]} com o maior até agora (${lista[posicaoMaior]}).`,
      });
    }

    const maior = lista[posicaoMaior];
    if (posicaoMaior === posicaoFinal) {
      passos.push({
        array: [...lista],
        highlight: [posicaoFinal],
        sorted: faixa(posicaoFinal, n - 1),
        label: `${maior} é o maior e já está no lugar — permanece na posição.`,
      });
    } else {
      [lista[posicaoFinal], lista[posicaoMaior]] = [lista[posicaoMaior], lista[posicaoFinal]];
      passos.push({
        array: [...lista],
        highlight: [posicaoFinal, posicaoMaior],
        sorted: faixa(posicaoFinal, n - 1),
        label: `${maior} é o maior: troca com a posição ${posicaoFinal} e fica no lugar.`,
      });
    }
  }

  passos.push({
    array: [...lista],
    sorted: faixa(0, n - 1),
    label: `${lista[0]} ok — a lista está ordenada.`,
  });
  return passos;
};

/**
 * Insertion sort: mantém um prefixo ordenado e insere cada novo valor nele.
 * Rótulos "Assume 54 is a sorted list of 1 item", "93>31 so shift it to the
 * right", "26<31 so insert 31 in this position" e "inserted 26" vêm do slide.
 */
export const insertionSortSteps: StepGenerator = (input) => {
  const lista = [...input];
  const n = lista.length;
  if (n === 0) return [{ array: [], label: 'Lista vazia — nada a ordenar.' }];

  const passos: AlgorithmStep[] = [
    {
      array: [...lista],
      sorted: [0],
      highlight: [0],
      label: `Considere ${lista[0]} uma lista ordenada de 1 item.`,
    },
  ];

  for (let index = 1; index < n; index += 1) {
    const valorAtual = lista[index];
    let posicao = index;

    passos.push({
      array: [...lista],
      highlight: [index],
      sorted: faixa(0, index - 1),
      label: `Precisa inserir ${valorAtual} de volta na lista ordenada.`,
    });

    while (posicao > 0 && lista[posicao - 1] > valorAtual) {
      const deslocado = lista[posicao - 1];
      lista[posicao] = lista[posicao - 1];
      posicao -= 1;
      passos.push({
        array: [...lista],
        highlight: [posicao + 1],
        hole: posicao,
        sorted: faixa(0, index),
        label: `${deslocado} > ${valorAtual}, então desloca para a direita.`,
      });
    }

    lista[posicao] = valorAtual;
    passos.push({
      array: [...lista],
      highlight: [posicao],
      sorted: faixa(0, index),
      label:
        posicao > 0
          ? `${lista[posicao - 1]} < ${valorAtual}, então insere ${valorAtual} nesta posição.`
          : `${valorAtual} inserido no início da lista ordenada.`,
    });
  }

  passos.push({ array: [...lista], sorted: faixa(0, n - 1), label: 'Lista ordenada.' });
  return passos;
};

/**
 * Shell sort: insertion sort com "gap". As sublistas não são contíguas — são
 * intercaladas a cada `gap` posições. O gap começa em n/2 e cai pela metade até
 * 1, quando vira o insertion sort tradicional sobre uma lista quase ordenada.
 * Rótulos "sublist N sorted" e "1 shift for 20" vêm do slide.
 */
export const shellSortSteps: StepGenerator = (input) => {
  const lista = [...input];
  const n = lista.length;
  const passos: AlgorithmStep[] = [
    { array: [...lista], label: 'Lista inicial. O shell sort ordena sublistas separadas por um "gap".' },
  ];

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let inicio = 0; inicio < gap; inicio += 1) {
      const sublista: number[] = [];
      for (let k = inicio; k < n; k += gap) sublista.push(k);

      passos.push({
        array: [...lista],
        highlight: sublista,
        label: `Incremento ${gap} — sublista ${inicio + 1}: posições ${sublista.join(', ')}.`,
      });

      for (let i = inicio + gap; i < n; i += gap) {
        const valorAtual = lista[i];
        let posicao = i;
        let deslocamentos = 0;

        while (posicao >= gap && lista[posicao - gap] > valorAtual) {
          lista[posicao] = lista[posicao - gap];
          posicao -= gap;
          deslocamentos += 1;
        }
        lista[posicao] = valorAtual;

        if (deslocamentos > 0) {
          passos.push({
            array: [...lista],
            highlight: [posicao],
            label: `${deslocamentos} deslocamento${deslocamentos > 1 ? 's' : ''} para ${valorAtual}.`,
          });
        }
      }

      if (sublista.length > 1) {
        passos.push({
          array: [...lista],
          highlight: sublista,
          label: `Sublista ${inicio + 1} ordenada (incremento ${gap}).`,
        });
      }
    }

    passos.push({
      array: [...lista],
      label:
        gap > 1
          ? `Após ordenar as sublistas com incremento ${gap}, a lista é esta.`
          : 'Incremento 1: insertion sort tradicional sobre a lista quase ordenada.',
    });
  }

  passos.push({ array: [...lista], sorted: faixa(0, n - 1), label: 'Lista ordenada.' });
  return passos;
};

/**
 * Quick sort com partição in-place: o pivô é o 1º elemento da faixa, e
 * `leftmark`/`rightmark` convergem até cruzarem — o ponto de encontro é o split
 * point, onde o pivô fica em posição definitiva.
 */
export const quickSortSteps: StepGenerator = (input) => {
  const lista = [...input];
  const n = lista.length;
  const passos: AlgorithmStep[] = [
    { array: [...lista], label: 'Lista inicial. O pivô é sempre o 1º elemento da faixa.' },
  ];
  const definitivos = new Set<number>();
  const ordenados = () => [...definitivos].sort((a, b) => a - b);

  const particiona = (inicio: number, fim: number): number => {
    const pivo = lista[inicio];
    let leftmark = inicio + 1;
    let rightmark = fim;

    passos.push({
      array: [...lista],
      highlight: [inicio],
      sorted: ordenados(),
      label: `Pivô ${pivo} na faixa ${inicio}–${fim}. Marcas partem das pontas.`,
    });

    for (;;) {
      while (leftmark <= rightmark && lista[leftmark] <= pivo) leftmark += 1;
      while (rightmark >= leftmark && lista[rightmark] >= pivo) rightmark -= 1;

      if (rightmark < leftmark) {
        passos.push({
          array: [...lista],
          highlight: [inicio],
          sorted: ordenados(),
          label: `As marcas se cruzaram: o split point do pivô ${pivo} é a posição ${rightmark}.`,
        });
        break;
      }

      [lista[leftmark], lista[rightmark]] = [lista[rightmark], lista[leftmark]];
      passos.push({
        array: [...lista],
        highlight: [leftmark, rightmark],
        sorted: ordenados(),
        label: `${lista[rightmark]} > ${pivo} e ${lista[leftmark]} < ${pivo}: as marcas trocam os valores.`,
      });
    }

    [lista[inicio], lista[rightmark]] = [lista[rightmark], lista[inicio]];
    definitivos.add(rightmark);
    passos.push({
      array: [...lista],
      highlight: [rightmark],
      sorted: ordenados(),
      label: `Pivô ${pivo} troca com o split point e fica na posição definitiva ${rightmark}.`,
    });
    return rightmark;
  };

  const quick = (inicio: number, fim: number) => {
    if (inicio >= fim) {
      if (inicio === fim) definitivos.add(inicio);
      return;
    }
    const split = particiona(inicio, fim);
    quick(inicio, split - 1);
    quick(split + 1, fim);
  };

  quick(0, n - 1);
  passos.push({ array: [...lista], sorted: faixa(0, n - 1), label: 'Lista ordenada.' });
  return passos;
};

export interface SortAlgorithm {
  id: string;
  nome: string;
  descricao: string;
  gerar: StepGenerator;
}

/** Os 5 algoritmos de ordenação cobertos pelos slides, na ordem da aula. */
export const SORT_ALGORITHMS: readonly SortAlgorithm[] = [
  {
    id: 'bubble',
    nome: 'Bubble Sort',
    descricao: 'Compara pares adjacentes e troca. Com a flag de troca, para cedo se a lista já estiver ordenada.',
    gerar: bubbleSortSteps,
  },
  {
    id: 'selection',
    nome: 'Selection Sort',
    descricao: 'Versão da aula: procura o MAIOR e o leva para o fim — uma única troca por varredura.',
    gerar: selectionSortSteps,
  },
  {
    id: 'insertion',
    nome: 'Insertion Sort',
    descricao: 'Mantém um prefixo ordenado e insere cada novo valor deslocando os maiores para a direita.',
    gerar: insertionSortSteps,
  },
  {
    id: 'shell',
    nome: 'Shell Sort',
    descricao: 'Insertion sort sobre sublistas intercaladas por um gap que diminui até 1.',
    gerar: shellSortSteps,
  },
  {
    id: 'quick',
    nome: 'Quick Sort',
    descricao: 'Pivô no 1º elemento; leftmark e rightmark convergem até cruzarem no split point.',
    gerar: quickSortSteps,
  },
];
