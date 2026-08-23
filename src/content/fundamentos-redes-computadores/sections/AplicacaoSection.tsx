import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function AplicacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Princípios da Camada de Aplicação"
        subtitle="As aplicações rodam nas pontas — e é por isso que a Internet pôde crescer"
        colorClass="text-accent5"
        badge="Av1"
      />

      <TheoryBlock title="Onde as aplicações vivem">
        <p>
          Aplicações de rede rodam nos <strong>sistemas finais</strong>, não no núcleo da rede. Roteadores não
          sabem o que é a Web, e-mail ou streaming — só movem pacotes.
        </p>
        <p>
          Essa decisão de projeto é o que permitiu a explosão de aplicações novas sem trocar a infraestrutura:
          para criar algo novo, basta escrever software nas duas pontas. Se cada aplicação exigisse suporte nos
          roteadores, a Internet teria congelado nos anos 1990.
        </p>
      </TheoryBlock>

      <Subsection title="Cliente-servidor × P2P" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Cliente-servidor"
          rightLabel="P2P (par a par)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Quem serve',
              left: 'Um servidor sempre ligado, com endereço fixo e conhecido',
              right: 'Os próprios hospedeiros trocam dados diretamente entre si',
            },
            {
              criterion: 'Comunicação entre clientes',
              left: 'Clientes não se comunicam entre si — tudo passa pelo servidor',
              right: 'Os pares se comunicam diretamente, sem intermediário obrigatório',
            },
            {
              criterion: 'Escalabilidade',
              left: 'Cada novo cliente acrescenta CARGA ao servidor',
              right: 'Cada novo par acrescenta CAPACIDADE além de demandar serviço',
            },
            {
              criterion: 'Complicações',
              left: 'Ponto único de sobrecarga e de falha; exige infraestrutura',
              right: 'Endereços variáveis, pares que entram e saem, gerência difícil',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Sockets e a identificação do processo" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Socket',
              description:
                'A interface entre a aplicação e a camada de transporte — a porta por onde o processo empurra e recolhe dados. É a API que torna a rede programável.',
              accent: 'accent',
            },
            {
              title: 'Endereço IP',
              description: 'Identifica o HOSPEDEIRO de destino, entre todos os conectados à Internet.',
              accent: 'accent2',
            },
            {
              title: 'Número da porta',
              description:
                'Identifica o PROCESSO dentro daquele hospedeiro. Sem ele, o pacote chegaria à máquina certa sem saber a qual programa entregar.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois juntos formam o endereço completo de um processo na Internet. Guarde a ideia: ela reaparece no
          módulo 3 como a base da multiplexação e demultiplexação, e no projeto de sockets da Av3.
        </p>
      </Subsection>

      <HighlightBox title="O que a aplicação precisa decidir" accent="var(--color-accent2)">
        <p>
          Ao projetar uma aplicação de rede, a escolha mais consequente é o{' '}
          <strong>protocolo de transporte</strong>: TCP, com conexão e entrega confiável, ou UDP, sem garantias
          mas sem espera.
        </p>
        <p>
          Essa escolha depende do que a aplicação tolera. Transferência de arquivo não tolera dado corrompido nem
          faltando; voz em tempo real não tolera atraso, mas convive com uma falha pontual. O módulo 3 desenvolve
          exatamente esse par de opções.
        </p>
      </HighlightBox>
    </section>
  );
}
