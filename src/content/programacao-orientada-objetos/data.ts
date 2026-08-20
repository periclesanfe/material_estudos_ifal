import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const POOB_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROGRAMAÇÃO ORIENTADA A OBJETOS (POOB) - Resumo:

1. A DISCIPLINA: estudo dos princípios e técnicas básicas de programação com enfoque em orientação a objetos usando Java. Plano em três partes: (1) a linguagem Java — características, ambiente, estrutura de um programa, tipos de dados — e testes unitários com JUnit; (2) orientação a objetos — classes, objetos, atributos, métodos, estados, herança, polimorfismo, abstração, encapsulamento, generalização/especialização; (3) integração com banco de dados (JDBC e MySQL) e camadas de um projeto (arquitetura MVC). Avaliação: Nota 1 = prova; Nota 2 = projeto; Nota Final = (N1 + 2×N2)/3 — o projeto tem peso dobrado. Ementa oficial (PROO, 80h, 4º período): paradigma OO, programação OO vs estruturada, classes/objetos/atributos/métodos/construtores, encapsulamento, herança, polimorfismo, classes abstratas e interfaces, pacotes, coleções, tratamento de exceções.

2. JAVA, JVM E BYTECODE: Java foi criada em 1995 pela Sun Microsystems com o lema "Write Once, Run Anywhere" — resolver o problema de precisar de um compilador diferente para cada sistema operacional. O compilador (javac) transforma o código-fonte .java em BYTECODE (.class), um código intermediário; quem entende o bytecode é a JVM (Java Virtual Machine), específica de cada SO. Java é orientada a objetos, tem sintaxe da família C, é CASE SENSITIVE (System ≠ system) e FORTEMENTE TIPADA. Estrutura mínima de um programa: toda instrução vive dentro de um MÉTODO, o método principal é o main (public static void main(String[] args)) e todo método vive dentro de uma CLASSE; o nome do arquivo deve ser igual ao nome da classe (HelloWorld.java). Compilação e execução no terminal: javac HelloWorld.java gera o .class; java HelloWorld executa; javap -c desassembla o bytecode. JRE (Java Runtime Environment) = JVM + bibliotecas, suficiente para EXECUTAR; JDK (Java Development Kit) = JRE + ferramentas de desenvolvimento (compilador), necessário para DESENVOLVER.

3. VARIÁVEIS, TIPOS E CASTING: variáveis armazenam valores ou referenciam objetos; toda variável tem tipo definido. Convenções: iniciar com minúscula, camelCase (saldoBancario), não pode começar com número; booleanas com prefixo "is". Oito tipos primitivos com faixas: byte (1 byte, −128 a 127), short (2 bytes, ±32767), int (4 bytes, ±2,1 bilhões), long (8 bytes, ±9,2 quintilhões, literal com sufixo L), float (4 bytes, sufixo F), double (8 bytes, padrão dos reais), char (2 bytes, Unicode, aspas simples), boolean (true/false). String NÃO é primitivo — é classe. PEGADINHAS: literal inteiro sem L é int (long grande sem L não compila); literal real sem F é double (float pi = 3.14 não compila); byte b = 130 estoura a faixa. Expressões aritméticas, lógicas e relacionais; precedência: parênteses > multiplicação/divisão > soma/subtração, avaliação da esquerda para a direita. DIVISÃO INTEIRA: 10/20 entre ints dá 0; para obter 0.5 é preciso cast: (float) 10 / (float) 20. CASTING: conversões de AMPLIAÇÃO (int→double) são implícitas; de ESTREITAMENTO (double→int) exigem cast explícito (int i = (int) d, trunca a parte decimal); double d = 10.0; int i = d; NÃO compila mesmo o valor "cabendo". boolean não se converte em nenhum outro tipo. Formatação: String.format("%.2f", x) e NumberFormat com setMaximumFractionDigits.

4. CONTROLE DE FLUXO: if/else if/else para decisões; switch/case com break e default para seleção múltipla sobre valores discretos; operadores relacionais (==, !=, <, >, <=, >=) e lógicos (&&, ||, !). Entrada com Scanner (nextInt, nextDouble, nextLine). Laços: FOR quando a quantidade de repetições é conhecida (início, fim, incremento; for(int i=0;i<=4;i++) executa 5 vezes); WHILE repete ENQUANTO a condição for verdadeira, testando ANTES de executar — a variável de controle precisa estar inicializada; DO-WHILE testa DEPOIS, garantindo pelo menos uma execução. Padrão flag booleana: boolean isAcertou = false; while(!isAcertou){...}. break interrompe o laço; continue pula para a próxima iteração. Exercícios clássicos da turma: dia da semana (1–7), ordenar três valores, ano bissexto (ano%4==0 && (ano%100!=0 || ano%400==0) — 2100 não é bissexto, 2000 é), validação de triângulo (cada lado menor que a soma e maior que o módulo da diferença dos outros dois; equilátero/isósceles/escaleno).

5. ARRAYS: coleções de valores de um MESMO tipo. int[] é um tipo; o array é sempre um OBJETO; a variável é uma REFERÊNCIA. Precisa ser instanciado (new int[10]) e o tamanho é FIXO — não muda depois de criado. Índices começam em 0; new int[12] tem posições 0 a 11; acessar idades[13] COMPILA mas lança ArrayIndexOutOfBoundsException em EXECUÇÃO. Posições não preenchidas de array numérico valem 0. A propriedade length (sem parênteses) dá o tamanho; percorre-se com for clássico ou for-each (for(int n : numeros)). Arrays.sort(vetor) ordena (import java.util.Arrays). MULTIDIMENSIONAIS: "array de array", um par de colchetes por dimensão; double[][] notas = new double[4][2] é uma matriz 4×2; percorre-se com for aninhado usando notas.length (linhas) e notas[i].length (colunas).

6. CLASSES E OBJETOS: o paradigma procedural sofre com código não encapsulado, cópia de trechos inteiros, manutenção difícil e dados misturados com comportamento. A OO aproxima o mundo real do virtual modelando objetos por suas CARACTERÍSTICAS (atributos) e pelas TAREFAS que executam (métodos). CLASSE é o modelo/forma genérica — uma representação de um objeto do mundo real e um TIPO de dado; OBJETO é a materialização da classe, uma INSTÂNCIA "com vida". Instanciação: Robo r = new Robo(); — "Robo r" declara a variável do tipo Robo, "new Robo()" cria o objeto. Imprimir a referência sem toString mostra algo como Robo@16f0472 (endereço); cada new cria uma instância independente com estado próprio. Métodos são invocados com o operador ponto: r.andar(). Atributos têm tipo, como variáveis; métodos têm nome, podem ter parâmetros e podem retornar valor (void quando não retornam).

7. CONSTRUTORES, THIS E FINAL: construtor é o método especial, com o MESMO NOME da classe e SEM tipo de retorno, executado no new para inicializar o objeto. Se a classe não declara nenhum, Java gera o CONSTRUTOR DEFAULT (sem argumentos, corpo vazio); ao declarar qualquer construtor, o default deixa de existir. SOBRECARGA de construtores: várias versões com assinaturas diferentes (Conta() e Conta(double valorChequeEspecial)). this referencia o próprio objeto e distingue atributo de parâmetro homônimo (this.lado = lado). Atributo final é constante — não pode ser modificado depois (final String NOME_BANCO = "IFAL Bank"). Referência não inicializada vale null; chamar método em referência null lança NullPointerException — checar antes de usar.

8. ENCAPSULAMENTO E STATIC: a metáfora da "casa da mãe Joana" — classe sem controle de acesso é casa onde todos entram sem regras. Com atributos expostos, qualquer código faz minhaConta.saldo = -200, burlando a validação do sacar(); validar dentro do método não basta porque ninguém é OBRIGADO a usá-lo, e repetir o if em cada ponto do cliente é inviável. MODIFICADOR DE ACESSO diz como atributos e métodos podem ser vistos: private fecha o acesso a todas as outras classes (acesso externo gera erro de COMPILAÇÃO "has private access"); public libera para todos. Convenção: atributos private, e a própria classe controla seu estado via métodos públicos (getters/setters — o setter pode validar antes de aceitar; e nem todo atributo deve ter setter: saldo só muda por regra de negócio como sacar/depositar). STATIC marca o que pertence à CLASSE, não a cada instância: um atributo static é compartilhado por todos os objetos (alterar via uma instância reflete nas outras); um contador static incrementado no construtor conta quantos objetos foram criados. Construtor PRIVATE impede new fora da classe; a instância é obtida por um método ESTÁTICO que retorna a instância (getInstance — embrião do padrão Singleton).

9. HERANÇA E REESCRITA DE MÉTODOS: herança cria uma classe nova (FILHA/subclasse) a partir de uma existente (PAI/superclasse), herdando características e podendo aprimorá-las — a alternativa à duplicação de código (copiar Funcionario para criar Gerente). Sintaxe: class Gerente extends Funcionario. A relação é "É UM": todo Gerente é um Funcionario. A herança é TRANSITIVA (C herda de B que herda de A). A filha herda TODOS os atributos e métodos, INCLUSIVE OS PRIVATE — mas sem acesso direto a eles (gerente.cpf não compila se cpf é private; usa-se o getter herdado). SOBRESCRITA (override): a filha redefine um método com MESMO NOME e MESMA ASSINATURA, implementação diferente; @Override explicita a intenção. super.metodo() invoca a versão do pai dentro da versão reescrita (calcularSalario da filha usa super.calcularSalario(h) quando h < 160). PROTECTED: visível na própria classe, no mesmo pacote e nas SUBCLASSES mesmo de outros pacotes. Tabela de visibilidade — public: tudo; private: só a própria classe; protected: classe + pacote + subclasses; default (sem modificador): classe + pacote apenas (subclasse de OUTRO pacote não enxerga). Regras da parte 2: CONSTRUTORES NÃO SÃO HERDADOS; a primeira instrução implícita do construtor da filha é chamar o construtor do pai (para inicializar as variáveis herdadas); se o pai declara construtor explicitamente, a filha DEVE chamá-lo com super(args). A sobrescrita NÃO PODE RESTRINGIR a visibilidade (public no pai não vira protected/private na filha — erro de compilação; ampliar pode). Java NÃO tem herança múltipla de classes: extends A, B é ilegal.

10. CLASSES ABSTRATAS E POLIMORFISMO: classe ABSTRATA (abstract class Funcionario) não pode ser instanciada (new Funcionario() não compila) — existe para ser herdada. MÉTODO ABSTRATO (abstract void calcularSalario();) não tem corpo e obriga cada filha concreta a implementá-lo — é um contrato. POLIMORFISMO: uma referência do tipo pai pode apontar para qualquer filha (Funcionario f = new Gerente(...)); a chamada f.calcularSalario() executa a versão do TIPO REAL do objeto em tempo de execução (dynamic dispatch). Exemplo central: FolhaDePagamento guarda um ArrayList<Funcionario> com Gerente (salario += 4000) e Vendedor (salário + comissão percentual) e chama calcularSalario() de cada um sem saber o tipo concreto. Mesmo padrão em Produto abstrato com ProdutoUnd (preço × quantidade) e ProdutoKg (preço × peso). SOBRECARGA (overload) ≠ SOBRESCRITA (override): sobrecarga é mesmo nome com ASSINATURAS DIFERENTES na MESMA classe (dois construtores de Conta); sobrescrita é mesma assinatura na FILHA. Coleções: ArrayList<T> cresce dinamicamente (add, get, size) — diferente do array, de tamanho fixo.

11. INTERFACES: uma interface declara um CONTRATO — métodos públicos sem implementação (interface IAutenticavel { void autenticar(); }). A classe assina o contrato com implements e é obrigada a implementar os métodos; pode-se combinar herança e interface: class Gerente extends Funcionario implements IAutenticavel. A interface funciona como TIPO: um método void acesso(IAutenticavel a) aceita QUALQUER objeto cuja classe implemente a interface — sis.acesso(gerente) compila; sis.acesso(vendedor) NÃO compila se Vendedor não implementa IAutenticavel. É o compilador garantindo quem pode entrar no sistema pelo contrato, não pela hierarquia. Uma classe pode implementar VÁRIAS interfaces (a "herança múltipla" que Java permite é de tipo, não de implementação). Interfaces também desacoplam infraestrutura: IConexao com implementação ConexaoMySQL permite trocar o SGBD sem tocar no DAO.

12. EXCEÇÕES E ARQUITETURA EM CAMADAS: exceções sinalizam erros em tempo de execução; try/catch captura e trata, throws declara que o método propaga, throw new lança. EXCEÇÃO PRÓPRIA: classe que extends Exception com construtor que chama super("prefixo: " + msg) — cada camada expõe a sua (ServiceException, ValidationException, EstudanteException). EXCEPTION TRANSLATION: o BO captura a ValidationException de baixo nível e relança como EstudanteException da sua camada. ARQUITETURA EM CAMADAS da disciplina: VIEW (interação com o usuário; único lugar do try/catch de exibição; Scanner) → SERVICE/BO (Business Object: regras de negócio, validações; lança exceção própria) → DAO (Data Access Object: persistência) → VO (Value Object: só dados, getters/setters, transita entre as camadas). Pacotes espelham as camadas (view, bo/service, dao, vo, util). Validadores utilitários static reutilizáveis (ValidarEmail). O programa continua após o catch — erro tratado não derruba o sistema.

13. JDBC E MYSQL: JDBC conecta Java ao banco: DriverManager.getConnection(url, usuario, senha) devolve uma Connection (url tipo jdbc:mysql://servidor/banco). PreparedStatement com placeholders ? evita concatenação de SQL: prepareStatement("INSERT INTO ALUNOS(nome, idade) VALUES(?,?)"), pstmt.setString(1, nome), pstmt.setInt(2, idade), execute(). Consulta: executeQuery() devolve ResultSet; percorre-se com while(rs.next()) mapeando cada linha para um VO (rs.getString("nome")). O DAO concentra o CRUD (cadastrar, listar, excluir). IConexao (interface) desacopla o SGBD; ConexaoMySQL implementa. INJEÇÃO DE CONEXÃO: AlunoDAO tem dois construtores — o sem parâmetro cria a própria conexão (produção) e o AlunoDAO(Connection) RECEBE a conexão de fora, essencial para os testes compartilharem a transação. SQLException é relançada com mensagem contextualizada.

14. TESTES UNITÁRIOS COM JUNIT: testes automatizados verificam cada regra de negócio; TDD escreve o teste antes do código. Asserts: assertEquals(esperado, obtido), assertTrue/assertFalse, assertNotNull, fail(msg). TESTE DE EXCEÇÃO (padrão da turma): chamar o método com dado inválido dentro do try seguido de fail("Não deveria ter passado"); o catch (vazio ou verificando a MENSAGEM com assertEquals) aprova o teste — se a exceção NÃO for lançada, o fail derruba o teste. VALORES-LIMITE/partição de equivalência: para validar nota 0–10 testam-se 0 (válido), −1 (inválido), 9/10 (válidos), 10.1 (inválido). setUp/tearDown preparam e desfazem o ambiente a cada teste. TESTE DE INTEGRAÇÃO COM BANCO: no setUp, conexao.setAutoCommit(false); no tearDown, conexao.rollback() — os dados inseridos pelo teste DESAPARECEM ao final, o banco fica limpo; a mesma conexão é injetada no DAO. Classe de CENÁRIO (fixture) separa a massa de dados da verificação. Nomes de teste como especificação (@DisplayName "Nome não pode ser vazio").

15. PADRÕES DE PROJETO (AV1): padrão de projeto é uma solução consagrada e reutilizável para um problema recorrente de design de software, descrita de forma independente de aplicação (catálogo clássico do GoF, disponível em refactoring.guru/pt-br/design-patterns). Três famílias: CRIACIONAIS (como criar objetos: Singleton — instância única com construtor privado e getInstance, como visto em aula; Factory Method; Builder), ESTRUTURAIS (como compor classes: Adapter, Decorator, Facade) e COMPORTAMENTAIS (como distribuir responsabilidade: Strategy, Observer, Template Method). A AV1 da turma: em grupos de até 4, explicar o que é um padrão, escolher um do catálogo, mostrar que problema resolve, vantagens/desvantagens e DOIS exemplos em código Java, com apresentação por sorteio.

16. PROJETO FINAL (peso 2 na média): sistema em Java, em equipe, no GitHub desde o início (commits de todos os integrantes). Critérios de avaliação declarados: usar classes abstratas, classes concretas E interfaces; uso adequado de OO (classes e encapsulamento); construtores; herança; polimorfismo; Collections; testes unitários automatizados para cada regra de negócio (BO) e acesso a banco (DAO); banco de dados com insert, update, delete e select; estrutura em camadas (View, BO, VO, DAO); exceções próprias criadas e tratadas corretamente. Interface web/mobile é opcional. Proposta inicial: nome do sistema, objetivo, escopo preliminar e integrantes. Marcos: apresentação parcial e final.
`;

export const POOB_TOPICS: QuizTopicOption[] = [
    {
        value: 'fundamentos-java',
        label: 'Fundamentos de Java: JVM, tipos, controle de fluxo e arrays',
        prompt:
            'Fundamentos da linguagem Java na disciplina Programação Orientada a Objetos: por que Java existe (Write Once Run Anywhere), bytecode e JVM, compilação com javac e execução com java, JRE vs JDK, case sensitivity e tipagem forte, estrutura mínima de um programa (classe, método main, instrução), variáveis e convenções de nome camelCase, os oito tipos primitivos e suas faixas, literais com sufixo L e F, String como classe e não primitivo, expressões e precedência de operadores, divisão inteira (10/20 = 0) e casting implícito vs explícito com a regra ampliação/estreitamento, boolean não conversível, condicionais if/else e switch, operadores relacionais e lógicos, ano bissexto e validação de triângulo, laços for, while e do-while com suas diferenças (while testa antes, do-while executa ao menos uma vez), padrão flag booleana, break e continue, arrays como objetos de tamanho fixo com índice a partir de 0, length, ArrayIndexOutOfBoundsException em tempo de execução, valores padrão, Arrays.sort, matrizes (arrays multidimensionais) e percurso com for aninhado.',
    },
    {
        value: 'classes-encapsulamento',
        label: 'Classes, objetos, construtores e encapsulamento',
        prompt:
            'Orientação a objetos básica em Java: problemas do paradigma procedural, classe como modelo e tipo de dado vs objeto como instância, instanciação com new, referências e endereço de memória (Robo@16f0472), cada new cria estado independente, atributos com tipo e métodos com nome/parâmetros/retorno, construtor como método especial de mesmo nome da classe e sem retorno, construtor default gerado automaticamente e sua perda ao declarar outro construtor, sobrecarga de construtores, this para distinguir atributo de parâmetro, atributos final como constantes, NullPointerException, encapsulamento com a metáfora da casa da mãe Joana, por que validar só dentro do método sacar não basta, modificadores private e public, erro de compilação "has private access", convenção de atributos private com getters e setters que validam, quando não criar setter (saldo só muda por regra de negócio), static como membro de classe compartilhado por todas as instâncias, contador static no construtor, construtor privado e método estático getInstance.',
    },
    {
        value: 'heranca-polimorfismo',
        label: 'Herança, polimorfismo, abstratas e interfaces',
        prompt:
            'Herança e polimorfismo em Java na disciplina POOB: herança com extends como remédio para duplicação de código, relação "é um", transitividade, herança inclui membros private mas sem acesso direto na filha, sobrescrita de métodos com mesma assinatura e @Override, super.metodo() para reaproveitar a versão do pai, protected e a tabela completa de visibilidade (public, private, protected, default) incluindo subclasses de outros pacotes, construtores não são herdados, chamada implícita ao construtor do pai e super(args) obrigatório quando o pai declara construtor explícito, proibição de restringir visibilidade ao sobrescrever, ausência de herança múltipla de classes, classes abstratas que não podem ser instanciadas, métodos abstratos como contrato, polimorfismo e dynamic dispatch com ArrayList de Funcionario contendo Gerente e Vendedor, exemplo Produto/ProdutoKg/ProdutoUnd, diferença entre sobrecarga (mesma classe, assinaturas diferentes) e sobrescrita (filha, mesma assinatura), interfaces como contrato com implements, combinação extends + implements, interface como tipo de parâmetro que restringe acesso em tempo de compilação (IAutenticavel), múltiplas interfaces por classe, interface para desacoplar infraestrutura (IConexao).',
    },
    {
        value: 'camadas-jdbc-testes',
        label: 'Exceções, camadas, JDBC e testes',
        prompt:
            'Parte final da disciplina POOB: tratamento de exceções com try/catch, throws e throw, exceções próprias estendendo Exception com super("prefixo: " + mensagem), uma exceção por camada e exception translation (capturar ValidationException e relançar como EstudanteException), arquitetura em camadas View → Service/BO → DAO → VO com pacotes espelhando responsabilidades, validadores utilitários static, JDBC com DriverManager.getConnection, Connection, PreparedStatement com placeholders ?, executeQuery e ResultSet mapeado para VO com while(rs.next()), DAO com CRUD, interface IConexao implementada por ConexaoMySQL para trocar de SGBD, injeção de conexão pelo construtor do DAO para os testes, testes unitários com JUnit (assertEquals, assertTrue, assertFalse, fail), padrão de teste de exceção com fail dentro do try, verificação da mensagem da exceção, valores-limite e partição de equivalência (nota 0, -1, 9, 10.1), setUp e tearDown, testes de integração com banco usando setAutoCommit(false) e rollback para deixar o banco limpo, classe de cenário para massa de dados, TDD, e os critérios do projeto final (camadas, testes de BO e DAO, CRUD, exceções próprias, GitHub com commits de todos).',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Programação Orientada a Objetos (Java): JVM e bytecode, tipos primitivos e casting, condicionais e laços, arrays e matrizes, classes e objetos, construtores e this, encapsulamento com private/public e getters/setters, static, herança com extends e a tabela de visibilidade, sobrescrita com @Override e super, classes abstratas e métodos abstratos, polimorfismo e dynamic dispatch, sobrecarga vs sobrescrita, interfaces como contrato e como tipo, ArrayList e coleções, tratamento de exceções e exceções próprias, arquitetura em camadas View/BO/DAO/VO, JDBC com PreparedStatement e ResultSet, testes unitários com JUnit incluindo testes de exceção, valores-limite e rollback em testes de banco, padrões de projeto (famílias criacional, estrutural e comportamental, Singleton com getInstance) e os critérios do projeto final da disciplina.',
    },
];

export const POOB_EXAMS: ExamDefinition[] = [
    {
        id: 'fundamentos',
        label: 'Base de Java',
        description: 'Fundamentos da linguagem: JVM, tipos, casting, controle de fluxo e arrays.',
    },
    {
        id: 'av1',
        label: 'AV1 · Padrões',
        description: 'Trabalho em grupo: explicar um padrão do catálogo com dois exemplos em Java.',
    },
    {
        // O projeto vale o dobro da prova na média (NF = (N1 + 2×N2)/3) e seus dez
        // critérios de avaliação cobrem exatamente as seções de OO em diante.
        id: 'projeto',
        label: 'Projeto Final',
        description: 'Sistema em equipe com OO completa, camadas, testes, banco e exceções próprias.',
    },
];

export const POOB_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'java-jvm', title: 'Java, JVM e Bytecode', shortTitle: 'Java e JVM', exams: ['fundamentos'] },
    { id: 'tipos-casting', title: 'Variáveis, Tipos e Casting', shortTitle: 'Tipos', exams: ['fundamentos'] },
    { id: 'controle-fluxo', title: 'Condicionais e Laços', shortTitle: 'Controle de Fluxo', exams: ['fundamentos'] },
    { id: 'arrays', title: 'Arrays e Matrizes', shortTitle: 'Arrays', exams: ['fundamentos'] },
    { id: 'classes-objetos', title: 'Classes e Objetos', shortTitle: 'Classes', exams: ['projeto'] },
    { id: 'construtores', title: 'Construtores, this e final', shortTitle: 'Construtores', exams: ['projeto'] },
    { id: 'encapsulamento', title: 'Encapsulamento e static', shortTitle: 'Encapsulamento', exams: ['projeto'] },
    { id: 'heranca', title: 'Herança e Reescrita de Métodos', shortTitle: 'Herança', exams: ['projeto'] },
    { id: 'polimorfismo', title: 'Classes Abstratas e Polimorfismo', shortTitle: 'Polimorfismo', exams: ['projeto'] },
    { id: 'interfaces', title: 'Interfaces', shortTitle: 'Interfaces', exams: ['projeto'] },
    { id: 'excecoes-camadas', title: 'Exceções e Arquitetura em Camadas', shortTitle: 'Exceções e Camadas', exams: ['projeto'] },
    { id: 'jdbc', title: 'JDBC e Banco de Dados', shortTitle: 'JDBC', exams: ['projeto'] },
    { id: 'testes', title: 'Testes Unitários com JUnit', shortTitle: 'Testes', exams: ['fundamentos', 'projeto'] },
    { id: 'padroes', title: 'Padrões de Projeto (AV1)', shortTitle: 'Padrões', exams: ['av1'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type PoobSectionId = (typeof POOB_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['fundamentos'],
        question:
            'Um programa Java compilado no Windows roda no Linux sem recompilar. Qual mecanismo torna isso possível?',
        options: [
            'O javac gera um executável nativo diferente para cada sistema operacional',
            'O compilador gera bytecode, interpretado pela JVM específica de cada sistema operacional',
            'O código-fonte .java é interpretado diretamente, sem compilação',
            'A JRE converte o código-fonte em linguagem de máquina no momento da instalação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O javac transforma o .java em bytecode (.class), um código intermediário único; quem o entende é a JVM, que existe em versão específica para cada SO. É o "Write Once, Run Anywhere" que motivou a criação do Java em 1995.',
        feedbackWrong:
            'O mecanismo é o BYTECODE + JVM: o compilador gera um código intermediário único (.class), e a JVM — essa sim específica de cada sistema — o interpreta. Java não gera executável nativo por SO (era justamente o problema que queria resolver), e o fonte não roda sem compilação.',
    },
    {
        id: 'q2',
        exams: ['fundamentos'],
        question: 'Qual a diferença entre JRE e JDK?',
        options: [
            'JRE compila e JDK executa os programas Java',
            'JRE é a JVM mais as bibliotecas, suficiente para executar; JDK inclui a JRE mais as ferramentas para desenvolver, como o compilador',
            'São o mesmo pacote com nomes diferentes conforme o sistema operacional',
            'JDK é a versão gratuita e JRE é a versão comercial da Oracle',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Para apenas EXECUTAR uma aplicação Java basta a JRE (JVM + bibliotecas). Para DESENVOLVER é preciso o JDK, que contém a JRE e as ferramentas de desenvolvimento — entre elas o compilador javac.',
        feedbackWrong:
            'JRE = JVM + bibliotecas, o necessário para EXECUTAR. JDK = JRE + ferramentas de desenvolvimento (javac incluído), o necessário para DESENVOLVER. A relação é de inclusão: o JDK contém a JRE — não são o mesmo pacote nem versões comercial/gratuita.',
    },
    {
        id: 'q3',
        exams: ['fundamentos'],
        question: 'O que imprime System.out.println(10/20); e por quê?',
        options: [
            '0.5, porque a divisão sempre produz um número real',
            '0, porque a divisão entre dois inteiros é inteira e descarta a parte decimal',
            'Erro de compilação, porque o resultado não cabe em um int',
            '1, porque Java arredonda para o inteiro mais próximo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. 10 e 20 são literais int, então a divisão é INTEIRA: o quociente é 0 e a parte decimal é descartada (não há arredondamento). Para obter 0.5 é preciso cast: (float) 10 / (float) 20.',
        feedbackWrong:
            'Imprime 0. Entre dois int a divisão é INTEIRA — descarta a parte decimal, sem arredondar. É a pegadinha clássica da aula de expressões: para obter 0.5, converta ao menos um operando para real com cast, como (float) 10 / (float) 20.',
    },
    {
        id: 'q4',
        exams: ['fundamentos'],
        question: 'Considere: double d = 10.0; int i = d;. O que acontece?',
        options: [
            'Compila, porque 10.0 "cabe" em um int sem perda',
            'Erro de compilação: atribuir double a int exige cast explícito, como int i = (int) d;',
            'Compila, mas lança exceção em tempo de execução',
            'Compila e i recebe 10, por conversão automática',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Conversões de ESTREITAMENTO (double → int) nunca são automáticas, mesmo quando o valor específico caberia. O compilador exige o cast explícito int i = (int) d; — que trunca a parte decimal. Já a ampliação (int → double) é implícita.',
        feedbackWrong:
            'É ERRO DE COMPILAÇÃO. Estreitamento (double → int) exige cast explícito sempre — o compilador não olha o valor, olha os tipos. A forma correta é int i = (int) d;. A regra geral: ampliação (int → double) é implícita; estreitamento é explícito; e boolean não se converte em nada.',
    },
    {
        id: 'q5',
        exams: ['fundamentos'],
        question: 'Por que float pi = 3.14; não compila, e como corrigir?',
        options: [
            'Porque 3.14 é tratado como double por padrão; corrige-se com o sufixo F: float pi = 3.14F;',
            'Porque float não aceita casas decimais; deve-se usar double',
            'Porque falta o sufixo L, usado para literais reais',
            'Compila normalmente; o erro só ocorreria com valores acima da faixa do float',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. Todo literal real sem sufixo é double, e double → float é estreitamento — proibido sem cast. O sufixo F marca o literal como float. Analogamente, literais inteiros são int por padrão e o sufixo L os marca como long.',
        feedbackWrong:
            'O literal 3.14 é DOUBLE por padrão, e atribuir double a float é estreitamento — não compila. Corrige-se com o sufixo F (float pi = 3.14F;). O sufixo L serve para literais long, não para reais. float aceita casas decimais normalmente.',
    },
    {
        id: 'q6',
        exams: ['fundamentos'],
        question: 'Quantas vezes o corpo de for (int i = 0; i <= 4; i++) é executado?',
        options: ['4 vezes', '5 vezes', '6 vezes', 'Depende do conteúdo do corpo'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. i assume 0, 1, 2, 3 e 4 — cinco valores, porque a condição usa <= (menor OU IGUAL). Foi a pegadinha do Jogo da Adivinhação da aula: o limite de jogadas era 5, não 4.',
        feedbackWrong:
            'São 5 execuções: i vale 0, 1, 2, 3 e 4. O detalhe é o <=, que inclui o próprio 4. Com i < 4 seriam 4 execuções. Contar as iterações de um for com <= vs < é pegadinha recorrente.',
    },
    {
        id: 'q7',
        exams: ['fundamentos'],
        question: 'Qual laço garante que o bloco de código seja executado pelo menos uma vez, mesmo com a condição inicialmente falsa?',
        options: [
            'for, porque tem início, fim e incremento definidos',
            'while, porque repete enquanto a condição for verdadeira',
            'do-while, porque a condição é testada somente APÓS a execução do bloco',
            'Nenhum: todo laço testa a condição antes de executar',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. No do-while a expressão de teste fica ao FINAL: o bloco roda primeiro, o teste vem depois — execução mínima garantida de uma vez. O while é o oposto: testa antes, e pode nunca executar.',
        feedbackWrong:
            'É o DO-WHILE: do { ... } while (condição); executa o bloco primeiro e só então testa — pelo menos uma execução garantida. O while testa ANTES (pode executar zero vezes), e por isso a aula insiste que a variável de controle do while seja inicializada antes do laço.',
    },
    {
        id: 'q8',
        exams: ['fundamentos'],
        question: 'Segundo a regra completa do ano bissexto usada na lista da turma, o ano 2100 é bissexto?',
        options: [
            'Sim, porque 2100 é múltiplo de 4',
            'Não, porque é múltiplo de 100 sem ser múltiplo de 400',
            'Sim, porque todo ano terminado em 00 é bissexto',
            'Não, porque anos futuros não podem ser classificados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A regra é ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0). 2100 é múltiplo de 4 e de 100, mas não de 400 — cai na exceção e NÃO é bissexto. Já 2000 (múltiplo de 400) é.',
        feedbackWrong:
            'Não é bissexto. A regra completa tem duas exceções encadeadas: múltiplos de 4 são bissextos, EXCETO os múltiplos de 100 (1800, 1900, 2100), SALVO quando também são múltiplos de 400 (1600, 2000, 2400). Em código: ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0).',
    },
    {
        id: 'q9',
        exams: ['fundamentos'],
        question: 'Um array é criado com int[] idades = new int[12]; e o código acessa idades[13]. O que acontece?',
        options: [
            'Erro de compilação, porque 13 excede o tamanho declarado',
            'Compila, mas em execução lança ArrayIndexOutOfBoundsException',
            'Retorna 0, o valor padrão das posições não preenchidas',
            'O array cresce automaticamente até a posição 13',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O compilador não confere índices; o estouro só aparece em EXECUÇÃO, como ArrayIndexOutOfBoundsException: 13. Com 12 posições, os índices válidos vão de 0 a 11 — e o tamanho de um array nunca muda depois do new.',
        feedbackWrong:
            'Compila normalmente e EXPLODE EM EXECUÇÃO com ArrayIndexOutOfBoundsException. Índices válidos de new int[12]: 0 a 11. O valor padrão 0 vale para posições existentes não preenchidas — posição 13 não existe. E arrays têm tamanho fixo: nunca crescem sozinhos.',
    },
    {
        id: 'q10',
        exams: ['fundamentos'],
        question: 'Em double[][] notas = new double[4][2];, o que devolvem notas.length e notas[0].length?',
        options: ['2 e 4', '4 e 2', '8 e 8', '4 e 4'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Uma matriz em Java é um "array de arrays": notas.length conta as linhas (4) e notas[0].length conta as colunas da primeira linha (2). É com esses dois valores que o for aninhado percorre a matriz.',
        feedbackWrong:
            'notas.length = 4 (linhas) e notas[0].length = 2 (colunas). A matriz é um array de arrays: o primeiro índice escolhe a linha (um array interno), o segundo a coluna. O for externo vai até notas.length e o interno até notas[i].length.',
    },
    {
        id: 'q11',
        exams: ['projeto'],
        question: 'Qual a diferença entre classe e objeto, nos termos usados na aula?',
        options: [
            'Classe é a instância em memória; objeto é o modelo genérico',
            'Classe é o modelo genérico, um tipo de dado; objeto é a materialização, a instância "com vida"',
            'São sinônimos: toda classe é um objeto do pacote java.lang',
            'Objeto é o arquivo .java e classe é o arquivo .class compilado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A classe é o que há de genérico: representação, modelo, "forma" — e um TIPO de dado. O objeto é a materialização dessa classe, criado com new; cada instância tem estado próprio e independente.',
        feedbackWrong:
            'Classe = modelo genérico (e um tipo de dado); objeto = instância criada com new, a "classe com vida". A relação nunca se inverte. Em Robo r = new Robo();, Robo é a classe (tipo da variável) e o objeto é o que o new cria na memória.',
    },
    {
        id: 'q12',
        exams: ['projeto'],
        question: 'O código Robo r1 = new Robo(); Robo r2 = new Robo(); System.out.println(r1); imprime Robo@16f0472. O que esse valor representa, e r1 e r2 apontam para o mesmo objeto?',
        options: [
            'É o conteúdo do objeto; r1 e r2 são o mesmo objeto porque vêm da mesma classe',
            'É a referência (endereço) do objeto; r1 e r2 apontam para objetos DIFERENTES, pois cada new cria uma instância',
            'É um erro de execução por falta do método imprimir()',
            'É o hash da classe; todas as instâncias de Robo imprimem o mesmo valor',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sem toString, imprimir o objeto mostra a referência (Classe@endereço). Cada new cria uma instância independente — na aula, r1 e r2 imprimiram endereços distintos (Robo@16f0472 e Robo@12f0132), provando que são objetos separados com estados separados.',
        feedbackWrong:
            'O valor é a REFERÊNCIA (endereço de memória) do objeto, no formato Classe@hash. E cada new cria uma instância NOVA: r1 e r2 apontam para objetos diferentes, com atributos independentes — mudar o nome de um não afeta o outro.',
    },
    {
        id: 'q13',
        exams: ['projeto'],
        question: 'Uma classe declara apenas o construtor Conta(double limite). O que acontece com new Conta()?',
        options: [
            'Compila, porque o construtor default sempre existe',
            'Não compila: ao declarar qualquer construtor, o default deixa de ser gerado',
            'Compila e chama o construtor declarado com limite 0',
            'Lança exceção em tempo de execução',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O construtor default (sem argumentos, corpo vazio) só é gerado quando a classe NÃO declara construtor nenhum. Declarada a versão com parâmetro, new Conta() vira erro de compilação — a menos que você declare também o construtor sem argumentos (sobrecarga).',
        feedbackWrong:
            'NÃO COMPILA. O default só existe enquanto a classe não declara construtor algum; ao declarar Conta(double), ele some. Para aceitar as duas formas de criação, declare os dois construtores — é a sobrecarga de construtores vista no exemplo da Conta com e sem cheque especial.',
    },
    {
        id: 'q14',
        exams: ['projeto'],
        question: 'No construtor public Quadrado(double lado) { this.lado = lado; }, qual o papel do this?',
        options: [
            'Chamar o construtor da superclasse',
            'Distinguir o ATRIBUTO lado (this.lado) do PARÂMETRO homônimo lado',
            'Tornar o atributo imutável após a atribuição',
            'Criar uma nova instância de Quadrado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. this referencia o próprio objeto: this.lado é o atributo, e lado sozinho é o parâmetro mais próximo no escopo. Sem o this, lado = lado atribuiria o parâmetro a ele mesmo e o atributo ficaria com o valor padrão.',
        feedbackWrong:
            'this referencia O PRÓPRIO OBJETO e desfaz a ambiguidade entre atributo e parâmetro de mesmo nome: this.lado (atributo) recebe lado (parâmetro). Quem chama o construtor do pai é super(); quem torna imutável é final; quem cria instância é new.',
    },
    {
        id: 'q15',
        exams: ['projeto'],
        question: 'Com o atributo saldo público, por que colocar a validação dentro do método sacar() NÃO resolve o problema do saque acima do limite?',
        options: [
            'Porque o if dentro do método deixa o código lento',
            'Porque nada obriga o código cliente a usar sacar(): ele pode atribuir minhaConta.saldo = -200 diretamente',
            'Porque métodos não podem conter estruturas condicionais',
            'Porque o compilador remove validações redundantes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é o cerne da aula da "casa da mãe Joana". Enquanto o atributo estiver exposto, qualquer classe pode alterá-lo por fora do método, burlando a regra. A solução é fechar o atributo com private e deixar a PRÓPRIA classe controlar seu estado.',
        feedbackWrong:
            'O problema é que o método é OPCIONAL enquanto o atributo está exposto: quem quiser faz minhaConta.saldo = -200 sem passar pelo sacar(). Validar em todos os pontos do cliente é inviável. Por isso a convenção: atributos private, e o estado só muda pelos métodos da própria classe.',
    },
    {
        id: 'q16',
        exams: ['projeto'],
        question: 'Uma classe externa tenta minhaConta.saldo = 1000; sendo saldo declarado como private double saldo;. Qual o resultado?',
        options: [
            'Funciona, mas gera um warning',
            'Erro de COMPILAÇÃO: "saldo has private access in Conta"',
            'Exceção em tempo de execução',
            'O valor é atribuído, mas volta ao anterior no próximo acesso',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. private fecha o acesso ao atributo para todas as outras classes, e a violação é barrada pelo COMPILADOR — a mensagem vista em aula foi exatamente "saldo has private access in Conta". Erro de compilação, não de execução.',
        feedbackWrong:
            'É ERRO DE COMPILAÇÃO, com a mensagem "has private access". O private é verificado pelo compilador, não em tempo de execução — o programa nem chega a rodar. Esse é o mecanismo que garante que só a própria classe altera seu estado.',
    },
    {
        id: 'q17',
        exams: ['projeto'],
        question: 'Na classe ContaStatic, o atributo é static double saldo;. Após c1.saldo = 10.0;, o que imprime c2.saldo?',
        options: [
            '0.0, porque c2 é outra instância',
            '10.0, porque um membro static pertence à CLASSE e é compartilhado por todas as instâncias',
            'null, porque c2 não inicializou o saldo',
            'Erro de compilação: static não pode ser acessado por instância',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. static = membro DA CLASSE: existe uma única cópia, compartilhada por toda e qualquer instância. Alterar via c1 reflete em c2 — foi o experimento da aula que mostrou as duas contas com o mesmo saldo.',
        feedbackWrong:
            'Imprime 10.0. Um atributo static pertence à classe, não a cada objeto: há UMA cópia só, e todas as instâncias a enxergam. É por isso que um contador static incrementado no construtor consegue contar quantos objetos já foram criados.',
    },
    {
        id: 'q18',
        exams: ['projeto'],
        question: 'Uma classe tem construtor private. Como obter uma instância dela?',
        options: [
            'É impossível: classes com construtor privado não podem ser instanciadas de forma alguma',
            'Por um método ESTÁTICO da própria classe que cria e retorna a instância (getInstance)',
            'Usando new com cast explícito',
            'Herdando da classe e chamando super()',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O construtor privado impede o new externo, mas a PRÓPRIA classe ainda pode se instanciar. Um método static getInstance() cria (uma única vez, se guardar em atributo static) e retorna a instância — o embrião do padrão Singleton visto em aula.',
        feedbackWrong:
            'A saída é um método ESTÁTICO na própria classe que retorna a instância — o getInstance() da aula, que cria o objeto se ainda não existe e o devolve. O construtor privado bloqueia o new de fora, mas não de dentro. Herdar não ajuda: a filha também não acessa construtor private.',
    },
    {
        id: 'q19',
        exams: ['projeto'],
        question: 'Gerente extends Funcionario, e cpf é private em Funcionario. O código gerente.setCpf("123") funciona, mas gerente.cpf = "10" não compila. Por quê?',
        options: [
            'Atributos private não são herdados, então cpf não existe em Gerente',
            'Membros private SÃO herdados, mas sem acesso direto na filha — só por métodos visíveis, como o setter herdado',
            'O setter público torna o atributo público também',
            'Faltou a anotação @Override no setter',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a pegadinha central da aula de herança. A filha herda TODOS os membros, inclusive os private; o que ela não tem é acesso DIRETO a eles. O caminho é o método visível herdado (setCpf/getCpf). O erro real mostrado foi "cpf has private access in Funcionario".',
        feedbackWrong:
            'Os membros private SÃO herdados (o objeto Gerente tem um cpf), mas o acesso direto continua fechado — private é visível só dentro da classe que o declarou. A filha usa os métodos públicos herdados. Dizer que "private não é herdado" é o erro conceitual clássico dessa prova.',
    },
    {
        id: 'q20',
        exams: ['projeto'],
        question: 'O que caracteriza a SOBRESCRITA (reescrita) de um método?',
        options: [
            'Mesmo nome com assinatura diferente, na mesma classe',
            'Mesmo nome e MESMA assinatura na classe filha, com implementação diferente',
            'Mudar o nome do método herdado para evitar conflito',
            'Declarar o método como static na filha',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sobrescrever = a filha redefinir um método do pai mantendo nome E assinatura, trocando a implementação (calcularSalario: horas×40 no pai, horas×80 no Gerente). @Override explicita a intenção. Mesmo nome com assinatura diferente é SOBRECARGA — outro conceito.',
        feedbackWrong:
            'Sobrescrita = mesmo nome + MESMA assinatura + implementação diferente, na FILHA. Se a assinatura muda, vira sobrecarga (overload), que pode ocorrer na mesma classe. A dupla sobrecarga × sobrescrita é distinção obrigatória: overload convive na mesma classe; override substitui na herança.',
    },
    {
        id: 'q21',
        exams: ['projeto'],
        question: 'No Gerente, calcularSalario foi reescrito assim: se horasTrabalhadas < 160, chama super.calcularSalario(horasTrabalhadas); senão, salario = horasTrabalhadas * 80. O que o super faz aí?',
        options: [
            'Cria uma instância da superclasse Funcionario',
            'Invoca a versão do MÉTODO DO PAI, reaproveitando o cálculo padrão de horas×40',
            'Converte o Gerente em Funcionario permanentemente',
            'Chama o construtor da superclasse',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Dentro de um método sobrescrito, super.metodo() executa a implementação da SUPERCLASSE — aqui, o cálculo padrão (×40) para quem trabalhou menos de 160h, reservando a regra especial (×80) para o resto. Reuso sem duplicar código.',
        feedbackWrong:
            'super.calcularSalario(h) invoca a VERSÃO DO PAI do método — o cálculo padrão ×40 — dentro da versão reescrita. Não cria objeto nem converte tipo. super() com parênteses direto (sem nome de método) é que chamaria o construtor do pai, e só na primeira linha de um construtor.',
    },
    {
        id: 'q22',
        exams: ['projeto'],
        question: 'Sobre construtores e herança em Java, qual afirmação está correta?',
        options: [
            'Construtores são herdados como qualquer método',
            'Construtores NÃO são herdados, e o construtor da filha chama implicitamente o do pai como primeira instrução',
            'A filha só pode ter construtor se o pai não tiver',
            'super(args) é opcional mesmo quando o pai declara apenas um construtor com parâmetros',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Atributos e métodos são herdados; construtores NÃO. E todo construtor de filha começa chamando (implicitamente) o construtor do pai, para inicializar as variáveis herdadas. Se o pai só tem construtor com parâmetros, a filha é OBRIGADA a chamar super(args) explicitamente.',
        feedbackWrong:
            'Construtores NÃO são herdados — regra em caixa alta na aula. A primeira instrução implícita do construtor da filha é super(), para inicializar o que veio do pai. E quando o pai declara apenas construtor com parâmetros, omitir o super(args) na filha é erro de compilação.',
    },
    {
        id: 'q23',
        exams: ['projeto'],
        question: 'Um método public na superclasse pode ser sobrescrito como protected na subclasse?',
        options: [
            'Sim, a filha define a visibilidade que quiser',
            'Não: é erro de compilação RESTRINGIR a visibilidade ao sobrescrever; ampliar é permitido',
            'Sim, desde que use @Override',
            'Não, porque métodos public não podem ser sobrescritos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Restringir o acesso na sobrescrita quebraria a relação "é um": se todo Cachorro é um Animal e o método é público no Animal, precisa continuar acessível no Cachorro. Restringir = erro de compilação; ampliar (protected → public) pode.',
        feedbackWrong:
            'NÃO pode — restringir visibilidade na sobrescrita é erro de compilação. O fundamento é a relação "é um": qualquer código que usa o pai polimorficamente precisa poder chamar o método na filha. O caminho inverso (ampliar a visibilidade) é permitido.',
    },
    {
        id: 'q24',
        exams: ['projeto'],
        question: 'Qual é a visibilidade de um membro protected?',
        options: [
            'Apenas a própria classe',
            'Própria classe, classes do mesmo pacote e SUBCLASSES mesmo de pacotes diferentes',
            'Apenas subclasses, em qualquer pacote',
            'Qualquer classe de qualquer pacote',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, conforme a tabela da aula. protected = private "com portas" para o pacote e para a linhagem: mesmo uma subclasse em OUTRO pacote enxerga. O default (sem modificador) para no pacote — subclasse de fora não enxerga. Essa diferença entre protected e default é a pegadinha da tabela.',
        feedbackWrong:
            'protected é visível na própria classe, no mesmo pacote E nas subclasses de qualquer pacote. Compare com o default (sem modificador): também cobre classe e pacote, mas NÃO alcança subclasses de outros pacotes. private fica só na classe; public, em todo lugar.',
    },
    {
        id: 'q25',
        exams: ['projeto'],
        question: 'A classe é declarada como public abstract class Funcionario { abstract void calcularSalario(); }. O que new Funcionario() causa?',
        options: [
            'Cria um Funcionario com calcularSalario vazio',
            'Erro de compilação: classe abstrata NÃO pode ser instanciada — ela existe para ser herdada',
            'Exceção em tempo de execução',
            'Compila apenas se houver pelo menos uma subclasse',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. abstract proíbe o new da própria classe: ela é um modelo incompleto (calcularSalario nem tem corpo). Instanciam-se as filhas concretas — Gerente, Vendedor — que são OBRIGADAS a implementar o método abstrato.',
        feedbackWrong:
            'É ERRO DE COMPILAÇÃO. Classe abstrata não se instancia — o método abstrato nem tem implementação, então o objeto seria incompleto. O papel dela é ser herdada: as filhas concretas implementam calcularSalario, cada uma com sua regra, e são elas que recebem o new.',
    },
    {
        id: 'q26',
        exams: ['projeto'],
        question: 'FolhaDePagamento guarda um ArrayList<Funcionario> contendo um Gerente e um Vendedor e chama f.calcularSalario() para cada elemento. Qual versão do método executa?',
        options: [
            'Sempre a de Funcionario, porque a lista é desse tipo',
            'A do TIPO REAL de cada objeto (Gerente ou Vendedor), decidida em tempo de execução — polimorfismo',
            'Nenhuma: a lista não aceita tipos diferentes',
            'A primeira versão compilada, por otimização',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — é o dynamic dispatch, o coração do polimorfismo. A referência é do tipo pai, mas quem responde é o objeto real: o Gerente soma 4000, o Vendedor aplica a comissão. A folha calcula tudo sem um único if de tipo.',
        feedbackWrong:
            'Executa a versão do TIPO REAL do objeto — Gerente ou Vendedor —, decidida em tempo de execução. É o polimorfismo: a lista aceita qualquer Funcionario (a filha "é um" pai), e cada chamada despacha para a implementação concreta. Esse é o critério do projeto que dispensa if de tipo.',
    },
    {
        id: 'q27',
        exams: ['projeto'],
        question: 'No exemplo da aula, Sistema tem o método void acesso(IAutenticavel autenticavel). Gerente implementa IAutenticavel; Vendedor não. O que acontece com sis.acesso(vendedor)?',
        options: [
            'Executa, mas sem autenticar',
            'NÃO COMPILA: Vendedor não implementa a interface, então não é aceito como argumento do tipo IAutenticavel',
            'Lança exceção em tempo de execução',
            'Compila se Vendedor herdar de Funcionario',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o comentário no código da aula era literalmente "vendedor nao tem acesso!". A interface funciona como TIPO: só entra no método quem assinou o contrato com implements. Herdar de Funcionario não ajuda — o acesso é definido pelo contrato, não pela hierarquia.',
        feedbackWrong:
            'NÃO COMPILA. O parâmetro é do tipo IAutenticavel, e Vendedor não implementa essa interface — o compilador barra na hora, mesmo Vendedor sendo um Funcionario como o Gerente. A lição do exemplo: interfaces controlam capacidade por CONTRATO, independente da árvore de herança.',
    },
    {
        id: 'q28',
        exams: ['projeto'],
        question: 'Java não permite class X extends A, B. Como uma classe obtém "múltiplos tipos" então?',
        options: [
            'Usando duas cláusulas extends separadas',
            'Implementando VÁRIAS interfaces (e estendendo no máximo UMA classe)',
            'Não há alternativa: cada classe tem um único tipo',
            'Declarando as duas superclasses como abstract',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Herança múltipla de CLASSES é proibida (extends aceita uma só), mas implements aceita várias interfaces — a classe assume vários CONTRATOS/tipos sem herdar implementação duplicada. class Gerente extends Funcionario implements IAutenticavel combina os dois mecanismos.',
        feedbackWrong:
            'O caminho são as INTERFACES: extends aceita uma única classe, mas implements aceita quantas interfaces forem necessárias — herança múltipla de TIPO, sem os conflitos da herança múltipla de implementação. É por isso que Gerente pode ser Funcionario E IAutenticavel ao mesmo tempo.',
    },
    {
        id: 'q29',
        exams: ['projeto'],
        question: 'No mar13 da turma, o EstudanteBO captura a ValidationException lançada pelo ValidarEmail e relança new EstudanteException(e.getMessage()). Por que não deixar a ValidationException simplesmente propagar?',
        options: [
            'Porque exceções não atravessam mais de um método',
            'Para que cada camada exponha apenas a SUA exceção: quem usa o BO só precisa conhecer EstudanteException (exception translation)',
            'Porque ValidationException é unchecked e não pode ser capturada',
            'Para evitar que a mensagem de erro chegue à View',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é o padrão de tradução de exceções entre camadas. A View conversa com o BO e trata EstudanteException; o detalhe de que a validação de e-mail usa ValidationException fica escondido. Trocar o validador não quebra a View.',
        feedbackWrong:
            'É a TRADUÇÃO DE EXCEÇÕES (exception translation): cada camada expõe a exceção do seu nível. O BO captura a de baixo nível (ValidationException) e relança a sua (EstudanteException), preservando a mensagem. Assim a View depende só do contrato do BO — desacoplamento entre camadas.',
    },
    {
        id: 'q30',
        exams: ['projeto'],
        question: 'Na arquitetura em camadas da disciplina (View, BO, DAO, VO), onde fica a validação "nome não pode ser vazio" e qual o papel do VO?',
        options: [
            'A validação fica na View; o VO acessa o banco',
            'A validação fica no BO (regra de negócio); o VO apenas TRANSPORTA dados entre as camadas, sem lógica',
            'A validação fica no DAO; o VO exibe mensagens ao usuário',
            'A validação fica no VO; o BO conecta ao banco',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada camada tem uma responsabilidade: View interage com o usuário (Scanner, try/catch de exibição), BO concentra as REGRAS DE NEGÓCIO e lança a exceção própria, DAO persiste, e o VO é o objeto de valor — só atributos com getters/setters, transitando entre as camadas.',
        feedbackWrong:
            'Regra de negócio mora no BO (Business Object) — é ele que valida e lança EstudanteException. O VO (Value Object) é um portador de dados sem lógica: atributos + getters/setters, viajando da View ao DAO. View só interage com o usuário; DAO só fala com a persistência.',
    },
    {
        id: 'q31',
        exams: ['projeto'],
        question: 'Por que o INSERT do AlunoDAO usa PreparedStatement com placeholders (VALUES(?,?)) em vez de concatenar os valores na string SQL?',
        options: [
            'Porque o MySQL não aceita strings concatenadas',
            'Os placeholders separam o comando dos dados: pstmt.setString/setInt preenchem com segurança e tipo correto, sem montar SQL por concatenação',
            'Porque PreparedStatement é a única classe que executa INSERT',
            'Para que o SQL rode sem conexão aberta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O PreparedStatement pré-compila o comando com ? e recebe os valores por setString(1, nome)/setInt(2, idade) — cada dado entra tipado e tratado como DADO, nunca como pedaço do comando. É mais seguro (evita injeção de SQL) e mais limpo que concatenar.',
        feedbackWrong:
            'A vantagem dos placeholders é separar COMANDO de DADOS: o SQL vai fixo com ?, e os valores entram por setString/setInt, tipados e escapados — sem o risco e a sujeira de concatenar strings (inclusive injeção de SQL). Statement comum também executa INSERT, mas sem essa proteção.',
    },
    {
        id: 'q32',
        exams: ['projeto'],
        question: 'AlunoDAO tem dois construtores: um sem parâmetros (cria a própria ConexaoMySQL) e um AlunoDAO(Connection conexao). Para que serve o segundo?',
        options: [
            'É um construtor de reserva, caso o primeiro falhe',
            'Permite INJETAR a conexão de fora — o teste passa a MESMA conexão transacional que depois sofrerá rollback',
            'Serve para conectar a dois bancos ao mesmo tempo',
            'É exigência do compilador quando a classe usa JDBC',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — injeção de dependência manual. No AlunoDAOTest, o setUp abre a conexão com setAutoCommit(false) e a injeta no DAO; tudo que o teste insere participa da mesma transação, e o tearDown dá rollback() — o banco termina limpo. Em produção, o construtor sem parâmetro se vira sozinho.',
        feedbackWrong:
            'É o construtor de INJEÇÃO usado pelos testes: o teste cria a conexão com setAutoCommit(false), passa-a ao DAO, e todas as operações caem na mesma transação — desfeita no tearDown com rollback(), deixando o banco como estava. Sem essa injeção, o DAO criaria conexão própria e os dados de teste persistiriam.',
    },
    {
        id: 'q33',
        exams: ['fundamentos', 'projeto'],
        question: 'No padrão de teste de exceção da turma, o teste chama c.depositar(-1); seguido de fail("Não deveria ter passado"); dentro do try, com o catch vazio. Quando esse teste PASSA?',
        options: [
            'Quando depositar(-1) executa sem lançar exceção',
            'Quando depositar(-1) LANÇA a exceção esperada: o fluxo pula o fail() e cai no catch, que aprova',
            'Nunca: fail() sempre derruba o teste',
            'Quando o catch relança a exceção',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A lógica é invertida: o comportamento CORRETO do método é lançar exceção para depósito negativo. Se lançar, o fail() nunca executa e o catch (vazio ou verificando a mensagem) aprova. Se NÃO lançar, o fail() derruba o teste — denunciando que a validação sumiu.',
        feedbackWrong:
            'O teste passa quando a exceção É LANÇADA: o depositar(-1) deve rejeitar o valor; a exceção desvia o fluxo antes do fail() e cai no catch, aprovando. Se o método aceitar o depósito inválido, o fail() executa e o teste quebra. Variação vista em aula: o catch confere a mensagem com assertEquals.',
    },
    {
        id: 'q34',
        exams: ['fundamentos', 'projeto'],
        question: 'Para testar ValidarNota.validar (nota válida de 0 a 10), a turma testou 0, −1, 9 e 10.1. Que técnica de teste é essa, e o que se espera de cada valor?',
        options: [
            'Teste de carga: 0 e −1 válidos, 9 e 10.1 inválidos',
            'Valores-limite/partição de equivalência: 0 e 9 válidos; −1 e 10.1 inválidos, cercando as fronteiras do intervalo',
            'Teste de integração: todos os valores devem lançar exceção',
            'Mock de objetos: os valores simulam o banco de dados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Os erros moram nas FRONTEIRAS: testa-se dentro do intervalo (0, 9), imediatamente fora (−1, 10.1), cobrindo as partições válida e inválidas. Quatro casos bem escolhidos valem mais que cem aleatórios no meio do intervalo.',
        feedbackWrong:
            'É análise de VALORES-LIMITE com partição de equivalência: 0 e 9 devem retornar true (dentro do intervalo), −1 e 10.1 devem retornar false (fora, colados na fronteira). A técnica mira as bordas do intervalo, onde os bugs de >= vs > costumam viver.',
    },
    {
        id: 'q35',
        exams: ['fundamentos', 'projeto'],
        question: 'No AlunoDAOTest, o setUp faz conexao.setAutoCommit(false) e o tearDown faz conexao.rollback(). O que acontece com os alunos inseridos pelo teste?',
        options: [
            'Ficam gravados no banco até serem apagados manualmente',
            'DESAPARECEM ao final de cada teste: o rollback desfaz a transação e o banco volta ao estado anterior',
            'São movidos para uma tabela de backup',
            'São gravados apenas se todos os asserts passarem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Com autoCommit desligado, todos os INSERTs do teste ficam pendentes na transação; o rollback() do tearDown descarta tudo. Cada teste roda num banco "limpo" e não deixa rastro — o padrão de teste de integração transacional da disciplina.',
        feedbackWrong:
            'Os dados SOMEM: setAutoCommit(false) segura os INSERTs numa transação aberta, e o rollback() do tearDown a desfaz por completo, passem ou não os asserts. Resultado: cada teste encontra e devolve o banco no mesmo estado. É para isso que a conexão é injetada no DAO.',
    },
    {
        id: 'q36',
        exams: ['av1'],
        question: 'Segundo o material da AV1 (catálogo do refactoring.guru), o que é um padrão de projeto?',
        options: [
            'Um trecho de código pronto para copiar e colar em qualquer sistema',
            'Uma solução consagrada e reutilizável para um problema RECORRENTE de design, descrita de forma independente de aplicação',
            'Uma biblioteca oficial da Oracle para Java',
            'Um diagrama UML obrigatório em todo projeto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Padrão de projeto não é código pronto — é a descrição de uma solução de design testada pela comunidade para um problema que se repete, adaptável a cada contexto. O catálogo clássico os organiza em criacionais, estruturais e comportamentais.',
        feedbackWrong:
            'Padrão de projeto é uma SOLUÇÃO DE DESIGN consagrada para um problema recorrente, descrita de forma genérica — cada equipe a adapta ao seu código; não é copy-paste nem biblioteca. A AV1 pedia exatamente isso: explicar o conceito, escolher um padrão, mostrar problema, prós/contras e dois exemplos em Java.',
    },
    {
        id: 'q37',
        exams: ['av1', 'projeto'],
        question: 'O getInstance() visto em aula — construtor private + método static que cria a instância uma única vez e a retorna — corresponde a qual padrão de projeto, de qual família?',
        options: [
            'Observer, da família comportamental',
            'Singleton, da família CRIACIONAL: garante uma única instância com ponto de acesso global',
            'Adapter, da família estrutural',
            'Strategy, da família comportamental',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O Singleton é criacional: o construtor privado impede o new externo e o getInstance() static entrega sempre a MESMA instância (criando-a na primeira chamada — lazy initialization). A aula de modificadores implementou o padrão sem nomeá-lo.',
        feedbackWrong:
            'É o SINGLETON, da família CRIACIONAL (padrões que tratam de COMO criar objetos). A receita: construtor private + atributo static guardando a instância + getInstance() static com lazy initialization. Observer e Strategy são comportamentais; Adapter é estrutural.',
    },
    {
        id: 'q38',
        exams: ['projeto'],
        question: 'Qual conjunto de itens corresponde aos critérios de avaliação do projeto final declarados pelo professor?',
        options: [
            'Interface gráfica obrigatória, inteligência artificial e deploy em nuvem',
            'Classes abstratas e interfaces, encapsulamento, construtores, herança, polimorfismo, Collections, testes de BO e DAO, CRUD em banco, camadas View/BO/VO/DAO e exceções próprias',
            'Apenas o funcionamento do sistema, sem exigência de técnica',
            'Uso de framework web e microsserviços',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — os dez critérios do mural. Repare que eles são um checklist da própria ementa: cada conceito da disciplina precisa aparecer aplicado no projeto, que vale o DOBRO da prova na média. Interface web/mobile é opcional; GitHub com commits de todos os integrantes é exigido.',
        feedbackWrong:
            'Os critérios são exatamente o conteúdo da disciplina aplicado: abstratas + interfaces, OO com encapsulamento, construtores, herança, polimorfismo, Collections, testes unitários de cada BO e DAO, banco com insert/update/delete/select, camadas View/BO/VO/DAO e exceções próprias tratadas. GUI é opcional; framework e nuvem não são cobrados.',
    },
];
