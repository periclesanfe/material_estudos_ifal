import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, StatStrip, ExampleBox, TheoryBlock, PanelList } from '../../../components/sections';

export default function DistanciasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Limites da TIA-568"
        subtitle="90, 10 e 100 metros — a tabela que precisa estar na cabeça"
        colorClass="text-accent3"
        badge="Normas e mídias"
      />

      <Subsection title="A tabela" accentClass="text-accent">
        <StatStrip
          items={[
            { label: '90 m', value: 'Cabo horizontal — do rack até a tomada na parede', accent: 'text-accent' },
            { label: '10 m', value: 'Patch cords SOMADOS — manobra no rack mais a estação', accent: 'text-accent2' },
            { label: '100 m', value: 'Canal total — distância fim-a-fim em cobre', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os três números não são independentes: <strong>90 + 10 = 100</strong>. Um patch cord generoso na mesa
          consome o orçamento do que sobra no rack — é uma conta única, distribuída em três lugares.
        </p>
      </Subsection>

      <TheoryBlock title="O que é o cabo horizontal">
        <p>
          É o segmento que conecta as <strong>tomadas de parede</strong> das áreas de trabalho aos{' '}
          <strong>equipamentos centrais</strong> (racks, switches) da sala de telecomunicações, geralmente no
          mesmo andar.
        </p>
        <p>
          Forma a parte mais extensa do cabeamento estruturado de um prédio — e o limite de 90 metros existe para
          garantir o desempenho especificado pela categoria do cabo.
        </p>
      </TheoryBlock>

      <Subsection title="O problema clássico: o galpão de 120 metros" accentClass="text-accent5">
        <ExampleBox title="O que acontece quando o Cat6A passa de 90 metros?">
          <p>
            A pergunta aparece literalmente na atividade presencial dos galpões de 8.400 m²:{' '}
            <em>"Se um cabo Cat6A passar de 90 metros (limite do canal), o que acontece com a certificação? Como
            resolver isso no galpão de 120 metros de fundo?"</em>
          </p>
          <p>
            A resposta não é "usar um cabo melhor" — nenhuma categoria de cobre estende o limite do canal. As
            saídas reais são <strong>arquitetônicas</strong>:
          </p>
        </ExampleBox>
        <PanelList
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Reposicionar a sala de TI',
              description:
                'É o que o cenário da fábrica faz: a sala fica no centro da parede lateral justamente "para tentar diminuir a distância média dos cabos".',
            },
            {
              title: 'Criar um ponto de distribuição intermediário',
              description:
                'Um rack secundário no meio do percurso reinicia a contagem: o backbone o alimenta, e dele saem novos 90 metros de horizontal.',
            },
            {
              title: 'Migrar para fibra',
              description:
                'O limite de 100 metros é do COBRE. A fibra vence distâncias muito maiores — é a solução para interligar blocos e galpões distantes.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que o limite não é negociável" accent="var(--color-accent5)">
        <p>
          Ultrapassar o canal significa <strong>reprovar na certificação</strong>. O certificador (um Fluke DSX ou
          similar) mede atenuação, crosstalk e return loss ao longo do canal — parâmetros que degradam com a
          distância. Um cabo de 110 metros pode até "funcionar" no teste de continuidade e falhar sob carga real,
          que é o pior cenário possível: o problema aparece depois da obra entregue.
        </p>
      </HighlightBox>
    </section>
  );
}
