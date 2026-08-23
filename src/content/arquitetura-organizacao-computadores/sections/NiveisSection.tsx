import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function NiveisSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Máquinas de Níveis e Evolução"
        subtitle="A ideia organizadora de Tanenbaum: cada nível oferece uma linguagem, e cada linguagem é realizada pelo nível de baixo"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Por que pensar em níveis">
        <p>
          Existe uma distância enorme entre o que uma pessoa quer ("ordene esta lista") e o que o hardware sabe
          fazer (mover bits entre registradores e somá-los). Tentar cobrir essa distância de uma vez seria
          insustentável. A solução é a <strong>organização estruturada</strong>: em vez de um salto, uma escada —
          cada degrau oferece uma linguagem um pouco mais confortável que a de baixo, e delega a execução ao
          degrau inferior.
        </p>
        <p>
          Um programador que escreve em L1 pode trabalhar como se existisse uma máquina real cuja linguagem
          nativa fosse L1. Essa máquina imaginária é a <strong>máquina virtual</strong>. Ela não existe em
          silício — existe porque o nível de baixo a sustenta.
        </p>
      </TheoryBlock>

      <Subsection title="Os dois mecanismos para descer um nível" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Tradução"
          rightLabel="Interpretação"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que acontece',
              left: 'Cada instrução de L1 é substituída por uma sequência equivalente em L0',
              right: 'Um programa em L0 lê as instruções de L1 como dados e executa uma a uma',
            },
            {
              criterion: 'Gera programa novo?',
              left: 'Sim — um programa inteiro em L0, que passa a existir de forma independente',
              right: 'Não — nada é gerado; o programa em L1 permanece como entrada',
            },
            {
              criterion: 'Quem fica em execução',
              left: 'Só o programa traduzido; o tradutor já cumpriu seu papel e saiu de cena',
              right: 'O interpretador, o tempo todo, lado a lado com o programa que examina',
            },
            {
              criterion: 'Exemplo típico',
              left: 'Compilador C: o executável roda sozinho depois',
              right: 'Interpretador Python: o programa só roda enquanto ele estiver junto',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O critério que decide entre os dois nomes não é velocidade nem tecnologia: é a existência do{' '}
          <strong>programa intermediário</strong>. Guarde isso — a pergunta cai quase sempre nessa forma.
        </p>
      </Subsection>

      <Subsection title="Hardware e software são logicamente equivalentes" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Hardware são os objetos tangíveis: circuitos, memória, dispositivos de E/S. Software são os algoritmos
          e sua representação. A tese de Tanenbaum é que{' '}
          <strong>qualquer operação realizável por software também é realizável por hardware, e vice-versa</strong> — a
          escolha entre eles é de custo, velocidade e flexibilidade, nunca de possibilidade.
        </p>
        <ExampleBox title="O microprograma: a fronteira em movimento">
          <p>
            Por volta de 1970 dominou uma decisão que ilustra bem essa equivalência: em vez de a eletrônica
            interpretar diretamente as instruções do nível ISA, um pequeno programa — o{' '}
            <strong>microprograma</strong> — passou a fazê-lo. Interpretar em vez de executar direto trouxe quatro
            vantagens práticas: corrigir instruções defeituosas em campo, compensar deficiências de projeto do
            hardware, acrescentar instruções novas a custo mínimo e permitir desenvolvimento estruturado.
          </p>
          <p>
            O efeito colateral foi histórico. Como acrescentar instruções ficou barato, os fabricantes
            acrescentaram muitas — multiplicação, divisão, ponto flutuante, manipulação de strings, chamada de
            procedimentos, laços. Foi assim que os conjuntos de instruções incharam, e é contra esse inchaço que
            o RISC iria reagir uma década depois.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Marcos da evolução" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'ENIAC — 1943',
              description:
                'Construído por Mauchley e Presper Eckert, é o marco dos primeiros computadores digitais eletrônicos. Antes dele, a linhagem vem das máquinas de calcular mecânicas, como a de Blaise Pascal no século XVII.',
              accent: 'accent',
            },
            {
              title: 'Transistor — 1948',
              description:
                'Inventado nos Bell Labs, substitui a válvula: menor, mais confiável e com consumo muito menor. É o componente que torna o resto da história possível.',
              accent: 'accent2',
            },
            {
              title: 'Circuito integrado — 1958',
              description:
                'Jack Kilby e Robert Noyce colocam vários transistores numa única pastilha de silício. Nos anos 1970 chega-se ao VLSI, com dezenas de milhares de componentes por chip.',
              accent: 'accent3',
            },
            {
              title: 'Sistema operacional',
              description:
                'Surge como programa residente que lê e executa os cartões de controle do programador — o FMS (FORTRAN Monitor System) do IBM 709 é o exemplo do material. Antes disso, cada usuário operava a máquina fisicamente.',
              accent: 'accent4',
            },
            {
              title: 'RISC — 1980',
              description:
                'Patterson e Séquin, em Berkeley, propõem reduzir drasticamente o conjunto de instruções. As CPUs RISC I e II demonstram a ideia; a MIPS de Hennessy nasce em seguida, em 1981.',
              accent: 'accent5',
            },
            {
              title: 'GridPad — 1989',
              description:
                'O primeiro tablet, da Grid Systems. Marca o início da linhagem de computadores pessoais portáteis que hoje dominam em número — quase todos com processadores ARM.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Lei de Moore" accentClass="text-accent5">
        <HighlightBox title="O enunciado exato importa">
          <p>
            A lei afirma que o número de <strong>transistores</strong> que cabem em um chip cresce cerca de{' '}
            <strong>60% ao ano</strong>. Não é sobre clock, nem sobre preço, nem sobre desempenho — embora todos
            os três tenham sido arrastados por ela durante décadas. A frequência de clock, aliás, praticamente
            estagnou nos anos 2000 sem que a densidade de transistores parasse de crescer: foi aí que a indústria
            passou a gastar os transistores extras em múltiplos núcleos em vez de clock.
          </p>
        </HighlightBox>
        <div className="mt-4">
          <StatStrip
            items={[
              { label: '~60%', value: 'aumento anual de transistores por chip', accent: 'text-accent' },
              { label: '2,27 bi', value: 'transistores no Intel Core i7-3960X', accent: 'text-accent2' },
              { label: '21×21 mm', value: 'a área em que eles cabem', accent: 'text-accent3' },
            ]}
          />
        </div>
      </Subsection>

      <Subsection title="O zoológico de computadores" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Computadores embutidos',
              description:
                'Microcontroladores que gerenciam dispositivos e a interface com o usuário — eletrodomésticos, aparelhos de comunicação, periféricos, equipamento médico, brinquedos, sistemas de venda. São, de longe, os mais numerosos. O ATmega168 AVR reúne num só chip temporizadores, PWM, conversor analógico-digital, UART, I2C, watchdog e comparador analógico.',
              accent: 'accent',
            },
            {
              title: 'Computadores pessoais',
              description:
                'Desktops e notebooks, montados sobre uma placa de circuito impresso que integra processador, memória e barramentos. É a categoria mais visível, mas não a mais numerosa.',
              accent: 'accent2',
            },
            {
              title: 'Servidores e clusters',
              description:
                'Servidores reúnem um ou vários processadores, gigabytes de memória, centenas de gigabytes em disco e rede de alta velocidade. Ligados por redes de gigabits, formam clusters — capacidade agregada a partir de máquinas padrão.',
              accent: 'accent3',
            },
            {
              title: 'Mainframes',
              description:
                'Otimizados para capacidade de entrada/saída, com vastas coleções de discos guardando milhares de gigabytes. Sobrevivem onde o gargalo é mover e processar volumes enormes de transações, não calcular.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Três famílias de arquitetura" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'x86 — Intel',
              description:
                'A linhagem CISC que vai do 8086 ao Core i7, mantida por compatibilidade retroativa: código escrito há décadas ainda roda. Internamente, porém, os processadores modernos traduzem essas instruções complexas em micro-operações no estilo RISC.',
              accent: 'accent',
            },
            {
              title: 'ARM — RISC licenciada',
              description:
                'Acorn RISC Machine, nascida no início dos anos 1980 e estreando no Acorn Archimedes; foi escolhida pela Apple para o Newton. A ARM não fabrica chips: licencia projetos. O Nvidia Tegra 2, do material, traz dois Cortex-A9 de 1,2 GHz mais um ARM7.',
              accent: 'accent2',
            },
            {
              title: 'AVR — embarcados',
              description:
                'Voltada a sistemas embutidos de baixo nível, em três classes de microcontroladores, com memória flash, EEPROM e RAM no próprio chip. É a família dos Arduinos.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
