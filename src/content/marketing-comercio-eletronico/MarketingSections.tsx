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

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {['Bens', 'Serviços', 'Eventos', 'Experiências', 'Pessoas', 'Lugares', 'Propriedades', 'Organizações', 'Informações', 'Ideias'].map(item => (
          <div key={item} className="bg-card border border-border rounded-xl p-3 text-center card-hover">
            <span className="text-sm font-semibold text-text">{item}</span>
          </div>
        ))}
      </div>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {[
          { num: 1, name: 'Produto', isNew: false },
          { num: 2, name: 'Preço', isNew: false },
          { num: 3, name: 'Praça', isNew: false },
          { num: 4, name: 'Promoção', isNew: false },
          { num: 5, name: 'Pessoas', isNew: true },
          { num: 6, name: 'Processos', isNew: true },
          { num: 7, name: 'Posicionamento', isNew: true },
          { num: 8, name: 'Performance', isNew: true },
        ].map(p => (
          <div key={p.num} className={`bg-card rounded-lg p-3 text-center border ${p.isNew ? 'border-accent2/40' : 'border-border'}`}>
            <span className={`font-display text-lg font-black block ${p.isNew ? 'text-accent2' : 'text-accent'}`}>{p.num}</span>
            <span className="font-semibold text-sm text-text">{p.name}</span>
          </div>
        ))}
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {[
          'Aplicar informações', 'Identificar o cliente', 'Identificar necessidades',
          'Criar conversas', 'Criar proximidade', 'Aprimorar processos',
          'Criar valor', 'Gerar confiança', 'Aumentar ganhos',
          'Conquistar novos clientes', 'Branding', 'Aumentar faturamento',
          'Fortalecer a cultura', 'Reinventar processos', 'Sustentabilidade',
        ].map((char, i) => (
          <div key={i} className="bg-card rounded-xl px-4 py-3 border border-border flex items-center gap-3">
            <span className="text-accent text-xs font-bold tabular-nums w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-sm text-text">{char}</span>
          </div>
        ))}
      </div>
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
        <p>A IA analisa todo o conteúdo deste guia e gera uma pergunta inédita com 4 alternativas, resposta correta e explicação detalhada.</p>
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
