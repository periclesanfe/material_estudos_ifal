import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function DockerSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Docker na Prática"
        subtitle="Imagem e container, Dockerfile e camadas — e as exigências da Etapa 01 do projeto"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <Subsection title="Arquitetura cliente/servidor" accentClass="text-accent2">
        <TheoryBlock title="Quem realmente executa">
          <p>
            O Docker segue uma arquitetura <strong>cliente/servidor</strong>: o comando{' '}
            <code className="text-accent2">docker</code> que você digita é apenas o <strong>cliente</strong>, que
            conversa por uma <strong>REST API</strong> com o <strong>daemon</strong> — o servidor que de fato
            constrói imagens e executa containers.
          </p>
          <p>
            Essa separação explica coisas do dia a dia: o cliente pode falar com um daemon em outra máquina, e o
            "contexto" enviado no build existe porque quem constrói é o daemon, não o cliente.
          </p>
        </TheoryBlock>
      </Subsection>

      <Subsection title="Imagem e container" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Imagem — o molde',
              description:
                'Abstração somente leitura, imutável, a partir da qual containers são instanciados. É o que se versiona, se publica num registry e se referencia num manifesto.',
              accent: 'accent',
            },
            {
              title: 'Container — a instância',
              description:
                'A execução da imagem, com uma camada superior gravável própria. Da mesma imagem se instanciam quantos containers se quiser, independentes entre si.',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A analogia usada no livro-base é de classe e objeto — a imagem é a classe, o container é o objeto. Um
          <strong> repositório</strong> reúne imagens relacionadas, distinguidas por <strong>tags</strong> (como{' '}
          <code className="text-accent2">ubuntu:16.04</code>); imagens <em>oficiais</em> são mantidas pela própria
          Docker, enquanto as demais trazem o nome do mantenedor no caminho.
        </p>
      </Subsection>

      <Subsection title="O fluxo de trabalho" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'Escrever o Dockerfile — a receita da imagem',
            'docker build -t minha-app . — o daemon executa cada instrução, gerando camadas',
            'docker run minha-app — instancia um container a partir da imagem',
            'docker compose up — sobe o conjunto de serviços da aplicação',
          ]}
        />
        <ExampleBox title="Um Dockerfile e o que cada instrução faz">
          <CodeBlock
            language="python"
            code={`FROM node:alpine            # imagem base — o ponto de partida
WORKDIR /app                # diretório de trabalho dentro da imagem
COPY package*.json ./       # copia PRIMEIRO só o manifesto de dependências
RUN npm ci                  # instala — esta camada fica em cache
COPY . .                    # só então copia o código, que muda a cada commit
EXPOSE 3000                 # documenta a porta que a aplicação usa
CMD ["node", "index.js"]    # comando padrão ao iniciar o container`}
          />
          <p className="mt-3">
            A saída do build mostra os passos numerados (<code className="text-accent2">Step 1/7</code>,{' '}
            <code className="text-accent2">Step 2/7</code>…), cada um produzindo uma{' '}
            <strong>camada</strong> identificada por hash.
          </p>
          <p>
            O <strong>ponto final</strong> em <code className="text-accent2">docker build -t minha-app .</code> é
            o <strong>contexto de build</strong>: o diretório enviado ao daemon. Tudo que estiver nele viaja —
            daí existir o <code className="text-accent2">.dockerignore</code>, para não empurrar{' '}
            <code className="text-accent2">node_modules</code> e <code className="text-accent2">.git</code> para
            dentro do build.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Camadas e cache: por que a ordem importa" accentClass="text-accent5">
        <HighlightBox title="A regra prática">
          <p>
            Cada instrução do Dockerfile gera uma camada, e as camadas ficam em <strong>cache</strong>. Quando
            uma instrução muda, ela <strong>e todas as posteriores</strong> são reexecutadas; as anteriores são
            reaproveitadas.
          </p>
          <p>
            Daí a receita do exemplo acima: copiar primeiro o <code className="text-accent2">package.json</code> e
            instalar as dependências, e só depois copiar o código. Como o código muda a cada commit e as
            dependências raramente mudam, o <code className="text-accent2">npm ci</code> — que é a parte lenta —
            fica em cache na maioria dos builds. Inverter as duas linhas faz cada build reinstalar tudo do zero.
          </p>
          <p>
            A regra geral: <strong>o que muda com mais frequência vai por último</strong>.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Volumes e redes" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Por que volumes existem',
              description:
                'A camada gravável do container morre com ele. Volumes desacoplam os dados do ciclo de vida do container — e também evitam o custo de desempenho do copy-on-write para arquivos que mudam muito.',
              accent: 'accent',
            },
            {
              title: 'Bind mount × volume nomeado',
              description:
                'O bind mount mapeia uma pasta específica do host (útil em desenvolvimento, mas amarrado àquela máquina); o volume nomeado é gerenciado pelo Docker, portável e recomendado para dados.',
              accent: 'accent2',
            },
            {
              title: 'Redes padrão',
              description:
                'bridge é a rede padrão, none isola completamente o container e host faz o container usar a interface do próprio host, sem isolamento de rede.',
              accent: 'accent3',
            },
            {
              title: 'Rede definida pelo usuário',
              description:
                'Criada com driver bridge, oferece DNS interno: os containers se enxergam pelo NOME do serviço, sem precisar descobrir endereços IP. É o que faz o docker-compose funcionar tão naturalmente.',
              accent: 'accent4',
            },
          ]}
        />
        <ExampleBox title="Comandos do dia a dia">
          <CodeBlock
            language="python"
            code={`docker build -t minha-app .        # constrói a imagem a partir do Dockerfile
docker run minha-app               # executa um container
docker run -d -p 8080:80 minha-app # -d em segundo plano, -p publica a porta
docker ps                          # containers em execução
docker ps -a                       # inclui os que já pararam
docker logs <container>            # a saída do processo principal
docker exec -it <container> sh     # abre um shell dentro do container

docker image list                  # imagens locais
docker volume create dados         # cria um volume nomeado
docker network create isolated_nw  # cria uma rede definida pelo usuário

docker compose up -d               # sobe todos os serviços definidos no compose
docker compose ps                  # o que está no ar
docker compose stop                # para tudo`}
          />
        </ExampleBox>
      </Subsection>

      <Subsection title="O que a Etapa 01 exige — e por quê" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Imagens mínimas',
              description:
                'Quanto menos existe na imagem, menor o download, mais rápido o deploy e menor a superfície de ataque. O que não está lá não precisa de patch nem pode ser explorado.',
              accent: 'accent',
            },
            {
              title: 'Build multi-stage',
              description:
                'Separa o estágio de COMPILAÇÃO do de EXECUÇÃO: um estágio compila, e o final recebe apenas o artefato pronto. Compilador, SDK e dependências de build ficam fora da imagem publicada.',
              accent: 'accent2',
            },
            {
              title: 'docker-compose',
              description:
                'Deve permitir instanciar a aplicação com TODOS os recursos necessários — banco incluído. É o "um comando e sobe tudo" que elimina o roteiro manual de preparação de ambiente.',
              accent: 'accent3',
            },
            {
              title: 'devcontainer',
              description:
                'Leva o mesmo princípio ao ambiente de desenvolvimento: em vez de cada pessoa instalar ferramentas na própria máquina, o ambiente vem declarado no repositório e é idêntico para todos.',
              accent: 'accent4',
            },
          ]}
        />
        <ExampleBox title="Multi-stage na prática">
          <CodeBlock
            language="python"
            code={`# --- Estágio 1: compilar ---
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Estágio 2: executar ---
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist       # copia SÓ o artefato pronto
COPY --from=build /app/node_modules ./node_modules
USER node                                # não rodar como root
CMD ["node", "dist/index.js"]`}
          />
          <p className="mt-3">
            A instrução <code className="text-accent2">COPY --from=build</code> é o coração do multi-stage: ela
            atravessa os estágios trazendo apenas o resultado. Todo o ferramental de compilação fica para trás e
            nunca chega ao registry.
          </p>
          <p>
            O <code className="text-accent2">USER node</code> aplica o que ficou da seção de contas: por padrão o
            processo rodaria como root dentro do container, e trocar para um usuário sem privilégios é boa
            prática elementar.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Os 12 fatores, exigidos na Etapa 01" accentClass="text-accent3">
        <HighlightBox title="O que o professor pede">
          <p>
            A Etapa 01 manda refatorar a aplicação seguindo os <strong>12-factor app</strong>, com duas condições
            que valem tanto quanto o conteúdo: se faltar funcionalidade para atender a um fator, a equipe deve{' '}
            <strong>acrescentá-la</strong> — o exemplo dado é adotar um framework de logs; e se a equipe julgar
            que algum fator não faz sentido no projeto, deve <strong>apresentar justificativa</strong>, que será
            considerada na avaliação.
          </p>
          <p>
            Repare no que essa segunda condição ensina: não se trata de cumprir uma lista, e sim de{' '}
            <strong>argumentar uma decisão de arquitetura</strong>. Dizer "não se aplica" é aceitável; dizer isso
            sem fundamento, não.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3">
          Os fatores mais visíveis nesta disciplina são três, e todos reaparecem na Etapa 02:{' '}
          <strong>configuração no ambiente</strong> (nada de credencial no código — vira variável de ambiente e,
          no Kubernetes, Secret), <strong>processos sem estado</strong> (o que precisa persistir vai para um
          serviço de apoio, não para o disco do container) e <strong>paridade entre ambientes</strong>{' '}
          (desenvolvimento e produção o mais parecidos possível — que é a razão de existir do devcontainer).
        </p>
      </Subsection>
    </section>
  );
}
