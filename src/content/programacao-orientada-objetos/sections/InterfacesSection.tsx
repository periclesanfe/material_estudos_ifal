import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function InterfacesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Interfaces"
        subtitle="O contrato puro: quem pode fazer o quê, decidido pelo compilador"
        colorClass="text-accent"
      />

      <TheoryBlock title="Capacidade por contrato, não por parentesco">
        <p>
          Uma <strong>interface</strong> declara um contrato: métodos públicos <em>sem implementação</em>. A classe
          que quiser assumir essa capacidade assina o contrato com <code>implements</code> — e fica{' '}
          <strong>obrigada</strong> a implementar cada método. O ponto-chave: a interface funciona como{' '}
          <strong>tipo</strong>. Um parâmetro do tipo interface aceita <em>qualquer</em> objeto cuja classe a
          implemente — e recusa, em compilação, quem não assinou.
        </p>
      </TheoryBlock>

      <Subsection title="IAutenticavel: o exemplo da turma" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="fev/21 — interface + extends + implements combinados"
          code={`public interface IAutenticavel {
    void autenticar();   // contrato: sem corpo
}

// herda de Funcionario E assina o contrato:
public class Gerente extends Funcionario implements IAutenticavel {
    public void autenticar() {
        System.out.println("Logando como Gerente");
    }
}

// Vendedor extends Funcionario — mas NÃO implementa IAutenticavel

public class Sistema {
    void acesso(IAutenticavel autenticavel) {   // a interface é o TIPO do parâmetro
        autenticavel.autenticar();
    }

    public static void main(String[] args) {
        Sistema sis = new Sistema();
        sis.acesso(gerente);      // OK: Gerente assinou o contrato
        // sis.acesso(vendedor);  // NÃO COMPILA: "vendedor nao tem acesso!"
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Gerente e Vendedor são <em>irmãos</em> na herança — ambos Funcionario — mas só o Gerente entra no
          sistema. Quem decide o acesso é o <strong>contrato</strong>, não a árvore genealógica: o compilador barra{' '}
          <code>sis.acesso(vendedor)</code> antes mesmo de o programa rodar. É o controle de capacidade mais barato
          que existe.
        </p>
      </Subsection>

      <Subsection title="Interface × Classe abstrata" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Critério"
          leftLabel="Interface"
          rightLabel="Classe abstrata"
          rows={[
            { criterion: 'O que oferece', left: 'Só o contrato (assinaturas)', right: 'Contrato + implementação e atributos compartilhados (salario, construtor)' },
            { criterion: 'Quantas por classe', left: 'VÁRIAS: implements A, B, C', right: 'UMA só: extends aceita uma classe' },
            { criterion: 'Relação que modela', left: '"É CAPAZ de" (autenticar, comparar…)', right: '"É UM" (Gerente é um Funcionario)' },
            { criterion: 'Quando preferir', left: 'Capacidade transversal a hierarquias diferentes', right: 'Família de classes com código e estado em comum' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          É aqui que Java compensa a ausência de herança múltipla: <code>extends</code> aceita uma classe, mas{' '}
          <code>implements</code> aceita quantas interfaces forem necessárias — herança múltipla{' '}
          <strong>de tipo</strong>, sem os conflitos da herança múltipla de implementação.
        </p>
      </Subsection>

      <Subsection title="Interface como desacoplador de infraestrutura" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="abr/03 — IConexao: trocar de banco sem tocar no DAO"
          code={`public interface IConexao {
    Connection conectar() throws SQLException;
    Connection desconectar() throws SQLException;
}

public class ConexaoMySQL implements IConexao {
    // implementação específica do MySQL (DriverManager, url jdbc:mysql://...)
}

// amanhã: class ConexaoPostgres implements IConexao { ... }
// e nenhum DAO precisa mudar.`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O mesmo mecanismo do <code>IAutenticavel</code>, aplicado à infraestrutura: o DAO conversa com o{' '}
          <em>contrato</em> <code>IConexao</code>, não com o MySQL. Este exemplo volta inteiro na seção de JDBC — e
          "usar interfaces" é critério explícito do projeto final.
        </p>
      </Subsection>

      <HighlightBox title="Convenção de nome" accent="var(--color-accent3)">
        <p>
          A turma prefixa interfaces com <strong>I</strong> (IAutenticavel, IConexao) — herança da notação
          C#/Delphi, comum em código corporativo. O Java oficial não exige o prefixo (Comparable, Runnable), mas
          dentro de um projeto vale a regra de sempre: <strong>consistência</strong> com o padrão adotado.
        </p>
      </HighlightBox>
    </section>
  );
}
