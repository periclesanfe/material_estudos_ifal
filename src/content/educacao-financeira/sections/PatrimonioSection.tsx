import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, StatStrip, TheoryBlock } from '../../../components/sections';

export default function PatrimonioSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Quatro Indicadores Patrimoniais"
        subtitle="PMS, PMR, PI e PNIF — quatro metas encaixadas, não somadas"
        colorClass="text-accent2"
        badge="Cerbasi"
      />

      <TheoryBlock title="Por que quatro números, e não um">
        <p>
          Cerbasi propõe quatro marcos patrimoniais porque "ter dinheiro guardado" é vago demais para orientar
          decisões. Cada indicador responde a uma pergunta diferente: sobreviver a um imprevisto, atravessar um
          desemprego longo, estar no ritmo certo para a idade, e poder parar de trabalhar.
        </p>
        <p>
          O ponto que mais gera confusão: <strong>eles não são exclusivos nem se somam</strong>. O PMS está
          contido no PMR, que está contido no PI, que é uma fração do PNIF. São camadas do mesmo patrimônio.
        </p>
      </TheoryBlock>

      <Subsection title="Os quatro indicadores" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'PMS — Patrimônio Mínimo de Sobrevivência',
              description:
                'Seis vezes o GASTO mensal da família. É a reserva que permite reorganizar a vida em caso de desemprego ou emergência. Exigência importante: precisa estar em investimentos de LIQUIDEZ — a casa em que se mora e o carro que se usa não contam, porque não estão disponíveis quando a conta chega.',
            },
            {
              title: 'PMR — Patrimônio Mínimo Recomendado',
              description:
                'Entre 12 e 20 vezes o gasto mensal, conforme a EMPREGABILIDADE: 12 vezes para quem se recoloca com facilidade, 20 para quem tem dificuldade. É a reserva que compra escolhas — inclusive a de recusar uma proposta ruim por não estar com a corda no pescoço.',
            },
            {
              title: 'PI — Patrimônio Ideal',
              description:
                'Dez por cento do gasto anual multiplicado pela idade. Quem gasta R$ 60.000 por ano e tem 40 anos deveria ter cerca de R$ 240.000. É um termômetro de RITMO: diz se a acumulação está compatível com o tempo de vida produtiva já decorrido.',
            },
            {
              title: 'PNIF — Patrimônio Necessário para a Independência Financeira',
              description:
                'Gasto anual dividido pela rentabilidade líquida anual. Com R$ 60.000 de gasto e 8% líquidos, seriam R$ 750.000. É o patrimônio cujos rendimentos cobrem a vida inteira — o ponto em que trabalhar vira opção.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Uma família que gasta R$ 5.000 por mês" accentClass="text-accent5">
        <StatStrip
          items={[
            { label: 'R$ 30 mil', value: 'PMS — seis meses de gasto, em liquidez', accent: 'text-accent' },
            { label: 'R$ 60–100 mil', value: 'PMR — 12 a 20 meses, conforme empregabilidade', accent: 'text-accent2' },
            { label: 'R$ 240 mil', value: 'PI aos 40 anos — 10% × R$ 60 mil × 40', accent: 'text-accent3' },
            { label: 'R$ 750 mil', value: 'PNIF a 8% líquidos ao ano', accent: 'text-accent4' },
          ]}
        />
      </Subsection>

      <HighlightBox title="A conclusão que os números escondem" accent="var(--color-accent4)">
        <p>
          Todos os quatro indicadores partem do <strong>GASTO</strong>, não da renda. A consequência prática é
          contraintuitiva: <strong>reduzir o padrão de gasto aproxima a independência financeira tanto quanto
          aumentar a renda</strong> — e às vezes mais, porque corta o denominador de todos os quatro cálculos ao
          mesmo tempo.
        </p>
        <p>
          Quem gasta R$ 3.000 por mês precisa de R$ 450.000 para ser independente a 8% ao ano. Quem gasta
          R$ 10.000 precisa de R$ 1,5 milhão. Mesma taxa, mesmo esforço de investir — patrimônios que diferem em
          mais de um milhão de reais.
        </p>
      </HighlightBox>
    </section>
  );
}
