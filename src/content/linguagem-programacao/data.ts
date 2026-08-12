import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

/**
 * Avaliações da disciplina. Declaradas uma única vez aqui: tanto as seções
 * quanto as questões apontam para estes ids via `exams`, e o rótulo exibido ao
 * aluno sai daqui (modelo do PR #31, que eliminou o antigo `examLabels`).
 */
export const LPGM_EXAMS: ExamDefinition[] = [
  {
    id: 'av1',
    label: 'AV1',
    description: 'Fundamentos, tipos, entrada/saída e controle de fluxo.',
  },
  {
    id: 'av2',
    label: 'AV2',
    description: 'Coleções, funções, escopo, strings, tipos próprios e arquivos.',
  },
];

export const LPGM_GUIDE_CONTEXT = `
GUIA DE LINGUAGEM DE PROGRAMAÇÃO (LNPG) — Resumo. A disciplina foi ministrada em PYTHON (linguagem do curso, usada nas aulas, nos exercícios semanais do The Huxley e na "Avaliação sobre Python"); o projeto final foi em C, e a prova de recuperação podia ser feita em C ou em Python. Outras linguagens (C++, Java, JavaScript, PHP) aparecem apenas como comparação conceitual, e não são cobradas. Priorize Python (e C quando o assunto for projeto/arquivos/struct) ao gerar perguntas.

1. CONCEITOS DE LINGUAGENS: Uma linguagem de programação é o meio de escrever instruções para o computador. O texto que escrevemos é o código-fonte. Um software tradutor converte o código-fonte para linguagem de máquina. Esse tradutor é um compilador ou um interpretador. Linguagens compiladas (ex.: C, C++, Java) traduzem o programa inteiro antes de executar, gerando um artefato; linguagens interpretadas (ex.: Python, JavaScript, PHP) traduzem e executam linha a linha. Java é híbrida (compila para bytecode executado pela JVM) e JavaScript usa compilação JIT, o que torna a fronteira menos nítida. Uma expressão é a combinação de valores, operadores, constantes, variáveis e funções, avaliada segundo regras de precedência (1 + 2 * 3 = 7; (1 + 2) * 3 = 9). Classificação por gerações: 1ª linguagem de máquina, 2ª Assembly, 3ª alto nível, 4ª específicas de domínio (ex.: SQL).

2. PARADIGMAS: O paradigma imperativo descreve o passo a passo (comandos que mudam o estado). O procedural organiza em procedimentos/funções. O orientado a objetos organiza em objetos (dados + comportamento). O funcional trata computação como avaliação de funções. Uma mesma linguagem pode suportar vários paradigmas (multiparadigma).

3. TIPOS, VARIÁVEIS E CONSTANTES: Uma variável é um espaço na memória que guarda um valor de um tipo. Tipos primitivos: inteiro (int), real (float/double), texto (string) e booleano (bool); em C puro o booleano é representado por inteiro. Tipagem estática (o tipo é verificado em tempo de compilação: C, C++, Java) vs dinâmica (em tempo de execução: Python, JavaScript, PHP). Tipagem forte vs fraca. Atribuição usa o operador =. Identificadores são os nomes das variáveis. Constantes: Python usa apenas a convenção de NOME MAIÚSCULO (não há constante real), C usa #define e const, C++ const, Java static final, JavaScript const, PHP define()/const. Divisão: em Python 3, 7/2 = 3.5 e 7//2 = 3 (divisão inteira); em C, C++ e Java, dividir dois inteiros trunca (7/2 = 3), sendo preciso 7/2.0 para obter 3.5; % devolve o resto.

4. ENTRADA E SAÍDA: Todo programa lê dados de entrada e produz saída. A leitura de entrada costuma retornar texto, exigindo conversão (casting) para número quando necessário — em Python, int(input(...)) ou float(input(...)). Sem a conversão, "5" * 2 devolve "55" (repetição de texto) em vez de 10. Em C usa-se scanf com &variavel; em Java, Scanner; em C++, cin. Em juiz automático (The Huxley) não se deve colocar mensagem dentro do input(): o correto é numero = int(input()).

5. ESTRUTURAS DE CONTROLE DE FLUXO: Condicionais if/else e encadeamento com elif (Python) ou else if (linguagens de chaves). O switch existe em C, C++, Java, JavaScript e PHP para comparar um valor exato contra constantes, exigindo break em cada caso para não vazar; Python não tem switch clássico (só match/case a partir da 3.10). Operadores relacionais (==, !=, >, <, >=, <=) e lógicos (and/&&, or/||, not/!). Repetição: laço while (repete ENQUANTO a condição for verdadeira — usado quando não se sabe de antemão quantas voltas) e laço for (itera um número de vezes ou sobre uma coleção). Blocos são delimitados por chaves { } na maioria das linguagens e por indentação em Python; errar o recuo produz IndentationError: expected an indented block.

6. ESTRUTURAS DE DADOS COMPOSTAS: Listas/arrays guardam vários valores em ordem, acessados por índice (começa em 0), mutáveis. Métodos de lista em Python: append, insert, remove, count, extend, reverse, len e fatiamento. Em Java, String[] tem tamanho fixo e o equivalente da lista é ArrayList. Tuplas são coleções imutáveis escritas com parênteses, usadas como REGISTROS; tentar reatribuir um item gera TypeError: 'tuple' object does not support item assignment. Lista de tuplas é o padrão de dados da disciplina, com acesso duplo lista[0][0] (posição na lista, depois posição na tupla). C e C++ suprem a tupla com struct e std::tuple, Java com record, e JavaScript e PHP não têm equivalente imutável direto. Dicionários/mapas guardam pares chave→valor, acessados pela chave (única), não pela posição.

7. FUNÇÕES E MODULARIZAÇÃO: Uma função agrupa instruções para uma tarefa, recebe parâmetros e pode retornar um valor (entrada → processamento → retorno). Vantagens: reuso, organização, teste e manutenção — a motivação surge de eliminar código repetido, evoluindo de código repetido para função e depois para função com parâmetro. Em Python, uma função devolve uma tupla ao separar valores por vírgula no return. Modularização separa o programa em módulos importáveis: em Python, import meu_modulo as apelido; em C/C++, separa-se cabeçalho (.h, as assinaturas) de implementação (.c) e usa-se #include "arquivo.h"; em Java, import; em JavaScript, import/export; em PHP, require_once.

8. ESCOPO E PASSAGEM DE PARÂMETROS: Escopo define onde uma variável é válida (local dentro da função vs global). Um parâmetro não pode ser usado fora da função; tentar isso gera NameError em Python. Tempo de vida: variáveis locais existem só durante a execução da função. Em Python, atribuir a um nome dentro da função cria uma variável local, sendo preciso declarar global para alterar a de fora (senão ocorre UnboundLocalError). Passagem de parâmetros: por valor (cópia) ou por referência. Em C simula-se referência com ponteiros (&variavel e *ponteiro); C++ usa &. Java é sempre por valor, mas o valor de um objeto é uma referência — por isso alterar o conteúdo de uma lista dentro da função afeta o original, enquanto reatribuir o parâmetro a um novo objeto não afeta.

9. STRINGS: Sequência de caracteres, indexada a partir de zero. Operações: tamanho (len), concatenação (+), acesso por índice, fatiamento (substring) e métodos de maiúsculas (upper), minúsculas (lower), substituição (replace) e divisão (split). Fatiamento em Python: palavra[0:4] pega do índice 0 ao 3 (o fim não entra), palavra[:4] do início, palavra[4:] até o fim, palavra[-3:] os três últimos. Atenção: o segundo argumento de substr em PHP e C++ é o TAMANHO, não o índice final, ao contrário do slice do Python/JavaScript e do substring do Java. O strlen do PHP e do C conta BYTES, não caracteres: strlen("maçã") devolve 6 e não 4, porque em UTF-8 cada acentuado ocupa dois bytes; o equivalente correto de len() é mb_strlen().

10. TIPOS DE DADOS DEFINIDOS PELO USUÁRIO: Item nomeado da ementa. Agrupam vários campos sob um nome só, para o programa falar a linguagem do problema. Em C, typedef struct { char nome[100]; int idade; } pessoa; em C++, struct; em Java, record ou classe; em Python, dataclass (ou dicionário); em JavaScript, objeto literal ou classe; em PHP, classe. É a ponte para Programação Orientada a Objetos: a classe é este agrupamento acrescido de comportamento.

11. PERSISTÊNCIA EM ARQUIVO: Dados em variável vivem na memória e somem quando o programa termina; para persistir é preciso gravar em arquivo. Em Python, open() recebe três argumentos principais: nome do arquivo (com caminho), modo e encoding. Modos: r (read/leitura), w (write/escrita, apaga o que existia) e a (append/anexo, mantém e escreve ao final); em qualquer modo de escrita o arquivo é criado se não existir. Todo arquivo deve ser fechado após ler ou escrever — o with fecha sozinho. Encoding é a regra que converte a sequência de caracteres da string na sequência de bytes do disco (use utf-8 para não corromper acentos). Em C, usa-se fopen/fclose com fprintf/fscanf para texto e fwrite/fread para binário, além de fseek, ftell e rewind para contar e reposicionar registros. Arquivo de texto é legível e precisa ser interpretado; arquivo binário grava os bytes exatos do registro e volta pronto, mas é ilegível fora do programa.

DIVISÃO POR AVALIAÇÕES:
- AV1 (1ª nota): conceitos de linguagens, compilação vs interpretação, histórico e classificação, paradigmas, tipos, variáveis e constantes, entrada e saída, estruturas de controle de fluxo.
- AV2 (2ª nota): estruturas de dados compostas (listas, tuplas, dicionários), funções e modularização, escopo e passagem de parâmetros, strings, tipos definidos pelo usuário e persistência em arquivo. Tipos/entrada e saída/controle também são pré-requisito da AV2, por serem cumulativos.
`;

export const LPGM_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: Fundamentos e Controle',
    prompt: 'Conteúdo da AV1, com foco em Python (a linguagem do curso): conceitos de linguagens de programação (código-fonte, tradutor, linguagem de máquina), compilação vs interpretação, histórico e classificação por gerações, paradigmas de programação (imperativo, procedural, orientado a objetos, funcional, multiparadigma), tipos de dados primitivos (inteiro, real, texto, booleano), variáveis e identificadores, constantes, atribuição, tipagem estática vs dinâmica, tipagem forte vs fraca, expressões, precedência de operadores, divisão real vs inteira (/ e //), operadores aritméticos, relacionais e lógicos, entrada e saída de dados com conversão de tipos (casting), e estruturas de controle de fluxo (condicionais if/else/elif, switch nas linguagens de chaves, laços while e for, blocos por chaves ou indentação, IndentationError).',
  },
  {
    value: 'av2',
    label: 'AV2: Estruturas, Funções e Arquivos',
    prompt: 'Conteúdo da AV2, com foco em Python e C: estruturas de dados compostas (listas/arrays com índice a partir de zero, mutabilidade e métodos append/insert/remove/count/extend/reverse, tuplas imutáveis como registros, lista de tuplas com acesso lista[0][0], dicionários/mapas com pares chave-valor), funções e modularização (definição, parâmetros, retorno, retorno de múltiplos valores como tupla, reuso, criação e importação de módulo próprio com apelido, cabeçalho vs implementação em C), escopo de variáveis (local vs global, a palavra global do Python) e tempo de vida, passagem de parâmetros (por valor vs por referência, ponteiros em C, o caso do Java sempre por valor), strings (tamanho, concatenação, índice, fatiamento/substring, upper/lower/replace/split, strlen contando bytes), tipos de dados definidos pelo usuário (typedef struct em C, record em Java, dataclass em Python) e persistência em arquivo (open com modo e encoding, r/w/a, fechar o arquivo, fopen/fwrite/fread em C, texto vs binário).',
  },
  { value: 'conceitos', label: 'Conceitos de Linguagens' },
  { value: 'paradigmas', label: 'Paradigmas' },
  { value: 'tipos', label: 'Tipos, Variáveis e Constantes' },
  { value: 'io', label: 'Entrada e Saída' },
  { value: 'controle', label: 'Estruturas de Controle' },
  { value: 'colecoes', label: 'Listas, Tuplas e Dicionários' },
  { value: 'funcoes', label: 'Funções e Modularização' },
  { value: 'escopo', label: 'Escopo e Parâmetros' },
  { value: 'strings', label: 'Strings' },
  { value: 'tipos-usuario', label: 'Tipos Definidos pelo Usuário' },
  { value: 'arquivos', label: 'Persistência em Arquivo' },
];

export const LPGM_SECTIONS = [
  { id: 'intro', title: 'Introdução: linguagens e tradutores', shortTitle: 'Introdução' },
  { id: 'conceitos', title: 'Compilação, Interpretação e Histórico', shortTitle: 'Compilada × Interpretada', exams: ['av1'] },
  { id: 'paradigmas', title: 'Paradigmas de Programação', shortTitle: 'Paradigmas', exams: ['av1'] },
  // Tipos e controle são pré-requisito de tudo que a AV2 cobra: o próprio
  // material da turma trata os dois blocos como cumulativos.
  { id: 'tipos', title: 'Tipos de Dados, Variáveis e Constantes', shortTitle: 'Tipos e Variáveis', exams: ['av1', 'av2'] },
  { id: 'io', title: 'Entrada e Saída', shortTitle: 'Entrada/Saída', exams: ['av1', 'av2'] },
  { id: 'controle', title: 'Estruturas de Controle', shortTitle: 'Controle', exams: ['av1', 'av2'] },
  { id: 'colecoes', title: 'Listas, Tuplas e Dicionários', shortTitle: 'Coleções', exams: ['av2'] },
  { id: 'funcoes', title: 'Funções e Modularização', shortTitle: 'Funções', exams: ['av2'] },
  { id: 'escopo', title: 'Escopo e Parâmetros', shortTitle: 'Escopo', exams: ['av2'] },
  { id: 'strings', title: 'Strings', shortTitle: 'Strings', exams: ['av2'] },
  { id: 'tipos-usuario', title: 'Tipos de Dados Definidos pelo Usuário', shortTitle: 'Tipos próprios', exams: ['av2'] },
  { id: 'arquivos', title: 'Persistência em Arquivo', shortTitle: 'Arquivos', exams: ['av2'] },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type LPGMSectionId = (typeof LPGM_SECTIONS)[number]['id'];

const QUIZ_DATA_AV1: QuizQuestionData[] = [
  {
    id: 'l1',
    question: '1. Como se chama o software que traduz o código-fonte para a linguagem de máquina?',
    options: ['Editor de texto', 'Compilador ou interpretador', 'Sistema operacional', 'Depurador'],
    correctIndex: 1,
    feedbackCorrect: 'O tradutor é um compilador (traduz tudo antes) ou um interpretador (traduz e executa linha a linha).',
    feedbackWrong: 'O tradutor do código-fonte é o compilador ou o interpretador.',
  },
  {
    id: 'l2',
    question: '2. Qual a diferença entre uma linguagem compilada e uma interpretada?',
    options: [
      'A compilada é sempre mais lenta',
      'A compilada traduz o programa inteiro antes de executar; a interpretada traduz e executa linha a linha',
      'A interpretada não usa código-fonte',
      'Não há diferença real',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Compilada: traduz tudo antes (C++, Java). Interpretada: traduz e executa na hora (Python, JS, PHP).',
    feedbackWrong: 'A compilada traduz o programa todo antes de rodar; a interpretada faz isso linha a linha durante a execução.',
  },
  {
    id: 'l3',
    question: '3. Na tipagem ESTÁTICA (como em C++ e Java), quando o tipo de uma variável é verificado?',
    options: ['Em tempo de execução', 'Em tempo de compilação', 'Nunca é verificado', 'Somente na entrada de dados'],
    correctIndex: 1,
    feedbackCorrect: 'Tipagem estática verifica os tipos em tempo de compilação. A dinâmica (Python, JS, PHP) verifica em execução.',
    feedbackWrong: 'Na tipagem estática o tipo é verificado em tempo de compilação, antes de o programa rodar.',
  },
  {
    id: 'l4',
    question: '4. Qual conjunto contém apenas tipos de dados PRIMITIVOS?',
    options: [
      'inteiro, real, texto, booleano',
      'lista, dicionário, função, classe',
      'if, while, for, return',
      'compilador, interpretador, editor, terminal',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Tipos primitivos: inteiro (int), real (float/double), texto (string) e booleano (bool).',
    feedbackWrong: 'Os tipos primitivos são inteiro, real, texto e booleano.',
  },
  {
    id: 'l5',
    question: '5. O paradigma que organiza o programa em objetos (dados + comportamento) é o:',
    options: ['Imperativo', 'Funcional', 'Orientado a objetos', 'Lógico'],
    correctIndex: 2,
    feedbackCorrect: 'O paradigma orientado a objetos organiza o programa em objetos que reúnem dados e comportamento.',
    feedbackWrong: 'É o paradigma orientado a objetos que estrutura o programa em objetos (estado + comportamento).',
  },
  {
    id: 'l6',
    question: '6. Uma variável é definida como:',
    options: [
      'Um comando que repete instruções',
      'Um espaço na memória que guarda um valor de um determinado tipo',
      'Uma função sem retorno',
      'Um operador aritmético',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Variável é um espaço reservado na memória para armazenar um valor de um tipo determinado.',
    feedbackWrong: 'Uma variável é um espaço na memória que guarda um valor de um dado tipo.',
  },
  {
    id: 'l7',
    question: '7. Ao ler uma entrada digitada pelo usuário, por que muitas vezes é preciso fazer conversão (casting)?',
    options: [
      'Porque a entrada vem criptografada',
      'Porque a leitura costuma retornar texto, e é preciso convertê-lo para número quando se quer calcular',
      'Porque o teclado só envia bits',
      'Não é preciso converter nunca',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A entrada normalmente chega como texto; para operar numericamente é preciso converter (casting).',
    feedbackWrong: 'A leitura de entrada costuma retornar texto; converte-se (casting) para número quando se vai calcular.',
  },
  {
    id: 'l8',
    question: '8. Qual estrutura de controle repete um bloco ENQUANTO uma condição for verdadeira?',
    options: ['if', 'while', 'return', 'switch'],
    correctIndex: 1,
    feedbackCorrect: 'O laço while repete o bloco enquanto a condição for verdadeira.',
    feedbackWrong: 'É o while: repete enquanto a condição for verdadeira (o if executa uma única vez).',
  },
  {
    id: 'l9',
    question: '9. Na maioria das linguagens (C++, Java, JS, PHP), como se delimita um bloco de código?',
    options: ['Por chaves { }', 'Por parênteses ( )', 'Por aspas " "', 'Por vírgulas'],
    correctIndex: 0,
    feedbackCorrect: 'A maioria usa chaves { }. O Python é a exceção: delimita blocos por indentação.',
    feedbackWrong: 'C++, Java, JS e PHP usam chaves { }; Python usa indentação.',
  },
  {
    id: 'l10',
    question: '10. Qual grupo lista apenas operadores LÓGICOS?',
    options: [
      'and / or / not (ou &&, ||, !)',
      '+ / - / * / /',
      '== / != / > / <',
      '= / += / -=',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Operadores lógicos: e (and/&&), ou (or/||), não (not/!).',
    feedbackWrong: 'Os lógicos são and/&&, or/|| e not/!. Os de == e > são relacionais; +,- são aritméticos.',
  },
  {
    id: 'l21',
    question: '11. Qual foi a linguagem usada nas aulas desta disciplina?',
    options: ['JavaScript', 'Python', 'C++', 'PHP'],
    correctIndex: 1,
    feedbackCorrect: 'Python foi a linguagem do curso. O projeto final foi em C, e a recuperação podia ser feita em C ou em Python.',
    feedbackWrong: 'A linguagem do curso foi Python. C entrou no projeto final; as demais aparecem só como comparação.',
  },
  {
    id: 'l22',
    question: '12. Em Python 3, qual é o resultado de 7 / 2 e de 7 // 2, nessa ordem?',
    options: ['3 e 3', '3.5 e 3', '3.5 e 3.5', '3 e 3.5'],
    correctIndex: 1,
    feedbackCorrect: 'A barra simples devolve real (3.5); a barra dupla é a divisão inteira e descarta o resto (3).',
    feedbackWrong: 'Em Python 3, 7/2 = 3.5 (real) e 7//2 = 3 (divisão inteira). Já em C e Java, 7/2 entre inteiros trunca para 3.',
  },
  {
    id: 'l23',
    question: '13. Quanto vale a expressão 1 + 2 * 3?',
    options: ['9, porque avalia da esquerda para a direita', '7, porque a multiplicação vem antes da soma', '6', '5'],
    correctIndex: 1,
    feedbackCorrect: 'A multiplicação tem precedência sobre a adição: 2*3 = 6, mais 1 dá 7. Para obter 9, escreva (1 + 2) * 3.',
    feedbackWrong: 'É 7. A precedência manda multiplicar antes de somar; use parênteses para mudar a ordem.',
  },
  {
    id: 'l24',
    question: '14. Ao ler uma entrada em Python sem converter, o que acontece com print(entrada * 2) se o usuário digitar 5?',
    options: ['Imprime 10', 'Imprime 55, porque o valor ainda é texto', 'Dá erro de sintaxe', 'Imprime 5'],
    correctIndex: 1,
    feedbackCorrect: 'input() devolve texto. O operador * entre string e inteiro repete o texto: "5" * 2 = "55". Por isso o casting com int() é necessário.',
    feedbackWrong: 'Imprime 55: sem int(), o valor continua string e o * repete o texto em vez de multiplicar.',
  },
  {
    id: 'l25',
    question: '15. Qual erro o Python acusa quando o recuo de um bloco está errado?',
    options: ['SyntaxError: invalid syntax', 'IndentationError: expected an indented block', 'NameError', 'TypeError'],
    correctIndex: 1,
    feedbackCorrect: 'Em Python o recuo é sintaxe: um espaço a mais ou a menos gera IndentationError: expected an indented block.',
    feedbackWrong: 'É o IndentationError: expected an indented block — em Python, espaços delimitam blocos de código.',
  },
  {
    id: 'l26',
    question: '16. Numa estrutura switch (em C, Java ou JavaScript), para que serve o break ao fim de cada case?',
    options: [
      'Encerrar o programa',
      'Impedir que a execução continue nos casos seguintes',
      'Repetir o caso atual',
      'É opcional e não muda nada',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Sem o break, a execução "vaza" para o próximo case. O switch compara um valor exato contra constantes.',
    feedbackWrong: 'O break evita que a execução caia nos casos seguintes. Python não tem switch clássico (só match/case, da 3.10 em diante).',
  },
  {
    id: 'l27',
    question: '17. Qual é a diferença de uso entre o laço while e o laço for?',
    options: [
      'O while só funciona com números e o for só com listas',
      'O while é indicado quando não se sabe de antemão quantas repetições serão precisas; o for, quando se percorre uma sequência ou um número conhecido de vezes',
      'São idênticos e intercambiáveis em qualquer situação',
      'O for repete enquanto a condição for falsa',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O while pergunta "ENQUANTO isso for verdadeiro"; o for percorre uma sequência ou conta um número conhecido de voltas.',
    feedbackWrong: 'O while serve quando não se sabe quantas voltas serão precisas (ex.: um menu até o usuário sair); o for, para percorrer sequências.',
  },
  {
    id: 'l28',
    question: '18. Em C, como se declara uma constante que o compilador impede de reatribuir?',
    options: ['let PI = 3.14;', 'const double PI = 3.14;', 'PI := 3.14;', 'constant PI = 3.14;'],
    correctIndex: 1,
    feedbackCorrect: 'Em C usa-se const (ou #define, que substitui antes de compilar). Em Java é static final; em JavaScript, const.',
    feedbackWrong: 'Em C a forma é const double PI = 3.14; (ou #define PI 3.14). Python não tem constante real — só a convenção de nome maiúsculo.',
  },
];

const QUIZ_DATA_AV2: QuizQuestionData[] = [
  {
    id: 'l11',
    question: '1. Em uma lista/array, o índice do PRIMEIRO elemento é:',
    options: ['1', '0', '-1', 'o tamanho da lista'],
    correctIndex: 1,
    feedbackCorrect: 'Os índices começam em 0; o último é tamanho − 1.',
    feedbackWrong: 'O primeiro elemento tem índice 0.',
  },
  {
    id: 'l12',
    question: '2. Qual a diferença central entre uma LISTA e uma TUPLA?',
    options: [
      'A lista guarda números e a tupla, texto',
      'A lista é mutável (pode mudar); a tupla é imutável',
      'A tupla tem índice e a lista não',
      'Não há diferença',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Lista é mutável; tupla é imutável (não se adiciona, altera ou remove elementos).',
    feedbackWrong: 'A lista pode ser alterada (mutável); a tupla é imutável.',
  },
  {
    id: 'l13',
    question: '3. Em um dicionário/mapa, os valores são acessados por meio de:',
    options: ['Um índice numérico', 'Uma chave única', 'A posição na memória', 'Um laço for obrigatório'],
    correctIndex: 1,
    feedbackCorrect: 'O dicionário guarda pares chave→valor; o acesso é pela chave, que deve ser única.',
    feedbackWrong: 'No dicionário/mapa, acessa-se o valor pela chave (não por índice numérico).',
  },
  {
    id: 'l14',
    question: '4. Qual é o principal benefício de usar funções?',
    options: [
      'Deixar o programa mais lento de propósito',
      'Reusar código, organizar, facilitar teste e manutenção',
      'Eliminar a necessidade de variáveis',
      'Impedir a entrada de dados',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Funções permitem reuso, organização (dividir para conquistar), teste e manutenção.',
    feedbackWrong: 'O grande ganho das funções é o reuso de código, além de organização, teste e manutenção.',
  },
  {
    id: 'l15',
    question: '5. O modelo de uma função pode ser resumido como:',
    options: [
      'Entrada (parâmetros) → processamento → retorno',
      'Compilar → interpretar → executar',
      'Chave → valor → índice',
      'Início → meio → fim, sem dados',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Uma função recebe parâmetros (entrada), processa e devolve um retorno.',
    feedbackWrong: 'O modelo é: entrada (parâmetros) → processamento → retorno.',
  },
  {
    id: 'l16',
    question: '6. Uma variável LOCAL, criada dentro de uma função, é válida:',
    options: [
      'Em todo o programa',
      'Somente dentro da própria função',
      'Só depois que o programa termina',
      'Apenas em outras funções',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A variável local só existe e é válida dentro da função onde foi criada.',
    feedbackWrong: 'Uma variável local vale apenas dentro da própria função (escopo local).',
  },
  {
    id: 'l17',
    question: '7. Na passagem de parâmetro POR VALOR, o que a função recebe?',
    options: [
      'O endereço da variável original',
      'Uma cópia do valor (mudanças não afetam o original)',
      'Nada, o parâmetro fica vazio',
      'A função inteira',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Por valor, a função recebe uma cópia — alterar o parâmetro não muda a variável original.',
    feedbackWrong: 'Por valor = cópia do dado. Por referência = acesso ao original (aí sim mudanças afetam o original).',
  },
  {
    id: 'l18',
    question: '8. O que é modularização?',
    options: [
      'Escrever todo o código em um só arquivo gigante',
      'Separar o programa em módulos/bibliotecas reutilizáveis e importáveis',
      'Remover todas as funções',
      'Trocar de linguagem no meio do projeto',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Modularizar é dividir o programa em módulos reutilizáveis, importados quando necessário.',
    feedbackWrong: 'Modularização é separar o programa em módulos/bibliotecas que podem ser importados e reusados.',
  },
  {
    id: 'l19',
    question: '9. Sobre strings, o "fatiamento" (slicing/substring) serve para:',
    options: [
      'Contar quantas funções existem',
      'Extrair um pedaço (subsequência) da string',
      'Converter texto em número',
      'Apagar a string da memória',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O fatiamento extrai uma subsequência (um pedaço) da string a partir de posições.',
    feedbackWrong: 'Fatiamento/substring extrai um trecho da string com base em posições de início e fim.',
  },
  {
    id: 'l20',
    question: '10. O operador + aplicado a duas strings faz o quê?',
    options: ['Soma numérica', 'Concatenação (junta os textos)', 'Comparação', 'Divisão'],
    correctIndex: 1,
    feedbackCorrect: 'Com strings, o + concatena (junta) os textos. O mesmo operador muda de comportamento conforme o tipo.',
    feedbackWrong: 'Entre strings, o + concatena os textos (não soma).',
  },
  {
    id: 'l29',
    question: '11. O que acontece ao executar t = (1, 2, 3) e depois t[0] = 5 em Python?',
    options: [
      'A tupla passa a ser (5, 2, 3)',
      'Gera TypeError: a tupla é imutável',
      'Cria uma nova tupla automaticamente',
      'Gera IndexError',
    ],
    correctIndex: 1,
    feedbackCorrect: "Tupla é imutável: a linguagem recusa a operação com TypeError: 'tuple' object does not support item assignment.",
    feedbackWrong: 'Dá TypeError. Diferente da lista, a tupla não permite adicionar, alterar nem remover elementos depois de criada.',
  },
  {
    id: 'l30',
    question: '12. Numa lista de tuplas chamada alunos, o que a expressão alunos[0][0] devolve?',
    options: [
      'A lista inteira',
      'O primeiro campo da primeira tupla',
      'A última tupla da lista',
      'Sempre um número',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O primeiro índice escolhe a posição na lista; o segundo, a posição dentro da tupla. É o padrão de dados mais usado na disciplina.',
    feedbackWrong: 'É o primeiro campo da primeira tupla: 1ª posição 0 da lista, 2ª posição 0 da tupla.',
  },
  {
    id: 'l31',
    question: '13. Em Java, qual estrutura é o equivalente real da lista do Python, capaz de crescer?',
    options: ['String[] (array)', 'ArrayList', 'HashMap', 'int[]'],
    correctIndex: 1,
    feedbackCorrect: 'O array de Java tem tamanho fixo; quem cresce é o ArrayList. "Lista" nem sempre nomeia a mesma coisa entre linguagens.',
    feedbackWrong: 'É o ArrayList. O String[] tem tamanho fixo definido na criação e não aceita novos elementos.',
  },
  {
    id: 'l32',
    question: '14. Em Python, o que é preciso fazer para uma função ALTERAR o valor de uma variável global?',
    options: [
      'Nada, basta atribuir normalmente',
      'Declarar global antes de atribuir',
      'Passar a variável como parâmetro',
      'Não é possível de forma alguma',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Sem a declaração global, atribuir dentro da função cria uma variável local — e ler a global antes disso gera UnboundLocalError.',
    feedbackWrong: 'É preciso declarar global. Sem isso, a atribuição cria uma variável local e a global permanece intacta.',
  },
  {
    id: 'l33',
    question: '15. Sobre passagem de parâmetros em Java, qual afirmação está correta?',
    options: [
      'Java é sempre por referência',
      'Java é sempre por valor, mas o valor de um objeto é uma referência — por isso alterar o conteúdo de uma lista dentro da função afeta o original',
      'Java escolhe automaticamente conforme o tipo',
      'Java não permite passar objetos para funções',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Alterar o objeto (lista.add) afeta quem chamou; reatribuir o parâmetro a um novo objeto, não. É a diferença entre mexer no objeto e apontar para outro.',
    feedbackWrong: 'Java é sempre por valor — o que se copia é a referência ao objeto. Mexer no objeto reflete fora; trocar o objeto do parâmetro, não.',
  },
  {
    id: 'l34',
    question: '16. Em PHP, quanto devolve strlen("maçã")?',
    options: ['4, o número de caracteres', '6, porque conta bytes e cada acentuado ocupa dois em UTF-8', '3', 'Erro'],
    correctIndex: 1,
    feedbackCorrect: 'strlen conta BYTES. Para contar caracteres, use mb_strlen("maçã"), que devolve 4 — importante em material em português.',
    feedbackWrong: 'Devolve 6: strlen conta bytes e, em UTF-8, ç e ã ocupam dois bytes cada. O equivalente de len() é mb_strlen().',
  },
  {
    id: 'l35',
    question: '17. Em Python, o que palavra[0:4] devolve para palavra = "programação"?',
    options: ['progr', 'prog, porque o índice final não entra', 'rogr', 'ação'],
    correctIndex: 1,
    feedbackCorrect: 'O fatiamento vai do índice 0 ao 3: o fim não entra. Cuidado: em PHP e C++, o segundo argumento de substr é o TAMANHO, não o índice final.',
    feedbackWrong: 'Devolve "prog" — do índice 0 até o 3, porque o índice final não é incluído.',
  },
  {
    id: 'l36',
    question: '18. Em C, o que faz a construção typedef struct { char nome[100]; int idade; } pessoa;?',
    options: [
      'Declara duas variáveis soltas',
      'Cria um tipo definido pelo usuário chamado pessoa, que agrupa os dois campos',
      'Cria uma função chamada pessoa',
      'Abre um arquivo chamado pessoa',
    ],
    correctIndex: 1,
    feedbackCorrect: 'É um tipo definido pelo usuário — item nomeado da ementa e a ponte para as classes de POO. Os campos são acessados com ponto: p.nome, p.idade.',
    feedbackWrong: 'Cria um novo TIPO chamado pessoa, agrupando nome e idade sob um nome só.',
  },
  {
    id: 'l37',
    question: '19. Em Python, qual modo de open() MANTÉM o conteúdo já existente e escreve ao final do arquivo?',
    options: ['"r"', '"w"', '"a"', '"x"'],
    correctIndex: 2,
    feedbackCorrect: 'O modo "a" (append) anexa ao final. O "w" apaga tudo e recomeça, e o "r" é só leitura.',
    feedbackWrong: 'É o modo "a" (append). Cuidado com o "w": ele apaga o conteúdo anterior antes de escrever.',
  },
  {
    id: 'l38',
    question: '20. Para que serve o encoding informado ao abrir um arquivo?',
    options: [
      'Para compactar o arquivo',
      'Para definir como a sequência de caracteres é convertida em bytes no disco (e vice-versa)',
      'Para proteger o arquivo com senha',
      'Para escolher o tamanho do arquivo',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Uma string é uma sequência de caracteres, mas o arquivo em disco é uma sequência de bytes: o encoding é a regra de conversão. Use utf-8 para não corromper acentos.',
    feedbackWrong: 'O encoding define a conversão entre caracteres e bytes. Ler com codificação diferente da usada na gravação estraga os acentos.',
  },
  {
    id: 'l39',
    question: '21. Em Python, como se importa um módulo próprio chamado turtle_grafico.py usando um apelido?',
    options: [
      'include turtle_grafico as tg',
      'import turtle_grafico as tg',
      'require turtle_grafico as tg',
      'using turtle_grafico as tg',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A forma é import turtle_grafico as tg — depois basta chamar tg.nome_da_funcao(...). Modularizar é separar o programa em arquivos reutilizáveis.',
    feedbackWrong: 'É import turtle_grafico as tg. O include é de C/C++, o require é de PHP e o using é de C#.',
  },
  {
    id: 'l40',
    question: '22. Em C, por que se separa o arquivo de cabeçalho (.h) do arquivo de implementação (.c)?',
    options: [
      'Por exigência do sistema operacional',
      'Porque quem usa a função precisa conhecer a assinatura dela, não o corpo',
      'Para que o programa fique mais rápido',
      'Não há motivo, é apenas estilo',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O .h declara as assinaturas (a "forma" das funções) e o .c traz o corpo. Quem inclui o cabeçalho passa a poder chamar a função.',
    feedbackWrong: 'O cabeçalho existe para expor as assinaturas a quem usa a função, mantendo a implementação separada.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_AV1.map(q => ({ ...q, exams: ['av1'] })),
  ...QUIZ_DATA_AV2.map(q => ({ ...q, exams: ['av2'] })),
];
