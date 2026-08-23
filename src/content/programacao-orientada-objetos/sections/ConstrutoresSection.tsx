import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, ConceptGrid } from '../../../components/sections';

export default function ConstrutoresSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Construtores, this e final"
        subtitle="Como um objeto nasce já em estado válido — e as palavras-chave que sustentam isso"
        colorClass="text-accent"
      />

      <TheoryBlock title="O método que roda no new">
        <p>
          <strong>Construtor</strong> é o método especial executado no momento do <code>new</code>: tem o{' '}
          <strong>mesmo nome da classe</strong> e <strong>nenhum tipo de retorno</strong> (nem <code>void</code>).
          Sua missão é entregar o objeto já inicializado. Se a classe não declara construtor algum, o Java gera o{' '}
          <strong>construtor default</strong> — sem argumentos e de corpo vazio. Detalhe que derruba muita gente:{' '}
          <strong>ao declarar qualquer construtor, o default deixa de existir</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Sobrecarga de construtores: a Conta do IFAL Bank" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="Conta.java (aula dez/20) — duas formas de criar a mesma classe"
          code={`public class Conta {
    private double saldo;
    private double chequeEspecial;
    final String NOME_BANCO = "IFAL Bank";   // constante: não muda nunca

    // construtor 1: conta simples
    public Conta() {
        this.chequeEspecial = 0;
    }

    // construtor 2 (SOBRECARGA): conta com cheque especial
    public Conta(double valorChequeEspecial) {
        this.chequeEspecial = valorChequeEspecial;
    }

    public void sacar(double valorSaque) {
        if (valorSaque <= this.saldo + this.chequeEspecial) {
            this.saldo -= valorSaque;
        } else {
            System.out.println("Saldo insuficiente");
        }
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Sobrecarga</strong> (overload) = vários métodos de mesmo nome com{' '}
          <strong>assinaturas diferentes</strong> na mesma classe. <code>new Conta()</code> e{' '}
          <code>new Conta(500.0)</code> convivem; o compilador escolhe pela lista de argumentos. Guarde o termo:
          na seção de herança ele será contrastado com <em>sobrescrita</em>.
        </p>
      </Subsection>

      <Subsection title="this: desfazendo a ambiguidade" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="Quadrado.java — atributo e parâmetro com o mesmo nome"
          code={`public class Quadrado {
    private double lado;

    public Quadrado(double lado) {
        this.lado = lado;   // this.lado = atributo; lado = parâmetro
    }

    public double calcularArea() {
        return Math.pow(this.lado, 2);
    }
}`}
        />
        <ExampleBox title="Sem o this…">
          <p>
            <code>lado = lado;</code> atribuiria o parâmetro <em>a ele mesmo</em> — o atributo ficaria com o valor
            padrão (0.0) e nenhum erro seria emitido. <code>this</code> sempre aponta para{' '}
            <strong>o próprio objeto</strong>: é o desempate entre o nome mais próximo (parâmetro) e o atributo.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Três palavras, três garantias" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'final = constante',
              description: 'Atributo final não pode ser modificado depois de definido: final String NOME_BANCO = "IFAL Bank"; — tentar reatribuir é erro de compilação.',
              accent: 'accent',
            },
            {
              title: 'null = referência vazia',
              description: 'Referência não inicializada vale null. Invocar método em null lança NullPointerException em execução — cheque antes de usar.',
              accent: 'accent2',
            },
            {
              title: 'Main separada',
              description: 'A partir daqui, a classe de domínio (Conta, Quadrado) e a classe executável (Main, com o main) são arquivos separados — o embrião das camadas.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Construtor default: o teste mental" accent="var(--color-accent3)">
        <p>
          A classe declara só <code>Conta(double limite)</code>. O que acontece com <code>new Conta()</code>?{' '}
          <strong>Não compila</strong> — o default sumiu quando o construtor com parâmetro foi declarado. Para
          aceitar as duas formas, declare os dois. Essa regra volta com força na herança: se o <em>pai</em> só tem
          construtor com parâmetros, a filha é obrigada a chamá-lo com <code>super(args)</code>.
        </p>
      </HighlightBox>
    </section>
  );
}
