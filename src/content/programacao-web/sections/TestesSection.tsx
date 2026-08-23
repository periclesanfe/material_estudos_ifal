import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function TestesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Jest e Supertest"
        subtitle="Dois níveis de teste — e a arquitetura que os torna possíveis"
        colorClass="text-accent4"
        badge="Arquitetura"
      />

      <TheoryBlock title="Os dois níveis">
        <p>
          <strong>Teste UNITÁRIO (service)</strong>: roda <strong>sem banco</strong>, com um Fake
          Repository em memória. Verifica a regra de negócio isolada, e é rápido.
        </p>
        <p>
          <strong>Teste E2E (rotas)</strong>: sobe a aplicação com um{' '}
          <strong>SQLite temporário por teste</strong>. Verifica o caminho completo, da requisição HTTP
          até o banco.
        </p>
        <p>
          O primeiro só é viável por causa da arquitetura da seção anterior: sem a separação em ports,
          testar o service exigiria banco.
        </p>
      </TheoryBlock>

      <Subsection title="A divisão de trabalho" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Jest"
          rightLabel="Supertest"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que é',
              left: 'Framework de teste completo para JavaScript, do Facebook',
              right: 'Biblioteca que simula requisições HTTP',
            },
            {
              criterion: 'O que fornece',
              left: 'Test runner, globais describe/it/expect, mocking e spying, cobertura, paralelização',
              right: 'Chamada interna às rotas Express como se fossem requisições reais',
            },
            {
              criterion: 'O que verifica',
              left: 'A lógica do código — funções, services, utilitários',
              right: 'Status code, corpo (body) e cabeçalhos das respostas',
            },
            {
              criterion: 'Papel',
              left: 'A estrutura do teste',
              right: 'O complemento para testar rotas e endpoints — testes de integração',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          São <strong>complementares, não concorrentes</strong>: o Supertest roda dentro de um teste
          Jest, usando os mesmos <code>describe</code>, <code>it</code> e <code>expect</code>.
        </p>
      </Subsection>

      <Subsection title="Instalação e configuração" accentClass="text-accent2">
        <CodeBlock language="bash" code={`npm i -D jest supertest`} />
        <CodeBlock
          language="json"
          code={`{
  "scripts": {
    "test": "jest --runInBand",
    "test:watch": "jest --watch"
  },
  "jest": {
    "testEnvironment": "node",
    "verbose": true
  }
}`}
        />
        <ColoredPanelList
          items={[
            {
              title: '-D (devDependencies)',
              description: 'Ferramentas de teste não vão para produção — só o ambiente de desenvolvimento precisa delas.',
            },
            {
              title: '--runInBand',
              description:
                'Executa os testes em SEQUÊNCIA, não em paralelo. Importante quando os testes compartilham recurso, como um arquivo de banco.',
            },
            {
              title: 'testEnvironment: node',
              description:
                'Diz ao Jest que o código roda em Node, não no navegador — sem isso ele tentaria simular um DOM desnecessário.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O Fake Repository é a peça-chave" accent="var(--color-accent5)">
        <p>
          O teste unitário do service usa um <strong>Fake Repository em memória</strong> que implementa{' '}
          <strong>a mesma interface</strong> (port) do repositório real.
        </p>
        <p>
          Como o service depende da <em>port</em> e não da implementação, ele{' '}
          <strong>não percebe a diferença</strong>. O teste roda em milissegundos, sem arquivo de banco,
          sem estado residual entre execuções e sem depender de ordem.
        </p>
        <p>
          Sem a arquitetura em camadas, esse teste seria impossível: o service estaria acoplado ao SQLite,
          e testá-lo exigiria banco de verdade a cada execução.
        </p>
      </HighlightBox>

      <Subsection title="Por que o E2E usa banco temporário" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed">
          O teste E2E sobe a aplicação com um <strong>SQLite temporário por teste</strong>. A escolha
          resolve o problema clássico de testes que tocam banco: <strong>isolamento</strong>.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Com banco próprio por teste, um teste não enxerga os dados que outro criou, a ordem de execução
          deixa de importar e não é preciso escrever rotinas de limpeza. E como o SQLite é arquivo único,
          criar e descartar um banco é barato — o que torna a estratégia viável aqui, e não em todo SGBD.
        </p>
      </Subsection>
    </section>
  );
}
