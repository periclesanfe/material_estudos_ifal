import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Análise e Projeto de Sistemas de Informação"
        subtitle="Do problema ao projeto da solução: requisitos, UML e arquitetura — com um sistema real construído em equipe"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          APSI (5º período, 80h) é a ponte entre <strong>entender o problema</strong> e{' '}
          <strong>projetar a solução</strong>. Você aprende a levantar e documentar requisitos, a
          modelar o sistema em UML (casos de uso, classes, sequência, atividades, estados) e a
          desenhar sua arquitetura — aplicando tudo num projeto real, em equipe, com repositório
          git e demonstração ao vivo. É a disciplina que dá o vocabulário de projeto que PDSW,
          Qualidade de Software e Fábrica de Software assumem como conhecido.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Conceitos de engenharia de software e modelos de processo',
            'Processo Unificado (RUP): fases, disciplinas e artefatos',
            'Modelagem de negócio e engenharia de requisitos',
            'Modelagem de casos de uso e os documentos do RUP (visão e SRS)',
            'Modelagem conceitual de classes e mecanismos da UML',
            'Identificação de classes: Abbott, BCE e a VCP',
            'Diagramas de interação, atividades e máquina de estados',
            'Projeto de classes, arquitetura, SOLID e padrões de projeto',
            'Projeto final: especificação, implementação e apresentação',
          ]}
        />
      </Subsection>

      <Subsection title="Como a nota é composta" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'AV1 — Quizzes (40%) + Documentos (60%)',
              description:
                'Quizzes ao longo das aulas (feitos no Quizizz, individualmente ou em times) e a entrega dos documentos de VISÃO e de ESPECIFICAÇÃO DE REQUISITOS do projeto, no modelo do RUP, com casos de uso e modelagem conceitual.',
            },
            {
              title: 'AV2 — Especificação + Projeto',
              description:
                'Especificação do projeto (pelo menos 3 casos de uso detalhados — um por integrante —, diagrama de atividades, VCPs, diagramas de interação e arquitetura com pacotes e MVC) e apresentação da equipe com repositório git compartilhado e demo online.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Onde a disciplina se conecta" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Projeto Integrador do 5º período',
              description:
                'APSI se articula com Programação Web e Gerência de Projeto: o sistema especificado aqui é o mesmo implementado e gerenciado lá, com resultados em Governança de TI e TABD.',
              accent: 'accent',
            },
            {
              title: 'Ferramentas',
              description:
                'Para os diagramas: lucidchart, draw.io, Visual Paradigm, Creately, Papyrus, Modelio, ArgoUML ou PlantUML (texto que vira diagrama, usado em aula no VSCode).',
              accent: 'accent2',
            },
            {
              title: 'Bibliografia',
              description:
                'Sommerville · Marco Tulio Valente (Engenharia de Software Moderna, gratuito em engsoftmoderna.info) · Wazlawick · Eduardo Bezerra (Princípios de Análise e Projeto com UML) · Dennis & Wixon · Pressman · SWEBOK.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma APSI 2024.1 — BSI/IFAL
          (Prof. Augusto César): slides das aulas, planilha de levantamento de requisitos,
          documentos-modelo do RUP com exemplos preenchidos (Sistema de Registro em Curso, SCA,
          MERCI, SICC), o exercício de modelagem do leilão e o exemplo em PlantUML apresentado no
          VSCode. Os quizzes originais da turma foram feitos no Quizizz e não ficaram registrados
          em texto; as questões aqui são autorais, cobrindo os mesmos tópicos.
        </p>
      </HighlightBox>
    </section>
  );
}
