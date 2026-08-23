import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Projeto de Infraestrutura"
        subtitle="Escolher a tecnologia certa para o problema apresentado — e defender a escolha"
        colorClass="text-accent"
      />

      <HighlightBox title="O método da disciplina">
        <p>
          INFR não é uma disciplina de decorar tabelas de cabos. O fio condutor é sempre o mesmo: parte-se de um{' '}
          <strong>cenário real com restrições</strong> — orçamento apertado, galpão com motores, prédio tombado,
          armazém em zona rural — e chega-se a um projeto <strong>justificado</strong>.
        </p>
        <p>
          As tabelas existem porque sem elas não dá para justificar nada. Mas a pergunta da prova nunca é "quantos
          MHz tem o Cat6a"; é "por que Cat6a aqui e Cat6 ali".
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'As normas que regem o cabeamento estruturado',
            'Os limites de distância da TIA-568 — 90, 10 e 100 metros',
            'Categorias de cabo e o que significa a frequência',
            'Blindagens, EMI e crosstalk',
            'Pinagem T568A e T568B',
            'Fibra óptica e outras mídias',
            'As cinco etapas do projeto de redes',
            'Três clientes, três soluções completas',
            'Roteador, Access Point, ONU/ONT e PoE',
            'Os projetos: IFAL, galpões, diagnóstico e micro-ISP',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'Normas e mídias',
              description:
                'A base técnica: normas de cabeamento, limites de distância, categorias, blindagens e pinagem. É o conteúdo dos dois decks de aula e o alicerce de todas as justificativas.',
            },
            {
              title: 'Processo de projeto',
              description:
                'As cinco etapas, a escolha de equipamentos por cenário e os requisitos obrigatórios das atividades em equipe — incluindo os cursos EAD da Cisco NetAcad.',
            },
            {
              title: 'Estudos de caso',
              description:
                'O projeto convergente do IFAL (50 questões), os três galpões de 8.400 m², os quatro casos da Atividade V2 e o projeto do micro-ISP GPON "Meu Bairro Conectado".',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A disciplina foi <strong>intensiva</strong>, concentrada em janeiro de 2026, combinando aulas no
          laboratório, encontros online, cursos EAD, uma visita técnica a distribuidora e atividades em equipe de
          3 a 8 pessoas.
        </p>
      </Subsection>

      <Subsection title="De onde vem o material" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Dois decks de aula',
              description:
                'Aula 01 (6 páginas) e Aula 01+02 consolidada (42 páginas), do Prof. Wellington Pereira — normas, categorias, blindagens, os três cenários-cliente e as cinco etapas do projeto.',
              accent: 'accent',
            },
            {
              title: 'Três PDFs de atividade',
              description:
                'O projeto convergente do IFAL com 50 questões, a atividade presencial com os três galpões e a Atividade V2 com os quatro estudos de caso.',
              accent: 'accent2',
            },
            {
              title: 'Cursos Cisco NetAcad',
              description:
                '"Conceitos Básicos de Redes" (40% na Atividade 01, 100% na VA02) e "Exploring Networking with Cisco Packet Tracer", que substituiu a aula remota de 23/01.',
              accent: 'accent3',
            },
            {
              title: 'Projeto "Meu Bairro Conectado"',
              description:
                'Enunciado completo publicado no mural: seis fases para projetar um micro-ISP GPON fictício usando a própria casa como Centro de Operações de Rede.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material e lacunas declaradas" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma de Projeto de Infraestrutura 2026.1 —
          BSI/IFAL, do Prof. Wellington Pereira.
        </p>
        <p className="text-sm">
          <strong>Lacunas conhecidas:</strong> os arquivos "Aula Gravada 01" e "Aula 02" não puderam ser baixados
          (erro 403) e não foram lidos. O PDF da Atividade 01 menciona um "Gabarito Técnico" para as 50 questões,
          mas ele <strong>não consta no arquivo</strong> — por isso as questões aparecem aqui como temas de
          estudo, não com respostas atribuídas ao professor. Várias páginas dos decks são fotos de equipamentos
          (conectores, anilhas, racks) sem texto extraível.
        </p>
        <p className="text-sm">
          <strong>Divergência no próprio material:</strong> o Cat5e aparece como 100 MHz num slide e "até
          125 MHz" em outro. Os dois valores circulam na literatura — 100 MHz é a especificação da categoria e
          125 MHz aparece como margem de teste de alguns fabricantes.
        </p>
      </HighlightBox>
    </section>
  );
}
