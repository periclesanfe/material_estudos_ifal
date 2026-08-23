import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const GPJT_GUIDE_CONTEXT = `
GUIA COMPLETO DE GERÊNCIA DE PROJETO (GPJT) - Resumo:

1. A DISCIPLINA: Gerência de Projeto (GPJT, 5º período, 80h), turma 2024. A disciplina teve TROCA DE PROFESSOR no meio do semestre — o professor titular se afastou para pós-doutorado e outro assumiu a continuidade. Não há prova declarada: a avaliação se dá por uma sequência de ATIVIDADES ENTREGUES que produzem, uma a uma, os artefatos reais de um projeto. A trilha: descrever um projeto (mapa mental) → escrever DOIS Termos de Abertura, um de TI e outro de OUTRA área → escrever 10 perguntas sobre o texto "O que é projeto de fato" → ler a apostila de PMBOK 7 → criar uma EAP para um CHURRASCO → produzir Levantamento de Requisitos e Declaração de Escopo a partir de modelos → calcular o CAMINHO CRÍTICO de um diagrama de precedências → apresentar em grupo sobre METODOLOGIAS ÁGEIS. Materiais-base: apostila "Fundamentos da Gestão de Projetos" (FM2S, 2022, comparando PMBOK 6 e 7), os três módulos de "Introdução à Gestão de Projetos" da ENAP (Escola Nacional de Administração Pública, 2014) e um material da ENAP de 171 páginas sobre controle, além dos slides autorais do professor sobre Iniciação e Planejamento com foco em projetos de TI.

2. O QUE É UM PROJETO: pelo PMBOK, "esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo". A apostila detalha: esforço pontual, com recursos delimitados, visando objetivo único e claro. Características: empreendimento NÃO REPETITIVO, sequência lógica de eventos, início-meio-fim (ciclo de vida), objetivo claro e definido, conduzido por pessoas, uso de recursos e parâmetros predefinidos. Três características centrais desenvolvidas: TEMPO (o "temporário" se aplica ao ESFORÇO, não ao RESULTADO — um projeto de melhoria acaba, mas o processo que ele criou continua rodando), CUSTOS E RECURSOS (força de trabalho, materiais, infraestrutura, orçamento e prazos, estimados desde a fase inicial) e DESENVOLVIMENTO (o projeto é PROGRESSIVAMENTE ELABORADO: progride em etapas e sua definição é refinada em cada uma). Outras definições recolhidas: ISO 21500 ("conjunto único de processos... com datas de início e fim"), PRINCE2 ("organização temporária criada com o propósito de entregar um ou mais produtos de negócio de acordo com uma justificativa de negócio acordada") e ISO 10006.

3. PROJETO × OPERAÇÃO: operações (ou rotinas) são funções organizacionais que executam continuamente atividades que produzem o MESMO produto ou serviço repetitivo; são esforços PERMANENTES com saídas REPETITIVAS. O projeto é temporário e produz resultado ÚNICO. Ambos, porém, são realizados por pessoas, limitados por recursos, planejados, executados e controlados, e servem a objetivos organizacionais. Exemplos de operação: folha de pagamento, atendimento ao cidadão, administração do almoxarifado, manutenção de equipamentos, gerenciamento de uma rede. Exemplos de projeto: desenvolver um software, lançar um produto, construir uma fábrica, montar um data center.

4. PROJETO, PROGRAMA E PORTFÓLIO: PROGRAMA é um conjunto de projetos RELACIONADOS, gerenciados de modo coordenado para obter benefícios que não seriam obtidos gerenciando-os isoladamente — e o programa é orientado a BENEFÍCIOS, enquanto o projeto é orientado à ENTREGA. Benefícios não são produtos: são impactos e resultados percebidos pela sociedade ou pela organização. PORTFÓLIO é uma coleção de projetos, programas e outros trabalhos agrupados para facilitar o gerenciamento efetivo e atender objetivos ESTRATÉGICOS. A diferença decisiva: projetos e programas são TEMPORÁRIOS; portfólios são CONTÍNUOS.

5. HISTÓRIA: Frederick Taylor (1856-1915) aplicou raciocínio científico ao trabalho e publicou "The Principles of Scientific Management" (1911). Henry Gantt (1861-1919), considerado o pai fundador do gerenciamento de projetos moderno, estudou a sequência das atividades e criou os diagramas de barras que levam seu nome. Em 1957 a DuPont criou o CPM (Critical Path Method) para o fechamento e reinício de plantas químicas, economizando US$ 1 milhão no primeiro ano. Em 1958 a Marinha dos EUA desenvolveu o PERT no projeto Polaris. Em 1962 o Departamento de Defesa criou o conceito de WBS (EAP), também no Polaris. Em 1965 nasceu o IPMA, em Viena. Em 1969, cinco voluntários fundaram o PMI, na Filadélfia — hoje editor do PMBOK e emissor das certificações PMP e CAPM. Marcos anteriores citados: as pirâmides (2570 a.C., com gerentes para cada face da Grande Pirâmide) e a Grande Muralha (208 a.C.).

6. GERENCIAMENTO DE PROJETOS: "aplicação de conhecimentos, habilidades, ferramentas e técnicas às atividades do projeto com o propósito de atender aos seus requisitos". Benefícios apontados: aumento do comprometimento com objetivos, integração entre áreas, disponibilidade de informação para decisão, melhoria de qualidade, satisfação do cliente, minimização de riscos, otimização de recursos e produtividade da equipe. Um projeto é BEM-SUCEDIDO se entregou os produtos planejados, dentro do prazo, dentro do orçamento, alcançou metas e propósitos, atendeu aos requisitos conforme a expectativa das partes interessadas e não causou impacto negativo.

7. PMBOK 6 — OS 5 GRUPOS DE PROCESSOS: INICIAÇÃO (define um novo projeto ou fase e obtém autorização formal), PLANEJAMENTO (define o escopo e o curso de ação para alcançar os objetivos), EXECUÇÃO (realiza o trabalho definido no plano), MONITORAMENTO E CONTROLE (acompanha, revisa e regula o desempenho, identificando desvios e iniciando mudanças) e ENCERRAMENTO (finaliza formalmente o projeto ou fase). ATENÇÃO A DUAS CONFUSÕES FREQUENTES: (a) grupos de processos NÃO são fases do projeto — os grupos se sobrepõem e se repetem ao longo de cada fase; (b) o monitoramento e controle não é sequencial: ele SOBREVOA todo o projeto, ocorrendo de forma não linear em paralelo com os demais.

8. PMBOK 6 — AS 10 ÁREAS DE CONHECIMENTO: integração (identificar, definir, combinar, unificar e coordenar os demais processos), escopo (assegurar que o projeto inclui TODO o trabalho necessário e APENAS o necessário), tempo/cronograma, custos, qualidade, recursos humanos, comunicações, riscos, aquisições e partes interessadas. Sobre comunicação, o material registra que o trabalho do gerente é dito ser cerca de 80% a 90% comunicação.

9. PMBOK 7 — A VIRADA: a sétima edição traz conceitos mais genéricos e incorpora as metodologias ágeis. Sai a organização por áreas de conhecimento e processos; entram PRINCÍPIOS e DOMÍNIOS DE DESEMPENHO. OS 12 PRINCÍPIOS, na tradução da apostila: 1 Intendência (tradução de "Stewardship", melhor lida como zelo ou responsabilidade de guarda), 2 Colaboração, 3 Empatia, 4 Foco no Valor, 5 Pensamento Sistêmico, 6 Liderança, 7 Tailoring (adaptação), 8 Qualidade, 9 Complexidade, 10 Riscos, 11 Adaptabilidade, 12 Resiliência e Mudanças. OS 8 DOMÍNIOS DE DESEMPENHO: 1 Equipe, 2 Stakeholders (partes interessadas), 3 Abordagem de Desenvolvimento e Ciclo de Vida (onde se escolhe entre preditiva, iterativa e híbrida), 4 Planejamento, 5 Incerteza (riscos, incerteza e VUCA — volatilidade, incerteza, complexidade e ambiguidade), 6 Medição, 7 Entrega e 8 Trabalho do Projeto. Os domínios são interativos, inter-relacionados e interdependentes, formando um sistema integrado.

10. CICLO DE VIDA E TIPOS DE PROJETO: o ciclo de vida é a sequência de fases do início ao fim. Projetos PREDITIVOS (ou pré-determinados) têm escopo detalhado desde a iniciação, adequados a produtos entregues de uma vez só; projetos ADAPTATIVOS (ou ágeis) iniciam sem escopo fechado, que vai sendo determinado conforme o andamento, com entregas parciais — recomendados quando há variação esperada no percurso. Três características do ciclo de vida: (a) custo e pessoal são baixos no início, atingem o máximo durante a execução e caem rapidamente no encerramento; (b) a influência das partes interessadas, os RISCOS e as INCERTEZAS são MAIORES no início e caem ao longo do tempo; (c) a capacidade de INFLUENCIAR as características finais do produto sem impacto significativo de custo é MAIOR no início e diminui conforme o projeto avança. Essa última é a justificativa econômica de investir em planejamento.

11. PARTES INTERESSADAS: pessoas ou organizações ativamente envolvidas no projeto ou cujos interesses podem ser afetados positiva ou negativamente pela execução ou término. Papéis: PATROCINADOR (fornece apoio político e recursos financeiros, esclarece dúvidas de escopo, serve de porta-voz nos níveis gerenciais mais elevados; aprova o orçamento e garante disponibilidade de recursos), CLIENTE e USUÁRIOS (quem adquire e quem utiliza — nem sempre a mesma pessoa), EQUIPE DO PROJETO, EQUIPE DE GERENCIAMENTO, LÍDER/GERENTE DO PROJETO (responsável pela comunicação com todas as partes, particularmente patrocinador e equipe), FORNECEDORES, ORGANIZAÇÃO EXECUTORA e ainda o COMITÊ DIRETOR. Identificar stakeholders exige analisar o ambiente do projeto, determinar o tipo de influência, categorizar o nível de influência e coletar informações.

12. ESTRUTURAS ORGANIZACIONAIS: FUNCIONAL (hierarquia clássica por especialidade; o gerente funcional tem autoridade sobre os recursos e o gerente de projeto tem pouca ou nenhuma; papel de tempo parcial), PROJETIZADA (recursos alocados nos projetos; o gerente de projeto tem alta autoridade e trabalha em tempo integral; controla o orçamento) e as MATRICIAIS — fraca (autoridade limitada do gerente de projeto, orçamento com o gerente funcional), balanceada (autoridade mista, orçamento misto) e forte (o gerente de projeto tem autoridade moderada a alta, controla o orçamento e trabalha em tempo integral). Há ainda a COMPOSTA, que combina elementos. O ESCRITÓRIO DE GERENCIAMENTO DE PROJETOS (EGP/PMO) centraliza e coordena o gerenciamento: compartilha recursos entre projetos, define metodologia e padrões, treina e supervisiona, audita conformidade, gerencia documentação e ferramentas e coordena as comunicações entre projetos.

13. INICIAÇÃO E O TERMO DE ABERTURA (TAP): projetos surgem por demanda de mercado, oportunidade ou necessidade estratégica, solicitação de cliente, avanço tecnológico ou REQUISITO LEGAL. O TAP é o documento oficial emitido pela alta administração que DÁ AUTORIDADE AO LÍDER do projeto, autoriza e comunica formalmente o início. A estrutura do modelo usado na disciplina: Objetivo, Justificativa (a situação atual, o problema e uma pesquisa de mercado das alternativas), Escopo Preliminar, Premissas, Restrições (o que condiciona o projeto a acontecer), Riscos Preliminares (tabela de descrição do risco e criticidade), Partes Interessadas e Aprovação com assinatura. A atividade da turma pedia DOIS termos de abertura — um de TI e outro de OUTRA área —, exigência didática que quebra a associação automática entre projeto e software.

14. ESCOPO, REQUISITOS E A DECLARAÇÃO DE ESCOPO: definir o escopo significa identificar o problema ou oportunidade, os objetivos e metas, COMO O SUCESSO SERÁ MEDIDO e os riscos e obstáculos. A qualidade do planejamento é limitada pela qualidade da definição de escopo. O modelo de Declaração de Escopo da disciplina traz: controle de versões; situação atual e justificativa (o passado, onde se está); objetivos e critérios de sucesso (o futuro, onde se quer chegar) definidos como metas SMART — a sigla é apresentada na formulação ORIGINAL de Doran: Specific (específico), Measurable (indicador e meta), Assignable (quem), Realistic (realístico) e Time-related (quando); escopo do produto; EXCLUSÕES DO PROJETO / FORA DO ESCOPO ("liste itens reconhecidos como não-escopo de modo a evitar mal-entendidos na conclusão"); restrições; premissas (e o impacto se forem provadas falsas); entregas e critérios de aceitação; e aprovações do patrocinador e do gerente. O modelo de requisitos separa REQUISITOS FUNCIONAIS, DE RELATÓRIOS, DE SEGURANÇA e NÃO-FUNCIONAIS, cada um em tabela de ID, descrição e comentários. Conceito relacionado: GOLDPLATING (banhar a ouro) é entregar MAIS do que o cliente pediu, acrescentando o que não estava no escopo — e é tratado como problema, não como cortesia.

15. EAP / WBS: diagrama que organiza o escopo total do projeto de forma visual e hierárquica, subdividindo o trabalho em componentes menores e mais fáceis de gerenciar (pacotes de trabalho). BOA PRÁTICA CENTRAL: o que vai na EAP NÃO É A TAREFA, e sim O QUE SERÁ ENTREGUE naquela atividade — a EAP é orientada a entregas, não a ações. Benefícios: organiza e define o escopo total, serve de instrumento de comunicação por ser de fácil compreensão, auxilia a definição de recursos e a estimativa de tempo, atribui responsabilidades, dá à equipe a compreensão do todo e do impacto do trabalho de cada um, e é a base para as estimativas de recursos, custo e tempo — cronograma, alocação de recursos e orçamento detalhado dependem dela. O exemplo da apostila é uma EAP de um projeto de CHURRASCO, com os ramos Infraestrutura, Comes, Bebes, Insumos diversos, Entretenimento e Serviços — o mesmo tema da atividade da turma (churrasco para 10 pessoas, no mínimo 3 proteínas, água, cerveja e refrigerante).

16. CRONOGRAMA E CAMINHO CRÍTICO: o cronograma controla a agenda — datas e progresso — e o gráfico de GANTT é sua ferramenta de controle, com atividades no eixo vertical, datas no horizontal e barras posicionadas conforme início e término. Técnicas de estimativa de duração: por ANALOGIA (comparar com projetos anteriores), PARAMÉTRICA, de TRÊS PONTOS (otimista, mais provável, pessimista) e JULGAMENTO DE ESPECIALISTAS. O CAMINHO CRÍTICO é a sequência de atividades que determina a duração total do projeto — é o caminho MAIS LONGO da rede e tem FOLGA ZERO; atrasar qualquer atividade dele atrasa o projeto inteiro. Calcula-se com a passagem para frente (PDI, primeira data de início; PDT, primeira data de término) e para trás (UDI, última data de início; UDT, última data de término), sendo FOLGA = UDI − PDI. Para comprimir o cronograma: CRASHING (compressão — alocar mais recursos, reduzir escopo) e FAST TRACKING (paralelismo — executar em paralelo tarefas previstas como sequenciais).

17. O EXERCÍCIO DE CAMINHO CRÍTICO DA TURMA: rede com Planejamento (15 dias) abrindo em dois caminhos paralelos, Base de dados (3) e Ambiente (2), que convergem em CRUD Pessoas (2); daí abrem novamente em CRUD Titulares (3) e CRUD Parentesco (1), que convergem em CRUD Dependentes (2). Os quatro caminhos possíveis medem 25, 24, 23 e 22 dias. O CAMINHO CRÍTICO é o de 25 dias: Planejamento → Base de dados → CRUD Pessoas → CRUD Titulares → CRUD Dependentes. As folgas: Ambiente tem folga 1 (pode atrasar um dia sem impacto) e CRUD Parentesco tem folga 2. Duração total do projeto: 25 dias. Lições: convergência faz a atividade seguinte esperar a predecessora MAIS LENTA; encurtar atividades fora do caminho crítico não muda a duração; e ao comprimir o caminho crítico o suficiente, OUTRO caminho passa a ser o crítico.

18. RISCOS: risco é "um evento ou condição incerta que, se ocorrer, provocará um efeito POSITIVO OU NEGATIVO nos objetivos do projeto" — a definição inclui o lado positivo, as oportunidades. O processo tem quatro passos: IDENTIFICAR (riscos internos e externos; abordagem TOP-DOWN partindo dos requisitos e listando o que pode falhar, ou BOTTOM-UP partindo das causas possíveis e vendo como o projeto se expõe), QUANTIFICAR (combinando SEVERIDADE, o dano se ocorrer, com PROBABILIDADE de ocorrência), CONTROLAR (estratégias alternativas, planejamento de contingência, recorrer a fornecedores) e ITERAR (repetir regularmente ao longo do projeto, revendo os riscos existentes e identificando novos). Um risco severo mas de baixa probabilidade deve ser MONITORADO, sem investir em estratégias caras de controle. O gerenciamento de riscos não elimina a incerteza — garante que ela seja considerada.

19. CUSTOS E ANÁLISE DE VALOR AGREGADO (AVA): os três valores-chave são VP (Valor Planejado, o valor planejado até a data de avaliação), CA (Custo Atual, o valor efetivamente aplicado no trabalho realizado) e VA (VALOR AGREGADO, "o valor do trabalho realizado", calculado como VA = progresso físico [%] × valor orçado [$]). AS QUATRO FÓRMULAS: VC = VA − CA (variação no custo; negativo é ruim), VCr = VA − VP (variação no cronograma; negativo é ruim), IDT = VA / VP (indicador de desempenho de tempo; menor que 1 é ruim) e IDC = VA / CA (indicador de desempenho de custo; menor que 1 é ruim). Leituras do próprio material: um IDT de 0,85 indica 15% de perda de tempo; um IDC de 0,95 indica que 95% dos recursos aplicados viraram trabalho. MODELO DE ANÁLISE DE DESEMPENHO (semáforo): IDC < 1 E IDT < 1 → PROBLEMA (vermelho); IDC < 1 OU IDT < 1 → ALERTA (amarelo); IDC ≥ 1 E IDT ≥ 1 → OK (verde). Quatro métodos de medir progresso físico: avaliação física de avanço (300 m² de um muro de 1.000 m² = 30%), marcos fixos (0/50/100 ou 25/75), marcos percentual completo e marcos com valores ponderados. Para projetar o orçamento final (OPF): com DESCRÉDITO no orçamento, OPF = CA + EOP (replanejando o que falta); com CONFIANÇA no orçamento, OPF = CA + OP − VA; e mantida a MESMA TENDÊNCIA, OPF = CA + (OP − VA)/IDC.

20. EXEMPLO RESOLVIDO DE VALOR AGREGADO: pacote "Formação de multiplicadores", orçado em R$ 50K para 12 semanas, com cinco marcos (levantamento da demanda 10% até 2s; plano didático 25% até 5s; professores selecionados 15% até 5s; aulas realizadas 40% até 11s; avaliação 10% até 12s). Na semana 7, o relatório registra 50% de progresso e custo de R$ 31K. Então: VP = 50% (marcos previstos até a semana 7) = R$ 21K; VA = 50% × R$ 50K = R$ 25K; CA = R$ 31K. Logo VC = 25 − 31 = −6K (acima do orçamento), VCr = 25 − 21 = +4K (adiantado), IDT = 25/21 = 1,19 e IDC = 25/31 = 0,81 → ALERTA. É o exemplo mais instrutivo do material porque quebra a intuição: o projeto está ADIANTADO e ACIMA DO ORÇAMENTO ao mesmo tempo, o que sugere ter-se comprado velocidade com dinheiro. Nenhuma métrica isolada contaria essa história.

21. QUALIDADE, COMUNICAÇÃO, AQUISIÇÕES E RECURSOS: a qualidade busca a conformidade dos produtos, exigindo definir antes as metas, indicadores, métricas e checklists. A COMUNICAÇÃO é apontada como o problema mais frequente em projetos — num estudo de benchmarking citado, 76% dos projetos relatam problemas de comunicação, seguidos por não cumprimento de prazos (71%) e mudanças constantes de escopo (70%). A comunicação se classifica em formal/informal e escrita/verbal. AQUISIÇÕES: tipos de contrato por PREÇO FIXO, por TEMPO E MATERIAL e de CUSTO REEMBOLSÁVEL; no setor público, a rigidez legal e o fato de as compras passarem por uma unidade especializada aumentam a dificuldade de acompanhamento. A MATRIZ RACI atribui papéis: R responsável pela execução, A quem autoriza ou aprova, C quem deve ser consultado antes e I quem deve ser informado depois.

22. O PLANO DE GERENCIAMENTO DO PROJETO — 12 COMPONENTES: resumo executivo (objetivos, responsabilidades, produtos e autorização), quadro lógico (objetivos, produtos, indicadores, fontes de verificação e suposições), estrutura de gerenciamento, matriz de responsabilidades, plano de comunicação, estrutura analítica do projeto, detalhes de suporte da EAP (especificações e requisitos de qualidade de cada produto), plano de monitoramento, plano de recursos humanos, cronograma, orçamento e plano de riscos.

23. MONITORAMENTO, CONTROLE E MUDANÇAS: o processo de controle tem cinco etapas — monitorar o projeto, identificar problemas e suas causas, desenvolver e implementar solução, atualizar o plano do projeto e registrar LIÇÕES APRENDIDAS. Quatro tipos de AVALIAÇÃO conforme a fase: EX-ANTE na iniciação e planejamento (foco em relevância, consistência e viabilidade), DE MEIO TERMO na execução (tempo, custo e escopo — eficiência), FINAL no encerramento (tempo, custo, escopo e qualidade — eficiência e eficácia) e EX-POST no médio e longo prazo depois do projeto (impactos — efetividade). O controle de escopo verifica o trabalho para que seja aceito; o de qualidade foca a exatidão dos produtos segundo o padrão esperado. Todo projeto sofre mudanças, e o processo formal de gerenciá-las evita o SCOPE CREEP — a expansão incremental do escopo que o torna genérico, sem foco e ingerenciável.

24. FATORES DE FRACASSO E DE SUCESSO: o "checklist de um projeto arruinado" reúne patrocinador sem envolvimento ativo, plano ausente ou mal feito, mudanças frequentes na gerência, times sem definição clara de responsabilidades, ausência de definição dos benefícios, controle de mudanças insuficiente, mudanças de tecnologia durante o projeto, falta de qualificação na equipe e scope creep. Os fatores de sucesso são quase o espelho: governança formal com processo definido para aprovar mudanças, patrocinadores responsáveis pelos resultados, treinamento em gerenciamento, sistemas de feedback, definição formal de prioridades, comunicação regular com usuários finais, acompanhamento de pessoas e tempo, ferramentas automatizadas e estimativas baseadas em contribuições de diferentes áreas.

25. ENCERRAMENTO: quatro processos — avaliação do produto entregue, formalização do encerramento de contratos, feedback à equipe e levantamento de LIÇÕES APRENDIDAS. Ponto importante: o encerramento NÃO depende da satisfação ou insatisfação do cliente, e sim da ACEITAÇÃO FORMAL dos resultados. As lições aprendidas devem ser registradas DURANTE todo o ciclo de vida, e não no último dia, e alimentam um banco de conhecimento para projetos futuros. Um projeto também pode ser encerrado por absorção em outro projeto, falta de recursos ou cancelamento — e mesmo aí o encerramento formal deve ocorrer.

26. METODOLOGIAS ÁGEIS × TRADICIONAIS: tradicional (preditiva) segue modelo sequencial com etapas bem definidas; ágil (adaptativa) é flexível, com entregas constantes. Exemplos ágeis: SCRUM (sprints de uma a duas semanas, equipes de até dez pessoas, com o Scrum Master conduzindo reuniões diárias, demonstrações e retrospectivas), KANBAN (quadros visuais que expõem o fluxo e reduzem gargalos) e SCRUMBAN (híbrido). Exemplos tradicionais: CASCATA (waterfall, processo linear e sequencial) e PRINCE2. Comparação registrada: o ágil permite alterar requisitos mesmo após o planejamento inicial e tem desenvolvimento iterativo, enquanto na cascata as fases ocorrem uma única vez e não há espaço para alterar requisitos depois de iniciado o desenvolvimento; no ágil os membros são intercambiáveis e a equipe se autogerencia, enquanto na cascata o gerente de projetos é essencial em todas as etapas.
`;

export const GPJT_TOPICS: QuizTopicOption[] = [
    {
        value: 'fundamentos',
        label: 'Fundamentos: projeto, programa e portfólio',
        prompt:
            'Fundamentos da disciplina Gerência de Projeto: a definição de projeto pelo PMBOK como esforço temporário para criar produto, serviço ou resultado exclusivo, e as definições da ISO 21500, PRINCE2 e ISO 10006; as características de um projeto (não repetitivo, início-meio-fim, objetivo claro, conduzido por pessoas, uso de recursos, parâmetros predefinidos) e as três centrais — tempo (o temporário se aplica ao esforço, não ao resultado), custos e recursos, e elaboração progressiva; a diferença entre projeto e operação continuada com exemplos de cada; programa como conjunto de projetos relacionados orientado a benefícios e portfólio como coleção contínua alinhada a objetivos estratégicos; a história do gerenciamento de projetos (Taylor, Gantt, CPM da DuPont em 1957, PERT e WBS no projeto Polaris, IPMA em 1965, PMI em 1969); a definição de gerenciamento de projetos e seus benefícios; e os critérios de projeto bem-sucedido.',
    },
    {
        value: 'pmbok',
        label: 'PMBOK 6 e 7, estruturas e partes interessadas',
        prompt:
            'PMBOK e organização na disciplina Gerência de Projeto: os cinco grupos de processos (iniciação, planejamento, execução, monitoramento e controle, encerramento) e por que não se confundem com as fases do projeto, além do caráter não linear do monitoramento e controle; as dez áreas de conhecimento do PMBOK 6; a virada do PMBOK 7 com seus 12 princípios (intendência, colaboração, empatia, foco no valor, pensamento sistêmico, liderança, tailoring, qualidade, complexidade, riscos, adaptabilidade, resiliência e mudanças) e seus 8 domínios de desempenho (equipe, partes interessadas, abordagem de desenvolvimento e ciclo de vida, planejamento, incerteza com VUCA, medição, entrega e trabalho do projeto); ciclo de vida do projeto e projetos preditivos versus adaptativos, com as curvas de custo, risco e capacidade de influenciar o resultado; as partes interessadas e seus papéis (patrocinador, cliente e usuários, equipe, líder do projeto, fornecedores, comitê diretor); e as estruturas organizacionais funcional, projetizada e matriciais fraca, balanceada e forte, com a autoridade do gerente e o controle do orçamento em cada uma, além do escritório de gerenciamento de projetos.',
    },
    {
        value: 'escopo-eap',
        label: 'Iniciação, escopo, requisitos e EAP',
        prompt:
            'Iniciação e definição de escopo na disciplina Gerência de Projeto: os motivos que originam projetos (demanda de mercado, necessidade estratégica, solicitação de cliente, avanço tecnológico e requisito legal); o Termo de Abertura do Projeto como documento que dá autoridade ao líder e autoriza formalmente o início, com sua estrutura de objetivo, justificativa, escopo preliminar, premissas, restrições, riscos preliminares com criticidade, partes interessadas e aprovação; a definição de escopo como identificação do problema, dos objetivos e metas, de como o sucesso será medido e dos riscos; a declaração de escopo com controle de versões, situação atual, objetivos SMART na formulação original de Doran (Specific, Measurable, Assignable, Realistic, Time-related), escopo do produto, exclusões e itens fora do escopo, restrições, premissas, entregas e critérios de aceitação e aprovações; os tipos de requisitos separados em funcionais, de relatórios, de segurança e não-funcionais; o conceito de goldplating; e a Estrutura Analítica do Projeto como decomposição hierárquica orientada a ENTREGAS e não a tarefas, seus benefícios e o exemplo da EAP de um churrasco.',
    },
    {
        value: 'cronograma-riscos',
        label: 'Cronograma, caminho crítico e riscos',
        prompt:
            'Cronograma e riscos na disciplina Gerência de Projeto: o cronograma como controle da agenda e o gráfico de Gantt; as técnicas de estimativa de duração (analogia, paramétrica, três pontos, julgamento de especialistas); o diagrama de precedências e o caminho crítico como a sequência mais longa da rede, com folga zero, que determina a duração total do projeto; o cálculo por passagem para frente e para trás com primeira e última data de início e término e o cálculo da folga; o exercício resolvido da turma com Planejamento, Base de dados, Ambiente, CRUD Pessoas, CRUD Titulares, CRUD Parentesco e CRUD Dependentes, cujo caminho crítico soma 25 dias; as consequências práticas (convergência faz esperar a predecessora mais lenta, encurtar atividade fora do caminho crítico não muda nada, e comprimir o caminho crítico faz outro caminho se tornar crítico); as técnicas de compressão crashing e fast tracking; e o gerenciamento de riscos com a definição de risco como evento incerto de efeito positivo ou negativo, o processo de identificar, quantificar, controlar e iterar, as abordagens top-down e bottom-up, a combinação de severidade com probabilidade e as estratégias de resposta.',
    },
    {
        value: 'custos-controle',
        label: 'Custos, valor agregado e encerramento',
        prompt:
            'Controle e encerramento na disciplina Gerência de Projeto: a análise de valor agregado com os três valores-chave (valor planejado, custo atual e valor agregado calculado como progresso físico vezes valor orçado) e as quatro fórmulas — variação no custo igual a valor agregado menos custo atual, variação no cronograma igual a valor agregado menos valor planejado, indicador de desempenho de tempo igual a valor agregado dividido por valor planejado e indicador de desempenho de custo igual a valor agregado dividido por custo atual; o modelo semáforo de análise de desempenho; os quatro métodos de medir progresso físico; as três fórmulas de projeção do orçamento final conforme haja descrédito, confiança ou manutenção da tendência; o exemplo resolvido da formação de multiplicadores, em que o projeto está adiantado e acima do orçamento simultaneamente; a matriz RACI; os tipos de contrato em aquisições; os doze componentes do plano de gerenciamento do projeto; os quatro tipos de avaliação (ex-ante, meio termo, final e ex-post); o processo de controle em cinco etapas; o scope creep e o controle integrado de mudanças; o checklist de um projeto arruinado e os fatores de sucesso; e o encerramento com aceitação formal, encerramento de contratos, feedback à equipe e lições aprendidas.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Gerência de Projeto: o que é um projeto e como se distingue de uma operação; programa e portfólio; história do gerenciamento de projetos; os cinco grupos de processos e as dez áreas de conhecimento do PMBOK 6, e a virada do PMBOK 7 para princípios e domínios de desempenho; ciclo de vida, projetos preditivos e adaptativos; partes interessadas e estruturas organizacionais; termo de abertura, definição de escopo, metas SMART, requisitos e a Estrutura Analítica do Projeto orientada a entregas; cronograma, gráfico de Gantt, caminho crítico e cálculo de folgas; gerenciamento de riscos; custos e análise de valor agregado com suas quatro fórmulas e o modelo semáforo; matriz RACI, aquisições e o plano de gerenciamento do projeto; monitoramento, controle de mudanças e scope creep; fatores de fracasso e de sucesso; encerramento e lições aprendidas; e a comparação entre metodologias ágeis (Scrum, Kanban, Scrumban) e tradicionais (cascata, PRINCE2).',
    },
];

export const GPJT_EXAMS: ExamDefinition[] = [
    {
        id: 'conceitos',
        label: 'Conceitos e TAP',
        description:
            'Descrever um projeto em mapa mental, escrever dois Termos de Abertura (um de TI e outro de outra área) e as 10 perguntas sobre o texto "O que é projeto de fato".',
    },
    {
        id: 'eap-escopo',
        label: 'EAP e Escopo',
        description:
            'Criar uma EAP para um churrasco e produzir o Levantamento de Requisitos e a Declaração de Escopo a partir dos modelos da disciplina.',
    },
    {
        id: 'cronograma',
        label: 'Caminho Crítico',
        description: 'Calcular o caminho crítico do diagrama de precedências apresentado em aula.',
    },
    {
        id: 'agil',
        label: 'Metodologias Ágeis',
        description: 'Apresentação em grupo sobre metodologias ágeis, entregue em formato .ppt, .pdf ou .odp.',
    },
];

export const GPJT_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'o-que-e-projeto', title: 'O que é um Projeto', shortTitle: 'O que é Projeto', exams: ['conceitos'] },
    { id: 'programa-portfolio', title: 'Programa, Portfólio e História', shortTitle: 'Programa e Portfólio', exams: ['conceitos'] },
    { id: 'pmbok', title: 'PMBOK: da 6ª à 7ª Edição', shortTitle: 'PMBOK', exams: ['conceitos'] },
    { id: 'ciclo-vida', title: 'Ciclo de Vida e Estruturas', shortTitle: 'Ciclo e Estruturas', exams: ['conceitos'] },
    { id: 'stakeholders', title: 'Partes Interessadas', shortTitle: 'Stakeholders', exams: ['conceitos'] },
    { id: 'iniciacao-tap', title: 'Iniciação e o Termo de Abertura', shortTitle: 'TAP', exams: ['conceitos'] },
    { id: 'escopo', title: 'Escopo, Requisitos e SMART', shortTitle: 'Escopo', exams: ['eap-escopo'] },
    { id: 'eap', title: 'EAP: Decompor o Trabalho', shortTitle: 'EAP', exams: ['eap-escopo'] },
    { id: 'cronograma', title: 'Cronograma e Caminho Crítico', shortTitle: 'Caminho Crítico', exams: ['cronograma'] },
    { id: 'riscos', title: 'Gerenciamento de Riscos', shortTitle: 'Riscos', exams: ['eap-escopo'] },
    { id: 'custos', title: 'Custos e Valor Agregado', shortTitle: 'Valor Agregado', exams: ['cronograma'] },
    { id: 'execucao-controle', title: 'Execução, Controle e Mudanças', shortTitle: 'Execução e Controle' },
    { id: 'encerramento', title: 'Encerramento e Lições Aprendidas', shortTitle: 'Encerramento' },
    { id: 'agil', title: 'Metodologias Ágeis × Tradicionais', shortTitle: 'Ágil × Tradicional', exams: ['agil'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type GpjtSectionId = (typeof GPJT_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['conceitos'],
        question: 'Segundo o PMBOK, um projeto é um "esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo". A que exatamente se aplica o "temporário"?',
        options: [
            'Ao resultado: o produto do projeto tem vida útil limitada',
            'Ao ESFORÇO, e não ao resultado — o projeto acaba, mas o que ele criou pode durar indefinidamente',
            'À equipe, que é sempre dissolvida ao final',
            'Ao orçamento, que é liberado apenas por um período',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o material dá o exemplo perfeito: um projeto de melhoria constrói processos rotineiros dentro da empresa; os processos continuam funcionando muito depois de o projeto ter formalmente acabado.',
        feedbackWrong:
            'O "temporário" qualifica o ESFORÇO, não o resultado. Uma ponte construída por um projeto dura décadas; o projeto que a construiu terminou. Equipe e orçamento são consequências dessa temporariedade, não sua definição.',
    },
    {
        id: 'q2',
        exams: ['conceitos'],
        question: 'Qual destes é um PROJETO, e não uma operação continuada?',
        options: [
            'Gerenciamento de uma rede de computadores',
            'Elaboração mensal da folha de pagamento',
            'Montagem de um data center',
            'Manutenção preventiva de equipamentos',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Montar um data center tem começo, fim e entrega única. Os outros três são rotinas: esforços permanentes que produzem saídas repetitivas, o que os define como operações.',
        feedbackWrong:
            'O critério é a dupla temporário + único. Gerenciar rede, rodar folha de pagamento e fazer manutenção são atividades contínuas e repetitivas — operações. Montar um data center acontece uma vez e entrega algo que não existia.',
    },
    {
        id: 'q3',
        exams: ['conceitos'],
        question: 'O que significa dizer que um projeto é "progressivamente elaborado"?',
        options: [
            'Que o orçamento é liberado em parcelas ao longo do tempo',
            'Que ele progride em etapas e sua DEFINIÇÃO é refinada em cada uma delas',
            'Que a equipe cresce conforme o projeto avança',
            'Que só se pode iniciar uma fase quando a anterior estiver 100% concluída',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. No início se conhece pouco, e o detalhamento aumenta conforme o trabalho avança. É a mesma ideia por trás do "planejamento por ondas sucessivas" citado no material da ENAP.',
        feedbackWrong:
            'Elaboração progressiva é sobre a DEFINIÇÃO do projeto, que se refina a cada etapa à medida que mais se conhece. Liberação de orçamento e crescimento de equipe podem acompanhar isso, mas não são o conceito.',
    },
    {
        id: 'q4',
        exams: ['conceitos'],
        question: 'Qual é a diferença central entre um PROGRAMA e um PROJETO?',
        options: [
            'O programa é maior e mais caro que o projeto',
            'O programa é orientado a BENEFÍCIOS, enquanto o projeto é orientado à ENTREGA do produto ou serviço a que se propôs',
            'O programa é contínuo e o projeto é temporário',
            'O programa pertence ao setor público e o projeto ao privado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Um programa reúne projetos relacionados para obter benefícios que não sairiam se fossem gerenciados isoladamente. E benefícios não são produtos: são impactos e resultados percebidos pela sociedade ou pela organização.',
        feedbackWrong:
            'O critério é a orientação: entrega no projeto, BENEFÍCIO no programa. Tamanho não define, e ser contínuo é característica do PORTFÓLIO — programas, como projetos, são temporários.',
    },
    {
        id: 'q5',
        exams: ['conceitos'],
        question: 'O que distingue um PORTFÓLIO de projetos e programas?',
        options: [
            'O portfólio é CONTÍNUO, enquanto projetos e programas são temporários; ele agrupa trabalhos para atender objetivos estratégicos',
            'O portfólio contém apenas projetos de uma mesma área técnica',
            'O portfólio é a soma dos orçamentos de todos os projetos',
            'O portfólio é o conjunto de projetos já encerrados de uma organização',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. A organização pode ter vários portfólios, e em última instância um portfólio abrangente para o todo. O que os une não é semelhança técnica, e sim o alinhamento estratégico.',
        feedbackWrong:
            'A distinção decisiva é a permanência: projetos e programas terminam, o portfólio é contínuo. Ele agrupa trabalhos em andamento e planejados para atender objetivos ESTRATÉGICOS, não por afinidade técnica.',
    },
    {
        id: 'q6',
        exams: ['conceitos'],
        question: 'Quem é considerado no material o "pai fundador do gerenciamento de projetos moderno", por estudar a sequência de atividades e criar diagramas de barras?',
        options: ['Frederick Taylor', 'Henry Gantt', 'Henri Fayol', 'Jim Snyder'],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Os diagramas de Gantt permanecem, mais de um século depois, como uma das principais técnicas de análise de sequência e duração de cronogramas.',
        feedbackWrong:
            'É Henry Gantt (1861-1919). Taylor iniciou os estudos científicos do trabalho e publicou "The Principles of Scientific Management"; Jim Snyder foi um dos fundadores do PMI, em 1969.',
    },
    {
        id: 'q7',
        exams: ['conceitos'],
        question: 'Em 1957, a DuPont criou o CPM (Critical Path Method) para resolver que problema?',
        options: [
            'O lançamento de mísseis balísticos do projeto Polaris',
            'A construção de plantas industriais na Europa do pós-guerra',
            'O fechamento de plantas químicas para manutenção e seu posterior reinício',
            'A programação de turnos em linhas de montagem automotivas',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto — e o material registra que a técnica foi tão bem-sucedida que economizou US$ 1 milhão logo no primeiro ano de implementação. O projeto Polaris, da Marinha dos EUA, deu origem ao PERT (1958) e à WBS (1962).',
        feedbackWrong:
            'O CPM nasceu na DuPont, para o complexo processo de parar plantas químicas para manutenção e reiniciá-las. Foi o projeto Polaris, da Marinha americana, que originou o PERT e o conceito de WBS.',
    },
    {
        id: 'q8',
        exams: ['conceitos'],
        question: 'Por que o material insiste que os GRUPOS DE PROCESSOS não devem ser confundidos com as FASES do projeto?',
        options: [
            'Porque os grupos de processos são exclusivos do setor público',
            'Porque os grupos se sobrepõem e se repetem dentro de CADA fase — não são etapas sequenciais do projeto',
            'Porque as fases só existem em projetos ágeis',
            'Porque os grupos de processos foram eliminados no PMBOK 7',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Cada fase de um projeto tem sua própria iniciação, planejamento, execução, controle e encerramento. Os grupos descrevem a NATUREZA do trabalho, não o momento dele na linha do tempo.',
        feedbackWrong:
            'Grupos de processos e fases são dimensões diferentes: uma mesma fase percorre todos os cinco grupos. O material chama isso explicitamente de confusão comum — e ela leva a cronogramas mal montados.',
    },
    {
        id: 'q9',
        exams: ['conceitos'],
        question: 'O que há de peculiar no grupo de processos de MONITORAMENTO E CONTROLE em relação aos outros quatro?',
        options: [
            'Ele é opcional em projetos pequenos',
            'Ele ocorre apenas ao final, junto do encerramento',
            'Enquanto os demais ocorrem sequencialmente, ele SOBREVOA todo o projeto, de forma não linear e em paralelo com os outros',
            'Ele é responsabilidade exclusiva do patrocinador',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Não faria sentido "monitorar depois": o controle existe para detectar desvios enquanto ainda há tempo de corrigi-los, e por isso acompanha o projeto do início ao fim.',
        feedbackWrong:
            'O monitoramento e controle não é uma etapa: ele atravessa todo o projeto em paralelo aos demais grupos, com intensidade crescente ao final do planejamento e durante a execução.',
    },
    {
        id: 'q10',
        exams: ['conceitos'],
        question: 'A área de GERENCIAMENTO DO ESCOPO deve assegurar que o projeto inclui:',
        options: [
            'O máximo de valor possível para o cliente, mesmo além do contratado',
            'Todo o trabalho necessário — e APENAS o necessário — para terminar o projeto com sucesso',
            'Apenas as atividades que a equipe domina tecnicamente',
            'Somente o que couber no orçamento aprovado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e as duas metades importam igualmente. Faltar trabalho quebra a entrega; sobrar trabalho é o goldplating — entregar mais do que foi pedido, consumindo prazo e orçamento que ninguém autorizou.',
        feedbackWrong:
            'A definição tem duas partes: TODO o necessário e APENAS o necessário. Entregar além do combinado é goldplating, tratado no material como problema — não como generosidade.',
    },
    {
        id: 'q11',
        exams: ['conceitos'],
        question: 'O que o PMBOK 7 traz de estruturalmente diferente em relação à 6ª edição?',
        options: [
            'Substitui a organização por áreas de conhecimento e processos por PRINCÍPIOS e DOMÍNIOS DE DESEMPENHO, incorporando as abordagens ágeis',
            'Elimina o conceito de partes interessadas',
            'Passa a tratar exclusivamente de projetos de tecnologia da informação',
            'Reduz de dez para cinco as áreas de conhecimento',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. A 6ª edição trata majoritariamente de projetos preditivos, com grupos de processos e áreas de conhecimento; a 7ª sobe o nível de abstração para 12 princípios e 8 domínios, acolhendo abordagens preditivas, iterativas e híbridas.',
        feedbackWrong:
            'A mudança é de ESTRUTURA: de áreas de conhecimento e processos para princípios e domínios de desempenho, o que permite acomodar métodos ágeis. Partes interessadas continuam presentes — inclusive como um dos oito domínios.',
    },
    {
        id: 'q12',
        exams: ['conceitos'],
        question: 'Quantos são, respectivamente, os PRINCÍPIOS e os DOMÍNIOS DE DESEMPENHO do PMBOK 7?',
        options: ['10 princípios e 5 domínios', '12 princípios e 8 domínios', '5 princípios e 10 domínios', '8 princípios e 12 domínios'],
        correctIndex: 1,
        feedbackCorrect:
            'Isso: 12 princípios (intendência, colaboração, empatia, foco no valor, pensamento sistêmico, liderança, tailoring, qualidade, complexidade, riscos, adaptabilidade, resiliência e mudanças) e 8 domínios de desempenho.',
        feedbackWrong:
            'São 12 princípios e 8 domínios de desempenho. Os números 5 e 10 pertencem à 6ª edição: cinco grupos de processos e dez áreas de conhecimento.',
    },
    {
        id: 'q13',
        exams: ['conceitos'],
        question: 'No domínio de desempenho "Incerteza" do PMBOK 7, o que significa a sigla VUCA?',
        options: [
            'Valor, Urgência, Custo e Alcance',
            'Volatilidade, Incerteza, Complexidade e Ambiguidade',
            'Verificação, Utilidade, Controle e Auditoria',
            'Visão, Unidade, Comunicação e Ação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — do inglês Volatility, Uncertainty, Complexity e Ambiguity. São quatro faces distintas do "não saber": o que muda rápido, o que não se conhece, o que tem partes demais interagindo e o que admite mais de uma leitura.',
        feedbackWrong:
            'VUCA é Volatilidade, Incerteza, Complexidade e Ambiguidade. O domínio Incerteza reúne as atividades que tratam de riscos e desse ambiente instável.',
    },
    {
        id: 'q14',
        exams: ['conceitos'],
        question: 'Segundo o ciclo de vida do projeto, quando a capacidade de INFLUENCIAR as características finais do produto, sem impacto significativo de custo, é maior?',
        options: [
            'No início do projeto, diminuindo conforme ele progride',
            'No meio, durante a execução, quando já se conhece bem o produto',
            'No final, quando o produto já está pronto para ajustes',
            'É constante ao longo de todo o ciclo de vida',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato — e é esta a justificativa econômica de investir em planejamento. No início quase nada foi construído, então mudar é barato; ao final, mudar significa desfazer trabalho já pago.',
        feedbackWrong:
            'É maior no INÍCIO e cai conforme o projeto avança, na mesma curva em que riscos e incertezas diminuem. Quanto mais tarde a mudança, mais cara — porque há mais trabalho feito a desfazer.',
    },
    {
        id: 'q15',
        exams: ['conceitos'],
        question: 'Em qual estrutura organizacional o gerente de projetos tem POUCA OU NENHUMA autoridade, e o orçamento fica com o gerente funcional?',
        options: ['Projetizada', 'Matricial forte', 'Funcional', 'Matricial balanceada'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Na estrutura funcional os recursos são agrupados por especialidade e respondem ao gerente funcional; o papel de gerente de projeto costuma ser de tempo parcial. É a estrutura mais comum no serviço público.',
        feedbackWrong:
            'É a FUNCIONAL. Na projetizada e na matricial forte o gerente de projeto tem alta autoridade e controla o orçamento; na balanceada há divisão entre os dois papéis.',
    },
    {
        id: 'q16',
        exams: ['conceitos'],
        question: 'Qual é o papel do PATROCINADOR de um projeto?',
        options: [
            'Executar as atividades técnicas de maior complexidade',
            'Fornecer apoio político e recursos financeiros, aprovar o orçamento e servir de porta-voz do projeto nos níveis gerenciais mais elevados',
            'Coordenar o cronograma no dia a dia',
            'Auditar a conformidade do projeto com as normas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O patrocinador legitima os objetivos, garante a disponibilidade de recursos e defende o projeto na organização — e é por isso que "patrocinador sem envolvimento ativo" abre o checklist de um projeto arruinado.',
        feedbackWrong:
            'O patrocinador dá apoio político e financeiro, aprova o orçamento e defende o projeto perante a alta administração. Coordenar o dia a dia é do gerente do projeto; executar é da equipe.',
    },
    {
        id: 'q17',
        exams: ['conceitos'],
        question: 'Qual é a função essencial do TERMO DE ABERTURA DO PROJETO (TAP)?',
        options: [
            'Detalhar o cronograma e o orçamento definitivos',
            'Registrar as lições aprendidas da fase anterior',
            'Autorizar formalmente o início do projeto e DAR AUTORIDADE ao líder do projeto',
            'Listar todos os requisitos funcionais e não-funcionais',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. É o documento emitido pela alta administração que existe justamente para responder "quem disse que você pode?" — sem ele, o gerente coordena sem mandato reconhecido.',
        feedbackWrong:
            'O TAP autoriza o projeto e confere autoridade ao líder. Cronograma e orçamento detalhados vêm no planejamento; os requisitos, no documento de requisitos.',
    },
    {
        id: 'q18',
        exams: ['conceitos'],
        question: 'A atividade da turma pedia DOIS Termos de Abertura: um da área de TI e outro de OUTRA área. Qual é a intenção didática dessa exigência?',
        options: [
            'Aumentar o volume de trabalho para fixar o formato do documento',
            'Mostrar que gerenciamento de projetos NÃO é exclusivo de software — a mesma estrutura serve a qualquer domínio',
            'Comparar qual das duas áreas tem projetos mais caros',
            'Permitir que cada membro do grupo escrevesse um documento sozinho',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. É a mesma lógica da EAP do churrasco: usar exemplos fora de TI para deixar claro que os conceitos são gerais. Um curso de sistemas corre o risco de tratar "projeto" como sinônimo de "software" — e não é.',
        feedbackWrong:
            'A intenção é generalizar: os conceitos de gerenciamento de projetos valem para construir uma escola, organizar um evento ou desenvolver um sistema. Sair de TI evita que o aluno associe projeto exclusivamente a software.',
    },
    {
        id: 'q19',
        exams: ['eap-escopo'],
        question: 'No acrônimo SMART, tal como o modelo de Declaração de Escopo da disciplina o define, o "A" significa:',
        options: [
            'Achievable (alcançável)',
            'Assignable (quem — a quem a meta é atribuída)',
            'Accurate (preciso)',
            'Agreed (acordado)',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e vale saber por quê: o modelo usa a formulação ORIGINAL de George Doran (1981), em que A é Assignable — "especifique quem vai fazer". A versão mais difundida hoje usa Achievable e troca o R por Relevant.',
        feedbackWrong:
            'O modelo da disciplina traz Assignable ("quem"), que é a formulação original de Doran. Achievable é da versão moderna, mais comum — vale conhecer as duas e saber qual foi pedida.',
    },
    {
        id: 'q20',
        exams: ['eap-escopo'],
        question: 'Por que a Declaração de Escopo tem um campo dedicado a EXCLUSÕES / FORA DO ESCOPO?',
        options: [
            'Para reduzir o tamanho do documento principal',
            'Para registrar o que já foi entregue em projetos anteriores',
            'Para listar itens reconhecidos como não-escopo e assim EVITAR MAL-ENTENDIDOS na conclusão do projeto',
            'Por exigência legal em contratos públicos',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — é o campo mais subestimado do documento. Escrever "o projeto NÃO inclui migração dos dados históricos" evita a discussão constrangedora na entrega, quando o cliente esperava algo que ninguém disse que não viria.',
        feedbackWrong:
            'O campo existe para explicitar o que NÃO será entregue, evitando expectativas divergentes na conclusão. Conflitos de escopo raramente nascem do que foi escrito — nascem do que ficou subentendido.',
    },
    {
        id: 'q21',
        exams: ['eap-escopo'],
        question: 'O que é GOLDPLATING no gerenciamento de escopo?',
        options: [
            'Contratar fornecedores premium para elevar a qualidade',
            'Entregar MAIS do que o cliente solicitou, acrescentando produtos ou serviços não previstos no escopo',
            'Aumentar o orçamento do projeto durante a execução',
            'Documentar o projeto com nível de detalhe acima do necessário',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Parece cortesia, mas consome prazo e orçamento que ninguém autorizou, cria expectativa não contratada e introduz risco — o projeto deve entregar o escopo solicitado pelas partes interessadas.',
        feedbackWrong:
            'Goldplating ("banhar a ouro") é entregar além do escopo acordado. Não é virtude: gasta recursos não previstos e adiciona risco a um trabalho que já tinha o que fazer.',
    },
    {
        id: 'q22',
        exams: ['eap-escopo'],
        question: 'Qual é a boa prática CENTRAL na construção de uma EAP, segundo o material?',
        options: [
            'Cada caixa deve conter uma TAREFA a ser executada',
            'Cada caixa deve conter o que será ENTREGUE naquela atividade, e não a tarefa em si',
            'A EAP deve ter no máximo três níveis hierárquicos',
            'A EAP deve listar os responsáveis por cada pacote de trabalho',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A EAP é orientada a ENTREGAS, não a ações. Em vez de "instalar o banco de dados", "banco de dados instalado" — a diferença força a pensar em resultados verificáveis, e é o que a torna base para estimativas.',
        feedbackWrong:
            'A boa prática destacada é que a EAP contém ENTREGAS, não tarefas. Escrever verbos de ação transforma a EAP numa lista de afazeres e se perde justamente o que a torna útil para estimar e verificar.',
    },
    {
        id: 'q23',
        exams: ['eap-escopo'],
        question: 'Quais atividades de planejamento dependem diretamente da EAP?',
        options: [
            'Apenas a definição das partes interessadas',
            'Cronograma do projeto, alocação de recursos e orçamento detalhado',
            'Somente o plano de comunicação',
            'Apenas o encerramento de contratos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É por isso que a EAP vem cedo: sem saber o que será entregue, não há o que estimar em prazo, recurso ou custo. Indiretamente, todos os planos se apoiam nas atividades que ela identifica.',
        feedbackWrong:
            'Cronograma, alocação de recursos e orçamento detalhado derivam da EAP — ela é a base das estimativas. Sem decompor o trabalho, qualquer estimativa vira chute.',
    },
    {
        id: 'q24',
        exams: ['eap-escopo'],
        question: 'A atividade da turma pedia uma EAP para um CHURRASCO para 10 pessoas. Por que esse exemplo funciona bem didaticamente?',
        options: [
            'Porque churrascos têm orçamento previsível',
            'Porque força a praticar decomposição em um domínio que todos entendem, sem que a dificuldade técnica atrapalhe o aprendizado do método',
            'Porque não envolve riscos',
            'Porque dispensa a definição de escopo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Quando o domínio é familiar, o aluno erra na DECOMPOSIÇÃO e não no assunto — e o erro fica visível. A própria apostila usa uma EAP de churrasco, com Infraestrutura, Comes, Bebes, Insumos, Entretenimento e Serviços.',
        feedbackWrong:
            'A vantagem é remover a dificuldade técnica para que sobre apenas a dificuldade do método. Um churrasco tem riscos, escopo e orçamento como qualquer projeto — a diferença é que todo mundo já sabe do que se trata.',
    },
    {
        id: 'q25',
        exams: ['cronograma'],
        question: 'O que é o CAMINHO CRÍTICO de um projeto?',
        options: [
            'O caminho mais curto entre o início e o fim da rede de atividades',
            'A sequência MAIS LONGA da rede, cujas atividades têm folga zero e determinam a duração total do projeto',
            'O conjunto das atividades mais caras do projeto',
            'A sequência de atividades executadas pela equipe mais experiente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e é contraintuitivo à primeira vista. O caminho mais longo é o crítico porque nada pode terminar antes que a cadeia mais demorada termine — ele fixa a menor duração possível do projeto.',
        feedbackWrong:
            'É o caminho MAIS LONGO da rede. Como o projeto só acaba quando todas as cadeias acabam, é a mais demorada que define a duração total — e por isso suas atividades têm folga zero.',
    },
    {
        id: 'q26',
        exams: ['cronograma'],
        question: 'Como se calcula a FOLGA de uma atividade?',
        options: [
            'Folga = duração da atividade − duração média do projeto',
            'Folga = UDI − PDI (última data de início menos primeira data de início)',
            'Folga = custo orçado − custo real',
            'Folga = número de recursos alocados − recursos necessários',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — equivalente a UDT − PDT. A folga responde "quanto esta atividade pode atrasar sem empurrar o fim do projeto?". Atividade crítica é a de folga zero.',
        feedbackWrong:
            'Folga = UDI − PDI, obtida comparando a passagem para frente (primeiras datas) com a passagem para trás (últimas datas). Ela mede a margem de atraso tolerável antes de o projeto ser afetado.',
    },
    {
        id: 'q27',
        exams: ['cronograma'],
        question:
            'No exercício da turma: Planejamento (15) abre em Base de dados (3) e Ambiente (2), que convergem em CRUD Pessoas (2); esta abre em CRUD Titulares (3) e CRUD Parentesco (1), que convergem em CRUD Dependentes (2). Qual é a duração do projeto?',
        options: ['22 dias', '23 dias', '24 dias', '25 dias'],
        correctIndex: 3,
        feedbackCorrect:
            'Correto: 15 + 3 + 2 + 3 + 2 = 25 dias, pelo caminho Planejamento → Base de dados → CRUD Pessoas → CRUD Titulares → CRUD Dependentes. Em cada convergência prevalece a ramificação mais longa: Base de dados (3) sobre Ambiente (2), e CRUD Titulares (3) sobre CRUD Parentesco (1).',
        feedbackWrong:
            'São 25 dias. O erro comum é escolher a ramificação mais curta numa convergência: como CRUD Pessoas espera Base de dados E Ambiente, ela só começa quando a MAIS LENTA terminar. Os quatro caminhos medem 25, 24, 23 e 22 dias — o crítico é o maior.',
    },
    {
        id: 'q28',
        exams: ['cronograma'],
        question:
            'No mesmo exercício, a atividade "Ambiente" dura 2 dias e tem folga 1. O que acontece se ela atrasar 2 dias?',
        options: [
            'Nada muda: a folga absorve qualquer atraso dessa atividade',
            'O projeto atrasa 2 dias',
            'Ela consome a folga, passa a ser crítica e o projeto atrasa 1 dia',
            'O caminho crítico deixa de existir',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. A folga de 1 dia absorve o primeiro dia de atraso; o segundo dia empurra o projeto. É o momento em que "Ambiente" entra no caminho crítico — o caminho crítico não é fixo, ele muda conforme a execução.',
        feedbackWrong:
            'A folga de 1 dia absorve apenas 1 dia. Com 2 dias de atraso, sobra 1 dia que empurra o projeto — e a atividade se torna crítica. Folga não é imunidade: é margem finita.',
    },
    {
        id: 'q29',
        exams: ['cronograma'],
        question: 'Qual é a diferença entre CRASHING e FAST TRACKING na compressão de cronograma?',
        options: [
            'Crashing aloca mais recursos ou reduz escopo; fast tracking executa em PARALELO tarefas previstas como sequenciais',
            'Crashing corta atividades do projeto; fast tracking as adia',
            'Crashing é usado em projetos ágeis; fast tracking em preditivos',
            'São sinônimos para a mesma técnica',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. O crashing custa DINHEIRO (mais gente, hora extra); o fast tracking custa RISCO, porque paraleliza atividades que tinham dependência entre si e pode gerar retrabalho.',
        feedbackWrong:
            'Crashing é intensificar recursos (ou reduzir escopo); fast tracking é paralelizar o que era sequencial. Um paga em custo, o outro em risco — e ambos só fazem sentido aplicados ao caminho crítico.',
    },
    {
        id: 'q30',
        exams: ['eap-escopo'],
        question: 'Na definição do PMBOK adotada no material, um RISCO é um evento ou condição incerta que, se ocorrer, provoca:',
        options: [
            'Um efeito necessariamente negativo nos objetivos do projeto',
            'Um efeito POSITIVO OU NEGATIVO nos objetivos do projeto',
            'Um aumento de custo no projeto',
            'A interrupção imediata do cronograma',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e essa é a sutileza da definição: risco inclui OPORTUNIDADE. Uma tecnologia nova pode acelerar o projeto tanto quanto atrasá-lo — as duas possibilidades merecem planejamento.',
        feedbackWrong:
            'A definição inclui explicitamente o efeito POSITIVO. Riscos positivos são oportunidades, e gerenciá-los significa aumentar a chance de que ocorram — não apenas evitar o que é ruim.',
    },
    {
        id: 'q31',
        exams: ['eap-escopo'],
        question: 'Como se decide quanto investir no controle de um risco identificado?',
        options: [
            'Todo risco identificado deve receber uma estratégia de controle completa',
            'Pela combinação de SEVERIDADE (o dano se ocorrer) com PROBABILIDADE de ocorrência — um risco severo mas improvável deve ser apenas monitorado',
            'Pelo custo total do projeto',
            'Pela ordem em que os riscos foram identificados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O material é explícito: um risco severo com baixa probabilidade deve ser MONITORADO, porque normalmente não vale a pena investir em estratégias extensivas e caras para controlá-lo.',
        feedbackWrong:
            'A decisão vem do produto entre severidade e probabilidade. Tratar todo risco com o mesmo esforço desperdiça recursos naquilo que provavelmente não vai acontecer — e o orçamento de mitigação é finito.',
    },
    {
        id: 'q32',
        exams: ['cronograma'],
        question: 'Na Análise de Valor Agregado, como se calcula o VALOR AGREGADO (VA)?',
        options: [
            'VA = custo real gasto até a data de análise',
            'VA = orçamento total dividido pelo número de semanas',
            'VA = progresso físico [%] × valor orçado [$]',
            'VA = valor planejado menos o custo atual',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — o VA é "o valor do trabalho realizado". Ele traduz progresso físico em dinheiro, e é justamente isso que permite comparar, na mesma unidade, o que se planejou, o que se gastou e o que se produziu.',
        feedbackWrong:
            'VA = progresso físico × valor orçado. O custo real gasto é o CA (custo atual); o valor planejado até a data é o VP. São três grandezas distintas, e confundi-las inviabiliza toda a análise.',
    },
    {
        id: 'q33',
        exams: ['cronograma'],
        question: 'Quais são as fórmulas de IDT e IDC?',
        options: [
            'IDT = VA / VP e IDC = VA / CA',
            'IDT = VP / VA e IDC = CA / VA',
            'IDT = VA − VP e IDC = VA − CA',
            'IDT = CA / VP e IDC = VP / CA',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. O VA sempre no numerador, e nos dois casos valor abaixo de 1 é ruim. As SUBTRAÇÕES com os mesmos termos são as variações: VCr = VA − VP e VC = VA − CA.',
        feedbackWrong:
            'IDT = VA / VP e IDC = VA / CA — o valor agregado sempre no numerador. As subtrações VA − VP e VA − CA são as variações (VCr e VC), que dão resultado em dinheiro, não em índice.',
    },
    {
        id: 'q34',
        exams: ['cronograma'],
        question: 'Um projeto apresenta IDC = 0,81 e IDT = 1,19. O que isso significa, e qual é o diagnóstico pelo modelo semáforo?',
        options: [
            'Adiantado e abaixo do orçamento — verde (OK)',
            'Atrasado e acima do orçamento — vermelho (PROBLEMA)',
            'Adiantado no cronograma mas ACIMA do orçamento — amarelo (ALERTA)',
            'Atrasado mas dentro do orçamento — amarelo (ALERTA)',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — é o caso do exemplo resolvido no material. IDT acima de 1 indica que há mais trabalho pronto que o previsto; IDC de 0,81 indica que só 81% do dinheiro aplicado virou trabalho. Como apenas um dos dois está abaixo de 1, o semáforo é amarelo.',
        feedbackWrong:
            'IDT = 1,19 (≥ 1) significa ADIANTADO; IDC = 0,81 (< 1) significa acima do orçamento. Pela regra, IDC < 1 OU IDT < 1 → ALERTA. Vermelho exigiria os dois abaixo de 1.',
    },
    {
        id: 'q35',
        exams: ['cronograma'],
        question:
            'O exemplo resolvido do material mostra um projeto simultaneamente ADIANTADO e ACIMA DO ORÇAMENTO. Qual é a leitura gerencial mais plausível?',
        options: [
            'Houve erro de medição: as duas coisas não podem ocorrer juntas',
            'Comprou-se velocidade com dinheiro — mais recursos foram alocados para acelerar o trabalho',
            'O projeto está sendo mal gerenciado em todos os aspectos',
            'O orçamento inicial estava superestimado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e é o que torna esse exemplo o mais instrutivo do material. Ele quebra a intuição de que "adiantado = bom": entregou-se mais rápido pagando mais caro por unidade de trabalho — o que pode ser decisão consciente ou descontrole.',
        feedbackWrong:
            'As duas coisas coexistem naturalmente: prazo e custo são dimensões independentes. É exatamente por isso que se olham as duas métricas juntas — nenhuma delas, isolada, contaria essa história.',
    },
    {
        id: 'q36',
        exams: ['cronograma'],
        question: 'Na matriz RACI, o que distingue o "C" do "I"?',
        options: [
            'O C executa a tarefa e o I a aprova',
            'O C precisa ser CONSULTADO antes da execução; o I precisa ser INFORMADO depois',
            'O C é interno à organização e o I é externo',
            'O C controla o orçamento e o I emite os relatórios',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a diferença é o MOMENTO e o poder de influência. Quem é consultado ainda pode mudar a decisão; quem é informado apenas toma ciência do que já foi decidido. Confundir os dois gera boa parte dos conflitos de comunicação.',
        feedbackWrong:
            'C é consultado ANTES (e pode influenciar); I é informado DEPOIS (apenas toma ciência). O R executa e o A autoriza ou aprova.',
    },
    {
        id: 'q37',
        exams: ['agil'],
        question: 'Qual é a diferença central entre uma abordagem PREDITIVA e uma ADAPTATIVA?',
        options: [
            'A preditiva é usada em projetos grandes e a adaptativa em pequenos',
            'A preditiva detalha o escopo desde a iniciação e segue etapas sequenciais; a adaptativa inicia sem escopo fechado e evolui por entregas parciais',
            'A preditiva não admite mudanças de nenhum tipo',
            'A adaptativa dispensa planejamento',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A preditiva serve a produtos entregues de uma vez, quando se sabe bem o que se quer; a adaptativa serve quando se espera variação no percurso. O critério é a INCERTEZA do escopo, não o tamanho do projeto.',
        feedbackWrong:
            'A distinção é sobre quando o escopo é definido: todo de início (preditiva) ou progressivamente, com entregas parciais (adaptativa). A adaptativa planeja também — só que continuamente, em vez de uma vez só.',
    },
    {
        id: 'q38',
        exams: ['agil'],
        question: 'No Scrum, qual é o papel do Scrum Master?',
        options: [
            'Definir os requisitos e priorizar o backlog',
            'Aprovar o orçamento do projeto junto à alta administração',
            'Conduzir as reuniões diárias, demonstrações, sprints e retrospectivas, mantendo o processo funcionando',
            'Executar as tarefas técnicas mais complexas do sprint',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. O material o descreve conduzindo o ritual do Scrum — reuniões, demonstrações e retrospectivas ao final de cada sprint —, com o objetivo de unir os participantes e garantir que as tarefas se concluam no prazo.',
        feedbackWrong:
            'O Scrum Master cuida do PROCESSO: conduz as cerimônias e remove impedimentos. Definir e priorizar requisitos é papel do product owner, e executar as tarefas é do time de desenvolvimento.',
    },
    {
        id: 'q39',
        exams: ['agil'],
        question: 'Segundo a comparação do material, o que caracteriza o KANBAN?',
        options: [
            'Ciclos fixos de uma a duas semanas com equipes de até dez pessoas',
            'Representação VISUAL do fluxo de trabalho em quadros, melhorando a visualização do progresso e reduzindo gargalos',
            'Documentação completa dos requisitos antes de iniciar o desenvolvimento',
            'Estágios de projeto definidos por uma metodologia de cascata',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O Kanban torna o fluxo visível, e é justamente essa visibilidade que expõe onde o trabalho se acumula. Os ciclos fixos de uma a duas semanas descrevem os sprints do Scrum; o Scrumban combina os dois.',
        feedbackWrong:
            'Kanban é a abordagem dos quadros visuais, que expõem o fluxo e revelam gargalos. Sprints de uma a duas semanas são do Scrum; requisitos fechados antes de começar caracterizam a cascata.',
    },
    {
        id: 'q40',
        exams: ['conceitos'],
        question: 'O que é SCOPE CREEP, e por que aparece no "checklist de um projeto arruinado"?',
        options: [
            'A redução progressiva do escopo por falta de orçamento',
            'A expansão incremental do escopo, que o torna genérico, sem foco e ingerenciável',
            'O atraso acumulado das atividades do caminho crítico',
            'A saída gradual de membros da equipe ao longo do projeto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Nenhum acréscimo isolado parece grave — o problema é o acúmulo sem controle formal de mudanças. Daí o antídoto listado entre os fatores de sucesso: governança formal com processo definido para aprovar alterações.',
        feedbackWrong:
            'Scope creep é a EXPANSÃO incremental e não controlada do escopo. Ela mata projetos justamente por ser gradual: cada pedido parece pequeno, e a soma torna o projeto sem foco e ingerenciável.',
    },
    {
        id: 'q41',
        exams: ['conceitos'],
        question: 'Qual dos quatro tipos de avaliação ocorre DEPOIS de o projeto terminar, e o que ela mede?',
        options: [
            'Avaliação ex-ante — mede relevância, consistência e viabilidade',
            'Avaliação de meio termo — mede tempo, custo e escopo',
            'Avaliação final — mede eficiência e eficácia no encerramento',
            'Avaliação ex-post — mede os IMPACTOS de médio e longo prazo, isto é, a efetividade dos resultados',
        ],
        correctIndex: 3,
        feedbackCorrect:
            'Exato. É a única que olha para depois do fim, e a mais reveladora: um projeto pode ter sido entregue no prazo e no orçamento (eficiente e eficaz) e ainda assim não produzir o impacto esperado — falhar em efetividade.',
        feedbackWrong:
            'É a EX-POST, aplicada meses ou anos depois do encerramento, e mede impactos — a efetividade. A ex-ante ocorre antes de começar, a de meio termo durante a execução e a final no encerramento.',
    },
    {
        id: 'q42',
        exams: ['conceitos'],
        question: 'Segundo o material, o encerramento formal de um projeto depende de quê?',
        options: [
            'Da satisfação do cliente com o resultado entregue',
            'Da ACEITAÇÃO FORMAL dos resultados — que não se confunde com satisfação ou insatisfação',
            'Do esgotamento do orçamento aprovado',
            'Da aprovação do relatório de lições aprendidas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto, e a distinção é fina mas decisiva: o cliente pode estar insatisfeito e ainda assim aceitar formalmente o que foi entregue, se o entregue corresponde ao acordado. É a aceitação que encerra o projeto, não o humor de quem recebe.',
        feedbackWrong:
            'O encerramento depende da ACEITAÇÃO FORMAL dos resultados, comprovada por documentos que atestem a qualidade do trabalho — e não da satisfação, que é subjetiva e pode divergir do que foi contratado.',
    },
];
