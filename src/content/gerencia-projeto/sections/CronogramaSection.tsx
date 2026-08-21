import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CronogramaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cronograma e Caminho Crítico"
        subtitle="A atividade mais técnica do semestre — e a única com uma resposta numérica única"
        colorClass="text-accent"
        badge="Caminho Crítico"
      />

      <TheoryBlock title="O cronograma">
        <p>
          O cronograma <strong>controla a agenda do projeto</strong> — datas e progresso. Sua unidade de medição
          são os produtos, os pacotes de trabalho vindos da EAP, cada um com começo e fim definidos, servindo
          como pontos de controle.
        </p>
        <p>
          A ferramenta clássica é o <strong>gráfico de Gantt</strong>: atividades no eixo vertical, datas no
          horizontal, e barras posicionadas conforme início e término, mostrando durações e progresso. Antes dele,
          porém, vem o <strong>diagrama de precedências</strong> — que define quais atividades dependem de quais,
          e portanto o que pode acontecer em paralelo.
        </p>
      </TheoryBlock>

      <Subsection title="Técnicas de estimativa de duração" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Por analogia',
              description:
                'Comparar com projetos anteriores semelhantes. Rápida e barata; a precisão depende de quão parecido o passado realmente é.',
              accent: 'accent',
            },
            {
              title: 'Paramétrica',
              description:
                'Usar uma relação matemática entre variáveis — tantos dias por metro quadrado, tantas horas por tela. Precisa de histórico confiável para calibrar o parâmetro.',
              accent: 'accent2',
            },
            {
              title: 'Três pontos',
              description:
                'Estimar o cenário otimista, o mais provável e o pessimista, e combiná-los. Reconhece explicitamente que estimativa é faixa, não número.',
              accent: 'accent3',
            },
            {
              title: 'Julgamento de especialistas',
              description:
                'Recorrer a quem já fez trabalho parecido. Vale quando não há histórico registrado — e o risco é a confiança excessiva de quem estima.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O caminho crítico" accentClass="text-accent3">
        <HighlightBox title="É o caminho MAIS LONGO — e isso é contraintuitivo">
          <p>
            O caminho crítico é a sequência de atividades que determina a duração total do projeto: o{' '}
            <strong>caminho mais longo</strong> da rede, cujas atividades têm <strong>folga zero</strong>.
          </p>
          <p>
            Por que o mais longo, e não o mais curto? Porque o projeto só termina quando <em>todas</em> as
            cadeias terminam. A cadeia mais demorada fixa o piso: não há como acabar antes dela. Atrasar
            qualquer atividade do caminho crítico atrasa o projeto inteiro, dia a dia.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3">
          Calcula-se com duas passagens sobre a rede. Na <strong>ida</strong>, obtêm-se as primeiras datas: PDI
          (primeira data de início) e PDT (primeira data de término) — o mais cedo que cada atividade pode
          acontecer. Na <strong>volta</strong>, as últimas: UDI e UDT — o mais tarde que pode acontecer sem
          atrasar o projeto. A diferença é a <strong>folga = UDI − PDI</strong>.
        </p>
      </Subsection>

      <Subsection title="A atividade da turma, resolvida" accentClass="text-accent4">
        <ExampleBox title="A rede do exercício">
          <p>
            O enunciado pedia: "tendo por base o diagrama de precedências em anexo, estipule o caminho crítico do
            projeto". A rede é a de um sistema de cadastro, com durações em dias:
          </p>
          <CodeBlock
            language="python"
            code={`Atividade          Duração   Depende de
─────────────────────────────────────────────────────────
Planejamento         15      (início)
Base de dados         3      Planejamento
Ambiente              2      Planejamento
CRUD Pessoas          2      Base de dados  E  Ambiente
CRUD Titulares        3      CRUD Pessoas
CRUD Parentesco       1      CRUD Pessoas
CRUD Dependentes      2      CRUD Titulares  E  CRUD Parentesco

A rede abre em dois paralelismos e os fecha em duas convergências:
    Planejamento ─┬─ Base de dados ─┬─ CRUD Pessoas ─┬─ CRUD Titulares ──┬─ CRUD Dependentes
                  └─ Ambiente ──────┘                └─ CRUD Parentesco ─┘`}
          />
        </ExampleBox>
        <ExampleBox title="Passo 1 — enumerar os caminhos possíveis">
          <CodeBlock
            language="python"
            code={`Planejamento → Base de dados → CRUD Pessoas → CRUD Titulares  → CRUD Dependentes
   15      +      3        +      2       +      3        +       2       = 25 dias  ← MAIOR

Planejamento → Ambiente → CRUD Pessoas → CRUD Titulares  → CRUD Dependentes
   15      +     2     +      2       +      3        +       2           = 24 dias

Planejamento → Base de dados → CRUD Pessoas → CRUD Parentesco → CRUD Dependentes
   15      +      3        +      2       +       1        +       2      = 23 dias

Planejamento → Ambiente → CRUD Pessoas → CRUD Parentesco → CRUD Dependentes
   15      +     2     +      2       +       1        +       2          = 22 dias`}
          />
          <p className="mt-3">
            O caminho crítico é o de <strong>25 dias</strong>: Planejamento → Base de dados → CRUD Pessoas →
            CRUD Titulares → CRUD Dependentes. E essa é também a duração total do projeto.
          </p>
        </ExampleBox>
        <ExampleBox title="Passo 2 — a tabela de datas e folgas">
          <CodeBlock
            language="python"
            code={`Atividade          Dur   PDI  PDT   UDI  UDT   Folga   Crítica
──────────────────────────────────────────────────────────────────
Planejamento        15     0   15     0   15      0      SIM
Base de dados        3    15   18    15   18      0      SIM
Ambiente             2    15   17    16   18      1       —
CRUD Pessoas         2    18   20    18   20      0      SIM
CRUD Titulares       3    20   23    20   23      0      SIM
CRUD Parentesco      1    20   21    22   23      2       —
CRUD Dependentes     2    23   25    23   25      0      SIM

Duração total do projeto: 25 dias`}
          />
          <p className="mt-3">
            Repare em <strong>CRUD Pessoas</strong>: seu PDI é 18, e não 17. Ela depende de Base de dados{' '}
            <em>e</em> de Ambiente, e só pode começar quando a <strong>mais lenta</strong> das duas terminar.
            Convergência sempre espera o mais devagar — é a fonte de erro mais comum nesse cálculo.
          </p>
        </ExampleBox>
        <div className="mt-4">
          <StatStrip
            items={[
              { label: '25', value: 'dias de duração total do projeto', accent: 'text-accent' },
              { label: '1', value: 'dia de folga em Ambiente', accent: 'text-accent2' },
              { label: '2', value: 'dias de folga em CRUD Parentesco', accent: 'text-accent3' },
            ]}
          />
        </div>
      </Subsection>

      <Subsection title="O que a rede ensina" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Folga não é imunidade',
              description:
                'Ambiente tem folga 1: pode atrasar um dia sem consequência. Com dois dias de atraso, o segundo empurra o projeto — e a atividade passa a ser crítica.',
              accent: 'accent',
            },
            {
              title: 'O caminho crítico muda',
              description:
                'Ele não é uma propriedade fixa da rede: conforme a execução avança e atividades atrasam, outro caminho pode assumir a posição. Recalcular faz parte do controle.',
              accent: 'accent2',
            },
            {
              title: 'Otimizar fora do caminho crítico não adianta',
              description:
                'Reduzir CRUD Parentesco de 1 dia para zero não muda os 25 dias. O esforço de compressão só produz efeito se aplicado ao caminho crítico.',
              accent: 'accent3',
            },
            {
              title: 'Onde atacar',
              description:
                'Planejamento sozinho responde por 15 dos 25 dias. Qualquer tentativa séria de encurtar este projeto passa por ele — mas cuidado: reduzi-lo em 2 dias faria o caminho de 24 dias virar o crítico.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Comprimir o cronograma" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Crashing (compressão)"
          rightLabel="Fast tracking (paralelismo)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que faz',
              left: 'Aloca mais recursos às atividades críticas, ou reduz o escopo',
              right: 'Executa em PARALELO tarefas que estavam previstas como sequenciais',
            },
            { criterion: 'O que custa', left: 'DINHEIRO — mais pessoas, horas extras, equipamento', right: 'RISCO — dependências reais são ignoradas' },
            {
              criterion: 'Efeito colateral',
              left: 'Nem toda tarefa acelera com mais gente; há atividades indivisíveis',
              right: 'Se a atividade anterior mudar, a paralela pode precisar de retrabalho',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As duas técnicas só fazem sentido aplicadas ao <strong>caminho crítico</strong> — e ambas cobram um
          preço. Não existe compressão de cronograma gratuita: ou se paga em custo, ou se paga em risco.
        </p>
      </Subsection>
    </section>
  );
}
