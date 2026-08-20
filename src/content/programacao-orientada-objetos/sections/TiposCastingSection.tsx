import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ComparisonTable, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function TiposCastingSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Variáveis, Tipos e Casting"
        subtitle="Os oito primitivos, as pegadinhas dos literais, precedência e a tabela de conversões"
        colorClass="text-accent"
      />

      <TheoryBlock title="Variáveis em uma linguagem fortemente tipada">
        <p>
          Variáveis armazenam valores ou referenciam objetos — e em Java <strong>toda variável tem um tipo
          definido</strong>. Convenções da disciplina: nome começando com letra minúscula, compostos em{' '}
          <strong>camelCase</strong> (<code>saldoBancario</code>, <code>enderecoPessoal</code>), booleanas com
          prefixo <code>is</code> (<code>isMaiorIdade</code>). Regra dura: nome de variável{' '}
          <strong>não pode começar com número</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Os oito tipos primitivos" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'byte (1 byte) e short (2 bytes)', description: 'Inteiros pequenos: −128 a 127 e −32.768 a 32.767. Cuidado: byte b = 130; estoura a faixa e não compila.' },
            { title: 'int (4 bytes)', description: 'O inteiro padrão: ±2,1 bilhões. Todo literal inteiro sem sufixo é int.' },
            { title: 'long (8 bytes)', description: 'Inteiros gigantes (±9,2 quintilhões). Literal grande exige sufixo L: long l = 9223372036854775807L;' },
            { title: 'float (4 bytes) e double (8 bytes)', description: 'Reais. Literal com casas decimais é double por padrão; para float, sufixo F: float pi = 3.14F;' },
            { title: 'char (2 bytes)', description: 'UM caractere Unicode, entre aspas SIMPLES: char opcao = \'+\'; (aspas duplas são de String).' },
            { title: 'boolean', description: 'true ou false. Não se converte em nenhum outro tipo — nem com cast.' },
          ]}
        />
        <HighlightBox title="String NÃO é primitivo" accent="var(--color-accent3)">
          <p>
            <code>String nome = "Programação OO";</code> declara um <strong>objeto</strong> de uma classe do Java,
            não um primitivo — por isso tem métodos (<code>length()</code>, <code>equals()</code>…) e é escrita com
            inicial maiúscula. Essa distinção volta o semestre inteiro.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Expressões e precedência" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Expressões <strong>aritméticas</strong> produzem números; <strong>relacionais</strong> (<code>==</code>,{' '}
          <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>) e <strong>lógicas</strong> (<code>&amp;&amp;</code>,{' '}
          <code>||</code>, <code>!</code>) produzem booleanos. Precedência: parênteses primeiro; depois{' '}
          <code>*</code> e <code>/</code>; depois <code>+</code> e <code>−</code>; empates resolvem da esquerda
          para a direita.
        </p>
        <CodeBlock
          language="java"
          title="Exercícios de precedência da aula — calcule antes de olhar"
          code={`double a = 2.0 + 3.0 * 2.0 * 2.0 / 2.0;
// multiplicações/divisões primeiro: 3*2*2/2 = 6  →  a = 8.0

double b = 5.0 + 3.0 * (3.0 - 1.0) - 2.0 / 4.0 - 1.0;
// parênteses: (2.0) → 3*2=6 e 2/4=0.5  →  5+6-0.5-1 = 9.5`}
        />
      </Subsection>

      <Subsection title="Divisão inteira: a pegadinha número um" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="Conversao.java — por que 10/20 dá zero"
          code={`int numero1 = 10;
int numero2 = 20;

System.out.println(numero1 / numero2);
// 0  →  divisão entre ints é INTEIRA: descarta a parte decimal

double divisao = (float) numero1 / (float) numero2;
System.out.println(divisao);
// 0.5 →  o cast transforma os operandos em reais ANTES de dividir`}
        />
      </Subsection>

      <Subsection title="Casting: ampliação implícita, estreitamento explícito" accentClass="text-accent4">
        <ComparisonTable
          criterionLabel="Conversão"
          leftLabel="Implícita (ampliação)"
          rightLabel="Explícita (estreitamento)"
          rows={[
            { criterion: 'Direção', left: 'Tipo menor → maior (int → long → float → double)', right: 'Tipo maior → menor (double → int, int → byte…)' },
            { criterion: 'Sintaxe', left: 'double d = i;  (automática)', right: 'int i = (int) d;  (cast obrigatório)' },
            { criterion: 'Risco', left: 'Nenhum: todo int cabe em double', right: 'Perde informação: (int) 3.99 vira 3 (trunca, não arredonda)' },
            { criterion: 'Exceção da regra', left: 'char → int/long/float/double é implícita', right: 'boolean não converte para NADA, nem com cast' },
          ]}
        />
        <ExampleBox title="O caso que derruba todo mundo">
          <CodeBlock
            language="java"
            title="Mesmo o valor 'cabendo', o compilador olha o TIPO"
            code={`double d = 10.0;
int i = d;        // ERRO de compilação: incompatible types
int j = (int) d;  // OK: j = 10 (cast explícito)

int x = 20;
double y = x;     // OK: ampliação é automática`}
          />
        </ExampleBox>
      </Subsection>

      <Subsection title="Formatando a saída" accentClass="text-accent">
        <CodeBlock
          language="java"
          title="Duas formas vistas em aula"
          code={`double resultado = 10.0 / 3.0;   // 3.3333333333333335

System.out.println(String.format("%.2f", resultado));  // 3,33

// ou com NumberFormat (import java.text.NumberFormat):
NumberFormat nf = NumberFormat.getNumberInstance();
nf.setMaximumFractionDigits(2);
System.out.println(nf.format(resultado));               // 3,33`}
        />
      </Subsection>
    </section>
  );
}
