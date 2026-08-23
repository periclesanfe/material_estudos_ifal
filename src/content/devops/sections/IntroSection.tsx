import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="DevOps"
        subtitle="Derrubar o muro entre quem escreve o código e quem o mantém no ar — com cultura, automação e métricas"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          DevOps (optativa do eixo de infraestrutura, 80h, 4h semanais) parte de um diagnóstico
          desconfortável: <strong>a maior parte dos problemas de entrega de software não é técnica</strong>. Nasce
          da separação entre quem desenvolve e quem opera, e das metas conflitantes que cada lado recebe.
        </p>
        <p>
          A partir daí a disciplina desce ao concreto: Linux e linha de comando, containers com Docker,
          orquestração com Kubernetes, GitOps com Argo CD e estratégias de implantação com Argo Rollouts. A
          ordem não é acidental — cada camada só faz sentido depois da anterior.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Cultura: o que é DevOps, o muro da confusão e o ciclo que se realimenta',
            'Linux: filosofia, comandos, pipes, processos, contas e permissões',
            'Containers: por que existem, container × máquina virtual, Docker na prática',
            'Etapa 01 — aplicação containerizada seguindo os 12 fatores',
            'Kubernetes: manifestos, Deployment, Helm e o modelo GitOps',
            'Etapa 02 — aplicação em cluster, com CI/CD e Argo CD',
            'Argo Rollouts: BlueGreen e Canary',
            'Etapa 03 — liberação progressiva com ajuste de tráfego',
          ]}
        />
      </Subsection>

      <Subsection title="Avaliação: um projeto só, que cresce" accentClass="text-accent5">
        <HighlightBox title="Não há provas" accent="var(--color-accent4)">
          <p>
            A avaliação é o <strong>desenvolvimento incremental de um projeto</strong>, em três etapas, feito em
            grupos de até quatro integrantes e entregue por repositório git. E há um detalhe que muda tudo:{' '}
            <strong>a nota de partida de cada etapa é a nota obtida na etapa anterior</strong>. Corrigir o que foi
            apontado não é opcional — faz parte da entrega seguinte.
          </p>
          <p>
            É a própria estrutura da disciplina imitando o ciclo que ela ensina: nada fica "pronto", tudo é
            revisitado com o que se aprendeu depois.
          </p>
        </HighlightBox>
        <div className="mt-4">
          <PanelList
            columns=""
            items={[
              {
                title: 'Etapa 01 — o projeto base (entrega em 15/09/2025)',
                description:
                  'Aplicação web com pelo menos quatro classes de domínio e controladores CRUD, banco baseado em arquivo (MySQL ou PostgreSQL), repositório privado no GitHub, refatoração segundo os 12 fatores e dockerização com imagem mínima, multi-stage, docker-compose e devcontainer.',
              },
              {
                title: 'Etapa 02 — GitOps em Kubernetes (entrega em 12/11/2025)',
                description:
                  'Helm chart com values.yaml por ambiente e credenciais como Secret, job de migrations antes da aplicação, CI/CD no GitHub publicando no ghcr sem usar a tag latest, e repositório argocd-gitops com duas instâncias (dev e prod) e um operador de banco no cluster.',
              },
              {
                title: 'Etapa 03 — liberação progressiva',
                description:
                  'Argo Rollouts instalado no cluster, com BlueGreen na instância de dev (auto-promoção desabilitada, promoção manual) e Canary em produção, demonstrando ao vivo o ajuste de tráfego entre as versões.',
              },
            ]}
          />
        </div>
      </Subsection>

      <Subsection title="Bibliografia e referências" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'DevOps na prática — Danilo Sato',
              description:
                'Entrega de software confiável e automatizada. É o livro-base em português para o conjunto da disciplina, e o subtítulo resume o objetivo de tudo que se faz aqui.',
              accent: 'accent',
            },
            {
              title: 'Containers com Docker — Daniel Romero',
              description:
                'Do desenvolvimento à produção. Cobre a parte de containerização, que sustenta as três etapas do projeto.',
              accent: 'accent2',
            },
            {
              title: 'Controlando versões com Git e GitHub — Aquiles e Ferreira',
              description:
                'Git é pré-requisito silencioso de tudo: sem versionamento disciplinado, não existe CI/CD nem GitOps.',
              accent: 'accent3',
            },
            {
              title: 'Jenkins — Fernando Boaglio · Caixa de Ferramentas DevOps — Gleicon Moraes',
              description:
                'Automação de integração contínua e um panorama de ferramentas para construção, administração e arquitetura de sistemas modernos.',
              accent: 'accent4',
            },
            {
              title: 'Effective DevOps — Davis e Daniels (O’Reilly)',
              description:
                'Referência em inglês, com leitura dirigida dos capítulos 2 (What is DevOps?) e 5 (DevOps Misconceptions and Anti-Patterns) — este último especialmente útil para reconhecer o que NÃO é DevOps.',
              accent: 'accent5',
            },
            {
              title: 'Google SRE Book e documentação oficial',
              description:
                'O livro de Site Reliability Engineering do Google e a documentação do Docker e do Kubernetes, indicados como leitura de apoio ao longo do curso.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma DevOps 2025.1 — BSI/IFAL (Prof. Ivo
          Calado): ementa e plano de ensino, slides da aula inaugural e de introdução ao DevOps, os sete decks de
          Linux, os slides de Docker na prática, o roadmap de estudo, os enunciados das três etapas do projeto e
          as anotações publicadas no mural da turma — incluindo o caso real de um manifesto YAML mal indentado,
          que virou seção própria. O livro <em>Docker para desenvolvedores</em> foi usado como apoio à seção de
          containers.
        </p>
      </HighlightBox>
    </section>
  );
}
