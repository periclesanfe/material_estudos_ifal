import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function NormasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="As Normas do Cabeamento Estruturado"
        subtitle="A &quot;bíblia das redes&quot; — o que cada sigla resolve"
        colorClass="text-accent2"
        badge="Normas e mídias"
      />

      <TheoryBlock title="Por que normas existem">
        <p>
          As normas definem <strong>como os cabos devem ser instalados, quais conectores usar e quais as
          distâncias máximas permitidas</strong>. Sem elas, cada instalador faria do seu jeito e nenhuma rede
          seria certificável, auditável ou expansível por outra equipe.
        </p>
        <p>
          O conjunto não é redundante: cada norma cobre uma camada diferente do problema — o cabo, o caminho por
          onde ele passa, a etiqueta que o identifica, o aterramento que o protege e o ambiente que o abriga.
        </p>
      </TheoryBlock>

      <Subsection title="As três normas de cabeamento" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'ABNT NBR 14565 — Brasil',
              description:
                'A principal norma brasileira. Padroniza o cabeamento estruturado para edifícios comerciais e data centers, baseando-se fortemente nas normas internacionais.',
            },
            {
              title: 'ANSI/TIA-568 — EUA',
              description:
                'Talvez a mais famosa do mundo. Define as categorias (Cat5e, Cat6, Cat6a), a pinagem T568A e T568B e os limites de distância — é dela que vêm os 90, 10 e 100 metros.',
            },
            {
              title: 'ISO/IEC 11801 — global',
              description:
                'Define classes de desempenho (Classe D, E, EA) para garantir que componentes de fabricantes diferentes funcionem juntos. É a norma da interoperabilidade.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Caminhos, espaços e identificação" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'ANSI/TIA-569 — rotas e espaços',
              description:
                'Requisitos para eletrodutos, calhas e canaletas, e para as salas de telecomunicações e de equipamentos. Especifica o RAIO DE CURVATURA dos cabos, para evitar quebra da fibra ou perda de sinal no cobre.',
              accent: 'accent',
            },
            {
              title: 'NBR 16415 — caminhos e espaços',
              description:
                'A norma brasileira focada em caminhos e espaços para cabeamento em edifícios comerciais. Complementa a TIA-569 no contexto nacional.',
              accent: 'accent2',
            },
            {
              title: 'ANSI/TIA-606 — identificação',
              description:
                'Rotulagem de cabos, racks, tomadas e portas, com códigos de cores — azul para estações de trabalho, branco para backbone. "Uma rede sem identificação é um pesadelo para manutenção."',
              accent: 'accent3',
            },
            {
              title: 'Não adianta o melhor cabo…',
              description:
                '…se ele for instalado num duto apertado ou junto a cabos de energia. A TIA-569 existe porque o caminho é tão determinante para o desempenho quanto o próprio cabo.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Aterramento, proteção e data centers" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'ANSI/TIA-607 — aterramento e equipotencialização',
              description:
                'Trata do grounding e do bonding de sistemas de telecomunicações. Essencial para a segurança de equipamentos e pessoas e para reduzir ruído eletromagnético — é a base normativa da exigência de aterrar cabos blindados.',
            },
            {
              title: 'ABNT NBR 5410 — instalações elétricas de baixa tensão',
              description:
                'Garante que a parte elétrica que alimenta a rede esteja segura. Rede e energia são problemas acoplados: interferência e risco elétrico nascem na fronteira entre as duas.',
            },
            {
              title: 'ANSI/TIA-942 — data centers (Tiers 1 a 4)',
              description:
                'Para ambientes de missão crítica que não podem parar. Define níveis de confiabilidade olhando não só o cabo, mas a REDUNDÂNCIA DE ENERGIA, a CLIMATIZAÇÃO e a SEGURANÇA FÍSICA.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Como as normas aparecem nas atividades" accent="var(--color-accent2)">
        <p>
          Nas 50 questões do projeto do IFAL, as normas nunca são cobradas isoladamente — aparecem sempre
          aplicadas: o aterramento de um rack de telecomunicações <em>versus</em> um rack de servidores segundo a
          TIA-607, a etiquetagem de uma rede universitária segundo a TIA-606-B, e a taxa de preenchimento de
          conduítes em curvas de 90 graus segundo a TIA-569.
        </p>
      </HighlightBox>
    </section>
  );
}
