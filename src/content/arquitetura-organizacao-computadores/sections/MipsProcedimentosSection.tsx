import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function MipsProcedimentosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Procedimentos e Pilha"
        subtitle="Como uma função existe numa máquina que só sabe desviar — e por que a recursão precisa da pilha"
        colorClass="text-accent"
        badge="2ª Prova · Trabalho"
      />

      <Subsection title="Os cinco passos de uma chamada" accentClass="text-accent2">
        <FlowDiagram
          items={[
            '1. Colocar os parâmetros onde o procedimento possa encontrá-los ($a0–$a3)',
            '2. Transferir o controle para o procedimento (jal)',
            '3. Adquirir os recursos de armazenamento necessários (espaço na pilha)',
            '4. Realizar a tarefa desejada',
            '5. Colocar o valor de retorno onde o chamador possa acessá-lo ($v0) e voltar (jr $ra)',
          ]}
        />
      </Subsection>

      <Subsection title="jal e jr: ir e voltar" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'jal <rótulo> — jump and link',
              description:
                'Desvia incondicionalmente para o rótulo E salva em $ra o endereço da PRÓXIMA instrução. O "link" do nome é justamente esse registro do caminho de volta. O que ele NÃO faz: salvar registradores — isso é trabalho manual.',
              accent: 'accent',
            },
            {
              title: 'jr $ra — jump register',
              description:
                'Desvia para o endereço armazenado em $ra, retomando a execução de onde o chamador parou. Como o destino vem de um registrador, o mesmo procedimento pode ser chamado de qualquer lugar.',
              accent: 'accent2',
            },
          ]}
        />
        <ExampleBox title="Procedimento com argumentos e retorno">
          <CodeBlock
            language="mips"
            code={`# Equivalente em C:
#   int minha_soma(int a, int b) { return a + b; }

minha_soma:
    add   $v0, $a0, $a1   # argumentos em $a0 e $a1, retorno em $v0
    jr    $ra             # volta ao endereço que o jal gravou

# ...e a chamada, no programa principal:
    li    $a0, 7
    li    $a1, 5
    jal   minha_soma      # $ra recebe o endereço da instrução seguinte
    move  $s0, $v0        # $s0 = 12`}
          />
        </ExampleBox>
      </Subsection>

      <Subsection title="O problema das chamadas aninhadas" accentClass="text-accent4">
        <HighlightBox title="$ra é UM registrador, não uma pilha">
          <p>
            Enquanto um procedimento não chama nenhum outro, <code className="text-accent2">jal</code> e{' '}
            <code className="text-accent2">jr $ra</code> bastam. Mas considere o que acontece quando um
            procedimento chamado executa ele próprio um <code className="text-accent2">jal</code>: essa segunda
            chamada <strong>sobrescreve $ra</strong> com um endereço interno, e o caminho de volta ao chamador
            original desaparece.
          </p>
          <p>
            O hardware não mantém nenhuma pilha de endereços de retorno — e o montador não detecta o problema,
            porque não é erro de sintaxe. O resultado é um programa que se perde silenciosamente, retornando
            para si mesmo em laço ou saltando para lixo. É por isso que existe o protocolo de pilha.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O protocolo de empilhamento" accentClass="text-accent5">
        <TheoryBlock title="Reservar, salvar, usar, restaurar, devolver">
          <p>
            Como a pilha começa em 0x7fffffff e <strong>cresce para baixo</strong>, abrir espaço significa{' '}
            <strong>subtrair</strong> de <code className="text-accent2">$sp</code>. Cada palavra ocupa 4 bytes,
            então <code className="text-accent2">-4</code> reserva uma palavra, <code className="text-accent2">-8</code>{' '}
            reserva duas e <code className="text-accent2">-12</code>, três.
          </p>
        </TheoryBlock>
        <ExampleBox title="Empilhar e desempilhar $a0 e $ra">
          <CodeBlock
            language="mips"
            code={`# Empilhando (no início do procedimento)
    addi  $sp, $sp, -8     # abre espaço para 2 palavras
    sw    $ra, 0($sp)      # salva o endereço de retorno
    sw    $a0, 4($sp)      # salva o argumento

    # ... corpo do procedimento, livre para usar $a0 e fazer novos jal ...

# Desempilhando (antes de retornar) — na ordem simétrica
    lw    $ra, 0($sp)      # recupera o endereço de retorno
    lw    $a0, 4($sp)      # recupera o argumento
    addi  $sp, $sp, 8      # devolve o espaço à pilha`}
          />
          <p className="mt-3">
            A simetria é obrigatória: o valor somado ao final tem de ser exatamente o subtraído no início, e cada{' '}
            <code className="text-accent2">sw</code> precisa de um <code className="text-accent2">lw</code> no mesmo
            deslocamento. Um desequilíbrio aqui corrompe a pilha de todos os quadros acima.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Fatorial recursiva: o exemplo que reúne tudo" accentClass="text-accent">
        <ExampleBox title="int fat(int f) { if (f == 1) return f; else return f * fat(f - 1); }">
          <CodeBlock
            language="mips"
            code={`# Equivalente em C:
#   int fat(int f) {
#       if (f == 1) return f;
#       else        return f * fat(f - 1);
#   }
#   main() { printf("fatorial = %d", fat(5)); }

main:
    li    $a0, 5           # argumento: 5
    jal   fat
    move  $s0, $v0         # $s0 = 120

fat:
    addi  $t0, $zero, 1
    bne   $a0, $t0, ELSE   # se f != 1, vai para o caso recursivo
IF:
    move  $v0, $a0         # CASO BASE: retorna o próprio f
    j     EXIT_FAT
ELSE:
    # --- Salvando contexto na stack ---
    addi  $sp, $sp, -8     # abre espaço para 2 palavras
    sw    $ra, 0($sp)      # salva o endereço de retorno (ESSENCIAL)
    sw    $a0, 4($sp)      # salva o argumento f (será preciso na volta)

    addi  $a0, $a0, -1     # f - 1
    jal   fat              # CHAMADA RECURSIVA (destrói $ra e $a0)

    # --- Recuperando contexto ---
    lw    $ra, 0($sp)      # restaura o caminho de volta
    lw    $a0, 4($sp)      # restaura o f DESTE nível
    addi  $sp, $sp, 8      # fecha o quadro

    mul   $v0, $v0, $a0    # f * fat(f - 1)
EXIT_FAT:
    jr    $ra`}
          />
        </ExampleBox>
        <HighlightBox title="O que este exemplo ensina de uma vez só">
          <p>
            <strong>O caso base.</strong> Sem o teste <code className="text-accent2">bne $a0, $t0, ELSE</code> a
            recursão não pararia — e cada nível consumiria mais 8 bytes de pilha até estourá-la.
          </p>
          <p>
            <strong>Por que $ra precisa ser salvo.</strong> O <code className="text-accent2">jal fat</code> interno
            sobrescreve $ra. Sem o <code className="text-accent2">sw $ra, 0($sp)</code>, ao terminar o nível mais
            profundo todos os níveis tentariam voltar para o mesmo ponto interno — laço infinito.
          </p>
          <p>
            <strong>Por que $a0 também.</strong> A multiplicação final precisa do <em>f</em> deste nível, mas a
            chamada recursiva alterou $a0 para <em>f − 1</em>. Sem salvá-lo, a conta usaria o valor errado e o
            resultado sairia silenciosamente incorreto — um bug muito mais traiçoeiro que um travamento.
          </p>
          <p>
            <strong>A pilha em ação.</strong> Cada nível abre seu próprio quadro de 8 bytes; com{' '}
            <code className="text-accent2">fat(5)</code>, cinco quadros coexistem no ponto mais profundo, e
            desfazem-se na ordem inversa. É exatamente assim que qualquer linguagem implementa recursão — só que
            aqui você escreve o protocolo à mão.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O trabalho da disciplina" accentClass="text-accent3">
        <ExampleBox title="Programa com menu e três operações em procedimentos">
          <p>
            O trabalho avaliativo pede um programa que, ao iniciar, apresente um menu e o reexiba após cada
            operação, encerrando apenas na opção 4:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>Fahrenheit → Celsius</strong>, pela relação <em>F = 32 + (9 × C / 5)</em> — repare que a
              fórmula está escrita para obter F a partir de C, então é preciso invertê-la para converter no
              sentido pedido.
            </li>
            <li>
              <strong>Enésimo termo de Fibonacci</strong>, com <em>F(N) = F(N−1) + F(N−2)</em>, dado um N
              informado pelo usuário.
            </li>
            <li>
              <strong>Enésimo número par</strong>, dado um N informado pelo usuário.
            </li>
            <li>Sair.</li>
          </ol>
          <p>
            A exigência que estrutura tudo: <strong>o cálculo efetivo tem de acontecer dentro de um procedimento</strong>,
            recebendo como argumento os valores lidos e devolvendo o valor calculado. Ou seja, o programa exercita
            justamente o protocolo desta seção — argumentos em $a0, retorno em $v0, chamada com jal, e a pilha
            para o que precisar sobreviver à chamada.
          </p>
          <p className="text-sm">
            Nota prática: como o menu roda em laço e chama procedimentos, o $ra do laço principal precisa ser
            preservado — é o mesmo problema das chamadas aninhadas, agora num programa inteiro.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
