import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, ComparisonTable } from '../../../components/sections';

export default function PolimorfismoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Classes Abstratas e Polimorfismo"
        subtitle="O contrato que obriga as filhas — e a folha de pagamento que não pergunta o tipo de ninguém"
        colorClass="text-accent"
      />

      <TheoryBlock title="Classe abstrata: modelo que não se instancia">
        <p>
          Faz sentido dar <code>new Funcionario()</code> numa empresa onde todo mundo é gerente, vendedor ou
          analista? A classe <strong>abstrata</strong> responde não: <code>abstract class Funcionario</code>{' '}
          <strong>não pode ser instanciada</strong> (<code>new Funcionario()</code> é erro de compilação) — ela
          existe para ser herdada. E um <strong>método abstrato</strong> (<code>abstract void calcularSalario();</code>,
          sem corpo) é um <strong>contrato</strong>: toda filha concreta é <em>obrigada</em> a implementá-lo.
        </p>
      </TheoryBlock>

      <Subsection title="A hierarquia Funcionario da aula" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="fev/07 — abstract + protected + super(args)"
          code={`public abstract class Funcionario {
    private String nome;
    private String cpf;
    protected double salario = 1300;   // base acessível às filhas

    Funcionario(String nome, String cpf) {   // construtor explícito:
        this.nome = nome;                    // as filhas DEVEM chamar super(...)
        this.cpf = cpf;
    }

    abstract void calcularSalario();   // contrato: sem corpo, cada filha implementa
}

public class Gerente extends Funcionario {
    public Gerente(String nome, String cpf) { super(nome, cpf); }

    public void calcularSalario() { this.salario += 4000; }
}

public class Vendedor extends Funcionario {
    private double porcentagemComissao;

    @Override
    void calcularSalario() {
        salario = salario + (salario * (porcentagemComissao / 100));
    }
}`}
        />
      </Subsection>

      <Subsection title="Polimorfismo: o mesmo comando, muitas formas" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="FolhaDePagamento — dynamic dispatch com ArrayList"
          code={`ArrayList<Funcionario> funcionarios = new ArrayList<>();
funcionarios.add(new Gerente("Ana", "111"));      // um Gerente É UM Funcionario
funcionarios.add(new Vendedor("Beto", "222"));    // um Vendedor também

for (Funcionario f : funcionarios) {
    f.calcularSalario();
    // A referência é do tipo PAI, mas executa a versão do TIPO REAL:
    // Ana   → +4000 (regra do Gerente)
    // Beto  → +comissão (regra do Vendedor)
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Isso é <strong>polimorfismo</strong>: uma referência do tipo pai aponta para qualquer filha, e a chamada{' '}
          <code>f.calcularSalario()</code> despacha, <strong>em tempo de execução</strong>, para a implementação do
          objeto real (<em>dynamic dispatch</em>). A folha calcula a empresa inteira sem um único{' '}
          <code>if (tipo == ...)</code> — e ganhar um novo cargo amanhã não muda uma linha dela. O mesmo desenho
          aparece em <code>Produto</code> abstrato com <code>ProdutoUnd</code> (preço × quantidade) e{' '}
          <code>ProdutoKg</code> (preço × peso).
        </p>
        <ExampleBox title="Ache o bug (código real da aula)">
          <CodeBlock
            language="java"
            title="FolhaDePagamento.java — por que só o último funcionário é pago?"
            code={`public void adicionarFuncionarioParaPagamento(Funcionario f) {
    this.funcionariosEmpresa = new ArrayList<>();   // <- recria a lista!
    this.funcionariosEmpresa.add(f);
}`}
          />
          <p>
            O método recria o <code>ArrayList</code> a cada chamada — cada <code>add</code> apaga os anteriores, e
            só o último funcionário sobrevive. A correção: criar a lista <strong>uma vez</strong> (no construtor) e
            o método apenas adicionar. Bug sutil, compilação limpa: só teste pega.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Sobrecarga × Sobrescrita — de uma vez por todas" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Critério"
          leftLabel="Sobrecarga (overload)"
          rightLabel="Sobrescrita (override)"
          rows={[
            { criterion: 'Onde ocorre', left: 'Na MESMA classe', right: 'Na classe FILHA (herança)' },
            { criterion: 'Assinatura', left: 'Mesmo nome, parâmetros DIFERENTES', right: 'Nome e assinatura IDÊNTICOS ao do pai' },
            { criterion: 'Decisão de qual executa', left: 'Em compilação, pelos argumentos', right: 'Em EXECUÇÃO, pelo tipo real do objeto' },
            { criterion: 'Exemplo da disciplina', left: 'Conta() e Conta(double chequeEspecial)', right: 'calcularSalario() no Gerente e no Vendedor' },
          ]}
        />
      </Subsection>

      <HighlightBox title="ArrayList: a coleção que o projeto exige" accent="var(--color-accent3)">
        <p>
          Diferente do array (tamanho fixo), o <code>ArrayList&lt;T&gt;</code> <strong>cresce sob demanda</strong>:{' '}
          <code>add()</code> insere, <code>get(i)</code> lê, <code>size()</code> conta — e o generics{' '}
          <code>&lt;Funcionario&gt;</code> garante o tipo dos elementos em compilação. "Uso de Collections" é um dos
          dez critérios do projeto final; o <code>ArrayList</code> polimórfico da folha de pagamento é o exemplo
          canônico da disciplina.
        </p>
      </HighlightBox>
    </section>
  );
}
