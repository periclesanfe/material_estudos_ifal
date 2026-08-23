import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function ClassesObjetosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Classes e Objetos"
        subtitle="A virada da disciplina: do código procedural para o mundo modelado em objetos"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que abandonar o procedural">
        <p>
          No paradigma procedural, os dados vivem soltos e as funções operam sobre eles de fora: o código não é
          encapsulado, trechos inteiros são copiados, a manutenção dói e o tratamento de dados fica{' '}
          <strong>misturado</strong> com o comportamento do programa. A orientação a objetos foi criada para{' '}
          <strong>aproximar o mundo real do virtual</strong>: modelamos cada coisa por suas{' '}
          <strong>características</strong> (que viram <em>atributos</em>) e pelas <strong>tarefas que executa</strong>{' '}
          (que viram <em>métodos</em>).
        </p>
        <p>
          O exemplo da aula: uma Ferrari e um Gol são diferentes, mas compartilham características — cor, rodas,
          marca, valor, velocidade máxima. Agrupar o que é comum sob um modelo é <strong>classificar</strong>{' '}
          (mesma lógica da biologia): esse modelo é a <strong>classe</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Classe × Objeto" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Classe"
          rightLabel="Objeto"
          rows={[
            { criterion: 'O que é', left: 'O modelo genérico: representação, "forma" — e um TIPO de dado', right: 'A materialização da classe: a instância, a "classe com vida"' },
            { criterion: 'Quando existe', left: 'No código-fonte, uma vez', right: 'Em memória, uma por new — quantas você quiser' },
            { criterion: 'O que carrega', left: 'A definição de atributos e métodos', right: 'VALORES próprios nos atributos (estado independente)' },
          ]}
        />
      </Subsection>

      <Subsection title="A classe Robo — o exemplo condutor" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="Robo.java — atributos (características) e métodos (funcionalidades)"
          code={`public class Robo {
    // atributos: têm tipo, como variáveis
    String nome;
    int carga;
    String cor;

    // métodos: nome, parâmetros opcionais, retorno opcional (void)
    void falar() {
        System.out.println("Oi, eu sou o JavaBô!");
    }

    void andar() {
        if (carga >= 5) {
            carga -= 5;
            System.out.println("Estou andando...");
        } else {
            System.out.println("Bateria descarregada...");
        }
    }

    void parar() {
        System.out.println("Parei!");
    }
}`}
        />
      </Subsection>

      <Subsection title="Anatomia do new" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="Instanciar, referenciar, invocar"
          code={`Robo r = new Robo();
// Robo r      → declara a variável do TIPO Robo (classe é tipo!)
// new Robo()  → CRIA o objeto na memória

r.andar();    // métodos são invocados com o operador ponto
r.falar();

System.out.println(r);
// Robo@16f0472  → sem toString, imprime a REFERÊNCIA (endereço)`}
        />
        <ExampleBox title="Cada new é uma vida nova">
          <CodeBlock
            language="java"
            title="Duas instâncias, dois estados independentes"
            code={`Robo r1 = new Robo();
Robo r2 = new Robo();

System.out.println(r1);   // Robo@16f0472
System.out.println(r2);   // Robo@12f0132  → endereços DIFERENTES

r1.nome = "JavaBô";
System.out.println(r2.nome);   // null — o estado de r2 não mudou`}
          />
          <p>
            Endereços diferentes provam que <code>r1</code> e <code>r2</code> apontam para objetos distintos:
            alterar um atributo de um <strong>não afeta</strong> o outro. É a diferença entre a classe (uma) e as
            instâncias (muitas).
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Regras rápidas de atributos e métodos" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Atributos têm tipo', description: 'int idade; String nome; String[] nomePais; — inclusive arrays e outras classes.', accent: 'accent' },
            { title: 'Métodos têm assinatura', description: 'Nome (não começa com número), parâmetros opcionais e retorno: void falar(), int calculaIdade(int a, int m, int d), String getNome().', accent: 'accent2' },
            { title: 'Lógica dentro do método', description: 'andar() decide entre andar e avisar bateria fraca — comportamento mora junto dos dados que usa.', accent: 'accent3' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Exercícios da aula" accent="var(--color-accent3)">
        <p>
          <strong>Locadora:</strong> pense numa locadora de DVDs real — características viram atributos, atividades
          (locar, devolver) viram métodos. <strong>Banco:</strong> classe com saldo, nomeTitular, cpfTitular,
          numeroConta e numeroAgencia, e operações sacar, depositar e mostrar saldo. Os dois exercícios voltam nas
          próximas seções: a Conta vira o exemplo central de encapsulamento.
        </p>
      </HighlightBox>
    </section>
  );
}
