import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CircuitosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Circuitos Combinatórios e Sequenciais"
        subtitle="Do multiplexador ao registrador: as peças de que o caminho de dados é feito"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="Selecionar e distribuir" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Multiplexador (MUX)',
              description:
                'Tem 2ⁿ linhas de entrada de dados, n linhas de controle e UMA saída. As linhas de controle escolhem qual entrada é direcionada à saída. Com 2 linhas de controle: 00 seleciona D0, 01 seleciona D1, 10 seleciona D2 e 11 seleciona D3.',
              accent: 'accent',
            },
            {
              title: 'Demultiplexador',
              description:
                'A operação inversa: a partir de UMA entrada, distribui o sinal para várias saídas, conforme as linhas de seleção. Confundir os dois é o erro mais comum — conte as entradas de dados.',
              accent: 'accent2',
            },
            {
              title: 'Decodificador',
              description:
                'n linhas de entrada e 2ⁿ linhas de saída. A combinação das entradas seleciona (habilita para 1) SOMENTE UMA das saídas. Um decodificador 3-para-8 tem 3 entradas e 8 saídas — usado, por exemplo, para habilitar um chip de RAM entre vários.',
              accent: 'accent3',
            },
            {
              title: 'Codificador',
              description:
                'O oposto do decodificador: várias linhas de entrada, das quais apenas uma pode estar ativa por vez, produzindo na saída o código de n bits correspondente. O exemplo do material converte hexadecimal em binário.',
              accent: 'accent4',
            },
          ]}
        />
        <ExampleBox title="Onde o MUX aparece de verdade: escolhendo o próximo PC">
          <p>
            A aplicação citada no material é exatamente a que reaparece no caminho de dados: o valor a ser
            carregado no <strong>contador de programa</strong> pode vir de fontes diferentes — do incremento
            sequencial, do registrador de instrução (num jump) ou da saída da ULA (num desvio calculado). Um
            multiplexador comandado pela unidade de controle escolhe qual delas vale neste ciclo.
          </p>
          <p>
            Guarde essa imagem: quase todo lugar do processador em que "depende" é a resposta certa tem um
            multiplexador escondido.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Comparar, deslocar e somar" accentClass="text-accent3">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Comparador',
              description:
                'Construído sobre a porta XOR, que produz 0 quando as entradas são iguais e 1 quando diferem. Um comparador de 4 bits aplica XOR bit a bit e combina os resultados: se nenhum bit acusou diferença, as palavras são iguais.',
            },
            {
              title: 'Deslocador (shifter)',
              description:
                'n linhas de entrada e n de saída, com a saída sendo a entrada deslocada de 1 bit. Uma linha de controle escolhe a direção — 0 para a esquerda, 1 para a direita. Deslocar à esquerda multiplica por 2; à direita, divide.',
            },
            {
              title: 'Meio somador (half adder)',
              description:
                'Duas entradas e duas saídas: o bit de soma e o bit de transporte (carry). O que lhe falta é receber o carry vindo da posição anterior — por isso só serviria para o bit menos significativo.',
            },
            {
              title: 'Somador completo (full adder)',
              description:
                'Acrescenta a entrada de carry. Encadeando n somadores completos pelo vai-um, soma-se uma palavra inteira. Sem ele, não haveria aritmética: como diz o material, não existe computador sem circuitos que executem operações aritméticas.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A ULA: uma fatia de 1 bit, repetida n vezes" accentClass="text-accent4">
        <TheoryBlock title="Como se constrói uma unidade lógica e aritmética">
          <p>
            Grande parte dos computadores contém um único circuito capaz de efetuar <strong>AND</strong>,{' '}
            <strong>OR</strong> e <strong>soma</strong> de duas palavras de máquina. O truque de projeto é
            elegante: constrói-se uma <strong>ULA de 1 bit</strong>, que faz as quatro operações possíveis
            selecionadas pelas linhas de controle F0 e F1 (00, 01, 10 ou 11) — e então se repete essa fatia{' '}
            <em>n</em> vezes, uma por posição de bit, encadeando o carry.
          </p>
          <p>
            É a mesma ideia que o princípio RISC de "simplicidade favorece a regularidade" expressa em silício:
            resolver bem um caso pequeno e replicá-lo, em vez de projetar um circuito monolítico de 32 bits.
          </p>
        </TheoryBlock>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Na mesma família está a <strong>PLA</strong> (matriz de lógica programável): pastilhas de uso geral
          programáveis para propósitos específicos, baseadas no fato de que qualquer função booleana pode ser
          escrita como soma de produtos — daí sua estrutura de um arranjo de portas AND seguido de um arranjo de
          portas OR.
        </p>
      </Subsection>

      <Subsection title="Clock: o batimento do circuito" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O <strong>clock</strong> é um circuito que emite uma série de pulsos com largura e intervalos precisos.
          O <strong>tempo de ciclo</strong> é o intervalo entre bordas correspondentes de dois pulsos
          consecutivos. Um diagrama de temporização oferece quatro referências para eventos discretos: a fase
          ascendente e a descendente de cada um de dois pulsos. É contra essas referências que todo circuito
          sequencial se sincroniza.
        </p>
      </Subsection>

      <Subsection title="Memória de 1 bit: latches" accentClass="text-accent">
        <TheoryBlock title="Como um circuito se lembra">
          <p>
            Para guardar 1 bit é preciso um circuito que se <em>lembre</em> de valores de entrada anteriores — e
            a forma de conseguir isso é a <strong>realimentação</strong>: duas portas NOR em que a saída de cada
            uma alimenta a entrada da outra. O par tem dois estados estáveis, e é essa estabilidade que constitui
            a memória.
          </p>
        </TheoryBlock>
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Latch SR básico',
              description:
                'Set e Reset: um leva o circuito ao estado 1, o outro ao estado 0, e ele permanece ali sozinho. O problema é a combinação S = R = 1, que pede simultaneamente as duas coisas e deixa o circuito instável.',
            },
            {
              title: 'Latch SR com clock',
              description:
                'Acrescenta um sinal de clock que habilita ou impede a mudança de estado. Resolve QUANDO o latch pode mudar, mas não resolve a combinação proibida.',
            },
            {
              title: 'Latch D com clock',
              description:
                'A solução da instabilidade: existe uma ÚNICA entrada de dados, D, e a negação interna alimenta o outro lado — o estado proibido deixa de ser representável. Enquanto o clock estiver em 1, o latch lê e armazena o valor corrente de D.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Flip-flops, registradores e memória" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Latch"
          rightLabel="Flip-flop"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'Quando muda de estado',
              left: 'Enquanto o clock estiver no NÍVEL ativo (sensível a nível)',
              right: 'No instante da TRANSIÇÃO do clock — borda ascendente (0→1) ou descendente (1→0)',
            },
            {
              criterion: 'Janela de escrita',
              left: 'Toda a duração do nível alto: a entrada pode "atravessar" durante esse tempo',
              right: 'Um instante preciso, definido por um gerador de pulso interno',
            },
            {
              criterion: 'Consequência prática',
              left: 'Mais simples, mas exige cuidado para que a entrada esteja estável durante todo o nível',
              right: 'Ponto de amostragem previsível — é o que permite construir registradores e máquinas de estado confiáveis',
            },
          ]}
        />
        <HighlightBox title="De um bit a uma memória inteira">
          <p>
            Oito flip-flops lado a lado, compartilhando o mesmo clock, formam um{' '}
            <strong>registrador de 8 bits</strong>. Muitos registradores organizados em linhas formam a{' '}
            <strong>memória</strong>: no diagrama do material, uma memória 4×3 é composta de quatro palavras de
            3 bits.
          </p>
          <p>
            Duas regras da organização de memória: toda operação de leitura ou escrita movimenta uma{' '}
            <strong>palavra completa</strong>, nunca um bit isolado; e o número de palavras é{' '}
            <strong>sempre uma potência de 2</strong>, porque os endereços vêm de um decodificador com n entradas
            e 2ⁿ saídas.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
