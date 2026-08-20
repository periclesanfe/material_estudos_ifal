import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function EncapsulamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Encapsulamento e static"
        subtitle="A casa da mãe Joana, o private que salva o saldo, e o membro que pertence à classe"
        colorClass="text-accent"
      />

      <TheoryBlock title="A casa da mãe Joana">
        <p>
          A aula abre com uma metáfora: uma casa onde <strong>todos entram sem conhecer as regras</strong> — ninguém
          sabe se deve limpar os pés ou lavar a louça — vira o caos. Uma classe com atributos expostos é essa casa:
          qualquer código de fora mexe no estado interno sem passar por regra nenhuma.
        </p>
        <p>
          O caso concreto: uma <code>Conta</code> com <code>saldo</code> e <code>limite</code> acessíveis. Colocar
          um <code>if</code> dentro do <code>sacar()</code> <strong>não resolve</strong> — quem garante que todo
          programador vai usar o método? Nada impede <code>minhaConta.saldo = -200;</code> direto. E replicar a
          validação em cada ponto do código cliente é inviável. A única saída estrutural:{' '}
          <strong>fechar o atributo e deixar a própria classe controlar seu estado</strong>. Isso é encapsulamento.
        </p>
      </TheoryBlock>

      <Subsection title="private e public" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="O erro de COMPILAÇÃO que protege a conta"
          code={`class Conta {
    private double saldo;      // fechado para todas as outras classes
    private double limite;

    public void sacar(double valorSaque) {
        if (valorSaque <= this.saldo + this.limite) {
            this.saldo -= valorSaque;
        }
    }
}

// em outra classe:
minhaConta.saldo = 1000.0;
// ERRO: saldo has private access in Conta   ← o compilador barra`}
        />
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'private',
              description: 'Visível apenas dentro da própria classe — em atributos E em métodos (método private é auxiliar interno). Acesso externo nem compila.',
            },
            {
              title: 'public',
              description: 'O oposto: todos acessam. É a "porta oficial" da classe — os métodos que formam seu contrato com o resto do sistema.',
            },
          ]}
        />
        <HighlightBox title="A convenção — e seus limites" accent="var(--color-accent3)">
          <p>
            Regra da disciplina: <strong>atributos geralmente private</strong>, acessados por getters/setters
            públicos — e o setter pode <strong>validar</strong> antes de aceitar (o Robo da aula recusa nome em
            branco e cor vazia). Mas <strong>nem todo atributo merece setter</strong>: criar{' '}
            <code>setSaldo()</code> reabriria a porta que o private fechou. Saldo só muda por regra de negócio —{' '}
            <code>sacar()</code> e <code>depositar()</code>.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="static: o que pertence à classe" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="ContaStatic.java — o experimento da aula"
          code={`class ContaStatic {
    static double saldo;   // pertence à CLASSE: uma cópia para todas as instâncias

    public static void main(String[] args) {
        ContaStatic c1 = new ContaStatic();
        ContaStatic c2 = new ContaStatic();

        c1.saldo = 10.0;
        System.out.println("Conta 1: " + c1.saldo);   // 10.0
        System.out.println("Conta 2: " + c2.saldo);   // 10.0  ← a MESMA variável!
    }
}`}
        />
        <ExampleBox title="Uso legítimo: contador de instâncias">
          <CodeBlock
            language="java"
            title="Aluno.java (aula dez/27) — static contando matrículas"
            code={`public class Aluno {
    private String nome;
    static int qtdAlunosMatriculados;

    public Aluno(String nome) {
        this.nome = nome;
        qtdAlunosMatriculados++;   // cada new incrementa o contador da CLASSE
    }
}`}
          />
          <p>
            O contador é da classe, não de cada aluno: três <code>new Aluno(...)</code> deixam{' '}
            <code>qtdAlunosMatriculados</code> em 3, visível por qualquer instância. É também por isso que o{' '}
            <code>main</code> é <code>static</code> — ele roda antes de existir qualquer objeto.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Construtor private + getInstance" accentClass="text-accent4">
        <CodeBlock
          language="java"
          title="Se o construtor é private, como nasce o objeto?"
          code={`class Conta {
    private static Conta conta;

    private Conta() {}   // ninguém de fora dá new

    static Conta getInstance() {
        if (Conta.conta == null) {
            Conta.conta = new Conta();   // a própria classe pode
        }
        return Conta.conta;              // sempre a MESMA instância
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O construtor privado bloqueia o <code>new</code> externo; um método <strong>estático</strong> da própria
          classe cria a instância uma única vez (lazy initialization) e a devolve sempre. A aula não deu nome, mas
          isso é o padrão <strong>Singleton</strong> — reaparece na seção de Padrões de Projeto (AV1).
        </p>
      </Subsection>

      <HighlightBox title="Encapsulamento entre pacotes" accent="var(--color-accent5)">
        <p>
          O exemplo <code>CaixaEletronico</code> importa a <code>Conta</code> de outro pacote e só consegue ler o
          saldo por <code>getSaldo()</code> — a linha <code>c1.saldo = -19000;</code> está no código,{' '}
          <em>comentada</em>, com a anotação de que não compila. O encapsulamento vale entre pacotes, entre equipes
          e entre você e o seu eu de daqui a seis meses.
        </p>
      </HighlightBox>
    </section>
  );
}
