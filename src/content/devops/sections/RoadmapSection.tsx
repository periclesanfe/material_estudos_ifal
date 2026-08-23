import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function RoadmapSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Roadmap de Estudo"
        subtitle="Oito áreas, com as ferramentas ordenadas por prioridade — um mapa para não se perder no ecossistema"
        colorClass="text-accent"
      />

      <TheoryBlock title="Como ler este mapa">
        <p>
          O roadmap distribuído na disciplina classifica as ferramentas em três níveis — muito importantes,
          importantes e normais. Ele não é uma lista de tarefas a cumprir do começo ao fim: é um{' '}
          <strong>mapa de território</strong>, útil para saber onde você está e o que existe em volta.
        </p>
        <p>
          Uma leitura vale desde já: as áreas 1 a 3 são <strong>fundamentos</strong> que não caducam — linguagem
          de programação, administração de servidores, redes e segurança. As áreas 5 a 8 são as que mais se
          movimentam. Investir tempo proporcionalmente ao que dura é uma boa estratégia.
        </p>
      </TheoryBlock>

      <Subsection title="As oito áreas" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Linguagens de programação',
              description:
                'Python e Go aparecem como muito importantes; JavaScript e Ruby em seguida. Automação séria é código — e código precisa ser lido, testado e versionado como qualquer outro.',
            },
            {
              title: '2. Administração de servidores',
              description:
                'Linux em primeiro lugar, depois Unix e Windows. É a base concreta sobre a qual containers e orquestradores rodam, e a razão de a disciplina dedicar sete aulas ao assunto.',
            },
            {
              title: '3. Redes e segurança',
              description:
                'TCP/IP como fundamento, e os protocolos DNS, HTTP/S, FTP e SSL. Boa parte dos problemas difíceis em cluster é, no fundo, problema de rede — resolução de nomes, roteamento, certificado vencido.',
            },
            {
              title: '4. Servidores',
              description:
                'Servidores web (Apache, Nginx, Tomcat, IIS, Jetty), cache (Redis, MemCache) e bancos de dados SQL (Oracle, MySQL/MariaDB, PostgreSQL, MS-SQL) e NoSQL (MongoDB, Cassandra, DynamoDB, Google Datastore).',
            },
            {
              title: '5. Infraestrutura como código',
              description:
                'Quatro subáreas: gerenciamento de configuração (Ansible, Puppet, Chef, Salt Stack), containers (Docker, rkt, LXC), orquestradores (Kubernetes, OpenShift, Nomad, Docker Swarm) e provisionamento (Terraform, CloudFormation, Azure template, Google Deployment Manager). É o coração prático da disciplina.',
            },
            {
              title: '6. CI/CD',
              description:
                'Jenkins, TeamCity, Circle CI, Travis CI, AWS Code Pipeline, Google Cloud Build, GitLab CI, Bitbucket Pipeline e GitHub Actions — este último é o exigido na Etapa 02 do projeto.',
            },
            {
              title: '7. Monitoramento e logging',
              description:
                'Monitoramento com Zabbix, Prometheus, Grafana, DataDog, New Relic e CheckMK; logging com ELK, Graylog e Splunk. É o que fecha o laço do ciclo DevOps e viabiliza o Canary.',
            },
            {
              title: '8. Nuvens',
              description:
                'AWS, Azure e GCP à frente, seguidas de OpenStack, Alicloud e IBM Bluemix. Os conceitos migram entre provedores; os nomes dos serviços, não.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O que este roadmap não diz" accent="var(--color-accent4)">
        <p>
          Nenhum profissional domina todas essas ferramentas, e o mapa não sugere que se tente. O que ele oferece
          é <strong>orientação</strong>: ao encontrar uma ferramenta desconhecida, saber a que área ela pertence
          já responde metade das perguntas sobre o que ela faz. Terraform e Ansible, por exemplo, estão na mesma
          área e resolvem problemas vizinhos — provisionar e configurar —, o que explica por que tantas vezes
          aparecem juntas e por que tantas vezes são confundidas.
        </p>
      </HighlightBox>
    </section>
  );
}
