import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ConceptGrid, ExampleBox } from '../../../components/sections';

export default function EquipamentosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Roteador, AP, ONU/ONT e PoE"
        subtitle="Equipamentos que se confundem — e as distinções que importam no projeto"
        colorClass="text-accent"
        badge="Processo de projeto"
      />

      <Subsection title="Access Point × roteador" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Roteador"
          rightLabel="Access Point"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Função',
              left: 'É o "cérebro": gerencia o tráfego, atribui IPs e distribui a internet',
              right: 'Extensor de sinal sem fio — cria pontos de acesso Wi-Fi a partir de um cabo de rede',
            },
            {
              criterion: 'Quando usar',
              left: 'Para criar uma rede NOVA do zero ou substituir a existente',
              right: 'Para estender ou melhorar o Wi-Fi em uma rede CABEADA já existente',
            },
            {
              criterion: 'Cenário típico',
              left: 'Residências e pequenas empresas',
              right: 'Grandes espaços com zonas mortas ou muitos dispositivos — hotéis, galpões, campus',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A diferença está na <strong>inteligência e na função</strong>: o roteador gerencia a conexão, o AP
          apenas irradia. Encher um hotel de roteadores em vez de APs cria várias redes independentes brigando
          entre si — exatamente o oposto do roaming que o cenário exige.
        </p>
      </Subsection>

      <Subsection title="ONU, ONT e conversor de mídia" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'ONU — Optical Network Unit',
              description:
                'O termo mais GENÉRICO para um conversor de sinal óptico para elétrico. Toda ONT é uma ONU, mas nem toda ONU é uma ONT.',
              accent: 'accent',
            },
            {
              title: 'ONT — Optical Network Terminal',
              description:
                'Tipo específico de ONU que fica na casa do cliente e geralmente já integra roteador Wi-Fi e portas LAN para múltiplos dispositivos. É o "modem" da fibra.',
              accent: 'accent2',
            },
            {
              title: 'Conversor de mídia (transceptor óptico)',
              description:
                'Ferramenta mais ampla para conectar tipos diferentes de cabo — fibra para cobre —, sem o foco no "triple play" residencial. É o que aparece na solução da fábrica.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="PoE — energia pelo cabo de dados" accentClass="text-accent4">
        <ExampleBox title="Por que o PoE muda o projeto">
          <p>
            Power over Ethernet alimenta o dispositivo pelo próprio cabo de rede. No cenário do hotel, isso{' '}
            <strong>elimina a necessidade de tomadas no teto</strong> para cada Access Point — o que representa
            economia de obra elétrica e liberdade para posicionar o AP onde a cobertura pede, não onde há energia.
          </p>
          <p>
            Os padrões aparecem nas atividades: <strong>802.3at</strong> e <strong>802.3bt</strong> (PoE++). A
            atividade dos galpões pergunta qual é necessário para alimentar câmeras, APs e automação de portas{' '}
            <em>simultaneamente</em>, e a do IFAL conecta o 802.3bt à exigência de Cat6a.
          </p>
        </ExampleBox>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'PoE Budget',
              description:
                'O total de potência que o switch consegue entregar somando todas as portas. A atividade do IFAL propõe o cálculo direto: um switch de 370 W sustenta 24 câmeras de 15,4 W cada?',
              accent: 'accent4',
            },
            {
              title: 'Switch gerenciável L2/L3',
              description:
                'A atividade dos galpões pergunta por que usar switches gerenciáveis em vez de hubs ou switches comuns num projeto desse porte — a resposta passa por VLANs, QoS e visibilidade da rede.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Onde essas distinções são cobradas" accent="var(--color-accent2)">
        <p>
          As três aparecem literalmente nos slides como perguntas do professor: "Quando devo usar o Access Point e
          não o roteador?", "Qual a principal diferença de Access Point × roteador?" e "Existe diferença entre
          conversor de mídia e ONU?". São distinções que o material trata como conhecimento de projeto, não como
          curiosidade de catálogo.
        </p>
      </HighlightBox>
    </section>
  );
}
