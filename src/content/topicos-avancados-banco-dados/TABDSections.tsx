import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  ExampleBox,
  TheoryBlock,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { TABD_EXAMS, TABD_GUIDE_CONTEXT, TABD_TOPICS, QUIZ_DATA } from './data';

interface TABDSectionsProps {
  activeSection: string;
}

/* ============================ AV1 ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="De dados a decisões" subtitle="A disciplina reúne Business Intelligence, Data Warehouse e Ciência de Dados: como transformar dados espalhados em conhecimento para decidir" colorClass="text-accent" />
      <HighlightBox title="O problema central">
        <p>
          As funções de uma empresa — vendas, marketing, operações, finanças, RH — são <strong>interligadas</strong>, mas os dados que elas produzem <strong>não estão</strong>: ficam fragmentados em vários sistemas. O objetivo desta disciplina é reunir, integrar e analisar esses dados para apoiar a decisão.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">A cadeia que percorre toda a disciplina</h3>
        <FlowDiagram items={['Fontes (OLTP)', 'ETL', 'Data Warehouse', 'OLAP / Análise', 'Decisão']} />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Os sistemas transacionais (OLTP) geram os dados; o <strong>ETL</strong> extrai, limpa e integra; o <strong>Data Warehouse</strong> os organiza de forma histórica; e as ferramentas de <strong>OLAP, BI e mineração</strong> os transformam em análise.
        </p>
      </div>
      <HighlightBox title="Você já viu o outro lado disso" accent="var(--color-accent4)">
        <p>
          Em <strong>Administração e Projeto de Banco de Dados</strong> você aprendeu a <strong>normalizar</strong>: eliminar redundância para que cada dado exista em um lugar só. Aqui você vai fazer o caminho inverso e <strong>desnormalizar</strong> de propósito. Não é contradição: são objetivos diferentes. O modelo normalizado serve à <em>escrita</em> segura e frequente; o modelo dimensional serve à <em>leitura</em> analítica de grandes volumes. O banco que você normalizou lá é exatamente a <strong>fonte OLTP</strong> que alimenta o DW daqui.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Como o conteúdo se divide</h3>
        <ConceptGrid items={disciplinaMapa} columns="md:grid-cols-2" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">As ferramentas e o exemplo que atravessam a disciplina</h3>
        <PanelList items={disciplinaFerramentas} columns="md:grid-cols-2" />
      </div>
      <HighlightBox title="Atenção: a prova é só 40% da nota" accent="var(--color-accent2)">
        <p>
          Esta página cobre a teoria cobrada na prova escrita — que vale <strong>4 dos 10 pontos</strong> de cada nota. Os outros <strong>6 pontos</strong> vêm dos <strong>projetos práticos</strong>, que constroem um Data Warehouse de verdade, do modelo à mineração. Comece pela seção <strong>Os Projetos Práticos</strong> para saber o que precisa entregar.
        </p>
      </HighlightBox>
    </section>
  );
}

const disciplinaMapa: ConceptItem[] = [
  { title: 'AV1 — Fundamentos e Modelagem', description: 'Business Intelligence, Data Warehouse, Modelagem Dimensional (fato, dimensões, star/snowflake, modelagem avançada e projeto físico) e ETL com Pentaho. É a base para construir o repositório analítico.', accent: 'accent' },
  { title: 'AV2 — Análise e Ciência de Dados', description: 'Análise Exploratória, OLAP, Power BI, Big Data, Mineração de Dados e Orange/Machine Learning. É onde se extrai valor dos dados já organizados.', accent: 'accent3' },
];

const disciplinaFerramentas: PanelItem[] = [
  { title: 'Oracle SQL Developer Data Modeler', description: 'Onde o modelo dimensional é desenhado e de onde sai o script SQL de implantação exigido no projeto da 1ª nota. Segue um padrão de nomenclatura: PK_, FK_, AK_, IDX_, CK_ e NN_.' },
  { title: 'Pentaho Data Integration (Kettle)', description: 'A ferramenta de ETL: é nela que se desenham as transformações que carregam as dimensões e a tabela fato — o entregável da 2ª nota.' },
  { title: 'Power BI', description: 'A ferramenta de análise: limpeza no Power Query, medidas em DAX e os painéis de consultas analíticas cobrados na 3ª nota.' },
  { title: 'Orange Data Mining', description: 'A ferramenta de mineração, por programação visual com widgets. Sustenta o projeto individual da 4ª nota.' },
  { title: 'Northwind — o exemplo condutor', description: 'A base transacional usada nas aulas (o clássico banco de vendas com clientes, pedidos, produtos, funcionários e transportadoras). Foi dela que se modelou o DW de exemplo e se construíram todas as cargas.' },
  { title: 'Os quatro temas do cronograma', description: 'Conceitos e Modelagem Dimensional → Integração de Dados (ETL) → Análise de Dados → Mineração de Dados. Cada tema fecha com um projeto entregue.' },
];

function ProjetosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Os Projetos Práticos" subtitle="60% da nota está aqui: quatro entregas encadeadas que constroem um Data Warehouse do zero à mineração" colorClass="text-accent2" />
      <HighlightBox title="A conta da avaliação">
        <p>
          Em cada uma das duas notas: <strong>projeto em dupla, 6 pontos</strong> + <strong>prova escrita individual, 4 pontos</strong>. O projeto pesa <strong>60%</strong>. Na 2ª nota, os 4 pontos individuais correspondem ao <strong>projeto de mineração de dados</strong>, também entregue como trabalho escrito e apresentação. Todo projeto tem <strong>apresentação com slides</strong> (defesa prévia) além do documento.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">A cadeia das quatro entregas</h3>
        <FlowDiagram items={['1ª Modelagem do DW', '2ª Cargas ETL', '3ª Consultas analíticas', '4ª Mineração']} />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Repare que os projetos são <strong>cumulativos</strong>: a 2ª nota exige "tudo o que consta na primeira parte, com possíveis correções", e a 3ª exige tudo da segunda. Não são quatro trabalhos independentes — é <strong>um</strong> trabalho que cresce, e o que você corrigir cedo economiza retrabalho depois.
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">O que cada nota exige</h3>
        <PanelList items={projetosEntregas} columns="" />
      </div>

      <TheoryBlock title="A estrutura de um trabalho que deu certo">
        <p>
          O professor disponibilizou <strong>dois trabalhos-modelo</strong> da primeira nota (um sobre partidas da NBA, outro sobre o impacto da vacinação contra a COVID-19 em Alagoas). Ambos seguem o mesmo esqueleto, que vale copiar:
        </p>
        <p>
          <strong>1. Introdução</strong> — por que o assunto importa e por que ele precisa de um DW. <strong>1.1 Objetivos</strong> (o objetivo geral, em uma frase) e <strong>1.2 Objetivos secundários</strong> (a lista de etapas: fazer a AED, modelar o star schema, criar o DW). <strong>2. Revisão bibliográfica.</strong> <strong>3. Metodologia e ferramentas</strong> — quais ferramentas e por quê. <strong>3.1 A área de estudo</strong> — explique o domínio para quem não o conhece. <strong>3.2 O sistema OLTP</strong> — de onde vieram os dados, com <strong>3.2.1 uma mini análise exploratória</strong> (estatísticas descritivas, box plot, identificação de outliers). <strong>3.3 Modelagem do Data Warehouse</strong> — o diagrama do star schema, com uma frase explicando o papel de cada dimensão e de cada fato. <strong>3.4 Dicionário de dados</strong> — uma tabela por entidade, com nome, descrição, tipo, tamanho e restrição de domínio de cada campo. E no <strong>anexo</strong>, o script SQL.
        </p>
        <p>
          Dois detalhes que os modelos acertam e que costumam faltar: o dicionário de dados <strong>marca explicitamente qual atributo é SCD Tipo 2</strong> (com as colunas de data início, data fim e versão ao lado), e o modelo tem <strong>duas tabelas fato</strong> quando o negócio tem dois assuntos distintos — desempenho coletivo e desempenho individual — em vez de misturar tudo numa fato só.
        </p>
      </TheoryBlock>

      <ExampleBox title="Traduzindo a pergunta do gestor em modelo">
        <p>
          O exercício central da disciplina é converter uma frase de negócio em <strong>métrica POR dimensão POR dimensão</strong>. Um diretor de rede hoteleira pede:
        </p>
        <p className="italic">
          "Necessito mapear a rentabilidade por tipo de unidade, tipo de acomodação, região geográfica e sazonalidade."
        </p>
        <p>
          Leitura: a <strong>métrica</strong> é rentabilidade (e ela é <strong>não-aditiva</strong>, por ser um percentual — some receita e custo, calcule o percentual depois). As <strong>dimensões</strong> são Hotel (com o atributo tipo de unidade), Acomodação, Geografia e Tempo. "Sazonalidade" não é uma dimensão nova: é um <strong>atributo da dimensão Tempo</strong> (mês, estação, feriado) — exatamente por isso a dimensão Tempo do DW da aula tem colunas como <code>estacao</code>, <code>ferias</code> e <code>fim_de_semana</code>. Faça esse exercício com cada pergunta do seu cliente antes de desenhar qualquer tabela.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Erros que custam nota</h3>
        <PanelList items={projetosArmadilhas} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const projetosEntregas: PanelItem[] = [
  {
    title: '1ª nota — Modelagem de um Data Warehouse (dupla, 6 pts)',
    description: 'Apresentação com slides + trabalho escrito com: definição do projeto e escopo (o sistema OLTP e os requisitos que o DW vai atender); descrição detalhada da base OLTP com dicionário de dados, análise exploratória e filtros realizados; o modelo lógico e físico em star schema; e, no ANEXO, o script SQL de implantação em Oracle — tabelas com constraints, tablespaces e sequências.',
  },
  {
    title: '2ª nota — Integração de Dados (dupla, 6 pts)',
    description: 'Vídeo demonstrando o passo a passo das cargas sendo executadas + tudo o que constava na primeira parte, já corrigido, mais a documentação dos planos ETL e os arquivos e orientações para executá-los. É aqui que as transformações do Pentaho viram entregável.',
  },
  {
    title: '3ª nota — Consultas Analíticas (dupla, 6 pts)',
    description: 'Apresentação com slides + tudo da segunda parte corrigido, mais os painéis de consultas, gráficos e planilhas criados para apresentar a análise, e as conclusões e sugestões obtidas a partir deles. Repare no verbo: não basta exibir o painel, é preciso concluir algo com ele.',
  },
  {
    title: '4ª nota — Mineração de Dados (INDIVIDUAL, 4 pts)',
    description: 'Apresentação contemplando aspectos técnicos (público: equipe de TI) e de negócio (público: gestores) + trabalho escrito sugerido em formato de artigo científico: definição do problema em termos de mineração e objetivos de negócio; aquisição e preparação dos dados (dicionário, AED, filtros); todas as etapas do workflow do Orange, incluindo construção e avaliação dos modelos; e conclusões. A base deve ser os anúncios da OLX ou o Censo Escolar.',
  },
];

const projetosArmadilhas: PanelItem[] = [
  { title: 'Reusar as chaves do sistema de origem', description: 'O enunciado dos exercícios diz literalmente "não deverão ser utilizadas as chaves existentes no ambiente relacional". Toda dimensão precisa de surrogate key própria; o código de origem entra como atributo (é o que faz o DW da aula ter cod_cliente e cod_cliente_oltp lado a lado).' },
  { title: 'Não declarar a granularidade', description: 'Antes de criar qualquer coluna, escreva em uma frase o que é uma linha da sua tabela fato ("uma linha = um item de um pedido"). Sem isso não há como julgar se uma métrica pertence àquela fato.' },
  { title: 'Misturar assuntos numa fato só', description: 'Uma tabela fato para cada processo de negócio. Se você tem métricas de desempenho de equipe e de desempenho individual, são duas fatos — como fazem os trabalhos-modelo.' },
  { title: 'Deixar o SCD para depois', description: 'Se algum atributo de dimensão precisa de histórico, as colunas de versão e vigência têm que estar no modelo desde a 1ª nota — porque é o modelo da 1ª nota que a carga da 2ª vai preencher.' },
  { title: 'Entregar painel sem conclusão', description: 'A 3ª nota pede explicitamente as "conclusões e sugestões obtidas a partir da análise dos painéis". Um gráfico bonito sem leitura de negócio não fecha o requisito.' },
  { title: 'Pular a análise exploratória', description: 'A AED aparece como requisito na 1ª e na 4ª nota. É ela que justifica os filtros que você aplicou — como decidir cortar quilometragens acima de 500.000 km por serem outliers.' },
];

function BISection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Business Intelligence" subtitle="Técnicas e ferramentas para transformar dados em informação útil à decisão" colorClass="text-accent" />
      <HighlightBox title="Definição e origem">
        <p>
          O termo <strong>Business Intelligence</strong> surgiu no fim dos anos 1980, atribuído a <strong>Howard Dresner</strong> (Gartner). É o processo de <strong>coletar, organizar, analisar, compartilhar e monitorar</strong> informações que dão suporte à gestão do negócio — apoiado em dois pilares: visão total dos dados e conhecimento do negócio.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Para que serve o BI</h3>
        <PanelList items={biUsos} columns="md:grid-cols-2" />
      </div>
      <TheoryBlock title="Arquitetura de um ambiente de BI">
        <p>
          Um ambiente de BI encadeia fontes, integração, repositório e análise:
        </p>
        <FlowDiagram items={['Fontes (Legado, ERP, CRM)', 'ETL + Qualidade', 'DW + Data Marts', 'Servidor', 'Reporting / OLAP / Data Mining']} />
        <p>
          Os <strong>metadados</strong> descrevem os dados do DW (o catálogo), e a administração do ambiente cuida de cargas, segurança e desempenho.
        </p>
      </TheoryBlock>
    </section>
  );
}

const biUsos: PanelItem[] = [
  { title: 'Análise comercial', description: 'Vendas por canal, rentabilidade de clientes e de produtos, análise de marketing e identificação de novos clientes.' },
  { title: 'Gestão e risco', description: 'Análise financeira, gerência de risco, controle de qualidade e integração de bases de clientes.' },
  { title: 'Comportamento', description: 'Análise de padrões de comportamento de compra e de uso, base para segmentação e previsão.' },
  { title: 'Decisão estratégica', description: 'Consolida indicadores dispersos em uma visão única, transformando dados históricos em conhecimento para decidir.' },
];

function DWSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Data Warehouse" subtitle="O repositório integrado, histórico e não volátil que sustenta a análise" colorClass="text-accent3" />
      <HighlightBox title="Definição de Inmon">
        <p>
          Um Data Warehouse é um conjunto de dados <strong>orientado por assunto, integrado, variante no tempo e não volátil</strong>, voltado ao suporte à decisão. Surgiu no início dos anos 1990 como um repositório consolidado, limpo e padronizado, capaz de suportar uma carga de consultas muito maior que a dos sistemas transacionais.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As quatro características</h3>
        <ConceptGrid items={dwCaracteristicas} columns="md:grid-cols-2" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">DW × Banco transacional (OLTP)</h3>
        <ComparisonTable rows={dwVsOltp} leftLabel="OLTP (transacional)" rightLabel="DW (analítico)" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Componentes do ambiente</h3>
        <PanelList items={dwComponentes} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const dwCaracteristicas: ConceptItem[] = [
  { title: 'Orientado por assunto', description: 'Organizado por temas do negócio (vendas, clientes), reunindo dados de diversas fontes operacionais em torno de cada assunto.', accent: 'accent' },
  { title: 'Integrado', description: 'Construído de forma consolidada: nomes, tipos, unidades e formatos são padronizados a partir de fontes heterogêneas.', accent: 'accent3' },
  { title: 'Variante no tempo', description: 'Guarda o histórico. Enquanto o OLTP mostra o "agora", o DW preserva como os dados eram ao longo do tempo.', accent: 'accent4' },
  { title: 'Não volátil', description: 'Os dados são carregados de forma planejada e não são atualizados individualmente — a evolução vem por novas cargas.', accent: 'accent5' },
];

const dwVsOltp: ComparisonRow[] = [
  { criterion: 'Objetivo', left: 'Operar o dia a dia (muitas transações)', right: 'Recuperar grandes volumes para análise' },
  { criterion: 'Modelo', left: 'Relacional normalizado (E-R)', right: 'Dimensional, pode ser desnormalizado' },
  { criterion: 'Operações', left: 'INSERT / UPDATE / DELETE frequentes', right: 'Consulta; atualização só por cargas periódicas' },
  { criterion: 'Dado', left: 'Valor corrente', right: 'Histórico ao longo do tempo' },
];

const dwComponentes: PanelItem[] = [
  { title: 'Staging Area (SA)', description: 'Camada intermediária onde os dados são integrados e transformados antes de entrar no DW.' },
  { title: 'ODS (Operational Data Store)', description: 'Base integrada e volátil, com valores correntes e apenas dados detalhados.' },
  { title: 'Data Mart (DM)', description: 'Subconjunto do DW com visão departamental / de uma área de assunto bem definida.' },
  { title: 'Metadados', description: 'Catálogo que define os dados do DW — informação sobre a informação.' },
];

function DimensionalSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Modelagem Dimensional" subtitle="A técnica de Kimball para organizar o DW em fatos e dimensões, com alto desempenho de consulta" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Duas escolas</h3>
        <ComparisonTable rows={kimballInmon} leftLabel="Kimball" rightLabel="Inmon" />
      </div>

      <TheoryBlock title="Esquema estrela (star schema)">
        <p>
          No centro fica a <strong>tabela fato</strong>, com as métricas/KPIs a analisar. Ao redor, as <strong>tabelas dimensão</strong> a detalham, respondendo <strong>Onde? Quando? O quê? Quem?</strong> Essa distribuição (fato no centro, dimensões nas pontas) dá o nome de "estrela". O <strong>snowflake</strong> (floco de neve) é a variação em que dimensões grandes são normalizadas em hierarquias — reduz redundância, mas exige mais joins.
        </p>
      </TheoryBlock>

      <ExampleBox title="O star schema da aula, em SQL">
        <p>
          Este é o DW usado nas aulas, montado a partir da base Northwind. Comece pela <strong>fato</strong> — ela é curta, porque só guarda chaves e métricas:
        </p>
        <CodeBlock
          language="sql"
          title="f_vendas — a tabela fato"
          code={`CREATE TABLE f_vendas (
    cod_produto         NUMBER(9) NOT NULL,
    cod_cliente         NUMBER(9) NOT NULL,
    cod_tempo           NUMBER(9) NOT NULL,
    cod_funcionario     NUMBER(9) NOT NULL,
    cod_transportadora  NUMBER(9) NOT NULL,
    val_venda           NUMBER(12, 2),
    qtd_vendida         NUMBER(12, 3)
) TABLESPACE users;

-- A PK e composta por TODAS as FKs das dimensoes.
ALTER TABLE f_vendas
    ADD CONSTRAINT pk_vendas PRIMARY KEY ( cod_produto,
                                           cod_cliente,
                                           cod_tempo,
                                           cod_funcionario,
                                           cod_transportadora );

-- Cada FK ganha seu proprio indice: as consultas sempre
-- entram na fato filtrando por uma ou mais dimensoes.
CREATE INDEX idx_vendas_cod_tempo   ON f_vendas ( cod_tempo   ASC );
CREATE INDEX idx_vendas_cod_produto ON f_vendas ( cod_produto ASC );`}
        />
        <p>
          Duas coisas para reparar: a <strong>PK é composta</strong> pelas cinco FKs (é isso que define o grão — uma linha por combinação produto × cliente × dia × funcionário × transportadora), e só há <strong>duas métricas</strong>, ambas aditivas. Toda a riqueza descritiva está nas dimensões, não aqui.
        </p>
      </ExampleBox>

      <ExampleBox title="Uma dimensão de verdade — e o que cada coluna está fazendo ali">
        <CodeBlock
          language="sql"
          title="d_cliente — dimensão com SCD Tipo 2"
          code={`CREATE TABLE d_cliente (
    cod_cliente       NUMBER(9) NOT NULL,   -- surrogate key (PK)
    nom_cliente       VARCHAR2(50),         -- atributo textual
    nom_pais          VARCHAR2(50),         -- hierarquia geografica:
    nom_regiao        VARCHAR2(50),         --   pais > regiao > cidade
    nom_cidade        VARCHAR2(50),
    cod_cliente_oltp  VARCHAR2(10),         -- o codigo de origem, virado atributo
    num_versao        NUMBER(3),            -- \\
    dat_vigencia_ini  DATE,                 --  > o SCD Tipo 2, na pratica
    dat_vigencia_fim  DATE                  -- /
) TABLESPACE users;

ALTER TABLE d_cliente ADD CONSTRAINT pk_cliente PRIMARY KEY ( cod_cliente );`}
        />
        <p>
          <strong>cod_cliente</strong> é a surrogate key — um número artificial do DW, sem relação com o sistema de origem. <strong>cod_cliente_oltp</strong> é o código que veio da origem, guardado como <em>atributo</em>: ele ainda serve para rastrear e reconciliar, mas não manda em nada. E <strong>num_versao + dat_vigencia_ini + dat_vigencia_fim</strong> são o SCD Tipo 2 escrito em colunas: quando o cliente muda de cidade, fecha-se a vigência da linha antiga e insere-se uma nova, com nova surrogate key.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Os quatro passos da modelagem</h3>
        <PanelList items={dimensionalPassos} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">A tabela fato</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda o que <strong>mede</strong> o processo. Sua chave primária é <strong>composta</strong> por todas as FKs que apontam para as dimensões.
        </p>
        <ConceptGrid items={fatoTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Tipos de métrica</h3>
        <ConceptGrid items={metricaTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">A tabela dimensão</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Reúne os <strong>atributos textuais</strong> (que servem de filtro) e as <strong>hierarquias</strong> (relações 1-N em cascata, como Ano → Semestre → Mês → Dia). Usa <strong>surrogate keys</strong> — chaves artificiais, não os códigos do sistema de origem.
        </p>
        <PanelList items={dimensaoPontos} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="A dimensão Tempo" accent="var(--color-accent3)">
        <p>
          Está <strong>sempre presente</strong> em qualquer modelo dimensional e é a única que pode ser <strong>carregada antecipadamente, de uma só vez, sem uma fonte de dados</strong> — basta gerar todas as datas do período. É também a dimensão mais <strong>enriquecida</strong>: além de ano, mês e dia, o DW da aula guarda <code>trimestre</code>, <code>estacao</code>, <code>fim_de_semana</code>, <code>ferias</code>, <code>ano_mes</code>, <code>nome_mes</code>, <code>dia_no_ano</code> e <code>semana</code>. Cada um desses atributos textuais é um filtro que o usuário vai querer aplicar sem precisar calcular nada.
        </p>
      </HighlightBox>

      <ExampleBox title="E quando o negócio precisa de hora e minuto?">
        <p>
          A tentação é acrescentar hora e minuto à própria dimensão Tempo. O material mostra por que isso não se faz, com a conta:
        </p>
        <PanelList items={tempoGranularidade} columns="" />
        <p>
          Por isso a recomendação: crie uma <strong>dimensão Hora-do-Dia separada</strong> — 24 × 60 = <strong>1.440 linhas</strong> cobrem qualquer período (86.400 se precisar de segundos), e nela cabem descrições como o nome do turno. Se <em>não</em> houver descrição adicional nenhuma sobre a hora, a alternativa aceita é deixar a hora como um campo na própria tabela fato. E se o negócio for internacional, guarde <strong>duas data/hora</strong>: uma no horário local, onde o fato aconteceu, e outra em GMT.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Slowly Changing Dimensions (SCD)</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Tratam mudanças lentas nos atributos de uma dimensão (ex.: um cliente muda de cidade). A escolha do tipo define se o <strong>histórico é preservado</strong>.
        </p>
        <ComparisonTable rows={scdTipos} criterionLabel="Tipo" leftLabel="Como funciona" rightLabel="O que acontece com o histórico" />
      </div>

      <ExampleBox title="Tipo 1 × Tipo 2, na mesma linha de cliente">
        <p>
          <strong>Antes.</strong> Maria Tereza, solteira, está na dimensão com a chave 4:
        </p>
        <CodeBlock
          language="sql"
          title="d_cliente — antes da mudança"
          code={`cod_cliente | nom_cliente   | estado_civil | num_versao | dat_vigencia_fim
          4 | Maria Tereza  | Solteiro     |          1 | 31/12/9999`}
        />
        <p>
          <strong>Depois, com Tipo 1.</strong> Sobrescreve-se o valor. A linha continua sendo uma só — e todas as vendas que ela fez enquanto era solteira passam a aparecer, retroativamente, como vendas de uma cliente casada:
        </p>
        <CodeBlock
          language="sql"
          title="d_cliente — SCD Tipo 1 (histórico perdido)"
          code={`cod_cliente | nom_cliente   | estado_civil | num_versao | dat_vigencia_fim
          4 | Maria Tereza  | Casado       |          1 | 31/12/9999`}
        />
        <p>
          <strong>Depois, com Tipo 2.</strong> Fecha-se a vigência da linha antiga e insere-se uma nova, com <strong>nova surrogate key</strong>. As vendas antigas continuam apontando para a chave 4 e as novas apontarão para a 9 — cada fato preso ao seu contexto de época:
        </p>
        <CodeBlock
          language="sql"
          title="d_cliente — SCD Tipo 2 (histórico preservado)"
          code={`cod_cliente | nom_cliente   | estado_civil | num_versao | dat_vigencia_fim
          4 | Maria Tereza  | Solteiro     |          1 | 14/03/2024
          9 | Maria Tereza  | Casado       |          2 | 31/12/9999`}
        />
        <p>
          É por isso que o Tipo 2 <strong>exige</strong> surrogate key: se a chave fosse o CPF ou o código de origem, as duas linhas colidiriam. E é por isso que o Tipo 1 não é "errado" — ele é a escolha certa quando o valor antigo era simplesmente um <strong>erro de cadastro</strong> (um nome grafado errado, uma data de nascimento digitada torto), caso em que não há histórico legítimo a preservar.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Dimensões especiais — e que problema cada uma resolve</h3>
        <PanelList items={dimensoesEspeciais} columns="" />
      </div>

      <HighlightBox title="Duas regras que o professor destaca" accent="var(--color-accent2)">
        <p>
          <strong>Não misture assuntos:</strong> uma tabela fato para cada tema distinto do negócio. <strong>Não misture granularidades:</strong> não inclua linhas de resumo, com grão diferente, na mesma tabela fato — quem soma tudo depois vai contar duas vezes. Para ter resumos prontos existe outro recurso, as <strong>tabelas agregadas</strong>, que ficam em tabelas próprias.
        </p>
      </HighlightBox>
    </section>
  );
}

const tempoGranularidade: PanelItem[] = [
  { title: '1 ano só com horas', description: '365 dias × 24 h = 8.760 registros. Ainda administrável.' },
  { title: '1 ano com horas e minutos', description: '365 × 24 × 60 = 525.600 registros. A dimensão já ficou maior que muitas tabelas fato.' },
  { title: '1 ano com horas, minutos e segundos', description: '365 × 24 × 60 × 60 = 31.536.000 registros. Inviável: a "dimensão" viraria o maior objeto do DW.' },
];

const kimballInmon: ComparisonRow[] = [
  { criterion: 'Modelagem', left: 'Dimensional (star / snowflake)', right: 'Relacional desnormalizada' },
  { criterion: 'Relação DW ↔ Data Mart', left: 'O DW é a união dos data marts', right: 'O data mart deriva do DW' },
  { criterion: 'Construção', left: 'Incremental, por departamento', right: 'Corporativa, de cima para baixo' },
];

const dimensionalPassos: PanelItem[] = [
  { title: '1. O que avaliamos?', description: 'Define os fatos/métricas — sempre valores numéricos (o que será medido).' },
  { title: '2. Como analisar?', description: 'Define as dimensões relacionadas às métricas (as perspectivas de análise).' },
  { title: '3. Qual o menor detalhe?', description: 'Define a granularidade — o nível de detalhe (grão) de cada dimensão.' },
  { title: '4. Como agrupar?', description: 'Define as hierarquias de sumarização dentro de cada dimensão.' },
];

const fatoTipos: ConceptItem[] = [
  { title: 'Movimento', description: 'Armazena transações no menor grão (ex.: cada movimento bancário, cada item de venda).', accent: 'accent' },
  { title: 'Snapshot', description: '"Foto" de um instante (ex.: saldo bancário no fim do dia, posição de estoque).', accent: 'accent3' },
  { title: 'Factless (sem fato)', description: 'Registra a existência de um evento sem métrica (ex.: alunos matriculados em cursos).', accent: 'accent5' },
];

const metricaTipos: ConceptItem[] = [
  { title: 'Aditiva', description: 'Somável em TODAS as dimensões (ex.: quantidade vendida, valor de venda).', accent: 'accent5' },
  { title: 'Semi-aditiva', description: 'Somável em ALGUMAS dimensões (ex.: saldo e estoque somam entre locais, mas não ao longo do tempo — cabe MAX/MIN).', accent: 'accent4' },
  { title: 'Não-aditiva', description: 'Não somável em nenhuma dimensão (ex.: % de margem, % de desconto, temperatura).', accent: 'accent2' },
];

const dimensaoPontos: PanelItem[] = [
  { title: 'Surrogate keys', description: 'Chaves artificiais isolam o DW das regras de origem, sustentam o histórico (SCD) e melhoram o desempenho. O código de origem pode virar um atributo textual.' },
  { title: 'Atributos e hierarquias', description: 'Atributos textuais funcionam como filtros; hierarquias (1-N em cascata) permitem analisar em mais ou menos detalhe.' },
];

const scdTipos: ComparisonRow[] = [
  { criterion: 'Tipo 1', left: 'Sobrescreve o valor antigo na mesma linha', right: 'Perde o histórico. Correto quando o valor antigo era um erro de cadastro' },
  { criterion: 'Tipo 2', left: 'Insere uma nova linha, com nova surrogate key e marcação de flag, versão ou data início/fim', right: 'Mantém o histórico completo, com cada fato ligado ao contexto da sua época' },
  { criterion: 'Tipo 3', left: 'Adiciona uma nova coluna: renomeia a antiga para "original" e grava o novo valor na nova', right: 'Guarda só o original e o atual — os valores intermediários se perdem, e sobram muitos nulos' },
  { criterion: 'Tipo 6 (híbrido, 3+2+1)', left: 'Combina os três: nova linha a cada mudança, mais colunas de valor original e valor atual', right: 'Preserva o histórico e ainda permite consultar dados antigos segundo o valor de hoje' },
];

const dimensoesEspeciais: PanelItem[] = [
  { title: 'Degenerate — resolve: guardar o nº do documento sem criar uma tabela vazia', description: 'Um identificador de documento (nota fiscal, pedido, tíquete) que não tem nenhum outro atributo associado, e por isso fica como coluna na própria fato. O sinal de que você está diante de um: para cada linha inserida na fato, uma linha também seria inserida na dimensão — ou seja, a dimensão não descreveria nada, só repetiria a fato. Aparece quando o grão da fato é o item do documento, e serve para reagrupar as métricas por documento.' },
  { title: 'Junk (garbage) — resolve: uma enxurrada de flags inchando a tabela fato', description: 'Agrupa em uma única dimensão abstrata vários indicadores de baixa cardinalidade que não se relacionam entre si (forma de pagamento, tipo de sacola, feedback do cliente). Sem ela, cada flag viraria uma coluna na fato — a tabela mais volumosa do DW. Pode ser carregada por preload (o produto cartesiano de todas as combinações possíveis, se forem poucas) ou em tempo de execução, inserindo só as combinações que de fato ocorrem.' },
  { title: 'Role-playing — resolve: a mesma dimensão ligada várias vezes à mesma fato', description: 'Data do pedido, data do faturamento e data da entrega são três papéis da mesma dimensão Tempo. Duplicar a tabela criaria três cópias para manter em sincronia; a solução é uma tabela física e uma view por papel, cada uma com nomes de coluna próprios, para que o usuário não confunda "ano do pedido" com "ano da entrega".' },
  { title: 'Bridge (multivalorada) — resolve: o fato que se liga a um número aberto de valores', description: 'Normalmente a fato aponta para um único membro de cada dimensão. Quando isso não vale — uma conta bancária com vários titulares, um paciente com vários diagnósticos — não há como escolher um. A tabela associativa (bridge ou helper table) fica entre a fato e a dimensão e permite a ligação N-N, ao custo de exigir cuidado para não contar a métrica duas vezes.' },
];

function AvancadaSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Modelagem Avançada e Projeto Físico" subtitle="Os casos que o star schema básico não resolve, e o que se faz depois que o modelo já está de pé" colorClass="text-accent5" />
      <HighlightBox title="Onde este bloco entra">
        <p>
          Tudo até aqui responde "como modelar". Este bloco responde a duas perguntas seguintes: <strong>o que fazer quando a dimensão não se comporta</strong> (muda rápido demais, tem versões alternativas, vem de fontes com atributos diferentes) e <strong>o que fazer para o DW responder rápido</strong> depois de carregado.
        </p>
      </HighlightBox>

      <TheoryBlock title="Fast Changing Dimensions e mini-dimensões">
        <p>
          As <strong>Slowly</strong> Changing Dimensions tratam mudanças lentas. O problema oposto tem nome próprio: <strong>Fast Changing Dimensions</strong> (ou <em>Rapidly Changing</em>) — dimensões com <strong>grande número de registros</strong> e <strong>alta volatilidade</strong>, em que um ou mais atributos mudam com frequência e em muitas linhas ao mesmo tempo. Aplicar SCD Tipo 2 nesse caso faria a dimensão crescer sem controle: cada mudança de faixa de renda de cada cliente geraria uma nova linha.
        </p>
        <p>
          A alternativa é <strong>particionar a dimensão</strong>: identificar os atributos voláteis, separá-los em uma tabela própria — a <strong>mini-dimensão</strong> — e ligar essa tabela diretamente à tabela fato. A dimensão principal fica só com o que é estável (nome, documento, data de cadastro). E há um cuidado essencial: <strong>crie faixas de valores</strong> para os atributos voláteis, em vez de guardar o valor exato. Uma renda de R$ 3.412,77 vira "R$ 3.000 a R$ 4.000", e a mini-dimensão passa a ter dezenas de combinações em vez de milhões.
        </p>
        <p>
          <strong>Aviso explícito do material:</strong> <em>snowflaking não resolve o problema de Fast Changing Dimension</em>. Normalizar a dimensão em uma tabela filha parece separar o volátil, mas a cada mudança nos atributos ainda seria necessário incluir um novo registro na dimensão original — o crescimento continua.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Mais dois casos que o modelo básico não cobre</h3>
        <PanelList items={avancadaCasos} columns="" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Projeto físico: os três pontos a considerar</h3>
        <ConceptGrid items={projetoFisico} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Tabelas agregadas">
        <p>
          Uma <strong>tabela agregada</strong> guarda uma lista restrita das colunas-chave da fato mais uma <strong>agregação</strong> — quase sempre um <code>SUM()</code> — de alguns dos fatos numéricos. Uma fato com chave de quatro dimensões e oito métricas pode ser resumida numa agregada com três chaves e duas métricas. A agregação é feita normalmente <strong>subindo por uma hierarquia</strong> de dimensão: de dia para mês, de loja para região.
        </p>
        <p>
          <strong>Vantagem:</strong> reduz drasticamente o tempo de resposta de certas consultas. <strong>Desvantagem:</strong> exige esforço adicional de manutenção — a cada carga da fato, as agregadas precisam ser atualizadas. Há duas estratégias, e a escolha é entre <em>simplicidade</em> e <em>tempo</em>: a <strong>agregação completa</strong> recria as agregadas do zero a cada carga (simples, mas cara), e a <strong>agregação incremental</strong> atualiza as linhas existentes e insere as novas (mais rápida, mais código).
        </p>
      </TheoryBlock>

      <ExampleBox title="Criando e usando uma agregada">
        <p>
          Duas agregadas da mesma fato de vendas, em níveis diferentes da hierarquia:
        </p>
        <CodeBlock
          language="sql"
          title="Construindo as tabelas agregadas"
          code={`-- Agregacao por loja, para todos os produtos, todos os dias.
CREATE TABLE ag_loja AS
SELECT   d.nome_loja,
         SUM(f.valor_vendido_real) AS valor_vendido_real
FROM     td_loja d, tf_vendas f
WHERE    d.chave_loja = f.chave_loja
GROUP BY d.nome_loja;

-- Agregacao por loja e por mes, para todos os produtos.
CREATE TABLE ag_loja_mes AS
SELECT   d.nome_loja,
         t.mes,
         SUM(f.valor_vendido_real) AS valor_vendido_real
FROM     td_loja d, tf_vendas f, td_dia t
WHERE    d.chave_loja = f.chave_loja
AND      f.chave_dia  = t.chave_dia
GROUP BY d.nome_loja, t.mes;`}
        />
        <p>
          Uma vez criadas, elas não são consultadas à mão. O <strong>aggregate navigation</strong> é um software que <strong>intercepta a consulta SQL e a reescreve</strong> para aproveitar a agregada disponível. O usuário escreve a consulta contra a fato detalhada:
        </p>
        <CodeBlock
          language="sql"
          title="O que o usuário escreveu"
          code={`SELECT SUM(qtd)
FROM   fact_vendas, tempo, loja
WHERE  mes = 'janeiro/2002'
AND    loja IN (300, 304, 404)
AND    /* ... especificacao do join ... */ 1 = 1;`}
        />
        <CodeBlock
          language="sql"
          title="O que o aggregate navigator executou"
          code={`SELECT SUM(qtd)
FROM   agg3, tempo, loja          -- agg3: produto x mes x loja
WHERE  mes = 'janeiro/2002'
AND    loja IN (300, 304, 404)
AND    /* ... especificacao do join ... */ 1 = 1;`}
        />
        <p>
          Como a consulta pedia o total do <strong>mês</strong> por loja, ela não precisa varrer a fato no grão de dia: a agregada já tem a soma pronta. Repare que isto só funciona porque a agregada mora em uma <strong>tabela separada</strong> — se as linhas de resumo estivessem misturadas na fato, qualquer <code>SUM</code> contaria os valores duas vezes.
        </p>
      </ExampleBox>
    </section>
  );
}

const avancadaCasos: PanelItem[] = [
  { title: 'Hot Swappable Dimensions', description: 'Uma dimensão que tem múltiplas versões alternativas de si mesma, trocadas no momento da consulta. Serve para dar a áreas diferentes visões diferentes do mesmo cadastro — a área comercial quer os clientes agrupados de um jeito, a de risco de outro. Duas implementações: criar dimensões físicas distintas a partir da principal, contendo o subconjunto de linhas e colunas de interesse, e juntar a chave dessa dimensão à FK da fato em tempo de execução; ou criar views sobre a dimensão principal e trocar a view usada no join.' },
  { title: 'Registros Heterogêneos', description: 'Acontece quando os dados que precisam morar em uma mesma dimensão vêm de tabelas com atributos diferentes — produtos de linhas de negócio distintas, por exemplo, em que cada linha tem características próprias. Três alternativas, com trade-offs diferentes: criar uma dimensão com TODOS os atributos de todas as tabelas (simples de consultar, cheia de nulos); criar uma dimensão apenas com os atributos COMUNS (enxuta, mas perde-se o que é específico); ou criar dimensões e tabelas fato separadas (preserva tudo, mas exige drill across para comparar).' },
];

const projetoFisico: ConceptItem[] = [
  { title: 'Tabelas agregadas', description: 'Resumos pré-calculados da tabela fato, subindo por uma hierarquia de dimensão. Trocam espaço e manutenção por tempo de resposta.', accent: 'accent' },
  { title: 'Indexação', description: 'Cada FK da fato costuma ganhar seu próprio índice, porque toda consulta analítica entra na fato filtrando por dimensões — é o que o DW da aula faz com os cinco índices de f_vendas.', accent: 'accent3' },
  { title: 'Particionamento', description: 'Quebrar fisicamente a tabela fato em pedaços (tipicamente por período de tempo), para que a consulta de um mês não precise varrer anos de histórico e para facilitar o expurgo de dados antigos.', accent: 'accent4' },
];

function ETLSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="ETL e Pentaho" subtitle="Extrair, transformar e carregar: como os dados chegam limpos e integrados ao Data Warehouse" colorClass="text-accent2" />
      <HighlightBox title="Teoria simples, prática complexa">
        <p>
          Na teoria, ETL é <strong>Extrair</strong> das fontes → <strong>Transformar</strong> conforme o negócio → <strong>Carregar</strong> no destino. Na prática é complexo: os dados vêm de fontes diversas, com convenções de nome, tipos, formatos, unidades de medida e granularidades <strong>diferentes</strong>.
        </p>
      </HighlightBox>
      <FlowDiagram items={['Extração', 'Transformação', 'Carga', 'Data Warehouse']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Preparação dos dados</h3>
        <PanelList items={etlPreparacao} columns="md:grid-cols-2" />
      </div>

      <TheoryBlock title="Pentaho Data Integration (Kettle)">
        <p>
          O <strong>Kettle</strong> — acrônimo de <em>"Kettle E.T.T.L. Environment"</em> — é a ferramenta de ETL da disciplina. Ele extrai de bancos, textos e planilhas, transforma, agrupa e sumariza, faz lookups e joins, e carrega no destino <strong>com suporte nativo a Slowly Changing Dimensions</strong>.
        </p>
        <p>
          Uma <strong>transformation</strong> é feita de <strong>steps</strong> (passos) ligados por <strong>hops</strong>. O vocabulário importa: um <em>row</em> é uma linha, e cada <em>value</em> é um campo dela; o <strong>output stream</strong> é a pilha de linhas que <em>deixa</em> um step e o <strong>input stream</strong> é a pilha que <em>entra</em> em outro; e um <strong>hop</strong> é justamente a representação gráfica desse fluxo — ele é sempre, ao mesmo tempo, o output de um step e o input de outro. Um <strong>job</strong> agrupa e orquestra transformations.
        </p>
        <p>
          A diferença crucial: os hops de <strong>transformation</strong> só podem ser ativados ou desativados, e os dados fluem por todos ao mesmo tempo. Já os hops de <strong>job</strong> definem <strong>ordem de execução</strong> e carregam uma <strong>condição</strong>: <code>Unconditional</code>, <code>Follow when result is true</code> ou <code>Follow when result is false</code>. É isso que permite montar um job que só executa a carga se o arquivo de entrada existir, e manda um e-mail se não existir.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">O catálogo de steps</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          São muitos, mas se agrupam em poucas famílias. Estes são os que aparecem nas cargas da disciplina:
        </p>
        <PanelList items={kettleSteps} columns="" />
      </div>

      <HighlightBox title="O step que faz o SCD sozinho" accent="var(--color-accent3)">
        <p>
          O <strong>Dimension Update/Lookup</strong> implementa as SCD <strong>tipos 1 e 2</strong> automaticamente, e também pode ser usado só para fazer lookup. Configuração: <strong>Technical key</strong> (a surrogate key da dimensão), <strong>Version field</strong> (a coluna de versão), <strong>Start / End of date range</strong> (as datas de vigência), <strong>Keys</strong> (as chaves de <em>negócio</em> — CPF do cliente, código do produto) e <strong>Fields</strong> (os campos que podem ser atualizados). Repare como esses parâmetros mapeiam exatamente as colunas <code>num_versao</code>, <code>dat_vigencia_ini</code>, <code>dat_vigencia_fim</code> e <code>cod_cliente_oltp</code> da dimensão da aula: o modelo e a carga foram desenhados juntos.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Como são as cargas da aula, por dentro</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          As transformações usadas nas aulas leem a base Northwind e carregam o DW. Vale ver os três padrões, porque eles se repetem em qualquer projeto:
        </p>
        <PanelList items={kettleCargas} columns="" />
      </div>

      <ExampleBox title="O pipeline do exercício de limpeza">
        <p>
          O roteiro do exercício de limpeza no PDI encadeia sete steps, e cada um resolve um problema concreto de qualidade de dados:
        </p>
        <FlowDiagram items={['Text File Input', 'Filter Rows', 'Stream Lookup', 'Select Values', 'Value Mapper', 'Number Range', 'Table Output']} />
        <p>
          Lê o CSV de vendas (<strong>Text File Input</strong>, usando <em>Get Fields</em> para descobrir as colunas); separa as linhas em que o CEP está ausente (<strong>Filter Rows</strong>); busca o CEP correto num segundo CSV já carregado no fluxo (<strong>Stream Lookup</strong> — e não Database Lookup, porque a fonte é outro step, não uma tabela); descarta a coluna original e mantém a resolvida (<strong>Select Values</strong>); padroniza valores, trocando "United States" por "USA" (<strong>Value Mapper</strong>); transforma um dado contínuo em faixas categóricas (<strong>Number Range</strong> — é a discretização, aqui no ETL); e grava numa tabela do banco (<strong>Table Output</strong>, com <em>Truncate Table</em> marcado e o botão <em>SQL</em> gerando o DDL da tabela de destino).
        </p>
        <p>
          E o exercício fecha com uma instrução que costuma ser esquecida: <strong>envolver tudo num JOB</strong> que verifica se o arquivo existe <em>antes</em> de executar a carga. É aí que o hop condicional ganha sentido prático.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Job Entries — as peças de um job</h3>
        <PanelList items={kettleJobs} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Os quatro executáveis do Kettle</h3>
        <ConceptGrid items={kettleFerramentas} columns="md:grid-cols-2" />
      </div>

      <ExampleBox title="Rodando a carga sem abrir o Spoon">
        <p>
          Em produção ninguém clica em "executar": as cargas são agendadas. O <strong>Pan</strong> roda transformations e o <strong>Kitchen</strong> roda jobs, ambos por linha de comando, com <code>.bat</code> no Windows e <code>.sh</code> no Linux.
        </p>
        <CodeBlock
          language="javascript"
          title="Pan — executando uma transformation"
          code={`# A partir de um arquivo .ktr (Windows usa "/" e ":", Linux usa "-" e "=")
pan.bat /file:"D:\\Transformations\\Customer Dimension.ktr" /level:Basic

pan.sh  -file="/PRD/Customer Dimension.ktr" -level=Minimal

# A partir de um repositorio
pan.sh -rep="Production Repository" -trans="update Customer Dimension" \\
       -dir=/Dimensions/ -user=matt -pass=segredo123 -level=Basic`}
        />
        <p>
          As opções principais são <code>-file</code> (o XML da transformação), <code>-rep</code> (o nome do repositório), <code>-user</code> e <code>-pass</code>, <code>-trans</code> (qual transformação do repositório rodar) e <code>-level</code> (o detalhamento do log). O <strong>Kitchen</strong> tem a mesma lógica, trocando <code>-trans</code> por <code>-job</code>. Já o <strong>Carte</strong> é outra coisa: um servidor web que recebe o XML da transformação e permite <strong>iniciar, monitorar e interromper</strong> execuções remotamente.
        </p>
      </ExampleBox>
    </section>
  );
}

const kettleSteps: PanelItem[] = [
  { title: 'Input — de onde os dados vêm', description: 'Text File Input (carrega TXT e CSV, com abas de Content para o formato, Fields para os campos, Filters para linhas a desconsiderar e Error handling); Table Input (lê de um banco via SQL, podendo receber parâmetros de outro step); Generate Rows (gera N linhas com campos fixos — a base para criar uma dimensão sem fonte de dados); Get System Info (data, hora e parâmetros passados na linha de comando).' },
  { title: 'Output — para onde vão', description: 'Text File Output (exporta para texto, com separador e opção de append); Table Output (insere em uma tabela, com commit size e Truncate Table); Insert/Update (procura a linha pelas chaves informadas — se não existir insere, se existir atualiza só os campos diferentes; a opção "Don\'t perform any updates" o transforma num insert puro); Update e Delete (as variantes que só atualizam ou só apagam).' },
  { title: 'Lookup — buscar o que falta', description: 'Database Lookup encontra atributos em uma TABELA do banco a partir de uma chave de busca, com cache opcional que acelera muito (mas não deve ser usado se o banco estiver sendo alterado naquele momento). Stream Lookup faz a busca em dados que vieram de OUTRO STEP do fluxo. A escolha entre os dois é a pergunta de prova mais provável: a fonte da busca está no banco ou no fluxo?' },
  { title: 'Field Transformations — mexer nos campos', description: 'Select Values (seleciona, renomeia e redefine tamanho e precisão dos campos — o "arrumador" do fluxo); Calculator (funções matemáticas e de data prontas: aritmética, raiz, arredondamento, extrair dia/mês/ano); Add Constants; Null If (troca um valor específico por NULL); Add Sequence (gera sequência única, pelo contador do Kettle ou por uma sequence do banco — é como nasce a surrogate key); Java Script Value (para o cálculo que nenhum step pronto resolve).' },
  { title: 'Set Transformations — mexer no conjunto de linhas', description: 'Filter Rows (filtra por condições e, importante, produz DOIS fluxos de saída: um para as linhas que atendem à condição e outro para as que não atendem); Sort Rows (ordena); Unique Rows (remove duplicadas — mas só compara linhas ADJACENTES, então exige que os dados estejam ordenados antes; pode contar quantas cópias existiam).' },
  { title: 'Dummy — o step que não faz nada', description: 'Literalmente "fazer nada". Serve para dar um destino ao fluxo indesejado que sai de um filtro ou de um split. Sem ele, o Filter Rows não teria para onde mandar as linhas reprovadas.' },
];

const kettleCargas: PanelItem[] = [
  { title: 'Carga de dimensão — o padrão mais simples', description: 'Três steps: leitura da fonte → Select Values (para renomear e ajustar os campos ao padrão do DW) → Dimension Update/Lookup (que resolve o SCD e grava). É a forma da carga de d_cliente, d_produto, d_funcionario e d_transportadora.' },
  { title: 'Carga da tabela fato — resolvendo as surrogate keys', description: 'Bem mais longa, porque a fato não guarda os códigos de origem: ela precisa TRADUZIR cada código para a surrogate key correspondente. O caminho é: ler as duas fontes (pedidos e itens) → Sort Rows nas duas → Merge Join para uni-las → Database Lookup e Dimension Update/Lookup, um por dimensão, cada um trocando o código de origem pela surrogate key → Select Values → Calculator (para calcular o valor da venda) → Sort Rows → Group By com SUM (para consolidar no grão escolhido) → Insert/Update. Repare que as dimensões precisam estar carregadas ANTES da fato.' },
  { title: 'Dimensão tempo — carregada sem fonte de dados', description: 'A prova de que a dimensão Tempo dispensa origem: a transformação começa com um Row Generator configurado para 40.000 dias (mais de 100 anos), passa por um Add Sequence e um Calculator que converte o contador em datas reais, e usa Row Generator + Normaliser + Stream Lookup para anexar os nomes de mês e de dia da semana, mais um Java Script Value para os atributos derivados. Nenhuma linha veio de um sistema: todas foram geradas.' },
];

const kettleJobs: PanelItem[] = [
  { title: 'Start', description: 'Define o início da execução do job. Todo job começa por ele.' },
  { title: 'Transformation e Job', description: 'Executam, respectivamente, uma transformation ou outro job já definidos — por arquivo XML ou pelo repositório. É como se encadeiam as cargas na ordem certa: dimensões primeiro, fato depois.' },
  { title: 'Ok e Error', description: 'Ok verifica se o número de erros é igual a zero; Error verifica se é diferente de zero. Combinados com os hops condicionais, dão os dois caminhos de saída do job.' },
  { title: 'Evaluation', description: 'Calcula uma expressão booleana em JavaScript para decidir o próximo passo. Tem acesso a variáveis do fluxo, como errors, lines_input, lines_output, lines_updated e lines_read.' },
  { title: 'SQL e Shell', description: 'SQL executa um script de comandos separados por ";" numa conexão (útil para truncar tabelas ou desativar índices antes da carga). Shell executa um script do sistema operacional no servidor.' },
  { title: 'Mail e Dummy', description: 'Mail envia e-mail de aviso (com destinatário, autenticação SMTP, assunto e comentário) — o uso clássico é notificar a falha de uma carga noturna. Dummy "não faz nada" e pode interromper a execução do job.' },
];

const etlPreparacao: PanelItem[] = [
  { title: 'Limpeza', description: 'Dados ausentes (média/mediana, valor mais frequente ou por modelo), ruído/outliers (binning, regressão, clustering) e remoção de duplicados.' },
  { title: 'Redução', description: 'Seleção de atributos e redução de dimensionalidade (PCA), amostragem e agregação.' },
  { title: 'Transformação', description: 'Normalização (escalar valores), discretização (contínuo → categórico) e geração de hierarquias de conceitos (cidade → país).' },
  { title: 'Integração', description: 'Trata redundância entre fontes: mesmos dados com nomes, escalas ou representações diferentes.' },
];

const kettleFerramentas: ConceptItem[] = [
  { title: 'Spoon', description: 'A interface gráfica (GUI) onde se desenham as transformations e os jobs.', accent: 'accent' },
  { title: 'Pan', description: 'Executa transformations pela linha de comando / em lote.', accent: 'accent3' },
  { title: 'Kitchen', description: 'Executa jobs em lote (batch).', accent: 'accent4' },
  { title: 'Carte', description: 'Servidor web para execução e monitoramento remoto.', accent: 'accent5' },
];

/* ============================ AV2 ============================ */

function AEDSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Análise Exploratória de Dados" subtitle="A estatística como pilar da Ciência de Dados: organizar, resumir e entender os dados" colorClass="text-accent" />
      <HighlightBox title="Descritiva × Inferencial">
        <p>
          A estatística <strong>descritiva</strong> organiza, apresenta e resume os dados (gráficos, tabelas, medidas). A <strong>inferencial</strong> usa uma <strong>amostra representativa</strong> para generalizar conclusões à <strong>população</strong>. Nas tabelas de dados, as <strong>observações</strong> são as linhas e as <strong>variáveis</strong>, as colunas.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Tipos de variável</h3>
        <ConceptGrid items={variaveisTipos} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Medidas estatísticas</h3>
        <PanelList items={medidasEstatisticas} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="As três regras da assimetria" accent="var(--color-accent2)">
        <p>
          Comparar as três medidas de tendência central diz para que lado a distribuição pende — e são três desigualdades que vale memorizar:
        </p>
        <PanelList items={assimetriaRegras} columns="md:grid-cols-3" />
        <p>
          A intuição: a <strong>média</strong> é a única das três que é puxada pelos valores extremos. Se há uma cauda longa à direita (alguns valores muito altos), ela sobe acima da mediana. A <strong>curtose</strong>, por sua vez, não fala de lado nenhum — mede o <strong>grau de achatamento</strong> da distribuição em relação à curva normal.
        </p>
      </HighlightBox>

      <HighlightBox title="Box Plot e outliers" accent="var(--color-accent5)">
        <p>
          O <strong>box plot</strong> resume uma variável quantitativa com <strong>cinco valores</strong>: mínimo, 1º quartil (Q1), mediana (Q2), 3º quartil (Q3) e máximo. Ele dá ideia de posição, dispersão e assimetria, e evidencia <strong>outliers</strong> — valores muito grandes ou muito pequenos em relação aos demais, que <strong>alteram enormemente a média e a variabilidade</strong> do grupo e podem até distorcer as conclusões. Um coeficiente de variação (CV) ≤ 20% indica um conjunto homogêneo; quanto maior o CV, menos homogêneo.
        </p>
      </HighlightBox>

      <TheoryBlock title="Análise bidimensional: quando duas variáveis são olhadas juntas">
        <p>
          Tudo acima descreve <strong>uma</strong> variável de cada vez. A <strong>análise bidimensional</strong> estuda o comportamento <strong>conjunto</strong> de duas ou mais variáveis — o objetivo é explorar <strong>relações (similaridades) entre as colunas</strong> da tabela de dados. É a ponte entre a estatística descritiva e a mineração: é ela que justifica perguntar "qual atributo se relaciona com o que eu quero prever?".
        </p>
        <p>
          O procedimento muda conforme os tipos das duas variáveis, e são <strong>três casos</strong>:
        </p>
        <PanelList items={bidimensionalCasos} columns="" />
      </TheoryBlock>

      <HighlightBox title="Para onde isso leva" accent="var(--color-accent3)">
        <p>
          Guarde esta seção: os widgets <strong>Rank</strong> (que pontua atributos pela correlação com a variável de destino) e <strong>Scatter Plot</strong> do Orange, e o gráfico de dispersão com limites do Power BI, são <strong>análise bidimensional feita na ferramenta</strong>. E é a mesma lógica que sustenta a <em>feature selection</em>: descartar atributos que não se relacionam com o alvo.
        </p>
      </HighlightBox>
    </section>
  );
}

const assimetriaRegras: PanelItem[] = [
  { title: 'Simétrica', description: 'média = mediana = moda. A distribuição é equilibrada dos dois lados do centro.' },
  { title: 'Assimétrica positiva (à direita)', description: 'média > mediana > moda. A cauda se estende para a direita — poucos valores muito altos puxam a média.' },
  { title: 'Assimétrica negativa (à esquerda)', description: 'média < mediana < moda. A cauda se estende para a esquerda — poucos valores muito baixos puxam a média para baixo.' },
];

const bidimensionalCasos: PanelItem[] = [
  { title: 'Duas variáveis qualitativas', description: 'Cruzam-se as categorias numa tabela de dupla entrada e verifica-se se existe ou não associação — isto é, se conhecer a categoria de uma variável muda a distribuição da outra. Ex.: tipo de direção × tipo de câmbio num conjunto de anúncios de carros.' },
  { title: 'Duas variáveis quantitativas', description: 'Calculam-se os coeficientes de associação ou correlação, que medem a força e o sentido da relação. É o caso de quilometragem × preço, e o gráfico natural é o de dispersão.' },
  { title: 'Uma qualitativa e uma quantitativa', description: 'Analisa-se o que acontece com a variável quantitativa DENTRO de cada categoria da qualitativa, por medidas-resumo (média e mediana por grupo) ou por um box plot por categoria — que mostra de uma vez se os grupos diferem em posição e em dispersão.' },
];

const variaveisTipos: ConceptItem[] = [
  { title: 'Qualitativas', description: 'Valores em categorias. Nominais (sem ordem: cor dos olhos) ou ordinais (com ordem: escolaridade).', accent: 'accent' },
  { title: 'Quantitativas', description: 'Valores numéricos. Discretas (contagem: nº de filhos) ou contínuas (medição: altura, peso).', accent: 'accent3' },
];

const medidasEstatisticas: PanelItem[] = [
  { title: 'Tendência central', description: 'Média (valor médio), mediana (posição central) e moda (valor mais frequente). Em distribuição simétrica, as três coincidem.' },
  { title: 'Dispersão', description: 'Amplitude, variância, desvio-padrão (a mais usada) e coeficiente de variação (compara variabilidades entre conjuntos diferentes).' },
  { title: 'Separatrizes', description: 'Quartis (4 partes), decis (10) e percentis (100). A mediana é o percentil 50 / 2º quartil.' },
  { title: 'Forma', description: 'Assimetria (para onde a cauda se estende) e curtose (grau de achatamento em relação à curva normal).' },
];

function OLAPSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="OLAP e Cubos" subtitle="Análise multidimensional: navegar pelos dados em várias perspectivas" colorClass="text-accent3" />
      <HighlightBox title="A visão multidimensional (o Cubo)">
        <p>
          OLAP (<em>Online Analytical Processing</em>) dá suporte à decisão com uma <strong>visão multidimensional</strong> dos dados — o <strong>Cubo</strong>, composto de dimensões, medidas e células. É um processo <strong>interativo</strong>: o analista formula hipóteses e navega pelos dados.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">OLAP × OLTP</h3>
        <ComparisonTable rows={olapVsOltp} leftLabel="OLTP" rightLabel="OLAP" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Operações sobre o cubo</h3>
        <PanelList items={olapOperacoes} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Cuidado: drill across e drill through têm DUAS definições cada" accent="var(--color-accent2)">
        <p>
          O material da disciplina apresenta <strong>duas definições diferentes para cada uma</strong> dessas operações, em slides seguidos. Não é descuido do resumo: as duas leituras estão lá, e qualquer uma pode virar questão de prova. Vale conhecer as quatro:
        </p>
        <PanelList items={drillDefinicoes} columns="" />
        <p>
          Se cair uma questão sobre isso, leia o enunciado com atenção: se ele falar em <strong>tabelas fato</strong> ou em <strong>pular nível</strong>, é drill across; se falar em <strong>trocar de dimensão</strong> ou em <strong>buscar detalhe fora do esquema</strong>, é drill through.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Tipos de OLAP (por armazenamento)</h3>
        <ConceptGrid items={olapTipos} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Mondrian: um servidor OLAP open source">
        <p>
          O <strong>Mondrian</strong> é um servidor OLAP <strong>open source escrito em Java</strong>, do tipo <strong>ROLAP</strong>: ele executa consultas em <strong>MDX</strong>, lendo os dados de um banco relacional e devolvendo o resultado em formato multidimensional através de uma API Java. O <strong>MDX</strong> é uma linguagem de consulta parecida com o SQL, porém exclusiva para consultas multidimensionais, criada pela Microsoft para o SQL Server OLAP.
        </p>
        <p>
          A arquitetura tem <strong>quatro camadas</strong>: a de <strong>apresentação</strong> decide o que o usuário vê (pivot tables, gráficos, mapas interativos) e todas essas formas compartilham os conceitos de dimensões, medidas e células; a <strong>dimensional</strong> faz o parse, valida e executa o MDX, com um <em>query transformer</em> que permite manipular a consulta existente em vez de reescrevê-la a cada interação; a camada <strong>estrela</strong> mantém o <strong>cache de agregados</strong>, e é o <em>aggregation manager</em> que decide quando é preciso ir buscar dados novos; e a camada de <strong>armazenamento</strong> é o próprio RDBMS.
        </p>
        <p>
          Um detalhe prático: o Mondrian <strong>apenas executa a consulta e a devolve</strong> — a visualização depende de outro software. Na pilha clássica é o <strong>JPivot</strong>, uma <em>tag library</em> que monta as tabelas multidimensionais em JSP e ainda permite as operações básicas de slice, dice e drill down direto na página.
        </p>
      </TheoryBlock>

      <ExampleBox title="Do star schema ao cubo, e uma consulta MDX">
        <p>
          No <strong>Mondrian Schema</strong>, o vocabulário é encaixado: um <strong>cubo</strong> é uma coleção de <strong>medidas</strong> e <strong>dimensões</strong>; a medida tem um nome, uma <strong>coluna na tabela fato</strong> e um <strong>agregador</strong> (<code>sum</code>, <code>count</code>, <code>min</code>); a dimensão é uma coleção de <strong>hierarquias</strong>; a hierarquia é um conjunto de <strong>níveis</strong>; e o nível é uma coleção de <strong>membros</strong>. Antes de montar o esquema é preciso identificar, no modelo relacional, a FK da fato, a PK de cada dimensão e, para cada nível da hierarquia, qual coluna é a chave, qual é exibida ao usuário e qual define a ordenação.
        </p>
        <CodeBlock
          language="mdx"
          title="Uma consulta MDX mínima"
          code={`SELECT
    { [Measures].[Valor Vendido] } ON COLUMNS,
    NON EMPTY
    { [Tempo].[2024].CHILDREN } ON ROWS
FROM [Vendas]
WHERE ( [Produto].[Bebidas] )`}
        />
        <p>
          Leitura: as <strong>medidas</strong> vão em um eixo (<code>ON COLUMNS</code>) e os <strong>membros de uma dimensão</strong> no outro (<code>ON ROWS</code>). <code>[Tempo].[2024].CHILDREN</code> devolve os filhos de 2024 na hierarquia — é um <strong>drill-down</strong> escrito em linguagem. O <code>WHERE</code> não filtra linhas como no SQL: ele define a <strong>fatia</strong> do cubo, ou seja, é um <strong>slice</strong>. E <code>NON EMPTY</code> descarta as combinações sem nenhum fato, que num cubo esparso são a maioria.
        </p>
      </ExampleBox>
    </section>
  );
}

const drillDefinicoes: PanelItem[] = [
  { title: 'Drill Across (1ª definição) — entre tabelas fato', description: 'Consultar VÁRIAS tabelas de fatos e combinar os resultados em um único conjunto de dados. Com uma condição obrigatória: os dados de duas fatos só podem ser combinados se elas usarem CONFORMED DIMENSIONS (dimensões conformadas) — a mesma dimensão, com o mesmo significado e as mesmas chaves, compartilhada pelos dois modelos.' },
  { title: 'Drill Across (2ª definição) — pulando um nível', description: 'Ocorre quando o usuário PULA UM NÍVEL INTERMEDIÁRIO dentro de uma MESMA dimensão. Exemplo do material: a dimensão tempo tem ano, semestre, trimestre, mês e dia; se o usuário vai de ANO direto para TRIMESTRE ou MÊS, sem passar por semestre, ele executou um drill across.' },
  { title: 'Drill Through (1ª definição) — trocando de dimensão', description: 'Ocorre quando o usuário PASSA de uma informação contida em UMA dimensão PARA OUTRA. Exemplo: o usuário está analisando por TEMPO e, no passo seguinte, começa a analisar por REGIÃO.' },
  { title: 'Drill Through (2ª definição) — além da granularidade', description: 'É a operação que permite uma busca ALÉM do nível de granularidade existente na estrutura dimensional — como um drill-down que vai procurar o detalhe em outra estrutura, fora do esquema dimensional. Exemplo do material: a fato guarda o valor das vendas no grão de PRODUTO; para ver o detalhe por NOTA FISCAL será preciso buscar em outro arquivo ou ambiente.' },
];

const olapVsOltp: ComparisonRow[] = [
  { criterion: 'Finalidade', left: 'Operação do dia a dia', right: 'Planejamento estratégico e decisão' },
  { criterion: 'Visão', left: 'Bidimensional (relatórios)', right: 'Multidimensional (cubos)' },
  { criterion: 'Uso', left: 'Muitas transações curtas', right: 'Consultas analíticas complexas' },
];

const olapOperacoes: PanelItem[] = [
  { title: 'Drill-Down / Roll-Up (Drill-Up)', description: 'Navega entre as hierarquias de uma dimensão: drill-down vai do geral ao detalhe (desagrupa); roll-up/drill-up faz o inverso, do detalhe ao geral (agrupa).' },
  { title: 'Slice e Dice', description: 'Slice seleciona um membro de uma dimensão, formando uma "fatia" do cubo original; dice seleciona vários membros de várias dimensões, formando um sub-cubo. Ambos são formas particulares de filtro.' },
  { title: 'Pivoteamento (Rotação)', description: 'Seleciona a ordem de visualização das dimensões — gira o cubo, trocando o que está nas linhas pelo que está nas colunas.' },
  { title: 'Drill Across e Drill Through', description: 'As duas operações que saem do cubo atual: uma combina tabelas fato ou salta níveis; a outra troca de dimensão ou vai buscar o detalhe fora do esquema dimensional. O material dá duas definições para cada — veja o box logo abaixo.' },
];

const olapTipos: ConceptItem[] = [
  { title: 'MOLAP', description: 'Multidimensional: uma cópia dos dados e das agregações fica numa estrutura multidimensional própria. Melhor tempo de resposta e boa compressão, mas com risco de esparsidade.', accent: 'accent' },
  { title: 'ROLAP', description: 'Relacional: toda a informação do cubo fica no banco relacional, e as requisições multidimensionais são traduzidas em SQL. Arquitetura aberta e escalável — é o caso do Mondrian.', accent: 'accent3' },
  { title: 'HOLAP', description: 'Híbrido: combina os dois, buscando a escalabilidade do ROLAP com o desempenho do MOLAP.', accent: 'accent4' },
  { title: 'DOLAP', description: 'Desktop: o cubo é levado para a máquina do analista, que trabalha localmente — rápido, mas limitado ao volume que cabe na estação.', accent: 'accent5' },
  { title: 'WOLAP', description: 'Web: o acesso ao cubo se dá pelo navegador, sem instalação no cliente.', accent: 'accent2' },
];

function PowerBISection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Power BI" subtitle="A ferramenta da Microsoft para modelar dados e construir relatórios e dashboards" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As três versões</h3>
        <ConceptGrid items={powerbiVersoes} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Os três motores por trás do Power BI">
        <p>
          O Power BI é a união de três suplementos que existiam no Excel: <strong>Power Query</strong> (obtenção e limpeza de dados), <strong>Power Pivot</strong> (modelo de dados, relações e medidas) e <strong>Power View</strong> (visualização). No Desktop isso aparece como <strong>três painéis</strong>, na barra à esquerda: <strong>Relatório</strong> (onde se montam os visuais), <strong>Dados</strong> (a visão tabular do que foi carregado) e <strong>Modelo</strong> (o diagrama de relacionamentos entre as tabelas).
        </p>
        <p>
          O ciclo de trabalho tem quatro passos: <strong>obter dados</strong> (conectar e já transformar) → <strong>revisar o modelo</strong> (colunas personalizadas, medidas e relações entre as tabelas) → <strong>criar relatórios e painéis</strong> → <strong>publicar</strong>, para a web e para os dispositivos móveis. Um alerta do material sobre o primeiro passo: <em>só carregue os dados diretamente se tiver certeza de que estão corretos</em> — na dúvida, clique em Transformar e abra o Power Query Editor.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Limpeza no Power Query</h3>
        <PanelList items={powerqueryPassos} columns="md:grid-cols-2" />
      </div>

      <ExampleBox title="Identificando outliers: o box plot que não existe">
        <p>
          O Power BI não tem visual nativo de box plot. A receita do material é <strong>construir um</strong> com medidas DAX e um gráfico de dispersão — e isso liga diretamente a seção de Análise Exploratória à ferramenta:
        </p>
        <CodeBlock
          language="dax"
          title="As medidas do box plot"
          code={`Mediana = MEDIAN( Clientes[Altura] )

Q1 = PERCENTILE.INC( Clientes[Altura]; 0,25 )

Q3 = PERCENTILE.INC( Clientes[Altura]; 0,75 )

IQR = [Q3] - [Q1]

Limite Inferior = [Q1] - 1,5 * [IQR]

Limite Superior = [Q1] + 1,5 * [IQR]`}
        />
        <p>
          Com as medidas prontas, monta-se um <strong>gráfico de dispersão</strong> com o identificador no eixo X e a variável no eixo Y, ambos marcados como <strong>"Não Resumir"</strong> — sem isso o Power BI somaria os valores e mostraria um único ponto. Depois, em <em>Adicionar mais análises ao seu visual → Linha constante do eixo Y</em>, acrescenta-se uma linha para cada medida (mediana, Q1, Q3 e os dois limites), usando o botão <em>fx</em> para apontar a medida. Os pontos que ficarem acima ou abaixo das linhas de limite são os candidatos a outlier.
        </p>
        <p>
          <strong>Nota de fidelidade:</strong> o material escreve o limite superior como <code>Q1 + 1,5 × IQR</code>. A convenção estatística mais difundida usa <code>Q3 + 1,5 × IQR</code> para o limite de cima (mantendo <code>Q1 − 1,5 × IQR</code> embaixo), o que deixa a "cerca" simétrica em torno da caixa. Vale conhecer as duas: siga a do material na prova, e a convencional quando for justificar um corte no seu projeto.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Escolher o visual certo</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          O Power BI seleciona automaticamente uma visualização conforme o <strong>tipo de dado</strong> dos campos escolhidos — se você marcar valor de venda e categoria de produto, ele sugere uma tabela. Mas a sugestão é um ponto de partida: dependendo dos dados, <strong>uma ou mais visualizações podem não ser adequadas</strong>. A pergunta que se responde define a forma:
        </p>
        <PanelList items={powerbiVisuais} columns="md:grid-cols-2" />
      </div>

      <ExampleBox title="As cinco perguntas do exercício de consulta OLAP">
        <p>
          O exercício avaliado pede para construir visuais que respondam a cinco perguntas sobre a base de vendas. Repare que cada uma exige uma forma diferente — é o exercício de tradução "pergunta → visual" na prática:
        </p>
        <PanelList items={powerbiExercicio} columns="" />
        <p>
          E fecha com um requisito que vale por todos: <strong>"dar ao usuário a possibilidade de filtrar os dados por ano, por loja e por país"</strong>. Isso é feito com <strong>segmentações</strong> (<em>slicers</em>), e é exatamente o que transforma um relatório estático em uma ferramenta OLAP: quem usa o painel executa slice e dice sem escrever uma linha de consulta.
        </p>
      </ExampleBox>

      <HighlightBox title="Medidas com DAX" accent="var(--color-accent5)">
        <p>
          As análises usam a linguagem <strong>DAX</strong>. Funções comuns: <code>SUMX</code>, <code>CALCULATE</code>, <code>DIVIDE</code>, <code>FILTER</code>, <code>AVERAGE</code>, <code>COUNTROWS</code>, <code>MEDIAN</code> e <code>PERCENTILE.INC</code>. Há dezenas de visualizações (tabela, matriz, cartão, mapa, barras, linha, pizza, treemap, dispersão, cascata, medidor, funil), e ainda é possível baixar outras do Microsoft AppSource ou importar visuais personalizados.
        </p>
      </HighlightBox>
    </section>
  );
}

const powerbiVisuais: PanelItem[] = [
  { title: 'Um número só ("qual o total vendido?")', description: 'Cartão. Um valor grande e legível, sem eixo nem legenda.' },
  { title: 'Comparar categorias ("vendas por categoria")', description: 'Gráfico de barras ou colunas. Comparação de tamanho é o que o olho faz melhor.' },
  { title: 'Evolução no tempo ("vendas mês a mês")', description: 'Gráfico de linha. O eixo horizontal contínuo comunica sequência.' },
  { title: 'Detalhe cruzado ("vendas por país e por prioridade")', description: 'Matriz — a tabela dinâmica do Power BI, com linhas, colunas e possibilidade de expandir hierarquias.' },
  { title: 'Relação entre duas medidas', description: 'Gráfico de dispersão. É também o visual usado para detectar outliers.' },
  { title: 'Filtrar todo o painel', description: 'Segmentação (slicer). Não mostra dado nenhum: controla os outros visuais.' },
];

const powerbiExercicio: PanelItem[] = [
  { title: '1. Qual o valor total vendido?', description: 'Uma única métrica agregada — um cartão resolve.' },
  { title: '2. Quantas vendas foram realizadas por categoria de produto?', description: 'Uma contagem quebrada por uma dimensão: barras.' },
  { title: '3. Quantas vendas por país, considerando a prioridade de entrega?', description: 'Duas dimensões cruzadas com uma contagem: matriz, ou barras empilhadas.' },
  { title: '4. Qual foi a média de desconto por subcategoria de produto?', description: 'Atenção à agregação: é média, não soma — desconto percentual é métrica não-aditiva.' },
  { title: '5. Quais países tiveram maior média de valor de venda?', description: 'Média por dimensão, ordenada de forma decrescente — barras ordenadas respondem de imediato.' },
];

const powerbiVersoes: ConceptItem[] = [
  { title: 'Desktop', description: 'Onde o projeto é desenvolvido: conexão, modelagem e criação de relatórios.', accent: 'accent' },
  { title: 'Service', description: 'Versão em nuvem (online), para publicar e compartilhar dashboards.', accent: 'accent3' },
  { title: 'Mobile', description: 'Visualização dos relatórios em dispositivos móveis.', accent: 'accent5' },
];

const powerqueryPassos: PanelItem[] = [
  { title: 'Etapas aplicadas', description: 'Cada transformação vira um passo registrado, que pode ser editado, reordenado ou removido.' },
  { title: 'Tipos e filtros', description: 'Validar tipos de dados; filtrar nulos, outliers e duplicados; usar a primeira linha como cabeçalho.' },
  { title: 'Preenchimento', description: 'Completar vazios (para cima/baixo, média, mediana) e substituir valores.' },
  { title: 'Fechar e aplicar', description: 'Ao final, as transformações são aplicadas e os dados carregados no modelo.' },
];

function BigDataSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Big Data" subtitle="Quando o volume, a velocidade e a variedade superam o software tradicional" colorClass="text-accent5" />
      <HighlightBox title="Os 5 V's">
        <p>
          Big Data é o conjunto de dados grandes e complexos que o software tradicional não consegue gerenciar. É caracterizado por cinco dimensões: <strong>Volume, Velocidade, Variedade, Veracidade</strong> (confiabilidade) e <strong>Valor</strong> (significância para a organização).
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Tipos de dados</h3>
        <ConceptGrid items={bigdataTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Armazenar e processar</h3>
        <PanelList items={bigdataTecnologias} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">NoSQL — quatro categorias</h3>
        <ConceptGrid items={noSqlCategorias} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Data Lake × Data Warehouse × Lakehouse" accent="var(--color-accent2)">
        <p>
          O <strong>Data Lake</strong> guarda dados brutos, não processados. O <strong>Data Warehouse</strong> guarda dados já processados para um fim. O <strong>Data Lakehouse</strong> é a arquitetura que combina a flexibilidade e a economia do lake com o gerenciamento do warehouse.
        </p>
      </HighlightBox>
    </section>
  );
}

const bigdataTipos: ConceptItem[] = [
  { title: 'Estruturados', description: 'Domínios definidos, ligados a SGBDs e planilhas (números, datas, texto).', accent: 'accent' },
  { title: 'Semiestruturados', description: 'Meio-termo, com tags (JSON, XML) — comuns na web.', accent: 'accent4' },
  { title: 'Não estruturados', description: 'Sem formato fixo (fotos, vídeos, áudio, mídias sociais).', accent: 'accent2' },
];

const bigdataTecnologias: PanelItem[] = [
  { title: 'Hadoop', description: 'Ecossistema Apache com HDFS (arquivos distribuídos, tolerante a falhas) e MapReduce (processamento distribuído em cluster). Viabiliza o Data Lake com hardware barato.' },
  { title: 'ETL vs ELT', description: 'Resolvem o mesmo problema mudando a ordem da transformação. O ELT (transformar depois de carregar) é a modernização, mais ágil no carregamento.' },
];

const noSqlCategorias: ConceptItem[] = [
  { title: 'Chave/Valor', description: 'Pares simples e rápidos (Redis, Riak).', accent: 'accent' },
  { title: 'Documentos', description: 'Documentos flexíveis, tipo JSON (MongoDB, CouchDB).', accent: 'accent3' },
  { title: 'Grafos', description: 'Nós e relações (Neo4j, OrientDB), ótimos para redes.', accent: 'accent4' },
  { title: 'Colunar', description: 'Orientado a colunas, para grande escala (Cassandra).', accent: 'accent5' },
];

function MineracaoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Mineração de Dados" subtitle="Descobrir padrões válidos, novos e úteis em grandes massas de dados" colorClass="text-accent2" />
      <HighlightBox title="KDD e Data Mining">
        <p>
          O <strong>KDD</strong> (Knowledge Discovery in Databases) é o processo de identificar padrões <strong>compreensíveis, válidos, novos e potencialmente úteis</strong> (Fayyad, 1996). A <strong>mineração de dados</strong> é a etapa principal do KDD. Lema: "dado sem qualidade resulta em mineração sem qualidade".
        </p>
      </HighlightBox>
      <FlowDiagram items={['Preparação', 'Mineração (tarefa + algoritmo)', 'Avaliação']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As tarefas de mineração</h3>
        <ConceptGrid items={mineracaoTarefas} columns="md:grid-cols-3" />
      </div>

      <ExampleBox title="Suporte e confiança, na prática">
        <p>
          As duas medidas que qualificam uma regra de associação são fáceis de confundir. A diferença está no <strong>denominador</strong>:
        </p>
        <PanelList items={suporteConfianca} columns="" />
        <p>
          Exemplo: em 10 transações, "pão" aparece em 6 e "pão + café" em 5. A regra <strong>Pão → Café</strong> tem <strong>suporte de 50%</strong> (5 das 10 transações contêm os dois) e <strong>confiança de 83%</strong> (5 das 6 transações que contêm pão também contêm café). Uma regra pode ter confiança altíssima e suporte irrelevante — vale para três clientes no ano inteiro. Por isso as duas medidas andam juntas, e o APRIORI recebe um mínimo de cada uma.
        </p>
      </ExampleBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Etapa 3 — como se avalia um modelo</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          A terceira caixa do fluxo é a que fecha o ciclo, e o material lista <strong>cinco critérios</strong>. Note que só o primeiro é sobre acertar:
        </p>
        <PanelList items={avaliacaoCriterios} columns="md:grid-cols-2" />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-4 reading-measure">
          E, diante de um resultado insatisfatório, há <strong>duas ações possíveis</strong>: ajustar os parâmetros do algoritmo ou escolher outro algoritmo. É exatamente isso que se faz no Orange ao mexer no número de <em>folds</em> da validação cruzada ou ao trocar a rede neural por um Random Forest.
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Data Mining × OLAP</h3>
        <ComparisonTable rows={dmVsOlap} leftLabel="OLAP" rightLabel="Data Mining" />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Os dois se apoiam no Data Warehouse, mas por motivos diferentes: o DW <strong>facilita o KDD</strong> porque já fez o pré-processamento — entrega os dados integrados, consistentes e limpos. O material sugere combinar as duas abordagens: a capacidade de agregação do OLAP com a descoberta de padrões do KDD.
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Casos reais</h3>
        <PanelList items={mineracaoCasos} columns="md:grid-cols-3" />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Os três casos vêm do material da disciplina. O do Walmart é o mais citado da área — e também o mais contestado fora dela, com pouca documentação pública que o sustente; cite-o como o exemplo clássico que é, não como estudo comprovado.
        </p>
      </div>

      <HighlightBox title="O que decide o sucesso de um projeto de KDD" accent="var(--color-accent2)">
        <p>
          O processo é complexo e <strong>muito dependente da experiência do especialista</strong>: conhecimento sobre os dados do negócio, métodos de preparação, algoritmos e ferramentas apropriadas. A advertência do material é direta: <em>não adianta um alto investimento em ferramentas e hardware se não se investe nas pessoas que vão fazer esse ambiente ganhar vida.</em>
        </p>
      </HighlightBox>
    </section>
  );
}

const suporteConfianca: PanelItem[] = [
  { title: 'Suporte — sobre TODAS as transações', description: 'O percentual das transações em que a regra aparece: quantas vezes o antecedente e o consequente aparecem juntos, dividido pela quantidade total de transações. Responde "isso acontece com que frequência?".' },
  { title: 'Confiança — só sobre as que têm o antecedente', description: 'Não considera todas as transações: trabalha apenas com as que possuem o antecedente da regra. É o número de vezes em que antecedente e consequente aparecem juntos, dividido pela quantidade de transações que possuem o antecedente. Responde "quando A acontece, com que frequência B também acontece?".' },
];

const avaliacaoCriterios: PanelItem[] = [
  { title: 'Acurácia', description: 'A habilidade do modelo de predizer corretamente o comportamento de amostras desconhecidas — não das que ele já viu no treino.' },
  { title: 'Desempenho', description: 'Medida dos custos computacionais envolvidos na geração e na utilização do modelo. Um modelo excelente que leva horas para responder pode ser inviável.' },
  { title: 'Robustez', description: 'A habilidade de atuar corretamente em amostras com atributos faltando ou com ruído — que é como os dados reais chegam.' },
  { title: 'Escalabilidade', description: 'A habilidade de construir um modelo eficiente a partir de grandes quantidades de dados.' },
  { title: 'Interpretabilidade', description: 'A habilidade de tornar compreensível o conhecimento gerado. É o que faz uma árvore de decisão ser preferida a uma rede neural quando alguém precisa justificar a decisão.' },
];

const mineracaoTarefas: ConceptItem[] = [
  { title: 'Classificação — PREDITIVA', description: 'Constrói um modelo capaz de gerar classificações para novos objetos, descobrindo o relacionamento entre os atributos PREDITIVOS (que influenciam a decisão) e o atributo OBJETIVO (a classe). Ex.: aprovar ou não crédito a partir do cargo e do tempo de relacionamento, com uma árvore de classificação. Uma vez treinado, o modelo vira uma regra aplicável: "SE cargo = DBA OU tempo > 6 ENTÃO sim".', accent: 'accent' },
  { title: 'Associação — DESCRITIVA', description: 'Identifica padrões em dados históricos, representando com certo grau de certeza a relação entre o antecedente e o consequente de uma regra. O grau de certeza vem de suporte e confiança; o algoritmo é o APRIORI. Ex.: cesta de compras. Não prevê nada sobre um caso novo: descreve o que já está nos dados.', accent: 'accent3' },
  { title: 'Agrupamento — DESCRITIVA', description: 'Clusterização: reúne indivíduos semelhantes e diferencia os diferentes, calculando distâncias entre eles. Há técnicas hierárquicas e não hierárquicas (partição); o exemplo é o K-Means. A dificuldade central é definir o que é similaridade — e a clusterização NÃO responde por que os padrões existem, apenas os identifica.', accent: 'accent5' },
];

const dmVsOlap: ComparisonRow[] = [
  { criterion: 'Abordagem', left: 'Verificação', right: 'Descoberta' },
  { criterion: 'A questão', left: 'O analista conhece e testa a hipótese', right: 'A questão é desconhecida; a ferramenta busca padrões' },
];

const mineracaoCasos: PanelItem[] = [
  { title: 'Walmart — varejo', description: 'O caso clássico da área: a associação entre a venda de fraldas e a de cervejas, e também entre a boneca Barbie e as barras de chocolate. Com base nessas descobertas os produtos foram realocados nas lojas, e as vendas aumentaram.' },
  { title: 'Itaú — setor bancário', description: 'Pioneiro no uso de Data Warehouse no Brasil. Enviava mais de 1 milhão de malas diretas aos correntistas, com retorno que não passava de 2%. Depois de analisar os dados armazenados, passou a enviar as cartas apenas a quem tinha maior chance de responder: o retorno subiu para 30% e a conta do correio caiu a um quinto.' },
  { title: 'Sprint — telecomunicações', description: 'Desenvolveu um método capaz de prever com 61% de certeza se um cliente trocaria de empresa em até dois meses. Com marketing agressivo sobre esses clientes, evitou a deserção de 120.000 deles e uma redução de US$ 35 milhões no faturamento. A lição está no contraste: um modelo de apenas 61% — pouco acima do acaso — já gerou retorno enorme.' },
];

function OrangeSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Orange e Machine Learning" subtitle="Mineração por programação visual: montar modelos sem escrever código" colorClass="text-accent3" />
      <HighlightBox title="O que é o Orange">
        <p>
          Orange é uma ferramenta de mineração de dados com <strong>programação visual</strong>: componentes chamados <strong>widgets</strong> são conectados em um <strong>fluxo de trabalho</strong>, sem exigir código. Serve tanto para iniciantes quanto para especialistas.
        </p>
      </HighlightBox>
      <FlowDiagram items={['Entrada', 'Amostragem', 'Visualização', 'Pré-processamento', 'Modelo', 'Avaliação', 'Aplicação']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Supervisionado × Não supervisionado</h3>
        <ComparisonTable rows={aprendizadoTipos} leftLabel="Supervisionado" rightLabel="Não supervisionado" />
      </div>

      <TheoryBlock title="Pré-processamento: os widgets que preparam os dados">
        <p>
          Antes de qualquer modelo vem o pré-processamento — a mesma limpeza e transformação da seção de ETL, agora dentro da ferramenta de mineração. São três widgets principais, além do <strong>Preprocess</strong>, que encadeia vários métodos num único pipeline (e que, avisa o material, <em>precisa ser usado com cautela para evitar a perda de informações importantes ou, pior, o overfitting</em>).
        </p>
        <p>
          <strong>Por que discretizar?</strong> Esta é a justificativa causal que costuma faltar: existem algoritmos que <strong>não podem usar colunas contínuas como entrada</strong> (o Naive Bayes é o exemplo dado), e há colunas com tantos valores distintos que o algoritmo não consegue identificar os padrões interessantes. Discretizar é transformar valores contínuos numa coleção finita de intervalos, com pouca perda de informação.
        </p>
        <PanelList items={orangePreprocess} columns="" />
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Métodos de amostragem do Test and Score</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          O widget <strong>Test and Score</strong> recebe três entradas — os dados de treino, um ou mais <em>learners</em> (modelos) e, opcionalmente, dados de teste separados — e permite <strong>comparar vários modelos ao mesmo tempo</strong>. A escolha do método de amostragem muda o que a métrica significa:
        </p>
        <PanelList items={orangeAmostragem} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Avaliação do modelo</h3>
        <PanelList items={avaliacaoModelo} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Lift Curve" accent="var(--color-accent2)">
        <p>
          Além da ROC e da matriz de confusão, o material apresenta a <strong>Lift Curve</strong>. Algoritmos de classificação geralmente devolvem uma <strong>probabilidade</strong> (de o paciente ter a doença, de o cliente cancelar), que só depois vira uma previsão. A curva de lift usa essa probabilidade para avaliar o quão bem o modelo identifica as instâncias positivas.
        </p>
        <p>
          O <strong>lift</strong> é a proporção de positivos em um determinado ponto da amostra dividida pela proporção de positivos no conjunto inteiro — ou seja, dividida pelo que um <strong>algoritmo aleatório</strong> teria acertado. Um lift de 3 significa "acertei três vezes mais do que o acaso nesta fatia". O <strong>ponto A</strong> da curva é o de <strong>elevação máxima</strong>, e o modelo com a elevação máxima mais alta costuma ser o melhor. É a métrica que responde à pergunta de negócio: "se eu só tenho orçamento para abordar 10% dos clientes, quantos dos que iam cancelar eu pego?".
        </p>
      </HighlightBox>

      <TheoryBlock title="Um caso completo, do CSV ao valor previsto">
        <p>
          Os dois exercícios de Orange formam um estudo de caso encadeado sobre uma base real de anúncios de automóveis da OLX. O raciocínio, em oito passos, é o roteiro de qualquer projeto de mineração:
        </p>
        <PanelList items={orangeCaso} columns="" />
        <p>
          E o exercício termina com um convite que vale para o projeto da 4ª nota: <strong>mexa na parametrização</strong>. Mude o número de <em>folds</em> da validação cruzada, altere o número de neurônios da camada oculta da rede neural, acrescente <em>feature selection</em> antes da criação do modelo — e verifique se o desempenho muda de fato. É a aplicação direta das "duas ações possíveis" da etapa de avaliação do KDD.
        </p>
      </TheoryBlock>

      <HighlightBox title="Modelos em destaque" accent="var(--color-accent5)">
        <p>
          Para <strong>classificação</strong>, o Orange oferece kNN, SVM, Classification Tree, Random Forest, Gradient Boosted Trees, CN2 Rule Induction, Neural Network, Logistic Regression, Naive Bayes e AdaBoost. Para <strong>regressão</strong>: Linear Regression, Regression Tree, Random Forest e outros. Para <strong>clusterização</strong>: Hierarchical, K-Means e DBSCAN. Para <strong>associação</strong>: Frequent Itemsets e Association Rules.
        </p>
        <p>
          Sobre alguns deles: a <strong>regressão logística</strong> usa a função <em>sigmoide</em> e é o principal método para classificação binária; as <strong>árvores de decisão</strong> são fáceis de entender e exigem pouca preparação, mas sofrem de <strong>overfitting</strong>; e o <strong>kNN</strong> (k vizinhos mais próximos) é um classificador supervisionado que decide pela vizinhança.
        </p>
      </HighlightBox>
    </section>
  );
}

const orangePreprocess: PanelItem[] = [
  { title: 'Discretize — contínuo vira categórico', description: 'Converte atributos numéricos em categóricos. Opções: Natural binning (as melhores faixas para a quantidade desejada), Fixed width (largura definida pelo usuário — com largura 10 e valores de 35 a 68, saem as faixas <40, 40-50, 50-60, >60), Time interval (o mesmo para datas), Equal-frequency (cada faixa com o mesmo número de amostras), Equal-width (cada faixa com a mesma largura, mas número de observações diferente), Entropy-MDL (de Fayyad e Irani: divisão recursiva top-down, com número arbitrário de intervalos) e Custom. Atenção: se o método resultar em um único intervalo, a variável é descartada como inútil.' },
  { title: 'Continuize — categórico vira numérico', description: 'Transforma variáveis discretas em variáveis "fictícias" numéricas. Para as categóricas: first value as base e most frequent as base (uma variável de N valores vira N−1 colunas), one-hot encoding (uma coluna por valor), treat as ordinal (cada valor vira um número) e treat as normalized ordinal (o mesmo, normalizado entre 0 e 1). Para as numéricas, faz a padronização: standardize a µ=0 e σ²=1 (o escore Z), center a µ=0, scale a σ²=1, e normalize para o intervalo [-1,1] ou [0,1].' },
  { title: 'Normalize — por que padronizar as escalas', description: 'A normalização reduz o intervalo de valores de um atributo. É essencial quando os atributos estão em escalas diferentes, por dois motivos: os modelos convergem mais rápido em escalas semelhantes, e a relevância de um atributo de escala menor seria diluída pelos valores de outro em escala maior — quilometragem na casa dos milhares abafaria o número de portas.' },
  { title: 'Feature selection / redução de dados', description: 'Muitas características trazem complexidade e podem levar o modelo a se ajustar demais aos dados; alguns atributos ainda introduzem ruído. Removê-los melhora a generalização e o desempenho. Técnicas: Recursive Feature Elimination (corta recursivamente os atributos menos significativos), PCA (transforma linearmente os dados num novo sistema de coordenadas com menos dimensões) e Select Relevant Features (pontua por information gain, gain ratio, gini index, ReliefF, ANOVA, Chi², entre outros).' },
];

const orangeAmostragem: PanelItem[] = [
  { title: 'Cross Validation', description: 'Os dados são separados em k partes; o algoritmo testa uma parte de cada vez contra todas as outras, repetindo para cada uma. É o padrão do widget, normalmente com 5 folds e estratificado.' },
  { title: 'Cross Validation by feature', description: 'Igual à anterior, mas as partições são definidas por uma característica escolhida — útil quando as amostras têm agrupamento natural que não se deve quebrar.' },
  { title: 'Random sampling', description: 'Divide em treino e teste aleatoriamente, segundo uma proporção definida, e repete o sorteio quantas vezes se especificar.' },
  { title: 'Leave-one-out', description: 'Separa UMA amostra por vez e a compara com todo o conjunto de dados. Muito preciso e confiável, porém muito lento — roda uma vez por instância.' },
  { title: 'Test on train data', description: 'Usa todos os dados para treinar e para testar. Serve como referência otimista: se o modelo vai mal aqui, vai pior em qualquer lugar.' },
  { title: 'Test on test data', description: 'Usa um conjunto separado, entrado por um canal adicional do widget, só para o teste. É o mais honesto quando há dados suficientes.' },
];

const orangeCaso: PanelItem[] = [
  { title: '1. Carregar e conferir os metadados', description: 'Com o widget File. Verificar nome, tipo e papel de cada atributo — no caso, "tipo do veículo" veio como texto e papel "meta", e precisou virar categórico com papel "feature". Nenhum atributo estava marcado como alvo.' },
  { title: '2. Descrever com Feature Statistics', description: 'Amplitude, distribuição, média, moda e — decisivo — a quantidade e o percentual de valores ausentes de cada atributo. Ordenar por dispersão e por ausentes é o que revela o que está errado.' },
  { title: '3. Decidir o que descartar, com justificativa', description: 'Três decisões, todas fundamentadas nos números: "tipo de veículo" só tinha 3% dos registros preenchidos; "categoria" tinha um valor único; e "possui kit GNV" tinha ~97% de "não". Atributo quase vazio ou quase constante não carrega informação. Removidos com Select Columns.' },
  { title: '4. Ver a distribuição e cruzar variáveis', description: 'Com Distributions, quebrando por outro atributo — analisar o tipo de câmbio em função do tipo de direção mostrou que carros manuais predominam com direção hidráulica, e automáticos com direção elétrica. É análise bidimensional dentro da ferramenta.' },
  { title: '5. Encontrar e cortar outliers', description: 'O Scatter Plot expôs quilometragens absurdas. Selecionando os pontos no gráfico e inspecionando as instâncias num Data Table, decidiu-se manter apenas as quilometragens abaixo de 500.000 km — "deixando uma boa margem de segurança e conseguindo uma amostragem mais homogênea". Aplicado com Select Rows.' },
  { title: '6. Definir o problema e o alvo', description: 'Objetivo: inferir o câmbio dos anúncios em que ele não foi informado. Separam-se os registros COM câmbio (para treinar) dos SEM câmbio (para prever). Remove-se ainda a classe rara "semi-automático", reduzindo o problema a duas classes — 266 instâncias descartadas, cerca de 5%.' },
  { title: '7. Comparar modelos e escolher', description: 'Test and Score com validação cruzada de 5 folds, estratificada, alimentado por seis modelos ao mesmo tempo: Neural Network, AdaBoost, SVM, Naive Bayes, Gradient Boosting e Random Forest. O Random Forest teve o melhor desempenho e foi o adotado. Confusion Matrix e ROC Analysis detalharam o resultado.' },
  { title: '8. Aplicar o modelo aos casos desconhecidos', description: 'O widget Predictions usa o modelo treinado sobre os anúncios sem câmbio informado. A opção "Show probabilities for" mostra o grau de certeza de cada previsão: uma linha pode sair com 100% para "Automático" e outra com 52% contra 48% — e o valor previsto só é confiável na medida dessa probabilidade.' },
];

const aprendizadoTipos: ComparisonRow[] = [
  { criterion: 'Tem classe-alvo?', left: 'Sim (target definido)', right: 'Não' },
  { criterion: 'Tarefas', left: 'Classificação e regressão', right: 'Clusterização e associação' },
  { criterion: 'Exemplos', left: 'kNN, árvore, Naive Bayes, regressão logística, SVM, Random Forest', right: 'K-Means, DBSCAN, clusterização hierárquica, regras de associação' },
];

const avaliacaoModelo: PanelItem[] = [
  { title: 'Métricas de classificação', description: 'Acurácia (CA), AUC (área sob a curva ROC), F1 (média de precisão e recall), precisão, recall e MCC (para classes desbalanceadas).' },
  { title: 'Métricas de regressão', description: 'MSE, RMSE, MAE e R² medem o erro entre o previsto e o real.' },
  { title: 'Matriz de confusão', description: 'Mostra os classificados versus os reais — verdadeiros/falsos positivos e negativos.' },
  { title: 'Validação', description: 'Métodos de amostragem como validação cruzada (cross validation) e leave-one-out avaliam o modelo com dados que ele não viu no treino.' },
];

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={TABD_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={TABD_GUIDE_CONTEXT} topics={TABD_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={TABD_EXAMS} />}
        aiKahoot={<AIKahootQuiz guideContext={TABD_GUIDE_CONTEXT} topics={TABD_TOPICS} />}
      />
    </section>
  );
}

export default function TABDSections({ activeSection }: TABDSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'projetos':
      return <ProjetosSection />;
    case 'bi':
      return <BISection />;
    case 'dw':
      return <DWSection />;
    case 'dimensional':
      return <DimensionalSection />;
    case 'avancada':
      return <AvancadaSection />;
    case 'etl':
      return <ETLSection />;
    case 'aed':
      return <AEDSection />;
    case 'olap':
      return <OLAPSection />;
    case 'powerbi':
      return <PowerBISection />;
    case 'bigdata':
      return <BigDataSection />;
    case 'mineracao':
      return <MineracaoSection />;
    case 'orange':
      return <OrangeSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
