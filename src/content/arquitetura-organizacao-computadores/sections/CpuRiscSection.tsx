import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function CpuRiscSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="CPU, Ciclo de Execução e RISC × CISC"
        subtitle="O que a máquina faz, instrução após instrução — e a disputa de projeto que definiu como ela faz"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="A CPU e o modelo de von Neumann">
        <p>
          A CPU é o cérebro do computador. Seu <strong>caminho de dados</strong>, na organização clássica de von
          Neumann, liga três peças: o <strong>banco de registradores</strong> (memória pequena e rapidíssima
          dentro do processador), a <strong>ULA</strong> (que soma, subtrai e faz operações lógicas) e a
          <strong> memória</strong> principal, de onde vêm instruções e dados.
        </p>
        <p>
          Dois registradores merecem nome próprio desde já: o <strong>contador de programa (PC)</strong>, que
          guarda o endereço da próxima instrução, e o <strong>registrador de instrução</strong>, que guarda a
          instrução sendo executada agora.
        </p>
      </TheoryBlock>

      <Subsection title="O ciclo de busca-decodificação-execução" accentClass="text-accent2">
        <FlowDiagram
          items={[
            '1. Trazer a próxima instrução da memória para o registrador de instrução',
            '2. Alterar o PC para apontar à instrução seguinte',
            '3. Determinar o tipo da instrução buscada',
            '4. Se a instrução usa um operando em memória, determinar onde ele está',
            '5. Trazer esse operando para um registrador da CPU, se necessário',
            '6. Executar a instrução',
            '7. Voltar ao passo 1',
          ]}
        />
        <HighlightBox title="O detalhe que sempre cai" accent="var(--color-accent4)">
          <p>
            Repare que o PC é atualizado no <strong>passo 2</strong> — logo depois da busca, e{' '}
            <strong>antes</strong> da execução. Quando a instrução acaba sendo um desvio, ela precisa sobrescrever
            um PC que já foi adiantado. Essa antecipação parece um detalhe burocrático, mas é ela que torna o
            endereçamento relativo ao PC e o pipeline possíveis.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-4">
          Em pseudocódigo, o interpretador que executa esse ciclo tem a forma:
        </p>
        <CodeBlock
          language="java"
          code={`// O laço que "é" o computador: enquanto houver energia, repete-se para sempre.
void interpret() {
    while (true) {
        instrucao = memoria[PC];      // 1. busca
        PC = PC + tamanhoDaInstrucao; // 2. avança ANTES de executar
        tipo = decodificar(instrucao);// 3. que instrução é esta?
        operandos = buscarOperandos(instrucao); // 4 e 5
        executar(tipo, operandos);    // 6. pode alterar o PC (desvios)
    }
}`}
        />
      </Subsection>

      <Subsection title="RISC × CISC: a disputa" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="RISC"
          rightLabel="CISC"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'Nome',
              left: 'Reduced Instruction Set Computer',
              right: 'Complex Instruction Set Computer',
            },
            {
              criterion: 'Origem',
              left: 'Berkeley, 1980 — David Patterson e Carlo Séquin (CPUs RISC I e RISC II)',
              right: 'Herança dos anos 1960–70, inflada pela facilidade do microprograma',
            },
            {
              criterion: 'Tamanho do conjunto',
              left: 'Pequeno — cerca de 50 instruções simples',
              right: 'Grande, com instruções complexas e de duração muito variável',
            },
            {
              criterion: 'Acesso à memória',
              left: 'Restrito a LOAD e STORE; o resto opera sobre registradores',
              right: 'Muitas instruções podem operar diretamente sobre a memória',
            },
            {
              criterion: 'Custo de uma tarefa',
              left: 'Precisa de 4 a 5 instruções para o que o CISC faz com 1',
              right: 'Uma instrução resolve, mas leva muito mais tempo',
            },
            {
              criterion: 'Velocidade por instrução',
              left: 'Cerca de 10× mais rápida',
              right: 'Referência de comparação',
            },
          ]}
        />
        <HighlightBox title="A conta que decidiu a disputa — e o desfecho híbrido">
          <p>
            Se o RISC precisa de 5 instruções onde o CISC usa 1, mas cada uma custa a décima parte do tempo, o
            saldo é <strong>5 × 0,1 = 0,5</strong>: metade do tempo. É esse cálculo simples que sustentou o
            argumento RISC.
          </p>
          <p>
            Na prática, porém, não houve vitória limpa. A Intel tinha uma base instalada gigantesca de software
            x86 e não podia abandonar a ISA CISC — então adotou a solução híbrida que vale até hoje:{' '}
            <strong>manter a ISA CISC por fora e traduzi-la internamente em micro-operações no estilo RISC</strong>.
            O conjunto de instruções virou uma interface de compatibilidade; a máquina de verdade, por baixo, é
            RISC.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Os cinco princípios de projeto de computadores modernos" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Todas as instruções executadas diretamente por hardware',
              description:
                'Eliminar a camada de interpretação do microprograma. Sem esse intermediário, cada instrução custa o tempo do circuito, não o de um pequeno programa que a simula.',
            },
            {
              title: '2. Maximizar a taxa de execução de instruções',
              description:
                'O que interessa é quantas instruções terminam por segundo, não quanto cada uma faz. Uma instrução que faz pouco mas termina sempre vale mais que uma poderosa e imprevisível.',
            },
            {
              title: '3. Instruções fáceis de decodificar',
              description:
                'Tamanho fixo, poucos formatos, campos sempre nas mesmas posições. A decodificação deixa de ser um gargalo e o hardware que a faz encolhe.',
            },
            {
              title: '4. Somente LOAD e STORE referenciam a memória',
              description:
                'É a definição de arquitetura load-store. Concentrar todo o tráfego com a memória em duas instruções dá latência previsível às aritméticas e simplifica o pipeline.',
            },
            {
              title: '5. Providenciar muitos registradores',
              description:
                'Como só LOAD e STORE tocam a memória, é preciso espaço interno para manter os valores em uso. O MIPS oferece 32 registradores de propósito geral — e por isso raramente precisa ir à memória no meio de um cálculo.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Benefícios da interpretação por microprograma" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Corrigir em campo',
              description:
                'Instruções que executavam incorretamente podiam ser consertadas trocando o microprograma, sem recolher o hardware.',
              accent: 'accent',
            },
            {
              title: 'Compensar o projeto',
              description:
                'Deficiências do hardware podiam ser contornadas na camada de interpretação, ganhando tempo até a próxima revisão do chip.',
              accent: 'accent2',
            },
            {
              title: 'Acrescentar instruções a custo mínimo',
              description:
                'Foi o que permitiu incluir multiplicação, divisão, ponto flutuante, strings e chamadas de procedimento — e, sem freio, foi o que inflou os conjuntos CISC.',
              accent: 'accent3',
            },
            {
              title: 'Projeto estruturado',
              description:
                'Desenvolvimento, teste e documentação ficaram mais organizados, com a complexidade concentrada num programa em vez de espalhada pela eletrônica.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
