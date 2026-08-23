import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function LogicaDigitalSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Portas Lógicas e Álgebra de Boole"
        subtitle="O andar mais baixo da escada: abaixo daqui só existem dispositivos eletrônicos"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <TheoryBlock title="Onde a abstração começa">
        <p>
          O nível lógico digital é a base do sistema hierárquico: abaixo dele há apenas eletrônica — tensões,
          correntes, transistores. O que a lógica digital faz é <strong>abstrair</strong> essa realidade contínua
          em dois valores, "alto" e "baixo", que passamos a chamar de <strong>1</strong> e <strong>0</strong>.
          Cada um é o complemento do outro, e essa é toda a informação de que precisamos.
        </p>
        <p>
          O bloco fundamental de construção é a <strong>porta lógica</strong>: um dispositivo eletrônico minúsculo
          que calcula uma função dos sinais de entrada. Tudo o mais — somadores, memórias, processadores — é
          arranjo de portas.
        </p>
      </TheoryBlock>

      <Subsection title="Boole e Shannon: dois nomes que não se confundem" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'George Boole (1815–1864)',
              description:
                'Matemático inglês que criou, em 1854, a álgebra em que variáveis só podem valer 1 ou 0 e as operações básicas são AND, OR e NOT. Era matemática pura: não havia circuitos elétricos a que aplicá-la.',
              accent: 'accent',
            },
            {
              title: 'Claude Elwood Shannon (1938)',
              description:
                'Assistente de pesquisa no MIT, aplicou a álgebra de Boole ao projeto de circuitos de relés de telefonia. É essa ponte — quase um século depois — que permite DESCREVER, ANALISAR e sobretudo SIMPLIFICAR um circuito manipulando uma expressão algébrica.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As portas e suas tabelas verdade" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'AND (E) — S = A · B',
              description:
                'Saída 1 apenas quando AMBAS as entradas forem 1. Tabela: 00→0, 01→0, 10→0, 11→1. Também escrita como A ∧ B.',
              accent: 'accent',
            },
            {
              title: 'OR (OU) — S = A + B',
              description:
                'Saída 1 quando PELO MENOS UMA entrada for 1. Tabela: 00→0, 01→1, 10→1, 11→1. Também escrita como A ∨ B.',
              accent: 'accent2',
            },
            {
              title: 'NOT (NÃO) — S = Ā',
              description:
                'Uma só entrada: a saída é o complemento dela. Tabela: 0→1, 1→0. Graficamente, um triângulo com uma bolinha — e é a bolinha que significa a inversão.',
              accent: 'accent3',
            },
            {
              title: 'NAND (NÃO E)',
              description:
                'Negação do AND: saída 1 quando PELO MENOS UMA entrada for 0. Tabela: 00→1, 01→1, 10→1, 11→0. Desenha-se como um AND com bolinha na saída.',
              accent: 'accent4',
            },
            {
              title: 'NOR (NÃO OU)',
              description:
                'Negação do OR: saída 1 apenas quando AMBAS as entradas forem 0. Tabela: 00→1, 01→0, 10→0, 11→0. É com duas NOR realimentadas que se constrói o latch.',
              accent: 'accent5',
            },
            {
              title: 'XOR (OU EXCLUSIVO) — S = A ⊕ B',
              description:
                'Saída 1 se e somente se as entradas forem DIFERENTES. Tabela: 00→0, 01→1, 10→1, 11→0. É a porta que compara: saída 0 significa entradas iguais.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Três representações do mesmo circuito" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Um circuito lógico pode ser descrito de três maneiras equivalentes, e boa parte dos exercícios consiste
          em converter entre elas:
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Expressão booleana',
              description:
                'A forma algébrica, como S = A · B + C. É a representação em que se pode simplificar, aplicando as identidades da álgebra.',
              accent: 'accent',
            },
            {
              title: 'Tabela verdade',
              description:
                'A enumeração de todas as combinações de entrada e suas saídas. Com n entradas são 2ⁿ linhas — completa e inequívoca, mas cresce depressa.',
              accent: 'accent2',
            },
            {
              title: 'Símbolo gráfico',
              description:
                'O desenho do circuito com as portas interligadas. É a forma que se implementa fisicamente.',
              accent: 'accent3',
            },
          ]}
        />
        <ExampleBox title="Da tabela verdade para a expressão: soma de produtos">
          <p>
            É a conversão que mais cai, e o método é mecânico:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Localize todas as linhas em que o resultado final é <strong>1</strong>.</li>
            <li>
              Para cada uma dessas linhas, escreva o <strong>produto (AND)</strong> das variáveis de entrada,{' '}
              <strong>negando</strong> aquelas que valem 0 naquela linha.
            </li>
            <li>Some (<strong>OR</strong>) todos esses produtos.</li>
          </ol>
          <p>
            O resultado tem a forma S = Ā·B̄·C̄ + Ā·B·C̄ + A·B·C̄ + A·B·C. Cada termo AND "reconhece" exatamente uma
            linha de resultado 1; o OR final aceita qualquer uma delas.
          </p>
          <p>
            Em circuito, os cinco passos de Tanenbaum são a mesma coisa: escrever a tabela, gerar os complementos
            com inversores, desenhar uma porta AND para cada linha de resultado 1, ligar suas entradas aos sinais
            corretos e alimentar todas as saídas AND numa porta OR final.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Combinatórios × sequenciais" accentClass="text-accent5">
        <ComparisonTable
          leftLabel="Circuito combinatório"
          rightLabel="Circuito sequencial"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'De que depende a saída',
              left: 'Em qualquer instante, APENAS dos sinais de entrada presentes',
              right: 'Das entradas presentes E dos sinais anteriores — ou seja, do estado',
            },
            {
              criterion: 'Tem memória?',
              left: 'Não. As mesmas entradas produzem sempre a mesma saída',
              right: 'Sim. As mesmas entradas podem produzir saídas diferentes conforme a história',
            },
            {
              criterion: 'Exemplos',
              left: 'ULA, multiplexador, decodificador, somador, comparador',
              right: 'Latch, flip-flop, registrador, memória RAM',
            },
          ]}
        />
        <HighlightBox title="Por que essa fronteira importa" accent="var(--color-accent4)">
          <p>
            Um computador precisa das duas metades. Circuitos combinatórios <strong>calculam</strong> — somam,
            comparam, selecionam. Circuitos sequenciais <strong>lembram</strong> — guardam o resultado do ciclo
            anterior para que o próximo tenha de onde partir. Sem memória não haveria programa; sem lógica
            combinatória não haveria o que guardar.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
