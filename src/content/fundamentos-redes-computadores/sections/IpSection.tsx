import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  PanelList,
  ColoredPanelList,
  ExampleBox,
  StatStrip,
  TheoryBlock,
} from '../../../components/sections';

export default function IpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Endereçamento IP e Sub-redes"
        subtitle="32 bits, uma máscara e a aritmética que decide quem fala com quem"
        colorClass="text-accent3"
        badge="Av2"
      />

      <TheoryBlock title="A anatomia de um endereço IPv4">
        <p>
          Um endereço IPv4 tem <strong>32 bits</strong>, escritos em notação decimal pontuada — quatro octetos de
          0 a 255. Ele se divide em duas porções: a de <strong>REDE</strong> e a de <strong>HOSPEDEIRO</strong>.
        </p>
        <p>
          Quem determina onde fica a fronteira entre as duas é a <strong>máscara de sub-rede</strong>. O mesmo
          endereço, com máscaras diferentes, pertence a redes diferentes — por isso endereço e máscara andam
          sempre juntos.
        </p>
      </TheoryBlock>

      <Subsection title="As classes históricas" accentClass="text-accent">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Classe A — 1 a 127',
              description: 'Máscara padrão 255.0.0.0. Poucas redes, muitíssimos hospedeiros em cada uma.',
            },
            {
              title: 'Classe B — 128 a 191',
              description: 'Máscara padrão 255.255.0.0. Equilíbrio entre número de redes e de hospedeiros.',
            },
            {
              title: 'Classe C — 192 a 223',
              description: 'Máscara padrão 255.255.255.0. Muitas redes, poucos hospedeiros em cada.',
            },
            {
              title: 'Classe D — 224 a 239',
              description: 'Reservada para MULTICAST — entrega a um grupo de interessados.',
            },
            {
              title: 'Classe E — 240 a 255',
              description: 'Reservada para uso experimental e pesquisa.',
            },
            {
              title: 'Rede 127 — reservada',
              description:
                'Loopback e testes internos. O 127.0.0.1 (localhost) nunca sai da própria máquina.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Faixas privadas (RFC 1918)" accentClass="text-accent2">
        <StatStrip
          items={[
            { label: '10.0.0.0/8', value: 'até 10.255.255.255', accent: 'text-accent' },
            { label: '172.16.0.0/12', value: 'de 172.16 até 172.31', accent: 'text-accent2' },
            { label: '192.168.0.0/16', value: 'até 192.168.255.255', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Esses endereços <strong>não são roteáveis na Internet pública</strong> — por isso podem se repetir em
          milhões de redes domésticas e corporativas simultaneamente. Para alcançar a Internet, precisam passar
          por NAT.
        </p>
      </Subsection>

      <Subsection title="De classes a CIDR" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'O problema do modelo classful',
              description:
                'As classes só permitiam fronteiras em 8, 16 ou 24 bits. Uma organização com 300 máquinas não cabia numa classe C (254) e desperdiçava uma classe B inteira (65 mil endereços).',
            },
            {
              title: 'CIDR — prefixos de qualquer comprimento',
              description:
                'A notação a.b.c.d/x indica quantos bits formam a porção de rede. Um /26 dá 64 endereços, um /23 dá 512 — a alocação passa a caber na necessidade real.',
            },
            {
              title: 'Regra do prefixo mais longo',
              description:
                'Quando várias entradas da tabela casam com o destino, o roteador escolhe a de prefixo MAIS LONGO — a mais específica. É o que permite exceções dentro de faixas maiores.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A aritmética das sub-redes" accentClass="text-accent5">
        <ExampleBox title="Por que 2ⁿ − 2">
          <p>
            Numa sub-rede, dois endereços <strong>nunca</strong> podem ser atribuídos a um hospedeiro: o de todos
            os bits de hospedeiro em <strong>0</strong>, que identifica a própria rede, e o de todos em{' '}
            <strong>1</strong>, que é o endereço de <strong>broadcast</strong>.
          </p>
          <p>
            Daí a fórmula: com <em>n</em> bits de hospedeiro, há <strong>2ⁿ − 2</strong> endereços utilizáveis.
            Uma /24 tem 8 bits de hospedeiro: 256 endereços, <strong>254 utilizáveis</strong>. Uma /26 tem 6
            bits: 64 endereços, <strong>62 utilizáveis</strong>.
          </p>
          <p>
            E ao tomar emprestados <em>b</em> bits da porção de hospedeiro para criar sub-redes, obtêm-se{' '}
            <strong>2ᵇ</strong> sub-redes. Toda divisão de rede é essa troca: mais sub-redes, menos hospedeiros
            em cada uma.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="DHCP, NAT e IPv6" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'DHCP — endereçamento automático',
              description:
                'Atribui endereços dinamicamente em quatro passos: DHCPDISCOVER (o cliente procura servidores), DHCPOFFER (um servidor oferece endereço), DHCPREQUEST (o cliente aceita) e DHCPACK (o servidor confirma).',
            },
            {
              title: 'NAT — uma rede inteira atrás de um IP',
              description:
                'Traduz o par endereço-porta ao sair, permitindo que dezenas de máquinas com endereços privados compartilhem um único IP público. Foi o que adiou por décadas o esgotamento do IPv4.',
            },
            {
              title: 'IPv6 — a solução de fato',
              description:
                'Endereços de 128 bits, cabeçalho de tamanho fixo de 40 bytes e sem fragmentação em roteadores intermediários. A transição se dá principalmente por TUNELAMENTO: datagramas IPv6 viajam encapsulados dentro de datagramas IPv4 nos trechos que ainda não o suportam.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Um resumo para a prova" accent="var(--color-accent4)">
        <p>
          Endereço sem máscara não diz nada. A máscara define a fronteira rede/hospedeiro. Dois endereços por
          sub-rede são sempre reservados (rede e broadcast). Prefixo mais longo vence no repasse. E as faixas
          privadas existem porque o IPv4 acabou muito antes do IPv6 chegar.
        </p>
      </HighlightBox>
    </section>
  );
}
