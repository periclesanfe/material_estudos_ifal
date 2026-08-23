import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  ExampleBox,
  ConceptGrid,
  TheoryBlock,
} from '../../../components/sections';

export default function DesempenhoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Atrasos, Vazão e Perda"
        subtitle="Por que contratar mais banda nem sempre resolve"
        colorClass="text-accent4"
        badge="Av1"
      />

      <TheoryBlock title="O atraso nodal">
        <p>
          Em cada nó do caminho, o pacote acumula quatro tipos de atraso. Somados ao longo de todos os nós, eles
          formam o atraso fim a fim que o usuário percebe.
        </p>
      </TheoryBlock>

      <Subsection title="Os quatro componentes" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Atraso de PROCESSAMENTO',
              description:
                'Tempo de examinar o cabeçalho do pacote e decidir para qual enlace de saída encaminhá-lo. Tipicamente da ordem de microssegundos.',
            },
            {
              title: 'Atraso de FILA',
              description:
                'Tempo esperando na fila de saída até chegar a vez de ser transmitido. É o ÚNICO componente que varia fortemente com a carga da rede — e o que explica por que a mesma conexão parece rápida de madrugada.',
            },
            {
              title: 'Atraso de TRANSMISSÃO — L/R',
              description:
                'Tempo de empurrar todos os bits do pacote para dentro do enlace: tamanho do pacote (L) dividido pela taxa do enlace (R). Depende da BANDA.',
            },
            {
              title: 'Atraso de PROPAGAÇÃO — d/s',
              description:
                'Tempo que o bit leva para atravessar fisicamente o meio: distância (d) dividida pela velocidade de propagação (s). Depende da DISTÂNCIA.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A confusão mais comum da disciplina" accentClass="text-accent5">
        <ExampleBox title="Transmissão não é propagação">
          <p>
            <strong>Transmissão</strong> é quanto tempo você leva para colocar o pacote no fio.{' '}
            <strong>Propagação</strong> é quanto tempo o pacote leva para chegar do outro lado.
          </p>
          <p>
            A analogia clássica: uma caravana de carros numa estrada. O tempo de todos os carros passarem pelo
            pedágio é o de transmissão; o tempo de percorrer a estrada até a próxima cidade é o de propagação.
          </p>
          <p>
            Consequência prática: <strong>contratar um link mais rápido reduz o atraso de transmissão, mas não
            muda em nada o tempo que a luz leva para cruzar o oceano</strong>. Por isso um servidor do outro lado
            do mundo continua "distante" mesmo com fibra sobrando dos dois lados.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Vazão e o gargalo" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Vazão média',
              description:
                'Se um arquivo de F bits leva T segundos para chegar, a vazão média é F/T bits por segundo. A vazão instantânea é a taxa em cada momento.',
              accent: 'accent',
            },
            {
              title: 'O enlace gargalo',
              description:
                'Numa cadeia de enlaces, a vazão fim a fim é limitada pelo MAIS LENTO do caminho. Melhorar qualquer outro enlace não muda nada enquanto o gargalo permanecer.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          É o mesmo raciocínio de uma mangueira com um trecho estreito: a vazão é a do trecho estreito, por mais
          larga que seja a mangueira no resto do percurso.
        </p>
      </Subsection>

      <HighlightBox title="Perda de pacote" accent="var(--color-accent5)">
        <p>
          As filas dos roteadores são <strong>finitas</strong>. Quando um pacote chega e encontra a fila cheia, o
          roteador não tem onde guardá-lo e simplesmente o <strong>descarta</strong>.
        </p>
        <p>
          Uma perda, do ponto de vista do remetente, é um pacote que entrou no núcleo da rede e nunca emergiu no
          destino. Guarde este ponto: é justamente a perda que o TCP usará, no módulo 3, como{' '}
          <strong>sinal de congestionamento</strong> — a rede não avisa que está cheia, ela apenas começa a
          descartar.
        </p>
      </HighlightBox>
    </section>
  );
}
