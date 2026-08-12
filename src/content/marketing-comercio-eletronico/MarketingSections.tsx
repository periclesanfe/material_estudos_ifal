import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import ConceptCard from '../../components/ui/ConceptCard';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  ConceptGrid,
  PanelList,
  TheoryBlock,
  ComparisonTable,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { MARKETING_GUIDE_CONTEXT, MARKETING_TOPICS, QUIZ_DATA } from './data';

interface MarketingSectionsProps {
  activeSection: string;
}

const marketingApplications: ConceptItem[] = [
  {
    title: 'Bens',
    description: 'Produtos físicos e tangíveis, como alimentos, computadores, roupas e veículos. O marketing trabalha atributos, embalagem, marca, preço e distribuição para tornar o bem desejável.',
    accent: 'accent',
  },
  {
    title: 'Serviços',
    description: 'Atividades intangíveis, como consultoria, educação, transporte, saúde e suporte técnico. Como não podem ser estocados, dependem muito da qualidade do atendimento e da experiência entregue.',
    accent: 'accent2',
  },
  {
    title: 'Eventos',
    description: 'Congressos, shows, feiras, campeonatos e lançamentos. O marketing define público, proposta de valor, divulgação, venda de ingressos e experiência antes, durante e depois do evento.',
    accent: 'accent3',
  },
  {
    title: 'Experiências',
    description: 'Vivências planejadas para gerar memória e emoção, como parques, turismo, degustações e ações imersivas. O foco não é só o produto, mas a sensação associada à marca.',
    accent: 'accent4',
  },
  {
    title: 'Pessoas',
    description: 'Imagem pública de profissionais, artistas, candidatos, influenciadores e especialistas. O marketing ajuda a posicionar reputação, credibilidade e diferenciais percebidos.',
    accent: 'accent5',
  },
  {
    title: 'Lugares',
    description: 'Cidades, regiões, destinos turísticos e espaços comerciais. O objetivo é atrair visitantes, moradores, investidores ou consumidores por meio de identidade e benefícios claros.',
    accent: 'accent',
  },
  {
    title: 'Propriedades',
    description: 'Bens com direito de posse ou uso, como imóveis, ações, franquias e licenças. O marketing comunica valor, segurança, rentabilidade e diferenciais da oportunidade.',
    accent: 'accent2',
  },
  {
    title: 'Organizações',
    description: 'Empresas, instituições públicas, ONGs e escolas também precisam construir imagem. A comunicação reforça confiança, missão, cultura e relevância social.',
    accent: 'accent3',
  },
  {
    title: 'Informações',
    description: 'Cursos, relatórios, notícias, bases de dados e conteúdos especializados. O valor está na utilidade, confiabilidade, atualização e facilidade de acesso.',
    accent: 'accent4',
  },
  {
    title: 'Ideias',
    description: 'Causas, comportamentos e propostas, como vacinação, sustentabilidade, segurança no trânsito ou inclusão. O marketing busca adesão, mudança de atitude e mobilização.',
    accent: 'accent5',
  },
];

const maslowDetails: PanelItem[] = [
  {
    title: '1. Fisiológicas',
    description: 'São necessidades básicas de sobrevivência, como alimentação, água, sono e descanso. Em marketing, aparecem em produtos ligados a conforto físico, saúde, alimentação e bem-estar imediato.',
  },
  {
    title: '2. Segurança',
    description: 'Envolvem proteção, estabilidade, previsibilidade e redução de riscos. Seguros, planos de saúde, garantias, estabilidade financeira e sistemas de proteção costumam explorar esse nível.',
  },
  {
    title: '3. Sociais',
    description: 'Ligam-se a pertencimento, amizade, afeto e aceitação em grupos. Marcas podem trabalhar comunidade, relacionamento, identificação e experiências compartilhadas.',
  },
  {
    title: '4. Estima',
    description: 'Relacionam-se a reconhecimento, status, prestígio, autoestima e respeito. Produtos premium, certificações, cargos, marcas aspiracionais e símbolos de conquista atuam nesse nível.',
  },
  {
    title: '5. Autorrealização',
    description: 'Representa desenvolvimento pessoal, propósito, criatividade e realização do potencial. Cursos, experiências transformadoras, projetos autorais e causas pessoais dialogam com esse estágio.',
  },
];

const eightPsItems: ConceptItem[] = [
  {
    title: '1. Produto',
    description: 'É a solução oferecida ao cliente. Inclui características, qualidade, design, embalagem, marca, garantia e tudo que compõe a entrega de valor.',
    accent: 'accent',
  },
  {
    title: '2. Preço',
    description: 'É o valor cobrado e também um sinal de posicionamento. Deve considerar custos, concorrência, percepção de valor, margem e capacidade de pagamento do público.',
    accent: 'accent2',
  },
  {
    title: '3. Praça',
    description: 'Define onde e como o cliente acessa o produto: canais, logística, estoque, cobertura geográfica, entrega e conveniência de compra.',
    accent: 'accent3',
  },
  {
    title: '4. Promoção',
    description: 'Reúne ações de comunicação para tornar a oferta conhecida e desejada, como publicidade, vendas, redes sociais, promoções e relações públicas.',
    accent: 'accent4',
  },
  {
    title: '5. Pessoas',
    description: 'Inclui colaboradores, vendedores, atendimento, parceiros e clientes envolvidos na experiência. Em serviços, a postura das pessoas pode definir a qualidade percebida.',
    accent: 'accent5',
  },
  {
    title: '6. Processos',
    description: 'São os fluxos e rotinas que sustentam a entrega: pedido, pagamento, atendimento, suporte, troca e pós-venda. Bons processos reduzem atrito e aumentam confiança.',
    accent: 'accent',
  },
  {
    title: '7. Posicionamento',
    description: 'É o lugar que a marca ocupa na mente do cliente. Depende de diferenciais claros, coerência na comunicação e comparação com concorrentes.',
    accent: 'accent2',
  },
  {
    title: '8. Performance',
    description: 'É o acompanhamento de resultados por métricas, como vendas, retenção, satisfação, conversão, lucratividade e retorno das campanhas.',
    accent: 'accent3',
  },
];

const relationshipCharacteristics: PanelItem[] = [
  {
    title: 'Aplicar informações',
    description: 'Usar dados de atendimento, compras, preferências e reclamações para tomar decisões melhores, personalizar ofertas e antecipar necessidades.',
  },
  {
    title: 'Identificar o cliente',
    description: 'Saber quem compra, com que frequência, por quais canais e com quais expectativas. Sem identificação, a empresa trata todos de forma genérica.',
  },
  {
    title: 'Identificar necessidades',
    description: 'Entender o problema real do cliente, inclusive o que ele não declara diretamente, para entregar soluções mais adequadas.',
  },
  {
    title: 'Criar conversas',
    description: 'Manter canais de diálogo ativos, ouvir feedbacks e responder com rapidez. Relacionamento depende de troca, não apenas de propaganda.',
  },
  {
    title: 'Criar proximidade',
    description: 'Fazer o cliente sentir que a marca reconhece seu histórico e valor. Atendimento personalizado e comunicação útil fortalecem essa aproximação.',
  },
  {
    title: 'Aprimorar processos',
    description: 'Usar o relacionamento para perceber falhas recorrentes e melhorar compra, entrega, suporte, troca, cobrança e pós-venda.',
  },
  {
    title: 'Criar valor',
    description: 'Oferecer benefícios percebidos como superiores ao custo, como conveniência, confiança, qualidade, orientação e economia de tempo.',
  },
  {
    title: 'Gerar confiança',
    description: 'Cumprir promessas, manter transparência e resolver problemas com consistência. Confiança reduz a chance de troca por concorrentes.',
  },
  {
    title: 'Aumentar ganhos',
    description: 'Clientes fiéis tendem a recomprar, comprar mais itens e custar menos para manter do que novos clientes custam para conquistar.',
  },
  {
    title: 'Conquistar novos clientes',
    description: 'Relacionamentos positivos geram indicações e prova social. O cliente satisfeito passa a ajudar na divulgação espontânea da marca.',
  },
  {
    title: 'Branding',
    description: 'Fortalecer a imagem e os significados associados à marca. Uma boa relação torna a marca mais lembrada, confiável e diferenciada.',
  },
  {
    title: 'Aumentar faturamento',
    description: 'Relacionamento bem conduzido favorece recorrência, venda adicional, planos superiores e maior valor ao longo do ciclo de vida do cliente.',
  },
  {
    title: 'Fortalecer a cultura',
    description: 'Quando a empresa prioriza relacionamento, atendimento e escuta passam a fazer parte da cultura, não apenas de campanhas isoladas.',
  },
  {
    title: 'Reinventar processos',
    description: 'A análise da jornada do cliente pode levar a novos canais, novas formas de entrega, automações e modelos de atendimento.',
  },
  {
    title: 'Sustentabilidade',
    description: 'Relações duradouras reduzem desperdício comercial e favorecem crescimento mais estável, com menos dependência de ações agressivas de curto prazo.',
  },
];

const researchSteps: PanelItem[] = [
  {
    title: '1. Definição do problema',
    description: 'Transforma uma dúvida ampla em uma pergunta investigável. Ex.: “por que as vendas caíram?” pode virar “quais fatores reduziram a recompra no último trimestre?”.',
  },
  {
    title: '2. Desenvolvimento do plano',
    description: 'Define objetivos, fontes de dados, método, público pesquisado, instrumento, prazo e orçamento. É a etapa que evita coletar informações irrelevantes.',
  },
  {
    title: '3. Coleta de informações',
    description: 'Aplica questionários, entrevistas, observações ou busca dados secundários. Costuma ser a fase mais cara e sujeita a erros de execução.',
  },
  {
    title: '4. Análise das informações',
    description: 'Organiza, compara e interpreta os dados para encontrar padrões, relações e possíveis causas. A análise transforma dados brutos em conhecimento útil.',
  },
  {
    title: '5. Apresentação dos resultados',
    description: 'Comunica achados de forma objetiva, com gráficos, sínteses e recomendações. A apresentação deve responder ao problema inicial, não apenas mostrar números.',
  },
  {
    title: '6. Tomada de decisão',
    description: 'Usa os resultados para escolher ações de marketing, como ajustar preço, mudar comunicação, reposicionar produto ou investigar mais.',
  },
];

const researchDataTypes: ConceptItem[] = [
  {
    title: 'Dados primários',
    description: 'São coletados pela primeira vez para o problema atual. Exigem mais tempo e custo, mas podem ser desenhados exatamente para a pergunta da pesquisa.',
    accent: 'accent3',
  },
  {
    title: 'Dados secundários',
    description: 'Já existiam antes da pesquisa, como IBGE, relatórios internos, estudos de mercado e bases públicas. São mais rápidos, mas podem não responder tudo.',
    accent: 'accent5',
  },
];

const researchInstruments: PanelItem[] = [
  {
    title: 'Questionários',
    description: 'Instrumento mais usado para dados primários. Permite comparar respostas de muitas pessoas, desde que as perguntas sejam claras e bem estruturadas.',
  },
  {
    title: 'Pesquisa qualitativa',
    description: 'Explora percepções, sentimentos e motivações. É útil para entender o “porquê” por trás de comportamentos, especialmente por entrevistas e grupos focais.',
  },
  {
    title: 'Instrumentos mecânicos',
    description: 'Recursos que registram comportamento ou reação, como medidores de audiência, rastreamento de navegação, mapas de calor e sensores em loja.',
  },
];

const segmentationLevels: PanelItem[] = [
  {
    title: 'Marketing de massa',
    description: 'Trata o mercado como um grande público único. Ganha escala, mas tende a ignorar diferenças importantes entre consumidores.',
  },
  {
    title: 'Marketing segmentado',
    description: 'Escolhe grupos amplos com necessidades parecidas e adapta ofertas e mensagens para cada segmento.',
  },
  {
    title: 'Marketing de nicho',
    description: 'Foca um grupo menor e mais específico. É útil quando a empresa tem recursos limitados ou quer atender muito bem um público particular.',
  },
  {
    title: 'Marketing local',
    description: 'Adapta produtos, preço, canais e comunicação a uma cidade, bairro, região ou comunidade específica.',
  },
  {
    title: 'Marketing individual',
    description: 'Personaliza a oferta para cada cliente, usando histórico, preferências e dados de comportamento.',
  },
];

const segmentationCriteria: PanelItem[] = [
  {
    title: 'Identificável',
    description: 'A empresa precisa conseguir reconhecer quem pertence ao segmento, quais características o definem e onde essas pessoas estão.',
  },
  {
    title: 'Mensurável',
    description: 'O segmento deve permitir estimar tamanho, renda, frequência de compra, demanda ou outro indicador relevante.',
  },
  {
    title: 'Substancial',
    description: 'Precisa ser grande e rentável o suficiente para justificar uma estratégia própria de marketing.',
  },
  {
    title: 'Acessível',
    description: 'A empresa deve conseguir alcançar o segmento por canais de venda, distribuição e comunicação viáveis.',
  },
  {
    title: 'Diferenciável',
    description: 'O segmento precisa responder de forma diferente dos demais; caso contrário, não há motivo para tratá-lo separadamente.',
  },
  {
    title: 'Acionável',
    description: 'A organização deve ter condições reais de criar ações, ofertas e campanhas adequadas para aquele grupo.',
  },
];

const marketing40Shifts: ConceptItem[] = [
  {
    title: 'Do exclusivo ao inclusivo',
    description: 'O poder deixa de ser hegemônico e se distribui (do G7 ao G20). Setores antes separados se integram e marcas locais inspiram-se em modelos globais. Para o marketing, diversidade não é risco — é força: comunidades antes pequenas ganham voz, e a marca precisa dialogar com públicos plurais.',
    accent: 'accent',
  },
  {
    title: 'Do vertical ao horizontal',
    description: 'A confiança deixa de fluir de cima para baixo (empresa → mercado) e passa a ser distribuída entre pares. A inovação vem de fora (modelo "Conexão + Desenvolvimento" da P&G), a competição é lateral (Uber, Airbnb) e o cliente confia mais em estranhos na internet do que em propaganda. Marcas competem pela autenticidade.',
    accent: 'accent3',
  },
  {
    title: 'Do individual ao social',
    description: 'A decisão de compra deixa de ser pessoal e passa a ser moldada pela conformidade social. O consumidor pesquisa com o celular dentro da loja, compila avaliações e confia no conselho da comunidade. A propaganda boca a boca vira a forma de influência mais credível.',
    accent: 'accent5',
  },
];

// Os três níveis de conectividade (Marketing 4.0, Kotler).
const connectivityLevels: ConceptItem[] = [
  {
    title: 'Conectividade móvel',
    description: 'Nível básico: a internet via dispositivos móveis como infraestrutura de comunicação. Smartphones baratos — não laptops — são a porta de entrada da maioria dos novos usuários.',
    accent: 'accent',
  },
  {
    title: 'Conectividade experiencial',
    description: 'Nível intermediário: a internet eleva a experiência nos pontos de contato. Importa a profundidade, não só o alcance. Ex.: o shopBeacon da Macy’s entrega ofertas direcionadas dentro da loja.',
    accent: 'accent3',
  },
  {
    title: 'Conectividade social',
    description: 'Nível supremo: a força da conexão dentro de comunidades de consumidores. Cresce de forma exponencial porque se apoia em vínculos emocionais e mutuamente benéficos.',
    accent: 'accent5',
  },
];

// Os três paradoxos da conectividade.
const connectivityParadoxes: PanelItem[] = [
  {
    title: 'On-line × off-line',
    description: 'Não se substituem — coexistem e se completam. Num mundo "high-tech", o "high-touch" (envolvimento humano profundo) vira diferencial. A Birchbox, nascida online, abriu loja física; a Amazon criou o Dash Button para ligar o digital ao físico.',
  },
  {
    title: 'Informado × distraído',
    description: 'A conectividade protege (o círculo íntimo funciona como escudo), mas também distrai. O intervalo de atenção caiu de 12s (2000) para 8s (2013). O desafio é conquistar atenção em "momentos UAU!", não no volume.',
  },
  {
    title: 'Defesa positiva × negativa',
    description: 'Marcas com DNA forte têm adoradores E odiadores — e isso é saudável. Manifestações negativas podem ativar o exército de defensores. O objetivo não é zerar críticos, é cultivar adoradores.',
  },
];

// Subculturas digitais influentes: Jovens, Mulheres e Netizens (JMN).
const jmnSubcultures: ConceptItem[] = [
  {
    title: 'Jovens — participação na mente',
    description: 'Adotantes iniciais e definidores de tendências. Sem medo de experimentar, levam produtos do nicho ao mainstream (iPod, Netflix, Spotify começaram com eles). Conquistar a mente jovem é influenciar o mercado de massa.',
    accent: 'accent',
  },
  {
    title: 'Mulheres — participação no mercado',
    description: 'Coletoras de informação e compradoras holísticas. Pesquisam em espiral, comparam muitas marcas e decidem pela família. Por avaliarem benefícios funcionais e emocionais, têm fidelidade e recomendação mais altas.',
    accent: 'accent2',
  },
  {
    title: 'Netizens — participação no coração',
    description: 'Conectores sociais e evangelistas expressivos (coletores, críticos e criadores de conteúdo). Cidadãos da internet que enriquecem a rede com tags, avaliações e conteúdo, e defendem apaixonadamente marcas com que se importam.',
    accent: 'accent3',
  },
];

const fiveAPath: PanelItem[] = [
  {
    title: '1. Assimilação (Aware)',
    description: 'O consumidor é exposto passivamente a uma longa lista de marcas, a partir de experiências passadas, comunicação de marketing e da defesa de outras pessoas. É o portão de entrada da jornada. Métrica: lembrança e reconhecimento de marca.',
  },
  {
    title: '2. Atração (Appeal)',
    description: 'O consumidor processa as mensagens e é atraído por uma lista curta de marcas. Marcas memoráveis, com fatores "UAU!", entram e ficam no topo. Em setores commoditizados, a atração precisa ser forte. Métrica: nº de marcas na consideração.',
  },
  {
    title: '3. Arguição (Ask)',
    description: 'A curiosidade leva à pesquisa ativa: pede conselhos, lê avaliações, compara preços, testa na loja. É aqui que a jornada muda de individual para SOCIAL e que on-line e off-line se integram. Curiosidade de menos = marca sem apelo; de mais = mensagem confusa.',
  },
  {
    title: '4. Ação (Act)',
    description: 'Convencido, o consumidor age: compra, consome e usa o pós-venda. Disponibilidade, experiência de loja, qualidade, preço e checkout influenciam. A ação não termina na compra — inclui toda a interação de uso. Métrica: taxa de conversão.',
  },
  {
    title: '5. Apologia (Advocate)',
    description: 'A fidelidade forte gera retenção, recompra e defesa diante de outros. Pode ser espontânea (rara, do fã inveterado) ou estimulada (ativada por pesquisa ou por uma crítica que mobiliza o defensor). Métrica: taxa de defesa e recomendação.',
  },
];

// Evolução dos modelos do caminho do consumidor.
const pathEvolution: ComparisonRow[] = [
  { criterion: 'Origem', left: 'AIDA (1920) e os 4 As de Derek Rucker', right: 'Os 5 As (Marketing 4.0, Kotler)' },
  { criterion: 'Atitude', left: 'Atitude individual decide a compra', right: 'Atração + influência social da comunidade' },
  { criterion: 'Fidelidade', left: 'Retenção e recompra', right: 'Disposição de defender, mesmo sem recomprar' },
  { criterion: 'Formato', left: 'Funil linear e fixo', right: 'Caminho em espiral, com saltos e retornos' },
];

// As três fontes de influência ao longo dos 5 As (zona O³ / POE).
const influenceSources: ConceptItem[] = [
  {
    title: 'Influência externa (Externa)',
    description: 'Vem da marca, por propaganda e comunicação. É controlável (mensagem, mídia, frequência), mas é a menos confiável. Dispara a primeira onda de consciência.',
    accent: 'accent2',
  },
  {
    title: 'Influência dos outros (Outros)',
    description: 'Vem de amigos, família e da comunidade: boca a boca, redes sociais, avaliações. É a mais confiável (83% confiam em amigos — Nielsen) e atinge o pico na arguição. Difícil de controlar; gere via marketing comunitário.',
    accent: 'accent3',
  },
  {
    title: 'Influência própria (Própria)',
    description: 'Vem de si mesmo: experiências passadas e julgamento pessoal. Predomina na apologia e nos clientes experientes, que saltam etapas e vão direto às marcas favoritas.',
    accent: 'accent5',
  },
];

// Métricas do caminho do consumidor: CAC e CDM (PAR e BAR).
const pathMetrics: PanelItem[] = [
  {
    title: 'CAC — Coeficiente de Ação de Compra (PAR)',
    description: 'Mede a conversão de consciência em compra: nº de quem compra ÷ nº de quem conhece a marca. Equivale a participação de mercado ÷ consciência de marca. Diagnostica se a marca converte o que conhece em vendas.',
  },
  {
    title: 'CDM — Coeficiente de Defesa da Marca (BAR)',
    description: 'Mede a conversão de consciência em defesa: nº de quem recomenda ÷ nº de quem conhece a marca. O ideal seria 1 (todos que conhecem recomendam). Diagnostica a fidelidade real, além da compra.',
  },
  {
    title: 'Gargalos da jornada',
    description: 'A menor taxa de conversão entre etapas é o gargalo que limita todo o caminho: atração baixa (humanizar a marca), curiosidade baixa (marketing de conteúdo), compromisso baixo (omnicanal) ou afinidade baixa (engajamento pós-venda).',
  },
];

const marketing50Challenges: PanelItem[] = [
  {
    title: 'Abismo entre gerações',
    description: 'Pela primeira vez, cinco gerações convivem no mercado (boomers, X, Y, Z e Alfa) com atitudes e canais distintos. Em geral, executivos mais velhos decidem, mas clientes e gerentes mais jovens exigem inovação digital.',
  },
  {
    title: 'Polarização da prosperidade',
    description: 'A riqueza se distribui num formato de "M": a classe média encolhe e o mercado migra para os extremos — luxo (premium) ou desconto (value). A empresa precisa escolher entre liderança de custo ou experiência premium.',
  },
  {
    title: 'Fosso digital',
    description: 'O acesso e o domínio da tecnologia variam, e há medo do desconhecido (privacidade, desemprego) frente à promessa de crescimento. A saída é humanizar a tecnologia: torná-la pessoal, social e experiencial.',
  },
];

// Evolução do marketing 1.0 ao 5.0.
const marketingEras: ComparisonRow[] = [
  { criterion: 'Marketing 1.0', left: 'Centrado no produto', right: 'Vender o que se fabrica (era industrial)' },
  { criterion: 'Marketing 2.0', left: 'Centrado no consumidor', right: 'Satisfazer e reter o cliente (era da informação)' },
  { criterion: 'Marketing 3.0', left: 'Centrado no ser humano', right: 'Valores, propósito e impacto social' },
  { criterion: 'Marketing 4.0', left: 'Do tradicional ao digital', right: 'Integrar on-line e off-line (omnicanal)' },
  { criterion: 'Marketing 5.0', left: 'Tecnologia para a humanidade', right: 'Next tech que imita o humano ao longo da jornada' },
];

// As tecnologias "next tech" do Marketing 5.0.
const nextTechs: ConceptItem[] = [
  { title: 'Inteligência Artificial', description: 'Algoritmos que imitam a cognição humana. Movem motores de recomendação (Netflix, Amazon), detecção de fraude e precificação dinâmica.', accent: 'accent' },
  { title: 'PLN — Linguagem Natural', description: 'Máquinas que entendem e geram fala e texto. Sustentam chatbots e assistentes de voz (Alexa, Google Assistant, Siri).', accent: 'accent2' },
  { title: 'Sensores e biometria', description: 'Reconhecimento facial, de imagem e de voz para identificar perfil, idade e até emoção do cliente no mundo físico.', accent: 'accent3' },
  { title: 'Robótica', description: 'Automação de processos (RPA) no back-office e robôs físicos na linha de frente (recepção, cafeteria, hotéis).', accent: 'accent4' },
  { title: 'Realidade aumentada e virtual', description: 'AR sobrepõe o digital ao real (IKEA, Sephora Virtual Artist); VR cria ambientes imersivos (tours, lojas virtuais).', accent: 'accent5' },
  { title: 'IoT e blockchain', description: 'Objetos conectados (Disney MagicBand, varejo inteligente) e registros distribuídos para transparência e fidelidade.', accent: 'accent' },
];

// Os 5 componentes do Marketing 5.0: 2 disciplinas + 3 aplicações.
const marketing50DisciplinesDetail: ConceptItem[] = [
  {
    title: 'Marketing orientado por dados',
    description: 'Disciplina-base: montar um ecossistema integrado de dados (sociais, web, transações, IoT, atendimento) sob uma identidade única do cliente, para decidir com fatos. Meta final: os "segmentos de um".',
    accent: 'accent',
  },
  {
    title: 'Marketing ágil',
    description: 'Disciplina de execução: equipes pequenas, descentralizadas e multidisciplinares que criam, testam (MVP) e ajustam rápido. Processos simultâneos e experimentação contínua. Exemplo: a Zara, com ~10 mil designs/ano.',
    accent: 'accent5',
  },
];

const marketing50ApplicationsDetail: ConceptItem[] = [
  {
    title: 'Marketing preditivo',
    description: 'Usa machine learning para prever o resultado antes de lançar: valor do cliente (CLV), churn, resposta a campanhas e sucesso de produtos. A Netflix usou dados para apostar em "House of Cards".',
    accent: 'accent2',
  },
  {
    title: 'Marketing contextual',
    description: 'Sensores e IA entregam a interação certa, na hora e no lugar certos. Beacons, reconhecimento facial e IoT replicam, no físico, a personalização que já existe no digital.',
    accent: 'accent3',
  },
  {
    title: 'Marketing aumentado',
    description: 'Tecnologia que potencializa (não substitui) o humano: interfaces em camadas onde o digital qualifica e o humano fecha. Reserva o atendente caro para o que exige empatia e julgamento.',
    accent: 'accent4',
  },
];

// As cinco gerações.
const generations: PanelItem[] = [
  { title: 'Baby Boomers (1946–1964)', description: 'Cresceram no pós-guerra e com a TV. Maior poder aquisitivo, adiam a aposentadoria e ainda ocupam cargos executivos. Adotaram a tecnologia tardiamente.' },
  { title: 'Geração X (1965–1980)', description: 'Viram a evolução do CD ao streaming; altamente adaptáveis. Hoje na liderança das empresas, equilibram vida e trabalho e muitos empreendem.' },
  { title: 'Geração Y / Millennials (1981–1996)', description: 'Primeiros com redes sociais desde jovens. Preferem experiência à posse (streaming, assinaturas), questionam tudo e buscam propósito e causa social.' },
  { title: 'Geração Z (1997–2009)', description: 'Primeiros nativos digitais; sempre conectados em múltiplas telas. Pragmáticos, valorizam autenticidade (detestam imagens editadas) e têm baixa lealdade a marcas.' },
  { title: 'Geração Alfa (2010–2025)', description: 'A tecnologia é extensão de si. Consomem vídeo desde a infância e influenciam ~74% das decisões domésticas. Crescerão com IA, voz e robôs.' },
];

const dataCommerceItems: PanelItem[] = [
  {
    title: 'Ecossistema de dados',
    description: 'Integra navegação, compras, carrinho abandonado, CRM, atendimento, redes sociais, transações, campanhas e pós-venda.',
  },
  {
    title: 'Identidade única do cliente',
    description: 'Conectar interações de uma mesma pessoa permite personalizar sem tratar cada canal como se fosse um cliente diferente.',
  },
  {
    title: 'Segmentos de um',
    description: 'Com dados suficientes, a empresa se aproxima da personalização individual, ajustando ofertas e mensagens a cada perfil.',
  },
  {
    title: 'Privacidade e confiança',
    description: 'Dados úteis não autorizam abuso. Consentimento, segurança e transparência sustentam relacionamento de longo prazo.',
  },
];

const ecommerceMechanics: ConceptItem[] = [
  {
    title: 'Recomendação',
    description: 'Motores de recomendação usam padrões de navegação, compra e similaridade para sugerir produtos ou conteúdos relevantes.',
    accent: 'accent3',
  },
  {
    title: 'Up-selling',
    description: 'Estimula a compra de uma versão superior, mais completa ou mais cara do produto inicialmente considerado.',
    accent: 'accent4',
  },
  {
    title: 'Cross-selling',
    description: 'Sugere itens complementares à compra principal, como acessórios, serviços, garantia ou produtos relacionados.',
    accent: 'accent5',
  },
];

const cxAutomationItems: PanelItem[] = [
  {
    title: 'Mapeamento da jornada',
    description: 'Publicidade, busca, conteúdo, página de produto, checkout, entrega, suporte e recompra precisam formar uma experiência coerente.',
  },
  {
    title: 'Chatbots e assistentes virtuais',
    description: 'Resolvem dúvidas simples, status de pedido e triagem. Casos complexos exigem passagem clara para atendimento humano.',
  },
  {
    title: 'Atendimento em camadas',
    description: 'FAQ, bot, comunidade, atendente e especialista reduzem espera e mantêm o humano onde empatia e julgamento importam mais.',
  },
  {
    title: 'Experimentação rápida',
    description: 'Testes A/B em anúncios, páginas, ofertas e checkout ajudam a aprender com dados reais antes de escalar a campanha.',
  },
];

// Os três níveis de experiência personalizada (marketing contextual).
const contextLevels: ConceptItem[] = [
  {
    title: 'Informação personalizada',
    description: 'Conteúdo certo pela localização e perfil (geofencing). Ex.: o "Whopper Detour" do Burger King liberava um cupom de US$ 0,01 quando o cliente estava perto de um McDonald’s.',
    accent: 'accent',
  },
  {
    title: 'Interação customizada',
    description: 'Diálogo nos dois sentidos, com gamificação e progressão. Ex.: a Sephora une o provador virtual (AR) à consulta na loja, conduzindo o cliente passo a passo.',
    accent: 'accent3',
  },
  {
    title: 'Imersão total',
    description: 'Experiência sensorial sem emendas entre físico e digital. Ex.: app da Lowe com AR para montar a lista e navegação no chão; provadores inteligentes com RFID e espelho digital.',
    accent: 'accent5',
  },
];

// Pirâmide do conhecimento: onde máquina e humano atuam.
const knowledgePyramid: PanelItem[] = [
  {
    title: 'Dados e informação — papel da máquina',
    description: 'Coletar, estruturar e organizar volume massivo de dados. A máquina filtra ruído, encontra padrões, clusters e correlações com eficiência impossível para o humano.',
  },
  {
    title: 'Conhecimento — máquina + humano',
    description: 'Armazenar e recuperar o que foi aprendido, conectando informação a contexto. A máquina organiza; o humano começa a interpretar.',
  },
  {
    title: 'Ideias e sabedoria — papel do humano',
    description: 'Gerar soluções criativas, julgar o que é anomalia ou insight e tomar decisões éticas. A criatividade e a empatia continuam humanas: a máquina converge, o humano diverge.',
  },
];

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="O que é Marketing?" subtitle="Definições fundamentais" colorClass="text-accent" />
      <HighlightBox title="Definição Clássica (Philip Kotler)">
        <p>Marketing é a atividade dirigida para a <strong>satisfação das necessidades e desejos</strong>, por meio dos <strong>processos de troca</strong>. É um processo social e gerencial pelo qual pessoas e grupos obtêm aquilo que necessitam e desejam com a criação, oferta e negociação de produtos e serviços de valor.</p>
        <p className="mt-2 font-semibold text-accent text-sm">Resumo: Marketing = suprir necessidades gerando lucro.</p>
      </HighlightBox>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ConceptCard title="Identifica necessidades" description="O marketing envolve a identificação e satisfação das necessidades humanas e sociais." accent="accent" />
        <ConceptCard title="Não cria necessidades" description="O marketing <strong>não cria necessidades</strong> — todos nascemos com elas. O marketing <strong>cria desejos</strong>, direcionando as necessidades a objetos específicos." accent="accent2" />
        <ConceptCard title="Gera competitividade" description="As empresas devem realizar trocas de forma <strong>mais eficiente que os concorrentes</strong>, trazendo impactos positivos." accent="accent3" />
        <ConceptCard title="Importância" description="O marketing inspira aprimoramentos em produtos existentes e gera demanda, criando postos de trabalho." accent="accent4" />
      </div>
      <HighlightBox title="Quem faz o marketing?">
        <p>O <strong>profissional de marketing</strong> é alguém que busca uma resposta (atenção, compra, voto, doação) de outra parte, denominada <strong>cliente potencial (prospect)</strong>.</p>
      </HighlightBox>
    </section>
  );
}

function ConceitosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Conceitos Centrais" subtitle="As bases teóricas que sustentam o marketing" colorClass="text-accent2" />
      <FlowDiagram items={['Necessidade', 'Desejo', 'Demanda', 'Oferta', 'Troca', 'Satisfação']} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ConceptCard title="Necessidades" description="Requisitos básicos do ser humano: ar, comida, roupa, abrigo. São inerentes, não criadas pelo marketing." accent="accent" />
        <ConceptCard title="Desejos" description="Necessidades direcionadas a <strong>objetos específicos</strong>. Ex: a necessidade é se alimentar, o desejo é comer um hambúrguer gourmet." accent="accent2" />
        <ConceptCard title="Demandas" description="Desejos por produtos específicos sustentados pela <strong>capacidade de comprá-los</strong>." accent="accent3" />
        <ConceptCard title="Oferta" description="Proposta tangível ou intangível de mercado, posicionada na mente dos consumidores-alvo." accent="accent4" />
        <ConceptCard title="Marca" description="Oferta de uma fonte conhecida. Empresas se esforçam para construir imagem de marca <strong>sólida, favorável e exclusiva</strong>." accent="accent5" />
        <ConceptCard title="Valor" description="Relação entre benefícios e custos. <strong>Tríade do valor:</strong> qualidade, serviço e preço." accent="accent" />
      </div>

      <h3 className="font-display font-bold text-xl text-accent2 mt-7">5 Tipos de Necessidades</h3>
      <div className="space-y-2">
        {[
          'Declaradas — O que o cliente diz que quer',
          'Reais — O que ele realmente precisa',
          'Não declaradas — Expectativas implícitas',
          '"Algo mais" — Bônus desejados',
          'Secretas — Motivações ocultas',
        ].map((need, i) => (
          <div key={i} className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-text">
            <strong className="text-accent">{i + 1}.</strong> {need}
          </div>
        ))}
      </div>

      <h3 className="font-display font-bold text-xl text-accent3 mt-7">Satisfação do Cliente</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {[
          { title: 'Decepção', desc: 'Desempenho < Expectativa', color: 'var(--color-accent2)' },
          { title: 'Satisfação', desc: 'Desempenho = Expectativa', color: 'var(--color-accent4)' },
          { title: 'Encantamento', desc: 'Desempenho > Expectativa', color: 'var(--color-accent5)' },
        ].map(sat => (
          <div key={sat.title} className="text-center p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-base mb-0.5" style={{ color: sat.color }}>{sat.title}</h4>
            <p className="text-text-muted text-sm">{sat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AplicacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="A que se aplica o Marketing?" subtitle="O marketing vai muito além de produtos físicos" colorClass="text-accent3" />
      <ConceptGrid items={marketingApplications} columns="md:grid-cols-2 lg:grid-cols-3" />
    </section>
  );
}

function DemandaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Tipos de Demanda" subtitle="8 estados de demanda que o profissional de marketing deve conhecer" colorClass="text-accent4" />
      <div className="space-y-2.5">
        {[
          { num: 1, title: 'Demanda Negativa', desc: 'Consumidores evitam ou rejeitam o produto.' },
          { num: 2, title: 'Demanda Inexistente', desc: 'Consumidores não conhecem ou não se interessam.' },
          { num: 3, title: 'Demanda Latente', desc: 'Há necessidade forte, mas nenhum produto a satisfaz.' },
          { num: 4, title: 'Demanda em Declínio', desc: 'Consumidores reduzem ou param de comprar.' },
          { num: 5, title: 'Demanda Irregular', desc: 'Compras sazonais, variam conforme época.' },
          { num: 6, title: 'Demanda Plena', desc: 'Situação ideal, consumidores compram adequadamente.' },
          { num: 7, title: 'Demanda Excessiva', desc: 'Mais consumidores do que produtos disponíveis.' },
          { num: 8, title: 'Demanda Indesejada', desc: 'Atração por produtos com consequências negativas.' },
        ].map(d => (
          <div key={d.num} className="bg-card border border-border rounded-xl px-4 py-3.5 flex items-start gap-3">
            <span className="font-display font-black text-xl text-accent tabular-nums w-6 flex-shrink-0">{d.num}</span>
            <div>
              <h4 className="font-semibold text-sm md:text-base text-text">{d.title}</h4>
              <p className="text-text-muted text-sm">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MaslowSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Pirâmide de Maslow" subtitle="Hierarquia das necessidades humanas" colorClass="text-accent5" />
      <div className="flex flex-col items-center gap-1.5 my-5">
        {[
          { label: '5. Auto-realização', width: 40, color: 'var(--color-accent)' },
          { label: '4. Estima', width: 55, color: 'var(--color-accent3)' },
          { label: '3. Sociais', width: 70, color: 'var(--color-accent5)' },
          { label: '2. Segurança', width: 85, color: 'var(--color-accent4)' },
          { label: '1. Fisiológicas', width: 100, color: 'var(--color-accent2)' },
        ].map(level => (
          <div
            key={level.label}
            className="flex items-center justify-center text-white font-semibold text-sm rounded-md px-3 py-2.5"
            style={{ width: `${level.width}%`, maxWidth: '480px', background: level.color }}
          >
            {level.label}
          </div>
        ))}
      </div>
      <PanelList items={maslowDetails} />
      <HighlightBox title="Por que isso importa para o Marketing?">
        <p>Entender em que nível da pirâmide o consumidor está ajuda a <strong>posicionar produtos e mensagens</strong> de forma eficaz.</p>
      </HighlightBox>
    </section>
  );
}

function FourPsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Os 4 Ps do Marketing" subtitle="O Mix de Marketing clássico de McCarthy" colorClass="text-accent" />
      <HighlightBox title="O que é o Mix de Marketing?">
        <p>Conjunto de ferramentas para alcançar objetivos de marketing no mercado-alvo. A finalidade é <strong>gerar desejo de compra</strong> no consumidor.</p>
      </HighlightBox>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Produto (Product)', desc: 'O que será oferecido ao cliente. Deve <strong>agregar valor</strong> e se destacar.', accent: 'accent' as const },
          { title: 'Preço (Price)', desc: 'Permite a <strong>gestão financeira</strong>. Único componente que gera receita.', accent: 'accent2' as const },
          { title: 'Praça (Place)', desc: 'Como o cliente chega ao produto. Toda a <strong>logística de distribuição</strong>.', accent: 'accent3' as const },
          { title: 'Promoção (Promotion)', desc: '<strong>Divulgação</strong> do produto ao público-alvo.', accent: 'accent4' as const },
        ].map(p => (
          <ConceptCard key={p.title} title={p.title} description={p.desc} accent={p.accent} />
        ))}
      </div>
    </section>
  );
}

function EightPsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="A Evolução: 8 Ps" subtitle="Os 4 Ps já não representam todo o cenário do marketing moderno" colorClass="text-accent2" />
      <ConceptGrid items={eightPsItems} columns="md:grid-cols-2 lg:grid-cols-4" />
    </section>
  );
}

function FourCsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Os 4 Cs do Marketing" subtitle="A visão do marketing centrada no cliente" colorClass="text-accent3" />
      <div className="overflow-x-auto study-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">4 Ps (Empresa)</th>
              <th className="py-2.5 px-2 w-8"></th>
              <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">4 Cs (Cliente)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Produto', 'Cliente', 'Cujos desejos devem ser satisfeitos'],
              ['Preço', 'Custo', 'Valor que o cliente considera justo'],
              ['Praça', 'Conveniência', 'Facilidade de acesso'],
              ['Promoção', 'Comunicação', 'Canal para o consumidor'],
            ].map(([p, c, desc]) => (
              <tr key={p} className="border-b border-border/50">
                <td className="py-3 px-4 font-semibold text-text">{p}</td>
                <td className="py-3 px-2 text-center text-text-muted">→</td>
                <td className="py-3 px-4">
                  <strong className="text-accent3">{c}</strong> — <span className="text-text-muted">{desc}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function RelationshipSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Marketing de Relacionamento" subtitle="Fidelizar é mais rentável do que conquistar novos clientes" colorClass="text-accent2" />
      <HighlightBox title="O que é?">
        <p>Conjunto de estratégias que tem como objetivo <strong>fidelizar clientes</strong>. A empresa oferece <strong>benefícios</strong> para garantir a satisfação e o sucesso dos seus clientes.</p>
      </HighlightBox>
      <FlowDiagram items={['Atrair', 'Conquistar', 'Reter', 'Fidelizar', 'Divulgador']} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ConceptCard title="Relacionamento > Transação" description="Foco no <strong>relacionamento contínuo</strong>, não na venda única." accent="accent2" />
        <ConceptCard title="Tratamento Diferenciado" description="Benefícios exclusivos e atendimento personalizado." accent="accent3" />
        <ConceptCard title="Efeito Multiplicador" description="Clientes satisfeitos geram o <strong>efeito boca a boca</strong>." accent="accent4" />
      </div>
    </section>
  );
}

function CharacteristicsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="15 Características" subtitle="O que define um bom Marketing de Relacionamento" colorClass="text-accent4" />
      <PanelList items={relationshipCharacteristics} columns="md:grid-cols-2 lg:grid-cols-3" />
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Ferramentas e Estratégias" subtitle="Como colocar o Marketing de Relacionamento em prática" colorClass="text-accent5" />
      <div className="space-y-2.5">
        {[
          { title: 'Gestão de Redes Sociais', desc: 'As empresas devem estar atentas e responder a qualquer tipo de feedback.' },
          { title: 'Programas de Fidelidade', desc: 'Benefícios exclusivos para retenção: pontos, descontos, brindes.' },
          { title: 'Email Marketing', desc: 'Envio de informações relevantes: conteúdos, aniversários, ofertas.' },
          { title: 'CRM', desc: 'Customer Relationship Management — registra todos os pontos de contato e histórico.' },
          { title: 'WhatsApp Business', desc: 'Catálogo de produtos, respostas automáticas e tags de organização.' },
        ].map(tool => (
          <div key={tool.title} className="bg-card border border-border rounded-xl px-4 py-3.5">
            <h3 className="font-semibold text-base text-accent mb-0.5">{tool.title}</h3>
            <p className="text-text-muted text-sm">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PesquisaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Pesquisa de Marketing" subtitle="Coleta e análise de informações para decisões estratégicas" colorClass="text-accent3" />
      <HighlightBox title="O que é?">
        <p>Atividades sistemáticas de <strong>concepção, coleta, análise e edição</strong> de relatórios e conclusões relevantes sobre situações de marketing.</p>
      </HighlightBox>
      <FlowDiagram items={['Definição', 'Plano', 'Coleta', 'Análise', 'Resultados', 'Decisão']} />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Etapas da pesquisa</h3>
        <PanelList items={researchSteps} />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Tipos de dados</h3>
        <ConceptGrid items={researchDataTypes} />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Instrumentos de coleta</h3>
        <PanelList items={researchInstruments} />
      </div>
    </section>
  );
}

function SegmentacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Segmentação de Mercado" subtitle="Identificando e atendendo grupos específicos de consumidores" colorClass="text-accent" />
      <HighlightBox title="O que é?">
        <p>Processo de <strong>dividir um mercado em grupos de compradores</strong> com semelhantes necessidades, desejos ou comportamentos.</p>
      </HighlightBox>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ConceptCard title="Geográfica" description="Por <strong>localização</strong>: países, regiões, cidades." accent="accent" />
        <ConceptCard title="Demográfica" description="Por <strong>características mensuráveis</strong>: idade, sexo, renda." accent="accent2" />
        <ConceptCard title="Psicográfica" description="Por <strong>personalidade</strong>: estilo de vida, valores, atitudes." accent="accent3" />
        <ConceptCard title="Comportamental" description="Por <strong>conhecimento, atitude, uso ou reação</strong> a um produto." accent="accent4" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Níveis de segmentação</h3>
        <PanelList items={segmentationLevels} />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Critérios para uma boa segmentação</h3>
        <PanelList items={segmentationCriteria} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

function Marketing40Section() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Marketing 4.0" subtitle="A passagem do tradicional ao digital em um mercado guiado por conectividade, comunidades e prova social" colorClass="text-accent2" />
      <HighlightBox title="Ideia central">
        <p>
          Marketing 4.0 não significa abandonar o marketing tradicional. Para Kotler, é a <strong>integração</strong> entre marketing on-line e off-line: a tecnologia conecta máquina a máquina, mas a humanidade conecta pessoa a pessoa. O papel do tradicional é construir consciência e interesse; o do digital é aprofundar o relacionamento e levar à ação.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">As três grandes transições</h3>
        <ConceptGrid items={marketing40Shifts} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Conectividade: a força que muda tudo">
        <p>
          A <strong>conectividade</strong> é a infraestrutura por trás do Marketing 4.0: a capacidade de as pessoas se conectarem, compartilharem informação e acessarem a sabedoria das multidões em tempo real. Ela reduz o custo de interação, derruba barreiras de entrada e transfere poder para o consumidor — que compara preços, lê avaliações e se protege em comunidade.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Os três níveis de conectividade</h3>
        <ConceptGrid items={connectivityLevels} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Os três paradoxos da conectividade</h3>
        <PanelList items={connectivityParadoxes} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Subculturas digitais mais influentes (JMN)</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Três segmentos detêm a chave da influência na era digital: <strong>Jovens, Mulheres e Netizens</strong>. Conquistar a mente dos jovens, o mercado das mulheres e o coração dos netizens é a estratégia central proposta no livro.
        </p>
        <ConceptGrid items={jmnSubcultures} columns="md:grid-cols-3" />
      </div>

      <HighlightBox title="Aplicação ao comércio eletrônico" accent="var(--color-accent5)">
        <p>
          Uma loja virtual não compete apenas por anúncio e preço. Ela compete pela soma de reputação, avaliações, atendimento, prazo, política de troca, conteúdo, experiência mobile e confiança gerada em cada ponto de contato. A prova social — estrelas, comentários, unboxings — vira fator decisivo de conversão.
        </p>
      </HighlightBox>
    </section>
  );
}

function Jornada5ASection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Jornada Digital dos 5 As" subtitle="Do primeiro contato à recomendação espontânea" colorClass="text-accent3" />
      <FlowDiagram items={['Assimilação', 'Atração', 'Arguição', 'Ação', 'Apologia']} />

      <PanelList items={fiveAPath} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Por que os 5 As substituíram o velho funil</h3>
        <ComparisonTable rows={pathEvolution} leftLabel="Antes (funil clássico)" rightLabel="Agora (5 As)" />
      </div>

      <TheoryBlock title="A jornada não é linear">
        <p>
          Ao contrário do funil, os 5 As formam um caminho <strong>em espiral</strong>: o consumidor pode pular etapas (uma indicação forte leva da assimilação direto à arguição) ou voltar atrás (um problema no uso o devolve à arguição). O número de marcas consideradas expande e estreita ao longo do caminho, e o tempo em cada etapa varia por categoria — curto em bens de consumo, longo em imóveis e carros.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As três fontes de influência (zona O³)</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Em cada etapa, três forças disputam a decisão. A influência <strong>dos outros</strong> atinge o pico na arguição — é a janela de ouro do marketing comunitário.
        </p>
        <ConceptGrid items={influenceSources} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Medindo a jornada: CAC e CDM</h3>
        <PanelList items={pathMetrics} columns="md:grid-cols-3" />
      </div>

      <HighlightBox title="Por que a Arguição pesa tanto no e-commerce?" accent="var(--color-accent4)">
        <p>
          Antes de comprar, o cliente compara preço, frete, prazo, reputação, comentários, vídeos, fotos reais, política de troca e meios de pagamento. Quanto mais risco percebido, maior a necessidade de prova e confiança — por isso a arguição é a etapa mais decisiva da loja virtual.
        </p>
      </HighlightBox>
    </section>
  );
}

function Marketing50Section() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Marketing 5.0 e Martech" subtitle="Tecnologia a serviço da humanidade, da estratégia e da jornada do cliente" colorClass="text-accent4" />
      <HighlightBox title="Definição (Kotler)">
        <p>
          Marketing 5.0 é a <strong>aplicação de tecnologias que imitam o ser humano</strong> (next tech) para criar, comunicar, entregar e aumentar valor ao longo da jornada do cliente. Em uma equação: <strong>Marketing 5.0 = Marketing 3.0 (centralidade humana) + Marketing 4.0 (empoderamento tecnológico)</strong>. O ponto-chave é equilibrar inteligência de máquina com sensibilidade humana.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">A evolução do marketing</h3>
        <ComparisonTable rows={marketingEras} leftLabel="Foco" rightLabel="Essência" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">As tecnologias "next tech"</h3>
        <ConceptGrid items={nextTechs} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Três desafios para implementar</h3>
        <PanelList items={marketing50Challenges} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Os cinco componentes: 2 disciplinas + 3 aplicações">
        <p>
          O Marketing 5.0 se organiza em duas <strong>disciplinas</strong> que dão a base (orientado por dados e ágil) e três <strong>aplicações</strong> que entregam valor (preditivo, contextual e aumentado). As disciplinas são o alicerce; as aplicações, o que o cliente percebe.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As duas disciplinas (base)</h3>
        <ConceptGrid items={marketing50DisciplinesDetail} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">As três aplicações (entrega)</h3>
        <ConceptGrid items={marketing50ApplicationsDetail} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">As cinco gerações no mercado</h3>
        <PanelList items={generations} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Tecnologia não substitui estratégia" accent="var(--color-accent3)">
        <p>
          IA, sensores, IoT, realidade aumentada, blockchain, chatbots e automação só geram valor quando resolvem um problema real da jornada. Vale o <em>paradoxo de Moravec</em>: a máquina vence no raciocínio lógico e na escala; o humano vence na empatia, na criatividade e na conexão emocional. A ferramenta vem depois do objetivo.
        </p>
      </HighlightBox>
    </section>
  );
}

function DadosCxSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Dados, CX e Comércio Eletrônico" subtitle="Como dados, automação e experiência se conectam nas operações digitais" colorClass="text-accent5" />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Base: dados úteis e integrados</h3>
        <PanelList items={dataCommerceItems} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Recomendação e venda orientada por comportamento</h3>
        <ConceptGrid items={ecommerceMechanics} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Experiência, atendimento e agilidade</h3>
        <PanelList items={cxAutomationItems} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Marketing contextual: três níveis de personalização</h3>
        <ConceptGrid items={contextLevels} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Onde a máquina ajuda e onde o humano decide</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          A pirâmide do conhecimento mostra a divisão de trabalho ideal: a máquina sobe dos dados ao conhecimento; o humano transforma conhecimento em ideias e sabedoria.
        </p>
        <PanelList items={knowledgePyramid} columns="md:grid-cols-3" />
      </div>

      <HighlightBox title="Indicadores de revisão" accent="var(--color-accent2)">
        <p>
          Para estudar, conecte cada ação a uma métrica: conversão, abandono de carrinho, retenção, recompra, valor do cliente (CLV), satisfação, tempo de resposta e defesa da marca (CDM).
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
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={MARKETING_GUIDE_CONTEXT} topics={MARKETING_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" />}
        aiKahoot={<AIKahootQuiz guideContext={MARKETING_GUIDE_CONTEXT} topics={MARKETING_TOPICS} />}
      />
    </section>
  );
}

export default function MarketingSections({ activeSection }: MarketingSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'conceitos':
      return <ConceitosSection />;
    case 'aplicacao':
      return <AplicacaoSection />;
    case 'demanda':
      return <DemandaSection />;
    case 'maslow':
      return <MaslowSection />;
    case '4ps':
      return <FourPsSection />;
    case '8ps':
      return <EightPsSection />;
    case '4cs':
      return <FourCsSection />;
    case 'mktrel':
      return <RelationshipSection />;
    case '15carac':
      return <CharacteristicsSection />;
    case 'ferramentas':
      return <ToolsSection />;
    case 'pesquisa':
      return <PesquisaSection />;
    case 'segmentacao':
      return <SegmentacaoSection />;
    case 'mkt40':
      return <Marketing40Section />;
    case 'jornada5a':
      return <Jornada5ASection />;
    case 'mkt50':
      return <Marketing50Section />;
    case 'cx-dados':
      return <DadosCxSection />;
    case 'quiz':
      return <QuizSection />;
    case 'iaquiz':
      return <QuizSection />;
    default:
      return null;
  }
}
