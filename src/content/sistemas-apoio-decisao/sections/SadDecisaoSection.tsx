import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function SadDecisaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Decisão e Sistemas de Apoio"
        subtitle="Quem decide o quê em cada nível da organização — e onde entra o SAD"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que é um SAD">
        <p>
          A definição formal do material: <strong>"SAD é um sistema de informação
          computadorizado que combina MODELOS e DADOS na tentativa de resolver problemas
          SEMIESTRUTURADOS e alguns não estruturados, com intenso envolvimento do
          usuário"</strong>. Três marcas nessa frase: combina modelos com dados (não é só
          consulta), mira problemas semiestruturados, e mantém a pessoa no centro — o sistema
          apoia, não decide sozinho.
        </p>
        <p>
          A matéria-prima é a <strong>capacidade analítica</strong>: "a habilidade de analisar
          dados e informações, independentemente da correlação entre eles, para gerar
          conhecimento de valor e realizar tomadas de decisão de forma lógica". Ter capacidade
          analítica significa <strong>fundamentar ações e opiniões em dados</strong>. Por isso o
          SAD, além de recuperar e apresentar dados, faz <strong>análises matemáticas e
          estatísticas</strong> sobre eles.
        </p>
      </TheoryBlock>

      <Subsection title="A pirâmide organizacional" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Nível"
          leftLabel="Sistema"
          rightLabel="O que faz"
          rows={[
            { criterion: 'Operacional', left: 'SPT — Processamento de Transações', right: 'Registra o dia a dia: vendas, pedidos, folha. É a fonte de dados de todo o resto.' },
            { criterion: 'Tático', left: 'SIG — Informação Gerencial', right: 'Relatórios de rotina e histórico, orientados a eventos INTERNOS; depende dos SPTs.' },
            { criterion: 'Tático', left: 'SAD — Apoio à Decisão', right: 'Decisões NÃO USUAIS, com dados internos E EXTERNOS, maior poder analítico e interface interativa.' },
            { criterion: 'Estratégico', left: 'SAE — Apoio ao Executivo', right: 'Para gerentes seniores: incorpora dados externos (leis, concorrentes) e resume em texto e gráficos.' },
          ]}
        />
      </Subsection>

      <Subsection title="Os três tipos de decisão" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'ESTRUTURADA',
              description: 'Procedimento conhecido e repetitivo: contas a receber, entrada de pedidos, análise orçamentária. Apoio: SIG e modelos estatísticos. Fica com os gerentes de nível inferior.',
              accent: 'accent',
            },
            {
              title: 'SEMIESTRUTURADA',
              description: 'Parte tem procedimento, parte exige julgamento: programação de produção, avaliação de crédito, orçamento, fusões e aquisições. Apoio: o SAD. Fica com os gerentes intermediários.',
              accent: 'accent2',
            },
            {
              title: 'NÃO ESTRUTURADA',
              description: 'Sem procedimento definido, exige bom senso e percepção: contratar um executivo, planejar P&D, novas tecnologias. Apoio: SAD, sistemas especialistas e redes neurais. Fica com os executivos seniores.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Tomada de decisão e o que a influencia" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Tomada de decisão é "a habilidade para processar informações mediante uma análise
          lógica e objetiva" — e é o processo <strong>posterior</strong> ao trabalho de análise e
          entendimento do problema: se a análise foi bem feita, o conjunto de opções já chega
          reduzido. Os fatores que a influenciam:
        </p>
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Conhecimento e experiência', description: 'O repertório de quem decide sobre o domínio em questão.' },
            { title: 'Informação disponível', description: 'A qualidade e a completude dos dados na mão — o problema que a engenharia de requisitos e o ETL atacam.' },
            { title: 'Tempo', description: 'Decisões sob pressão de prazo aceitam menos análise.' },
            { title: 'Tipo de decisão', description: 'Inédita ou baseada em situações anteriores e benchmarking.' },
            { title: 'Risco envolvido', description: 'Quanto está em jogo se a escolha estiver errada.' },
            { title: 'Ferramentas e autoridade', description: 'Conhecer as ferramentas facilitadoras e ter posição para decidir.' },
          ]}
        />
      </Subsection>

      <Subsection title="Dois tipos de SAD" accentClass="text-accent4">
        <ComparisonTable
          criterionLabel="Tipo"
          leftLabel="O que oferece"
          rightLabel="Exemplo"
          rows={[
            { criterion: 'Orientado a DADOS', left: 'Ferramentas de manipulação e análise; testes estatísticos; combinação de dados para exibição', right: 'Um dashboard que cruza vendas por região e período' },
            { criterion: 'Orientado a MODELOS', left: 'Um modelo matemático da decisão que está sendo apoiada', right: 'Um modelo de pesquisa operacional para dimensionar estoque' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que um gerente precisa de um SAD" accent="var(--color-accent3)">
        <p>
          O material lista as razões: a <strong>quantidade de alternativas</strong> cresceu, a{' '}
          <strong>pressão de tempo</strong> aumentou, a análise ficou mais{' '}
          <strong>sofisticada</strong> (exigindo modelagem) e é preciso{' '}
          <strong>rapidez</strong> para acessar informações remotas, consultar especialistas ou
          reunir um grupo — tudo sem grandes despesas. O SAD se relaciona com data warehousing,
          OLAP, data mining, BI, BAM, modelagem analítica e CRM — os temas das próximas seções.
        </p>
      </HighlightBox>
    </section>
  );
}
