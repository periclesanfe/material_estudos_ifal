import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function ProgramaPortfolioSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Programa, Portfólio e História"
        subtitle="Três níveis de agrupamento — e de onde veio a disciplina que os organiza"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <TheoryBlock title="Três níveis, três perguntas diferentes">
        <p>
          Projeto, programa e portfólio não são apenas tamanhos diferentes da mesma coisa. Cada um responde a
          uma pergunta distinta: o projeto pergunta <em>o que vamos entregar?</em>, o programa pergunta{' '}
          <em>que benefício queremos colher?</em> e o portfólio pergunta{' '}
          <em>quais trabalhos merecem nossos recursos?</em>
        </p>
      </TheoryBlock>

      <Subsection title="Programa: entrega × benefício" accentClass="text-accent2">
        <HighlightBox title="A distinção que mais cai">
          <p>
            Um <strong>programa</strong> é um conjunto de projetos RELACIONADOS, gerenciados de modo coordenado
            para obter benefícios que não estariam disponíveis se fossem gerenciados individualmente.
          </p>
          <p>
            E aqui está o ponto: enquanto o foco do projeto é a <strong>entrega</strong> do bem, produto ou
            serviço a que ele se propôs, o foco do programa é a realização dos <strong>benefícios</strong>{' '}
            perseguidos. E, como o material define com precisão,{' '}
            <em>benefícios não são produtos — são impactos e resultados percebidos</em> pela sociedade, pela
            organização ou pelos serviços.
          </p>
          <p className="text-sm">
            Um projeto pode entregar exatamente o que prometeu e o programa ainda assim falhar: as escolas foram
            construídas (entrega), mas a evasão escolar não caiu (benefício). São dois níveis de sucesso, e é
            possível acertar um e errar o outro.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Portfólio: o que é contínuo" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Projeto e Programa"
          rightLabel="Portfólio"
          criterionLabel="Critério"
          rows={[
            { criterion: 'Duração', left: 'TEMPORÁRIOS — têm começo e fim', right: 'CONTÍNUO — não termina' },
            {
              criterion: 'O que agrupa',
              left: 'Projeto: um esforço. Programa: projetos relacionados entre si',
              right: 'Projetos, programas e outros trabalhos, em andamento ou planejados',
            },
            {
              criterion: 'Critério de agrupamento',
              left: 'Relação direta entre os projetos, que compartilham benefícios',
              right: 'Alinhamento com os objetivos ESTRATÉGICOS da organização',
            },
            {
              criterion: 'Pergunta que responde',
              left: 'Estamos executando bem este trabalho?',
              right: 'Estamos executando os trabalhos CERTOS?',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Uma organização pode ter vários portfólios, cada um tratando de áreas ou objetivos específicos — e, em
          última instância, um portfólio abrangente para a organização como um todo. Os processos de gestão de
          portfólio da metodologia pública citada no material: identificar, selecionar, priorizar, balancear,
          monitorar, gerir e gerenciar mudanças estratégicas.
        </p>
      </Subsection>

      <Subsection title="A história em marcos" accentClass="text-accent4">
        <FlowDiagram
          items={[
            '2570 a.C. — pirâmides: registros indicam um gerente para cada face da Grande Pirâmide',
            '208 a.C. — Grande Muralha: força de trabalho organizada em três grupos (soldados, civis, condenados)',
            '1911 — Taylor publica "The Principles of Scientific Management"',
            'Gantt (1861–1919) cria os diagramas de barras — o pai fundador da disciplina moderna',
            '1957 — DuPont cria o CPM para parar e reiniciar plantas químicas',
            '1958 — Marinha dos EUA desenvolve o PERT no projeto Polaris',
            '1962 — Departamento de Defesa cria a WBS (a EAP), também no Polaris',
            '1965 — nasce o IPMA, em Viena · 1969 — cinco voluntários fundam o PMI, na Filadélfia',
          ]}
        />
      </Subsection>

      <Subsection title="Os personagens" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Frederick Taylor (1856–1915)',
              description:
                'Iniciou o estudo científico do trabalho na indústria siderúrgica. Seu objetivo declarado era permitir que trabalhadores não qualificados aprendessem rapidamente tarefas complexas por meio da simplificação.',
              accent: 'accent',
            },
            {
              title: 'Henry Gantt (1861–1919)',
              description:
                'Considerado o pai fundador do gerenciamento de projetos moderno. Estudou detalhadamente a sequência das atividades e a representou em diagramas de barras e marcos — técnica que segue central mais de um século depois.',
              accent: 'accent2',
            },
            {
              title: 'CPM — DuPont, 1957',
              description:
                'Criado para o complexo processo de fechar plantas químicas para manutenção e reiniciá-las. Economizou US$ 1 milhão no primeiro ano de uso — o retorno que consolidou a técnica.',
              accent: 'accent3',
            },
            {
              title: 'PERT e WBS — projeto Polaris',
              description:
                'O PERT (1958) analisa as tarefas e o tempo mínimo total; a WBS (1962) é a estrutura hierárquica de entregas. Ambos nasceram do programa de mísseis balísticos submarinos e migraram para o setor privado.',
              accent: 'accent4',
            },
            {
              title: 'IPMA — 1965',
              description:
                'A primeira associação de gerenciamento de projetos do mundo, nascida em Viena como fórum de troca entre gerentes. Hoje é uma federação de cerca de 50 associações nacionais.',
              accent: 'accent5',
            },
            {
              title: 'PMI — 1969',
              description:
                'Fundado por cinco voluntários na Filadélfia, é hoje o editor do PMBOK e emissor das certificações PMP (o padrão-ouro) e CAPM, entre outras.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Outras fontes de conhecimento" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'PMBOK — PMI',
              description:
                'Considerado mais um GUIA do que um método: descreve processos e melhores práticas amplamente reconhecidos, sem impor um caminho único.',
              accent: 'accent',
            },
            {
              title: 'PRINCE2 — Reino Unido',
              description:
                'Projects IN Controlled Environments, desenvolvido pela agência CCTA e padrão do governo britânico desde 1989. Nasceu para projetos de tecnologia e hoje serve a todos os tipos.',
              accent: 'accent2',
            },
            {
              title: 'ISO 21500:2012',
              description:
                'Recomenda um modo profissional de gerenciar projetos com base nas melhores práticas globais, aplicável a organizações de qualquer porte e setor.',
              accent: 'accent3',
            },
            {
              title: 'MGP-SISP',
              description:
                'Metodologia de gerenciamento de projetos do governo federal brasileiro, criada para alinhar processos de trabalho e padronizar a documentação nos órgãos públicos.',
              accent: 'accent4',
            },
            {
              title: 'ZOPP',
              description:
                'Planejamento de Projeto Orientado por Objetivos, de origem alemã, baseado no Marco Lógico. Sua marca é o enfoque PARTICIPATIVO na construção do consenso e na tomada de decisão.',
              accent: 'accent5',
            },
            {
              title: 'IPMA Competence Baseline',
              description:
                'O padrão de competência do IPMA, focado em descrever os elementos de competência do gerente — e não os processos do projeto.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
