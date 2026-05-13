import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import ConceptCard from '../../components/ui/ConceptCard';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizCard from '../../components/ui/QuizCard';
import {
  COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT,
  COMPORTAMENTO_ORGANIZACIONAL_TOPICS,
  QUIZ_DATA,
} from './data';

interface ComportamentoOrganizacionalSectionsProps {
  activeSection: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

interface PanelItem {
  title: string;
  description: string;
}

interface StatItem {
  label: string;
  value: string;
  accent: string;
}

const foundations: ConceptItem[] = [
  {
    title: 'Indivíduos',
    description: 'Valores, atitudes, percepção, personalidade, motivação e diferenças individuais explicam como cada pessoa interpreta e reage ao trabalho.',
    accent: 'accent',
  },
  {
    title: 'Grupos',
    description: 'Papéis, normas, status, coesividade, diversidade e comunicação moldam a forma como pessoas trabalham em conjunto.',
    accent: 'accent3',
  },
  {
    title: 'Estrutura',
    description: 'Processos, desenho do trabalho, liderança, recompensas e regras organizacionais influenciam o comportamento cotidiano.',
    accent: 'accent5',
  },
];

const behavioralSciences: PanelItem[] = [
  { title: 'Psicologia', description: 'Mede, explica e às vezes muda o comportamento dos indivíduos.' },
  { title: 'Sociologia', description: 'Estuda pessoas em relação a seus ambientes sociais e culturais.' },
  { title: 'Psicologia social', description: 'Observa a influência das pessoas entre si.' },
  { title: 'Antropologia', description: 'Compara sociedades para compreender o ser humano e suas atividades.' },
];

const diversityTypes: PanelItem[] = [
  { title: 'Diversidade aparente', description: 'Idade, etnia, gênero, raça, religião e deficiência: características mais visíveis ou imediatamente reconhecíveis.' },
  { title: 'Diversidade profunda', description: 'Personalidade, valores, capacidades e habilidades: dimensões menos visíveis, mas decisivas para o trabalho conjunto.' },
];

const discriminationTypes: PanelItem[] = [
  { title: 'Políticas discriminatórias', description: 'Práticas de gestão que negam igualdade de oportunidades e recompensas.' },
  { title: 'Assédio sexual', description: 'Conduta verbal ou física que torna o ambiente hostil.' },
  { title: 'Intimidação', description: 'Ameaças explícitas ou direcionadas a determinados indivíduos.' },
  { title: 'Zombaria e insultos', description: 'Piadas, rótulos e estereótipos negativos.' },
  { title: 'Exclusão', description: 'Retirar pessoas de oportunidades, reuniões, eventos ou atividades.' },
  { title: 'Incivilidade', description: 'Tratamento desrespeitoso e comportamento agressivo.' },
];

const capacityTypes: ConceptItem[] = [
  {
    title: 'Capacidades intelectuais',
    description: 'Aptidão numérica, compreensão verbal, velocidade perceptiva, raciocínio indutivo e dedutivo, visualização espacial e memória.',
    accent: 'accent3',
  },
  {
    title: 'Capacidades físicas',
    description: 'Força dinâmica, força de tronco, força estática, força explosiva, flexibilidade, coordenação corporal, equilíbrio e vigor físico.',
    accent: 'accent4',
  },
];

const valuePairs: ConceptItem[] = [
  {
    title: 'Conteúdo',
    description: 'Define que um modo de conduta ou uma condição de existência é importante.',
    accent: 'accent',
  },
  {
    title: 'Intensidade',
    description: 'Define o quanto esse valor é importante dentro da hierarquia pessoal.',
    accent: 'accent2',
  },
  {
    title: 'Valores terminais',
    description: 'Condições de existência desejáveis: metas que alguém gostaria de atingir durante a vida.',
    accent: 'accent3',
  },
  {
    title: 'Valores instrumentais',
    description: 'Modos preferenciais de comportamento: meios escolhidos para alcançar os valores terminais.',
    accent: 'accent5',
  },
];

const attitudeComponents: ConceptItem[] = [
  {
    title: 'Cognição',
    description: 'Crença ou avaliação de como as coisas são. Ex.: “meu supervisor foi injusto”.',
    accent: 'accent',
  },
  {
    title: 'Afeto',
    description: 'Sentimento ou emoção vinculada ao objeto da atitude. Ex.: “não gosto do meu supervisor”.',
    accent: 'accent2',
  },
  {
    title: 'Comportamento',
    description: 'Intenção de agir de certa maneira. Ex.: procurar outro emprego ou reclamar com colegas.',
    accent: 'accent3',
  },
];

const workAttitudes: PanelItem[] = [
  { title: 'Satisfação com o trabalho', description: 'Atitude geral da pessoa em relação ao trabalho que realiza.' },
  { title: 'Envolvimento com o trabalho', description: 'Identificação psicológica com o trabalho e valorização pessoal do desempenho.' },
  { title: 'Comprometimento organizacional', description: 'Identificação com a empresa e desejo de permanecer como parte dela.' },
  { title: 'Suporte organizacional percebido', description: 'Crença de que a organização valoriza contribuições e se preocupa com o bem-estar.' },
  { title: 'Engajamento', description: 'Envolvimento, satisfação e entusiasmo com o trabalho realizado.' },
];

const dissatisfactionResponses: PanelItem[] = [
  { title: 'Saída', description: 'Comportamento voltado ao abandono da empresa, busca de novo emprego ou demissão.' },
  { title: 'Comunicação', description: 'Tentativa ativa e construtiva de melhorar as condições, sugerindo mudanças.' },
  { title: 'Lealdade', description: 'Espera passiva e otimista de que as condições melhorem.' },
  { title: 'Negligência', description: 'Deixar a situação piorar: atrasos, faltas, menor empenho e mais erros.' },
];

const satisfactionLevers: PanelItem[] = [
  {
    title: 'Trabalho intelectualmente desafiante',
    description: 'Tarefas que exigem raciocínio, variedade e aprendizagem tendem a aumentar interesse. O desafio precisa ser alcançável; desafio excessivo vira frustração.',
  },
  {
    title: 'Recompensas justas',
    description: 'Salário, benefícios, promoções e reconhecimento precisam ser percebidos como proporcionais ao esforço, às responsabilidades e ao mercado.',
  },
  {
    title: 'Condições de apoio no trabalho',
    description: 'Recursos, ferramentas, ambiente físico, clareza de processos e suporte gerencial reduzem obstáculos e permitem que a pessoa desempenhe bem.',
  },
  {
    title: 'Colegas colaboradores',
    description: 'Relações respeitosas e cooperativas tornam o trabalho mais previsível, reduzem conflitos desnecessários e fortalecem pertencimento.',
  },
  {
    title: 'Sentido que vai além do dinheiro',
    description: 'Pessoas tendem a se satisfazer mais quando entendem a utilidade do trabalho, seu impacto e sua conexão com valores pessoais.',
  },
];

const perceptionFactors: ConceptItem[] = [
  {
    title: 'Quem percebe',
    description: 'Atitudes, motivações, interesses e experiências anteriores influenciam a interpretação.',
    accent: 'accent',
  },
  {
    title: 'O alvo percebido',
    description: 'Características do objeto, semelhanças, proximidade e relação com o pano de fundo afetam a percepção.',
    accent: 'accent3',
  },
  {
    title: 'A situação',
    description: 'Contexto, ambiente, temperatura, momento e presença de outras pessoas podem mudar a interpretação.',
    accent: 'accent5',
  },
];

const attributionFactors: PanelItem[] = [
  { title: 'Diferenciação', description: 'A pessoa se comporta de maneira diferente em situações distintas?' },
  { title: 'Consenso', description: 'Outras pessoas reagem da mesma forma diante da mesma situação?' },
  { title: 'Coerência', description: 'A pessoa mantém consistência nas ações ao longo do tempo?' },
];

const judgmentShortcuts: ConceptItem[] = [
  {
    title: 'Percepção seletiva',
    description: 'Características salientes aumentam a chance de algo ou alguém ser percebido.',
    accent: 'accent',
  },
  {
    title: 'Efeito halo',
    description: 'Impressão geral construída com base em uma única característica.',
    accent: 'accent2',
  },
  {
    title: 'Efeito de contraste',
    description: 'Avaliação feita por comparação com pessoas encontradas recentemente.',
    accent: 'accent3',
  },
  {
    title: 'Estereótipo',
    description: 'Julgamento baseado na percepção do grupo ao qual a pessoa pertence.',
    accent: 'accent4',
  },
];

const bigFive: ConceptItem[] = [
  {
    title: 'Abertura',
    description: 'Imaginação, originalidade, interesse cultural e artístico; no polo baixo, maior simplicidade e convencionalidade.',
    accent: 'accent',
  },
  {
    title: 'Consciência',
    description: 'Organização, responsabilidade, cautela e confiabilidade; no polo baixo, descuido e desordem.',
    accent: 'accent2',
  },
  {
    title: 'Extroversão',
    description: 'Atividade, entusiasmo, dominância, sociabilidade e eloquência; no polo baixo, retraimento e quietude.',
    accent: 'accent3',
  },
  {
    title: 'Socialização',
    description: 'Amabilidade, cooperação, confiança e afeto; no polo baixo, frieza e tendência a conflitos.',
    accent: 'accent4',
  },
  {
    title: 'Neuroticismo',
    description: 'Instabilidade emocional, tensão e preocupação; no polo oposto, calma e satisfação.',
    accent: 'accent5',
  },
];

const motivationStats: StatItem[] = [
  { label: 'Intensidade', value: 'quanto esforço', accent: 'text-accent' },
  { label: 'Direção', value: 'para qual meta', accent: 'text-accent3' },
  { label: 'Persistência', value: 'por quanto tempo', accent: 'text-accent5' },
];

const motivationClassics: ConceptItem[] = [
  {
    title: 'Maslow',
    description: 'Necessidades fisiológicas, segurança, sociais, estima e autorrealização. Motivar exige entender o nível atual da pessoa.',
    accent: 'accent',
  },
  {
    title: 'McGregor X/Y',
    description: 'Contrasta pressupostos gerenciais mais controladores com pressupostos de autonomia, responsabilidade e desenvolvimento.',
    accent: 'accent2',
  },
  {
    title: 'Herzberg',
    description: 'Fatores higiênicos evitam insatisfação; fatores motivacionais, como reconhecimento e realização, elevam satisfação.',
    accent: 'accent3',
  },
  {
    title: 'Autodeterminação',
    description: 'Pessoas preferem sentir controle sobre suas ações; transformar escolha em obrigação pode reduzir motivação intrínseca.',
    accent: 'accent5',
  },
];

const engagementActions: PanelItem[] = [
  {
    title: 'Investir no aprimoramento contínuo de líderes',
    description: 'Líderes influenciam clima, confiança, feedback e prioridades. Treinamento contínuo melhora a qualidade das relações e reduz práticas que desmotivam.',
  },
  {
    title: 'Dar autonomia de trabalho às equipes',
    description: 'Autonomia aumenta senso de responsabilidade e controle. A equipe precisa ter liberdade real para decidir como executar parte do trabalho.',
  },
  {
    title: 'Medir o engajamento regularmente',
    description: 'Pesquisas, conversas e indicadores ajudam a detectar queda de energia antes que ela apareça como rotatividade, absenteísmo ou baixa produtividade.',
  },
  {
    title: 'Tratar engajamento como foco permanente',
    description: 'Engajamento não se resolve com campanha pontual. Exige rotina de gestão, coerência entre discurso e prática e acompanhamento dos problemas levantados.',
  },
  {
    title: 'Ouvir a equipe nos termos dela',
    description: 'A escuta precisa considerar a linguagem, os canais e as preocupações reais dos trabalhadores, não apenas os temas que a gestão quer ouvir.',
  },
];

const advancedTheories: ConceptItem[] = [
  {
    title: 'Definição de metas',
    description: 'Metas específicas, difíceis e acompanhadas de feedback tendem a melhorar o desempenho.',
    accent: 'accent',
  },
  {
    title: 'Autoeficácia',
    description: 'Crença na própria capacidade de atingir objetivos. Quanto maior, maior a persistência diante de desafios.',
    accent: 'accent3',
  },
  {
    title: 'Justiça organizacional',
    description: 'Percepção de justiça no modo como decisões são tomadas e resultados são distribuídos.',
    accent: 'accent4',
  },
  {
    title: 'Expectativa',
    description: 'A motivação depende da expectativa de desempenho, da relação desempenho-recompensa e do valor da recompensa.',
    accent: 'accent5',
  },
];

const selfEfficacySources: PanelItem[] = [
  { title: 'Maestria prática', description: 'Experiência relevante e sucesso anterior na tarefa.' },
  { title: 'Aprendizagem por observação', description: 'Ver outras pessoas realizando a tarefa com êxito.' },
  { title: 'Persuasão verbal', description: 'Ser convencido de que possui as habilidades necessárias.' },
  { title: 'Excitação emocional', description: 'Estado energizado que pode favorecer desempenho.' },
];

const jobCharacteristics: PanelItem[] = [
  { title: 'Variedade de habilidades', description: 'Grau em que o trabalho exige atividades diferentes.' },
  { title: 'Identidade da tarefa', description: 'Realização completa de uma peça inteira e identificável.' },
  { title: 'Significância da tarefa', description: 'Impacto substancial do trabalho na vida ou atividade de outras pessoas.' },
  { title: 'Autonomia', description: 'Liberdade e independência para planejar e executar o trabalho.' },
  { title: 'Feedback', description: 'Informações diretas e claras sobre a eficácia do desempenho.' },
];

const workRedesign: PanelItem[] = [
  {
    title: 'Rodízio de trabalho',
    description: 'Move pessoas entre tarefas ou funções para reduzir monotonia, ampliar habilidades e aumentar compreensão do processo como um todo.',
  },
  {
    title: 'Enriquecimento do trabalho',
    description: 'Aumenta autonomia, responsabilidade, variedade e feedback. Em vez de apenas trocar tarefas, torna o cargo mais significativo.',
  },
  {
    title: 'Compartilhamento de trabalho',
    description: 'Duas ou mais pessoas dividem uma mesma função ou carga horária. Pode ampliar flexibilidade, mas exige boa coordenação.',
  },
  {
    title: 'Trabalho remoto',
    description: 'Permite realizar atividades fora do local físico da organização. Funciona melhor com metas claras, comunicação confiável e autonomia.',
  },
  {
    title: 'Horário flexível',
    description: 'Dá margem para ajustar horários de entrada, saída ou blocos de trabalho. Ajuda na conciliação entre vida pessoal e demandas profissionais.',
  },
];

const rewards: PanelItem[] = [
  {
    title: 'Remuneração variável',
    description: 'Parte da remuneração muda conforme metas, desempenho ou resultados. Aproxima recompensa e contribuição, mas precisa de critérios transparentes.',
  },
  {
    title: 'Pagamento por produção',
    description: 'Recompensa a quantidade produzida ou entregue. É útil em atividades mensuráveis, mas pode prejudicar qualidade se for mal desenhado.',
  },
  {
    title: 'Pagamento por mérito',
    description: 'Aumentos ou recompensas ligados à avaliação de desempenho individual. Depende de avaliação justa, critérios claros e feedback consistente.',
  },
  {
    title: 'Bônus',
    description: 'Pagamento adicional por alcance de metas, projetos ou resultados excepcionais. Pode ser individual, coletivo ou organizacional.',
  },
  {
    title: 'Remuneração por habilidades',
    description: 'Valoriza conhecimentos e competências adquiridas, não apenas cargo ocupado. Estimula aprendizagem e versatilidade.',
  },
  {
    title: 'Participação nos lucros',
    description: 'Distribui parte do lucro da organização. Ajuda a conectar trabalhadores ao desempenho financeiro geral.',
  },
  {
    title: 'Participação nos resultados',
    description: 'Recompensa metas operacionais ou estratégicas mesmo quando o indicador principal não é lucro, como qualidade, produtividade ou satisfação.',
  },
  {
    title: 'Benefícios flexíveis',
    description: 'Permitem escolher benefícios mais adequados à realidade de cada pessoa, como alimentação, saúde, educação ou mobilidade.',
  },
  {
    title: 'Reconhecimento',
    description: 'Valoriza contribuições por elogios, visibilidade, oportunidades ou prêmios simbólicos. Pode motivar muito quando é específico e sincero.',
  },
];

const groupReasons: ConceptItem[] = [
  { title: 'Segurança', description: 'Reduzir insegurança e sentir-se mais forte junto de outras pessoas.', accent: 'accent' },
  { title: 'Status', description: 'Obter reconhecimento e posição social dentro de um coletivo.', accent: 'accent2' },
  { title: 'Autoestima', description: 'Reforçar o sentimento de valor pessoal.', accent: 'accent3' },
  { title: 'Afiliação', description: 'Sentir pertencimento e interagir com os demais.', accent: 'accent4' },
  { title: 'Poder', description: 'Alcançar objetivos com a força do grupo.', accent: 'accent5' },
  { title: 'Realização de metas', description: 'Unir talentos e habilidades em torno de metas específicas.', accent: 'accent' },
];

const groupProperties: PanelItem[] = [
  { title: 'Papéis', description: 'Percepção do papel, expectativas dos papéis e conflitos quando um papel dificulta outro.' },
  { title: 'Normas', description: 'Padrões compartilhados sobre como agir em determinadas situações.' },
  { title: 'Status', description: 'Posição social percebida dentro do grupo.' },
  { title: 'Tamanho', description: 'Quantidade de membros, afetando coordenação, participação e produtividade.' },
  { title: 'Coesividade', description: 'Grau em que membros são atraídos entre si e querem permanecer no grupo.' },
  { title: 'Diversidade', description: 'Grau de semelhança e diferença entre os membros; pode ampliar aprendizagem e conflito.' },
];

const communicationDirections: PanelItem[] = [
  { title: 'Descendente', description: 'Flui de um nível superior para um nível inferior; usada para objetivos, instruções e normas.' },
  { title: 'Ascendente', description: 'Flui para um nível mais alto; usada para feedback aos superiores.' },
  { title: 'Lateral', description: 'Ocorre entre membros do mesmo grupo ou nível de trabalho.' },
];

const interpersonalCommunication: ConceptItem[] = [
  {
    title: 'Oral',
    description: 'Vantagem: rapidez e feedback. Risco: interpretações diferentes.',
    accent: 'accent',
  },
  {
    title: 'Escrita',
    description: 'Vantagem: tende a ser mais pensada, lógica e clara. Risco: demora e menor retorno imediato.',
    accent: 'accent3',
  },
  {
    title: 'Não verbal',
    description: 'Movimentos corporais, expressões faciais, ênfases e distância física também comunicam significados.',
    accent: 'accent5',
  },
];

const communicationNetworks = [
  { criterion: 'Velocidade', chain: 'Moderada', wheel: 'Rápida', all: 'Rápida' },
  { criterion: 'Precisão', chain: 'Alta', wheel: 'Alta', all: 'Moderada' },
  { criterion: 'Surgimento de líder', chain: 'Moderado', wheel: 'Alto', all: 'Nenhum' },
  { criterion: 'Satisfação dos membros', chain: 'Moderada', wheel: 'Baixa', all: 'Alta' },
];

const barriers: PanelItem[] = [
  {
    title: 'Filtragem',
    description: 'Ocorre quando a informação é ajustada ou suavizada antes de chegar ao receptor, geralmente para agradar superiores ou evitar conflito.',
  },
  {
    title: 'Percepção seletiva',
    description: 'As pessoas tendem a ouvir e interpretar mensagens conforme interesses, experiências e expectativas anteriores.',
  },
  {
    title: 'Sobrecarga de informação',
    description: 'Quando há mais dados do que a pessoa consegue processar, mensagens importantes podem ser ignoradas, esquecidas ou mal interpretadas.',
  },
  {
    title: 'Emoções',
    description: 'Raiva, medo, ansiedade ou entusiasmo excessivo mudam a forma como a mensagem é codificada, recebida e interpretada.',
  },
  {
    title: 'Linguagem',
    description: 'Jargões, termos técnicos, regionalismos e palavras ambíguas podem gerar sentidos diferentes para emissor e receptor.',
  },
  {
    title: 'Silêncio',
    description: 'A ausência de fala também comunica. Pode indicar medo, falta de confiança, discordância não expressa ou falta de canais seguros.',
  },
  {
    title: 'Apreensão da comunicação',
    description: 'Algumas pessoas sentem tensão ou medo ao falar, escrever ou se expor, o que reduz participação e clareza da mensagem.',
  },
  {
    title: 'Mentira',
    description: 'Informação deliberadamente falsa destrói confiança e dificulta decisões. Mesmo pequenas distorções repetidas prejudicam relações de trabalho.',
  },
];

const leadershipFoundations: ConceptItem[] = [
  {
    title: 'Influenciar uma visão',
    description: 'Liderança é a capacidade de influenciar um grupo para realizar uma visão ou um conjunto de metas. O foco não é apenas mandar, mas mobilizar pessoas em torno de direção comum.',
    accent: 'accent',
  },
  {
    title: 'Pode surgir informalmente',
    description: 'Líderes podem emergir espontaneamente dentro de um grupo, quando ganham confiança e referência, mesmo sem ocupar cargo formal.',
    accent: 'accent3',
  },
  {
    title: 'Pode vir da estrutura',
    description: 'A liderança também pode ser atribuída por indicação formal da hierarquia, como quando alguém assume coordenação, chefia ou gerência.',
    accent: 'accent5',
  },
];

const leadershipTraitTheory: ConceptItem[] = [
  {
    title: 'Teoria dos traços',
    description: 'Procura identificar qualidades pessoais associadas à liderança. Os estudos chegaram a muitos traços, mas a convergência mais consistente se aproxima dos cinco grandes fatores da personalidade.',
    accent: 'accent',
  },
  {
    title: 'Big Five',
    description: 'Traços como abertura, socialização, consciência, extroversão e estabilidade emocional ajudam a compreender tendências de liderança, mas não garantem sucesso isoladamente.',
    accent: 'accent2',
  },
  {
    title: 'Inteligência emocional',
    description: 'Formação, análise e visão não bastam se o líder não entende emoções próprias e alheias. A empatia é destacada como componente central da liderança eficaz.',
    accent: 'accent3',
  },
];

const behavioralLeadership: PanelItem[] = [
  {
    title: 'Comportamento orientado à tarefa',
    description: 'O líder distribui tarefas, organiza o trabalho, acompanha desempenho, cobra prazos e direciona o grupo para a realização das atividades.',
  },
  {
    title: 'Comportamento orientado às pessoas',
    description: 'O líder demonstra interesse pelas necessidades dos funcionários, aceita diferenças, ajuda em problemas pessoais, é amigável e acessível.',
  },
  {
    title: 'Comportamentos podem ser aprendidos',
    description: 'Diferente da visão puramente baseada em traços, as teorias comportamentais sugerem que práticas de liderança podem ser desenvolvidas por treinamento e experiência.',
  },
];

const contingencyLeadership: PanelItem[] = [
  {
    title: 'Modelo de Fiedler',
    description: 'A eficácia depende do encaixe entre o estilo básico do líder e o grau de controle que a situação oferece. Nem todo estilo funciona igualmente bem em toda situação.',
  },
  {
    title: 'Teoria da liderança situacional',
    description: 'O líder eficaz adapta seu comportamento ao nível de maturidade, preparo ou sofisticação dos subordinados. A situação define o tipo de direção e apoio necessários.',
  },
  {
    title: 'Teoria caminho-meta',
    description: 'Robert House defende que o líder deve esclarecer o caminho até os objetivos, reduzir obstáculos e aumentar a motivação para metas individuais e organizacionais.',
  },
  {
    title: 'Modelo de participação do líder',
    description: 'Vroom e Yetton relacionam liderança e participação no processo decisório, indicando quanta participação deve existir conforme a situação.',
  },
];

const fiedlerDimensions: PanelItem[] = [
  {
    title: 'Relação líder-membro',
    description: 'Grau de segurança, confiança e respeito que os membros têm pelo líder.',
  },
  {
    title: 'Estrutura da tarefa',
    description: 'Grau em que as atribuições de trabalho são claras, estruturadas e previsíveis.',
  },
  {
    title: 'Poder de posição',
    description: 'Grau de influência formal do líder sobre contratações, demissões, disciplina, recompensas e decisões organizacionais.',
  },
];

const pathGoalBehaviors: ConceptItem[] = [
  {
    title: 'Apoiador',
    description: 'É amigável, acessível e atento às necessidades dos subordinados, reduzindo tensão e melhorando o clima de trabalho.',
    accent: 'accent',
  },
  {
    title: 'Diretivo',
    description: 'Organiza o trabalho, define direção e fornece instruções sobre como executar as tarefas.',
    accent: 'accent2',
  },
  {
    title: 'Participativo',
    description: 'Usa sugestões dos subordinados nas decisões, aumentando envolvimento e qualidade das escolhas.',
    accent: 'accent3',
  },
  {
    title: 'Orientado para realizações',
    description: 'Apresenta metas desafiadoras e estimula o melhor desempenho possível.',
    accent: 'accent5',
  },
];

const contemporaryLeadership: PanelItem[] = [
  {
    title: 'Liderança carismática',
    description: 'Os seguidores atribuem ao líder capacidades heroicas ou extraordinárias quando observam visão, disposição para correr riscos, sensibilidade ao ambiente e atenção às necessidades dos liderados.',
  },
  {
    title: 'Como o carisma influencia seguidores',
    description: 'O líder tem uma visão, declara essa visão, transmite valores a serem imitados e demonstra coragem e convicção por comportamentos que despertam emoção.',
  },
  {
    title: 'Liderança transformacional',
    description: 'Incentiva, inspira e motiva pessoas a inovar e criar mudanças que ajudam a organização a crescer e moldar seu futuro.',
  },
  {
    title: 'Liderança autêntica',
    description: 'Líderes autênticos sabem quem são, conhecem seus valores e agem de modo aberto e franco. A principal consequência é a confiança dos seguidores.',
  },
];

const leadershipEthics: PanelItem[] = [
  {
    title: 'Ética e liderança',
    description: 'Fazer as coisas de maneira ética, usar o poder para servir aos outros, falar de forma honesta e dar um tom moral elevado à organização.',
  },
  {
    title: 'Confiança e liderança',
    description: 'A confiança encoraja riscos, facilita compartilhamento de informações, aumenta eficácia dos grupos e contribui para a produtividade.',
  },
];

const conflictSources: ConceptItem[] = [
  {
    title: 'Objetivos incompatíveis',
    description: 'Áreas, pessoas ou equipes podem buscar metas que competem entre si, como reduzir custos enquanto outra parte precisa elevar qualidade ou prazo.',
    accent: 'accent',
  },
  {
    title: 'Interpretações diferentes',
    description: 'As partes podem discordar porque leem os mesmos fatos de formas distintas, influenciadas por experiência, informação incompleta ou interesses diferentes.',
    accent: 'accent3',
  },
  {
    title: 'Expectativas comportamentais',
    description: 'Conflitos também surgem quando uma pessoa espera determinada postura, ritmo, transparência ou responsabilidade e a outra age de modo diferente.',
    accent: 'accent5',
  },
];

const conflictViews: PanelItem[] = [
  {
    title: 'Visão tradicional',
    description: 'Enxerga o conflito como negativo, algo a ser evitado, geralmente associado a má comunicação, falta de transparência, pouca confiança e falhas gerenciais.',
  },
  {
    title: 'Visão interacionista',
    description: 'Defende que algum nível de conflito pode ser positivo, pois grupos excessivamente harmoniosos podem se tornar apáticos. Diferencia conflito funcional e disfuncional.',
  },
  {
    title: 'Visão centrada na resolução',
    description: 'Reconhece que o conflito é inevitável, mas alerta que ele pode roubar tempo, gerar mágoas e transformar divergências de tarefa em conflitos de relacionamento.',
  },
];

const conflictTypes: ConceptItem[] = [
  {
    title: 'Conflito de tarefa',
    description: 'Diz respeito ao conteúdo e aos objetivos do trabalho. Pode ser produtivo quando melhora análise, decisões e criatividade.',
    accent: 'accent',
  },
  {
    title: 'Conflito de relacionamento',
    description: 'Envolve relações interpessoais, atritos pessoais, emoções negativas e desconfiança. Costuma prejudicar desempenho e clima.',
    accent: 'accent2',
  },
  {
    title: 'Conflito de processo',
    description: 'Refere-se a como o trabalho será feito, quem faz o quê, quais métodos serão usados e como recursos serão distribuídos.',
    accent: 'accent3',
  },
];

const conflictProcess: PanelItem[] = [
  {
    title: '1. Oposição potencial',
    description: 'Condições antecedentes criam possibilidade de conflito: comunicação ruim, estrutura do grupo, especialização, estilos de liderança, recompensas e variáveis pessoais.',
  },
  {
    title: '2. Cognição e personalização',
    description: 'O conflito pode ser percebido racionalmente ou sentido emocionalmente, quando já afeta as partes de forma consciente.',
  },
  {
    title: '3. Intenções',
    description: 'As partes escolhem uma postura: competir, colaborar, evitar, acomodar ou buscar compromisso.',
  },
  {
    title: '4. Comportamento',
    description: 'Aparecem declarações, ações e reações, desde mal-entendidos leves até ataques verbais, ameaças ou agressões.',
  },
  {
    title: '5. Resultados',
    description: 'O conflito pode gerar resultados funcionais, como melhores decisões e inovação, ou disfuncionais, como descontentamento e destruição de laços da equipe.',
  },
];

const conflictStyles: ConceptItem[] = [
  {
    title: 'Competição',
    description: 'Alta assertividade e baixa cooperação. Útil quando é necessária ação rápida e decisiva, mas pode gerar ressentimento se usada em excesso.',
    accent: 'accent2',
  },
  {
    title: 'Colaboração',
    description: 'Alta assertividade e alta cooperação. Busca solução integrativa, mescla ideias e tenta satisfazer necessidades importantes de todas as partes.',
    accent: 'accent3',
  },
  {
    title: 'Evitação',
    description: 'Baixa assertividade e baixa cooperação. Pode ser adequada quando o problema é trivial ou há questões mais urgentes, mas não resolve conflitos importantes.',
    accent: 'accent4',
  },
  {
    title: 'Acomodação',
    description: 'Baixa assertividade e alta cooperação. Serve quando a pessoa percebe que está errada, quer aprender ou deseja preservar o relacionamento.',
    accent: 'accent5',
  },
  {
    title: 'Compromisso',
    description: 'Combina assertividade e cooperação em nível intermediário. Busca uma solução aceitável quando as metas importam, mas não justificam ruptura.',
    accent: 'accent',
  },
];

const pmbokConflictTechniques: PanelItem[] = [
  {
    title: 'Retirar ou evitar',
    description: 'Recuar, postergar a entrada no conflito ou deixar a resolução para outro momento ou outra pessoa.',
  },
  {
    title: 'Suavizar ou acomodar',
    description: 'Enfatizar áreas de acordo e reduzir destaque das diferenças, preservando relação no curto prazo.',
  },
  {
    title: 'Ceder ou conciliar',
    description: 'Encontrar uma solução que traga alguma satisfação para os envolvidos, ainda que ninguém obtenha tudo o que queria.',
  },
  {
    title: 'Forçar ou direcionar',
    description: 'Impor um ponto de vista em detrimento dos outros. É uma abordagem ganha-perde.',
  },
  {
    title: 'Colaborar ou resolver o problema',
    description: 'Incorporar diversos pontos de vista por troca e diálogo, buscando consenso, compromisso e resultado ganha-ganha.',
  },
];

const negotiationTypes: ConceptItem[] = [
  {
    title: 'Negociação distributiva',
    description: 'As partes competem pela distribuição de um valor fixo. A lógica é ganha-perde: um lado obtém mais vantagem à custa do outro.',
    accent: 'accent2',
  },
  {
    title: 'Negociação integrativa',
    description: 'As partes cooperam para criar valor e buscar ganhos mútuos. O foco é satisfazer interesses dos dois lados e preservar relações duradouras.',
    accent: 'accent3',
  },
];

const negotiationComparison = [
  { criterion: 'Meta', distributive: 'Obter a maior fatia possível', integrative: 'Expandir o bolo para satisfazer ambas as partes' },
  { criterion: 'Motivação', distributive: 'Ganhar-perder', integrative: 'Ganhos mútuos' },
  { criterion: 'Foco', distributive: 'Posições e limites fixos', integrative: 'Interesses e razões por trás das posições' },
  { criterion: 'Informações', distributive: 'Baixo compartilhamento', integrative: 'Alto compartilhamento para encontrar soluções' },
  { criterion: 'Relacionamento', distributive: 'Curto prazo', integrative: 'Longo prazo' },
];

const negotiationProcess: PanelItem[] = [
  {
    title: '1. Preparação e planejamento',
    description: 'Entender a natureza do conflito, histórico, envolvidos, percepções, interesses, limites e objetivos antes da conversa.',
  },
  {
    title: '2. Definição de regras básicas',
    description: 'Definir quem negocia, onde, com quais restrições de tempo e quais limites ou procedimentos serão respeitados.',
  },
  {
    title: '3. Esclarecimento e justificativa',
    description: 'As partes explicam, ampliam, reforçam e justificam suas demandas iniciais, tornando interesses e argumentos mais claros.',
  },
  {
    title: '4. Barganha e resolução de problemas',
    description: 'Momento de dar e receber, propor alternativas e ajustar posições na tentativa de construir acordo.',
  },
  {
    title: '5. Encerramento e implementação',
    description: 'Formaliza o acordo e define procedimentos para executar o que foi combinado.',
  },
];

const negotiationIndividualDifferences: PanelItem[] = [
  {
    title: 'Traços de personalidade',
    description: 'Pessoas mais agradáveis tendem a se aproximar da negociação integrativa, enquanto perfis mais duros podem favorecer táticas distributivas.',
  },
  {
    title: 'Humor e emoções',
    description: 'Na distributiva, raiva pode aumentar dureza. Na integrativa, emoções positivas tendem a melhorar cooperação e resultados.',
  },
  {
    title: 'Cultura',
    description: 'Há diferenças culturais nos estilos, mas algumas táticas de negociação produzem bons resultados em vários contextos.',
  },
  {
    title: 'Gênero',
    description: 'Expectativas sociais podem penalizar comportamentos percebidos como fora do padrão, especialmente quando mulheres negociam de forma mais assertiva.',
  },
];

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
    </div>
  );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-4`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

function PanelList({ items }: { items: PanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
          <h3 className="font-semibold text-sm md:text-base text-text mb-0.5">{item.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function StatStrip({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.map(item => (
        <div key={item.label} className="bg-card border border-border rounded-xl px-5 py-5 text-center">
          <p className={`font-display font-black text-2xl ${item.accent}`}>{item.label}</p>
          <p className="text-text-muted text-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="O que é Comportamento Organizacional?" subtitle="Campo de estudo para entender, prever e melhorar o comportamento humano nas organizações" colorClass="text-accent" />
      <HighlightBox title="Definição central">
        <p>
          Comportamento Organizacional é o campo que investiga o impacto que <strong>indivíduos</strong>, <strong>grupos</strong> e <strong>estruturas</strong> exercem no comportamento dentro das organizações, com a finalidade de aplicar esse conhecimento na melhoria da eficácia organizacional.
        </p>
      </HighlightBox>

      <ConceptGrid items={foundations} columns="md:grid-cols-3" />

      <HighlightBox title="O comportamento não é aleatório" accent="var(--color-accent3)">
        <p>
          O material diferencia a gestão baseada em <strong>evidências científicas</strong>, relações de causa e efeito e estudo sistemático de decisões guiadas por intuição, pressentimento ou achismo.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Ciências comportamentais que apoiam o CO</h3>
        <PanelList items={behavioralSciences} />
      </div>
    </section>
  );
}

function DiversitySection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Diversidade nas Organizações" subtitle="Reconhecer diferenças, reduzir discriminação e aproveitar capacidades diversas" colorClass="text-accent3" />
      <HighlightBox title="Definição">
        <p>
          Diversidade é o conjunto de características que diferenciam as pessoas, tornando cada indivíduo único e singular. Inclui religião, sexualidade, gênero, costumes, nacionalidade, idade, etnia, deficiência e trajetórias de vida.
        </p>
      </HighlightBox>

      <PanelList items={diversityTypes} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Tipos de discriminação</h3>
        <PanelList items={discriminationTypes} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Capacidades no trabalho</h3>
        <ConceptGrid items={capacityTypes} />
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Valores" subtitle="Convicções que sustentam atitudes, motivação e percepção" colorClass="text-accent2" />
      <HighlightBox title="Valores orientam julgamentos">
        <p>
          Valores são convicções básicas de que um modo específico de conduta ou uma condição de existência é preferível ao seu oposto. Eles contêm julgamento sobre o que é correto, bom ou desejável.
        </p>
      </HighlightBox>

      <ConceptGrid items={valuePairs} />

      <HighlightBox title="Sistema de valores" accent="var(--color-accent5)">
        <p>
          Cada pessoa organiza seus valores em uma hierarquia. Essa classificação por intensidade forma o sistema de valores, que tende a ser relativamente estável e duradouro.
        </p>
        <p>
          No CO, valores são importantes porque ajudam a compreender atitudes, motivação e percepção.
        </p>
      </HighlightBox>
    </section>
  );
}

function AttitudesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Atitudes e Satisfação" subtitle="Como avaliações sobre o trabalho se conectam a engajamento, rotatividade e desempenho" colorClass="text-accent4" />
      <HighlightBox title="Atitudes">
        <p>
          Atitudes são afirmações avaliadoras, favoráveis ou desfavoráveis, em relação a objetos, pessoas ou eventos. Elas não são iguais aos valores, mas estão fortemente relacionadas a eles.
        </p>
      </HighlightBox>

      <ConceptGrid items={attitudeComponents} columns="md:grid-cols-3" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Principais atitudes no trabalho</h3>
        <PanelList items={workAttitudes} />
      </div>

      <HighlightBox title="Como medir satisfação no trabalho?" accent="var(--color-accent4)">
        <p>
          O material destaca duas abordagens: a <strong>classificação única global</strong>, com uma pergunta geral sobre satisfação, e a <strong>soma de facetas</strong>, que avalia natureza do trabalho, supervisão, remuneração, promoções e relação com colegas.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Quando funcionários estão insatisfeitos</h3>
        <PanelList items={dissatisfactionResponses} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Como manter pessoas satisfeitas</h3>
        <PanelList items={satisfactionLevers} />
      </div>
    </section>
  );
}

function PerceptionSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Percepção" subtitle="O comportamento se baseia no mundo percebido, não apenas na realidade objetiva" colorClass="text-accent5" />
      <HighlightBox title="Definição">
        <p>
          Percepção é o processo pelo qual os indivíduos organizam e interpretam suas impressões sensoriais para dar significado ao ambiente.
        </p>
      </HighlightBox>

      <ConceptGrid items={perceptionFactors} columns="md:grid-cols-3" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Teoria da atribuição</h3>
        <p className="text-text-muted text-sm md:text-base mb-3 max-w-3xl">
          A teoria tenta explicar como julgamos pessoas de formas diferentes, atribuindo causas internas ou externas a um comportamento.
        </p>
        <PanelList items={attributionFactors} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Atalhos comuns no julgamento</h3>
        <ConceptGrid items={judgmentShortcuts} />
      </div>
    </section>
  );
}

function PersonalitySection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Diferenças Individuais" subtitle="Cada pessoa combina características físicas, personalidade, história e capacidades próprias" colorClass="text-accent3" />
      <HighlightBox title="Não trate diferença como barreira">
        <p>
          O material reforça que entender a diversidade e a singularidade das pessoas é parte do processo de administrar organizações. Diferenças individuais devem ser aproveitadas, não encaradas apenas como obstáculos.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Os cinco grandes fatores da personalidade</h3>
        <ConceptGrid items={bigFive} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>
    </section>
  );
}

function MotivationSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Motivação" subtitle="Energia, direção e persistência para alcançar metas" colorClass="text-accent" />
      <HighlightBox title="Definição">
        <p>
          Motivação é o processo responsável pela <strong>intensidade</strong>, pela <strong>direção</strong> e pela <strong>persistência</strong> dos esforços de uma pessoa para alcançar determinada meta.
        </p>
      </HighlightBox>

      <StatStrip items={motivationStats} />

      <HighlightBox title="Motivação não explica tudo" accent="var(--color-accent3)">
        <p>
          A motivação afeta mais tarefas que exigem criatividade, análise ou interação com pessoas. O desempenho também depende de habilidades, oportunidades e condições adequadas.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Teorias clássicas</h3>
        <ConceptGrid items={motivationClassics} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Engajamento no trabalho</h3>
        <p className="text-text-muted text-sm md:text-base mb-3 max-w-3xl">
          Engajamento é o investimento de energias física, cognitiva e emocional no desempenho. Pessoas engajadas sentem propósito e vão além do esperado.
        </p>
        <PanelList items={engagementActions} />
      </div>
    </section>
  );
}

function TheoriesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Teorias Motivacionais Aplicadas" subtitle="Metas, crença de capacidade, justiça e recompensas percebidas" colorClass="text-accent2" />
      <ConceptGrid items={advancedTheories} />

      <HighlightBox title="Metas e autoeficácia se reforçam">
        <p>
          Quando o gestor estabelece uma meta específica e difícil, a pessoa com alta autoeficácia tende a estabelecer metas pessoais mais altas, persistir mais e alcançar melhor desempenho.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Como aumentar a autoeficácia</h3>
        <PanelList items={selfEfficacySources} />
      </div>

      <div className="study-surface p-5 md:p-6">
        <h3 className="font-display font-bold text-2xl text-accent5 mb-3">Expectativa em três relações</h3>
        <FlowDiagram items={['Esforço', 'Desempenho', 'Recompensa', 'Metas pessoais']} />
        <p className="text-text-muted text-sm md:text-base mt-4 leading-relaxed">
          A teoria funciona melhor quando a organização recompensa desempenho de forma clara, cumpre o que promete e oferece recompensas que as pessoas realmente valorizam.
        </p>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Aplicações Organizacionais" subtitle="Transformando conceitos de motivação em desenho do trabalho, participação e recompensas" colorClass="text-accent3" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Modelo de Características do Trabalho</h3>
        <PanelList items={jobCharacteristics} />
      </div>

      <HighlightBox title="Recompensas internas">
        <p>
          O MCT propõe que pessoas recebem recompensas internas quando percebem que tiveram bom desempenho em uma tarefa significativa, com responsabilidade pela experiência e conhecimento dos resultados.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Como redesenhar trabalhos</h3>
        <PanelList items={workRedesign} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Recompensas e benefícios</h3>
        <PanelList items={rewards} />
      </div>
    </section>
  );
}

function GroupsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Fundamentos do Comportamento de Grupo" subtitle="Como transformar agrupamentos de pessoas em equipes de trabalho" colorClass="text-accent4" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Por que as pessoas participam de grupos?</h3>
        <ConceptGrid items={groupReasons} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Propriedades dos grupos de trabalho</h3>
        <PanelList items={groupProperties} />
      </div>

      <HighlightBox title="Coesividade e diversidade" accent="var(--color-accent5)">
        <p>
          Coesividade aumenta quando membros passam mais tempo juntos, concordam sobre metas e recebem recompensas coletivas. Já a diversidade pode ampliar perspectivas e conflitos; líderes reduzem conflitos ao manter o foco na tarefa e estimular aprendizagem grupal.
        </p>
      </HighlightBox>
    </section>
  );
}

function CommunicationSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Comunicação Interpessoal e Organizacional" subtitle="Transmitir, receber e compartilhar informações com menor ruído possível" colorClass="text-accent5" />
      <HighlightBox title="Processo de comunicação">
        <p>
          Para ocorrer comunicação, é preciso existir um propósito, uma mensagem, um canal, um emissor e um receptor. O <strong>feedback</strong> indica se a mensagem foi compreendida; o <strong>ruído</strong> representa barreiras e distorções.
        </p>
      </HighlightBox>

      <FlowDiagram items={['Emissor', 'Mensagem', 'Canal', 'Receptor', 'Feedback']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Direções da comunicação</h3>
        <PanelList items={communicationDirections} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Comunicação interpessoal</h3>
        <ConceptGrid items={interpersonalCommunication} columns="md:grid-cols-3" />
      </div>

      <div className="overflow-x-auto study-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Critério</th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Cadeia</th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Roda</th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Todos os canais</th>
            </tr>
          </thead>
          <tbody>
            {communicationNetworks.map(row => (
              <tr key={row.criterion} className="border-b border-border/50">
                <td className="py-3 px-4 font-semibold text-text">{row.criterion}</td>
                <td className="py-3 px-4 text-text-muted">{row.chain}</td>
                <td className="py-3 px-4 text-text-muted">{row.wheel}</td>
                <td className="py-3 px-4 text-text-muted">{row.all}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HighlightBox title="Rádio corredor e rumores" accent="var(--color-accent2)">
        <p>
          Rumores surgem quando o assunto é importante, há ambiguidade e a situação desperta ansiedade. Para reduzir efeitos negativos: forneça informações, explique decisões, mantenha canais abertos e evite atacar o mensageiro.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Barreiras à comunicação eficaz</h3>
        <PanelList items={barriers} />
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Liderança" subtitle="Influenciar pessoas, adaptar comportamentos e construir confiança para alcançar metas coletivas" colorClass="text-accent" />
      <HighlightBox title="O que é liderança?">
        <p>
          Liderança é a capacidade de <strong>influenciar um grupo</strong> para a realização de uma visão ou conjunto de metas. Ela pode surgir de modo informal dentro do grupo ou por indicação formal na estrutura hierárquica.
        </p>
      </HighlightBox>

      <ConceptGrid items={leadershipFoundations} columns="md:grid-cols-3" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Teoria dos traços</h3>
        <ConceptGrid items={leadershipTraitTheory} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Teorias comportamentais</h3>
        <p className="text-text-muted text-sm md:text-base mb-3 max-w-3xl">
          Em vez de perguntar apenas quais traços o líder possui, essas teorias perguntam o que a pessoa faz quando lidera.
        </p>
        <PanelList items={behavioralLeadership} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Teorias das contingências</h3>
        <PanelList items={contingencyLeadership} />
      </div>

      <div className="study-surface p-5 md:p-6">
        <h3 className="font-display font-bold text-2xl text-accent mb-3">Modelo de Fiedler</h3>
        <p className="text-text-muted text-sm md:text-base mb-4 leading-relaxed">
          O desempenho eficaz do grupo depende da correspondência entre o estilo básico do líder e o controle que a situação oferece.
        </p>
        <PanelList items={fiedlerDimensions} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Teoria caminho-meta</h3>
        <p className="text-text-muted text-sm md:text-base mb-3 max-w-3xl">
          O líder ajuda o grupo a enxergar o caminho até os objetivos, remove barreiras e ajusta seu comportamento ao que a situação exige.
        </p>
        <ConceptGrid items={pathGoalBehaviors} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Liderança carismática, transformacional e autêntica</h3>
        <PanelList items={contemporaryLeadership} />
      </div>

      <HighlightBox title="Ética, confiança e liderança servil" accent="var(--color-accent5)">
        <p>
          O material reforça que liderança também envolve responsabilidade moral: agir de forma ética, usar o poder para servir, falar com honestidade e produzir confiança.
        </p>
      </HighlightBox>

      <PanelList items={leadershipEthics} />
    </section>
  );
}

function ConflictNegotiationSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Conflito e Negociação" subtitle="Como conflitos surgem, evoluem e podem ser tratados por gestão e negociação" colorClass="text-accent2" />
      <HighlightBox title="O que é conflito?">
        <p>
          Conflito é um processo que começa quando uma parte percebe que outra parte tem ou está prestes a afetar negativamente algo que interessa à primeira.
        </p>
        <p>
          O conflito é parte inerente da vida organizacional. Algum nível de conflito pode ser necessário para evitar apatia e melhorar decisões, desde que seja gerenciado.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">O que gera conflitos?</h3>
        <ConceptGrid items={conflictSources} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Transições na noção de conflito</h3>
        <PanelList items={conflictViews} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Tipos de conflito</h3>
        <ConceptGrid items={conflictTypes} columns="md:grid-cols-3" />
      </div>

      <div className="study-surface p-5 md:p-6">
        <h3 className="font-display font-bold text-2xl text-accent4 mb-3">Processo de conflito</h3>
        <FlowDiagram items={['Oposição', 'Percepção', 'Intenções', 'Comportamento', 'Resultados']} />
        <div className="mt-4">
          <PanelList items={conflictProcess} />
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Cinco estilos de gestão de conflitos</h3>
        <p className="text-text-muted text-sm md:text-base mb-3 max-w-3xl">
          Os estilos combinam dois eixos: assertividade, que é o quanto a parte busca satisfazer seus próprios interesses, e cooperação, que é o quanto considera os interesses da outra parte.
        </p>
        <ConceptGrid items={conflictStyles} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Técnicas de gerenciamento citadas no PMBOK</h3>
        <PanelList items={pmbokConflictTechniques} />
      </div>

      <HighlightBox title="O que é negociação?" accent="var(--color-accent3)">
        <p>
          Negociação é um processo de comunicação interativo em que duas ou mais partes buscam acordo para alocar recursos escassos e atender a seus interesses.
        </p>
      </HighlightBox>

      <ConceptGrid items={negotiationTypes} />

      <div className="overflow-x-auto study-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Característica</th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Distributiva</th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Integrativa</th>
            </tr>
          </thead>
          <tbody>
            {negotiationComparison.map(row => (
              <tr key={row.criterion} className="border-b border-border/50">
                <td className="py-3 px-4 font-semibold text-text">{row.criterion}</td>
                <td className="py-3 px-4 text-text-muted">{row.distributive}</td>
                <td className="py-3 px-4 text-text-muted">{row.integrative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Processo de negociação</h3>
        <PanelList items={negotiationProcess} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Diferenças individuais na eficácia da negociação</h3>
        <PanelList items={negotiationIndividualDifferences} />
      </div>

      <HighlightBox title="Orientação prática aos gestores">
        <p>
          Use competitividade em emergências, colaboração para soluções integrativas, evitação em problemas triviais, acomodação quando for preciso aprender ou preservar relações e compromisso quando as metas importam, mas não justificam ruptura.
        </p>
      </HighlightBox>
    </section>
  );
}

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Quiz de Revisão" subtitle="30 perguntas cobrindo os principais tópicos dos materiais" colorClass="text-accent4" />
      {QUIZ_DATA.map(question => (
        <QuizCard key={question.id} data={question} />
      ))}
    </section>
  );
}

function AiQuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Quiz com IA" subtitle="Perguntas inéditas geradas a partir do guia da disciplina" colorClass="text-accent3" />
      <HighlightBox title="Como funciona?">
        <p>
          A IA usa o resumo estruturado de Comportamento Organizacional e os temas do módulo para gerar lotes de 1, 5 ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
        </p>
      </HighlightBox>
      <AIQuizGenerator guideContext={COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT} topics={COMPORTAMENTO_ORGANIZACIONAL_TOPICS} />
    </section>
  );
}

export default function ComportamentoOrganizacionalSections({ activeSection }: ComportamentoOrganizacionalSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'diversidade':
      return <DiversitySection />;
    case 'valores':
      return <ValuesSection />;
    case 'atitudes':
      return <AttitudesSection />;
    case 'percepcao':
      return <PerceptionSection />;
    case 'personalidade':
      return <PersonalitySection />;
    case 'motivacao':
      return <MotivationSection />;
    case 'teorias':
      return <TheoriesSection />;
    case 'aplicacoes':
      return <ApplicationsSection />;
    case 'grupos':
      return <GroupsSection />;
    case 'comunicacao':
      return <CommunicationSection />;
    case 'lideranca':
      return <LeadershipSection />;
    case 'conflito':
      return <ConflictNegotiationSection />;
    case 'quiz':
      return <QuizSection />;
    case 'iaquiz':
      return <AiQuizSection />;
    default:
      return null;
  }
}
