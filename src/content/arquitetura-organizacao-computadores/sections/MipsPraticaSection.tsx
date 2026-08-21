import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function MipsPraticaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="MIPS na Prática"
        subtitle="A progressão dos exemplos do professor, com o código de alto nível ao lado do assembly"
        colorClass="text-accent"
        badge="2ª Prova · Trabalho"
      />

      <HighlightBox title="Como estudar esta seção">
        <p>
          O professor distribuiu quinze exemplos numerados, e quase todos trazem no cabeçalho{' '}
          <strong>o código equivalente em C ou Python comentado</strong>. Essa escolha didática é o ponto central:
          assembly não se aprende decorando instruções, e sim vendo a <em>tradução</em> de uma construção que
          você já conhece. Todos os trechos abaixo seguem essa forma.
        </p>
      </HighlightBox>

      <Subsection title="A ordem dos exemplos" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Hello world — o esqueleto mínimo',
            'Entrada e saída — ler inteiro, float e string',
            'Aritmética — soma com constante e entre registradores',
            'Comparação com e sem sinal (slt / sltu)',
            'Estrutura condicional (IF)',
            'Laços (FOR)',
            'Leitura e escrita da memória · arrays',
            'Uso da pilha',
            'Rotinas e rotinas com argumentos',
            'Rotinas recursivas',
            'Deslocamento de bits · and · or · not',
            'Ponto flutuante',
          ]}
        />
      </Subsection>

      <Subsection title="Entrada e saída, e aritmética" accentClass="text-accent3">
        <ExampleBox title="Somar dois números lidos do teclado">
          <CodeBlock
            language="mips"
            code={`# Equivalente em Python:
#   a = int(input())
#   b = int(input())
#   print(a + b)

.text
    li    $v0, 5         # 5 = read_int
    syscall              # o valor lido volta em $v0
    move  $s0, $v0       # guarda em $s0, porque $v0 será reutilizado

    li    $v0, 5         # lê o segundo número
    syscall
    move  $s1, $v0

    add   $s2, $s1, $s0  # $s2 = $s1 + $s0

    move  $a0, $s2       # o que se imprime tem de estar em $a0
    li    $v0, 1         # 1 = print_int
    syscall`}
          />
          <p className="mt-3">
            Repare no <code className="text-accent2">move $s0, $v0</code> logo após a primeira leitura: sem ele, a
            segunda syscall sobrescreveria o valor. Esse é o hábito fundamental do assembly — os registradores
            especiais são de passagem, não de armazenamento.
          </p>
          <p>
            Para somar uma constante, usa-se <code className="text-accent2">addi $t0, $t0, 5</code>: o{' '}
            <strong>i</strong> final indica <em>immediate</em>, ou seja, o operando está na própria instrução.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A estrutura condicional" accentClass="text-accent4">
        <TheoryBlock title="Por que o teste aparece invertido">
          <p>
            Em assembly a execução segue sequencialmente por padrão: a instrução seguinte é a próxima da memória.
            Isso muda a forma de escrever um <code className="text-accent2">if</code>. O bloco "então" fica{' '}
            <strong>logo abaixo</strong> do teste e não custa desvio nenhum; só o caso falso precisa saltar.
          </p>
          <p>
            Por isso o desvio testa a <strong>condição negada</strong>: para "se A == B", escreve-se{' '}
            <code className="text-accent2">bne</code> — desvie <em>se forem diferentes</em>.
          </p>
        </TheoryBlock>
        <ExampleBox title="Lê dois valores e indica se são iguais">
          <CodeBlock
            language="mips"
            code={`# Equivalente em C:
#   if (a == b) printf("Os valores sao iguais");
#   else        printf("Os valores sao diferentes");

    bne   $s0, $s1, ELSE   # condição NEGADA: se forem DIFERENTES, pule para ELSE
IF:
    la    $a0, msg_iguais  # caso verdadeiro: cai aqui naturalmente
    li    $v0, 4
    syscall
    j     SAIDA            # sem este salto, o else também executaria
ELSE:
    la    $a0, msg_difs
    li    $v0, 4
    syscall
SAIDA:
    li    $v0, 10
    syscall`}
          />
          <p className="mt-3">
            O <code className="text-accent2">j SAIDA</code> ao final do bloco verdadeiro não é opcional: sem ele a
            execução simplesmente continuaria para dentro do ELSE, imprimindo as duas mensagens. É o erro mais
            comum de quem está começando.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Laços" accentClass="text-accent5">
        <ExampleBox title="Um for de 0 até n">
          <CodeBlock
            language="mips"
            code={`# Equivalente em C:
#   for (i = 0; i < n; i++) printf("%d\\n", i);

    move  $s0, $zero     # i = 0 — usar $zero é o idioma para "zerar"
    li    $v0, 5         # lê n
    syscall
    move  $s1, $v0       # $s1 = n (limite)

FOR:
    beq   $s0, $s1, SAIDA  # teste NO TOPO: se i == n, sai do laço

    move  $a0, $s0         # corpo: imprime i
    li    $v0, 1
    syscall

    addi  $s0, $s0, 1      # i++
    j     FOR              # volta ao teste
SAIDA:`}
          />
          <p className="mt-3">
            A estrutura de um laço em assembly tem sempre estas quatro partes: rótulo de entrada, teste de saída,
            corpo com incremento e salto incondicional de volta. Trocar a ordem do teste (colocá-lo no fim) muda
            a semântica — vira um <code className="text-accent2">do...while</code>, que executa ao menos uma vez.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Arrays: o índice que anda de 4 em 4" accentClass="text-accent">
        <ExampleBox title="Acessando um vetor declarado com .word">
          <CodeBlock
            language="mips"
            code={`# Equivalente em C:
#   int c[15] = {3, 0, 1, 2, -6, -2, 4, 10, 3, 7, 8, -9, -15, -20, -87};
#   a = b + c[2];

.data
    c: .word 3, 0, 1, 2, -6, -2, 4, 10, 3, 7, 8, -9, -15, -20, -87, 0

.text
    la    $s2, c          # $s2 = ENDEREÇO-BASE do vetor
    lw    $t0, 8($s2)     # lê c[2] — e não c[8]!
                          # o índice cresce de 4 em 4 por conta do tamanho do word`}
          />
          <p className="mt-3">
            Este é o comentário-chave do material, e vale memorizar: <strong>o deslocamento é contado em bytes</strong>.
            Como cada <code className="text-accent2">.word</code> ocupa 4 bytes, o elemento de índice <em>i</em>{' '}
            está no deslocamento <strong>4i</strong>: índice 0 no deslocamento 0, índice 1 no 4, índice 2 no 8.
            Para chegar ao índice 8 seria preciso deslocamento 32.
          </p>
          <p>
            Num laço que percorre o vetor, portanto, o endereço avança somando 4 a cada iteração — não 1.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Ponto flutuante" accentClass="text-accent2">
        <ExampleBox title="Lê dois floats, calcula (a × b) / 3.0 e imprime">
          <CodeBlock
            language="mips"
            code={`# Equivalente em Python:
#   a = float(input("Digite um float A: "))
#   b = float(input("Digite um float B: "))
#   c = (a * b) / 3.0
#   print(c)

.data
    printa:    .asciiz "Digite um float A: "
    printb:    .asciiz "Digite um float B: "
    const_3:   .float  3.0

.text
    la    $a0, printa
    li    $v0, 4
    syscall

    li    $v0, 6         # 6 = read_float — o valor volta em $f0
    syscall
    mov.s $f1, $f0       # preserva o primeiro valor: $f0 será reutilizado

    la    $a0, printb
    li    $v0, 4
    syscall

    li    $v0, 6
    syscall
    mov.s $f2, $f0

    mul.s $f12, $f1, $f2   # $f12 = a * b
    l.s   $f3, const_3     # carrega a constante 3.0 da memória
    div.s $f12, $f12, $f3  # $f12 = (a * b) / 3.0

    li    $v0, 2           # 2 = print_float — imprime o que está em $f12
    syscall`}
          />
          <p className="mt-3">
            O coprocessador de ponto flutuante tem seu próprio banco de registradores, <strong>$f0 a $f31</strong>,
            e suas próprias instruções, sufixadas com <code className="text-accent2">.s</code> de{' '}
            <em>single precision</em>. Note que a constante 3.0 não pode ser um imediato: ela é declarada no
            segmento de dados e carregada com <code className="text-accent2">l.s</code>.
          </p>
          <p>
            Note também a convenção: <code className="text-accent2">print_float</code> imprime o valor de{' '}
            <strong>$f12</strong>, não de $a0 — por isso o resultado foi calculado diretamente ali.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
