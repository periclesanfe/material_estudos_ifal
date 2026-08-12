import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
    SectionHeader,
    ConceptGrid,
    PanelList,
    StatStrip,
    ComparisonTable,
    type ConceptItem,
    type PanelItem,
    type StatItem,
    type ComparisonRow,
} from '../../components/sections';
import { METODOLOGIA_CIENTIFICA_GUIDE_CONTEXT, METODOLOGIA_CIENTIFICA_TOPICS, QUIZ_DATA } from './data';

interface MetodologiaCientificaSectionsProps {
    activeSection: string;
}

const revisionOverview: ConceptItem[] = [
    {
        title: 'Prova 1',
        description:
            'Abrange metodologia, conceito de ciência, níveis de desenvolvimento da inteligência, tipos de conhecimento, paradigmas, natureza, abordagem, objetivos, procedimentos, amostragem e técnicas de estudo.',
        accent: 'accent',
    },
    {
        title: 'Prova 2',
        description:
            'Aprofunda projeto de pesquisa, problema, hipótese, objetivos, justificativa, revisão de literatura, metodologia, cronograma, ABNT, citações, referências, coleta e análise de dados.',
        accent: 'accent3',
    },
    {
        title: 'Visão aplicada',
        description:
            'A disciplina mostra como sair de um interesse amplo e chegar a uma pesquisa delimitada, viável, eticamente conduzida e formalmente organizada.',
        accent: 'accent5',
    },
];

const methodologyFoundations: PanelItem[] = [
    {
        title: 'Metodologia',
        description:
            'Deriva de methodus, entendido como caminho. É o campo que estuda os melhores métodos praticados em determinada área para produzir conhecimento.',
    },
    {
        title: 'Método',
        description:
            'É o conjunto de regras, critérios e procedimentos que orienta a busca de explicações, previsões e respostas para problemas específicos.',
    },
    {
        title: 'Função da metodologia científica',
        description:
            'Ela organiza o raciocínio investigativo, reduz improviso, melhora a coerência do trabalho e ajuda a sustentar conclusões com maior rigor.',
    },
    {
        title: 'Pesquisa como processo',
        description:
            'Pesquisar não é apenas coletar informações: é formular problema, selecionar método, produzir dados, analisá-los e justificar resultados.',
    },
];

const intelligenceLevels: PanelItem[] = [
    {
        title: 'Medo',
        description:
            'Representa o estágio em que os fenômenos naturais eram percebidos com temor, sem explicações sistemáticas ou verificáveis.',
    },
    {
        title: 'Misticismo',
        description:
            'Busca explicar os fenômenos por pensamento mágico, crenças e superstições, sem depender de comprovação metódica.',
    },
    {
        title: 'Ciência',
        description:
            'Corresponde à busca de respostas por caminhos controláveis, críticos e passíveis de comprovação.',
    },
];

const knowledgeTypes: PanelItem[] = [
    {
        title: 'Conhecimento empírico ou senso comum',
        description:
            'É adquirido no cotidiano, pela experiência vivida. Tende a ser assistemático, acrítico, superficial, falível e transmitido socialmente sem maior problematização.',
    },
    {
        title: 'Conhecimento filosófico',
        description:
            'Baseia-se na reflexão crítica e racional. Busca compreender o sentido das coisas e da existência por meio da argumentação e do pensamento.',
    },
    {
        title: 'Conhecimento teológico',
        description:
            'Relaciona-se à fé, à revelação e a doutrinas sagradas. Não procura construir uma verdade nova, mas compreender uma verdade já aceita.',
    },
    {
        title: 'Conhecimento científico',
        description:
            'É sistemático, racional, metódico e orientado à verificação. Procura compreender não apenas o fenômeno, mas também suas causas, relações e regularidades.',
    },
];

const otherKnowledgeForms: ConceptItem[] = [
    {
        title: 'Racionalismo',
        description:
            'Sustenta que a razão é o principal fundamento do conhecimento, valorizando dedução, lógica e coerência intelectual.',
        accent: 'accent',
    },
    {
        title: 'Empirismo',
        description:
            'Defende que a experiência e os sentidos, apoiados quando necessário por instrumentos, são essenciais para conhecer.',
        accent: 'accent2',
    },
    {
        title: 'Conhecimento artístico',
        description:
            'Tem caráter subjetivo, intuitivo, aberto e expressivo, sem a obrigação de objetividade ou verificação científica.',
        accent: 'accent3',
    },
    {
        title: 'Ideologia',
        description:
            'Corpo sistemático de representações e normas que orienta formas de conhecer e agir, influenciando interpretações da realidade.',
        accent: 'accent5',
    },
];

const scienceConcepts: ConceptItem[] = [
    {
        title: 'Ciência como conhecimento organizado',
        description:
            'A ciência pode ser entendida como sistematização de conhecimentos e como conjunto de proposições logicamente correlacionadas sobre fenômenos estudados.',
        accent: 'accent',
    },
    {
        title: 'Experiência controlada',
        description:
            'Na ciência moderna, observar não basta: a experiência precisa ser controlada, sistemática e intelectualmente refinada.',
        accent: 'accent2',
    },
    {
        title: 'Matematização',
        description:
            'A descrição quantitativa dos fenômenos tornou-se marca importante da ciência moderna em várias áreas.',
        accent: 'accent3',
    },
    {
        title: 'Revisão constante',
        description:
            'O conhecimento científico não é estático; ele se renova, se consolida e também pode ser corrigido.',
        accent: 'accent5',
    },
];

const modernVsPostmodernScience: ComparisonRow[] = [
    {
        criterion: 'Ciência moderna',
        left: 'Ênfase em controle, objetividade, experimentação e matematização.',
        right: 'Busca leis, regularidades e explicações mais universais.',
    },
    {
        criterion: 'Ciência pós-moderna',
        left: 'Critica o mito da neutralidade absoluta e reconhece processos históricos, sociais e institucionais da produção científica.',
        right: 'Considera experiências, trajetórias e contextos do pesquisador e dos sujeitos.',
    },
];

const truthConcepts: PanelItem[] = [
    {
        title: 'Verdade',
        description:
            'Relaciona-se ao desvelamento ou manifestação do ser, ao encontro com aquilo que se revela como realidade.',
    },
    {
        title: 'Evidência',
        description:
            'É a manifestação clara e transparente da natureza das coisas, permitindo reconhecimento mais firme do que está sendo afirmado.',
    },
    {
        title: 'Certeza',
        description:
            'É a adesão firme a uma verdade, sem temor de engano, normalmente apoiada em evidência suficiente.',
    },
];

const reasoningTypes: PanelItem[] = [
    {
        title: 'Indução',
        description:
            'Parte de casos ou verdades particulares para construir generalizações. Está associada, por exemplo, ao pensamento de Francis Bacon.',
    },
    {
        title: 'Dedução',
        description:
            'Parte de princípios ou verdades mais gerais para explicitar verdades particulares, conduzindo o pesquisador do conhecido ao desconhecido.',
    },
    {
        title: 'Leis',
        description:
            'São formuladas quando a ciência identifica regularidade constante e uniforme entre fenômenos.',
    },
    {
        title: 'Teoria',
        description:
            'É um conjunto de construtos, conceitos, definições e proposições inter-relacionadas que explica um domínio de fenômenos.',
    },
];

const paradigmConcepts: ConceptItem[] = [
    {
        title: 'Paradigma',
        description:
            'É um conjunto de crenças, valores, pressupostos e técnicas compartilhadas por uma comunidade científica.',
        accent: 'accent',
    },
    {
        title: 'Ontologia',
        description:
            'Trata da natureza do ser, da existência e da realidade estudada.',
        accent: 'accent2',
    },
    {
        title: 'Epistemologia',
        description:
            'Trata de como o conhecimento é produzido, justificado e reconhecido como válido.',
        accent: 'accent3',
    },
    {
        title: 'Escolha metodológica',
        description:
            'O método não é neutro: ele se relaciona à visão que o pesquisador tem da realidade investigada.',
        accent: 'accent5',
    },
];

const paradigmsDetailed: PanelItem[] = [
    {
        title: 'Paradigma positivista',
        description:
            'Valoriza observação neutra, objetividade, experimentação, mensuração e análise da relação entre variáveis, distinguindo causa e efeito.',
    },
    {
        title: 'Paradigma interpretativo',
        description:
            'Entende que a realidade é acessada por construções sociais, sentidos e percepções atribuídas pelos sujeitos.',
    },
    {
        title: 'Paradigma complexo',
        description:
            'Critica explicações excessivamente lineares e separadas, reconhecendo sistemas com comportamentos dinâmicos, circulares e recursivos.',
    },
    {
        title: 'Complexidade estrutural',
        description:
            'Busca compreender os fatores que compõem o sistema, sua organização e os elementos que o estruturam.',
    },
    {
        title: 'Complexidade dinâmica',
        description:
            'Foca os comportamentos exibidos por sistemas complexos, suas mudanças, interações e efeitos emergentes.',
    },
];

const approachPanels: PanelItem[] = [
    {
        title: 'Quanto à natureza',
        description:
            'A pesquisa pode ser básica, quando amplia conhecimentos e teorias, ou aplicada, quando visa solução prática para problemas concretos.',
    },
    {
        title: 'Quanto à abordagem',
        description:
            'Pode ser qualitativa, quantitativa ou mista, de acordo com o tipo de dado, o modo de coleta e a lógica de análise.',
    },
    {
        title: 'Quanto à coerência do projeto',
        description:
            'A abordagem precisa dialogar com o problema, com os objetivos e com o tipo de resposta que o pesquisador pretende construir.',
    },
];

const qualitativeVsQuantitative: StatItem[] = [
    { label: 'Qualitativa', value: 'sentidos, contextos e interpretações', accent: 'text-accent' },
    { label: 'Quantitativa', value: 'medição, teste e estatística', accent: 'text-accent3' },
    { label: 'Mista', value: 'integra profundidade e mensuração', accent: 'text-accent5' },
];

const approachDetails: ComparisonRow[] = [
    {
        criterion: 'Qualitativa',
        left: 'Trabalha com dados descritivos, contato direto, entrevistas abertas, observação e interpretação.',
        right: 'Perguntas e hipóteses podem ser refinadas antes, durante e depois da coleta.',
    },
    {
        criterion: 'Quantitativa',
        left: 'Coleta dados para testar hipóteses previamente formuladas com uso de medições e números.',
        right: 'Busca maior objetividade, estruturação e possibilidade de generalização.',
    },
    {
        criterion: 'Mista',
        left: 'Usa um método para elaborar, ampliar ou complementar os resultados do outro.',
        right: 'É útil quando o problema exige análise tanto de medidas quanto de significados.',
    },
];

const objectivesPanels: PanelItem[] = [
    {
        title: 'Pesquisa exploratória',
        description:
            'Busca conhecer melhor um objeto pouco estudado, levantar hipóteses, padrões, ideias e possibilidades de investigação.',
    },
    {
        title: 'Pesquisa descritiva',
        description:
            'Procura retratar com maior detalhamento um fenômeno, população, situação ou conjunto de características.',
    },
    {
        title: 'Pesquisa explicativa',
        description:
            'Busca identificar fundamentos, causas e razões do fenômeno, explicando por que ele ocorre.',
    },
];

const proceduresPanels: PanelItem[] = [
    {
        title: 'Pesquisa bibliográfica',
        description:
            'É desenvolvida com base em livros, artigos e outras fontes teóricas já analisadas, exigindo seleção criteriosa e atualizada da literatura.',
    },
    {
        title: 'Pesquisa documental',
        description:
            'Utiliza documentos de primeira mão ou materiais ainda sem tratamento analítico como fonte principal de investigação.',
    },
    {
        title: 'Pesquisa experimental',
        description:
            'Seleciona variáveis que podem influenciar o objeto de estudo, podendo ocorrer em laboratório ou em campo.',
    },
    {
        title: 'Pesquisa ex-post-facto',
        description:
            'O pesquisador não controla diretamente variáveis independentes, pois seus efeitos já ocorreram ou não podem ser manipulados.',
    },
    {
        title: 'Levantamento ou survey',
        description:
            'Baseia-se em interrogação direta das pessoas, geralmente por questionário, sendo muito associado a descrições quantitativas.',
    },
    {
        title: 'Estudo de campo',
        description:
            'Observa um grupo ou comunidade em sua estrutura social e em sua interação cotidiana.',
    },
    {
        title: 'Estudo de caso',
        description:
            'Examina de forma aprofundada um ou poucos objetos, buscando conhecimento amplo e detalhado.',
    },
    {
        title: 'Pesquisa-ação',
        description:
            'Articula investigação e intervenção prática para melhorar situações reais ou resolver problemas coletivos.',
    },
];

const experimentTypes: PanelItem[] = [
    {
        title: 'Genuinamente experimental',
        description:
            'Envolve grupo experimental e grupo de controle, com maior rigor para comparação causal.',
    },
    {
        title: 'Pré-experimental',
        description:
            'Trabalha sem grupo de controle estruturado, muitas vezes com um único grupo e comparação limitada.',
    },
    {
        title: 'Quase-experimental',
        description:
            'Busca comparação entre grupos, mas sem distribuição aleatória completa dos participantes.',
    },
];

const studyTechniquesPanels: PanelItem[] = [
    {
        title: 'Esquema',
        description:
            'Representação gráfica ou roteiro das ideias principais de um texto, mantendo sua sequência lógica e destacando palavras-chave.',
    },
    {
        title: 'Fichamento',
        description:
            'Pode reunir indicação bibliográfica, transcrição de trechos, apreciação, esquemas e resumos, servindo de base para estudo e escrita.',
    },
    {
        title: 'Resumo',
        description:
            'Condensa um texto em seus tópicos essenciais, preservando a ideia central e reduzindo o supérfluo.',
    },
    {
        title: 'Resenha',
        description:
            'Além de resumir, avalia criticamente a obra, combinando informação e opinião fundamentada.',
    },
    {
        title: 'Sublinhar',
        description:
            'Ajuda a destacar expressões centrais, conceitos-chave e passagens com maior densidade argumentativa.',
    },
    {
        title: 'Apagamento, generalização e construção',
        description:
            'São operações úteis para resumir: retirar excessos, condensar significados e unificar sequências de fatos em proposições mais sintéticas.',
    },
];

const samplingConcepts: ConceptItem[] = [
    {
        title: 'População',
        description:
            'É o conjunto completo de elementos que compartilham parâmetros relevantes para a pesquisa.',
        accent: 'accent',
    },
    {
        title: 'Amostra',
        description:
            'É o subgrupo efetivamente observado ou analisado dentro da população.',
        accent: 'accent2',
    },
    {
        title: 'Representatividade',
        description:
            'A amostra deve ser adequada ao objetivo do estudo e ao tipo de inferência que se deseja realizar.',
        accent: 'accent3',
    },
    {
        title: 'Viabilidade',
        description:
            'Tempo, acesso, recursos e delimitação do problema também influenciam a definição da amostra.',
        accent: 'accent5',
    },
];

const samplingPanels: PanelItem[] = [
    {
        title: 'Amostragem probabilística',
        description:
            'Todos os elementos da população têm chance conhecida de serem selecionados, como no sorteio e na amostragem estratificada proporcional.',
    },
    {
        title: 'Amostragem não probabilística',
        description:
            'Nem todos os elementos têm a mesma chance de seleção; a escolha depende de critérios definidos pelo pesquisador.',
    },
    {
        title: 'Por conveniência',
        description:
            'Seleciona participantes que estão disponíveis ou acessíveis no momento da coleta.',
    },
    {
        title: 'Por quotas',
        description:
            'Busca manter proporções definidas segundo algum critério relevante.',
    },
    {
        title: 'Bola de neve',
        description:
            'Participantes iniciais indicam outros, útil em populações de difícil acesso.',
    },
    {
        title: 'Casos típicos, críticos ou contrastantes',
        description:
            'Os participantes podem ser escolhidos por representarem situações típicas, essenciais ou muito diferentes entre si.',
    },
];

const projectFlow = [
    'Tema',
    'Problema',
    'Hipótese',
    'Objetivos',
    'Metodologia',
    'Cronograma',
];

const projectPanels: PanelItem[] = [
    {
        title: 'Projeto de pesquisa',
        description:
            'É o planejamento das atividades a serem desenvolvidas para realizar a pesquisa, funcionando como documento explicitador das ações.',
    },
    {
        title: 'Tema',
        description:
            'Corresponde ao assunto geral do trabalho e precisa ser delimitado para se tornar investigável.',
    },
    {
        title: 'Problema de pesquisa',
        description:
            'É a questão não resolvida que será objeto de estudo. Deve ser clara, relevante e possível de responder.',
    },
    {
        title: 'Hipótese',
        description:
            'É uma proposição testável, uma pré-solução que poderá ser confirmada ou negada ao longo da investigação.',
    },
    {
        title: 'Objetivo geral',
        description:
            'Expressa o que o pesquisador deseja atingir em uma formulação sintética, normalmente com apenas um verbo no infinitivo.',
    },
    {
        title: 'Objetivos específicos',
        description:
            'Desdobram o objetivo geral em etapas menores e operacionais, também preferencialmente com um verbo por item.',
    },
    {
        title: 'Justificativa',
        description:
            'Expõe relevância social, científica, acadêmica ou profissional do estudo, evidenciando contribuições e originalidade.',
    },
    {
        title: 'Revisão de literatura',
        description:
            'Examina o estado da arte, apresenta as principais ideias já discutidas por outros autores e mostra o diferencial do trabalho.',
    },
    {
        title: 'Metodologia',
        description:
            'Explica de forma detalhada o tipo de pesquisa, estratégia, instrumentos de coleta, tratamento dos dados e etapas de execução.',
    },
    {
        title: 'Cronograma',
        description:
            'Apresenta a previsão temporal das atividades necessárias para concluir o estudo.',
    },
    {
        title: 'Orçamento',
        description:
            'Registra a estimativa de gastos da pesquisa quando houver necessidade de recursos materiais, técnicos ou logísticos.',
    },
    {
        title: 'Beneficiários e contexto',
        description:
            'No projeto, especialmente em SI, é importante definir quem será beneficiado pela solução e em qual contexto o problema está inserido.',
    },
];

const projectSupportPanels: PanelItem[] = [
    {
        title: '5W2H',
        description:
            'Pode ajudar a clarificar o projeto ao explicitar o que será feito, por que, onde, quando, por quem, como e com que custo.',
    },
    {
        title: 'Estado da arte',
        description:
            'Permite entender o que já existe em operação e o que ainda pode ser investigado, ajustando a originalidade do projeto.',
    },
    {
        title: 'Dimensão teórica',
        description:
            'Refere-se ao diálogo conceitual em que a pesquisa se insere, às teorias e autores que sustentam a investigação.',
    },
    {
        title: 'Dimensão prática',
        description:
            'Refere-se aos procedimentos concretos da pesquisa, como coleta, análise, instrumentos, cronograma e execução.',
    },
];

const abntPanels: PanelItem[] = [
    {
        title: 'Papel e disposição geral',
        description:
            'Usa-se papel A4, texto em um só lado, espaçamento 1,5 e alinhamento justificado.',
    },
    {
        title: 'Margens',
        description:
            'Margem esquerda e superior com 3 cm; direita e inferior com 2 cm. Citações longas usam recuo de 4 cm.',
    },
    {
        title: 'Fonte e tamanho',
        description:
            'Texto principal em tamanho 12; citações longas, legendas, paginação e elementos auxiliares em tamanho 10; notas de rodapé em tamanho menor e espaço simples.',
    },
    {
        title: 'Estrutura do trabalho',
        description:
            'Os elementos podem ser pré-textuais, textuais e pós-textuais, organizando formalmente a apresentação acadêmica.',
    },
];

const abntStructurePanels: PanelItem[] = [
    {
        title: 'Elementos pré-textuais',
        description:
            'Incluem capa, folha de rosto, listas, resumo, abstract e sumário, conforme a exigência do tipo de trabalho.',
    },
    {
        title: 'Elementos textuais',
        description:
            'Compreendem introdução, desenvolvimento e conclusão, núcleo argumentativo do trabalho.',
    },
    {
        title: 'Elementos pós-textuais',
        description:
            'Incluem referências, glossário, anexos e apêndices, quando cabíveis.',
    },
    {
        title: 'Resumo',
        description:
            'Deve ser escrito em parágrafo único, com limite aproximado de palavras conforme o tipo do trabalho, seguido de 3 a 5 palavras-chave.',
    },
    {
        title: 'Paginação',
        description:
            'É contada desde o início, mas aparece a partir da introdução, geralmente em algarismos arábicos no canto superior direito.',
    },
    {
        title: 'Siglas',
        description:
            'Na primeira ocorrência no texto, deve-se escrever o nome por extenso seguido da sigla entre parênteses.',
    },
];

const citationConcepts: ConceptItem[] = [
    {
        title: 'Citação direta',
        description:
            'É a transcrição literal das palavras do autor. Até três linhas fica dentro do texto; acima disso, exige recuo e formatação destacada.',
        accent: 'accent',
    },
    {
        title: 'Citação indireta',
        description:
            'É a reprodução da ideia do autor com redação própria, mantendo a obrigatoriedade de indicar a fonte.',
        accent: 'accent2',
    },
    {
        title: 'Citação de citação',
        description:
            'Usa a forma apud quando o pesquisador não teve acesso direto ao texto original, referenciando a obra efetivamente consultada.',
        accent: 'accent3',
    },
    {
        title: 'Referência',
        description:
            'Descreve formalmente a obra utilizada, permitindo sua localização e identificação pelo leitor.',
        accent: 'accent5',
    },
];

const citationPanels: PanelItem[] = [
    {
        title: 'Autoria reconhecida',
        description:
            'Toda ideia, dado, argumento ou trecho retirado de outra fonte precisa ser corretamente atribuído.',
    },
    {
        title: 'Separação entre voz do autor e voz do pesquisador',
        description:
            'O leitor deve conseguir distinguir o que é interpretação própria e o que é conteúdo retirado de outra obra.',
    },
    {
        title: 'Lista de referências',
        description:
            'Deve ser organizada em ordem alfabética pelo sobrenome do autor, alinhada à margem esquerda e com espaçamento simples.',
    },
    {
        title: 'Ética acadêmica',
        description:
            'Referenciar corretamente é parte da honestidade intelectual e do combate ao plágio.',
    },
];

const referenceExamples: PanelItem[] = [
    {
        title: 'Livro',
        description:
            'Segue estrutura com SOBRENOME, Prenome. Título: subtítulo. Edição. Local: Editora, ano.',
    },
    {
        title: 'Artigo de periódico',
        description:
            'Inclui autor, título do artigo, título da revista, local, volume, número, páginas e data.',
    },
    {
        title: 'Trabalho em evento',
        description:
            'Deve trazer autor, título, nome do evento, edição, ano, local, título da publicação, editora e paginação.',
    },
    {
        title: 'Monografia, dissertação ou tese',
        description:
            'Inclui autor, título, ano, orientador, número de folhas, grau, área e instituição.',
    },
];

const dataCollectionPanels: PanelItem[] = [
    {
        title: 'Coleta de dados',
        description:
            'Corresponde à pesquisa propriamente dita: levantamento de informações necessárias para responder ao problema e atingir os objetivos.',
    },
    {
        title: 'Instrumentos estruturados',
        description:
            'Têm partes previamente planejadas e maior padronização, sendo úteis quando se deseja comparabilidade maior entre respostas.',
    },
    {
        title: 'Instrumentos semiestruturados',
        description:
            'Combinam partes definidas com margem para adaptação ao longo da interação.',
    },
    {
        title: 'Instrumentos não estruturados',
        description:
            'São mais abertos, centrados no depoente e menos guiados por roteiro rígido.',
    },
    {
        title: 'Questionário',
        description:
            'Pode conter questões fechadas, abertas ou mistas; questões fechadas podem ser dicotômicas, de múltipla escolha ou escala Likert.',
    },
    {
        title: 'Observação',
        description:
            'Exige posicionamento cuidadoso do pesquisador no contexto investigado, evitando ao máximo interferências indevidas.',
    },
    {
        title: 'Entrevista',
        description:
            'Consiste em conversa planejada entre pesquisador e participante para aprofundar percepções, experiências ou informações.',
    },
    {
        title: 'Grupo focal',
        description:
            'Técnica qualitativa com entrevista coletiva, geralmente entre 3 e 12 pessoas, com duração aproximada de 1 a 2 horas.',
    },
    {
        title: 'Análise documental',
        description:
            'Utiliza documentos e produções bibliográficas como base de coleta, podendo trabalhar com fontes primárias ou secundárias.',
    },
];

const dataAnalysisPanels: PanelItem[] = [
    {
        title: 'Variáveis',
        description:
            'Tudo aquilo que pode assumir diferentes valores. Entender as variáveis é o primeiro passo para escolher análise, teste e forma de apresentação.',
    },
    {
        title: 'Variáveis nominais',
        description:
            'Indicam características ou categorias sem ordem natural entre seus valores.',
    },
    {
        title: 'Variáveis ordinais',
        description:
            'Além de indicar categorias, permitem ordenação entre os níveis observados.',
    },
    {
        title: 'Variáveis escalares',
        description:
            'São descritas numericamente e permitem maior variedade de operações estatísticas.',
    },
    {
        title: 'Tendência central',
        description:
            'Representa a amostra por medidas como média e mediana.',
    },
    {
        title: 'Dispersão',
        description:
            'Indica o quanto os dados estão espalhados em torno da tendência central, como no desvio padrão.',
    },
    {
        title: 'Correlação',
        description:
            'Avalia associação entre variáveis, permitindo verificar se elas se relacionam.',
    },
    {
        title: 'Comparação de médias',
        description:
            'Útil quando se quer verificar diferenças entre grupos ou entre medições em momentos distintos.',
    },
    {
        title: 'Ferramentas quantitativas',
        description:
            'Excel e SPSS aparecem como ferramentas recorrentes para organização e análise estatística dos dados.',
    },
];

const qualitativeAnalysisPanels: PanelItem[] = [
    {
        title: 'Consentimento e ética',
        description:
            'Participantes devem saber o foco da pesquisa, o destino dos dados e consentir com sua participação.',
    },
    {
        title: 'Transcrição',
        description:
            'Consiste em produzir cópia digitada clara e fiel das falas dos participantes.',
    },
    {
        title: 'Diário de pesquisa',
        description:
            'Registra impressões, ideias, discussões e observações do pesquisador ao longo do processo.',
    },
    {
        title: 'Codificação',
        description:
            'Organiza o material em blocos ou segmentos de texto antes de atribuir significados analíticos.',
    },
    {
        title: 'Padrões e insights',
        description:
            'A análise qualitativa busca recorrências, agrupamentos, significados, motivações e possibilidades interpretativas.',
    },
    {
        title: 'Análise de conteúdo',
        description:
            'Envolve pré-exploração do corpus, seleção de unidades de análise, categorização e subcategorização dos significados.',
    },
    {
        title: 'SADQ',
        description:
            'Software de Análise de Dados Qualitativos ajuda a organizar dados, registros analíticos e percursos interpretativos do pesquisador.',
    },
];

function IntroSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Metodologia Científica"
                subtitle="Da compreensão da ciência à construção formal de um projeto de pesquisa consistente"
                colorClass="text-accent"
            />

            <HighlightBox title="Visão geral da disciplina">
                <p>
                    Metodologia Científica ensina a transformar curiosidade em investigação organizada, articulando <strong>tema</strong>, <strong>problema</strong>, <strong>objetivos</strong>, <strong>método</strong>, <strong>coleta</strong>, <strong>análise</strong> e <strong>normalização acadêmica</strong>.
                </p>
            </HighlightBox>

            <ConceptGrid items={revisionOverview} columns="md:grid-cols-3" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Fundamentos iniciais</h3>
                <PanelList items={methodologyFoundations} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Como a disciplina costuma cair em prova" accent="var(--color-accent3)">
                <p>
                    A primeira prova enfatiza conceito de método, ciência, tipos de conhecimento, paradigmas, abordagens e classificações da pesquisa, enquanto a segunda avança para projeto de pesquisa, normas ABNT, citações, referências, instrumentos de coleta e análise de dados.
                </p>
            </HighlightBox>
        </section>
    );
}

function ConhecimentoSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Conhecimento e Ciência"
                subtitle="Como o ser humano passou do medo e do misticismo à busca metódica por explicações"
                colorClass="text-accent2"
            />

            <HighlightBox title="Evolução da compreensão humana">
                <p>
                    O material apresenta três níveis de desenvolvimento da inteligência — <strong>medo</strong>, <strong>misticismo</strong> e <strong>ciência</strong> — mostrando a passagem de explicações intuitivas e mágicas para respostas baseadas em comprovação.
                </p>
            </HighlightBox>

            <PanelList items={intelligenceLevels} columns="md:grid-cols-3" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Tipos de conhecimento</h3>
                <PanelList items={knowledgeTypes} />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Outras bases de compreensão</h3>
                <ConceptGrid items={otherKnowledgeForms} columns="md:grid-cols-2 lg:grid-cols-4" />
            </div>

            <HighlightBox title="Ponto central">
                <p>
                    O conhecimento científico se distingue porque não depende apenas da vivência ou crença: ele exige método, argumentação, sistematização e possibilidade de revisão crítica.
                </p>
            </HighlightBox>
        </section>
    );
}

function CienciaSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Ciência, verdade e método"
                subtitle="Bases conceituais do conhecimento científico e suas formas de validação"
                colorClass="text-accent3"
            />

            <ConceptGrid items={scienceConcepts} columns="md:grid-cols-2 lg:grid-cols-4" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Ciência moderna e pós-moderna</h3>
                <ComparisonTable rows={modernVsPostmodernScience} leftLabel="Característica central" rightLabel="Ênfase analítica" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent4 mb-3">Verdade, evidência e certeza</h3>
                <PanelList items={truthConcepts} columns="md:grid-cols-3" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Formas de raciocínio científico</h3>
                <PanelList items={reasoningTypes} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Leitura prática">
                <p>
                    A preocupação do cientista é chegar a afirmações sustentadas por evidência e com grau suficiente de certeza, usando processos como indução, dedução, formulação de leis e construção de teorias.
                </p>
            </HighlightBox>
        </section>
    );
}

function ParadigmasSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Paradigmas de pesquisa"
                subtitle="Visões de realidade que influenciam escolhas epistemológicas e metodológicas"
                colorClass="text-accent4"
            />

            <ConceptGrid items={paradigmConcepts} columns="md:grid-cols-2 lg:grid-cols-4" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Principais paradigmas trabalhados</h3>
                <PanelList items={paradigmsDetailed} />
            </div>

            <HighlightBox title="Implicação metodológica">
                <p>
                    O paradigma adotado altera o modo como o pesquisador entende o objeto, define evidência, interpreta dados e justifica conclusões.
                </p>
            </HighlightBox>
        </section>
    );
}

function AbordagemSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Natureza e abordagem"
                subtitle="Como a pesquisa se classifica quanto à finalidade e ao tipo de dado"
                colorClass="text-accent5"
            />

            <PanelList items={approachPanels} />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Abordagens mais cobradas</h3>
                <StatStrip items={qualitativeVsQuantitative} />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Comparando as abordagens</h3>
                <ComparisonTable rows={approachDetails} leftLabel="Como trabalha" rightLabel="Foco metodológico" />
            </div>

            <HighlightBox title="Critério de escolha">
                <p>
                    O melhor método não é o “mais bonito” ou “mais científico” em abstrato, mas aquele que mais se adequa à natureza do problema investigado.
                </p>
            </HighlightBox>
        </section>
    );
}

function ProcedimentosSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Objetivos e procedimentos"
                subtitle="Classificações da pesquisa quanto ao que pretende e ao caminho que percorre"
                colorClass="text-accent"
            />

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Quanto aos objetivos</h3>
                <PanelList items={objectivesPanels} columns="md:grid-cols-3" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent4 mb-3">Quanto aos procedimentos</h3>
                <PanelList items={proceduresPanels} columns="md:grid-cols-2" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Tipos de desenho experimental</h3>
                <PanelList items={experimentTypes} columns="md:grid-cols-3" />
            </div>

            <HighlightBox title="Coerência metodológica">
                <p>
                    Objetivos, abordagem, procedimentos e técnicas precisam ser compatíveis entre si; quando essa coerência falha, o projeto perde clareza e força analítica.
                </p>
            </HighlightBox>
        </section>
    );
}

function AmostragemSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="População e amostragem"
                subtitle="Quem participa da pesquisa e como os elementos são selecionados"
                colorClass="text-accent2"
            />

            <ConceptGrid items={samplingConcepts} columns="md:grid-cols-2 lg:grid-cols-4" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Estratégias de amostragem</h3>
                <PanelList items={samplingPanels} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Ponto de atenção">
                <p>
                    A escolha da amostra afeta validade, alcance das conclusões e viabilidade da pesquisa, exigindo justificativa coerente com o objetivo do estudo.
                </p>
            </HighlightBox>
        </section>
    );
}

function TecnicasEstudoSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Técnicas de estudo"
                subtitle="Ferramentas de leitura, registro, síntese e avaliação do conteúdo acadêmico"
                colorClass="text-accent3"
            />

            <PanelList items={studyTechniquesPanels} columns="md:grid-cols-2" />

            <HighlightBox title="Aplicação prática">
                <p>
                    Esquema, fichamento, resumo e resenha não são apenas técnicas escolares: eles organizam a base intelectual do pesquisador e facilitam revisão de literatura e escrita científica.
                </p>
            </HighlightBox>
        </section>
    );
}

function ProjetoSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Projeto de pesquisa"
                subtitle="Planejamento lógico da investigação, da formulação do problema à execução"
                colorClass="text-accent4"
            />

            <div className="study-surface p-5 md:p-6">
                <h3 className="font-display font-bold text-2xl text-accent mb-3">Fluxo básico do projeto</h3>
                <FlowDiagram items={projectFlow} />
                <p className="text-text-muted text-sm md:text-base mt-4 leading-relaxed">
                    O projeto organiza antecipadamente o caminho da pesquisa e explicita o que será estudado, por que, como, em que tempo e com quais recursos.
                </p>
            </div>

            <PanelList items={projectPanels} columns="md:grid-cols-2" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Ferramentas e dimensões do projeto</h3>
                <PanelList items={projectSupportPanels} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Estrutura lógica do projeto">
                <p>
                    Um bom projeto começa em um tema amplo, delimita um problema real, formula objetivos claros, apresenta justificativa consistente e descreve metodologia viável.
                </p>
            </HighlightBox>
        </section>
    );
}

function AbntSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Normas ABNT"
                subtitle="Padronização formal da apresentação e organização do trabalho científico"
                colorClass="text-accent5"
            />

            <PanelList items={abntPanels} columns="md:grid-cols-2" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Estrutura e elementos formais</h3>
                <PanelList items={abntStructurePanels} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Função da normatização">
                <p>
                    A ABNT não serve apenas para “formatar bonito”; ela padroniza leitura, facilita avaliação acadêmica e organiza tecnicamente a apresentação do trabalho.
                </p>
            </HighlightBox>
        </section>
    );
}

function CitacoesSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Citações e referências"
                subtitle="Como usar ideias de outros autores sem perder rigor, clareza e ética"
                colorClass="text-accent"
            />

            <ConceptGrid items={citationConcepts} columns="md:grid-cols-2 lg:grid-cols-4" />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Cuidados essenciais</h3>
                <PanelList items={citationPanels} />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Modelos de referência lembrados na revisão</h3>
                <PanelList items={referenceExamples} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Ponto crítico" accent="var(--color-accent2)">
                <p>
                    Citar corretamente é parte da integridade científica: protege a autoria intelectual, evita plágio e mostra ao leitor o caminho das ideias utilizadas.
                </p>
            </HighlightBox>
        </section>
    );
}

function ColetaAnaliseSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader
                title="Coleta e análise de dados"
                subtitle="Ferramentas de obtenção, organização, interpretação e validação das informações"
                colorClass="text-accent2"
            />

            <div>
                <h3 className="font-display font-bold text-xl text-accent3 mb-3">Instrumentos e técnicas de coleta</h3>
                <PanelList items={dataCollectionPanels} columns="md:grid-cols-2" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent5 mb-3">Análise quantitativa</h3>
                <PanelList items={dataAnalysisPanels} columns="md:grid-cols-2" />
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-accent4 mb-3">Análise qualitativa</h3>
                <PanelList items={qualitativeAnalysisPanels} columns="md:grid-cols-2" />
            </div>

            <HighlightBox title="Síntese metodológica">
                <p>
                    Coletar dados não encerra a pesquisa; é preciso compreender variáveis, organizar registros, aplicar formas adequadas de análise e interpretar os achados de modo coerente com os objetivos propostos.
                </p>
            </HighlightBox>
        </section>
    );
}

function QuizSection() {
    return (
        <section className="animate-fade-in">
            <QuizTabs
                normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" />}
                ai={
                    <div className="space-y-4">
                        <HighlightBox title="Como funciona?">
                            <p>
                                A IA usa os conteúdos selecionados de Metodologia Científica para gerar lotes de 1, 5 ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
                            </p>
                        </HighlightBox>
                        <AIQuizGenerator
                            guideContext={METODOLOGIA_CIENTIFICA_GUIDE_CONTEXT}
                            topics={METODOLOGIA_CIENTIFICA_TOPICS}
                        />
                    </div>
                }
                kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" />}
                aiKahoot={
                    <AIKahootQuiz
                        guideContext={METODOLOGIA_CIENTIFICA_GUIDE_CONTEXT}
                        topics={METODOLOGIA_CIENTIFICA_TOPICS}
                    />
                }
            />
        </section>
    );
}

export default function MetodologiaCientificaSections({
    activeSection,
}: MetodologiaCientificaSectionsProps) {
    switch (activeSection) {
        case 'intro':
            return <IntroSection />;
        case 'conhecimento':
            return <ConhecimentoSection />;
        case 'ciencia':
            return <CienciaSection />;
        case 'paradigmas':
            return <ParadigmasSection />;
        case 'abordagem':
            return <AbordagemSection />;
        case 'procedimentos':
            return <ProcedimentosSection />;
        case 'amostragem':
            return <AmostragemSection />;
        case 'tecnicas-estudo':
            return <TecnicasEstudoSection />;
        case 'projeto':
            return <ProjetoSection />;
        case 'abnt':
            return <AbntSection />;
        case 'citacoes':
            return <CitacoesSection />;
        case 'coleta-analise':
            return <ColetaAnaliseSection />;
        case 'quiz':
            return <QuizSection />;
        case 'iaquiz':
            return <QuizSection />;
        default:
            return null;
    }
}