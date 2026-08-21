import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function ParalelismoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Paralelismo e Pipeline"
        subtitle="Duas formas de fazer mais de uma coisa ao mesmo tempo: dentro de uma instrução e entre processadores"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Onde buscar paralelismo">
        <p>
          Como a frequência de clock não pode crescer indefinidamente, o desempenho passou a vir de fazer{' '}
          <strong>várias coisas simultaneamente</strong>. O material separa duas formas gerais: paralelismo{' '}
          <strong>no nível de instrução</strong>, explorado dentro do fluxo de instruções individuais, e{' '}
          <strong>no nível de processador</strong>, em que várias CPUs atacam o mesmo problema.
        </p>
      </TheoryBlock>

      <Subsection title="Pipeline: paralelismo no nível de instrução" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A execução de uma instrução se divide em estágios — no exemplo do material, cinco. Enquanto o primeiro
          estágio busca a instrução <em>n</em>, o segundo já decodifica a <em>n−1</em>, e assim por diante. O
          hardware não fica ocioso esperando cada instrução terminar.
        </p>
        <ExampleBox title="A conta do pipeline de 5 estágios">
          <p>
            Com tempo de ciclo <strong>T</strong> e <strong>n</strong> estágios:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Latência</strong> de uma instrução: <strong>nT</strong> — ela ainda precisa atravessar todos
              os estágios. O pipeline <em>não</em> torna uma instrução isolada mais rápida.
            </li>
            <li>
              <strong>Vazão</strong>: uma instrução concluída a <strong>cada ciclo T</strong>, uma vez que o
              pipeline esteja cheio.
            </li>
            <li>
              Ciclos por segundo: <strong>10⁹ / T</strong> (com T em nanossegundos) — e, na mesma medida,
              instruções por segundo, de onde vem a sigla MIPS como unidade de vazão.
            </li>
          </ul>
          <p>
            É o mesmo compromisso da linha de montagem: um carro específico não fica pronto mais depressa, mas
            saem muito mais carros por hora.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Duas variações aparecem no material: <strong>pipelines duplos</strong> com uma unidade de busca comum
          alimentando dois fluxos, e um <strong>pipeline único com várias unidades funcionais</strong>, em que o
          estágio de execução se ramifica em somadores, multiplicadores e unidades de ponto flutuante.
        </p>
      </Subsection>

      <Subsection title="Latência × largura de banda" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Latência (tempo de resposta)"
          rightLabel="Largura de banda (throughput)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que mede',
              left: 'O tempo total para completar UMA tarefa',
              right: 'A quantidade de trabalho concluída por período',
            },
            {
              criterion: 'No pipeline de n estágios',
              left: 'nT — não melhora; pode até piorar um pouco pelos registradores entre estágios',
              right: 'Uma instrução por ciclo T — melhora n vezes',
            },
            {
              criterion: 'Quem se importa',
              left: 'O usuário final, que espera a resposta na tela',
              right: 'O gerente do centro de dados, que precisa atender a muitos usuários',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Paralelismo no nível de processador" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'SIMD — Single Instruction, Multiple Data',
              description:
                'Um grande número de processadores idênticos executa a MESMA sequência de instruções sobre conjuntos de dados DIFERENTES. Uma única unidade de controle comanda todos, o que economiza enormemente em transistores.',
              accent: 'accent',
            },
            {
              title: 'GPU',
              description:
                'A aplicação comercial do SIMD: as unidades de processamento gráfico entregam muito poder computacional com relativamente poucos transistores, justamente por compartilharem controle entre milhares de núcleos simples. O Fermi da Nvidia é o exemplo citado.',
              accent: 'accent2',
            },
            {
              title: 'Processador vetorial',
              description:
                'Parente próximo do SIMD: executa a mesma sequência de operações sobre pares de elementos, mas todas as adições ocorrem numa única unidade funcional altamente paralela, em vez de em processadores separados.',
              accent: 'accent3',
            },
            {
              title: 'Multiprocessador',
              description:
                'Várias CPUs compartilhando uma MEMÓRIA COMUM — CPUs fortemente acopladas. A comunicação é implícita: basta escrever e ler as mesmas posições. Em troca, é preciso resolver coerência de cache e concorrência.',
              accent: 'accent4',
            },
            {
              title: 'Multicomputador',
              description:
                'Várias CPUs, cada uma com sua MEMÓRIA LOCAL — CPUs fracamente acopladas. Sem memória compartilhada, a comunicação é explícita, por TROCA DE MENSAGENS. Escala melhor; programar é mais trabalhoso.',
              accent: 'accent5',
            },
          ]}
        />
        <HighlightBox title="O critério que separa multiprocessador de multicomputador" accent="var(--color-accent4)">
          <p>
            É a <strong>memória</strong>, e só ela. Compartilhada e única → multiprocessador, fortemente acoplado.
            Local a cada CPU, com mensagens entre elas → multicomputador, fracamente acoplado. Não confunda com
            SIMD, que classifica outra coisa: quantos fluxos de <em>instrução</em> e de <em>dados</em> existem.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
