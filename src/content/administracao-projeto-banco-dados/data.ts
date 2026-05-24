import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT = `
GUIA DE ADMINISTRACAO E PROJETO DE BANCO DE DADOS - Topicos disponiveis:

1. DISCIPLINA E AVALIACAO: A disciplina trabalha projeto e administracao de bancos de dados com foco em Oracle. Combina teoria e laboratorio usando VirtualBox, Oracle Database, Oracle SQL Developer, Oracle SQL Developer Data Modeler e Oracle Live SQL. O programa geral inclui SQL, controle de transacoes, atividades de DBA e PL/SQL. Projeto define estrutura, regras e objetos; administracao mantem essa estrutura funcionando com usuarios, instancias, seguranca, backup, desempenho e manutencao. A avaliacao tem duas notas: N1 com projeto fase 1 (2 pts), projeto fase 2 (2 pts), prova 1 parte 1 (3 pts) e prova 1 parte 2 (3 pts); N2 com projeto fases 3, 4 e 5 (2 pts cada) e prova 2 (4 pts). O projeto em grupo e avaliado por correcao tecnica, inovacao/criatividade, complexidade/desafio e aderencia a realidade.

2. PROJETO E ESQUEMA: Um projeto de banco de dados comeca pela definicao clara do esquema, que agrupa tabelas, visoes, indices e outros objetos de uma mesma aplicacao. O esquema funciona como fronteira logica do dominio, ajudando leitura, manutencao, permissoes e evolucao. Antes de criar objetos, a ferramenta de modelagem deve ser configurada para a versao do SGBD e para os padroes esperados, pois isso influencia tipos, comportamento padrao e SQL gerado.

3. PADRONIZACAO DE NOMES: A nomenclatura fisica reduz ambiguidade e facilita manutencao. Nomes consistentes tornam o DDL mais legivel e ajudam a reconhecer o tipo de objeto em scripts, diagramas e mensagens do SGBD. Convencoes comuns incluem PK_{tabela} para chave primaria, FK_{pai}_{filho} para chave estrangeira, AK/UK para restricoes unicas, IDX para indices, CK para checks e NN para obrigatoriedade. Abreviacoes como Cod, Dta, Nom, Des, Qtd, Val e Id ajudam a manter nomes curtos e previsiveis.

4. DATA MODELER, TIPOS E DOMINIOS: O Oracle SQL Developer Data Modeler permite configurar versao do banco, colunas obrigatorias, indices de chaves estrangeiras, estilo de relacionamentos, tipos e dominios. Tipos e dominios padronizam definicoes reutilizaveis, centralizando tipo, validacao e regras recorrentes de negocio. Eles evitam que colunas semelhantes sejam definidas de formas diferentes por repeticao manual.

5. OBJETOS SQL: Tabelas devem ser criadas com colunas, chave primaria, restricoes unicas, chaves estrangeiras, obrigatoriedade e validacoes para preservar integridade. A tabela e ponto de defesa dos dados: regras no banco continuam valendo mesmo se outro sistema ou script acessar os dados. ALTER TABLE usa ADD, MODIFY e DROP COLUMN para evoluir a estrutura conforme novas regras de negocio. Comentarios documentam tabelas e colunas dentro do banco. Visoes sao consultas salvas para filtrar, simplificar, proteger ou reorganizar acesso aos dados; mudancas costumam usar CREATE OR REPLACE. Sequences geram identificadores automaticamente e reduzem preenchimento manual de chaves.

6. INDICES E PARTICIONAMENTO: Indices aceleram consultas ao oferecer caminhos de acesso alternativos, mas ocupam espaco e geram custo de manutencao em escritas. B-tree e comum em buscas seletivas e ambientes transacionais; bitmap e melhor para baixa cardinalidade e analise com muitos filtros, mas e menos adequado a muitas atualizacoes. Indices podem ser compostos, baseados em expressao, reconstruidos e monitorados para verificar se ainda trazem ganho real. Particionamento divide tabelas grandes por faixa, lista ou hash; a aplicacao continua vendo uma tabela unica, enquanto o banco administra partes menores. Indices tambem podem ser particionados para equilibrar desempenho e manutencao.
`;

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS: QuizTopicOption[] = [
  {
    value: 'intro',
    label: 'Introdução e avaliação',
    prompt: 'Disciplina APBD, foco em Oracle, ferramentas, blocos do conteúdo programático, composição das notas e critérios do projeto.',
  },
  {
    value: 'projeto-esquema',
    label: 'Projeto e esquema',
    prompt: 'Definição de esquema, organização dos objetos da aplicação, configuração inicial da ferramenta e influência da versão do SGBD.',
  },
  {
    value: 'nomenclatura',
    label: 'Padronização de nomes',
    prompt: 'Convenções de nomes para tabelas, colunas, chaves primárias, chaves estrangeiras, restrições, índices e abreviações.',
  },
  {
    value: 'objetos-sql',
    label: 'Objetos SQL',
    prompt: 'Criação e alteração de tabelas, constraints, comentários, visões, sequences e uso de NEXTVAL/CURRVAL.',
  },
  {
    value: 'desempenho',
    label: 'Índices e particionamento',
    prompt: 'Índices B-tree, bitmap, índices por expressão, monitoramento, reconstrução, particionamento por faixa, lista e hash.',
  },
];

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS = [
  { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução', exam: 'P1' },
  { id: 'modelagem', title: 'Modelagem de Dados', shortTitle: 'Modelagem', exam: 'P1' },
  { id: 'objetos', title: 'Objetos SQL', shortTitle: 'Objetos SQL', exam: 'P1' },
  { id: 'desempenho', title: 'Desempenho e Particionamento', shortTitle: 'Desempenho', exam: 'P1' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
  { id: 'iaquiz', title: 'Quiz com IA', shortTitle: 'Quiz IA' },
];

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_QUIZ_DATA: QuizQuestionData[] = [
  {
    id: 'apbd-q1',
    exam: 'prova1',
    question: '1. Qual é o foco prático da disciplina Administração e Projeto de Banco de Dados?',
    options: [
      'Projetar e administrar bancos de dados usando principalmente a plataforma Oracle',
      'Estudar apenas teoria de normalização, sem laboratório',
      'Desenvolver interfaces web para consumo de APIs',
      'Substituir SQL por planilhas e relatórios manuais',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A disciplina combina teoria e prática em laboratório com Oracle e ferramentas relacionadas.',
    feedbackWrong: 'O foco é projetar e administrar bancos de dados com Oracle, combinando teoria e prática.',
  },
  {
    id: 'apbd-q2',
    exam: 'prova1',
    question: '2. Como a primeira nota da disciplina é composta segundo o material?',
    options: [
      'Somente uma prova individual de 10 pontos',
      'Duas fases de projeto valendo 2 pontos cada e duas partes de prova valendo 3 pontos cada',
      'Cinco fases de projeto, todas com o mesmo peso',
      'Projeto único de 6 pontos e seminário de 4 pontos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A N1 soma Projeto Fase 1, Projeto Fase 2, Prova 1 Parte 1 e Prova 1 Parte 2.',
    feedbackWrong: 'A N1 é formada por duas fases de projeto de 2 pontos e duas partes de prova de 3 pontos.',
  },
  {
    id: 'apbd-q3',
    exam: 'prova1',
    question: '3. Em um projeto de banco de dados, o que é o esquema?',
    options: [
      'Um backup temporário usado antes do commit',
      'O espaço lógico que reúne objetos da aplicação, como tabelas, visões e índices',
      'Uma consulta salva usada apenas para leitura',
      'Um comando para desfazer alterações em uma transação',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. O esquema organiza os objetos relacionados ao mesmo domínio de dados.',
    feedbackWrong: 'O esquema é o agrupamento lógico dos objetos da aplicação, como tabelas, visões e índices.',
  },
  {
    id: 'apbd-q4',
    exam: 'prova1',
    question: '4. Por que configurar a versão do SGBD no Data Modeler antes de gerar o SQL?',
    options: [
      'Porque a versão influencia recursos disponíveis, tipos aceitos e formato do SQL gerado',
      'Porque impede a criação de chaves estrangeiras',
      'Porque substitui automaticamente a necessidade de modelagem',
      'Porque transforma toda tabela em visão',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A configuração da versão evita SQL incompatível e retrabalho.',
    feedbackWrong: 'A versão do SGBD influencia recursos, tipos e formato do SQL gerado pela ferramenta.',
  },
  {
    id: 'apbd-q5',
    exam: 'prova1',
    question: '5. Qual padrão de nomenclatura está coerente com uma chave estrangeira?',
    options: ['PK_CLIENTE', 'FK_CLIENTE_PEDIDO', 'CK_PEDIDO_STATUS', 'IDX_PEDIDO_DATA'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. FK_{pai}_{filho} é um padrão frequente para chaves estrangeiras.',
    feedbackWrong: 'Para chave estrangeira, o padrão indicado é semelhante a FK_{pai}_{filho}.',
  },
  {
    id: 'apbd-q6',
    exam: 'prova1',
    question: '6. Qual é a principal vantagem de usar domínios na modelagem?',
    options: [
      'Eliminar todas as restrições de integridade',
      'Padronizar tipo, validação e regra recorrente em várias colunas',
      'Criar automaticamente backups do banco',
      'Executar consultas sem necessidade de índices',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Domínios reduzem repetição e inconsistência em definições comuns.',
    feedbackWrong: 'Domínios servem para padronizar definições reutilizáveis, como tipo e validação.',
  },
  {
    id: 'apbd-q7',
    exam: 'prova1',
    question: '7. Ao criar uma tabela robusta, quais elementos devem ser considerados além da lista de colunas?',
    options: [
      'Somente o nome físico da tabela',
      'Chave primária, restrições únicas, chaves estrangeiras, obrigatoriedade e validações',
      'Apenas a ordem visual das caixas no diagrama',
      'Somente comentários, sem constraints',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Essas regras fazem o banco proteger a integridade dos dados.',
    feedbackWrong: 'A tabela deve nascer com regras de integridade, como PK, FK, unique, not null e checks.',
  },
  {
    id: 'apbd-q8',
    exam: 'prova1',
    question: '8. Qual comando é usado no Oracle para alterar a definição de uma tabela já existente?',
    options: ['CREATE VIEW', 'ALTER TABLE', 'NEXTVAL', 'COMMIT'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. ALTER TABLE permite ADD, MODIFY e DROP COLUMN.',
    feedbackWrong: 'Para modificar uma tabela existente, usa-se ALTER TABLE.',
  },
  {
    id: 'apbd-q9',
    exam: 'prova1',
    question: '9. Qual descrição melhor define uma visão em banco de dados?',
    options: [
      'Uma sequência de números para chave primária',
      'Uma consulta salva que apresenta dados de forma lógica sem armazená-los diretamente',
      'Um índice obrigatório para toda chave estrangeira',
      'Uma partição física criada apenas por hash',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A visão funciona como camada lógica de leitura ou acesso.',
    feedbackWrong: 'Uma visão é uma consulta salva usada para filtrar, simplificar ou proteger o acesso aos dados.',
  },
  {
    id: 'apbd-q10',
    exam: 'prova1',
    question: '10. Para que uma sequence é usada no Oracle?',
    options: [
      'Gerar valores numéricos únicos de forma automática',
      'Criar comentários para colunas',
      'Dividir dados por regiões geográficas',
      'Impedir qualquer atualização em uma tabela',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Sequences são comuns para gerar identificadores usados em chaves.',
    feedbackWrong: 'Sequences geram números automaticamente, normalmente consumidos com NEXTVAL.',
  },
  {
    id: 'apbd-q11',
    exam: 'prova1',
    question: '11. Em qual cenário um índice bitmap tende a ser mais adequado?',
    options: [
      'Tabela transacional com coluna altamente seletiva e muitas atualizações',
      'Coluna de baixa cardinalidade em consultas analíticas com combinação de filtros',
      'Tabela pequena que nunca é consultada',
      'Coluna de texto livre com valores praticamente únicos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Bitmap combina com baixa cardinalidade e cargas mais analíticas.',
    feedbackWrong: 'Bitmap é mais apropriado para baixa cardinalidade e consultas analíticas com vários filtros.',
  },
  {
    id: 'apbd-q12',
    exam: 'prova1',
    question: '12. Qual é a finalidade do particionamento de tabelas?',
    options: [
      'Dividir dados em partes menores para facilitar gestão e melhorar desempenho',
      'Remover a necessidade de chaves primárias',
      'Transformar tabelas em sequences',
      'Desativar constraints para acelerar inserts',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A aplicação continua vendo uma tabela única, mas o banco administra partes menores.',
    feedbackWrong: 'Particionamento divide dados em partes menores, ajudando consultas, cargas e manutenção.',
  },
];
