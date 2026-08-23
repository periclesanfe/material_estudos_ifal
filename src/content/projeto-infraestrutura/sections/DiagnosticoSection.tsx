import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  StatStrip,
  ExampleBox,
  ComparisonTable,
} from '../../../components/sections';

export default function DiagnosticoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Quatro Estudos de Caso"
        subtitle="Atividade V2 — onde o projeto encontra a realidade que não colabora"
        colorClass="text-accent3"
        badge="Estudos de caso"
      />

      <Subsection title="Caso 1 — a metalúrgica cujo ERP trava" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed mb-4">
          Você é o novo gestor de redes de uma indústria que opera 24/7. A diretoria está furiosa porque o ERP
          trava aleatoriamente, atrasando a expedição. O gestor anterior <strong>foi demitido após gastar
          milhares de reais trocando switches sem resolver o problema</strong> — o enunciado avisa desde o começo
          que a resposta não está em comprar equipamento.
        </p>
        <ColoredPanelList
          items={[
            { title: 'Sintoma 1', description: 'A rede funciona perfeitamente nos testes sintéticos (ping, iperf).' },
            { title: 'Sintoma 2', description: 'O problema é intermitente, geralmente entre 10h e 14h.' },
            { title: 'Sintoma 3', description: 'O monitoramento SNMP não mostra saturação de link.' },
            {
              title: 'O "pulo do gato"',
              description:
                'Recentemente a empresa instalou painéis solares no telhado do galpão de TI e trocou as lâmpadas fluorescentes por LEDs industriais de baixo custo.',
            },
          ]}
        />
        <ExampleBox title="O log que fecha o diagnóstico">
          <pre className="overflow-x-auto rounded-xl border border-border bg-bg-secondary px-5 py-4 text-xs md:text-sm leading-relaxed text-text-muted">
{`Registro de Erros de Interface (Switch Principal)

Interface Gi0/1  (Uplink)........: 0 errors, 0 collisions
Interface Gi0/5  (RH/Financeiro).: 450000 FCS-Err, 120000 Alignment-Err
Interface Gi0/12 (Servidor ERP)..: 12 errors, 5 collisions`}
          </pre>
          <p>
            Erros de <strong>FCS (Frame Check Sequence)</strong> e de <strong>alinhamento</strong> significam
            quadros chegando corrompidos — problema de <strong>camada 1</strong>, o meio físico. E estão
            concentrados numa porta, com o uplink limpo, o que descarta causa comum de rede.
          </p>
          <p>
            A janela das 10h às 14h coincide com o <strong>pico de geração dos painéis solares</strong>. Inversores
            solares e drivers de LED baratos são fontes clássicas de EMI. A intermitência que parecia aleatória
            tem um relógio: o do sol.
          </p>
        </ExampleBox>
        <HighlightBox title="A restrição adicional" accent="var(--color-accent5)">
          <p>
            O CEO proibiu a compra de novos equipamentos até que o diagnóstico seja comprovado. O desafio
            proposto: <strong>como testar a integridade física da camada 1 sem um certificador de R$ 50 mil?</strong>{' '}
            E, na Fase A, listar causas possíveis que <em>não sejam</em> software ou configuração — o enunciado
            força o olhar para o físico.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Caso 2 — o projeto &quot;Legado Imóvel&quot;" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed mb-4">
          Uma rede de hospitais comprou um prédio histórico tombado para transformá-lo em centro de diagnóstico
          por imagem de alta complexidade. Três restrições se agravam mutuamente:
        </p>
        <ColoredPanelList
          items={[
            {
              title: 'Restrição estrutural',
              description:
                'Não é possível furar paredes, tetos ou usar calhas aparentes em 60% das salas, por causa do tombamento — o que limita drasticamente o cabeamento convencional.',
            },
            {
              title: 'Demanda técnica',
              description:
                'Os aparelhos de ressonância magnética geram interferência massiva e precisam enviar arquivos DICOM de gigabytes ao datacenter local instantaneamente.',
            },
            {
              title: 'O conflito',
              description:
                'RH e recepção exigem Wi-Fi de alta densidade, mas as paredes internas têm 60 cm de espessura e são de pedra e cal — isolantes naturais de sinal.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Não pode furar (limita o cobre), a RM interfere (limita o cobre de novo) e a parede bloqueia (limita o
          sem fio). O enunciado pede a melhor solução <strong>atentando às limitações financeiras</strong> — ou
          seja, a resposta "fibra invisível em todas as salas" precisa caber no orçamento.
        </p>
      </Subsection>

      <Subsection title="Caso 3 — o dilema da expansão &quot;Shadow IT&quot;" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed mb-4">
          Você projeta a rede de um novo campus universitário e descobre, no meio do trabalho, que os
          departamentos de Engenharia e Artes <strong>já compraram por conta própria</strong> seus switches e APs
          — e querem que você os integre à rede principal com "segurança total".
        </p>
        <ComparisonTable
          leftLabel="Estrutura"
          rightLabel="População e dispositivos"
          criterionLabel="Setor"
          rows={[
            {
              criterion: 'Engenharia — 1.200 m²',
              left: '8 laboratórios + 4 salas de aula',
              right: '150 alunos por turno · 450 dispositivos (média de 3 por pessoa)',
            },
            {
              criterion: 'Artes Visuais — 800 m²',
              left: '5 ateliês + 2 galerias',
              right: '80 alunos por turno · 200 dispositivos (alta carga de upload)',
            },
            {
              criterion: 'Administração — 250 m²',
              left: '6 salas de escritório',
              right: '20 funcionários · 40 dispositivos (sistemas críticos)',
            },
          ]}
        />
        <ColoredPanelList
          items={[
            {
              title: 'Incompatibilidade',
              description:
                'Os equipamentos comprados não suportam protocolos de gerência centralizada como SDN ou SNMPv3 — sem visibilidade, não há política consistente.',
            },
            {
              title: 'Orçamento',
              description:
                'Foi cortado em 40%, porque a reitoria considerou que "os departamentos já resolveram parte do problema".',
            },
            {
              title: 'A entrega esperada',
              description:
                'Não um desenho de rede, mas um PLANO DE GESTÃO DE RISCOS: uma matriz de decisão (vale mais a pena configurar VLANs complexas em switches não-gerenciáveis ou tentar devolver o equipamento?) e uma topologia de contenção isolando esses equipamentos numa DMZ interna rigorosa.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Caso 4 — &quot;Nuvem ou Chão?&quot;" accentClass="text-accent">
        <p className="text-text-muted leading-relaxed mb-4">
          Um e-commerce crescendo 200% ao ano quer migrar 100% para a nuvem. Mas o armazém de logística fica em
          zona rural, onde a única conexão é rádio ou satélite (Starlink), com alta latência e quedas sob chuva.
        </p>
        <StatStrip
          items={[
            { label: '> 2%', value: 'de perda de pacotes já derruba a sessão do coletor', accent: 'text-accent5' },
            { label: '3 min', value: 'perdidos a cada ocorrência, refazendo a conferência', accent: 'text-accent3' },
            { label: 'R$ 50 mil', value: 'de prejuízo por HORA com a expedição parada', accent: 'text-accent2' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O ERP na nuvem exige conexões persistentes em <strong>TCP 1433 (SQL)</strong> ou{' '}
          <strong>HTTPS (443)</strong> — e conexões persistentes são exatamente o que um link instável não
          sustenta. Migrar 100% para a nuvem é apostar o faturamento na estabilidade do satélite.
        </p>
        <ExampleBox title="O orçamento de R$ 65.000">
          <p>
            <strong>SD-WAN appliance</strong> — R$ 8.500 · faz o failover inteligente entre Starlink e rádio.
          </p>
          <p>
            <strong>Micro-servidor de borda</strong> — R$ 18.000 · roda um banco de dados local que sincroniza com
            a nuvem.
          </p>
          <p>
            <strong>Nobreak senoidal 3 kVA + baterias</strong> — R$ 12.000 · mantém a rede ligada por 4 horas em
            quedas de energia, comuns na zona rural.
          </p>
          <p>
            As três somam <strong>R$ 38.500</strong> e cabem no orçamento com folga. Cada uma ataca uma falha
            distinta: o link, a dependência da nuvem e a energia. A resposta é uma{' '}
            <strong>infraestrutura híbrida com Edge Computing</strong> — processar localmente, sincronizar depois.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="O desafio final: o Relatório de Viabilidade" accent="var(--color-accent4)">
        <p>
          O enunciado é explícito sobre o objetivo: preencher a matriz de riscos "separa o 'configurador de
          roteador' do <strong>Gestor de Infraestrutura</strong>".
        </p>
        <p>
          A matriz cruza <strong>risco identificado × impacto (1-5) × probabilidade (1-5) × plano de mitigação ×
          custo</strong>. Dois exemplos vêm preenchidos — interferência nos cabos UTP (impacto 5, probabilidade 4,
          mitigar trocando por fibra ou blindado) e as paredes do prédio tombado (impacto 4, probabilidade 5,
          mitigar com micro-APs e fibra invisível) —, e a queda de link na zona rural fica em branco para o aluno.
        </p>
        <p>
          Junto vem o <strong>diagrama de fluxo de dados em dois estados</strong>: normal (internet OK) e
          contingência (internet offline). Projetar o segundo estado é o que diferencia um plano de um desenho.
        </p>
      </HighlightBox>
    </section>
  );
}
