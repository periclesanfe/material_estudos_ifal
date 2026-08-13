import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ColoredPanelList } from '../../../components/sections';
import { caseSynthesis, filaZeroBlindSpots, filaZeroExperiments, twitchModel, technovaTimeline } from './blocks';

export default function CasosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Estudos de Caso: FilaZero, Twitch e TechNova"
        subtitle="Três formas diferentes de a tecnologia virar — ou não virar — valor, e o que cada uma cobra de quem monta o modelo"
        colorClass="text-accent2"
        badge="Estudo de caso"
      />

      <Subsection title="O que cada caso demonstra" accentClass="text-accent">
        <ConceptGrid items={caseSynthesis} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="FilaZero Saúde: o problema">
        <p>
          Espera excessiva e imprevisível em UBS: chegada de madrugada, perda de tempo produtivo, fluxo ineficiente e
          desconforto. O recorte prioriza <strong>consultas simples</strong>, população dependente do SUS e usuários com
          celulares básicos. A solução combina agendamento, senha online e previsão de horário.
        </p>
        <p>
          A proposta de valor é clara: reduzir a fila física, organizar o fluxo e melhorar a dignidade de quem espera. O
          diferencial alegado envolve nicho, simplicidade e adaptação à conectividade disponível.
        </p>
      </HighlightBox>

      <Subsection title="O que a hipótese ainda precisa enfrentar" accentClass="text-accent3">
        <ColoredPanelList items={filaZeroBlindSpots} />
      </Subsection>

      <Subsection title="Experimentos recomendados" accentClass="text-accent4">
        <PanelList items={filaZeroExperiments} />
      </Subsection>

      <HighlightBox title="Metas não são resultados" accent="var(--color-accent2)">
        <p>
          Os números que circulam com o projeto — espera de 30 minutos, 500 atendimentos, 85% de comparecimento e
          satisfação 4,5 — são <strong>metas ou hipóteses</strong>, não medições. Enquanto não houver dado coletado em
          campo, é assim que precisam ser apresentados.
        </p>
        <p>
          Distinguir <em>meta</em>, <em>projeção</em> e <em>resultado observado</em> é uma exigência de honestidade
          metodológica, e é também o que evita destruir a própria credibilidade na primeira pergunta de um avaliador.
        </p>
      </HighlightBox>

      <Subsection title="Twitch: pivot, plataforma e efeitos de rede" accentClass="text-accent5">
        <PanelList items={twitchModel} columns="" />
      </Subsection>

      <HighlightBox title="Por que a Twitch é uma startup, pela definição" accent="var(--color-accent5)">
        <p>
          <strong>Repetível</strong> porque cada novo criador segue a mesma lógica de transmissão, audiência e
          monetização, sem que a plataforma reinvente o processo. <strong>Escalável</strong> porque a receita cresce com
          criadores e espectadores sem produção centralizada proporcional. E nasceu sob{' '}
          <strong>incerteza extrema</strong>: público, tecnologia e forma de monetizar estavam todos em aberto.
        </p>
        <p>
          O pivot de 2011 demonstra aprendizagem estratégica — o excesso de conteúdo genérico no Justin.tv revelou onde
          estava a demanda concentrada.
        </p>
      </HighlightBox>

      <Subsection title="TechNova: a linha do tempo" accentClass="text-accent">
        <FlowDiagram items={technovaTimeline} />
      </Subsection>

      <HighlightBox title="TechNova: o que o caso ensina" accent="var(--color-accent3)">
        <p>
          A empresa construiu por um longo período um produto tecnicamente sólido, mas sem tração. Um{' '}
          <strong>MVP em vídeo</strong> captou milhares de e-mails; um <strong>Wizard of Oz</strong> simulou o
          onboarding manualmente; o fluxo de desenvolvimento incorporou o estado <strong>Validado</strong>; deploy
          contínuo e pequenos lotes aceleraram os experimentos.
        </p>
        <p>
          As análises revelaram que a <strong>descoberta social</strong> gerava mais valor que o fluxo completo de
          compra, conduzindo a um pivot zoom-in. O teste da funcionalidade de agendamento de retirada foi feito com
          divisão aleatória entre controle e tratamento, medindo <strong>conversão em transações concluídas</strong> — e
          não número de cliques, que subiria de qualquer forma.
        </p>
      </HighlightBox>

      <HighlightBox title="A síntese dos três" accent="var(--color-accent4)">
        <p>
          O FilaZero mostra que problema social relevante não dispensa validação de stakeholders e de operação. A Twitch
          mostra que o modelo pode ser encontrado longe de onde se começou. A TechNova mostra que "pronto tecnicamente"
          e "validado pelo comportamento" são estados diferentes.
        </p>
        <p>
          Nos três, a tecnologia é meio. Quem determina a validade do modelo é o valor entregue e o comportamento
          observado do usuário.
        </p>
      </HighlightBox>
    </section>
  );
}
