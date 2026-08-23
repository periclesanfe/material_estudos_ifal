import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const MTSI_GUIDE_CONTEXT = `
GUIA COMPLETO DE MATEMÁTICA PARA SISTEMAS DE INFORMAÇÃO (MTSI) - Resumo:

1. A DISCIPLINA: componente do 2º período, 80 horas, eixo de Formação Básica. A ementa oficial do PPC é: Sistemas Lineares, Matrizes, Transformações Lineares, Relações, Funções, Recursão e Grafos. É a matemática que sustenta a computação — não a matemática do ensino médio revisada, mas as estruturas que reaparecem em estrutura de dados, computação gráfica, banco de dados e algoritmos. O desenho do currículo é explícito: LMMD, no 1º período, cobre lógica, conjuntos, teoria dos números e indução; MTSI, no 2º, cobre álgebra linear e as estruturas discretas; e ESTD, no 3º, aplica tudo isso em listas, pilhas, filas e árvores.

2. MATRIZES — DEFINIÇÃO E TIPOS: uma matriz é uma tabela retangular de números organizada em m linhas e n colunas, dita de ordem m×n. O elemento da linha i e coluna j é indicado por a com índices i e j. Matriz LINHA tem uma única linha (1×n); matriz COLUNA tem uma única coluna (m×1); matriz QUADRADA tem m = n, e só nela fazem sentido diagonal, traço e determinante. A DIAGONAL PRINCIPAL de uma matriz quadrada reúne os elementos em que i = j. Matriz NULA tem todos os elementos iguais a zero. Matriz DIAGONAL é quadrada e tem zeros fora da diagonal principal. Matriz IDENTIDADE (I) é diagonal com todos os elementos da diagonal iguais a 1 — é o elemento neutro da multiplicação. Matriz TRIANGULAR SUPERIOR tem zeros abaixo da diagonal; INFERIOR, zeros acima. Matriz SIMÉTRICA é aquela igual à sua transposta. Em computação, a matriz é o array bidimensional, e a correspondência é direta: percorrer uma matriz é o for aninhado.

3. OPERAÇÕES COM MATRIZES: a ADIÇÃO só é definida entre matrizes de MESMA ORDEM e é feita elemento a elemento; é comutativa e associativa. A MULTIPLICAÇÃO POR ESCALAR multiplica cada elemento pelo número. A TRANSPOSTA troca linhas por colunas: a transposta de uma matriz m×n é n×m. A MULTIPLICAÇÃO DE MATRIZES é a operação que quebra a intuição: só é definida quando o número de COLUNAS da primeira é igual ao número de LINHAS da segunda, e o resultado tem o número de linhas da primeira e o de colunas da segunda — uma matriz m×n multiplicada por uma n×p resulta em m×p. Cada elemento do resultado é a soma dos produtos da linha correspondente da primeira pela coluna correspondente da segunda. A multiplicação de matrizes NÃO É COMUTATIVA: A vezes B em geral difere de B vezes A, e pode até ser que um dos produtos exista e o outro não. Ela é, porém, associativa e distributiva em relação à adição. O custo do algoritmo ingênuo de multiplicação é O(n³), o que torna essa operação um exemplo clássico de análise de complexidade.

4. DETERMINANTE E MATRIZ INVERSA: o determinante é um número associado a toda matriz QUADRADA. Para a matriz de ordem 2, é o produto da diagonal principal menos o produto da diagonal secundária. Para a de ordem 3, usa-se a Regra de Sarrus, repetindo as duas primeiras colunas ao lado e somando os produtos das diagonais descendentes menos os das ascendentes. Para ordens maiores, usa-se o Teorema de Laplace, que expande o determinante em cofatores. A interpretação geométrica é útil: o determinante mede como a transformação associada altera áreas (em 2D) ou volumes (em 3D); determinante negativo indica inversão de orientação. Uma matriz é INVERSÍVEL (ou não singular) se e somente se seu determinante é DIFERENTE DE ZERO. A matriz inversa, indicada por A elevado a menos um, é aquela que multiplicada por A resulta na identidade. Determinante zero significa que a transformação achata o espaço numa dimensão menor, destruindo informação — e por isso não há como desfazê-la.

5. SISTEMAS LINEARES: um sistema linear é um conjunto de equações do primeiro grau nas mesmas incógnitas, e pode ser escrito na forma matricial A·x = b, em que A é a matriz dos coeficientes, x o vetor das incógnitas e b o vetor dos termos independentes. Quanto à solução, um sistema é POSSÍVEL E DETERMINADO (SPD) quando tem solução única; POSSÍVEL E INDETERMINADO (SPI) quando tem infinitas soluções; e IMPOSSÍVEL (SI) quando não tem solução alguma. Geometricamente, num sistema de duas equações e duas incógnitas: retas concorrentes dão solução única, retas coincidentes dão infinitas soluções e retas paralelas distintas dão sistema impossível. A REGRA DE CRAMER resolve sistemas em que o número de equações é igual ao de incógnitas e o determinante da matriz dos coeficientes é diferente de zero: cada incógnita é o quociente entre o determinante da matriz com a coluna correspondente substituída pelos termos independentes e o determinante da matriz original. Cramer é elegante mas ineficiente: exige calcular n+1 determinantes, o que a torna impraticável para sistemas grandes. O ESCALONAMENTO (eliminação de Gauss) é o método efetivamente usado: aplica operações elementares sobre as linhas — trocar duas linhas de lugar, multiplicar uma linha por um escalar não nulo, somar a uma linha um múltiplo de outra — até chegar à forma escalonada, resolvendo então por substituição regressiva. É o algoritmo que os computadores executam, com custo O(n³).

6. TRANSFORMAÇÕES LINEARES: uma transformação linear é uma função entre espaços vetoriais que preserva as duas operações fundamentais — a soma de vetores e a multiplicação por escalar. Formalmente, T(u + v) = T(u) + T(v) e T(k·u) = k·T(u). Uma consequência imediata é que toda transformação linear leva o vetor nulo no vetor nulo: se T(0) é diferente de zero, a função não é linear. Toda transformação linear entre espaços de dimensão finita pode ser representada por uma MATRIZ, e aplicar a transformação a um vetor equivale a multiplicar a matriz pelo vetor — é essa correspondência que torna matrizes tão centrais na computação. As transformações do plano mais usadas em computação gráfica são a ESCALA (multiplica coordenadas por fatores), a ROTAÇÃO (por um ângulo, usando senos e cossenos), o CISALHAMENTO (inclina a figura) e a REFLEXÃO (espelha em relação a um eixo). A COMPOSIÇÃO de transformações corresponde ao PRODUTO das matrizes, e é justamente por a multiplicação de matrizes não ser comutativa que rotacionar e depois transladar produz resultado diferente de transladar e depois rotacionar. A translação, por não preservar a origem, não é uma transformação linear — daí o uso de COORDENADAS HOMOGÊNEAS na computação gráfica, que acrescentam uma dimensão para permitir representar translações também como multiplicação de matrizes.

7. RELAÇÕES: dados dois conjuntos A e B, o PRODUTO CARTESIANO A×B é o conjunto de todos os pares ordenados (a, b) com a em A e b em B; se A tem m elementos e B tem n, então A×B tem m·n pares. Uma RELAÇÃO de A em B é qualquer subconjunto do produto cartesiano — ou seja, um critério que seleciona quais pares interessam. O DOMÍNIO da relação é o conjunto dos primeiros elementos dos pares; a IMAGEM é o conjunto dos segundos. Uma relação pode ser representada por conjunto de pares, por diagrama de flechas, por grafo ou por MATRIZ DE ADJACÊNCIA — e essa última representação é a ponte direta para a implementação em computador.

8. PROPRIEDADES DAS RELAÇÕES E RELAÇÃO DE EQUIVALÊNCIA: uma relação R sobre um conjunto A é REFLEXIVA quando todo elemento se relaciona consigo mesmo; SIMÉTRICA quando, sempre que a se relaciona com b, b também se relaciona com a; TRANSITIVA quando, sempre que a se relaciona com b e b com c, então a se relaciona com c; e ANTISSIMÉTRICA quando, se a se relaciona com b e b com a, então a e b são iguais. Uma relação que é reflexiva, simétrica e transitiva ao mesmo tempo é uma RELAÇÃO DE EQUIVALÊNCIA, e ela particiona o conjunto em CLASSES DE EQUIVALÊNCIA — subconjuntos disjuntos cuja união é o conjunto todo. O exemplo canônico é a congruência módulo n, que particiona os inteiros em n classes de resto. Uma relação reflexiva, antissimétrica e transitiva é uma RELAÇÃO DE ORDEM PARCIAL, que fundamenta a ordenação topológica usada em compiladores e em resolução de dependências.

9. FUNÇÕES: uma função de A em B é uma relação em que CADA elemento de A se associa a EXATAMENTE UM elemento de B — as duas exigências são todo elemento do domínio ter imagem, e ter apenas uma. O DOMÍNIO é o conjunto de partida, o CONTRADOMÍNIO é o conjunto de chegada e a IMAGEM é o subconjunto do contradomínio efetivamente atingido. Uma função é INJETORA quando elementos distintos do domínio têm imagens distintas (nunca dois entram no mesmo lugar); SOBREJETORA quando a imagem é igual ao contradomínio (todo elemento de chegada é atingido); e BIJETORA quando é injetora e sobrejetora ao mesmo tempo. Só funções bijetoras admitem FUNÇÃO INVERSA. A COMPOSIÇÃO de funções, indicada por f composta com g, aplica primeiro g e depois f, e não é comutativa. Em computação, a injetividade é a propriedade que uma função de hash idealmente teria e nunca tem — colisões são exatamente falhas de injetividade — e a bijetividade é o que garante que uma codificação possa ser decodificada sem perda.

10. RECURSÃO: uma definição é recursiva quando se refere a si mesma em instâncias menores. Toda recursão bem formada tem dois componentes: um ou mais CASOS BASE, que encerram a recursão sem chamá-la de novo, e o PASSO RECURSIVO, que reduz o problema a uma instância menor. Faltar caso base, ou o passo não aproximar do caso base, produz recursão infinita — que na prática estoura a pilha de execução (stack overflow). O fatorial é o exemplo mínimo: 0! = 1 como caso base, e n! = n·(n−1)! como passo. A sequência de FIBONACCI define F(0) = 0 e F(1) = 1 como casos base e F(n) = F(n−1) + F(n−2) como passo; sua implementação recursiva ingênua tem custo exponencial, aproximadamente O(2^n), porque recalcula os mesmos valores muitas vezes — o que a torna o exemplo clássico de motivação para MEMOIZAÇÃO e programação dinâmica, que reduzem o custo a O(n). As Torres de Hanói exigem 2^n − 1 movimentos para n discos. Recursão e INDUÇÃO MATEMÁTICA são a mesma ideia em direções opostas: a indução prova que uma propriedade vale para todos os naturais partindo do caso base e do passo indutivo, e é a ferramenta natural para provar que um algoritmo recursivo está correto. Toda recursão pode ser convertida em iteração com o uso explícito de uma pilha, e a RECURSÃO DE CAUDA — em que a chamada recursiva é a última operação — pode ser otimizada pelo compilador para não consumir pilha adicional.

11. GRAFOS — DEFINIÇÕES: um grafo G é um par formado por um conjunto V de VÉRTICES (ou nós) e um conjunto E de ARESTAS que conectam pares de vértices. Em um grafo NÃO DIRIGIDO as arestas não têm sentido; em um grafo DIRIGIDO (dígrafo) cada aresta tem origem e destino. Um grafo é PONDERADO quando as arestas carregam pesos, que podem representar distância, custo ou capacidade. O GRAU de um vértice é o número de arestas incidentes nele; em dígrafos distingue-se grau de entrada e grau de saída. O LEMA DO APERTO DE MÃOS afirma que a soma dos graus de todos os vértices é igual ao DOBRO do número de arestas, porque cada aresta contribui com uma unidade para o grau de cada uma de suas duas extremidades — e uma consequência é que todo grafo tem um número PAR de vértices de grau ímpar. Um CAMINHO é uma sequência de vértices ligados por arestas; um CICLO é um caminho que começa e termina no mesmo vértice. Um grafo é CONEXO quando existe caminho entre qualquer par de vértices. Uma ÁRVORE é um grafo conexo e sem ciclos, e uma árvore com n vértices tem exatamente n−1 arestas. Um grafo é COMPLETO quando existe aresta entre todo par de vértices, e o grafo completo com n vértices tem n(n−1)/2 arestas. Um grafo é BIPARTIDO quando seus vértices podem ser divididos em dois conjuntos sem arestas internas a cada conjunto.

12. REPRESENTAÇÃO E PERCURSO DE GRAFOS: a MATRIZ DE ADJACÊNCIA representa o grafo por uma matriz n×n em que a posição (i, j) indica se existe aresta do vértice i para o j; ocupa O(n²) de espaço independentemente do número de arestas, mas responde em O(1) se dois vértices são vizinhos. A LISTA DE ADJACÊNCIA guarda, para cada vértice, a lista de seus vizinhos; ocupa O(V + E) de espaço e é preferível para grafos ESPARSOS, que são a maioria dos casos reais. A matriz de adjacência de um grafo não dirigido é sempre SIMÉTRICA — o que conecta diretamente com o conteúdo de matrizes. Os dois percursos fundamentais são a BUSCA EM LARGURA (BFS), que visita os vértices por camadas usando uma FILA e encontra o caminho mínimo em número de arestas em grafos não ponderados, e a BUSCA EM PROFUNDIDADE (DFS), que avança o máximo possível antes de retroceder, usando uma PILHA (ou a própria pilha de recursão) e servindo para detectar ciclos e para ordenação topológica. Ambas custam O(V + E) com lista de adjacência. Entre os algoritmos clássicos, DIJKSTRA encontra o caminho de menor custo em grafos com pesos não negativos, e KRUSKAL e PRIM constroem a árvore geradora mínima.

13. POR QUE ESTA MATÉRIA EXISTE NO CURSO: cada bloco da ementa reaparece adiante. Matrizes e sistemas lineares sustentam computação gráfica, processamento de imagens, aprendizado de máquina e simulação. Transformações lineares são a base de toda renderização 2D e 3D. Relações fundamentam o modelo relacional de banco de dados — a palavra "relacional" vem exatamente daqui — e a normalização depende de dependências funcionais, que são relações. Funções, com injetividade e bijetividade, explicam hashing, criptografia e codificação. Recursão é o modo natural de percorrer árvores e de dividir para conquistar. E grafos modelam redes de computadores, dependências entre módulos, o grafo da web, redes sociais e roteamento. A disciplina não é pré-requisito burocrático: é o vocabulário com que os problemas de computação são formulados.
`;

export const MTSI_TOPICS: QuizTopicOption[] = [
    {
        value: 'matrizes',
        label: 'Matrizes e determinantes',
        prompt:
            'Matrizes na disciplina Matemática para Sistemas de Informação: definição de matriz m×n e notação dos elementos; tipos (linha, coluna, quadrada, nula, diagonal, identidade, triangular superior e inferior, simétrica); diagonal principal; operações de adição (só entre matrizes de mesma ordem), multiplicação por escalar e transposição; a multiplicação de matrizes com sua condição de compatibilidade (colunas da primeira iguais às linhas da segunda), a ordem do resultado e a não comutatividade; determinante de ordem 2, Regra de Sarrus para ordem 3 e Teorema de Laplace; a interpretação geométrica do determinante como fator de área ou volume; e a condição de inversibilidade (determinante diferente de zero).',
    },
    {
        value: 'sistemas',
        label: 'Sistemas lineares',
        prompt:
            'Sistemas lineares na disciplina Matemática para Sistemas de Informação: a forma matricial A·x = b com matriz dos coeficientes, vetor de incógnitas e vetor de termos independentes; a classificação em sistema possível e determinado (solução única), possível e indeterminado (infinitas soluções) e impossível (sem solução), com a interpretação geométrica de retas concorrentes, coincidentes e paralelas; a Regra de Cramer, sua condição de aplicação e sua ineficiência por exigir n+1 determinantes; e o escalonamento por eliminação de Gauss, com as três operações elementares sobre linhas, a forma escalonada, a substituição regressiva e o custo O(n³).',
    },
    {
        value: 'transformacoes',
        label: 'Transformações lineares',
        prompt:
            'Transformações lineares na disciplina Matemática para Sistemas de Informação: a definição por preservação da soma de vetores e da multiplicação por escalar, e a consequência de que toda transformação linear leva o vetor nulo no vetor nulo; a representação matricial e a equivalência entre aplicar a transformação e multiplicar a matriz pelo vetor; as transformações do plano usadas em computação gráfica (escala, rotação, cisalhamento e reflexão); a composição de transformações como produto de matrizes e a consequência da não comutatividade na ordem das operações; e o motivo de a translação não ser linear, levando ao uso de coordenadas homogêneas.',
    },
    {
        value: 'relacoes-funcoes',
        label: 'Relações e funções',
        prompt:
            'Relações e funções na disciplina Matemática para Sistemas de Informação: produto cartesiano e sua cardinalidade; relação como subconjunto do produto cartesiano, com domínio e imagem; representações por pares, diagrama de flechas, grafo e matriz de adjacência; as propriedades reflexiva, simétrica, transitiva e antissimétrica; relação de equivalência (reflexiva, simétrica e transitiva) e as classes de equivalência que particionam o conjunto, com a congruência módulo n como exemplo; relação de ordem parcial e a ordenação topológica; a definição de função como relação em que cada elemento do domínio tem exatamente uma imagem; domínio, contradomínio e imagem; funções injetoras, sobrejetoras e bijetoras; a existência de inversa apenas para bijeções; composição de funções; e as aplicações em hashing (colisão como falha de injetividade) e codificação.',
    },
    {
        value: 'recursao-grafos',
        label: 'Recursão e grafos',
        prompt:
            'Recursão e grafos na disciplina Matemática para Sistemas de Informação: definição recursiva com caso base e passo recursivo, e o que acontece quando falta o caso base (estouro de pilha); fatorial, Fibonacci com custo exponencial da versão ingênua e a motivação para memoização, e as Torres de Hanói com 2^n − 1 movimentos; a relação entre recursão e indução matemática; recursão de cauda e conversão para iteração; grafos como par de vértices e arestas, dirigidos e não dirigidos, ponderados; grau de vértice e o lema do aperto de mãos (soma dos graus igual ao dobro do número de arestas); caminho, ciclo, conexidade; árvore como grafo conexo sem ciclos com n−1 arestas; grafo completo com n(n−1)/2 arestas; grafo bipartido; matriz de adjacência versus lista de adjacência e seus custos de espaço; e os percursos BFS (com fila) e DFS (com pilha), ambos O(V + E).',
    },
];

export const MTSI_EXAMS: ExamDefinition[] = [
    {
        id: 'algebra',
        label: 'Álgebra linear',
        description: 'Matrizes, determinantes, sistemas lineares e transformações lineares.',
    },
    {
        id: 'discreta',
        label: 'Estruturas discretas',
        description: 'Relações, funções, recursão e grafos.',
    },
];

export const MTSI_SECTIONS = [
    { id: 'intro', shortTitle: 'Introdução', title: 'Matemática para Sistemas de Informação' },
    { id: 'matrizes', shortTitle: 'Matrizes', title: 'Matrizes e seus tipos', exams: ['algebra'] },
    { id: 'operacoes', shortTitle: 'Operações', title: 'Operações com matrizes', exams: ['algebra'] },
    { id: 'determinantes', shortTitle: 'Determinantes', title: 'Determinante e matriz inversa', exams: ['algebra'] },
    { id: 'sistemas', shortTitle: 'Sistemas', title: 'Sistemas lineares', exams: ['algebra'] },
    { id: 'escalonamento', shortTitle: 'Escalonamento', title: 'Cramer e eliminação de Gauss', exams: ['algebra'] },
    { id: 'transformacoes', shortTitle: 'Transformações', title: 'Transformações lineares', exams: ['algebra'] },
    { id: 'relacoes', shortTitle: 'Relações', title: 'Produto cartesiano e relações', exams: ['discreta'] },
    { id: 'equivalencia', shortTitle: 'Equivalência', title: 'Propriedades e classes de equivalência', exams: ['discreta'] },
    { id: 'funcoes', shortTitle: 'Funções', title: 'Funções, injeção e bijeção', exams: ['discreta'] },
    { id: 'recursao', shortTitle: 'Recursão', title: 'Definições recursivas', exams: ['discreta'] },
    { id: 'grafos', shortTitle: 'Grafos', title: 'Grafos: definições e propriedades', exams: ['discreta'] },
    { id: 'percursos', shortTitle: 'Percursos', title: 'Representação e percurso de grafos', exams: ['discreta'] },
    { id: 'aplicacoes', shortTitle: 'Aplicações', title: 'Onde cada bloco reaparece no curso' },
    { id: 'quiz', shortTitle: 'Quiz', title: 'Quiz de Revisão' },
] as const;

export type MtsiSectionId = (typeof MTSI_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['algebra'],
        question: 'Uma matriz A é de ordem 3×5. O que isso significa?',
        options: ['3 colunas e 5 linhas', '3 linhas e 5 colunas', '3 elementos por linha e 5 no total', 'É uma matriz quadrada de lado 15'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — a convenção é sempre LINHAS × COLUNAS, nessa ordem. Confundir isso é a origem da maior parte dos erros em multiplicação de matrizes, onde a ordem determina se a operação sequer existe.',
        feedbackWrong:
            'A ordem m×n significa m LINHAS e n COLUNAS. Uma matriz 3×5 tem 3 linhas e 5 colunas, totalizando 15 elementos.',
    },
    {
        id: 'q2',
        exams: ['algebra'],
        question: 'O que caracteriza a matriz IDENTIDADE?',
        options: [
            'Todos os elementos iguais a 1',
            'É quadrada, com 1 em toda a diagonal principal e 0 nas demais posições',
            'Todos os elementos iguais a 0',
            'Os elementos acima da diagonal são 0',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Ela é o elemento neutro da multiplicação: A·I = I·A = A. É o análogo matricial do número 1 — e uma das poucas matrizes que comuta com qualquer outra de ordem compatível.',
        feedbackWrong:
            'A identidade tem 1 na diagonal principal e 0 fora dela. Todos os elementos iguais a 1 seria outra matriz qualquer; todos iguais a 0 é a matriz nula.',
    },
    {
        id: 'q3',
        exams: ['algebra'],
        question: 'Quais elementos formam a DIAGONAL PRINCIPAL de uma matriz quadrada?',
        options: [
            'Os elementos da primeira linha',
            'Os elementos em que o índice da linha é igual ao da coluna (i = j)',
            'Os elementos em que i + j = n + 1',
            'Os elementos da última coluna',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: são os elementos com i = j. A terceira alternativa descreve a diagonal SECUNDÁRIA, que aparece no cálculo do determinante de ordem 2.',
        feedbackWrong:
            'A diagonal principal reúne os elementos em que i = j. A condição i + j = n + 1 define a diagonal secundária — as duas aparecem juntas no determinante de ordem 2.',
    },
    {
        id: 'q4',
        exams: ['algebra'],
        question: 'Sob que condição a ADIÇÃO de duas matrizes é definida?',
        options: [
            'Quando ambas são quadradas',
            'Quando têm exatamente a MESMA ORDEM',
            'Quando o número de colunas da primeira é igual ao de linhas da segunda',
            'Sempre — basta completar com zeros',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: mesma ordem, e a soma é feita elemento a elemento. A terceira alternativa é a condição da MULTIPLICAÇÃO — confundir as duas é um erro clássico.',
        feedbackWrong:
            'A adição exige mesma ordem, porque é feita posição a posição. A condição de colunas igual a linhas é a da multiplicação, que é uma operação bem diferente.',
    },
    {
        id: 'q5',
        exams: ['algebra'],
        question:
            'Se A é 2×3 e B é 3×4, qual é a ordem do produto A·B — e o produto B·A existe?',
        options: [
            'A·B é 2×4; B·A não existe',
            'A·B é 3×3; B·A é 3×3',
            'A·B é 2×4; B·A é 4×2',
            'Nenhum dos dois existe',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. A·B existe porque as 3 colunas de A batem com as 3 linhas de B, e o resultado herda as linhas de A e as colunas de B: 2×4. Já B·A exigiria que as 4 colunas de B batessem com as 2 linhas de A — não batem. É a demonstração mais clara de que a multiplicação não é comutativa: às vezes um dos produtos nem existe.',
        feedbackWrong:
            'A·B é 2×4 (linhas de A por colunas de B). B·A não existe: as 4 colunas de B não correspondem às 2 linhas de A. A condição de compatibilidade precisa valer na ordem em que se multiplica.',
    },
    {
        id: 'q6',
        exams: ['algebra'],
        question: 'A multiplicação de matrizes é comutativa?',
        options: [
            'Sim, sempre',
            'Não — em geral A·B ≠ B·A, e às vezes um dos produtos nem existe',
            'Sim, desde que ambas sejam quadradas de mesma ordem',
            'Só quando o determinante é diferente de zero',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Mesmo entre quadradas de mesma ordem, em que os dois produtos existem, eles em geral diferem. Essa é a razão pela qual, em computação gráfica, rotacionar e depois transladar produz resultado diferente de transladar e depois rotacionar.',
        feedbackWrong:
            'Não é comutativa. Ser quadrada de mesma ordem garante que os dois produtos EXISTEM, mas não que sejam iguais. A multiplicação é associativa e distributiva, mas não comutativa.',
    },
    {
        id: 'q7',
        exams: ['algebra'],
        question: 'O que faz a operação de TRANSPOSIÇÃO?',
        options: [
            'Inverte o sinal de todos os elementos',
            'Troca as linhas pelas colunas — a transposta de uma m×n é n×m',
            'Calcula a matriz inversa',
            'Reordena as linhas em ordem crescente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Uma matriz igual à sua própria transposta é chamada SIMÉTRICA — e um fato útil: a matriz de adjacência de todo grafo não dirigido é simétrica.',
        feedbackWrong:
            'A transposição troca linhas por colunas. Não confunda com a INVERSA, que é a matriz que multiplicada pela original resulta na identidade — coisa bem mais difícil de calcular.',
    },
    {
        id: 'q8',
        exams: ['algebra'],
        question: 'Como se calcula o determinante de uma matriz de ordem 2?',
        options: [
            'Somando todos os elementos',
            'Produto da diagonal principal MENOS produto da diagonal secundária',
            'Produto de todos os elementos',
            'Soma da diagonal principal (o traço)',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: para a matriz com linhas (a b) e (c d), o determinante é ad − bc. A soma da diagonal principal é o TRAÇO, uma grandeza diferente.',
        feedbackWrong:
            'É o produto da diagonal principal menos o da secundária: ad − bc. A soma da diagonal principal chama-se traço e tem outras aplicações.',
    },
    {
        id: 'q9',
        exams: ['algebra'],
        question: 'Para que serve a REGRA DE SARRUS?',
        options: [
            'Resolver sistemas lineares de qualquer ordem',
            'Calcular o determinante de matrizes de ordem 3, repetindo as duas primeiras colunas ao lado',
            'Inverter matrizes de ordem 2',
            'Escalonar uma matriz',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a limitação importa: Sarrus vale APENAS para ordem 3. Para ordens maiores é preciso o Teorema de Laplace, que expande o determinante em cofatores.',
        feedbackWrong:
            'Sarrus calcula determinante de ordem 3 (e só de ordem 3). Aplicá-la a matrizes 4×4 é um erro comum — nesses casos usa-se Laplace.',
    },
    {
        id: 'q10',
        exams: ['algebra'],
        question: 'Qual é a condição para uma matriz quadrada ser INVERSÍVEL?',
        options: [
            'Ter todos os elementos diferentes de zero',
            'Ter determinante DIFERENTE DE ZERO',
            'Ser simétrica',
            'Ter determinante igual a zero',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. E a interpretação geométrica explica o porquê: determinante zero significa que a transformação achata o espaço numa dimensão menor, destruindo informação — não há como desfazer o que foi achatado.',
        feedbackWrong:
            'A condição é determinante diferente de zero. Determinante zero caracteriza matriz SINGULAR, que não tem inversa — geometricamente, ela colapsa o espaço.',
    },
    {
        id: 'q11',
        exams: ['algebra'],
        question: 'Qual é a interpretação geométrica do determinante?',
        options: [
            'A distância entre dois vetores',
            'O fator pelo qual a transformação multiplica áreas (em 2D) ou volumes (em 3D)',
            'O ângulo de rotação aplicado',
            'A soma dos comprimentos dos vetores-coluna',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o sinal também informa: determinante negativo indica que a transformação inverteu a orientação, como faz uma reflexão. Determinante zero significa área ou volume nulo: o espaço foi achatado.',
        feedbackWrong:
            'O determinante mede como a transformação altera áreas ou volumes. Essa leitura explica de imediato por que determinante zero impede a inversão: informação foi perdida no achatamento.',
    },
    {
        id: 'q12',
        exams: ['algebra'],
        question: 'Como se escreve um sistema linear na forma matricial?',
        options: [
            'A + x = b',
            'A·x = b, com A a matriz dos coeficientes, x o vetor das incógnitas e b o dos termos independentes',
            'x·A = b, sempre nessa ordem',
            'A·b = x',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Essa forma é o que permite tratar um sistema como UM objeto e resolvê-lo com operações de matriz — e é assim que bibliotecas numéricas recebem o problema.',
        feedbackWrong:
            'A forma é A·x = b. A ordem importa: A multiplica x pela esquerda, e as dimensões precisam ser compatíveis nessa ordem.',
    },
    {
        id: 'q13',
        exams: ['algebra'],
        question: 'Um sistema linear com INFINITAS soluções é classificado como:',
        options: [
            'Sistema Possível e Determinado (SPD)',
            'Sistema Possível e Indeterminado (SPI)',
            'Sistema Impossível (SI)',
            'Sistema Homogêneo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. SPD tem solução única, SPI tem infinitas e SI não tem nenhuma. Geometricamente, com duas equações e duas incógnitas: concorrentes → SPD, coincidentes → SPI, paralelas distintas → SI.',
        feedbackWrong:
            'Infinitas soluções caracterizam o SPI — possível (existe solução) e indeterminado (não é única). O SPD tem solução única; o SI não tem solução.',
    },
    {
        id: 'q14',
        exams: ['algebra'],
        question:
            'Num sistema de duas equações e duas incógnitas, o que significa geometricamente as retas serem PARALELAS DISTINTAS?',
        options: [
            'O sistema tem solução única',
            'O sistema é IMPOSSÍVEL — não há ponto comum às duas retas',
            'O sistema tem infinitas soluções',
            'O determinante é diferente de zero',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Resolver o sistema é achar onde as retas se encontram; paralelas distintas nunca se encontram, logo não há solução. Retas coincidentes seriam infinitas soluções.',
        feedbackWrong:
            'Paralelas distintas não têm ponto em comum, então o sistema é impossível. Coincidentes dariam infinitas soluções, e concorrentes dariam solução única.',
    },
    {
        id: 'q15',
        exams: ['algebra'],
        question: 'Qual é a principal limitação prática da REGRA DE CRAMER?',
        options: [
            'Só funciona para sistemas de duas incógnitas',
            'É ineficiente: exige calcular n+1 determinantes, tornando-se impraticável para sistemas grandes',
            'Não fornece solução exata',
            'Só se aplica a sistemas impossíveis',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — Cramer é elegante para demonstrar e resolver sistemas pequenos à mão, mas o custo explode. Na prática, computadores usam ESCALONAMENTO (eliminação de Gauss), com custo O(n³).',
        feedbackWrong:
            'A limitação é de eficiência: n+1 determinantes é caro demais. Cramer é exata e vale para qualquer n, desde que o determinante dos coeficientes seja diferente de zero — mas não é o que se usa na prática.',
    },
    {
        id: 'q16',
        exams: ['algebra'],
        question: 'Quais são as três OPERAÇÕES ELEMENTARES permitidas no escalonamento?',
        options: [
            'Somar, subtrair e multiplicar colunas',
            'Trocar duas linhas de lugar; multiplicar uma linha por escalar não nulo; somar a uma linha um múltiplo de outra',
            'Transpor, inverter e calcular o determinante',
            'Eliminar linhas nulas, duplicar linhas e reordenar colunas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e as três preservam o conjunto solução do sistema, que é o que torna o método válido. Repare a exigência de escalar NÃO NULO: multiplicar uma linha por zero apagaria uma equação.',
        feedbackWrong:
            'São trocar linhas, multiplicar linha por escalar não nulo e somar a uma linha um múltiplo de outra. Todas operam sobre LINHAS (equações), e todas preservam o conjunto solução.',
    },
    {
        id: 'q17',
        exams: ['algebra'],
        question: 'Que condições definem uma TRANSFORMAÇÃO LINEAR?',
        options: [
            'Ser contínua e derivável',
            'Preservar a soma de vetores e a multiplicação por escalar: T(u+v) = T(u)+T(v) e T(k·u) = k·T(u)',
            'Ser representada por uma matriz quadrada',
            'Levar retas em retas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — as duas condições juntas. Uma consequência imediata e muito útil como teste rápido: toda transformação linear leva o vetor nulo no vetor nulo. Se T(0) ≠ 0, a função não é linear.',
        feedbackWrong:
            'São as duas condições de preservação: da soma e da multiplicação por escalar. Ser representável por matriz é uma CONSEQUÊNCIA da linearidade, não a definição.',
    },
    {
        id: 'q18',
        exams: ['algebra'],
        question: 'Por que a TRANSLAÇÃO não é uma transformação linear?',
        options: [
            'Porque não pode ser representada por matriz alguma',
            'Porque não preserva a origem: ela leva o vetor nulo em um vetor não nulo',
            'Porque não é contínua',
            'Porque altera áreas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Toda transformação linear fixa a origem, e a translação por definição a desloca. É precisamente por isso que a computação gráfica usa COORDENADAS HOMOGÊNEAS: acrescentando uma dimensão, a translação também vira multiplicação de matriz.',
        feedbackWrong:
            'A translação move a origem, violando T(0) = 0. A solução prática são as coordenadas homogêneas, que permitem representá-la como matriz numa dimensão a mais.',
    },
    {
        id: 'q19',
        exams: ['algebra'],
        question: 'A COMPOSIÇÃO de duas transformações lineares corresponde a qual operação nas matrizes?',
        options: ['À soma das matrizes', 'AO PRODUTO das matrizes', 'À transposição', 'À média dos elementos'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a não comutatividade do produto tem consequência visual direta: rotacionar e depois escalar produz resultado diferente de escalar e depois rotacionar. A ordem das matrizes é a ordem das operações.',
        feedbackWrong:
            'Compor transformações equivale a MULTIPLICAR suas matrizes. A soma de matrizes corresponderia a somar os resultados das duas transformações, que é outra coisa.',
    },
    {
        id: 'q20',
        exams: ['discreta'],
        question: 'Se A tem 4 elementos e B tem 3, quantos pares tem o produto cartesiano A×B?',
        options: ['7', '12', '4', '64'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: 4 × 3 = 12. Cada elemento de A se combina com cada um de B, e a ordem no par importa — (a,b) é diferente de (b,a).',
        feedbackWrong:
            'São 12 pares: |A×B| = |A| · |B| = 4 · 3. Somar daria 7, que não corresponde a nenhuma contagem de pares.',
    },
    {
        id: 'q21',
        exams: ['discreta'],
        question: 'O que é uma RELAÇÃO de A em B?',
        options: [
            'Uma função que associa cada elemento de A a um de B',
            'Qualquer SUBCONJUNTO do produto cartesiano A×B',
            'O conjunto de todos os pares ordenados de A e B',
            'Uma correspondência que precisa ser reflexiva',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — qualquer subconjunto serve, inclusive o vazio e o produto inteiro. Uma relação é apenas um critério que seleciona quais pares interessam. Toda função é uma relação, mas nem toda relação é função.',
        feedbackWrong:
            'Relação é qualquer subconjunto de A×B. O produto cartesiano completo é apenas UMA das relações possíveis. E função é um caso particular de relação, com exigências adicionais.',
    },
    {
        id: 'q22',
        exams: ['discreta'],
        question: 'Uma relação R sobre A é SIMÉTRICA quando:',
        options: [
            'Todo elemento se relaciona consigo mesmo',
            'Sempre que a se relaciona com b, b também se relaciona com a',
            'Se a se relaciona com b e b com c, então a se relaciona com c',
            'Se a se relaciona com b e b com a, então a = b',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As outras alternativas definem, na ordem, reflexividade, transitividade e antissimetria — as quatro propriedades que caracterizam relações de equivalência e de ordem.',
        feedbackWrong:
            'Simetria é a ida e volta: aRb implica bRa. A primeira alternativa é reflexividade, a terceira é transitividade e a quarta é antissimetria.',
    },
    {
        id: 'q23',
        exams: ['discreta'],
        question: 'Quais propriedades caracterizam uma RELAÇÃO DE EQUIVALÊNCIA?',
        options: [
            'Reflexiva, simétrica e transitiva',
            'Reflexiva, antissimétrica e transitiva',
            'Simétrica e transitiva apenas',
            'Injetora, sobrejetora e bijetora',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato: reflexiva, simétrica e transitiva. E a consequência é importante — toda relação de equivalência PARTICIONA o conjunto em classes disjuntas cuja união é o conjunto todo. A congruência módulo n é o exemplo canônico.',
        feedbackWrong:
            'São reflexiva, SIMÉTRICA e transitiva. Reflexiva, ANTISSIMÉTRICA e transitiva define relação de ORDEM PARCIAL, que é outra estrutura.',
    },
    {
        id: 'q24',
        exams: ['discreta'],
        question: 'O que uma relação de equivalência produz no conjunto sobre o qual está definida?',
        options: [
            'Uma ordenação total dos elementos',
            'Uma PARTIÇÃO em classes de equivalência disjuntas cuja união é o conjunto todo',
            'Uma numeração dos elementos',
            'Um grafo completo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A congruência módulo n, por exemplo, particiona os inteiros em exatamente n classes de resto. É a base formal do operador de módulo e das tabelas de hash.',
        feedbackWrong:
            'Ela particiona o conjunto em classes de equivalência: subconjuntos disjuntos que cobrem tudo. Ordenação é o que produz uma relação de ordem, não de equivalência.',
    },
    {
        id: 'q25',
        exams: ['discreta'],
        question: 'Qual relação é uma FUNÇÃO de A em B?',
        options: [
            'Aquela em que algum elemento de A se associa a algum de B',
            'Aquela em que CADA elemento de A se associa a EXATAMENTE UM elemento de B',
            'Aquela em que cada elemento de B vem de exatamente um de A',
            'Aquela em que A e B têm o mesmo número de elementos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — duas exigências: todo elemento do domínio precisa ter imagem, e precisa ter apenas uma. A terceira alternativa descreve injetividade combinada com sobrejetividade, que é outra coisa.',
        feedbackWrong:
            'Função exige que TODO elemento de A tenha imagem, e que ela seja ÚNICA. Faltar imagem ou ter duas descaracteriza a função.',
    },
    {
        id: 'q26',
        exams: ['discreta'],
        question: 'Uma função é INJETORA quando:',
        options: [
            'A imagem é igual ao contradomínio',
            'Elementos distintos do domínio têm imagens DISTINTAS',
            'É injetora e sobrejetora ao mesmo tempo',
            'Todo elemento do contradomínio é atingido',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — nunca dois elementos caem no mesmo lugar. É exatamente a propriedade que uma função de hash idealmente teria e nunca tem: COLISÃO é precisamente uma falha de injetividade.',
        feedbackWrong:
            'Injetora significa que elementos distintos têm imagens distintas. Imagem igual ao contradomínio é SOBREJETORA; as duas juntas fazem uma BIJEÇÃO.',
    },
    {
        id: 'q27',
        exams: ['discreta'],
        question: 'Que tipo de função admite FUNÇÃO INVERSA?',
        options: ['Toda função', 'Apenas as BIJETORAS', 'Apenas as injetoras', 'Apenas as sobrejetoras'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Sem injetividade, a inversa não saberia para qual origem voltar; sem sobrejetividade, haveria elementos sem origem definida. Em computação, é o que garante que uma codificação possa ser decodificada sem perda.',
        feedbackWrong:
            'Só bijeções têm inversa. Injetora sozinha não basta (sobram elementos sem origem), nem sobrejetora sozinha (haveria ambiguidade na volta).',
    },
    {
        id: 'q28',
        exams: ['discreta'],
        question: 'Na composição f ∘ g, qual função é aplicada PRIMEIRO?',
        options: ['f', 'g', 'As duas simultaneamente', 'Depende do domínio'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — lê-se da direita para a esquerda: aplica-se g e depois f. Como a multiplicação de matrizes, a composição não é comutativa: f ∘ g em geral difere de g ∘ f.',
        feedbackWrong:
            'Aplica-se g primeiro, depois f. A notação engana porque f aparece à esquerda, mas a leitura é da direita para a esquerda.',
    },
    {
        id: 'q29',
        exams: ['discreta'],
        question: 'Quais são os dois componentes obrigatórios de uma definição recursiva bem formada?',
        options: [
            'Um laço e uma condição de parada',
            'Um ou mais CASOS BASE e o PASSO RECURSIVO',
            'Uma função e uma variável global',
            'Uma pilha e uma fila',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O caso base encerra a recursão sem chamá-la de novo; o passo reduz o problema a uma instância menor. Faltar o caso base — ou o passo não aproximar dele — produz recursão infinita e estouro de pilha.',
        feedbackWrong:
            'São o caso base e o passo recursivo. O caso base é o que impede a recursão infinita, e o passo é o que garante progresso em direção a ele.',
    },
    {
        id: 'q30',
        exams: ['discreta'],
        question: 'Por que a implementação recursiva ingênua de Fibonacci é ineficiente?',
        options: [
            'Porque usa muita memória para guardar os resultados',
            'Porque RECALCULA os mesmos valores muitas vezes, com custo aproximadamente O(2^n)',
            'Porque não tem caso base',
            'Porque só funciona para n pequeno por limitação de tipo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — a árvore de chamadas repete subproblemas exponencialmente. É o exemplo clássico de motivação para MEMOIZAÇÃO e programação dinâmica, que guardam os resultados já calculados e derrubam o custo para O(n).',
        feedbackWrong:
            'O problema é o recálculo repetido dos mesmos subproblemas, gerando custo exponencial. A solução — memoização — justamente ACRESCENTA memória para economizar tempo.',
    },
    {
        id: 'q31',
        exams: ['discreta'],
        question: 'Quantos movimentos são necessários para resolver as Torres de Hanói com n discos?',
        options: ['n²', '2^n − 1', 'n(n−1)/2', 'n!'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: 2^n − 1. Com 3 discos são 7 movimentos; com 20 discos, mais de um milhão. É crescimento exponencial, e o problema é o exemplo didático mais usado de recursão com dois casos recursivos.',
        feedbackWrong:
            'São 2^n − 1 movimentos. A expressão n(n−1)/2 conta arestas de um grafo completo, e n! é o número de permutações.',
    },
    {
        id: 'q32',
        exams: ['discreta'],
        question: 'Qual é a relação entre RECURSÃO e INDUÇÃO MATEMÁTICA?',
        options: [
            'Não têm relação; pertencem a áreas distintas',
            'São a mesma ideia em direções opostas: a indução prova o que a recursão constrói, partindo do caso base e do passo',
            'A indução é um caso particular de recursão de cauda',
            'A recursão só se aplica a números; a indução, a conjuntos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a consequência prática é direta: a indução é a ferramenta natural para PROVAR que um algoritmo recursivo está correto, porque a estrutura da prova espelha a estrutura do algoritmo.',
        feedbackWrong:
            'São a mesma estrutura em direções opostas: caso base e passo aparecem nas duas. Por isso a indução é a forma natural de provar a correção de algoritmos recursivos.',
    },
    {
        id: 'q33',
        exams: ['discreta'],
        question: 'O que é a RECURSÃO DE CAUDA e por que ela importa?',
        options: [
            'Aquela que só tem um caso base; importa por ser mais simples',
            'Aquela em que a chamada recursiva é a ÚLTIMA operação; pode ser otimizada pelo compilador para não consumir pilha adicional',
            'Aquela que recursa sobre o último elemento de uma lista',
            'Aquela que sempre estoura a pilha',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Como não há nada a fazer depois da chamada, o compilador pode reaproveitar o mesmo quadro de pilha, transformando a recursão em iteração. É por isso que algumas linguagens executam recursões profundas sem estourar a pilha.',
        feedbackWrong:
            'Recursão de cauda é aquela cuja chamada recursiva é a última operação da função, permitindo a otimização de reaproveitar o quadro de pilha (tail call optimization).',
    },
    {
        id: 'q34',
        exams: ['discreta'],
        question: 'O que é formalmente um GRAFO?',
        options: [
            'Uma matriz quadrada de zeros e uns',
            'Um par formado por um conjunto de VÉRTICES e um conjunto de ARESTAS que conectam pares de vértices',
            'Uma árvore com ciclos',
            'Um desenho com pontos e linhas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: G = (V, E). O desenho é apenas uma representação possível — a matriz de adjacência é outra, e a lista de adjacência é uma terceira. A estrutura matemática independe de como se escolhe representá-la.',
        feedbackWrong:
            'Grafo é o par (V, E): vértices e arestas. Matriz de adjacência e desenho são REPRESENTAÇÕES do grafo, não a sua definição.',
    },
    {
        id: 'q35',
        exams: ['discreta'],
        question: 'O que afirma o LEMA DO APERTO DE MÃOS?',
        options: [
            'Todo grafo conexo tem pelo menos n−1 arestas',
            'A soma dos graus de todos os vértices é igual ao DOBRO do número de arestas',
            'Todo grafo tem número par de vértices',
            'A soma dos graus é igual ao número de vértices',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e a razão é simples: cada aresta tem duas pontas, contribuindo com 1 para o grau de cada uma. Uma consequência elegante é que todo grafo tem um número PAR de vértices de grau ímpar.',
        feedbackWrong:
            'A soma dos graus é o dobro do número de arestas, porque cada aresta é contada nas suas duas extremidades. Daí decorre que o número de vértices de grau ímpar é sempre par.',
    },
    {
        id: 'q36',
        exams: ['discreta'],
        question: 'Quantas arestas tem uma ÁRVORE com n vértices?',
        options: ['n', 'n − 1', 'n(n−1)/2', '2n'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: exatamente n−1. Árvore é grafo conexo e sem ciclos, e essa é a quantidade mínima de arestas para manter n vértices conectados — acrescentar qualquer aresta cria um ciclo, e remover qualquer uma desconecta.',
        feedbackWrong:
            'Uma árvore com n vértices tem n−1 arestas. A expressão n(n−1)/2 é o número de arestas do grafo COMPLETO, que é o extremo oposto.',
    },
    {
        id: 'q37',
        exams: ['discreta'],
        question: 'Quantas arestas tem um grafo COMPLETO com n vértices?',
        options: ['n − 1', 'n(n−1)/2', 'n²', '2^n'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Cada par de vértices tem uma aresta, e o número de pares é a combinação de n tomados 2 a 2, que é n(n−1)/2. Com 10 vértices são 45 arestas.',
        feedbackWrong:
            'São n(n−1)/2 — o número de pares distintos de vértices. Não é n², porque isso contaria cada par duas vezes e incluiria laços de vértice consigo mesmo.',
    },
    {
        id: 'q38',
        exams: ['discreta'],
        question: 'Qual é a principal vantagem da LISTA de adjacência sobre a MATRIZ de adjacência?',
        options: [
            'Responde mais rápido se dois vértices são vizinhos',
            'Ocupa O(V + E) de espaço, sendo muito melhor para grafos ESPARSOS',
            'É a única que representa grafos dirigidos',
            'Permite pesos nas arestas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A matriz ocupa O(n²) mesmo com poucas arestas; a lista ocupa proporcionalmente ao que existe. Como a maioria dos grafos reais é esparsa, a lista costuma vencer — mas a matriz responde adjacência em O(1), o que a lista não faz.',
        feedbackWrong:
            'A vantagem é de ESPAÇO: O(V + E) contra O(n²). Quem responde adjacência em O(1) é a matriz — cada representação tem seu ponto forte.',
    },
    {
        id: 'q39',
        exams: ['discreta'],
        question: 'Por que a matriz de adjacência de um grafo NÃO DIRIGIDO é sempre simétrica?',
        options: [
            'Por convenção de notação',
            'Porque se existe aresta de i para j, existe também de j para i — a aresta não tem sentido',
            'Porque todos os vértices têm o mesmo grau',
            'Porque a diagonal principal é nula',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a posição (i,j) e a (j,i) guardam a mesma informação. É uma conexão direta com o bloco de matrizes: matriz simétrica é aquela igual à sua transposta.',
        feedbackWrong:
            'Em grafo não dirigido a aresta não tem sentido, então (i,j) e (j,i) são iguais — o que é exatamente a definição de matriz simétrica.',
    },
    {
        id: 'q40',
        exams: ['discreta'],
        question: 'Qual estrutura de dados a BUSCA EM LARGURA (BFS) utiliza, e o que ela encontra?',
        options: [
            'Pilha; encontra ciclos',
            'FILA; encontra o caminho mínimo em NÚMERO DE ARESTAS em grafos não ponderados',
            'Fila de prioridade; encontra o caminho de menor custo com pesos',
            'Lista ligada; encontra componentes conexas apenas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A fila é o que produz a visita por camadas, e é essa ordem que garante o caminho mínimo em arestas. Para pesos não negativos é preciso Dijkstra, que usa fila de PRIORIDADE.',
        feedbackWrong:
            'BFS usa FILA e visita por camadas, o que lhe dá o caminho mínimo em número de arestas. Pilha é da DFS; fila de prioridade é do Dijkstra.',
    },
    {
        id: 'q41',
        exams: ['discreta'],
        question: 'Qual estrutura a BUSCA EM PROFUNDIDADE (DFS) utiliza?',
        options: [
            'Fila',
            'PILHA — explícita ou a própria pilha de recursão',
            'Árvore binária de busca',
            'Tabela de hash',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é por isso que a DFS costuma ser escrita recursivamente: a pilha de execução já faz o trabalho. A DFS serve para detectar ciclos e para ordenação topológica.',
        feedbackWrong:
            'DFS usa pilha, frequentemente a própria pilha de recursão. A FILA é que caracteriza a BFS, produzindo visita por camadas em vez de mergulho.',
    },
    {
        id: 'q42',
        exams: ['discreta'],
        question: 'Qual é o custo de BFS e DFS usando lista de adjacência?',
        options: ['O(V²)', 'O(V + E)', 'O(V · E)', 'O(E log V)'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — cada vértice é visitado uma vez e cada aresta é examinada uma vez. Com matriz de adjacência o custo subiria para O(V²), porque descobrir os vizinhos de um vértice exigiria varrer a linha inteira.',
        feedbackWrong:
            'É O(V + E) com lista de adjacência: cada vértice e cada aresta processados uma vez. O(V²) seria o custo usando matriz de adjacência.',
    },
    {
        id: 'q43',
        exams: ['discreta'],
        question: 'Qual conexão existe entre RELAÇÕES e o modelo relacional de banco de dados?',
        options: [
            'Nenhuma; a coincidência de nome é acidental',
            'A conexão é direta: uma tabela é uma relação no sentido matemático — um subconjunto do produto cartesiano dos domínios das colunas',
            'O modelo relacional usa apenas relações de equivalência',
            'Bancos relacionais implementam grafos internamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o nome "relacional" vem literalmente daqui. Cada linha é uma tupla, e a tabela é o conjunto de tuplas que satisfazem o critério. As dependências funcionais que fundamentam a normalização também são relações.',
        feedbackWrong:
            'A conexão é direta e o nome não é coincidência: uma tabela é uma relação matemática, um subconjunto do produto cartesiano dos domínios de suas colunas.',
    },
    {
        id: 'q44',
        exams: ['algebra'],
        question: 'Qual é o custo do algoritmo ingênuo de multiplicação de matrizes n×n?',
        options: ['O(n)', 'O(n²)', 'O(n³)', 'O(2^n)'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto: três laços aninhados — para cada uma das n² posições do resultado, somam-se n produtos. É o mesmo custo do escalonamento de Gauss, e a razão pela qual otimizar multiplicação de matrizes é um problema de pesquisa relevante até hoje.',
        feedbackWrong:
            'É O(n³): n² posições no resultado, cada uma exigindo n multiplicações. O(n²) seria apenas percorrer a matriz, sem calcular os produtos.',
    },
];
