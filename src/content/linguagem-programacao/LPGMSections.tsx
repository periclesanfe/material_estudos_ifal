import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import HighlightBox from '../../components/ui/HighlightBox';
import MultiCodeBlock from '../../components/ui/MultiCodeBlock';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { LPGM_EXAMS, LPGM_GUIDE_CONTEXT, LPGM_TOPICS, QUIZ_DATA, type LPGMSectionId } from './data';

/* ============================ INTRO ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A linguagem do curso é Python"
        subtitle="Aqui você estuda os conceitos de linguagens de programação com a linguagem que a turma usou — e vê o mesmo conceito em outras linguagens quando a comparação ensina algo"
        colorClass="text-accent"
      />
      <HighlightBox title="Como esta matéria está organizada">
        <p>
          A disciplina foi ministrada em <strong>Python</strong>: é a linguagem dos slides, dos exercícios semanais e da avaliação
          &ldquo;Avaliação sobre Python&rdquo;. O <strong>projeto final foi em C</strong>, e a prova de recuperação podia ser feita
          &ldquo;em C ou em Python&rdquo;. Por isso, <strong>Python é sempre a primeira aba</strong> dos exemplos e C aparece nos
          assuntos em que a turma efetivamente programou nele.
        </p>
        <p>
          As demais linguagens (C++, Java, JavaScript, PHP) entram <strong>só onde a comparação esclarece o conceito</strong> — por
          exemplo, para mostrar que &ldquo;lista&rdquo; não quer dizer a mesma coisa em toda linguagem. Elas não são cobradas na
          prova: servem para você reconhecer o conceito por baixo da sintaxe, que é justamente o que a ementa chama de
          <em> classificação e principais paradigmas</em>.
        </p>
      </HighlightBox>
      <Subsection title="Do código-fonte à execução" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Você escreve o <strong>código-fonte</strong>. Um <strong>tradutor</strong> (compilador ou interpretador) o converte para a{' '}
          <strong>linguagem de máquina</strong>, que o computador executa.
        </p>
        <MultiCodeBlock
          title='"Olá, mundo" — todos os exemplos do site são programas completos, que compilam e rodam'
          code={{
            python: `print("Olá, mundo")`,
            c: `#include <stdio.h>

int main(void) {
    printf("Olá, mundo\\n");
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Olá, mundo" << endl;
    return 0;
}`,
            java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, mundo");
    }
}`,
            javascript: `console.log("Olá, mundo");`,
            php: `<?php
echo "Olá, mundo";`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          Repare que Python e JavaScript rodam a linha solta, enquanto C, C++ e Java exigem um ponto de entrada
          (<code>main</code>) e, no caso de Java, uma classe. Isso é conteúdo: parte do que a disciplina compara é justamente
          <em> quanto cerimonial</em> cada linguagem exige para executar uma instrução.
        </p>
      </Subsection>
      <ConceptGrid items={introConceitos} columns="md:grid-cols-2" />
      <ExampleBox title="A rotina de exercícios: The Huxley">
        <p>
          A turma resolvia exercícios semanais no <strong>The Huxley</strong>, um juiz automático que corrige a saída do
          programa. O professor avisou: <em>&ldquo;Toda semana eu passarei exercícios para serem resolvidos… ah e o site possui
          um detector de cópia de código&rdquo;</em>. E deu o conselho de estudo mais útil do material:
        </p>
        <p>
          <em>&ldquo;Esses exercícios, em geral, são mais difíceis que a prova, então saber fazê-los torna a prova muito fácil
          (Treino difícil, jogo fácil)&rdquo;.</em>
        </p>
      </ExampleBox>
      <TheoryBlock title="A armadilha do juiz automático">
        <p>
          Num juiz automático a saída tem de bater <strong>caractere por caractere</strong>. O professor repetiu a dica em dois
          decks: <em>&ldquo;O Huxley é uma máquina, para ele, ou está certo ou errado. Ou seja, o MÍNIMO erro ele leva em
          consideração. Não forneça nada a mais ou a menos do que ele pedir&rdquo;</em>.
        </p>
      </TheoryBlock>
      <MultiCodeBlock
        title="Ler um número para um juiz automático: o texto do input() estraga a saída"
        code={{
          python: `# Correto — lê o número e nada mais
numero = int(input())

# Errado — a mensagem vira parte da saída e o juiz reprova
# numero = int(input('digite um numero: '))

print(numero * 2)`,
        }}
      />
    </section>
  );
}

const introConceitos: ConceptItem[] = [
  { title: 'Código-fonte', description: 'O texto que você escreve na linguagem de programação — as instruções do programa.', accent: 'accent' },
  { title: 'Tradutor', description: 'Programa que converte o código-fonte para a linguagem de máquina: um compilador ou um interpretador.', accent: 'accent3' },
  { title: 'Linguagem de máquina', description: 'A linguagem que o processador entende de fato — o alvo da tradução.', accent: 'accent4' },
  { title: 'Expressão', description: 'Combinação de valores, operadores, constantes, variáveis e funções, avaliada segundo uma regra de precedência bem definida.', accent: 'accent5' },
];

/* ============================ AV1 ============================ */

function ConceitosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Compilação, Interpretação e Histórico"
        subtitle="Duas formas de o tradutor transformar o seu código em algo que a máquina executa — e como as linguagens se classificam"
        colorClass="text-accent"
      />
      <Subsection title="Compilada × Interpretada" accentClass="text-accent">
        <ComparisonTable rows={compiladaInterpretada} leftLabel="Compilada (C, C++, Java*)" rightLabel="Interpretada (Python, JS, PHP)" />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          * Java é um caso híbrido: compila para <em>bytecode</em>, que é depois executado por uma máquina virtual (JVM). O mesmo
          tipo de ressalva vale para o outro lado da tabela: JavaScript é &ldquo;interpretado&rdquo;, mas motores modernos (o V8 do
          Chrome e do Node) compilam o código para instruções nativas em tempo de execução — a técnica <strong>JIT</strong>
          (<em>just-in-time</em>). Por isso a linha &ldquo;velocidade&rdquo; diz <em>costuma</em>: a fronteira é menos nítida do que
          o resumo sugere.
        </p>
      </Subsection>
      <Subsection title="Onde cada linguagem se encaixa" accentClass="text-accent3">
        <PanelList items={linguagensClassificacao} columns="md:grid-cols-2" />
      </Subsection>
      <Subsection title="Histórico e classificação: as gerações" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          A ementa nomeia <em>&ldquo;histórico, classificação&rdquo;</em> como conteúdo. A classificação mais comum é por{' '}
          <strong>nível de abstração</strong>: quanto mais alto o nível, mais perto da linguagem humana e mais longe do hardware.
        </p>
        <ColoredPanelList items={geracoes} columns="md:grid-cols-2" />
      </Subsection>
      <TheoryBlock title="Por que a turma comparou 11 linguagens">
        <p>
          A disciplina dedicou uma atividade inteira a seminários em que cada grupo apresentou uma linguagem: <strong>Go, PHP, C#,
          Bash script, Kotlin, Rust, TypeScript, Elixir, Lua e Ruby</strong>. O roteiro era fixo — <em>histórico, características
          gerais e sintaxe básica (Hello World, declaração de variáveis, estruturas de controle com if/switch/for/else e
          modularização com funções)</em>.
        </p>
        <p>
          É exatamente o método desta matéria: o conceito é o mesmo, a grafia muda. Repare que o roteiro pede{' '}
          <strong>switch</strong>, que você encontra na seção de Estruturas de Controle.
        </p>
      </TheoryBlock>
    </section>
  );
}

const compiladaInterpretada: ComparisonRow[] = [
  { criterion: 'Quando traduz', left: 'O programa inteiro, antes de executar', right: 'Linha a linha, durante a execução' },
  { criterion: 'Resultado', left: 'Gera um artefato (executável / bytecode)', right: 'Executa direto do código-fonte' },
  { criterion: 'Velocidade', left: 'Costuma ser mais rápida na execução', right: 'Mais flexível; execução costuma ser mais lenta' },
  { criterion: 'Erros', left: 'Muitos erros aparecem na compilação', right: 'Erros aparecem ao executar a linha' },
];

const linguagensClassificacao: PanelItem[] = [
  { title: 'Python — a linguagem do curso', description: 'Interpretada, tipagem dinâmica. Sintaxe enxuta, o que permite focar na lógica e não no cerimonial. Foi usada em 7 dos 8 blocos de aula e em todos os exercícios semanais.' },
  { title: 'C — o projeto final', description: 'Compilada, tipagem estática, de baixo nível para os padrões de hoje: você gerencia memória e escreve os detalhes. Foi a linguagem do projeto em grupo e uma das opções da recuperação.' },
  { title: 'C++', description: 'Compilada, de tipagem estática. Estende o C com objetos e uma biblioteca padrão rica. Aparece na bibliografia da ementa (Deitel).' },
  { title: 'Java', description: 'Compila para bytecode executado pela JVM ("escreva uma vez, rode em qualquer lugar"). Tipagem estática. Também da bibliografia (Deitel).' },
  { title: 'JavaScript', description: 'Interpretada (com JIT), tipagem dinâmica. A linguagem da web no navegador e, via Node.js, no servidor. Entra aqui só como termo de comparação.' },
  { title: 'PHP', description: 'Interpretada, tipagem dinâmica. Muito usada no back-end de sites. Foi uma das linguagens apresentadas em seminário pela turma.' },
];

const geracoes: PanelItem[] = [
  { title: '1ª geração — linguagem de máquina', description: 'Os próprios códigos binários que o processador executa. Escrever nela é inviável para um humano; é o alvo final de toda tradução.' },
  { title: '2ª geração — Assembly', description: 'Mnemônicos (ADD, MOV) que mapeiam quase um-para-um em instruções da máquina. Depende do processador: não é portável.' },
  { title: '3ª geração — alto nível', description: 'Fortran, C, Python, Java. Você escreve perto do problema e o tradutor cuida da máquina. É onde vive praticamente toda a programação do curso.' },
  { title: '4ª geração — específicas de domínio', description: 'Linguagens voltadas a um domínio, como SQL para consultas. Você descreve o que quer, não o passo a passo de como obter.' },
];

function ParadigmasSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Paradigmas de Programação" subtitle="Diferentes formas de organizar e pensar um programa" colorClass="text-accent3" />
      <TheoryBlock title="O que é um paradigma">
        <p>
          Um <strong>paradigma</strong> é um estilo de estruturar o raciocínio e o código. Uma mesma linguagem pode dar suporte a
          vários (é <strong>multiparadigma</strong>): Python, JavaScript, Java e C++ combinam mais de um. Conhecer os paradigmas
          ajuda a escolher a melhor forma de resolver cada problema.
        </p>
      </TheoryBlock>
      <ConceptGrid items={paradigmas} columns="md:grid-cols-2" />
      <Subsection title="O mesmo problema em dois paradigmas" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Somar os números pares de uma lista. No estilo <strong>imperativo</strong> você descreve o passo a passo e vai
          acumulando; no estilo <strong>funcional</strong> você descreve a transformação e deixa a linguagem percorrer.
        </p>
        <MultiCodeBlock
          title="Imperativo × funcional: somar os pares de uma lista"
          code={{
            python: `numeros = [1, 2, 3, 4, 5, 6]

# Imperativo: passo a passo, acumulando num total
total = 0
for n in numeros:
    if n % 2 == 0:
        total += n
print(total)   # 12

# Funcional: descreve a transformação, não o percurso
total = sum(filter(lambda n: n % 2 == 0, numeros))
print(total)   # 12`,
            javascript: `const numeros = [1, 2, 3, 4, 5, 6];

// Imperativo
let total = 0;
for (const n of numeros) {
    if (n % 2 === 0) {
        total += n;
    }
}
console.log(total);   // 12

// Funcional
const soma = numeros.filter(n => n % 2 === 0)
                    .reduce((a, b) => a + b, 0);
console.log(soma);    // 12`,
          }}
        />
      </Subsection>
    </section>
  );
}

const paradigmas: ConceptItem[] = [
  { title: 'Imperativo', description: 'Descreve o passo a passo: comandos que alteram o estado do programa (atribuições, laços). É a base das linguagens deste curso.', accent: 'accent' },
  { title: 'Procedural', description: 'Organiza o código em procedimentos/funções reutilizáveis. Uma evolução do imperativo — é o estilo do projeto em C.', accent: 'accent3' },
  { title: 'Orientado a objetos', description: 'Organiza em objetos que reúnem dados e comportamento. É o foco da disciplina de POO, mais adiante.', accent: 'accent4' },
  { title: 'Funcional', description: 'Trata a computação como avaliação de funções, evitando estado mutável. JavaScript e Python têm traços funcionais.', accent: 'accent5' },
];

function TiposSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Tipos de Dados, Variáveis e Constantes"
        subtitle="Como cada linguagem guarda e nomeia valores na memória"
        colorClass="text-accent4"
      />
      <HighlightBox title="Variável">
        <p>
          Uma <strong>variável</strong> é um espaço na memória que guarda um valor de um <strong>tipo</strong>. O nome dela é o{' '}
          <strong>identificador</strong>, e a <strong>atribuição</strong> (operador <code>=</code>) coloca um valor nesse espaço.
        </p>
      </HighlightBox>
      <Subsection title="Os tipos primitivos" accentClass="text-accent">
        <ConceptGrid items={tiposPrimitivos} columns="md:grid-cols-2" />
      </Subsection>
      <Subsection title="Declarar variáveis" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Repare: em C, C++ e Java você <strong>declara o tipo</strong> (tipagem estática); em Python, JS e PHP o tipo é inferido em
          tempo de execução (tipagem dinâmica).
        </p>
        <MultiCodeBlock
          title="Uma variável de cada tipo"
          code={{
            python: `idade = 20          # inteiro
altura = 1.75       # real
nome = "Ana"        # texto
maior = True        # booleano

print(idade, altura, nome, maior)`,
            c: `#include <stdio.h>

int main(void) {
    int idade = 20;          /* inteiro */
    double altura = 1.75;    /* real */
    char nome[] = "Ana";     /* texto: vetor de caracteres */
    int maior = 1;           /* C só ganhou "bool" em C99 (stdbool.h) */

    printf("%d %.2f %s %d\\n", idade, altura, nome, maior);
    return 0;
}`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int idade = 20;          // inteiro
    double altura = 1.75;    // real
    string nome = "Ana";     // texto
    bool maior = true;       // booleano

    cout << idade << " " << altura << " " << nome << " " << maior << endl;
    return 0;
}`,
            java: `public class Tipos {
    public static void main(String[] args) {
        int idade = 20;           // inteiro
        double altura = 1.75;     // real
        String nome = "Ana";      // texto
        boolean maior = true;     // booleano

        System.out.println(idade + " " + altura + " " + nome + " " + maior);
    }
}`,
            javascript: `let idade = 20;        // inteiro
let altura = 1.75;     // real
let nome = "Ana";      // texto
let maior = true;      // booleano

console.log(idade, altura, nome, maior);`,
            php: `<?php
$idade = 20;        // inteiro
$altura = 1.75;     // real
$nome = "Ana";      // texto
$maior = true;      // booleano

echo "$idade $altura $nome $maior";`,
          }}
        />
      </Subsection>
      <Subsection title="Constantes: o valor que não muda" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          A ementa cita <em>&ldquo;constantes e variáveis&rdquo;</em>. Uma <strong>constante</strong> é um identificador cujo valor
          é fixado uma vez e não pode ser reatribuído — o compilador (ou o interpretador) impede. Serve para dar nome a valores
          mágicos e para proteger o que não deve mudar.
        </p>
        <MultiCodeBlock
          title="Declarar uma constante"
          code={{
            python: `# Python não tem constante de verdade: a convenção é o NOME EM MAIÚSCULAS
PI = 3.14159
raio = 2
print(PI * raio ** 2)

# Nada impede reatribuir — a proteção é só o combinado entre programadores
# PI = 3  # funcionaria, mas é considerado erro de estilo`,
            c: `#include <stdio.h>

#define PI 3.14159       /* substituição feita antes de compilar */

int main(void) {
    const double E = 2.71828;   /* const: o compilador recusa reatribuição */
    int raio = 2;

    printf("%.4f %.4f\\n", PI * raio * raio, E);
    /* PI = 3;  -> nem existe como variável */
    /* E = 3;   -> erro de compilação */
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    int raio = 2;

    cout << PI * raio * raio << endl;
    // PI = 3;  // erro de compilação: assignment of read-only variable
    return 0;
}`,
            java: `public class Constantes {
    // static final: constante de classe, o idioma usual em Java
    static final double PI = 3.14159;

    public static void main(String[] args) {
        int raio = 2;
        System.out.println(PI * raio * raio);
        // PI = 3;  // erro de compilação: cannot assign a value to final variable
    }
}`,
            javascript: `const PI = 3.14159;
const raio = 2;
console.log(PI * raio ** 2);

// PI = 3;  // TypeError: Assignment to constant variable.`,
            php: `<?php
define("PI", 3.14159);   // forma clássica
const E = 2.71828;       // forma moderna

$raio = 2;
echo PI * $raio ** 2;
// PI = 3;  -> erro de sintaxe: constante não é variável`,
          }}
        />
      </Subsection>
      <Subsection title="Tipagem: estática × dinâmica" accentClass="text-accent5">
        <ComparisonTable rows={tipagem} leftLabel="Estática (C, C++, Java)" rightLabel="Dinâmica (Python, JS, PHP)" />
      </Subsection>
      <Subsection title="A divisão que surpreende: / e //" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          No primeiro contato com o interpretador o professor manda digitar <code>7/2</code> e pergunta:{' '}
          <em>&ldquo;Tem algo estranho?&rdquo;</em> — e o slide para aí, deixando a resposta para a turma. Vale saber que{' '}
          <strong>a estranheza mudou de lado com o tempo</strong>: os slides foram escritos na época do Python 2, em que{' '}
          <code>7/2</code> dava <code>3</code> (o decimal sumia); no <strong>Python 3</strong>, que é o que você vai usar,{' '}
          <code>7/2</code> dá <code>3.5</code> e a divisão inteira passou a ter operador próprio, o <code>//</code>. Ele não
          aparece nos slides, mas está nos programas que o professor distribuiu — o <code>numero-primo.py</code> usa{' '}
          <code>// 2</code>. Já em C, C++ e Java, dividir dois inteiros descarta a parte decimal <em>por padrão</em>, que é a
          origem de um erro clássico.
        </p>
        <MultiCodeBlock
          title="Dividir 7 por 2"
          code={{
            python: `print(7 / 2)     # 3.5  — barra simples devolve real
print(7 // 2)    # 3    — divisão inteira (descarta o resto)
print(7 % 2)     # 1    — o resto da divisão

# O numero-primo.py do professor usa // para varrer até a metade
print(int("13") // 2)   # 6`,
            c: `#include <stdio.h>

int main(void) {
    printf("%d\\n", 7 / 2);          /* 3   — int/int trunca! */
    printf("%.1f\\n", 7 / 2.0);      /* 3.5 — basta um dos lados ser real */
    printf("%d\\n", 7 % 2);          /* 1   — resto */
    return 0;
}`,
            java: `public class Divisao {
    public static void main(String[] args) {
        System.out.println(7 / 2);       // 3   — int/int trunca!
        System.out.println(7 / 2.0);     // 3.5 — um lado real basta
        System.out.println(7 % 2);       // 1   — resto
    }
}`,
            javascript: `console.log(7 / 2);              // 3.5 — não existe divisão inteira implícita
console.log(Math.floor(7 / 2));  // 3
console.log(7 % 2);              // 1`,
          }}
        />
      </Subsection>
      <ExampleBox title="Precedência de operadores" accent="var(--color-accent5)">
        <p>
          O deck de introdução gasta dois slides nisto: <code>1 + 2 * 3</code> dá <strong>7</strong>, não 9, porque a multiplicação
          é avaliada antes da soma. Para forçar outra ordem, use parênteses: <code>(1 + 2) * 3</code> dá <strong>9</strong>. Como
          o professor resume, <em>&ldquo;o interpretador Python é mais esperto que uma calculadora comum&rdquo;</em>. A regra vale
          igual em C, Java e JavaScript.
        </p>
      </ExampleBox>
    </section>
  );
}

const tiposPrimitivos: ConceptItem[] = [
  { title: 'Inteiro (int)', description: 'Números sem casas decimais: 0, 42, -7.', accent: 'accent' },
  { title: 'Real (float/double)', description: 'Números com casas decimais: 1.75, 3.14.', accent: 'accent3' },
  { title: 'Texto (string)', description: 'Sequência de caracteres, entre aspas: "Ana".', accent: 'accent4' },
  { title: 'Booleano (bool)', description: 'Valor lógico: verdadeiro ou falso (true/false). Em C puro, representa-se com inteiro: 0 é falso.', accent: 'accent5' },
];

const tipagem: ComparisonRow[] = [
  { criterion: 'Quando o tipo é verificado', left: 'Em tempo de compilação', right: 'Em tempo de execução' },
  { criterion: 'Declaração', left: 'Você escreve o tipo (int, double…)', right: 'O tipo é inferido pela atribuição' },
  { criterion: 'Vantagem', left: 'Erros de tipo pegos cedo, mais desempenho', right: 'Código mais curto e flexível' },
];

function IOSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Entrada e Saída" subtitle="Ler dados do usuário e mostrar resultados" colorClass="text-accent2" />
      <HighlightBox title="Entrada costuma ser texto">
        <p>
          Ao ler algo digitado, a maioria das linguagens devolve <strong>texto</strong>. Como o professor insiste no deck de
          strings: mesmo digitando um número, o Python acha que aquilo é uma string. Para calcular com esse valor é preciso{' '}
          <strong>converter</strong> (casting) para número — em Python, com <code>int()</code> ou <code>float()</code>.
        </p>
      </HighlightBox>
      <MultiCodeBlock
        title="Ler um número e mostrar o dobro"
        code={{
          python: `n = int(input("Digite um número: "))
print("O dobro é", n * 2)`,
          c: `#include <stdio.h>

int main(void) {
    int n;
    printf("Digite um número: ");
    scanf("%d", &n);            /* o & passa o ENDEREÇO de n */
    printf("O dobro é %d\\n", n * 2);
    return 0;
}`,
          cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Digite um número: ";
    cin >> n;
    cout << "O dobro é " << n * 2 << endl;
    return 0;
}`,
          java: `import java.util.Scanner;

public class Dobro {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int n = sc.nextInt();
        System.out.println("O dobro é " + (n * 2));
        sc.close();
    }
}`,
          javascript: `// No navegador, prompt() abre uma caixa de diálogo.
// Atenção: prompt NÃO existe no Node.js — lá se lê de process.stdin.
const entrada = prompt("Digite um número: ");
const n = Number(entrada);
console.log("O dobro é", n * 2);`,
          php: `<?php
$n = (int) readline("Digite um número: ");
echo "O dobro é " . ($n * 2);`,
        }}
      />
      <TheoryBlock title="O esquecimento clássico: ler sem converter">
        <p>
          Se você esquecer o <code>int()</code>, o Python não reclama na hora — ele só faz outra coisa. Com a entrada{' '}
          <code>5</code>, <code>n * 2</code> devolve <code>&quot;55&quot;</code> em vez de <code>10</code>, porque{' '}
          <code>*</code> entre string e inteiro <strong>repete o texto</strong>. É o tipo de erro que passa despercebido até a
          prova.
        </p>
      </TheoryBlock>
      <MultiCodeBlock
        title="Com e sem conversão"
        code={{
          python: `entrada = "5"          # é o que input() devolveria

print(entrada * 2)     # 55  — repetiu o texto!
print(int(entrada) * 2)  # 10  — agora sim, é conta`,
        }}
      />
    </section>
  );
}

function ControleSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Estruturas de Controle"
        subtitle="Decidir e repetir: o fluxo do programa deixa de ser uma linha reta"
        colorClass="text-accent5"
      />
      <TheoryBlock title="Blocos: chaves × indentação">
        <p>
          Um <strong>bloco</strong> é um grupo de comandos. A maioria das linguagens (C, C++, Java, JS, PHP) delimita blocos com{' '}
          <strong>chaves <code>{'{ }'}</code></strong>. O <strong>Python</strong> é a exceção: usa a <strong>indentação</strong> (o
          recuo) para marcar o bloco. Como diz o slide de erros comuns: <em>&ldquo;em Python espaços são blocos de código&rdquo;</em>.
        </p>
      </TheoryBlock>
      <Subsection title="Condicional (if / else / elif)" accentClass="text-accent">
        <MultiCodeBlock
          title="Aprovado ou reprovado"
          code={{
            python: `media = 7

if media >= 6:
    print("Aprovado")
else:
    print("Reprovado")`,
            c: `#include <stdio.h>

int main(void) {
    double media = 7;

    if (media >= 6) {
        printf("Aprovado\\n");
    } else {
        printf("Reprovado\\n");
    }
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    double media = 7;

    if (media >= 6) {
        cout << "Aprovado" << endl;
    } else {
        cout << "Reprovado" << endl;
    }
    return 0;
}`,
            java: `public class Aprovacao {
    public static void main(String[] args) {
        double media = 7;

        if (media >= 6) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }
    }
}`,
            javascript: `const media = 7;

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}`,
            php: `<?php
$media = 7;

if ($media >= 6) {
    echo "Aprovado";
} else {
    echo "Reprovado";
}`,
          }}
        />
      </Subsection>
      <Subsection title="Mais de duas saídas: elif / else if" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Quando há mais de dois caminhos, encadeia-se a condição. Em Python a palavra é <code>elif</code>; nas linguagens de
          chaves, escreve-se <code>else if</code>. O primeiro teste verdadeiro vence e os demais nem são avaliados.
        </p>
        <MultiCodeBlock
          title="Faixas de conceito a partir da média"
          code={{
            python: `media = 7.5

if media >= 9:
    print("Conceito A")
elif media >= 7:
    print("Conceito B")
elif media >= 6:
    print("Conceito C")
else:
    print("Reprovado")`,
            c: `#include <stdio.h>

int main(void) {
    double media = 7.5;

    if (media >= 9) {
        printf("Conceito A\\n");
    } else if (media >= 7) {
        printf("Conceito B\\n");
    } else if (media >= 6) {
        printf("Conceito C\\n");
    } else {
        printf("Reprovado\\n");
    }
    return 0;
}`,
            java: `public class Conceito {
    public static void main(String[] args) {
        double media = 7.5;

        if (media >= 9) {
            System.out.println("Conceito A");
        } else if (media >= 7) {
            System.out.println("Conceito B");
        } else if (media >= 6) {
            System.out.println("Conceito C");
        } else {
            System.out.println("Reprovado");
        }
    }
}`,
            javascript: `const media = 7.5;

if (media >= 9) {
    console.log("Conceito A");
} else if (media >= 7) {
    console.log("Conceito B");
} else if (media >= 6) {
    console.log("Conceito C");
} else {
    console.log("Reprovado");
}`,
          }}
        />
      </Subsection>
      <Subsection title="Escolher entre valores fixos: switch" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Quando a decisão é sobre <strong>um valor exato</strong> entre vários (uma opção de menu, um código), as linguagens de
          chaves oferecem o <code>switch</code>. Ele não substitui o <code>if</code>: só serve para igualdade contra valores
          constantes, e cada caso precisa de <code>break</code> para não &ldquo;vazar&rdquo; para o seguinte. O <code>switch</code>{' '}
          foi <strong>exigido de todos os grupos</strong> no roteiro dos seminários, ainda que nunca tenha sido ensinado em
          Python — a linguagem só ganhou construção parecida (o <code>match</code>) na versão 3.10.
        </p>
        <MultiCodeBlock
          title="Um menu com switch — e o equivalente em Python"
          code={{
            python: `# Python não tem switch clássico. Até a versão 3.9 usa-se
# if/elif; da 3.10 em diante existe o match/case.
opcao = 2

if opcao == 1:
    print("Cadastrar")
elif opcao == 2:
    print("Buscar")
elif opcao == 3:
    print("Listar")
else:
    print("Opção inválida")`,
            c: `#include <stdio.h>

int main(void) {
    int opcao = 2;

    switch (opcao) {
        case 1:
            printf("Cadastrar\\n");
            break;          /* sem o break, cai no caso seguinte */
        case 2:
            printf("Buscar\\n");
            break;
        case 3:
            printf("Listar\\n");
            break;
        default:
            printf("Opção inválida\\n");
    }
    return 0;
}`,
            java: `public class Menu {
    public static void main(String[] args) {
        int opcao = 2;

        switch (opcao) {
            case 1:
                System.out.println("Cadastrar");
                break;
            case 2:
                System.out.println("Buscar");
                break;
            case 3:
                System.out.println("Listar");
                break;
            default:
                System.out.println("Opção inválida");
        }
    }
}`,
            javascript: `const opcao = 2;

switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Buscar");
        break;
    case 3:
        console.log("Listar");
        break;
    default:
        console.log("Opção inválida");
}`,
          }}
        />
      </Subsection>
      <Subsection title="Repetição 1: while — repete ENQUANTO a condição valer" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Esta é a estrutura que o professor apresenta <strong>primeiro</strong>, porque é nela que o raciocínio de repetição fica
          explícito. O contraste que ele faz em sala:
        </p>
        <TheoryBlock title="A frase que define repetição">
          <p>
            <em>&ldquo;Na estrutura condicional perguntamos: &lsquo;SE isso for True, então…&rsquo;. E o programa executava o bloco
            UMA vez. Na repetição, perguntamos: &lsquo;ENQUANTO isso for True, então…&rsquo;. E o programa vai executar o bloco todo
            e depois irá voltar e verificar novamente a condição. Ele só termina de fazer isso quando a condição for False.&rdquo;</em>
          </p>
        </TheoryBlock>
        <MultiCodeBlock
          title="Contar de 1 até 5 com while"
          code={{
            python: `i = 1
while i <= 5:
    print(i)
    i += 1     # sem isto, o laço nunca termina`,
            c: `#include <stdio.h>

int main(void) {
    int i = 1;
    while (i <= 5) {
        printf("%d\\n", i);
        i++;              /* sem isto, laço infinito */
    }
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int i = 1;
    while (i <= 5) {
        cout << i << endl;
        i++;
    }
    return 0;
}`,
            java: `public class ContaWhile {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println(i);
            i++;
        }
    }
}`,
            javascript: `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
            php: `<?php
$i = 1;
while ($i <= 5) {
    echo $i . "\\n";
    $i++;
}`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          O <code>while</code> é a escolha certa quando você <strong>não sabe de antemão</strong> quantas voltas serão precisas —
          por exemplo, um menu que repete até o usuário escolher &ldquo;sair&rdquo;. É exatamente o que o programa de agenda
          distribuído pelo professor faz, com <code>while True</code> e <code>break</code>.
        </p>
      </Subsection>
      <Subsection title="Repetição 2: for — percorre uma sequência" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          O <code>for</code> é a forma direta quando você <strong>já sabe</strong> quantas vezes repetir, ou quando quer percorrer
          os elementos de uma coleção. O professor registra a preferência: <em>&ldquo;Eu particularmente prefiro o for, mas muita
          gente usa o while&rdquo;</em> — ou seja, espera-se que você domine os dois.
        </p>
        <MultiCodeBlock
          title="Contar de 1 até 5 com for"
          code={{
            python: `for i in range(1, 6):    # o 6 não entra
    print(i)`,
            c: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }
    return 0;
}`,
            java: `public class ContaFor {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
            javascript: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
            php: `<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . "\\n";
}`,
          }}
        />
      </Subsection>
      <Subsection title="Um exercício da turma: múltiplos de 9" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Do deck de repetição: <em>&ldquo;Faça um programa que imprima os números inteiros de 1 a 100. Para melhorar, sempre que
          ele encontrar um múltiplo de 9, deve imprimir: &lsquo;Esse número é múltiplo de 9&rsquo;&rdquo;</em>. A dica dada em aula
          é usar o operador <code>%</code>, o resto da divisão.
        </p>
        <MultiCodeBlock
          title="Laço com condicional dentro — o padrão mais cobrado"
          code={{
            python: `for n in range(1, 101):
    if n % 9 == 0:
        print(n, "- Esse número é múltiplo de 9")
    else:
        print(n)`,
            c: `#include <stdio.h>

int main(void) {
    for (int n = 1; n <= 100; n++) {
        if (n % 9 == 0) {
            printf("%d - Esse número é múltiplo de 9\\n", n);
        } else {
            printf("%d\\n", n);
        }
    }
    return 0;
}`,
          }}
        />
      </Subsection>
      <Subsection title="Operadores" accentClass="text-accent">
        <PanelList items={operadores} columns="md:grid-cols-3" />
      </Subsection>
      <ExampleBox title="Erro comum: IndentationError">
        <p>
          O deck de condicionais dedica um slide ao erro que mais aparece no começo:{' '}
          <code>IndentationError: expected an indented block</code>. Ele ocorre <em>&ldquo;quando colocamos um espaço a mais ou a
          menos em um bloco de código&rdquo;</em> — em Python, o recuo não é enfeite, é sintaxe. Reconhecer a mensagem já resolve
          metade do problema.
        </p>
      </ExampleBox>
      <MultiCodeBlock
        title="O que o interpretador reclama"
        code={{
          python: `# ERRADO — falta recuar o corpo do if:
# if media >= 6:
# print("Aprovado")
#
# IndentationError: expected an indented block

# CERTO — o bloco é o que está recuado:
media = 7
if media >= 6:
    print("Aprovado")`,
        }}
      />
    </section>
  );
}

const operadores: PanelItem[] = [
  { title: 'Aritméticos', description: '+ soma, - subtração, * multiplicação, / divisão, // divisão inteira (Python), % resto. (** ou pow para potência.)' },
  { title: 'Relacionais', description: '== igual, != diferente, > maior, < menor, >= e <=. Resultam em verdadeiro/falso.' },
  { title: 'Lógicos', description: 'E (and / &&), OU (or / ||), NÃO (not / !). Combinam ou negam condições.' },
];

/* ============================ AV2 ============================ */

function ColecoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Listas, Tuplas e Dicionários" subtitle="Guardar muitos valores numa só variável" colorClass="text-accent" />
      <ConceptGrid items={colecoes} columns="md:grid-cols-3" />
      <Subsection title="Lista / array" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda vários valores em ordem, acessados por <strong>índice</strong> (começa em 0). É <strong>mutável</strong>: dá para
          adicionar, alterar e remover.
        </p>
        <MultiCodeBlock
          title="Criar uma lista, ler pelo índice e crescer"
          code={{
            python: `frutas = ["maçã", "uva", "pera"]
print(frutas[0])        # maçã
frutas.append("kiwi")   # adiciona no fim
print(len(frutas))      # 4
print(frutas)`,
            c: `#include <stdio.h>

int main(void) {
    /* Em C um "array" tem tamanho fixo definido na declaração.
       Para crescer, você mesmo controla a capacidade e a quantidade. */
    char *frutas[10] = {"maçã", "uva", "pera"};
    int quantidade = 3;

    printf("%s\\n", frutas[0]);      /* maçã */

    frutas[quantidade] = "kiwi";     /* adiciona "no fim" */
    quantidade++;

    printf("%d\\n", quantidade);     /* 4 */
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> frutas = {"maçã", "uva", "pera"};
    cout << frutas[0] << endl;      // maçã
    frutas.push_back("kiwi");       // adiciona no fim
    cout << frutas.size() << endl;  // 4
    return 0;
}`,
            java: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Listas {
    public static void main(String[] args) {
        // Array puro: tamanho FIXO, não cresce
        String[] fixo = {"maçã", "uva", "pera"};
        System.out.println(fixo[0]);        // maçã

        // ArrayList: a lista que cresce — é o equivalente real da list do Python
        List<String> frutas = new ArrayList<>(Arrays.asList("maçã", "uva", "pera"));
        frutas.add("kiwi");
        System.out.println(frutas.size());  // 4
        System.out.println(frutas);
    }
}`,
            javascript: `let frutas = ["maçã", "uva", "pera"];
console.log(frutas[0]);    // maçã
frutas.push("kiwi");       // adiciona no fim
console.log(frutas.length); // 4`,
            php: `<?php
$frutas = ["maçã", "uva", "pera"];
echo $frutas[0];          // maçã
$frutas[] = "kiwi";       // adiciona no fim
echo count($frutas);      // 4`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          Repare na aba Java: o <code>String[]</code> tem tamanho fixo e <strong>não</strong> é o equivalente de uma lista de
          Python — quem cresce é o <code>ArrayList</code>. É a lição que justifica comparar linguagens: &ldquo;lista&rdquo; nem
          sempre nomeia a mesma coisa.
        </p>
      </Subsection>
      <Subsection title="Métodos de lista que a turma usou" accentClass="text-accent2">
        <MultiCodeBlock
          title="append, insert, remove, count, extend, reverse e fatiamento"
          code={{
            python: `numeros = [10, 20, 30]

numeros.append(40)         # [10, 20, 30, 40]      — adiciona no fim
numeros.insert(1, 15)      # [10, 15, 20, 30, 40]  — insere na posição 1
numeros.remove(30)         # [10, 15, 20, 40]      — remove o VALOR 30
numeros.extend([50, 60])   # [10, 15, 20, 40, 50, 60]
numeros.reverse()          # [60, 50, 40, 20, 15, 10]

print(len(numeros))        # 6  — quantos elementos
print(numeros.count(50))   # 1  — quantas vezes o 50 aparece
print(numeros[0:3])        # [60, 50, 40]  — fatiamento também vale em lista`,
          }}
        />
      </Subsection>
      <Subsection title="Tupla: o registro imutável" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Nas palavras do professor: <em>&ldquo;Tuplas, em Python, representam o que em outras linguagens chamamos de{' '}
          <strong>registros</strong>&rdquo;</em>. Usam parênteses em vez de colchetes e têm uma diferença central em relação às
          listas — <em>&ldquo;são imutáveis, ou seja, você não pode adicionar, alterar nem remover um elemento de uma
          Tupla&rdquo;</em>. Use tupla quando o conjunto de valores <strong>não muda</strong>: os dados de uma pessoa, um ponto
          no plano, um pedido já fechado.
        </p>
        <MultiCodeBlock
          title="Criar uma tupla e tentar alterá-la"
          code={{
            python: `# Um aluno como registro: (nome, cpf, cidade, ano)
aluno = ("José da Silva", "000.000.000-00", "Arapiraca", 1998)

print(aluno[0])     # José da Silva
print(aluno[3])     # 1998
print(len(aluno))   # 4

# A imutabilidade em ação:
try:
    aluno[0] = "Maria"
except TypeError as erro:
    print("Erro:", erro)   # 'tuple' object does not support item assignment`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          Esse <code>TypeError</code> é o que torna a imutabilidade concreta: não é uma recomendação de estilo, é a linguagem
          recusando a operação.
        </p>
      </Subsection>
      <Subsection title="A tupla nas outras linguagens" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Tupla é o conceito em que as linguagens mais divergem — e a divergência já é a lição. C e C++ resolvem com{' '}
          <code>struct</code>/<code>std::tuple</code>, Java com <code>record</code>, e JavaScript e PHP não têm equivalente
          imutável direto.
        </p>
        <MultiCodeBlock
          title="O mesmo registro fora do Python"
          code={{
            cpp: `#include <iostream>
#include <tuple>
#include <string>
using namespace std;

int main() {
    // std::tuple é o equivalente mais próximo
    tuple<string, string, string, int> aluno =
        {"José da Silva", "000.000.000-00", "Arapiraca", 1998};

    cout << get<0>(aluno) << endl;   // José da Silva
    cout << get<3>(aluno) << endl;   // 1998
    // Em C++ a tuple é mutável; a imutabilidade vem do "const".
    return 0;
}`,
            java: `// record: classe de dados imutável, o equivalente idiomático da tupla
record Aluno(String nome, String cpf, String cidade, int ano) { }

public class Tuplas {
    public static void main(String[] args) {
        Aluno a = new Aluno("José da Silva", "000.000.000-00", "Arapiraca", 1998);

        System.out.println(a.nome());   // José da Silva
        System.out.println(a.ano());    // 1998
        // a.nome = "Maria";  -> nem compila: os campos de um record são finais
    }
}`,
            javascript: `// JS não tem tupla: usa-se array (mutável) ou objeto.
const aluno = ["José da Silva", "000.000.000-00", "Arapiraca", 1998];
console.log(aluno[0]);

// Para aproximar a imutabilidade, congela-se o array:
const fixo = Object.freeze([...aluno]);
console.log(fixo[0]);
// fixo[0] = "Maria";  // silenciosamente ignorado (ou TypeError em strict mode)`,
            php: `<?php
// PHP também não tem tupla: usa-se array (mutável).
$aluno = ["José da Silva", "000.000.000-00", "Arapiraca", 1998];
echo $aluno[0];

// A imutabilidade só existe via constante:
define("ALUNO", ["José da Silva", "000.000.000-00", "Arapiraca", 1998]);
echo ALUNO[0];`,
          }}
        />
      </Subsection>
      <Subsection title="Lista de tuplas: o padrão de dados da disciplina" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Esta é a estrutura que a turma mais usou: cada registro é uma <strong>tupla</strong>, e todos os registros ficam numa{' '}
          <strong>lista</strong>. O acesso duplo <code>lista[0][0]</code> foi explicado em aula assim —{' '}
          <em>&ldquo;1ª posição 0 da lista, 2ª posição 0 da tupla&rdquo;</em>.
        </p>
        <MultiCodeBlock
          title="Guardar vários alunos e percorrer os registros"
          code={{
            python: `alunos = [
    ("José da Silva", "000.000.000-00", "Arapiraca", 1998),
    ("Ana Souza",     "111.111.111-11", "Maceió",    2001),
    ("Carlos Lima",   "222.222.222-22", "Arapiraca", 1999),
]

# Primeiro nome: posição 0 da lista, posição 0 da tupla
print(alunos[0][0])       # José da Silva

# Toda sequência pode ser usada no for — listas, tuplas e strings
for aluno in alunos:
    print(aluno[0], "-", aluno[2])

# Só a cidade de cada estudante
for nome, cpf, cidade, ano in alunos:
    print(cidade)`,
          }}
        />
      </Subsection>
      <ExampleBox title="A tarefa da lanchonete (valia um ponto extra)">
        <p>
          O enunciado dado em aula: fazer um sistema para uma lanchonete com um menu de opções — cadastrar um pedido, listar o
          pedido de uma mesa, listar todos os pedidos, imprimir o valor apurado e sair. A instrução de modelagem era explícita:{' '}
          <em>&ldquo;usa uma tupla para representar um pedido e uma lista para armazenar todos os pedidos&rdquo;</em>, no formato{' '}
          <code>(Mesa, Sanduiche, Bebida, Valor Total)</code>.
        </p>
        <p>
          É o mesmo desenho do exemplo acima — e junta tudo: menu com <code>while</code>, condicional encadeada, lista de tuplas e
          soma acumulada.
        </p>
      </ExampleBox>
      <MultiCodeBlock
        title="Esqueleto do sistema de pedidos"
        code={{
          python: `pedidos = []   # cada pedido é uma tupla (mesa, sanduiche, bebida, valor)

def cadastrar():
    mesa = int(input("Mesa: "))
    sanduiche = input("Sanduíche: ")
    bebida = input("Bebida: ")
    valor = float(input("Valor total: "))
    return mesa, sanduiche, bebida, valor      # devolve uma TUPLA

while True:
    print("1 - Cadastrar  2 - Listar mesa  3 - Listar tudo  4 - Apurado  5 - Sair")
    opcao = input("Opção: ")

    if opcao == "1":
        pedidos.append(cadastrar())
    elif opcao == "2":
        mesa = int(input("Mesa: "))
        for p in pedidos:
            if p[0] == mesa:
                print(p)
    elif opcao == "3":
        for p in pedidos:
            print(p)
    elif opcao == "4":
        total = 0
        for p in pedidos:
            total += p[3]        # posição 3 da tupla = valor
        print("Apurado: R$", total)
    elif opcao == "5":
        break
    else:
        print("Opção inválida!")`,
        }}
      />
      <Subsection title="Dicionário / mapa" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda pares <strong>chave → valor</strong>. Diferente de listas e tuplas, o acesso não usa a posição: usa a{' '}
          <strong>chave</strong>, que é única.
        </p>
        <MultiCodeBlock
          title="Guardar e ler pela chave"
          code={{
            python: `aluno = {"nome": "Ana", "idade": 20}

print(aluno["nome"])       # Ana
aluno["cidade"] = "Maceió" # adiciona um par novo

for chave, valor in aluno.items():
    print(chave, "->", valor)`,
            cpp: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, string> aluno;
    aluno["nome"] = "Ana";
    aluno["cidade"] = "Maceió";

    cout << aluno["nome"] << endl;   // Ana

    for (const auto &par : aluno) {
        cout << par.first << " -> " << par.second << endl;
    }
    return 0;
}`,
            java: `import java.util.HashMap;
import java.util.Map;

public class Dicionario {
    public static void main(String[] args) {
        Map<String, String> aluno = new HashMap<>();
        aluno.put("nome", "Ana");
        aluno.put("cidade", "Maceió");

        System.out.println(aluno.get("nome"));   // Ana

        for (Map.Entry<String, String> par : aluno.entrySet()) {
            System.out.println(par.getKey() + " -> " + par.getValue());
        }
    }
}`,
            javascript: `let aluno = { nome: "Ana", idade: 20 };

console.log(aluno["nome"]);   // Ana
console.log(aluno.nome);      // Ana — a notação de ponto também vale
aluno.cidade = "Maceió";

for (const [chave, valor] of Object.entries(aluno)) {
    console.log(chave, "->", valor);
}`,
            php: `<?php
$aluno = ["nome" => "Ana", "idade" => 20];

echo $aluno["nome"];        // Ana
$aluno["cidade"] = "Maceió";

foreach ($aluno as $chave => $valor) {
    echo "$chave -> $valor\\n";
}`,
          }}
        />
      </Subsection>
    </section>
  );
}

const colecoes: ConceptItem[] = [
  { title: 'Lista / Array', description: 'Vários valores em ordem, por índice (começa em 0). Mutável: dá para adicionar, alterar e remover.', accent: 'accent' },
  { title: 'Tupla', description: 'Coleção imutável, escrita com parênteses. É o "registro" da disciplina: os dados de uma pessoa, um pedido fechado.', accent: 'accent4' },
  { title: 'Dicionário / Mapa', description: 'Pares chave→valor, acessados pela chave única — não pela posição. Ideal para associar dados.', accent: 'accent3' },
];

function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Funções e Modularização"
        subtitle="Agrupar instruções para reusar: entrada → processamento → retorno"
        colorClass="text-accent3"
      />
      <HighlightBox title="Por que funções">
        <p>
          Uma <strong>função</strong> agrupa passos que resolvem uma tarefa. Ela recebe <strong>parâmetros</strong> e pode{' '}
          <strong>retornar</strong> um valor. Os ganhos: <strong>reuso</strong>, organização (dividir para conquistar), teste e
          manutenção.
        </p>
      </HighlightBox>
      <Subsection title="De onde vem a necessidade: código repetido" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Em aula, a função não apareceu pronta: apareceu como <strong>solução para um incômodo</strong>. A sequência foi código
          repetido → função → função com parâmetro. Vale refazer esse caminho, porque é ele que explica <em>por que</em> funções
          existem.
        </p>
        <MultiCodeBlock
          title="Os três estágios do mesmo programa"
          code={{
            python: `# 1) Repetido: mesma conta escrita três vezes
print("Área do quadrado de lado 2:", 2 * 2)
print("Área do quadrado de lado 5:", 5 * 5)
print("Área do quadrado de lado 9:", 9 * 9)

# 2) Função sem parâmetro: reusa, mas só serve para UM lado
def area_do_lado_2():
    return 2 * 2

# 3) Função com parâmetro: agora resolve o problema inteiro
def area(lado):
    return lado * lado

for l in [2, 5, 9]:
    print("Área do quadrado de lado", l, ":", area(l))`,
          }}
        />
      </Subsection>
      <Subsection title="Definir e chamar uma função" accentClass="text-accent">
        <MultiCodeBlock
          title="Uma função que soma dois números"
          code={{
            python: `def soma(a, b):
    return a + b

print(soma(3, 4))   # 7`,
            c: `#include <stdio.h>

int soma(int a, int b) {
    return a + b;
}

int main(void) {
    printf("%d\\n", soma(3, 4));   /* 7 */
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int soma(int a, int b) {
    return a + b;
}

int main() {
    cout << soma(3, 4) << endl;   // 7
    return 0;
}`,
            java: `public class Soma {
    // O método fica DENTRO da classe; a chamada, dentro do main
    static int soma(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(soma(3, 4));   // 7
    }
}`,
            javascript: `function soma(a, b) {
    return a + b;
}

console.log(soma(3, 4));   // 7`,
            php: `<?php
function soma($a, $b) {
    return $a + $b;
}

echo soma(3, 4);   // 7`,
          }}
        />
      </Subsection>
      <Subsection title="Retornar vários valores de uma vez" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Em Python uma função devolve <strong>uma tupla</strong> quando você separa os valores por vírgula — é assim que o
          programa de agenda distribuído pelo professor lê uma pessoa inteira num só <code>return</code>.
        </p>
        <MultiCodeBlock
          title="Uma função que devolve um registro completo"
          code={{
            python: `def ler_pessoa():
    print("---Nova pessoa---")
    nome = input("Nome: ")
    cpf = input("CPF: ")
    endereco = input("Endereço: ")
    data_nascimento = input("Data de nascimento: ")
    return nome, cpf, endereco, data_nascimento   # devolve uma tupla

# A chamada guarda a tupla inteira na lista...
pessoas = []
pessoas.append(ler_pessoa())

# ...ou desempacota em variáveis separadas
nome, cpf, endereco, nascimento = ler_pessoa()`,
          }}
        />
      </Subsection>
      <Subsection title="Modularização: criar e importar o seu próprio módulo" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          <strong>Modularizar</strong> é separar o programa em arquivos reutilizáveis. Em aula o passo foi prático: salvar as
          funções num arquivo e importá-las de outro, inclusive com <strong>apelido</strong> (<em>alias</em>) — como em{' '}
          <code>import turtle_grafico as tg</code>. Cada aba abaixo mostra os <strong>dois arquivos</strong>: o que define e o que
          usa.
        </p>
        <MultiCodeBlock
          title="Arquivo que define × arquivo que importa"
          code={{
            python: `# ---------- arquivo: minhas_formas.py ----------
def area_quadrado(lado):
    return lado * lado

def area_retangulo(base, altura):
    return base * altura


# ---------- arquivo: programa.py ----------
import minhas_formas as mf          # "as mf" cria o apelido

print(mf.area_quadrado(3))          # 9
print(mf.area_retangulo(2, 5))      # 10

# Também é possível importar só o que interessa:
# from minhas_formas import area_quadrado`,
            c: `/* ---------- arquivo: formas.h (o cabeçalho: só as assinaturas) ---------- */
#ifndef FORMAS_H
#define FORMAS_H
int area_quadrado(int lado);
#endif

/* ---------- arquivo: formas.c (a implementação) ---------- */
#include "formas.h"
int area_quadrado(int lado) {
    return lado * lado;
}

/* ---------- arquivo: programa.c (quem usa) ---------- */
#include <stdio.h>
#include "formas.h"          /* aspas: arquivo do projeto; <> : da biblioteca */

int main(void) {
    printf("%d\\n", area_quadrado(3));   /* 9 */
    return 0;
}
/* Compila-se os dois .c juntos: gcc programa.c formas.c -o programa */`,
            java: `// ---------- arquivo: Formas.java ----------
public class Formas {
    public static int areaQuadrado(int lado) {
        return lado * lado;
    }
}

// ---------- arquivo: Programa.java ----------
public class Programa {
    public static void main(String[] args) {
        // Mesma pasta/pacote: usa direto. Em outro pacote, seria "import".
        System.out.println(Formas.areaQuadrado(3));   // 9
    }
}`,
            javascript: `// ---------- arquivo: formas.js ----------
export function areaQuadrado(lado) {
    return lado * lado;
}

// ---------- arquivo: programa.js ----------
import { areaQuadrado } from "./formas.js";

console.log(areaQuadrado(3));   // 9`,
            php: `<?php
// ---------- arquivo: formas.php ----------
function area_quadrado($lado) {
    return $lado * $lado;
}

// ---------- arquivo: programa.php ----------
require_once "formas.php";

echo area_quadrado(3);   // 9`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          A aba C mostra por que C e C++ separam <strong>cabeçalho</strong> (<code>.h</code>, as assinaturas) de{' '}
          <strong>implementação</strong> (<code>.c</code>): quem usa a função precisa saber a forma dela, não o corpo. É o mesmo
          <code>pessoa.h</code> que o professor distribuiu no exemplo de arquivos.
        </p>
      </Subsection>
    </section>
  );
}

function EscopoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Escopo e Parâmetros"
        subtitle="Onde uma variável vale e como os dados entram na função"
        colorClass="text-accent4"
      />
      <Subsection title="Escopo: local × global" accentClass="text-accent">
        <ComparisonTable rows={escopo} leftLabel="Local" rightLabel="Global" />
      </Subsection>
      <Subsection title="O parâmetro não existe fora da função" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          O slide de funções é direto: <em>um parâmetro não pode ser usado fora da função</em>. Ele nasce na chamada e morre no{' '}
          <code>return</code>. Tentar lê-lo de fora não é um valor errado — é um erro de nome.
        </p>
        <MultiCodeBlock
          title="A variável local só existe dentro"
          code={{
            python: `def dobro(valor):        # "valor" é local a dobro
    resultado = valor * 2  # "resultado" também
    return resultado

print(dobro(5))          # 10

try:
    print(valor)         # NameError: name 'valor' is not defined
except NameError as erro:
    print("Erro:", erro)`,
            c: `#include <stdio.h>

int dobro(int valor) {       /* valor é local a dobro */
    int resultado = valor * 2;
    return resultado;
}

int main(void) {
    printf("%d\\n", dobro(5));   /* 10 */
    /* printf("%d", valor);  -> erro de compilação: 'valor' undeclared */
    return 0;
}`,
            java: `public class Escopo {
    static int dobro(int valor) {
        int resultado = valor * 2;
        return resultado;
    }

    public static void main(String[] args) {
        System.out.println(dobro(5));   // 10
        // System.out.println(valor);   // erro: cannot find symbol
    }
}`,
            javascript: `function dobro(valor) {
    const resultado = valor * 2;
    return resultado;
}

console.log(dobro(5));   // 10

try {
    console.log(valor);  // ReferenceError: valor is not defined
} catch (erro) {
    console.log("Erro:", erro.message);
}`,
          }}
        />
      </Subsection>
      <Subsection title="Alterar uma variável global de dentro da função" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Aqui as linguagens divergem de verdade. Em Python, atribuir a um nome dentro da função cria uma variável{' '}
          <strong>local</strong> — a global só é alterada se você declarar <code>global</code>. Em C e Java basta a variável estar
          num escopo externo visível.
        </p>
        <MultiCodeBlock
          title="Ler é fácil; escrever exige aviso"
          code={{
            python: `contador = 0

def incrementa_errado():
    contador = contador + 1   # UnboundLocalError: virou variável local!

def incrementa_certo():
    global contador           # avisa que é a global mesmo
    contador = contador + 1

incrementa_certo()
incrementa_certo()
print(contador)   # 2

try:
    incrementa_errado()
except UnboundLocalError as erro:
    print("Erro:", erro)`,
            c: `#include <stdio.h>

int contador = 0;        /* global: visível a todo o arquivo */

void incrementa(void) {
    contador = contador + 1;   /* sem cerimônia: altera a global */
}

int main(void) {
    incrementa();
    incrementa();
    printf("%d\\n", contador);   /* 2 */
    return 0;
}`,
            java: `public class Global {
    // Em Java não há variável "solta": o equivalente é um campo static
    static int contador = 0;

    static void incrementa() {
        contador = contador + 1;
    }

    public static void main(String[] args) {
        incrementa();
        incrementa();
        System.out.println(contador);   // 2
    }
}`,
            javascript: `let contador = 0;

function incrementa() {
    contador = contador + 1;   // altera a de fora, sem declaração especial
}

incrementa();
incrementa();
console.log(contador);   // 2`,
          }}
        />
      </Subsection>
      <Subsection title="Passagem de parâmetros: por valor × por referência" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Ao chamar uma função, os argumentos podem ser passados <strong>por valor</strong> (a função recebe uma cópia — mudanças
          não afetam o original) ou <strong>por referência</strong> (a função acessa o próprio dado — mudanças afetam o original).
        </p>
        <ConceptGrid items={passagem} columns="md:grid-cols-2" />
      </Subsection>
      <Subsection title="Ver a diferença acontecendo" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Este é o ponto em que a comparação entre linguagens mais rende, porque cada uma resolve de um jeito — e o resultado
          impresso muda.
        </p>
        <MultiCodeBlock
          title="A função consegue alterar o que recebeu?"
          code={{
            python: `# Python passa a REFERÊNCIA do objeto. O efeito depende de ele ser
# mutável (lista) ou imutável (int, string, tupla).

def tenta_mudar_numero(n):
    n = n + 1          # rebind: cria um novo int, não afeta o original

def muda_lista(lista):
    lista.append(4)    # mutação de verdade: o original muda

x = 10
tenta_mudar_numero(x)
print(x)          # 10 — inteiro é imutável

itens = [1, 2, 3]
muda_lista(itens)
print(itens)      # [1, 2, 3, 4] — a lista foi alterada`,
            c: `#include <stdio.h>

/* Por valor: recebe uma cópia */
void tenta_mudar(int n) {
    n = n + 1;
}

/* Por referência (simulada com ponteiro): recebe o ENDEREÇO */
void muda_mesmo(int *n) {
    *n = *n + 1;     /* o * acessa o valor apontado */
}

int main(void) {
    int x = 10;

    tenta_mudar(x);
    printf("%d\\n", x);   /* 10 — a cópia mudou, o original não */

    muda_mesmo(&x);       /* & pega o endereço de x */
    printf("%d\\n", x);   /* 11 — agora sim */
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

void tenta_mudar(int n) {     // por valor
    n = n + 1;
}

void muda_mesmo(int &n) {     // por referência: basta o &
    n = n + 1;
}

int main() {
    int x = 10;

    tenta_mudar(x);
    cout << x << endl;   // 10

    muda_mesmo(x);
    cout << x << endl;   // 11
    return 0;
}`,
            java: `import java.util.ArrayList;
import java.util.List;

public class Passagem {
    // Java é SEMPRE por valor — mas o valor de um objeto é uma referência
    static void tentaMudar(int n) {
        n = n + 1;              // muda só a cópia
    }

    static void mudaLista(List<Integer> lista) {
        lista.add(4);           // muda o objeto apontado pela cópia da referência
    }

    static void trocaLista(List<Integer> lista) {
        lista = new ArrayList<>();   // rebind da cópia: não afeta quem chamou
    }

    public static void main(String[] args) {
        int x = 10;
        tentaMudar(x);
        System.out.println(x);        // 10

        List<Integer> itens = new ArrayList<>(List.of(1, 2, 3));
        mudaLista(itens);
        System.out.println(itens);    // [1, 2, 3, 4]

        trocaLista(itens);
        System.out.println(itens);    // [1, 2, 3, 4] — continua a mesma!
    }
}`,
          }}
        />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          Guarde o caso do Java: ele é <strong>sempre por valor</strong>, mas o que se copia é a referência ao objeto. Por isso{' '}
          <code>mudaLista</code> altera a lista e <code>trocaLista</code> não muda nada — a diferença entre{' '}
          <em>mexer no objeto</em> e <em>apontar para outro objeto</em>.
        </p>
      </Subsection>
      <HighlightBox title="Tempo de vida" accent="var(--color-accent5)">
        <p>
          Uma variável <strong>local</strong> nasce quando a função é chamada e é &ldquo;esquecida&rdquo; quando a função termina.
          Já a <strong>global</strong> vive durante toda a execução do programa.
        </p>
      </HighlightBox>
    </section>
  );
}

const escopo: ComparisonRow[] = [
  { criterion: 'Onde é válida', left: 'Só dentro da função/bloco onde foi criada', right: 'Em todo o programa' },
  { criterion: 'Tempo de vida', left: 'Existe durante a execução da função', right: 'Existe enquanto o programa roda' },
  { criterion: 'Uso recomendado', left: 'Preferível — evita efeitos colaterais', right: 'Com moderação — pode gerar acoplamento' },
];

const passagem: ConceptItem[] = [
  { title: 'Por valor', description: 'A função recebe uma cópia do dado. Alterar o parâmetro não muda a variável original de quem chamou.', accent: 'accent' },
  { title: 'Por referência', description: 'A função recebe acesso ao dado original. Alterá-lo dentro da função reflete fora dela.', accent: 'accent3' },
];

function StringsSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Strings" subtitle="Trabalhar com texto: uma sequência de caracteres" colorClass="text-accent2" />
      <HighlightBox title="String é uma sequência">
        <p>
          Uma <strong>string</strong> é uma sequência de caracteres, indexada a partir do <strong>zero</strong>. Dá para medir o
          tamanho, acessar um caractere pela posição, concatenar com <code>+</code> e extrair um pedaço
          (fatiamento/substring).
        </p>
      </HighlightBox>
      <Subsection title="Índice: cada caractere tem uma posição" accentClass="text-accent">
        <MultiCodeBlock
          title="Acessar caractere por caractere"
          code={{
            python: `nome = "jose da silva jr"
#        0123456789...

print(nome[0])     # j
print(nome[5])     # a
print(nome[-1])    # r  — índice negativo conta do fim
print(len(nome))   # 16`,
          }}
        />
      </Subsection>
      <Subsection title="Tamanho, concatenação e maiúsculas" accentClass="text-accent3">
        <MultiCodeBlock
          title="As operações mais usadas"
          code={{
            python: `nome = "Ana"
print(len(nome))          # 3
print(nome + " Silva")    # Ana Silva
print(nome.upper())       # ANA
print(nome.lower())       # ana`,
            c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    char nome[50] = "Ana";

    printf("%zu\\n", strlen(nome));   /* 3 — conta bytes até o \\0 */

    strcat(nome, " Silva");           /* concatena no próprio vetor */
    printf("%s\\n", nome);            /* Ana Silva */

    /* C não tem "upper" pronto: percorre-se caractere a caractere */
    for (int i = 0; nome[i] != '\\0'; i++) {
        nome[i] = toupper((unsigned char) nome[i]);
    }
    printf("%s\\n", nome);            /* ANA SILVA */
    return 0;
}`,
            cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string nome = "Ana";

    cout << nome.length() << endl;      // 3
    cout << nome + " Silva" << endl;    // Ana Silva

    // C++ não tem "upper" pronto; usa-se transform()
    string maiusculo = nome;
    transform(maiusculo.begin(), maiusculo.end(), maiusculo.begin(), ::toupper);
    cout << maiusculo << endl;          // ANA
    return 0;
}`,
            java: `public class Strings {
    public static void main(String[] args) {
        String nome = "Ana";

        System.out.println(nome.length());       // 3
        System.out.println(nome + " Silva");     // Ana Silva
        System.out.println(nome.toUpperCase());  // ANA
        System.out.println(nome.toLowerCase());  // ana
    }
}`,
            javascript: `let nome = "Ana";

console.log(nome.length);          // 3
console.log(nome + " Silva");      // Ana Silva
console.log(nome.toUpperCase());   // ANA
console.log(nome.toLowerCase());   // ana`,
            php: `<?php
$nome = "Ana";

echo strlen($nome);        // 3  — CUIDADO: conta BYTES, não caracteres
echo mb_strlen($nome);     // 3  — mb_strlen conta caracteres (o certo p/ acentos)
echo $nome . " Silva";     // Ana Silva
echo strtoupper($nome);    // ANA`,
          }}
        />
      </Subsection>
      <ExampleBox title="Cuidado: strlen conta bytes, não caracteres" accent="var(--color-accent5)">
        <p>
          As funções de &ldquo;tamanho&rdquo; das cinco linguagens <strong>não são equivalentes</strong>. O{' '}
          <code>strlen</code> do PHP e o do C contam <strong>bytes</strong>. Com <code>&quot;Ana&quot;</code> dá 3, porque são
          três letras ASCII — mas com <code>&quot;maçã&quot;</code>, que tem dois caracteres acentuados, o resultado é{' '}
          <strong>6</strong>, e não 4, porque em UTF-8 cada acentuado ocupa dois bytes.
        </p>
        <p>
          Em material em português isso aparece o tempo todo. O equivalente correto de <code>len()</code> em PHP é{' '}
          <code>mb_strlen()</code>. Em Python 3, <code>len()</code> já conta caracteres.
        </p>
      </ExampleBox>
      <MultiCodeBlock
        title="A diferença com uma palavra acentuada"
        code={{
          python: `palavra = "maçã"
print(len(palavra))              # 4 — Python conta caracteres
print(len(palavra.encode()))     # 6 — em bytes UTF-8, para comparar`,
          php: `<?php
$palavra = "maçã";
echo strlen($palavra);      // 6  — bytes!
echo mb_strlen($palavra);   // 4  — caracteres (o que você queria)`,
        }}
      />
      <Subsection title="Fatiamento (substring)" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Extrair um pedaço da string. Atenção ao <strong>segundo argumento</strong>: em Python e JavaScript ele é o{' '}
          <em>índice final</em> (que não entra); em PHP, C++ e Java o <code>substr</code>/<code>substring</code> se comporta de
          outro jeito. Generalizar o <code>[início:fim]</code> do Python para as outras linguagens produz erro.
        </p>
        <MultiCodeBlock
          title="Pegar os 4 primeiros caracteres e o resto"
          code={{
            python: `palavra = "programação"

print(palavra[0:4])   # prog     — do 0 ao 3; o fim NÃO entra
print(palavra[:4])    # prog     — do início
print(palavra[4:])    # ramação  — até o fim
print(palavra[-3:])   # ção      — os três últimos`,
            java: `public class Fatiar {
    public static void main(String[] args) {
        String palavra = "programação";

        // substring(inicio, fim) — igual ao Python: o fim não entra
        System.out.println(palavra.substring(0, 4));   // prog
        System.out.println(palavra.substring(4));      // ramação
    }
}`,
            javascript: `const palavra = "programação";

// slice(inicio, fim) — o fim não entra, como no Python
console.log(palavra.slice(0, 4));   // prog
console.log(palavra.slice(4));      // ramação
console.log(palavra.slice(-3));     // ção`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string palavra = "programacao";   // sem acento: substr conta bytes

    // ATENÇÃO: substr(inicio, QUANTIDADE) — o 2º argumento é o TAMANHO
    cout << palavra.substr(0, 4) << endl;   // prog
    cout << palavra.substr(4) << endl;      // ramacao
    return 0;
}`,
            php: `<?php
$palavra = "programacao";   // sem acento: substr conta bytes

// ATENÇÃO: substr(texto, inicio, TAMANHO) — o 3º argumento é o TAMANHO,
// não o índice final. substr($p, 0, 4) NÃO é o mesmo que $p[0:4]... é coincidência
// aqui porque início = 0. Compare: em Python p[2:4] pega 2 caracteres;
// em PHP substr($p, 2, 4) pega 4.
echo substr($palavra, 0, 4);   // prog
echo substr($palavra, 4);      // ramacao
echo mb_substr($palavra, 0, 4); // versão segura para acentos`,
          }}
        />
      </Subsection>
      <Subsection title="Substituir e dividir" accentClass="text-accent5">
        <MultiCodeBlock
          title="replace e split"
          code={{
            python: `frase = "banana com banana"

print(frase.replace("banana", "maçã"))   # maçã com maçã

partes = frase.split(" ")
print(partes)        # ['banana', 'com', 'banana']
print(partes[0])     # banana

print(" - ".join(partes))   # banana - com - banana`,
            java: `import java.util.Arrays;

public class Texto {
    public static void main(String[] args) {
        String frase = "banana com banana";

        System.out.println(frase.replace("banana", "maçã"));

        String[] partes = frase.split(" ");
        System.out.println(Arrays.toString(partes));
        System.out.println(String.join(" - ", partes));
    }
}`,
            javascript: `const frase = "banana com banana";

console.log(frase.replaceAll("banana", "maçã"));

const partes = frase.split(" ");
console.log(partes);            // [ 'banana', 'com', 'banana' ]
console.log(partes.join(" - "));`,
          }}
        />
      </Subsection>
    </section>
  );
}

function TiposUsuarioSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Tipos de Dados Definidos pelo Usuário"
        subtitle="Quando os tipos primitivos não bastam: criar o seu próprio tipo"
        colorClass="text-accent5"
      />
      <HighlightBox title="Por que criar um tipo">
        <p>
          Os tipos primitivos descrevem <em>um</em> valor. Mas os dados do mundo real vêm em conjunto: uma pessoa tem nome{' '}
          <strong>e</strong> idade; um pedido tem mesa, sanduíche, bebida <strong>e</strong> valor. Um{' '}
          <strong>tipo definido pelo usuário</strong> agrupa esses campos sob um nome só, para que o programa fale a linguagem do
          problema — <code>pessoa</code>, e não &ldquo;um vetor de char e um int soltos&rdquo;.
        </p>
        <p>
          A ementa nomeia este item, e ele é a ponte natural para <strong>Programação Orientada a Objetos</strong>: a classe de POO
          é este agrupamento acrescido de comportamento.
        </p>
      </HighlightBox>
      <Subsection title="O struct que o professor distribuiu" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Este é literalmente o <code>pessoa.h</code> do exemplo de arquivos entregue à turma — o mesmo tipo que torna possível
          gravar e ler os registros do projeto em C.
        </p>
        <MultiCodeBlock
          title="Definir um tipo e usar seus campos"
          code={{
            c: `#include <stdio.h>
#include <string.h>

/* typedef struct: dá o nome "pessoa" ao agrupamento */
typedef struct {
    char nome[100];
    int idade;
} pessoa;

int main(void) {
    pessoa p;

    strcpy(p.nome, "Ana");    /* o ponto acessa cada campo */
    p.idade = 20;

    printf("Nome = %s / idade = %d\\n", p.nome, p.idade);

    /* Um vetor de pessoas: 50 registros do MESMO tipo */
    pessoa turma[50];
    for (int i = 0; i < 3; i++) {
        sprintf(turma[i].nome, "pessoa %d", i);
        turma[i].idade = i;
    }
    printf("%s tem %d\\n", turma[2].nome, turma[2].idade);
    return 0;
}`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

struct Pessoa {          // em C++ o typedef é dispensável
    string nome;
    int idade;
};

int main() {
    Pessoa p;
    p.nome = "Ana";
    p.idade = 20;

    cout << p.nome << " / " << p.idade << endl;
    return 0;
}`,
            python: `# Python: a dataclass é a forma direta de declarar um tipo próprio
from dataclasses import dataclass

@dataclass
class Pessoa:
    nome: str
    idade: int

p = Pessoa("Ana", 20)
print(p.nome, p.idade)     # Ana 20
print(p)                   # Pessoa(nome='Ana', idade=20)

# Sem dataclass, um dicionário faz o papel — sem checagem de campos:
outra = {"nome": "Carlos", "idade": 31}
print(outra["nome"])`,
            java: `// record: a forma curta de declarar um tipo de dados em Java
record Pessoa(String nome, int idade) { }

public class TiposProprios {
    public static void main(String[] args) {
        Pessoa p = new Pessoa("Ana", 20);

        System.out.println(p.nome() + " / " + p.idade());
        System.out.println(p);   // Pessoa[nome=Ana, idade=20]
    }
}`,
            javascript: `// JS não tem struct: usa-se objeto literal ou classe
const p = { nome: "Ana", idade: 20 };
console.log(p.nome, p.idade);

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const q = new Pessoa("Carlos", 31);
console.log(q.nome, q.idade);`,
            php: `<?php
class Pessoa {
    public function __construct(
        public string $nome,
        public int $idade
    ) {}
}

$p = new Pessoa("Ana", 20);
echo $p->nome . " / " . $p->idade;`,
          }}
        />
      </Subsection>
      <TheoryBlock title="Do struct para a classe">
        <p>
          Repare no que muda entre as abas: em C o <code>struct</code> guarda <strong>só dados</strong>; em Java, Python e PHP o
          mesmo agrupamento já vem numa <code>class</code>, que pode ter <strong>métodos</strong>. Essa é a passagem do paradigma
          procedural para o orientado a objetos — o assunto da disciplina seguinte.
        </p>
      </TheoryBlock>
    </section>
  );
}

function ArquivosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader
        title="Persistência em Arquivo"
        subtitle="Fazer os dados sobreviverem ao fim do programa"
        colorClass="text-accent3"
      />
      <HighlightBox title="Por que isto importa">
        <p>
          Tudo que está em variável vive na memória e <strong>desaparece quando o programa termina</strong>. Para que os dados
          continuem existindo é preciso gravá-los num arquivo. Foi exatamente o ponto de dor do projeto final da turma — o próprio
          representante registrou que a maior dificuldade era &ldquo;permanecer os dados&rdquo;, e o professor escreveu um exemplo
          em C só para isso.
        </p>
      </HighlightBox>
      <Subsection title="Abrir, ler, escrever e fechar" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Em Python, a função <code>open()</code> tem <strong>três argumentos principais</strong>: o nome do arquivo (com o caminho
          até ele), o <strong>modo</strong> de abertura e o <strong>encoding</strong>. E, como lembra o slide: todo arquivo deve
          ser fechado depois de ler ou escrever — o <code>with</code> faz isso sozinho.
        </p>
        <ConceptGrid items={modosArquivo} columns="md:grid-cols-3" />
      </Subsection>
      <Subsection title="Arquivo de texto" accentClass="text-accent4">
        <MultiCodeBlock
          title="Escrever e depois ler de volta"
          code={{
            python: `# ESCREVER — o modo "w" apaga o conteúdo anterior
with open("alunos.txt", "w", encoding="utf-8") as f:
    f.write("Ana;20\\n")
    f.write("Carlos;31\\n")
# o with fecha o arquivo sozinho ao sair do bloco

# ANEXAR — o modo "a" mantém o que já existe
with open("alunos.txt", "a", encoding="utf-8") as f:
    f.write("Bruna;22\\n")

# LER — o modo "r" é o padrão
with open("alunos.txt", "r", encoding="utf-8") as f:
    for linha in f:
        nome, idade = linha.strip().split(";")
        print(nome, "tem", idade, "anos")`,
            c: `#include <stdio.h>

int main(void) {
    /* "w" escreve do zero; "a" anexa; "r" lê */
    FILE *f = fopen("alunos.txt", "w");
    if (!f) {
        printf("Não é possível abrir o arquivo!\\n");
        return -1;
    }
    fprintf(f, "Ana;20\\n");
    fprintf(f, "Carlos;31\\n");
    fclose(f);                    /* todo arquivo deve ser fechado */

    f = fopen("alunos.txt", "r");
    if (!f) return -1;

    char nome[100];
    int idade;
    while (fscanf(f, "%99[^;];%d\\n", nome, &idade) == 2) {
        printf("%s tem %d anos\\n", nome, idade);
    }
    fclose(f);
    return 0;
}`,
            java: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Arquivos {
    public static void main(String[] args) throws IOException {
        // ESCREVER (o segundo argumento true = anexar)
        try (FileWriter w = new FileWriter("alunos.txt")) {
            w.write("Ana;20\\n");
            w.write("Carlos;31\\n");
        }

        // LER
        try (BufferedReader r = new BufferedReader(new FileReader("alunos.txt"))) {
            String linha;
            while ((linha = r.readLine()) != null) {
                String[] campos = linha.split(";");
                System.out.println(campos[0] + " tem " + campos[1] + " anos");
            }
        }
    }
}`,
          }}
        />
      </Subsection>
      <TheoryBlock title="Encoding: por que o acento estraga o arquivo">
        <p>
          Como explica o material: uma string é uma sequência de <strong>caracteres</strong>, mas um arquivo em disco é uma
          sequência de <strong>bytes</strong>. O <em>encoding</em> é a regra que converte um no outro. Se você grava em UTF-8 e lê
          supondo outra codificação, os acentos viram símbolos estranhos. Por isso vale sempre declarar{' '}
          <code>encoding=&quot;utf-8&quot;</code>.
        </p>
      </TheoryBlock>
      <Subsection title="Arquivo binário: o exemplo do projeto em C" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Além do texto, dá para gravar a <strong>imagem exata dos bytes</strong> de um registro. É o que o exemplo distribuído
          pelo professor faz: grava 50 <code>pessoa</code> de uma vez com <code>fwrite</code> e as lê de volta com{' '}
          <code>fread</code>. A vantagem é que o registro volta pronto, sem precisar interpretar texto; a desvantagem é que o
          arquivo deixa de ser legível por humanos.
        </p>
        <MultiCodeBlock
          title="Gravar e ler registros binários (baseado no exemplo da turma)"
          code={{
            c: `#include <stdio.h>

typedef struct {
    char nome[100];
    int idade;
} pessoa;

int main(void) {
    /* ---------- GRAVAR ---------- */
    pessoa p[50];
    for (int i = 0; i < 50; i++) {
        sprintf(p[i].nome, "pessoa %d", i);
        p[i].idade = i;
    }

    FILE *f = fopen("pessoas.bin", "wb");   /* b = binário */
    if (!f) {
        printf("Não é possível abrir o arquivo!\\n");
        return -1;
    }
    fwrite(p, sizeof(pessoa), 50, f);       /* 50 registros de uma vez */
    fclose(f);

    /* ---------- LER ---------- */
    f = fopen("pessoas.bin", "rb");
    if (!f) {
        printf("Não é possível ler o arquivo!\\n");
        return -1;
    }

    fseek(f, 0L, SEEK_END);                  /* vai ao fim... */
    int tamanho = ftell(f) / sizeof(pessoa); /* ...para contar os registros */
    printf("Número de pessoas = %d\\n", tamanho);
    rewind(f);                               /* volta ao início para ler */

    pessoa lidas[50];
    fread(lidas, sizeof(pessoa), 50, f);

    for (int i = 0; i < 3; i++) {
        printf("Nome = %s / idade = %d\\n", lidas[i].nome, lidas[i].idade);
    }
    fclose(f);
    return 0;
}`,
            python: `# O equivalente em Python para registros estruturados
import struct

FORMATO = "100si"                     # 100 chars + 1 inteiro
TAMANHO = struct.calcsize(FORMATO)

# GRAVAR
with open("pessoas.bin", "wb") as f:
    for i in range(50):
        nome = f"pessoa {i}".encode("utf-8")
        f.write(struct.pack(FORMATO, nome, i))

# LER
with open("pessoas.bin", "rb") as f:
    dados = f.read()

print("Número de pessoas =", len(dados) // TAMANHO)

for i in range(3):
    bloco = dados[i * TAMANHO:(i + 1) * TAMANHO]
    nome, idade = struct.unpack(FORMATO, bloco)
    print("Nome =", nome.rstrip(b"\\x00").decode(), "/ idade =", idade)`,
          }}
        />
      </Subsection>
      <ComparisonTable rows={textoBinario} leftLabel="Arquivo de texto" rightLabel="Arquivo binário" />
    </section>
  );
}

const modosArquivo: ConceptItem[] = [
  { title: 'r — read (leitura)', description: 'Abre para ler. É o modo padrão. Se o arquivo não existir, dá erro.', accent: 'accent' },
  { title: 'w — write (escrita)', description: 'Apaga o que houver e começa a escrever do início. Cria o arquivo se ele não existir.', accent: 'accent4' },
  { title: 'a — append (anexo)', description: 'Mantém o conteúdo e escreve depois do último caractere. Também cria o arquivo se preciso.', accent: 'accent3' },
];

const textoBinario: ComparisonRow[] = [
  { criterion: 'O que grava', left: 'Caracteres, conforme um encoding', right: 'Os bytes exatos do dado na memória' },
  { criterion: 'Legibilidade', left: 'Abre em qualquer editor de texto', right: 'Ilegível fora do programa que o gravou' },
  { criterion: 'Para ler de volta', left: 'É preciso interpretar (split, conversão)', right: 'O registro volta pronto (fread)' },
  { criterion: 'Uso típico', left: 'Logs, CSV, configuração', right: 'Registros de tamanho fixo, desempenho' },
];

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={LPGM_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={LPGM_GUIDE_CONTEXT} topics={LPGM_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={LPGM_EXAMS} />}
        aiKahoot={<AIKahootQuiz guideContext={LPGM_GUIDE_CONTEXT} topics={LPGM_TOPICS} />}
      />
    </section>
  );
}

interface LPGMSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de LPGM_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<LPGMSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  conceitos: ConceitosSection,
  paradigmas: ParadigmasSection,
  tipos: TiposSection,
  io: IOSection,
  controle: ControleSection,
  colecoes: ColecoesSection,
  funcoes: FuncoesSection,
  escopo: EscopoSection,
  strings: StringsSection,
  'tipos-usuario': TiposUsuarioSection,
  arquivos: ArquivosSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is LPGMSectionId {
  return id in SECTION_COMPONENTS;
}

export default function LPGMSections({ activeSection }: LPGMSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
