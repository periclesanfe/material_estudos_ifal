import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  ConceptGrid,
  ExampleBox,
  TheoryBlock,
} from '../../../components/sections';

export default function CongestionamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Controle de Congestionamento"
        subtitle="Como milhões de remetentes egoístas produzem uma rede que funciona"
        colorClass="text-accent5"
        badge="Av2"
      />

      <TheoryBlock title="O que é congestionamento">
        <p>
          Congestionamento acontece quando <strong>fontes demais enviam dados rápido demais</strong> para a rede
          conseguir tratar. O resultado são filas longas nos roteadores, atrasos crescentes e, quando os buffers
          enchem, perda de pacotes.
        </p>
        <p>
          Os custos vão além da perda em si: cada pacote descartado gera retransmissão, o que aumenta ainda mais
          a carga; e um pacote descartado no último salto desperdiça toda a banda que consumiu no caminho até
          ali. Congestionamento não tratado se realimenta.
        </p>
      </TheoryBlock>

      <Subsection title="Como o TCP percebe o problema" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Controle fim a fim',
              description:
                'A rede NÃO avisa que está congestionada. O TCP infere o congestionamento observando perdas — se pacotes somem, a rede deve estar cheia. É a abordagem da Internet.',
              accent: 'accent',
            },
            {
              title: 'Controle assistido pela rede',
              description:
                'A alternativa: roteadores sinalizam explicitamente ao remetente que estão congestionados. Exige suporte na infraestrutura, o que o modelo fim a fim dispensa.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As fases do TCP" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'PARTIDA LENTA — crescimento exponencial',
              description:
                'A janela de congestionamento (cwnd) começa em 1 MSS e DOBRA a cada RTT. Apesar do nome, o crescimento é exponencial — "lenta" refere-se ao valor de PARTIDA, que é baixo. A ideia é sondar rapidamente a capacidade disponível.',
            },
            {
              title: 'PREVENÇÃO DE CONGESTIONAMENTO — crescimento linear',
              description:
                'Ao atingir o limiar (ssthresh), o crescimento passa a ser cauteloso: cerca de 1 MSS por RTT. Como já se está perto da capacidade estimada, sondar devagar evita provocar a perda.',
            },
            {
              title: 'Reação a TRÊS ACKs duplicados',
              description:
                'Sinal moderado: a rede ainda entrega pacotes, só um se perdeu. Na versão Reno, a janela cai pela METADE e segue no crescimento linear — a recuperação rápida.',
            },
            {
              title: 'Reação ao ESTOURO DO TEMPORIZADOR',
              description:
                'Sinal grave: nada está voltando. A janela cai para 1 MSS e o protocolo reinicia a partida lenta. A diferença de tratamento é deliberada — o TCP lê a gravidade do sinal.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O dente de serra" accentClass="text-accent4">
        <ExampleBox title="Crescer até doer, recuar, crescer de novo">
          <p>
            O padrão de aumentar a janela até perder um pacote e então cortá-la pela metade produz o
            característico gráfico em <strong>dente de serra</strong> — subidas lineares seguidas de quedas
            abruptas.
          </p>
          <p>
            Parece ineficiente, mas é justamente o que faz a Internet funcionar: sem coordenação central, cada
            conexão sonda continuamente quanto pode enviar e recua quando exagera. O equilíbrio emerge do
            comportamento de todos, não de uma autoridade que distribui banda.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="A pergunta que fecha o módulo" accent="var(--color-accent3)">
        <p>
          Por que o TCP corta a janela <strong>pela metade</strong> em vez de reduzi-la um pouco? Porque uma
          redução tímida demoraria a aliviar a rede e o congestionamento persistiria. E por que volta a crescer,
          se acabou de causar perda? Porque a condição pode ter mudado — outra conexão pode ter terminado,
          liberando capacidade.
        </p>
        <p>
          Esse par de decisões — recuar rápido, avançar devagar — é o que mantém a rede simultaneamente{' '}
          <strong>eficiente</strong> e <strong>estável</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
