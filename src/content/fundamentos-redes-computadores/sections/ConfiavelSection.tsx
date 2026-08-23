import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  ComparisonTable,
  ExampleBox,
  TheoryBlock,
} from '../../../components/sections';

export default function ConfiavelSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Transferência Confiável de Dados"
        subtitle="Como construir garantia sobre um canal que não garante nada"
        colorClass="text-accent"
        badge="Av2"
      />

      <TheoryBlock title="O problema">
        <p>
          A camada abaixo pode <strong>corromper bits</strong>, <strong>perder pacotes</strong> e{' '}
          <strong>reordenar</strong> o que chega. A camada de transporte precisa entregar à aplicação um fluxo
          íntegro, completo e em ordem.
        </p>
        <p>
          A construção clássica é incremental: cada mecanismo responde a um problema específico, e a ordem em que
          aparecem revela por que cada um é necessário.
        </p>
      </TheoryBlock>

      <Subsection title="Os mecanismos, um problema de cada vez" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'CHECKSUM — contra bits corrompidos',
              description:
                'Um resumo calculado sobre os dados. Se o valor recebido não bate com o recalculado, houve erro na transmissão.',
            },
            {
              title: 'ACK e NAK — para o remetente saber o que houve',
              description:
                'Confirmações positivas e negativas informam ao remetente se o pacote chegou íntegro. Sem realimentação, ele transmite às cegas.',
            },
            {
              title: 'NÚMEROS DE SEQUÊNCIA — contra duplicatas',
              description:
                'Este é o mecanismo mais sutil. Se um ACK se corromper, o remetente retransmite um pacote JÁ ENTREGUE — e sem numeração o receptor o entregaria duas vezes à aplicação.',
            },
            {
              title: 'TEMPORIZADOR — contra pacotes perdidos',
              description:
                'Se um pacote (ou seu ACK) desaparecer completamente, nada chega para disparar reação. O temporizador quebra esse impasse: esgotado o prazo, retransmite.',
            },
            {
              title: 'PARALELISMO — contra o desempenho sofrível',
              description:
                'Enviar um pacote e esperar o ACK antes do próximo desperdiça o enlace quase inteiro. O paralelismo mantém vários pacotes em trânsito simultaneamente.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Go-Back-N × Repetição Seletiva" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Go-Back-N"
          rightLabel="Repetição Seletiva"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Reconhecimento',
              left: 'ACKs CUMULATIVOS — confirmar N significa que tudo até N chegou',
              right: 'ACKs INDIVIDUAIS — cada pacote é reconhecido separadamente',
            },
            {
              criterion: 'Ao detectar perda',
              left: 'Retransmite TODOS os pacotes a partir do perdido',
              right: 'Retransmite APENAS o pacote que faltou',
            },
            {
              criterion: 'Receptor',
              left: 'Simples — descarta o que chega fora de ordem',
              right: 'Complexo — precisa bufferizar pacotes fora de ordem',
            },
            {
              criterion: 'Compromisso',
              left: 'Simplicidade ao custo de retransmitir dados que já haviam chegado',
              right: 'Eficiência no enlace ao custo de memória e complexidade',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Por que o para-e-espera não serve" accentClass="text-accent5">
        <ExampleBox title="A aritmética que justifica o paralelismo">
          <p>
            No protocolo para-e-espera, o remetente envia um pacote e fica parado até o ACK voltar. Se o RTT é
            grande em relação ao tempo de transmitir um pacote, o enlace passa a maior parte do tempo{' '}
            <strong>ocioso</strong>.
          </p>
          <p>
            Num enlace rápido e longo — exatamente o caso da Internet moderna — a utilização cai a uma fração
            minúscula da capacidade. O paralelismo existe para preencher esse tempo morto, e é por isso que o TCP
            trabalha com uma <strong>janela</strong> de pacotes em trânsito, e não com um pacote de cada vez.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Onde isso reaparece" accent="var(--color-accent3)">
        <p>
          Nenhum desses mecanismos é hipotético: o TCP usa checksum, números de sequência (contando bytes), ACKs
          cumulativos, temporizador adaptativo e janela deslizante — uma combinação que fica entre o Go-Back-N e
          a Repetição Seletiva, mais próxima do primeiro mas com retransmissão seletiva na prática.
        </p>
      </HighlightBox>
    </section>
  );
}
