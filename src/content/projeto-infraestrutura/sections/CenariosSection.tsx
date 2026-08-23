import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ComparisonTable, TheoryBlock } from '../../../components/sections';

export default function CenariosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Três Clientes, Três Soluções"
        subtitle="O exercício central da disciplina: do cenário à especificação"
        colorClass="text-accent4"
        badge="Processo de projeto"
      />

      <TheoryBlock title="O raciocínio, não a tabela">
        <p>
          Os três cenários da aula seguem sempre a mesma estrutura:{' '}
          <strong>cenário → necessidade principal → solução de equipamentos → cabeamento</strong>. É o modelo de
          resposta esperado nas atividades — e a razão pela qual as tabelas de categoria precisam estar
          memorizadas: elas são o argumento, não a resposta.
        </p>
      </TheoryBlock>

      <Subsection title="1. Escritório de design e arquitetura" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Cenário',
              description:
                'Precisam transferir arquivos pesados — renderizações 3D e vídeos 4K — entre computadores e um servidor NAS central. O NAS é o armazenamento centralizado da rede, onde todos acessam, compartilham e fazem backup.',
            },
            {
              title: 'Necessidade principal',
              description: 'Largura de banda alta e baixa latência no cabeamento.',
            },
            {
              title: 'Solução de equipamentos',
              description:
                'Roteador Dual-WAN (dois links de internet redundantes), switch gerenciável com suporte a 10GbE e o servidor NAS para armazenamento centralizado dos projetos.',
            },
            {
              title: 'Cabeamento: Cat6a',
              description:
                'Suporta 500 MHz e 10 Gbps em até 100 metros, com blindagem interna contra interferências. É o único que entrega 10 Gbps no canal completo.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="2. Hotel de médio porte" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Cenário',
              description:
                'Centenas de hóspedes conectando celulares e notebooks simultaneamente, em diferentes andares.',
            },
            {
              title: 'Necessidade principal',
              description:
                'Cobertura Wi-Fi estável, isolamento de rede (hóspedes não podem ver dados do hotel) e suporte a muitos acessos simultâneos.',
            },
            {
              title: 'Solução de equipamentos',
              description:
                'Gateway/firewall para controle de banda e segurança; switch PoE para alimentar os pontos de acesso pelo próprio cabo de rede, eliminando tomadas no teto; e diversos Access Points Wi-Fi 6 nos corredores com Mesh ou Roaming, para o cliente não desconectar ao caminhar.',
            },
            {
              title: 'Cabeamento: Cat6',
              description:
                'Suporta 1 Gbps com folga e é ideal para alimentação PoE dos Access Points. Aqui o gargalo não é banda por ponto — é densidade e cobertura.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="3. Planta industrial / fábrica" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'Cenário',
              description:
                'Galpões imensos com máquinas que geram muita interferência eletromagnética, e escritórios distantes.',
            },
            {
              title: 'Necessidade principal',
              description: 'Imunidade a ruídos elétricos e conexão de longa distância entre blocos de prédios.',
            },
            {
              title: 'Solução de equipamentos',
              description:
                'Switch industrial, com carcaça reforçada que suporta altas temperaturas e poeira; e conversores de mídia, para transformar o sinal elétrico em luz.',
            },
            {
              title: 'Cabeamento: fibra + Cat7/Cat8',
              description:
                'Fibra óptica monomodo ou multimodo para interligar os galpões — imune à EMI dos motores. Junto às máquinas, Cat7 ou Cat8 S/FTP, com blindagem par a par contra o ruído pesado.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os três lado a lado" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Necessidade dominante"
          rightLabel="O que ela determina"
          criterionLabel="Cliente"
          rows={[
            {
              criterion: 'Escritório de design',
              left: 'Banda e latência para mover arquivos grandes',
              right: 'Cat6a e switch 10GbE — a rede precisa acompanhar o disco',
            },
            {
              criterion: 'Hotel',
              left: 'Cobertura, densidade e isolamento',
              right: 'Cat6, PoE e muitos APs — o gargalo é o ar, não o cabo',
            },
            {
              criterion: 'Fábrica',
              left: 'Imunidade a EMI e distância',
              right: 'Fibra entre blocos e Cat7/Cat8 blindado nas máquinas',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A lição transversal" accent="var(--color-accent4)">
        <p>
          Nenhum dos três cenários pede "o melhor cabo". O hotel usa <strong>Cat6</strong> e não Cat6a — não por
          economia, mas porque a necessidade ali é PoE e cobertura, não 10 Gbps por ponto. Especificar acima do
          necessário é tão indefensável quanto especificar abaixo: em ambos os casos, o projetista não soube
          justificar a escolha.
        </p>
      </HighlightBox>
    </section>
  );
}
