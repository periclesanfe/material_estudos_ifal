import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, TheoryBlock } from '../../../components/sections';

export default function JavaJvmSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Java, JVM e Bytecode"
        subtitle="Por que Java existe, o que acontece quando você compila, e a diferença entre JRE e JDK"
        colorClass="text-accent"
      />

      <TheoryBlock title="O problema que o Java veio resolver">
        <p>
          Antes do Java, um programa em C precisava de um <strong>compilador diferente para cada sistema
          operacional</strong>: o executável gerado para Windows não rodava no Linux nem no Mac. A Sun Microsystems
          criou o Java em 1995 exatamente para quebrar essa amarra — o lema é{' '}
          <strong>"Write Once, Run Anywhere"</strong>: escreva uma vez, rode em qualquer lugar (computador, TV, até
          geladeira, na visão da época).
        </p>
        <p>
          A solução tem duas peças. O compilador <code>javac</code> não gera código de máquina: gera{' '}
          <strong>bytecode</strong>, um código intermediário único, salvo no arquivo <code>.class</code>. Quem
          entende esse bytecode é a <strong>JVM (Java Virtual Machine)</strong> — e ela, sim, é específica de cada
          sistema operacional. O programa compilado é um só; muda apenas a JVM instalada em cada máquina.
        </p>
      </TheoryBlock>

      <Subsection title="Características da linguagem" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Orientada a objetos',
              description: 'O paradigma central da linguagem: herança, polimorfismo, encapsulamento — o assunto do resto da disciplina.',
              accent: 'accent',
            },
            {
              title: 'Sintaxe da família C',
              description: 'Chaves, ponto e vírgula, if/for/while como em C/C++ — quem veio de ALPG reconhece a estrutura.',
              accent: 'accent2',
            },
            {
              title: 'Case sensitive',
              description: 'System ≠ system. Trocar uma maiúscula é erro de compilação — a pegadinha mais barata das provas.',
              accent: 'accent3',
            },
            {
              title: 'Fortemente tipada',
              description: 'Toda variável tem tipo definido e o compilador cobra coerência — a base do capítulo de casting.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A anatomia do primeiro programa" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          A aula constrói o Hello World de dentro para fora: um <code>System.out.println</code> sozinho não
          compila — toda instrução precisa viver dentro de um <strong>método</strong>; o método executado ao
          iniciar o programa é o <code>main</code>; e todo método precisa viver dentro de uma{' '}
          <strong>classe</strong>. Regra prática: o arquivo deve ter o mesmo nome da classe.
        </p>
        <CodeBlock
          language="java"
          title="HelloWorld.java — o nome do arquivo deve ser igual ao da classe"
          code={`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}
        />
      </Subsection>

      <Subsection title="Compilando e executando no terminal" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="O ciclo javac → .class → java"
          code={`// 1. compilar: gera HelloWorld.class (bytecode)
//    javac HelloWorld.java
//
// 2. executar: a JVM interpreta o bytecode
//    java HelloWorld
//
// 3. curiosidade: desmontar o bytecode
//    javap -c HelloWorld`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O bytecode ainda é razoavelmente legível — por isso existem ofuscadores (como o ProGuard) que
          "embaralham" as classes de produtos comerciais.
        </p>
      </Subsection>

      <Subsection title="JRE × JDK" accentClass="text-accent4">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="JRE (Runtime Environment)"
          rightLabel="JDK (Development Kit)"
          rows={[
            { criterion: 'O que contém', left: 'JVM + bibliotecas do Java', right: 'JRE inteira + ferramentas de desenvolvimento (javac, javap…)' },
            { criterion: 'Para que serve', left: 'Apenas EXECUTAR aplicações Java', right: 'DESENVOLVER (compilar) e executar' },
            { criterion: 'Quem instala', left: 'O usuário final do programa', right: 'O programador' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Nota de atualização" accent="var(--color-accent4)">
        <p>
          Os slides da turma citam o Java 8 (2014) como versão atual — retrato da época em que foram escritos.
          Hoje o Java tem lançamentos semestrais e versões LTS mais novas (11, 17, 21…), mas nada do conteúdo da
          disciplina muda por isso: bytecode, JVM, JRE/JDK e toda a OO funcionam do mesmo jeito.
        </p>
      </HighlightBox>
    </section>
  );
}
