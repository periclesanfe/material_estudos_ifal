import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const FDBD_GUIDE_CONTEXT = `
GUIA COMPLETO DE FUNDAMENTOS DE BANCO DE DADOS (FDBD) - Resumo:

1. A DISCIPLINA: FDBD (3º período, 80h) percorre a trilha clássica de banco de dados em nove unidades: conceitos iniciais e SGBD → arquitetura → modelo ER → modelo EER → modelo relacional e restrições de integridade → regras de conversão ER/EER para relacional → normalização → álgebra relacional → SQL (DDL, DML, DTL e DQL, com o maior bloco dedicado ao DQL). Avaliações da turma 2023.1 (Profa. Wladia Bessa): 1ª prova (conceitos, arquitetura, ER, EER, relacional e transformação), 2ª prova (normalização, álgebra relacional e SQL) e prova final (ER/EER, relacional, transformação, normalização e SQL). Livros-base: Rob & Coronel (Sistemas de Banco de Dados) e Elmasri & Navathe (Sistemas de Banco de Dados). Ambiente prático: XAMPP com MySQL e phpMyAdmin.

2. CONCEITOS INICIAIS: DADOS são fatos brutos, ainda não processados; INFORMAÇÃO é o resultado do processamento dos dados para revelar significado. BANCO DE DADOS é uma estrutura compartilhada e integrada que armazena os dados do usuário final e os METADADOS (dados sobre dados). Na definição de Elmasri, banco de dados é uma coleção de dados relacionados que representa um MINIMUNDO, é logicamente coerente e tem uma finalidade. SGBD é o conjunto de programas que gerencia a estrutura do banco e controla o acesso — facilita DEFINIR, CONSTRUIR, MANIPULAR e COMPARTILHAR bancos de dados. As 4 características da abordagem de banco (vs. sistemas de arquivos): natureza de AUTODESCRIÇÃO (o CATÁLOGO guarda a descrição/metadados), isolamento entre programas e dados (independência), suporte a MÚLTIPLAS VISÕES e compartilhamento multiusuário com controle de concorrência. Problemas do sistema de arquivos: programação extensiva, sem consultas ad hoc, ilhas de informação, redundância → INCONSISTÊNCIA e ANOMALIAS (de atualização, inserção e exclusão). O SISTEMA de banco de dados (≠ SGBD) tem cinco componentes: hardware, software, PESSOAS (administradores, DBA, projetistas, programadores, usuários finais), procedimentos e dados. As 8 funções do SGBD: dicionário de dados, armazenamento, transformação e apresentação, segurança, controle de acesso multiusuário, backup e recuperação, integridade, linguagens de acesso (SQL é o padrão). Quando NÃO usar um SGBD: aplicações simples e estáveis, tempo real rígido, sistemas embarcados, sem acesso multiusuário.

3. ARQUITETURA: MODELO DE DADOS é uma representação (geralmente gráfica) que abstrai estruturas reais; categorias: conceituais (alto nível), representativos/de implementação (usados nos SGBDs) e físicos. ESQUEMA é a descrição do banco (muda raramente, diagrama de esquema); INSTÂNCIA/ESTADO é o conteúdo em um momento (estado vazio → inicial → atual; o SGBD garante estados válidos). ARQUITETURA DE TRÊS ESQUEMAS (ANSI-SPARC): nível EXTERNO (visões dos usuários), CONCEITUAL (visão global, independente de hardware e software) e INTERNO (estruturas físicas do SGBD). INDEPENDÊNCIA LÓGICA de dados = alterar o esquema conceitual sem alterar os esquemas externos/aplicações; INDEPENDÊNCIA FÍSICA = alterar o esquema interno sem alterar o conceitual. Linguagens: DDL define esquemas; SDL define o interno; VDL define visões (na prática a DDL cumpre); DML manipula (alto nível/não procedural, como SQL, ou baixo nível/procedural, registro a registro). Classificação de SGBDs: por modelo de dados — relacional/SQL (dominante), objeto, NoSQL (CHAVE-VALOR: acesso rápido por chave única; DOCUMENTO: baseado em JSON; GRAFO: nós e arestas; COLUNAR: colunas agrupadas), XML nativo, hierárquico legado; por número de usuários (mono/multi); por distribuição (centralizado × distribuído homogêneo/heterogêneo). Arquiteturas centralizada e cliente/servidor de duas e três camadas. Evolução histórica: arquivos → hierárquico (árvore, só 1:M) → em rede (CODASYL/DBTG; esquema, subesquema) → RELACIONAL (Codd, 1970) → ER (Chen, 1976) → orientado a objetos → XML/NoSQL.

4. MODELO ENTIDADE-RELACIONAMENTO: ENTIDADE é uma coisa do mundo real com existência independente (o tipo/conjunto ≙ tabela); ATRIBUTOS são suas propriedades — simples/atômico, COMPOSTO (subdividível: nome = pnome+mnome+unome), MONOVALORADO ou MULTIVALORADO (vários valores: telefones; elipse dupla), ARMAZENADO ou DERIVADO (calculável: idade de data_nascimento; elipse tracejada), atributo-chave (identifica exclusivamente). RELACIONAMENTO associa entidades; GRAU = número de entidades participantes (unário/auto-relacionamento, binário, ternário). RAZÃO DE CARDINALIDADE: 1:1, 1:N, N:M; a notação (min,max) é mais precisa; PARTICIPAÇÃO total (linha dupla — toda instância participa) ou parcial. ENTIDADE FRACA: não tem chave própria; é identificada pela entidade proprietária através do RELACIONAMENTO DE IDENTIFICAÇÃO (losango duplo) e tem CHAVE PARCIAL (sublinhado tracejado); participação sempre total. Auto-relacionamento: DISCIPLINA é pré-requisito de DISCIPLINA; FUNCIONÁRIO gerencia FUNCIONÁRIO. TERNÁRIO ≠ três binários: FORNECEDOR fornece PEÇA a PROJETO não se decompõe sem perder semântica. Atributos DE RELACIONAMENTO: horas em TRABALHA_EM, ordem de autoria em AUTOR-ARTIGO. Dois dialetos na disciplina: Chen/Elmasri (losango, elipses, razão de cardinalidade, participação total/parcial) e pé de galinha/Rob&Coronel (conectividade, participação opcional ○ /obrigatória |, símbolos ○< (0,N), |< (1,N), || (1,1)).

5. MODELO EER (ESTENDIDO): SUPERCLASSE/SUBCLASSE com relação "é um"; a instância da subclasse É a mesma entidade da superclasse; HERANÇA de todos os atributos E relacionamentos. ESPECIALIZAÇÃO (top-down: dividir por característica — pode haver várias especializações da mesma superclasse) × GENERALIZAÇÃO (bottom-up: CARRO + CAMINHÃO → VEÍCULO; normalmente total). Restrições: DISJUNTA (d — cada instância em no máximo uma subclasse) × SOBREPOSTA (o); TOTAL (linha dupla — toda instância em pelo menos uma subclasse) × PARCIAL; as duas dimensões são INDEPENDENTES (4 combinações). Especialização definida por PREDICADO/condição, por ATRIBUTO (discriminador, ex. EMP_TYPE) ou pelo USUÁRIO. Motivação: evitar NULOS de atributos exclusivos (licença de piloto só para pilotos). HIERARQUIA (herança simples, árvore) × RETICULADO (subclasse compartilhada com herança múltipla — o atributo herdado por dois caminhos entra uma vez). CATEGORIA (tipo UNIÃO): subconjunto da UNIÃO de superclasses diferentes (PESSOA ∪ BANCO ∪ EMPRESA → PROPRIETÁRIO); a instância pertence a UMA das superclasses e a herança é SELETIVA — diferente da subclasse compartilhada (interseção, herda de todas). ENTIDADE ASSOCIATIVA/AGREGAÇÃO: quando um relacionamento precisa se relacionar (o ER puro não suporta relacionamento entre relacionamentos) — exemplo da professora: CRIMINOSO assassina VÍTIMA (N:M) e o fato do assassinato liga-se a ARMA. Escolha de chave primária: única, sem nulos, NÃO intuitiva, imutável, preferencialmente numérica de um atributo; chave SURROGATE quando a natural é longa/semântica.

6. MODELO RELACIONAL: RELAÇÃO = tabela bidimensional; formalmente r(R) ⊆ dom(A1) × ... × dom(An); TUPLA = linha (ocorrência), ATRIBUTO = coluna, DOMÍNIO = faixa de valores permitidos por coluna; ordem de linhas/colunas irrelevante; cada célula um valor único. Hierarquia de chaves: SUPERCHAVE (identifica exclusivamente) ⊃ CHAVE CANDIDATA (superchave MÍNIMA — tirar qualquer atributo quebra a unicidade) ⊃ CHAVE PRIMÁRIA (a escolhida; NUNCA nula); chave ESTRANGEIRA (valores coincidem com PK de outra tabela OU são nulos); chave secundária (recuperação); chave composta. NULL: valor desconhecido, ausente ou não aplicável; proibido na PK; atrapalha COUNT/AVG/SUM. REGRAS DE INTEGRIDADE: de ENTIDADE (PK única e sem nulos) e REFERENCIAL (toda FK não nula referencia uma PK EXISTENTE; impede apagar linha referenciada). Relacionamento 1:M é a norma (FK no lado M); 1:1 é raro; M:N NÃO se implementa diretamente — vira entidade composta/tabela de ligação com PK composta (ALUNO–MATRÍCULA–TURMA). Dicionário de dados (metadados) e catálogo do sistema. Codd publicou as 12 regras do modelo relacional.

7. TRANSFORMAÇÃO ER/EER → RELACIONAL — OS 9 PASSOS: (1) entidade regular → tabela com atributos simples, identificador vira PK; (2) atributo MULTIVALORADO → nova tabela com o atributo + FK da dona; PK = atributo + FK; (3) entidade FRACA → tabela com FK da identificadora; PK = PK da identificadora + chave parcial; (4) relacionamento 1:1 → FK no lado de participação TOTAL (+ atributos do relacionamento); (5) relacionamento 1:N → FK no lado N; (6) relacionamento N:M → NOVA tabela com as duas FKs; PK = combinação das FKs (+ atributos do relacionamento); (7) ternário/n-ário → nova tabela com FKs de TODAS as participantes; PK = todas as FKs; (8) especialização/generalização → tabela por subclasse com PK = FK = PK da superclasse; (9) agregação → tabela do relacionamento agregado; o relacionamento da agregação com a terceira entidade segue a cardinalidade. Alternativas de Navathe para herança: (1) superclasse + uma tabela por subclasse (vale sempre); (2) só subclasses (exige total e disjunta); (3) tabela única com atributo tipo (disjuntas; nulos se parcial); (4) tabela única com flags booleanos (sobrepostas). Exemplo oficial da disciplina (banco): AGENCIA fraca com PK composta (codigo_banco + num_agencia); CONTAS com especialização Total e sObreposta ("T,O") em CONTA_CORRENTE/CONTA_POUPANÇA (PK = FK); TRANSAÇÃO e PAGAMENTO fracas; TEM e FAZ como tabelas M:N (cpf + num_conta / cpf + num_emprestimo). ENGENHARIA REVERSA (relacional → conceitual), 4 passos: (1) identificar a construção pela PK — PK = duas FKs → relacionamento N:M; PK = mais de duas FKs → n-ário; PK inteira é uma FK → especialização; parte da PK é FK → entidade fraca; demais → entidade; (2) FK fora da PK → relacionamento 1:1 ou 1:N (cardinalidade pelo conteúdo); (3) colunas não-FK → atributos; (4) colunas da PK que não são FK → identificadores.

8. NORMALIZAÇÃO: processo por estágios que minimiza redundância e as anomalias de inserção, atualização e exclusão. DEPENDÊNCIA FUNCIONAL A → B: para cada valor de A aparece sempre o mesmo valor de B (A determinante, B dependente). DF TOTAL: depende de TODA a chave composta; DF PARCIAL: depende só de parte; DF TRANSITIVA: atributo não-chave depende de outro não-chave. 1FN: elimina grupos de valores repetidos e atributos compostos/multivalorados (tabela em formato relacional com PK). 2FN: 1FN sem dependências parciais (tabela com PK simples está automaticamente na 2FN). 3FN: 2FN sem dependências transitivas (o determinante da transitiva vira PK de nova tabela). BCNF: todo determinante é chave candidata (difere da 3FN só com múltiplas chaves candidatas). Exemplo condutor da professora — PEDIDO: da relação não normalizada até a 3FN com 5 tabelas (PEDIDO, ITEM_DO_PEDIDO, PRODUTO, CLIENTE, VENDEDOR); as transitivas eram endereço/cidade/UF/CGC dependendo de cliente e nomevendedor dependendo de codvendedor. Exemplo do livro: 1FN(PROJ_NUM, EMP_NUM, ...) com parciais PROJ_NUM→PROJ_NAME e EMP_NUM→EMP_NAME/JOB_CLASS/CHG_HOUR e transitiva JOB_CLASS→CHG_HOUR → 3FN com PROJETO, FUNCIONÁRIO, CARGO e DESIGNAÇÃO. Na prova: FUNCIONARIO com grupo repetido de cargos e dependentes → 3FN = FUNCIONARIO + CARGO + DEPENDENTE (PK composta MATR + NOME_DEPENDENTE). DESNORMALIZAÇÃO: aceitar forma normal mais baixa por desempenho, pagando com redundância.

9. ÁLGEBRA RELACIONAL: linguagem formal de consulta. Dois grupos (taxonomia da professora): operações de CONJUNTO — UNIÃO ∪ (elimina duplicatas), INTERSEÇÃO ∩, DIFERENÇA − (exigem UNIÃO-COMPATIBILIDADE: mesmo número de atributos e domínios; a ordem importa na diferença) e PRODUTO CARTESIANO × (não exige compatibilidade; "sozinho não tem sentido") — e operações de BANCO — SELEÇÃO σ (filtra LINHAS por condição), PROJEÇÃO π (filtra COLUNAS, eliminando duplicatas) e JUNÇÃO ⋈ (produto cartesiano seguido de seleção). EQUIJUNÇÃO usa só igualdade; JUNÇÃO NATURAL * exige atributos de mesmo nome (usa-se RENOMEAÇÃO ρ antes). JUNÇÃO THETA: comparadores {=, <, ≤, >, ≥, ≠}. DIVISÃO ÷ responde "para todos" (empregados que trabalham em TODOS os projetos de Smith); R(Z) ÷ S(X) exige X ⊂ Z. FUNÇÕES AGREGADAS ℱ com agrupamento (DNO ℱ COUNT SSN, AVG SALARIO). JUNÇÕES EXTERNAS preservam tuplas sem correspondente com NULL (esquerda ⟕, direita ⟖, completa). CONJUNTO COMPLETO: {σ, π, ∪, −, ×} — junção, interseção e divisão são deriváveis. Composição: π_nome(σ_dept=5(EMPREGADO)).

10. SQL — DDL: o SQL nasceu na IBM nos anos 70 (SEQUEL) e virou padrão ANSI em 1986 (revisões SQL92, SQL:1999, 2003...). Cinco sublinguagens: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DTL (COMMIT, ROLLBACK) e DCL (GRANT, REVOKE). CREATE TABLE define colunas com tipos (INT/NUMBER, CHAR fixo, VARCHAR variável, DATE, DECIMAL) e RESTRIÇÕES: PRIMARY KEY, FOREIGN KEY ... REFERENCES, NOT NULL, UNIQUE (chave alternativa), CHECK (domínio: CHECK (SEMESTRE = 1 OR SEMESTRE = 2)), DEFAULT. Constraints podem ser NOMEADAS (CONSTRAINT nome ...) e declaradas em nível de coluna ou de tabela (PK composta exige nível de tabela). ALTER TABLE ADD (coluna/constraint), MODIFY (tipo/NOT NULL) e DROP; constraints não se modificam — só se adicionam e removem. DROP TABLE apaga a tabela. Ações referenciais da FK: ON DELETE/ON UPDATE com CASCADE, SET NULL ou SET DEFAULT.

11. SQL — DML E TRANSAÇÕES: INSERT INTO tabela [(colunas)] VALUES (...); com lista de colunas parcial, as omitidas ficam NULL/DEFAULT; INSERT ... SELECT copia linhas. UPDATE tabela SET coluna = valor WHERE condição (sem WHERE altera TUDO); pode usar subconsulta no SET e no WHERE. DELETE FROM tabela WHERE condição. TRANSAÇÃO = conjunto de instruções DML tratado como unidade; propriedades ACID: ATOMICIDADE (tudo ou nada), CONSISTÊNCIA (estado válido → estado válido), ISOLAMENTO (transações não interferem) e DURABILIDADE (após o commit, persiste mesmo com falha) — exemplo canônico: transferência de R$ 50 entre contas. COMMIT confirma; ROLLBACK desfaz; SAVEPOINT nome marca um ponto e ROLLBACK TO SAVEPOINT desfaz até ele (exercício da aula: nota vira 8, savepoint, +1, rollback to savepoint, commit → resultado final 8). Comandos DDL causam commit implícito. A FK é validada em INSERT, UPDATE e DELETE; PK/UNIQUE/NOT NULL/CHECK em INSERT e UPDATE.

12. SQL — DQL BÁSICO: SELECT [DISTINCT] colunas FROM tabela [WHERE] [GROUP BY] [HAVING] [ORDER BY]. Aliases com AS. Operadores: comparação, BETWEEN...AND (inclusivo), IN (lista), IS NULL (nunca = NULL), LIKE com % (qualquer sequência) e _ (um caractere). Precedência: AND antes de OR — parênteses mudam o resultado. ORDER BY coluna/posição/alias, ASC padrão, DESC. Funções de linha (Oracle): ROUND/TRUNC (n negativo opera à esquerda da vírgula), MOD; UPPER/LOWER/INITCAP, LENGTH, SUBSTR, INSTR, LPAD/RPAD, REPLACE; NVL substitui NULL; CASE/DECODE para lógica condicional. MySQL da prática: CURDATE(), SYSDATE(), DATE_ADD, DATEDIFF (dias entre datas), TIMESTAMPDIFF(unidade,...), EXTRACT(DAY|MONTH|YEAR FROM data), DATE_FORMAT com %d/%m/%Y/%M/%W, MONTHNAME/DAYNAME, LIMIT; idade ≈ YEAR(CURDATE()) − YEAR(nascimento). FUNÇÕES DE AGREGAÇÃO: COUNT, SUM, AVG, MAX, MIN — ignoram NULL, exceto COUNT(*) que conta linhas; GROUP BY agrupa (toda coluna do SELECT fora de função de grupo DEVE estar no GROUP BY); HAVING filtra GRUPOS (função de grupo não pode no WHERE).

13. SQL — JUNÇÕES, CONJUNTOS E SUBCONSULTAS: junção em duas sintaxes — implícita (FROM A, B WHERE A.x = B.x) e explícita (A INNER JOIN B ON A.x = B.x); n tabelas exigem pelo menos n−1 condições de junção (sem elas: produto cartesiano). OUTER JOIN preserva linhas sem correspondente com NULL: LEFT (todas da esquerda), RIGHT, FULL. AUTOJUNÇÃO usa a mesma tabela com dois aliases (empregado × supervisor: E.super = S.ident). NATURAL JOIN/USING juntam por colunas homônimas. Operadores de conjunto: UNION (elimina duplicatas), UNION ALL, INTERSECT, MINUS/EXCEPT — mesmo número e tipos de colunas; ORDER BY só no final. SUBCONSULTAS: SELECT dentro de WHERE/HAVING/FROM/SELECT, entre parênteses; de LINHA ÚNICA (comparadores simples: salário > (SELECT AVG...)) ou de MÚLTIPLAS LINHAS (IN, ANY, ALL); ARMADILHA: NOT IN com NULL na subconsulta não retorna nenhuma linha (corrigir com NVL ou NOT EXISTS); subconsulta CORRELACIONADA referencia a consulta externa e executa uma vez por linha; EXISTS/NOT EXISTS testa existência (para na primeira linha). Erros clássicos a evitar (vistos no gabarito da turma): "quem NÃO tem dependente" com != em produto cartesiano (o certo é NOT IN/NOT EXISTS/LEFT JOIN IS NULL) e junção pela coluna errada.

14. EXEMPLOS RESOLVIDOS OFICIAIS DA TURMA: conversão do modelo do jogo educacional (9 tabelas: 3 M:N viram tabelas de ligação com PK composta, 3 relacionamentos 1:N viram FK no lado N); modelo bancário EER completo (fracas, especialização T,O, dois M:N); atividade DDL de ALUNO/DISCIPLINA/INSCRICAO com CHECK e PK composta; questões da 2ª prova sobre o banco DESENVOL (FUNC, DEPTO, PROJ): CREATE com FK, coluna calculada VL_SAL*12, agregações com junção, GROUP BY, NOT IN com subconsulta e UPDATE com subconsulta.
`;

export const FDBD_TOPICS: QuizTopicOption[] = [
    {
        value: 'fundamentos-arquitetura',
        label: 'Conceitos de BD, SGBD e arquitetura',
        prompt:
            'Conceitos iniciais e arquitetura de banco de dados da disciplina FDBD: diferença entre dado e informação, banco de dados e metadados, minimundo, definição de SGBD (definir, construir, manipular, compartilhar), as quatro características da abordagem de banco de dados (autodescrição/catálogo, isolamento programa-dados, múltiplas visões, compartilhamento multiusuário), problemas dos sistemas de arquivos, redundância, inconsistência e anomalias de inserção/atualização/exclusão, os cinco componentes do sistema de banco de dados, as oito funções do SGBD, quando não usar um SGBD, atores (DBA, projetista, usuário final), modelos de dados conceituais/representativos/físicos, esquema versus instância/estado, arquitetura de três esquemas ANSI-SPARC (externo, conceitual, interno), independência lógica e física de dados, linguagens DDL/SDL/VDL/DML, classificação de SGBDs por modelo de dados incluindo NoSQL (chave-valor, documento, grafo, colunar), arquiteturas centralizada e cliente/servidor, e a evolução histórica dos modelos (hierárquico, rede, relacional de Codd 1970, ER de Chen 1976).',
    },
    {
        value: 'modelagem-er-eer',
        label: 'Modelagem ER e EER',
        prompt:
            'Modelagem conceitual da disciplina FDBD: entidades e conjuntos de entidades, atributos simples/compostos/multivalorados/derivados/chave, relacionamentos e seus graus (unário/auto-relacionamento, binário, ternário e por que ternário não equivale a três binários), razão de cardinalidade 1:1/1:N/N:M, notação (min,max), participação total e parcial, entidade fraca com chave parcial e relacionamento de identificação, atributos de relacionamento, notações de Chen e pé de galinha; EER: superclasse e subclasse, herança de atributos e relacionamentos, especialização (top-down) e generalização (bottom-up), restrições disjunta/sobreposta e total/parcial (independentes entre si), especialização definida por predicado/atributo/usuário, discriminador, hierarquia versus reticulado e herança múltipla, categoria (tipo união com herança seletiva) versus subclasse compartilhada, entidade associativa/agregação (relacionamento que se relaciona), motivação de evitar nulos, escolha de chave primária e chaves surrogate.',
    },
    {
        value: 'relacional-transformacao-normalizacao',
        label: 'Modelo relacional, transformação e normalização',
        prompt:
            'Modelo lógico da disciplina FDBD: características das tabelas relacionais, tupla/atributo/domínio, hierarquia de chaves (superchave, candidata, primária, estrangeira, composta), NULL e seus problemas, integridade de entidade e integridade referencial, M:N implementado por tabela de ligação; os 9 passos da transformação ER/EER→relacional (entidade regular, atributo multivalorado, entidade fraca com PK composta, 1:1 com FK no lado de participação total, 1:N com FK no lado N, N:M com tabela própria de PK composta, ternário, especialização com PK=FK, agregação), as quatro alternativas de Navathe para herança, engenharia reversa (identificar a construção ER pela estrutura da chave primária); normalização: anomalias, dependência funcional total/parcial/transitiva, primeira/segunda/terceira formas normais com os passos de conversão, BCNF (todo determinante é chave candidata), desnormalização e o exemplo do PEDIDO normalizado em cinco tabelas.',
    },
    {
        value: 'algebra-sql',
        label: 'Álgebra relacional e SQL',
        prompt:
            'Consultas na disciplina FDBD: álgebra relacional com operações de conjunto (união, interseção, diferença com união-compatibilidade, produto cartesiano) e de banco (seleção σ sobre linhas, projeção π sobre colunas, junção ⋈, equijunção e junção natural, junção theta, renomeação ρ, divisão para consultas "para todos", funções agregadas, junções externas, conjunto completo {σ,π,∪,−,×}); SQL: as cinco sublinguagens (DDL, DML, DQL, DTL, DCL), CREATE TABLE com constraints (PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK, DEFAULT), ALTER e DROP, ações referenciais CASCADE/SET NULL, INSERT/UPDATE/DELETE inclusive com subconsultas, transações e propriedades ACID, COMMIT/ROLLBACK/SAVEPOINT, SELECT com WHERE (BETWEEN, IN, IS NULL, LIKE com % e _), precedência de AND e OR, ORDER BY, funções de linha Oracle e MySQL (ROUND, TRUNC, SUBSTR, NVL, DATE_FORMAT, DATEDIFF), agregações COUNT/SUM/AVG/MAX/MIN com GROUP BY e HAVING, junções nas duas sintaxes, OUTER JOIN, autojunção, UNION/INTERSECT/MINUS, e subconsultas de linha única e múltiplas linhas (IN, ANY, ALL, EXISTS, correlacionadas, armadilha do NOT IN com NULL).',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Fundamentos de Banco de Dados: conceitos de dado, informação, banco de dados, metadados e SGBD; abordagem de banco versus sistemas de arquivos; arquitetura de três esquemas e independência de dados; modelagem ER (entidades, atributos, relacionamentos, cardinalidades, entidades fracas) e EER (especialização/generalização, disjunção e completude, categorias, entidade associativa); modelo relacional (chaves, integridade de entidade e referencial); os 9 passos de transformação do conceitual para o relacional e engenharia reversa; normalização até a 3FN com dependências funcionais; álgebra relacional (seleção, projeção, junção, operações de conjunto, divisão); e SQL completo — DDL com constraints, DML e transações ACID, DQL com filtros, funções, agregação, junções, operadores de conjunto e subconsultas.',
    },
];

export const FDBD_EXAMS: ExamDefinition[] = [
    {
        id: 'p1',
        label: '1ª Prova',
        description: 'Conceitos e arquitetura de BD, modelo ER, EER, modelo relacional e transformação para o relacional.',
    },
    {
        id: 'p2',
        label: '2ª Prova',
        description: 'Normalização, álgebra relacional e SQL (DDL, DML, DTL e DQL).',
    },
    {
        // Rótulo "Prova Final" para não colidir com a avaliação sintética "Final (tudo)"
        // que a plataforma injeta no seletor; esta é a prova de 08/11 com lista própria.
        id: 'final',
        label: 'Prova Final',
        description: 'Modelo ER/EER, relacional, transformação, normalização e SQL.',
    },
];

export const FDBD_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'sistemas-bd', title: 'Banco de Dados e SGBD', shortTitle: 'BD e SGBD', exams: ['p1'] },
    { id: 'arquitetura', title: 'Arquitetura e Modelos de Dados', shortTitle: 'Arquitetura', exams: ['p1'] },
    { id: 'modelo-er', title: 'Modelo Entidade-Relacionamento', shortTitle: 'Modelo ER', exams: ['p1', 'final'] },
    { id: 'modelo-eer', title: 'Modelo EER', shortTitle: 'EER', exams: ['p1', 'final'] },
    { id: 'modelo-relacional', title: 'Modelo Relacional e Integridade', shortTitle: 'Relacional', exams: ['p1', 'final'] },
    { id: 'transformacao', title: 'Do Conceitual ao Relacional', shortTitle: 'Transformação', exams: ['p1', 'final'] },
    { id: 'normalizacao', title: 'Normalização', shortTitle: 'Normalização', exams: ['p2', 'final'] },
    { id: 'algebra', title: 'Álgebra Relacional', shortTitle: 'Álgebra', exams: ['p2'] },
    { id: 'sql-ddl', title: 'SQL — DDL', shortTitle: 'SQL DDL', exams: ['p2', 'final'] },
    { id: 'sql-dml-dtl', title: 'SQL — DML e Transações', shortTitle: 'DML e DTL', exams: ['p2', 'final'] },
    { id: 'sql-dql', title: 'SQL — Consultas (DQL)', shortTitle: 'SQL DQL', exams: ['p2', 'final'] },
    { id: 'sql-joins', title: 'SQL — Junções e Subconsultas', shortTitle: 'JOINs', exams: ['p2', 'final'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type FdbdSectionId = (typeof FDBD_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['p1'],
        question:
            'Um relatório mostra "42" numa célula e, ao lado, "42 pedidos entregues em agosto, 15% acima da meta". Como classificar cada um, no vocabulário da disciplina?',
        options: [
            'Ambos são dados, pois vêm do banco',
            'O primeiro é dado (fato bruto); o segundo é informação (dado processado com significado e contexto)',
            'O primeiro é metadado; o segundo é dado',
            'Ambos são informação, pois estão num relatório',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Dados são fatos brutos, ainda não processados; informação é o resultado do processamento que revela significado — exige contexto. Metadados são outra coisa: dados que descrevem os dados (tipos, restrições, relacionamentos), guardados no catálogo.',
        feedbackWrong:
            'O "42" sozinho é DADO (fato bruto); a frase com contexto e comparação é INFORMAÇÃO (dado processado com significado). Metadados seriam a descrição da estrutura — "a coluna pedidos é do tipo inteiro" — armazenada no catálogo do SGBD.',
    },
    {
        id: 'q2',
        exams: ['p1'],
        question:
            'Qual característica da abordagem de banco de dados permite que o próprio sistema guarde a descrição completa da estrutura e das restrições do banco?',
        options: [
            'Compartilhamento multiusuário',
            'A natureza de AUTODESCRIÇÃO, materializada no CATÁLOGO do SGBD',
            'Suporte a múltiplas visões',
            'Independência de hardware',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A autodescrição é a primeira das quatro características de Elmasri: o catálogo armazena os metadados (estrutura, tipos, restrições), usados tanto pelo software do SGBD quanto pelos usuários. As outras características: isolamento programa-dados, múltiplas visões e compartilhamento multiusuário.',
        feedbackWrong:
            'É a AUTODESCRIÇÃO: o sistema contém o banco E sua descrição completa, armazenada no CATÁLOGO. As demais características da abordagem de BD são o isolamento entre programas e dados (abstração), o suporte a múltiplas visões e o compartilhamento multiusuário com controle de concorrência.',
    },
    {
        id: 'q3',
        exams: ['p1'],
        question:
            'Dois arquivos independentes guardam o endereço do mesmo cliente; um é atualizado, o outro não. Passam a existir duas versões conflitantes. Como a disciplina nomeia esse problema e sua causa?',
        options: [
            'Deadlock, causado por concorrência',
            'Inconsistência de dados, causada por REDUNDÂNCIA não controlada — terreno das anomalias de atualização, inserção e exclusão',
            'Anomalia de junção, causada por normalização excessiva',
            'Violação de integridade referencial, causada por FK inválida',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Redundância (mesmos dados desnecessariamente em locais diferentes) gera inconsistência (versões conflitantes) e anomalias de dados — o problema clássico das "ilhas de informação" dos sistemas de arquivos, que a abordagem de banco de dados veio controlar.',
        feedbackWrong:
            'É INCONSISTÊNCIA causada por REDUNDÂNCIA descontrolada. Quando os mesmos dados vivem em lugares diferentes sem controle, atualizações parciais criam versões conflitantes — e surgem as anomalias de atualização, inserção e exclusão. É a motivação histórica do SGBD e, mais tarde, da normalização.',
    },
    {
        id: 'q4',
        exams: ['p1'],
        question: 'Qual a diferença entre SGBD e sistema de banco de dados?',
        options: [
            'São sinônimos',
            'O SGBD é o software; o SISTEMA de banco de dados é o conjunto de cinco componentes: hardware, software, pessoas, procedimentos e dados',
            'O sistema é o software e o SGBD é o hardware',
            'O SGBD inclui as pessoas; o sistema não',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — pegadinha clássica de prova. O SGBD é um dos softwares dentro do sistema; o SISTEMA de banco de dados abrange hardware, software (SO + SGBD + aplicativos), PESSOAS (DBA, projetistas, programadores, usuários), procedimentos e os próprios dados.',
        feedbackWrong:
            'Não são sinônimos: o SGBD é apenas o SOFTWARE gerenciador. O SISTEMA de banco de dados é o todo, com cinco componentes — hardware, software, pessoas, procedimentos e dados. As pessoas (DBA, projetistas, usuários) fazem parte do sistema, não do SGBD.',
    },
    {
        id: 'q5',
        exams: ['p1'],
        question:
            'A equipe reestrutura o esquema conceitual do banco (novas entidades e relacionamentos), e as aplicações continuam funcionando sem alteração, pois enxergam apenas suas visões. Qual propriedade da arquitetura de três esquemas está em ação?',
        options: [
            'Independência física de dados',
            'Independência LÓGICA de dados: alterar o esquema conceitual sem afetar os esquemas externos e as aplicações',
            'Autodescrição',
            'Atomicidade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato (definição de Elmasri, a canônica). Independência LÓGICA: mudanças no esquema CONCEITUAL não afetam os esquemas EXTERNOS/aplicações. Independência FÍSICA: mudanças no esquema INTERNO (armazenamento, índices) não afetam o conceitual. A física é comum; a lógica é a mais difícil de alcançar.',
        feedbackWrong:
            'É a independência LÓGICA: o esquema CONCEITUAL mudou e os esquemas externos/aplicações sobreviveram. A independência FÍSICA seria alterar o esquema INTERNO (organização em disco, índices) sem tocar no conceitual. Guarde o par: lógica ↔ conceitual; física ↔ interno.',
    },
    {
        id: 'q6',
        exams: ['p1'],
        question:
            'Um sistema guarda perfis como documentos JSON aninhados, consultáveis por campos internos. Na classificação de SGBDs por modelo de dados, esse banco é:',
        options: [
            'Relacional, porque JSON tem estrutura',
            'NoSQL de DOCUMENTO — armazenamento baseado em JSON',
            'NoSQL chave-valor, porque cada perfil tem uma chave',
            'Hierárquico, porque o JSON é uma árvore',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Na classificação vista em aula, os NoSQL incluem: CHAVE-VALOR (acesso rápido por chave única, valor opaco), DOCUMENTO (JSON consultável pelos campos), GRAFO (nós e arestas) e COLUNAR (colunas agrupadas). Documentos JSON consultáveis = banco de documentos.',
        feedbackWrong:
            'É um banco NoSQL de DOCUMENTO: armazena JSON e permite consultar pelos campos internos. O chave-valor só recupera pelo identificador (o valor é opaco); o hierárquico é o modelo legado de árvore dos anos 60/70; e relacional exigiria tabelas com esquema fixo.',
    },
    {
        id: 'q7',
        exams: ['p1', 'final'],
        question:
            'No cadastro de professores, o nome é dividido em (pnome, mnome, unome) e há vários telefones por professor. Como o modelo ER classifica esses dois atributos?',
        options: [
            'Nome é derivado; telefones é composto',
            'Nome é COMPOSTO (subdividível em partes com significado); telefones é MULTIVALORADO (vários valores por entidade)',
            'Ambos são multivalorados',
            'Nome é chave; telefones é derivado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — os dois casos aparecem literalmente no exercício ER 1 da turma. Composto: subdividível em componentes com significado próprio (elipses filhas em Chen). Multivalorado: pode ter vários valores para a mesma entidade (elipse dupla). Derivado seria calculável de outro, como idade a partir de data de nascimento.',
        feedbackWrong:
            'Nome (pnome, mnome, unome) é atributo COMPOSTO; telefones é MULTIVALORADO. O derivado é outro conceito: um atributo calculável a partir de outros (idade ← data de nascimento, elipse tracejada). Na transformação para o relacional, o multivalorado vira tabela própria — o composto entra pelos componentes simples.',
    },
    {
        id: 'q8',
        exams: ['p1', 'final'],
        question:
            'DEPENDENTE não tem chave própria: é identificado pelo funcionário a quem pertence, mais seu nome. No vocabulário do ER, DEPENDENTE é uma:',
        options: [
            'Entidade associativa',
            'Entidade FRACA, com CHAVE PARCIAL (nome) e relacionamento de IDENTIFICAÇÃO com a entidade proprietária',
            'Especialização de FUNCIONÁRIO',
            'Categoria (tipo união)',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Entidade fraca: sem atributo-chave próprio, identificada pela entidade proprietária via relacionamento de identificação (losango duplo), com chave parcial (sublinhado tracejado) e participação sempre total. No relacional, sua PK vira composta: PK do proprietário + chave parcial (SSN + NOME).',
        feedbackWrong:
            'É uma entidade FRACA — o caso clássico do DEPENDENTE. Os sinais: sem chave própria, dependência de existência, chave parcial (nome distingue entre os dependentes do MESMO funcionário) e relacionamento de identificação. Na transformação, a PK composta é (chave do proprietário + chave parcial).',
    },
    {
        id: 'q9',
        exams: ['p1', 'final'],
        question:
            '"FORNECEDOR fornece PEÇA para PROJETO" foi modelado como um relacionamento ternário. Substituí-lo por três relacionamentos binários (fornecedor-peça, peça-projeto, fornecedor-projeto) preserva o significado?',
        options: [
            'Sim, todo ternário equivale a três binários',
            'NÃO: os binários dizem que as associações par a par existem, mas perdem o fato conjunto "F fornece a peça X ao projeto P"',
            'Sim, desde que se usem chaves compostas',
            'Não, porque relacionamentos ternários são proibidos no ER',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — ponto insistido nos slides da professora e do Elmasri. Saber que F pode fornecer X, que P usa X e que F atende P não diz QUEM forneceu X para P. O fato tri-partite só existe no ternário (que no relacional vira tabela com as três FKs como PK).',
        feedbackWrong:
            'NÃO equivale — é a pegadinha clássica. Os três binários registram associações par a par, mas o fato conjunto "F fornece a peça X ao projeto P" se perde. Por isso o ternário existe como construção própria e, na transformação, vira uma tabela com as três FKs formando a PK.',
    },
    {
        id: 'q10',
        exams: ['p1', 'final'],
        question:
            'Numa especialização de CONTAS em CONTA_CORRENTE e CONTA_POUPANÇA, o gabarito da turma anotou "T, O". O que isso significa?',
        options: [
            'Ternária e Ordenada',
            'TOTAL (toda conta pertence a pelo menos uma subclasse) e com SOBREPOSIÇÃO/Overlap (uma conta pode ser das duas)',
            'Temporária e Opcional',
            'Total e Disjunta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As duas restrições da especialização são INDEPENDENTES: completude (Total × Parcial) e disjunção (Disjunta × sObreposta). "T,O" = total com sobreposição: nenhuma conta fica fora das subclasses, e uma mesma conta pode ser corrente E poupança.',
        feedbackWrong:
            '"T, O" = Total + com sObreposição (Overlap). São as duas dimensões independentes da especialização: completude (total = linha dupla, toda instância em alguma subclasse; parcial = pode ficar de fora) e disjunção (disjunta = no máximo uma subclasse; sobreposta = pode estar em várias).',
    },
    {
        id: 'q11',
        exams: ['p1', 'final'],
        question:
            'PROPRIETÁRIO pode ser uma PESSOA, um BANCO ou uma EMPRESA — entidades de tipos completamente diferentes. Qual construção do EER modela isso, e como funciona a herança?',
        options: [
            'Subclasse compartilhada; herda de todas as superclasses',
            'CATEGORIA (tipo união): subconjunto da UNIÃO das superclasses; cada instância pertence a UMA delas e a herança é SELETIVA',
            'Especialização total disjunta; herda da superclasse única',
            'Agregação; não há herança',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A categoria é a união: PROPRIETÁRIO ⊆ PESSOA ∪ BANCO ∪ EMPRESA; cada proprietário é um dos três e herda APENAS os atributos daquela superclasse (herança seletiva). Contraste com a subclasse compartilhada (interseção): GERENTE_ENGENHARIA é engenheiro E gerente E assalariado, herdando de todos.',
        feedbackWrong:
            'É a CATEGORIA (tipo união): subconjunto da UNIÃO de superclasses distintas. A instância pertence a UMA das superclasses e herda seletivamente só os atributos dela. A subclasse compartilhada é o oposto (interseção — herança múltipla de todas). O Elmasri ainda avisa: categorias devem ser usadas com parcimônia.',
    },
    {
        id: 'q12',
        exams: ['p1', 'final'],
        question:
            'No exemplo da professora, CRIMINOSO assassina VÍTIMA (N:M) e é preciso registrar as ARMAS apreendidas de cada assassinato. Por que o ER básico não resolve, e qual a saída?',
        options: [
            'O ER não aceita N:M; basta trocar por 1:N',
            'O ER não suporta relacionamento ENTRE RELACIONAMENTOS; a saída é a ENTIDADE ASSOCIATIVA (agregação): o relacionamento "assassina" vira entidade e se liga a ARMA',
            'Basta colocar arma como atributo multivalorado de CRIMINOSO',
            'É preciso um relacionamento ternário obrigatório',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A arma não é do criminoso nem da vítima — é do FATO assassinato, que é um relacionamento. Como o ER não permite ligar relacionamento a entidade, promove-se o relacionamento a entidade associativa (agregação), que então se relaciona com ARMA. No relacional, a agregação vira tabela com PK composta, referenciada pela tabela de armas.',
        feedbackWrong:
            'A saída é a ENTIDADE ASSOCIATIVA (agregação). O dado "arma apreendida" pertence ao FATO do assassinato — o próprio relacionamento N:M. Como o ER não suporta relacionamento entre relacionamentos, o relacionamento vira entidade (o retângulo em volta do losango) e passa a poder se relacionar com ARMA.',
    },
    {
        id: 'q13',
        exams: ['p1', 'final'],
        question: 'Sobre a hierarquia de chaves do modelo relacional, qual afirmação está correta?',
        options: [
            'Toda superchave é chave candidata',
            'Chave candidata é uma superchave MÍNIMA; a primária é a candidata escolhida — e não admite valores nulos',
            'A chave primária pode ter nulos, desde que únicos',
            'Chave estrangeira é sempre parte da chave primária',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Superchave identifica exclusivamente (pode ter atributos sobrando); candidata é a superchave irredutível — remover qualquer atributo quebra a unicidade; primária é a candidata eleita, com a regra de ouro: nenhuma parte dela pode ser nula (integridade de entidade). FK pode ou não compor a PK.',
        feedbackWrong:
            'A cadeia é: SUPERCHAVE (identifica, talvez com sobra) ⊃ CANDIDATA (superchave mínima) ⊃ PRIMÁRIA (a escolhida, jamais nula). Nem toda superchave é candidata — (matrícula, nome) identifica, mas não é mínima. FK só integra a PK em casos específicos (entidades fracas, tabelas de ligação).',
    },
    {
        id: 'q14',
        exams: ['p1', 'final'],
        question:
            'Tentar excluir o corretor 502 falha porque três clientes o referenciam; e um cliente novo pode ser gravado sem corretor (FK nula). Quais regras estão em jogo?',
        options: [
            'Integridade de entidade nos dois casos',
            'Integridade REFERENCIAL: a FK deve apontar para uma PK EXISTENTE (bloqueia a exclusão) ou ser NULA (permite cliente sem corretor)',
            'Integridade de domínio e atomicidade',
            'Restrição CHECK e DEFAULT',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A integridade referencial exige que todo valor NÃO NULO de FK referencie uma PK existente — por isso não se apaga o corretor referenciado — e admite FK nula quando o relacionamento é opcional. A integridade de ENTIDADE é a outra regra: PK única e sem nulos.',
        feedbackWrong:
            'É a integridade REFERENCIAL, a regra da FK: valor não nulo deve corresponder a uma PK existente (impossível ter corretor inválido — e impossível excluir o corretor referenciado), mas NULL é permitido quando o vínculo é opcional. Integridade de entidade cuida da PK (única, sem nulos).',
    },
    {
        id: 'q15',
        exams: ['p1', 'final'],
        question: 'Por que um relacionamento N:M não pode ser implementado diretamente no modelo relacional, e qual a solução?',
        options: [
            'Porque o SQL não tem comando para isso; usa-se um índice',
            'Porque a FK teria de guardar VÁRIOS valores numa célula; cria-se uma TABELA DE LIGAÇÃO com as duas FKs formando a PK composta',
            'Porque N:M viola a 1FN; a solução é desnormalizar',
            'Pode ser implementado diretamente com duas FKs nas tabelas originais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Cada célula relacional guarda UM valor — uma FK no lado "muitos" não comporta a lista de correspondentes. A tabela de ligação (entidade composta) resolve: uma linha por par, PK = combinação das FKs, e os atributos do relacionamento (nota, horas) moram nela. É o passo 6 da transformação.',
        feedbackWrong:
            'O problema é estrutural: a FK numa das tabelas teria de armazenar vários valores, violando a atomicidade das células. A solução é a TABELA DE LIGAÇÃO: ALUNO—MATRÍCULA—TURMA, com PK composta pelas duas FKs e os atributos do relacionamento dentro dela. FKs nas tabelas originais só resolvem 1:N e 1:1.',
    },
    {
        id: 'q16',
        exams: ['p1', 'final'],
        question:
            'Na transformação para o relacional, um relacionamento 1:1 entre EMPREGADO e DEPARTAMENTO ("gerencia", com data de início) foi resolvido colocando SSN_GERENTE e data_inicio em DEPARTAMENTO. Por que ali?',
        options: [
            'Porque DEPARTAMENTO tem menos linhas',
            'Porque a regra manda pôr a FK no lado de participação TOTAL — todo departamento tem gerente, mas nem todo empregado gerencia',
            'Porque a FK deve sempre ficar na tabela criada primeiro',
            'Porque atributos de relacionamento só podem ficar em tabelas novas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — passo 4 da transformação. No 1:1, a FK vai para o lado de participação TOTAL: assim ela nunca fica nula (todo departamento tem gerente). Se fosse em EMPREGADO, a coluna ficaria nula para a maioria. Os atributos do relacionamento (data_inicio) acompanham a FK.',
        feedbackWrong:
            'A regra do 1:1 (passo 4): FK no lado de participação TOTAL. Todo DEPARTAMENTO tem gerente — a coluna SSN_GERENTE nunca fica nula ali; em EMPREGADO ela seria nula para quase todos. O atributo do relacionamento (data_inicio) viaja junto com a FK.',
    },
    {
        id: 'q17',
        exams: ['p1', 'final'],
        question:
            'Na engenharia reversa, você encontra uma tabela cuja chave primária inteira é composta por exatamente DUAS chaves estrangeiras. Que construção do modelo conceitual ela representa?',
        options: [
            'Uma entidade fraca',
            'Um relacionamento N:M entre as duas entidades referenciadas',
            'Uma especialização',
            'Um atributo multivalorado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — passo 1 da engenharia reversa, decidido pela estrutura da PK: duas FKs = relacionamento N:M; mais de duas FKs = n-ário; a PK inteira sendo UMA FK = especialização; PARTE da PK sendo FK = entidade fraca; demais casos = entidade.',
        feedbackWrong:
            'PK = duas FKs → relacionamento N:M (é a tabela de ligação vista ao contrário). O mapa completo do passo 1: mais de duas FKs → n-ário; PK inteira é uma única FK → especialização; parte da PK é FK → entidade fraca; nenhum desses → entidade regular.',
    },
    {
        id: 'q18',
        exams: ['p2', 'final'],
        question:
            'Em ITEM_DO_PEDIDO(nopedido, codprod → quant, descrição_produto), com PK composta (nopedido, codprod), a descrição do produto depende só de codprod. Que tipo de dependência é essa e que forma normal ela viola?',
        options: [
            'Transitiva; viola a 3FN',
            'PARCIAL (depende de parte da chave composta); viola a 2FN',
            'Total; não viola nada',
            'Multivalorada; viola a 4FN',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. DF parcial: o atributo depende de PARTE da PK composta (só codprod), não dela toda. É exatamente o que a 2FN proíbe — a solução do exemplo do PEDIDO foi extrair PRODUTO(codprod, descrição, unidade, valunit). Lembre: tabela com PK simples está automaticamente na 2FN.',
        feedbackWrong:
            'É dependência PARCIAL — descrição_produto depende só de codprod, uma parte da PK composta — e isso viola a 2FN. A transitiva é outro caso: não-chave dependendo de não-chave (nomevendedor ← codvendedor), que viola a 3FN. quant, por depender da chave inteira, tem DF total.',
    },
    {
        id: 'q19',
        exams: ['p2', 'final'],
        question:
            'Em EMPREGADOS(CodEmp, Nome, Cat, Sal), sabe-se que Cat → Sal (a categoria determina o salário). O que a 3FN manda fazer?',
        options: [
            'Nada: a tabela já está na 3FN',
            'Extrair a transitiva CodEmp → Cat → Sal: criar CATEGORIAS(Cat, Sal) e remover Sal de EMPREGADOS',
            'Transformar Cat em chave primária',
            'Fundir Cat e Sal num atributo composto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — exemplo literal dos slides da professora. Sal depende de Cat (não-chave), que depende de CodEmp: dependência TRANSITIVA. A 3FN exige extrair: o determinante da transitiva (Cat) vira PK de nova tabela CATEGORIAS(Cat, Sal), e EMPREGADOS mantém só a referência Cat.',
        feedbackWrong:
            'Há uma dependência TRANSITIVA: CodEmp → Cat → Sal — um não-chave (Sal) dependendo de outro não-chave (Cat). A 3FN manda decompor: CATEGORIAS(Cat, Sal) nasce com o determinante como PK, e EMPREGADOS(CodEmp, Nome, Cat) mantém Cat como FK. Sem isso, mudar o salário de uma categoria exigiria varrer todos os empregados.',
    },
    {
        id: 'q20',
        exams: ['p2', 'final'],
        question: 'Qual é a definição de BCNF (forma normal de Boyce-Codd), e quando ela difere da 3FN?',
        options: [
            'Sem grupos repetidos; difere sempre',
            'Todo DETERMINANTE é chave candidata; só difere da 3FN quando a tabela tem MAIS DE UMA chave candidata',
            'Sem dependências multivaloradas; difere quando há atributos derivados',
            'É sinônimo de 3FN',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. BCNF: todo atributo que determina outros (determinante) precisa ser chave candidata. Com uma única chave candidata, 3FN e BCNF coincidem; a diferença aparece quando um determinante "escondido" não é candidato — caso do exemplo A+B→C,D com C→B do livro.',
        feedbackWrong:
            'BCNF = todo determinante é CHAVE CANDIDATA (um caso especial, mais rígido, da 3FN). A distinção só importa quando existe mais de uma chave candidata na tabela — com uma só, estar na 3FN já garante BCNF. Grupos repetidos são assunto da 1FN; multivaloradas, da 4FN.',
    },
    {
        id: 'q21',
        exams: ['p2'],
        question: 'Na álgebra relacional, qual é a diferença entre SELEÇÃO (σ) e PROJEÇÃO (π)?',
        options: [
            'σ escolhe colunas; π escolhe linhas',
            'σ filtra LINHAS por uma condição; π escolhe COLUNAS (e elimina tuplas duplicadas no resultado)',
            'São sinônimos com notações diferentes',
            'σ junta tabelas; π as separa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. σ_condição(R) devolve as linhas que satisfazem a condição (subconjunto horizontal); π_atributos(R) devolve só as colunas listadas (subconjunto vertical), eliminando duplicatas. Compostas: π_nome(σ_dept=5(EMPREGADO)) — o resultado de uma operação alimenta a outra.',
        feedbackWrong:
            'σ (seleção) filtra LINHAS pela condição; π (projeção) escolhe COLUNAS e elimina duplicatas. O truque de memorização da disciplina: seleção = horizontal, projeção = vertical. E como toda operação devolve uma relação, elas se compõem: π_nome(σ_dno=4(EMPREGADO)).',
    },
    {
        id: 'q22',
        exams: ['p2'],
        question:
            'Para listar nome, CPF e idade de médicos, pacientes e funcionários de Florianópolis numa única resposta (exercício da turma), que operação usar e que condição as relações devem satisfazer?',
        options: [
            'Junção natural; ter atributos de mesmo nome',
            'UNIÃO (∪) das três consultas, exigindo UNIÃO-COMPATIBILIDADE: mesmo número de atributos com os mesmos domínios — por isso projeta-se (nome, CPF, idade) antes de unir',
            'Produto cartesiano; nenhuma condição',
            'Divisão; ter uma relação contida na outra',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — questão 8 do exercício do hospital. União (e diferença/interseção) exigem união-compatibilidade; como Médicos, Pacientes e Funcionários têm esquemas diferentes, primeiro projeta-se π_nome,CPF,idade sobre cada σ_cidade, e então une-se. É o padrão σ → π → ∪.',
        feedbackWrong:
            'É a UNIÃO das três consultas — e ela só é válida entre relações UNIÃO-COMPATÍVEIS (mesmo número de atributos, mesmos domínios). O caminho: selecionar por cidade em cada tabela, PROJETAR as três no mesmo esquema (nome, CPF, idade) e unir. Sem a projeção prévia, a união é ilegal.',
    },
    {
        id: 'q23',
        exams: ['p2'],
        question: 'Qual conjunto de operações da álgebra relacional é COMPLETO — isto é, capaz de expressar todas as demais?',
        options: [
            '{junção, divisão, interseção}',
            '{σ, π, ∪, −, ×} — junção, interseção e divisão são deriváveis dele',
            '{σ, π, ⋈}',
            'Todas as operações são primitivas e independentes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto (Elmasri). Seleção, projeção, união, diferença e produto cartesiano formam o conjunto completo: junção = produto + seleção; interseção = R − (R − S); divisão também se deriva. Boa pegadinha de prova: junção e interseção NÃO são primitivas.',
        feedbackWrong:
            'O conjunto completo é {σ, π, ∪, −, ×}. As demais operações se derivam: junção é produto cartesiano seguido de seleção; interseção é dupla diferença; divisão se expressa por π, × e −. Por isso junção, interseção e divisão são "conveniências", não primitivas.',
    },
    {
        id: 'q24',
        exams: ['p2', 'final'],
        question: 'Classifique os comandos SELECT, INSERT, CREATE, COMMIT e GRANT nas cinco sublinguagens do SQL.',
        options: [
            'Todos são DML',
            'SELECT=DQL, INSERT=DML, CREATE=DDL, COMMIT=DTL, GRANT=DCL',
            'SELECT=DDL, INSERT=DQL, CREATE=DML, COMMIT=DCL, GRANT=DTL',
            'SELECT=DQL, INSERT=DDL, CREATE=DML, COMMIT=DTL, GRANT=DCL',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. DQL consulta (SELECT); DML manipula dados (INSERT, UPDATE, DELETE); DDL define estruturas (CREATE, ALTER, DROP); DTL controla transações (COMMIT, ROLLBACK, SAVEPOINT); DCL controla acesso (GRANT, REVOKE). Classificar comandos nas sublinguagens é questão certa de prova.',
        feedbackWrong:
            'O mapa: SELECT → DQL (consulta); INSERT/UPDATE/DELETE → DML (manipulação); CREATE/ALTER/DROP → DDL (definição); COMMIT/ROLLBACK → DTL (transações); GRANT/REVOKE → DCL (controle de acesso). A prova da turma cobrou exatamente essa taxonomia — inclusive no aviso da 2ª prova: "SQL (DDL, DML, DTL, DQL)".',
    },
    {
        id: 'q25',
        exams: ['p2', 'final'],
        question:
            'Na tabela INSCRICAO do gabarito da turma, o semestre só pode ser 1 ou 2. Qual restrição implementa essa regra no CREATE TABLE?',
        options: [
            'UNIQUE (SEMESTRE)',
            'CHECK (SEMESTRE = 1 OR SEMESTRE = 2)',
            'DEFAULT 1',
            'FOREIGN KEY (SEMESTRE)',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — linha literal do gabarito da atividade de DDL. CHECK valida o DOMÍNIO do valor a cada INSERT/UPDATE. As outras da mesma tabela: APROVADO limitado a SIM/NAO e CLASSIF entre 0 e 20. UNIQUE impediria repetir valores; DEFAULT só preenche ausências; FK aponta para outra tabela.',
        feedbackWrong:
            'É o CHECK — a restrição de domínio: CHECK (SEMESTRE = 1 OR SEMESTRE = 2), validada em INSERT e UPDATE. UNIQUE tornaria o valor irrepetível (chave alternativa); DEFAULT define o valor quando omitido; FOREIGN KEY exige correspondência com PK de outra tabela.',
    },
    {
        id: 'q26',
        exams: ['p2', 'final'],
        question:
            'A tabela PROFESSOR foi criada sem chave primária. Como promovê-la depois, e como acrescentar NOT NULL a uma coluna existente?',
        options: [
            'Impossível: só recriando a tabela',
            'ALTER TABLE PROFESSOR ADD PRIMARY KEY (numeroreg); e o NOT NULL entra via ALTER TABLE ... MODIFY coluna tipo NOT NULL',
            'UPDATE PROFESSOR SET PRIMARY KEY = numeroreg',
            'CREATE CONSTRAINT em qualquer ordem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — os dois passos da atividade de DDL da turma. Constraints entram e saem por ALTER TABLE ADD/DROP; a exceção é o NOT NULL, tratado como modificação da coluna (MODIFY). Regra do material: constraint não se "edita" — adiciona-se ou remove-se.',
        feedbackWrong:
            'ALTER TABLE resolve os dois casos: ADD PRIMARY KEY (numeroreg) promove a coluna, e MODIFY coluna tipo NOT NULL acrescenta a obrigatoriedade (NOT NULL é a exceção que passa por MODIFY, não por ADD CONSTRAINT). UPDATE mexe em DADOS, nunca em estrutura.',
    },
    {
        id: 'q27',
        exams: ['p2', 'final'],
        question:
            'Exercício da aula de transações: UPDATE nota = 8; SAVEPOINT A; UPDATE nota = nota + 1; ROLLBACK TO SAVEPOINT A; COMMIT. Qual o valor final da nota?',
        options: ['9', '8', 'O valor anterior à transação', 'Indefinido: o rollback cancela o commit'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: 8. O ROLLBACK TO SAVEPOINT desfaz apenas o que veio DEPOIS do savepoint (o +1); o primeiro UPDATE sobrevive e o COMMIT o torna permanente. ROLLBACK completo, sem savepoint, é que voltaria ao valor original.',
        feedbackWrong:
            'O valor final é 8. Linha do tempo: nota vira 8 → marca-se o SAVEPOINT → nota vira 9 → ROLLBACK TO SAVEPOINT descarta somente o que veio após a marca (volta a 8) → COMMIT persiste. O rollback parcial não cancela a transação inteira — só o trecho após o savepoint.',
    },
    {
        id: 'q28',
        exams: ['p2', 'final'],
        question:
            'Durante uma transferência de R$ 50 entre contas, o sistema cai depois do débito e antes do crédito. Ao se recuperar, o banco desfaz o débito. Qual propriedade ACID garantiu isso?',
        options: [
            'Durabilidade',
            'ATOMICIDADE: a transação executa por inteiro ou não deixa efeito nenhum',
            'Isolamento',
            'Consistência eventual',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o exemplo clássico da aula de DTL. Atomicidade = tudo ou nada: sem o crédito, o débito é desfeito. As irmãs: Consistência (estado válido → válido), Isolamento (transações concorrentes não se enxergam no meio) e Durabilidade (após o COMMIT, nem falha apaga).',
        feedbackWrong:
            'É a ATOMICIDADE — o "A" de ACID: a transação é indivisível, executa por completo ou é desfeita por completo. Durabilidade protege o que JÁ foi commitado; isolamento impede interferência entre transações concorrentes; consistência garante que o banco vá de estado válido a estado válido.',
    },
    {
        id: 'q29',
        exams: ['p2', 'final'],
        question: 'Para encontrar os alunos cuja nota (CLASSIF) ainda não foi lançada, o gabarito da turma usou qual condição?',
        options: [
            'WHERE CLASSIF = NULL',
            'WHERE CLASSIF IS NULL — NULL não se compara com =, testa-se com IS NULL / IS NOT NULL',
            'WHERE CLASSIF == 0',
            "WHERE CLASSIF = ''",
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — o DELETE do gabarito foi WHERE CLASSIF IS NULL. NULL não é valor comparável: qualquer comparação com = devolve desconhecido, e a linha nunca entra no resultado. O teste correto é sempre IS NULL / IS NOT NULL. Zero e string vazia são VALORES — outra coisa.',
        feedbackWrong:
            'A condição é WHERE CLASSIF IS NULL. Comparar com = NULL nunca é verdadeiro (NULL é ausência, não valor — a comparação resulta "desconhecido"). Por isso o SQL tem o operador próprio IS NULL. Confundir NULL com 0 ou string vazia é erro clássico: são valores legítimos, não ausência.',
    },
    {
        id: 'q30',
        exams: ['p2', 'final'],
        question:
            "Considere: SELECT CD_DEPTO, AVG(VL_SAL) FROM FUNC WHERE IN_SEXO = 'F' GROUP BY CD_DEPTO HAVING AVG(VL_SAL) > 3000. Qual o papel de WHERE e HAVING aqui?",
        options: [
            'São intercambiáveis',
            'WHERE filtra as LINHAS antes do agrupamento (só mulheres); HAVING filtra os GRUPOS depois (departamentos com média > 3000) — função de grupo não pode no WHERE',
            'WHERE filtra grupos; HAVING filtra linhas',
            'HAVING é obrigatório sempre que há GROUP BY',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A ordem lógica: WHERE elimina linhas → GROUP BY agrupa → funções de grupo calculam → HAVING elimina grupos. Como AVG só existe depois do agrupamento, ela não pode aparecer no WHERE — é o erro que o compilador SQL acusa na hora.',
        feedbackWrong:
            'WHERE age sobre LINHAS (antes de agrupar); HAVING age sobre GRUPOS (depois, podendo usar COUNT/AVG/SUM). Função de grupo no WHERE é erro. E lembre a regra do GROUP BY: toda coluna do SELECT fora de função de agregação precisa estar no GROUP BY.',
    },
    {
        id: 'q31',
        exams: ['p2', 'final'],
        question: 'Qual a diferença entre COUNT(*) e COUNT(coluna)?',
        options: [
            'Nenhuma: são sinônimos',
            'COUNT(*) conta TODAS as linhas; COUNT(coluna) ignora as linhas em que a coluna é NULL (como as demais funções de grupo)',
            'COUNT(coluna) é mais rápido e conta tudo',
            'COUNT(*) elimina duplicatas automaticamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Todas as funções de agregação ignoram NULL — exceto COUNT(*), que conta linhas inteiras. Por isso COUNT(*) ≥ COUNT(coluna), e COUNT(DISTINCT coluna) reduz ainda mais. O slide da turma compara os três lado a lado justamente para fixar essa diferença.',
        feedbackWrong:
            'COUNT(*) conta linhas, com NULL e tudo; COUNT(coluna) só conta linhas onde a coluna NÃO é nula. É o comportamento geral das agregações (SUM/AVG/MAX/MIN também ignoram NULL) — o COUNT(*) é a exceção. Para média considerando nulos como zero, o material usa AVG(NVL(coluna, 0)).',
    },
    {
        id: 'q32',
        exams: ['p2', 'final'],
        question:
            'Na aula de JOIN, o RIGHT OUTER JOIN entre FUNC e DEPTO listou "Carla Antunes | NULL" e "Pedro Ernesto | NULL". O que essas linhas significam?',
        options: [
            'Erro na consulta: NULL indica falha de sintaxe',
            'São funcionários SEM departamento correspondente — o OUTER JOIN preserva as linhas sem par, preenchendo o lado sem correspondência com NULL',
            'São departamentos sem nome cadastrado',
            'O SGBD não conseguiu calcular a junção completa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o exemplo do quadro da aula de 18/10. A junção interna (INNER) descartaria Carla e Pedro; a EXTERNA preserva as linhas sem correspondente, completando com NULL. LEFT preserva todas da tabela à esquerda, RIGHT as da direita, FULL as de ambas.',
        feedbackWrong:
            'As linhas com NULL são o efeito característico do OUTER JOIN: funcionários sem par na outra tabela são PRESERVADOS, com NULL no lado sem correspondência. O INNER JOIN os eliminaria silenciosamente. É a ferramenta certa para perguntas como "quem NÃO tem...?" (com IS NULL no filtro).',
    },
    {
        id: 'q33',
        exams: ['p2', 'final'],
        question:
            'Para listar cada empregado ao lado do nome do seu supervisor — ambos na tabela EMPREGADO — que técnica o exercício da turma exigiu?',
        options: [
            'Uma subconsulta correlacionada obrigatória',
            'AUTOJUNÇÃO: a tabela entra duas vezes com aliases (E e SUP), juntando E.SUPERIDENT = SUP.IDENT',
            'UNION da tabela com ela mesma',
            'GROUP BY pelo supervisor',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A autojunção trata a mesma tabela como duas: FROM EMPREGADO E, EMPREGADO SUP WHERE E.SUPERIDENT = SUP.IDENT — E é o subordinado, SUP o chefe. Detalhe de fidelidade: o gabarito da turma trazia a condição invertida (E.IDENT = SUP.SUPERIDENT), que listaria os SUBORDINADOS de cada um — bom exemplo de como a ordem importa.',
        feedbackWrong:
            'É a AUTOJUNÇÃO (self-join): a tabela aparece duas vezes com aliases distintos, e a condição liga a FK de supervisão à PK — E.SUPERIDENT = SUP.IDENT. Cuidado com a direção: inverter a condição responde outra pergunta (os subordinados, não o supervisor). Foi exatamente o deslize do gabarito da turma.',
    },
    {
        id: 'q34',
        exams: ['p2', 'final'],
        question:
            'O gabarito da turma respondeu "empregados que NÃO têm dependentes" com: FROM EMPREGADO E, DEPENDENTE D WHERE E.IDENT != D.IDENTEMP. Qual o problema, e qual a forma correta?',
        options: [
            'Nenhum problema: != exclui os que têm dependente',
            'O produto cartesiano com != lista quase todos os empregados (basta UM dependente alheio); o correto é NOT IN, NOT EXISTS ou LEFT JOIN ... IS NULL',
            'Só falta um DISTINCT para funcionar',
            'O problema é usar alias',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o erro clássico documentado no próprio gabarito. No produto cartesiano, cada empregado é comparado com TODOS os dependentes: basta existir um dependente de outra pessoa para o par passar no !=. As formas corretas: WHERE IDENT NOT IN (SELECT IDENTEMP FROM DEPENDENTE), NOT EXISTS correlacionado, ou LEFT JOIN com IS NULL.',
        feedbackWrong:
            'A consulta está ERRADA (e o DISTINCT só esconderia o sintoma): com produto cartesiano + !=, um empregado COM dependente ainda aparece — pareado com dependentes dos outros. Ausência se testa com NOT IN (cuidado com NULL!), NOT EXISTS ou LEFT JOIN ... WHERE ... IS NULL. Anti-padrão que vale prova.',
    },
    {
        id: 'q35',
        exams: ['p2', 'final'],
        question: 'Uma subconsulta com NOT IN devolve, entre outros valores, um NULL. O que acontece com a consulta externa?',
        options: [
            'O NULL é ignorado e tudo funciona',
            'NENHUMA linha é retornada: a comparação com NULL torna a condição desconhecida para todas — corrige-se com NVL na subconsulta ou trocando por NOT EXISTS',
            'Apenas as linhas nulas são excluídas',
            'Erro de sintaxe',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — a armadilha destacada nos slides obrigatórios de subconsulta. NOT IN vira uma cadeia de comparações ≠ com AND; o ≠ NULL é "desconhecido" e contamina tudo: resultado vazio. As correções do material: NOT IN (SELECT NVL(coluna, 0) ...) ou reescrever com NOT EXISTS.',
        feedbackWrong:
            'Resultado VAZIO — nenhuma linha. O NOT IN equivale a "≠ v1 AND ≠ v2 AND ≠ NULL", e comparar com NULL dá desconhecido, derrubando a condição inteira. Por isso o slide manda blindar a subconsulta (NVL) ou usar NOT EXISTS, que não sofre do problema. IN (positivo) não tem essa armadilha.',
    },
    {
        id: 'q36',
        exams: ['p2', 'final'],
        question:
            'Questão da 2ª prova: dar aumento de 20% aos empregados do projeto "ProdX", sem saber de antemão o departamento deles. Que forma de UPDATE resolve?',
        options: [
            'UPDATE FUNC SET VL_SAL = VL_SAL * 1.2; (sem WHERE)',
            "UPDATE com SUBCONSULTA no WHERE: SET VL_SAL = VL_SAL * 1.2 WHERE CD_DEPTO = (SELECT CD_DEPTO FROM PROJ WHERE NM_PROJ = 'PRODX')",
            'DELETE seguido de INSERT com o novo salário',
            'ALTER TABLE FUNC MODIFY VL_SAL * 1.2',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — questão 3.8 do gabarito. A subconsulta descobre o departamento do projeto e o WHERE restringe o UPDATE a ele. Sem o WHERE, TODOS os salários subiriam 20% — o desastre clássico do UPDATE. ALTER TABLE muda estrutura, nunca dados.',
        feedbackWrong:
            'É o UPDATE com SUBCONSULTA: o WHERE usa um SELECT para localizar o CD_DEPTO do projeto ProdX e aplica o reajuste só ali. UPDATE sem WHERE atinge a tabela inteira (erro grave); ALTER TABLE é DDL — mexe na estrutura, não nos valores.',
    },
    {
        id: 'q37',
        exams: ['p1'],
        question: 'Associe as criações aos seus autores/marcos: modelo relacional, modelo ER e o primeiro padrão ANSI do SQL.',
        options: [
            'Chen (1970), Codd (1976), padrão em 1986',
            'Codd (1970), Chen (1976), padrão ANSI em 1986',
            'Elmasri (1970), Navathe (1976), padrão em 1992',
            'Codd (1986), Chen (1992), padrão em 1999',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. E. F. Codd (IBM) propôs o modelo relacional em 1970; Peter Chen criou o modelo ER em 1976; o SQL — nascido como SEQUEL na IBM — ganhou seu primeiro padrão ANSI em 1986 (revisões em 1992, 1999, 2003…). Elmasri & Navathe são autores do livro-texto, não dos modelos.',
        feedbackWrong:
            'A linha do tempo: Codd → modelo RELACIONAL em 1970; Chen → modelo ER em 1976; SQL padronizado pela ANSI em 1986. Antes deles, os modelos hierárquico e em rede (CODASYL) dominavam com acesso navegacional — o relacional venceu pela simplicidade conceitual.',
    },
    {
        id: 'q38',
        exams: ['p2', 'final'],
        question: 'No MySQL usado nas aulas práticas, como calcular quantos DIAS separam duas datas e como obter a data atual?',
        options: [
            'MONTHS_BETWEEN e SYSDATE (funções Oracle)',
            "DATEDIFF('2022-03-02','2021-12-05') para os dias, e CURDATE() para a data atual",
            'DATE_FORMAT para os dias e NOW_DATE() para a data',
            'EXTRACT(DAY) e TODAY()',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — do material de funções MySQL da professora. DATEDIFF devolve a diferença em dias (equivale ao data − data do Oracle); CURDATE() dá a data atual (SYSDATE() dá data e hora). Para outras unidades: TIMESTAMPDIFF(MONTH|YEAR|..., d1, d2); para formatar: DATE_FORMAT com %d/%m/%Y.',
        feedbackWrong:
            'No dialeto MySQL da disciplina: DATEDIFF(d1, d2) → dias entre datas; CURDATE() → data atual. MONTHS_BETWEEN e SYSDATE (sem parênteses) são o vocabulário Oracle dos slides teóricos — a tabela de equivalências entre os dois dialetos é material de prova. Idade aproximada: YEAR(CURDATE()) − YEAR(nascimento).',
    },
];
