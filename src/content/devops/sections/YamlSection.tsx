import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function YamlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="YAML e o Caso da Indentação"
        subtitle="Um caso real da turma: o mesmo arquivo parecia correto no vim e era inválido no VS Code"
        colorClass="text-accent"
        badge="Etapa 02"
      />

      <TheoryBlock title="YAML deriva a estrutura do recuo">
        <p>
          Manifestos Kubernetes, arquivos do docker-compose, pipelines de CI e values do Helm são todos{' '}
          <strong>YAML</strong>. E YAML tem uma característica que o torna agradável de ler e traiçoeiro de
          escrever: <strong>a hierarquia vem da indentação</strong>, não de chaves ou colchetes.
        </p>
        <p>
          Duas regras não negociáveis: use <strong>espaços</strong>, nunca tabulações — a especificação proíbe
          tabs para indentação; e mantenha o alinhamento <strong>consistente</strong>, porque itens no mesmo nível
          precisam começar na mesma coluna.
        </p>
      </TheoryBlock>

      <Subsection title="O caso real, documentado pelo professor" accentClass="text-accent2">
        <HighlightBox title="Duas capturas do mesmo arquivo">
          <p>
            O professor publicou no mural da turma um arquivo <code className="text-accent2">deployment.yaml</code>{' '}
            atualizado e duas imagens, com uma explicação franca: por alguma razão o{' '}
            <strong>vim não estava indentando corretamente</strong>, ainda que{' '}
            <em>visualmente estivesse ok</em>. A primeira captura mostrava o arquivo como aparecia no terminal —
            aparentemente correto. A segunda mostrava o mesmo arquivo aberto no VS Code, marcado como inválido.
          </p>
        </HighlightBox>
        <ExampleBox title="Onde estava o defeito">
          <CodeBlock
            language="python"
            code={`# ERRADO — como o arquivo estava (linha 20)
      containers:
      - name: nginx
        image: nginx:1.14.2
      env:                    # ← recuo MENOR que o de image
      - name: DEMO_GREETING   #   deixa de pertencer ao container
        value: "Hello from the environment"

# CERTO — env precisa ser irmã de image, no mesmo nível
      containers:
      - name: nginx
        image: nginx:1.14.2
        env:                  # ← alinhada com image
        - name: DEMO_GREETING
          value: "Hello from the environment"`}
          />
          <p className="mt-3">
            A chave <code className="text-accent2">env</code> ficou com recuo menor que o de{' '}
            <code className="text-accent2">image</code>. Com isso ela deixou de ser irmã dela dentro do container,
            e as variáveis de ambiente que vinham em seguida se penduraram no nó errado da árvore.
          </p>
          <p>
            No terminal, com fonte monoespaçada e sem validação, a diferença de alguns espaços passa despercebida.
            O VS Code, que valida o esquema, marcou o arquivo com um alerta e destacou em vermelho as chaves
            órfãs.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A lição" accentClass="text-accent3">
        <HighlightBox title="A árvore que o parser enxerga pode não ser a que você vê">
          <p>
            Este é o ponto que vale levar da seção. Um YAML mal indentado frequentemente continua sendo{' '}
            <strong>um documento válido</strong> — apenas com <strong>significado diferente</strong> do
            pretendido. Não há erro de sintaxe para o interpretador reclamar; há uma estrutura diferente, que o
            Kubernetes aceita e aplica.
          </p>
          <p>
            Por isso a conclusão prática: <strong>manifesto se valida com ferramenta, não com o olho</strong>.
          </p>
        </HighlightBox>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Validar antes de aplicar',
              description:
                'kubectl apply --dry-run=client -f arquivo.yaml processa o manifesto sem alterar o cluster, revelando erros de estrutura e de esquema.',
              accent: 'accent',
            },
            {
              title: 'Usar um editor que entenda YAML',
              description:
                'Com o esquema do Kubernetes carregado, o editor aponta a chave fora de lugar enquanto você digita — foi exatamente o que aconteceu no caso da turma.',
              accent: 'accent2',
            },
            {
              title: 'Configurar o editor de terminal',
              description:
                'Se o vim vai ser usado para YAML, vale configurar expandtab e a largura de indentação. O problema do caso não foi o vim em si, e sim ele estar convertendo recuo de um jeito que a exibição escondia.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Erros comuns de YAML" accentClass="text-accent4">
        <ExampleBox title="O que costuma quebrar">
          <CodeBlock
            language="python"
            code={`# 1. Tabulação em vez de espaço — a especificação proíbe tabs
spec:
	replicas: 3        # ← isto é um TAB: erro de sintaxe

# 2. Dois-pontos dentro de um valor, sem aspas
mensagem: erro: falha na conexão      # ambíguo — o parser reclama
mensagem: "erro: falha na conexão"    # correto

# 3. Valores que parecem outra coisa
versao: 1.10          # vira o NÚMERO 1.1 — o zero final some
versao: "1.10"        # correto: string

habilitado: no        # em YAML 1.1, "no" vira o booleano false
pais: "no"            # se for a Noruega, use aspas

# 4. Indentação de item de lista
containers:
- name: app           # válido
  image: app:1.0      # as chaves do item alinham entre si`}
          />
          <p className="mt-3">
            O terceiro grupo é o mais insidioso: nenhum deles gera erro. O arquivo é aceito, e o valor
            simplesmente não é o que você quis dizer — <code className="text-accent2">1.10</code> vira{' '}
            <code className="text-accent2">1.1</code> e uma versão de imagem aponta para o lugar errado.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
