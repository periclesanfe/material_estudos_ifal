import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function DataWarehouseSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Data Warehouse e Modelagem Dimensional"
        subtitle="Fato, dimensão e medida — o modelo que faz a pergunta analítica ser rápida"
        colorClass="text-accent"
      />

      <TheoryBlock title="Data warehouse e data mart">
        <p>
          <strong>Data warehouse</strong> é "uma grande base de dados capaz de integrar, de forma
          concisa e confiável, as informações de interesse da empresa que se encontram espalhadas
          pelos sistemas operacionais e em fontes externas, para posterior{' '}
          <strong>apoio à tomada de decisão</strong>".
        </p>
        <p>
          <strong>Data mart</strong> é um <strong>subconjunto</strong> do DW, direcionado a um
          departamento ou a uma área específica de processos de negócio (um "assunto"). A relação:
          um DW é composto de vários data marts.
        </p>
      </TheoryBlock>

      <Subsection title="Os três elementos da modelagem dimensional" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'FATO',
              description: 'Coleção de dados de medidas e de contexto. Cada fato representa um PROCESSO DE NEGÓCIO (vendas, atendimentos, vínculos de emprego) — tudo que reflete a evolução do dia a dia. Implementado na tabela fato.',
              accent: 'accent',
            },
            {
              title: 'DIMENSÕES',
              description: 'Os elementos que participam do fato: as formas possíveis de VISUALIZAR os dados — por mês, país, loja, produto, vendedor. Normalmente NÃO possuem atributos numéricos.',
              accent: 'accent2',
            },
            {
              title: 'MEDIDAS',
              description: 'Os atributos NUMÉRICOS que representam o fato — a performance do indicador em relação às dimensões: valor real de vendas, quantidade de produtos vendidos.',
              accent: 'accent3',
            },
          ]}
        />
        <ExampleBox title="As quatro perguntas que revelam um fato">
          <p>
            Para identificar os elementos que participam de um fato, o material propõe quatro
            perguntas: <strong>ONDE</strong> aconteceu? <strong>QUANDO</strong> aconteceu?{' '}
            <strong>QUEM</strong> executou? <strong>O QUE</strong> é o objeto do fato? Cada
            resposta aponta para uma dimensão — e o que sobra, em números, são as medidas.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Estrela × floco de neve" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Modelo ESTRELA (star)"
          rightLabel="Floco de neve (snowflake)"
          rows={[
            { criterion: 'Estrutura', left: 'Tabela fato central cercada pelas dimensões, formando uma estrela', right: 'Dimensões normalizadas em subtabelas, ramificando a estrela' },
            { criterion: 'Junções na consulta', left: 'Poucas — dimensões desnormalizadas', right: 'Mais junções para reconstruir cada dimensão' },
            { criterion: 'Uso', left: 'A estrutura básica de um data mart', right: 'Segundo o material: "pouco uso na atualidade"' },
          ]}
        />
      </Subsection>

      <Subsection title="OLAP e o cubo" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <strong>OLAP</strong> é "o conjunto de ferramentas que possibilita efetuar a exploração
          dos dados do data warehouse". A metáfora do <strong>cubo</strong> ajuda: cada aresta é
          uma dimensão (localização com hierarquia estado → cidade → loja, tempo, produto) e cada
          célula guarda a medida. As operações clássicas:
        </p>
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Drill down / drill up', description: 'Descer na hierarquia para ver mais detalhe (ano → trimestre → mês) ou subir para o agregado.' },
            { title: 'Slice', description: 'Fatiar: fixar um valor de uma dimensão (só o ano de 2025) e olhar o resto.' },
            { title: 'Dice', description: 'Recortar um subcubo combinando faixas de várias dimensões.' },
            { title: 'Pivot', description: 'Girar os eixos da análise, trocando o que está nas linhas e nas colunas.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="O exemplo da turma: DW da COVID em Alagoas" accent="var(--color-accent3)">
        <p>
          O material fecha com um caso completo: um data warehouse da COVID com a tabela{' '}
          <strong>fatoCovid</strong> cercada por <strong>dimTempo</strong> e{' '}
          <strong>dimComorbidades</strong>, alimentando um dashboard com 300 mil casos
          confirmados, 293 mil recuperados, 6.935 óbitos, evolução mensal, distribuição por
          gênero, mapa por região e ranking de óbitos por comorbidade. É o mesmo caminho que o
          exercício de ETL percorre — e o modelo do projeto final com a RAIS.
        </p>
      </HighlightBox>
    </section>
  );
}
