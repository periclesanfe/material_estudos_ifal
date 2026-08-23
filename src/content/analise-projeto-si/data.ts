import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const APSI_GUIDE_CONTEXT = `
GUIA COMPLETO DE ANÁLISE E PROJETO DE SISTEMAS DE INFORMAÇÃO (APSI) - Resumo:

1. A DISCIPLINA: APSI (5º período, 80h) leva o aluno do entendimento do problema até o projeto da solução: conceitos de engenharia de software, análise e documentação de requisitos, modelagem OO, UML (casos de uso, classes, sequência, atividades, estados), arquitetura de software e o desenvolvimento de um projeto real em equipe. Avaliação da turma 2024.1 (Prof. Augusto César): AV1 = quizzes (40%) + documentos de visão e especificação (60%); AV2 = especificação do projeto + apresentação com repositório git e demo online. Bibliografia: Sommerville, Marco Tulio Valente (Engenharia de Software Moderna), Wazlawick, Eduardo Bezerra (Princípios de Análise e Projeto de Sistemas com UML), Dennis & Wixon, Pressman e o SWEBOK. A disciplina integra o Projeto Integrador do 5º período junto com Programação Web e Gerência de Projeto.

2. ENGENHARIA DE SOFTWARE: software é o programa MAIS a documentação associada. Um bom software entrega a funcionalidade e o desempenho de que o usuário precisa sendo MANTÍVEL, CONFIÁVEL e USÁVEL. Engenharia de software é a disciplina preocupada com TODOS os aspectos da produção de software (gerenciais e tecnológicos) — "desenvolver software não é apenas programação". Definição do SWEBOK: aplicação de uma abordagem sistemática, disciplinada e quantificável ao desenvolvimento, operação e manutenção de software. Engenharia de SISTEMAS é mais ampla (software, hardware, processos, pessoas); a de software é parte dela. AS QUATRO ATIVIDADES FUNDAMENTAIS: ESPECIFICAÇÃO, PROJETO, VALIDAÇÃO e EVOLUÇÃO. Histórico: anos 60 a CRISE DO SOFTWARE (problema de custo, produtividade e sobretudo QUALIDADE); 70 programação e projeto estruturados; 80 análise estruturada e ferramentas CASE; 90 análise e projeto OO e o Processo Unificado; 2000 métodos ágeis, SOA, microsserviços, DevOps e cloud. PROCESSO é uma série conectada de ações para satisfazer um objetivo — define quem faz o quê, quando e como.

3. MODELOS DE CICLO DE VIDA: MÉTODOS FORMAIS usam técnicas matemáticas e garantem programas corretos por construção, mas só se aplicam a sistemas críticos. DESENVOLVIMENTO INCREMENTAL entrega o software em incrementos, cada um com parte da funcionalidade, priorizando os requisitos mais críticos — cada iteração é um "mini projeto em cascata"; o cliente avalia mais cedo e o risco de fracasso cai. INCREMENTAL × ITERATIVO (analogia da Monalisa): no incremental somam-se PEDAÇOS COMPLETOS (a cabeça pronta, depois o corpo); no iterativo refinam-se ESBOÇOS do todo a cada volta. ITERATIVO × CASCATA: no iterativo o progresso sobe rápido e a falha tardia é minimizada; na cascata o problema aparece perto do prazo. MODELO EM ESPIRAL: cada volta é uma fase, sem fases fixas, acrescentando planejamento, tomada de decisão e ANÁLISE DE RISCOS — é complexo e exige experiência (versões de Boehm e de Pressman). MÉTODOS ÁGEIS reagem aos processos "pesados": focam no código, são iterativos e entregam software funcionando rápido. MANIFESTO ÁGIL (2001), quatro valores: indivíduos e interações mais que processos e ferramentas; software funcionando mais que documentação completa; colaboração com o cliente mais que negociação de contratos; adaptação a mudanças mais que seguir o plano — "mesmo tendo valor os itens à direita, valorizamos mais os da esquerda". MITO IMPORTANTE: ágil NÃO é caos, não significa parar de planejar e documentar. Família ágil: XP, Scrum, FDD e Lean.

4. PROCESSO UNIFICADO (RUP): criado por Booch, Jacobson e Rumbaugh; "Unified Process" no livro, RUP é o nome comercial da Rational (comprada pela IBM em 2003). É uma plataforma de processos ADAPTÁVEL. CINCO CARACTERÍSTICAS: iterativo e incremental; GUIADO POR CASOS DE USO (eles conectam todas as fases e visões); CENTRADO NA ARQUITETURA; orientado a objetos; e planejado por RISCOS (os mais críticos primeiro). SEIS PRINCÍPIOS-CHAVE: adaptar o processo, balancear prioridades dos investidores, colaborar em equipe, demonstrar valor iterativamente, elevar o nível de abstração e focar continuamente na qualidade. DUAS DIMENSÕES (o "gráfico das baleias"): o eixo HORIZONTAL é dinâmico (fases, marcos, iterações) e o VERTICAL é estático (disciplinas, atividades, artefatos, papéis). AS QUATRO FASES e seus marcos: CONCEPÇÃO/INICIAÇÃO (escopo, custos e riscos → marco Objetivos do ciclo de vida); ELABORAÇÃO (reduzir os principais riscos e definir a arquitetura executável → marco Arquitetura do ciclo de vida); CONSTRUÇÃO (desenvolver o produto completo → marco Capacidade operacional inicial); TRANSIÇÃO (entregar aos usuários finais → marco Lançamento do produto). Cada fase se divide em ITERAÇÕES (cada passagem pela sequência de disciplinas). NOVE DISCIPLINAS — básicas: modelagem de negócios, requisitos, análise e projeto, implementação, testes e implantação; de suporte: gerenciamento de projeto, gerenciamento de configuração e mudanças, e ambiente. A tríade do processo: PAPÉIS (responsabilidades) executam ATIVIDADES que produzem ARTEFATOS (modelos, documentos, código). SEIS MELHORES PRÁTICAS: desenvolvimento iterativo, gerência de requisitos, arquitetura de componentes, modelagem visual, verificação da qualidade e gerenciamento de mudanças.

5. MODELAGEM DE NEGÓCIO: agrupa o contexto de negócio a partir das necessidades dos interessados. Objetivos: entender a estrutura e a dinâmica da organização-alvo, assegurar entendimento comum entre os envolvidos e DERIVAR os requisitos de sistema que sustentam a organização. Papel: Analista de Processo de Negócios; atividades: identificar, descrever, melhorar e redesenhar processos; artefato: Modelo de Domínio. NOVE QUESTÕES DE VERIFICAÇÃO do modelo de negócio: os casos de uso estão em conformidade com o negócio desejado? Todos foram localizados e juntos executam todas as atividades? Há nomes similares a mesclar? Estão alinhados com a estratégia? Cada um suporta pelo menos uma meta? Toda atividade está em ao menos um caso de uso? Há equilíbrio entre número e tamanho? Cada caso é exclusivo? Cada um envolve ao menos um agente comercial?

6. REQUISITOS: requisito é "uma condição ou capacidade com a qual o sistema deve estar de acordo" — define O QUE o sistema faz e sob QUAIS LIMITAÇÕES opera. NÍVEIS: requisitos de USUÁRIO (linguagem natural e diagramas, alto nível, lidos por gerentes e usuários) e requisitos de SISTEMA (detalhados, definem exatamente o que será implementado, podendo ser contratuais, lidos por arquitetos e desenvolvedores). REQUISITOS FUNCIONAIS (RF) declaram os serviços que o sistema deve fornecer, como reage a entradas e como se comporta em situações — e às vezes o que NÃO deve fazer. REQUISITOS NÃO FUNCIONAIS (RNF) são restrições aos serviços e aplicam-se ao sistema COMO UM TODO, em três famílias: DE PRODUTO (desempenho, espaço, confiabilidade, proteção, usabilidade), ORGANIZACIONAIS (operacionais, de desenvolvimento, ambientais) e EXTERNOS (reguladores, legais, éticos). Exemplo clássico (MHC-PMS de Sommerville): o requisito de usuário "gerar relatórios mensais de custo de medicamentos por clínica" desdobra-se em cinco requisitos de sistema detalhando data de geração, conteúdo, separação por dosagem e controle de acesso. ENGENHARIA DE REQUISITOS é o processo de DESCOBRIR, ANALISAR, DOCUMENTAR e VERIFICAR esses serviços e restrições, em duas grandes fases: (1) DESCOBRIR E ANALISAR — recebimento da demanda, análise da demanda (entender o problema e gerar lista de dúvidas), entendimento macro (cenário, premissas, restrições, partes interessadas) e avaliação de viabilidade; (2) DOCUMENTAR E VALIDAR — documentar a especificação, validar (revisar, prototipar, testes de aceitação) e gerenciar (mudanças, rastreamento, medidas). Um survey com 228 empresas de 16 países apontou como maiores desafios: requisitos incompletos ou não documentados (48%), falhas de comunicação com clientes (41%), requisitos em constante mudança (33%) e requisitos abstratos (33%). SOFT SKILLS do engenheiro de requisitos: capacidade de ouvir, empatia, raciocínio lógico, organização e atenção aos detalhes.

7. MODELO DE CASOS DE USO (MCU): representa as funcionalidades EXTERNAMENTE OBSERVÁVEIS do sistema e os elementos externos que interagem com ele; serve de comunicação entre clientes, usuários e desenvolvedores e de contrato de implementação. Clientes validam o que o sistema fará, desenvolvedores refinam requisitos, projetistas encontram CLASSES e testadores definem CASOS DE TESTE. É composto por uma parte TEXTUAL e uma GRÁFICA (o diagrama de casos de uso, ou diagrama de contexto). ATOR é o elemento EXTERNO que interage e troca mensagens com o sistema; representa um PAPEL, não uma pessoa (nomeia-se "Fornecedor", não "João"). Categorias de ator: cargos, organizações, outros sistemas e equipamentos. CASO DE USO é a especificação de uma sequência de interações entre o sistema e agentes externos, definindo parte da funcionalidade SEM revelar estrutura interna. DIMENSÕES DE ESTILO da descrição: grau de ABSTRAÇÃO (essencial, sem tecnologia × real, com detalhes de implementação), FORMATO (contínuo, numerado ou tabular em duas colunas ator/sistema) e grau de DETALHAMENTO (sucinta × expandida). ESPECIFICAÇÃO DETALHADA de um caso de uso: nome, sumário, atores (primário e secundários), FLUXO PRINCIPAL, FLUXOS ALTERNATIVOS, FLUXO DE EXCEÇÃO, PRÉ-CONDIÇÕES, PÓS-CONDIÇÕES e REGRAS DE NEGÓCIO. RELACIONAMENTOS: comunicação (ator—caso de uso), INCLUDE (um caso de uso SEMPRE invoca outro), EXTEND (estende condicionalmente) e generalização (entre atores ou entre casos de uso).

8. DOCUMENTOS DO RUP: o DOCUMENTO DE VISÃO é o artefato de alto nível que documenta os requisitos principais, as características-chave e as restrições do projeto; suas seções incluem introdução, POSICIONAMENTO (oportunidade de negócios, instrução do problema e instrução da posição do produto), descrições do interessado e do usuário (perfis, ambiente, necessidades principais), visão geral do produto, recursos, restrições, faixas de qualidade, precedência e prioridade. Duas tabelas características: a do PROBLEMA ("o problema de… afeta… o impacto é… uma solução bem-sucedida seria…") e a da POSIÇÃO DO PRODUTO ("Para… Que… O produto é uma… Que… A menos que… Nosso produto…"). Já a SRS (Especificação de Requisitos de Software) é o documento DETALHADO, com introdução, descrição geral (relatório sintético do modelo de casos de uso e premissas), requisitos específicos (os relatórios de CASO DE USO, que cobrem a maioria dos funcionais, mais os REQUISITOS SUPLEMENTARES, que são os não funcionais e restrições de design) e informações de suporte. Distinção-chave: VISÃO é estratégica e de alto nível; SRS é tática e detalhada. Exemplo resolvido da disciplina: o SCA (Sistema de Controle Acadêmico do IFAL), com atores Aluno, Professor, Coordenador, CRA, SGP e Sistema de Faturamento, dez casos de uso especificados e sete regras de negócio (máximo de créditos, capacidade da turma, pré-requisitos, habilitação para lecionar, limite de cancelamentos, política de avaliação e prioridade FIFO na lista de espera) referenciadas pelos casos de uso — rastreabilidade regra ↔ caso de uso.

9. MODELAGEM DE CLASSES: o modelo de objetos representa o aspecto ESTRUTURAL e ESTÁTICO do sistema. O modelo de classes de ANÁLISE representa termos do DOMÍNIO e descreve o PROBLEMA sem considerar a solução — um "dicionário visual" de conceitos. CLASSE descreve objetos por ATRIBUTOS (informações que armazena) e OPERAÇÕES (ações que sabe realizar), com visibilidade pública (+), privada (−) ou protegida (#). ASSOCIAÇÕES representam ligações formadas entre OBJETOS durante a execução; recebem adornos de NOME, DIREÇÃO DE LEITURA e PAPEL. MULTIPLICIDADE (cardinalidade) indica os limites inferior e superior: 1..1 (ou 1), 0..* (ou *), 1..*, 0..1 ou um intervalo específico; há duas por associação, uma em cada extremo. CONECTIVIDADE é o tipo resultante (um-para-um, um-para-muitos, muitos-para-muitos). PARTICIPAÇÃO indica se a associação é necessária: se o valor MÍNIMO da multiplicidade é 1, a participação é OBRIGATÓRIA; caso contrário, OPCIONAL. Outros elementos: agregação e composição (parte-todo), generalização/herança e classes de associação.

10. MECANISMOS GERAIS DA UML: ESTEREÓTIPOS estendem o significado de um elemento e podem ser GRÁFICOS (um ícone) ou DE RÓTULO (nome entre << e >>, como <<fronteira>>). NOTAS EXPLICATIVAS comentam partes do diagrama, ligadas por linha tracejada. ETIQUETAS (tagged values) acrescentam propriedades na forma { tag = valor }. RESTRIÇÕES estendem ou alteram a semântica natural de um elemento. A OCL (Object Constraint Language) é a linguagem formal da UML para restrições, com estrutura CONTEXTO (o domínio de aplicação), PROPRIEDADE (um componente do contexto) e OPERAÇÃO (o que se aplica), podendo expressar navegação entre objetos, pré e pós-condições. PACOTES agrupam artefatos, com visibilidade por elemento e relacionamentos de dependência que formam o diagrama de pacotes.

11. IDENTIFICAÇÃO DE CLASSES: o problema central é identificar CORRETA e COMPLETAMENTE classes, atributos e operações. TÉCNICAS: (a) CATEGORIAS DE CONCEITOS — varrer o domínio buscando conceitos concretos, papéis de pessoas, eventos, lugares, organizações e conceitos abstratos; (b) ANÁLISE TEXTUAL DE ABBOTT (ATA) — destacar SUBSTANTIVOS nos documentos (viram classes candidatas ou atributos) e VERBOS, com a regra: verbos de AÇÃO viram operações, verbos com sentido de "TER" viram agregação/composição, verbos com sentido de "SER" viram generalização e os demais viram associações; sua limitação é depender da completude e do estilo do texto; (c) ANÁLISE DE CASOS DE USO, técnica do Processo Unificado, em que se analisa o texto de cada caso de uso (fluxos, pré e pós-condições) até cobrir todos. CATEGORIZAÇÃO BCE (Jacobson, 1992), com os estereótipos <<boundary>>, <<control>> e <<entity>>, agrupa objetos pelo TIPO DE RESPONSABILIDADE: ENTIDADE guarda informações e regras de negócio, é persistente e tem ciclo de vida longo, participando de vários casos de uso; FRONTEIRA comunica o sistema com os atores (telas, relatórios, protocolos) e é dependente do ambiente; CONTROLE é a ponte entre fronteira e entidade, controlando a lógica de execução DE UM CASO DE USO. O BCE tem correspondência (não equivalência) com o MVC e é a ligação entre análise e projeto; sua importância é localizar as mudanças. A VCP (Visão de Classes Participantes) é o diagrama das classes que participam da realização de UM caso de uso — o UP recomenda uma VCP por caso de uso: uma fronteira por interface principal, uma por ator não humano, um ou mais controladores e uma entidade por conceito do negócio.

12. DIAGRAMAS DE INTERAÇÃO: o DIAGRAMA DE SEQUÊNCIA captura um CENÁRIO de um caso de uso, com linhas de vida verticais e mensagens horizontais em ordem temporal. Elementos: LINHA DE VIDA (linha tracejada), BARRA DE ATIVAÇÃO (o objeto está processando), mensagem SÍNCRONA (seta sólida, o remetente aguarda), ASSÍNCRONA (seta aberta, não aguarda) e de RETORNO (seta tracejada), criação de objeto e destruição (X ao fim da linha), além dos FRAGMENTOS alt (alternativas com condição), opt (opcional) e loop (repetição). O DIAGRAMA DE COMUNICAÇÃO é equivalente, mas enfatiza os vínculos entre participantes e ordena por NUMERAÇÃO das mensagens (1, 1.1, 1.2, 2). A VISÃO GERAL DE INTERAÇÃO, nova na UML 2, mistura atividades com sequência.

13. DIAGRAMA DE ATIVIDADES: descreve lógica de procedimento, processo de negócio ou fluxo de trabalho; é como um fluxograma, MAS suporta comportamento PARALELO, e é orientado a FLUXOS DE CONTROLE (o de máquina de estados é orientado a EVENTOS). Elementos: estado AÇÃO (instantâneo) × estado ATIVIDADE (leva tempo); estado inicial único; estados finais possivelmente múltiplos; condições de guarda entre colchetes; RAMIFICAÇÃO/decision (uma entrada, várias saídas com guardas, podendo ter [else]) e UNIÃO/merge; BIFURCAÇÃO/fork (dispara fluxos PARALELOS) e JUNÇÃO/join (só prossegue quando TODAS as entradas chegaram); RAIAS ou swimlanes, que dividem o diagrama por entidade responsável; e fluxo de objeto.

14. MÁQUINA DE ESTADOS: ESTADO é a situação na vida de um objeto em que ele satisfaz alguma condição ou realiza alguma atividade — é função dos VALORES DOS ATRIBUTOS e das LIGAÇÕES, ou seja, uma abstração deles. Há um estado inicial e estados finais opcionais. A TRANSIÇÃO é rotulada como evento(parâmetros) [guarda] / ação. QUATRO TIPOS DE EVENTO: de CHAMADA (mensagem de outro objeto, síncrono), de SINAL (assíncrono, o remetente continua), TEMPORAL (after(30 segundos)) e de MUDANÇA (when(saldo > 0)). A CONDIÇÃO DE GUARDA faz a transição disparar somente se o evento ocorre E a guarda é verdadeira. Distinção fina: AÇÃO está associada à TRANSIÇÃO e não pode ser interrompida; ATIVIDADE está associada ao ESTADO e pode ser interrompida. Exemplos da disciplina: ContaBancária (disponível ↔ bloqueada) e OfertaDisciplina (Aberta, Lotada, Cancelada, Fechada).

15. PANORAMA DA UML: proposta em 1995 para fundir notações concorrentes e padronizada em 1997; a versão 2.5 tem 14 DIAGRAMAS. ESTRUTURAIS: classes, estrutura composta, componentes, implantação, pacotes, perfil e objetos. COMPORTAMENTAIS: caso de uso, atividades, máquina de estados e os quatro de interação (sequência, comunicação, visão geral de interação e temporização). O diagrama de OBJETOS mostra INSTÂNCIAS com valores, complementando o de classes. DOIS USOS DA UML: como BLUEPRINT (planta detalhada, modelo completo e formal) e como SKETCH (esboço informal para conversar sobre ou documentar uma parte do código) — o uso como sketch é hoje o mais comum. Não é obrigatório usar todos os diagramas: cada um oferece uma visão do sistema.

16. DO DIAGRAMA AO CÓDIGO: exemplo integrador da disciplina, o caso de uso Registrar Inscrição foi modelado em PlantUML e implementado em JavaScript. As classes seguem o padrão de responsabilidades: RealizarInscricaoControlador (controle) recebe o TurmaRepositorio pelo construtor (injeção de dependência) e orquestra; TurmaRepositorio (persistência) busca a turma por código; Turma e Inscricao (entidades) guardam o estado do domínio. No diagrama de sequência, o ator Aluno chama registrarInscricao(codigoTurma), o controlador pede getTurma ao repositório, recebe o retorno, chama inscrever(aluno) na turma, que cria a Inscricao com o estereótipo <<create>>. No código, o fluxo de exceção do caso de uso ("turma não encontrada") aparece como um Error lançado pelo controlador.
17. PROJETO DE CLASSES: no projeto detalham-se os MÉTODOS (construção e destruição, acesso, manutenção de associações, e os que têm inverso óbvio como adicionar/remover ou depositar/sacar) e as ASSOCIAÇÕES. DEPENDÊNCIA indica que uma classe depende dos serviços de outra: na análise usa-se apenas a dependência POR ATRIBUTO (estrutural); no projeto surgem as NÃO ESTRUTURAIS (por variável global, por variável local e por PARÂMETRO), desenhadas com linha tracejada direcionada do cliente para o fornecedor. REGRA DE OURO: a dependência por atributo é a forma MAIS FORTE — transformar associações em dependências não estruturais AUMENTA o encapsulamento e DIMINUI o acoplamento. NAVEGABILIDADE: a associação pode ser BIDIRECIONAL (conhecimento mútuo) ou UNIDIRECIONAL (só um extremo conhece o outro); a escolha sai do estudo dos diagramas de interação, porque o sentido das mensagens revela quem precisa conhecer quem. IMPLEMENTAÇÃO: conectividade 1:1 vira um atributo do tipo da outra classe; 1:N e N:M viram atributos de COLEÇÃO, normalmente com classes parametrizadas como Set<Participacao>. HERANÇA: por quantidade de superclasses é SIMPLES ou MÚLTIPLA; por forma de reúso é de IMPLEMENTAÇÃO (reusa código) ou de INTERFACE (reusa assinaturas e se compromete a implementá-las). Classes ABSTRATAS não geram instâncias diretamente, organizam hierarquias e viabilizam o polimorfismo.

18. ARQUITETURA DE SOFTWARE — ESTILOS: TRÊS CAMADAS (cliente/GUI, aplicação com a lógica de negócio, banco de dados) e DUAS CAMADAS (cliente e servidor de BD, com a desvantagem de concentrar o processamento no cliente). MVC, nascido nos anos 80 com Smalltalk para interfaces gráficas, divide as classes em VISÃO (as GUIs), CONTROLE (trata eventos de mouse e teclado) e MODELO (os dados) — não foi pensado para aplicações distribuídas, mas o MVC WEB o adaptou por frameworks como Rails, Django e Spring, resultando em algo parecido com três camadas. REPOSITÓRIO ou BLACKBOARD: vários subsistemas manipulam a mesma base — eficiente para compartilhar dados e fácil de integrar novos subsistemas, ao custo de todos precisarem entender o formato dos dados e da dificuldade de distribuí-los. DUTOS E FILTROS (pipes and filters): dutos conduzem os dados e FILTROS os transformam, em sequência ou em paralelo; os filtros são modulares e substituíveis, mas o formato dos dados precisa ser acordado. CLEAN ARCHITECTURE (Robert C. Martin) organiza o sistema em camadas concêntricas — ENTITIES (regras de negócio da empresa), USE CASES (regras da aplicação), INTERFACE ADAPTERS e FRAMEWORKS & DRIVERS —, com as dependências sempre apontando para dentro, fundamentada em testabilidade e desacoplamento e apoiada em DDD, TDD, SOLID e padrões de projeto.

19. PRINCÍPIOS SOLID: SRP (Responsabilidade Única, "one reason to change") — reúna o que muda pelos mesmos motivos e separe o que muda por motivos diferentes. OCP (Aberto/Fechado) — um módulo deve ser aberto para EXTENSÃO e fechado para MODIFICAÇÃO, como uma Calculadora base estendida por CalcCientifica e CalcFinanceira. LSP (Substituição de Liskov) — subtipos devem poder substituir seus tipos base sem confundir quem usa a interface; o contraexemplo clássico é Square estendendo Rectangle, em que setHeight e setWidth do quadrado alteram os dois lados e quebram um teste que esperava área 200. ISP (Segregação de Interface) — mantenha interfaces PEQUENAS para que ninguém dependa do que não precisa, quebrando uma interface DAO gigante em DBAccess e FileAccess. DIP (Inversão de Dependências) — módulos de alto nível não devem depender de detalhes de baixo nível; ambos dependem de ABSTRAÇÕES, como BookingService passando a depender da interface IClientStorage em vez da classe concreta ClientCatalog.

20. PADRÕES DE PROJETO: a família ESTRUTURAL do catálogo GoF explica como montar objetos e classes em estruturas maiores mantendo-as flexíveis — Adapter, Bridge, Composite, Decorator, Facade, Flyweight e Proxy. SINGLETON resolve o problema de fazer todos os clientes usarem a MESMA instância (por exemplo, um Logger): construtor privado, atributo estático guardando a instância e um método getInstance() que a cria na primeira chamada. PROXY insere um intermediário entre o cliente e o objeto base — no exemplo da disciplina, um BookSearchProxy acrescenta cache a um BookSearch existente SEM modificar a classe original. ADAPTER cria uma classe adaptadora que implementa a interface desejada e encapsula uma classe incompatível — no exemplo, ProjetorSamsung.turnOn() e ProjetorLG.enable(timer) passam a ser usados por uma única interface Projetor.
`;

export const APSI_TOPICS: QuizTopicOption[] = [
    {
        value: 'es-processos',
        label: 'Engenharia de Software, processos e RUP',
        prompt:
            'Fundamentos de engenharia de software na disciplina APSI: definição de software (programa mais documentação) e de bom software (mantível, confiável, usável), definição de engenharia de software pelo SWEBOK, diferença entre engenharia de software e de sistemas, as quatro atividades fundamentais (especificação, projeto, validação e evolução), a crise do software e a evolução histórica das décadas de 60 a 2000, conceito de processo e de processo de software, métodos formais, desenvolvimento incremental e a diferença entre incremental e iterativo, comparação entre iterativo e cascata, modelo em espiral com análise de riscos nas versões de Boehm e Pressman, métodos ágeis e os quatro valores do Manifesto Ágil, o mito de que ágil é caos, a família de métodos ágeis (XP, Scrum, FDD, Lean); e o Processo Unificado (RUP): origem com Booch/Jacobson/Rumbaugh, as cinco características (iterativo e incremental, guiado por casos de uso, centrado na arquitetura, orientado a objetos, planejado por riscos), os seis princípios-chave, as duas dimensões (dinâmica e estática), as quatro fases com seus marcos, iterações, as nove disciplinas básicas e de suporte, a tríade papéis-atividades-artefatos e as seis melhores práticas.',
    },
    {
        value: 'requisitos-casos-uso',
        label: 'Requisitos, casos de uso e documentos',
        prompt:
            'Requisitos e casos de uso na disciplina APSI: modelagem de negócio no RUP com suas nove questões de verificação, definição de requisito, níveis de requisito de usuário e de sistema, requisitos funcionais versus não funcionais e as três famílias de não funcionais (produto, organizacionais e externos), o exemplo MHC-PMS de desdobramento de requisito de usuário em requisitos de sistema, as duas fases da engenharia de requisitos (descobrir e analisar; documentar e validar) com suas etapas, técnicas de levantamento, soft skills do engenheiro de requisitos, os desafios apontados em survey (requisitos incompletos, falhas de comunicação); modelo de casos de uso: ator como papel e suas categorias, caso de uso, dimensões de estilo da descrição (essencial versus real, formato contínuo/numerado/tabular, sucinta versus expandida), a especificação detalhada com fluxo principal, alternativo e de exceção, pré e pós-condições e regras de negócio, e os relacionamentos include, extend e generalização; documentos do RUP: documento de visão com as tabelas de problema e de posição do produto, SRS com casos de uso e requisitos suplementares, e a distinção entre visão estratégica e SRS detalhada.',
    },
    {
        value: 'modelagem-uml',
        label: 'Modelagem de classes e diagramas UML',
        prompt:
            'Modelagem orientada a objetos com UML na disciplina APSI: diagrama de classes com atributos, operações e visibilidade, associações com nome, papel e direção de leitura, multiplicidade e a notação 1..1, 0..*, 1..*, 0..1, conectividade, participação obrigatória quando o mínimo é 1, agregação, composição e generalização; mecanismos gerais da UML (estereótipos gráficos e de rótulo, notas, etiquetas, restrições, OCL com contexto-propriedade-operação, pacotes e visibilidade); técnicas de identificação de classes (categorias de conceitos, análise textual de Abbott com a regra dos verbos, análise de casos de uso), a categorização BCE de fronteira, controle e entidade com suas responsabilidades e a Visão de Classes Participantes (uma por caso de uso); diagramas de interação (sequência com linha de vida, barra de ativação, mensagens síncronas, assíncronas e de retorno, criação e destruição, fragmentos alt, opt e loop; comunicação com numeração de mensagens); diagrama de atividades (ação versus atividade, decisão e união, fork e join para paralelismo, raias); máquina de estados (estado como abstração de atributos e ligações, transição com evento, guarda e ação, os quatro tipos de evento, ação versus atividade); e o panorama dos 14 diagramas da UML 2.5 divididos em estruturais e comportamentais, com os usos blueprint e sketch.',
    },
    {
        value: 'projeto-arquitetura',
        label: 'Do projeto à arquitetura',
        prompt:
            'Transição da análise para o projeto e arquitetura de software na disciplina APSI: diferença entre análise (o que, alto nível) e projeto (como, baixo nível) e o papel dos modelos em preencher essa lacuna, classes de análise no padrão visão-controle-persistência, classes de projeto, arquitetura de software e seus estilos (camadas, MVC), princípios SOLID de projeto orientado a objetos, coesão e acoplamento, padrões de projeto do catálogo GoF, e o exemplo integrador do caso de uso Registrar Inscrição modelado em PlantUML (diagrama de classes e de sequência) e implementado em JavaScript, em que o controlador recebe o repositório por injeção de dependência, as entidades guardam o estado do domínio e o fluxo de exceção do caso de uso vira um erro lançado no código.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Análise e Projeto de Sistemas de Informação: engenharia de software e suas atividades fundamentais; modelos de ciclo de vida (cascata, incremental, iterativo, espiral e ágil com o Manifesto Ágil); o Processo Unificado com suas fases, disciplinas, artefatos e melhores práticas; modelagem de negócio; engenharia de requisitos com requisitos funcionais e não funcionais e o processo de descobrir, analisar, documentar e validar; modelo de casos de uso com atores, relacionamentos include e extend e a especificação detalhada com fluxos e regras de negócio; documento de visão e SRS do RUP; modelagem de classes com associações, multiplicidades e participação; identificação de classes pela análise textual de Abbott e pela categorização BCE, com a Visão de Classes Participantes; diagramas UML de sequência, comunicação, atividades e máquina de estados; o panorama dos diagramas estruturais e comportamentais; e a passagem do projeto para o código com arquitetura, SOLID e padrões de projeto.',
    },
];

export const APSI_EXAMS: ExamDefinition[] = [
    {
        id: 'av1',
        label: 'AV1',
        description: 'Quizzes (40%) e os documentos de visão e de especificação de requisitos (60%).',
    },
    {
        id: 'av2',
        label: 'AV2',
        description: 'Especificação do projeto (casos de uso detalhados, UML e arquitetura) e apresentação com repositório.',
    },
];

export const APSI_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'engenharia-software', title: 'Engenharia de Software', shortTitle: 'Eng. de Software', exams: ['av1'] },
    { id: 'processos', title: 'Modelos de Ciclo de Vida', shortTitle: 'Processos', exams: ['av1'] },
    { id: 'rup', title: 'Processo Unificado (RUP)', shortTitle: 'RUP', exams: ['av1'] },
    { id: 'negocio-requisitos', title: 'Modelagem de Negócio e Requisitos', shortTitle: 'Requisitos', exams: ['av1'] },
    { id: 'casos-uso', title: 'Modelagem de Casos de Uso', shortTitle: 'Casos de Uso', exams: ['av1', 'av2'] },
    { id: 'documentos', title: 'Documento de Visão e SRS', shortTitle: 'Documentos', exams: ['av1'] },
    { id: 'classes', title: 'Modelagem de Classes', shortTitle: 'Classes', exams: ['av1', 'av2'] },
    { id: 'identificacao', title: 'Identificação de Classes e VCP', shortTitle: 'Identificação', exams: ['av2'] },
    { id: 'interacao', title: 'Diagramas de Interação', shortTitle: 'Interação', exams: ['av2'] },
    { id: 'atividades-estados', title: 'Atividades e Máquina de Estados', shortTitle: 'Atividades e Estados', exams: ['av2'] },
    { id: 'panorama-uml', title: 'Panorama dos Diagramas UML', shortTitle: 'Panorama UML', exams: ['av2'] },
    { id: 'arquitetura', title: 'Projeto e Arquitetura de Software', shortTitle: 'Arquitetura', exams: ['av2'] },
    { id: 'diagrama-codigo', title: 'Do Diagrama ao Código', shortTitle: 'Diagrama → Código', exams: ['av2'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type ApsiSectionId = (typeof APSI_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['av1'],
        question: 'Segundo o material da disciplina, o que é "software"?',
        options: [
            'Apenas o programa de computador executável',
            'O programa de computador MAIS a documentação associada',
            'O conjunto de hardware e programas de uma organização',
            'Somente o código-fonte, antes da compilação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — definição de Sommerville. Software é programa E documentação; por isso a documentação é parte do produto, não um extra. E um BOM software entrega a funcionalidade e o desempenho de que o usuário precisa sendo mantível, confiável e usável.',
        feedbackWrong:
            'Software = programa + DOCUMENTAÇÃO associada (Sommerville). Essa definição sustenta a frase que abre a disciplina: "desenvolver software não é apenas programação". Hardware e pessoas pertencem à Engenharia de SISTEMAS, que é mais ampla que a de software.',
    },
    {
        id: 'q2',
        exams: ['av1'],
        question: 'Quais são as quatro atividades fundamentais da engenharia de software?',
        options: [
            'Análise, codificação, teste e implantação',
            'Especificação, projeto, validação e evolução',
            'Planejamento, execução, monitoramento e encerramento',
            'Requisitos, modelagem, arquitetura e manutenção',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: ESPECIFICAÇÃO (o que o sistema deve fazer), PROJETO (como fará), VALIDAÇÃO (verificar se atende) e EVOLUÇÃO (mudar conforme as necessidades mudam). Todo processo de software organiza essas quatro atividades de algum jeito.',
        feedbackWrong:
            'São especificação, projeto, validação e EVOLUÇÃO. A quarta costuma ser esquecida, mas é onde o software passa a maior parte da vida — e por isso "mantível" é critério de bom software. Planejar, executar e monitorar é vocabulário de gerência de projeto, não das atividades da ES.',
    },
    {
        id: 'q3',
        exams: ['av1'],
        question: 'A "crise do software" dos anos 60 começou como um problema de custo e produtividade, mas o material destaca que era, sobretudo, um problema de quê?',
        options: ['Hardware insuficiente', 'QUALIDADE', 'Falta de linguagens de programação', 'Escassez de programadores'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O desenvolvimento fora de controle apareceu como custo e prazo, mas o diagnóstico central foi a QUALIDADE — e é dela que nasce a engenharia de software como disciplina, com a busca por abordagem sistemática, disciplinada e quantificável.',
        feedbackWrong:
            'O problema central era a QUALIDADE. Custo e produtividade foram os sintomas visíveis; a resposta veio nas décadas seguintes com programação estruturada (70), análise estruturada e CASE (80), OO e Processo Unificado (90) e métodos ágeis (2000).',
    },
    {
        id: 'q4',
        exams: ['av1'],
        question: 'Usando a analogia da Monalisa do material, qual a diferença entre desenvolvimento INCREMENTAL e ITERATIVO?',
        options: [
            'São sinônimos: ambos entregam em partes',
            'No incremental somam-se PEDAÇOS COMPLETOS (a cabeça pronta, depois o corpo); no iterativo REFINAM-SE esboços do quadro inteiro a cada volta',
            'No incremental refina-se um esboço; no iterativo somam-se partes prontas',
            'O incremental é sequencial e o iterativo não tem entregas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. INCREMENTAL: cada entrega é uma parte acabada do quadro. ITERATIVO: cada volta melhora o quadro todo, do rascunho ao detalhe. Na prática os processos modernos combinam os dois — o RUP se define como "iterativo E incremental".',
        feedbackWrong:
            'Incremental = pedaços COMPLETOS somados (cabeça, depois corpo, depois detalhes). Iterativo = ESBOÇOS do todo refinados a cada volta. A confusão entre os dois é comum; o RUP adota explicitamente os dois adjetivos juntos.',
    },
    {
        id: 'q5',
        exams: ['av1'],
        question: 'O que o modelo em ESPIRAL acrescenta em relação aos demais modelos iterativos?',
        options: [
            'Entregas mais rápidas ao cliente',
            'Planejamento, tomada de decisão e sobretudo ANÁLISE DE RISCOS a cada volta — ao custo de complexidade e de exigir experiência',
            'A eliminação da documentação',
            'Fases fixas e imutáveis a cada ciclo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Na espiral cada volta é uma fase e NÃO há fases fixas — os loops são escolhidos conforme a necessidade. O diferencial é o aspecto gerencial, especialmente a análise de riscos (versões de Boehm e de Pressman). O preço: complexidade e necessidade de experiência.',
        feedbackWrong:
            'A espiral acrescenta a dimensão GERENCIAL — planejamento, decisão e ANÁLISE DE RISCOS — a cada volta, e justamente NÃO tem fases fixas. Por exigir experiência na avaliação de riscos, o material a apresenta como complexa.',
    },
    {
        id: 'q6',
        exams: ['av1'],
        question: 'Qual dos quatro valores do Manifesto Ágil está enunciado CORRETAMENTE?',
        options: [
            'Documentação completa mais que software funcionando',
            'Software funcionando mais que documentação completa e detalhada',
            'Negociação de contratos mais que colaboração com o cliente',
            'Seguir o plano inicial mais que adaptação a mudanças',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Os quatro valores: indivíduos e interações > processos e ferramentas; SOFTWARE FUNCIONANDO > documentação completa; colaboração com o cliente > negociação de contratos; adaptação a mudanças > seguir o plano. E a ressalva final: "mesmo tendo valor os itens à direita, valorizamos mais os da esquerda".',
        feedbackWrong:
            'As demais opções invertem os valores. O manifesto valoriza software funcionando, colaboração com o cliente e adaptação a mudanças — mas sem descartar o outro lado: os itens à direita TÊM valor, apenas menos. Daí o mito importante: ágil NÃO é caos, não significa parar de planejar e documentar.',
    },
    {
        id: 'q7',
        exams: ['av1'],
        question: 'Quais são as quatro fases do RUP, na ordem, e seus marcos?',
        options: [
            'Análise, projeto, codificação e testes',
            'Concepção (objetivos do ciclo de vida) → Elaboração (arquitetura do ciclo de vida) → Construção (capacidade operacional inicial) → Transição (lançamento do produto)',
            'Planejamento, execução, controle e encerramento',
            'Requisitos, modelagem, implementação e implantação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Cada fase termina num MARCO: a concepção fecha escopo, custos e riscos; a elaboração reduz os principais riscos e define a arquitetura EXECUTÁVEL; a construção produz o produto completo; a transição entrega aos usuários finais.',
        feedbackWrong:
            'As fases do RUP são Concepção/Iniciação, Elaboração, Construção e Transição, cada uma fechando num marco. Análise, projeto e implementação não são fases — são DISCIPLINAS, que atravessam todas as fases em proporções diferentes (o "gráfico das baleias").',
    },
    {
        id: 'q8',
        exams: ['av1'],
        question: 'No RUP, o que representa cada uma das duas dimensões do famoso "gráfico das baleias"?',
        options: [
            'Custo e prazo',
            'O eixo HORIZONTAL é o aspecto dinâmico (fases, marcos e iterações); o VERTICAL é o estático (disciplinas, atividades, artefatos e papéis)',
            'Requisitos funcionais e não funcionais',
            'Equipe e cliente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O tempo corre na horizontal (fases e iterações) e o conteúdo do trabalho se organiza na vertical (as nove disciplinas). As "baleias" são justamente as curvas de esforço de cada disciplina ao longo do tempo — requisitos pesa no começo, implementação no meio, implantação no fim.',
        feedbackWrong:
            'Horizontal = DINÂMICO (fases, marcos, iterações); vertical = ESTÁTICO (disciplinas, atividades, artefatos, papéis). É a leitura que explica por que nenhuma disciplina "acaba": elas apenas variam de intensidade ao longo das fases.',
    },
    {
        id: 'q9',
        exams: ['av1'],
        question: 'No RUP, qual é a relação entre papéis, atividades e artefatos?',
        options: [
            'Artefatos executam papéis que geram atividades',
            'PAPÉIS executam ATIVIDADES que produzem ARTEFATOS',
            'Atividades definem papéis que consomem artefatos',
            'São três nomes para a mesma coisa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Exemplo do material: o papel "Especificador de Requisitos" executa a atividade "Detalhar um Caso de Uso" e produz o artefato "Caso de Uso". Papel é responsabilidade (não pessoa: uma pessoa pode acumular papéis), atividade é unidade de trabalho e artefato é o resultado — modelo, documento ou código.',
        feedbackWrong:
            'A tríade é: PAPÉIS executam ATIVIDADES que geram ARTEFATOS. Papel descreve responsabilidade e comportamento (Programador, Testador); atividade tem finalidade, passos, entradas e saídas; artefato é o produto do trabalho, usado como entrada de outras atividades.',
    },
    {
        id: 'q10',
        exams: ['av1'],
        question: 'Um requisito diz "o sistema deve informar o saldo em menos de 5 segundos". Como classificá-lo?',
        options: [
            'Requisito funcional, porque descreve o serviço de informar saldo',
            'Requisito NÃO FUNCIONAL de PRODUTO (desempenho) — restringe COMO o serviço é prestado',
            'Requisito não funcional externo, por ser uma exigência legal',
            'Regra de negócio',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. "Informar o saldo" é o requisito funcional; o limite de 5 segundos é uma RESTRIÇÃO sobre ele — não funcional, da família PRODUTO (desempenho). As outras famílias: ORGANIZACIONAIS (processo, desenvolvimento, ambiente) e EXTERNOS (reguladores, legais, éticos).',
        feedbackWrong:
            'É não funcional de PRODUTO (desempenho). A pista está na estrutura: o RF diz O QUE o sistema faz; o RNF restringe COMO — com que rapidez, disponibilidade, segurança ou usabilidade. Externo seria, por exemplo, cumprir a LGPD ou uma norma do BACEN.',
    },
    {
        id: 'q11',
        exams: ['av1'],
        question: 'Qual a diferença entre requisitos de USUÁRIO e requisitos de SISTEMA?',
        options: [
            'Requisitos de usuário são funcionais; os de sistema são não funcionais',
            'Os de USUÁRIO são declarações de alto nível em linguagem natural, lidas por gerentes e usuários; os de SISTEMA são descrições detalhadas do que será implementado, lidas por arquitetos e desenvolvedores',
            'Os de usuário são escritos pelo cliente e os de sistema pelo sistema',
            'Não há diferença prática entre os dois',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É uma diferença de NÍVEL DE DETALHE e de PÚBLICO, não de tipo. No exemplo MHC-PMS, um requisito de usuário ("gerar relatórios mensais de custo por clínica") vira cinco requisitos de sistema com data de geração, conteúdo, separação por dosagem e controle de acesso.',
        feedbackWrong:
            'A distinção é de NÍVEL: usuário = alto nível, linguagem natural, para gerentes e clientes; sistema = detalhado, define exatamente o que será implementado (podendo ser contratual), para arquitetos e desenvolvedores. Ambos podem ser funcionais ou não funcionais.',
    },
    {
        id: 'q12',
        exams: ['av1'],
        question: 'Segundo o survey citado no material (228 empresas, 16 países), qual é o principal desafio da engenharia de requisitos?',
        options: [
            'Falta de ferramentas CASE adequadas',
            'Requisitos INCOMPLETOS ou não documentados (48%)',
            'Excesso de documentação formal',
            'Falta de linguagens de modelagem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: 48% apontaram requisitos incompletos ou não documentados. Na sequência vêm falhas de comunicação com clientes (41%), requisitos em constante mudança (33%) e requisitos especificados de forma abstrata (33%) — todos problemas de COMUNICAÇÃO, não de ferramenta.',
        feedbackWrong:
            'O campeão é "requisitos incompletos ou não documentados", com 48%. Note o padrão da lista inteira: os maiores desafios são humanos e de comunicação — daí a ênfase do material nas SOFT SKILLS do engenheiro de requisitos (ouvir, empatia, raciocínio lógico, organização, atenção aos detalhes).',
    },
    {
        id: 'q13',
        exams: ['av1'],
        question: 'Um ator de caso de uso chamado "João Fernandes" está errado. Por quê?',
        options: [
            'Porque atores devem ter nomes curtos',
            'Porque um ator representa um PAPEL, não uma pessoa específica — o correto seria "Fornecedor", "Cliente" ou "Vendedor"',
            'Porque atores não podem ser pessoas, apenas sistemas',
            'Porque o nome do ator deve ser um verbo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O ator é um PAPEL: a mesma pessoa pode ser cliente e vendedor, e várias pessoas exercem o mesmo papel. Categorias de ator: cargos, organizações, outros sistemas e equipamentos (leitor de código de barras, sensor).',
        feedbackWrong:
            'Ator representa um PAPEL, não uma pessoa. Nomear com o nome de alguém amarra o modelo a um indivíduo e esconde que o papel é exercido por muitos. Atores podem, sim, ser pessoas — em papéis como Cliente, Gerente ou Almoxarife — e também organizações, sistemas e equipamentos.',
    },
    {
        id: 'q14',
        exams: ['av1', 'av2'],
        question: 'Qual a diferença entre os relacionamentos «include» e «extend» entre casos de uso?',
        options: [
            'São sinônimos, com notações diferentes',
            '«include»: o caso de uso SEMPRE invoca o outro; «extend»: o outro estende o comportamento CONDICIONALMENTE',
            '«include» é usado entre atores e «extend» entre casos de uso',
            '«extend» é obrigatório e «include» é opcional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Include é comportamento comum SEMPRE executado (ex.: "Validar Usuário" incluído em vários casos); extend é comportamento adicional que ocorre apenas sob certa condição, num ponto de extensão. A terceira forma é a generalização, entre atores ou entre casos de uso.',
        feedbackWrong:
            'A diferença é a OBRIGATORIEDADE: «include» sempre executa o caso incluído; «extend» acrescenta comportamento apenas condicionalmente. Ambos ligam CASOS DE USO entre si — o relacionamento entre ator e caso de uso é o de comunicação (associação simples).',
    },
    {
        id: 'q15',
        exams: ['av1', 'av2'],
        question: 'Na especificação detalhada de um caso de uso, o que distingue um FLUXO ALTERNATIVO de um FLUXO DE EXCEÇÃO?',
        options: [
            'Não há distinção: são o mesmo elemento com nomes diferentes',
            'O alternativo é um caminho VÁLIDO diferente do principal (que também atinge o objetivo); o de exceção trata uma FALHA ou violação de regra que impede a conclusão',
            'O alternativo trata erros e o de exceção trata variações',
            'O fluxo de exceção só existe em casos de uso incluídos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. No SCA da disciplina, "adicionar o aluno à lista de espera" é um fluxo ALTERNATIVO (caminho válido); "violação da RN01 — máximo de créditos" é um fluxo de EXCEÇÃO. Junto com pré-condições, pós-condições e regras de negócio, formam a especificação completa.',
        feedbackWrong:
            'ALTERNATIVO = outro caminho válido que também leva ao objetivo (pagar em dinheiro em vez de cartão). EXCEÇÃO = falha ou violação de regra que impede concluir (saldo insuficiente, limite de créditos estourado). Os dois aparecem na mesma especificação, em seções separadas.',
    },
    {
        id: 'q16',
        exams: ['av1'],
        question: 'Qual a diferença entre o Documento de VISÃO e a SRS (Especificação de Requisitos de Software) do RUP?',
        options: [
            'São o mesmo documento com nomes diferentes',
            'A VISÃO é o documento estratégico de ALTO NÍVEL (posicionamento, stakeholders, recursos, restrições); a SRS é o documento DETALHADO, com os casos de uso e os requisitos suplementares',
            'A visão é escrita depois da SRS',
            'A SRS é para o cliente e a visão para os desenvolvedores',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A visão documenta os requisitos principais, características-chave e restrições — inclui as tabelas de PROBLEMA ("o problema de… afeta… o impacto é…") e de POSIÇÃO DO PRODUTO. A SRS desce ao detalhe: relatórios de caso de uso mais os REQUISITOS SUPLEMENTARES (não funcionais e restrições de design).',
        feedbackWrong:
            'VISÃO = estratégica, de alto nível, às vezes contratual, escrita PRIMEIRO (na AV1 da turma). SRS = detalhada, com os casos de uso e os requisitos suplementares, servindo para projetar e testar. Ambas se apoiam no modelo de casos de uso.',
    },
    {
        id: 'q17',
        exams: ['av1'],
        question: 'Na SRS do RUP, onde entram os requisitos NÃO FUNCIONAIS?',
        options: [
            'Nos relatórios de caso de uso',
            'Na seção de REQUISITOS SUPLEMENTARES, que reúne o que não cabe nos casos de uso',
            'Não entram: a SRS só documenta requisitos funcionais',
            'Na introdução, junto com o glossário',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Os casos de uso cobrem a maior parte dos requisitos FUNCIONAIS; tudo o que é transversal ao sistema — desempenho, segurança, usabilidade, restrições de design — vai para os REQUISITOS SUPLEMENTARES. É a mesma lógica dos RNF valerem "para o sistema como um todo".',
        feedbackWrong:
            'Vão para os REQUISITOS SUPLEMENTARES. A seção 3 da SRS tem duas partes: relatórios de caso de uso (funcionais) e suplementares (não funcionais e restrições de design). Colocar "o sistema deve responder em 2s" dentro de um caso de uso específico esconderia que a exigência vale para todos.',
    },
    {
        id: 'q18',
        exams: ['av1', 'av2'],
        question: 'Numa associação entre CLIENTE e PEDIDO, a multiplicidade do lado do cliente é 1..1 e a do lado do pedido é 0..*. O que isso significa sobre a PARTICIPAÇÃO?',
        options: [
            'Ambas as participações são opcionais',
            'A participação do PEDIDO é obrigatória (mínimo 1: todo pedido tem um cliente); a do CLIENTE é opcional (mínimo 0: pode não ter pedido algum)',
            'Ambas são obrigatórias, porque há um 1 na associação',
            'A multiplicidade não tem relação com participação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a regra é mecânica: se o valor MÍNIMO da multiplicidade é 1, a participação é OBRIGATÓRIA; se é 0, é OPCIONAL. Aqui, todo pedido precisa de um cliente (1..1), mas um cliente recém-cadastrado pode ter zero pedidos (0..*).',
        feedbackWrong:
            'Olhe sempre o valor MÍNIMO: 1..1 no lado do cliente significa que todo PEDIDO participa obrigatoriamente da associação; 0..* significa que o CLIENTE participa opcionalmente. A conectividade (um-para-muitos) é outra leitura da mesma notação, feita pelos máximos.',
    },
    {
        id: 'q19',
        exams: ['av2'],
        question: 'Na Análise Textual de Abbott, o que sugerem os verbos com sentido de "TER" e de "SER" no texto dos requisitos?',
        options: [
            'Ambos sugerem operações',
            '"TER" sugere AGREGAÇÃO ou COMPOSIÇÃO; "SER" sugere GENERALIZAÇÃO (herança)',
            '"TER" sugere herança; "SER" sugere associação simples',
            'Verbos nunca sugerem estrutura, apenas operações',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Na ATA os SUBSTANTIVOS viram classes candidatas ou atributos, e os VERBOS se dividem: ação (calcular, sacar) → operações; "ter" → agregação/composição; "ser" → generalização; os demais → associações. Simples de aplicar, mas depende da qualidade e do estilo do texto.',
        feedbackWrong:
            'A regra dos verbos de Abbott: "TER" → agregação/composição (o pedido TEM itens); "SER" → generalização (o gerente É UM funcionário); verbos de ação → operações; demais verbos → associações. As limitações: o resultado depende de o documento ser completo, e variações linguísticas podem esconder classes.',
    },
    {
        id: 'q20',
        exams: ['av2'],
        question: 'Na categorização BCE, qual é a responsabilidade de um objeto de CONTROLE?',
        options: [
            'Armazenar as informações persistentes do domínio',
            'Ser a ponte entre fronteira e entidade, controlando a lógica de execução DE UM CASO DE USO',
            'Comunicar o sistema com atores humanos e não humanos',
            'Validar os dados digitados na tela',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. ENTIDADE guarda informações e regras de negócio (persistente, ciclo de vida longo, participa de vários casos de uso); FRONTEIRA conversa com os atores (telas, relatórios, protocolos); CONTROLE coordena a realização de UM caso de uso, decidindo o que fazer a cada evento de sistema.',
        feedbackWrong:
            'O objeto de CONTROLE coordena a realização de um caso de uso, funcionando como gerente dos demais. Guardar informações é papel da ENTIDADE; conversar com atores é da FRONTEIRA. Essa divisão (Jacobson, 1992) tem correspondência — mas não equivalência — com o MVC.',
    },
    {
        id: 'q21',
        exams: ['av2'],
        question: 'O que é uma VCP (Visão de Classes Participantes) e quantas o Processo Unificado recomenda?',
        options: [
            'Um diagrama com todas as classes do sistema; uma por projeto',
            'O diagrama das classes que participam da realização de UM caso de uso — o UP recomenda UMA VCP POR CASO DE USO',
            'Um diagrama de sequência simplificado; um por ator',
            'A lista de classes persistentes; uma por banco de dados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A VCP mostra, para um caso de uso, as fronteiras (uma por interface principal e uma por ator não humano), o controlador (ou controladores) e as entidades envolvidas — vindas do modelo conceitual. É o elo prático entre o caso de uso e o diagrama de classes.',
        feedbackWrong:
            'VCP = classes que participam de UM caso de uso, e o UP recomenda uma por caso de uso. É a receita do BCE aplicada: adicione uma fronteira por tela/relatório, uma por ator não humano, um ou mais controladores, e uma entidade por conceito do negócio.',
    },
    {
        id: 'q22',
        exams: ['av2'],
        question: 'Num diagrama de sequência, qual a diferença entre mensagem SÍNCRONA e ASSÍNCRONA?',
        options: [
            'A síncrona é mais rápida que a assíncrona',
            'Na SÍNCRONA (seta sólida) o remetente AGUARDA a resposta — é a chamada de método; na ASSÍNCRONA (seta aberta) ele segue processando sem esperar',
            'A síncrona ocorre entre objetos e a assíncrona entre atores',
            'A assíncrona não pode ter mensagem de retorno',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Seta sólida cheia = síncrona (bloqueia até a resposta); seta aberta = assíncrona (segue em frente). A mensagem de RETORNO é a seta tracejada. A barra de ativação sobre a linha de vida mostra quando o objeto está processando.',
        feedbackWrong:
            'A diferença é o BLOQUEIO: na síncrona o remetente espera a resposta (chamada de método comum); na assíncrona ele continua imediatamente. Notação: síncrona com seta sólida, assíncrona com seta aberta, retorno com seta tracejada.',
    },
    {
        id: 'q23',
        exams: ['av2'],
        question: 'Num diagrama de sequência, para que servem os fragmentos alt, opt e loop?',
        options: [
            'Para nomear os objetos participantes',
            'alt representa caminhos ALTERNATIVOS com condição; opt, um trecho OPCIONAL; loop, uma REPETIÇÃO',
            'Para indicar mensagens síncronas, assíncronas e de retorno',
            'Para marcar a criação e a destruição de objetos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Os fragmentos combinados da UML 2 permitem representar lógica dentro do diagrama: alt (if/else com guardas), opt (if sem else) e loop (repetição). Sem eles, o diagrama de sequência só mostraria um cenário linear.',
        feedbackWrong:
            'São FRAGMENTOS de interação: alt = alternativas com condição (if/else), opt = trecho opcional (if), loop = repetição. A criação de objeto é uma mensagem que aponta para o objeto (às vezes com «create») e a destruição é o X ao fim da linha de vida.',
    },
    {
        id: 'q24',
        exams: ['av2'],
        question: 'Num diagrama de atividades, qual a diferença entre uma BIFURCAÇÃO (fork) e um PONTO DE RAMIFICAÇÃO (decision)?',
        options: [
            'São o mesmo elemento com nomes diferentes',
            'O fork dispara vários fluxos PARALELOS ao mesmo tempo; a decisão escolhe UM caminho entre vários, conforme as condições de guarda',
            'O fork escolhe um caminho e a decisão paraleliza',
            'O fork só existe em diagramas de estados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é por isso que o diagrama de atividades vai além do fluxograma: ele representa CONCORRÊNCIA. A barra de JUNÇÃO (join) fecha o paralelismo, prosseguindo só quando TODOS os fluxos chegaram; a UNIÃO (merge) fecha uma ramificação.',
        feedbackWrong:
            'FORK = paralelismo (todos os fluxos seguem juntos, representado por uma barra); DECISION = escolha (um caminho, conforme guardas entre colchetes, podendo ter [else]). Confundir os dois muda completamente a semântica: um diz "faça as duas coisas", o outro diz "faça uma OU outra".',
    },
    {
        id: 'q25',
        exams: ['av2'],
        question: 'Para que servem as RAIAS (swimlanes) num diagrama de atividades?',
        options: [
            'Para separar o fluxo principal do alternativo',
            'Para dividir o diagrama por ENTIDADE RESPONSÁVEL — quem executa cada atividade (pessoa, departamento ou sistema)',
            'Para indicar a ordem cronológica das atividades',
            'Para marcar as atividades opcionais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. As raias respondem "quem faz o quê": no exemplo do material, o processamento de pedido se divide entre atendimento ao cliente e departamento financeiro. É o que torna o diagrama de atividades ótimo para modelar PROCESSOS DE NEGÓCIO.',
        feedbackWrong:
            'As raias particionam o diagrama por RESPONSÁVEL (pessoa, setor ou sistema), mostrando quem executa cada atividade. A ordem já é dada pelas setas de fluxo; alternativas aparecem em ramificações com guardas.',
    },
    {
        id: 'q26',
        exams: ['av2'],
        question: 'Numa máquina de estados, a transição é rotulada como "evento [guarda] / ação". Quando a transição dispara?',
        options: [
            'Sempre que o evento ocorre, independentemente da guarda',
            'Somente quando o evento ocorre E a condição de guarda é verdadeira',
            'Sempre que a guarda é verdadeira, mesmo sem o evento',
            'Quando a ação termina de executar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: evento E guarda, as duas condições. Sem guarda, basta o evento. A AÇÃO é executada se e somente se a transição dispara — e, diferente de uma atividade, não pode ser interrompida.',
        feedbackWrong:
            'A transição dispara se e somente se o EVENTO ocorre E a GUARDA é verdadeira. Uma transição sem guarda dispara sempre que o evento ocorre; uma guarda verdadeira sozinha não dispara nada — é preciso o evento (salvo o evento de mudança when(...), que é acionado pela própria condição virar verdadeira).',
    },
    {
        id: 'q27',
        exams: ['av2'],
        question: 'Numa máquina de estados, qual a diferença entre AÇÃO e ATIVIDADE?',
        options: [
            'Ação leva tempo e atividade é instantânea',
            'A AÇÃO está associada à TRANSIÇÃO e não pode ser interrompida; a ATIVIDADE está associada ao ESTADO e PODE ser interrompida',
            'São sinônimos na UML',
            'A ação ocorre no estado inicial e a atividade no final',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a distinção fina que costuma cair em prova. Ação: presa à transição, atômica. Atividade: acontece enquanto o objeto permanece no estado (o "do/" do estado) e pode ser interrompida por um evento que dispare uma transição de saída.',
        feedbackWrong:
            'AÇÃO pertence à TRANSIÇÃO e é atômica (não interrompível); ATIVIDADE pertence ao ESTADO e pode ser interrompida. É por isso que a atividade aparece dentro do estado (do/consultar_Conta()) e a ação aparece após a barra no rótulo da transição.',
    },
    {
        id: 'q28',
        exams: ['av2'],
        question: 'Classifique corretamente: diagrama de CLASSES, de SEQUÊNCIA e de OBJETOS.',
        options: [
            'Todos comportamentais',
            'Classes e objetos são ESTRUTURAIS; sequência é COMPORTAMENTAL (de interação)',
            'Classes é estrutural; sequência e objetos são comportamentais',
            'Todos estruturais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A UML 2.5 tem 14 diagramas. ESTRUTURAIS: classes, objetos, componentes, implantação, pacotes, estrutura composta e perfil. COMPORTAMENTAIS: caso de uso, atividades, máquina de estados e os quatro de interação (sequência, comunicação, visão geral e temporização).',
        feedbackWrong:
            'O diagrama de OBJETOS é ESTRUTURAL — mostra instâncias com valores num instante, complementando o de classes. Sequência é comportamental, da família dos diagramas de INTERAÇÃO. A pergunta "estrutura ou comportamento?" resolve a classificação de qualquer diagrama.',
    },
    {
        id: 'q29',
        exams: ['av2'],
        question: 'O material distingue dois usos da UML: como blueprint e como sketch. O que é o uso como SKETCH?',
        options: [
            'Um modelo completo, formal e preciso, do qual se gera código',
            'Um uso informal e leve da notação, para CONVERSAR sobre ou DOCUMENTAR uma parte do código — sem a pretensão de um modelo completo',
            'O desenho feito apenas em ferramentas CASE profissionais',
            'A versão simplificada da UML, com menos diagramas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é hoje o uso MAIS COMUM. O blueprint (planta detalhada, completa e formal) perdeu espaço; o sketch é o rabisco no quadro branco que alinha a equipe sobre um trecho de projeto. Daí a frase do material: "um diagrama UML vale mais do que 1000 linhas de código".',
        feedbackWrong:
            'SKETCH = esboço informal para conversar ou documentar parte do sistema; BLUEPRINT = modelo completo e formal, hoje menos comum. A UML tem 14 diagramas justamente para oferecer múltiplas visões — e não é obrigatório usar todos.',
    },
    {
        id: 'q30',
        exams: ['av2'],
        question: 'Na arquitetura MVC clássica, qual a responsabilidade da camada de CONTROLE?',
        options: [
            'Armazenar os dados da aplicação',
            'Tratar os eventos produzidos pelos dispositivos de entrada (mouse, teclado), acionando modelo e visão',
            'Desenhar as janelas, botões e menus',
            'Fazer a persistência no banco de dados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. No MVC original (anos 80, Smalltalk): VISÃO são as GUIs; CONTROLE trata os eventos de entrada; MODELO são as classes de dados. O material resume: MVC = (Visão + Controladores) + Modelo = interface gráfica + modelo.',
        feedbackWrong:
            'CONTROLE trata os eventos dos dispositivos de entrada. Desenhar a interface é da VISÃO; guardar dados é do MODELO. Vale lembrar: o MVC nasceu para aplicações DESKTOP monolíticas; o "MVC web" dos frameworks é uma adaptação que, na prática, se parece com três camadas.',
    },
    {
        id: 'q31',
        exams: ['av2'],
        question: 'Na Clean Architecture, qual é o sentido das dependências entre as camadas?',
        options: [
            'De dentro para fora: as entidades dependem dos frameworks',
            'De FORA PARA DENTRO: frameworks e adaptadores dependem dos casos de uso e das entidades, nunca o contrário',
            'Todas as camadas dependem mutuamente umas das outras',
            'Não há dependências entre as camadas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. As camadas concêntricas — Entities (regras da empresa), Use Cases (regras da aplicação), Interface Adapters e Frameworks & Drivers — têm dependências apontando SEMPRE para dentro. É isso que dá testabilidade e desacoplamento dos agentes externos: trocar o banco ou o framework não toca nas regras de negócio.',
        feedbackWrong:
            'As dependências apontam para DENTRO: o núcleo (entidades e casos de uso) não conhece o mundo externo. Se uma entidade importasse o framework web, a regra de negócio ficaria refém dele — exatamente o que a arquitetura quer evitar. É o DIP aplicado em escala arquitetural.',
    },
    {
        id: 'q32',
        exams: ['av2'],
        question: 'Qual arquitetura é descrita como "vários subsistemas manipulando a mesma base de dados, um gerando e vários lendo"?',
        options: [
            'Pipes and filters (dutos e filtros)',
            'Repositório (blackboard)',
            'MVC',
            'Clean Architecture',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O repositório/blackboard centraliza os dados: compartilhamento eficiente, backup e proteção centralizados, e quem grava não precisa saber quem lê. Em troca, todos precisam entender o formato dos dados e distribuí-los é difícil.',
        feedbackWrong:
            'É o REPOSITÓRIO (blackboard). Em pipes and filters os dados ATRAVESSAM uma cadeia de filtros que os transformam, sem base compartilhada — cada filtro é modular e substituível, mas o formato dos dados precisa ser acordado entre eles.',
    },
    {
        id: 'q33',
        exams: ['av2'],
        question: 'O princípio SOLID que diz "um módulo deve ser aberto para extensão, mas fechado para modificação" é o:',
        options: [
            'SRP — Responsabilidade Única',
            'OCP — Aberto/Fechado',
            'LSP — Substituição de Liskov',
            'DIP — Inversão de Dependências',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. No exemplo do material, a Calculadora base (somar, subtrair, multiplicar, dividir) é ESTENDIDA por CalcCientifica e CalcFinanceira — sem que ninguém precise editar a classe original. Herança e interfaces são os mecanismos típicos.',
        feedbackWrong:
            'É o OCP (Open/Closed). O SRP fala de "um motivo para mudar"; o LSP, de subtipos substituírem tipos base; o DIP, de depender de abstrações. O OCP é o que permite acrescentar comportamento criando código novo em vez de alterar o que já funciona.',
    },
    {
        id: 'q34',
        exams: ['av2'],
        question: 'No exemplo clássico do material, a classe Square estende Rectangle e sobrescreve setHeight e setWidth alterando os dois lados. Um teste faz setHeight(20), setWidth(10) e espera área 200, mas recebe 400. Que princípio foi violado?',
        options: [
            'SRP — Responsabilidade Única',
            'LSP — Substituição de Liskov: o subtipo não pode confundir quem usa a interface do tipo base',
            'ISP — Segregação de Interface',
            'OCP — Aberto/Fechado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o contraexemplo mais famoso do SOLID. Um quadrado "é um" retângulo na geometria, mas não no CÓDIGO: substituir Rectangle por Square quebra a expectativa de quem usa a classe base. O LSP diz que subtipos devem ser substituíveis SEM surpresas.',
        feedbackWrong:
            'Foi o LSP (Substituição de Liskov). O teste escrito contra Rectangle passa a falhar quando recebe um Square — ou seja, o subtipo NÃO é substituível pelo tipo base. É o alerta clássico de que "é um" na linguagem natural nem sempre vira herança correta no código.',
    },
    {
        id: 'q35',
        exams: ['av2'],
        question: 'Uma interface DAO tem insert, delete, update, read, write, append e rotate, e cada implementação usa só metade dos métodos. Qual princípio SOLID resolve, e como?',
        options: [
            'SRP: dividir a implementação em duas classes',
            'ISP — Segregação de Interface: quebrar a interface grande em interfaces pequenas (como DBAccess e FileAccess), para ninguém depender do que não usa',
            'DIP: fazer o cliente depender da classe concreta',
            'OCP: estender a interface com mais métodos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O ISP prega "small interfaces": interfaces gordas forçam implementações a criar métodos vazios ou que lançam exceção, e acoplam clientes a operações que eles nunca chamam. A solução do material foi separar DBAccess de FileAccess.',
        feedbackWrong:
            'É o ISP (Interface Segregation): mantenha interfaces PEQUENAS para que os usuários não dependam de coisas de que não precisam. Estender a interface (OCP) só pioraria; o SRP trata da responsabilidade das classes, não do tamanho das interfaces.',
    },
    {
        id: 'q36',
        exams: ['av2'],
        question: 'Você precisa acrescentar um CACHE à classe BookSearch sem modificar seu código, que já funciona e é mantido por outra pessoa. Qual padrão de projeto resolve?',
        options: ['Singleton', 'Proxy', 'Adapter', 'Observer'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o exemplo do material. O BookSearchProxy implementa a mesma interface, guarda a referência ao objeto base, responde do cache quando possível e delega ao original quando necessário. O cliente conversa com o proxy sem saber da diferença.',
        feedbackWrong:
            'É o PROXY: um intermediário que fica entre o cliente e o objeto base, acrescentando comportamento (cache, controle de acesso, log) sem tocar na classe original. Adapter resolve interfaces INCOMPATÍVEIS; Singleton garante instância única.',
    },
    {
        id: 'q37',
        exams: ['av2'],
        question: 'Você precisa controlar projetores de fabricantes diferentes — ProjetorSamsung.turnOn() e ProjetorLG.enable(timer) — por uma única interface Projetor, sem poder alterar as classes dos fabricantes. Qual padrão usar?',
        options: ['Singleton', 'Proxy', 'Adapter', 'Facade'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. O ADAPTER cria uma classe adaptadora que implementa a interface Projetor e encapsula a classe do fabricante, traduzindo liga() para turnOn() ou enable(timer). É a solução clássica para integrar código de terceiros que você não pode modificar.',
        feedbackWrong:
            'É o ADAPTER — o padrão para interfaces INCOMPATÍVEIS. O Proxy tem a MESMA interface do objeto base (acrescenta comportamento); o Adapter converte uma interface em outra. Singleton trata de instância única, e Facade simplifica um subsistema inteiro.',
    },
    {
        id: 'q38',
        exams: ['av2'],
        question: 'No projeto de classes, por que se recomenda transformar associações em dependências NÃO estruturais (por parâmetro, por exemplo) sempre que possível?',
        options: [
            'Porque dependências não estruturais são mais rápidas em tempo de execução',
            'Porque a dependência por ATRIBUTO é a forma mais FORTE de dependência — reduzi-las aumenta o encapsulamento e diminui o acoplamento',
            'Porque a UML não permite representar associações no projeto',
            'Porque atributos não podem referenciar outras classes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Guardar o outro objeto como ATRIBUTO cria vínculo permanente; recebê-lo como PARÂMETRO cria vínculo momentâneo. Quanto menos dependências por atributo, maior o encapsulamento e menor o acoplamento — a métrica de qualidade do projeto de classes.',
        feedbackWrong:
            'A razão é ACOPLAMENTO: a dependência por atributo (estrutural) é a mais forte, porque a classe passa a carregar a outra durante toda a sua existência. Passar o objeto por parâmetro, quando basta, mantém as classes mais independentes e fáceis de mudar.',
    },
    {
        id: 'q39',
        exams: ['av2'],
        question: 'Como se decide se uma associação deve ser bidirecional ou unidirecional no projeto?',
        options: [
            'Sempre bidirecional, por segurança',
            'Estudando os DIAGRAMAS DE INTERAÇÃO: o sentido das mensagens revela quem precisa conhecer quem',
            'Pela multiplicidade: 1:1 é unidirecional e 1:N é bidirecional',
            'É uma decisão arbitrária do programador',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A navegabilidade vem da dinâmica: se nenhuma mensagem parte de B para A, B não precisa conhecer A — a associação vira unidirecional, com menos acoplamento. É um dos usos práticos dos diagramas de sequência no projeto.',
        feedbackWrong:
            'A resposta está nos DIAGRAMAS DE INTERAÇÃO: o sentido de envio das mensagens mostra qual extremo precisa da referência. Bidirecional "por segurança" acopla à toa e obriga a manter os dois lados sincronizados. A multiplicidade é outra dimensão, independente da navegabilidade.',
    },
    {
        id: 'q40',
        exams: ['av2'],
        question: 'No exemplo integrador da disciplina (caso de uso Registrar Inscrição), o RealizarInscricaoControlador recebe o TurmaRepositorio pelo construtor. Que benefício de projeto isso traz, e a que princípio se conecta?',
        options: [
            'Deixa o código mais curto; conecta-se ao SRP',
            'É injeção de dependência: o controlador depende de uma abstração recebida de fora em vez de criar o repositório concreto — conecta-se ao DIP',
            'Garante que só exista um repositório; conecta-se ao Singleton',
            'Evita herança múltipla; conecta-se ao LSP',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Receber a colaboração pronta (em vez de dar new nela) inverte a dependência: o módulo de alto nível não fica preso a um detalhe concreto, e o teste pode injetar um repositório falso. É o DIP na prática — e o mesmo padrão do AlunoDAO(Connection) visto em POOB.',
        feedbackWrong:
            'É INJEÇÃO DE DEPENDÊNCIA, ligada ao DIP (módulos de alto nível não devem depender de detalhes de baixo nível; ambos dependem de abstrações). O ganho concreto: dá para trocar a implementação do repositório — inclusive por uma versão de teste — sem tocar no controlador.',
    },
];
