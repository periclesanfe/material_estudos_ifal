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

const satisfactionLevers: string[] = [
  'Trabalho intelectualmente desafiante',
  'Recompensas justas',
  'Condições de apoio no trabalho',
  'Colegas colaboradores',
  'Sentido que vai além do dinheiro',
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

const engagementActions: string[] = [
  'Investir no aprimoramento contínuo de líderes',
  'Dar autonomia de trabalho às equipes',
  'Medir o engajamento regularmente',
  'Tratar engajamento como foco permanente',
  'Ouvir a equipe nos termos dela',
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

const workRedesign: string[] = [
  'Rodízio de trabalho',
  'Enriquecimento do trabalho',
  'Compartilhamento de trabalho',
  'Trabalho remoto',
  'Horário flexível',
];

const rewards: string[] = [
  'Remuneração variável',
  'Pagamento por produção',
  'Pagamento por mérito',
  'Bônus',
  'Remuneração por habilidades',
  'Participação nos lucros',
  'Participação nos resultados',
  'Benefícios flexíveis',
  'Reconhecimento',
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

const barriers: string[] = [
  'Filtragem',
  'Percepção seletiva',
  'Sobrecarga de informação',
  'Emoções',
  'Linguagem',
  'Silêncio',
  'Apreensão da comunicação',
  'Mentira',
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

function PillGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, index) => (
        <div key={item} className="bg-card border border-border rounded-xl px-5 py-3.5 flex items-center gap-3">
          <span className="text-accent text-xs font-bold tabular-nums w-6 flex-shrink-0">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-sm text-text">{item}</span>
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
        <PillGrid items={satisfactionLevers} />
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
        <PillGrid items={engagementActions} />
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
        <PillGrid items={workRedesign} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Recompensas e benefícios</h3>
        <PillGrid items={rewards} />
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
        <PillGrid items={barriers} />
      </div>
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
    case 'quiz':
      return <QuizSection />;
    case 'iaquiz':
      return <AiQuizSection />;
    default:
      return null;
  }
}
