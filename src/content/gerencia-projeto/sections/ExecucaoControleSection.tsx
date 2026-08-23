import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function ExecucaoControleSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Execução, Controle e Mudanças"
        subtitle="Fazer o trabalho acontecer — e perceber cedo quando ele sai do plano"
        colorClass="text-accent"
      />

      <Subsection title="O Plano de Gerenciamento do Projeto" accentClass="text-accent2">
        <TheoryBlock title="Doze documentos que definem como o projeto será conduzido">
          <p>
            O PGP reúne os planos específicos de cada área de conhecimento num documento integrado, que define
            como o projeto será <strong>executado, monitorado, controlado e encerrado</strong>.
          </p>
        </TheoryBlock>
        <ColoredPanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1. Resumo executivo', description: 'Objetivos, responsabilidades, produtos e autorização.' },
            { title: '2. Quadro lógico', description: 'Objetivos, produtos, indicadores, fontes de verificação e suposições.' },
            { title: '3. Estrutura de gerenciamento', description: 'A estrutura organizacional do projeto e como as decisões serão tomadas.' },
            { title: '4. Matriz de responsabilidades', description: 'Os papéis dos atores em cada ação do projeto.' },
            { title: '5. Plano de comunicação', description: 'Fontes, destinatários, canais, conteúdos e tratamento das informações.' },
            { title: '6. Estrutura analítica do projeto', description: 'Todo o trabalho a ser realizado, decomposto em entregas.' },
            { title: '7. Detalhes de suporte da EAP', description: 'Especificações dos produtos e os requisitos de qualidade de cada um.' },
            { title: '8. Plano de monitoramento', description: 'A organização dos momentos de controle dos produtos.' },
            { title: '9. Plano de recursos humanos', description: 'A estruturação das pessoas que formarão a equipe.' },
            { title: '10. Cronograma', description: 'A agenda: datas e progresso.' },
            { title: '11. Orçamento', description: 'O detalhamento dos elementos de despesa com valores estimados.' },
            { title: '12. Plano de riscos', description: 'Os riscos e as ações de resposta a eles.' },
          ]}
        />
      </Subsection>

      <Subsection title="A matriz RACI" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Letra"
          rightLabel="O que significa"
          criterionLabel="Papel"
          rows={[
            { criterion: 'R — Responsável', left: 'Responsible', right: 'Executa a ação ou tarefa' },
            { criterion: 'A — Aprovador', left: 'Accountable', right: 'Autoriza ou aprova a execução' },
            { criterion: 'C — Consultado', left: 'Consulted', right: 'Precisa ser informado ANTES da execução — e pode influenciar a decisão' },
            { criterion: 'I — Informado', left: 'Informed', right: 'Precisa ser informado DEPOIS da execução — apenas toma ciência' },
          ]}
        />
        <HighlightBox title="A distinção que evita conflito" accent="var(--color-accent4)">
          <p>
            A diferença entre <strong>C</strong> e <strong>I</strong> é de <em>momento</em> e de{' '}
            <em>poder</em>. Quem é consultado ainda pode mudar o rumo; quem é informado recebe uma decisão já
            tomada. Tratar como "informado" alguém que se considera "consultado" é uma das formas mais comuns de
            criar atrito — e a matriz existe justamente para tornar isso explícito antes de acontecer.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O material de aula apresenta também uma variação com três letras — E (executor), A (autoriza) e I
          (informado) —, montada listando as principais ações do projeto nas linhas e os grupos de participantes
          nas colunas.
        </p>
      </Subsection>

      <Subsection title="Comunicação: o problema número um" accentClass="text-accent4">
        <HighlightBox title="Os números do benchmarking">
          <p>
            Num estudo de benchmarking em gerenciamento de projetos citado no material, os problemas mais
            frequentes foram, nesta ordem: <strong>problemas de comunicação (76%)</strong>, não cumprimento dos
            prazos (71%), mudanças de escopo constantes (70%), escopo não definido adequadamente (61%),
            concorrência entre o dia a dia e o projeto (52%), estimativas incorretas (52%), riscos não
            identificados adequadamente (50%) e não cumprimento do orçamento (50%).
          </p>
          <p>
            Vale ler a lista inteira de novo: os quatro primeiros colocados são problemas de{' '}
            <strong>comunicação e definição</strong>, não de execução técnica. O material reforça: o líder gasta,
            em média, 90% do tempo se comunicando, e a maioria dos problemas de gerenciamento está ligada a
            falhas de comunicação.
          </p>
        </HighlightBox>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Formal escrita',
              description: 'Problemas complexos, planos, termos, relatórios e atas de reunião — o que precisa de registro e rastreabilidade.',
              accent: 'accent',
            },
            { title: 'Informal escrita', description: 'Mensagens, e-mails e bilhetes — rápidos, mas sem valor de registro formal.', accent: 'accent2' },
            { title: 'Formal verbal', description: 'Apresentações a stakeholders e comitês.', accent: 'accent3' },
            { title: 'Informal verbal', description: 'Conversas — onde boa parte do alinhamento real acontece, e nada fica documentado.', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <Subsection title="Aquisições e fornecedores" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Preço fixo',
              description:
                'Valor total fechado, independente da execução. O risco de estouro fica com o fornecedor — que por isso embute margem de segurança no preço.',
              accent: 'accent',
            },
            {
              title: 'Tempo e material',
              description:
                'Remuneração por horas ou recursos efetivamente utilizados. Flexível para escopo incerto; o risco de custo fica com o contratante.',
              accent: 'accent2',
            },
            {
              title: 'Custo reembolsável',
              description:
                'Reembolso do custo real mais uma margem de lucro. Usado quando o escopo é muito indefinido — e exige controle rigoroso do contratante.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          No setor público, o material observa que a rigidez legal e o fato de as compras passarem por uma
          unidade especializada — e não pela equipe do projeto — aumentam a dificuldade de acompanhamento e
          limitam o poder de decisão do gerente. Planejar aquisições ali significa contar com prazos de processo
          que não dependem do projeto.
        </p>
      </Subsection>

      <Subsection title="O processo de controle" accentClass="text-accent">
        <FlowDiagram
          items={[
            '1. Monitorar o projeto',
            '2. Identificar os problemas e suas causas',
            '3. Desenvolver e implementar a solução',
            '4. Atualizar o Plano do Projeto',
            '5. Desenvolver e registrar as Lições Aprendidas',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare no passo 4: corrigir o problema <em>sem atualizar o plano</em> faz o plano deixar de descrever a
          realidade — e a partir daí todo monitoramento passa a comparar a execução com uma ficção.
        </p>
      </Subsection>

      <Subsection title="Os quatro tipos de avaliação" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Quando ocorre"
          rightLabel="O que mede"
          criterionLabel="Avaliação"
          rows={[
            { criterion: 'Ex-ante', left: 'Iniciação e planejamento', right: 'Relevância, consistência e viabilidade do projeto' },
            { criterion: 'De meio termo', left: 'Durante a execução', right: 'Tempo, custo e escopo — EFICIÊNCIA' },
            { criterion: 'Final', left: 'No encerramento', right: 'Tempo, custo, escopo e qualidade — eficiência E EFICÁCIA' },
            { criterion: 'Ex-post', left: 'Médio a longo prazo, DEPOIS do projeto', right: 'Os impactos — a EFETIVIDADE dos resultados' },
          ]}
        />
        <HighlightBox title="Por que a ex-post é a mais reveladora">
          <p>
            É a única que olha para depois do fim — e a única capaz de detectar o fracasso mais desconfortável:
            um projeto entregue <strong>no prazo, no orçamento e com qualidade</strong>, que simplesmente não
            produziu o impacto esperado. Eficiente, eficaz e inútil.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Mudanças e scope creep" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Todo projeto sofre mudanças de escopo — no produto ou no trabalho. As perguntas que o processo de
          gerenciamento de modificações precisa responder: como ocorrem as mudanças? o que fazer com elas? como
          assegurar o mínimo impacto? como incorporar as novas atividades ao escopo? e como todos ficarão sabendo
          da ocorrência?
        </p>
        <HighlightBox title="Scope creep" accent="var(--color-accent4)">
          <p>
            É a <strong>expansão incremental do escopo</strong>, que o torna genérico, sem foco e ingerenciável —
            e figura no "checklist de um projeto arruinado".
          </p>
          <p>
            O perigo está no adjetivo <em>incremental</em>. Nenhum pedido isolado parece grave; cada um é "só uma
            coisinha". O projeto não morre de um golpe, morre da soma — e por isso o antídoto listado entre os
            fatores de sucesso é <strong>governança formal com processo definido para aprovação de
            mudanças</strong>. Não se trata de recusar mudanças, e sim de fazer cada uma passar por uma avaliação
            explícita de impacto em prazo, custo e risco.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Fracasso e sucesso, lado a lado" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Checklist de um projeto arruinado"
          rightLabel="Fatores de sucesso"
          criterionLabel="Tema"
          rows={[
            {
              criterion: 'Patrocínio',
              left: 'Patrocinador sem envolvimento ativo na estratégia e direção',
              right: 'Patrocinadores responsáveis pelos resultados do projeto',
            },
            {
              criterion: 'Mudanças',
              left: 'Controle de mudanças insuficiente ou inexistente; scope creep',
              right: 'Governança formal e processo bem definido para aprovar mudanças',
            },
            {
              criterion: 'Planejamento',
              left: 'Plano ausente, desatualizado, incompleto ou mal feito',
              right: 'Estimativas baseadas em contribuições de diferentes áreas',
            },
            {
              criterion: 'Equipe',
              left: 'Ausência de qualificação suficiente; responsabilidades sem definição clara',
              right: 'Treinamento em gerenciamento de projetos; acompanhamento de pessoas, qualificações e tempo',
            },
            {
              criterion: 'Comunicação',
              left: 'Falta de entendimento sobre os benefícios que o projeto produzirá',
              right: 'Comunicação regular com usuários finais; sistemas de feedback',
            },
            {
              criterion: 'Estabilidade',
              left: 'Mudanças frequentes na gerência do projeto e de tecnologia durante a execução',
              right: 'Definição formal de prioridades para requisições e mudanças',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As duas listas são quase espelhadas — o que sugere que os fatores de sucesso não são segredos, e sim a
          ausência disciplinada dos erros conhecidos.
        </p>
      </Subsection>
    </section>
  );
}
