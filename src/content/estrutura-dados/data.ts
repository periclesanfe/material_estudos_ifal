import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const ESTRUTURA_DADOS_GUIDE_CONTEXT = `
GUIA COMPLETO DE ESTRUTURA DE DADOS - Resumo:

1. PYTHON BÁSICO: Python é linguagem dinamicamente tipada (os tipos são inferidos em tempo de execução). Tipos primitivos: int, float, bool, str. Entrada de dados via input() sempre retorna string - use int() ou float() para converter. Operadores: ** (potência), // (divisão inteira), % (módulo/resto). Expressões booleanas: and, or, not. Estrutura condicional: if/elif/else com indentação obrigatória. Repetição: for (percorre sequência/range) e while (baseado em condição). range(start, stop, step) gera sequências de inteiros. Funções definidas com def, podem ter return. Palavras reservadas não podem ser usadas como identificadores. print() para saída, input() para entrada. Variáveis não precisam de declaração prévia de tipo.

2. STRINGS E LISTAS: Strings são sequências imutáveis de caracteres, indexadas a partir de 0. Operações: concatenação (+), repetição (*), fatiamento/slice (s[i:j]), comprimento (len()). Métodos: upper(), lower(), strip(), split(). Strings não podem ser modificadas no lugar - toda operação retorna uma nova string. Listas são sequências mutáveis, indexadas a partir de 0. Métodos: append(e) adiciona ao fim, insert(i,e) insere em posição, remove(e) remove primeira ocorrência, pop(i) remove por índice, sort() ordena, reverse() inverte, count(e) conta ocorrências, index(e) busca. Listas podem conter tipos mistos e ser aninhadas. Objetos e referências: "is" verifica identidade (mesmo objeto), "==" verifica igualdade de valor. Aliasing: dois nomes para o mesmo objeto - modificar por um afeta o outro. Clonar: a[:] cria cópia independente. Funções modificadoras alteram a lista original e geralmente retornam None; funções puras retornam nova lista sem alterar a original.

3. RECURSIVIDADE: Uma função é recursiva quando chama a si mesma diretamente ou indiretamente. Dois ingredientes essenciais: (1) caso base - condição de parada sem chamada recursiva; (2) redução ao caso base - cada chamada reduz o problema em direção ao caso base. Exemplo clássico: contagem regressiva(n) → se n==0 retorna, senão imprime n e chama contagem_regressiva(n-1). Soma de 1 a n: soma_ateh(n) = n + soma_ateh(n-1), com caso base soma_ateh(0)=0. A pilha de chamadas (call stack) gerencia frames - cada chamada empilha um frame que é desempilhado ao retornar. Sem caso base adequado → recursão infinita → StackOverflow. Vantagem: código elegante para problemas com subestrutura recursiva (ex.: árvores, divide e conquista).

4. TIPOS ABSTRATOS DE DADOS (TAD): TAD = conjunto de valores + série de operações sobre esses valores, definido de forma matemática independente de implementação. Tipos primitivos (int, float, bool, char) são atômicos, não decomponíveis. Tipos complexos são compostos de partes menores. TAD separa interface (o que pode ser feito) da implementação (como é feito). A implementação especifica estruturas de armazenamento e algoritmos. Objetivos das Estruturas de Dados: teórico - criar modelos matemáticos; prático - criar representações concretas e rotinas eficientes. Hierarquia: TAD → Implementação → Tipo Concreto. Exemplo TAD Data: operações dia(), mes(), ano(), criar(d,m,a), eh_valido(). Armazenamento sequencial: dados contíguos na memória, acessados por índice.

5. LISTAS SEQUENCIAIS: Interface da lista como TAD: adicionar(e), adicionar_em(pos,e), recuperar(pos), remover(pos), pertence(e), tamanho(). Implementação com array (lista Python): acesso por índice O(1). Inserção no final: O(1) amortizado (eventual realocação). Inserção em posição i: O(n) por deslocamento dos elementos. Remoção: O(n). Busca: O(n). Armazenar o tamanho junto evita percorrer a lista para contar. Alocação dinâmica em Python: a list cresce automaticamente quando necessário, dobrando a capacidade (estratégia de crescimento exponencial para amortizar custo).

6. PILHAS (STACK): Princípio LIFO - Last In, First Out (último a entrar, primeiro a sair). Interface: push(e) empilha no topo, pop() desempilha e retorna o topo, top() consulta sem remover, is_empty() verifica se vazia, len()/size() retorna tamanho. Complexidade: todas as operações são O(1) amortizado com implementação por array. Classe PilhaArray usa lista Python internamente. Aplicações práticas: histórico de browser (voltar/avançar), inversão de strings e arquivos, matching de parênteses/colchetes/chaves (is_matched()), conversão de decimal para binário, expressões pós-fixas (polonesa reversa), chamadas de funções no SO (call stack). Algoritmo is_matched(): percorre a expressão; abre colchete → push; fecha colchete → se vazia ou top não corresponde → false.

7. FILAS (QUEUE): Princípio FIFO - First In, First Out (primeiro a entrar, primeiro a sair). Interface: enqueue(e) insere no final, dequeue() remove do início, first() consulta sem remover, is_empty(), len()/size(). Complexidade: O(1) amortizado para todas as operações. Implementação com array circular (FilaArray) evita o O(n) de deslocar elementos: mantém ponteiros ini e fim. Fórmula: ini = (ini + 1) % N (avança de forma circular). Aplicações: sistemas de atendimento, call centers, BFS em grafos, coloração de regiões em imagens (flood fill usando fila).

8. DEQUE (Double-Ended Queue): Fila de dupla entrada - inserção e remoção nas duas extremidades. Interface: add_first(e), add_last(e), delete_first(), delete_last(), first(), last(), is_empty(), len(). Todas as operações são O(1). Python oferece collections.deque com operações adicionais: appendleft() ≡ add_first, popleft() ≡ delete_first, rotate(k) rotaciona k posições, maxlen para limitar tamanho. Internamente usa lista duplamente encadeada. Acesso ao meio O(n). Pode simular tanto pilha quanto fila. Aplicação: verificação de palíndromos, sliding window, histórico bidirecional.

9. LISTAS ENCADEADAS: Nós distribuídos na memória, ligados por referências (ponteiros). Classe Nó: atributos _dados (valor) e _proximo (referência para o próximo nó, ou None). Lista não ordenada (ListaNaoOrdenada): atributo head aponta para o primeiro nó. add(e): cria novo nó, aponta seu _proximo para head, atualiza head para o novo nó → O(1). is_empty(): verifica head == None → O(1). size(): percorre todos os nós contando → O(n). search(e): percorre nós comparando → O(n). remove(e): percorre mantendo referência ao nó anterior para reencadear após remover → O(n). Lista ordenada: insere na posição correta mantendo ordem, percorrendo para encontrar o ponto de inserção → O(n).

10. PESQUISA/BUSCA: Busca sequencial: percorre elemento por elemento até encontrar ou chegar ao fim. O(n) no pior caso. Em lista ordenada, pode parar ao encontrar elemento maior - média de n/2 comparações mas ainda O(n). Busca binária: exige lista ordenada; compara o elemento do meio e descarta metade da lista a cada passo. O(log n). Estratégia dividir e conquistar. Versão iterativa: usa índices low e high. Versão recursiva: passa sublista (atenção: slice é O(k)). Prática: Python bisect usa busca binária.

11. HASHING: Objetivo: busca e inserção em O(1). Função hash: mapeia um item (chave) a uma posição (slot) na tabela. Fator de carga FC = itens/tamanho_tabela (0 ≤ FC ≤ 1). Colisão: dois itens mapeados para o mesmo slot. Funções hash: módulo (item % m), folding method (divide item em partes iguais e soma), mid-square method (eleva ao quadrado e pega dígitos do meio). Hash para strings: soma dos ord() dos caracteres ponderados pela posição. Resolução de colisões: linear probing (tenta slot seguinte: (h+1)%m, (h+2)%m, ..., sofre clustering), quadratic probing (incrementos quadráticos: 1, 4, 9, ...), chaining (cada slot tem uma lista encadeada). TAD Map: put(key,val), get(key), del key, len(), in. Análise: O(1) sem colisões, O(1 + FC/2) com linear probing; rehash quando FC > 0.5.

12. ORDENAÇÃO: Bubble sort: compara pares adjacentes e troca se necessário; O(n²) médio e pior, O(n) melhor com flag de otimização. Selection sort: encontra o mínimo da parte não-ordenada e troca com a posição atual; O(n²) sempre. Insertion sort: insere cada elemento na posição correta da parte já ordenada; O(n²) pior, O(n) melhor (quase ordenada). Merge sort: divide ao meio recursivamente e intercala partes ordenadas; O(n log n) sempre; O(n) espaço extra. Quick sort: escolhe pivô e particiona em menores/maiores; O(n log n) médio, O(n²) pior; pivô aleatório melhora desempenho. Shell sort: generaliza insertion sort com gap decrescente; O(n^1.5) típico. Python usa Timsort (híbrido merge+insertion) O(n log n).

13. ÁRVORES: Estrutura hierárquica não-linear. Raiz: nó sem pai. Folha: nó sem filhos. Pai e filho: relação entre nó e seus descendentes diretos. Grau: número de filhos. Altura: comprimento do maior caminho raiz-folha. Subárvore: qualquer nó e seus descendentes. Árvore Binária (AB): cada nó tem no máximo 2 filhos (esq e dir). Travessias: pré-ordem (raiz→esq→dir), em-ordem (esq→raiz→dir), pós-ordem (esq→dir→raiz). Árvore Binária de Busca (ABB/BST): para cada nó, todos os elementos da subárvore esquerda são menores e da direita são maiores. Busca na BST: O(h) onde h é a altura; O(log n) para BST balanceada, O(n) para degenerada.

DIVISÃO POR AVALIAÇÕES:
- PROVA 1: Python básico (tipos, operadores, estruturas de controle, funções), strings e listas (imutabilidade, métodos, aliasing, clone), recursividade (caso base, redução, call stack), TAD (definição, objetivos, tipos primitivos vs complexos), listas sequenciais (interface, complexidade de operações), pilhas LIFO (push/pop/top, aplicações), filas FIFO (enqueue/dequeue/first, array circular), deque (add_first/add_last, collections.deque).
- PROVA 2: Listas encadeadas (Nó, head, add/search/remove), pesquisa sequencial e binária (complexidades, requisitos), hashing (função hash, colisão, resolução, fator de carga), ordenação (bubble, selection, insertion, merge, quick sort), árvores (BST, travessias, altura, propriedades).
`;

export const ESTRUTURA_DADOS_TOPICS: QuizTopicOption[] = [
    {
        value: 'prova1',
        label: 'Prova 1: Python, Listas, Pilhas, Filas e Deque',
        prompt: 'Conteúdo da Prova 1 de Estrutura de Dados: Python básico (tipos primitivos, tipagem dinâmica, operadores //, %, **, input/print, if/elif/else, for/while, range, funções), strings (imutabilidade, indexação, slice, métodos upper/lower/strip/split), listas (mutabilidade, append/insert/remove/pop/sort/reverse, aliasing, clone), recursividade (caso base, redução ao caso base, pilha de chamadas), Tipos Abstratos de Dados TAD (definição, interface vs implementação, tipos primitivos vs complexos), listas sequenciais (interface, complexidade de operações), pilhas LIFO (push, pop, top, is_empty, len, aplicações: matching de parênteses, inversão, call stack), filas FIFO (enqueue, dequeue, first, array circular), deque double-ended queue (add_first, add_last, delete_first, delete_last, collections.deque).',
    },
    {
        value: 'prova2',
        label: 'Prova 2: Listas Encadeadas, Busca, Hashing, Ordenação e Árvores',
        prompt: 'Conteúdo da Prova 2 de Estrutura de Dados: listas encadeadas (classe Nó com dado e próximo, head, add O(1), search/remove/size O(n), lista ordenada), pesquisa sequencial (O(n), lista ordenada melhora por interrupção antecipada), busca binária (exige lista ordenada, O(log n), dividir e conquistar, versão iterativa e recursiva), hashing (função hash, fator de carga FC, colisão, linear probing, quadratic probing, chaining, folding method, mid-square, TAD Map com put/get), ordenação (bubble sort O(n²), selection sort O(n²), insertion sort O(n) melhor, merge sort O(n log n), quick sort O(n log n) médio, shell sort), árvores (raiz, folha, grau, altura, árvore binária, travessias pré-ordem/em-ordem/pós-ordem, BST propriedade e busca O(h)).',
    },
    { value: 'python', label: 'Python Básico' },
    { value: 'strings-listas', label: 'Strings e Listas' },
    { value: 'recursividade', label: 'Recursividade' },
    { value: 'tad', label: 'Tipos Abstratos de Dados' },
    { value: 'listas', label: 'Listas Sequenciais' },
    { value: 'pilhas', label: 'Pilhas (Stack)' },
    { value: 'filas', label: 'Filas (Queue)' },
    { value: 'deque', label: 'Deque' },
    { value: 'listas-encadeadas', label: 'Listas Encadeadas' },
    { value: 'pesquisa', label: 'Pesquisa e Busca' },
    { value: 'hashing', label: 'Hashing e Tabelas Hash' },
    { value: 'ordenacao', label: 'Algoritmos de Ordenação' },
    { value: 'arvores', label: 'Árvores e BST' },
];

export const ESTRUTURA_DADOS_SECTIONS = [
    { id: 'intro', title: 'Introdução à Estrutura de Dados', shortTitle: 'Introdução' },
    { id: 'python', title: 'Python Básico', shortTitle: 'Python', exam: 'P1' },
    { id: 'strings-listas', title: 'Strings e Listas', shortTitle: 'Strings/Listas', exam: 'P1' },
    { id: 'recursividade', title: 'Recursividade', shortTitle: 'Recursividade', exam: 'P1' },
    { id: 'tad', title: 'Tipos Abstratos de Dados', shortTitle: 'TAD', exam: 'P1' },
    { id: 'listas', title: 'Listas Sequenciais', shortTitle: 'Listas', exam: 'P1' },
    { id: 'pilhas', title: 'Pilhas (Stack)', shortTitle: 'Pilhas', exam: 'P1' },
    { id: 'filas', title: 'Filas (Queue)', shortTitle: 'Filas', exam: 'P1' },
    { id: 'deque', title: 'Deque', shortTitle: 'Deque', exam: 'P1' },
    { id: 'listas-encadeadas', title: 'Listas Encadeadas', shortTitle: 'Enc.', exam: 'P2' },
    { id: 'pesquisa', title: 'Pesquisa e Busca', shortTitle: 'Pesquisa', exam: 'P2' },
    { id: 'hashing', title: 'Hashing', shortTitle: 'Hashing', exam: 'P2' },
    { id: 'ordenacao', title: 'Ordenação', shortTitle: 'Ordenação', exam: 'P2' },
    { id: 'arvores', title: 'Árvores', shortTitle: 'Árvores', exam: 'P2' },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_BASE: QuizQuestionData[] = [
    {
        id: 'q1',
        question: '1. Em Python, o que acontece ao usar o operador // entre dois números?',
        options: [
            'Calcula o resto da divisão',
            'Realiza divisão com resultado float sempre',
            'Realiza divisão inteira, descartando a parte decimal',
            'Calcula a potência entre os dois números',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O operador // realiza divisão inteira (floor division), descartando a parte decimal.',
        feedbackWrong: 'O operador // realiza divisão inteira. Por exemplo: 7 // 2 = 3. O operador % calcula o resto e ** calcula potência.',
    },
    {
        id: 'q2',
        question: '2. Python é uma linguagem de tipagem:',
        options: [
            'Estática - os tipos são declarados antes de usar a variável',
            'Dinâmica - os tipos são inferidos em tempo de execução',
            'Fraca - qualquer operação entre tipos é permitida automaticamente',
            'Manual - o programador aloca e libera memória explicitamente',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Python é dinamicamente tipado: o tipo da variável é determinado em tempo de execução.',
        feedbackWrong: 'Python é dinamicamente tipado - não é necessário declarar tipos; eles são inferidos em tempo de execução.',
    },
    {
        id: 'q3',
        question: '3. Qual das afirmações sobre a função input() em Python está correta?',
        options: [
            'Ela retorna automaticamente int se o usuário digitar um número',
            'Ela retorna sempre um valor do tipo string, independente do que for digitado',
            'Ela retorna float quando o usuário digita números decimais',
            'Ela lança exceção se o usuário digitar texto em vez de número',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. input() sempre retorna string - é necessário usar int() ou float() para converter.',
        feedbackWrong: 'input() sempre retorna str. Use int(input()) ou float(input()) para obter outros tipos.',
    },
    {
        id: 'q4',
        question: '4. Strings em Python são:',
        options: [
            'Mutáveis - podem ser modificadas no lugar por índice',
            'Imutáveis - não podem ser alteradas após a criação',
            'Mutáveis somente se declaradas com aspas duplas',
            'Imutáveis apenas quando armazenadas em variáveis',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Strings são imutáveis em Python. Operações como upper() retornam uma nova string.',
        feedbackWrong: 'Strings são imutáveis. Você não pode fazer s[0] = "X". Qualquer operação retorna uma nova string.',
    },
    {
        id: 'q5',
        question: '5. Qual é a diferença entre aliasing e clonagem de lista em Python?',
        options: [
            'Aliasing cria uma cópia independente; clonar cria um segundo nome para o mesmo objeto',
            'Aliasing atribui um segundo nome ao mesmo objeto; clonar cria uma cópia independente via a[:]',
            'Aliasing e clonagem são a mesma operação, apenas com sintaxe diferente',
            'Clonagem preserva os tipos; aliasing converte todos para string',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Aliasing = dois nomes para o mesmo objeto. Clonar com a[:] cria uma lista independente.',
        feedbackWrong: 'Aliasing: b = a faz b e a apontarem para o mesmo objeto. Clonar: b = a[:] cria cópia independente.',
    },
    {
        id: 'q6',
        question: '6. Em Python, funções modificadoras de lista:',
        options: [
            'Retornam uma nova lista com as modificações, sem alterar a original',
            'Lançam exceção se a lista for vazia',
            'Alteram a lista original no lugar e geralmente retornam None',
            'São exclusivas de listas ordenadas',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Funções modificadoras alteram a lista no lugar. Por exemplo, lista.sort() retorna None.',
        feedbackWrong: 'Funções modificadoras (como append, sort) alteram a lista original. Funções puras retornam nova lista sem modificar a original.',
    },
    {
        id: 'q7',
        question: '7. Quais são os dois ingredientes essenciais de uma função recursiva?',
        options: [
            'Laço for e condição while',
            'Caso base (condição de parada) e redução ao caso base',
            'Declaração de variável global e chamada a outro módulo',
            'Retorno obrigatório de lista e uso de range()',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Toda função recursiva precisa de: (1) caso base e (2) redução progressiva ao caso base.',
        feedbackWrong: 'Os dois ingredientes são: caso base (onde não há chamada recursiva) e a redução do problema em direção ao caso base.',
    },
    {
        id: 'q8',
        question: '8. O que acontece em uma função recursiva sem caso base adequado?',
        options: [
            'A função retorna None automaticamente',
            'O Python converte em iteração automaticamente',
            'Ocorre recursão infinita e estouro de pilha (StackOverflow)',
            'A função executa exatamente uma vez e para',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Sem caso base, as chamadas se acumulam na pilha até esgotar a memória.',
        feedbackWrong: 'Sem caso base, a função chama a si mesma indefinidamente causando recursão infinita e StackOverflow.',
    },
    {
        id: 'q9',
        question: '9. Um Tipo Abstrato de Dados (TAD) é definido como:',
        options: [
            'Uma classe Python com pelo menos três métodos públicos',
            'Um conjunto de valores e um conjunto de operações, definidos matematicamente independente de implementação',
            'Qualquer tipo de dado que usa alocação dinâmica de memória',
            'Uma estrutura de dados que armazena apenas tipos primitivos',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. TAD define O QUE pode ser feito (interface) independentemente de COMO será implementado.',
        feedbackWrong: 'TAD = conjunto de valores + operações definidos matematicamente, separando interface de implementação.',
    },
    {
        id: 'q10',
        question: '10. Qual é a principal diferença entre tipos primitivos e tipos complexos em Estrutura de Dados?',
        options: [
            'Tipos primitivos são definidos pelo programador; tipos complexos pelo Python',
            'Tipos primitivos são atômicos e não decomponíveis; tipos complexos são compostos de partes menores',
            'Tipos complexos só existem em linguagens orientadas a objeto',
            'Tipos primitivos ocupam mais memória que tipos complexos',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Tipos primitivos (int, float, bool) são indivisíveis. Tipos complexos são compostos de partes.',
        feedbackWrong: 'Tipos primitivos são atômicos (int, float, bool, char). Tipos complexos são decomponíveis em partes menores.',
    },
    {
        id: 'q11',
        question: '11. O princípio LIFO, que rege as Pilhas, significa:',
        options: [
            'Last Insert, First Output - a última inserção define a primeira saída de forma aleatória',
            'List In, Free Out - a lista é liberada após uso',
            'Last In, First Out - o último elemento inserido é o primeiro a ser removido',
            'Linear Input, First Output - entrada linear e saída pelo início',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. LIFO = Last In, First Out. O topo da pilha é sempre o elemento mais recente.',
        feedbackWrong: 'LIFO = Last In, First Out. O último a entrar é o primeiro a sair, como uma pilha de pratos.',
    },
    {
        id: 'q12',
        question: '12. Na implementação de uma pilha, a operação pop():',
        options: [
            'Consulta o elemento do topo sem removê-lo',
            'Remove e retorna o elemento do topo da pilha',
            'Adiciona um novo elemento no topo da pilha',
            'Verifica se a pilha está vazia',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. pop() remove e retorna o topo. top() apenas consulta sem remover.',
        feedbackWrong: 'pop() remove e retorna o elemento do topo. push(e) empilha, top() consulta sem remover.',
    },
    {
        id: 'q13',
        question: '13. Qual das seguintes NÃO é uma aplicação típica de pilhas?',
        options: [
            'Verificação de parênteses balanceados em expressões',
            'Gerenciamento de chamadas de funções (call stack)',
            'Algoritmo BFS (Busca em Largura) em grafos',
            'Histórico de navegação (botão voltar do browser)',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. BFS usa fila (FIFO), não pilha. DFS é que usa pilha (ou recursão).',
        feedbackWrong: 'BFS usa FILA (FIFO). Pilhas são usadas para: matching de parênteses, call stack, histórico de browser, DFS, conversão para binário.',
    },
    {
        id: 'q14',
        question: '14. O princípio FIFO, que rege as Filas, significa:',
        options: [
            'Fast Input, Fast Output - operações em tempo constante',
            'First In, First Out - o primeiro elemento inserido é o primeiro a ser removido',
            'Fixed Index, First Output - acesso por índice fixo',
            'Flexible Input, Fixed Output - entrada flexível e saída fixa',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. FIFO = First In, First Out. Como uma fila de banco.',
        feedbackWrong: 'FIFO = First In, First Out. O primeiro a entrar é o primeiro a sair, como fila de supermercado.',
    },
    {
        id: 'q15',
        question: '15. Na implementação circular de uma Fila (FilaArray), qual é a fórmula para avançar o ponteiro do início após um dequeue?',
        options: [
            'ini = ini - 1',
            'ini = ini + 1',
            'ini = (ini + 1) % N',
            'ini = (ini * 2) % N',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A fórmula (ini + 1) % N garante que o ponteiro volte ao início quando chega ao final do array.',
        feedbackWrong: 'ini = (ini + 1) % N. O módulo N faz o ponteiro "dar a volta" circularmente, evitando desperdício de espaço.',
    },
    {
        id: 'q16',
        question: '16. Qual é a complexidade de tempo das operações push, pop e top em uma pilha implementada com array?',
        options: [
            'O(n) para todas as operações',
            'O(log n) para todas as operações',
            'O(1) amortizado para todas as operações',
            'O(1) para push; O(n) para pop e top',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Todas as operações de pilha são O(1) amortizado com implementação por array (lista Python).',
        feedbackWrong: 'Todas as operações de pilha (push, pop, top, is_empty, len) são O(1) amortizado com implementação por array.',
    },
    {
        id: 'q17',
        question: '17. O Deque (Double-Ended Queue) se diferencia de uma fila comum porque:',
        options: [
            'Apenas permite inserção no início',
            'Permite inserção e remoção nas duas extremidades (início e fim)',
            'Não permite remoção de elementos',
            'Usa o princípio LIFO em vez de FIFO',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Deque permite add_first, add_last, delete_first e delete_last - todos O(1).',
        feedbackWrong: 'Deque = Double-Ended Queue. Permite inserção e remoção nas duas extremidades (início e fim).',
    },
    {
        id: 'q18',
        question: '18. Em uma lista encadeada, a classe Nó geralmente contém:',
        options: [
            'Apenas o dado armazenado',
            'O dado e um índice numérico de posição',
            'O dado e uma referência para o próximo nó',
            'O dado, o índice e o tamanho da lista',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. A classe Nó (Node) contém _dados e _proximo (referência para o próximo nó, ou None).',
        feedbackWrong: 'A classe Nó contém: o dado armazenado (_dados) e a referência para o próximo nó (_proximo, None se for o último).',
    },
    {
        id: 'q19',
        question: '19. Qual é a complexidade da operação add() em uma lista encadeada não ordenada que insere na cabeça (head)?',
        options: [
            'O(n) - precisa percorrer toda a lista',
            'O(log n) - divide a lista ao meio',
            'O(1) - insere diretamente no início sem percorrer',
            'O(n²) - comparações aninhadas',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. add() é O(1): cria nó, aponta seu _proximo para head, atualiza head - sem percorrer a lista.',
        feedbackWrong: 'add() na cabeça é O(1): cria novo nó, aponta para head, atualiza head. Não precisa percorrer.',
    },
    {
        id: 'q20',
        question: '20. Qual é a complexidade das operações search() e remove() em uma lista encadeada?',
        options: [
            'O(1) - acesso direto por ponteiro',
            'O(n) - é necessário percorrer os nós sequencialmente',
            'O(log n) - usa busca binária interna',
            'O(n²) - percorre a lista duas vezes',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. search() e remove() são O(n) pois precisam percorrer os nós um a um até encontrar o elemento.',
        feedbackWrong: 'search() e remove() em lista encadeada são O(n) - sem índices, é necessário percorrer sequencialmente.',
    },
    {
        id: 'q21',
        question: '21. A busca sequencial em uma lista não ordenada tem complexidade:',
        options: [
            'O(1) no caso médio',
            'O(log n) usando comparação binária',
            'O(n) - no pior caso percorre todos os elementos',
            'O(n log n) - requer ordenação prévia',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A busca sequencial é O(n): no pior caso, verifica todos os n elementos.',
        feedbackWrong: 'Busca sequencial é O(n). No pior caso (elemento no fim ou ausente), percorre todos os n elementos.',
    },
    {
        id: 'q22',
        question: '22. Qual é o pré-requisito para aplicar a busca binária em uma lista?',
        options: [
            'A lista deve ser encadeada (lista ligada)',
            'A lista deve estar ordenada',
            'A lista deve ter tamanho par',
            'A lista deve conter apenas números inteiros',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A busca binária exige que a lista esteja previamente ordenada.',
        feedbackWrong: 'A busca binária exige lista ordenada para poder descartar metade dos elementos a cada comparação.',
    },
    {
        id: 'q23',
        question: '23. A complexidade da busca binária é O(log n) porque:',
        options: [
            'Ela usa uma estrutura de árvore internamente',
            'Ela percorre a lista de trás para frente',
            'A cada comparação, metade dos elementos restantes é descartada',
            'Ela usa hashing para localizar o elemento',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. A cada passo, a região de busca é dividida ao meio, resultando em O(log n) comparações.',
        feedbackWrong: 'A cada comparação, a busca binária descarta metade dos elementos restantes. Com n=1.000.000, precisamos de no máximo ~20 comparações.',
    },
    {
        id: 'q24',
        question: '24. Em uma tabela hash, o fator de carga (FC) é definido como:',
        options: [
            'O número total de slots da tabela',
            'A quantidade de colisões ocorridas',
            'A razão entre o número de itens armazenados e o tamanho da tabela',
            'O número de rehashes realizados',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. FC = itens / tamanho_tabela. Quanto maior o FC, maior a probabilidade de colisão.',
        feedbackWrong: 'FC = número de itens / tamanho da tabela. Quando FC > 0.5, recomenda-se um rehash.',
    },
    {
        id: 'q25',
        question: '25. O que é uma colisão em uma tabela hash?',
        options: [
            'Quando dois slots têm o mesmo endereço de memória',
            'Quando dois itens diferentes são mapeados para o mesmo slot pela função hash',
            'Quando a tabela está completamente cheia',
            'Quando a função hash retorna um valor negativo',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Colisão ocorre quando dois itens distintos produzem o mesmo índice pela função hash.',
        feedbackWrong: 'Colisão: dois ou mais itens mapeados para o mesmo slot. Métodos de resolução: linear probing, quadratic probing, chaining.',
    },
    {
        id: 'q26',
        question: '26. No método de resolução de colisão por linear probing:',
        options: [
            'Cada slot contém uma lista encadeada com os itens colididos',
            'A tabela é dobrada de tamanho imediatamente',
            'Tenta-se o próximo slot sequencialmente até encontrar um livre',
            'O item é descartado se houver colisão',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Linear probing tenta (h+1)%m, (h+2)%m, ... até encontrar slot vazio. Sofre de agrupamento (clustering).',
        feedbackWrong: 'Linear probing: ao colidir no slot h, tenta (h+1)%m, (h+2)%m... Problema: clustering (agrupamento de elementos).',
    },
    {
        id: 'q27',
        question: '27. Qual é a complexidade média das operações put() e get() em uma tabela hash com boa função hash e baixo fator de carga?',
        options: [
            'O(n)',
            'O(log n)',
            'O(n log n)',
            'O(1)',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Exato. Hashing atinge O(1) em média para put e get - o principal objetivo dessa estrutura.',
        feedbackWrong: 'O objetivo do hashing é O(1) para busca e inserção. Com colisões, é O(1 + FC/2) em média.',
    },
    {
        id: 'q28',
        question: '28. Qual algoritmo de ordenação tem complexidade O(n²) no pior, médio E melhor caso?',
        options: [
            'Bubble sort com otimização de flag',
            'Insertion sort',
            'Merge sort',
            'Selection sort',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Selection sort sempre faz n(n-1)/2 comparações, independente da ordem inicial dos dados.',
        feedbackWrong: 'Selection sort é O(n²) em todos os casos pois sempre busca o mínimo no restante da lista. Bubble e insertion sort têm O(n) no melhor caso.',
    },
    {
        id: 'q29',
        question: '29. O Merge Sort tem vantagem sobre o Bubble Sort principalmente porque:',
        options: [
            'Usa menos memória que o Bubble Sort',
            'É O(n log n) no pior caso, enquanto Bubble Sort é O(n²)',
            'Não precisa de comparações entre elementos',
            'Funciona apenas com listas encadeadas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Merge sort é O(n log n) sempre, enquanto bubble sort é O(n²) no pior e médio caso.',
        feedbackWrong: 'Merge sort é O(n log n) em todos os casos. Bubble sort é O(n²) no pior/médio caso e O(n) somente se otimizado e a lista já estiver ordenada.',
    },
    {
        id: 'q30',
        question: '30. Em uma Árvore Binária de Busca (BST), qual é a propriedade fundamental?',
        options: [
            'Cada nó tem exatamente dois filhos',
            'Para cada nó, todos os elementos da subárvore esquerda são menores e da direita são maiores',
            'A árvore deve estar sempre completamente balanceada',
            'O nó raiz é sempre o maior elemento da árvore',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A propriedade BST: subárvore esquerda < nó < subárvore direita, garantindo busca eficiente.',
        feedbackWrong: 'BST: para cada nó N, todos os elementos à esquerda são menores que N e todos à direita são maiores.',
    },
    {
        id: 'q31',
        question: '31. Na travessia em-ordem (in-order) de uma BST, os elementos são visitados em qual ordem?',
        options: [
            'Da raiz, depois subárvore esquerda, depois subárvore direita',
            'Da subárvore esquerda, depois raiz, depois subárvore direita - resultando em ordem crescente',
            'Da subárvore esquerda, depois subárvore direita, depois raiz',
            'Nível por nível, da raiz para as folhas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Em-ordem (esq → raiz → dir) em uma BST visita os elementos em ordem crescente.',
        feedbackWrong: 'Em-ordem: esq → raiz → dir. Em uma BST, isso visita os elementos em ordem crescente.',
    },
    {
        id: 'q32',
        question: '32. Qual é a complexidade de busca em uma BST?',
        options: [
            'Sempre O(log n)',
            'Sempre O(n)',
            'O(h), onde h é a altura - O(log n) para BST balanceada e O(n) para degenerada',
            'O(1) - acesso direto pelo valor',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O(h) onde h é a altura. Em BST balanceada h ≈ log n. Em BST degenerada (tipo lista) h = n.',
        feedbackWrong: 'Busca em BST é O(h). Se balanceada: O(log n). Se degenerada (todos os elementos em um lado): O(n).',
    },
];

export const QUIZ_DATA: QuizQuestionData[] = QUIZ_DATA_BASE.map((question, index) => ({
    ...question,
    exam: index < 17 ? 'prova1' as const : 'prova2' as const,
}));
