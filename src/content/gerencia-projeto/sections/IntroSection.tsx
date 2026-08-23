import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Gerência de Projeto"
        subtitle="Como transformar uma intenção em entrega: escopo, prazo, custo, risco — e as pessoas no meio disso tudo"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          GPJT (80h, 5º período) trata do conjunto de conhecimentos, habilidades, ferramentas e técnicas usados
          para <strong>planejar, executar e monitorar um projeto</strong>. É a disciplina que dá nome e método a
          uma coisa que todo mundo já faz de forma intuitiva — e que, feita de forma intuitiva, costuma dar
          errado de maneiras previsíveis.
        </p>
        <p>
          O percurso vai do conceito ("o que é um projeto, afinal?") até os cálculos de controle: caminho crítico,
          folgas e análise de valor agregado. E fecha com a comparação entre o mundo preditivo, do PMBOK
          tradicional, e o mundo ágil.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'O que é um projeto — e o que não é',
            'Programa, portfólio e a história da disciplina',
            'PMBOK: os cinco grupos, as dez áreas — e a virada da 7ª edição',
            'Ciclo de vida, estruturas organizacionais e partes interessadas',
            'Iniciação: o Termo de Abertura autoriza o projeto',
            'Escopo, requisitos e metas SMART',
            'EAP: decompor o trabalho em entregas',
            'Cronograma, caminho crítico e folgas',
            'Riscos: identificar, quantificar, controlar, iterar',
            'Custos e análise de valor agregado',
            'Execução, controle de mudanças e encerramento',
            'Metodologias ágeis × tradicionais',
          ]}
        />
      </Subsection>

      <Subsection title="Avaliação: os artefatos de um projeto real" accentClass="text-accent5">
        <HighlightBox title="Não há prova — há entregas" accent="var(--color-accent4)">
          <p>
            A disciplina é avaliada por uma sequência de <strong>atividades</strong> que, juntas, produzem os
            documentos que um projeto de verdade produz. Cada entrega é uma peça do mesmo quebra-cabeça: primeiro
            se define o que é um projeto, depois se autoriza um, decompõe-se o trabalho, especifica-se o escopo,
            calcula-se o prazo — e por fim discute-se se havia um jeito mais leve de fazer tudo isso.
          </p>
        </HighlightBox>
        <div className="mt-4">
          <PanelList
            columns=""
            items={[
              {
                title: 'Conceituar e autorizar',
                description:
                  'Descrever as características de um projeto em mapa mental com um exemplo real; escrever 10 perguntas sobre o texto "O que é projeto de fato"; e produzir DOIS Termos de Abertura — um da área de TI e outro de outra área.',
              },
              {
                title: 'Decompor e especificar',
                description:
                  'Criar uma EAP para um churrasco de 10 pessoas (com no mínimo 3 proteínas, água, cerveja e refrigerante) e, a partir dos modelos da disciplina, produzir um Levantamento de Requisitos e uma Declaração de Escopo.',
              },
              {
                title: 'Programar',
                description:
                  'Calcular o caminho crítico de um diagrama de precedências — a atividade mais técnica do semestre, e a única com resposta numérica única.',
              },
              {
                title: 'Comparar abordagens',
                description:
                  'Apresentação em grupo sobre metodologias ágeis, entregue em .ppt, .pdf ou .odp — o professor avisou que outro formato custaria um ponto do trabalho.',
              },
            ]}
          />
        </div>
      </Subsection>

      <Subsection title="Materiais-base" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Apostila "Fundamentos da Gestão de Projetos" (FM2S, 2022)',
              description:
                'Percorre história, conceitos, metodologias, ferramentas, KPIs e governança — e traz a comparação lado a lado entre o PMBOK 6 e o PMBOK 7, que é o eixo da parte teórica.',
              accent: 'accent',
            },
            {
              title: 'Módulos 1 a 3 da ENAP',
              description:
                '"Introdução à Gestão de Projetos", da Escola Nacional de Administração Pública: contextualização, conceitos básicos e os grupos de processos, com forte ancoragem no setor público brasileiro.',
              accent: 'accent2',
            },
            {
              title: 'Material de controle da ENAP (171 páginas)',
              description:
                'O mais denso do conjunto: cronograma, gráfico de Gantt, compressão, controle de custos com análise de valor agregado, gerenciamento de mudanças e encerramento.',
              accent: 'accent3',
            },
            {
              title: 'Slides do professor: Iniciação e Planejamento',
              description:
                'Material autoral com foco em projetos de TI: particularidades do setor, checklist de um projeto arruinado, fatores de sucesso, definição de escopo, stakeholders, EAP e gerenciamento de riscos.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma de Gerência de Projetos 2024 —
          BSI/IFAL: apostila de fundamentos, os módulos e o material de controle da ENAP, os slides autorais do
          professor sobre iniciação e planejamento, as aulas de novembro sobre cronograma, orçamento,
          fornecedores, recursos, comunicação e qualidade, além dos modelos de Termo de Abertura, Requisitos e
          Declaração de Escopo e do diagrama da atividade de caminho crítico — este último resolvido passo a
          passo nesta página.
        </p>
        <p className="text-sm">
          O modelo de Termo de Abertura distribuído em aula é um documento real e preenchido, com nomes de
          docentes e alunos, divisão de papéis e dados de contato. Aqui se reproduz apenas sua{' '}
          <strong>estrutura</strong>, com os exemplos despersonalizados.
        </p>
      </HighlightBox>
    </section>
  );
}
