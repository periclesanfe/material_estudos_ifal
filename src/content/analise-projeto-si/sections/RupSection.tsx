import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function RupSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Processo Unificado (RUP)"
        subtitle="Fases, marcos, disciplinas e artefatos — o processo que organiza toda a disciplina"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que o RUP veio resolver">
        <p>
          Criado por <strong>Booch, Jacobson e Rumbaugh</strong> — os mesmos autores da UML — e
          implementado pela Rational (o livro chama de <em>Unified Process</em>; RUP é o nome
          comercial; a IBM comprou a Rational em 2003). Os problemas que ele endereça, segundo
          Kruchten: necessidades do usuário mal compreendidas, dificuldade para tratar mudanças de
          requisitos, descoberta tardia de problemas sérios, baixa qualidade e confusão sobre papéis
          e responsabilidades.
        </p>
        <p>
          É uma <strong>plataforma de processos adaptável</strong>: não se "usa o RUP inteiro" — ele
          é configurado para as necessidades de cada organização.
        </p>
      </TheoryBlock>

      <Subsection title="As cinco características" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: 'Iterativo e incremental', description: 'O ciclo de vida é dividido em iterações, cada uma entregando incrementos do software.', accent: 'accent' },
            { title: 'Guiado por CASOS DE USO', description: 'Os casos de uso conectam todas as fases e visões e são usados por todos os envolvidos — do cliente ao testador.', accent: 'accent2' },
            { title: 'Centrado na ARQUITETURA', description: 'A arquitetura (estática e dinâmica) evolui a partir das necessidades do produto e guia o desenvolvimento.', accent: 'accent3' },
            { title: 'Orientado a objetos', description: 'Componentes construídos com objetos que colaboram para realizar os casos de uso.', accent: 'accent4' },
            { title: 'Planejado por RISCOS', description: 'Riscos são analisados continuamente e os mais críticos são atacados primeiro — daí a elaboração vir antes da construção.', accent: 'accent5' },
          ]}
        />
      </Subsection>

      <Subsection title="As quatro fases e seus marcos" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'CONCEPÇÃO — estabelecer escopo, estimar custos e riscos → marco: Objetivos do ciclo de vida',
            'ELABORAÇÃO — reduzir os principais riscos e definir uma arquitetura EXECUTÁVEL → marco: Arquitetura do ciclo de vida',
            'CONSTRUÇÃO — desenvolver iterativa e incrementalmente o produto completo → marco: Capacidade operacional inicial',
            'TRANSIÇÃO — disponibilizar o software aos usuários finais → marco: Lançamento do produto',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Cada fase se divide em <strong>iterações</strong> — e cada iteração é uma passagem
          completa pela sequência de disciplinas. Uma fase só termina quando seu{' '}
          <strong>marco</strong> é atingido: é o ponto de decisão de "seguimos ou não".
        </p>
      </Subsection>

      <Subsection title="As duas dimensões (o gráfico das baleias)" accentClass="text-accent5">
        <ComparisonTableWrapper />
      </Subsection>

      <Subsection title="As nove disciplinas" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Básicas (core)', description: 'Modelagem de Negócios · Requisitos · Análise e Projeto · Implementação · Testes · Implantação. São as que produzem o produto.' },
            { title: 'De suporte', description: 'Gerenciamento de Projeto · Gerenciamento de Configuração e Mudanças · Ambiente. Sustentam o trabalho das demais.' },
          ]}
        />
      </Subsection>

      <Subsection title="Papéis, atividades e artefatos" accentClass="text-accent2">
        <ExampleBox title="A tríade que estrutura o processo">
          <p>
            <strong>PAPÉIS</strong> (responsabilidades e comportamento — Programador, Testador,
            Especificador de Requisitos; uma pessoa pode acumular vários) executam{' '}
            <strong>ATIVIDADES</strong> (unidades de trabalho com finalidade, passos, entradas,
            saídas e responsável) que produzem <strong>ARTEFATOS</strong> (modelos, documentos,
            código, executáveis — que por sua vez alimentam outras atividades).
          </p>
          <p>
            Exemplo do material: o papel <em>Especificador de Requisitos</em> executa a atividade{' '}
            <em>Detalhar um Caso de Uso</em> e produz o artefato <em>Caso de Uso</em>. Na disciplina
            de Requisitos, os artefatos incluem o glossário, a <strong>Visão</strong>, o modelo de
            casos de uso, as especificações suplementares e a <strong>SRS</strong> — todos usados
            nas entregas da AV1.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="As seis melhores práticas" accent="var(--color-accent3)">
        <p>
          Desenvolvimento iterativo · gerência de requisitos · arquitetura de componentes ·
          modelagem visual (UML) · verificação da qualidade · gerenciamento de mudanças. E os seis{' '}
          <strong>princípios-chave</strong>: adaptar o processo, balancear prioridades dos
          investidores, colaborar em equipe, demonstrar valor iterativamente, elevar o nível de
          abstração e focar continuamente na qualidade.
        </p>
      </HighlightBox>
    </section>
  );
}

function ComparisonTableWrapper() {
  return (
    <div className="overflow-x-auto study-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Eixo</th>
            <th className="text-left py-3 px-4 font-semibold text-accent uppercase tracking-wider text-xs">Aspecto</th>
            <th className="text-left py-3 px-4 font-semibold text-accent3 uppercase tracking-wider text-xs">O que organiza</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/50">
            <td className="py-3 px-4 font-semibold text-text text-xs">Horizontal</td>
            <td className="py-3 px-4 text-text-muted text-xs">DINÂMICO — o tempo</td>
            <td className="py-3 px-4 text-text-muted text-xs">Fases, marcos e iterações</td>
          </tr>
          <tr className="border-b border-border/50 last:border-0">
            <td className="py-3 px-4 font-semibold text-text text-xs">Vertical</td>
            <td className="py-3 px-4 text-text-muted text-xs">ESTÁTICO — o conteúdo</td>
            <td className="py-3 px-4 text-text-muted text-xs">Disciplinas, atividades, artefatos e papéis</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-muted text-sm leading-relaxed p-4 pt-0">
        As "baleias" do gráfico são as curvas de esforço de cada disciplina ao longo do tempo:
        requisitos pesa na concepção, análise e projeto na elaboração, implementação na construção,
        implantação na transição. Nenhuma disciplina "acaba" — todas variam de intensidade.
      </p>
    </div>
  );
}
