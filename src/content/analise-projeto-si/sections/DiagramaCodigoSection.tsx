import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, PanelList } from '../../../components/sections';

export default function DiagramaCodigoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Do Diagrama ao Código"
        subtitle="O exemplo integrador da disciplina: o caso de uso Registrar Inscrição em UML e em JavaScript"
        colorClass="text-accent"
      />

      <TheoryBlock title="O fio que amarra a disciplina">
        <p>
          Numa das últimas aulas, o professor abriu o VSCode e mostrou o mesmo caso de uso —{' '}
          <strong>Registrar Inscrição</strong> — em três representações: diagrama de classes,
          diagrama de sequência e código executável. Os diagramas foram escritos em{' '}
          <strong>PlantUML</strong>, uma ferramenta em que o diagrama é <em>texto</em> — versionável
          junto com o código, no mesmo repositório.
        </p>
      </TheoryBlock>

      <Subsection title="1 · O diagrama de classes" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="diagrama.wsd — sintaxe PlantUML"
          code={`@startuml
class RealizarInscricaoControlador {
  +registrarInscricao(codigoTurma, aluno)
}

class TurmaRepositorio {
  +getTurma(codigoTurma)
  +addTurma(turma)
}

class Turma {
  +codigo: String
  +alunos: List
  +inscrever(aluno): Inscricao
}

class Inscricao {
  +aluno: Aluno
}

RealizarInscricaoControlador --> TurmaRepositorio
RealizarInscricaoControlador --> Turma
Turma --> Inscricao
@enduml`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare na divisão de responsabilidades da categorização BCE:{' '}
          <strong>RealizarInscricaoControlador</strong> é o objeto de <em>controle</em> (coordena o
          caso de uso), <strong>TurmaRepositorio</strong> cuida da <em>persistência</em>, e{' '}
          <strong>Turma</strong> e <strong>Inscricao</strong> são as <em>entidades</em> do domínio.
        </p>
      </Subsection>

      <Subsection title="2 · O diagrama de sequência" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="diag_seq.wsd — a mesma colaboração no tempo"
          code={`@startuml
actor Aluno
participant RealizarInscricaoControlador
participant TurmaRepositorio
participant Turma
participant Inscricao

Aluno -> RealizarInscricaoControlador: registrarInscricao(codigoTurma)
RealizarInscricaoControlador -> TurmaRepositorio: getTurma(codigoTurma)
TurmaRepositorio -> RealizarInscricaoControlador: turma
RealizarInscricaoControlador -> Turma: inscrever(aluno)
Turma -> Inscricao: <<create>> Inscricao(aluno)
Turma -> List: add(turma)
@enduml`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A terceira linha é uma <strong>mensagem de retorno</strong> (o repositório devolve a
          turma); o <code>&lt;&lt;create&gt;&gt;</code> marca a <strong>criação</strong> do objeto
          Inscricao. Cada mensagem recebida por um participante corresponde a um{' '}
          <strong>método</strong> da classe correspondente — é assim que o diagrama de sequência
          alimenta o diagrama de classes.
        </p>
      </Subsection>

      <Subsection title="3 · O código" accentClass="text-accent5">
        <CodeBlock
          language="javascript"
          title="inscricao.js — as mesmas classes, agora executáveis"
          code={`class Turma {
  constructor(codigo) {
    this.codigo = codigo;
    this.alunos = [];
  }

  inscrever(aluno) {
    this.alunos.push(aluno);
    return new Inscricao(aluno);        // o <<create>> do diagrama
  }
}

class Inscricao {
  constructor(aluno) { this.aluno = aluno; }
}

class TurmaRepositorio {
  constructor() { this.turmas = {}; }
  getTurma(codigoTurma) { return this.turmas[codigoTurma]; }
  addTurma(turma) { this.turmas[turma.codigo] = turma; }
}

class RealizarInscricaoControlador {
  constructor(turmaRepositorio) {
    this.turmaRepositorio = turmaRepositorio;   // injeção de dependência
  }

  registrarInscricao(codigoTurma, aluno) {
    const turma = this.turmaRepositorio.getTurma(codigoTurma);
    if (turma) {
      return turma.inscrever(aluno);            // fluxo principal
    } else {
      throw new Error("Turma not found");       // fluxo de EXCEÇÃO do caso de uso
    }
  }
}

// montando o cenário
const turmaRepositorio = new TurmaRepositorio();
turmaRepositorio.addTurma(new Turma("CS101"));

const controlador = new RealizarInscricaoControlador(turmaRepositorio);
const inscricao = controlador.registrarInscricao("CS101", { nome: "João" });
console.log(inscricao);`}
        />
      </Subsection>

      <Subsection title="O que este exemplo ensina" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'O vocabulário atravessa os artefatos',
              description:
                'Turma, Inscricao, TurmaRepositorio e o controlador aparecem com os MESMOS nomes no caso de uso, no diagrama de classes, no de sequência e no código. Rastreabilidade é isso: conseguir apontar onde cada requisito virou linha de código.',
            },
            {
              title: 'O fluxo de exceção não some',
              description:
                'A alternativa "turma não encontrada" da especificação do caso de uso reaparece como um throw no controlador. Se a especificação previu, o código trata.',
            },
            {
              title: 'Injeção de dependência (DIP)',
              description:
                'O controlador RECEBE o repositório pelo construtor em vez de criá-lo. O módulo de alto nível não fica preso a um detalhe concreto — e o teste pode injetar um repositório falso. É o mesmo padrão do AlunoDAO(Connection) visto em POOB.',
            },
            {
              title: 'Diagrama como texto',
              description:
                'Em PlantUML o diagrama é código: entra no git, aparece no diff, evolui junto com o sistema. É o uso da UML como SKETCH levado a sério.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Para o projeto da AV2" accent="var(--color-accent3)">
        <p>
          A entrega pede exatamente esse encadeamento, em escala maior: pelo menos três casos de uso
          detalhados (um por integrante), um diagrama de atividades de um processo importante, as
          VCPs e os diagramas de interação dos casos principais, e a arquitetura com diagrama de
          pacotes, classes e interfaces mostrando o padrão MVC — tudo implementado num repositório
          git compartilhado, com demonstração online.
        </p>
      </HighlightBox>
    </section>
  );
}
