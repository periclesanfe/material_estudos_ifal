import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const SADE_GUIDE_CONTEXT = `
GUIA COMPLETO DE SISTEMAS DE APOIO À DECISÃO (SADE) - Resumo:

1. A DISCIPLINA: SADE (8º período, 80h, 4h semanais) é a última do eixo de sistemas do BSI e fecha o curso ligando dados a decisão. A ementa oficial cobre: decisão (teoria e prática), modelos decisórios, apoio à decisão e como tomar decisões inteligentes, etapas da análise de decisão com MÚLTIPLOS CRITÉRIOS, o método AHP e o processo de KDD (conceitos, etapas, ferramentas e aplicações). Na prática da turma 2026.1 (Prof. Edison Camilo), o curso percorre: conceitos iniciais → pandas e ETL → data warehouse e modelagem dimensional → regras de associação → regressão linear → AHP → agrupamento com k-means → redes neurais → dashboards no Power BI. A avaliação é por ATIVIDADES (nove exercícios ao longo do semestre, mais o projeto final). Bibliografia: GOMES (Tomada de Decisão em cenários complexos), HAMMOND & RAIFFA (Decisões inteligentes), PACHECO & VELLASCO (Sistemas inteligentes de apoio à decisão), GOLDSCHMIDT & PASSOS (Data Mining: um guia prático).

2. O QUE É UM SAD: sistema que oferece capacidades analíticas elaboradas a partir dos dados dos SPT e SIG para apoiar gerentes de nível TÁTICO em decisões NÃO USUAIS, sobre problemas únicos que mudam rápido e sem procedimento de resolução totalmente definido. Definição formal do material: "SAD é um sistema de informação computadorizado que combina MODELOS e DADOS na tentativa de resolver problemas SEMIESTRUTURADOS e alguns NÃO ESTRUTURADOS, com intenso envolvimento do usuário". CAPACIDADE ANALÍTICA é "a habilidade de analisar dados e informações para gerar conhecimento de valor e tomar decisões de forma lógica" — o SAD não apenas recupera e apresenta dados: faz ANÁLISES MATEMÁTICAS E ESTATÍSTICAS sobre eles. Tipos de SAD: orientados a DADOS (ferramentas de manipulação e testes estatísticos) e orientados a MODELOS (um modelo matemático da decisão, como pesquisa operacional).

3. A PIRÂMIDE ORGANIZACIONAL: nível OPERACIONAL usa SPT (Sistemas de Processamento de Transações); nível TÁTICO usa SIG (relatórios de rotina, orientados a eventos internos, dependentes dos SPTs) e SAD (decisões não usuais, com dados internos E EXTERNOS, maior poder analítico, interface interativa); nível ESTRATÉGICO usa SAE (Sistemas de Apoio ao Executivo, para gerentes seniores, com dados externos como leis e concorrentes, apresentando informações resumidas em texto e gráficos). TOMADA DE DECISÃO é "a habilidade para processar informações mediante análise lógica e objetiva" e é o processo POSTERIOR à análise do problema. FATORES que a influenciam: conhecimento e experiência, informação disponível, tempo, tipo de decisão, risco, conhecimento das ferramentas e nível de autoridade.

4. TIPOS DE DECISÃO (a matriz clássica de Gorry e Scott Morton): ESTRUTURADA — procedimento conhecido e repetitivo (contas a receber, entrada de pedidos, análise orçamentária); apoio de SIG e modelos estatísticos. SEMIESTRUTURADA — parte do problema tem procedimento, parte exige julgamento (programação de produção, avaliação de crédito, orçamento, fusões e aquisições); apoio do SAD. NÃO ESTRUTURADA — sem procedimento definido, exige julgamento e percepção (contratar um executivo, planejamento de P&D, novas tecnologias); apoio de SAD, sistemas especialistas e REDES NEURAIS. Regra prática: gerentes de nível inferior tratam as decisões estruturadas; os intermediários, as semiestruturadas; os executivos seniores, as não estruturadas.

5. BUSINESS INTELLIGENCE E ETL: BI é "o processo de transformar dados em informação e, através da descoberta, transformar informação em conhecimento" (Gartner) — um conjunto de técnicas para extrair inteligência dos dados de um negócio. A ARQUITETURA de BI vai das FONTES (arquivos, SGBD, ERP, CRM) para o ETL (com área de estágio), daí para o DATA WAREHOUSE (central e data marts) e finalmente para a APRESENTAÇÃO (dashboards, OLAP, data mining, DSS). O ETL tem três etapas: EXTRAÇÃO (os dados saem das fontes para uma área de transição e são convertidos para um formato único), TRANSFORMAÇÃO (ajustes, melhoria da qualidade e consolidação de duas ou mais fontes) e CARGA (estruturar e carregar fisicamente na camada de apresentação, seguindo o modelo dimensional). DADO IMPORTANTE: até 80% de todo o esforço de um projeto de DW é consumido no ETL, e só a extração leva cerca de 60% das horas de desenvolvimento (Inmon). Ferramentas: Pentaho Data Integration, Oracle Data Integrator, bibliotecas Python e Excel.

6. DATA WAREHOUSE E MODELAGEM DIMENSIONAL: DW é "uma grande base de dados capaz de integrar, de forma concisa e confiável, as informações de interesse da empresa espalhadas pelos sistemas operacionais e em fontes externas, para posterior apoio à tomada de decisão". DATA MART é um subconjunto do DW direcionado a um departamento ou assunto — um DW é composto de vários data marts. A MODELAGEM DIMENSIONAL tem três elementos: FATO (coleção de dados de medidas e contexto; representa um processo de negócio como vendas; implementado pela tabela fato), DIMENSÕES (os elementos que participam do fato e as formas de VISUALIZAR os dados — tempo, cliente, produto, localização; normalmente sem atributos numéricos) e MEDIDAS (os atributos NUMÉRICOS que representam o fato: valor de vendas, quantidade vendida). As quatro perguntas que identificam os elementos de um fato: ONDE aconteceu? QUANDO aconteceu? QUEM executou? O QUE é o objeto? O MODELO ESTRELA tem a tabela fato central cercada pelas dimensões; o FLOCO DE NEVE normaliza as dimensões e, segundo o material, tem "pouco uso na atualidade". OLAP é "o conjunto de ferramentas que possibilita efetuar a exploração dos dados do data warehouse", e o CUBO é a visualização multidimensional (por exemplo, localização com hierarquia estado-cidade-loja × tempo × volume de vendas).

7. PANDAS E ETL NA PRÁTICA: pandas é a biblioteca Python para trabalhar com conjuntos de dados, com Series (1D) e DataFrame (2D). Leitura: pd.read_csv(arquivo, encoding='utf-8', sep=',') e pd.read_excel. Exploração: head(n), tail(n), info() (mostra colunas, nulos e tipos), columns, describe(). Acesso: values, loc[[1,2,3]] e loc[10:20], query('Age > 20 & Sex == "male"'). Limpeza: fillna(value={'Age': df.Age.mode()[0]}) usando moda, mediana ou média; isnull().sum() para contar nulos por coluna; duplicated() e drop_duplicates(); str.strip() para remover espaços e str.upper() para padronizar; to_datetime() para converter datas; rename(columns={...}, inplace=True) — e inplace=True significa modificar o DataFrame original em vez de devolver uma cópia. Agregação: groupby(['Município'])['Município'].count() com sort_values. O exercício da turma usa a base real da COVID em Alagoas (dados.gov.br), incluindo detectar idades inválidas (maiores que 120 ou negativas) e valores não numéricos. Outro exercício extrai tabelas de um PDF com a biblioteca TABULA (tabula.read_pdf(pages="all") e tabula.convert_into para CSV).

8. REGRAS DE ASSOCIAÇÃO: buscam relações entre itens — a clássica MARKET BASKET ANALYSIS ("98% de quem comprou A e B também comprou C"). Três métricas: SUPORTE é a frequência do itemset, ou seja, a proporção de transações que o contêm; CONFIANÇA é a probabilidade condicional P(B|A) = Suporte(A∪B) / Suporte(A) — mas pode ENGANAR quando o consequente já é muito popular sozinho; LIFT = Confiança(A→B) / Suporte(B) corrige exatamente isso, medindo quanto a ocorrência de A aumenta ou diminui a probabilidade de B em relação a B ocorrer sozinho. Interpretação: LIFT > 1 é associação POSITIVA (A aumenta a chance de B); LIFT = 1 é INDEPENDÊNCIA; LIFT < 1 é associação NEGATIVA (itens substitutos). Exemplo resolvido do material: em 5 transações, Suporte({Cebola}) = 0,6, Suporte({Ovos}) = 0,8 e Suporte({Cebola, Ovos}) = 0,6; a Confiança({Cebola}→{Ovos}) = 0,6/0,6 = 1,0 e o LIFT = 1,0/0,8 = 1,25 — comprar cebola aumenta em 25% a chance de comprar ovos. O algoritmo APRIORI se apoia na PROPRIEDADE ANTI-MONOTÔNICA (ou fechamento para baixo): se um conjunto de itens é frequente, todos os seus subconjuntos também são — e, por consequência, um itemset abaixo do suporte mínimo é descartado JUNTO COM TODOS OS SEUS SUPERCONJUNTOS (poda). Sua principal limitação é exigir múltiplas passagens pelo banco para contar suportes, o que o torna lento em bases muito grandes; o ECLAT é a alternativa vertical (busca em profundidade com interseção de tidsets), mais rápida.

9. AGRUPAMENTO (CLUSTERING): técnica de aprendizado NÃO SUPERVISIONADO que particiona os dados sem amostra de treinamento, buscando que a semelhança DENTRO de um cluster seja maior que a semelhança ENTRE clusters. A similaridade vem de uma função de DISTÂNCIA — quanto menor a distância, maior a similaridade —, sendo a EUCLIDIANA a mais usada. Três tipos: EXCLUSIVE (cada registro em um único grupo), OVERLAPPING (pode pertencer a vários) e HIERÁRQUICO (grupos com subgrupos). O K-MEANS tem quatro fases: (1) INICIALIZAÇÃO — escolher aleatoriamente k centroides; (2) ATRIBUIÇÃO — cada ponto vai para o cluster do centroide mais próximo; (3) MOVIMENTAÇÃO — recalcular cada centroide como a MÉDIA dos pontos do seu cluster; (4) OTIMIZAÇÃO — repetir 2 e 3 até estabilizar (nenhum ponto muda de cluster) ou atingir o número máximo de iterações. Seu principal problema é a dependência de uma boa INICIALIZAÇÃO; e é essencial NORMALIZAR os dados quando as variáveis estão em escalas diferentes. Para escolher k usa-se o MÉTODO DO COTOVELO (elbow): plotar o SSE (soma dos erros quadráticos, ou inércia) em função de k e procurar onde a curva "dobra". No exemplo com o dataset Iris, o SSE cai de 680,8 (k=1) para 152,4 (k=2) e 78,9 (k=3), depois desacelera — o cotovelo em k=3, coerente com as três espécies; a acurácia obtida foi 0,89.

10. ÁRVORES DE DECISÃO: aprendizado SUPERVISIONADO para classificação e regressão, que divide recursivamente os dados em subconjuntos cada vez mais HOMOGÊNEOS. Estrutura: nó RAIZ (a primeira divisão, com a característica mais importante), nós INTERNOS (testes em atributos) e FOLHAS (a classificação final). Para escolher a divisão usam-se métricas de IMPUREZA: o ÍNDICE GINI = 1 − Σ(pi)², que mede a probabilidade de erro de classificação e vale 0 num nó PURO (usado pelo CART); e a ENTROPIA = −Σ pi·log2(pi), que mede a desordem, com o objetivo de maximizar o GANHO DE INFORMAÇÃO (entropia do pai menos a média ponderada das entropias dos filhos) — usada pelo ID3 e pelo C4.5. Algoritmos: ID3 (entropia e ganho), C4.5 (evolução, trata valores contínuos) e CART (Gini, árvores binárias). O maior risco é o OVERFITTING — um modelo complexo demais que não generaliza —, combatido com PODA (pruning) e limite de profundidade. Para classificar um novo exemplo: parte-se da raiz e seguem-se os testes até uma folha. No scikit-learn: DecisionTreeClassifier(criterion='gini' ou 'entropy', max_depth, min_samples_split, min_samples_leaf), com fit, predict, predict_proba e score, e visualização por plot_tree.

11. REGRESSÃO LINEAR: técnica estatística que estabelece uma equação descrevendo o relacionamento entre variáveis, para explicar e PREVER. A variável DEPENDENTE (Y) é a resposta; a INDEPENDENTE (X) é a explanatória. Antes da regressão vem a CORRELAÇÃO, que mede o GRAU do relacionamento pelo coeficiente de PEARSON: r = [n·Σxy − Σx·Σy] / [√(n·Σx² − (Σx)²) · √(n·Σy² − (Σy)²)]. O r é ADIMENSIONAL, tem sinal positivo quando as variáveis são diretamente proporcionais e negativo quando são inversas, e está sempre no intervalo [−1, 1]; a escala de interpretação do material: 0,00–0,19 bem fraca, 0,20–0,39 fraca, 0,40–0,69 moderada, 0,70–0,89 forte e 0,90–1,00 muito forte. O modelo é yi = α + βxi + ei, e os parâmetros são estimados pelo MÉTODO DOS MÍNIMOS QUADRADOS, que minimiza a soma dos erros ao quadrado: b = [n·Σxy − Σx·Σy] / [n·Σx² − (Σx)²] e a = (Σy − b·Σx)/n, resultando na reta ŷ = a + bx. O RESÍDUO é ei = yi − ŷi. O R² (coeficiente de determinação) é a proporção da variação de Y explicada pelo modelo: R² = 0 não explica nada, R² = 1 é ajuste perfeito. A regressão MÚLTIPLA estende o modelo para várias variáveis independentes.

12. REDES NEURAIS ARTIFICIAIS: o NEURÔNIO ARTIFICIAL (McCulloch-Pitts, 1943) recebe sinais x1..xp, multiplica cada um por um PESO, soma tudo com o limiar w0 (a = Σ wi·xi + w0) e passa o resultado por uma FUNÇÃO DE ATIVAÇÃO — degrau (1 se net > 0, senão 0), sigmoide f(x) = 1/(1+e^-x), ReLU, tangente hiperbólica ou softmax. O PERCEPTRON tem uma única camada de pesos ajustáveis, faz aprendizagem SUPERVISIONADA e atualiza os pesos pela regra w(k+1) = w(k) + λ·e·x, onde e é o erro (desejado menos obtido) e λ é a taxa de aprendizado. Sua limitação célebre: NÃO resolve o XOR, que não é linearmente separável. O MLP (perceptron multicamadas) acrescenta camadas ESCONDIDAS — "extratoras de características" — e resolve problemas não lineares, sendo treinado por RETROPROPAGAÇÃO (backpropagation): gerar pesos aleatórios (entre −2 e 2), propagar os sinais calculando somatórios e ativações, calcular o erro na saída e atualizar os pesos de trás para frente. Os três tipos de aprendizagem: SUPERVISIONADA (um agente externo indica a resposta desejada), NÃO SUPERVISIONADA (auto-organização) e por REFORÇO (um crítico avalia a resposta). Exemplo resolvido do material: treinar a porta AND com perceptron, partindo de wx=1, wy=2, w0=−1 e λ=1, ajustando os pesos a cada erro até chegar à reta 2x + 2y − 1 = 0. Métricas de avaliação: acurácia, F1-score e matriz de confusão.

13. AHP — ANALYTIC HIERARCHY PROCESS: método de decisão MULTICRITÉRIO criado por Thomas L. Saaty nos anos 70, no Departamento de Defesa dos EUA. Estrutura a decisão em três níveis: PROBLEMA (objetivo), CRITÉRIOS e ALTERNATIVAS, aceitando dados qualitativos e quantitativos, tangíveis e intangíveis. Todas as comparações são feitas PAR A PAR usando a ESCALA FUNDAMENTAL DE SAATY: 1 igual importância, 3 fraca (favorece levemente), 5 forte, 7 muito forte (dominação demonstrada na prática), 9 absoluta, com 2, 4, 6 e 8 como valores intermediários e os RECÍPROCOS valendo na comparação inversa. As oito etapas: (1) construir a hierarquia; (2) montar as matrizes de preferência para cada critério; (3) NORMALIZAR cada matriz dividindo os valores pela soma da coluna; (4) obter a média de cada linha (os pesos); (5) montar a matriz de prioridade das alternativas; (6) montar a matriz de comparação entre os critérios; (7) obter o resultado multiplicando os pesos das alternativas pelos pesos dos critérios; (8) calcular a coerência. A RAZÃO DE CONSISTÊNCIA é RC = [(λmax − n)/(n − 1)] / IA, onde IA é o índice aleatório tabelado: RC menor que 0,10 indica consistência aceitável; a partir daí as comparações devem ser revistas. Exemplo resolvido: um engenheiro escolhe entre dois empregos por quatro critérios (salário, oportunidade profissional, localização e custo de vida). Os pesos dos critérios saem 0,067, 0,615, 0,207 e 0,110 — a oportunidade profissional domina. Resultado: Emprego 1 = 0,679 (67,9%) contra Emprego 2 = 0,321, ou seja, vence o emprego de MENOR salário, porque o critério de maior peso favorece o outro lado.

14. O PROJETO E AS FERRAMENTAS: o projeto final da disciplina usa os microdados da RAIS (Ministério do Trabalho) para analisar a empregabilidade dos profissionais de enfermagem no Brasil, com um dashboard interativo que permita cortes por gênero, faixa etária, faixa salarial, UF, município, região, CNAE e evolução mensal nos dois últimos anos, respondendo a dez perguntas de negócio (perfil predominante, distribuição por gênero, faixas etárias, distribuição salarial, concentração geográfica, CNAEs que mais empregam, evolução temporal, diferenças salariais e tendências). Outros exercícios: dashboard no POWER BI; classificação de espécies animais por áudio, extraindo 40 features com a biblioteca LIBROSA e classificando com árvore de decisão; reconhecimento de dígitos (MNIST) e letras (EMNIST) com redes neurais, variando número de camadas e neurônios, função de ativação, taxa de aprendizagem e inicialização dos pesos, avaliando por acurácia e F1-score; e o desafio BirdCLEF no Kaggle.
`;

export const SADE_TOPICS: QuizTopicOption[] = [
    {
        value: 'sad-bi-dw',
        label: 'SAD, BI, ETL e Data Warehouse',
        prompt:
            'Fundamentos de sistemas de apoio à decisão: o que é um SAD e sua definição formal (combina modelos e dados para problemas semiestruturados e não estruturados), capacidade analítica, tipos de SAD orientados a dados e a modelos, a pirâmide organizacional com SPT no nível operacional, SIG e SAD no tático e SAE no estratégico, tomada de decisão e os fatores que a influenciam, os três tipos de decisão (estruturada, semiestruturada e não estruturada) e o apoio adequado a cada um; business intelligence como transformação de dados em informação e conhecimento, a arquitetura de BI das fontes ao dashboard, o processo de ETL com suas três etapas e o dado de que consome até 80% do esforço de um data warehouse; data warehouse e data mart, modelagem dimensional com fatos, dimensões e medidas, as quatro perguntas que identificam um fato, esquema estrela versus floco de neve, OLAP e a visualização em cubo.',
    },
    {
        value: 'pandas-etl',
        label: 'Pandas e preparação de dados',
        prompt:
            'Preparação de dados com pandas na disciplina de sistemas de apoio à decisão: Series e DataFrame, leitura de CSV e Excel com encoding, exploração com head, tail, info, columns e describe, acesso com values, loc e query, limpeza de dados com fillna usando moda mediana ou média, isnull para contar nulos, duplicated e drop_duplicates, str.strip e str.upper para padronizar textos, to_datetime, rename de colunas e o significado de inplace igual a True, agregação com groupby e count, detecção de valores inválidos como idades negativas ou maiores que 120, extração de tabelas de PDF com a biblioteca tabula, e o pipeline completo de ETL aplicado à base real da COVID em Alagoas.',
    },
    {
        value: 'mineracao',
        label: 'Mineração: associação, agrupamento e classificação',
        prompt:
            'Técnicas de mineração de dados da disciplina: regras de associação e market basket analysis, com as métricas de suporte (frequência do itemset), confiança (probabilidade condicional) e lift (confiança dividida pelo suporte do consequente) e a interpretação de lift maior que 1, igual a 1 e menor que 1, o algoritmo Apriori e a propriedade anti-monotônica de fechamento para baixo, a poda de itemsets abaixo do suporte mínimo, a limitação das múltiplas passagens pelo banco e a alternativa Eclat; agrupamento como aprendizado não supervisionado, tipos exclusive, overlapping e hierárquico, distância euclidiana, as quatro fases do k-means (inicialização, atribuição, movimentação dos centroides e otimização), o critério de parada, a dependência da inicialização, a necessidade de normalizar variáveis em escalas diferentes e o método do cotovelo com o SSE para escolher k; árvores de decisão com nó raiz, nós internos e folhas, índice Gini e entropia, ganho de informação, os algoritmos ID3, C4.5 e CART, overfitting e poda.',
    },
    {
        value: 'modelos-decisao',
        label: 'Regressão, redes neurais e AHP',
        prompt:
            'Modelos quantitativos de apoio à decisão: regressão linear com variável dependente e independente, correlação e o coeficiente de Pearson com sua faixa de -1 a 1 e escala de interpretação, o método dos mínimos quadrados e as fórmulas dos coeficientes, a reta de regressão, resíduos, o coeficiente de determinação R² e a regressão múltipla; redes neurais artificiais com o neurônio de McCulloch-Pitts, pesos, limiar e funções de ativação (degrau, sigmoide, ReLU, tangente hiperbólica, softmax), o perceptron e sua regra de aprendizado, a limitação do XOR por não ser linearmente separável, o perceptron multicamadas com camadas escondidas, a retropropagação, os três tipos de aprendizagem (supervisionada, não supervisionada e por reforço) e as métricas de acurácia e F1-score; e o método AHP de decisão multicritério, com a hierarquia de problema, critérios e alternativas, a escala fundamental de Saaty, as matrizes de comparação par a par, a normalização pelas somas das colunas, o cálculo dos pesos, o ranking final e a razão de consistência.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Sistemas de Apoio à Decisão: conceito de SAD e sua posição entre SPT, SIG e SAE; tipos de decisão e níveis gerenciais; business intelligence, ETL e data warehouse com modelagem dimensional; preparação de dados com pandas; regras de associação com suporte, confiança e lift e o algoritmo Apriori; agrupamento com k-means e o método do cotovelo; árvores de decisão com Gini e entropia; regressão linear com correlação de Pearson, mínimos quadrados e R²; redes neurais do perceptron ao MLP com retropropagação; e o método AHP de decisão multicritério com a escala de Saaty e a razão de consistência.',
    },
];

export const SADE_EXAMS: ExamDefinition[] = [
    {
        // A turma 2026.1 avalia por atividades ao longo do semestre (nove exercícios) mais o
        // projeto final; não há prova bimestral no formato tradicional. Os dois grupos abaixo
        // espelham a divisão real do cronograma.
        id: 'dados',
        label: 'Dados e BI',
        description: 'Conceitos de SAD, pandas e ETL, data warehouse e modelagem dimensional (exercícios 1 a 3).',
    },
    {
        id: 'mineracao',
        label: 'Mineração e modelos',
        description: 'Regras de associação, regressão, AHP, agrupamento, redes neurais e dashboards (exercícios 4 a 7).',
    },
];

export const SADE_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'sad-decisao', title: 'Decisão e Sistemas de Apoio', shortTitle: 'SAD e Decisão', exams: ['dados'] },
    { id: 'bi-etl', title: 'Business Intelligence e ETL', shortTitle: 'BI e ETL', exams: ['dados'] },
    { id: 'data-warehouse', title: 'Data Warehouse e Modelagem Dimensional', shortTitle: 'Data Warehouse', exams: ['dados'] },
    { id: 'pandas', title: 'Pandas na Prática', shortTitle: 'Pandas', exams: ['dados'] },
    { id: 'associacao', title: 'Regras de Associação', shortTitle: 'Associação', exams: ['mineracao'] },
    { id: 'agrupamento', title: 'Agrupamento e K-Means', shortTitle: 'K-Means', exams: ['mineracao'] },
    { id: 'arvores', title: 'Árvores de Decisão', shortTitle: 'Árvores', exams: ['mineracao'] },
    { id: 'regressao', title: 'Regressão Linear', shortTitle: 'Regressão', exams: ['mineracao'] },
    { id: 'redes-neurais', title: 'Redes Neurais', shortTitle: 'Redes Neurais', exams: ['mineracao'] },
    { id: 'ahp', title: 'AHP — Decisão Multicritério', shortTitle: 'AHP', exams: ['mineracao'] },
    { id: 'projeto', title: 'Projeto e Dashboards', shortTitle: 'Projeto', exams: ['mineracao'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type SadeSectionId = (typeof SADE_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['dados'],
        question: 'Segundo a definição formal do material, o que caracteriza um SAD?',
        options: [
            'Um sistema que automatiza decisões estruturadas e repetitivas do nível operacional',
            'Um sistema computadorizado que combina MODELOS e DADOS para resolver problemas SEMIESTRUTURADOS e alguns NÃO estruturados, com intenso envolvimento do usuário',
            'Um banco de dados analítico que apenas armazena histórico para consulta',
            'Uma ferramenta de relatórios periódicos padronizados para a gerência',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. As três marcas da definição: combina MODELOS com DADOS (não é só consulta), mira os problemas SEMIESTRUTURADOS (onde parte tem procedimento e parte exige julgamento) e exige envolvimento intenso do usuário — quem decide continua sendo a pessoa.',
        feedbackWrong:
            'A definição do material é: sistema computadorizado que combina MODELOS e DADOS para problemas SEMIESTRUTURADOS e alguns não estruturados, com intenso envolvimento do usuário. Decisões estruturadas e repetitivas são território do SPT e do SIG; relatórios padronizados periódicos são a marca do SIG.',
    },
    {
        id: 'q2',
        exams: ['dados'],
        question: 'Na pirâmide organizacional, qual sistema atende cada nível?',
        options: [
            'SAD no operacional, SPT no tático e SIG no estratégico',
            'SPT no OPERACIONAL, SIG e SAD no TÁTICO, SAE no ESTRATÉGICO',
            'SIG no operacional, SAE no tático e SAD no estratégico',
            'Todos os sistemas atendem igualmente os três níveis',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O SPT registra as transações do dia a dia; o SIG entrega relatórios de rotina a partir delas; o SAD acrescenta poder analítico e dados EXTERNOS para decisões não usuais; e o SAE resume tudo para o executivo sênior, em texto e gráficos.',
        feedbackWrong:
            'A ordem é SPT (operacional) → SIG e SAD (tático) → SAE (estratégico). Repare na dependência: o SIG se alimenta dos dados do SPT, e o SAE se alimenta de SIGs e SADs, acrescentando informação externa como leis e movimentos de concorrentes.',
    },
    {
        id: 'q3',
        exams: ['dados'],
        question: '"Contratar um executivo" e "planejar o P&D da empresa" são exemplos de qual tipo de decisão, e que apoio recebem?',
        options: [
            'Estruturadas, apoiadas por SIG e modelos estatísticos',
            'NÃO ESTRUTURADAS — sem procedimento definido, exigem julgamento; apoiadas por SAD, sistemas especialistas e redes neurais',
            'Semiestruturadas, apoiadas apenas por planilhas',
            'Operacionais, apoiadas por SPT',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Decisões NÃO ESTRUTURADAS não têm procedimento pré-definido e dependem de bom senso, avaliação e percepção — cabem aos executivos seniores. A matriz do material as associa a SAD, sistemas especialistas e redes neurais.',
        feedbackWrong:
            'São NÃO ESTRUTURADAS. A escala vai de ESTRUTURADA (procedimento conhecido e repetitivo: contas a receber, entrada de pedidos) a SEMIESTRUTURADA (parte tem procedimento, parte exige julgamento: avaliação de crédito, programação de produção) até NÃO ESTRUTURADA (sem procedimento: contratar executivo, planejar P&D).',
    },
    {
        id: 'q4',
        exams: ['dados'],
        question: 'Quais são as três etapas do ETL, na ordem, e o que acontece em cada uma?',
        options: [
            'Exportação, tratamento e leitura',
            'EXTRAÇÃO (dados saem das fontes para uma área de transição e viram formato único) → TRANSFORMAÇÃO (ajustes, qualidade e consolidação de fontes) → CARGA (estruturar e carregar na camada de apresentação)',
            'Coleta, mineração e visualização',
            'Leitura, modelagem e publicação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e guarde o dado que o material destaca: até 80% de todo o esforço de um projeto de data warehouse é consumido no ETL, sendo que só a extração leva cerca de 60% das horas de desenvolvimento.',
        feedbackWrong:
            'ETL = Extração, Transformação e Carga. Na extração os dados vão para uma área de transição e são convertidos a um formato único; na transformação vêm os ajustes de qualidade e a consolidação de fontes; na carga os dados entram fisicamente na camada de apresentação, seguindo o modelo dimensional.',
    },
    {
        id: 'q5',
        exams: ['dados'],
        question: 'Numa modelagem dimensional de vendas, como classificar "quantidade vendida", "loja" e o próprio evento de venda?',
        options: [
            'Todos são dimensões',
            'Quantidade vendida é MEDIDA (numérica), loja é DIMENSÃO (forma de visualizar) e a venda é o FATO (o processo de negócio)',
            'Quantidade vendida é dimensão e loja é medida',
            'A venda é uma medida e a quantidade é o fato',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. FATO = o processo de negócio (implementado na tabela fato); MEDIDAS = os atributos numéricos que quantificam o fato; DIMENSÕES = as formas de recortar a análise (tempo, produto, loja, cliente) e normalmente NÃO têm atributos numéricos.',
        feedbackWrong:
            'Venda é o FATO, quantidade vendida é MEDIDA (numérica) e loja é DIMENSÃO. Um atalho útil: as quatro perguntas que identificam os elementos de um fato — ONDE aconteceu, QUANDO, QUEM executou e O QUE é o objeto — todas apontam para dimensões.',
    },
    {
        id: 'q6',
        exams: ['dados'],
        question: 'Qual a diferença entre data warehouse e data mart?',
        options: [
            'São sinônimos',
            'O DW integra as informações de interesse de TODA a empresa; o DATA MART é um SUBCONJUNTO dele, direcionado a um departamento ou assunto — um DW é composto de vários data marts',
            'O data mart é maior e contém vários data warehouses',
            'O DW guarda dados operacionais e o data mart, dados históricos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O DW é a base integrada e confiável de toda a organização, montada para apoiar a decisão; o data mart é o recorte por área (vendas, RH, saúde) — mais rápido de construir e de consultar.',
        feedbackWrong:
            'O DATA MART é o subconjunto: um recorte do DW voltado a um departamento ou assunto específico. A relação de tamanho é a inversa da alternativa escolhida — um data warehouse é composto por vários data marts.',
    },
    {
        id: 'q7',
        exams: ['dados'],
        question: 'No modelo ESTRELA, como as tabelas se organizam — e o que o material diz sobre o floco de neve?',
        options: [
            'Várias tabelas fato ao redor de uma dimensão central; o floco de neve é o padrão atual',
            'Uma TABELA FATO central cercada pelas tabelas DIMENSÃO; o floco de neve normaliza as dimensões e tem "pouco uso na atualidade"',
            'Todas as tabelas se ligam em cadeia, sem centro definido',
            'Não há diferença prática entre os dois modelos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A estrela concentra as medidas na tabela fato e mantém as dimensões desnormalizadas ao redor — menos junções, consulta mais rápida. O floco de neve normaliza as dimensões em subtabelas; o material registra que hoje tem pouco uso.',
        feedbackWrong:
            'A estrela tem UMA tabela fato central cercada pelas dimensões. O floco de neve (snowflake) é a variação que normaliza as dimensões em subtabelas — e o material afirma explicitamente que tem "pouco uso na atualidade", já que a normalização encarece as consultas analíticas.',
    },
    {
        id: 'q8',
        exams: ['dados'],
        question: 'No pandas, o que significa passar inplace=True em df.rename(columns={...}, inplace=True)?',
        options: [
            'Cria uma cópia do DataFrame com as colunas renomeadas',
            'Modifica o DataFrame ORIGINAL em vez de devolver um novo — sem precisar reatribuir a variável',
            'Aplica a renomeação apenas na exibição, sem alterar os dados',
            'Ordena as colunas alfabeticamente após renomear',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sem inplace=True, o método devolve um NOVO DataFrame e o original fica intacto — erro clássico é chamar df.rename(...) sem reatribuir e estranhar que "nada mudou". A mesma lógica vale para drop, fillna, drop_duplicates e query.',
        feedbackWrong:
            'inplace=True modifica o DataFrame ORIGINAL. Sem ele, o método retorna uma cópia alterada e o df segue como estava — daí a necessidade de escrever df = df.rename(...). É exatamente a pergunta que o exercício da COVID faz aos alunos.',
    },
    {
        id: 'q9',
        exams: ['dados'],
        question: 'Você precisa contar quantos valores nulos existem em cada coluna e depois preencher os nulos de idade com o valor mais frequente. Quais comandos usar?',
        options: [
            'df.count() e df.replace(0)',
            'df.isnull().sum() para contar por coluna, e df.fillna({"Idade": df.Idade.mode()[0]}) para preencher com a MODA',
            'df.info() e df.dropna() obrigatoriamente',
            'df.describe() e df.merge()',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. isnull() marca cada célula nula e .sum() conta por coluna. Para preencher, fillna aceita moda (mode()[0]), mediana (median()) ou média (mean()) — a escolha depende da variável: moda para categóricas, mediana quando há outliers.',
        feedbackWrong:
            'A dupla é df.isnull().sum() (contagem de nulos por coluna) e df.fillna() (preenchimento). O df.info() também revela nulos, mas de forma menos direta; e dropna() apaga as linhas, que é uma decisão bem diferente de imputar um valor.',
    },
    {
        id: 'q10',
        exams: ['mineracao'],
        question: 'Numa base de 5 transações, Suporte({Cebola}) = 0,6, Suporte({Ovos}) = 0,8 e Suporte({Cebola, Ovos}) = 0,6. Qual a CONFIANÇA da regra {Cebola} → {Ovos}?',
        options: ['0,6', '0,75', '1,0 (100%)', '1,25'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto: Confiança = Suporte(A∪B) / Suporte(A) = 0,6 / 0,6 = 1,0. Ou seja, em 100% das transações com cebola também havia ovos. Mas atenção: confiança alta pode enganar quando o consequente já é popular — é para isso que existe o lift.',
        feedbackWrong:
            'Confiança(A→B) = Suporte(A∪B) / Suporte(A) = 0,6 / 0,6 = 1,0. O valor 1,25 é o LIFT desta mesma regra (confiança dividida pelo suporte de ovos: 1,0 / 0,8). Não confunda as duas fórmulas: a confiança divide pelo suporte do ANTECEDENTE; o lift, pelo do CONSEQUENTE.',
    },
    {
        id: 'q11',
        exams: ['mineracao'],
        question: 'Ainda no exemplo cebola/ovos, o LIFT é 1,25. Como interpretar esse valor?',
        options: [
            'Os itens são independentes: comprar cebola não afeta a compra de ovos',
            'Comprar cebola AUMENTA em 25% a probabilidade de comprar ovos em relação a comprar ovos isoladamente — associação positiva',
            'Comprar cebola reduz em 25% a chance de comprar ovos',
            '25% das transações contêm os dois itens',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Lift = 1,25 > 1 significa associação POSITIVA e genuína. A régua: lift > 1 associação positiva (quanto maior, mais forte); lift = 1 independência (o antecedente não muda nada); lift < 1 associação negativa (itens substitutos).',
        feedbackWrong:
            'Lift 1,25 indica associação POSITIVA: a cebola aumenta em 25% a chance dos ovos frente à compra isolada. Independência seria lift = 1; redução seria lift < 1. E "25% das transações" descreveria um suporte de 0,25, outra métrica.',
    },
    {
        id: 'q12',
        exams: ['mineracao'],
        question: 'O que diz a propriedade ANTI-MONOTÔNICA (fechamento para baixo) usada pelo Apriori?',
        options: [
            'Se um conjunto de itens é frequente, todos os seus SUPERCONJUNTOS também são frequentes',
            'Se um conjunto de itens é frequente, todos os seus SUBCONJUNTOS também são frequentes — e por isso um itemset abaixo do suporte mínimo é podado junto com todos os seus superconjuntos',
            'Todo itemset com dois itens é sempre mais frequente que os de um item',
            'A confiança de uma regra nunca é maior que seu suporte',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é essa propriedade que torna o Apriori viável. Se {pão, leite, ovos} é frequente, então {pão, leite} também é. A contrapositiva é o que economiza trabalho: se {pão, leite} NÃO atinge o suporte mínimo, nenhum superconjunto atingirá, então toda essa ramificação é podada sem ser contada.',
        feedbackWrong:
            'A propriedade vale para os SUBCONJUNTOS: se um itemset é frequente, seus subconjuntos também são. A afirmação com superconjuntos é falsa — e é justamente a contrapositiva ("se não é frequente, nenhum superconjunto será") que permite a PODA que dá eficiência ao Apriori.',
    },
    {
        id: 'q13',
        exams: ['mineracao'],
        question: 'Qual é a principal limitação do algoritmo Apriori em bases muito grandes, e qual a alternativa citada?',
        options: [
            'Só funciona com dados numéricos; a alternativa é normalizar',
            'Exige MÚLTIPLAS PASSAGENS pelo banco para contar os suportes, ficando lento; a alternativa é o ECLAT, que trabalha na vertical com interseção de tidsets',
            'Não consegue calcular o lift; a alternativa é o k-means',
            'Precisa de dados rotulados; a alternativa é a árvore de decisão',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O Apriori varre o banco a cada nível de itemset (horizontal, como busca em largura). O ECLAT inverte a estratégia: percorre na vertical (busca em profundidade) intersectando conjuntos de IDs de transação (tidsets), o que o torna mais rápido e escalável.',
        feedbackWrong:
            'A limitação é o custo das MÚLTIPLAS PASSAGENS pelo banco para contar suportes. O ECLAT resolve mudando a estratégia de busca — de horizontal (largura) para vertical (profundidade), com interseção de tidsets. Regras de associação não precisam de dados rotulados nem apenas numéricos.',
    },
    {
        id: 'q14',
        exams: ['mineracao'],
        question: 'Quais são as quatro fases do algoritmo k-means, na ordem?',
        options: [
            'Normalizar, treinar, validar e prever',
            'INICIALIZAÇÃO (escolher k centroides aleatórios) → ATRIBUIÇÃO (cada ponto ao centroide mais próximo) → MOVIMENTAÇÃO (recalcular cada centroide como a MÉDIA dos pontos) → OTIMIZAÇÃO (repetir até estabilizar)',
            'Calcular a entropia, dividir, podar e classificar',
            'Definir rótulos, treinar o modelo, medir a acurácia e ajustar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O ciclo atribuição-movimentação se repete até que nenhum ponto mude de cluster (ou até o limite de iterações). O nome "k-means" vem justamente da fase 3: o centroide é a MÉDIA dos pontos do grupo.',
        feedbackWrong:
            'As fases são inicialização, atribuição, movimentação dos centroides e otimização (repetição até estabilizar). Entropia e poda pertencem às árvores de decisão; rótulos e acurácia pertencem ao aprendizado SUPERVISIONADO — e o k-means é NÃO supervisionado.',
    },
    {
        id: 'q15',
        exams: ['mineracao'],
        question: 'No método do COTOVELO aplicado ao dataset Iris, o SSE caiu de 680,8 (k=1) para 152,4 (k=2) e 78,9 (k=3), seguindo com quedas cada vez menores. Que k escolher e por quê?',
        options: [
            'k=10, porque o SSE é o menor de todos',
            'k=3, porque é onde a curva "dobra" — a partir daí, aumentar k traz ganhos marginais decrescentes',
            'k=1, porque o SSE inicial é a referência',
            'Qualquer k serve: o SSE não orienta a escolha',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e no Iris o resultado é coerente com a realidade: três espécies, três clusters. O SSE sempre cai quando k aumenta (no limite, cada ponto vira seu próprio cluster com SSE zero), por isso não se escolhe pelo menor valor, e sim pelo ponto de inflexão.',
        feedbackWrong:
            'Escolhe-se k=3, onde a curva dobra. O erro de pegar o menor SSE (k=10) ignora que o SSE SEMPRE diminui com mais clusters — levado ao extremo, cada ponto seria um cluster perfeito e inútil. O cotovelo busca o equilíbrio entre ajuste e simplicidade.',
    },
    {
        id: 'q16',
        exams: ['mineracao'],
        question: 'Por que é essencial NORMALIZAR os dados antes de aplicar k-means com distância euclidiana?',
        options: [
            'Para acelerar o algoritmo, sem efeito no resultado',
            'Porque variáveis em escalas diferentes distorcem a distância: uma variável em milhares (renda) domina outra em dezenas (idade), e o agrupamento passa a refletir só a de maior escala',
            'Porque o k-means só aceita valores entre 0 e 1 por definição',
            'A normalização é opcional e não afeta clusters',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Na distância euclidiana, cada variável contribui pelo QUADRADO da diferença — uma diferença de 20.000 em renda esmaga uma diferença de 10 em idade. Sem normalizar, o cluster vira um mapa da variável de maior magnitude.',
        feedbackWrong:
            'O problema é de ESCALA: variáveis com magnitudes muito diferentes desequilibram a distância euclidiana, e a de maior escala domina o agrupamento. É por isso que o exercício do Mall Customers pergunta explicitamente sobre o pré-processamento antes de rodar o k-means.',
    },
    {
        id: 'q17',
        exams: ['mineracao'],
        question: 'Numa árvore de decisão, o que significa um nó com índice Gini igual a 0?',
        options: [
            'O nó não tem amostras',
            'O nó é PURO: todas as suas amostras pertencem à mesma classe',
            'O nó tem a maior impureza possível',
            'O atributo escolhido é irrelevante',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Gini = 1 − Σ(pi)²; se todas as amostras são de uma classe, essa probabilidade é 1, e 1 − 1² = 0. Nó puro não precisa de nova divisão: vira folha. O Gini é a métrica padrão do CART.',
        feedbackWrong:
            'Gini = 0 indica nó PURO — todas as amostras da mesma classe, probabilidade zero de erro ao classificar ali. A impureza MÁXIMA ocorre quando as classes estão igualmente distribuídas. O Gini mede a probabilidade de errar a classificação naquele nó.',
    },
    {
        id: 'q18',
        exams: ['mineracao'],
        question: 'Como se calcula o GANHO DE INFORMAÇÃO usado pelos algoritmos ID3 e C4.5?',
        options: [
            'Somando as entropias de todos os nós filhos',
            'Entropia do nó PAI menos a média PONDERADA das entropias dos nós filhos — escolhe-se o atributo que maximiza esse ganho',
            'Dividindo o índice Gini pela profundidade da árvore',
            'Contando quantas amostras cada folha recebeu',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A entropia (−Σ pi·log2 pi) mede a desordem; dividir por um bom atributo reduz essa desordem, e o GANHO é exatamente essa redução. A ponderação pelos tamanhos dos filhos evita premiar divisões que isolam pouquíssimas amostras.',
        feedbackWrong:
            'Ganho de informação = entropia do PAI − média ponderada das entropias dos FILHOS. O atributo escolhido para cada nó é o que maximiza esse ganho, ou seja, o que mais reduz a desordem. O ID3 e o C4.5 usam essa métrica; o CART usa o Gini.',
    },
    {
        id: 'q19',
        exams: ['mineracao'],
        question: 'Uma árvore de decisão acertou 100% no treino e 62% no teste. Qual é o diagnóstico e a correção indicada pelo material?',
        options: [
            'Underfitting; aumentar a profundidade da árvore',
            'OVERFITTING — o modelo decorou o treino e não generaliza; corrige-se com PODA (pruning) e limitando a profundidade máxima',
            'Erro de normalização; padronizar as variáveis',
            'Dados desbalanceados; trocar de algoritmo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Árvores crescem até separar tudo se ninguém as segurar — e aí memorizam ruído. As rédeas do scikit-learn: max_depth, min_samples_split e min_samples_leaf, além da poda.',
        feedbackWrong:
            'O quadro "perfeito no treino, ruim no teste" é a assinatura do OVERFITTING. Aumentar a profundidade pioraria; as correções são poda e limites de crescimento (max_depth, min_samples_leaf). Underfitting seria o inverso: desempenho ruim nos dois conjuntos.',
    },
    {
        id: 'q20',
        exams: ['mineracao'],
        question: 'Qual a diferença entre CORRELAÇÃO e REGRESSÃO?',
        options: [
            'São sinônimos com fórmulas diferentes',
            'A CORRELAÇÃO mede o GRAU de relacionamento entre duas variáveis (o r de Pearson); a REGRESSÃO estabelece a EQUAÇÃO que descreve esse relacionamento e permite PREVER',
            'A correlação prevê valores e a regressão apenas descreve',
            'A correlação só vale para dados categóricos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Primeiro a correlação diz SE e QUÃO FORTE é a relação; depois a regressão dá a reta ŷ = a + bx que permite estimar Y para um X novo. Na prática, calcula-se o r antes de ajustar a reta — sem correlação razoável, a previsão não se sustenta.',
        feedbackWrong:
            'Correlação MEDE o grau da relação (r de Pearson, entre −1 e 1); regressão MODELA a relação numa equação e permite prever. A ordem prática é essa: verificar a correlação, depois ajustar a reta.',
    },
    {
        id: 'q21',
        exams: ['mineracao'],
        question: 'Um estudo obteve r = −0,85 entre duas variáveis. Como interpretar?',
        options: [
            'Correlação positiva forte',
            'Correlação NEGATIVA e FORTE: quando uma variável aumenta, a outra diminui de forma consistente',
            'Ausência de correlação, por ser negativo',
            'Erro de cálculo: r não pode ser negativo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O SINAL indica a direção (negativo = inversamente proporcional) e o MÓDULO indica a força. Pela escala do material, 0,70–0,89 é forte — então −0,85 é uma correlação forte e inversa.',
        feedbackWrong:
            'r = −0,85 é uma correlação FORTE e NEGATIVA. O sinal dá a direção (inversa) e o módulo a intensidade — a escala do material: 0,00–0,19 bem fraca, 0,20–0,39 fraca, 0,40–0,69 moderada, 0,70–0,89 forte, 0,90–1,00 muito forte. O r varia de −1 a 1.',
    },
    {
        id: 'q22',
        exams: ['mineracao'],
        question: 'O que significa um R² de 0,82 num modelo de regressão?',
        options: [
            'O modelo acerta 82% das previsões exatamente',
            '82% da VARIAÇÃO de Y é explicada pelo modelo; os 18% restantes vêm de outros fatores',
            'Existe uma correlação de 0,82 entre as variáveis',
            'O erro médio do modelo é de 82%',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. R² é a proporção da variação total de Y explicada pela regressão: 0 significa que o modelo não explica nada e 1 é ajuste perfeito. Não é taxa de acerto nem correlação — embora, na regressão simples, R² seja o quadrado do r.',
        feedbackWrong:
            'R² = 0,82 significa que o modelo explica 82% da VARIAÇÃO de Y. Não é percentual de acertos (regressão prevê valores contínuos, raramente "exatos") nem o coeficiente de correlação — na regressão simples, aliás, R² = r².',
    },
    {
        id: 'q23',
        exams: ['mineracao'],
        question: 'No método dos MÍNIMOS QUADRADOS, o que exatamente está sendo minimizado?',
        options: [
            'O número de variáveis do modelo',
            'A soma dos QUADRADOS dos resíduos — as diferenças entre os valores observados e os previstos pela reta',
            'A inclinação da reta',
            'A distância entre a média de X e a média de Y',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: minimiza-se S = Σ(yi − ŷi)². Elevar ao quadrado impede que erros positivos e negativos se cancelem e penaliza mais os desvios grandes. Derivando S em relação a a e b e igualando a zero chega-se às fórmulas dos coeficientes.',
        feedbackWrong:
            'Minimiza-se a soma dos QUADRADOS dos RESÍDUOS (yi − ŷi). O quadrado cumpre dois papéis: evita o cancelamento entre erros de sinais opostos e penaliza mais fortemente os desvios grandes, puxando a reta para o melhor ajuste global.',
    },
    {
        id: 'q24',
        exams: ['mineracao'],
        question: 'Por que o PERCEPTRON simples não consegue aprender a função XOR?',
        options: [
            'Porque o XOR tem quatro entradas possíveis, e o perceptron aceita no máximo duas',
            'Porque o XOR NÃO É LINEARMENTE SEPARÁVEL: não existe uma única reta que separe as saídas 0 das saídas 1 — e o perceptron só traça uma reta',
            'Porque falta função de ativação sigmoide',
            'Porque a taxa de aprendizado precisa ser maior que 1',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O perceptron de uma camada define um único hiperplano (net = Σwx + w0 = 0). No XOR, os pares (0,0) e (1,1) dão 0 enquanto (0,1) e (1,0) dão 1 — dispostos em diagonais opostas, impossíveis de separar com uma reta. A saída é o MLP, com camada escondida.',
        feedbackWrong:
            'O motivo é geométrico: o XOR não é LINEARMENTE SEPARÁVEL, e o perceptron de uma camada só traça uma reta. As classes ficam em diagonais opostas do quadrado. AND e OR são separáveis por uma reta — por isso o perceptron os aprende sem problema.',
    },
    {
        id: 'q25',
        exams: ['mineracao'],
        question: 'Na regra de aprendizado do perceptron, w(k+1) = w(k) + λ·e·x, o que representam λ e e?',
        options: [
            'λ é o número de épocas e e é a entrada',
            'λ é a TAXA DE APRENDIZADO (o tamanho do passo do ajuste) e e é o ERRO — a saída desejada menos a saída obtida',
            'λ é o limiar do neurônio e e é a função de ativação',
            'λ é o peso anterior e e é o viés',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Quando o erro é zero, o peso não muda — a rede só aprende quando erra. A taxa λ controla o tamanho do ajuste: muito grande, oscila e não converge; muito pequena, aprende lentamente demais.',
        feedbackWrong:
            'λ é a TAXA DE APRENDIZADO e e é o ERRO (desejado − obtido). Note a consequência elegante: acertando, o erro é 0 e os pesos ficam intactos; errando, o ajuste é proporcional ao erro e à entrada que contribuiu para ele.',
    },
    {
        id: 'q26',
        exams: ['mineracao'],
        question: 'Quais são os três tipos de aprendizagem em redes neurais, segundo o material?',
        options: [
            'Rápida, média e lenta',
            'SUPERVISIONADA (um agente externo indica a resposta desejada), NÃO SUPERVISIONADA (auto-organização, sem resposta indicada) e por REFORÇO (um crítico externo avalia a resposta dada)',
            'Linear, não linear e híbrida',
            'Por camadas, por pesos e por épocas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A distinção-chave: na supervisionada existe o "gabarito" para cada entrada; na não supervisionada a rede organiza os padrões sozinha (é a família do k-means); no reforço não há gabarito, mas há uma avaliação da resposta — recompensa ou punição.',
        feedbackWrong:
            'São supervisionada, não supervisionada (auto-organização) e por reforço. O que as separa é a natureza do retorno: resposta desejada explícita, nenhuma resposta, ou uma avaliação crítica da resposta dada.',
    },
    {
        id: 'q27',
        exams: ['mineracao'],
        question: 'No método AHP, o que a ESCALA FUNDAMENTAL DE SAATY mede, e o que significa atribuir 7 numa comparação?',
        options: [
            'Mede a probabilidade de acerto; 7 significa 70% de chance',
            'Mede a INTENSIDADE DE IMPORTÂNCIA entre dois elementos comparados par a par; 7 = importância MUITO FORTE, com dominação demonstrada na prática',
            'Mede a quantidade de critérios; 7 significa sete critérios',
            'Mede o erro da decisão; 7 é um valor inaceitável',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A escala: 1 igual importância · 3 fraca (favorece levemente) · 5 forte · 7 muito forte (dominação demonstrada na prática) · 9 absoluta, com 2, 4, 6 e 8 como intermediários. E os RECÍPROCOS valem no sentido inverso: se A vale 7 contra B, B vale 1/7 contra A.',
        feedbackWrong:
            'A escala de Saaty mede a INTENSIDADE DE IMPORTÂNCIA nas comparações par a par, de 1 (igual) a 9 (absoluta). O 7 é "muito forte", quando a dominação de um elemento sobre o outro é demonstrada na prática. Os valores recíprocos preenchem o lado inverso da matriz.',
    },
    {
        id: 'q28',
        exams: ['mineracao'],
        question: 'No AHP, como se normaliza uma matriz de comparação par a par?',
        options: [
            'Dividindo cada valor pelo maior valor da matriz',
            'Dividindo cada valor pela SOMA DA SUA COLUNA — e depois tirando a MÉDIA de cada linha para obter os pesos',
            'Subtraindo a média de cada linha',
            'Multiplicando todos os valores pelo número de critérios',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A normalização por coluna faz cada coluna somar 1, colocando todas as comparações na mesma base; a média das linhas resulta no VETOR DE PRIORIDADES — o peso de cada alternativa (ou critério).',
        feedbackWrong:
            'Divide-se cada valor pela SOMA DA COLUNA, e a média de cada linha da matriz normalizada dá o peso do elemento. É a etapa 3 seguida da etapa 4 das oito do método — o que transforma julgamentos par a par em números comparáveis.',
    },
    {
        id: 'q29',
        exams: ['mineracao'],
        question: 'No exemplo resolvido do AHP, o Emprego 2 paga 21.000€ contra 14.000€ do Emprego 1 — mas o resultado final foi Emprego 1 com 67,9%. Como isso é possível?',
        options: [
            'Houve erro de cálculo na normalização',
            'Porque o critério de MAIOR PESO era oportunidade profissional (0,615), muito acima do salário (0,067) — e nele o Emprego 1 dominava com 0,889',
            'Porque o AHP sempre favorece a primeira alternativa listada',
            'Porque o salário não entrou no cálculo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e essa é a lição do método. Os pesos dos critérios foram: oportunidade 0,615, localização 0,207, custo de vida 0,110 e salário apenas 0,067. Como o decisor declarou que oportunidade importa muito mais que salário, o resultado seguiu essa preferência.',
        feedbackWrong:
            'O salário entrou, mas com peso baixíssimo (0,067) porque o próprio decisor o considerou menos importante que a oportunidade profissional (0,615). O AHP faz exatamente isso: torna explícito o peso de cada critério e propaga essa preferência até o ranking final.',
    },
    {
        id: 'q30',
        exams: ['mineracao'],
        question: 'No AHP, o que indica uma RAZÃO DE CONSISTÊNCIA (RC) igual a 0,15?',
        options: [
            'Consistência excelente: quanto maior o RC, melhor',
            'INCONSISTÊNCIA nos julgamentos: RC ≥ 0,10 exige revisar as comparações par a par',
            'Que existem 15 critérios no problema',
            'Que a alternativa vencedora tem 15% de vantagem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O limite é 0,10: abaixo dele os julgamentos são coerentes; acima, há contradição (por exemplo, dizer que A é melhor que B, B melhor que C, mas C melhor que A) e é preciso rever as comparações antes de confiar no ranking.',
        feedbackWrong:
            'RC = 0,15 está ACIMA do limite de 0,10 e indica julgamentos inconsistentes — as comparações devem ser revistas. O RC = [(λmax − n)/(n − 1)] / IA existe justamente para detectar contradições nas preferências declaradas.',
    },
    {
        id: 'q31',
        exams: ['dados'],
        question: 'O que é BUSINESS INTELLIGENCE, na definição do Gartner citada no material?',
        options: [
            'Um banco de dados relacional otimizado para consultas',
            'O processo de transformar DADOS em INFORMAÇÃO e, através da descoberta, transformar informação em CONHECIMENTO',
            'Um conjunto de relatórios operacionais impressos periodicamente',
            'A automação das transações do dia a dia da empresa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a definição descreve uma escada: dado bruto → informação (dado com contexto) → conhecimento (informação que orienta ação). O material complementa: BI é o conjunto de técnicas para extrair inteligência dos dados de um negócio.',
        feedbackWrong:
            'A definição do Gartner: transformar dados em informação e, pela descoberta, informação em conhecimento. Bancos e relatórios são MEIOS dentro da arquitetura de BI (fontes → ETL → data warehouse → apresentação), não a definição do conceito.',
    },
    {
        id: 'q32',
        exams: ['mineracao'],
        question: 'Qual a diferença fundamental entre agrupamento (k-means) e classificação (árvore de decisão)?',
        options: [
            'Nenhuma: ambos preveem categorias',
            'O agrupamento é NÃO SUPERVISIONADO (descobre grupos sem rótulos prévios); a classificação é SUPERVISIONADA (aprende com exemplos já rotulados)',
            'O agrupamento só funciona com dados numéricos e a classificação só com texto',
            'A classificação não precisa de dados de treino',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. No k-means ninguém diz quais são os grupos — o algoritmo os descobre pela proximidade. Na árvore de decisão, cada exemplo de treino já vem com sua classe, e o modelo aprende a reproduzir esse rótulo em casos novos.',
        feedbackWrong:
            'A diferença é a presença de RÓTULOS: agrupamento é não supervisionado (descobre a estrutura sozinho), classificação é supervisionada (aprende de exemplos rotulados). É por isso que no k-means avaliamos com SSE e silhueta, e na classificação com acurácia e F1.',
    },
    {
        id: 'q33',
        exams: ['mineracao'],
        question: 'No exercício de MNIST proposto pelo professor, além da acurácia o aluno deve avaliar as redes pelo F1-SCORE. Por quê?',
        options: [
            'Porque o F1 é sempre maior que a acurácia',
            'Porque a acurácia sozinha engana quando as classes estão DESBALANCEADAS — o F1 combina precisão e recall e revela o desempenho por classe',
            'Porque o F1 mede a velocidade de treinamento',
            'Porque a acurácia não se aplica a redes neurais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e não por acaso o mesmo enunciado pede para "verificar se os dados estão balanceados". Num conjunto em que 90% é de uma classe, um modelo preguiçoso que sempre responde essa classe tem 90% de acurácia e serve para nada; o F1 expõe isso.',
        feedbackWrong:
            'O F1-score (média harmônica de precisão e recall) protege contra o efeito do DESBALANCEAMENTO, que a acurácia isolada esconde. Por isso o enunciado do MNIST/EMNIST pede as duas métricas e ainda manda verificar se os dados estão balanceados.',
    },
    {
        id: 'q34',
        exams: ['dados'],
        question: 'Num pipeline de ETL, você encontra a coluna Sexo com os valores "F", "f" e "F " (com espaço). Qual tratamento resolve?',
        options: [
            'Apagar todas as linhas com valores divergentes',
            'Padronizar com df["Sexo"].str.strip() para remover espaços e .str.upper() para uniformizar as maiúsculas',
            'Converter a coluna para numérica com to_numeric()',
            'Preencher com fillna() usando a moda',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — é exatamente o caso do exercício da base COVID de Alagoas. Sem strip e upper, um groupby por sexo produziria três grupos para dois valores reais, distorcendo qualquer contagem.',
        feedbackWrong:
            'A dupla strip() + upper() resolve: um remove espaços, o outro uniformiza a caixa. Apagar linhas descartaria dados válidos; fillna trata AUSÊNCIA de valor, não inconsistência de formato; e converter para numérico não faz sentido numa variável categórica.',
    },
    {
        id: 'q35',
        exams: ['dados'],
        question: 'Qual das operações abaixo pertence ao OLAP, e o que ela faz?',
        options: [
            'INSERT — grava uma nova transação no sistema operacional',
            'DRILL DOWN — desce na hierarquia de uma dimensão para ver o dado em maior detalhe (por exemplo, de ano para trimestre e depois para mês)',
            'COMMIT — confirma uma transação no banco',
            'JOIN — combina duas tabelas transacionais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O OLAP é o conjunto de ferramentas de EXPLORAÇÃO do data warehouse: drill down desce ao detalhe, drill up sobe ao agregado, slice fixa uma dimensão, dice recorta um subcubo e pivot gira os eixos da análise.',
        feedbackWrong:
            'DRILL DOWN é a operação OLAP que desce na hierarquia da dimensão (ano → trimestre → mês). INSERT, COMMIT e JOIN pertencem ao mundo transacional (OLTP) — a distinção OLTP × OLAP é justamente a que separa operar o negócio de analisá-lo.',
    },
    {
        id: 'q36',
        exams: ['mineracao'],
        question: 'No projeto final com os microdados da RAIS, o dashboard precisa permitir cortes por gênero, faixa etária, UF, município, CNAE e evolução mensal. Na linguagem da modelagem dimensional, o que são esses cortes?',
        options: [
            'São as medidas do fato',
            'São DIMENSÕES — as formas de visualizar o fato (o vínculo empregatício), enquanto a quantidade de vínculos e o salário são as MEDIDAS',
            'São tabelas fato independentes',
            'São chaves estrangeiras sem papel analítico',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O fato é o vínculo de emprego; as medidas são numéricas (quantidade de vínculos, massa salarial, salário médio); e gênero, idade, geografia, atividade econômica e tempo são as dimensões pelas quais se recorta a análise — cada filtro do dashboard é uma dimensão.',
        feedbackWrong:
            'São DIMENSÕES: as perspectivas de análise. As MEDIDAS são os números que se somam ou se calculam (quantidade de vínculos, salário). Vale o teste das quatro perguntas do fato: onde (UF, município), quando (evolução mensal), quem (gênero, faixa etária) e o quê (CNAE).',
    },
    {
        id: 'q37',
        exams: ['mineracao'],
        question: 'Ao aplicar Apriori num e-commerce, você obtém a regra {Macbook} → {Cabo USB-C} com confiança 0,80 e lift 4,0. O que isso sugere sobre uma promoção do cabo para quem compra o Macbook?',
        options: [
            'Nada: confiança e lift altos são sempre irrelevantes',
            'Que a associação é forte e genuína (lift 4 significa 4× mais provável que o acaso) — mas justamente por isso o desconto pode ser desnecessário, já que quem compra o notebook tende a levar o cabo de qualquer forma',
            'Que os itens são substitutos e não devem ser vendidos juntos',
            'Que o cabo é comprado independentemente do notebook',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Boa leitura. Lift 4 confirma a associação, mas a decisão de negócio exige um passo além do número: dar desconto a quem já compraria pode só reduzir a margem. Métrica forte informa a decisão — não a substitui. É exatamente o que o exercício da turma pede para justificar.',
        feedbackWrong:
            'O lift 4,0 confirma associação forte e genuína (bem acima de 1). O ponto sutil, que o exercício pede para discutir, é a decisão de negócio: descontar um item que o cliente já levaria por conta própria pode apenas sacrificar margem. Substitutos teriam lift < 1.',
    },
    {
        id: 'q38',
        exams: ['mineracao'],
        question: 'No exercício de classificação de áudio proposto pelo professor, qual é o papel da biblioteca LIBROSA?',
        options: [
            'Treinar a árvore de decisão',
            'Fazer o PROCESSAMENTO DE SINAIS: extrair as 40 features dos arquivos .wav que depois alimentam o classificador',
            'Gerar o relatório final com as predições',
            'Rotular automaticamente os áudios de treino',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O enunciado divide o trabalho em dois processos: primeiro o processamento de sinais (Librosa extraindo features do áudio), depois a classificação (árvore de decisão ou rede neural aprendendo com essas features). Os rótulos vêm dos nomes dos arquivos.',
        feedbackWrong:
            'A Librosa faz a EXTRAÇÃO DE FEATURES do áudio — a etapa de processamento de sinais. O aprendizado fica por conta da árvore de decisão. É a lição estrutural do exercício: modelos não consomem .wav cru; alguém precisa transformar sinal em atributos numéricos.',
    },
];
