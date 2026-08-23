import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function CamadasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Arquitetura em Quatro Camadas"
        subtitle="Dar forma de projeto real ao CRUD"
        colorClass="text-accent3"
        badge="Arquitetura"
      />

      <TheoryBlock title="O objetivo declarado">
        <p>
          O guia abre a seção assim: <em>"vamos dar forma de projeto real a esse CRUD, com camadas,
          padrões e testes. A ideia é enxergar a separação de responsabilidades, testabilidade e
          evolução segura."</em>
        </p>
        <p>
          Três objetivos, e nenhum deles é estético. Cada um se traduz numa capacidade verificável, como
          as duas demonstrações no fim desta seção mostram.
        </p>
      </TheoryBlock>

      <Subsection title="As quatro camadas" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'PRESENTATION (Web/MVC) — routes/, controllers/, views/',
              description:
                'Expõe o HTTP, valida a entrada e chama a aplicação. É aqui que vive o MVC: Routes → Controller → View EJS. Note que o MVC organiza APENAS esta camada, não a arquitetura inteira.',
            },
            {
              title: 'APPLICATION (Use Cases) — application/services/',
              description:
                'Regras de orquestração dos casos de uso: criar contato, listar, editar, excluir. A característica definidora: NÃO CONHECE Express nem SQLite.',
            },
            {
              title: 'DOMAIN (Core) — domain/entities/, domain/ports/',
              description:
                'Modelos (entidades e DTOs) e interfaces (Ports). Estável, sem detalhes de infraestrutura. Padrão: Ports & Adapters (Hexagonal), com Repository como porta.',
            },
            {
              title: 'INFRASTRUCTURE (Adapters) — infra/db/, infra/repositories/',
              description:
                'Implementa as ports com SQLite. Padrões: Repository, Factory (para o banco) e Mapper (adaptador entre linha SQL e entidade).',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A estrutura de pastas resultante" accentClass="text-accent2">
        <CodeBlock
          language="text"
          code={`meu-projeto/
├── app.js
├── routes/
│   └── contato.js
├── controllers/
│   └── ContatoController.js
├── views/
│   ├── contato.ejs
│   ├── contatos-lista.ejs
│   └── layout.ejs
├── application/
│   └── services/
│       └── ContatoService.js
├── domain/
│   ├── entities/
│   │   └── Contato.js
│   └── ports/
│       └── ContatoRepository.js      (interface)
├── infra/
│   ├── db/
│   │   ├── sqliteFactory.js
│   │   └── migrations.sql
│   └── repositories/
│       └── ContatoRepositorySqlite.js
├── middlewares/
│   ├── errorHandler.js
│   ├── asyncHandler.js
│   └── validate.js
├── container/
│   └── index.js                      (wiring: DI manual)
└── tests/
    ├── unit/
    └── e2e/`}
        />
      </Subsection>

      <HighlightBox title="Ports & Adapters — a regra da dependência" accent="var(--color-accent4)">
        <p>
          O padrão <strong>Ports and Adapters</strong> (arquitetura hexagonal) organiza quem depende de
          quem: o <strong>domínio define as interfaces</strong> (ports) e a{' '}
          <strong>infraestrutura fornece as implementações</strong> (adapters).
        </p>
        <p>
          A consequência é que a seta de dependência <strong>aponta sempre para dentro</strong>: o
          domínio nunca conhece o banco, o framework ou a interface web. Ele declara o que precisa; a
          infraestrutura resolve como fazer.
        </p>
        <p>
          É por isso que o service pode ser escrito e testado sem que exista banco algum — ele conversa
          com a <em>interface</em>, não com a implementação.
        </p>
      </HighlightBox>

      <Subsection title="Os dois benefícios concretos" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Trocar SQLite por Postgres?',
              description:
                'Só troca o adapter da infra. Views, controllers, services, entidades e rotas ficam intactos — porque nenhum deles conhece o banco diretamente.',
              accent: 'accent',
            },
            {
              title: 'Testar services sem banco?',
              description:
                'Use um Fake Repository que implementa a mesma interface. O service não percebe a diferença: para ele, é a mesma port.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois estão declarados no material como benefícios da arquitetura — e os dois são{' '}
          <strong>verificáveis</strong>. A seção de ORM demonstra o primeiro na prática, e a de testes
          demonstra o segundo.
        </p>
      </Subsection>

      <Subsection title="As peças de apoio" accentClass="text-accent4">
        <ExampleBox title="Middlewares e container">
          <p>
            <strong>middlewares/</strong> — <code>errorHandler</code> centraliza o tratamento de erros,{' '}
            <code>asyncHandler</code> evita repetir try/catch em cada rota assíncrona, e{' '}
            <code>validate</code> concentra a validação de entrada.
          </p>
          <p>
            <strong>container/index.js</strong> — o <em>wiring</em> da aplicação: onde se decide qual
            implementação concreta é injetada em cada port. O guia chama de{' '}
            <strong>DI manual / service locator</strong>, e é o único lugar do projeto que conhece todas
            as peças ao mesmo tempo.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
