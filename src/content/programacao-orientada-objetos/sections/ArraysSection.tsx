import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function ArraysSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arrays e Matrizes"
        subtitle="Coleções de tamanho fixo, o índice que começa em zero e a exceção que só aparece em execução"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que arrays existem">
        <p>
          Guardar a idade de 100 alunos em <code>idade1, idade2, … idade100</code> não escala — e às vezes nem se
          sabe a quantidade em tempo de programação. O <strong>array</strong> guarda uma coleção de valores{' '}
          <strong>de um mesmo tipo</strong> sob um único nome. Três fatos fundamentais da aula:{' '}
          <code>int[]</code> é um <strong>tipo</strong>; o array é sempre um <strong>objeto</strong> (criado com{' '}
          <code>new</code>); e a variável é uma <strong>referência</strong> a ele.
        </p>
      </TheoryBlock>

      <Subsection title="Declarar, instanciar, usar" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="O ciclo completo de um array"
          code={`int[] idades;                 // declara (int[] é um tipo)
idades = new int[10];         // instancia: 10 posições, índices 0 a 9

idades[0] = 10;               // atribuição por índice
idades[5] = 28;

int tamanho = idades.length;  // 10 — length é propriedade, sem parênteses

for (int i = 0; i < idades.length; i++) {   // percorrer com for
    System.out.println(idades[i]);          // posições não preenchidas: 0
}

for (int idade : idades) {    // ou com for-each
    System.out.println(idade);
}`}
        />
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Índice começa em 0', description: 'new int[12] tem posições 0 a 11. A posição 12 NÃO existe.', accent: 'accent' },
            { title: 'Tamanho fixo', description: 'Definido no new e imutável para sempre. Lista que cresce é ArrayList — capítulo de polimorfismo.', accent: 'accent2' },
            { title: 'Valor padrão', description: 'Posições numéricas não preenchidas valem 0 (boolean: false; referências: null).', accent: 'accent3' },
          ]}
        />
      </Subsection>

      <ExampleBox title="A exceção que o compilador NÃO pega">
        <CodeBlock
          language="java"
          title="Compila, roda… e explode"
          code={`int[] idades = new int[12];
System.out.println(idades[13]);
// Compila normalmente. Em EXECUÇÃO:
// Exception in thread "main"
//   java.lang.ArrayIndexOutOfBoundsException: 13`}
        />
        <p>
          O compilador não confere índices — o estouro é erro de <strong>execução</strong>{' '}
          (<code>ArrayIndexOutOfBoundsException</code>). Contraste com o acesso a atributo <code>private</code>, que
          é erro de <strong>compilação</strong>: saber classificar cada erro é questão recorrente.
        </p>
      </ExampleBox>

      <Subsection title="Utilitário pronto: Arrays.sort" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="Ordenando os chutes do Jogo da Adivinhação"
          code={`import java.util.Arrays;

int[] chutes = new int[10];
// ... jogo preenche os chutes ...
Arrays.sort(chutes);          // ordena em ordem crescente, in-place`}
        />
      </Subsection>

      <Subsection title="Matrizes: arrays de arrays" accentClass="text-accent4">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Um array <strong>multidimensional</strong> usa um índice por dimensão — na prática, é um{' '}
          <strong>"array de arrays"</strong>. O caso motivador da aula: 2 notas por bimestre, 4 bimestres.
        </p>
        <CodeBlock
          language="java"
          title="Matriz 4×2 percorrida com for aninhado"
          code={`double[][] notas = new double[4][2];   // 4 linhas (bimestres) × 2 colunas (notas)

for (int i = 0; i < notas.length; i++) {          // notas.length → 4 linhas
    for (int j = 0; j < notas[i].length; j++) {   // notas[i].length → 2 colunas
        notas[i][j] = in.nextDouble();
    }
}`}
        />
      </Subsection>

      <HighlightBox title="length × length()" accent="var(--color-accent3)">
        <p>
          Array usa a <strong>propriedade</strong> <code>length</code>, sem parênteses; String usa o{' '}
          <strong>método</strong> <code>length()</code>, com parênteses. Misturar os dois é erro de compilação e
          pegadinha de prova garantida.
        </p>
      </HighlightBox>
    </section>
  );
}
