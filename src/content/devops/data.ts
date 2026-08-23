import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const DEVO_GUIDE_CONTEXT = `
GUIA COMPLETO DE DEVOPS (DEVO) - Resumo:

1. A DISCIPLINA: DevOps (optativa do eixo de infraestrutura, 80h, 4h semanais, Prof. Ivo Calado, turma 2025.1). Objetivo geral declarado na aula inaugural: ter uma introdução à filosofia DevOps, entendendo sua importância e como ela auxilia o processo de desenvolvimento de software. Objetivos específicos: conhecer a filosofia, entender características e principais ferramentas, e APLICAR os conhecimentos num projeto prático. Conteúdo básico da ementa: introdução ao DevOps, containers, integração e implantação contínua (CI/CD), ferramentas de gerenciamento de configuração, ferramentas de logging e monitoramento, servidor de monitoramento, virtualização e introdução à orquestração de containers (Kubernetes). A AVALIAÇÃO É O DESENVOLVIMENTO INCREMENTAL DE UM PROJETO — não há provas escritas; o projeto avança em três etapas entregues por repositório git, com exigência explícita de README documentando como buildar e executar. Bibliografia (majoritariamente Casa do Código): SATO, Danilo — DevOps na prática: entrega de software confiável e automatizada; AQUILES & FERREIRA — Controlando versões com Git e GitHub; BOAGLIO, Fernando — Jenkins: automatize tudo sem complicações; MORAES, Gleicon — Caixa de Ferramentas DevOps; ROMERO, Daniel — Containers com Docker: do desenvolvimento à produção. Referência complementar em inglês: Effective DevOps (Jennifer Davis & Ryn Daniels, O'Reilly), com leitura dirigida dos capítulos 2 (What is DevOps?) e 5 (DevOps Misconceptions and Anti-Patterns). Também indicados: Google SRE Book e a documentação oficial do Docker.

2. O QUE É DEVOPS: a definição adotada é a de PATRICK DEBOIS — "DevOps é um método para desenvolvimento de software que enfatiza a COMUNICAÇÃO, COLABORAÇÃO, INTEGRAÇÃO, AUTOMAÇÃO e o USO DE MÉTRICAS". Note que a definição não menciona nenhuma ferramenta: DevOps é cultura e método, não um conjunto de produtos. É uma grande INTERSECÇÃO entre três áreas: Development (engenharia de software), Technology Operations e Quality Assurance. As práticas que emergem dessa intersecção: infraestrutura como código (IaC), integração contínua, automação de testes, entrega contínua, gerenciamento de versões, monitoramento de desempenho das aplicações, autoescalabilidade, provisionamento automático de múltiplos ambientes e gerenciamento de configuração e mudanças.

3. O PROBLEMA QUE DEVOPS RESOLVE — O "WALL OF CONFUSION": o material abre com o conflito clássico. O desenvolvedor diz "não é minha máquina, é o seu código"; a operação responde "não é o meu código, é a sua máquina". No fundo, os dois lados têm FOCOS CONFLITANTES por incentivo: o Dev é medido por entregar MUDANÇAS, o Ops por manter ESTABILIDADE — e mudar é justamente o que ameaça a estabilidade. Enquanto cada lado é cobrado por metas opostas, o muro se reconstrói sozinho, por mais boa vontade que exista. Sintomas típicos: "já está pronto, só falta testar", "funcionava em dev, agora é problema do ops", e a operação reduzida a suporte reativo.

4. CAVERNAS (SILOS) DE CONHECIMENTO E O MITO DO HERÓI: quando falta DOCUMENTAÇÃO e falta AUTOMATIZAÇÃO, o conhecimento fica preso em pessoas — surge "o famoso funcionário que perdeu o direito de morrer", único capaz de executar um procedimento crítico. O material trata isso como GRANDE RISCO PARA O NEGÓCIO, não como virtude: o herói é sintoma de um processo doente. A automação e a documentação são o antídoto, porque transformam conhecimento tácito em processo repetível.

5. O DEVOPS LOOP: a filosofia leva a um ciclo que SE REALIMENTA, desenhado como um símbolo de infinito, com oito fases: PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → OPERATE → MONITOR — e o monitoramento realimenta o planejamento. As quatro primeiras pertencem tradicionalmente ao lado Dev e as quatro últimas ao lado Ops; o engenheiro DevOps é responsável por INTEGRAR OS DOIS MUNDOS. O laço é infinito porque não existe "terminado": o que se aprende operando vira insumo do próximo planejamento.

6. O ECOSSISTEMA DE FERRAMENTAS: cada fase tem seu ferramental — CODE (Confluence, JIRA, git), BUILD (SBT, Maven), TEST (JUnit, Jenkins, Codeship), RELEASE e DEPLOY (Docker, DC/OS, AWS, Chef, Ansible, Kubernetes), MONITOR (Nagios, Splunk, Datadog). O material mostra em seguida um diagrama muito maior, com dezenas de ferramentas, e conclui: "é possível construir um roteiro para estudo, porém é impossível encontrar uma referência única que englobe tudo". A lição é priorizar conceitos sobre produtos, porque as ferramentas se substituem e os conceitos permanecem.

7. O DEVOPS ROADMAP (imagem de apoio, com ferramentas classificadas por prioridade): 1. Linguagens de programação (Python e Go como muito importantes; JavaScript e Ruby depois). 2. Administração de servidores (Linux em primeiro lugar, depois Unix e Windows). 3. Redes e segurança (TCP/IP fundamental; protocolos DNS, HTTP/S, FTP, SSL). 4. Servidores: web (Apache, Nginx, Tomcat, IIS, Jetty), cache (Redis, MemCache) e bancos SQL (Oracle, MySQL/MariaDB, PostgreSQL, MS-SQL) e NoSQL (MongoDB, Cassandra, DynamoDB, Google Datastore). 5. Infraestrutura como código: gerência de configuração (Ansible, Puppet, Chef, Salt Stack), containers (Docker, rkt, LXC), orquestradores (Kubernetes, OpenShift, Nomad, Docker Swarm) e provisionamento (Terraform, CloudFormation, Azure template, Google Deployment Manager). 6. CI/CD (Jenkins, TeamCity, Circle CI, Travis CI, AWS Code Pipeline, Google Cloud Build, GitLab CI, Bitbucket Pipeline, GitHub Actions). 7. Monitoramento (Zabbix, Prometheus, Grafana, DataDog, New Relic, CheckMK) e logging (ELK, Graylog, Splunk). 8. Nuvens (AWS, Azure, GCP, OpenStack, Alicloud, IBM Bluemix).

8. LINUX — POR QUE ELE VEM ANTES: a disciplina dedica sete aulas a Linux porque containers rodam sobre o kernel do host e quase toda automação é feita por linha de comando. O material cobre história e filosofia do sistema, distribuições, kernel × shell, a estrutura de diretórios e os comandos de trabalho diário. A ideia condutora do Unix é que cada comando faz uma coisa bem e se compõe com os outros por PIPE — é isso que torna a linha de comando uma linguagem de automação, e não apenas um menu de operações.

9. LINUX — ARQUIVOS, DIRETÓRIOS E TEXTO: navegação e manipulação (pwd, ls, cd, mkdir, rmdir, cp, mv, rm, touch, find), leitura e processamento de texto (cat, more, less, head, tail, grep, cut, sort, uniq, wc, sed) e os redirecionamentos que ligam tudo: > sobrescreve, >> acrescenta, < alimenta a entrada e | encadeia a saída de um comando na entrada do próximo. Filtrar um log com grep, contar com wc e ordenar com sort é o exemplo canônico de composição.

10. LINUX — PROCESSOS E CONTAS: execução e controle de programas (ps, top, kill, jobs, fg, bg, & para segundo plano, nohup) e administração de contas e grupos (useradd, usermod, userdel, passwd, groupadd, su, sudo), com /etc/passwd, /etc/shadow e /etc/group como arquivos de referência. Em containers, o processo principal é o que mantém o container vivo — quando ele termina, o container para.

11. LINUX — PERMISSÕES: cada arquivo tem dono, grupo e outros (u, g, o), e três permissões — leitura (r = 4), escrita (w = 2) e execução (x = 1) — que somadas formam a notação OCTAL: 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--. Assim, chmod 755 dá tudo ao dono e leitura e execução aos demais; chmod 644 é o padrão de arquivo comum. chmod aceita também a forma simbólica (u+x, go-w); chown troca o dono, chgrp o grupo, e umask define as permissões padrão dos arquivos novos. Em diretórios os bits têm sentido diferente: x significa poder ATRAVESSAR o diretório, e não executá-lo.

12. CONTAINERS — O PROBLEMA DO "FUNCIONA NA MINHA MÁQUINA": Docker é definido no material como "uma plataforma para building, running e shipping application", com a promessa de que, se a aplicação funciona com Docker na sua máquina, funcionará em outras. Os três defeitos que ele elimina no envio de uma aplicação: arquivos faltando, versão errada de software (o ambiente tem Node 14 e a aplicação precisa de Node 20) e configuração divergente (variáveis de ambiente erradas). A solução é empacotar aplicação e dependências juntas e subir tudo com um comando reprodutível.

13. CONTAINER × MÁQUINA VIRTUAL: um CONTAINER é um ambiente isolado para executar aplicações; uma MÁQUINA VIRTUAL é a abstração de uma máquina (hardware físico) completa, criada por um hipervisor como VirtualBox, VMware ou Hyper-V. A VM dá isolamento forte, mas cada uma exige um sistema operacional INTEIRO — com patches e licenças —, demora a iniciar como um computador de verdade e consome CPU e memória fixas, de modo que 16 GB de RAM precisam ser divididos entre as VMs. O CONTAINER compartilha o KERNEL do sistema operacional do HOST: por isso é leve, inicia em segundos ou menos e usa muito menos recurso. Essa diferença é decisiva para arquiteturas de microsserviços, em que se sobem e derrubam instâncias o tempo todo. O contraponto é que o isolamento é menor, e o compartilhamento do kernel impõe limites — não se roda um container Windows sobre um kernel Linux.

14. ARQUITETURA E FLUXO DO DOCKER: segue uma arquitetura CLIENTE/SERVIDOR — o cliente (a linha de comando docker) conversa com o servidor (o daemon, que de fato constrói imagens e executa containers) por uma REST API. O fluxo de desenvolvimento: escreve-se um Dockerfile, constrói-se a imagem com "docker build -t hello-world ." (o ponto final é o CONTEXTO de build, o diretório enviado ao daemon) e executa-se com "docker run hello-world". A saída do build mostra os passos numerados (Step 1/3 FROM node:alpine, Step 2/3 COPY . /app, Step 3/3 CMD node /app/index.js), cada um gerando uma CAMADA identificada por hash — camadas são reaproveitadas em builds seguintes, e é por isso que a ordem das instruções no Dockerfile afeta o tempo de build. IMAGEM é o molde imutável; CONTAINER é a instância em execução. Para aplicações de vários serviços, o docker compose sobe o conjunto todo com um comando.

15. O PROJETO DA DISCIPLINA, EM TRÊS ETAPAS: toda a avaliação é um único projeto que evolui — e a nota de cada etapa PARTE DA NOTA DA ANTERIOR, de modo que corrigir o que foi apontado faz parte da entrega seguinte. Grupos de até quatro integrantes. ETAPA 01 (entrega 15/09/2025) — criar o projeto base: aplicação web com pelo menos QUATRO CLASSES DE DOMÍNIO e controladores CRUD (web ou REST), usando um DBMS baseado em ARQUIVO (MySQL ou PostgreSQL; bancos em memória como HSQLDB são proibidos), em repositório PRIVADO no GitHub com o professor adicionado; refatorar a aplicação segundo os 12-FACTOR APP, acrescentando o que faltar (o exemplo dado é adotar um framework de logs) e JUSTIFICANDO qualquer fator que a equipe julgue não se aplicar; e dockerizar com IMAGENS MÍNIMAS, build MULTI-STAGE, um DOCKER-COMPOSE que suba a aplicação com todos os recursos necessários (banco incluído) e um DEVCONTAINER para o ambiente de desenvolvimento. ETAPA 02 (entrega 12/11/2025) — adaptar a aplicação para rodar em cluster Kubernetes seguindo o modelo GITOPS: criar um HELM CHART que empacote os manifestos, com values.yaml por ambiente (dev e prod) e as credenciais do banco carregadas como objetos SECRET; incluir um JOB DE MIGRATIONS que rode ANTES da aplicação (usando sync waves do Argo CD); montar CI/CD no GitHub que construa a imagem, publique no GHCR e atualize a versão no Helm — sem usar a tag LATEST e evitando que o próprio CI/CD entre em LOOP ao commitar a atualização; e manter um repositório separado ARGOCD-GITOPS com duas instâncias da aplicação (dev e prod) e a instalação de um OPERADOR de banco (mysql-operator ou CloudNativePG) para rodar o banco dentro do cluster. ETAPA 03 — adicionar o ARGO ROLLOUTS, com BlueGreen em dev e Canary em produção. O arco é cumulativo: containerizar bem, depois empacotar e declarar, depois liberar com segurança.

16. ESTRATÉGIAS DE IMPLANTAÇÃO: no BLUEGREEN mantêm-se dois ambientes completos — o "azul" em produção e o "verde" com a nova versão — e o tráfego é chaveado de uma vez; o rollback é instantâneo, bastando apontar de volta, ao custo de manter o dobro da infraestrutura. No CANARY a nova versão recebe uma fração pequena do tráfego, que vai crescendo enquanto as métricas se mantêm sadias; falha cedo e afeta poucos usuários, mas exige boa observabilidade e as duas versões convivem por mais tempo. A escolha do professor é pedagógica: BlueGreen em dev, onde se pratica a promoção manual e se vê o chaveamento, e Canary em produção, onde o risco real justifica a exposição gradual. Desabilitar a auto-promoção é o que transforma o deploy em decisão consciente, e não em automatismo.

17. YAML E O CASO REAL DA INDENTAÇÃO: manifestos Kubernetes são YAML, e YAML deriva a estrutura da INDENTAÇÃO, usando ESPAÇOS e nunca tabulações. O professor documentou um caso real da turma: o mesmo deployment.yaml parecia correto no vim, mas o VS Code o marcava como inválido — a chave "env:" havia ficado com indentação menor que a de "image:", deixando de ser irmã dela dentro do container, e as variáveis seguintes se penduraram no nó errado. A lição prática: a árvore que o parser enxerga pode divergir do que o olho vê no terminal, então o manifesto se valida com ferramenta (kubectl apply --dry-run=client -f arquivo.yaml, linters de YAML), não por inspeção visual.
`;

export const DEVO_TOPICS: QuizTopicOption[] = [
    {
        value: 'cultura-devops',
        label: 'Cultura e ciclo DevOps',
        prompt:
            'Fundamentos culturais da disciplina DevOps: a definição de Patrick Debois enfatizando comunicação, colaboração, integração, automação e uso de métricas; DevOps como intersecção entre Development, Technology Operations e Quality Assurance; o Wall of Confusion e o conflito de incentivos entre entregar mudanças e manter estabilidade; disfunções comuns como "já está pronto, só falta testar" e "funcionava em dev"; cavernas ou silos de conhecimento causadas por falta de documentação e de automatização, e o mito do herói como risco para o negócio; o DevOps Loop com as oito fases (plan, code, build, test, release, deploy, operate, monitor) e seu caráter realimentado; o papel do engenheiro DevOps como integrador dos dois mundos; o ecossistema de ferramentas por fase do ciclo e a lição de priorizar conceitos sobre produtos; e o DevOps Roadmap com suas oito áreas de estudo.',
    },
    {
        value: 'linux',
        label: 'Linux e linha de comando',
        prompt:
            'Linux na disciplina DevOps: história e filosofia do sistema, distribuições, diferença entre kernel e shell, estrutura de diretórios; a filosofia Unix de comandos pequenos que se compõem; navegação e manipulação de arquivos e diretórios (pwd, ls, cd, mkdir, rmdir, cp, mv, rm, touch, find); processamento de texto (cat, more, less, head, tail, grep, cut, sort, uniq, wc, sed); redirecionamentos e pipes (>, >>, <, |) e sua composição; execução e controle de processos (ps, top, kill, jobs, fg, bg, execução em segundo plano com &, nohup); gerenciamento de contas e grupos (useradd, usermod, userdel, passwd, groupadd, su, sudo) e os arquivos /etc/passwd, /etc/shadow e /etc/group; e o sistema de permissões com dono, grupo e outros, as permissões de leitura, escrita e execução, a notação octal (chmod 755, chmod 644), a forma simbólica, chown, chgrp, umask e o significado especial do bit de execução em diretórios.',
    },
    {
        value: 'containers',
        label: 'Containers e Docker',
        prompt:
            'Containers e Docker na disciplina DevOps: Docker como plataforma para building, running e shipping de aplicações; o problema do "funciona na minha máquina" e os três defeitos que o container elimina (arquivos faltando, versão errada de software, configuração divergente); definição de container como ambiente isolado de execução e de máquina virtual como abstração de hardware; hipervisores (VirtualBox, VMware, Hyper-V); as desvantagens das VMs (sistema operacional inteiro por VM, inicialização lenta, consumo fixo de CPU e memória) e as vantagens dos containers (compartilham o kernel do host, são leves, iniciam em segundos, consomem menos recursos) e por que isso importa para microsserviços; a arquitetura cliente/servidor do Docker com daemon e REST API; a diferença entre imagem e container; o Dockerfile e o fluxo docker build e docker run; o significado do ponto no comando de build como contexto; as camadas geradas por instrução e seu reaproveitamento; e o docker compose para aplicações de vários serviços.',
    },
    {
        value: 'kubernetes-deploy',
        label: 'Kubernetes e estratégias de implantação',
        prompt:
            'Orquestração e implantação na disciplina DevOps: Kubernetes como orquestrador de containers e as etapas do projeto da disciplina (preparação do ambiente, implantação em cluster e adição do Argo Rollouts); a anatomia de um manifesto de Deployment (apiVersion, kind, metadata, spec, replicas, selector com matchLabels, template, containers, image, variáveis de ambiente e containerPort) e o casamento obrigatório entre o selector e os labels do template; Helm chart; a estratégia BlueGreen com dois ambientes completos, chaveamento de tráfego de uma vez, rollback instantâneo e custo de infraestrutura dobrada, incluindo a promoção manual com auto-promoção desabilitada; a estratégia Canary com exposição gradual de uma fração do tráfego, ajuste progressivo conforme as métricas e a exigência de boa observabilidade; a comparação entre as duas e os critérios para escolher cada uma; e YAML como formato dos manifestos, sensível a indentação, exigindo espaços em vez de tabulações, com a validação por ferramenta em vez de inspeção visual.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de DevOps: a definição de Debois e a natureza cultural do DevOps; o Wall of Confusion e o conflito de incentivos entre Dev e Ops; silos de conhecimento e o mito do herói; o DevOps Loop e suas oito fases; o ecossistema de ferramentas e o roadmap de estudo; Linux como base (filosofia Unix, comandos de arquivos, texto, processos e contas, pipes e redirecionamentos, permissões em notação octal e simbólica); containers e Docker (o problema do "funciona na minha máquina", container versus máquina virtual, arquitetura cliente/servidor, imagem versus container, Dockerfile, camadas, build e run, compose); Kubernetes (manifesto de Deployment, selector e labels, Helm); estratégias de implantação BlueGreen e Canary com seus custos e benefícios; e YAML com sua sensibilidade a indentação e a necessidade de validação automatizada.',
    },
];

export const DEVO_EXAMS: ExamDefinition[] = [
    {
        id: 'etapa1',
        label: 'Projeto — Etapa 01',
        description:
            'Projeto base: aplicação web com 4+ classes de domínio e CRUD, banco em arquivo, refatoração para os 12 fatores e dockerização com imagem mínima, multi-stage, compose e devcontainer.',
    },
    {
        id: 'etapa2',
        label: 'Projeto — Etapa 02',
        description:
            'GitOps em Kubernetes: Helm chart com values por ambiente e Secrets, job de migrations antes da aplicação, CI/CD publicando no ghcr e repositório argocd-gitops com dev, prod e operador de banco.',
    },
    {
        id: 'etapa3',
        label: 'Projeto — Etapa 03',
        description:
            'Argo Rollouts: BlueGreen em dev com auto-promoção desabilitada e promoção manual, Canary em produção com ajuste de tráfego demonstrado ao vivo.',
    },
];

export const DEVO_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'cultura', title: 'O que é DevOps', shortTitle: 'O que é DevOps', exams: ['etapa1'] },
    { id: 'muro', title: 'O Muro da Confusão e os Silos', shortTitle: 'Muro da Confusão', exams: ['etapa1'] },
    { id: 'loop', title: 'O Ciclo DevOps e as Ferramentas', shortTitle: 'Ciclo DevOps', exams: ['etapa1'] },
    { id: 'roadmap', title: 'Roadmap de Estudo', shortTitle: 'Roadmap' },
    { id: 'linux-base', title: 'Linux: Fundamentos e Navegação', shortTitle: 'Linux Base', exams: ['etapa1'] },
    { id: 'linux-texto', title: 'Texto, Pipes e Redirecionamentos', shortTitle: 'Texto e Pipes', exams: ['etapa1'] },
    { id: 'linux-processos', title: 'Processos e Contas de Usuário', shortTitle: 'Processos e Contas', exams: ['etapa1'] },
    { id: 'linux-permissoes', title: 'Permissões de Arquivos', shortTitle: 'Permissões', exams: ['etapa1'] },
    { id: 'containers', title: 'Containers × Máquinas Virtuais', shortTitle: 'Containers × VMs', exams: ['etapa1'] },
    { id: 'docker', title: 'Docker na Prática', shortTitle: 'Docker', exams: ['etapa1'] },
    { id: 'kubernetes', title: 'Kubernetes e Manifestos', shortTitle: 'Kubernetes', exams: ['etapa2'] },
    { id: 'yaml', title: 'YAML e o Caso da Indentação', shortTitle: 'YAML', exams: ['etapa2'] },
    { id: 'estrategias', title: 'BlueGreen e Canary', shortTitle: 'BlueGreen e Canary', exams: ['etapa3'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type DevoSectionId = (typeof DEVO_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['etapa1'],
        question: 'Na definição de Patrick Debois adotada pela disciplina, DevOps enfatiza cinco coisas. Quais?',
        options: [
            'Docker, Kubernetes, Jenkins, Git e Terraform',
            'Comunicação, colaboração, integração, automação e uso de métricas',
            'Build, test, release, deploy e monitor',
            'Velocidade, escala, segurança, custo e disponibilidade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e repare no que a definição NÃO menciona: nenhuma ferramenta. DevOps é método e cultura; as ferramentas são consequência, e se substituem enquanto os princípios permanecem.',
        feedbackWrong:
            'A definição de Debois fala em comunicação, colaboração, integração, automação e uso de métricas. Ferramentas como Docker e Jenkins implementam essas ideias, mas não são a definição — e a lista de ferramentas muda a cada poucos anos.',
    },
    {
        id: 'q2',
        exams: ['etapa1'],
        question:
            'O "Wall of Confusion" é ilustrado pelo diálogo "não é minha máquina, é o seu código" contra "não é o meu código, é a sua máquina". Qual é a causa RAIZ desse conflito, segundo o material?',
        options: [
            'Falta de ferramentas adequadas de deploy',
            'Incompetência técnica de um dos lados',
            'Focos conflitantes por incentivo: o Dev é cobrado por entregar MUDANÇAS e o Ops por manter ESTABILIDADE — e mudar é o que ameaça a estabilidade',
            'Ausência de um gerente de projetos entre as equipes',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. É um problema de INCENTIVOS, não de caráter nem de ferramenta. Enquanto cada lado for medido por metas opostas, o muro se reconstrói sozinho — por isso a resposta do DevOps começa pela cultura e pelas métricas compartilhadas.',
        feedbackWrong:
            'A causa é estrutural: os dois lados são cobrados por objetivos opostos — mudança de um lado, estabilidade do outro. Ferramentas ajudam, mas se os incentivos continuarem conflitantes o muro volta a existir.',
    },
    {
        id: 'q3',
        exams: ['etapa1'],
        question:
            'O material chama de "o famoso funcionário que perdeu o direito de morrer" a pessoa única capaz de executar um procedimento crítico. Como o DevOps trata essa figura?',
        options: [
            'Como um ativo valioso, que deve ser retido e promovido',
            'Como sintoma de um processo doente — resultado de falta de documentação e de automatização, e um grande risco para o negócio',
            'Como o candidato natural a engenheiro DevOps da equipe',
            'Como um problema de recursos humanos, fora do escopo técnico',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O "herói" não é virtude: é a evidência de que o conhecimento ficou preso numa pessoa em vez de virar processo. O antídoto é justamente documentar e automatizar, transformando conhecimento tácito em algo repetível.',
        feedbackWrong:
            'O material trata o mito do herói como RISCO, não como qualidade. Ele nasce da falta de documentação e automatização, e deixa o negócio dependente de uma única pessoa — exatamente o que a automação existe para eliminar.',
    },
    {
        id: 'q4',
        exams: ['etapa1'],
        question: 'Quais são as oito fases do DevOps Loop, e por que ele é desenhado como um símbolo de infinito?',
        options: [
            'Plan, code, build, test, release, deploy, operate e monitor — e é infinito porque o monitoramento realimenta o planejamento: nunca existe "terminado"',
            'Análise, projeto, implementação, teste, implantação, treinamento, manutenção e desativação — o ciclo de vida clássico',
            'Commit, push, pull request, review, merge, tag, release e rollback',
            'Plan, build, deploy e monitor — apenas quatro fases, repetidas duas vezes',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. As quatro primeiras fases pertencem tradicionalmente ao lado Dev e as quatro últimas ao Ops; o engenheiro DevOps é quem integra os dois mundos. O laço não fecha porque o que se aprende operando vira insumo do próximo planejamento.',
        feedbackWrong:
            'São oito: plan, code, build, test, release, deploy, operate e monitor. O formato de infinito não é enfeite — expressa que o monitoramento alimenta o próximo planejamento, ao contrário do ciclo de vida linear em cascata.',
    },
    {
        id: 'q5',
        exams: ['etapa1'],
        question:
            'Depois de mostrar um diagrama com dezenas de ferramentas DevOps, o material conclui que "é impossível encontrar uma referência única que englobe tudo". Qual é a lição prática?',
        options: [
            'Que é preciso escolher um fornecedor único e adotar toda a sua stack',
            'Que DevOps é inviável para equipes pequenas',
            'Que se deve priorizar os CONCEITOS sobre os produtos — as ferramentas se substituem, os princípios permanecem',
            'Que só é possível aprender DevOps na prática, sem estudo teórico',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso mesmo. Quem aprende "o que é integração contínua" migra de Jenkins para GitHub Actions sem sofrimento; quem decorou apenas os menus de uma ferramenta recomeça do zero a cada troca.',
        feedbackWrong:
            'A conclusão é sobre PRIORIDADE de estudo: conceitos antes de produtos. O roadmap existe justamente para organizar o estudo, mesmo sendo impossível dominar todas as ferramentas — e nada nele sugere adotar um fornecedor único ou abandonar a teoria.',
    },
    {
        id: 'q6',
        exams: ['etapa1'],
        question: 'No DevOps Roadmap apresentado, qual sistema operacional aparece como o mais importante em administração de servidores?',
        options: ['Windows Server', 'Linux', 'macOS Server', 'FreeBSD'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e não é acidente que a disciplina dedique sete aulas a Linux antes de chegar a containers: containers rodam sobre o kernel do host, e quase toda automação é feita por linha de comando.',
        feedbackWrong:
            'O roadmap classifica Linux como "very important" em administração de servidores, com Unix e Windows em seguida. É a base sobre a qual containers e orquestração se apoiam.',
    },
    {
        id: 'q7',
        exams: ['etapa1'],
        question: 'Qual é a diferença entre o kernel Linux e o que chamamos de GNU/Linux?',
        options: [
            'São sinônimos — dois nomes para o mesmo sistema',
            'O kernel é o núcleo que gerencia as tarefas do sistema; GNU/Linux é o kernel MAIS o ferramental GNU (compilador, bibliotecas, shell e utilitários)',
            'GNU/Linux é uma distribuição comercial do kernel Linux',
            'O kernel é a interface gráfica e o GNU/Linux é a linha de comando',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Linus Torvalds escreveu o kernel em 1991; o projeto GNU de Richard Stallman já tinha as ferramentas. É a soma dos dois que forma um sistema utilizável — e daí a insistência no nome composto.',
        feedbackWrong:
            'O kernel é apenas o núcleo: gerencia processos, memória e dispositivos, e é a ele que os programas fazem chamadas. GNU/Linux é esse kernel somado ao ferramental GNU (shell, compilador, bibliotecas, utilitários).',
    },
    {
        id: 'q8',
        exams: ['etapa1'],
        question: 'O que é uma DISTRIBUIÇÃO Linux?',
        options: [
            'Uma versão diferente do kernel, mantida por uma empresa',
            'Um conjunto de softwares utilitários reunidos em torno do kernel para formar um sistema operacional completo e utilizável',
            'A licença sob a qual o Linux é distribuído',
            'O processo de instalar o Linux em vários computadores de uma rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O Linux define apenas o kernel; a distribuição escolhe e integra o resto — instalador, gerenciador de pacotes, utilitários, políticas de atualização. É por isso que Debian e Slackware são tão diferentes rodando o mesmo kernel.',
        feedbackWrong:
            'A distribuição é o CONJUNTO de softwares que, somado ao kernel, forma um sistema completo. O kernel costuma ser essencialmente o mesmo; o que muda é a curadoria em volta dele.',
    },
    {
        id: 'q9',
        exams: ['etapa1'],
        question: 'Qual comando mostra o diretório em que você está no momento?',
        options: ['ls', 'cd', 'pwd', 'dir'],
        correctIndex: 2,
        feedbackCorrect:
            'Isso — pwd, de "print working directory". Simples, mas essencial em scripts, onde saber o diretório corrente evita operar no lugar errado.',
        feedbackWrong:
            'É o pwd (print working directory). O ls lista o conteúdo, o cd muda de diretório e dir é do mundo DOS/Windows.',
    },
    {
        id: 'q10',
        exams: ['etapa1'],
        question: 'Na saída de `ls -l`, o que significa o PRIMEIRO caractere de cada linha?',
        options: [
            'A primeira permissão do dono',
            'O tipo do item: "-" para arquivo regular, "d" para diretório, "l" para link simbólico, entre outros',
            'Se o arquivo está oculto',
            'O número de links do arquivo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Só depois desse caractere de tipo começam os nove bits de permissão, em três grupos de três (dono, grupo, outros). Confundir os dois é o erro clássico ao ler uma listagem.',
        feedbackWrong:
            'O primeiro caractere indica o TIPO do item (- arquivo, d diretório, l link simbólico, b bloco, c caractere, s socket, p pipe). As permissões vêm logo depois, nos nove caracteres seguintes.',
    },
    {
        id: 'q11',
        exams: ['etapa1'],
        question: 'Qual a diferença entre `>` e `>>` no redirecionamento de saída?',
        options: [
            '`>` grava em arquivo e `>>` grava na tela',
            '`>` SOBRESCREVE o arquivo de destino; `>>` ACRESCENTA ao final, preservando o conteúdo anterior',
            '`>` funciona só com texto e `>>` com binário',
            'São equivalentes; `>>` é apenas a forma antiga',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a distinção é de consequências sérias: usar `>` onde se queria `>>` destrói silenciosamente um log inteiro, sem aviso e sem confirmação.',
        feedbackWrong:
            '`>` sobrescreve o destino do zero; `>>` acrescenta ao final. Os dois gravam em arquivo — a diferença está em preservar ou não o conteúdo que já existia.',
    },
    {
        id: 'q12',
        exams: ['etapa1'],
        question: 'O que o comando `cat /etc/fstab | grep -i proc` faz?',
        options: [
            'Cria um arquivo chamado proc dentro de /etc/fstab',
            'Envia a saída de cat para a entrada de grep, que filtra as linhas contendo "proc" ignorando maiúsculas e minúsculas',
            'Executa cat e grep em paralelo, em processos separados',
            'Compara o arquivo /etc/fstab com um arquivo chamado proc',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O pipe `|` liga a saída de um comando à entrada do próximo, e a flag -i torna a busca insensível a maiúsculas. É essa composição que transforma a linha de comando numa linguagem de automação.',
        feedbackWrong:
            'O `|` (pipe) conecta a SAÍDA do cat à ENTRADA do grep; o -i faz a busca ignorar maiúsculas e minúsculas. Encadear comandos pequenos assim é a essência da filosofia Unix.',
    },
    {
        id: 'q13',
        exams: ['etapa1'],
        question: 'Qual comando conta quantas LINHAS existem em um arquivo?',
        options: ['wc -l arquivo', 'wc -w arquivo', 'wc -c arquivo', 'nl arquivo'],
        correctIndex: 0,
        feedbackCorrect:
            'Isso: -l de "lines". O -w conta palavras e o -c conta bytes. Combinado com grep, o wc -l vira a forma padrão de responder "quantas vezes isso aconteceu no log?".',
        feedbackWrong:
            'É `wc -l` (lines). O -w conta palavras, o -c conta bytes, e o nl apenas numera as linhas ao exibir o conteúdo, sem totalizar.',
    },
    {
        id: 'q14',
        exams: ['etapa1'],
        question: 'Qual a diferença entre `more` e `less`?',
        options: [
            'O more mostra o início e o less mostra o fim do arquivo',
            'O less é a versão reduzida do more, com menos recursos',
            'Ambos paginam a saída, mas o less permite navegar para FRENTE E PARA TRÁS, enquanto o more avança apenas',
            'O more funciona com pipes e o less apenas com arquivos',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto — daí a piada consagrada de que "less is more than more". Os dois saem com q, mas só o less permite voltar, o que faz diferença ao investigar um log longo.',
        feedbackWrong:
            'Os dois são paginadores e funcionam com pipes. A diferença é a navegação: o less vai e volta (Page Up/Down, setas, Home/End), o more só avança.',
    },
    {
        id: 'q15',
        exams: ['etapa1'],
        question: 'Como executar um comando demorado em SEGUNDO PLANO, liberando o terminal?',
        options: [
            'Acrescentando `&` ao final do comando',
            'Acrescentando `;` ao final do comando',
            'Prefixando o comando com `bg`',
            'Prefixando o comando com `nohup` obrigatoriamente',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato: o `&` no fim manda o comando para segundo plano. O `jobs` lista o que está rodando assim, o `fg` traz de volta para primeiro plano e o `bg` retoma em segundo plano algo que foi pausado com Ctrl+Z.',
        feedbackWrong:
            'É o `&` ao final. O `;` apenas separa comandos executados em sequência; o `bg` retoma em segundo plano um job já PAUSADO; e o nohup serve para o processo sobreviver ao fim da sessão, o que é outro problema.',
    },
    {
        id: 'q16',
        exams: ['etapa1'],
        question: 'Qual é a diferença entre `kill` e `killall`?',
        options: [
            'O kill encerra e o killall apenas pausa processos',
            'O kill age sobre um PID (número do processo) e o killall age sobre o NOME do processo',
            'O killall precisa de sudo e o kill não',
            'O kill funciona só com processos próprios e o killall com todos do sistema',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. `kill -9 3412` encerra aquele processo específico; `killall -9 top` encerra todos os processos chamados "top". O sinal -9 (KILL) é o que não pode ser ignorado pelo processo.',
        feedbackWrong:
            'A diferença é o alvo: kill recebe o PID (que se descobre com ps, top ou pidof) e killall recebe o NOME do processo, agindo sobre todos que tenham aquele nome.',
    },
    {
        id: 'q17',
        exams: ['etapa1'],
        question: 'Quais arquivos guardam, respectivamente, as informações de contas, as senhas cifradas e os grupos?',
        options: [
            '/etc/users, /etc/pass e /etc/groups',
            '/etc/passwd, /etc/shadow e /etc/group',
            '/var/passwd, /var/shadow e /var/group',
            '/home/passwd, /home/shadow e /home/group',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O /etc/passwd guarda login, UID, GID, informações do usuário, home e shell — e é legível por todos; por isso as senhas cifradas foram movidas para o /etc/shadow, de leitura restrita.',
        feedbackWrong:
            'São /etc/passwd (dados da conta: login, UID, GID, home, shell), /etc/shadow (senhas cifradas, com leitura restrita) e /etc/group (grupos). Note o singular em "group".',
    },
    {
        id: 'q18',
        exams: ['etapa1'],
        question: 'O que significa `chmod 755 script.sh`?',
        options: [
            'Dono com leitura, escrita e execução; grupo e outros com leitura e execução',
            'Dono com leitura e escrita; grupo e outros apenas com leitura',
            'Todos com todas as permissões',
            'Dono com execução apenas; grupo e outros sem permissão alguma',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. Somando r=4, w=2 e x=1: o 7 é rwx (4+2+1) para o dono, e cada 5 é r-x (4+1) para grupo e outros. É a permissão típica de um script executável compartilhado.',
        feedbackWrong:
            'Na notação octal, r=4, w=2 e x=1, e cada dígito é a soma para um nível. Assim 7 = rwx (dono), 5 = r-x (grupo) e 5 = r-x (outros). Dono com leitura e escrita e demais só leitura seria 644.',
    },
    {
        id: 'q19',
        exams: ['etapa1'],
        question: 'Qual é a permissão octal equivalente a `rw-r--r--`, típica de um arquivo comum?',
        options: ['755', '644', '664', '600'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: rw- = 4+2 = 6 para o dono, r-- = 4 para o grupo e r-- = 4 para outros, logo 644. É o padrão de um arquivo de dados que não precisa ser executado.',
        feedbackWrong:
            'rw- vale 6 (4+2) e r-- vale 4, então rw-r--r-- é 644. O 755 acrescentaria execução, o 664 daria escrita ao grupo e o 600 tiraria toda a leitura de grupo e outros.',
    },
    {
        id: 'q20',
        exams: ['etapa1'],
        question: 'Em um DIRETÓRIO, o que significa a permissão de execução (x)?',
        options: [
            'Que o diretório pode ser executado como um programa',
            'Que é possível ATRAVESSAR o diretório — entrar nele e acessar seu conteúdo pelo caminho',
            'Que os arquivos dentro dele são todos executáveis',
            'Que o diretório pode ser removido',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Em diretórios os bits mudam de sentido: r permite LISTAR os nomes, w permite criar e remover entradas, e x permite ENTRAR e atravessar. Sem o x, nem mesmo um arquivo legível lá dentro pode ser alcançado.',
        feedbackWrong:
            'Diretórios não são executados como programas. Ali o x significa poder atravessar o diretório — entrar nele e chegar ao que está dentro. O r apenas permite listar os nomes.',
    },
    {
        id: 'q21',
        exams: ['etapa1'],
        question:
            'Segundo o material, se você TEM permissão de gravação em um diretório mas NÃO tem no arquivo, consegue apagar esse arquivo?',
        options: [
            'Não, a permissão do arquivo sempre prevalece',
            'Sim — apagar é alterar a LISTA de entradas do diretório; o sistema apenas pede confirmação',
            'Apenas se você for o dono do arquivo',
            'Apenas com sudo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e é contraintuitivo. Remover um arquivo não modifica o arquivo: modifica o DIRETÓRIO que o lista. Por isso a permissão que importa é a do diretório — e o inverso também vale: sem escrita no diretório, você não apaga o arquivo nem sendo dono dele.',
        feedbackWrong:
            'Sim, consegue. Apagar altera a lista de entradas do DIRETÓRIO, não o conteúdo do arquivo — então é a permissão de escrita no diretório que decide. O sistema apenas pede confirmação.',
    },
    {
        id: 'q22',
        exams: ['etapa1'],
        question: 'Qual é a definição de Docker apresentada no material?',
        options: [
            'Um sistema operacional leve para servidores',
            'Um hipervisor de código aberto',
            'Uma plataforma para building, running e shipping de aplicações',
            'Um orquestrador de containers em cluster',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — construir, executar e enviar. A promessa associada é que, se a aplicação funciona com Docker na sua máquina, funcionará nas outras. Orquestrar em cluster é papel do Kubernetes, que vem depois.',
        feedbackWrong:
            'O material define Docker como plataforma para building, running e shipping de aplicações. Não é um sistema operacional nem um hipervisor (esse é o VirtualBox, VMware, Hyper-V), e a orquestração em cluster fica com o Kubernetes.',
    },
    {
        id: 'q23',
        exams: ['etapa1'],
        question: 'Quais são os três problemas de "shipping" que o material diz que o Docker resolve?',
        options: [
            'Lentidão, custo de licença e falta de documentação',
            'Arquivos faltando, versão errada de software e configuração divergente',
            'Falta de testes, ausência de CI e código não versionado',
            'Firewall, DNS e certificados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — os três motivos clássicos do "na minha máquina funciona". O exemplo do material é justamente o ambiente ter Node 14 quando a aplicação precisa de Node 20. Empacotar aplicação e dependências juntas elimina os três de uma vez.',
        feedbackWrong:
            'São arquivos faltando, versão errada de software (o ambiente tem Node 14, a aplicação precisa de Node 20) e configuração divergente, como variáveis de ambiente erradas. É o diagnóstico do "funciona na minha máquina".',
    },
    {
        id: 'q24',
        exams: ['etapa1'],
        question: 'Qual é a diferença FUNDAMENTAL entre um container e uma máquina virtual?',
        options: [
            'O container roda apenas Linux e a VM roda qualquer sistema',
            'O container COMPARTILHA o kernel do sistema operacional do host; a VM abstrai o hardware e carrega um sistema operacional INTEIRO próprio',
            'O container é gerenciado por um hipervisor e a VM não',
            'A VM é mais leve porque não precisa de imagem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e todas as outras diferenças decorrem daí. Sem precisar de um sistema operacional próprio, o container é leve, inicia em segundos e consome menos recursos; em troca, o isolamento é menor e o kernel compartilhado impõe limites.',
        feedbackWrong:
            'A diferença raiz é o kernel: o container compartilha o do host, enquanto a VM abstrai o hardware e roda um sistema operacional completo, com patches e licença próprios. Quem usa hipervisor (VirtualBox, VMware, Hyper-V) é a VM.',
    },
    {
        id: 'q25',
        exams: ['etapa1'],
        question: 'Por que o material diz que a lentidão de inicialização das VMs é um problema PARA MICROSSERVIÇOS em particular?',
        options: [
            'Porque microsserviços exigem sistemas operacionais diferentes entre si',
            'Porque a arquitetura sobe e derruba instâncias com frequência, e iniciar cada uma como um computador inteiro inviabiliza escalar sob demanda',
            'Porque microsserviços não funcionam com hipervisores',
            'Porque as VMs não suportam comunicação em rede entre serviços',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Escalar horizontalmente significa criar e destruir instâncias o tempo todo; se cada uma leva o tempo de ligar um computador, a elasticidade some. O container, iniciando em segundos, torna esse padrão praticável.',
        feedbackWrong:
            'O problema é a frequência: microsserviços sobem e descem instâncias constantemente. Uma VM demora a iniciar (como ligar um computador) e reserva CPU e memória fixas, o que inviabiliza escalar sob demanda.',
    },
    {
        id: 'q26',
        exams: ['etapa1'],
        question: 'Qual a diferença entre uma IMAGEM e um CONTAINER?',
        options: [
            'A imagem é o molde imutável, somente leitura; o container é a instância em execução criada a partir dela',
            'A imagem roda e o container armazena os dados',
            'São o mesmo objeto, com nomes diferentes conforme o comando',
            'A imagem existe só na nuvem e o container só localmente',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato — a analogia do material é classe e objeto: da mesma imagem se instanciam quantos containers se quiser. A imagem é somente leitura; o que muda fica na camada superior, gravável, do container.',
        feedbackWrong:
            'A imagem é o molde imutável (somente leitura) e o container é a instância em execução — como classe e objeto. Uma mesma imagem gera vários containers independentes.',
    },
    {
        id: 'q27',
        exams: ['etapa1'],
        question: 'No comando `docker build -t minha-app .`, o que significa o PONTO no final?',
        options: [
            'Que o build deve ocorrer em segundo plano',
            'Que a imagem receberá a tag "latest"',
            'O CONTEXTO de build: o diretório enviado ao daemon, onde ele procura o Dockerfile e os arquivos a copiar',
            'Que o Dockerfile deve ser lido da entrada padrão',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. O ponto é o diretório atual como contexto — e isso tem consequência prática: tudo que estiver nele é enviado ao daemon, por isso existe o .dockerignore para não empurrar node_modules e .git para dentro do build.',
        feedbackWrong:
            'O ponto indica o CONTEXTO de build (aqui, o diretório atual): é de onde o daemon lê o Dockerfile e os arquivos que serão copiados. A tag vem do -t, e o build não roda em segundo plano por causa dele.',
    },
    {
        id: 'q28',
        exams: ['etapa1'],
        question: 'Por que a ORDEM das instruções no Dockerfile afeta o tempo dos builds seguintes?',
        options: [
            'Porque o Docker executa as instruções em ordem alfabética',
            'Porque cada instrução gera uma CAMADA em cache; quando uma muda, ela e todas as posteriores são refeitas — por isso o que muda mais fica por último',
            'Porque instruções no início têm prioridade de CPU',
            'A ordem não afeta o tempo, apenas a legibilidade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e daí a receita prática: copiar primeiro o arquivo de dependências e instalá-las, depois copiar o código. Como o código muda a cada commit e as dependências raramente, o cache da instalação sobrevive à maioria dos builds.',
        feedbackWrong:
            'Cada instrução vira uma camada cacheada. Ao alterar uma instrução, ela e TODAS as seguintes são reexecutadas — então convém deixar por último o que muda com frequência (o código) e antes o que muda pouco (as dependências).',
    },
    {
        id: 'q29',
        exams: ['etapa1'],
        question: 'Qual é a arquitetura do Docker, segundo o material?',
        options: [
            'Peer-to-peer entre os containers',
            'Monolítica: um único binário faz tudo',
            'Cliente/servidor: o cliente (linha de comando) conversa por uma REST API com o daemon, que constrói imagens e executa containers',
            'Baseada em hipervisor tipo 1',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Essa separação explica coisas do dia a dia: o cliente pode falar com um daemon remoto, e o "contexto" enviado no build existe porque quem constrói é o daemon, não o cliente.',
        feedbackWrong:
            'É cliente/servidor: o comando docker é apenas o cliente, e quem realmente constrói imagens e roda containers é o daemon, acessado por uma REST API.',
    },
    {
        id: 'q30',
        exams: ['etapa1'],
        question: 'A Etapa 01 do projeto exige um DBMS "baseado em arquivo" e proíbe explicitamente bancos em memória como o HSQLDB. Por quê, no espírito da disciplina?',
        options: [
            'Porque bancos em memória são mais lentos',
            'Porque o dado precisa PERSISTIR fora do processo da aplicação — é isso que torna o problema de volumes, Secrets e operadores de banco real nas etapas seguintes',
            'Porque o HSQLDB não tem suporte a SQL',
            'Porque bancos em memória não funcionam dentro de containers',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Um banco em memória some quando o container morre — e some junto com ele todo o aprendizado sobre persistência, volumes, migrations e operadores de banco, que é o cerne das etapas 02 e 03.',
        feedbackWrong:
            'A exigência é sobre PERSISTÊNCIA. Com banco em memória, o estado desaparece ao reiniciar o container e os problemas realmente interessantes — volumes, Secrets, job de migrations, operador de banco no cluster — nunca aparecem.',
    },
    {
        id: 'q31',
        exams: ['etapa1'],
        question: 'A Etapa 01 pede build MULTI-STAGE e imagens mínimas. Qual é o ganho do multi-stage?',
        options: [
            'Permite construir várias aplicações no mesmo Dockerfile simultaneamente',
            'Separa o estágio de COMPILAÇÃO do de EXECUÇÃO, de modo que compilador, SDK e dependências de build não vão para a imagem final',
            'Faz o build rodar em paralelo, reduzindo o tempo pela metade',
            'Gera automaticamente uma imagem para cada arquitetura de processador',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Copia-se do estágio de build apenas o artefato pronto para uma imagem base enxuta. O resultado é menor e mais seguro: o que não está na imagem não pode ser explorado nem precisa de patch.',
        feedbackWrong:
            'O multi-stage separa compilação de execução: um estágio compila e o estágio final recebe só o artefato. Assim o compilador e as dependências de build ficam de fora da imagem publicada, que fica menor e com menos superfície de ataque.',
    },
    {
        id: 'q32',
        exams: ['etapa2'],
        question: 'Na Etapa 02, o Helm chart deve ter values.yaml por ambiente (dev e prod). Qual princípio dos 12 fatores isso concretiza?',
        options: [
            'Separar CONFIGURAÇÃO do código: o mesmo artefato roda em qualquer ambiente, mudando apenas os valores injetados',
            'Tratar logs como fluxo de eventos',
            'Executar a aplicação como processos sem estado',
            'Manter paridade entre desenvolvimento e produção',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Isso. Um único chart e uma única imagem servem a dev e prod; o que muda são os values. Se fosse preciso reconstruir a imagem para trocar de ambiente, a configuração estaria embutida no código — exatamente o que o fator proíbe.',
        feedbackWrong:
            'O ponto é separar configuração de código: mesmo chart, mesma imagem, valores diferentes por ambiente. Paridade dev/prod é um fator relacionado, mas o que os values.yaml implementam diretamente é a externalização da configuração.',
    },
    {
        id: 'q33',
        exams: ['etapa2'],
        question:
            'A Etapa 02 exige um job de migrations que rode ANTES da aplicação, e manda pesquisar "argocd sync waves". Qual problema as sync waves resolvem?',
        options: [
            'Fazer o Argo CD sincronizar mais rápido, em paralelo',
            'Definir a ORDEM em que os recursos são aplicados, garantindo que o banco esteja migrado antes de a aplicação subir',
            'Dividir o tráfego entre versões da aplicação',
            'Sincronizar os relógios dos nós do cluster',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sem ordenação, o Argo aplicaria tudo de uma vez e a aplicação poderia iniciar contra um esquema desatualizado. As waves impõem etapas: primeiro a migration, depois a aplicação.',
        feedbackWrong:
            'Sync waves são sobre ORDEM de aplicação dos recursos, não velocidade. Elas garantem que o job de migrations complete antes de a aplicação subir. Dividir tráfego entre versões é assunto do Argo Rollouts.',
    },
    {
        id: 'q34',
        exams: ['etapa2'],
        question:
            'A Etapa 02 proíbe usar a tag `latest` nas imagens publicadas no ghcr. Qual é a razão técnica dessa proibição em um fluxo GitOps?',
        options: [
            'Porque o ghcr não aceita a tag latest',
            'Porque `latest` é um alvo móvel: o manifesto deixa de descrever qual versão está rodando, e não há como reproduzir nem reverter um estado com precisão',
            'Porque imagens com latest ocupam mais espaço no registry',
            'Porque o Helm não consegue referenciar a tag latest',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. GitOps se apoia na ideia de que o repositório é a fonte da verdade sobre o que está implantado — e `latest` quebra isso, porque dois clusters lendo o mesmo manifesto podem estar rodando imagens diferentes.',
        feedbackWrong:
            'O problema é a imutabilidade: `latest` aponta para coisas diferentes ao longo do tempo, então o manifesto deixa de identificar a versão em execução, e reproduzir ou reverter vira adivinhação. Tecnicamente o registry e o Helm aceitam a tag sem dificuldade.',
    },
    {
        id: 'q35',
        exams: ['etapa2'],
        question:
            'A Etapa 02 pede para "pesquisar como evitar que o CI/CD entre em loop". Como esse loop surge?',
        options: [
            'Quando dois desenvolvedores fazem push ao mesmo tempo',
            'Quando o pipeline, ao atualizar a versão da imagem no repositório, gera um commit que dispara o próprio pipeline outra vez, indefinidamente',
            'Quando o cluster reinicia a aplicação repetidamente por falta de memória',
            'Quando o Argo CD sincroniza em intervalos muito curtos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — é a mordida na própria cauda. O pipeline commita a nova versão no Helm, esse commit dispara o pipeline, que commita de novo. As saídas usuais são marcar o commit para ser ignorado (por exemplo com [skip ci]) ou filtrar autor e caminho no gatilho.',
        feedbackWrong:
            'O loop nasce do pipeline commitar no mesmo repositório que o dispara: atualizar a versão da imagem no Helm gera um commit, que aciona o pipeline de novo. Resolve-se ignorando esses commits no gatilho ou filtrando por autor e caminho.',
    },
    {
        id: 'q36',
        exams: ['etapa2'],
        question: 'Em um Deployment do Kubernetes, o que precisa obrigatoriamente casar para que ele gerencie os pods corretamente?',
        options: [
            'O nome do Deployment e o nome da imagem',
            'O `selector.matchLabels` e os `labels` declarados no `template.metadata`',
            'O `containerPort` e a porta do Service',
            'O `apiVersion` e a versão do cluster',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O selector é como o Deployment reconhece os pods que lhe pertencem; se ele não casar com os labels do template, o controlador não encontra os pods que ele mesmo criou — e o manifesto é rejeitado ou se comporta de forma estranha.',
        feedbackWrong:
            'O que precisa casar é o `selector.matchLabels` com os `labels` do `template.metadata` — é por eles que o Deployment identifica seus pods. Nome e imagem são independentes, e a porta do Service é outra ligação.',
    },
    {
        id: 'q37',
        exams: ['etapa2'],
        question:
            'O professor mostrou duas capturas do mesmo deployment.yaml: no vim parecia correto, no VS Code aparecia com erro. O que havia acontecido?',
        options: [
            'O arquivo estava com codificação de caracteres errada',
            'A indentação de uma chave estava incorreta, mudando a ÁRVORE que o parser enxerga — a chave env deixou de ser irmã de image e as variáveis se penduraram no nó errado',
            'O vim havia salvado o arquivo com quebras de linha do Windows',
            'A versão da apiVersion estava obsoleta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. YAML deriva a estrutura da indentação, então um desalinhamento sutil produz um documento válido mas com significado DIFERENTE. A lição prática: validar com ferramenta (kubectl apply --dry-run=client, linters) em vez de confiar na inspeção visual.',
        feedbackWrong:
            'O problema era de INDENTAÇÃO: a chave env ficou com recuo menor que o de image, deixando de pertencer ao container, e as variáveis seguintes foram parar no nó errado. Como YAML define a estrutura pelo recuo, o arquivo continua "parecendo" certo enquanto significa outra coisa.',
    },
    {
        id: 'q38',
        exams: ['etapa3'],
        question: 'Na estratégia BLUEGREEN, como a nova versão entra em produção?',
        options: [
            'Recebendo uma fatia pequena do tráfego, que cresce gradualmente',
            'Mantendo-se dois ambientes completos e chaveando TODO o tráfego de um para o outro de uma vez',
            'Substituindo os pods um a um, em ondas',
            'Duplicando as requisições para as duas versões simultaneamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Como o ambiente antigo continua de pé, o rollback é quase instantâneo — basta apontar o tráfego de volta. O preço é manter o dobro da infraestrutura durante a troca.',
        feedbackWrong:
            'BlueGreen mantém dois ambientes completos e vira o tráfego de uma vez. Exposição gradual de uma fração do tráfego é o CANARY; substituir pods aos poucos é o rolling update.',
    },
    {
        id: 'q39',
        exams: ['etapa3'],
        question: 'Por que a Etapa 03 exige manter a AUTO-PROMOÇÃO DESABILITADA no BlueGreen?',
        options: [
            'Porque a auto-promoção não funciona no Argo Rollouts',
            'Para que a promoção seja uma DECISÃO consciente — a nova versão fica de pé para verificação e só assume o tráfego quando alguém a promove',
            'Para economizar recursos do cluster',
            'Porque a auto-promoção é incompatível com o Canary usado em produção',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Com auto-promoção, o chaveamento vira automatismo e não há janela para verificar nada. Desabilitá-la cria o momento de inspeção — e, pedagogicamente, obriga a equipe a executar e enxergar o corte de tráfego acontecendo.',
        feedbackWrong:
            'A auto-promoção funciona e é compatível com o resto; o ponto é pedagógico e operacional: desabilitá-la transforma a promoção em decisão deliberada, com uma janela para validar a nova versão antes de ela receber o tráfego.',
    },
    {
        id: 'q40',
        exams: ['etapa3'],
        question: 'Qual é a principal EXIGÊNCIA técnica para que uma implantação Canary faça sentido?',
        options: [
            'Ter o dobro da infraestrutura disponível',
            'Ter boa OBSERVABILIDADE — sem métricas confiáveis, não há como saber se a fatia já exposta está saudável para aumentar o tráfego',
            'Usar obrigatoriamente um service mesh',
            'Manter as duas versões com o mesmo número de réplicas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O Canary troca risco por informação: expõe pouco, mede, e só então amplia. Sem métricas confiáveis, o que resta é um deploy lento e às cegas — com o agravante de duas versões convivendo por mais tempo.',
        feedbackWrong:
            'A exigência central é observabilidade: o Canary só funciona se for possível avaliar a saúde da fatia exposta antes de ampliá-la. Dobrar a infraestrutura é característica do BlueGreen, e service mesh é um meio possível, não um requisito.',
    },
];
