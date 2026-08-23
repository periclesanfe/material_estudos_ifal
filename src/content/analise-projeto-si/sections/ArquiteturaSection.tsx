import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ArquiteturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Projeto e Arquitetura de Software"
        subtitle="Estilos arquiteturais, projeto de classes, os cinco princípios SOLID e os padrões que resolvem problemas recorrentes"
        colorClass="text-accent"
      />

      <TheoryBlock title="Da análise para o projeto">
        <p>
          A análise descreve <strong>o que</strong> o sistema deve fazer, em alto nível de abstração;
          o projeto descreve <strong>como</strong> ele fará, descendo ao concreto. As classes de
          análise (fronteira, controle, entidade) ganham métodos, tipos, visibilidade e decisões de
          dependência — e o sistema ganha uma <strong>arquitetura</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Estilos arquiteturais" accentClass="text-accent2">
        <PanelList
          columns=""
          items={[
            {
              title: 'Duas e três camadas',
              description:
                'TRÊS CAMADAS: cliente (interface gráfica), aplicação (lógica de negócio centralizada) e banco de dados. DUAS CAMADAS: cliente e servidor de BD — com a desvantagem de concentrar todo o processamento no cliente.',
            },
            {
              title: 'MVC',
              description:
                'Nasceu nos anos 80 com o Smalltalk, para interfaces gráficas: VISÃO (janelas, botões, menus), CONTROLE (trata eventos de mouse e teclado) e MODELO (as classes de dados). Fórmula do material: MVC = (Visão + Controladores) + Modelo. Importante: não foi pensado para aplicações distribuídas — é para desktop "monolítico", como o Word. O MVC WEB é a adaptação feita por frameworks (Rails, Django, Spring) e, na prática, se parece com três camadas.',
            },
            {
              title: 'Repositório (blackboard)',
              description:
                'Vários subsistemas manipulam a MESMA base: um (ou alguns) gera os dados, vários leem. Vantagens: compartilhamento eficiente, backup e proteção centralizados, e quem grava não precisa saber quem usa. Desvantagens: todos precisam entender o formato dos dados, evoluir grandes volumes é caro, requisitos divergem entre subsistemas e distribuir os dados é difícil.',
            },
            {
              title: 'Dutos e filtros (pipes and filters)',
              description:
                'DUTOS conduzem os dados e FILTROS os transformam, em sequência ou em paralelo, até virarem a saída. Exemplo: faturas e pagamentos → ler faturas emitidas → identificar pagamentos → emitir recibos e lembretes. Vantagens: filtros modulares, reutilizáveis e substituíveis; aderente a workflows; fácil evoluir somando filtros. Desvantagens: o formato dos dados precisa ser acordado, há overhead de padronização e incompatibilidades dificultam o reúso.',
            },
            {
              title: 'Clean Architecture',
              description:
                'De Robert C. Martin, em camadas concêntricas: ENTITIES (regras de negócio da empresa), USE CASES (regras da aplicação), INTERFACE ADAPTERS (controladores e apresentadores) e FRAMEWORKS & DRIVERS (bibliotecas, UI, banco). As DEPENDÊNCIAS APONTAM SEMPRE PARA DENTRO — o núcleo não conhece o mundo externo. Fundamentada em testabilidade e desacoplamento, apoiada em DDD, TDD, SOLID e padrões de projeto.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Projeto de classes: dependências e navegabilidade" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Na <strong>análise</strong> usa-se apenas a dependência <strong>por atributo</strong>{' '}
          (estrutural). No <strong>projeto</strong> aparecem as <strong>não estruturais</strong>: por
          variável global, por variável local e <strong>por parâmetro</strong> — desenhadas com linha
          tracejada do cliente para o fornecedor. A regra de ouro:
        </p>
        <HighlightBox title="Menos atributos, menos acoplamento" accent="var(--color-accent4)">
          <p>
            A dependência <strong>por atributo é a forma MAIS FORTE</strong> — a classe carrega a
            outra por toda a sua existência. Avaliar cada associação e transformá-la em dependência
            não estrutural quando possível <strong>aumenta o encapsulamento</strong> e{' '}
            <strong>diminui o acoplamento</strong>. Se basta receber o objeto como parâmetro no
            método, não o guarde como atributo.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Navegabilidade</strong>: a associação pode ser bidirecional (conhecimento mútuo) ou
          unidirecional (só um extremo conhece o outro). A decisão sai do estudo dos{' '}
          <strong>diagramas de interação</strong> — o sentido das mensagens revela quem precisa
          conhecer quem. Na implementação: 1:1 vira um atributo do tipo da outra classe; 1:N e N:M
          viram <strong>coleções</strong>, normalmente com classes parametrizadas.
        </p>
        <CodeBlock
          language="java"
          title="Exemplo do material: manutenção de associação protegendo a coleção"
          code={`public class Turma {
    private Set<OfertaDisciplina> ofertasDisciplina = new HashSet<>();

    public void adicionarOferta(OfertaDisciplina oferta) {
        this.ofertasDisciplina.add(oferta);
    }

    public boolean removerOferta(OfertaDisciplina oferta) {
        return this.ofertasDisciplina.remove(oferta);
    }

    public Set<OfertaDisciplina> getOfertasDisciplina() {
        // devolve uma visão IMUTÁVEL: ninguém altera a coleção por fora
        return Collections.unmodifiableSet(this.ofertasDisciplina);
    }
}`}
        />
      </Subsection>

      <Subsection title="Herança no projeto" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Critério"
          leftLabel="Uma classificação"
          rightLabel="A outra"
          rows={[
            { criterion: 'Quantidade de superclasses', left: 'Herança SIMPLES — uma única superclasse', right: 'Herança MÚLTIPLA — várias superclasses (não existe em Java para classes)' },
            { criterion: 'Forma de reúso', left: 'De IMPLEMENTAÇÃO — a classe reusa o código do ancestral', right: 'De INTERFACE — reusa as assinaturas e se compromete a implementá-las' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Classes abstratas</strong> não geram instâncias diretamente: existem para organizar
          hierarquias, reunir propriedades comuns e viabilizar o <strong>polimorfismo</strong>.
        </p>
      </Subsection>

      <Subsection title="Os cinco princípios SOLID" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-1"
          items={[
            {
              title: 'S · SRP — Responsabilidade Única ("one reason to change")',
              description: 'Reúna as coisas que mudam pelos MESMOS motivos; separe as que mudam por motivos diferentes. Exemplo: um Client com dois EventHandlers misturados vira uma interface EventHandler com DailyEventHandler e MonthlyEventHandler separados.',
              accent: 'accent',
            },
            {
              title: 'O · OCP — Aberto/Fechado ("open for extension, closed for modification")',
              description: 'Um módulo deve ser aberto para EXTENSÃO e fechado para MODIFICAÇÃO. Exemplo: a Calculadora base (somar, subtrair, multiplicar, dividir) é estendida por CalcCientifica (seno, cosseno) e CalcFinanceira (juros futuros) — sem editar a original.',
              accent: 'accent2',
            },
            {
              title: 'L · LSP — Substituição de Liskov',
              description: 'Um programa que usa uma interface não deve ser confundido por uma implementação dela: subtipos devem substituir seus tipos base. O contraexemplo clássico: Square estendendo Rectangle — como setHeight e setWidth do quadrado alteram os dois lados, um teste que faz setHeight(20), setWidth(10) e espera área 200 recebe 400.',
              accent: 'accent3',
            },
            {
              title: 'I · ISP — Segregação de Interface ("small interfaces")',
              description: 'Mantenha as interfaces PEQUENAS para que os usuários não dependam de coisas de que não precisam. Exemplo: uma interface DAO gigante (insert, delete, update, read, write, append, rotate) quebrada em DBAccess e FileAccess.',
              accent: 'accent4',
            },
            {
              title: 'D · DIP — Inversão de Dependências',
              description: 'Módulos de alto nível não devem depender de detalhes de baixo nível; ambos dependem de ABSTRAÇÕES. Exemplo: BookingService deixa de depender da classe concreta ClientCatalog e passa a depender da interface IClientStorage, que o catálogo implementa.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Padrões de projeto (GoF)" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          A família <strong>estrutural</strong> "explica como montar objetos e classes em estruturas
          maiores, mantendo-as flexíveis e eficientes": Adapter, Bridge, Composite, Decorator,
          Facade, Flyweight e Proxy. Três foram detalhados em aula:
        </p>
        <CodeBlock
          language="java"
          title="SINGLETON — garantir que todos usem a MESMA instância"
          code={`class Logger {
    private Logger() {}                    // ninguém dá new Logger() de fora

    private static Logger instance;        // a instância única, na classe

    public static Logger getInstance() {
        if (instance == null)              // lazy: cria na primeira chamada
            instance = new Logger();
        return instance;                   // e devolve sempre a mesma
    }

    public void println(String msg) { System.out.println(msg); }
}`}
        />
        <ExampleBox title="PROXY — acrescentar comportamento sem tocar na classe original">
          <p>
            <strong>Problema:</strong> inserir um cache em <code>BookSearch.getBook(ISBN)</code> sem
            modificar a classe, que já funciona e é mantida por outra pessoa.{' '}
            <strong>Solução:</strong> um <code>BookSearchProxy</code> que implementa a mesma
            interface, guarda a referência ao objeto base, responde do cache quando possível e delega
            ao original quando necessário. O cliente conversa com o proxy sem perceber a diferença.
          </p>
        </ExampleBox>
        <ExampleBox title="ADAPTER — conciliar interfaces incompatíveis">
          <p>
            <strong>Problema:</strong> controlar projetores de fabricantes diferentes —{' '}
            <code>ProjetorSamsung.turnOn()</code> e <code>ProjetorLG.enable(timer)</code> — por uma
            única interface <code>Projetor</code>, sem poder alterar as classes dos fabricantes.{' '}
            <strong>Solução:</strong> uma classe adaptadora que implementa <code>Projetor</code> e
            encapsula a classe do fabricante, traduzindo <code>liga()</code> na chamada específica.
          </p>
          <p>
            A diferença para o Proxy: o <strong>proxy tem a MESMA interface</strong> do objeto base
            (acrescenta comportamento); o <strong>adapter CONVERTE</strong> uma interface em outra.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
