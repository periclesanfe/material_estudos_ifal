import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function AgilSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Metodologias Ágeis × Tradicionais"
        subtitle="Dois modos de lidar com a mesma incerteza — e o critério para escolher entre eles"
        colorClass="text-accent"
        badge="Metodologias Ágeis"
      />

      <TheoryBlock title="A diferença de fundo">
        <p>
          As metodologias se dividem em dois grupos. A <strong>tradicional (preditiva)</strong> segue um modelo
          sequencial, com etapas bem definidas. A <strong>ágil (adaptativa)</strong> é mais flexível, com
          entregas constantes até completar o projeto.
        </p>
        <p>
          A escolha responde a uma pergunta: <strong>quanto se sabe sobre o que precisa ser feito?</strong> Se o
          escopo é conhecido e estável, planejar tudo antes é eficiente. Se o escopo será descoberto ao longo do
          caminho, planejar tudo antes é planejar o que vai mudar.
        </p>
      </TheoryBlock>

      <Subsection title="A comparação do material" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Gestão Ágil"
          rightLabel="Gestão em Cascata"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Ciclo de desenvolvimento', left: 'Segmentado em sprints', right: 'Dividido em fases sequenciais' },
            { criterion: 'Abordagem', left: 'Incremental', right: 'Processo de design sequencial' },
            { criterion: 'Flexibilidade', left: 'Conhecida por sua flexibilidade', right: 'Estrutura bastante rígida' },
            {
              criterion: 'Alterações de requisitos',
              left: 'Permite alterações mesmo após o planejamento inicial concluído',
              right: 'Não há espaço para alterar requisitos depois de iniciado o desenvolvimento',
            },
            {
              criterion: 'Iteração',
              left: 'Planejamento, desenvolvimento e prototipagem podem ocorrer mais de uma vez',
              right: 'Todas as fases são concluídas apenas UMA vez',
            },
            {
              criterion: 'Quando os requisitos são preparados',
              left: 'O product owner os prepara continuamente, quase todos os dias',
              right: 'A análise de negócios os prepara ANTES do início do projeto',
            },
            {
              criterion: 'Papel do gerente',
              left: 'Membros intercambiáveis; o projeto é gerenciado pela própria equipe',
              right: 'O gerente de projetos desempenha papel essencial em todas as etapas',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As metodologias ágeis" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Scrum',
              description:
                'Descrito no material como "a arte de fazer o dobro na metade do tempo". Envolve SPRINTS curtos, de uma a duas semanas, com equipes de dez membros ou menos. O Scrum Master conduz as reuniões diárias, demonstrações, sprints e retrospectivas ao final de cada ciclo.',
              accent: 'accent',
            },
            {
              title: 'Kanban',
              description:
                'Representa os repositórios do projeto por elementos VISUAIS, em especial os quadros. Melhora a visualização do fluxo de trabalho e do progresso, reduzindo a probabilidade de gargalos — que ficam visíveis onde o trabalho se acumula.',
              accent: 'accent2',
            },
            {
              title: 'Scrumban',
              description:
                'Híbrido: usa ciclos de sprint como o Scrum, mas permite inserir tarefas individuais no planejamento, como nos quadros Kanban. Mantém as reuniões do Scrum para aprimorar a colaboração.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O material observa que o Scrum é, em si, uma metodologia de gestão de projetos, mas frequentemente
          usado em associação com o modelo Agile, por compartilharem princípios semelhantes — a colaboração e a
          valorização dos indivíduos em detrimento dos processos.
        </p>
      </Subsection>

      <Subsection title="As tradicionais" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Cascata (Waterfall)',
              description:
                'Processo linear em que o trabalho flui de maneira similar a uma cascata, em ordem sequencial. Cada fase se conclui uma única vez, e não se volta atrás sem custo.',
              accent: 'accent',
            },
            {
              title: 'PRINCE2',
              description:
                'Projects IN Controlled Environments: usa a metodologia abrangente de cascata para definir os estágios de um projeto. É padrão do governo britânico desde 1989.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Ferramentas de acompanhamento" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'CPM — Critical Path Method',
              description:
                'Identifica e programa as tarefas críticas, criando dependências, acompanhando metas e progresso e administrando datas de conclusão. Voltado a projetos de grande escala.',
              accent: 'accent',
            },
            {
              title: 'CCPM — Critical Chain',
              description:
                'Parecido com o CPM, porém mais detalhado: inclui requisitos temporais específicos por tarefa e usa nivelamento de recursos para distribuir grandes volumes de trabalho.',
              accent: 'accent2',
            },
            {
              title: 'Gráfico de Gantt e Curva S',
              description:
                'O Gantt mostra atividades no eixo vertical e datas no horizontal, com barras de duração. A Curva S exibe custos CUMULATIVOS ao longo do prazo, permitindo ver o desvio entre planejado e realizado.',
              accent: 'accent3',
            },
            {
              title: 'Gráfico de tempo de ciclo e de produtividade',
              description:
                'Ferramentas de origem ágil: o primeiro mostra o tempo médio de ciclo dos itens concluídos; o segundo, as entregas aceitas ao longo do tempo. Ambos podem ser exibidos como dispersão ou barras.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A atividade da turma" accentClass="text-accent">
        <HighlightBox title="Apresentação em grupo sobre metodologias ágeis">
          <p>
            A disciplina fecha com uma apresentação em grupo sobre metodologias ágeis — e é uma escolha coerente
            com o percurso. Depois de um semestre inteiro produzindo os artefatos do mundo preditivo (termo de
            abertura, EAP, declaração de escopo, caminho crítico), o aluno tem base para avaliar o que o ágil
            propõe substituir, e por quê.
          </p>
          <p className="text-sm">
            O professor registrou no enunciado que a não entrega da apresentação em formato .PPT, .PDF ou .ODP
            acarretaria a retirada de 1 ponto do trabalho.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3">
          Vale encerrar com a ressalva que o próprio material faz: ágil e tradicional não são times rivais. O
          PMBOK 7 incorpora explicitamente as abordagens adaptativas, e o princípio do <em>tailoring</em>{' '}
          existe para dizer que o método se adapta ao projeto — e não o contrário.
        </p>
      </Subsection>
    </section>
  );
}
