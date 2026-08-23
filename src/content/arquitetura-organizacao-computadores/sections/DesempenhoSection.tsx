import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function DesempenhoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Análise de Desempenho"
        subtitle="Uma equação com três fatores — e a lição de que nenhum deles decide sozinho"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <HighlightBox title="A pergunta de abertura: qual é o melhor avião?">
        <p>
          O material começa comparando Boeing 777 e 747, Concorde e DC-8, e pergunta qual é o melhor. A resposta
          honesta é <strong>depende da métrica</strong>: o 747 tem a maior taxa de passageiros×milha por hora, o
          Concorde tem a maior velocidade. Um vence em <strong>throughput</strong>, o outro em{' '}
          <strong>latência</strong>.
        </p>
        <p>
          Com computadores é idêntico — e a frase que resume a disciplina inteira é esta:{' '}
          <em>o usuário final está interessado no tempo de resposta; o gerente do centro de dados, na largura de
          banda.</em> São perguntas diferentes, e responder a uma não responde a outra.
        </p>
      </HighlightBox>

      <Subsection title="Definições que precisam ficar separadas" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Tempo de resposta (latência)',
              description:
                'O tempo total para completar UMA tarefa, do início ao fim. É o que você sente esperando a página carregar.',
              accent: 'accent',
            },
            {
              title: 'Largura de banda (throughput)',
              description:
                'A quantidade de trabalho concluída por unidade de tempo. É o que interessa a quem precisa atender a milhares de requisições por segundo.',
              accent: 'accent2',
            },
            {
              title: 'Tempo de relógio (wall-clock)',
              description:
                'Tudo o que passou no relógio de parede: processamento, espera por disco, entrada/saída e o overhead do sistema operacional atendendo a outros processos.',
              accent: 'accent3',
            },
            {
              title: 'Tempo de CPU',
              description:
                'Apenas o tempo em que o processador trabalhou para este programa. É sobre ele que a análise se debruça, porque é o que a arquitetura pode influenciar.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Desempenho e comparação relativa" accentClass="text-accent3">
        <TheoryBlock title="As fórmulas">
          <p>
            Desempenho é definido como o inverso do tempo:
          </p>
          <p className="font-mono text-accent2 text-center py-2">
            Desempenho = 1 / tempo de execução
          </p>
          <p>
            Disso decorre a forma de comparar duas máquinas. Dizer que <strong>X é n vezes mais rápido que Y</strong>{' '}
            significa:
          </p>
          <p className="font-mono text-accent2 text-center py-2">
            Desempenho<sub>X</sub> / Desempenho<sub>Y</sub> = Tempo<sub>Y</sub> / Tempo<sub>X</sub> = n
          </p>
          <p>
            Note a inversão: os <strong>desempenhos</strong> se dividem na mesma ordem em que os{' '}
            <strong>tempos</strong> se dividem ao contrário. Trocar essa ordem é o erro mais comum da prova.
          </p>
        </TheoryBlock>
      </Subsection>

      <Subsection title="A equação fundamental" accentClass="text-accent4">
        <HighlightBox title="Três fatores, nenhum decisivo sozinho">
          <p className="font-mono text-accent text-center py-2 text-base">
            Tempo de CPU = Nº de instruções × CPI × período do clock
          </p>
          <p>Ou, partindo dos ciclos:</p>
          <p className="font-mono text-accent2 text-center py-2">
            Tempo de CPU = ciclos de clock × período do clock = ciclos de clock / taxa de clock
          </p>
          <p>
            <strong>CPI</strong> é a média de ciclos de clock por instrução, calculada sobre o programa inteiro —
            instruções diferentes custam ciclos diferentes, e a mistura depende do que o programa faz.
          </p>
          <p>
            Cada fator pertence a um responsável distinto: o <strong>número de instruções</strong> depende do
            algoritmo, do compilador e da ISA; o <strong>CPI</strong>, da organização do processador e outra vez
            da ISA; o <strong>período do clock</strong>, da tecnologia de fabricação e do projeto do caminho de
            dados. Otimizar um deles às custas dos outros pode piorar o resultado — é exatamente o que o terceiro
            exemplo abaixo demonstra.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Exemplo I — contando ciclos" accentClass="text-accent5">
        <ExampleBox title="Um processador de 3,5 GHz executa um programa em 2,5 s. Quantos ciclos?">
          <p>
            A taxa de clock já está em <strong>ciclos por segundo</strong>, então basta multiplicar pelo tempo:
          </p>
          <p className="font-mono text-accent2 py-2">
            ciclos = 3,5 × 10⁹ ciclos/s × 2,5 s = <strong>8,75 × 10⁹ ciclos</strong>
          </p>
          <p className="text-sm">
            O erro clássico aqui é dividir em vez de multiplicar, chegando a 1,4 × 10⁹. Confira sempre a unidade:
            se ciclos/s multiplica segundos, os segundos se cancelam e sobram ciclos — que é o que se pediu.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Exemplo II — dimensionando um clock" accentClass="text-accent">
        <ExampleBox title="De 10 s a 2 GHz para 6 s, gastando 1,2× os ciclos. Qual clock é preciso?">
          <p>
            Um programa roda em <strong>10 s</strong> no computador A, cujo clock é de <strong>2 GHz</strong>.
            Quer-se que rode em <strong>6 s</strong> no computador B, que precisa de <strong>1,2 vez</strong> a
            quantidade de ciclos de A. Qual deve ser a taxa de clock de B?
          </p>
          <p className="font-mono text-accent2 py-1">
            Passo 1 — ciclos de A = 10 s × 2 × 10⁹ ciclos/s = 20 × 10⁹ ciclos
          </p>
          <p className="font-mono text-accent2 py-1">
            Passo 2 — ciclos de B = 1,2 × 20 × 10⁹ = 24 × 10⁹ ciclos
          </p>
          <p className="font-mono text-accent2 py-1">
            Passo 3 — taxa de B = 24 × 10⁹ ciclos / 6 s = 4 × 10⁹ ciclos/s = <strong>4 GHz</strong>
          </p>
          <p className="text-sm">
            Repare no que o enunciado está dizendo: B é uma máquina <em>menos eficiente</em> por instrução — gasta
            20% mais ciclos para o mesmo trabalho. Ainda assim entrega o resultado mais rápido, desde que compense
            com frequência. Esquecer o fator 1,2 leva a 3,3 GHz, que seria insuficiente.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Exemplo III — o CPI menor que perde" accentClass="text-accent2">
        <ExampleBox title="A: ciclo de 250 ps e CPI 2,0. B: ciclo de 500 ps e CPI 1,2. Qual é mais rápido?">
          <p>
            As duas máquinas implementam a <strong>mesma ISA</strong> — logo, executam o mesmo número de
            instruções <em>I</em> para o mesmo programa. Aplicando a equação a cada uma:
          </p>
          <p className="font-mono text-accent2 py-1">
            Tempo<sub>A</sub> = I × 2,0 × 250 ps = 500 · I ps
          </p>
          <p className="font-mono text-accent2 py-1">
            Tempo<sub>B</sub> = I × 1,2 × 500 ps = 600 · I ps
          </p>
          <p className="font-mono text-accent py-1">
            Razão = 600 · I / 500 · I = <strong>A é 1,2 vez mais rápido que B</strong>
          </p>
          <p>
            Este é o exemplo mais importante da unidade, e vale entender por quê. O computador A tem o{' '}
            <strong>CPI MAIOR</strong> — gasta, em média, 2,0 ciclos por instrução contra 1,2 de B. Pela métrica
            isolada do CPI, B pareceria melhor. Mas o ciclo de clock de A é a metade, e essa vantagem mais que
            compensa a desvantagem em ciclos.
          </p>
          <p className="text-sm">
            Note também por que <em>I</em> pôde ser tratado como incógnita e cancelado: as ISAs são as mesmas.
            Se fossem diferentes, o número de instruções variaria e não haveria como comparar sem conhecê-lo — é
            exatamente por isso que comparar máquinas de ISAs diferentes só pela frequência de clock não
            significa nada.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Resumo em números" accentClass="text-accent3">
        <StatStrip
          items={[
            { label: '3', value: 'fatores na equação: instruções, CPI e período', accent: 'text-accent' },
            { label: '1/T', value: 'desempenho é o inverso do tempo de execução', accent: 'text-accent2' },
            { label: '1,2×', value: 'a vantagem de A no exemplo III, com CPI maior', accent: 'text-accent3' },
          ]}
        />
      </Subsection>
    </section>
  );
}
