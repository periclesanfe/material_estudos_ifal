import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const PGWB_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROGRAMAÇÃO WEB 2 (PGWB) - Resumo:

1. A DISCIPLINA: componente do 5º período, 80 horas, quatro aulas semanais, com pré-requisito de Introdução a Tecnologias Web. O objetivo declarado no plano de curso é capacitar os alunos a desenvolverem aplicações web robustas e seguras, integradas a bancos de dados e utilizando padrões avançados de desenvolvimento de software. Os temas anunciados são os conceitos fundamentais do protocolo HTTP, desenvolvimento de APIs, manipulação de dados e arquivos multimídia, padrões de design como MVC e DAO, e implementação de segurança. Pré-requisitos de conhecimento: lógica de programação, experiência com alguma linguagem, e HTML, CSS e JavaScript obrigatórios. A metodologia combina aulas expositivas com atividades práticas imediatas e CODIFICAÇÃO EM PARES (pair programming), em que duplas revezam o teclado — uma pessoa lidera digitando enquanto a outra sugere, trocando em tempo definido pelo professor. A nota se compõe de resolução de questionários, atividades práticas individuais, projeto em equipe e participação (extra). A bibliografia básica é o próprio material de apoio da disciplina, escrito pelo professor.

2. HISTÓRIA DA WEB: a World Wide Web foi inventada por TIM BERNERS-LEE em 1989, no CERN, como solução para compartilhar documentos entre pesquisadores. Seus três componentes essenciais são o HTML (linguagem de marcação para criar documentos), o HTTP (protocolo para transferir documentos) e a URL (sistema de endereçamento que identifica e localiza recursos). Em 1993 o navegador MOSAIC ajudou a popularizar a Web; em 1994 foi fundado o W3C, que desenvolve padrões abertos. A Web evoluiu de plataforma estática para dinâmica e interativa, com impacto em comunicação, comércio, educação e entretenimento.

3. INTERNET NÃO É A MESMA COISA QUE WEB: esta é a distinção que a disciplina cobra explicitamente. A INTERNET é uma infraestrutura global de redes interconectadas que permite a comunicação entre computadores. A WEB é uma APLICAÇÃO que utiliza a Internet para acessar e interagir com documentos e recursos através do protocolo HTTP. A Internet é o meio; a Web é um dos serviços que trafegam por ele, ao lado de e-mail, FTP e outros.

4. ARQUITETURA DA WEB: baseia-se no modelo CLIENTE-SERVIDOR, em que o cliente (navegador) solicita recursos e o servidor processa e responde. Os componentes principais são os servidores web (hospedam e servem conteúdo), os navegadores e aplicações (interpretam e renderizam HTML, CSS e JavaScript), o DNS (traduz nomes de domínio em endereços IP) e os servidores de banco de dados. O fluxo de comunicação tem três etapas: resolução DNS traduzindo a URL em endereço IP, requisição e resposta HTTP, e renderização do conteúdo no navegador. A ARQUITETURA EM TRÊS CAMADAS separa a camada de apresentação (interface do usuário, com HTML, CSS e JavaScript), a camada de aplicação ou lógica de negócios (processada no servidor) e a camada de dados (armazenamento e recuperação em bancos). Além do HTTP e HTTPS, os WebSockets permitem comunicação bidirecional em tempo real.

5. ESTRUTURA DAS MENSAGENS HTTP: o modelo é de requisição e resposta. A REQUISIÇÃO tem três partes: a linha de requisição (método HTTP, caminho da URL e versão do protocolo), os cabeçalhos (metadados sobre a requisição) e o corpo, opcional. Exemplo: GET /index.html HTTP/1.1, com Host, User-Agent e Accept nos cabeçalhos. A RESPOSTA também tem três partes: a linha de status (versão do protocolo, código de status e frase descritiva), os cabeçalhos (informações sobre o servidor e os dados) e o corpo, opcional, com o conteúdo real. Exemplo: HTTP/1.1 200 OK, com Content-Type e Content-Length. Os cabeçalhos se classificam em quatro grupos: GERAIS, que valem para requisição e resposta (como Cache-Control); DE REQUISIÇÃO (Accept, User-Agent); DE RESPOSTA (Content-Type); e DE ENTIDADE, relativos ao corpo da mensagem (Content-Length).

6. MÉTODOS E CÓDIGOS DE STATUS: os seis métodos trabalhados são GET (solicita a representação de um recurso), POST (envia dados para criar ou modificar um recurso), PUT (substitui o recurso no servidor pela carga útil da requisição), DELETE (remove um recurso específico), HEAD (solicita resposta idêntica ao GET mas sem o corpo) e PATCH (aplica modificações parciais a um recurso). Os códigos de status se organizam em cinco faixas: 1xx informativo, indicando que a requisição foi recebida e está em processamento; 2xx sucesso; 3xx redirecionamento, indicando que o cliente precisa tomar ação adicional; 4xx erro do cliente; e 5xx erro do servidor. Os tipos MIME identificam o formato do conteúdo: text/html para documentos HTML, application/json para JSON, image/png para imagens e application/xml para XML. A ferramenta cURL permite fazer requisições HTTP direto da linha de comando, como em curl -X GET seguido da URL.

7. HTML E URL: o HTML é descrito como a espinha dorsal da Web, usando tags para definir elementos. A estrutura básica de um documento tem o DOCTYPE (declara o tipo e a versão), a tag html (encapsula todo o conteúdo), o head (metadados) e o body (conteúdo visível ao usuário). Os elementos citados incluem as tags de cabeçalho h1 a h6, parágrafo p, link a com href, imagem img com src, e listas ordenadas ol e não ordenadas ul. O HTML5 é amplamente adotado, com suporte a vídeo, gráficos e aplicativos interativos. A URL (Uniform Resource Locator) é composta por SEIS partes: protocolo (http:// ou https://), nome de domínio, porta (:80 ou :443), caminho, query string (após o ponto de interrogação) e fragmento (após o sustenido). URLs claras, descritivas e bem estruturadas melhoram a indexação por motores de busca, e o HTTPS criptografa a comunicação para evitar interceptações.

8. A API DOM: o DOM (Document Object Model) é uma interface de programação para documentos HTML e XML, em que cada parte do documento — elementos, atributos, texto — é representada como um NÓ em uma estrutura de ÁRVORE. Ele permite manipular a estrutura e o conteúdo da página em tempo real. Nos navegadores, o JavaScript é a linguagem usada para acessar o DOM, mas existem implementações da API para várias linguagens. Há quatro tipos de nó: nós de ELEMENTO (representam tags como div e p), nós de ATRIBUTO (id, class), nós de TEXTO (o conteúdo textual dentro de um elemento) e nós de COMENTÁRIO.

9. MANIPULAÇÃO DO DOM: para SELECIONAR elementos usam-se getElementById (seleciona pelo ID), querySelector (o primeiro elemento que corresponde a um seletor CSS) e querySelectorAll (todos os que correspondem). Para MODIFICAR conteúdo e estilo usam-se innerHTML e textContent (alteram o conteúdo), style (modifica o estilo diretamente) e classList (adiciona ou remove classes CSS). Para CRIAR e REMOVER elementos usam-se createElement (cria um novo elemento), appendChild (adiciona um filho ao DOM) e remove (retira um elemento). Os EVENTOS conectam ações do usuário a modificações do DOM: eventos comuns são click, mouseover e keyup, e o registro se faz com addEventListener.

10. AJAX E FETCH API: o Ajax permite o carregamento assíncrono de dados sem recarregar a página, o que melhora a performance e a experiência do usuário. A FETCH API é a abordagem moderna: baseada em PROMISES, torna o código mais legível e SUBSTITUI o uso do XMLHttpRequest nas operações Ajax. O padrão de uso encadeia then para converter a resposta em JSON, then para tratar os dados e catch para tratar erros.

11. SEPARANDO CLIENTE E SERVIDOR NO PROJETO: a estrutura de pastas materializa a separação. O arquivo app.js é o principal do servidor, com a configuração do Express, definição de rotas e lógica de negócio. O package.json guarda metadados, dependências e scripts. A pasta PUBLIC contém arquivos estáticos processados no CLIENTE — css/ e js/ —, acessíveis publicamente e servidos diretamente pelo Express. A pasta VIEWS contém arquivos de visualização processados no SERVIDOR antes de serem enviados ao cliente, usados para gerar HTML dinamicamente a partir dos dados. Essa distinção entre o que roda no cliente e o que roda no servidor é a chave para entender a arquitetura.

12. COMUNICAÇÃO CLIENTE-SERVIDOR NO EXPRESS: tudo começa pela ROTA. As rotas mapeiam solicitações HTTP para funções de tratamento específicas, definindo como o servidor responde a diferentes URLs e métodos. O servidor pode RECEBER dados de quatro formas: parâmetros de URL (query strings), parâmetros no corpo da requisição (dados de formulário em POST), cabeçalhos HTTP, e cookies e sessões. E pode ENVIAR dados de três formas: renderizando páginas HTML com um mecanismo de visualização como o EJS, enviando JSON para ser processado pelo cliente (como em uma API RESTful), ou enviando arquivos estáticos.

13. PATH PARAM, QUERY STRING E CORPO: o PATH PARAM (parâmetro de URL) faz parte do caminho e é declarado com dois pontos na rota, como em app.get('/produto/:id'), sendo acessado por req.params.id — serve para identificar UM recurso específico. A QUERY STRING vem depois do ponto de interrogação, como em /pesquisar?categoria=eletronicos, e é acessada por req.query.categoria — serve para filtrar, ordenar e paginar. Os dados de FORMULÁRIO chegam no corpo de uma requisição POST e exigem um middleware para serem processados (bodyParser.urlencoded com extended true, ou express.urlencoded nas versões modernas), sendo acessados por req.body.nome. Os CABEÇALHOS são acessados por req.headers.

14. COOKIES E SESSÕES: o HTTP é um protocolo SEM ESTADO, conforme a RFC-2616 seção 5, em que cada par de requisição e resposta é independente dos demais. Um COOKIE é um pequeno pedaço de informação armazenada pelo servidor no navegador do usuário: o servidor o define ao responder, o navegador o guarda e o reenvia na próxima solicitação ao mesmo servidor. Sem cookies, o servidor trataria cada requisição como um cliente novo. Usos típicos: gerenciamento de sessão, rastreamento de usuários e armazenamento de preferências. Uma SESSÃO WEB é uma sequência de transações de requisição e resposta associadas ao mesmo usuário. Para manter o estado, a aplicação atribui ao usuário um IDENTIFICADOR DE SESSÃO (session id ou token) no momento da criação da sessão, que é trocado a cada requisição HTTP e tem a forma de um par nome igual a valor. Os mecanismos de troca do identificador incluem cookies (o preferido, por permitir propriedades avançadas do token), parâmetros de URL por reescrita, argumentos em requisições GET, campos ocultos de formulário em POST e cabeçalhos proprietários. Sessões existem tanto ANTES quanto DEPOIS da autenticação — antes, para guardar preferências como idioma; depois, para identificar o usuário, aplicar controles de acesso e liberar dados privados.

15. CRIANDO UMA APLICAÇÃO NODE/EXPRESS DO ZERO: o caminho manual começa com npm init -y para gerar o package.json, npm install express ejs para as dependências, e a criação da estrutura com views/ e public/. No app.js configura-se o EJS como view engine com app.set, servem-se os estáticos com express.static, define-se a rota com app.get e res.render, e sobe-se o servidor com app.listen. A alternativa é o EXPRESS GENERATOR, instalado globalmente, que cria a estrutura completa — bin/www, public/, routes/, views/ — já configurada para o motor de template escolhido, restando apenas rodar npm install.

16. VALIDAÇÃO NO BACKEND: validar no cliente melhora a experiência, mas não é segurança — qualquer pessoa pode enviar uma requisição direto ao servidor, ignorando o formulário. Por isso a validação no SERVIDOR é obrigatória. O curso usa a biblioteca express-validator, com encadeamento de regras por campo (como isInt com mínimo e máximo, isIn com a lista de valores aceitos, e withMessage para a mensagem de erro). O padrão de resposta reexibe o formulário preenchido com os dados que o usuário digitou e mostra a mensagem de erro ao lado de cada campo com problema, em vez de descartar tudo e obrigar a redigitar.

17. PERSISTÊNCIA COM SQLITE: a escolha didática do curso é SQLite com better-sqlite3, por ser arquivo único e não exigir servidor externo. Um módulo db.js cria o diretório de dados se não existir, abre o banco e garante a estrutura com CREATE TABLE IF NOT EXISTS, de modo que a aplicação funcione no primeiro start. As operações usam db.prepare seguido de run para INSERT, UPDATE e DELETE, e de all ou get para SELECT. O CRUD completo — criar, listar, editar e excluir contatos — é construído passo a passo sobre essa base.

18. A ARQUITETURA EM QUATRO CAMADAS: é o núcleo conceitual do curso, apresentado como "dar forma de projeto real ao CRUD", buscando separação de responsabilidades, testabilidade e evolução segura. A camada de PRESENTATION (Web/MVC) reúne routes/, controllers/ e views/: expõe o HTTP, valida a entrada e chama a aplicação — o MVC aqui é Routes para Controller para View EJS. A camada de APPLICATION (casos de uso) fica em application/services/ e orquestra as regras dos casos de uso; o ponto crucial é que ela NÃO CONHECE Express nem SQLite. A camada de DOMAIN (core) tem domain/entities/ e domain/ports/, com os modelos e as interfaces; é estável e sem detalhes de infraestrutura. A camada de INFRASTRUCTURE (adapters) fica em infra/db/ e infra/repositories/ e implementa as ports com SQLite. Os padrões usados são PORTS AND ADAPTERS (arquitetura hexagonal), REPOSITORY como porta, FACTORY para criar a conexão com o banco e MAPPER para converter entre linha SQL e entidade. Completam a estrutura os middlewares (errorHandler, asyncHandler, validate) e um container de injeção de dependência manual.

19. OS BENEFÍCIOS CONCRETOS DA ARQUITETURA: o material apresenta dois benefícios verificáveis, e não abstratos. Primeiro: trocar SQLite por Postgres exige mexer apenas no adapter da infraestrutura, sem tocar em services, controllers, views ou entidades. Segundo: testar os serviços sem banco de dados é possível usando um FAKE REPOSITORY em memória que implementa a mesma interface — o service não percebe a diferença, porque depende da porta e não da implementação. A demonstração final vem na seção de ORM, em que trocar o repositório manual pelo Sequelize muda somente a camada de infraestrutura.

20. TESTES AUTOMATIZADOS COM JEST E SUPERTEST: o curso trabalha dois níveis de teste. O teste UNITÁRIO do service roda sem banco, usando o Fake Repository em memória. O teste E2E das rotas sobe a aplicação com um SQLite temporário por teste. O JEST é um framework completo de teste para JavaScript, com executor de testes, funções globais describe, it e expect para estruturar e fazer asserções, utilitários de mocking e spying, relatórios de cobertura e paralelização. O SUPERTEST é uma biblioteca que simula requisições HTTP para testar rotas e endpoints: permite chamar rotas Express internamente como se fossem requisições reais, verificar o status code e inspecionar corpo e cabeçalhos da resposta. Instalam-se como dependências de desenvolvimento, e o script de teste costuma usar a flag runInBand para execução sequencial.

21. O PROBLEMA QUE O ORM RESOLVE: escrever SQL manualmente funciona, mas traz problemas concretos — SQL espalhado pelo código, sintaxe que varia entre bancos, e a necessidade de fazer manualmente a conversão entre tipos (string e array, por exemplo), a abertura de conexão e a montagem dinâmica de consultas; além disso, testar exige limpar tabelas ou criar banco temporário. O conjunto desses atritos entre o mundo dos objetos e o mundo das tabelas chama-se IMPEDÂNCIA OBJETO-RELACIONAL.

22. ORM E SEQUELIZE: ORM significa Object-Relational Mapping. É uma técnica que mapeia classes para tabelas e atributos para colunas, gera o SQL automaticamente (findAll vira SELECT, create vira INSERT, update vira UPDATE), faz conversão de tipos (array para string, boolean para integer no SQLite) e permite trocar o banco sem reescrever o service. O Sequelize entra na versão 2 do projeto substituindo o repositório de SQL manual por um repositório baseado em ORM. A cadeia passa de Service para Repository (interface) para RepositorySqlite para better-sqlite3, e vira Service para Repository (interface) para RepositorySequelize para o modelo Sequelize. E o ponto-chave é que NADA MUDA nas camadas superiores — views, controllers, services, entidades e rotas permanecem intactos. Só a camada de infraestrutura muda, o que é a demonstração prática do Ports and Adapters.

23. AS ATIVIDADES DA TURMA: os três primeiros questionários cobriram vídeos sobre o que é a World Wide Web, o protocolo IP e o DNS. A atividade de ATUALIZAR 4 DIVS SIMULTANEAMENTE pedia usar Fetch API e DOM API para atualizar quatro seções diferentes da página, com quatro requisições distintas ou quatro APIs web diferentes, validando o comportamento do carregamento assíncrono no navegador — com entrega por repositório público no GitHub. A atividade de VALIDAÇÃO DE FORMULÁRIOS NO BACKEND pedia um formulário enviado por POST com validações no servidor: todos os campos obrigatórios exceto o checkbox, apenas datas válidas no nascimento, e-mail contendo arroba e ponto, apenas DDDs válidos no Brasil, e no máximo três atividades extracurriculares, devolvendo uma página HTML com sucesso ou com as informações sobre o preenchimento incorreto. A atividade de BACKEND PARA DIFERENTES REQUISIÇÕES pedia analisar o código cliente, compreender GET, POST, PUT e DELETE, completar o servidor para o registro de alunos e impedir alunos com a mesma matrícula na inserção e na atualização. O PROJETO FINAL exigia vídeo de demonstração no YouTube e o repositório no GitHub com o código-fonte e os integrantes.
`;

export const PGWB_TOPICS: QuizTopicOption[] = [
    {
        value: 'web-http',
        label: 'A Web e o protocolo HTTP',
        prompt:
            'Fundamentos da Web na disciplina Programação Web 2: a invenção por Tim Berners-Lee em 1989 no CERN, os três componentes essenciais (HTML, HTTP e URL), o Mosaic em 1993 e o W3C em 1994; a diferença entre Internet (infraestrutura de redes) e Web (aplicação sobre ela via HTTP); a arquitetura cliente-servidor, seus componentes (servidores web, navegadores, DNS, bancos) e o fluxo DNS → requisição/resposta → renderização; a arquitetura em três camadas (apresentação, aplicação, dados); a estrutura das mensagens HTTP de requisição (linha de requisição, cabeçalhos, corpo) e de resposta (linha de status, cabeçalhos, corpo); os quatro tipos de cabeçalho; os seis métodos GET, POST, PUT, DELETE, HEAD e PATCH; as cinco faixas de código de status; os tipos MIME; cookies; cURL; a estrutura de um documento HTML; e as seis partes de uma URL.',
    },
    {
        value: 'dom-fetch',
        label: 'DOM, eventos e Fetch API',
        prompt:
            'Manipulação dinâmica de páginas na disciplina Programação Web 2: o DOM como interface de programação que representa o documento em árvore de nós; os quatro tipos de nó (elemento, atributo, texto e comentário); a seleção de elementos com getElementById, querySelector e querySelectorAll; a modificação de conteúdo e estilo com innerHTML, textContent, style e classList; a criação e remoção com createElement, appendChild e remove; os eventos click, mouseover e keyup com addEventListener; a comunicação síncrona versus assíncrona; o Ajax para carregar dados sem recarregar a página; e a Fetch API baseada em Promises, que substitui o XMLHttpRequest, com o encadeamento de then e catch.',
    },
    {
        value: 'express-dados',
        label: 'Express, rotas e recebimento de dados',
        prompt:
            'Node.js e Express na disciplina Programação Web 2: a separação entre a pasta public (estáticos processados no cliente) e a pasta views (processados no servidor); a criação de uma aplicação do zero com npm init, npm install express ejs, configuração do view engine e express.static, e também a alternativa do Express Generator; as rotas mapeando método e URL para funções de tratamento; as quatro formas de receber dados no servidor (query string, corpo da requisição, cabeçalhos, cookies e sessões) e as três de enviar (renderizar HTML com EJS, enviar JSON, servir estáticos); a diferença entre path param acessado por req.params, query string acessada por req.query e corpo acessado por req.body com middleware; e a validação no backend com express-validator, incluindo o padrão de reexibir o formulário com os dados digitados e mensagens de erro por campo.',
    },
    {
        value: 'cookies-sessoes',
        label: 'Cookies, sessões e estado',
        prompt:
            'Gerenciamento de estado na disciplina Programação Web 2: o HTTP como protocolo sem estado conforme a RFC-2616, em que cada par de requisição e resposta é independente; o cookie como pequeno pedaço de informação que o servidor armazena no navegador e que o navegador reenvia nas próximas requisições ao mesmo servidor, usado para gerenciamento de sessão, rastreamento e preferências; a sessão web como sequência de transações associadas ao mesmo usuário; o identificador de sessão como par nome igual a valor atribuído na criação e trocado a cada requisição; os mecanismos de troca do identificador (cookies, reescrita de URL, argumentos GET, campos ocultos em POST, cabeçalhos proprietários); e a existência de sessões tanto antes quanto depois da autenticação.',
    },
    {
        value: 'arquitetura',
        label: 'Arquitetura, testes e ORM',
        prompt:
            'Arquitetura de aplicação na disciplina Programação Web 2: a persistência com SQLite e better-sqlite3, com CREATE TABLE IF NOT EXISTS e o CRUD completo; as quatro camadas — Presentation com routes, controllers e views (MVC no nível da web), Application com os services de casos de uso que não conhecem Express nem SQLite, Domain com entidades e ports, e Infrastructure com os adapters que implementam as ports; os padrões Ports and Adapters (hexagonal), Repository, Factory e Mapper; os benefícios concretos de trocar o banco mexendo só no adapter e de testar services com um Fake Repository em memória; os testes automatizados com Jest (test runner, describe, it, expect, mocking, cobertura) e Supertest (simula requisições HTTP para testar rotas, status code, corpo e cabeçalhos), nos níveis unitário e E2E; a impedância objeto-relacional e os problemas do SQL manual; e o ORM com Sequelize, que mapeia classes para tabelas e atributos para colunas, gera SQL automaticamente e permite trocar o banco sem reescrever o service — mudando apenas a camada de infraestrutura.',
    },
];

export const PGWB_EXAMS: ExamDefinition[] = [
    {
        id: 'fundamentos',
        label: 'Fundamentos da Web',
        description:
            'História, arquitetura, protocolo HTTP, HTML, URL e a manipulação do DOM com Fetch API — o conteúdo das notas de aula 01 e 02.',
    },
    {
        id: 'backend',
        label: 'Backend com Node/Express',
        description:
            'Rotas, recebimento de dados, validação no servidor, cookies e sessões, persistência e o CRUD completo.',
    },
    {
        id: 'arquitetura',
        label: 'Arquitetura e projeto',
        description:
            'As quatro camadas, Ports and Adapters, testes com Jest e Supertest, ORM com Sequelize e o projeto final.',
    },
];

export const PGWB_SECTIONS = [
    { id: 'intro', shortTitle: 'Introdução', title: 'Programação Web 2' },
    { id: 'historia', shortTitle: 'A Web', title: 'História e arquitetura da Web', exams: ['fundamentos'] },
    { id: 'http', shortTitle: 'HTTP', title: 'O protocolo HTTP', exams: ['fundamentos'] },
    { id: 'html-url', shortTitle: 'HTML e URL', title: 'HTML e o sistema de endereçamento', exams: ['fundamentos'] },
    { id: 'dom', shortTitle: 'DOM', title: 'A API DOM', exams: ['fundamentos'] },
    { id: 'fetch', shortTitle: 'Fetch', title: 'Ajax e Fetch API', exams: ['fundamentos'] },
    { id: 'estrutura', shortTitle: 'Cliente × servidor', title: 'Separando cliente e servidor', exams: ['backend'] },
    { id: 'express', shortTitle: 'Express', title: 'Criando a aplicação Node/Express', exams: ['backend'] },
    { id: 'rotas', shortTitle: 'Rotas e dados', title: 'Rotas e recebimento de dados', exams: ['backend'] },
    { id: 'validacao', shortTitle: 'Validação', title: 'Validação no backend', exams: ['backend'] },
    { id: 'cookies', shortTitle: 'Cookies', title: 'Cookies e sessões', exams: ['backend'] },
    { id: 'persistencia', shortTitle: 'Persistência', title: 'Banco de dados e CRUD', exams: ['backend'] },
    { id: 'camadas', shortTitle: 'Camadas', title: 'A arquitetura em quatro camadas', exams: ['arquitetura'] },
    { id: 'testes', shortTitle: 'Testes', title: 'Jest e Supertest', exams: ['arquitetura'] },
    { id: 'orm', shortTitle: 'ORM', title: 'Impedância e Sequelize', exams: ['arquitetura'] },
    { id: 'atividades', shortTitle: 'Atividades', title: 'As atividades e o projeto', exams: ['arquitetura'] },
    { id: 'quiz', shortTitle: 'Quiz', title: 'Quiz de Revisão' },
] as const;

export type PgwbSectionId = (typeof PGWB_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['fundamentos'],
        question: 'Qual é a diferença entre INTERNET e WEB?',
        options: [
            'São sinônimos — dois nomes para a mesma coisa',
            'A Internet é a infraestrutura global de redes interconectadas; a Web é uma APLICAÇÃO que usa essa infraestrutura via HTTP',
            'A Web é a infraestrutura e a Internet é o conteúdo',
            'A Internet é privada e a Web é pública',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a disciplina cobra essa distinção logo no primeiro capítulo. A Internet é o meio; a Web é um dos serviços que trafegam por ele, ao lado de e-mail e FTP.',
        feedbackWrong:
            'A Internet é a infraestrutura de redes que permite computadores se comunicarem. A Web é uma aplicação que roda sobre ela, usando HTTP para acessar documentos e recursos.',
    },
    {
        id: 'q2',
        exams: ['fundamentos'],
        question: 'Quem inventou a World Wide Web, quando e onde?',
        options: [
            'Vint Cerf, em 1974, na DARPA',
            'Tim Berners-Lee, em 1989, no CERN',
            'Marc Andreessen, em 1993, na NCSA',
            'Tim Berners-Lee, em 1994, no W3C',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o propósito original era prático: compartilhar documentos entre pesquisadores. As outras datas confundem com o Mosaic (1993) e a fundação do W3C (1994), que vieram depois.',
        feedbackWrong:
            'Foi Tim Berners-Lee, em 1989, no CERN, como solução para compartilhar documentos entre pesquisadores. 1993 é o ano do Mosaic e 1994 o da fundação do W3C.',
    },
    {
        id: 'q3',
        exams: ['fundamentos'],
        question: 'Quais são os TRÊS componentes essenciais da Web?',
        options: [
            'HTML, CSS e JavaScript',
            'HTML, HTTP e URL',
            'Navegador, servidor e banco de dados',
            'TCP, IP e DNS',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: HTML para criar documentos, HTTP para transferi-los e URL para endereçá-los. Os três nasceram juntos com a Web, e cada um resolve uma parte distinta do problema.',
        feedbackWrong:
            'São HTML (marcação), HTTP (transferência) e URL (endereçamento). CSS e JavaScript vieram depois; TCP/IP e DNS são da infraestrutura da Internet, não da Web.',
    },
    {
        id: 'q4',
        exams: ['fundamentos'],
        question: 'Quais são as três camadas da arquitetura web em três camadas?',
        options: [
            'Cliente, rede e servidor',
            'Apresentação (HTML/CSS/JS), Aplicação (lógica de negócios no servidor) e Dados (banco)',
            'Frontend, middleware e backend',
            'HTTP, HTML e SQL',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A separação é por responsabilidade, não por máquina: a camada de apresentação cuida da interface, a de aplicação processa a lógica no servidor e a de dados armazena e recupera.',
        feedbackWrong:
            'São apresentação, aplicação (lógica de negócios) e dados. É uma divisão por responsabilidade — e é a base conceitual das quatro camadas que o curso desenvolve mais adiante.',
    },
    {
        id: 'q5',
        exams: ['fundamentos'],
        question: 'Quais são as três partes de uma REQUISIÇÃO HTTP?',
        options: [
            'Linha de status, cabeçalhos e corpo',
            'Linha de requisição (método + caminho + versão), cabeçalhos e corpo (opcional)',
            'Método, URL e cookie',
            'Protocolo, domínio e porta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A linha de status pertence à RESPOSTA, não à requisição — é a confusão mais comum. O corpo é opcional nos dois casos.',
        feedbackWrong:
            'Requisição tem linha de requisição, cabeçalhos e corpo opcional. Quem tem LINHA DE STATUS (com versão, código e frase) é a resposta.',
    },
    {
        id: 'q6',
        exams: ['fundamentos'],
        question: 'O que contém a LINHA DE STATUS de uma resposta HTTP?',
        options: [
            'O método, o caminho e a versão',
            'A versão do protocolo, um código de status e uma frase descritiva',
            'O Content-Type e o Content-Length',
            'O endereço IP do servidor',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — como em "HTTP/1.1 200 OK": versão, código e frase. Content-Type e Content-Length são cabeçalhos, que vêm depois dela.',
        feedbackWrong:
            'A linha de status traz versão do protocolo, código de status e frase descritiva. Método, caminho e versão formam a linha de REQUISIÇÃO.',
    },
    {
        id: 'q7',
        exams: ['fundamentos'],
        question: 'Como se classificam os cabeçalhos HTTP nos quatro grupos vistos na disciplina?',
        options: [
            'Obrigatórios, opcionais, personalizados e depreciados',
            'Gerais, de requisição, de resposta e de entidade',
            'Públicos, privados, seguros e inseguros',
            'De cliente, de servidor, de proxy e de cache',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Gerais valem para os dois lados (Cache-Control); de requisição são específicos dela (Accept, User-Agent); de resposta, dela (Content-Type); e de entidade descrevem o corpo (Content-Length).',
        feedbackWrong:
            'São gerais, de requisição, de resposta e de entidade. Os de entidade se referem ao corpo da mensagem, como o Content-Length.',
    },
    {
        id: 'q8',
        exams: ['fundamentos'],
        question: 'Qual a diferença entre os métodos PUT e PATCH?',
        options: [
            'PUT cria e PATCH remove',
            'PUT SUBSTITUI o recurso pela carga útil da requisição; PATCH aplica modificações PARCIAIS',
            'São sinônimos; PATCH é a versão moderna',
            'PUT é para arquivos e PATCH para texto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A consequência prática: um PUT sem um campo apaga aquele campo, porque substitui o recurso inteiro; um PATCH sem ele apenas o deixa como estava.',
        feedbackWrong:
            'PUT substitui o recurso inteiro; PATCH modifica parcialmente. Quem remove é o DELETE. A distinção importa ao projetar APIs.',
    },
    {
        id: 'q9',
        exams: ['fundamentos'],
        question: 'O que caracteriza o método HEAD?',
        options: [
            'Envia apenas os cabeçalhos ao servidor, sem corpo',
            'Solicita uma resposta idêntica ao GET, mas SEM o corpo de resposta',
            'Retorna apenas o cabeçalho da página HTML',
            'É usado para autenticação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — serve para verificar se um recurso existe, seu tamanho ou sua data de modificação, sem pagar o custo de baixá-lo inteiro.',
        feedbackWrong:
            'O HEAD pede a mesma resposta do GET, mas sem o corpo — só os cabeçalhos. É útil para checar existência ou metadados de um recurso sem transferi-lo.',
    },
    {
        id: 'q10',
        exams: ['fundamentos'],
        question: 'O que indica a faixa 1xx dos códigos de status HTTP?',
        options: [
            'Sucesso',
            'Informativo — a requisição foi recebida e está em processamento',
            'Erro do cliente',
            'Redirecionamento',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As cinco faixas: 1xx informativo, 2xx sucesso, 3xx redirecionamento, 4xx erro do cliente e 5xx erro do servidor.',
        feedbackWrong:
            'A faixa 1xx é informativa: indica que a requisição foi recebida e segue em processamento. Sucesso é 2xx e redirecionamento é 3xx.',
    },
    {
        id: 'q11',
        exams: ['fundamentos'],
        question: 'Qual tipo MIME identifica dados em formato JSON?',
        options: ['text/json', 'application/json', 'text/javascript', 'application/xml'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Os outros vistos na disciplina: text/html para documentos HTML, image/png para imagens e application/xml para XML.',
        feedbackWrong:
            'É application/json. O tipo MIME informa ao cliente como interpretar o corpo da mensagem — errá-lo faz o navegador tratar JSON como texto puro, por exemplo.',
    },
    {
        id: 'q12',
        exams: ['fundamentos'],
        question: 'Quais são as SEIS partes de uma URL, segundo o material?',
        options: [
            'Protocolo, domínio, porta, caminho, query string e fragmento',
            'Protocolo, domínio, caminho e parâmetros',
            'Esquema, host, rota e âncora',
            'HTTP, WWW, domínio, extensão, pasta e arquivo',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Em http://www.exemplo.com:80/caminho?query=parametro#ancora, cada parte cumpre um papel: o protocolo diz COMO acessar, o domínio e a porta dizem ONDE, e caminho, query e fragmento dizem O QUÊ.',
        feedbackWrong:
            'São protocolo, nome de domínio, porta, caminho, query string e fragmento. A porta (:80 ou :443) costuma ficar implícita, mas faz parte da estrutura.',
    },
    {
        id: 'q13',
        exams: ['fundamentos'],
        question: 'Quais são as quatro partes da estrutura básica de um documento HTML?',
        options: [
            'header, nav, main e footer',
            'DOCTYPE, <html>, <head> e <body>',
            '<html>, <style>, <script> e <body>',
            'DOCTYPE, <meta>, <title> e <body>',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: o DOCTYPE declara o tipo e a versão, <html> encapsula tudo, <head> traz os metadados e <body> traz o conteúdo visível. As tags de seção (header, nav, main) são elementos dentro do body.',
        feedbackWrong:
            'São DOCTYPE, <html>, <head> e <body>. As tags header, nav e main são elementos semânticos que ficam DENTRO do body, não a estrutura do documento.',
    },
    {
        id: 'q14',
        exams: ['fundamentos'],
        question: 'No DOM, o documento é representado como que estrutura?',
        options: [
            'Uma lista encadeada de elementos',
            'Uma ÁRVORE de nós, em que cada parte (elemento, atributo, texto) é um nó',
            'Uma tabela de hash indexada por id',
            'Um array bidimensional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a estrutura de árvore é o que dá sentido a métodos como appendChild e firstChild. O DOM permite manipular estrutura e conteúdo em tempo real.',
        feedbackWrong:
            'O DOM representa o documento como uma árvore de nós. É por isso que se fala em nó pai, nó filho e percurso da árvore ao manipular a página.',
    },
    {
        id: 'q15',
        exams: ['fundamentos'],
        question: 'Quais são os quatro tipos de nó no DOM?',
        options: [
            'Público, privado, estático e dinâmico',
            'Elemento, atributo, texto e comentário',
            'Bloco, inline, flex e grid',
            'Head, body, script e style',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Nós de elemento são as tags; de atributo são id e class; de texto é o conteúdo textual; e de comentário são os comentários do HTML — que também estão na árvore.',
        feedbackWrong:
            'São nós de elemento (tags), de atributo (id, class), de texto (conteúdo textual) e de comentário. Até os comentários fazem parte da árvore do DOM.',
    },
    {
        id: 'q16',
        exams: ['fundamentos'],
        question: 'Qual a diferença entre querySelector e querySelectorAll?',
        options: [
            'querySelector busca por id; querySelectorAll busca por classe',
            'querySelector retorna o PRIMEIRO elemento que corresponde ao seletor CSS; querySelectorAll retorna TODOS',
            'querySelector é síncrono e querySelectorAll é assíncrono',
            'Não há diferença prática',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e ambos aceitam qualquer seletor CSS, não só id ou classe. Quem busca especificamente por id é o getElementById.',
        feedbackWrong:
            'querySelector devolve só o primeiro que casa com o seletor CSS; querySelectorAll devolve todos. Os dois aceitam qualquer seletor CSS válido.',
    },
    {
        id: 'q17',
        exams: ['fundamentos'],
        question: 'Qual método do DOM ADICIONA um elemento criado à página?',
        options: ['createElement()', 'appendChild()', 'querySelector()', 'addEventListener()'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O createElement apenas CRIA o elemento em memória — ele só aparece na página depois do appendChild. Esquecer esse segundo passo é um erro clássico.',
        feedbackWrong:
            'É o appendChild. O createElement cria o elemento, mas ele fica solto em memória até ser inserido na árvore com appendChild.',
    },
    {
        id: 'q18',
        exams: ['fundamentos'],
        question: 'Sobre o que a Fetch API se baseia, e o que ela substitui?',
        options: [
            'Baseia-se em callbacks e substitui o jQuery',
            'Baseia-se em PROMISES e substitui o XMLHttpRequest',
            'Baseia-se em WebSockets e substitui o Ajax',
            'Baseia-se em async/await e substitui o DOM',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Promises tornam o código mais legível que o encadeamento de callbacks do XMLHttpRequest — o padrão é then para converter em JSON, then para tratar os dados e catch para os erros.',
        feedbackWrong:
            'A Fetch API é baseada em Promises e substitui o XMLHttpRequest nas operações Ajax. Ajax é a técnica; XMLHttpRequest e Fetch são as APIs que a implementam.',
    },
    {
        id: 'q19',
        exams: ['fundamentos'],
        question: 'O que o Ajax permite fazer?',
        options: [
            'Executar código do servidor no navegador',
            'Carregar dados de forma ASSÍNCRONA sem recarregar a página',
            'Criar animações em CSS',
            'Compilar JavaScript antes do envio',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é isso que melhora performance e experiência do usuário: a página continua utilizável enquanto os dados chegam, em vez de piscar num recarregamento inteiro.',
        feedbackWrong:
            'Ajax permite carregar dados assincronamente sem recarregar a página, mantendo a interface responsiva enquanto a requisição acontece.',
    },
    {
        id: 'q20',
        exams: ['backend'],
        question: 'Na estrutura de um projeto Node/Express, qual a diferença entre as pastas public e views?',
        options: [
            'public é para código e views para imagens',
            'public tem arquivos estáticos processados no CLIENTE; views tem arquivos processados no SERVIDOR antes de irem ao cliente',
            'public é para produção e views para desenvolvimento',
            'São equivalentes; a escolha é estilística',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e essa é a materialização da separação cliente/servidor na estrutura de pastas. O que está em public é servido como veio; o que está em views é renderizado com dados antes de sair.',
        feedbackWrong:
            'public guarda estáticos (CSS, JS, imagens) servidos direto ao cliente; views guarda templates processados no servidor para gerar HTML dinamicamente.',
    },
    {
        id: 'q21',
        exams: ['backend'],
        question: 'Quais são as quatro formas de o servidor RECEBER dados do cliente?',
        options: [
            'GET, POST, PUT e DELETE',
            'Parâmetros de URL (query strings), corpo da requisição, cabeçalhos HTTP, e cookies e sessões',
            'JSON, XML, HTML e texto',
            'Formulário, link, botão e API',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. GET, POST, PUT e DELETE são MÉTODOS, não formas de receber dados — cada método pode carregar dados por qualquer uma dessas quatro vias.',
        feedbackWrong:
            'São query strings, corpo da requisição, cabeçalhos HTTP, e cookies/sessões. Os métodos HTTP são outra dimensão: dizem a INTENÇÃO da requisição, não por onde os dados chegam.',
    },
    {
        id: 'q22',
        exams: ['backend'],
        question: 'Como se acessa um PATH PARAM numa rota Express como app.get(\'/produto/:id\')?',
        options: ['req.query.id', 'req.params.id', 'req.body.id', 'req.headers.id'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: req.params.id. O :id na rota é um espaço reservado, e o valor vem do caminho — acessando /produto/123, req.params.id vale "123".',
        feedbackWrong:
            'Path param se acessa por req.params. O req.query é para a query string (depois do ?) e o req.body para dados no corpo da requisição.',
    },
    {
        id: 'q23',
        exams: ['backend'],
        question: 'Em /pesquisar?categoria=eletronicos&precoMaximo=1000, como se acessa "eletronicos"?',
        options: ['req.params.categoria', 'req.query.categoria', 'req.body.categoria', 'req.url.categoria'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: req.query.categoria. A query string vem depois do ponto de interrogação e serve tipicamente para filtrar, ordenar e paginar — enquanto o path param identifica UM recurso.',
        feedbackWrong:
            'É req.query.categoria. Tudo que vem depois do ? é query string, acessível por req.query. O req.params serve para os trechos declarados com : na própria rota.',
    },
    {
        id: 'q24',
        exams: ['backend'],
        question: 'Por que é necessário um middleware para acessar dados de formulário em req.body?',
        options: [
            'Por exigência de segurança do Express',
            'Porque o Express não interpreta o corpo da requisição por padrão — o middleware faz o parse do formato recebido',
            'Porque req.body só funciona com HTTPS',
            'Porque formulários usam um protocolo diferente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sem o middleware (bodyParser.urlencoded ou express.urlencoded), req.body fica indefinido — e é a causa mais frequente do erro "cannot read property of undefined" em quem está começando.',
        feedbackWrong:
            'O Express não faz o parse do corpo por padrão; o middleware é que interpreta o formato e popula req.body. Sem ele, req.body vem indefinido.',
    },
    {
        id: 'q25',
        exams: ['backend'],
        question: 'Por que a validação no BACKEND é obrigatória, mesmo havendo validação no formulário HTML?',
        options: [
            'Por exigência das normas de acessibilidade',
            'Porque a validação no cliente pode ser contornada — qualquer pessoa pode enviar uma requisição direto ao servidor, ignorando o formulário',
            'Porque o HTML5 não tem recursos de validação',
            'Porque a validação no cliente é mais lenta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A validação no cliente é UX — evita ida e volta desnecessária. A validação no servidor é SEGURANÇA, porque é a única que o usuário não controla. As duas coexistem com propósitos diferentes.',
        feedbackWrong:
            'Porque o cliente é território do usuário: basta usar cURL ou Postman para enviar qualquer coisa direto ao servidor. Validar no cliente melhora a experiência; validar no servidor é o que de fato protege.',
    },
    {
        id: 'q26',
        exams: ['backend'],
        question:
            'Na atividade de validação de formulário da turma, quais validações deviam ser feitas NO SERVIDOR?',
        options: [
            'Apenas verificar se os campos não estavam vazios',
            'Campos obrigatórios (exceto o checkbox), datas válidas no nascimento, e-mail com @ e ponto, DDDs válidos no Brasil, e no máximo 3 atividades extracurriculares',
            'Apenas validar o formato do e-mail',
            'Verificar a força da senha e o CPF',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — cinco regras, incluindo uma que exigia pesquisa externa (a lista de DDDs válidos). A resposta devia ser uma página HTML com sucesso ou com as informações sobre o preenchimento incorreto.',
        feedbackWrong:
            'Eram cinco validações: obrigatoriedade (menos o checkbox), datas válidas, e-mail com @ e ponto, DDDs brasileiros válidos e no máximo 3 atividades extracurriculares.',
    },
    {
        id: 'q27',
        exams: ['backend'],
        question:
            'Qual é o bom padrão de resposta quando a validação no servidor encontra erros num formulário?',
        options: [
            'Redirecionar para a página inicial',
            'Reexibir o formulário com os dados que o usuário digitou e a mensagem de erro ao lado de cada campo com problema',
            'Retornar apenas o código 400 sem corpo',
            'Limpar o formulário e pedir para preencher de novo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é o padrão que o guia da disciplina implementa, com value="<%= data.nome %>" reexibindo o que foi digitado. Descartar tudo e obrigar a redigitar é o comportamento que mais irrita usuários.',
        feedbackWrong:
            'O padrão é reexibir o formulário preenchido com os dados digitados e mostrar o erro por campo. Limpar tudo força o usuário a redigitar informação que já havia fornecido corretamente.',
    },
    {
        id: 'q28',
        exams: ['backend'],
        question: 'Por que os cookies existem?',
        options: [
            'Para acelerar o carregamento de imagens',
            'Porque o HTTP é um protocolo SEM ESTADO — sem eles, o servidor trataria cada requisição como um cliente novo',
            'Para criptografar a comunicação',
            'Para comprimir os dados enviados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Conforme a RFC-2616, cada par de requisição e resposta é independente dos demais. O cookie é o mecanismo que devolve memória a um protocolo que não tem nenhuma.',
        feedbackWrong:
            'Existem porque o HTTP não tem estado: cada requisição é independente. O cookie permite ao servidor reconhecer o mesmo cliente entre requisições sucessivas.',
    },
    {
        id: 'q29',
        exams: ['backend'],
        question: 'Como funciona o ciclo de vida de um cookie?',
        options: [
            'O cliente cria o cookie e o servidor o lê quando quiser',
            'O servidor define o cookie ao responder; o navegador o armazena e o REENVIA na próxima solicitação ao mesmo servidor',
            'O cookie fica só no servidor, indexado pelo IP do cliente',
            'O cookie é gerado pelo DNS durante a resolução do domínio',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o "ao mesmo servidor" importa: o navegador não envia os cookies de um site para outro, o que é a base do isolamento entre domínios.',
        feedbackWrong:
            'O servidor define o cookie na resposta, o navegador armazena e reenvia automaticamente nas próximas requisições àquele mesmo servidor.',
    },
    {
        id: 'q30',
        exams: ['backend'],
        question: 'O que é o IDENTIFICADOR DE SESSÃO e qual sua forma?',
        options: [
            'O endereço IP do usuário, registrado no servidor',
            'Um token atribuído na criação da sessão, trocado a cada requisição HTTP, com a forma de um par nome=valor',
            'O nome de usuário criptografado',
            'Um número sequencial visível na URL',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É ele que permite ao servidor reconhecer o usuário em qualquer requisição subsequente — e por isso protegê-lo é questão de segurança: quem o obtém assume a sessão.',
        feedbackWrong:
            'É um token (par nome=valor) atribuído na criação da sessão e trocado a cada requisição. O IP não serve: muda, e vários usuários podem compartilhar o mesmo.',
    },
    {
        id: 'q31',
        exams: ['backend'],
        question: 'Sessões web só existem depois que o usuário se autentica?',
        options: [
            'Sim — sem login não há sessão',
            'Não — existem sessões PRÉ e PÓS autenticação, como a que guarda a preferência de idioma de um usuário anônimo',
            'Sim, exceto em aplicações que usam apenas cookies',
            'Não, mas as pré-autenticação não usam identificador',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o material é explícito: aplicações criam sessões para acompanhar usuários ANÔNIMOS já na primeira requisição. Depois do login, a sessão passa também a aplicar controles de acesso e liberar dados privados.',
        feedbackWrong:
            'Existem sessões antes e depois da autenticação. Antes, servem para coisas como preferência de idioma e carrinho de compras de visitante; depois, acrescentam identificação e controle de acesso.',
    },
    {
        id: 'q32',
        exams: ['backend'],
        question: 'Qual banco de dados o guia da disciplina escolhe, e por quê?',
        options: [
            'MongoDB, por ser NoSQL e flexível',
            'SQLite com better-sqlite3 — arquivo único, sem servidor externo, adequado ao contexto didático',
            'PostgreSQL, por ser o mais usado em produção',
            'MySQL, por ser o mais fácil de instalar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e a justificativa é declarada: "arquivo único, zero servidor externo". Elimina o atrito de instalar e configurar um SGBD antes de conseguir escrever a primeira linha de código.',
        feedbackWrong:
            'É SQLite com better-sqlite3, escolhido por ser arquivo único e não exigir servidor externo — o que reduz o atrito de configuração num curso.',
    },
    {
        id: 'q33',
        exams: ['backend'],
        question: 'Por que o db.js do guia usa CREATE TABLE IF NOT EXISTS?',
        options: [
            'Para evitar erro de sintaxe no SQLite',
            'Para garantir a estrutura no primeiro start sem quebrar nas execuções seguintes — a aplicação funciona logo ao ser clonada',
            'Porque o SQLite não suporta CREATE TABLE simples',
            'Para permitir múltiplas tabelas com o mesmo nome',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: quando o app sobe, se não existir o arquivo do banco ele é criado com a tabela; se já existir, nada acontece. Quem clona o repositório roda e funciona, sem passo manual de migração.',
        feedbackWrong:
            'É para ser idempotente: cria a tabela se ainda não houver, e não faz nada se já existir. Isso permite que a aplicação funcione no primeiro start sem configuração manual.',
    },
    {
        id: 'q34',
        exams: ['arquitetura'],
        question: 'Quais são as quatro camadas da arquitetura proposta no guia?',
        options: [
            'Frontend, backend, banco e testes',
            'Presentation (routes/controllers/views), Application (services), Domain (entities/ports) e Infrastructure (adapters)',
            'Model, View, Controller e Router',
            'Cliente, servidor, cache e persistência',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O MVC clássico existe DENTRO da camada de apresentação — "Routes → Controller → View EJS" —, e as outras três camadas ficam abaixo dele.',
        feedbackWrong:
            'São Presentation, Application, Domain e Infrastructure. O MVC não é a arquitetura inteira: ele organiza apenas a camada de apresentação.',
    },
    {
        id: 'q35',
        exams: ['arquitetura'],
        question: 'Qual é a característica DEFINIDORA da camada de Application (services)?',
        options: [
            'Ela contém todas as consultas SQL',
            'Ela NÃO CONHECE Express nem SQLite — orquestra casos de uso sem depender de framework ou banco',
            'Ela renderiza os templates EJS',
            'Ela define as rotas HTTP',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e é essa independência que torna o service testável sem subir servidor nem banco. Se o service importa algo do Express, a camada foi violada.',
        feedbackWrong:
            'A marca da camada de Application é não conhecer Express nem SQLite. Rotas e renderização são da Presentation; SQL é da Infrastructure.',
    },
    {
        id: 'q36',
        exams: ['arquitetura'],
        question: 'O que o padrão PORTS AND ADAPTERS (arquitetura hexagonal) organiza?',
        options: [
            'A ordem de execução dos middlewares',
            'O domínio define INTERFACES (ports) e a infraestrutura fornece IMPLEMENTAÇÕES (adapters) — a dependência aponta para dentro',
            'A divisão entre arquivos de rota e de controller',
            'O esquema de portas TCP da aplicação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O domínio declara o que precisa; a infraestrutura fornece como fazer. Por isso o domínio nunca depende de detalhe de banco ou framework — a seta de dependência aponta sempre para o núcleo.',
        feedbackWrong:
            'É a separação entre interfaces definidas pelo domínio (ports) e implementações fornecidas pela infraestrutura (adapters). Nada a ver com portas de rede.',
    },
    {
        id: 'q37',
        exams: ['arquitetura'],
        question: 'Segundo o guia, o que é preciso mudar para trocar SQLite por PostgreSQL?',
        options: [
            'Reescrever os services e os controllers',
            'Apenas o ADAPTER da camada de infraestrutura',
            'Todas as views EJS',
            'As entidades de domínio e as rotas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e esse é o benefício concreto que justifica a arquitetura. Como services e domínio dependem da INTERFACE (port), e não da implementação, trocar o banco não os alcança.',
        feedbackWrong:
            'Só o adapter da infraestrutura. Views, controllers, services, entidades e rotas ficam intactos, porque nenhum deles conhece o banco diretamente.',
    },
    {
        id: 'q38',
        exams: ['arquitetura'],
        question: 'O que é um FAKE REPOSITORY e para que serve?',
        options: [
            'Um repositório Git de exemplo',
            'Uma implementação em memória da mesma interface do repositório real, usada para testar services SEM banco de dados',
            'Um banco de dados de testes em produção',
            'Um mock automático gerado pelo Jest',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e ele só é possível porque o service depende da PORT, não da implementação. O service não percebe a diferença, e o teste roda rápido e sem efeitos colaterais.',
        feedbackWrong:
            'É uma implementação em memória da mesma interface (port) do repositório real, permitindo testar o service sem banco. É a contrapartida prática do Ports and Adapters.',
    },
    {
        id: 'q39',
        exams: ['arquitetura'],
        question: 'Qual a divisão de trabalho entre JEST e SUPERTEST?',
        options: [
            'Jest testa o frontend e Supertest o backend',
            'Jest é o framework de teste (runner, describe/it/expect, mocks, cobertura); Supertest simula requisições HTTP para testar rotas e endpoints',
            'Jest roda testes unitários e Supertest roda testes de carga',
            'São alternativas concorrentes; usa-se um ou outro',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — são complementares, não concorrentes. O Jest dá a estrutura do teste; o Supertest permite chamar as rotas Express internamente e verificar status code, corpo e cabeçalhos.',
        feedbackWrong:
            'Jest é o framework completo (executor, globais, mocking, cobertura); Supertest é a biblioteca que simula requisições HTTP contra as rotas. Usam-se juntos.',
    },
    {
        id: 'q40',
        exams: ['arquitetura'],
        question: 'Quais são os dois níveis de teste trabalhados no guia?',
        options: [
            'Teste de unidade e teste de carga',
            'Unitário do service (sem banco, com Fake Repository em memória) e E2E das rotas (subindo o app com SQLite temporário por teste)',
            'Teste manual e teste automatizado',
            'Teste de frontend e teste de backend',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O unitário verifica a regra de negócio isolada e roda rápido; o E2E verifica o caminho completo pela rota real. O SQLite temporário por teste garante isolamento entre eles.',
        feedbackWrong:
            'São o unitário do service, com Fake Repository em memória, e o E2E das rotas, subindo a aplicação com um SQLite temporário para cada teste.',
    },
    {
        id: 'q41',
        exams: ['arquitetura'],
        question: 'O que é a IMPEDÂNCIA OBJETO-RELACIONAL?',
        options: [
            'A lentidão de bancos relacionais em consultas complexas',
            'O conjunto de atritos entre o mundo dos objetos e o das tabelas: SQL espalhado, sintaxe que varia entre bancos, conversão manual de tipos e montagem dinâmica de consultas',
            'A incompatibilidade entre SQLite e PostgreSQL',
            'O custo de abrir conexões com o banco',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É o problema que o ORM se propõe a resolver — e o guia lista os sintomas concretos antes de apresentar a solução, o que é a ordem didática certa.',
        feedbackWrong:
            'É o descompasso entre objetos e tabelas, que se manifesta como SQL espalhado pelo código, sintaxe variando entre bancos, conversão manual de tipos e montagem dinâmica de consultas.',
    },
    {
        id: 'q42',
        exams: ['arquitetura'],
        question: 'O que um ORM faz?',
        options: [
            'Substitui o banco de dados relacional por um NoSQL',
            'Mapeia classes para tabelas e atributos para colunas, gera o SQL automaticamente, converte tipos e permite trocar de banco sem reescrever o service',
            'Otimiza as consultas SQL escritas à mão',
            'Cria automaticamente a interface web do CRUD',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: findAll vira SELECT, create vira INSERT, update vira UPDATE, e conversões como array para string acontecem sozinhas. O ORM não substitui o banco relacional — ele faz a ponte com ele.',
        feedbackWrong:
            'ORM significa Object-Relational Mapping: mapeia classes para tabelas e atributos para colunas, gera SQL automaticamente e converte tipos. Continua usando banco relacional.',
    },
    {
        id: 'q43',
        exams: ['arquitetura'],
        question:
            'Ao trocar o repositório de SQL manual pelo Sequelize, o que muda nas camadas superiores da aplicação?',
        options: [
            'Mudam os services e os controllers',
            'NADA — views, controllers, services, entidades e rotas ficam intactos; só a camada de Infrastructure muda',
            'Mudam apenas as views',
            'Muda toda a aplicação, por isso a migração é cara',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o material chama isso de "o ponto-chave do Ports and Adapters". A troca do repositório manual pelo baseado em ORM é a demonstração prática de que a arquitetura entrega o que prometeu.',
        feedbackWrong:
            'Nada muda acima da infraestrutura. A cadeia passa de RepositorySqlite para RepositorySequelize, mas o service continua conversando com a mesma interface.',
    },
    {
        id: 'q44',
        exams: ['arquitetura'],
        question: 'O que a atividade "Atualizando 4 divs simultaneamente" pedia?',
        options: [
            'Criar quatro páginas HTML diferentes',
            'Usar Fetch API e DOM API para atualizar quatro seções da página, com quatro requisições ou quatro APIs diferentes, analisando o carregamento assíncrono',
            'Implementar quatro rotas no backend Express',
            'Fazer quatro validações de formulário',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o ponto pedagógico era observar o comportamento ASSÍNCRONO: as quatro divs se preenchem conforme cada resposta chega, não necessariamente na ordem em que foram pedidas.',
        feedbackWrong:
            'Pedia usar Fetch API com DOM API para atualizar quatro divs da mesma página, com quatro requisições ou APIs distintas, validando o carregamento assíncrono no navegador.',
    },
    {
        id: 'q45',
        exams: ['arquitetura'],
        question:
            'Na atividade de backend para diferentes requisições, qual regra de negócio devia ser garantida no servidor?',
        options: [
            'Que todo aluno tivesse e-mail institucional',
            'Que NÃO houvesse alunos com a mesma matrícula, tanto na inserção quanto na atualização',
            'Que o nome tivesse no mínimo três caracteres',
            'Que as requisições usassem apenas GET e POST',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o enunciado exige nos DOIS casos, inserção e atualização. É fácil lembrar de checar ao inserir e esquecer ao editar, deixando a duplicidade entrar por outro caminho.',
        feedbackWrong:
            'A regra era impedir matrículas duplicadas na inserção E na atualização. Validar só na inserção deixa a porta aberta para a edição criar a duplicidade.',
    },
    {
        id: 'q46',
        exams: ['arquitetura'],
        question: 'O que a metodologia de CODIFICAÇÃO EM PARES prevê, segundo o plano de curso?',
        options: [
            'Cada aluno programa sozinho e depois compara com o colega',
            'Duplas trabalham juntas revezando o teclado: uma pessoa lidera digitando enquanto a outra sugere, com troca em tempo definido pelo professor',
            'Um aluno programa e o outro apenas documenta',
            'Grupos de quatro pessoas dividem os módulos entre si',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o rodízio é essencial: sem ele, uma pessoa digita o semestre inteiro e a outra assiste, que é justamente o que a prática pretende evitar.',
        feedbackWrong:
            'A dupla trabalha junta, revezando o teclado em intervalos definidos pelo professor — quem não está digitando faz sugestões, e os papéis se invertem periodicamente.',
    },
];
