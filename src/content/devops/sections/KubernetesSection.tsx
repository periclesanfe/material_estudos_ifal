import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function KubernetesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Kubernetes e Manifestos"
        subtitle="Do container isolado ao cluster declarado em arquivos — e o modelo GitOps da Etapa 02"
        colorClass="text-accent"
        badge="Etapa 02"
      />

      <TheoryBlock title="Por que orquestrar">
        <p>
          Um container resolve o empacotamento. Mas em produção surgem perguntas que ele não responde sozinho:
          quem reinicia o container que morreu? Como manter três réplicas no ar? Como substituir a versão sem
          derrubar o serviço? Como um serviço encontra o outro quando os endereços mudam a cada reinício?
        </p>
        <p>
          O <strong>Kubernetes</strong> responde a tudo isso com uma mudança de postura:{' '}
          <strong>você declara o estado desejado</strong> e o cluster trabalha continuamente para alcançá-lo. Não
          se manda "suba um container"; declara-se "quero três réplicas desta imagem" — e, se uma cair, o
          controlador cria outra sem que ninguém peça.
        </p>
      </TheoryBlock>

      <Subsection title="Anatomia de um Deployment" accentClass="text-accent2">
        <ExampleBox title="O manifesto usado em aula">
          <CodeBlock
            language="python"
            code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3                # estado desejado: três réplicas
  selector:
    matchLabels:
      app: nginx             # ── precisa CASAR com os labels do template
  template:
    metadata:
      labels:
        app: nginx           # ── com este aqui
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        env:
        - name: DEMO_GREETING
          value: "Hello from the environment"
        - name: DEMO_FAREWELL
          value: "Such a sweet sorrow"
        ports:
        - containerPort: 80`}
          />
          <p className="mt-3">
            Todo manifesto tem os mesmos quatro campos de topo:{' '}
            <code className="text-accent2">apiVersion</code> (a versão da API que descreve este objeto),{' '}
            <code className="text-accent2">kind</code> (o tipo — Deployment, Service, Secret…),{' '}
            <code className="text-accent2">metadata</code> (nome e labels) e{' '}
            <code className="text-accent2">spec</code> (o estado desejado).
          </p>
        </ExampleBox>
        <HighlightBox title="O casamento entre selector e labels" accent="var(--color-accent4)">
          <p>
            É o detalhe que mais derruba manifesto de iniciante. O{' '}
            <code className="text-accent2">selector.matchLabels</code> é <strong>como o Deployment reconhece
            os pods que lhe pertencem</strong> — e ele precisa casar com os{' '}
            <code className="text-accent2">labels</code> declarados em{' '}
            <code className="text-accent2">template.metadata</code>.
          </p>
          <p>
            Se não casarem, o controlador cria os pods e em seguida não os encontra. O nome do Deployment e o
            nome do container não têm papel algum nessa ligação: quem une as pontas são os labels.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Helm: empacotar e parametrizar" accentClass="text-accent3">
        <TheoryBlock title="O problema que o Helm resolve">
          <p>
            Dev e produção precisam dos mesmos objetos, com valores diferentes: outra quantidade de réplicas,
            outro endereço de banco, outros limites de recurso. Manter dois conjuntos de manifestos copiados
            garante que eles divirjam com o tempo.
          </p>
          <p>
            O <strong>Helm chart</strong> empacota os manifestos como <strong>templates</strong> e move o que
            varia para arquivos <code className="text-accent2">values.yaml</code> — um por ambiente. Mesmo chart,
            mesma imagem, valores diferentes.
          </p>
        </TheoryBlock>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3">
          É a concretização direta do fator "configuração no ambiente" dos 12 fatores. Se fosse preciso
          reconstruir a imagem para trocar de ambiente, a configuração estaria embutida no artefato — exatamente o
          que o fator proíbe.
        </p>
      </Subsection>

      <Subsection title="GitOps: o repositório como fonte da verdade" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'Alguém abre um pull request alterando o estado desejado',
            'O commit é revisado e integrado ao repositório',
            'O Argo CD percebe a diferença entre o repositório e o cluster',
            'O cluster é reconciliado até bater com o que está declarado',
            'Auditoria e rollback = histórico do git',
          ]}
        />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3">
          A inversão é sutil e poderosa: ninguém aplica mudanças no cluster manualmente. O{' '}
          <strong>repositório descreve o que deve estar rodando</strong>, e um agente dentro do cluster se
          encarrega de fazer a realidade corresponder. Duas consequências caem de graça: o histórico do git vira
          registro de auditoria, e reverter é reverter um commit.
        </p>
      </Subsection>

      <Subsection title="O que a Etapa 02 exige" accentClass="text-accent5">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Helm chart com values por ambiente, e credenciais como Secret',
              description:
                'O chart fica na pasta helm do projeto, com values.yaml para dev e prod. O professor reconhece que colocar credenciais no values não é o ideal em produção — e pede assim mesmo, para que o Helm as carregue como objetos Secret. É um andaime didático assumido como tal, e vale saber que em produção se usa cofre externo ou secrets selados.',
            },
            {
              title: 'Job de migrations antes da aplicação',
              description:
                'A migração do banco precisa terminar ANTES de a aplicação subir — senão a aplicação inicia contra um esquema desatualizado. A pista dada é pesquisar as sync waves do Argo CD, o mecanismo que impõe ordem entre recursos que, de outro modo, seriam aplicados todos de uma vez.',
            },
            {
              title: 'CI/CD no GitHub publicando no ghcr',
              description:
                'O pipeline constrói a imagem, publica no GitHub Container Registry e atualiza a versão no Helm — com duas restrições explícitas: não usar a tag latest e evitar que o CI/CD entre em loop.',
            },
            {
              title: 'Repositório argocd-gitops separado',
              description:
                'Guarda a configuração do Argo, implanta duas instâncias da aplicação (dev e prod) e instala um operador de banco — mysql-operator ou CloudNativePG — para rodar o banco dentro do cluster. Assume-se que o Argo CD já está instalado e que o cluster é o local.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As duas armadilhas que o enunciado antecipa" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Por que não usar a tag latest',
              description:
                'Porque latest é um alvo móvel: aponta para coisas diferentes ao longo do tempo. O manifesto deixa de identificar qual versão está rodando, dois clusters lendo o mesmo repositório podem estar com imagens distintas, e reverter vira adivinhação. GitOps depende de o repositório descrever a realidade — e latest quebra isso.',
              accent: 'accent',
            },
            {
              title: 'Por que o CI/CD entra em loop',
              description:
                'O pipeline atualiza a versão da imagem no Helm, o que gera um commit; esse commit dispara o pipeline, que commita de novo — a mordida na própria cauda. As saídas usuais são marcar o commit para ser ignorado (por exemplo com [skip ci]) ou filtrar o gatilho por autor e por caminho de arquivo.',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Vale notar o método do professor: em vez de entregar as respostas, ele nomeia os problemas e manda
          pesquisar. As duas armadilhas são reais e frequentes em pipelines de verdade — quem tropeça nelas uma
          vez não esquece.
        </p>
      </Subsection>
    </section>
  );
}
