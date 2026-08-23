import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, TheoryBlock, PanelList } from '../../../components/sections';

export default function CategoriasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Categorias de Cabo e Frequência"
        subtitle="Do Cat3 ao Cat8 — e o que os MHz realmente significam"
        colorClass="text-accent4"
        badge="Normas e mídias"
      />

      <TheoryBlock title="A metáfora da estrada">
        <p>
          A frequência do cabo, medida em <strong>MegaHertz (MHz)</strong>, indica a largura de banda — a
          capacidade máxima de transmitir dados sem interferência. O material usa a imagem da estrada: um cabo de
          maior frequência é <strong>uma estrada mais larga</strong>, por onde passam mais carros ao mesmo tempo.
        </p>
        <p>
          A frequência está diretamente ligada à categoria. E frequências mais altas não só permitem mais
          velocidade — também <strong>reduzem a interferência</strong>, melhorando a qualidade do sinal.
        </p>
      </TheoryBlock>

      <Subsection title="As categorias em uso" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Cat5e — 1 Gbps, UTP',
              description:
                'Par trançado não blindado. Suporta 1 Gbps, ideal para o dia a dia e estudos básicos, com bom custo-benefício. É a categoria mais difundida no parque instalado.',
            },
            {
              title: 'Cat6 — 250 MHz, 10 Gbps só até 55 m',
              description:
                'Melhor que o Cat5e, com menos interferência. Entrega 1 Gbps com folga em distâncias maiores, mas os 10 Gbps valem apenas em percursos curtos — até 55 metros. É a escolha típica quando o foco é PoE.',
            },
            {
              title: 'Cat6a — 500 MHz, 10 Gbps até 100 m',
              description:
                'Suporta 10GBASE-T no canal completo de 100 metros, com blindagem interna contra interferências. É o mínimo exigido nas atividades práticas da turma.',
            },
            {
              title: 'Cat7 — 600 MHz, S/FTP, Classe F',
              description:
                'Cabo blindado de alto desempenho, definido pela ISO/IEC como Classe F. 10 Gbps em 100 metros com proteção superior contra EMI e diafonia. Usa conectores TERA ou GG45, embora muitas vezes seja terminado em RJ45.',
            },
            {
              title: 'Cat8 — 2000 MHz, 25/40 Gbps até 30 m',
              description:
                'Necessariamente blindado. Troca alcance por velocidade: chega a 40 Gbps, mas só em 30 metros. É cabo de interligação DENTRO do data center, não de cabeamento horizontal.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As categorias históricas" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Categoria 1 — não reconhecida pela TIA',
              description: 'Usada em instalações telefônicas e redes antigas.',
            },
            {
              title: 'Categoria 2 — não reconhecida pela TIA',
              description: 'Projetada para as antigas redes token ring.',
            },
            {
              title: 'Categoria 3 — até 16 MHz',
              description: 'O PRIMEIRO padrão desenvolvido especialmente para redes. Continua reconhecida.',
            },
            {
              title: 'Categoria 4 — não reconhecida pela TIA',
              description: 'Até 20 MHz e 20 Mbps. Foi substituída pela categoria 5.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Três categorias saíram do reconhecimento da TIA: <strong>1, 2 e 4</strong>. A Cat3 permanece como marco
          histórico — foi a primeira feita para redes, e não adaptada da telefonia.
        </p>
      </Subsection>

      <HighlightBox title="Uma divergência do próprio material" accent="var(--color-accent5)">
        <p>
          Vale registrar: o deck da turma apresenta o <strong>Cat5e ora como 100 MHz, ora como "até 125 MHz"</strong>,
          em slides diferentes. Os dois números circulam na literatura — 100 MHz é a especificação da categoria, e
          125 MHz aparece como margem de teste adotada por alguns fabricantes.
        </p>
        <p>
          Como o material não resolve a divergência, ela fica anotada aqui em vez de ser silenciosamente
          arbitrada. Para efeito de projeto, o que importa é o teto de <strong>1 Gbps</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
