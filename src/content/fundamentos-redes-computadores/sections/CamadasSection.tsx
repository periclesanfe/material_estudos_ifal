import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function CamadasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelos de Camadas e Encapsulamento"
        subtitle="Por que dividir um problema difícil em cinco problemas independentes"
        colorClass="text-accent2"
        badge="Av1"
      />

      <TheoryBlock title="A ideia central">
        <p>
          Cada camada <strong>oferece serviços à camada imediatamente acima</strong> e{' '}
          <strong>usa serviços da camada imediatamente abaixo</strong>, sem precisar conhecer os detalhes internos
          das demais.
        </p>
        <p>
          A consequência prática é enorme: dá para trocar Wi-Fi por cabo sem reescrever o navegador, e criar uma
          aplicação nova sem tocar em roteador nenhum. A modularidade não é elegância acadêmica — é o que
          permitiu a Internet evoluir por partes.
        </p>
      </TheoryBlock>

      <Subsection title="OSI × TCP/IP" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Modelo OSI (referência)"
          rightLabel="Pilha TCP/IP (implementada)"
          criterionLabel="Camada"
          rows={[
            { criterion: '7 / 5', left: 'Aplicação', right: 'Aplicação — absorve também sessão e apresentação' },
            { criterion: '6', left: 'Apresentação', right: '(fundida na aplicação)' },
            { criterion: '5', left: 'Sessão', right: '(fundida na aplicação)' },
            { criterion: '4', left: 'Transporte', right: 'Transporte — TCP e UDP' },
            { criterion: '3', left: 'Rede', right: 'Rede — IP' },
            { criterion: '2', left: 'Enlace', right: 'Enlace' },
            { criterion: '1', left: 'Física', right: 'Física' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O OSI é o <strong>modelo de referência conceitual</strong>, com sete camadas; a pilha TCP/IP é o que a
          Internet realmente executa, com cinco. Sessão e apresentação, quando necessárias, ficam a cargo da
          própria aplicação.
        </p>
      </Subsection>

      <Subsection title="Encapsulamento — e os nomes que ele produz" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Aplicação → MENSAGEM',
              description:
                'A aplicação produz a mensagem — uma requisição HTTP, um e-mail, uma consulta DNS — e a entrega ao transporte.',
            },
            {
              title: 'Transporte → SEGMENTO',
              description:
                'Acrescenta o cabeçalho com portas de origem e destino (e, no TCP, números de sequência e reconhecimento). A mensagem vira segmento.',
            },
            {
              title: 'Rede → DATAGRAMA (pacote)',
              description:
                'Acrescenta o cabeçalho IP, com endereços de origem e destino. O segmento vira datagrama.',
            },
            {
              title: 'Enlace → QUADRO',
              description:
                'Acrescenta o cabeçalho de enlace, com endereços físicos do próximo salto. O datagrama vira quadro.',
            },
            {
              title: 'Física → BITS',
              description: 'Move os bits individuais do quadro de um nó ao seguinte pelo meio físico.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          No destino o processo se inverte: cada camada retira seu cabeçalho e entrega o resto à camada de cima.
          Usar os nomes com precisão importa — é assim que uma captura do Wireshark passa a fazer sentido.
        </p>
      </Subsection>

      <HighlightBox title="O que cada camada resolve" accent="var(--color-accent2)">
        <p>
          <strong>Aplicação:</strong> o que as duas pontas querem dizer uma à outra.{' '}
          <strong>Transporte:</strong> entregar ao processo certo, com ou sem garantias.{' '}
          <strong>Rede:</strong> levar o pacote de um hospedeiro a outro, atravessando redes distintas.{' '}
          <strong>Enlace:</strong> entregar ao próximo nó do caminho. <strong>Física:</strong> transformar bits em
          sinais.
        </p>
        <p>
          Repare que apenas a camada de rede pensa fim a fim em termos de hospedeiro; o enlace pensa sempre no{' '}
          <em>próximo salto</em>. É essa divisão que permite que um pacote atravesse fibra, Wi-Fi e cabo de cobre
          na mesma viagem.
        </p>
      </HighlightBox>
    </section>
  );
}
