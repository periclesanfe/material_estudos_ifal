import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function PmbokSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="PMBOK: da 6ª à 7ª Edição"
        subtitle="Cinco grupos e dez áreas — e por que a sétima edição jogou essa organização fora"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <Subsection title="Os cinco grupos de processos" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Iniciação',
              description:
                'Processos para definir um novo projeto ou uma nova fase e obter AUTORIZAÇÃO FORMAL para começar. Pontos vitais: definir fases claras, formar as equipes e ter o orçamento antes de iniciar o trabalho.',
            },
            {
              title: '2. Planejamento',
              description:
                'Define o escopo, estabelece planos para maximizar o fluxo de trabalho, prioriza e dimensiona as necessidades da equipe. Esclarece metas e expectativas e mensura a infraestrutura necessária dentro das restrições de tempo e orçamento.',
            },
            {
              title: '3. Execução',
              description:
                'Gerenciar equipes com eficácia enquanto se orquestram as expectativas de prazo e se atingem os objetivos. Exige alto grau de organização e domínio da comunicação — atender à equipe e acompanhar o trabalho ao mesmo tempo.',
            },
            {
              title: '4. Monitoramento e Controle',
              description:
                'Acompanha o andamento e seus indicadores, trata as considerações orçamentárias contínuas e mitiga circunstâncias imprevistas. É o grupo que identifica desvios em relação ao plano e dispara as correções.',
            },
            {
              title: '5. Encerramento',
              description:
                'Conduz o projeto a um fechamento bem-sucedido: revisar tempo e desempenho de custos, comemorar, compilar lições aprendidas e planejar atividades futuras.',
            },
          ]}
        />
        <HighlightBox title="Duas confusões que o material faz questão de desfazer" accent="var(--color-accent4)">
          <p>
            <strong>Grupos de processos não são fases do projeto.</strong> É comum confundir os dois, mas eles
            são dimensões diferentes: <em>cada fase</em> de um projeto tem sua própria iniciação, planejamento,
            execução, controle e encerramento. Os grupos descrevem a natureza do trabalho, não o momento dele na
            linha do tempo.
          </p>
          <p>
            <strong>Monitoramento e controle não é sequencial.</strong> Enquanto os outros grupos se sucedem, o
            monitoramento <em>sobrevoa</em> todo o projeto, ocorrendo de forma não linear em paralelo com os
            demais. Faria pouco sentido monitorar depois: o controle existe para detectar desvios enquanto ainda
            há tempo de corrigi-los.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As dez áreas de conhecimento (PMBOK 6)" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Integração',
              description:
                'Reunir tudo o que se conhece para gerenciar o projeto de forma HOLÍSTICA, e não como pedaços de processos independentes. É a área que costura as demais.',
              accent: 'accent',
            },
            {
              title: '2. Escopo',
              description:
                'Assegurar que o projeto inclui TODO o trabalho necessário e APENAS o necessário. Abrange a coleta de requisitos e a preparação da estrutura de repartição do trabalho.',
              accent: 'accent2',
            },
            {
              title: '3. Tempo / Cronograma',
              description:
                'Entender as atividades, sua sequência e quanto tempo levarão, gerenciando o término pontual do projeto.',
              accent: 'accent3',
            },
            {
              title: '4. Custos',
              description:
                'Estimativas, orçamento e controle: descobrir quanto custa cada tarefa e determinar a previsão geral, para terminar dentro do orçamento aprovado.',
              accent: 'accent4',
            },
            {
              title: '5. Qualidade',
              description:
                'Configurar as atividades de controle e de garantia da qualidade para se ter confiança de que o resultado atenderá às expectativas do cliente.',
              accent: 'accent5',
            },
            {
              title: '6. Recursos humanos',
              description:
                'Entender de quais recursos se precisa, montar o time, gerenciar as pessoas e capacitá-las quando necessário.',
              accent: 'accent',
            },
            {
              title: '7. Comunicações',
              description:
                'Gerar, coletar, distribuir, armazenar, recuperar e organizar as informações do projeto. O material observa que o trabalho do gerente é dito ser cerca de 80% a 90% comunicação.',
              accent: 'accent2',
            },
            {
              title: '8. Riscos',
              description:
                'Identificar riscos e avaliá-los qualitativa e quantitativamente. Não é atividade única: abrange o controle dos riscos ao longo de todo o ciclo de vida.',
              accent: 'accent3',
            },
            {
              title: '9. Aquisições',
              description:
                'Planejar o que comprar, conduzir o processo de licitação e compra, gerenciar o trabalho do fornecedor e encerrar o contrato ao final.',
              accent: 'accent4',
            },
            {
              title: '10. Partes interessadas',
              description:
                'Identificar quem é impactado pelo projeto, entender seus papéis e necessidades e garantir que sejam atendidos. O material a chama de uma das mais importantes.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A virada da 7ª edição" accentClass="text-accent4">
        <TheoryBlock title="De processos a princípios">
          <p>
            A 6ª edição trata majoritariamente de projetos <strong>preditivos</strong>, organizando o
            conhecimento em grupos de processos e áreas. A 7ª edição{' '}
            <strong>sobe o nível de abstração</strong>: sai a prescrição por processos, entram{' '}
            <strong>princípios</strong> e <strong>domínios de desempenho</strong>, o que permite acolher
            abordagens preditivas, iterativas e híbridas sob o mesmo guarda-chuva.
          </p>
          <p>
            A mudança tem uma lógica: um processo prescreve <em>o que fazer</em>, e por isso envelhece quando o
            contexto muda; um princípio orienta <em>como decidir</em>, e sobrevive à mudança de método.
          </p>
        </TheoryBlock>
        <ComparisonTable
          leftLabel="PMBOK 6ª edição"
          rightLabel="PMBOK 7ª edição"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Organização', left: '10 áreas de conhecimento + 5 grupos de processos', right: '12 princípios + 8 domínios de desempenho' },
            { criterion: 'Abordagem predominante', left: 'Preditiva (tradicional)', right: 'Preditiva, iterativa e híbrida — o ágil entra em cena' },
            { criterion: 'Natureza do texto', left: 'Prescritiva: processos, entradas, ferramentas e saídas', right: 'Orientadora: princípios e áreas de foco, com tailoring' },
            { criterion: 'Novidade estrutural', left: 'Padrão de gerenciamento por fases de processo', right: 'Sistema de entrega de VALOR e adaptação (tailoring)' },
          ]}
        />
      </Subsection>

      <Subsection title="Os 12 princípios do PMBOK 7" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: '1. Intendência',
              description:
                'Tradução do inglês "stewardship" — a ideia de zelo, de ser responsável pela guarda de algo que pertence a outros. Vale conhecer o termo original, porque "intendência" pouco comunica em português.',
              accent: 'accent',
            },
            { title: '2. Colaboração', description: 'Construir um ambiente de equipe colaborativo.', accent: 'accent2' },
            { title: '3. Empatia', description: 'Envolver-se efetivamente com as partes interessadas.', accent: 'accent3' },
            { title: '4. Foco no Valor', description: 'Manter o foco no valor a ser entregue, e não apenas na entrega.', accent: 'accent4' },
            { title: '5. Pensamento Sistêmico', description: 'Reconhecer e responder às interações entre as partes do sistema.', accent: 'accent5' },
            { title: '6. Liderança', description: 'Demonstrar comportamentos de liderança em todos os níveis.', accent: 'accent' },
            {
              title: '7. Tailoring',
              description: 'Adaptar a abordagem ao contexto — o princípio que dá permissão explícita para não seguir o guia à risca.',
              accent: 'accent2',
            },
            { title: '8. Qualidade', description: 'Construir qualidade nos processos e nas entregas.', accent: 'accent3' },
            { title: '9. Complexidade', description: 'Lidar com a complexidade em vez de fingir que ela não existe.', accent: 'accent4' },
            { title: '10. Riscos', description: 'Otimizar as respostas aos riscos — tanto ameaças quanto oportunidades.', accent: 'accent5' },
            { title: '11. Adaptabilidade', description: 'Abraçar a capacidade de se ajustar ao que muda.', accent: 'accent' },
            { title: '12. Resiliência e Mudanças', description: 'Permitir a mudança para alcançar o estado futuro previsto.', accent: 'accent2' },
          ]}
        />
      </Subsection>

      <Subsection title="Os 8 domínios de desempenho" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          São áreas de foco <strong>interativas, inter-relacionadas e interdependentes</strong>, que operam como
          um sistema integrado — cada uma depende das outras para a entrega bem-sucedida.
        </p>
        <ColoredPanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1. Equipe', description: 'As responsabilidades associadas ao trabalho que precisa ser feito para entregar valor ao negócio.' },
            { title: '2. Partes Interessadas', description: 'O engajamento necessário para garantir relações de trabalho produtivas.' },
            {
              title: '3. Abordagem de Desenvolvimento e Ciclo de Vida',
              description: 'Onde se escolhe entre entrega preditiva, iterativa ou híbrida, e se definem ciclo de vida, fases e cadência.',
            },
            { title: '4. Planejamento', description: 'A coordenação e organização necessárias para produzir as entregas.' },
            {
              title: '5. Incerteza',
              description:
                'Riscos, incerteza e o ambiente VUCA — Volatilidade, Incerteza, Complexidade e Ambiguidade: quatro faces distintas do "não saber".',
            },
            { title: '6. Medição', description: 'Avaliar o desempenho e agir para garantir que os resultados desejados sejam alcançados.' },
            { title: '7. Entrega', description: 'O trabalho associado à entrega, incluindo requisitos, qualidade e mudança.' },
            { title: '8. Trabalho do Projeto', description: 'Recursos físicos, contratação, gerenciamento de mudanças e aprendizado contínuo.' },
          ]}
        />
      </Subsection>
    </section>
  );
}
