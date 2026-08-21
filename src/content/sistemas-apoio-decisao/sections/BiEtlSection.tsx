import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function BiEtlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Business Intelligence e ETL"
        subtitle="Da fonte ao dashboard — e a etapa que consome 80% do esforço do projeto"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que é Business Intelligence">
        <p>
          Na definição do Gartner citada no material, BI é{' '}
          <strong>"o processo de transformar dados em informação e, através da descoberta,
          transformar informação em conhecimento"</strong>. Ou, de forma mais operacional: um
          conjunto de técnicas para <strong>extrair inteligência</strong> a partir dos dados de um
          negócio. A escada é essa — dado bruto, informação (dado com contexto) e conhecimento
          (informação que orienta a ação).
        </p>
      </TheoryBlock>

      <Subsection title="A arquitetura de BI" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'FONTES DE DADOS — arquivos, SGBDs, ERP, CRM (os sistemas que já existem)',
            'ETL — extração, transformação e carga, passando por uma área de estágio',
            'DATA WAREHOUSE — o repositório central integrado, com seus data marts',
            'APRESENTAÇÃO — dashboards, OLAP, data mining, DSS e relatórios',
          ]}
        />
      </Subsection>

      <Subsection title="As três etapas do ETL" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'E — EXTRAÇÃO',
              description: 'Os dados são retirados das fontes e conduzidos para uma área de transição (staging), onde são convertidos para um ÚNICO formato. É a etapa mais cara em horas.',
              accent: 'accent',
            },
            {
              title: 'T — TRANSFORMAÇÃO',
              description: 'Onde se fazem os ajustes: melhorar a qualidade dos dados, padronizar valores, tratar nulos e CONSOLIDAR duas ou mais fontes numa visão única.',
              accent: 'accent2',
            },
            {
              title: 'L — CARGA',
              description: 'Estruturar e carregar fisicamente os dados na camada de apresentação, seguindo o MODELO DIMENSIONAL — as tabelas fato e dimensão do data warehouse.',
              accent: 'accent3',
            },
          ]}
        />
        <ExampleBox title="O dado que dimensiona o trabalho">
          <p>
            Segundo Inmon, citado no material: <strong>até 80% de todo o esforço</strong> de
            desenvolvimento de um data warehouse é consumido no processo de ETL — e só a{' '}
            <strong>extração</strong> leva cerca de <strong>60% das horas</strong>. A lição
            prática: em projetos de dados, a maior parte do tempo não está no modelo bonito nem
            no dashboard, e sim em conseguir dados confiáveis.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Ferramentas de ETL" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed">
          O material cita <strong>Pentaho Data Integration</strong>,{' '}
          <strong>Oracle Data Integrator (ODI)</strong>, <strong>bibliotecas Python</strong> (o
          caminho adotado na disciplina, com pandas) e até o <strong>Excel</strong> para casos
          simples. A escolha depende do volume, da frequência da carga e da equipe — mas o
          conceito das três etapas é o mesmo em qualquer ferramenta.
        </p>
      </Subsection>

      <HighlightBox title="Onde o SAD se encaixa" accent="var(--color-accent3)">
        <p>
          O SAD se apoia em toda essa infraestrutura: <strong>data warehousing</strong> (o
          repositório), <strong>OLAP</strong> (a exploração), <strong>data mining</strong> (a
          descoberta de padrões), <strong>BI</strong> (as técnicas), <strong>BAM</strong>{' '}
          (monitoramento de atividade de negócio), modelagem analítica e previsões, e{' '}
          <strong>CRM</strong>. As próximas seções percorrem cada uma dessas camadas.
        </p>
      </HighlightBox>
    </section>
  );
}
