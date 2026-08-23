import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function MipsBasicoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="MIPS: Registradores e Estrutura"
        subtitle="A arquitetura que a disciplina usa como laboratório — pequena o bastante para caber na cabeça"
        colorClass="text-accent"
        badge="2ª Prova · Trabalho"
      />

      <TheoryBlock title="De onde vem o MIPS">
        <p>
          <strong>MIPS</strong> significa <em>Microprocessor without Interlocked Pipeline Stages</em>. É uma
          arquitetura RISC criada por <strong>John Hennessy</strong> em 1981, a partir do trabalho de Patterson e
          Séquin em Berkeley. Hennessy fundou a MIPS Computer Systems em 1984; a empresa foi comprada pela
          Silicon Graphics em 1992.
        </p>
        <p>
          Suas características: arquitetura de <strong>32 bits</strong> (há versões de 64),{' '}
          <strong>32 registradores de propósito geral</strong> e <strong>32 de ponto flutuante</strong>, todos
          referenciados com o símbolo <code className="text-accent2">$</code>. A regularidade extrema é o que a
          torna ideal para ensino: quase toda decisão de projeto está à vista.
        </p>
      </TheoryBlock>

      <Subsection title="Os 32 registradores e suas convenções" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '$zero ($0) — a constante zero',
              description:
                'Sempre vale 0, e escrever nele não tem efeito. Parece desperdício gastar um registrador com isso, mas ele simplifica muita coisa: "move $t0, $t1" pode ser "add $t0, $t1, $zero", e comparar com zero fica trivial.',
            },
            {
              title: '$at ($1) — assembler temporary',
              description:
                'Reservado ao montador, que o usa para expandir pseudoinstruções. Não deve ser usado pelo programador: o valor pode ser destruído sem aviso.',
            },
            {
              title: '$v0 e $v1 ($2–$3) — valores de retorno',
              description:
                'Primeiro e segundo valores devolvidos por um procedimento. O $v0 acumula ainda outra função: é nele que se coloca o código do serviço antes de uma syscall.',
            },
            {
              title: '$a0 a $a3 ($4–$7) — argumentos',
              description:
                'Os quatro primeiros argumentos passados a uma função. Argumentos além do quarto vão pela pilha.',
            },
            {
              title: '$t0 a $t7 ($8–$15) e $t8, $t9 ($24–$25) — temporários',
              description:
                'Podem ser destruídos por um procedimento chamado. Quem chama não deve esperar encontrá-los intactos depois de um jal.',
            },
            {
              title: '$s0 a $s7 ($16–$23) — salvos',
              description:
                'Devem ser PRESERVADOS entre chamadas. Um procedimento que precise usá-los tem de salvá-los na pilha e restaurá-los antes de retornar.',
            },
            {
              title: '$k0 e $k1 ($26–$27) — kernel',
              description:
                'Reservados ao sistema operacional para tratamento de interrupções e exceções. Fora do alcance dos programas de usuário.',
            },
            {
              title: '$gp, $sp, $fp e $ra ($28–$31) — ponteiros e retorno',
              description:
                'Ponteiro global (base dos dados estáticos), ponteiro de pilha (topo da pilha), ponteiro de frame (base do quadro do procedimento atual) e endereço de retorno (gravado automaticamente pelo jal).',
            },
          ]}
        />
        <HighlightBox title="Convenção, não imposição" accent="var(--color-accent4)">
          <p>
            O hardware não impede que você guarde um argumento em $s3 ou destrua $s0 dentro de um procedimento.
            A distinção entre <strong>$t</strong> e <strong>$s</strong> é um <strong>contrato</strong> entre quem
            chama e quem é chamado — e ele só funciona se os dois lados o respeitarem. Violá-lo produz bugs que
            só aparecem quando o código é combinado com o de outra pessoa.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Estrutura de um programa e layout de memória" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Segmento .data',
              description:
                'Onde ficam as variáveis estáticas — strings, vetores, constantes. Começa no endereço 0x10000000, com o ponteiro global $gp apontando para 0x10008000.',
              accent: 'accent',
            },
            {
              title: 'Segmento .text',
              description:
                'Onde fica o código a ser executado. Começa em 0x00400000, que é o endereço inicial do PC.',
              accent: 'accent2',
            },
            {
              title: 'Pilha — do topo para baixo',
              description:
                'O ponteiro de pilha $sp é inicializado em 0x7fffffff, o topo do espaço endereçável, e a pilha CRESCE EM DIREÇÃO AOS ENDEREÇOS MENORES. Por isso reservar espaço significa SUBTRAIR de $sp.',
              accent: 'accent3',
            },
            {
              title: 'Dados dinâmicos — de baixo para cima',
              description:
                'Ficam acima dos dados estáticos e crescem para cima, na direção oposta à pilha. As duas regiões só colidem se a memória realmente acabar — é essa disposição que maximiza o uso do espaço.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Diretivas do montador" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Diretivas não são instruções: não viram código executável. Elas dão instruções ao{' '}
          <strong>montador</strong> sobre como organizar a memória. Todas começam com ponto.
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '.data · .text · .globl',
              description:
                'Marcam o início do segmento de dados e do de código; .globl torna um rótulo visível a outros programas.',
              accent: 'accent',
            },
            {
              title: '.word · .half · .byte',
              description:
                'Armazenam valores de 32, 16 e 8 bits. É com .word que se declaram vetores de inteiros — e é o tamanho de 4 bytes da palavra que faz os índices andarem de 4 em 4.',
              accent: 'accent2',
            },
            {
              title: '.ascii · .asciiz',
              description:
                'Armazenam strings em ASCII. A diferença é decisiva: .asciiz acrescenta o caractere NULO ao final (o "z" vem de zero), e é ele que faz o print_string saber onde parar.',
              accent: 'accent3',
            },
            {
              title: '.float · .double',
              description:
                'Números de ponto flutuante em precisão simples e dupla, para uso com os registradores $f0–$f31.',
              accent: 'accent4',
            },
            {
              title: '.space n',
              description:
                'Reserva n bytes de memória sem inicializá-los — útil para buffers de leitura de string.',
              accent: 'accent5',
            },
            {
              title: '.align n',
              description:
                'Alinha o próximo dado em fronteira de 2ⁿ bytes: .align 2 alinha inteiros de 32 bits (4 bytes) e .align 0 alinha caracteres (1 byte). Desalinhamento causa erro de acesso em muitas arquiteturas.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Syscalls: pedindo serviços ao sistema" accentClass="text-accent5">
        <TheoryBlock title="O protocolo é sempre o mesmo">
          <p>
            Coloque o <strong>código do serviço em $v0</strong>, os <strong>argumentos em $a0</strong> (ou{' '}
            <strong>$f12</strong> para ponto flutuante) e execute <code className="text-accent2">syscall</code>.
            Nas chamadas de leitura, o valor lido volta em $v0 — ou em $f0, para números de ponto flutuante.
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Impressão: 1, 2, 3 e 4',
              description:
                'print_int (1) imprime o inteiro em $a0; print_float (2) e print_double (3) imprimem o valor em $f12; print_string (4) imprime a string cujo ENDEREÇO está em $a0.',
              accent: 'accent',
            },
            {
              title: 'Leitura: 5, 6, 7 e 8',
              description:
                'read_int (5) devolve em $v0; read_float (6) e read_double (7) devolvem em $f0; read_string (8) recebe o buffer em $a0 e o tamanho em $a1.',
              accent: 'accent2',
            },
            {
              title: 'sbrk (9)',
              description:
                'Aloca dinamicamente a quantidade de bytes indicada em $a0 e devolve o endereço em $v0 — o equivalente rudimentar de um malloc.',
              accent: 'accent3',
            },
            {
              title: 'exit (10)',
              description:
                'Encerra o programa. Sem ele, a execução continua para além do fim do código, interpretando lixo como instruções.',
              accent: 'accent4',
            },
          ]}
        />
        <ExampleBox title="O hello world da disciplina">
          <CodeBlock
            language="mips"
            code={`.data
    boas_vindas: .asciiz "Olá mundo!\\n"   # o "z" garante o terminador nulo

.text
    la    $a0, boas_vindas   # $a0 recebe o ENDEREÇO da string (load address)
    li    $v0, 4             # 4 = print_string
    syscall                  # imprime

    li    $v0, 10            # 10 = exit
    syscall                  # encerra o programa`}
          />
          <p className="mt-3">
            Duas distinções que valem para todo o resto: <code className="text-accent2">la</code> carrega um{' '}
            <strong>endereço</strong>, enquanto <code className="text-accent2">li</code> carrega um{' '}
            <strong>valor imediato</strong>. E o programa precisa terminar com a chamada explícita de{' '}
            <code className="text-accent2">exit</code> — o processador não sabe sozinho onde o código acaba.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Tudo isso roda no <strong>MARS 4.5</strong> (MIPS Assembler and Runtime Simulator), que monta o código
          e o executa mostrando registradores e memória passo a passo. Executar linha a linha, observando os
          registradores mudarem, é a forma mais rápida de entender assembly.
        </p>
      </Subsection>
    </section>
  );
}
