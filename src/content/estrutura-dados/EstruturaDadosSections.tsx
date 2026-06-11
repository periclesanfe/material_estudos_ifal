import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import CodeBlock from '../../components/ui/CodeBlock';
import ConceptCard from '../../components/ui/ConceptCard';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import { ESTRUTURA_DADOS_GUIDE_CONTEXT, ESTRUTURA_DADOS_TOPICS, QUIZ_DATA } from './data';

interface EstruturaDadosSectionsProps {
  activeSection: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

interface PanelItem {
  title: string;
  description: string;
}

interface StatItem {
  label: string;
  value: string;
  accent: string;
}

interface ComparisonRow {
  criterion: string;
  left: string;
  right: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const revisionOverview: ConceptItem[] = [
  {
    title: 'Prova 1',
    description:
      'Cobre Python básico, strings e listas, recursividade, Tipos Abstratos de Dados (TAD), listas sequenciais, pilhas (LIFO), filas (FIFO) e deque. Foco em estruturas lineares e princípios fundamentais.',
    accent: 'accent',
  },
  {
    title: 'Prova 2',
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

const pythonTypes: ConceptItem[] = [
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

const pythonOperators: PanelItem[] = [
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

const pythonControlFlow: PanelItem[] = [
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

const pythonFunctionsConcepts: ConceptItem[] = [
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

const stringConcepts: ConceptItem[] = [
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

const listConcepts: ConceptItem[] = [
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

const strVsListComparison: ComparisonRow[] = [
  { criterion: 'Mutabilidade', left: 'Imutável - não pode ser alterada', right: 'Mutável - pode ser alterada no lugar' },
  { criterion: 'Elementos', left: 'Somente caracteres Unicode', right: 'Qualquer tipo de dado (misturado)' },
  { criterion: 'Clonar', left: 's[:] cria nova string', right: 'a[:] cria lista independente' },
  { criterion: 'Modificar elemento', left: 'Impossível - gera TypeError', right: 'lista[i] = novo_valor funciona' },
];

const recursionConcepts: ConceptItem[] = [
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

const recursionExamples: PanelItem[] = [
  {
    title: 'Contagem regressiva',
    description: 'contagem(n): caso base n==0, retorna. Caso recursivo: imprime n, chama contagem(n-1). Simples e didático.',
  },
  {
    title: 'Soma de 1 a n',
    description: 'soma_ateh(n) = n + soma_ateh(n-1). Caso base: soma_ateh(0) = 0. Gera n frames na pilha.',
  },
  {
    title: 'Busca binária recursiva',
    description: 'Compara o elemento do meio e chama recursivamente na metade relevante. O(log n) em chamadas.',
  },
  {
    title: 'Fibonacci',
    description: 'fib(n) = fib(n-1) + fib(n-2). Caso base: fib(0)=0, fib(1)=1. Atenção: exponencial O(2ⁿ) sem memoização.',
  },
];

const recursionFlow: string[] = [
  'Chamada inicial: f(n)',
  'Verifica caso base?',
  'Não → chama f(n-1) - empilha frame',
  'Não → chama f(n-2) - empilha frame',
  'Sim → retorna valor base',
  'Desempilha frames na ordem inversa',
  'Resultado propagado de volta',
];

const tadConcepts: ConceptItem[] = [
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

const tadObjectives: PanelItem[] = [
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
    description: 'O usuário do TAD não precisa saber como ele é implementado - apenas quais operações estão disponíveis e o que fazem.',
  },
  {
    title: 'Armazenamento sequencial',
    description: 'Dados agrupados em posições contíguas de memória, acessados por índice. Base para arrays e listas sequenciais.',
  },
];

const tadHierarchy: string[] = [
  'TAD (especificação abstrata)',
  'Implementação (estrutura + algoritmos)',
  'Tipo Concreto (código executável)',
  'Uso pelo programa/usuário',
];

const listInterface: PanelItem[] = [
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

const listComplexity: StatItem[] = [
  { label: 'Adicionar no fim', value: 'O(1)*', accent: 'accent' },
  { label: 'Inserir em posição', value: 'O(n)', accent: 'accent3' },
  { label: 'Acessar por índice', value: 'O(1)', accent: 'accent' },
  { label: 'Buscar elemento', value: 'O(n)', accent: 'accent3' },
  { label: 'Remover elemento', value: 'O(n)', accent: 'accent3' },
  { label: 'Tamanho', value: 'O(1)', accent: 'accent' },
];

const stackConcepts: ConceptItem[] = [
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

const stackApplications: PanelItem[] = [
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

const stackComplexity: StatItem[] = [
  { label: 'push(e)', value: 'O(1)*', accent: 'accent' },
  { label: 'pop()', value: 'O(1)', accent: 'accent' },
  { label: 'top()', value: 'O(1)', accent: 'accent' },
  { label: 'is_empty()', value: 'O(1)', accent: 'accent' },
  { label: 'len()', value: 'O(1)', accent: 'accent' },
];

const queueConcepts: ConceptItem[] = [
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

const queueCircular: PanelItem[] = [
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

const queueVsStack: ComparisonRow[] = [
  { criterion: 'Princípio', left: 'FIFO - Primeiro a entrar, primeiro a sair', right: 'LIFO - Último a entrar, primeiro a sair' },
  { criterion: 'Inserção', left: 'enqueue() - insere no final', right: 'push() - insere no topo' },
  { criterion: 'Remoção', left: 'dequeue() - remove do início', right: 'pop() - remove do topo' },
  { criterion: 'Consulta', left: 'first() - consulta o início', right: 'top() - consulta o topo' },
  { criterion: 'Aplicações', left: 'BFS, sistemas de atendimento, impressão', right: 'DFS, undo/redo, call stack, parênteses' },
];

const dequeConcepts: ConceptItem[] = [
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

const dequeVsOthers: ComparisonRow[] = [
  { criterion: 'Inserção no início', left: 'Sim - add_first() O(1)', right: 'Não - apenas no topo (push)' },
  { criterion: 'Inserção no fim', left: 'Sim - add_last() O(1)', right: 'Sim - enqueue() O(1)' },
  { criterion: 'Remoção do início', left: 'Sim - delete_first() O(1)', right: 'Sim - dequeue() O(1)' },
  { criterion: 'Remoção do fim', left: 'Sim - delete_last() O(1)', right: 'Não - apenas do início' },
];

const linkedListConcepts: ConceptItem[] = [
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
    description: 'Mantém os elementos em ordem. Inserção percorre até encontrar a posição correta: O(n). Busca pode parar mais cedo.',
    accent: 'accent5',
  },
];

const linkedListOperations: PanelItem[] = [
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

const linkedVsArray: ComparisonRow[] = [
  { criterion: 'Acesso por índice', left: 'O(n) - percorre sequencialmente', right: 'O(1) - acesso direto por índice' },
  { criterion: 'Inserção no início', left: 'O(1) - apenas atualiza head', right: 'O(n) - desloca todos os elementos' },
  { criterion: 'Remoção no início', left: 'O(1) - atualiza head', right: 'O(n) - desloca todos os elementos' },
  { criterion: 'Uso de memória', left: 'Extra por nó (referência)', right: 'Compacto, contíguo na memória' },
];

const searchConcepts: ConceptItem[] = [
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

const binarySearchSteps: string[] = [
  'Define low=0 e high=len-1',
  'Calcula mid = (low + high) // 2',
  'lista[mid] == alvo → encontrado!',
  'lista[mid] > alvo → high = mid - 1',
  'lista[mid] < alvo → low = mid + 1',
  'Se low > high → não encontrado',
];

const searchComparison: ComparisonRow[] = [
  { criterion: 'Pré-requisito', left: 'Nenhum - qualquer lista', right: 'Lista ordenada obrigatória' },
  { criterion: 'Complexidade', left: 'O(n)', right: 'O(log n)' },
  { criterion: 'n = 1.000.000', left: 'Até 1.000.000 comparações', right: 'Até ~20 comparações' },
  { criterion: 'Implementação', left: 'Trivial - laço for/while', right: 'Iterativa ou recursiva' },
];

const hashConcepts: ConceptItem[] = [
  {
    title: 'Função Hash',
    description: 'Mapeia uma chave para um índice (slot) da tabela. Boa função hash: distribuição uniforme, cálculo rápido.',
    accent: 'accent',
  },
  {
    title: 'Fator de Carga (FC)',
    description: 'FC = itens / tamanho_tabela. Quanto maior o FC, mais colisões. Recomenda-se rehash quando FC > 0.5.',
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

const hashFunctions: PanelItem[] = [
  {
    title: 'Método do Módulo',
    description: 'hash(item) = item % tamanho_tabela. Simples e eficiente. Ex: 44 % 11 = 0. Prefira tamanho primo.',
  },
  {
    title: 'Folding Method',
    description: 'Divide o item em partes iguais e soma. Ex: 436-555-4601 → 436+555+460+1 = 1452 → 1452%11 = 0.',
  },
  {
    title: 'Mid-Square Method',
    description: 'Eleva o item ao quadrado e extrai dígitos do meio. Ex: 44² = 1936 → extrai 93 → 93%11 = 5.',
  },
  {
    title: 'Hash para Strings',
    description: 'Soma os ord() dos caracteres ponderados pela posição. Ex: hash("gato") = sum(ord(c) * pos). Distribui melhor que soma simples.',
  },
];

const collisionMethods: ComparisonRow[] = [
  { criterion: 'Linear Probing', left: 'Tenta (h+1)%m, (h+2)%m... Simples mas cria clustering.', right: 'Clustering: grupos de elementos consecutivos' },
  { criterion: 'Quadratic Probing', left: 'Incrementos quadráticos: h+1², h+2², h+3²... Reduz clustering.', right: 'Não garante explorar todos os slots' },
  { criterion: 'Chaining', left: 'Cada slot é uma lista encadeada. Sem limite de FC.', right: 'Usa memória extra; O(k) onde k = lista do slot' },
];

const sortConcepts: ConceptItem[] = [
  {
    title: 'Bubble Sort',
    description: 'Compara pares adjacentes e troca se necessário. Repete n vezes. O(n²) médio/pior; O(n) melhor (com flag).',
    accent: 'accent',
  },
  {
    title: 'Selection Sort',
    description: 'Encontra o mínimo da parte não-ordenada e o posiciona. O(n²) sempre. Poucos swaps.',
    accent: 'accent2',
  },
  {
    title: 'Insertion Sort',
    description: 'Insere cada elemento na posição correta da parte já ordenada. O(n²) pior; O(n) para lista quase ordenada.',
    accent: 'accent3',
  },
  {
    title: 'Merge Sort',
    description: 'Divide recursivamente ao meio e intercala partes ordenadas. O(n log n) sempre. Estável. Usa O(n) de espaço extra.',
    accent: 'accent4',
  },
  {
    title: 'Quick Sort',
    description: 'Escolhe pivô, particiona em menores/maiores. O(n log n) médio; O(n²) no pior caso. In-place.',
    accent: 'accent5',
  },
];

const sortComplexity: ComparisonRow[] = [
  { criterion: 'Bubble Sort', left: 'O(n) melhor · O(n²) médio/pior', right: 'O(1) espaço - estável' },
  { criterion: 'Selection Sort', left: 'O(n²) sempre', right: 'O(1) espaço - instável' },
  { criterion: 'Insertion Sort', left: 'O(n) melhor · O(n²) pior', right: 'O(1) espaço - estável - bom para quase-ordenado' },
  { criterion: 'Merge Sort', left: 'O(n log n) sempre', right: 'O(n) espaço - estável' },
  { criterion: 'Quick Sort', left: 'O(n log n) médio · O(n²) pior', right: 'O(log n) pilha - instável - bom na prática' },
];

const treeConcepts: ConceptItem[] = [
  {
    title: 'Raiz',
    description: 'Nó sem pai. É o ponto de entrada da árvore. Toda árvore não-vazia tem exatamente uma raiz.',
    accent: 'accent',
  },
  {
    title: 'Folha',
    description: 'Nó sem filhos. Nós folha ficam na borda externa da árvore.',
    accent: 'accent2',
  },
  {
    title: 'Altura e Grau',
    description: 'Altura: comprimento do maior caminho raiz-folha. Grau de um nó: número de filhos. Árvore binária: grau ≤ 2.',
    accent: 'accent3',
  },
  {
    title: 'BST (Árvore Binária de Busca)',
    description: 'Para cada nó N: todos os elementos da subárvore esquerda < N < todos da subárvore direita.',
    accent: 'accent5',
  },
];

const treeTraversals: PanelItem[] = [
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

const bstComplexity: ComparisonRow[] = [
  { criterion: 'Busca', left: 'O(h) onde h é a altura', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Inserção', left: 'O(h) - percorre até posição correta', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Remoção', left: 'O(h) - 3 casos: folha, 1 filho, 2 filhos', right: 'O(log n) balanceada · O(n) degenerada' },
  { criterion: 'Em-ordem', left: 'O(n) - visita todos os nós', right: 'Produz sequência ordenada' },
];

// ── Helper components ────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
    </div>
  );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-4`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

function PanelList({ items }: { items: PanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
          <h3 className="font-semibold text-sm md:text-base text-text mb-0.5">{item.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function StatStrip({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map(item => (
        <div key={item.label} className="bg-card border border-border rounded-xl px-5 py-5 text-center">
          <p className={`font-display font-black text-2xl text-${item.accent}`}>{item.value}</p>
          <p className="text-text-muted text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ rows, leftLabel, rightLabel }: { rows: ComparisonRow[]; leftLabel: string; rightLabel: string }) {
  return (
    <div className="overflow-x-auto study-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs w-1/4">Critério</th>
            <th className="text-left py-3 px-4 font-semibold text-accent uppercase tracking-wider text-xs">{leftLabel}</th>
            <th className="text-left py-3 px-4 font-semibold text-accent3 uppercase tracking-wider text-xs">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0">
              <td className="py-3 px-4 font-semibold text-text text-xs">{row.criterion}</td>
              <td className="py-3 px-4 text-text-muted text-xs leading-relaxed">{row.left}</td>
              <td className="py-3 px-4 text-text-muted text-xs leading-relaxed">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Section components ───────────────────────────────────────────────────────

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Estrutura de Dados"
        subtitle="Da representação em memória à análise de complexidade - escolha a estrutura certa para cada problema"
        colorClass="text-accent"
      />

      <HighlightBox title="Objetivo da disciplina">
        <p>
          A disciplina parte de Python como linguagem de implementação e avança progressivamente: dos tipos primitivos até TADs complexos como árvores e tabelas hash. O fio condutor é sempre a análise de complexidade - saber escolher a estrutura certa para o problema certo.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Visão geral da disciplina</h3>
        <ConceptGrid items={revisionOverview} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Fluxo de aprendizado</h3>
        <FlowDiagram
          items={[
            'Python Básico (tipos, controle, funções)',
            'Strings e Listas (sequências Python)',
            'Recursividade (base para DFS, divisão)',
            'TAD (abstração de dados)',
            'Estruturas Lineares (listas, pilhas, filas)',
            'Encadeamento e Busca (O(n) vs O(log n))',
            'Hashing e Ordenação (rumo a O(1) e O(n log n))',
            'Árvores (estruturas hierárquicas)',
          ]}
        />
      </div>
    </section>
  );
}

function PythonSection() {
  const code = `\
# Tipos primitivos e tipagem dinâmica
idade = 25           # int
altura = 1.75        # float
ativo = True         # bool
nome = "Ana"         # str

# Operadores especiais
print(7 // 2)        # 3   - divisão inteira
print(7 % 2)         # 1   - resto
print(2 ** 10)       # 1024 - potência

# Estruturas de controle
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "é par")
    else:
        print(i, "é ímpar")

# Funções - input() SEMPRE retorna str!
def dobrar(n):
    return n * 2

x = int(input("Digite um número: "))
print(dobrar(x))`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Python Básico"
        subtitle="Tipos primitivos, operadores, estruturas de controle e funções"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Tipos primitivos em Python</h3>
        <ConceptGrid items={pythonTypes} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Operadores especiais</h3>
        <PanelList items={pythonOperators} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Estruturas de controle</h3>
        <PanelList items={pythonControlFlow} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Funções e conceitos-chave</h3>
        <ConceptGrid items={pythonFunctionsConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Exemplo prático</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Atenção na prova" accent="var(--color-accent3)">
        <p>
          <code>input()</code> sempre retorna str. Sem conversão explícita, <code>2 + "3"</code> gera TypeError. Use <code>int(input())</code> ou <code>float(input())</code> para ler números.
        </p>
      </HighlightBox>
    </section>
  );
}

function StringsListasSection() {
  const code = `\
# ── Strings: IMUTÁVEIS ──────────────────────────
s = "python"
print(s[0])          # 'p'   - índice 0
print(s[-1])         # 'n'   - último
print(s[1:4])        # 'yth' - slice
print(s.upper())     # 'PYTHON'
print(s.split('t'))  # ['py', 'hon']
# s[0] = 'P'        # TypeError! strings não mudam

# ── Listas: MUTÁVEIS ─────────────────────────────
lista = [10, 20, 30]
lista.append(40)     # [10, 20, 30, 40]
lista.insert(0, 5)   # [5, 10, 20, 30, 40]
lista.pop(0)         # remove o 5 → [10, 20, 30, 40]
lista[0] = 99        # [99, 20, 30, 40]

# ── Aliasing vs Clonar ───────────────────────────
a = [1, 2, 3]
b = a          # aliasing: b e a são o MESMO objeto
c = a[:]       # clone:    c é uma cópia independente

b.append(4)
print(a)       # [1, 2, 3, 4] - afetado pelo alias!
print(b)       # [1, 2, 3, 4]
print(c)       # [1, 2, 3]    - clone não foi afetado
print(a is b)  # True  - mesmo objeto
print(a is c)  # False - objetos diferentes`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Strings e Listas"
        subtitle="Sequências imutáveis e mutáveis, métodos, aliasing e clonagem"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Propriedades de Strings</h3>
        <ConceptGrid items={stringConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Propriedades de Listas</h3>
        <ConceptGrid items={listConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">String vs Lista</h3>
        <ComparisonTable rows={strVsListComparison} leftLabel="String" rightLabel="Lista" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Exemplo: aliasing, clone e imutabilidade</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Identidade vs igualdade">
        <p>
          Use <code>a is b</code> para verificar se são o mesmo objeto na memória. Use <code>a == b</code> para verificar se têm o mesmo valor. Para clonar uma lista: <code>b = a[:]</code>.
        </p>
      </HighlightBox>
    </section>
  );
}

function RecursividadeSection() {
  const code = `\
# ── Dois ingredientes obrigatórios ───────────────
# 1. Caso base (condição de parada)
# 2. Redução ao caso base (problema fica menor)

def contagem(n):
    if n == 0:           # caso base
        return
    print(n)
    contagem(n - 1)      # redução: n → n-1

# contagem(3) imprime: 3  2  1

def soma_ateh(n):
    if n == 0:           # caso base
        return 0
    return n + soma_ateh(n - 1)   # redução

print(soma_ateh(5))   # 15
# Pilha de chamadas:
# soma_ateh(5) → 5 + soma_ateh(4)
#   soma_ateh(4) → 4 + soma_ateh(3)
#     soma_ateh(3) → 3 + soma_ateh(2)
#       soma_ateh(2) → 2 + soma_ateh(1)
#         soma_ateh(1) → 1 + soma_ateh(0)
#           soma_ateh(0) → 0  ← caso base!
# ← desempilha retornando: 1, 3, 6, 10, 15

def fib(n):
    if n <= 1:           # caso base duplo
        return n
    return fib(n - 1) + fib(n - 2)   # O(2^n) sem memo!`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Recursividade"
        subtitle="Caso base, redução ao caso base e pilha de chamadas"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={recursionConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Como a recursão funciona</h3>
        <FlowDiagram items={recursionFlow} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Exemplos clássicos em código</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Mais exemplos</h3>
        <PanelList items={recursionExamples} />
      </div>

      <HighlightBox title="Cuidado com recursão infinita" accent="var(--color-accent2)">
        <p>
          Toda função recursiva precisa de: (1) caso base explícito e (2) garantia de que cada chamada aproxima o problema do caso base. Sem isso → recursão infinita → StackOverflow.
        </p>
      </HighlightBox>
    </section>
  );
}

function TADSection() {
  const code = `\
# TAD define O QUÊ - a interface abstrata
# Implementação define COMO - a classe concreta

class Data:
    """TAD Data: operações dia(), mes(), ano(), eh_valido()"""
    def __init__(self, d, m, a):
        self._dia = d    # dados privados (implementação)
        self._mes = m
        self._ano = a

    # Interface pública (O QUÊ o usuário pode fazer)
    def dia(self):
        return self._dia

    def mes(self):
        return self._mes

    def ano(self):
        return self._ano

    def eh_valido(self):
        return 1 <= self._mes <= 12 and 1 <= self._dia <= 31

# Quem usa o TAD não precisa saber COMO está implementado
d = Data(15, 6, 2025)
print(d.dia())        # 15
print(d.eh_valido())  # True
# d._dia = 99  ← possível, mas viola o contrato do TAD`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tipos Abstratos de Dados (TAD)"
        subtitle="Separação entre interface e implementação - o conceito central de ED"
        colorClass="text-accent4"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={tadConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Hierarquia TAD → Implementação</h3>
        <FlowDiagram items={tadHierarchy} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Objetivos e características</h3>
        <PanelList items={tadObjectives} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Exemplo: TAD Data em Python</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Interface vs Implementação">
        <p>
          O TAD define <strong>O QUÊ</strong> pode ser feito (interface pública). A implementação define <strong>COMO</strong> fazer (estrutura de armazenamento e algoritmos). Quem usa o TAD não precisa saber como está implementado.
        </p>
      </HighlightBox>
    </section>
  );
}

function ListasSection() {
  const code = `\
# A list do Python já é um array dinâmico (TAD Lista)

lista = []

# adicionar(e)      → O(1) amortizado
lista.append(10)
lista.append(20)
lista.append(30)

# adicionar_em(pos, e) → O(n) - desloca elementos
lista.insert(0, 5)    # [5, 10, 20, 30]

# recuperar(pos)    → O(1) - acesso direto por índice
print(lista[2])       # 20

# remover(pos)      → O(n) - desloca elementos
lista.pop(0)          # remove o 5

# pertence(e)       → O(n) - busca sequencial
print(10 in lista)    # True

# tamanho()         → O(1) se guardado como atributo
print(len(lista))     # 3

# O array dobra de tamanho quando necessário (crescimento exponencial)
# Isso garante que append() seja O(1) AMORTIZADO`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Sequenciais"
        subtitle="Interface de TAD lista e análise de complexidade das operações"
        colorClass="text-accent5"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Interface da Lista como TAD</h3>
        <PanelList items={listInterface} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Complexidade das operações</h3>
        <StatStrip items={listComplexity} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Exemplo com complexidades comentadas</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="O que significa O(1) amortizado?">
        <p>
          O asterisco em O(1)* indica <strong>amortizado</strong>: na maior parte das vezes é O(1), mas eventualmente o array dobra de tamanho (O(n) pontual). A média ao longo de n operações ainda é O(1).
        </p>
      </HighlightBox>
    </section>
  );
}

function PilhasSection() {
  const code = `\
class PilhaArray:
    def __init__(self):
        self._dados = []

    def push(self, e):        # O(1)*
        self._dados.append(e)

    def pop(self):            # O(1)
        return self._dados.pop()

    def top(self):            # O(1) - só consulta, não remove
        return self._dados[-1]

    def is_empty(self):
        return len(self._dados) == 0


# Aplicação: verificar parênteses balanceados
def is_matched(expr):
    pares = {')': '(', ']': '[', '}': '{'}
    pilha = PilhaArray()
    for c in expr:
        if c in '([{':
            pilha.push(c)        # abre → empilha
        elif c in ')]}':
            if pilha.is_empty() or pilha.top() != pares[c]:
                return False     # fecha sem par → inválido
            pilha.pop()
    return pilha.is_empty()      # deve estar vazia no fim

print(is_matched("(a + [b * c])"))   # True
print(is_matched("(a + [b * c)"))    # False - par errado
print(is_matched("((a + b)"))        # False - falta fechar`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pilhas (Stack)"
        subtitle="Princípio LIFO, operações e aplicações práticas"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={stackConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Complexidade das operações</h3>
        <StatStrip items={stackComplexity} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação e aplicação</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Outras aplicações de pilhas</h3>
        <PanelList items={stackApplications} />
      </div>

      <HighlightBox title="Algoritmo is_matched()">
        <p>
          Para cada caractere da expressão: símbolo abrindo (parêntese, colchete ou chave) → push. Símbolo fechando → se pilha vazia ou top não corresponde ao par → retorna False. No fim, a pilha deve estar vazia para a expressão ser válida.
        </p>
      </HighlightBox>
    </section>
  );
}

function FilasSection() {
  const code = `\
class FilaArray:
    def __init__(self, capacidade=10):
        self._dados = [None] * capacidade
        self._ini = 0      # ponteiro do início
        self._fim = 0      # ponteiro do fim
        self._tam = 0
        self._N = capacidade

    def enqueue(self, e):   # O(1)
        self._dados[self._fim] = e
        self._fim = (self._fim + 1) % self._N   # avança circular
        self._tam += 1

    def dequeue(self):      # O(1) - sem deslocar elementos!
        val = self._dados[self._ini]
        self._ini = (self._ini + 1) % self._N   # avança circular
        self._tam -= 1
        return val

    def first(self):        # O(1)
        return self._dados[self._ini]

    def is_empty(self):
        return self._tam == 0

# sem array circular: dequeue precisaria deslocar n elementos → O(n)
# com array circular: ini avança com % N → O(1)`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Filas (Queue)"
        subtitle="Princípio FIFO, array circular e aplicações"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={queueConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Por que usar array circular?</h3>
        <PanelList items={queueCircular} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação com array circular</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Pilha vs Fila</h3>
        <ComparisonTable rows={queueVsStack} leftLabel="Fila (FIFO)" rightLabel="Pilha (LIFO)" />
      </div>

      <HighlightBox title="Flood Fill (coloração de regiões)" accent="var(--color-accent3)">
        <p>
          Algoritmo usando fila: insere pixel inicial, processa pixel, enfileira vizinhos não coloridos da mesma cor. Continua até fila esvaziar. Similar ao BFS em grafos.
        </p>
      </HighlightBox>
    </section>
  );
}

function DequeSection() {
  const code = `\
from collections import deque

# Operações nas duas extremidades - todas O(1)
d = deque()
d.append(10)         # add_last  → deque([10])
d.appendleft(5)      # add_first → deque([5, 10])
d.append(20)         # add_last  → deque([5, 10, 20])

print(d.pop())       # delete_last  → 20
print(d.popleft())   # delete_first → 5
print(d)             # deque([10])

# rotate(k): desloca k posições para a direita
d2 = deque([1, 2, 3, 4, 5])
d2.rotate(2)
print(d2)            # deque([4, 5, 1, 2, 3])

# Aplicação: verificar palíndromo
def eh_palindromo(palavra):
    letras = deque(palavra)
    while len(letras) > 1:
        if letras.popleft() != letras.pop():
            return False
    return True

print(eh_palindromo("arara"))    # True
print(eh_palindromo("python"))   # False`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Deque (Double-Ended Queue)"
        subtitle="Inserção e remoção nas duas extremidades em O(1)"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={dequeConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Deque vs Fila</h3>
        <ComparisonTable rows={dequeVsOthers} leftLabel="Deque" rightLabel="Fila" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">collections.deque na prática</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="collections.deque em Python">
        <p>
          <code>append()</code>/<code>pop()</code> para o fim; <code>appendleft()</code>/<code>popleft()</code> para o início. Ambas O(1). <code>rotate(k)</code> desloca k posições. <code>maxlen</code> cria deque de tamanho fixo (circular buffer).
        </p>
      </HighlightBox>
    </section>
  );
}

function ListasEncadeadasSection() {
  const code = `\
class No:
    def __init__(self, dado):
        self._dados = dado
        self._proximo = None   # aponta para o próximo nó

class ListaNaoOrdenada:
    def __init__(self):
        self._head = None      # lista vazia

    def add(self, e):          # O(1) - insere na cabeça
        novo = No(e)
        novo._proximo = self._head
        self._head = novo

    def is_empty(self):        # O(1)
        return self._head is None

    def size(self):            # O(n) - percorre tudo
        contador = 0
        atual = self._head
        while atual is not None:
            contador += 1
            atual = atual._proximo
        return contador

    def search(self, e):       # O(n)
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                return True
            atual = atual._proximo
        return False

    def remove(self, e):       # O(n)
        anterior = None
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                if anterior is None:         # removendo head
                    self._head = atual._proximo
                else:
                    anterior._proximo = atual._proximo
                return
            anterior = atual
            atual = atual._proximo`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Encadeadas"
        subtitle="Nós ligados por referências - estrutura dinâmica sem deslocamentos"
        colorClass="text-accent4"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={linkedListConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Operações e complexidades</h3>
        <PanelList items={linkedListOperations} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação completa</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Lista Encadeada vs Array</h3>
        <ComparisonTable rows={linkedVsArray} leftLabel="Lista Encadeada" rightLabel="Array (lista Python)" />
      </div>

      <HighlightBox title="Remoção do head" accent="var(--color-accent4)">
        <p>
          Para remover um nó, é necessário manter referência ao nó anterior para poder fazer <code>anterior._proximo = nó._proximo</code>. Caso especial: remover o head - apenas atualize head para o próximo nó.
        </p>
      </HighlightBox>
    </section>
  );
}

function PesquisaSection() {
  const code = `\
# ── Busca Sequencial - O(n) ──────────────────────
def busca_sequencial(lista, alvo):
    for i in range(len(lista)):
        if lista[i] == alvo:
            return i       # encontrou na posição i
    return -1              # não encontrou

# ── Busca Binária - O(log n) ─────────────────────
# PRÉ-REQUISITO: lista deve estar ORDENADA!
def busca_binaria(lista, alvo):
    low = 0
    high = len(lista) - 1

    while low <= high:
        mid = (low + high) // 2      # meio do intervalo

        if lista[mid] == alvo:
            return mid               # encontrou!
        elif lista[mid] < alvo:
            low = mid + 1            # descarta metade esquerda
        else:
            high = mid - 1           # descarta metade direita

    return -1                        # não encontrou

nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(busca_sequencial(nums, 23))   # 5
print(busca_binaria(nums, 23))      # 5
print(busca_binaria(nums, 10))      # -1

# Para n=1.000.000: sequencial pode fazer 1.000.000 comparações
# Binária faz no máximo log2(1.000.000) ≈ 20 comparações!`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pesquisa e Busca"
        subtitle="Busca sequencial O(n) e busca binária O(log n) - dividir e conquistar"
        colorClass="text-accent5"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={searchConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Passo a passo da busca binária</h3>
        <FlowDiagram items={binarySearchSteps} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Implementação dos dois algoritmos</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Busca Sequencial vs Busca Binária</h3>
        <ComparisonTable rows={searchComparison} leftLabel="Sequencial" rightLabel="Binária" />
      </div>

      <HighlightBox title="Por que O(log n)?">
        <p>
          A busca binária divide o espaço de busca ao meio a cada passo. Para n=1.000.000 elementos, são necessárias no máximo log₂(1.000.000) ≈ 20 comparações - uma diferença brutal em relação à busca sequencial.
        </p>
      </HighlightBox>
    </section>
  );
}

function HashingSection() {
  const code = `\
# ── Funções hash ──────────────────────────────────
def hash_modulo(item, tamanho):
    return item % tamanho          # simples e eficiente

def hash_string(s, tamanho):
    total = 0
    for i, c in enumerate(s):
        total += ord(c) * (i + 1)  # pondera pela posição
    return total % tamanho

tabela = [None] * 11
slot = hash_modulo(44, 11)   # 44 % 11 = 0
tabela[slot] = 44

# ── Colisão: linear probing ───────────────────────
def inserir(tabela, item):
    slot = item % len(tabela)
    while tabela[slot] is not None:
        slot = (slot + 1) % len(tabela)   # próximo livre
    tabela[slot] = item

# ── Python dict é uma tabela hash otimizada ───────
dicionario = {}
dicionario['nome'] = 'Ana'   # put(key, val) → O(1)
print(dicionario['nome'])    # get(key)       → O(1)
print('nome' in dicionario)  # in             → O(1)
del dicionario['nome']       # del key        → O(1)

# FC = itens / tamanho_tabela
# Quando FC > 0.5 → Python faz rehash automático`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Hashing e Tabelas Hash"
        subtitle="Busca em O(1) - função hash, colisão e resolução"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={hashConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Funções hash</h3>
        <PanelList items={hashFunctions} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação e TAD Map</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Métodos de resolução de colisão</h3>
        <ComparisonTable rows={collisionMethods} leftLabel="Como funciona" rightLabel="Problema/característica" />
      </div>

      <HighlightBox title="TAD Map (dicionário)">
        <p>
          Operações: <code>put(key, val)</code>, <code>get(key)</code>, <code>del key</code>, <code>len()</code>, <code>in</code>. O dict do Python é uma tabela hash otimizada com open addressing e rehash automático quando FC ultrapassa o limiar.
        </p>
      </HighlightBox>
    </section>
  );
}

function OrdenacaoSection() {
  const codeBubble = `\
# Bubble Sort - O(n²) médio/pior, O(n) melhor com flag
def bubble_sort(lista):
    n = len(lista)
    for i in range(n - 1):
        trocou = False
        for j in range(n - 1 - i):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
                trocou = True
        if not trocou:       # já ordenada: para cedo → O(n)
            break

# Selection Sort - O(n²) SEMPRE (não tem otimização)
def selection_sort(lista):
    n = len(lista)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if lista[j] < lista[min_idx]:
                min_idx = j
        lista[i], lista[min_idx] = lista[min_idx], lista[i]`;

  const codeMerge = `\
# Merge Sort - O(n log n) SEMPRE - divide e conquista
def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    meio = len(lista) // 2
    esq = merge_sort(lista[:meio])   # divide
    dir = merge_sort(lista[meio:])   # divide
    return merge(esq, dir)           # conquista

def merge(esq, dir):
    resultado = []
    i = j = 0
    while i < len(esq) and j < len(dir):
        if esq[i] <= dir[j]:
            resultado.append(esq[i])
            i += 1
        else:
            resultado.append(dir[j])
            j += 1
    return resultado + esq[i:] + dir[j:]

# Quick Sort - O(n log n) médio, O(n²) pior caso
def quick_sort(lista):
    if len(lista) <= 1:
        return lista
    pivo = lista[len(lista) // 2]
    menores = [x for x in lista if x < pivo]
    iguais  = [x for x in lista if x == pivo]
    maiores = [x for x in lista if x > pivo]
    return quick_sort(menores) + iguais + quick_sort(maiores)`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Algoritmos de Ordenação"
        subtitle="Bubble, Selection, Insertion, Merge e Quick Sort - análise comparativa"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Os principais algoritmos</h3>
        <ConceptGrid items={sortConcepts} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Bubble Sort e Selection Sort</h3>
        <CodeBlock code={codeBubble} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Merge Sort e Quick Sort</h3>
        <CodeBlock code={codeMerge} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Análise de complexidade</h3>
        <ComparisonTable rows={sortComplexity} leftLabel="Complexidade de tempo" rightLabel="Espaço e estabilidade" />
      </div>

      <HighlightBox title="Algoritmo estável">
        <p>
          Mantém a ordem relativa de elementos com chaves iguais. Bubble, Insertion e Merge são estáveis. Selection e Quick Sort (implementação padrão) não são.
        </p>
      </HighlightBox>

      <HighlightBox title="Na prática" accent="var(--color-accent5)">
        <p>
          Python usa Timsort (híbrido de Merge Sort + Insertion Sort), O(n log n), estável. Para dados quase ordenados, Insertion Sort é imbatível. Merge Sort garante O(n log n) mas usa O(n) espaço extra.
        </p>
      </HighlightBox>
    </section>
  );
}

function ArvoresSection() {
  const code = `\
class NoArvore:
    def __init__(self, valor):
        self.valor = valor
        self.esq = None    # subárvore esquerda
        self.dir = None    # subárvore direita

class BST:
    def __init__(self):
        self.raiz = None

    def inserir(self, valor):
        self.raiz = self._inserir(self.raiz, valor)

    def _inserir(self, no, valor):
        if no is None:                     # posição encontrada
            return NoArvore(valor)
        if valor < no.valor:               # vai para a esquerda
            no.esq = self._inserir(no.esq, valor)
        elif valor > no.valor:             # vai para a direita
            no.dir = self._inserir(no.dir, valor)
        return no                          # ignora duplicatas

    # Em-ordem: esq → raiz → dir → produz ordem CRESCENTE
    def em_ordem(self, no):
        if no is not None:
            self.em_ordem(no.esq)
            print(no.valor, end=' ')
            self.em_ordem(no.dir)

    def buscar(self, valor):               # O(h)
        atual = self.raiz
        while atual is not None:
            if valor == atual.valor:
                return True
            elif valor < atual.valor:
                atual = atual.esq
            else:
                atual = atual.dir
        return False

bst = BST()
for v in [5, 3, 7, 1, 4, 6, 9]:
    bst.inserir(v)
bst.em_ordem(bst.raiz)    # 1 3 4 5 6 7 9 - ordem crescente!
print(bst.buscar(4))       # True
print(bst.buscar(8))       # False`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores e BST"
        subtitle="Estruturas hierárquicas, travessias e Árvore Binária de Busca"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={treeConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Travessias de árvore binária</h3>
        <PanelList items={treeTraversals} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Implementação de BST</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Complexidade das operações na BST</h3>
        <ComparisonTable rows={bstComplexity} leftLabel="Operação" rightLabel="Casos balanceada / degenerada" />
      </div>

      <HighlightBox title="BST degenerada" accent="var(--color-accent2)">
        <p>
          Inserir elementos em ordem crescente cria uma árvore "em linha" - a altura h = n. Isso degrada a busca para O(n). Árvores balanceadas (AVL, Red-Black) resolvem isso mantendo h ≈ log n.
        </p>
      </HighlightBox>
    </section>
  );
}

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Teste seus conhecimentos com questões de Prova 1 e Prova 2"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Estrutura de Dados para gerar lotes de 1, 5 ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={ESTRUTURA_DADOS_GUIDE_CONTEXT} topics={ESTRUTURA_DADOS_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={ESTRUTURA_DADOS_GUIDE_CONTEXT} topics={ESTRUTURA_DADOS_TOPICS} />}
      />
    </section>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export default function EstruturaDadosSections({ activeSection }: EstruturaDadosSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'python':
      return <PythonSection />;
    case 'strings-listas':
      return <StringsListasSection />;
    case 'recursividade':
      return <RecursividadeSection />;
    case 'tad':
      return <TADSection />;
    case 'listas':
      return <ListasSection />;
    case 'pilhas':
      return <PilhasSection />;
    case 'filas':
      return <FilasSection />;
    case 'deque':
      return <DequeSection />;
    case 'listas-encadeadas':
      return <ListasEncadeadasSection />;
    case 'pesquisa':
      return <PesquisaSection />;
    case 'hashing':
      return <HashingSection />;
    case 'ordenacao':
      return <OrdenacaoSection />;
    case 'arvores':
      return <ArvoresSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
