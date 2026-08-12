import type { ExternalBookChapter } from '../../components/ui/ExternalBookReader';
import type { Language } from '../../components/ui/CodeBlock';
import type { QuizExam, QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export type PdswAccent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

export interface PdswConcept {
  title: string;
  description: string;
  accent: PdswAccent;
}

export interface PdswPanel {
  title: string;
  description: string;
}

export interface PdswSubsection {
  title: string;
  description: string;
  concepts?: PdswConcept[];
  panels?: PdswPanel[];
  flow?: string[];
  code?: {
    language: Language;
    content: string;
  };
}

export interface PdswChapterContent {
  id: string;
  number: number;
  title: string;
  exam: 'N1 / AV1' | 'N1 / AV2' | 'N2 / AV4';
  subtitle: string;
  sourceUrl: string;
  focus: string;
  subsections: PdswSubsection[];
}

export const PDSW_BOOK_CHAPTERS: ExternalBookChapter[] = [
  { id: 'cap1', shortTitle: 'Cap. 1', title: 'Introdução', url: 'https://engsoftmoderna.info/cap1.html' },
  { id: 'cap2', shortTitle: 'Cap. 2', title: 'Processos', url: 'https://engsoftmoderna.info/cap2.html' },
  { id: 'cap3', shortTitle: 'Cap. 3', title: 'Requisitos', url: 'https://engsoftmoderna.info/cap3.html' },
  { id: 'cap4', shortTitle: 'Cap. 4', title: 'Modelos', url: 'https://engsoftmoderna.info/cap4.html' },
  { id: 'cap5', shortTitle: 'Cap. 5', title: 'Princípios de Projeto', url: 'https://engsoftmoderna.info/cap5.html' },
  { id: 'cap6', shortTitle: 'Cap. 6', title: 'Padrões de Projeto', url: 'https://engsoftmoderna.info/cap6.html' },
  { id: 'cap7', shortTitle: 'Cap. 7', title: 'Arquitetura', url: 'https://engsoftmoderna.info/cap7.html' },
  { id: 'cap8', shortTitle: 'Cap. 8', title: 'Testes', url: 'https://engsoftmoderna.info/cap8.html' },
  { id: 'cap9', shortTitle: 'Cap. 9', title: 'Refactoring', url: 'https://engsoftmoderna.info/cap9.html' },
  { id: 'cap10', shortTitle: 'Cap. 10', title: 'DevOps', url: 'https://engsoftmoderna.info/cap10.html' },
];

export const PDSW_EVALUATIONS = [
  {
    id: 'av1',
    label: 'N1 / AV1',
    title: 'Fundamentos da Engenharia de Software',
    scope: 'Capítulos 1 a 4: Introdução, Processos, Requisitos e Modelos.',
  },
  {
    id: 'av2',
    label: 'N1 / AV2',
    title: 'Projeto, Padrões e Arquitetura',
    scope: 'Capítulos 5 a 7: Princípios de Projeto, Padrões de Projeto e Arquitetura.',
  },
  {
    id: 's1',
    label: 'N2 / S1',
    title: 'Seminário',
    scope: 'Tema definido pelo professor, avaliado por tempo, organização, domínio, demonstração e respostas.',
  },
  {
    id: 'av4',
    label: 'N2 / AV4',
    title: 'Qualidade, Evolução e Operação',
    scope: 'Capítulos 8 a 10: Testes, Refactoring e DevOps.',
  },
];

export const PDSW_SEMINAR_CRITERIA: PdswPanel[] = [
  {
    title: 'Uso adequado do tempo: 2 pontos',
    description: 'A apresentação deve ficar entre 25 e 30 minutos, com ritmo suficiente para explicar o tema sem atropelar a demonstração.',
  },
  {
    title: 'Planejamento e organização: 3 pontos',
    description: 'A banca espera objetivos claros, detalhamento do tema, encadeamento lógico, prós, contras e conclusão coerente.',
  },
  {
    title: 'Domínio do tema e clareza: 2 pontos',
    description: 'O grupo precisa explicar conceitos com segurança, usar linguagem acessível e conectar teoria com Engenharia de Software.',
  },
  {
    title: 'Demonstração prática ou teórica: 2 pontos',
    description: 'A apresentação deve incluir uma aplicação, simulação, comparação, exemplo técnico ou demonstração conceitual bem amarrada.',
  },
  {
    title: 'Respostas a questionamentos: 1 ponto',
    description: 'O grupo deve responder perguntas da turma com objetividade e reconhecer limites quando algo depender de contexto.',
  },
];

export const PDSW_CHAPTER_CONTENT: PdswChapterContent[] = [
  {
    id: 'cap1',
    number: 1,
    title: 'Introdução',
    exam: 'N1 / AV1',
    subtitle: 'Por que construir software exige engenharia, método, comunicação e gestão de complexidade.',
    sourceUrl: 'https://engsoftmoderna.info/cap1.html',
    focus: 'Entender a natureza do software, suas dificuldades essenciais, a evolução histórica da área e os tipos de sistemas estudados na disciplina.',
    subsections: [
      {
        title: 'Natureza do software',
        description: 'Software é abstrato, maleável, invisível e muda continuamente. Essas características tornam requisitos, manutenção e qualidade mais difíceis de controlar do que em produtos físicos.',
        concepts: [
          { title: 'Complexidade', description: 'Sistemas reais têm muitas regras, estados, integrações e exceções. Pequenas mudanças podem ter efeitos indiretos.', accent: 'accent' },
          { title: 'Mudança constante', description: 'Negócio, legislação, tecnologia e usuários pressionam o software a evoluir mesmo depois da entrega.', accent: 'accent3' },
          { title: 'Invisibilidade', description: 'Como a estrutura interna não é naturalmente visível, modelos, testes e arquitetura ajudam a raciocinar sobre o produto.', accent: 'accent5' },
        ],
      },
      {
        title: 'Áreas da Engenharia de Software',
        description: 'A disciplina conecta requisitos, processos, projeto, arquitetura, testes, manutenção, configuração, qualidade e gestão. O programador não atua isolado: ele participa de um sistema sociotécnico.',
        panels: [
          { title: 'Produto', description: 'O que será entregue, quais usuários atende, quais qualidades precisa ter e quais restrições devem ser respeitadas.' },
          { title: 'Processo', description: 'Como o time organiza descoberta, planejamento, construção, validação, entrega e evolução.' },
          { title: 'Pessoas', description: 'Comunicação, papéis, decisões e colaboração influenciam diretamente o resultado técnico.' },
          { title: 'Qualidade', description: 'Confiabilidade, manutenibilidade, segurança, desempenho e usabilidade precisam ser pensadas desde cedo.' },
        ],
      },
    ],
  },
  {
    id: 'cap2',
    number: 2,
    title: 'Processos',
    exam: 'N1 / AV1',
    subtitle: 'Formas de organizar o trabalho para reduzir risco, criar feedback e entregar valor de maneira sustentável.',
    sourceUrl: 'https://engsoftmoderna.info/cap2.html',
    focus: 'Comparar modelos prescritivos e ágeis, entendendo quando planejamento, iteração, fluxo e práticas técnicas ajudam.',
    subsections: [
      {
        title: 'Processos tradicionais e risco',
        description: 'Modelos sequenciais favorecem previsibilidade quando escopo e tecnologia são estáveis, mas tendem a sofrer quando feedback real chega tarde.',
        concepts: [
          { title: 'Cascata', description: 'Organiza o trabalho em fases. É simples de entender, mas pouco flexível diante de aprendizado tardio.', accent: 'accent' },
          { title: 'Iterativo', description: 'Divide o desenvolvimento em ciclos para aprender e corrigir rumo ao longo do projeto.', accent: 'accent3' },
          { title: 'RUP', description: 'Processo iterativo com fases, disciplinas, papéis e artefatos, ajustável ao porte do projeto.', accent: 'accent4' },
        ],
      },
      {
        title: 'Métodos ágeis e práticas técnicas',
        description: 'Agilidade não elimina processo. Ela troca planos longos e pouco verificados por ciclos curtos, inspeção frequente e adaptação contínua.',
        concepts: [
          { title: 'XP', description: 'Enfatiza testes automatizados, integração contínua, programação em pares, design simples e feedback rápido.', accent: 'accent5' },
          { title: 'Scrum', description: 'Estrutura o trabalho com backlog, sprint, eventos de inspeção e incremento potencialmente entregável.', accent: 'accent2' },
          { title: 'Kanban', description: 'Visualiza fluxo, limita trabalho em progresso e evidencia gargalos operacionais.', accent: 'accent3' },
        ],
        flow: ['Backlog', 'Priorização', 'Sprint ou fluxo', 'Incremento', 'Feedback', 'Ajuste'],
      },
    ],
  },
  {
    id: 'cap3',
    number: 3,
    title: 'Requisitos',
    exam: 'N1 / AV1',
    subtitle: 'Como entender necessidades, transformar incerteza em hipóteses verificáveis e evitar construir o produto errado.',
    sourceUrl: 'https://engsoftmoderna.info/cap3.html',
    focus: 'Distinguir tipos de requisitos e aplicar histórias, casos de uso, protótipos, MVPs e experimentos para validar valor.',
    subsections: [
      {
        title: 'Tipos e descoberta',
        description: 'Requisitos descrevem comportamentos, restrições, regras e qualidades esperadas. Eles nascem de conversas, observação, análise de domínio e validação contínua.',
        panels: [
          { title: 'Funcionais', description: 'Definem o que o sistema deve fazer: cadastrar, consultar, aprovar, autenticar, comprar ou gerar relatório.' },
          { title: 'Não funcionais', description: 'Definem qualidades: desempenho, segurança, disponibilidade, usabilidade, acessibilidade e compatibilidade.' },
          { title: 'Domínio', description: 'Expressam regras específicas do negócio, como políticas, cálculos, restrições legais ou vocabulário próprio.' },
          { title: 'Elicitação', description: 'Combina entrevistas, workshops, observação, análise de documentos, prototipação e feedback de usuários.' },
        ],
      },
      {
        title: 'Histórias, casos de uso e validação',
        description: 'A documentação deve ajudar o time a decidir e validar, não virar burocracia isolada. Cada técnica esclarece um nível diferente do problema.',
        concepts: [
          { title: 'Histórias de usuário', description: 'Expressam quem precisa de algo, o que deseja fazer e qual benefício espera obter.', accent: 'accent' },
          { title: 'Casos de uso', description: 'Detalham interação entre ator e sistema, incluindo fluxo principal, variações e condições.', accent: 'accent3' },
          { title: 'MVP', description: 'Entrega mínima para testar uma hipótese de valor com usuários reais e reduzir desperdício.', accent: 'accent5' },
          { title: 'Protótipos e testes A/B', description: 'Ajudam a comparar alternativas antes de consolidar investimento em implementação completa.', accent: 'accent4' },
        ],
      },
    ],
  },
  {
    id: 'cap4',
    number: 4,
    title: 'Modelos',
    exam: 'N1 / AV1',
    subtitle: 'Modelos como linguagem de comunicação, análise e decisão, sem a ilusão de representar todo o sistema.',
    sourceUrl: 'https://engsoftmoderna.info/cap4.html',
    focus: 'Usar UML como esboço útil para discutir estrutura, comportamento, responsabilidades e interações.',
    subsections: [
      {
        title: 'UML como esboço',
        description: 'Modelar é abstrair. Um bom modelo omite detalhes irrelevantes e deixa visível aquilo que precisa ser discutido, validado ou decidido.',
        flow: ['Necessidade', 'Abstração', 'Diagrama', 'Discussão', 'Decisão', 'Atualização'],
      },
      {
        title: 'Estrutura e comportamento',
        description: 'Diagramas estruturais mostram elementos e relações. Diagramas comportamentais mostram fluxo, colaboração e mudança ao longo do tempo.',
        concepts: [
          { title: 'Classes', description: 'Representam entidades, atributos, operações e relacionamentos relevantes para o domínio.', accent: 'accent' },
          { title: 'Pacotes', description: 'Ajudam a organizar dependências e fronteiras lógicas entre partes do sistema.', accent: 'accent2' },
          { title: 'Sequência', description: 'Mostra mensagens entre participantes em ordem temporal, útil para fluxos de uso e integrações.', accent: 'accent3' },
          { title: 'Atividades', description: 'Representa fluxo de trabalho, decisões, paralelismo e caminhos alternativos.', accent: 'accent4' },
        ],
      },
    ],
  },
  {
    id: 'cap5',
    number: 5,
    title: 'Princípios de Projeto',
    exam: 'N1 / AV2',
    subtitle: 'Princípios que mantêm o design compreensível, modificável e coerente conforme o sistema cresce.',
    sourceUrl: 'https://engsoftmoderna.info/cap5.html',
    focus: 'Aplicar decomposição, abstração, ocultamento de informação, coesão, acoplamento e princípios de responsabilidade.',
    subsections: [
      {
        title: 'Decomposição e abstração',
        description: 'Projetar é dividir o problema em partes que tenham responsabilidades claras e escondam detalhes desnecessários dos clientes.',
        concepts: [
          { title: 'Decomposição', description: 'Quebra o sistema em módulos menores para reduzir carga cognitiva e facilitar manutenção.', accent: 'accent' },
          { title: 'Abstração', description: 'Destaca o comportamento essencial e esconde detalhes de implementação.', accent: 'accent3' },
          { title: 'Integridade conceitual', description: 'Mantém consistência de decisões, nomes e formas de interação em todo o sistema.', accent: 'accent5' },
        ],
      },
      {
        title: 'Coesão, acoplamento e princípios',
        description: 'Baixo acoplamento e alta coesão tornam mudanças mais locais. SOLID, Demeter e composição sobre herança são guias para decisões recorrentes.',
        panels: [
          { title: 'Alta coesão', description: 'Elementos de um módulo colaboram para uma responsabilidade bem definida.' },
          { title: 'Baixo acoplamento', description: 'Módulos conhecem pouco uns dos outros, reduzindo impacto de mudanças.' },
          { title: 'SOLID', description: 'Orienta responsabilidade única, extensão, substituição, segregação de interfaces e inversão de dependência.' },
          { title: 'Lei de Demeter', description: 'Reduz cadeias de dependência e exposição excessiva de estrutura interna.' },
        ],
      },
    ],
  },
  {
    id: 'cap6',
    number: 6,
    title: 'Padrões de Projeto',
    exam: 'N1 / AV2',
    subtitle: 'Soluções recorrentes para problemas recorrentes, usadas como vocabulário técnico e não como receita automática.',
    sourceUrl: 'https://engsoftmoderna.info/cap6.html',
    focus: 'Reconhecer padrões criacionais, estruturais e comportamentais, avaliando intenção, contexto e tradeoffs.',
    subsections: [
      {
        title: 'Criacionais e estruturais',
        description: 'Padrões criacionais controlam a criação de objetos. Estruturais organizam relações entre classes e objetos para simplificar uso e composição.',
        concepts: [
          { title: 'Factory Method', description: 'Delegar a criação de objetos reduz dependência direta de classes concretas.', accent: 'accent' },
          { title: 'Singleton', description: 'Controla uma única instância, mas pode aumentar acoplamento global se usado sem critério.', accent: 'accent2' },
          { title: 'Adapter', description: 'Converte uma interface existente para outra esperada pelo cliente.', accent: 'accent3' },
          { title: 'Facade', description: 'Oferece uma entrada simples para um subsistema complexo.', accent: 'accent4' },
        ],
      },
      {
        title: 'Comportamentais e bom senso',
        description: 'Padrões comportamentais distribuem responsabilidades de comunicação e variação de comportamento. O risco é aplicar padrão onde uma solução simples bastaria.',
        panels: [
          { title: 'Strategy', description: 'Encapsula algoritmos intercambiáveis e evita condicionais repetidas.' },
          { title: 'Observer', description: 'Permite notificar interessados quando um objeto muda de estado.' },
          { title: 'Template Method', description: 'Define o esqueleto de um algoritmo e deixa passos específicos para subclasses.' },
          { title: 'Overengineering', description: 'Usar padrões sem problema real aumenta complexidade e dificulta leitura.' },
        ],
      },
    ],
  },
  {
    id: 'cap7',
    number: 7,
    title: 'Arquitetura',
    exam: 'N1 / AV2',
    subtitle: 'Decisões estruturais que condicionam evolução, desempenho, confiabilidade, deploy e operação.',
    sourceUrl: 'https://engsoftmoderna.info/cap7.html',
    focus: 'Relacionar estilos arquiteturais com requisitos de qualidade e tradeoffs de sistemas reais.',
    subsections: [
      {
        title: 'Organização do sistema',
        description: 'Arquitetura define componentes, responsabilidades, relações, comunicação e limites. Ela torna explícitas decisões difíceis de mudar depois.',
        concepts: [
          { title: 'Camadas', description: 'Separam apresentação, aplicação, domínio e infraestrutura para organizar dependências.', accent: 'accent' },
          { title: 'MVC', description: 'Divide responsabilidades entre Model, View e Controller, reduzindo mistura entre regra e interface.', accent: 'accent2' },
          { title: 'Microsserviços', description: 'Favorecem autonomia de deploy, mas aumentam complexidade distribuída.', accent: 'accent3' },
        ],
      },
      {
        title: 'Comunicação e antipadrões',
        description: 'Sistemas distribuídos exigem pensar em rede, falhas, consistência, contratos e observabilidade. Nem todo problema precisa de distribuição.',
        panels: [
          { title: 'Filas', description: 'Permitem processamento assíncrono e desacoplamento entre produtores e consumidores.' },
          { title: 'Publish/subscribe', description: 'Distribui eventos para múltiplos interessados sem acoplar diretamente emissores e receptores.' },
          { title: 'Padrões distribuídos', description: 'Incluem API Gateway, circuit breaker, saga e outros recursos para lidar com falhas e coordenação.' },
          { title: 'Antipadrões', description: 'Big Ball of Mud, dependências cíclicas e microsserviços prematuros dificultam evolução.' },
        ],
      },
    ],
  },
  {
    id: 'cap8',
    number: 8,
    title: 'Testes',
    exam: 'N2 / AV4',
    subtitle: 'Testes como mecanismo de confiança para mudar software, detectar regressões e orientar design.',
    sourceUrl: 'https://engsoftmoderna.info/cap8.html',
    focus: 'Diferenciar níveis de teste, aplicar princípios FIRST, projetar testabilidade e automatizar fluxos críticos.',
    subsections: [
      {
        title: 'Fundamentos e níveis',
        description: 'Testes não provam ausência de defeitos, mas aumentam confiança. Cada nível equilibra custo, velocidade, isolamento e fidelidade.',
        concepts: [
          { title: 'Unitários', description: 'Validam unidades pequenas com feedback rápido e baixo custo de execução.', accent: 'accent' },
          { title: 'Integração', description: 'Verificam colaboração entre módulos, serviços, banco ou APIs.', accent: 'accent3' },
          { title: 'Sistema e aceitação', description: 'Validam comportamento do produto integrado contra cenários e critérios de negócio.', accent: 'accent4' },
          { title: 'E2E', description: 'Automatizam jornadas reais do usuário, úteis para fluxos críticos e regressões de alto impacto.', accent: 'accent5' },
        ],
      },
      {
        title: 'Testabilidade, mocks e Playwright',
        description: 'Código testável tem dependências explícitas, responsabilidades claras e pontos de observação. Mocks isolam dependências; E2E valida a experiência integrada.',
        code: {
          language: 'typescript',
          content: `import { test, expect } from '@playwright/test';

test('usuário publica um classificado', async ({ page }) => {
  await page.goto('/classificados/novo');
  await page.getByLabel('Título').fill('Notebook usado');
  await page.getByLabel('Preço').fill('1200');
  await page.getByRole('button', { name: 'Publicar' }).click();

  await expect(page.getByText('Classificado publicado')).toBeVisible();
});`,
        },
      },
    ],
  },
  {
    id: 'cap9',
    number: 9,
    title: 'Refactoring',
    exam: 'N2 / AV4',
    subtitle: 'Melhoria da estrutura interna sem alterar comportamento observável, apoiada por testes e decisões pequenas.',
    sourceUrl: 'https://engsoftmoderna.info/cap9.html',
    focus: 'Identificar code smells, aplicar refatorações com segurança e priorizar dívida técnica com impacto real.',
    subsections: [
      {
        title: 'Refatorar com segurança',
        description: 'Refactoring não é reescrever nem adicionar funcionalidade. É melhorar o design interno preservando o comportamento externo.',
        code: {
          language: 'typescript',
          content: `// Antes: método longo mistura validação, regra e apresentação.
function finalizarPedido(pedido: Pedido) {
  if (!pedido.itens.length) throw new Error('Pedido vazio');
  const total = pedido.itens.reduce((soma, item) => soma + item.preco, 0);
  pedido.status = total > 0 ? 'fechado' : 'pendente';
  return \`Pedido \${pedido.status}: R$ \${total.toFixed(2)}\`;
}

// Depois: passos menores deixam intenção e testes mais claros.
const calcularTotal = (pedido: Pedido) =>
  pedido.itens.reduce((soma, item) => soma + item.preco, 0);`,
        },
      },
      {
        title: 'Smells e dívida técnica',
        description: 'Code smells são sintomas, não sentenças. Eles indicam pontos que merecem análise quando afetam mudança, leitura, teste ou confiabilidade.',
        panels: [
          { title: 'Método longo', description: 'Mistura muitos passos e dificulta teste de regras isoladas.' },
          { title: 'Duplicação', description: 'Espalha conhecimento e aumenta custo de mudança consistente.' },
          { title: 'Classe inchada', description: 'Acumula responsabilidades que deveriam estar separadas.' },
          { title: 'Dívida técnica', description: 'Deve ser priorizada por risco, frequência de mudança e custo de manutenção.' },
        ],
      },
    ],
  },
  {
    id: 'cap10',
    number: 10,
    title: 'DevOps',
    exam: 'N2 / AV4',
    subtitle: 'Integração entre desenvolvimento e operação por automação, colaboração, feedback e entrega confiável.',
    sourceUrl: 'https://engsoftmoderna.info/cap10.html',
    focus: 'Entender CI/CD, controle de versão, releases, feature flags, observabilidade e operação contínua.',
    subsections: [
      {
        title: 'Fluxo de entrega',
        description: 'DevOps reduz atrito entre escrever código, validar, entregar e operar. A meta é tornar mudanças menores, rastreáveis e recuperáveis.',
        concepts: [
          { title: 'Git e revisão', description: 'Histórico, branches, pull requests e code review apoiam rastreabilidade e qualidade coletiva.', accent: 'accent' },
          { title: 'Integração contínua', description: 'Integra mudanças frequentemente e executa checks automatizados para feedback rápido.', accent: 'accent3' },
          { title: 'Trunk-based development', description: 'Favorece integrações pequenas e frequentes em vez de branches longas e arriscadas.', accent: 'accent5' },
        ],
        flow: ['Commit', 'CI', 'Build', 'Testes', 'Release', 'Monitoramento', 'Feedback'],
      },
      {
        title: 'Entrega e operação',
        description: 'Deploy não termina o trabalho. Operar exige observar comportamento real, responder incidentes e aprender com dados de produção.',
        panels: [
          { title: 'Entrega contínua', description: 'Mantém o software sempre em estado publicável, com etapas automatizadas e auditáveis.' },
          { title: 'Feature flags', description: 'Permitem ativar, desativar ou liberar funcionalidades gradualmente.' },
          { title: 'Observabilidade', description: 'Logs, métricas e traces ajudam a diagnosticar comportamento real do sistema.' },
          { title: 'Recuperação', description: 'Rollbacks, deploys pequenos e alertas claros reduzem impacto de falhas.' },
        ],
      },
    ],
  },
];

export const PDSW_SECTIONS = [
  { id: 'intro', title: 'Visão Geral', shortTitle: 'Visão Geral' },
  ...PDSW_CHAPTER_CONTENT.map(chapter => ({
    id: chapter.id,
    title: `Capítulo ${chapter.number}: ${chapter.title}`,
    shortTitle: `Cap. ${chapter.number}`,
    exam: chapter.exam.replace('N1 / ', '').replace('N2 / ', ''),
  })),
  { id: 'seminario', title: 'Seminário', shortTitle: 'Seminário', exam: 'S1' },
  { id: 'livro', title: 'Livro Base', shortTitle: 'Livro' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

export const PDSW_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE:
1. Introdução: software é abstrato, maleável, invisível e sujeito a mudanças. Engenharia de Software integra produto, processo, pessoas e qualidade para construir, manter e evoluir sistemas complexos.
2. Processos: modelos tradicionais favorecem previsibilidade; modelos iterativos e ágeis reduzem risco por feedback. XP enfatiza práticas técnicas, Scrum organiza sprints e papéis, Kanban visualiza fluxo e limita WIP.
3. Requisitos: requisitos funcionais descrevem comportamentos; não funcionais descrevem qualidades; requisitos de domínio expressam regras específicas. Histórias, casos de uso, protótipos, MVPs e testes A/B validam valor.
4. Modelos: UML deve ser usada como esboço de comunicação. Diagramas de classes e pacotes tratam estrutura; sequência e atividades tratam interação e fluxo.
5. Princípios de Projeto: decomposição, abstração, ocultamento de informação, integridade conceitual, alta coesão, baixo acoplamento, SOLID, Demeter e composição orientam design evolutivo.
6. Padrões de Projeto: padrões criacionais, estruturais e comportamentais registram soluções recorrentes. Factory Method, Singleton, Adapter, Facade, Strategy, Observer e Template Method têm intenção, contexto e tradeoffs.
7. Arquitetura: arquitetura define componentes, responsabilidades, comunicação e propriedades de qualidade. Camadas, MVC, microsserviços, filas, publish/subscribe e padrões distribuídos envolvem tradeoffs de evolução e operação.
8. Testes: testes unitários, integração, sistema, aceitação e E2E equilibram custo e confiança. FIRST, testabilidade, mocks e Playwright apoiam automação e regressão.
9. Refactoring: refatorar melhora estrutura interna sem alterar comportamento observável. Code smells como método longo, duplicação e classe inchada orientam melhorias; testes reduzem risco.
10. DevOps: DevOps aproxima desenvolvimento e operação com Git, revisão, CI, trunk-based development, entrega contínua, feature flags, observabilidade e recuperação.
Avaliações: N1 / AV1 cobre capítulos 1 a 4; N1 / AV2 cobre capítulos 5 a 7; N2 / S1 é seminário; N2 / AV4 cobre capítulos 8 a 10.
`;

export const PDSW_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'N1 / AV1: Introdução, Processos, Requisitos e Modelos',
    prompt: 'Capítulos 1 a 4: natureza do software, áreas da Engenharia de Software, processos tradicionais e ágeis, XP, Scrum, Kanban, requisitos funcionais e não funcionais, histórias de usuário, casos de uso, MVP, protótipos, testes A/B e modelos UML estruturais e comportamentais.',
  },
  {
    value: 'av2',
    label: 'N1 / AV2: Princípios, Padrões e Arquitetura',
    prompt: 'Capítulos 5 a 7: decomposição, abstração, ocultamento de informação, coesão, acoplamento, SOLID, Demeter, composição, padrões criacionais, estruturais e comportamentais, arquitetura, MVC, camadas, microsserviços, filas, publish/subscribe e antipadrões.',
  },
  {
    value: 'av4',
    label: 'N2 / AV4: Testes, Refactoring e DevOps',
    prompt: 'Capítulos 8 a 10: testes unitários, integração, sistema, aceitação, E2E, FIRST, testabilidade, mocks, Playwright, refactoring, code smells, dívida técnica, Git, CI, trunk-based development, entrega contínua, feature flags e observabilidade.',
  },
  ...PDSW_CHAPTER_CONTENT.map(chapter => ({
    value: chapter.id,
    label: `Cap. ${chapter.number}: ${chapter.title}`,
    prompt: `${chapter.title}: ${chapter.focus}`,
  })),
];

interface QuizSeed {
  exam: QuizExam;
  question: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackWrong: string;
}

const quizSeeds: QuizSeed[] = [
  {
    exam: 'prova1',
    question: 'Qual alternativa descreve melhor o objetivo central da Engenharia de Software?',
    options: ['Programar rapidamente sem documentar decisões', 'Aplicar princípios, processos e técnicas para construir e evoluir software com qualidade', 'Trocar toda modelagem por reuniões informais', 'Garantir que todo sistema seja feito por uma única pessoa'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Engenharia de Software combina produto, processo, pessoas e qualidade para lidar com sistemas complexos.',
    feedbackWrong: 'O foco não é apenas programar; é construir, manter e evoluir software com qualidade, previsibilidade e valor.',
  },
  {
    exam: 'prova1',
    question: 'Por que software costuma ser difícil de gerenciar?',
    options: ['Porque não muda depois da primeira entrega', 'Porque é invisível, complexo, maleável e sujeito a mudanças frequentes', 'Porque não depende de requisitos', 'Porque sempre tem custo de reprodução maior que hardware'],
    correctIndex: 1,
    feedbackCorrect: 'Exato. A invisibilidade e a facilidade aparente de mudança tornam escopo, qualidade e manutenção difíceis.',
    feedbackWrong: 'Software é difícil porque é abstrato, complexo, fácil de alterar e constantemente pressionado por novas necessidades.',
  },
  {
    exam: 'prova1',
    question: 'Qual item representa melhor uma dificuldade essencial do software?',
    options: ['A impossibilidade de copiar arquivos', 'A complexidade de regras, estados e exceções', 'A necessidade de peças físicas', 'A ausência de usuários'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A complexidade cresce com regras, estados, integrações e exceções.',
    feedbackWrong: 'A dificuldade central não está em copiar o produto, mas em entender e controlar sua complexidade.',
  },
  {
    exam: 'prova1',
    question: 'Um processo de software serve principalmente para:',
    options: ['Eliminar comunicação entre pessoas', 'Organizar atividades, responsabilidades, artefatos e critérios de entrega', 'Impedir que requisitos mudem', 'Substituir testes por documentação'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Processo explicita como o time planeja, constrói, valida e entrega.',
    feedbackWrong: 'Processo não elimina mudança nem comunicação; ele organiza o fluxo de trabalho e critérios de qualidade.',
  },
  {
    exam: 'prova1',
    question: 'Qual característica diferencia métodos ágeis de abordagens prescritivas rígidas?',
    options: ['Ágil elimina planejamento', 'Ágil valoriza ciclos curtos, feedback frequente e adaptação contínua', 'Ágil proíbe documentação', 'Ágil só funciona sem cliente'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Agilidade é aprender e ajustar por incrementos, não ausência de disciplina.',
    feedbackWrong: 'Métodos ágeis ainda planejam e documentam quando necessário, mas priorizam feedback rápido.',
  },
  {
    exam: 'prova1',
    question: 'Em Scrum, o Sprint representa:',
    options: ['Um ciclo fixo de trabalho para entregar um incremento potencialmente utilizável', 'Uma reunião anual de planejamento estratégico', 'Uma lista permanente de bugs sem priorização', 'Um documento obrigatório de arquitetura corporativa'],
    correctIndex: 0,
    feedbackCorrect: 'Exato. O Sprint é o ciclo em que o time transforma itens priorizados em incremento.',
    feedbackWrong: 'Sprint é um ciclo curto e timeboxed que deve produzir um incremento inspecionável.',
  },
  {
    exam: 'prova1',
    question: 'O limite de WIP no Kanban ajuda principalmente a:',
    options: ['Aumentar tarefas começadas sem terminar', 'Evidenciar gargalos e melhorar fluxo', 'Eliminar priorização', 'Trocar testes por reuniões'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Limitar trabalho em progresso reduz sobrecarga e torna gargalos visíveis.',
    feedbackWrong: 'Kanban não incentiva começar tudo; ele busca fluxo previsível e melhoria contínua.',
  },
  {
    exam: 'prova1',
    question: 'Uma prática técnica típica de XP é:',
    options: ['Integração contínua com testes frequentes', 'Planejamento único no início do projeto', 'Proibição de feedback do cliente', 'Ausência total de design'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. XP valoriza práticas técnicas que sustentam mudanças rápidas com qualidade.',
    feedbackWrong: 'XP não significa improviso; ele exige disciplina técnica para aceitar mudanças.',
  },
  {
    exam: 'prova1',
    question: 'Um requisito funcional descreve:',
    options: ['Uma qualidade global como desempenho ou segurança', 'Uma funcionalidade ou comportamento esperado do sistema', 'O salário da equipe de desenvolvimento', 'A cor obrigatória do logotipo da organização'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Requisitos funcionais definem o que o sistema deve fazer.',
    feedbackWrong: 'Qualidades como desempenho e segurança são requisitos não funcionais.',
  },
  {
    exam: 'prova1',
    question: 'Qual exemplo é um requisito não funcional?',
    options: ['O usuário deve cadastrar um anúncio', 'O sistema deve gerar relatório mensal', 'A busca deve responder em até dois segundos sob carga prevista', 'O administrador deve bloquear um usuário'],
    correctIndex: 2,
    feedbackCorrect: 'Correto. Tempo de resposta é uma propriedade de qualidade.',
    feedbackWrong: 'Requisito não funcional define atributo de qualidade ou restrição, como desempenho ou segurança.',
  },
  {
    exam: 'prova1',
    question: 'Uma história de usuário bem escrita ajuda a:',
    options: ['Expressar necessidade, ação e benefício sob a ótica de um usuário', 'Substituir toda conversa com stakeholders', 'Garantir arquitetura perfeita', 'Eliminar critérios de aceitação'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Histórias ajudam a conectar funcionalidade com valor.',
    feedbackWrong: 'Histórias não substituem validação; elas organizam conversa e entendimento.',
  },
  {
    exam: 'prova1',
    question: 'A principal função de um MVP é:',
    options: ['Entregar o produto final com todos os recursos planejados', 'Validar uma hipótese de valor com o menor conjunto útil de funcionalidades', 'Evitar contato com usuários reais', 'Substituir completamente testes automatizados'],
    correctIndex: 1,
    feedbackCorrect: 'Exato. MVP reduz desperdício ao testar valor e aprendizado com uma versão mínima viável.',
    feedbackWrong: 'MVP não é produto incompleto sem critério; é um experimento de aprendizado.',
  },
  {
    exam: 'prova1',
    question: 'Protótipos são úteis principalmente para:',
    options: ['Validar entendimento antes de investir em implementação completa', 'Impedir mudanças de requisito', 'Gerar código perfeito automaticamente', 'Substituir o usuário no processo'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Protótipos antecipam feedback e reduzem incerteza.',
    feedbackWrong: 'Protótipos ajudam a aprender, mas não eliminam validação nem decisões posteriores.',
  },
  {
    exam: 'prova1',
    question: 'Em UML, um diagrama de sequência enfatiza:',
    options: ['A ordem temporal das mensagens entre objetos ou participantes', 'A estrutura física do banco de dados', 'O custo mensal da infraestrutura', 'A paleta visual da interface'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Diagramas de sequência mostram interações ao longo do tempo.',
    feedbackWrong: 'Diagrama de sequência é comportamental: mostra participantes, mensagens e ordem temporal.',
  },
  {
    exam: 'prova1',
    question: 'Um bom modelo de software deve:',
    options: ['Representar todos os detalhes do código fonte', 'Reduzir ambiguidade e destacar aspectos importantes para decisão e comunicação', 'Ser criado apenas depois do sistema pronto', 'Substituir conversas com stakeholders'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Modelo é uma abstração útil para comunicar, raciocinar e decidir.',
    feedbackWrong: 'Modelos não precisam reproduzir todo o código; eles devem destacar o que importa.',
  },
  {
    exam: 'prova1',
    question: 'Diagramas de atividades são especialmente úteis para:',
    options: ['Mostrar fluxo, decisões e caminhos alternativos', 'Garantir deploy automático', 'Escolher algoritmo de criptografia', 'Definir preço do produto'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Eles representam processos, decisões e fluxos de trabalho.',
    feedbackWrong: 'Atividades tratam comportamento e fluxo, não infraestrutura ou precificação.',
  },
  {
    exam: 'prova1',
    question: 'Diagramas de classes ajudam principalmente a discutir:',
    options: ['Entidades, atributos, operações e relacionamentos', 'Velocidade da internet do usuário', 'Orçamento de marketing', 'Número de reuniões semanais'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Eles representam estrutura estática relevante do domínio.',
    feedbackWrong: 'Diagramas de classes tratam estrutura e responsabilidades, não fatores externos ao modelo.',
  },
  {
    exam: 'prova1',
    question: 'Usar UML como esboço significa:',
    options: ['Modelar somente o necessário para comunicar e decidir', 'Gerar toda documentação antes de falar com usuários', 'Proibir alterações no modelo', 'Modelar cada linha de código'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. O valor está na comunicação e na decisão, não no excesso de detalhe.',
    feedbackWrong: 'UML como esboço é leve e orientada à conversa, não burocracia completa.',
  },
  {
    exam: 'prova1',
    question: 'Um requisito de domínio costuma representar:',
    options: ['Uma regra específica do negócio ou área de aplicação', 'A linguagem de programação escolhida', 'O modelo do notebook do desenvolvedor', 'A cor do editor de código'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Regras de domínio expressam conhecimento específico do negócio.',
    feedbackWrong: 'Requisito de domínio nasce do negócio, não de preferência de ferramenta.',
  },
  {
    exam: 'prova1',
    question: 'Quando o feedback do usuário chega apenas no final, o principal risco é:',
    options: ['Descobrir tarde que o produto certo não foi construído', 'Reduzir a necessidade de testes', 'Eliminar retrabalho', 'Aumentar automaticamente a qualidade'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Feedback tardio aumenta risco de desperdício e retrabalho.',
    feedbackWrong: 'Feedback tardio geralmente aumenta risco, não reduz.',
  },
  {
    exam: 'prova2',
    question: 'Baixo acoplamento significa que:',
    options: ['Os módulos dependem pouco uns dos outros', 'Todos os métodos ficam na mesma classe', 'O sistema não possui interfaces', 'Toda regra de negócio fica no banco de dados'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Baixo acoplamento reduz impacto de mudanças e facilita testes.',
    feedbackWrong: 'Acoplamento mede dependência entre partes. Quanto menor, mais simples evoluir módulos isolados.',
  },
  {
    exam: 'prova2',
    question: 'Alta coesão em uma classe indica que:',
    options: ['Ela tem muitas responsabilidades desconectadas', 'Seus elementos colaboram para uma responsabilidade bem definida', 'Ela acessa diretamente todos os bancos da empresa', 'Ela não possui métodos públicos'],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Coesão alta indica foco e clareza de responsabilidade.',
    feedbackWrong: 'Uma unidade coesa agrupa comportamentos relacionados.',
  },
  {
    exam: 'prova2',
    question: 'O princípio da responsabilidade única sugere que uma classe deve:',
    options: ['Ter apenas um motivo principal para mudar', 'Conter todas as regras do sistema', 'Evitar qualquer dependência externa', 'Ser implementada sempre como Singleton'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. SRP reduz mistura de interesses e facilita manutenção.',
    feedbackWrong: 'Responsabilidade única significa separar motivos de mudança.',
  },
  {
    exam: 'prova2',
    question: 'Ocultamento de informação busca:',
    options: ['Esconder decisões internas atrás de interfaces estáveis', 'Impedir documentação', 'Eliminar testes', 'Centralizar todo código em uma classe'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Clientes devem depender do contrato, não dos detalhes internos.',
    feedbackWrong: 'Ocultamento de informação protege detalhes de implementação para reduzir impacto de mudanças.',
  },
  {
    exam: 'prova2',
    question: 'A Lei de Demeter recomenda:',
    options: ['Reduzir navegação por cadeias longas de objetos', 'Aumentar dependências transitivas', 'Ignorar encapsulamento', 'Usar sempre herança profunda'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Ela limita conhecimento excessivo sobre a estrutura interna de outros objetos.',
    feedbackWrong: 'Demeter reduz acoplamento, não incentiva acesso profundo a objetos internos.',
  },
  {
    exam: 'prova2',
    question: 'Composição sobre herança é útil porque:',
    options: ['Permite variar comportamento combinando objetos com menor acoplamento', 'Impede reutilização', 'Elimina interfaces', 'Obriga hierarquias profundas'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Composição tende a ser mais flexível que herança rígida.',
    feedbackWrong: 'A ideia é evitar hierarquias frágeis quando colaboração entre objetos resolve melhor.',
  },
  {
    exam: 'prova2',
    question: 'O padrão Strategy é mais adequado quando:',
    options: ['Um objeto precisa trocar algoritmos ou políticas em tempo de execução', 'Um sistema deve ter exatamente uma instância global', 'Uma classe precisa esconder uma API complexa atrás de uma fachada', 'Um objeto precisa notificar vários observadores automaticamente'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Strategy encapsula algoritmos intercambiáveis atrás de uma interface comum.',
    feedbackWrong: 'Strategy é usado para variar comportamento sem espalhar condicionais por todo o código.',
  },
  {
    exam: 'prova2',
    question: 'O padrão Observer ajuda quando:',
    options: ['Um objeto precisa avisar dependentes sobre mudanças de estado', 'Uma classe deve impedir toda extensão', 'Um algoritmo precisa ser escolhido por if/else fixo', 'Uma interface gráfica deve ignorar eventos'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Observer desacopla o emissor dos interessados em suas mudanças.',
    feedbackWrong: 'Observer implementa uma relação publicador-assinantes.',
  },
  {
    exam: 'prova2',
    question: 'O padrão Facade tem como intenção:',
    options: ['Fornecer uma interface simples para um subsistema complexo', 'Criar uma árvore de objetos compostos', 'Garantir múltiplas instâncias de uma classe', 'Ordenar uma coleção por comparação'],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Facade simplifica o uso de um conjunto de classes.',
    feedbackWrong: 'Facade cria uma porta de entrada mais simples para um subsistema complexo.',
  },
  {
    exam: 'prova2',
    question: 'Factory Method reduz acoplamento porque:',
    options: ['Evita que o cliente dependa diretamente de classes concretas de criação', 'Remove todas as interfaces', 'Impede extensão do sistema', 'Substitui testes automatizados'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A criação fica encapsulada e o cliente depende de abstrações.',
    feedbackWrong: 'Factory Method não remove interfaces; ele usa abstração para controlar criação.',
  },
  {
    exam: 'prova2',
    question: 'Um risco comum do Singleton é:',
    options: ['Introduzir estado global e dificultar testes', 'Eliminar acoplamento automaticamente', 'Obrigar baixo consumo de memória', 'Impedir qualquer compartilhamento'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Singleton pode esconder dependências globais.',
    feedbackWrong: 'Singleton não é sempre ruim, mas pode aumentar acoplamento e dificultar isolamento.',
  },
  {
    exam: 'prova2',
    question: 'Em arquitetura em camadas, uma vantagem esperada é:',
    options: ['Separar responsabilidades como apresentação, domínio e persistência', 'Obrigar todo código a acessar banco diretamente', 'Eliminar necessidade de testes', 'Tornar impossível substituir tecnologias'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Camadas organizam responsabilidades e limitam dependências.',
    feedbackWrong: 'Arquitetura em camadas facilita manutenção quando dependências são bem controladas.',
  },
  {
    exam: 'prova2',
    question: 'No padrão MVC, a responsabilidade do Model é:',
    options: ['Representar dados, regras e estado do domínio', 'Renderizar exclusivamente a tela', 'Capturar cliques e atalhos do usuário', 'Configurar somente o servidor web'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Model concentra informação e regras do domínio.',
    feedbackWrong: 'No MVC, View exibe, Controller coordena entrada e Model representa domínio.',
  },
  {
    exam: 'prova2',
    question: 'Microsserviços costumam trazer como tradeoff:',
    options: ['Mais simplicidade operacional em todos os casos', 'Independência de deploy em troca de maior complexidade distribuída', 'Ausência completa de comunicação entre serviços', 'Obrigação de usar um único banco compartilhado'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Microsserviços podem facilitar autonomia, mas aumentam desafios distribuídos.',
    feedbackWrong: 'Microsserviços não são sempre mais simples; eles trocam modularidade por complexidade operacional.',
  },
  {
    exam: 'prova2',
    question: 'Filas são úteis em arquitetura porque:',
    options: ['Permitem comunicação assíncrona e desacoplamento temporal', 'Eliminam falhas de rede', 'Substituem banco de dados relacional em todos os casos', 'Garantem ausência de bugs'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Filas desacoplam produtores e consumidores.',
    feedbackWrong: 'Filas ajudam no fluxo, mas não eliminam todos os problemas distribuídos.',
  },
  {
    exam: 'prova2',
    question: 'Um antipadrão arquitetural como Big Ball of Mud indica:',
    options: ['Sistema sem fronteiras claras e com dependências desorganizadas', 'Arquitetura modular e bem documentada', 'Baixo acoplamento por padrão', 'Separação rígida de responsabilidades'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. O sistema fica difícil de entender, testar e evoluir.',
    feedbackWrong: 'Big Ball of Mud é sinal de desorganização estrutural.',
  },
  {
    exam: 'prova2',
    question: 'Uma decisão arquitetural deve considerar principalmente:',
    options: ['Apenas a preferência pessoal do programador', 'Requisitos de qualidade, restrições, evolução e tradeoffs', 'Somente a linguagem mais popular do momento', 'O menor número possível de discussões com o time'],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Arquitetura é sobre decisões estruturais e seus efeitos em qualidades.',
    feedbackWrong: 'Decisões arquiteturais devem responder a requisitos e restrições.',
  },
  {
    exam: 'prova2',
    question: 'Publish/subscribe reduz acoplamento porque:',
    options: ['Emissores publicam eventos sem conhecer diretamente todos os consumidores', 'Todos os consumidores precisam ser compilados juntos', 'O banco de dados passa a comandar a interface', 'Cada módulo chama todos os outros diretamente'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Eventos permitem comunicação indireta entre produtores e interessados.',
    feedbackWrong: 'Publish/subscribe desacopla emissores e consumidores por meio de eventos.',
  },
  {
    exam: 'prova2',
    question: 'Usar padrões de projeto sem problema real pode causar:',
    options: ['Overengineering e aumento desnecessário de complexidade', 'Redução automática de bugs', 'Eliminação de requisitos', 'Garantia de desempenho'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Padrões devem resolver problemas concretos.',
    feedbackWrong: 'Padrões são ferramentas, não objetivos por si só.',
  },
  {
    exam: 'prova4',
    question: 'Testes unitários verificam principalmente:',
    options: ['Unidades pequenas de código de forma isolada', 'Todo o fluxo do usuário no navegador real', 'A velocidade da rede externa', 'A aprovação jurídica do produto'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Testes unitários focam funções, classes ou componentes pequenos e isolados.',
    feedbackWrong: 'Fluxos completos no navegador são típicos de testes E2E.',
  },
  {
    exam: 'prova4',
    question: 'Testes E2E com Playwright são adequados para:',
    options: ['Verificar fluxos reais do usuário em navegadores automatizados', 'Substituir todo teste unitário', 'Gerar requisitos automaticamente', 'Remover a necessidade de deploy'],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Playwright automatiza navegadores e valida jornadas do usuário.',
    feedbackWrong: 'E2E valida o sistema integrado do ponto de vista do usuário, mas não substitui todos os testes.',
  },
  {
    exam: 'prova4',
    question: 'A pirâmide de testes sugere que:',
    options: ['Todos os testes devem ser E2E', 'Deve haver base maior de testes rápidos e menos testes caros de ponta a ponta', 'Testes unitários devem ser evitados', 'Testes manuais são sempre superiores'],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A ideia é equilibrar feedback rápido com confiança de integração.',
    feedbackWrong: 'A pirâmide favorece muitos testes rápidos e menos E2E caros e frágeis.',
  },
  {
    exam: 'prova4',
    question: 'O princípio FIRST espera que testes sejam:',
    options: ['Rápidos, independentes, repetíveis, auto-verificáveis e oportunos', 'Longos, manuais e dependentes de ordem', 'Executados apenas em produção', 'Escritos somente depois do deploy'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. FIRST orienta testes úteis para feedback contínuo.',
    feedbackWrong: 'Testes bons precisam ser rápidos, confiáveis e claros.',
  },
  {
    exam: 'prova4',
    question: 'Mocks são úteis quando:',
    options: ['É preciso isolar uma dependência externa ou cara em um teste', 'É preciso esconder bugs', 'O teste deve depender sempre de rede real', 'A aplicação não possui dependências'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Mocks isolam colaboração para testar um comportamento específico.',
    feedbackWrong: 'Mocks não servem para esconder problemas; servem para controlar dependências.',
  },
  {
    exam: 'prova4',
    question: 'Refactoring significa:',
    options: ['Mudar a estrutura interna do código sem alterar comportamento observável', 'Adicionar novas funcionalidades sem testes', 'Reescrever o sistema do zero sempre que houver bug', 'Excluir comentários e documentação'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Refatoração melhora design interno preservando comportamento externo.',
    feedbackWrong: 'Refactoring não é nova funcionalidade. O comportamento observável deve continuar igual.',
  },
  {
    exam: 'prova4',
    question: 'Qual alternativa é um code smell comum?',
    options: ['Método longo com muitas responsabilidades', 'Teste automatizado pequeno e claro', 'Classe coesa com responsabilidade única', 'Nome de método expressivo'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Método longo geralmente indica baixa coesão e oportunidade de extração.',
    feedbackWrong: 'Code smells são sintomas de design problemático, como duplicação, método longo e classe inchada.',
  },
  {
    exam: 'prova4',
    question: 'Por que testes automatizados ajudam no refactoring?',
    options: ['Porque provam que o código nunca terá defeitos', 'Porque reduzem risco ao avisar quando uma mudança altera comportamento esperado', 'Porque eliminam revisão de código', 'Porque geram automaticamente a arquitetura ideal'],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Testes funcionam como rede de segurança para mudanças internas.',
    feedbackWrong: 'Testes não garantem ausência de defeitos, mas aumentam confiança contra regressão.',
  },
  {
    exam: 'prova4',
    question: 'Dívida técnica deve ser priorizada considerando:',
    options: ['Risco, frequência de mudança e custo de manutenção', 'Somente gosto pessoal do desenvolvedor', 'A ordem alfabética dos arquivos', 'A cor do tema da IDE'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. O impacto técnico e de negócio orienta a priorização.',
    feedbackWrong: 'Dívida técnica deve ser tratada por impacto, não por preferência subjetiva.',
  },
  {
    exam: 'prova4',
    question: 'Integração contínua (CI) é a prática de:',
    options: ['Integrar mudanças frequentemente e validar com checks automatizados', 'Fazer deploy manual uma vez por ano', 'Trabalhar sem controle de versão', 'Evitar revisão para acelerar entregas'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. CI reduz risco de integração tardia e gera feedback rápido.',
    feedbackWrong: 'CI envolve integrar com frequência e rodar testes, lint, build ou outros checks.',
  },
  {
    exam: 'prova4',
    question: 'DevOps busca principalmente:',
    options: ['Aproximar desenvolvimento e operação por colaboração, automação e feedback', 'Criar barreiras entre times', 'Trocar todo teste por monitoramento', 'Impedir deploy frequente'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. DevOps combina cultura, práticas e ferramentas para entregar e operar melhor.',
    feedbackWrong: 'DevOps envolve colaboração, automação, fluxo e feedback entre desenvolvimento e operação.',
  },
  {
    exam: 'prova4',
    question: 'Observabilidade em software ajuda a:',
    options: ['Entender o comportamento do sistema em produção por logs, métricas e rastreamentos', 'Evitar qualquer coleta de dados operacionais', 'Substituir completamente requisitos', 'Garantir que usuários nunca encontrem erro'],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Observabilidade permite diagnosticar problemas reais e orientar melhoria contínua.',
    feedbackWrong: 'Observabilidade usa sinais como logs, métricas e traces para compreender sistemas em execução.',
  },
  {
    exam: 'prova4',
    question: 'Um pipeline de entrega bem definido deve:',
    options: ['Tornar build, testes e deploy mais repetíveis e rastreáveis', 'Depender de comandos manuais secretos', 'Executar somente na máquina de uma pessoa', 'Ignorar falhas para acelerar publicação'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Pipelines reduzem variação manual e tornam entregas auditáveis.',
    feedbackWrong: 'Um pipeline deve automatizar passos confiáveis e interromper a entrega quando checks importantes falham.',
  },
  {
    exam: 'prova4',
    question: 'Trunk-based development favorece:',
    options: ['Integrações pequenas e frequentes na linha principal', 'Branches longas sem integração', 'Deploy sem testes', 'Ausência de revisão'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Integrações pequenas reduzem conflitos e risco acumulado.',
    feedbackWrong: 'Trunk-based development combate integração tardia, não a incentiva.',
  },
  {
    exam: 'prova4',
    question: 'Feature flags permitem:',
    options: ['Ativar ou desativar funcionalidades sem necessariamente fazer novo deploy', 'Remover versionamento', 'Ignorar logs', 'Eliminar requisitos não funcionais'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Flags ajudam em liberação gradual, experimentos e rollback lógico.',
    feedbackWrong: 'Feature flags controlam exposição de funcionalidades, não substituem práticas de qualidade.',
  },
  {
    exam: 'prova4',
    question: 'Entrega contínua pressupõe que:',
    options: ['O software permanece em estado publicável por meio de automação e validação', 'Deploy manual secreto é obrigatório', 'Testes devem ser removidos do pipeline', 'Mudanças grandes são sempre melhores'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. A base é manter entregas repetíveis, rastreáveis e confiáveis.',
    feedbackWrong: 'Entrega contínua depende de automação e checks confiáveis.',
  },
  {
    exam: 'prova4',
    question: 'Um rollback é importante porque:',
    options: ['Reduz impacto quando uma mudança em produção causa falha', 'Impede deploys futuros', 'Substitui monitoramento', 'Remove necessidade de testes'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Recuperação rápida é parte da operação confiável.',
    feedbackWrong: 'Rollback não substitui prevenção; ele reduz dano quando algo escapa.',
  },
  {
    exam: 'prova4',
    question: 'Testabilidade melhora quando o código possui:',
    options: ['Dependências explícitas e responsabilidades claras', 'Estado global escondido em todos os módulos', 'Métodos gigantes e imprevisíveis', 'Regras misturadas com infraestrutura'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Dependências claras e responsabilidades focadas facilitam testes.',
    feedbackWrong: 'Código testável evita acoplamento oculto e mistura excessiva de responsabilidades.',
  },
  {
    exam: 'prova4',
    question: 'Refatorações devem ser preferencialmente:',
    options: ['Pequenas, verificáveis e apoiadas por testes', 'Grandes, sem validação e com múltiplas mudanças de comportamento', 'Feitas apenas em produção', 'Misturadas com todas as features pendentes'],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Passos pequenos reduzem risco e facilitam revisão.',
    feedbackWrong: 'Refatoração segura exige controle de escopo e verificação.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = quizSeeds.map((seed, index) => ({
  ...seed,
  id: `pdsw-q${index + 1}`,
  question: `${index + 1}. ${seed.question}`,
}));
