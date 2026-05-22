import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT = `
GUIA COMPLETO DE COMPORTAMENTO ORGANIZACIONAL — Resumo:

1. FUNDAMENTOS: CO investiga como indivíduos, grupos e estruturas afetam o comportamento nas organizações. Objetivo: entender e prever o comportamento humano. O comportamento não é aleatório: exige evidências, causa e efeito e estudo sistemático. Bases: psicologia, sociologia, psicologia social e antropologia.

2. DIVERSIDADE: É o conjunto de características que diferencia pessoas: religião, sexualidade, gênero, costumes, nacionalidade, idade, etnia, deficiência e trajetórias de vida. Aparente: traços visíveis como idade, etnia, gênero, raça, religião e deficiência. Profunda: personalidade, valores, capacidades e habilidades. Discriminação inferioriza pessoas. Tipos: políticas discriminatórias, assédio sexual, intimidação, zombaria, exclusão e incivilidade.

3. VALORES, ATITUDES E SATISFAÇÃO: Valores são convicções sobre condutas ou condições preferíveis; têm conteúdo e intensidade. Terminais são metas desejáveis; instrumentais são meios de comportamento. Atitudes são avaliações favoráveis ou desfavoráveis com cognição, afeto e comportamento. Atitudes no trabalho: satisfação, envolvimento, comprometimento, suporte percebido e engajamento. Satisfação: pergunta global ou soma de facetas. Insatisfação: saída, comunicação, lealdade ou negligência.

4. PERCEPÇÃO E DIFERENÇAS INDIVIDUAIS: Percepção organiza e interpreta impressões sensoriais; pessoas agem conforme o mundo percebido. Fatores: percebedor, alvo e situação. Atribuição julga causas internas ou externas por diferenciação, consenso e coerência. Atalhos: percepção seletiva, halo, contraste e estereótipo. Big Five: abertura, consciência, extroversão, socialização e neuroticismo.

5. MOTIVAÇÃO: Envolve intensidade, direção e persistência do esforço. Desempenho também depende de habilidades, oportunidades e condições. Teorias: Maslow, McGregor X/Y, Herzberg (higiênicos evitam insatisfação; motivacionais geram satisfação), autodeterminação, engajamento, definição de metas, autoeficácia, justiça/equidade e expectativa.

6. APLICAÇÕES NO TRABALHO: O Modelo de Características do Trabalho usa variedade de habilidades, identidade da tarefa, significância, autonomia e feedback. Redesenho: rodízio, enriquecimento, compartilhamento, remoto e horário flexível. Envolvimento: gestão participativa e participação representativa. Recompensas: variável, produção, mérito, bônus, habilidades, lucros/resultados, benefícios flexíveis e reconhecimento.

7. GRUPOS E COMUNICAÇÃO: Pessoas entram em grupos por segurança, status, autoestima, afiliação, poder e metas. Propriedades: papéis, normas, status, tamanho, coesividade e diversidade. Comunicação exige propósito, mensagem, canal, emissor e receptor; feedback confirma compreensão e ruído distorce. Direções: descendente, ascendente e lateral. Formas: oral, escrita e não verbal. Redes: cadeia, roda e todos os canais. Barreiras: filtragem, percepção seletiva, sobrecarga, emoções, linguagem e silêncio.

8. LIDERANÇA: Liderança é a capacidade de influenciar um grupo para realizar uma visão ou conjunto de metas; pode emergir informalmente ou por indicação formal. Teorias dos traços buscam qualidades pessoais e conectam liderança ao Big Five e à inteligência emocional, especialmente empatia. Teorias comportamentais distinguem comportamentos orientados à tarefa e às pessoas. Teorias contingenciais incluem Fiedler, liderança situacional, caminho-meta e participação do líder. Liderança carismática envolve visão, risco, sensibilidade ao ambiente e indução emocional. Liderança transformacional inspira inovação e mudança. Liderança autêntica combina ética, valores abertos, confiança e uso responsável do poder.

9. CONFLITO E NEGOCIAÇÃO: Conflito começa quando uma parte percebe que outra afeta ou pode afetar negativamente algo importante. Pode surgir por objetivos incompatíveis, interpretações diferentes e expectativas comportamentais. Visões sobre conflito: tradicional, interacionista e gerenciada. Tipos: tarefa, relacionamento e processo. Processo de conflito: oposição potencial, cognição/personalização, intenções, comportamento e resultados. Estilos: competição, colaboração, evitação, acomodação e compromisso, equilibrando assertividade e cooperação. Negociação é um processo comunicativo para alocar recursos escassos e buscar acordo. Pode ser distributiva (ganha-perde, valor fixo) ou integrativa (ganhos mútuos, criação de valor). Processo: preparação, regras, esclarecimento, barganha e encerramento.

DIVISÃO POR AVALIAÇÕES:
- PROVA 1: Fundamentos, diversidade, valores, atitudes, satisfação, percepção, diferenças individuais e motivação.
- PROVA 2: Teorias motivacionais aplicadas, aplicações no trabalho, grupos, comunicação, liderança, conflito e negociação.
`;

export const COMPORTAMENTO_ORGANIZACIONAL_TOPICS: QuizTopicOption[] = [
  {
    value: 'prova1',
    label: 'Prova 1: Indivíduos e Motivação',
    prompt: 'Conteúdo da Prova 1: fundamentos do comportamento organizacional, indivíduos, grupos e estrutura como determinantes, gestão baseada em evidências, diversidade aparente e profunda, discriminação, capacidades, valores, atitudes, satisfação, insatisfação, percepção, teoria da atribuição, atalhos de julgamento, Big Five, motivação, Maslow, McGregor X/Y, Herzberg, autodeterminação e engajamento.',
  },
  {
    value: 'prova2',
    label: 'Prova 2: Grupos e Gestão',
    prompt: 'Conteúdo da Prova 2: teorias motivacionais aplicadas, definição de metas, autoeficácia, justiça organizacional, expectativa, modelo de características do trabalho, redesenho do trabalho, recompensas, comportamento de grupo, comunicação organizacional, liderança, teorias dos traços, teorias comportamentais, contingenciais, liderança carismática, transformacional e autêntica, conflito e negociação.',
  },
  { value: 'fundamentos', label: 'Fundamentos do CO' },
  { value: 'diversidade', label: 'Diversidade nas Organizações' },
  { value: 'valores-atitudes', label: 'Valores, Atitudes e Satisfação' },
  { value: 'percepcao', label: 'Percepção e Diferenças Individuais' },
  { value: 'motivacao', label: 'Motivação' },
  { value: 'trabalho', label: 'Aplicações no Trabalho' },
  { value: 'grupos', label: 'Comportamento de Grupo' },
  { value: 'comunicacao', label: 'Comunicação Organizacional' },
  { value: 'lideranca', label: 'Liderança' },
  { value: 'conflito-negociacao', label: 'Conflito e Negociação' },
];

export const COMPORTAMENTO_ORGANIZACIONAL_SECTIONS = [
  { id: 'intro', title: 'Introdução ao CO', shortTitle: 'Introdução', exam: 'P1' },
  { id: 'diversidade', title: 'Diversidade nas Organizações', shortTitle: 'Diversidade', exam: 'P1' },
  { id: 'valores', title: 'Valores', shortTitle: 'Valores', exam: 'P1' },
  { id: 'atitudes', title: 'Atitudes e Satisfação', shortTitle: 'Atitudes', exam: 'P1' },
  { id: 'percepcao', title: 'Percepção', shortTitle: 'Percepção', exam: 'P1' },
  { id: 'personalidade', title: 'Diferenças Individuais', shortTitle: 'Personalidade', exam: 'P1' },
  { id: 'motivacao', title: 'Motivação', shortTitle: 'Motivação', exam: 'P1' },
  { id: 'teorias', title: 'Teorias Motivacionais', shortTitle: 'Teorias', exam: 'P2' },
  { id: 'aplicacoes', title: 'Aplicações Organizacionais', shortTitle: 'Aplicações', exam: 'P2' },
  { id: 'grupos', title: 'Comportamento de Grupo', shortTitle: 'Grupos', exam: 'P2' },
  { id: 'comunicacao', title: 'Comunicação', shortTitle: 'Comunicação', exam: 'P2' },
  { id: 'lideranca', title: 'Liderança', shortTitle: 'Liderança', exam: 'P2' },
  { id: 'conflito', title: 'Conflito e Negociação', shortTitle: 'Conflitos', exam: 'P2' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_BASE: QuizQuestionData[] = [
  {
    id: 'q1',
    question: '1. O que o Comportamento Organizacional estuda?',
    options: [
      'Apenas a produtividade financeira das empresas',
      'O impacto de indivíduos, grupos e estruturas no comportamento dentro das organizações',
      'Somente normas legais de contratação e demissão',
      'Técnicas de propaganda para melhorar a imagem institucional',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. CO conecta indivíduos, grupos e estrutura para melhorar a eficácia organizacional.',
    feedbackWrong: 'CO estuda como indivíduos, grupos e estruturas influenciam o comportamento nas organizações.',
  },
  {
    id: 'q2',
    question: '2. Quais são os três determinantes do comportamento nas organizações apresentados na aula?',
    options: ['Pessoas, lucro e tecnologia', 'Indivíduos, grupos e estrutura', 'Clientes, fornecedores e gestores', 'Motivação, salário e poder'],
    correctIndex: 1,
    feedbackCorrect: 'Isso mesmo. O material organiza o CO em torno de indivíduos, grupos e estrutura.',
    feedbackWrong: 'A resposta correta é: indivíduos, grupos e estrutura.',
  },
  {
    id: 'q3',
    question: '3. Por que o material afirma que o comportamento não é aleatório?',
    options: [
      'Porque todas as pessoas reagem da mesma forma',
      'Porque pode ser estudado por relações de causa e efeito e evidências',
      'Porque gestores experientes sempre sabem prever pessoas por intuição',
      'Porque normas organizacionais eliminam diferenças individuais',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. A disciplina valoriza estudo sistemático e gestão baseada em evidências.',
    feedbackWrong: 'O ponto central é substituir achismo por estudo sistemático, evidências e relações de causa e efeito.',
  },
  {
    id: 'q4',
    question: '4. Qual alternativa diferencia diversidade aparente e diversidade profunda?',
    options: [
      'Aparente envolve capacidades; profunda envolve idade e gênero',
      'Aparente é sempre menos importante; profunda é sempre mensurável',
      'Aparente envolve traços visíveis; profunda envolve personalidade, valores e habilidades',
      'Aparente ocorre só fora do trabalho; profunda ocorre só dentro do trabalho',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Correto. A diversidade aparente é mais visível; a profunda está ligada a valores, personalidade e capacidades.',
    feedbackWrong: 'Diversidade aparente envolve características visíveis; diversidade profunda envolve personalidade, valores e habilidades.',
  },
  {
    id: 'q5',
    question: '5. Qual situação caracteriza exclusão como tipo de discriminação?',
    options: [
      'Negar a determinadas pessoas oportunidades de trabalho, eventos ou reuniões',
      'Discordar tecnicamente de uma decisão em reunião',
      'Definir uma meta difícil para toda a equipe',
      'Cobrar feedback de desempenho com critérios claros',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Exclusão é afastar pessoas de oportunidades, eventos ou espaços de participação.',
    feedbackWrong: 'Exclusão ocorre quando certas pessoas são impedidas de acessar oportunidades, eventos ou reuniões.',
  },
  {
    id: 'q6',
    question: '6. No material, capacidade é entendida como:',
    options: [
      'O cargo formal ocupado na hierarquia',
      'O saber-fazer para executar tarefas, dividido em capacidades físicas e intelectuais',
      'A satisfação emocional do funcionário',
      'O conjunto de benefícios oferecidos pela empresa',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Perfeito. Capacidade é habilidade para realizar tarefas, podendo ser física ou intelectual.',
    feedbackWrong: 'Capacidade é o saber-fazer necessário para executar tarefas, dividindo-se em física e intelectual.',
  },
  {
    id: 'q7',
    question: '7. Valores possuem quais dois atributos principais?',
    options: ['Poder e status', 'Conteúdo e intensidade', 'Satisfação e rotatividade', 'Feedback e autonomia'],
    correctIndex: 1,
    feedbackCorrect: 'Isso. Conteúdo indica o que é importante; intensidade indica o quanto é importante.',
    feedbackWrong: 'Valores possuem atributos de conteúdo e intensidade.',
  },
  {
    id: 'q8',
    question: '8. Valores terminais e instrumentais se diferenciam porque:',
    options: [
      'Terminais são metas desejáveis; instrumentais são meios de comportamento para alcançá-las',
      'Terminais são sempre profissionais; instrumentais são sempre familiares',
      'Terminais mudam todo dia; instrumentais são inatos',
      'Terminais medem satisfação; instrumentais medem produtividade',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Terminais são fins; instrumentais são modos de conduta para chegar a esses fins.',
    feedbackWrong: 'Valores terminais são condições ou metas desejadas; instrumentais são meios comportamentais.',
  },
  {
    id: 'q9',
    question: '9. Quais são os três componentes de uma atitude?',
    options: ['Salário, cargo e feedback', 'Cognição, afeto e comportamento', 'Status, poder e afiliação', 'Ruído, canal e receptor'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A atitude tem componente cognitivo, afetivo e comportamental.',
    feedbackWrong: 'Os três componentes são cognição, afeto e comportamento.',
  },
  {
    id: 'q10',
    question: '10. O comprometimento organizacional é melhor descrito como:',
    options: [
      'A opinião do funcionário sobre uma tarefa específica',
      'A identificação do trabalhador com a empresa e o desejo de permanecer nela',
      'A quantidade de reuniões formais da equipe',
      'O grau de habilidade física exigido por uma função',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Isso. Comprometimento envolve identificação com a organização e intenção de permanecer.',
    feedbackWrong: 'Comprometimento organizacional é identificação com a empresa e desejo de continuar fazendo parte dela.',
  },
  {
    id: 'q11',
    question: '11. Uma forma de medir satisfação por soma de facetas analisa:',
    options: [
      'Apenas uma pergunta geral sobre satisfação',
      'Natureza do trabalho, supervisão, remuneração, promoções e colegas',
      'Somente a quantidade de faltas do mês',
      'O número de mensagens enviadas pelo funcionário',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A soma de facetas avalia elementos-chave do trabalho e compõe uma pontuação geral.',
    feedbackWrong: 'A soma de facetas considera fatores como trabalho, supervisão, remuneração, promoções e colegas.',
  },
  {
    id: 'q12',
    question: '12. Na resposta à insatisfação, negligência significa:',
    options: [
      'Buscar ativamente melhorias com sugestões',
      'Esperar passivamente que a situação melhore',
      'Deixar as coisas piorarem, com atrasos, faltas, menor empenho ou mais erros',
      'Abandonar a empresa imediatamente',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Exato. Negligência é resposta destrutiva e passiva à insatisfação.',
    feedbackWrong: 'Negligência é deixar a situação piorar: atrasos, absenteísmo, menos empenho e aumento de erros.',
  },
  {
    id: 'q13',
    question: '13. A percepção é importante no CO porque:',
    options: [
      'As pessoas agem com base no que percebem como realidade',
      'Ela elimina conflitos de interpretação',
      'Ela torna todos os julgamentos objetivos',
      'Ela substitui a motivação no trabalho',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. O comportamento é guiado pelo mundo percebido.',
    feedbackWrong: 'A percepção importa porque as pessoas se comportam conforme interpretam a realidade.',
  },
  {
    id: 'q14',
    question: '14. Quais fatores influenciam a percepção segundo o material?',
    options: ['Emissor, receptor e canal', 'Quem percebe, o alvo percebido e a situação', 'Lucro, custo e preço', 'Normas, status e tamanho'],
    correctIndex: 1,
    feedbackCorrect: 'Isso. A percepção depende do indivíduo que percebe, do alvo e do contexto.',
    feedbackWrong: 'Os fatores são: quem percebe, o alvo percebido e a situação/contexto.',
  },
  {
    id: 'q15',
    question: '15. Na teoria da atribuição, diferenciação, consenso e coerência ajudam a:',
    options: [
      'Definir recompensas financeiras',
      'Julgar se um comportamento tem causa interna ou externa',
      'Calcular satisfação por facetas',
      'Escolher a rede formal de comunicação',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Esses critérios orientam atribuições internas ou externas.',
    feedbackWrong: 'Eles são usados para interpretar se o comportamento decorre de causas internas ou externas.',
  },
  {
    id: 'q16',
    question: '16. O efeito halo ocorre quando:',
    options: [
      'Uma pessoa é avaliada em comparação com outra recém-observada',
      'Um julgamento geral é formado a partir de uma única característica',
      'A pessoa ignora totalmente características marcantes',
      'Um grupo elimina todas as diferenças individuais',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. O halo transforma uma característica em impressão geral.',
    feedbackWrong: 'Efeito halo é formar uma impressão geral com base em uma única característica.',
  },
  {
    id: 'q17',
    question: '17. No Big Five, consciência está ligada principalmente a:',
    options: [
      'Organização, responsabilidade e confiabilidade',
      'Busca por contato social e eloquência',
      'Ansiedade, tensão e preocupação',
      'Imaginação artística e originalidade',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Isso. Pessoas conscienciosas tendem a ser organizadas, cautelosas e confiáveis.',
    feedbackWrong: 'Consciência envolve organização, responsabilidade, cautela e confiabilidade.',
  },
  {
    id: 'q18',
    question: '18. Motivação é definida como o processo responsável por:',
    options: [
      'Intensidade, direção e persistência do esforço',
      'Salário, benefícios e estabilidade',
      'Normas, papéis e status do grupo',
      'Emissor, mensagem e receptor',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Esses são os três elementos centrais da definição.',
    feedbackWrong: 'Motivação envolve intensidade, direção e persistência dos esforços para alcançar metas.',
  },
  {
    id: 'q19',
    question: '19. Pela teoria de Maslow, para motivar alguém é importante:',
    options: [
      'Ignorar necessidades já satisfeitas e focar só em dinheiro',
      'Entender em qual nível da hierarquia a pessoa está e agir nesse nível ou no superior',
      'Tratar autorrealização como necessidade exclusivamente externa',
      'Aplicar sempre a mesma recompensa para todos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. O material destaca a leitura do nível atual de necessidade.',
    feedbackWrong: 'Maslow sugere entender o nível atual da pessoa e focar nele ou no nível acima.',
  },
  {
    id: 'q20',
    question: '20. Na teoria dos dois fatores de Herzberg, fatores higiênicos são:',
    options: [
      'Intrínsecos, como autorrealização e reconhecimento',
      'Extrínsecos, como salário, benefícios, condições de trabalho e relacionamento',
      'Sempre suficientes para gerar alta motivação',
      'O mesmo que metas SMART',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Fatores higiênicos são contextuais e evitam insatisfação.',
    feedbackWrong: 'Fatores higiênicos são extrínsecos: salário, benefícios, condições físicas, gestão e relacionamento.',
  },
  {
    id: 'q21',
    question: '21. A teoria da autodeterminação alerta que a motivação pode cair quando:',
    options: [
      'Uma tarefa antes apreciada passa a parecer obrigação controlada externamente',
      'A pessoa recebe autonomia sobre suas ações',
      'A equipe compreende o propósito do trabalho',
      'A meta é clara e tem feedback',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A perda de sensação de escolha pode minar a motivação intrínseca.',
    feedbackWrong: 'A motivação pode cair quando algo apreciado passa a ser percebido como obrigação.',
  },
  {
    id: 'q22',
    question: '22. A teoria da definição de metas afirma que desempenho melhora com:',
    options: [
      'Metas vagas, fáceis e sem retorno',
      'Metas específicas, desafiadoras e com feedback',
      'Ausência de objetivos formais',
      'Recompensas sem relação com desempenho',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Isso. Especificidade, desafio e feedback são os pontos-chave.',
    feedbackWrong: 'Metas específicas e difíceis, acompanhadas de feedback, tendem a elevar desempenho.',
  },
  {
    id: 'q23',
    question: '23. Autoeficácia é:',
    options: [
      'A crença da pessoa na própria capacidade de realizar metas',
      'A obrigação formal de obedecer à hierarquia',
      'A comparação entre entradas e recompensas',
      'A velocidade da rede de comunicação',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Autoeficácia é confiança na própria capacidade de alcançar resultados.',
    feedbackWrong: 'Autoeficácia é a crença na própria capacidade de executar tarefas e atingir metas.',
  },
  {
    id: 'q24',
    question: '24. A justiça organizacional trata principalmente de:',
    options: [
      'Como trabalhadores percebem se decisões e resultados foram justos',
      'Como redes sociais divulgam a empresa',
      'Como cargos são desenhados para usar habilidades motoras',
      'Como grupos aumentam status individual',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A teoria enfatiza percepções de justiça nas decisões e distribuições.',
    feedbackWrong: 'Justiça organizacional envolve a percepção de tratamento justo em decisões e distribuição de resultados.',
  },
  {
    id: 'q25',
    question: '25. Na teoria da expectativa de Vroom, valência significa:',
    options: [
      'A crença de que esforço aumenta desempenho',
      'O valor percebido da recompensa para o colaborador',
      'A clareza da relação entre desempenho e recompensa',
      'A capacidade física exigida para uma função',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Valência é o quanto a recompensa vale para a pessoa.',
    feedbackWrong: 'Valência é o valor percebido da recompensa pelo colaborador.',
  },
  {
    id: 'q26',
    question: '26. Qual alternativa reúne dimensões do Modelo de Características do Trabalho?',
    options: [
      'Filtragem, linguagem e silêncio',
      'Variedade de habilidades, identidade da tarefa, significância, autonomia e feedback',
      'Status, raça, etnia, idade e religião',
      'Saída, comunicação, lealdade e negligência',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Perfeito. Essas cinco dimensões descrevem o desenho de uma função.',
    feedbackWrong: 'O MCT usa variedade de habilidades, identidade, significância, autonomia e feedback.',
  },
  {
    id: 'q27',
    question: '27. Coesividade de grupo é:',
    options: [
      'O grau em que membros são atraídos entre si e motivados a permanecer no grupo',
      'O conflito entre papéis formais e informais',
      'A velocidade com que rumores circulam',
      'A diferença entre comunicação oral e escrita',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Coesividade explica atração e permanência no grupo.',
    feedbackWrong: 'Coesividade é o grau de atração entre membros e motivação para permanecer no grupo.',
  },
  {
    id: 'q28',
    question: '28. Em grupos, conflito de papéis ocorre quando:',
    options: [
      'Todos concordam com a mesma norma',
      'A exigência de um papel dificulta o desempenho de outro',
      'O grupo é pequeno demais para produzir',
      'A comunicação é lateral',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Isso. O conflito aparece quando papéis demandam comportamentos incompatíveis.',
    feedbackWrong: 'Conflito de papéis ocorre quando cumprir um papel dificulta cumprir outro.',
  },
  {
    id: 'q29',
    question: '29. No processo de comunicação, ruído é:',
    options: [
      'O meio pelo qual a mensagem trafega',
      'O retorno que confirma entendimento',
      'A barreira ou distorção que prejudica a mensagem',
      'A pessoa que recebe a informação',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Correto. Ruído é qualquer barreira ou distorção na comunicação.',
    feedbackWrong: 'Ruído representa barreiras e distorções que dificultam a comunicação eficaz.',
  },
  {
    id: 'q30',
    question: '30. Comunicação descendente é aquela que:',
    options: [
      'Flui de um nível superior para um nível inferior',
      'Flui apenas entre colegas do mesmo grupo',
      'Surge espontaneamente na rádio corredor',
      'É feita somente por linguagem não verbal',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Comunicação descendente vai de níveis superiores para inferiores, como instruções e objetivos.',
    feedbackWrong: 'Comunicação descendente flui de um nível mais alto para um nível inferior.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = QUIZ_DATA_BASE.map((question, index) => ({
  ...question,
  exam: index < 21 ? 'prova1' as const : 'prova2' as const,
}));
