import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
} from '../../../components/sections';

export default function LoopSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Ciclo DevOps e as Ferramentas"
        subtitle="Oito fases desenhadas como um infinito — porque nada nunca fica realmente pronto"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <TheoryBlock title="Por que um símbolo de infinito">
        <p>
          O DevOps Loop é desenhado como um ∞, e a escolha não é estética. Um ciclo de vida tradicional termina:
          especifica, constrói, entrega, encerra. O laço do DevOps não fecha porque{' '}
          <strong>o monitoramento realimenta o planejamento</strong> — o que se aprende operando o sistema vira
          insumo da próxima rodada.
        </p>
        <p>
          As quatro primeiras fases pertencem tradicionalmente ao lado Dev e as quatro últimas ao lado Ops. O
          ponto onde as duas metades se cruzam é exatamente onde o muro costumava estar.
        </p>
      </TheoryBlock>

      <Subsection title="As oito fases" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'PLAN — o que será construído, com base no que o monitoramento revelou',
            'CODE — escrever e versionar',
            'BUILD — transformar código em artefato executável',
            'TEST — verificar automaticamente que o artefato faz o prometido',
            'RELEASE — preparar e aprovar a versão para liberação',
            'DEPLOY — colocar em execução no ambiente de destino',
            'OPERATE — manter funcionando, escalar, responder a incidentes',
            'MONITOR — medir comportamento real e devolver ao PLAN',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare que <strong>RELEASE e DEPLOY são fases distintas</strong>. Liberar é decidir que a versão está
          apta; implantar é colocá-la em execução. Separá-las é o que torna possível implantar uma versão sem
          ainda expô-la aos usuários — ideia que reaparece nas estratégias BlueGreen e Canary, no fim da
          disciplina.
        </p>
      </Subsection>

      <Subsection title="Ferramentas por fase do ciclo" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'CODE — Confluence, JIRA, git',
              description:
                'Documentação, acompanhamento do trabalho e versionamento. O git é o pré-requisito silencioso de todo o resto: sem histórico confiável não há CI/CD nem GitOps.',
              accent: 'accent',
            },
            {
              title: 'BUILD — SBT, Maven',
              description:
                'Ferramentas de construção que transformam código-fonte em artefato, resolvendo dependências de forma declarada e reprodutível.',
              accent: 'accent2',
            },
            {
              title: 'TEST — JUnit, Jenkins, Codeship',
              description:
                'Testes automatizados e servidores de integração contínua, que os executam a cada mudança em vez de depender da lembrança de alguém.',
              accent: 'accent3',
            },
            {
              title: 'RELEASE e DEPLOY — Docker, DC/OS, AWS, Chef, Ansible, Kubernetes',
              description:
                'Empacotamento em containers, provisionamento e gerenciamento de configuração, orquestração em cluster e infraestrutura em nuvem. É a maior concentração de ferramentas do ciclo — e o foco prático da disciplina.',
              accent: 'accent4',
            },
            {
              title: 'MONITOR — Nagios, Splunk, Datadog',
              description:
                'Monitoramento e agregação de logs. Sem esta fase, o laço não se fecha: não há o que realimentar o planejamento, e as decisões voltam a ser por intuição.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A lição do diagrama gigante" accentClass="text-accent5">
        <HighlightBox title="Um mundo realmente grande">
          <p>
            Depois de apresentar as ferramentas organizadas por fase, o material mostra um segundo diagrama com{' '}
            <strong>dezenas delas</strong> — Asana, Pivotal Tracker, GitLab, CircleCI, Travis CI, Terraform,
            Puppet, New Relic, Sentry, AppDynamics, Dynatrace, Rollbar, Graylog, e muitas outras — e conclui com
            uma frase honesta:
          </p>
          <p className="text-accent2">
            "É possível construir um roteiro para estudo. Porém é impossível encontrar uma referência única que
            englobe tudo."
          </p>
          <p>
            A conclusão prática não é desanimar, e sim <strong>inverter a prioridade de estudo</strong>: aprender
            os conceitos que se repetem por trás das ferramentas. Integração contínua, empacotamento imutável,
            configuração externalizada, implantação progressiva e observabilidade continuam valendo quando os
            nomes dos produtos mudarem — e eles mudam.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
