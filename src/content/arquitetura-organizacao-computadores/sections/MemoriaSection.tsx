import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function MemoriaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Memória, Endianness e Armazenamento"
        subtitle="Da célula de 1 bit ao Blu-ray: a hierarquia que finge ser uma memória só, grande e rápida"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Bits, células e endereços">
        <p>
          A memória primária guarda programas e dados. Sua unidade básica é o <strong>bit</strong> — 0 ou 1. Os
          bits se agrupam em <strong>células</strong>, e cada célula tem um <strong>endereço</strong>: o número
          que a identifica. A mesma quantidade de bits pode ser organizada de formas diferentes; o material
          mostra 96 bits repartidos ora em bytes, ora em palavras maiores.
        </p>
        <p>
          A escolha importa: uma memória endereçada a byte permite manipular caracteres individualmente, mas
          exige mais endereços para cobrir a mesma capacidade.
        </p>
      </TheoryBlock>

      <Subsection title="Endianness: a ordem dos bytes" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Quando uma palavra de 4 bytes é gravada numa memória endereçada a byte, é preciso decidir em que ordem
          seus pedaços entram. Essa decisão é a <strong>ordenação</strong>, e não há resposta certa — só
          convenções incompatíveis.
        </p>
        <ExampleBox title="O inteiro 0A0B0C0D gravado a partir do endereço a">
          <ComparisonTable
            leftLabel="Big-endian"
            rightLabel="Little-endian"
            criterionLabel="Endereço"
            rows={[
              { criterion: 'a', left: '0A (byte mais significativo)', right: '0D (byte menos significativo)' },
              { criterion: 'a + 1', left: '0B', right: '0C' },
              { criterion: 'a + 2', left: '0C', right: '0B' },
              { criterion: 'a + 3', left: '0D (menos significativo)', right: '0A (mais significativo)' },
            ]}
          />
          <p className="mt-3">
            A regra em uma frase: <strong>big-endian</strong> põe o byte mais significativo no{' '}
            <strong>menor</strong> endereço — a leitura byte a byte sai na mesma ordem em que escrevemos o número.{' '}
            <strong>Little-endian</strong> põe o mais significativo no <strong>maior</strong> endereço, e a
            leitura parece invertida.
          </p>
          <p>
            O <strong>MIPS é bi-endian</strong>: pode comutar entre as duas ordenações conforme a máquina
            hospedeira. É por isso que arquivos binários gravados numa máquina podem sair corrompidos em outra
            se o formato não fixar a ordem explicitamente.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Códigos de correção de erro" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A memória erra. Picos de tensão, raios cósmicos e ruído elétrico invertem bits, e em servidores com
          muitos gigabytes isso deixa de ser hipótese remota. A defesa é acrescentar redundância calculada:
          bits de verificação que permitem notar — e às vezes desfazer — a alteração.
        </p>
        <HighlightBox title="Distância de Hamming: detectar é mais barato que corrigir">
          <p>
            A <strong>distância de Hamming</strong> entre duas palavras é o número de bits em que elas diferem.
            Projetando um código em que todas as palavras válidas estejam suficientemente distantes umas das
            outras, ganha-se poder de diagnóstico:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Para <strong>detectar</strong> <em>d</em> erros de bit único: código de distância{' '}
              <strong>d + 1</strong>.
            </li>
            <li>
              Para <strong>corrigir</strong> <em>d</em> erros de bit único: código de distância{' '}
              <strong>2d + 1</strong>.
            </li>
          </ul>
          <p>
            A intuição da diferença: para detectar basta saber que a palavra recebida não é válida; para corrigir
            é preciso que exista uma única palavra válida claramente mais próxima — daí a folga dobrada. No
            exemplo do material, uma palavra de 16 bits vira <strong>21 bits</strong>, com 5 bits de paridade.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A hierarquia de memória" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Registradores',
              description:
                'Dentro da própria CPU, acessíveis em uma fração de ciclo. Pouquíssimos — o MIPS tem 32 — e por isso preciosos.',
            },
            {
              title: 'Cache',
              description:
                'Guarda as palavras usadas com mais frequência. A CPU consulta a cache PRIMEIRO e só recorre à memória principal se não encontrar. Logicamente, fica entre a CPU e a memória principal.',
            },
            {
              title: 'Memória principal',
              description:
                'DRAM, empacotada em módulos DIMM — o exemplo do material traz 8 chips de 256 MB formando 2 GB, com espaço na placa para vários módulos.',
            },
            {
              title: 'Memória secundária',
              description:
                'Discos e SSDs: enorme, não volátil e lenta em comparação. Existe porque a memória primária é sempre pequena demais para o que se quer guardar.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A hierarquia funciona porque os programas têm <strong>localidade</strong>: tendem a reusar os mesmos
          dados e a acessar posições vizinhas. Sem isso, a cache não adiantaria nada.
        </p>
      </Subsection>

      <Subsection title="SRAM, DRAM e ROM" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'SRAM — estática',
              description:
                'Cada célula usa circuitos parecidos com o flip-flop D. Rápida, mas cara e pouco densa, porque gasta vários transistores por bit. É a tecnologia da cache.',
              accent: 'accent',
            },
            {
              title: 'DRAM — dinâmica',
              description:
                'Cada célula é um transistor e um capacitor minúsculo. Densa e barata, mas mais lenta — e o capacitor descarrega, exigindo refresh periódico. É a memória principal.',
              accent: 'accent2',
            },
            {
              title: 'ROM — somente leitura',
              description:
                'Mantém programa e dados mesmo sem energia, e o conteúdo não se altera na operação normal. É onde vive o código que precisa existir antes de qualquer coisa carregar.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Atenção a uma confusão comum: <strong>SRAM e DRAM são as duas voláteis</strong> — perdem o conteúdo
          quando falta energia. A não volátil é a ROM. O "estática" da SRAM significa apenas que ela não precisa
          de refresh, não que sobreviva ao desligamento.
        </p>
      </Subsection>

      <Subsection title="Memória secundária" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Disco magnético',
              description:
                'Um ou mais pratos de alumínio com revestimento magnetizável, empilhados verticalmente. Trilhas concêntricas formam CILINDROS quando alinhadas entre pratos, e as trilhas se dividem em setores — com mais setores nas zonas externas, onde há mais espaço físico.',
              accent: 'accent',
            },
            {
              title: 'Evolução das interfaces',
              description:
                'O controlador saiu da placa separada e integrou-se ao drive: IDE (meados dos anos 1980) → EIDE → ATA-3 → ATAPI-4 → ATA serial, que transmite 1 bit por vez num conector de 7 pinos a partir de 150 MB/s. Em paralelo, SCSI ofereceu taxas mais altas e até 7 dispositivos por barramento.',
              accent: 'accent2',
            },
            {
              title: 'RAID',
              description:
                'Redundant Array of Independent Disks: para o sistema operacional parece um disco só, mas entrega mais desempenho e confiabilidade. Os níveis 0 a 5 combinam distribuição de dados, espelhamento e paridade em proporções diferentes.',
              accent: 'accent3',
            },
            {
              title: 'SSD',
              description:
                'Disco em estado sólido, feito de células de memória flash não volátil. Sem partes móveis, elimina o tempo de busca mecânica que domina a latência dos discos magnéticos.',
              accent: 'accent4',
            },
            {
              title: 'CD-ROM, CD-R e CD-RW',
              description:
                'O CD-ROM codifica cada byte em um símbolo de 14 bits. O CD-R simula depressões e planos com uma camada de corante entre o policarbonato e a superfície refletiva. O CD-RW usa uma liga de prata, índio, antimônio e telúrio com dois estados estáveis — cristalino e amorfo — de refletividades diferentes, o que permite regravar.',
              accent: 'accent5',
            },
            {
              title: 'DVD e Blu-ray',
              description:
                'O DVD nasceu da combinação de tecnologia e demanda de três indústrias, e ganhou capacidade com dupla face e dupla camada. O Blu-ray troca o laser vermelho pelo AZUL: comprimento de onda menor permite depressões menores e, portanto, mais dados no mesmo disco.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
