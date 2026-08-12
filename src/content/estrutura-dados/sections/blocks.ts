// Blocos de dados das seções de Estrutura de Dados.
// Fonte: material do Prof. MSc. Ricardo Nunes (assina "Prof. Ricardo Rubens" nas listas
// de exercícios; mesmo e-mail institucional) · ESTD · BSI/IFAL · 2023.1

import type { ComparisonRow, ConceptItem, PanelItem, StatItem } from '../../../components/sections';

export const revisionOverview: ConceptItem[] = [
  {
    title: 'AV1',
    description:
      'Cobre Python básico, strings e listas, recursividade, Tipos Abstratos de Dados (TAD), listas sequenciais, pilhas (LIFO), filas (FIFO) e deque. Foco em estruturas lineares e princípios fundamentais.',
    accent: 'accent',
  },
  {
    title: 'AV2',
    description:
      'Aprofunda listas encadeadas, pesquisa sequencial e binária, hashing e tabelas hash, algoritmos de ordenação e árvores binárias de busca. Foco em eficiência e análise de complexidade.',
    accent: 'accent3',
  },
  {
    title: 'Fio condutor',
    description:
      'A disciplina evolui da representação de dados em memória para a análise de desempenho. Cada estrutura é apresentada como TAD: primeiro a interface, depois a implementação.',
    accent: 'accent5',
  },
];

export const pythonTypes: ConceptItem[] = [
  {
    title: 'int',
    description: 'Números inteiros de precisão arbitrária. Ex: 42, -7, 0. Python não limita o tamanho.',
    accent: 'accent',
  },
  {
    title: 'float',
    description: 'Números de ponto flutuante (reais). Ex: 3.14, -0.5. Cuidado com imprecisão binária.',
    accent: 'accent2',
  },
  {
    title: 'bool',
    description: 'Valores lógicos True e False. São subclasse de int (True=1, False=0).',
    accent: 'accent3',
  },
  {
    title: 'str',
    description: 'Sequência imutável de caracteres Unicode. Pode usar aspas simples ou duplas.',
    accent: 'accent5',
  },
];

export const pythonOperators: PanelItem[] = [
  {
    title: '// - Divisão inteira',
    description: 'Retorna o quociente inteiro da divisão. Ex: 7 // 2 = 3. Descarta a parte decimal.',
  },
  {
    title: '% - Módulo (resto)',
    description: 'Retorna o resto da divisão inteira. Ex: 7 % 2 = 1. Útil para verificar paridade e "dar a volta" em arrays.',
  },
  {
    title: '** - Potência',
    description: 'Eleva o número à potência. Ex: 2 ** 10 = 1024. Equivale a math.pow() mas retorna int quando possível.',
  },
  {
    title: 'and / or / not',
    description: 'Operadores lógicos. "and" exige ambos verdadeiros; "or" exige pelo menos um; "not" nega.',
  },
];

export const pythonControlFlow: PanelItem[] = [
  {
    title: 'if / elif / else',
    description: 'Estrutura condicional. Indentação obrigatória define os blocos. Python usa : no cabeçalho.',
  },
  {
    title: 'for <var> in <sequência>',
    description: 'Percorre qualquer sequência (lista, string, range, tupla). Idiomático em Python.',
  },
  {
    title: 'while <condição>',
    description: 'Repete enquanto a condição for verdadeira. Use "break" para sair e "continue" para pular.',
  },
  {
    title: 'range(start, stop, step)',
    description: 'Gera sequência de inteiros. range(5) → 0,1,2,3,4. range(0,10,2) → 0,2,4,6,8.',
  },
];

export const pythonFunctionsConcepts: ConceptItem[] = [
  {
    title: 'def nome(parâmetros)',
    description: 'Define uma função. Os parâmetros são locais. Use "return" para retornar valor.',
    accent: 'accent',
  },
  {
    title: 'Tipagem dinâmica',
    description: 'Não é necessário declarar tipos. A variável assume o tipo do valor atribuído automaticamente.',
    accent: 'accent2',
  },
  {
    title: 'input() e print()',
    description: 'input() lê do teclado sempre como str. print() exibe na tela. Use int() ou float() para converter.',
    accent: 'accent3',
  },
  {
    title: 'Palavras reservadas',
    description: 'Não podem ser usadas como identificadores: if, else, for, while, def, return, and, or, not, in, True, False, None…',
    accent: 'accent5',
  },
];

export const stringConcepts: ConceptItem[] = [
  {
    title: 'Imutabilidade',
    description: 'Strings não podem ser modificadas no lugar. s[0] = "X" causa TypeError. Operações retornam nova string.',
    accent: 'accent',
  },
  {
    title: 'Indexação e Slice',
    description: 'Acesso por índice: s[0] (primeiro), s[-1] (último). Slice: s[i:j] retorna da posição i até j-1.',
    accent: 'accent2',
  },
  {
    title: 'Métodos de String',
    description: 'upper(), lower(), strip() (remove espaços), split() (divide em lista), count(), index(), replace().',
    accent: 'accent3',
  },
  {
    title: 'Concatenação',
    description: 'Operador +: "ola" + " mundo" = "ola mundo". Operador *: "ab" * 3 = "ababab".',
    accent: 'accent4',
  },
];

export const listConcepts: ConceptItem[] = [
  {
    title: 'Mutabilidade',
    description: 'Listas podem ser modificadas no lugar. lista[0] = 99 funciona normalmente.',
    accent: 'accent',
  },
  {
    title: 'Métodos principais',
    description: 'append(e): adiciona ao fim. insert(i,e): insere em posição. remove(e): remove 1ª ocorrência. pop(i): remove por índice.',
    accent: 'accent2',
  },
  {
    title: 'Aliasing',
    description: 'b = a faz b e a apontarem para o mesmo objeto. Modificar b modifica a também. Use b = a[:] para clonar.',
    accent: 'accent3',
  },
  {
    title: 'Funções modificadoras vs puras',
    description: 'Modificadoras (sort, append) alteram no lugar e retornam None. Puras retornam nova lista sem alterar a original.',
    accent: 'accent5',
  },
];

export const strVsListComparison: ComparisonRow[] = [
  { criterion: 'Mutabilidade', left: 'Imutável - não pode ser alterada', right: 'Mutável - pode ser alterada no lugar' },
  { criterion: 'Elementos', left: 'Somente caracteres Unicode', right: 'Qualquer tipo de dado (misturado)' },
  { criterion: 'Clonar', left: 's[:] cria nova string', right: 'a[:] cria lista independente' },
  { criterion: 'Modificar elemento', left: 'Impossível - gera TypeError', right: 'lista[i] = novo_valor funciona' },
];

export const recursionConcepts: ConceptItem[] = [
  {
    title: 'Caso Base',
    description: 'A condição de parada da recursão - onde a função retorna sem se chamar novamente. Obrigatório para evitar recursão infinita.',
    accent: 'accent',
  },
  {
    title: 'Redução ao Caso Base',
    description: 'Cada chamada recursiva aproxima o problema do caso base. Sem redução progressiva, a recursão não termina.',
    accent: 'accent2',
  },
  {
    title: 'Call Stack (Pilha de Chamadas)',
    description: 'Cada chamada recursiva abre um frame na pilha de chamadas do SO. O retorno desempilha na ordem inversa.',
    accent: 'accent3',
  },
  {
    title: 'Quando usar recursão',
    description: 'Ideal para problemas com subestrutura recursiva natural: árvores, divide e conquista, backtracking, fractais.',
    accent: 'accent5',
  },
];

export const recursionExamples: PanelItem[] = [
  {
    title: 'Contagem regressiva',
    description: 'contagem(n): caso base n==0, retorna. Caso recursivo: imprime n, chama contagem(n-1). Simples e didático.',
  },
  {
    title: 'Soma de 1 a n',
    description: 'soma_ateh(n) = n + soma_ateh(n-1). Caso base: soma_ateh(0) = 0. Gera n frames na pilha.',
  },
  {
    title: 'Inverter uma palavra',
    description: 'inverte(s) = inverte(s[1:]) + s[0]. Caso base: string de 0 ou 1 caractere, que já é o próprio resultado. "Python" vira "nohtyP".',
  },
  {
    title: 'Palíndromo (dois casos base)',
    description: 'Compara a primeira letra com a última e recorre ao miolo. Precisa de DOIS casos base: string vazia (comprimento par) e de um caractere (ímpar) — ambas palíndromas.',
  },
  {
    title: 'MDC pelo algoritmo de Euclides',
    description: 'A versão iterativa com while vira MDC(a, b) = MDC(b, a % b), com caso base b == 0 devolvendo a. Ex.: MDC(48,18) → MDC(18,12) → MDC(12,6) → MDC(6,0) = 6.',
  },
  {
    title: 'Busca binária recursiva',
    description: 'Compara o elemento do meio e chama recursivamente na metade relevante: O(log n) em número de chamadas. Atenção: se a recursão passar uma fatia (lista[:meio]) em vez de índices, cada chamada copia elementos e custa O(k) — a análise deixa de ser O(log n). Veja a seção Pesquisa e Busca.',
  },
  {
    title: 'Fibonacci',
    description: 'fib(n) = fib(n-1) + fib(n-2). Caso base: fib(0)=0, fib(1)=1. Atenção: exponencial O(2ⁿ) sem memoização.',
  },
];

export const recursionFlow: string[] = [
  'Chamada inicial: f(n)',
  'Verifica caso base?',
  'Não → chama f(n-1) - empilha frame',
  'Não → chama f(n-2) - empilha frame',
  'Sim → retorna valor base',
  'Desempilha frames na ordem inversa',
  'Resultado propagado de volta',
];

export const tadConcepts: ConceptItem[] = [
  {
    title: 'Definição de TAD',
    description: 'Conjunto de valores + conjunto de operações, descritos matematicamente, independente de como serão implementados.',
    accent: 'accent',
  },
  {
    title: 'Tipos Primitivos',
    description: 'int, float, bool, char - são atômicos, indivisíveis, suportados diretamente pelo hardware.',
    accent: 'accent2',
  },
  {
    title: 'Tipos Complexos',
    description: 'Compostos de partes menores. Ex: Data (dia, mês, ano), Lista (coleção de elementos), Pilha, Fila.',
    accent: 'accent3',
  },
  {
    title: 'Interface vs Implementação',
    description: 'Interface define O QUÊ se pode fazer. Implementação define COMO armazenar e como executar cada operação.',
    accent: 'accent5',
  },
];

export const tadObjectives: PanelItem[] = [
  {
    title: 'Objetivo teórico',
    description: 'Criar modelos matemáticos que representem os problemas do mundo real de forma precisa e abstrata.',
  },
  {
    title: 'Objetivo prático',
    description: 'Criar representações concretas em memória e rotinas (algoritmos) eficientes para manipular esses dados.',
  },
  {
    title: 'Separação de responsabilidades',
    description: 'O usuário do TAD não precisa saber como ele é implementado — apenas quais operações estão disponíveis e o que fazem.',
  },
  {
    title: 'Armazenamento sequencial',
    description: 'Dados agrupados em posições contíguas de memória, acessados por índice. Base para arrays e listas sequenciais.',
  },
];

export const tadHierarchy: string[] = [
  'TAD (especificação abstrata)',
  'Implementação (estrutura + algoritmos)',
  'Tipo Concreto (código executável)',
  'Uso pelo programa/usuário',
];

export const listInterface: PanelItem[] = [
  {
    title: 'adicionar(e)',
    description: 'Adiciona elemento e ao final da lista. O(1) amortizado com array dinâmico.',
  },
  {
    title: 'adicionar_em(pos, e)',
    description: 'Insere elemento e na posição pos, deslocando os demais. O(n) no pior caso.',
  },
  {
    title: 'recuperar(pos)',
    description: 'Retorna o elemento na posição pos. O(1) com array (acesso direto por índice).',
  },
  {
    title: 'remover(pos)',
    description: 'Remove o elemento na posição pos, deslocando os demais para preencher o espaço. O(n).',
  },
  {
    title: 'pertence(e)',
    description: 'Verifica se e está na lista. O(n) - busca sequencial.',
  },
  {
    title: 'tamanho()',
    description: 'Retorna o número de elementos. O(1) se o tamanho for armazenado junto.',
  },
];

export const listComplexity: StatItem[] = [
  { label: 'Adicionar no fim', value: 'O(1)*', accent: 'text-accent' },
  { label: 'Inserir em posição', value: 'O(n)', accent: 'text-accent3' },
  { label: 'Acessar por índice', value: 'O(1)', accent: 'text-accent' },
  { label: 'Buscar elemento', value: 'O(n)', accent: 'text-accent3' },
  { label: 'Remover elemento', value: 'O(n)', accent: 'text-accent3' },
  { label: 'Tamanho', value: 'O(1)', accent: 'text-accent' },
];

export const stackConcepts: ConceptItem[] = [
  {
    title: 'LIFO',
    description: 'Last In, First Out. O último elemento inserido é o primeiro a ser removido. Analogia: pilha de pratos.',
    accent: 'accent',
  },
  {
    title: 'push(e)',
    description: 'Empilha o elemento e no topo da pilha. O(1) amortizado.',
    accent: 'accent2',
  },
  {
    title: 'pop()',
    description: 'Desempilha e retorna o elemento do topo. Lança exceção se vazia. O(1).',
    accent: 'accent3',
  },
  {
    title: 'top()',
    description: 'Consulta o elemento do topo sem remover. O(1). Diferente de pop().',
    accent: 'accent5',
  },
];

export const stackApplications: PanelItem[] = [
  {
    title: 'Matching de parênteses/colchetes',
    description: 'Percorre a expressão: abre símbolo → push. Fecha símbolo → se vazia ou top não corresponde → inválido. Usado em compiladores.',
  },
  {
    title: 'Histórico de navegação',
    description: 'Browser usa pilha para o botão Voltar. Cada página nova vai para o topo; voltar faz pop.',
  },
  {
    title: 'Conversão decimal → binário',
    description: 'Divide o número por 2 repetidamente e empilha os restos. Desempilha para ler o binário na ordem correta.',
  },
  {
    title: 'Call Stack (chamadas de funções)',
    description: 'O sistema operacional usa pilha para gerenciar chamadas de funções. Frame = variáveis locais + endereço de retorno.',
  },
  {
    title: 'Avaliação de expressões',
    description: 'Expressões pós-fixas (notação polonesa reversa) são avaliadas com pilha: operandos são empilhados, operadores consomem dois e empilham o resultado.',
  },
];

export const stackComplexity: StatItem[] = [
  { label: 'push(e)', value: 'O(1)*', accent: 'text-accent' },
  { label: 'pop()', value: 'O(1)', accent: 'text-accent' },
  { label: 'top()', value: 'O(1)', accent: 'text-accent' },
  { label: 'is_empty()', value: 'O(1)', accent: 'text-accent' },
  { label: 'len()', value: 'O(1)', accent: 'text-accent' },
];

export const queueConcepts: ConceptItem[] = [
  {
    title: 'FIFO',
    description: 'First In, First Out. O primeiro elemento inserido é o primeiro a ser removido. Analogia: fila de banco.',
    accent: 'accent',
  },
  {
    title: 'enqueue(e)',
    description: 'Insere o elemento e no final da fila. O(1) amortizado.',
    accent: 'accent2',
  },
  {
    title: 'dequeue()',
    description: 'Remove e retorna o elemento do início da fila. O(1) com array circular.',
    accent: 'accent3',
  },
  {
    title: 'first()',
    description: 'Consulta o primeiro elemento sem remover. O(1).',
    accent: 'accent5',
  },
];

export const queueCircular: PanelItem[] = [
  {
    title: 'Problema do array simples',
    description: 'Sem array circular, dequeue() exigiria deslocar todos os elementos → O(n). Isso inviabiliza o uso com grandes volumes.',
  },
  {
    title: 'Solução: array circular',
    description: 'Mantém dois ponteiros: ini (início) e fim. Ao fazer dequeue, apenas avança ini: ini = (ini + 1) % N.',
  },
  {
    title: 'Fórmula do avanço circular',
    description: 'ini = (ini + 1) % N. Quando ini chega ao final do array, o módulo faz ele "dar a volta" para a posição 0.',
  },
  {
    title: 'Resultado',
    description: 'Com array circular, enqueue e dequeue são ambos O(1). O espaço é reutilizado sem deslocamentos.',
  },
];

export const queueVsStack: ComparisonRow[] = [
  { criterion: 'Princípio', left: 'FIFO - Primeiro a entrar, primeiro a sair', right: 'LIFO - Último a entrar, primeiro a sair' },
  { criterion: 'Inserção', left: 'enqueue() - insere no final', right: 'push() - insere no topo' },
  { criterion: 'Remoção', left: 'dequeue() - remove do início', right: 'pop() - remove do topo' },
  { criterion: 'Consulta', left: 'first() - consulta o início', right: 'top() - consulta o topo' },
  { criterion: 'Aplicações', left: 'BFS, sistemas de atendimento, impressão', right: 'DFS, undo/redo, call stack, parênteses' },
];

// ── Aplicação de filas: coloração de regiões (07-aplicacoes-filas) ───────────

export const floodFillSteps: string[] = [
  'Obter um ponto inicial P0, de cor C0, pertencente à região R',
  'Obter a nova cor C1 para a região R',
  'Colocar P0 numa fila F inicialmente vazia',
  'Enquanto F não esvaziar: remover um ponto P da fila',
  'Inserir em F todos os pontos conectados a P cuja cor seja C0, e pintar P de C1',
];

export const floodFillConcepts: PanelItem[] = [
  {
    title: 'O que é uma região',
    description: 'Um conjunto de pontos conectados entre si que têm a mesma cor. Na implementação, cada ponto é um pixel e a imagem é uma matriz bidimensional em que o valor da célula é a cor (0 = branco, 1 = cinza, 2 = preto, 3 = vermelho).',
  },
  {
    title: 'Conectividade de 4 vizinhos',
    description: 'P e Pj estão conectados quando se chega de um ao outro incrementando ou decrementando apenas a abscissa OU a ordenada: (x+1,y), (x−1,y), (x,y+1) e (x,y−1). As diagonais não contam — (x−1,y+1) e (x+1,y+1) não são vizinhos de P0.',
  },
  {
    title: 'Por que fila e não pilha',
    description: 'A fila faz a pintura crescer em ondas a partir do ponto inicial, visitando primeiro todos os vizinhos diretos — é a mesma ideia da busca em largura (BFS) em grafos. Com pilha o efeito seria de busca em profundidade: o resultado final é o mesmo, mas a ordem de visita muda.',
  },
  {
    title: 'Cuidado com o laço infinito',
    description: 'Só entram na fila os pontos que ainda têm a cor original C0. Como o ponto é repintado de C1 ao sair da fila, ele deixa de ser candidato e não volta a ser enfileirado pelos vizinhos.',
  },
];

export const dequeConcepts: ConceptItem[] = [
  {
    title: 'Double-Ended Queue',
    description: 'Estrutura híbrida - permite inserção e remoção nas duas extremidades. Generaliza pilha e fila.',
    accent: 'accent',
  },
  {
    title: 'add_first(e) / add_last(e)',
    description: 'Inserção no início ou no fim. Ambas O(1). add_last equivale a enqueue; add_first seria enqueue na outra extremidade.',
    accent: 'accent2',
  },
  {
    title: 'delete_first() / delete_last()',
    description: 'Remoção do início ou do fim. Ambas O(1). delete_first equivale a dequeue; delete_last remove do fim como uma pilha invertida.',
    accent: 'accent3',
  },
  {
    title: 'collections.deque em Python',
    description: 'Implementação nativa eficiente. appendleft/popleft para início; append/pop para fim. Suporta rotate(k) e maxlen.',
    accent: 'accent5',
  },
];

export const dequeVsOthers: ComparisonRow[] = [
  { criterion: 'Inserção no início', left: 'Sim - add_first() O(1)', right: 'Não - apenas no topo (push)' },
  { criterion: 'Inserção no fim', left: 'Sim - add_last() O(1)', right: 'Sim - enqueue() O(1)' },
  { criterion: 'Remoção do início', left: 'Sim - delete_first() O(1)', right: 'Sim - dequeue() O(1)' },
  { criterion: 'Remoção do fim', left: 'Sim - delete_last() O(1)', right: 'Não - apenas do início' },
];

export const linkedListConcepts: ConceptItem[] = [
  {
    title: 'Nó (Node)',
    description: 'Unidade básica: armazena o dado (_dados) e uma referência para o próximo nó (_proximo). Se for o último, _proximo = None.',
    accent: 'accent',
  },
  {
    title: 'Head (cabeça)',
    description: 'Ponteiro para o primeiro nó da lista. Lista vazia = head None. Toda travessia começa pelo head.',
    accent: 'accent2',
  },
  {
    title: 'Lista Não Ordenada',
    description: 'Elementos sem ordem definida. add() insere na cabeça em O(1). Busca e remoção requerem percorrer a lista: O(n).',
    accent: 'accent3',
  },
  {
    title: 'Lista Ordenada',
    description: 'Mantém os elementos em ordem crescente. A inserção percorre até achar a posição correta e continua O(n), mas a busca malsucedida melhora: pode parar ao encontrar um valor maior que o procurado.',
    accent: 'accent5',
  },
];

// ── Lista encadeada ordenada (10-listas-encadeadas-ordenadas) ────────────────

export const sortedLinkedList: PanelItem[] = [
  {
    title: 'O que muda no add()',
    description: 'Na lista não ordenada, add() insere sempre na cabeça e custa O(1). Na ordenada, é preciso percorrer mantendo uma referência ao nó anterior até achar o primeiro nó com dado MAIOR que o novo — só então reencadear anterior → novo → atual. A inserção passa a ser O(n).',
  },
  {
    title: 'O que melhora no search()',
    description: 'A busca malsucedida deixa de percorrer a lista inteira: assim que aparece um nó com valor maior que o procurado, o item não pode estar adiante e a busca para. Na média, isso corta as comparações pela metade quando o item está ausente.',
  },
  {
    title: 'O que NÃO melhora',
    description: 'A busca continua O(n). Não dá para aplicar busca binária numa lista encadeada, porque não existe acesso por índice em O(1) — chegar ao elemento do meio já exigiria percorrer metade dos nós. O ganho é de constante, não de classe de complexidade.',
  },
  {
    title: 'Inserir na cabeça e no fim',
    description: 'Dois casos de borda que costumam quebrar a implementação: o novo item ser menor que todos (vira a nova cabeça, e head precisa ser atualizado) e ser maior que todos (o laço chega ao fim da lista com atual = None e a inserção acontece depois do último nó).',
  },
];

export const linkedListOperations: PanelItem[] = [
  {
    title: 'add(e) - O(1)',
    description: 'Cria novo nó. Define nó._proximo = head. Atualiza head = nó. Inserção sempre na cabeça.',
  },
  {
    title: 'is_empty() - O(1)',
    description: 'Retorna True se head == None. Verificação simples e constante.',
  },
  {
    title: 'size() - O(n)',
    description: 'Percorre todos os nós contando. Não há atributo de tamanho salvo diretamente.',
  },
  {
    title: 'search(e) - O(n)',
    description: 'Percorre a lista nó a nó comparando _dados com e. Retorna True se encontrar, False ao chegar em None.',
  },
  {
    title: 'remove(e) - O(n)',
    description: 'Percorre mantendo referência ao nó anterior (previous). Ao encontrar e, faz previous._proximo = nó._proximo. Caso especial: remover head.',
  },
];

export const linkedVsArray: ComparisonRow[] = [
  { criterion: 'Acesso por índice', left: 'O(n) - percorre sequencialmente', right: 'O(1) - acesso direto por índice' },
  { criterion: 'Inserção no início', left: 'O(1) - apenas atualiza head', right: 'O(n) - desloca todos os elementos' },
  { criterion: 'Remoção no início', left: 'O(1) - atualiza head', right: 'O(n) - desloca todos os elementos' },
  { criterion: 'Uso de memória', left: 'Extra por nó (referência)', right: 'Compacto, contíguo na memória' },
];

export const searchConcepts: ConceptItem[] = [
  {
    title: 'Busca Sequencial',
    description: 'Percorre elemento por elemento até encontrar o alvo ou chegar ao fim. O(n) no pior caso. Funciona em qualquer lista.',
    accent: 'accent',
  },
  {
    title: 'Busca Binária',
    description: 'Compara o elemento do meio. Se menor, descarta metade direita; se maior, descarta metade esquerda. O(log n). Exige lista ordenada.',
    accent: 'accent2',
  },
  {
    title: 'Dividir e Conquistar',
    description: 'Estratégia da busca binária: divide o problema em subproblemas menores até atingir a solução base.',
    accent: 'accent3',
  },
  {
    title: 'Lista Ordenada + Seq.',
    description: 'Em lista ordenada, a busca sequencial pode parar cedo ao encontrar elemento maior. Média n/2, mas ainda O(n).',
    accent: 'accent5',
  },
];

export const binarySearchSteps: string[] = [
  'Define low=0 e high=len-1',
  'Calcula mid = (low + high) // 2',
  'lista[mid] == alvo → encontrado!',
  'lista[mid] > alvo → high = mid - 1',
  'lista[mid] < alvo → low = mid + 1',
  'Se low > high → não encontrado',
];

export const searchComparison: ComparisonRow[] = [
  { criterion: 'Pré-requisito', left: 'Nenhum - qualquer lista', right: 'Lista ordenada obrigatória' },
  { criterion: 'Complexidade', left: 'O(n)', right: 'O(log n)' },
  { criterion: 'n = 1.000.000', left: 'Até 1.000.000 comparações', right: 'Até ~20 comparações' },
  { criterion: 'Implementação', left: 'Trivial - laço for/while', right: 'Iterativa ou recursiva' },
];

export const hashConcepts: ConceptItem[] = [
  {
    title: 'Função Hash',
    description: 'Mapeia uma chave para um índice (slot) da tabela. Boa função hash: distribuição uniforme, cálculo rápido.',
    accent: 'accent',
  },
  {
    title: 'Fator de Carga (FC)',
    description: 'FC = número de itens / tamanho da tabela. Quanto maior o FC, mais colisões. No miniprojeto do gerenciador de eventos, o professor pede redimensionamento quando o FC fica entre 0,7 e 0,8.',
    accent: 'accent2',
  },
  {
    title: 'Colisão',
    description: 'Dois itens diferentes mapeados para o mesmo slot. Inevitável quando itens > slots. Precisa de resolução.',
    accent: 'accent3',
  },
  {
    title: 'Complexidade',
    description: 'O(1) em média para inserção e busca. Com colisões: O(1 + FC/2). Pior caso O(n) com muitas colisões.',
    accent: 'accent5',
  },
];

export const hashFunctions: PanelItem[] = [
  {
    title: 'Método do Módulo',
    description: 'hash(item) = item % tamanho_tabela. Simples e eficiente. Ex: 44 % 11 = 0. Prefira tamanho primo.',
  },
  {
    title: 'Folding Method',
    description: 'Divide o item em pedaços de tamanhos iguais e soma. Ex. da aula: o telefone (82)7989.1507 em grupos de 2 dá 82+79+89+15+07 = 272, e 272%11 = 8.',
  },
  {
    title: 'Mid-Square Method',
    description: 'Eleva o item ao quadrado e extrai dígitos do meio. Ex: 44² = 1936 → extrai 93 → 93%11 = 5.',
  },
  {
    title: 'Hash para Strings',
    description: 'Somar apenas os ord() faz anagramas colidirem: "cat" e "tac" somam 312 e caem no mesmo slot. Ponderar cada caractere pela posição resolve: 99·1 + 97·2 + 116·3 = 641.',
  },
];

export const collisionMethods: ComparisonRow[] = [
  { criterion: 'Linear Probing', left: 'Tenta (h+1)%m, (h+2)%m... Simples mas cria clustering.', right: 'Clustering: grupos de elementos consecutivos' },
  { criterion: 'Quadratic Probing', left: 'Em vez de pular de 1 em 1, os incrementos são quadráticos: +1, +4, +9, +16… Reduz o clustering.', right: 'Não garante explorar todos os slots' },
  { criterion: 'Chaining', left: 'Cada slot é uma lista encadeada. Sem limite de FC.', right: 'Usa memória extra; O(k) onde k = lista do slot' },
];

export const sortConcepts: ConceptItem[] = [
  {
    title: 'Bubble Sort',
    description: 'Compara pares adjacentes e troca se necessário. Repete n vezes. O(n²) médio/pior; O(n) melhor (com flag).',
    accent: 'accent',
  },
  {
    title: 'Selection Sort',
    description: 'Melhora o bubble sort fazendo uma única troca por varredura: acha o extremo da parte não ordenada (na versão da aula, o maior) e o coloca no lugar. Faz sempre n(n−1)/2 comparações, independentemente da ordem inicial — logo O(n²) sempre, sem melhor caso.',
    accent: 'accent2',
  },
  {
    title: 'Insertion Sort',
    description: 'Insere cada elemento na posição correta da parte já ordenada. O(n²) pior; O(n) para lista quase ordenada.',
    accent: 'accent3',
  },
  {
    title: 'Shell Sort',
    description: 'Melhora o insertion sort quebrando a lista em sublistas intercaladas a cada "gap" posições. O gap diminui até 1. Entre O(n) e O(n²) — chega a O(n^3/2) com incrementos 2^k − 1.',
    accent: 'accent4',
  },
  {
    title: 'Merge Sort',
    description: 'Divide recursivamente ao meio e intercala partes ordenadas. O(n log n) sempre. Estável. Usa O(n) de espaço extra.',
    accent: 'accent5',
  },
  {
    title: 'Quick Sort',
    description: 'Também divide e conquista, mas sem memória adicional. Pivô, leftmark e rightmark convergem até o split point. O(n log n) médio; O(n²) quando a divisão é desigual.',
    accent: 'accent',
  },
];

export const sortComplexity: ComparisonRow[] = [
  { criterion: 'Bubble Sort', left: 'O(n) melhor · O(n²) médio/pior', right: 'O(1) espaço - estável' },
  { criterion: 'Selection Sort', left: 'O(n²) sempre', right: 'O(1) espaço - instável' },
  { criterion: 'Insertion Sort', left: 'O(n) melhor · O(n²) pior', right: 'O(1) espaço - estável - bom para quase ordenado' },
  { criterion: 'Shell Sort', left: 'Entre O(n) e O(n²) · O(n^3/2) com incrementos 2^k − 1', right: 'O(1) espaço - instável - depende da sequência de gaps' },
  { criterion: 'Merge Sort', left: 'O(n log n) sempre', right: 'O(n) espaço - estável' },
  { criterion: 'Quick Sort', left: 'O(n log n) médio · O(n²) pior', right: 'Sem memória extra - instável - mediana de três ajuda' },
];

// O vocabulário da aula (14-arvores-1) vive só em treeVocabulary — o bloco antigo
// treeConcepts repetia raiz, folha e altura em cards logo acima, e definia a BST,
// que hoje tem seção própria.

export const treeTraversals: PanelItem[] = [
  {
    title: 'Pré-ordem (raiz → esq → dir)',
    description: 'Visita a raiz primeiro, depois percorre a subárvore esquerda, depois a direita. Útil para copiar/serializar a árvore.',
  },
  {
    title: 'Em-ordem (esq → raiz → dir)',
    description: 'Percorre esquerda, visita raiz, depois direita. Em uma BST, produz os elementos em ordem crescente.',
  },
  {
    title: 'Pós-ordem (esq → dir → raiz)',
    description: 'Percorre ambas as subárvores antes de visitar a raiz. Útil para deletar a árvore ou calcular tamanho de diretórios.',
  },
];

export const bstComplexity: ComparisonRow[] = [
  { criterion: 'Busca', left: 'O(h) onde h é a altura', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Inserção', left: 'O(h) - percorre até posição correta', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Remoção', left: 'O(h) - 3 casos: folha, 1 filho, 2 filhos', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Em-ordem', left: 'O(n) - visita todos os nós', right: 'Produz sequência ordenada' },
];

// ── Notação Big O ────────────────────────────────────────────────────────────
// Assunto cobrado na AV1, na AV2 e na Prova Final. O professor não postou slides
// próprios (indicou dois textos do freeCodeCamp), mas as análises abaixo vêm das
// tabelas dos PDFs 11-pesquisa, 12-hashing, 13-ordenacao e 14-arvores.

export const bigOConcepts: ConceptItem[] = [
  {
    title: 'O que a notação mede',
    description: 'Descreve como o custo de um algoritmo cresce conforme a entrada n aumenta. Não mede segundos: mede a quantidade de operações relevantes (comparações, trocas, acessos).',
    accent: 'accent',
  },
  {
    title: 'Melhor, médio e pior caso',
    description: 'Um mesmo algoritmo tem custos diferentes conforme a entrada. Na busca sequencial: 1 comparação no melhor caso, n no pior, n/2 em média. Big O costuma descrever o pior caso.',
    accent: 'accent2',
  },
  {
    title: 'Constantes são descartadas',
    description: 'A soma das comparações do bubble sort é (n²/2) − (n/2). Fica O(n²): para n grande, o termo n² domina e os fatores constantes deixam de importar.',
    accent: 'accent3',
  },
  {
    title: 'Por que isso importa',
    description: 'É o critério para escolher a estrutura certa. Buscar em 1.000.000 de itens custa até 1.000.000 de comparações em O(n), cerca de 20 em O(log n) e uma em O(1).',
    accent: 'accent5',
  },
];

export const bigOClasses: PanelItem[] = [
  {
    title: 'O(1) — constante',
    description: 'O custo não depende de n. Exemplos da disciplina: push e pop na pilha, enqueue e dequeue na fila circular, add na cabeça da lista encadeada, acesso por índice na lista Python.',
  },
  {
    title: 'O(log n) — logarítmica',
    description: 'A cada passo o problema cai pela metade. Busca binária e as operações de uma BST balanceada. Com n = 1.000.000, bastam cerca de 20 passos.',
  },
  {
    title: 'O(n) — linear',
    description: 'Percorre a entrada uma vez. Busca sequencial, size() e search() na lista encadeada, e a travessia completa de uma árvore.',
  },
  {
    title: 'O(n log n) — log-linear',
    description: 'Padrão dos algoritmos de ordenação eficientes: merge sort (sempre) e quick sort (caso médio). É o melhor que uma ordenação por comparação consegue.',
  },
  {
    title: 'O(n²) — quadrática',
    description: 'Laço dentro de laço. Bubble, selection e insertion sort. Aceitável para listas pequenas, inviável quando n cresce.',
  },
];

export const bigOByStructure: ComparisonRow[] = [
  { criterion: 'Lista (array)', left: 'Acesso por índice O(1) · append O(1) amortizado', right: 'Inserir/remover no meio O(n) · buscar O(n)' },
  { criterion: 'Pilha e Fila', left: 'Todas as operações O(1)', right: 'A fila só mantém O(1) no dequeue com array circular' },
  { criterion: 'Lista encadeada', left: 'add na cabeça O(1)', right: 'size, search e remove O(n) — sem acesso por índice' },
  { criterion: 'Busca', left: 'Sequencial O(n) — qualquer lista', right: 'Binária O(log n) — exige lista ordenada' },
  { criterion: 'Tabela hash', left: 'put e get O(1) sem colisão', right: 'O(1 + FC/2) com linear probing' },
  { criterion: 'BST', left: 'Busca, inserção e remoção O(h)', right: 'h ≈ log n se balanceada · h = n se degenerada' },
];

export const bigOSortSummary: StatItem[] = [
  { label: 'O(n log n)', value: 'Merge (sempre) e Quick (médio)', accent: 'text-accent5' },
  { label: 'O(n^3/2)', value: 'Shell sort com incremento 2^k − 1', accent: 'text-accent3' },
  { label: 'O(n²)', value: 'Bubble, Selection e Insertion', accent: 'text-accent2' },
];

// ── Árvores: vocabulário e representações (14-arvores-1) ─────────────────────

export const treeVocabulary: PanelItem[] = [
  {
    title: 'Nó (node) e aresta (edge)',
    description: 'O nó é a parte fundamental da árvore: tem um nome, chamado chave, e opcionalmente um conteúdo (payload). A aresta conecta dois nós e mostra que há relação entre eles.',
  },
  {
    title: 'Raiz, pai, filho e irmão',
    description: 'A raiz é o único nó sem aresta de entrada. Um nó é pai de todos os que se conectam a ele por aresta de saída; esses são seus filhos. Nós com o mesmo pai são irmãos.',
  },
  {
    title: 'Caminho e folha',
    description: 'Caminho é uma lista ordenada de nós conectados por arestas. O exemplo do slide vem da taxonomia dos felinos — Felidae → Felis → Domestica, da família ao gato doméstico. Folha é o nó sem filhos: fica na borda externa da árvore.',
  },
  {
    title: 'Nível, altura e grau',
    description: 'O nível de um nó é o número de arestas no caminho da raiz até ele. A altura da árvore é o maior nível encontrado nela. O grau de um nó é o seu número de filhos — quando nenhum nó passa de grau 2, a árvore é binária.',
  },
];

export const treeRepresentations: ConceptItem[] = [
  {
    title: 'Lista de listas',
    description: 'A raiz fica na primeira posição, a subárvore esquerda na segunda e a direita na terceira. Uma árvore com raiz "a" e filhos vazios é ["a", [], []].',
    accent: 'accent',
  },
  {
    title: 'Nós e referências',
    description: 'Uma classe BinaryTree guarda a chave em self.key e as subárvores em self.leftChild e self.rightChild. Cada filho é outra instância de BinaryTree.',
    accent: 'accent2',
  },
  {
    title: 'Inserir empurrando para baixo',
    description: 'Em insertLeft, se já existe filho à esquerda, a nova subárvore assume o lugar e o filho antigo desce um nível — ele vira filho esquerdo do nó recém-inserido.',
    accent: 'accent3',
  },
  {
    title: 'Lista única (heap)',
    description: 'Uma árvore binária completa cabe em uma só lista: os filhos do nó na posição p ficam em 2p e 2p+1, e o pai do nó n fica em n//2. É a representação usada no binary heap.',
    accent: 'accent5',
  },
];

export const parseTreeRules: string[] = [
  'Token "(" → cria filho esquerdo e desce até ele',
  'Token operador → grava no nó atual, cria filho direito e desce',
  'Token número → grava no nó atual e volta ao pai',
  'Token ")" → volta ao pai do nó atual',
];

export const parseTreeConcepts: PanelItem[] = [
  {
    title: 'Para que serve',
    description: 'A árvore de análise (parse tree) representa a estrutura de uma expressão ou frase. Em ((7+3)*(5−2)), os operadores viram nós internos e os operandos viram folhas.',
  },
  {
    title: 'A pilha resolve o "voltar ao pai"',
    description: 'A interface da árvore tem getLeftChild e getRightChild, mas não tem ponteiro para o pai. A solução do professor é empilhar o nó atual antes de descer e desempilhar para subir.',
  },
  {
    title: 'Avaliar a expressão',
    description: 'Uma função recursiva avalia cada subárvore: se o nó tem os dois filhos, aplica o operador da raiz aos resultados de esquerda e direita; se não tem, o nó é folha e o próprio valor é o resultado.',
  },
  {
    title: 'Recuperar a expressão original',
    description: 'A travessia em-ordem, adicionando parênteses ao redor de cada subárvore, reconstrói a expressão matemática de onde a árvore veio.',
  },
];

// ── Heap e fila de prioridade (14-arvores-3) ─────────────────────────────────

export const heapConcepts: ConceptItem[] = [
  {
    title: 'Fila de prioridade',
    description: 'Variação da fila: o dequeue continua saindo pela frente, mas a ordem interna é dada pela prioridade — o item de maior prioridade fica no início. No heap mínimo, prioridade alta corresponde a chave menor, e por isso a menor chave é que fica na raiz.',
    accent: 'accent',
  },
  {
    title: 'Por que não usar lista',
    description: 'Implementando com lista, inserir custaria O(n) e manter ordenado custaria O(n log n). Com binary heap, enqueue e dequeue ficam O(log n).',
    accent: 'accent2',
  },
  {
    title: 'Propriedade estrutural',
    description: 'O heap é uma árvore binária completa: tem o mesmo número de nós à esquerda e à direita, com exceção do último nível, preenchido da esquerda para a direita. É isso que permite guardá-lo em uma única lista.',
    accent: 'accent3',
  },
  {
    title: 'Propriedade de ordem',
    description: 'Em um heap mínimo, para todo nó x com pai p, a chave de p é menor ou igual à chave de x. O menor valor da coleção está sempre na raiz.',
    accent: 'accent5',
  },
  {
    title: 'Daqui sai o heap sort',
    description: 'Construir o heap com buildHeap e depois extrair repetidamente o mínimo com delMin devolve os elementos em ordem crescente. Esse é o heap sort: O(n log n) mesmo no pior caso, ao lado do merge sort — enquanto o quick sort só garante O(n log n) no caso médio.',
    accent: 'accent4',
  },
];

export const heapOperations: PanelItem[] = [
  {
    title: 'insert(k) e percUp',
    description: 'Anexa a chave ao fim da lista — isso preserva a estrutura, mas pode violar a ordem. Em seguida percUp compara o novo item com o pai (posição i//2) e troca enquanto ele for menor.',
  },
  {
    title: 'delMin() e percDown',
    description: 'O menor valor está na raiz. Move-se o último item da lista para a raiz (mantendo a estrutura) e percDown desce esse item trocando-o com o menor dos filhos até a ordem ser restaurada.',
  },
  {
    title: 'minChild(i)',
    description: 'Auxiliar do percDown: devolve o índice do menor filho do nó i. Se 2i+1 passa do tamanho atual, só existe o filho esquerdo (2i); caso contrário compara os dois.',
  },
  {
    title: 'buildHeap(lista)',
    description: 'Constrói o heap a partir da lista inteira, aplicando percDown de trás para frente a partir de len(lista)//2. É melhor que inserir uma chave por vez, que custaria O(n log n).',
  },
];

// ── BST como Map e remoção (14-arvores-4) ────────────────────────────────────

export const bstMapOperations: PanelItem[] = [
  {
    title: 'put(key, val)',
    description: 'Se a árvore está vazia, a nova chave vira a raiz. Senão, desce comparando: menor que o nó atual vai à esquerda, maior vai à direita, até achar uma posição livre. Cada TreeNode guarda também a referência ao pai.',
  },
  {
    title: 'get(key)',
    description: 'Percorre recursivamente comparando a chave procurada com a do nó atual e devolve o payload. É a mesma descida da inserção, e por isso custa O(h).',
  },
  {
    title: '__setitem__ e __getitem__',
    description: 'Métodos especiais do Python que dão à árvore a sintaxe de dicionário: minhaArvore["chave"] = valor chama put, e ler minhaArvore["chave"] chama get.',
  },
  {
    title: '__contains__ e __iter__',
    description: '__contains__ implementa o operador in devolvendo True quando _get encontra a chave. __iter__ percorre a árvore em-ordem com yield, permitindo escrever for x in arvore.',
  },
  {
    title: 'Armadilha: chave duplicada',
    description: 'O algoritmo da aula manda a chave igual para o ramo direito e soma 1 ao tamanho sempre. O nó novo nunca seria encontrado numa pesquisa — o _get para no primeiro que casa — e o len() passa a mentir. Como o próprio material indica, a saída é comparar a chave no put e substituir o valor antigo em vez de criar outro nó.',
  },
];

export const bstDeleteCases: ConceptItem[] = [
  {
    title: 'Caso 1 — nó folha',
    description: 'O nó não tem filhos. Basta apagar a referência no pai: se o nó era filho esquerdo, o pai passa a apontar para None à esquerda; se era filho direito, à direita.',
    accent: 'accent',
  },
  {
    title: 'Caso 2 — um filho',
    description: 'Promove-se o filho para o lugar do pai. É preciso reencadear os dois lados: o pai do nó passa a apontar para o filho, e o filho passa a apontar para esse pai. Se o nó removido era a raiz, usa-se replaceNodeData.',
    accent: 'accent3',
  },
  {
    title: 'Caso 3 — dois filhos',
    description: 'O mais difícil: nenhum dos filhos pode simplesmente subir. Procura-se o sucessor — o nó com a próxima maior chave — que tem a garantia de não ter mais de um filho. Ele é retirado da árvore e assume o lugar do nó removido.',
    accent: 'accent5',
  },
  {
    title: 'Achando o sucessor',
    description: 'Se o nó tem filho direito, o sucessor é a menor chave da subárvore direita (desce-se sempre à esquerda, com findMin). Se não tem filho direito e ele é filho esquerdo do pai, o sucessor é o próprio pai.',
    accent: 'accent4',
  },
];

// ── Análise de busca em número de comparações (11-pesquisa) ──────────────────

export const sequentialSearchCases: ComparisonRow[] = [
  { criterion: 'Item presente (lista não ordenada)', left: 'Melhor: 1 · Pior: n', right: 'Médio: n/2' },
  { criterion: 'Item ausente (lista não ordenada)', left: 'Melhor: n · Pior: n', right: 'Médio: n — percorre tudo' },
  { criterion: 'Item presente (lista ordenada)', left: 'Melhor: 1 · Pior: n', right: 'Médio: n/2' },
  { criterion: 'Item ausente (lista ordenada)', left: 'Melhor: 1 · Pior: n', right: 'Médio: n/2 — para ao achar maior' },
];

// ── Miniprojetos aplicados da turma ──────────────────────────────────────────

export const miniProjects: PanelItem[] = [
  {
    title: 'Miniprojeto 1 — Labirinto com pilhas',
    description: 'Um labirinto é uma matriz m × n em que " " é caminho livre e "#" é parede. O rato parte de (1, 0) e precisa chegar a (m−2, n−1) movendo-se para os lados, acima ou abaixo. A função eh_possivel_sair() devolve True se existe saída. A dica do professor: marque as casas visitadas e, ao entrar num caminho sem saída, volte e tente outro — a pilha é a melhor estrutura para esse retorno.',
  },
  {
    title: 'Miniprojeto 2 — Dominó com lista encadeada',
    description: 'Simula um jogo de dominó: cria as peças (dois valores de 0 a 6), embaralha, distribui igualmente entre os jogadores, permite jogar peças cujas extremidades correspondam às já jogadas e verifica o estado do jogo até determinar o vencedor. A restrição é usar a própria implementação do TAD Lista Encadeada — ou adaptar a de sala de aula — tanto para as peças quanto para as mãos dos jogadores.',
  },
  {
    title: 'Miniprojeto 3 — Gerenciador de eventos com HashMap',
    description: 'Sistema de eventos organizados por categoria: inserir, remover, buscar por categoria e listar todas as categorias. A chave da tabela hash é a categoria e o valor é a lista de eventos dela. Exige redimensionamento quando o fator de carga fica entre 0,7 e 0,8, aumentando a tabela para um primo próximo ao dobro e refazendo o hash de todos os itens. O professor deixou explícito no mural: não vale usar dicionário do Python — a implementação do HashMap tem de ser do aluno.',
  },
];

export const examTopics: PanelItem[] = [
  {
    title: 'AV1',
    description: 'Recursividade · Pilhas · Filas · Deques · Análise de desempenho (Big O).',
  },
  {
    title: 'AV2',
    description: 'Listas encadeadas · Algoritmos de busca · Algoritmos de ordenação · Árvores · Análise de desempenho (Big O).',
  },
  {
    title: 'Prova Final',
    description: 'Recursividade · Pilhas · Filas · Busca sequencial e binária · Ordenação · Árvores · Análise de desempenho (Big O).',
  },
];
