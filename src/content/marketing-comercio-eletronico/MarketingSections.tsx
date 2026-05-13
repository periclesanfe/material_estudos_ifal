import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import ConceptCard from '../../components/ui/ConceptCard';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizCard from '../../components/ui/QuizCard';
import { MARKETING_GUIDE_CONTEXT, MARKETING_TOPICS, QUIZ_DATA } from './data';

interface MarketingSectionsProps {
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

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
    </div>
  );
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

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-4`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

function PanelList({ items, columns }: { items: PanelItem[]; columns?: string }) {
  return (
    <div className={columns ? `grid grid-cols-1 ${columns} gap-3` : 'space-y-3'}>
      {items.map(item => (
        <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
          <h3 className="font-semibold text-sm md:text-base text-text mb-0.5">{item.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

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

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Quiz de Revisão" subtitle="25 perguntas para testar seus conhecimentos" colorClass="text-accent4" />
      {QUIZ_DATA.map(q => (
        <QuizCard key={q.id} data={q} />
      ))}
    </section>
  );
}

function AiQuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Quiz com IA" subtitle="Perguntas inéditas geradas pelo Google Gemini" colorClass="text-accent3" />
      <HighlightBox title="Como funciona?">
        <p>A IA analisa todo o conteúdo deste guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
      </HighlightBox>
      <AIQuizGenerator guideContext={MARKETING_GUIDE_CONTEXT} topics={MARKETING_TOPICS} />
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
    case 'quiz':
      return <QuizSection />;
    case 'iaquiz':
      return <AiQuizSection />;
    default:
      return null;
  }
}
