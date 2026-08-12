import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const METODOLOGIA_CIENTIFICA_GUIDE_CONTEXT = `
GUIA COMPLETO DE METODOLOGIA CIENTÍFICA — Resumo:

1. FUNDAMENTOS DO CONHECIMENTO E DA CIÊNCIA: Metodologia deriva do Latim "methodus" e estuda os melhores métodos para produção do conhecimento. Método é um conjunto de regras que serve de referência na busca de explicações. A ciência busca respostas comprováveis e representa o terceiro nível de desenvolvimento da inteligência humana, após o medo e o misticismo. Tipos de conhecimento: senso comum (superficial, acrítico, falível), filosófico (valorativo, racional, não verificável), teológico (inspiracional, infalível), científico (real, sistemático, causal) e artístico (subjetivo, intuitivo). Ciência moderna (séc. XVI): experimentação controlada, matematização. Ciência pós-moderna (séc. XX): critica a objetividade absoluta, considera o habitus.

2. LÓGICA CIENTÍFICA E PARADIGMAS: Indução vai de verdades particulares a gerais (Francis Bacon). Dedução torna explícitas verdades particulares de verdades universais. Verdade é o desocultamento do ser. Evidência é a manifestação clara das coisas. Certeza é a adesão firme a uma verdade com evidência. Paradigma positivista: variáveis independentes (causa) e dependentes (efeito), observação neutra, raciocínio dedutivo. Paradigma interpretativo: conhecimento construído pela interação sujeito-objeto. Paradigma complexo: inclui físico, biológico e social; critica ordem, separabilidade e lógicas modernas.

3. ABORDAGEM E NATUREZA DA PESQUISA: Quantitativa: coleta baseada em medições numéricas e análise estatística, hipóteses elaboradas antes dos dados, generalização. Qualitativa: dados descritivos e interativos, hipóteses antes, durante ou após; entrevistas abertas, perspectiva interpretativista. Mista: combina os dois métodos. Natureza básica: gera conhecimento sem finalidade imediata. Natureza aplicada: gera produtos/processos com finalidade prática.

4. OBJETIVOS E PROCEDIMENTOS DA PESQUISA: Exploratória: problemas com pouco estudo anterior, busca padrões e hipóteses. Descritiva: retrata ao máximo um objeto. Explicativa: identifica causas e razões. Procedimentos: bibliográfica (livros e periódicos), documental (documentos de primeira mão), experimental (genuinamente experimental, pré-experimental e quase-experimental), ex-post-facto, levantamento/survey (questionário, amostragem), estudo de campo, estudo de caso (validade de constructo, interna, externa e confiabilidade), pesquisa-ação.

5. AMOSTRAGEM: Probabilística (todos têm igual chance): sorteio, estratificada proporcional. Não probabilística: conveniência, mais similares ou diferentes, quotas, bola de neve, casos críticos e casos típicos. População é o conjunto completo de elementos com parâmetro comum; amostra é o subconjunto.

6. TÉCNICAS DE ESTUDO E LEITURA CIENTÍFICA: Esquema: representação gráfica com palavras-chave na sequência do texto. Fichamento: indicação bibliográfica, transcrição, apreciação, esquema e resumos. Resumo: reduz o texto a tópicos principais via apagamento, generalização e construção. Resenha: resume e avalia criticamente. Sublinhar palavras ou frases de maior sentido.

7. PROJETO DE PESQUISA: É o planejamento das atividades da pesquisa. Em SI: foco em problemas do mundo real, interdisciplinar ou transdisciplinar. O pesquisador deve conhecer: objeto, problema, hipóteses, recursos teóricos, metodologia, recursos instrumentais e cronograma. Introdução deve conter: tema, problema, hipótese(s), objetivo(s) e justificativa(s). Problema é a questão não resolvida. Objetivo geral: único verbo no infinitivo. Objetivos específicos: descritivos (identificar, descrever, caracterizar) ou explicativos (comparar, relacionar, analisar). Justificativa: relevância social e científica. Hipótese: proposição testável, pré-solução. Estado da arte: conhecimento sobre o tópico já em operação. 5W2H como ferramenta de planejamento.

8. ESTRUTURA DO PROJETO E NORMAS ABNT: Revisão de literatura expõe ideias já discutidas. Metodologia detalha tipo de pesquisa, estratégia, instrumentos, cronograma, tabulação. Cronograma prevê tempo de cada atividade. Referências documentam fontes consultadas. Anexos são de terceiros; apêndices são do autor. Normas ABNT: papel A4, margens (E:3cm, S:3cm, D:2cm, I:2cm), fonte 12 Times New Roman ou Arial, espaçamento 1,5, citações longas com recuo 4cm em fonte 10. Paginação: algarismos arábicos a partir da introdução no canto superior direito.

9. CITAÇÕES E REFERÊNCIAS ABNT: Citação indireta (paráfrase): indica sobrenome do autor em maiúsculas e ano entre parênteses. Citação direta: até 3 linhas entre aspas no texto; mais de 3 linhas com recuo de 4cm, fonte 10 e aspas. Citação de citação: usa "apud". Lista de referências em ordem alfabética, espaçamento simples, separadas por linha em branco. Formatos específicos: livro, artigo de periódico, anais de evento (impresso e eletrônico), monografia/dissertação/tese.

10. COLETA E ANÁLISE DE DADOS: Instrumentos estruturados, semiestruturados e não-estruturados. Questionários: fechadas (dicotômicas, múltipla escolha, Likert), abertas ou mistas. Observação, entrevista, grupo focal (3-12 pessoas, 1-2h), análise de documentos (fontes primárias e secundárias). Análise quantitativa: variáveis nominais, ordinais e escalares; tendência central (média, mediana), dispersão (desvio padrão), correlação, teste de comparação de médias; ferramentas Excel e SPSS. Análise qualitativa: transcrição, diário de pesquisa, codificação, fatos/padrões/comportamentos/insights, SADQ. Análise de conteúdo: pré-exploração, seleção de unidades de análise, categorização.

DIVISÃO POR AVALIAÇÕES:
- PROVA 1: Fundamentos do conhecimento, ciência, tipos de conhecimento, ciência moderna e pós-moderna, lógica científica, indução e dedução, paradigmas, abordagem e natureza da pesquisa, objetivos da pesquisa, procedimentos da pesquisa, amostragem e técnicas de estudo (esquema, fichamento, resumo, resenha).
- PROVA 2: Projeto de pesquisa, estrutura do projeto (introdução, problema, objetivos, justificativa, hipótese, revisão de literatura, metodologia, cronograma), normas ABNT (formatação, citações, referências), instrumentos e coleta de dados, análise de dados quantitativos e qualitativos.
`;

export const METODOLOGIA_CIENTIFICA_TOPICS: QuizTopicOption[] = [
    {
        value: 'prova1',
        label: 'Prova 1: Fundamentos, Ciência e Pesquisa',
        prompt: 'Conteúdo da Prova 1: metodologia e método, ciência e tipos de conhecimento (senso comum, filosófico, teológico, científico, artístico), ciência moderna e pós-moderna, indução e dedução, verdade, evidência e certeza, paradigmas (positivista, interpretativo e complexo), abordagem da pesquisa (quantitativa, qualitativa e mista), natureza da pesquisa (básica e aplicada), objetivos da pesquisa (exploratória, descritiva, explicativa), procedimentos (bibliográfica, documental, experimental, ex-post-facto, survey, estudo de caso, pesquisa-ação), amostragem probabilística e não probabilística, esquema, fichamento, resumo e resenha.',
    },
    {
        value: 'prova2',
        label: 'Prova 2: Projeto de Pesquisa, ABNT e Análise',
        prompt: 'Conteúdo da Prova 2: projeto de pesquisa e seus elementos (problema, objetivo geral e específico, justificativa, hipótese, revisão de literatura, metodologia, cronograma, orçamento, referências, anexos e apêndices), 5W2H, estado da arte, desenho da pesquisa, normas ABNT de formatação (margens, fontes, paginação, siglas, ilustrações, resumo), citações (indireta, direta, citação de citação), formatos de referências (livro, artigo, anais, dissertação), instrumentos de coleta de dados (estruturado, semiestruturado, não estruturado, questionário, entrevista, grupo focal, observação, análise de documentos), análise de dados quantitativos (variáveis, tendência central, dispersão, correlação, SPSS) e qualitativos (transcrição, codificação, análise de conteúdo, SADQ).',
    },
    { value: 'conhecimento', label: 'Tipos de Conhecimento' },
    { value: 'ciencia', label: 'Ciência e Método' },
    { value: 'paradigmas', label: 'Paradigmas de Pesquisa' },
    { value: 'abordagem', label: 'Abordagem e Natureza da Pesquisa' },
    { value: 'procedimentos', label: 'Objetivos e Procedimentos' },
    { value: 'amostragem', label: 'Amostragem' },
    { value: 'tecnicas-estudo', label: 'Técnicas de Estudo' },
    { value: 'projeto', label: 'Projeto de Pesquisa' },
    { value: 'abnt', label: 'Normas ABNT' },
    { value: 'citacoes', label: 'Citações e Referências' },
    { value: 'coleta-analise', label: 'Coleta e Análise de Dados' },
];

export const METODOLOGIA_CIENTIFICA_SECTIONS = [
    { id: 'intro', title: 'Introdução à Metodologia', shortTitle: 'Introdução' },
    { id: 'conhecimento', title: 'Tipos de Conhecimento', shortTitle: 'Conhecimento', exam: 'AV1' },
    { id: 'ciencia', title: 'Ciência e Método', shortTitle: 'Ciência', exam: 'AV1' },
    { id: 'paradigmas', title: 'Paradigmas de Pesquisa', shortTitle: 'Paradigmas', exam: 'AV1' },
    { id: 'abordagem', title: 'Abordagem e Natureza', shortTitle: 'Abordagem', exam: 'AV1' },
    { id: 'procedimentos', title: 'Objetivos e Procedimentos', shortTitle: 'Procedimentos', exam: 'AV1' },
    { id: 'amostragem', title: 'Amostragem', shortTitle: 'Amostragem', exam: 'AV1' },
    { id: 'tecnicas-estudo', title: 'Técnicas de Estudo', shortTitle: 'Técnicas', exam: 'AV1' },
    { id: 'projeto', title: 'Projeto de Pesquisa', shortTitle: 'Projeto', exam: 'AV2' },
    { id: 'abnt', title: 'Normas ABNT', shortTitle: 'ABNT', exam: 'AV2' },
    { id: 'citacoes', title: 'Citações e Referências', shortTitle: 'Citações', exam: 'AV2' },
    { id: 'coleta-analise', title: 'Coleta e Análise de Dados', shortTitle: 'Dados', exam: 'AV2' },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_BASE: QuizQuestionData[] = [
    {
        id: 'q1',
        question: '1. Qual é a origem etimológica de "metodologia"?',
        options: [
            'Do grego "logos", que significa discurso',
            'Do árabe "method", que significa técnica de observação',
            'Do Latim "methodus", que significa caminho ou via para realizar algo',
            'Do grego "metron", que significa medida exata',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Metodologia deriva do Latim "methodus", significando caminho ou via.',
        feedbackWrong: 'Metodologia deriva do Latim "methodus", que significa caminho ou via para realizar algo.',
    },
    {
        id: 'q2',
        question: '2. Quais são os três níveis de desenvolvimento da inteligência humana apresentados no material?',
        options: [
            'Senso comum, filosofia e ciência',
            'Intuição, razão e experiência',
            'Medo, misticismo e ciência',
            'Mito, ideologia e método',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Isso mesmo. Os três níveis são medo, misticismo e ciência.',
        feedbackWrong: 'Os três níveis são medo, misticismo e ciência.',
    },
    {
        id: 'q3',
        question: '3. O conhecimento do senso comum é melhor caracterizado como:',
        options: [
            'Inspiracional, não verificável e sistemático',
            'Valorativo, racional e infalível',
            'Sistemático, verificável e exato',
            'Superficial, acrítico, falível e transmitido entre gerações',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. O senso comum é superficial, acrítico, falível e transmitido geracionalmente.',
        feedbackWrong: 'O senso comum é superficial, sensitivo, assistemático, acrítico, falível e inexato.',
    },
    {
        id: 'q4',
        question: '4. O conhecimento filosófico difere do científico porque é:',
        options: [
            'Inspiracional e revelado pelo sobrenatural',
            'Superficial e transmitido de geração em geração',
            'Valorativo, racional, sistemático, mas não verificável',
            'Verificável, exato e baseado em experimentos',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O filosófico é valorativo e racional, mas não verificável empiricamente.',
        feedbackWrong: 'O conhecimento filosófico é valorativo, racional, sistemático, não verificável e infalível.',
    },
    {
        id: 'q5',
        question: '5. A principal diferença entre ciência moderna (séc. XVI) e ciência pós-moderna (séc. XX) está em que:',
        options: [
            'A moderna era qualitativa; a pós-moderna é quantitativa',
            'A moderna surgiu no séc. XX; a pós-moderna no séc. XVI',
            'A moderna usava experimentos; a pós-moderna eliminou qualquer experimento',
            'A moderna buscava objetividade e matematização; a pós-moderna critica a objetividade e considera o habitus',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Exato. A ciência moderna valorizava objetividade e matematização; a pós-moderna questiona isso.',
        feedbackWrong: 'A ciência moderna (séc. XVI) enfatizava objetividade e matematização; a pós-moderna (séc. XX) critica a objetividade e considera o habitus do pesquisador.',
    },
    {
        id: 'q6',
        question: '6. No raciocínio indutivo:',
        options: [
            'Verdades universais levam a verdades particulares',
            'Hipóteses são sempre geradas após a coleta de dados',
            'O pesquisador parte do desconhecido para o conhecido',
            'De verdades particulares se concluem verdades gerais',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. A indução vai do particular ao geral, associada a Francis Bacon.',
        feedbackWrong: 'Indução: de verdades particulares se concluem verdades gerais (Francis Bacon).',
    },
    {
        id: 'q7',
        question: '7. O paradigma positivista caracteriza-se por:',
        options: [
            'Observação neutra, relação causa-efeito entre variáveis e racionalidade científica',
            'Ênfase nas percepções subjetivas dos sujeitos',
            'Conhecimento construído apenas por interação social',
            'Crítica à ordem e à separabilidade da ciência moderna',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. O positivismo valoriza observação neutra, variáveis e racionalidade.',
        feedbackWrong: 'Paradigma positivista: observação neutra, variável independente (causa) e dependente (efeito).',
    },
    {
        id: 'q8',
        question: '8. No paradigma interpretativo, o conhecimento é gerado principalmente:',
        options: [
            'Pela dedução a partir de verdades universais',
            'Pela interação entre o que o sujeito observa e o sentido que atribui',
            'Pela aplicação rigorosa de métodos estatísticos',
            'Por observação neutra e desligada do fenômeno',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. O paradigma interpretativo foca na interação sujeito-objeto e no significado.',
        feedbackWrong: 'No paradigma interpretativo, o conhecimento deriva da interação entre o sujeito e o sentido que ele atribui ao observado.',
    },
    {
        id: 'q9',
        question: '9. A abordagem quantitativa de pesquisa é caracterizada por:',
        options: [
            'Medições numéricas, hipóteses elaboradas antes dos dados e generalização',
            'Combinação de métodos qualitativos e quantitativos',
            'Dados descritivos e interativos, hipóteses geradas durante a coleta',
            'Entrevistas abertas e perspectiva interpretativista',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. A abordagem quantitativa usa números, hipóteses prévias e raciocínio dedutivo.',
        feedbackWrong: 'Quantitativo: medições numéricas, hipóteses antes da coleta, análise estatística e generalização.',
    },
    {
        id: 'q10',
        question: '10. Uma pesquisa de natureza aplicada tem como objetivo principal:',
        options: [
            'Somente descrever fenômenos sem propor intervenções',
            'Construir ou ampliar novos conhecimentos sem finalidade imediata',
            'Usar exclusivamente abordagem qualitativa',
            'Gerar produtos, processos ou soluções com finalidade prática',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. A pesquisa aplicada busca resultados práticos imediatos.',
        feedbackWrong: 'Pesquisa aplicada: gera produtos ou processos com finalidades práticas.',
    },
    {
        id: 'q11',
        question: '11. A pesquisa exploratória é usada principalmente quando:',
        options: [
            'Há pouco ou nenhum estudo anterior sobre o problema',
            'O objetivo é retratar ao máximo as características de uma população',
            'A meta é encontrar as causas e razões de um fenômeno',
            'O objeto já foi amplamente estudado e se quer confirmar resultados',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Exato. A exploratória é indicada para problemas com escasso estudo anterior.',
        feedbackWrong: 'Exploratória: problemas com pouco ou nenhum estudo anterior, busca de padrões e hipóteses.',
    },
    {
        id: 'q12',
        question: '12. A pesquisa documental difere da bibliográfica porque:',
        options: [
            'A documental usa documentos de primeira mão ainda sem tratamento analítico',
            'A documental se baseia exclusivamente em livros científicos',
            'A bibliográfica usa apenas fontes primárias',
            'A bibliográfica usa documentos de primeira mão sem tratamento analítico',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. A documental usa documentos de primeira mão, ainda sem análise prévia.',
        feedbackWrong: 'Pesquisa documental: usa documentos de "primeira mão" sem tratamento analítico anterior.',
    },
    {
        id: 'q13',
        question: '13. O estudo de caso é melhor descrito como:',
        options: [
            'Pesquisa experimental com grupo de controle obrigatório',
            'Levantamento de dados numéricos com análise estatística',
            'Interrogação direta de grandes populações por questionário',
            'Estudo aprofundado de um ou poucos objetos com observação e entrevistas',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Estudo de caso foca em análise aprofundada de poucas unidades.',
        feedbackWrong: 'Estudo de caso: aprofundado e exaustivo, observação direta e entrevistas, recomenda casos múltiplos.',
    },
    {
        id: 'q14',
        question: '14. Na amostragem probabilística, a principal característica é:',
        options: [
            'Todos os elementos da população têm a mesma chance de serem escolhidos',
            'A população não precisa ser definida previamente',
            'A seleção é feita por bola de neve ou casos típicos',
            'Os participantes são escolhidos por conveniência ou critério do pesquisador',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Exato. Na probabilística, cada elemento da população tem igual chance.',
        feedbackWrong: 'Amostragem probabilística: todos os elementos da população têm a mesma chance de seleção.',
    },
    {
        id: 'q15',
        question: '15. A técnica de amostragem "bola de neve" consiste em:',
        options: [
            'Selecionar elementos proporcionalmente a um critério',
            'Escolher casos considerados essenciais ou chave',
            'Participantes iniciais indicando novos participantes',
            'Selecionar elementos por sorteio aleatório simples',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Na bola de neve, cada participante indica os próximos.',
        feedbackWrong: 'Bola de neve: participantes iniciais indicam novos participantes para a amostra.',
    },
    {
        id: 'q16',
        question: '16. O fichamento como técnica de estudo inclui:',
        options: [
            'Somente palavras-chave organizadas na sequência do texto',
            'Resumo crítico com avaliação do texto',
            'Apenas transcrições literais de trechos do texto',
            'Indicação bibliográfica, transcrição, apreciação, esquema e resumos',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. O fichamento reúne indicação bibliográfica, transcrição, apreciação, esquema e resumos.',
        feedbackWrong: 'Fichamento inclui: indicação bibliográfica, transcrição/citação, apreciação, esquema e resumos.',
    },
    {
        id: 'q17',
        question: '17. A resenha difere do resumo porque:',
        options: [
            'A resenha resume e avalia criticamente; o resumo apenas reduz',
            'A resenha é sempre mais curta que o resumo',
            'O resumo inclui avaliação crítica; a resenha apenas reduz o texto',
            'O resumo usa aspas; a resenha usa paráfrase',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. A resenha combina informação e opinião crítica; o resumo apenas reduz.',
        feedbackWrong: 'Resenha: resume o objeto e faz uma avaliação crítica. Resumo: reduz a tópicos principais, sem avaliação.',
    },
    {
        id: 'q18',
        question: '18. O problema da pesquisa é definido como:',
        options: [
            'O conjunto de ferramentas usadas na coleta de dados',
            'A questão não resolvida que será objeto de estudo',
            'A previsão de tempo para cada atividade',
            'A estimativa de gastos com a pesquisa',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. O problema é a questão não resolvida que orienta a pesquisa.',
        feedbackWrong: 'Problema da pesquisa: questão não resolvida que será o objeto de estudo.',
    },
    {
        id: 'q19',
        question: '19. A hipótese em um projeto de pesquisa é:',
        options: [
            'A lista de referências consultadas',
            'Uma proposição testável que pode vir a ser a solução do problema',
            'A conclusão definitiva do trabalho',
            'O plano de gastos da pesquisa',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. A hipótese é a pré-solução testável que a pesquisa confirmará ou negará.',
        feedbackWrong: 'Hipótese: proposição testável, pré-solução, confirmada ou negada pela pesquisa.',
    },
    {
        id: 'q20',
        question: '20. Objetivos específicos descritivos usam verbos como:',
        options: [
            'Deduzir, induzir, comprovar',
            'Criar, inovar, transformar',
            'Comparar, relacionar, analisar',
            'Identificar, descrever, sistematizar, caracterizar, levantar',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Objetivos descritivos usam: identificar, descrever, sistematizar, caracterizar.',
        feedbackWrong: 'Objetivos descritivos: identificar, descrever, sistematizar, caracterizar, indicar, levantar.',
    },
    {
        id: 'q21',
        question: '21. A justificativa de uma pesquisa aborda principalmente:',
        options: [
            'O cronograma detalhado das atividades',
            'Os instrumentos de coleta e as estratégias de análise',
            'A relevância social e científica, contribuições e originalidade do trabalho',
            'A lista de todos os objetivos gerais e específicos',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A justificativa apresenta relevância social, científica e originalidade.',
        feedbackWrong: 'Justificativa: relevância social, relevância científica, contribuições e originalidade.',
    },
    {
        id: 'q22',
        question: '22. Qual é a diferença entre anexos e apêndices em um trabalho científico?',
        options: [
            'Ambos são produzidos pelo autor, mas em seções diferentes',
            'Não há diferença formal entre eles',
            'Apêndices são do autor; anexos são produzidos por terceiros',
            'Anexos são do autor; apêndices são produzidos por terceiros',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Apêndices são do autor; anexos são de terceiros.',
        feedbackWrong: 'Apêndices são produzidos pelo próprio autor; anexos são produzidos por terceiros.',
    },
    {
        id: 'q23',
        question: '23. Segundo as normas ABNT, as margens de um trabalho acadêmico devem ser:',
        options: [
            'Todas iguais a 3cm',
            'Esquerda e superior: 3cm; direita e inferior: 2cm',
            'Todas iguais a 2,5cm',
            'Esquerda: 2cm; superior: 3cm; direita: 3cm; inferior: 2cm',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Esquerda e superior: 3cm; direita e inferior: 2cm.',
        feedbackWrong: 'ABNT: esquerda 3cm, superior 3cm, direita 2cm, inferior 2cm.',
    },
    {
        id: 'q24',
        question: '24. Pela ABNT, a paginação de um trabalho deve:',
        options: [
            'Começar a aparecer a partir da introdução, em algarismos arábicos no canto superior direito',
            'Usar numeração no rodapé centralizada em todo o documento',
            'Iniciar na capa com algarismos romanos',
            'Iniciar na folha de rosto em fonte 12',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. A paginação aparece a partir da introdução, em arábicos, canto superior direito.',
        feedbackWrong: 'Paginação ABNT: algarismos arábicos, canto superior direito, a partir da introdução, fonte 10.',
    },
    {
        id: 'q25',
        question: '25. Uma citação direta com mais de três linhas deve ser formatada com:',
        options: [
            'Aspas no texto, fonte 10 e sem recuo',
            'Recuo de 2cm, fonte 12 e itálico',
            'Recuo de 4cm, fonte 10 e aspas',
            'Aspas no texto, fonte 12 e espaçamento 1,5',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Citações diretas longas: recuo de 4cm, fonte 10 e aspas.',
        feedbackWrong: 'Citação direta com mais de 3 linhas: recuo de 4cm, fonte 10, com aspas.',
    },
    {
        id: 'q26',
        question: '26. A citação de citação (apud) é usada quando:',
        options: [
            'A referência é de um periódico eletrônico',
            'O trecho tem menos de três linhas',
            'O autor original é consultado diretamente',
            'Não se tem acesso à fonte original e se cita por meio de outra obra',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Apud é usado quando não se tem acesso à obra original.',
        feedbackWrong: 'Citação de citação (apud): usada quando não há acesso à fonte original; a obra consultada entra nas referências.',
    },
    {
        id: 'q27',
        question: '27. Como deve ser organizada a lista de referências segundo a ABNT?',
        options: [
            'Por tipo de documento (livro, artigo, site), sem separação',
            'Em ordem alfabética pelo último sobrenome, espaçamento simples, separadas por linha em branco',
            'Por ordem cronológica de publicação, espaçamento 1,5',
            'Em ordem de aparecimento no texto, numeradas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A lista de referências segue ordem alfabética, espaçamento simples e linha em branco entre referências.',
        feedbackWrong: 'Lista de referências ABNT: ordem alfabética, espaçamento simples, separadas por linha em branco.',
    },
    {
        id: 'q28',
        question: '28. O grupo focal como instrumento de coleta de dados deve ter:',
        options: [
            'Apenas 2 pessoas em formato de entrevista individual',
            'Número ilimitado de participantes com duração livre',
            'De 3 a 12 pessoas com características similares e duração de 1 a 2 horas',
            'No mínimo 15 pessoas e duração de 3 a 4 horas',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Grupo focal: 3 a 12 pessoas similares, 1 a 2 horas.',
        feedbackWrong: 'Grupo focal: 3 a 12 pessoas com características similares, duração de 1 a 2 horas.',
    },
    {
        id: 'q29',
        question: '29. As variáveis ordinais se diferenciam das nominais porque:',
        options: [
            'São sempre expressas por valores numéricos contínuos',
            'Não permitem análise estatística de nenhuma forma',
            'São usadas exclusivamente em análises qualitativas',
            'Além de indicar características, podem ser ordenadas',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Variáveis ordinais indicam características e permitem ordenação.',
        feedbackWrong: 'Ordinais: além de indicar características, podem ser ordenadas entre si.',
    },
    {
        id: 'q30',
        question: '30. Na análise de dados qualitativos, a codificação é:',
        options: [
            'A transcrição literal das falas dos entrevistados',
            'A comparação de médias entre grupos distintos',
            'O processo de organizar o material em blocos antes de atribuir significado',
            'A aplicação de testes estatísticos aos dados coletados',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A codificação organiza o material em blocos ou segmentos antes da atribuição de significado.',
        feedbackWrong: 'Codificação: organização do material em blocos ou segmentos de texto antes de atribuir significado.',
    },
];

export const QUIZ_DATA: QuizQuestionData[] = QUIZ_DATA_BASE.map((question, index) => ({
    ...question,
    exam: index < 17 ? 'prova1' as const : 'prova2' as const,
}));
