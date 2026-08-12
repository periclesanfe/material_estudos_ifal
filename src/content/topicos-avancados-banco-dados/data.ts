import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const TABD_GUIDE_CONTEXT = `
GUIA DE TÓPICOS AVANÇADOS EM BANCO DE DADOS (Business Intelligence, Data Warehouse e Data Science) — Resumo:

1. BUSINESS INTELLIGENCE (BI): Conjunto de técnicas e ferramentas para transformar dados em informação útil à tomada de decisão. O termo surgiu no fim dos anos 1980, atribuído a Howard Dresner (Gartner). Def.: processo de coletar, organizar, analisar, compartilhar e monitorar informações que dão suporte à gestão. Problema central: as funções da empresa são interligadas, mas os dados ficam fragmentados em vários sistemas. Arquitetura de BI: Fontes (Legado/ERP/CRM) → ETL e qualidade de dados → Data Warehouse e Data Marts (+ metadados) → Servidor → Query/Reporting, OLAP, Data Mining. Cadeia essencial: fonte OLTP → ETL → Data Warehouse → OLAP/análise.

2. DATA WAREHOUSE (DW): Repositório integrado, consolidado, limpo e padronizado, surgido no início dos anos 1990. Definição de Inmon: conjunto de dados "orientado por assunto, integrado, variante no tempo e não volátil" para suporte à decisão. As 4 características: orientado por assunto; integrado; variante no tempo (histórico); não volátil (carga planejada, não se atualiza). Componentes do ambiente: Staging Area (integração/transformação), ODS (Operational Data Store, volátil), Data Mart (visão departamental), Metadados (catálogo). DW vs OLTP: OLTP é normalizado e transacional; DW é desnormalizado, voltado à consulta e atualizado por cargas periódicas.

3. MODELAGEM DIMENSIONAL: Técnica de Ralph Kimball para apresentar dados de forma padronizada e intuitiva, com alto desempenho de acesso. Duas escolas: Kimball (dimensional, star/snowflake, DW = união dos data marts) e Inmon (relacional desnormalizada, data mart deriva do DW). Star Schema (esquema estrela): tabela FATO central com as métricas/KPIs, cercada por tabelas DIMENSÃO que a detalham (respondem Onde? Quando? O quê? Quem?). Snowflake (floco de neve): dimensões normalizadas em hierarquias, usado para dimensões grandes, mas exige mais joins. Etapas: 1) O que avaliamos? (fatos/métricas numéricas) 2) Como analisar? (dimensões) 3) Menor detalhe? (granularidade) 4) Como agrupar? (hierarquia). TABELA FATO: PK composta (todas as FKs das dimensões) + métricas; tipos: movimento, snapshot e factless (existência sem métrica). Duas regras do professor: não misture assuntos (uma tabela fato para cada tema distinto) e não misture granularidades (não inclua linhas de resumo com grão diferente na mesma fato — para isso existem as tabelas agregadas). MÉTRICAS: aditivas (somam em todas as dimensões), semi-aditivas (só em algumas, ex.: saldo) e não-aditivas (%, temperatura). DIMENSÃO: PK (surrogate key artificial, não reusar código de origem) + atributos textuais (filtros) + hierarquias (1-N em cascata). DIMENSÃO TEMPO: sempre presente, pode ser carregada antecipadamente sem fonte. Para hora/minuto o professor rejeita colocar tudo na dimensão Tempo (1 ano com hora, minuto e segundo daria 31.536.000 linhas) e recomenda uma dimensão Hora-do-Dia separada (24×60 = 1440 linhas, ou 86.400 com segundos); se não houver descrições adicionais sobre a hora, ela pode ficar na própria fato. Fuso horário: guardar duas data/hora, uma local e uma em GMT. GRANULARIDADE: nível de detalhe; o grão é o nível mais detalhado; todas as métricas compartilham a mesma granularidade. SCD (Slowly Changing Dimensions): Tipo 1 sobrescreve (perde histórico, útil quando o registro estava errado), Tipo 2 cria nova linha com nova surrogate key (mantém histórico, marcado por flag, versão ou data início/fim), Tipo 3 adiciona uma nova coluna (guarda o valor original e o atual, perde os intermediários e gera muitos nulos), e a solução híbrida chamada Tipo 6 (3+2+1) combina nova linha com colunas de valor original e atual, para consultar o histórico segundo o valor de hoje. Outras: degenerate (dimensão sem atributos, representada como atributo da própria fato, ex.: nº da nota fiscal — aparece quando o grão da fato é o item), junk/garbage (agrupa flags e indicadores de baixa cardinalidade, carregada por preload do produto cartesiano ou em tempo de execução), role-playing (mesma dimensão em papéis diferentes via views), bridge/multivalorada (número aberto de valores, ex.: titulares de conta). MODELAGEM AVANÇADA: Fast Changing (ou Rapidly Changing) Dimensions são dimensões grandes cujos atributos mudam com frequência — a solução é particionar a dimensão separando os atributos voláteis em MINI-DIMENSÕES, criando faixas de valores para reduzir linhas; snowflaking NÃO resolve Fast Changing Dimension. Hot Swappable Dimensions: múltiplas versões alternativas da mesma dimensão, trocadas em tempo de consulta por dimensões físicas distintas ou por views. Registros Heterogêneos: quando os dados da dimensão vêm de tabelas com atributos diferentes — três alternativas: uma dimensão com todos os atributos, uma dimensão só com os atributos comuns, ou dimensões e fatos separados. PROJETO FÍSICO: tabelas agregadas (resumos calculados com SUM sobre atributos de uma hierarquia; agregação completa recria tudo a cada carga, incremental atualiza e insere; vantagem é o tempo de resposta, desvantagem é a manutenção), aggregate navigation (software que intercepta a consulta SQL e a reescreve para usar a agregada disponível), indexação e particionamento.

4. ETL (Extract, Transform, Load): Extração das fontes → Transformação conforme o negócio → Carga no destino. Na prática é complexo: fontes diversas com convenções, tipos, unidades e granularidades diferentes. Preparação: limpeza (dados ausentes, ruído/outliers, duplicados), redução (PCA, amostragem), transformação (normalização, discretização) e integração (redundância). Ferramenta: Pentaho Data Integration (Kettle, acrônimo de "Kettle E.T.T.L. Environment"): Spoon (GUI para transformations e jobs), Pan (roda transformations por linha de comando, pan.bat/pan.sh com -file, -rep, -trans, -user, -pass, -level), Kitchen (roda jobs em lote) e Carte (servidor web para execução e monitoramento remoto). Transformation = Steps ligados por Hops; cada hop é o output stream de um step e o input stream de outro; Job agrupa e orquestra transformations, e os hops de job carregam condição (Unconditional, Follow when result is true, Follow when result is false). CATÁLOGO DE STEPS: Input (Text File Input, Table Input, Generate Rows, Get System Info); Output (Text File Output, Table Output, Insert/Update, Update, Delete); Lookup (Database Lookup busca numa tabela do banco com cache opcional; Stream Lookup busca em dados vindos de outro step; Dimension Update/Lookup); Field Transformations (Select Values para selecionar/renomear/redimensionar campos, Calculator, Add Constants, Null If, Add Sequence, Java Script Value); Set Transformations (Filter Rows, que produz dois fluxos de saída — true e false; Sort Rows; Unique Rows, que exige linhas ordenadas porque só compara adjacentes); e Dummy ("fazer nada", usado para descartar um fluxo depois de um filtro). O step Dimension Update/Lookup implementa SCD tipos 1 e 2 e é configurado com technical key (a surrogate key), version field, start/end of date range, keys (as chaves de negócio) e fields. JOB ENTRIES: Start, Dummy, Ok, Error, Transformation, Job, Evaluation (JavaScript com variáveis como errors e lines_input), Shell, Mail e SQL. CARGAS DA AULA (arquivos .ktr sobre a base Northwind): a carga de dimensão é curta — entrada da fonte, Select Values e Dimension Update/Lookup; a carga da tabela fato junta dois arquivos de entrada com Sort Rows + Merge Join, resolve as surrogate keys com Database Lookup e Dimension Update/Lookup, calcula com Calculator, soma com Group By e grava com Insert/Update; e a dimensão tempo é gerada sem fonte de dados, com Row Generator + Add Sequence + Calculator + Normaliser + Java Script Value.

5. ANÁLISE EXPLORATÓRIA DE DADOS (AED): A estatística é o pilar da Ciência de Dados. Descritiva (organiza e resume) vs Inferencial (usa amostra para generalizar à população). População vs amostra representativa. Observações = linhas; variáveis = colunas. Variáveis qualitativas (nominal/ordinal) e quantitativas (discreta/contínua). Medidas de tendência central: média, mediana, moda. Medidas de dispersão: amplitude, desvio médio, variância, desvio-padrão (a mais usada) e coeficiente de variação (compara conjuntos com médias e unidades diferentes; homogêneo se CV ≤ 20%). ASSIMETRIA (regra do professor): distribuição simétrica tem média = mediana = moda; assimétrica positiva (à direita) tem média > mediana > moda; assimétrica negativa (à esquerda) tem média < mediana < moda. Curtose é o grau de achatamento em relação à curva normal. Separatrizes: quartis (4 partes), decis (10) e percentis (100); a mediana é o percentil 50. Box Plot com 5 valores (mín, Q1, Q2, Q3, máx) dá ideia de posição, dispersão e assimetria e evidencia outliers, que distorcem médias e conclusões. ANÁLISE BIDIMENSIONAL: estuda o comportamento conjunto de duas ou mais variáveis, explorando relações (similaridades) entre as colunas. Três casos: duas qualitativas (verifica-se se existe ou não associação), duas quantitativas (coeficientes de correlação) e uma qualitativa com uma quantitativa (analisa-se a quantitativa dentro de cada categoria, por medidas-resumo ou box plot por categoria).

6. OLAP (Online Analytical Processing): Tecnologias de suporte à decisão com visão multidimensional dos dados (o Cubo, composto de dimensões, medidas e células). OLAP (analítico, multidimensional) vs OLTP (transacional, bidimensional). Operações: Drill-Down (geral→detalhe, desagrupa), Roll-Up/Drill-Up (detalhe→geral, agrupa), Slice (uma fatia, um membro de uma dimensão), Dice (sub-cubo, vários membros de várias dimensões) — slice e dice são formas particulares de filtro — e Pivoteamento/Rotação (gira o cubo, trocando a ordem de visualização das dimensões). ATENÇÃO: o professor deu DUAS definições para Drill Across e DUAS para Drill Through, e as duas leituras podem cair na prova. Drill Across (1ª): consultar várias tabelas de fatos e combinar os resultados em um único conjunto de dados — só é possível se as fatos usarem Conformed Dimensions (dimensões conformadas). Drill Across (2ª, a do slide seguinte): pular um NÍVEL INTERMEDIÁRIO dentro de uma MESMA dimensão, por exemplo ir de ANO direto para TRIMESTRE ou MÊS sem passar por semestre. Drill Through (1ª): passar de uma informação contida em UMA dimensão PARA OUTRA — por exemplo, sair da dimensão Tempo e começar a analisar por Região. Drill Through (2ª): buscar além do nível de granularidade existente na estrutura dimensional, como um drill-down que vai procurar o detalhe em outra estrutura fora do esquema dimensional — se a fato guarda vendas no grão de produto e se quer o detalhe por nota fiscal, é preciso buscar em outro ambiente. Tipos por armazenamento: MOLAP (multidimensional, cópia dos dados e agregações em estrutura multidimensional, melhor tempo de resposta e boa compressão), ROLAP (relacional, tudo no banco relacional, traduz para SQL, arquitetura aberta e escalável), HOLAP (híbrido, combina os dois), DOLAP (desktop) e WOLAP (web). MONDRIAN: servidor OLAP open source escrito em Java, do tipo ROLAP, que executa consultas em MDX (linguagem semelhante ao SQL, mas exclusiva para consultas multidimensionais, criada pela Microsoft). Arquitetura em 4 camadas: apresentação (o que o usuário vê: pivot tables, gráficos), dimensional (faz o parse, valida e executa o MDX), estrela (mantém o cache de agregados, com o aggregation manager) e armazenamento (o próprio RDBMS). No Mondrian Schema, um cubo é uma coleção de medidas e dimensões; a medida tem nome, coluna na fato e um agregador (sum, count, min); a dimensão é uma coleção de hierarquias; a hierarquia é um conjunto de níveis; e o nível é uma coleção de membros. O JPivot é a tag library que apresenta o resultado, já que o Mondrian só executa a consulta e a devolve.

7. POWER BI: Ferramenta de BI da Microsoft, em 3 versões: Desktop (desenvolvimento), Service (nuvem/compartilhamento) e Mobile. É a união de 3 suplementos do Excel: Power Query (obtenção e limpeza de dados), Power Pivot (modelo e medidas) e Power View (visualização). No Desktop há 3 painéis: Relatório, Dados (formato tabular) e Modelo. Ciclo: obter dados → revisar o modelo de dados (medidas, colunas e relações) → criar relatórios e painéis → publicar. No Power Query: painel de Etapas Aplicadas (cada transformação vira um passo que pode ser editado, reordenado ou removido), validação de tipos, filtros por faixa de valores, tratamento de nulos e de outliers pelo filtro da coluna, remoção de duplicadas por Agrupar ou por Remover Linhas, primeira linha como cabeçalho, preenchimento para cima/baixo ou por média/mediana, e Fechar e Aplicar. IDENTIFICAR OUTLIERS NO POWER BI (receita do professor): como não há visual de box plot nativo, criam-se medidas DAX — mediana com MEDIAN, Q1 com PERCENTILE.INC(0,25), Q3 com PERCENTILE.INC(0,75), IQR = Q3 − Q1, limite inferior = Q1 − 1,5×IQR e limite superior = Q1 + 1,5×IQR — e plota-se um gráfico de dispersão com o identificador no eixo X (Não Resumir) e a variável no eixo Y, adicionando linhas constantes do eixo Y para mediana, Q1, Q3 e os limites. Medidas em linguagem DAX (SUMX, CALCULATE, DIVIDE, FILTER, AVERAGE, COUNTROWS, MEDIAN, PERCENTILE.INC). Muitas visualizações: tabela, matriz, cartão, mapa, barras, linha, pizza, treemap, dispersão, cascata, medidor, funil, segmentação (slicer); o Power BI sugere um visual conforme o tipo de dado dos campos selecionados, e dependendo do tipo de dado uma ou mais visualizações podem não ser adequadas.

8. BIG DATA: Conjunto de dados grandes e complexos que o software tradicional não consegue gerenciar. Os 5 V's: Volume, Velocidade, Variedade, Veracidade (confiabilidade) e Valor (significância para a organização). Tipos de dados: estruturados (SGBD), semiestruturados (JSON/XML) e não estruturados (fotos, vídeos). Três etapas: coletar (ETL vs ELT), armazenar e analisar. Hadoop (Apache): HDFS (arquivos distribuídos), MapReduce (processamento distribuído); viabiliza o Data Lake com hardware barato. NoSQL (não relacional, schemaless), em 4 categorias: chave/valor (Redis), documentos (MongoDB), grafos (Neo4j) e colunar (Cassandra). Data Lake (dados brutos) vs Data Warehouse (dados processados) vs Lakehouse (combina os dois). Big Data Analytics é apoiado por IA e Machine Learning.

9. MINERAÇÃO DE DADOS (Data Mining): O KDD (Knowledge Discovery in Databases) é o processo de descobrir padrões compreensíveis, válidos, novos e úteis (Fayyad, 1996); a mineração é a etapa principal do KDD. Etapas: 1) preparação dos dados — integração, limpeza, transformação, redução e discretização, sob o lema "dado sem qualidade resulta em mineração sem qualidade"; 2) mineração — escolha da tarefa conforme o conhecimento que se espera extrair, e depois escolha do algoritmo que atende a essa tarefa; 3) avaliação/interpretação. TAREFAS: classificação é PREDITIVA — constrói um modelo que classifica novos objetos, a partir de atributos preditivos (que influenciam a decisão) e do atributo objetivo (a classe); ex.: aprovar ou não crédito usando cargo e tempo, via árvore de classificação. Associação é DESCRITIVA — identifica padrões em dados históricos, representando com certo grau de certeza a relação entre o antecedente e o consequente de uma regra; o grau de certeza vem de dois fatores: suporte (percentual das transações em que a regra aparece) e confiança (considera apenas as transações que contêm o antecedente); algoritmo APRIORI; ex.: cesta de compras. Agrupamento/clusterização reúne indivíduos semelhantes calculando distâncias, em técnicas hierárquicas e não hierárquicas (partição); ex.: K-Means; a clusterização não responde POR QUE os padrões existem, apenas os identifica. CRITÉRIOS DE AVALIAÇÃO DO MODELO (etapa 3): acurácia (predizer corretamente o comportamento de amostras desconhecidas), desempenho (custo computacional para gerar e usar o modelo), robustez (atuar corretamente em amostras com atributos faltando ou com ruído), escalabilidade (construir um modelo eficiente a partir de grandes volumes) e interpretabilidade (tornar compreensível o conhecimento gerado); as duas ações possíveis diante de um resultado ruim são ajustar os parâmetros do algoritmo ou escolher outro algoritmo. DM vs OLAP: OLAP é verificação (o analista conhece a questão, elabora a hipótese e usa a ferramenta para confirmá-la ou refutá-la); DM é descoberta (a questão é total ou parcialmente desconhecida e a ferramenta busca padrões). O DW facilita o KDD porque já entrega os dados integrados, consistentes e limpos. CASOS REAIS do material: Walmart (a associação clássica entre fraldas e cervejas, e também entre a boneca Barbie e barras de chocolate; os produtos foram realocados e as vendas aumentaram); Itaú, pioneiro no uso de DW no Brasil (enviava mais de 1 milhão de malas diretas com retorno de 2%; passando a enviar só para quem tinha maior chance de responder, o retorno subiu para 30% e a conta do correio caiu a um quinto); Sprint (desenvolveu um método capaz de prever com 61% de certeza se um cliente trocaria de empresa em dois meses e, com marketing agressivo, evitou a deserção de 120.000 clientes e a redução de 35 milhões de dólares em faturamento — o valor pedagógico está no contraste entre um modelo de apenas 61% e o retorno de US$ 35 milhões).

10. ORANGE E APRENDIZADO DE MÁQUINA: Orange é uma ferramenta de mineração com programação visual (widgets em um fluxo de trabalho), sem exigir código. Fluxo: entrada → amostragem → visualização → pré-processamento → criação do modelo → avaliação → aplicação. Widgets de exploração: Data Table, Feature Statistics (estatísticas básicas, amplitude, distribuição e percentual de valores ausentes), Rank (pontua atributos pela correlação com a variável de destino), Distributions e Scatter Plot; de amostragem: Select Rows e Data Sampler (fixed proportion, fixed sample size, cross validation, bootstrap, amostragem replicável e estratificada). PRÉ-PROCESSAMENTO: discretização transforma valores contínuos numa coleção finita de intervalos — a justificativa é que alguns algoritmos não aceitam colunas contínuas como entrada (Naive Bayes, por exemplo) e que colunas com valores distintos demais escondem os padrões; o widget Discretize oferece Natural binning, Fixed width, Time interval, Equal-frequency, Equal-width, Entropy-MDL (de Fayyad e Irani) e Custom. Continuize transforma variáveis discretas em numéricas (first value as base, most frequent as base, one-hot encoding, treat as ordinal) e padroniza as numéricas (standardize a µ=0 e σ²=1, center, scale, normalize para [-1,1] ou [0,1]). Normalização reduz o intervalo de um atributo e é essencial com atributos em escalas diferentes, pois a relevância de um atributo de escala menor seria diluída. Feature selection / redução de dados (Recursive Feature Elimination, PCA, Select Relevant Features) remove atributos irrelevantes ou ruidosos, melhorando a generalização e o desempenho. MODELOS disponíveis: kNN, SVM, Classification Tree, Random Forest, Gradient Boosted Trees, CN2 Rule Induction, Neural Network, Logistic Regression, Naive Bayes, AdaBoost; regressão (Linear Regression, Regression Tree); clusterização (Hierarchical, K-Means, DBSCAN); associação (Frequent Itemsets, Association Rules). AVALIAÇÃO no widget Test and Score, cujos métodos de amostragem são Cross Validation, Cross Validation by feature, Random sampling, Leave-one-out (muito preciso e confiável, porém muito lento), Test on train data e Test on test data. Métricas de classificação: AUC (quanto mais perto de 1, mais preciso), CA (acurácia), F1 (média harmônica de precisão e recall, boa com classes desbalanceadas), Precision, Recall e MCC. Métricas de regressão: MSE, RMSE, MAE e R². Widgets de análise dos resultados: ROC Analysis, Confusion Matrix e Lift Curve (o lift é a proporção de positivos num ponto da amostra dividida pela proporção de positivos no conjunto todo, ou seja, o que um classificador aleatório faria; o modelo com maior elevação máxima costuma ser o melhor). Aprendizado supervisionado (com classe-alvo: classificação e regressão) vs não supervisionado (sem alvo: clusterização, associação). Regressão logística usa a função sigmoide para classificação binária; árvores de decisão sofrem de overfitting.

11. OS PROJETOS PRÁTICOS (60% DA NOTA): a avaliação da disciplina é 6 pontos de projeto em dupla + 4 pontos de prova escrita individual, em cada uma das duas notas — ou seja, o projeto vale 60% e a prova 40%. Os quatro entregáveis encadeiam a mesma cadeia OLTP → DW → ETL → painéis → mineração. PRIMEIRA NOTA — Modelagem de um Data Warehouse: apresentação com slides e trabalho escrito com definição do projeto/escopo (sistema e dados OLTP e os requisitos atendidos pelo DW), descrição detalhada da base OLTP (dicionário de dados, análise exploratória, filtros realizados), modelo lógico/físico em star schema e, no anexo, o script SQL de implantação em Oracle (tabelas com constraints, tablespaces e sequências). SEGUNDA NOTA — Integração de Dados: vídeo demonstrando as cargas sendo executadas passo a passo, mais tudo o que constava na primeira parte já corrigido, a documentação dos planos ETL e os arquivos e orientações para executá-los. TERCEIRA NOTA — Consultas Analíticas: apresentação com slides, tudo da segunda parte corrigido, os painéis de consultas, gráficos e planilhas criados para apresentar a análise, e as conclusões e sugestões obtidas a partir deles. QUARTA NOTA — Mineração de Dados (individual, 4 pontos): apresentação contemplando aspectos técnicos (para a equipe de TI) e de negócio (para gestores), e trabalho escrito em formato de artigo científico com definição do problema em termos de mineração e objetivos de negócio, aquisição e preparação dos dados (dicionário, AED, filtros), detalhamento de todas as etapas do workflow do Orange incluindo construção e avaliação dos modelos, e conclusões; a base deve ser os anúncios da OLX ou o Censo Escolar. Ferramentas da disciplina: Oracle SQL Developer Data Modeler (modelo do DW, com o padrão de nomenclatura PK_, FK_, AK_, IDX_, CK_, NN_), Oracle Database, Pentaho Data Integration, Power BI e Orange. Base condutora das aulas: Northwind (Access), de onde se modelou o DW de exemplo e se construíram as cargas.

DIVISÃO POR AVALIAÇÕES:
- AV1 (1ª nota): Business Intelligence, Data Warehouse, Modelagem Dimensional (star/snowflake, fato, dimensões, SCD, granularidade, modelagem avançada e projeto físico) e ETL com Pentaho. Projeto: modelagem do DW e planos de carga.
- AV2 (2ª nota): Análise Exploratória de Dados, OLAP, Power BI, Big Data, Mineração de Dados e Orange/Machine Learning. Projeto: consultas analíticas e mineração de dados.
`;

export const TABD_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: BI, Data Warehouse e Modelagem',
    prompt: 'Conteúdo da AV1: Business Intelligence (origem, definição, arquitetura), Data Warehouse (definição de Inmon e as 4 características, componentes, DW vs OLTP), Modelagem Dimensional (Kimball vs Inmon, star schema, snowflake, tabela fato, tipos de fato, métricas aditivas/semi-aditivas/não-aditivas, dimensões, surrogate keys, dimensão tempo e dimensão Hora-do-Dia, granularidade, SCD tipos 1/2/3 e a solução híbrida tipo 6, degenerate, junk/garbage, role-playing, bridge), Modelagem Dimensional Avançada (Fast Changing Dimensions e mini-dimensões, Hot Swappable Dimensions, registros heterogêneos), Projeto Físico do DW (tabelas agregadas, agregação completa vs incremental, aggregate navigation, indexação, particionamento) e ETL (extração/transformação/carga, limpeza de dados, Pentaho Data Integration/Kettle, Spoon/Pan/Kitchen/Carte, transformations e jobs, steps e hops, catálogo de steps de input/output/lookup/field/set, Dimension Update/Lookup para SCD, job entries). Inclui também os projetos práticos da 1ª e 2ª nota (modelagem do DW e planos de carga), que valem 60% da nota.',
  },
  {
    value: 'av2',
    label: 'AV2: Análise, OLAP e Data Science',
    prompt: 'Conteúdo da AV2: Análise Exploratória de Dados (estatística descritiva e inferencial, população e amostra, variáveis qualitativas e quantitativas, média/mediana/moda, regras de assimetria, dispersão, coeficiente de variação, quartis, box plot, outliers, análise bidimensional e correlação), OLAP (cubo, OLAP vs OLTP, operações drill-down/roll-up/slice/dice/pivot, as duas definições de drill across e as duas de drill through dadas pelo professor, tipos MOLAP/ROLAP/HOLAP/DOLAP/WOLAP, Mondrian e suas 4 camadas, MDX), Power BI (versões, painéis, Power Query/Pivot/View, limpeza de dados, identificação de outliers com medidas DAX e gráfico de dispersão, escolha do visual), Big Data (5 V\'s, dados estruturados/semi/não estruturados, Hadoop, HDFS, MapReduce, NoSQL e suas 4 categorias, Data Lake vs DW vs Lakehouse), Mineração de Dados (KDD, tarefas preditivas e descritivas, classificação, associação com suporte e confiança, APRIORI, agrupamento, K-Means, critérios de avaliação do modelo, DM vs OLAP, casos reais) e Orange/Machine Learning (fluxo de widgets, pré-processamento com Discretize/Continuize/Normalize, aprendizado supervisionado vs não supervisionado, Test and Score e seus métodos de amostragem, acurácia, matriz de confusão, ROC, lift curve). Inclui também os projetos práticos da 3ª e 4ª nota (consultas analíticas e mineração de dados), que valem 60% da nota.',
  },
  { value: 'bi', label: 'Business Intelligence' },
  { value: 'dw', label: 'Data Warehouse' },
  { value: 'dimensional', label: 'Modelagem Dimensional' },
  { value: 'avancada', label: 'Modelagem Avançada e Projeto Físico' },
  { value: 'etl', label: 'ETL e Pentaho' },
  { value: 'aed', label: 'Análise Exploratória de Dados' },
  { value: 'olap', label: 'OLAP' },
  { value: 'powerbi', label: 'Power BI' },
  { value: 'bigdata', label: 'Big Data' },
  { value: 'mineracao', label: 'Mineração de Dados' },
  { value: 'orange', label: 'Orange e Machine Learning' },
  { value: 'projetos', label: 'Projetos Práticos (60% da nota)' },
];

export const TABD_EXAMS: ExamDefinition[] = [
  {
    id: 'av1',
    label: 'AV1',
    description: 'BI, Data Warehouse, Modelagem Dimensional e ETL com Pentaho.',
  },
  {
    id: 'av2',
    label: 'AV2',
    description: 'Análise Exploratória, OLAP, Power BI, Big Data e Ciência de Dados.',
  },
];

export const TABD_SECTIONS = [
  { id: 'intro', title: 'Introdução: BI e a cadeia de decisão', shortTitle: 'Introdução' },
  // Os projetos valem 6 dos 10 pontos de cada nota, nas duas avaliações.
  { id: 'projetos', title: 'Os Projetos Práticos (60% da nota)', shortTitle: 'Projetos', exams: ['av1', 'av2'] },
  { id: 'bi', title: 'Business Intelligence', shortTitle: 'BI', exams: ['av1'] },
  { id: 'dw', title: 'Data Warehouse', shortTitle: 'Data Warehouse', exams: ['av1'] },
  { id: 'dimensional', title: 'Modelagem Dimensional', shortTitle: 'Dimensional', exams: ['av1'] },
  { id: 'avancada', title: 'Modelagem Avançada e Projeto Físico', shortTitle: 'Avançada', exams: ['av1'] },
  { id: 'etl', title: 'ETL e Pentaho', shortTitle: 'ETL', exams: ['av1'] },
  { id: 'aed', title: 'Análise Exploratória de Dados', shortTitle: 'Análise', exams: ['av2'] },
  { id: 'olap', title: 'OLAP e Cubos', shortTitle: 'OLAP', exams: ['av2'] },
  { id: 'powerbi', title: 'Power BI', shortTitle: 'Power BI', exams: ['av2'] },
  { id: 'bigdata', title: 'Big Data', shortTitle: 'Big Data', exams: ['av2'] },
  { id: 'mineracao', title: 'Mineração de Dados', shortTitle: 'Mineração', exams: ['av2'] },
  { id: 'orange', title: 'Orange e Machine Learning', shortTitle: 'Orange/ML', exams: ['av2'] },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima. */
export type TABDSectionId = (typeof TABD_SECTIONS)[number]['id'];

const QUIZ_DATA_AV1: QuizQuestionData[] = [
  {
    id: 't1',
    question: '1. A quem é atribuído o termo "Business Intelligence", no fim dos anos 1980?',
    options: ['Ralph Kimball', 'Bill Inmon', 'Howard Dresner (Gartner)', 'Edgar Codd'],
    correctIndex: 2,
    feedbackCorrect: 'O termo é atribuído a Howard Dresner, do Gartner Group.',
    feedbackWrong: 'Foi Howard Dresner (Gartner) que popularizou o termo Business Intelligence.',
  },
  {
    id: 't2',
    question: '2. Na definição de Inmon, quais são as quatro características de um Data Warehouse?',
    options: [
      'Rápido, barato, seguro e escalável',
      'Orientado por assunto, integrado, variante no tempo e não volátil',
      'Normalizado, transacional, volátil e distribuído',
      'Relacional, dimensional, físico e lógico',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto: orientado por assunto, integrado, variante no tempo e não volátil.',
    feedbackWrong: 'Inmon define o DW como orientado por assunto, integrado, variante no tempo e não volátil.',
  },
  {
    id: 't3',
    question: '3. No esquema estrela (star schema), o que fica na tabela central (fato)?',
    options: [
      'Os atributos textuais de filtro',
      'As métricas e indicadores a serem analisados',
      'As hierarquias das dimensões',
      'Os metadados do Data Warehouse',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A tabela fato guarda as métricas/KPIs; as dimensões a detalham ao redor.',
    feedbackWrong: 'A tabela fato central contém as métricas/indicadores; os atributos ficam nas dimensões.',
  },
  {
    id: 't4',
    question: '4. A rede quer somar a métrica "quantidade em estoque" por almoxarifado e também ao longo dos 12 meses do ano. O que acontece?',
    options: [
      'Soma corretamente nos dois casos: é uma métrica aditiva',
      'Soma entre almoxarifados, mas somar ao longo do tempo dá um número sem sentido — é semi-aditiva',
      'Não soma em nenhum dos dois casos: é não-aditiva',
      'Depende apenas do tipo de dado da coluna no banco',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Estoque é semi-aditiva: faz sentido somar entre locais no mesmo instante, mas somar 12 fotos mensais de estoque não produz nada. Nessa dimensão cabem MAX, MIN ou média.',
    feedbackWrong: 'Estoque e saldo são o exemplo clássico de métrica semi-aditiva: somam entre locais, mas não ao longo do tempo — somar as 12 posições mensais não significa nada.',
  },
  {
    id: 't5',
    question: '5. Por que se usam surrogate keys (chaves artificiais) nas dimensões, em vez do código do sistema de origem?',
    options: [
      'Porque são obrigatórias no SQL',
      'Para isolar o DW das regras operacionais, preservar histórico e melhorar o desempenho',
      'Porque ocupam menos espaço que qualquer outra chave',
      'Porque o Pentaho não aceita chaves de origem',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Surrogate keys isolam o DW da origem, sustentam o histórico (SCD) e dão desempenho.',
    feedbackWrong: 'A surrogate key isola o DW das regras de origem, preserva histórico e melhora desempenho.',
  },
  {
    id: 't6',
    question: '6. Um cliente mudou de cidade. O gestor exige que os relatórios de 2023 continuem mostrando a cidade em que ele morava naquele ano, e os de 2024, a cidade nova. Qual SCD atende?',
    options: [
      'Tipo 1 — sobrescrever a cidade na linha do cliente',
      'Tipo 2 — inserir uma nova linha com nova surrogate key e marcar a vigência',
      'Tipo 3 — criar uma coluna "cidade anterior" ao lado da atual',
      'Nenhum: o caso exige uma dimensão degenerada',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Só o Tipo 2 preserva o histórico ligado a cada fato: cada venda antiga continua apontando para a linha antiga do cliente, com a cidade da época.',
    feedbackWrong: 'É o Tipo 2. O Tipo 1 apagaria a cidade antiga e reescreveria o passado; o Tipo 3 guarda só o valor anterior e o atual, perdendo os intermediários e sem ligar cada fato à sua época.',
  },
  {
    id: 't7',
    question: '7. O que é a granularidade em um Data Warehouse?',
    options: [
      'O número de dimensões do modelo',
      'O nível de detalhe (o grão) em que os dados estão armazenados',
      'A quantidade de tabelas fato',
      'O tamanho físico do banco em disco',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Granularidade é o nível de detalhe; o grão é o nível mais detalhado, e todas as métricas o compartilham.',
    feedbackWrong: 'Granularidade é o nível de detalhe (grão) dos dados — quanto menor o grão, mais detalhe e volume.',
  },
  {
    id: 't8',
    question: '8. No Pentaho Data Integration (Kettle), qual componente é a interface gráfica para desenhar transformations e jobs?',
    options: ['Pan', 'Kitchen', 'Spoon', 'Carte'],
    correctIndex: 2,
    feedbackCorrect: 'Spoon é a GUI. Pan roda transformations, Kitchen roda jobs, Carte é o servidor remoto.',
    feedbackWrong: 'A interface gráfica é o Spoon. Pan (transformations), Kitchen (jobs) e Carte (remoto) são de linha de comando/serviço.',
  },
  {
    id: 't9',
    question: '9. Qual a diferença essencial entre o esquema estrela (star) e o floco de neve (snowflake)?',
    options: [
      'O star não tem tabela fato',
      'No snowflake as dimensões são normalizadas em hierarquias, gerando mais joins',
      'O snowflake não permite métricas',
      'São exatamente iguais',
    ],
    correctIndex: 1,
    feedbackCorrect: 'No snowflake as dimensões são normalizadas (hierarquias), o que reduz redundância mas exige mais joins.',
    feedbackWrong: 'O snowflake normaliza as dimensões em hierarquias — menos redundância, porém mais joins nas consultas.',
  },
  {
    id: 't10',
    question: '10. Uma "degenerate dimension" (dimensão degenerada) é caracterizada por:',
    options: [
      'Ser a maior dimensão do modelo',
      'Ser um atributo dentro da própria tabela fato, sem tabela própria (ex.: nº da nota fiscal)',
      'Agrupar apenas flags booleanas',
      'Mudar de valor muito lentamente',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A degenerate fica como atributo na fato (nº de pedido, nota fiscal), sem dimensão própria.',
    feedbackWrong: 'Degenerate dimension é um identificador de documento (nota, pedido) que fica na fato, sem tabela de dimensão.',
  },
  {
    id: 't23',
    question: '11. No exercício da empresa de táxi, o requisito é "informar a quilometragem percorrida e o valor recebido por bairro de origem, por bairro de destino, por motorista e por veículo, com granularidade mensal". Qual é a leitura correta do modelo?',
    options: [
      'Quilometragem e valor são as dimensões; bairro e motorista são as métricas',
      'Quilometragem e valor são as métricas; bairro (em dois papéis), motorista, veículo e tempo são as dimensões, e o grão é o mês',
      'O grão é a viagem individual, porque cada viagem é uma linha do sistema de origem',
      'O modelo não precisa de dimensão tempo, já que o mês está no nome da tabela',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A pergunta "o que medimos?" dá as métricas (km e valor); "como analisar?" dá as dimensões; e "qual o menor detalhe?" fixa o grão no mês, como o enunciado pede. Bairro de origem e bairro de destino são a mesma dimensão em dois papéis (role-playing).',
    feedbackWrong: 'Métricas são sempre os valores numéricos a medir — quilometragem e valor. Bairro, motorista, veículo e tempo são as perspectivas de análise. E o grão é o que o requisito declarar: aqui, mensal — não a viagem.',
  },
  {
    id: 't24',
    question: '12. A dimensão Cliente tem 2 milhões de linhas e três atributos (faixa de renda, score de crédito e faixa etária) que mudam com frequência em muitas linhas. Qual a solução recomendada?',
    options: [
      'Aplicar SCD Tipo 2 nesses atributos, como em qualquer outra mudança',
      'Normalizar a dimensão (snowflaking), separando os atributos voláteis em uma tabela filha',
      'Separar os atributos voláteis em uma mini-dimensão, usando faixas de valores para reduzir a cardinalidade',
      'Mover os três atributos para dentro da tabela fato',
    ],
    correctIndex: 2,
    feedbackCorrect: 'É o caso de Fast Changing (Rapidly Changing) Dimension: particiona-se a dimensão separando o volátil do estático em uma mini-dimensão, com faixas de valores para diminuir o número de registros.',
    feedbackWrong: 'É uma Fast Changing Dimension. O SCD Tipo 2 explodiria a dimensão em versões, e o professor é explícito: snowflaking NÃO resolve o problema — a cada mudança ainda seria preciso um novo registro na dimensão original. A resposta é a mini-dimensão.',
  },
  {
    id: 't25',
    question: '13. Para que serve o "aggregate navigation" no projeto físico de um Data Warehouse?',
    options: [
      'Para navegar pela hierarquia de uma dimensão na ferramenta OLAP',
      'É um software que intercepta a consulta SQL e a reescreve para usar a tabela agregada disponível',
      'Para decidir a ordem em que as dimensões são carregadas no ETL',
      'Para criar automaticamente os índices da tabela fato',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O aggregate navigation intercepta o SQL e o reescreve apontando para a agregada — o usuário continua consultando a fato detalhada, mas a resposta vem da tabela resumida.',
    feedbackWrong: 'Aggregate navigation é o software que intercepta consultas SQL e as modifica para tirar proveito das tabelas agregadas do DW. Navegar pela hierarquia é drill-down/roll-up, outra coisa.',
  },
  {
    id: 't26',
    question: '14. No Pentaho Data Integration, você precisa buscar a descrição de uma cidade a partir de um CEP que veio de OUTRO step do mesmo fluxo (um CSV já carregado), e não de uma tabela do banco. Qual step usar?',
    options: ['Database Lookup', 'Stream Lookup', 'Dimension Update/Lookup', 'Table Input'],
    correctIndex: 1,
    feedbackCorrect: 'Stream Lookup busca em dados que chegaram por outro step do fluxo. Foi exatamente o step usado no exercício de limpeza para resolver os CEPs ausentes.',
    feedbackWrong: 'Database Lookup consulta uma tabela do banco; para buscar em dados vindos de outro step do próprio fluxo, o step é o Stream Lookup.',
  },
  {
    id: 't27',
    question: '15. Ao carregar a dimensão Produto no Kettle, você quer que o histórico de mudanças de categoria seja preservado automaticamente. Qual step faz isso e o que precisa ser configurado?',
    options: [
      'Insert/Update, informando as chaves de comparação',
      'Table Output com a opção Truncate Table marcada',
      'Dimension Update/Lookup, informando technical key, version field, datas de início/fim e as chaves de negócio',
      'Add Sequence, para gerar a surrogate key a cada carga',
    ],
    correctIndex: 2,
    feedbackCorrect: 'O Dimension Update/Lookup implementa SCD tipos 1 e 2. A technical key é a surrogate key, o version field guarda a versão, e o start/end of date range marca a vigência de cada linha.',
    feedbackWrong: 'É o Dimension Update/Lookup — o único step que implementa SCD (tipos 1 e 2) sozinho. Insert/Update apenas insere ou atualiza, sem versionar nada.',
  },
  {
    id: 't28',
    question: '16. Na disciplina, como se divide a nota de cada avaliação?',
    options: [
      'Prova escrita individual vale tudo; o projeto é opcional',
      'Projeto em dupla vale 6 pontos e a prova escrita individual vale 4 — ou seja, o projeto é 60% da nota',
      'Projeto e prova valem 5 pontos cada',
      'A nota vem só da lista de exercícios de laboratório',
    ],
    correctIndex: 1,
    feedbackCorrect: 'São 6 pontos de projeto (em dupla) e 4 de prova escrita individual, nas duas notas. Estudar só a teoria da prova cobre menos da metade da avaliação.',
    feedbackWrong: 'A divisão é 6 pontos de projeto (dupla) + 4 de prova escrita individual, em cada uma das duas notas: o projeto vale 60%.',
  },
  {
    id: 't29',
    question: '17. O que a PRIMEIRA NOTA (projeto de Modelagem de um Data Warehouse) exige no anexo do trabalho escrito?',
    options: [
      'O vídeo das cargas sendo executadas',
      'Os painéis de consultas e gráficos',
      'O script SQL de implantação do modelo em um banco Oracle, com tabelas, constraints, tablespaces e sequências',
      'O artigo científico de mineração de dados',
    ],
    correctIndex: 2,
    feedbackCorrect: 'A primeira nota fecha com o script SQL de implantação em Oracle. O vídeo das cargas é a segunda nota, os painéis são a terceira e o artigo é a quarta.',
    feedbackWrong: 'É o script SQL de implantação em Oracle (tabelas com constraints, tablespaces e sequências). O vídeo das cargas pertence à segunda nota; os painéis, à terceira.',
  },
];

const QUIZ_DATA_AV2: QuizQuestionData[] = [
  {
    id: 't11',
    question: '18. Em estatística, qual medida de dispersão indica distribuição homogênea quando é menor ou igual a 20%?',
    options: ['Desvio-padrão', 'Amplitude', 'Coeficiente de variação (CV)', 'Variância'],
    correctIndex: 2,
    feedbackCorrect: 'O coeficiente de variação (CV) ≤ 20% indica um conjunto de dados homogêneo.',
    feedbackWrong: 'É o coeficiente de variação (CV): CV ≤ 20% indica distribuição homogênea.',
  },
  {
    id: 't12',
    question: '19. O Box Plot é construído a partir de quais cinco valores?',
    options: [
      'Média, moda, variância, desvio e amplitude',
      'Mínimo, Q1, mediana (Q2), Q3 e máximo',
      'Média, mediana, moda, mínimo e máximo',
      'Os cinco maiores valores do conjunto',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O box plot usa mínimo, Q1, mediana (Q2), Q3 e máximo — e evidencia outliers.',
    feedbackWrong: 'São cinco: mínimo, primeiro quartil, mediana, terceiro quartil e máximo.',
  },
  {
    id: 't13',
    question: '20. Qual operação OLAP navega do nível mais geral para o mais detalhado de uma hierarquia?',
    options: ['Roll-Up (Drill-Up)', 'Drill-Down', 'Slice', 'Pivot'],
    correctIndex: 1,
    feedbackCorrect: 'Drill-Down vai do geral ao detalhe (desagrupa). Roll-Up faz o inverso.',
    feedbackWrong: 'Drill-Down desce ao detalhe; Roll-Up/Drill-Up sobe ao geral.',
  },
  {
    id: 't14',
    question: '21. O analista fixou o ano em 2024 e, ao mesmo tempo, restringiu as regiões a Norte e Nordeste e a categoria a "Bebidas". Que operação OLAP ele executou?',
    options: [
      'Slice, porque escolheu um valor para o ano',
      'Dice, porque selecionou vários membros de várias dimensões, formando um sub-cubo',
      'Drill-Down, porque desceu ao detalhe da hierarquia',
      'Pivoteamento, porque mudou o recorte da análise',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Vários membros (Norte, Nordeste) em várias dimensões (tempo, região, produto) formam um sub-cubo: é o Dice. O Slice seria fixar um único membro de uma única dimensão.',
    feedbackWrong: 'É o Dice: vários membros de várias dimensões, formando um sub-cubo. O Slice recorta uma única fatia, fixando um membro de uma dimensão. Ambos são formas de filtro.',
  },
  {
    id: 't15',
    question: '22. No Power BI, qual componente é responsável pela obtenção e limpeza (transformação) dos dados?',
    options: ['Power View', 'Power Pivot', 'Power Query', 'Power Automate'],
    correctIndex: 2,
    feedbackCorrect: 'Power Query obtém e limpa os dados; Power Pivot cuida do modelo/medidas; Power View, da visualização.',
    feedbackWrong: 'A limpeza e obtenção de dados é feita no Power Query.',
  },
  {
    id: 't16',
    question: '23. Quais são os "5 V\'s" do Big Data?',
    options: [
      'Volume, Velocidade, Variedade, Variabilidade e Visualização',
      'Volume, Velocidade, Variedade, Veracidade e Valor',
      'Volume, Velocidade, Variedade, Veracidade e Visualização',
      'Volume, Velocidade, Variabilidade, Veracidade e Valor',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Os 5 V\'s do material: Volume, Velocidade, Variedade, Veracidade (confiabilidade) e Valor (significância para a organização).',
    feedbackWrong: 'São Volume, Velocidade, Variedade, Veracidade (confiabilidade) e Valor. Variabilidade e Visualização aparecem em listas estendidas de outros autores, mas não nos 5 V\'s do material.',
  },
  {
    id: 't17',
    question: '24. No ecossistema Hadoop, qual componente é o sistema de arquivos distribuído?',
    options: ['MapReduce', 'HDFS', 'YARN', 'Hive'],
    correctIndex: 1,
    feedbackCorrect: 'HDFS é o sistema de arquivos distribuído; MapReduce faz o processamento distribuído.',
    feedbackWrong: 'O HDFS (Hadoop Distributed File System) é o sistema de arquivos; o MapReduce processa.',
  },
  {
    id: 't18',
    question: '25. Um banco NoSQL orientado a documentos, como o MongoDB, pertence a qual das 4 categorias?',
    options: ['Chave/Valor', 'Documentos', 'Grafos', 'Colunar'],
    correctIndex: 1,
    feedbackCorrect: 'MongoDB e CouchDB são bancos NoSQL de documentos.',
    feedbackWrong: 'MongoDB é orientado a documentos (uma das 4 categorias: chave/valor, documentos, grafos, colunar).',
  },
  {
    id: 't19',
    question: '26. Na mineração de dados, a tarefa que descobre regras do tipo "quem compra A tende a comprar B", medida por suporte e confiança, é a:',
    options: ['Classificação', 'Associação', 'Clusterização', 'Regressão'],
    correctIndex: 1,
    feedbackCorrect: 'Associação (algoritmo APRIORI) usa suporte e confiança — é o caso clássico da cesta de compras.',
    feedbackWrong: 'É a associação (regras antecedente→consequente), medida por suporte e confiança.',
  },
  {
    id: 't20',
    question: '27. O gerente pergunta: "as vendas de bebidas caíram no Nordeste em 2024?". Um analista responde montando um cubo; outro roda um algoritmo que devolve grupos de clientes que ninguém tinha imaginado. Qual afirmação descreve a diferença?',
    options: [
      'O primeiro fez mineração de dados; o segundo, OLAP',
      'O primeiro fez OLAP, que é verificação de uma hipótese conhecida; o segundo, mineração, que é descoberta',
      'Os dois fizeram OLAP, mudando apenas a ferramenta usada',
      'Os dois fizeram mineração, já que ambos partiram dos dados do DW',
    ],
    correctIndex: 1,
    feedbackCorrect: 'No OLAP o analista já conhece a questão e usa a ferramenta para confirmar ou refutar a hipótese. Na mineração a questão é desconhecida e a ferramenta busca os padrões.',
    feedbackWrong: 'Responder a uma pergunta formulada é OLAP (verificação). Encontrar grupos que ninguém pediu é mineração (descoberta). O DW alimenta os dois, mas a abordagem é oposta.',
  },
  {
    id: 't21',
    question: '28. No aprendizado de máquina, a clusterização (agrupamento) e as regras de associação são exemplos de aprendizado:',
    options: ['Supervisionado', 'Não supervisionado', 'Por reforço', 'Semissupervisionado'],
    correctIndex: 1,
    feedbackCorrect: 'Não supervisionado: não há classe-alvo — a máquina descobre a estrutura sozinha.',
    feedbackWrong: 'Clusterização e associação são não supervisionadas (sem classe-alvo). Classificação/regressão é que são supervisionadas.',
  },
  {
    id: 't22',
    question: '29. Qual ferramenta permite fazer mineração de dados por programação visual (widgets), sem escrever código?',
    options: ['Pentaho', 'Power BI', 'Orange', 'Oracle SQL Developer'],
    correctIndex: 2,
    feedbackCorrect: 'Orange usa programação visual: widgets conectados em um fluxo de trabalho.',
    feedbackWrong: 'O Orange Data Mining faz mineração por programação visual (widgets), sem exigir código.',
  },
  {
    id: 't30',
    question: '30. O professor apresentou DUAS definições de Drill Across. Quais são?',
    options: [
      'Consultar várias tabelas fato e combiná-las via conformed dimensions; e pular um nível intermediário dentro de uma mesma dimensão',
      'Descer da célula agregada ao registro detalhado; e girar o cubo',
      'Filtrar um membro de uma dimensão; e filtrar vários membros de várias dimensões',
      'Trocar de dimensão durante a análise; e agrupar os dados no nível superior',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto — e vale saber das duas: o material define drill across tanto como combinar fatos por dimensões conformadas quanto como saltar de ANO direto para TRIMESTRE ou MÊS, sem passar por semestre.',
    feedbackWrong: 'O material dá duas leituras: (1) consultar várias tabelas de fatos e combinar os resultados, o que só funciona com conformed dimensions; e (2) pular um nível intermediário dentro da mesma dimensão. Descer ao detalhe em outra estrutura é drill through.',
  },
  {
    id: 't31',
    question: '31. A tabela fato guarda vendas no grão de PRODUTO, e o analista quer ver o detalhe por NOTA FISCAL, que não está no esquema dimensional. Que operação ele precisa?',
    options: [
      'Roll-Up, subindo na hierarquia de produto',
      'Drill Through, que busca além do nível de granularidade existente, em outra estrutura',
      'Slice, filtrando a nota fiscal desejada',
      'Pivoteamento, girando o cubo até a nota aparecer',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exatamente o exemplo do material: o drill through é como um drill-down que vai buscar o detalhe fora do esquema dimensional, em outro arquivo ou ambiente. O professor também usa "drill through" para a troca de uma dimensão por outra.',
    feedbackWrong: 'É o Drill Through: uma busca ALÉM do nível de granularidade existente, indo procurar o detalhe em outra estrutura. Não dá para filtrar nem girar até achar algo que a fato não guarda.',
  },
  {
    id: 't32',
    question: '32. Um histograma mostra a distribuição com a cauda alongada à direita. Qual relação entre média, mediana e moda o material prevê?',
    options: [
      'média = mediana = moda',
      'média > mediana > moda',
      'média < mediana < moda',
      'A relação depende do tamanho da amostra, não da assimetria',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Assimetria positiva (à direita): média > mediana > moda. Na simétrica as três coincidem; na negativa, média < mediana < moda.',
    feedbackWrong: 'Cauda à direita é assimetria positiva, e a média é puxada pelos valores altos: média > mediana > moda.',
  },
  {
    id: 't33',
    question: '33. Você quer investigar se o tipo de câmbio (manual/automático) tem relação com o preço do veículo. Que tipo de análise bidimensional é essa, e que recurso o material sugere?',
    options: [
      'Duas qualitativas — construir uma tabela de contingência e verificar associação',
      'Duas quantitativas — calcular o coeficiente de correlação',
      'Uma qualitativa e uma quantitativa — analisar a quantitativa dentro de cada categoria, por medidas-resumo ou box plot por categoria',
      'Não é análise bidimensional: cada variável deve ser estudada isoladamente',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Câmbio é qualitativa e preço é quantitativa. O caminho do material é olhar a quantitativa dentro de cada categoria — medidas-resumo por grupo ou um box plot por categoria.',
    feedbackWrong: 'Câmbio é qualitativa e preço é quantitativa: é o terceiro caso da análise bidimensional. Correlação exige duas quantitativas; tabela de associação, duas qualitativas.',
  },
  {
    id: 't34',
    question: '34. No Power BI não existe visual nativo de box plot. Como o material ensina a identificar outliers?',
    options: [
      'Exportando os dados para o Excel e usando o suplemento de estatística',
      'Criando medidas DAX com MEDIAN e PERCENTILE.INC para Q1 e Q3, calculando o IQR e plotando as linhas constantes num gráfico de dispersão',
      'Usando o step Filter Rows do Pentaho antes de carregar no Power BI',
      'Aplicando a função CALCULATE sobre a coluna, que retorna os outliers automaticamente',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Mediana com MEDIAN, Q1 com PERCENTILE.INC(0,25), Q3 com PERCENTILE.INC(0,75), IQR = Q3 − Q1, e os limites em Q1 ∓ 1,5×IQR, tudo plotado como linha constante do eixo Y sobre um gráfico de dispersão.',
    feedbackWrong: 'A receita do material é "construir" o box plot com medidas DAX — MEDIAN e PERCENTILE.INC — e desenhar os limites como linhas constantes num gráfico de dispersão.',
  },
  {
    id: 't35',
    question: '35. Por que o material recomenda discretizar atributos contínuos antes de certos algoritmos?',
    options: [
      'Porque a discretização sempre aumenta a acurácia do modelo',
      'Porque há algoritmos que não aceitam colunas contínuas como entrada (Naive Bayes, por exemplo), e porque colunas com valores distintos demais escondem os padrões',
      'Porque o Orange exige que todos os atributos sejam categóricos',
      'Porque reduz o tamanho do arquivo em disco',
    ],
    correctIndex: 1,
    feedbackCorrect: 'São as duas justificativas do material: restrição do algoritmo e excesso de valores distintos, que impede identificar padrões interessantes.',
    feedbackWrong: 'A justificativa é dupla: alguns algoritmos não podem usar colunas contínuas como entrada (Naive Bayes é o exemplo dado) e valores distintos demais dificultam encontrar padrões. Discretizar não garante acurácia melhor.',
  },
  {
    id: 't36',
    question: '36. No Test and Score do Orange, qual método de amostragem separa UMA amostra por vez e a compara com todo o restante do conjunto — muito preciso e confiável, porém muito lento?',
    options: ['Cross Validation', 'Random sampling', 'Leave-one-out', 'Test on train data'],
    correctIndex: 2,
    feedbackCorrect: 'Leave-one-out: uma instância por vez como teste, todas as outras como treino. Preciso e confiável, mas caro — roda uma vez por instância.',
    feedbackWrong: 'É o Leave-one-out. A validação cruzada separa o conjunto em k partes (não em uma instância por vez), e o Test on train data usa os mesmos dados para treinar e testar.',
  },
  {
    id: 't37',
    question: '37. Na etapa de avaliação do KDD, qual critério mede a habilidade do modelo de atuar corretamente em amostras com atributos faltando ou com ruído?',
    options: ['Acurácia', 'Desempenho', 'Robustez', 'Interpretabilidade'],
    correctIndex: 2,
    feedbackCorrect: 'Robustez. Os outros quatro critérios do material são acurácia, desempenho (custo computacional), escalabilidade e interpretabilidade.',
    feedbackWrong: 'É a robustez. Acurácia é acertar o comportamento de amostras desconhecidas; desempenho é custo computacional; interpretabilidade é tornar o conhecimento compreensível.',
  },
  {
    id: 't38',
    question: '38. O caso Sprint é citado como sucesso de mineração. Que resultado o material registra?',
    options: [
      'Um modelo com 99% de certeza, que eliminou totalmente a evasão de clientes',
      'Um modelo com 61% de certeza de prever a troca de empresa em dois meses, que evitou a deserção de 120.000 clientes e a perda de US$ 35 milhões',
      'Um modelo de agrupamento que dividiu os clientes em cinco perfis de consumo',
      'Uma regra de associação entre planos de dados e aparelhos, no estilo "fraldas e cervejas"',
    ],
    correctIndex: 1,
    feedbackCorrect: 'E é justamente o ponto interessante: um modelo de apenas 61% de certeza — pouco acima do acaso — já rendeu 120.000 clientes retidos e US$ 35 milhões preservados.',
    feedbackWrong: 'O material registra 61% de certeza, 120.000 clientes retidos e US$ 35 milhões de faturamento preservados. A lição é que um modelo modesto pode gerar retorno enorme.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_AV1.map(q => ({ ...q, exams: ['av1'] })),
  ...QUIZ_DATA_AV2.map(q => ({ ...q, exams: ['av2'] })),
];
