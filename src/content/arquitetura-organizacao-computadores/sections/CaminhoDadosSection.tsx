import FlowDiagram from '../../../components/ui/FlowDiagram';
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

export default function CaminhoDadosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Caminho de Dados e Controle"
        subtitle="O circuito que executa a instrução, e a máquina de estados que o comanda ciclo a ciclo"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="As peças do caminho de dados" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'PC — contador de programa',
              description:
                'Guarda o endereço da instrução atual e é incrementado de 4 em 4, porque toda instrução MIPS ocupa exatamente 4 bytes. Essa uniformidade é o que torna o incremento uma soma fixa, sem depender de decodificar nada.',
              accent: 'accent',
            },
            {
              title: 'Memória de instruções e memória de dados',
              description:
                'No monociclo são SEPARADAS — é preciso buscar a instrução e acessar o dado no mesmo ciclo, o que uma memória só não permitiria.',
              accent: 'accent2',
            },
            {
              title: 'Banco de registradores',
              description:
                'Dois endereços de leitura (rs e rt) e um de escrita (rd), com as saídas Read data 1 e Read data 2. Ler dois operandos simultaneamente é exatamente o que uma instrução tipo R exige.',
              accent: 'accent3',
            },
            {
              title: 'ULA',
              description:
                'Recebe duas entradas e produz o resultado, comandada pelo sinal ALU operation. Além das contas, é ela que calcula endereços de memória e compara valores nos desvios.',
              accent: 'accent4',
            },
            {
              title: 'Extensor de sinal',
              description:
                'Converte o imediato de 16 bits em 32, PRESERVANDO O SINAL — replica o bit mais significativo. Sem isso, um deslocamento negativo viraria um número positivo enorme.',
              accent: 'accent5',
            },
            {
              title: 'Multiplexadores',
              description:
                'Espalhados por todo o caminho, escolhendo entre origens alternativas: se o segundo operando da ULA vem do registrador ou do imediato, se o dado escrito vem da ULA ou da memória, de onde vem o próximo PC.',
              accent: 'accent',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os sinais de controle que comandam essas peças: <strong>RegWrite</strong>, <strong>MemRead</strong>,{' '}
          <strong>MemWrite</strong>, <strong>MemtoReg</strong>, <strong>ALUSrc</strong>, <strong>ALUOp</strong>,{' '}
          <strong>PCWrite</strong>, <strong>PCWriteCond</strong> e <strong>IorD</strong>.
        </p>
      </Subsection>

      <Subsection title="Monociclo × multiciclo" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Monociclo"
          rightLabel="Multiciclo"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'Duração da instrução',
              left: 'Uma instrução por ciclo de clock, sempre',
              right: 'Vários ciclos por instrução, quantos ela precisar',
            },
            {
              criterion: 'Memória',
              left: 'DUAS memórias separadas: instruções e dados',
              right: 'UMA memória única, reaproveitada em ciclos diferentes',
            },
            {
              criterion: 'ULA',
              left: 'Uma ULA principal mais somadores dedicados ao PC e ao desvio',
              right: 'UMA ULA única, que faz tudo em ciclos diferentes',
            },
            {
              criterion: 'Registradores extras',
              left: 'Não precisa: tudo flui num ciclo só',
              right: 'Precisa de IR, A, B, ALUOut e MDR para guardar resultados entre etapas',
            },
            {
              criterion: 'Período do clock',
              left: 'Definido pela instrução MAIS LENTA (o lw)',
              right: 'Definido pela ETAPA mais lenta — bem menor',
            },
            {
              criterion: 'Ponto fraco',
              left: 'Instruções curtas desperdiçam a maior parte do ciclo',
              right: 'Controle bem mais complexo: uma máquina de estados em vez de lógica simples',
            },
          ]}
        />
        <HighlightBox title="A limitação do monociclo, em uma frase">
          <p>
            Com um período de clock único, dimensionado para caber a instrução mais lenta, <strong>toda</strong>{' '}
            instrução paga o preço do <code className="text-accent2">lw</code> — que atravessa memória de
            instruções, banco de registradores, ULA e memória de dados antes de escrever de volta. Um{' '}
            <code className="text-accent2">add</code>, que precisaria de bem menos, fica esperando o ciclo acabar.
            É esse desperdício que o multiciclo ataca.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Os registradores intermediários do multiciclo" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'IR — Instruction Register',
              description:
                'Guarda a instrução buscada. Precisa existir porque a memória será reutilizada para dados nos ciclos seguintes, e a instrução não pode se perder.',
            },
            {
              title: 'A e B',
              description:
                'Guardam os operandos lidos do banco de registradores na etapa de decodificação, mantendo-os disponíveis para a ULA no ciclo seguinte.',
            },
            {
              title: 'ALUOut',
              description:
                'Guarda o resultado da ULA — seja uma soma aritmética, seja um endereço de memória calculado, seja o alvo de um desvio.',
            },
            {
              title: 'MDR — Memory Data Register',
              description:
                'Guarda o dado lido da memória, para que ele possa ser escrito no banco de registradores no ciclo seguinte.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As cinco etapas de execução" accentClass="text-accent5">
        <FlowDiagram
          items={[
            '1. BUSCA — IR ← Memória[PC] · PC ← PC + 4',
            '2. DECODIFICAÇÃO — A ← Reg[IR[25:21]] · B ← Reg[IR[20:16]] · ALUOut ← PC + (ext. sinal(IR[15:0]) << 2)',
            '3. EXECUÇÃO / cálculo de endereço / conclusão do desvio',
            '4. ACESSO À MEMÓRIA ou conclusão do tipo R',
            '5. CONCLUSÃO DO LOAD — Reg[IR[20:16]] ← MDR',
          ]}
        />
        <ExampleBox title="A especulação escondida na etapa 2">
          <p>
            Repare que a segunda etapa calcula <strong>ALUOut ← PC + (extensão de sinal(IR[15:0]) &lt;&lt; 2)</strong>
            {' '}— o endereço de destino de um desvio — <strong>mesmo que a instrução não seja um desvio</strong>.
            Isso não é descuido: é <strong>especulação</strong>.
          </p>
          <p>
            Nessa etapa a ULA não tem nada a fazer (os operandos acabaram de ser lidos e o opcode ainda está
            sendo examinado), então adiantar o cálculo é trabalho de graça. Se a instrução for um{' '}
            <code className="text-accent2">beq</code>, o endereço já está pronto e o desvio se conclui já na
            terceira etapa. Se for outra coisa, o conteúdo de ALUOut é simplesmente ignorado, sem prejuízo algum.
          </p>
          <p className="text-sm">
            O deslocamento de 2 bits à esquerda aparece porque o campo guarda a distância em{' '}
            <em>instruções</em>, não em bytes — e cada instrução ocupa 4.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A unidade de controle como máquina de estados" accentClass="text-accent">
        <TheoryBlock title="Por que o controle fica mais complexo">
          <p>
            No multiciclo, os sinais de controle dependem não apenas do <strong>opcode</strong>, mas também do{' '}
            <strong>ciclo em que a instrução está</strong>. A mesma instrução exige combinações diferentes de
            sinais em momentos diferentes — e isso é, por definição, uma máquina de estados: registrador de
            estado, função de próximo estado e função de saída.
          </p>
          <p>
            A regra que organiza tudo: cada ciclo faz <strong>no máximo um acesso à memória</strong>,{' '}
            <strong>ou</strong> um acesso ao banco de registradores, <strong>ou</strong> uma operação na ULA. O
            período do clock passa a ser o maior desses três tempos, e não a soma de todos.
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Estados 0 e 1 — comuns a todas',
              description:
                'Estado 0: busca. Estado 1: decodificação e leitura de registradores. Do estado 1, o opcode decide o caminho — 2 para lw/sw, 6 para tipo R, 8 para beq, 9 para j.',
              accent: 'accent',
            },
            {
              title: 'Estados 2 a 5 — memória',
              description:
                '2 calcula o endereço; de lá, lw segue para 3 (leitura) e depois 4 (escrita no registrador), enquanto sw segue para 5 (escrita na memória). Ambos os caminhos voltam ao estado 0.',
              accent: 'accent2',
            },
            {
              title: 'Estados 6 e 7 — tipo R',
              description:
                '6 executa a operação na ULA, 7 escreve o resultado no registrador de destino, e volta-se ao estado 0.',
              accent: 'accent3',
            },
            {
              title: 'Estados 8 e 9 — desvios',
              description:
                '8 conclui o beq (usando o endereço já calculado especulativamente na etapa 2) e 9 conclui o jump. Os dois retornam direto ao estado 0.',
              accent: 'accent4',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A implementação pode ser feita por lógica combinatória — uma <strong>PLA</strong>, com um arranjo de
          ANDs seguido de um de ORs — ou por <strong>ROM</strong>, com equações lógicas para cada bit do próximo
          estado.
        </p>
      </Subsection>

      <Subsection title="ALU Control: dois níveis de decisão" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A ULA precisa saber que operação executar, mas a unidade de controle principal não quer se ocupar dos
          detalhes de cada instrução tipo R. A solução é um controle em dois níveis: a unidade principal emite{' '}
          <strong>ALUOp</strong> (2 bits) e um bloco menor combina esse sinal com o campo{' '}
          <strong>funct</strong> (6 bits) para produzir os 3 bits que a ULA entende.
        </p>
        <ComparisonTable
          leftLabel="ALUOp / funct"
          rightLabel="Operação da ULA (3 bits)"
          criterionLabel="Instrução"
          rows={[
            { criterion: 'lw e sw', left: 'ALUOp = 00 (funct ignorado)', right: 'Adição — 010, para calcular o endereço' },
            { criterion: 'beq', left: 'ALUOp = 01 (funct ignorado)', right: 'Subtração — 110, para comparar por igualdade' },
            { criterion: 'add (tipo R)', left: 'ALUOp = 10 · funct = 100000', right: 'Adição — 010' },
            { criterion: 'sub (tipo R)', left: 'ALUOp = 10 · funct = 100010', right: 'Subtração — 110' },
            { criterion: 'and (tipo R)', left: 'ALUOp = 10 · funct = 100100', right: 'AND — 000' },
            { criterion: 'or (tipo R)', left: 'ALUOp = 10 · funct = 100101', right: 'OR — 001' },
            { criterion: 'slt (tipo R)', left: 'ALUOp = 10 · funct = 101010', right: 'Set on less than — 111' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Note o padrão: com ALUOp 00 ou 01 o funct é irrelevante, porque lw, sw e beq já determinam sozinhos a
          operação. Só com ALUOp = 10 — as instruções tipo R, que compartilham o opcode 0 — é preciso consultar o
          funct para desempatar. É a mesma divisão de trabalho que existe no próprio formato R.
        </p>
      </Subsection>
    </section>
  );
}
