import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function ProjetoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Projeto e Dashboards"
        subtitle="Onde tudo se junta: da base pública ao painel que responde perguntas de negócio"
        colorClass="text-accent"
      />

      <TheoryBlock title="O ciclo completo">
        <p>
          O projeto final da disciplina exercita a cadeia inteira em um caso real: extrair dados
          públicos, tratá-los, modelá-los dimensionalmente e apresentá-los num{' '}
          <strong>dashboard interativo</strong> que responde perguntas de negócio. É o SAD em
          forma concreta — não um relatório estático, mas um instrumento de exploração.
        </p>
      </TheoryBlock>

      <Subsection title="O projeto: empregabilidade na enfermagem (RAIS)" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          A <strong>RAIS</strong> (Relação Anual de Informações Sociais) é a base oficial do
          Ministério do Trabalho com os vínculos formais de trabalho no Brasil, permitindo análises
          por ocupação (CBO), gênero, faixa etária, remuneração, geografia e atividade econômica
          (CNAE). O enunciado: uma instituição de saúde quer entender o perfil dos profissionais
          de enfermagem empregados formalmente para decidir sobre contratação, capacitação e
          expansão de unidades.
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Os cortes exigidos (as DIMENSÕES)',
              description: 'Gênero · faixa etária · faixa salarial · estado (UF) · município · região · CNAE do empregador · evolução temporal mês a mês nos últimos dois anos.',
              accent: 'accent',
            },
            {
              title: 'As perguntas de negócio',
              description: 'Qual o perfil predominante? Como se distribuem por gênero e faixa etária? Como estão os salários? Quais estados, regiões e municípios concentram mais vínculos? Quais CNAEs mais empregam? Como evoluiu a quantidade de vínculos? Há diferenças salariais entre gêneros, regiões ou faixas? Que tendências apoiam decisões de contratação e formação?',
              accent: 'accent2',
            },
          ]}
        />
        <ExampleBox title="Traduzindo para o modelo dimensional">
          <p>
            O <strong>fato</strong> é o vínculo empregatício. As <strong>medidas</strong> são
            numéricas: quantidade de vínculos, massa salarial, salário médio. Tudo o que o
            dashboard oferece como filtro — gênero, idade, geografia, CNAE, tempo — são as{' '}
            <strong>dimensões</strong>. Rode as quatro perguntas do fato e o modelo se desenha
            sozinho: <em>onde</em> (UF, município, região), <em>quando</em> (mês, ano),{' '}
            <em>quem</em> (gênero, faixa etária) e <em>o quê</em> (ocupação, CNAE).
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Os outros exercícios práticos" accentClass="text-accent3">
        <PanelList
          columns=""
          items={[
            {
              title: 'Exercício 7 — Dashboard no Power BI',
              description: 'Construir o primeiro dashboard seguindo o tutorial em vídeo, com o material de apoio "Aprenda Power BI". É a ferramenta de apresentação da camada final da arquitetura de BI.',
            },
            {
              title: 'Exercício de ETL com o CAGED',
              description: 'Baixar os microdados do CAGED via FTP do Ministério do Trabalho, carregar os empregos da área de TI e modelar o banco em ESTRELA — definindo a tabela fato, as dimensões e as medidas com seus KPIs.',
            },
            {
              title: 'Classificação de áudio',
              description: 'Sistema em Python que identifica espécies animais: a Librosa extrai 40 features dos .wav de treino (com os rótulos nos nomes dos arquivos), uma árvore de decisão aprende, e o modelo processa em lote a pasta de teste exportando predições e níveis de confiança.',
            },
            {
              title: 'MNIST, EMNIST e o desafio Kaggle',
              description: 'Reconhecimento de dígitos e letras manuscritos com redes neurais, variando arquitetura e hiperparâmetros e avaliando por acurácia e F1-score; e a competição BirdCLEF+ 2026 no Kaggle.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O que um bom dashboard entrega" accent="var(--color-accent3)">
        <p>
          O exemplo do material — o painel da COVID em Alagoas — mostra o padrão: os{' '}
          <strong>números-chave</strong> em destaque (300 mil confirmados, 293 mil recuperados,
          6.935 óbitos), a <strong>evolução temporal</strong>, os <strong>cortes por
          dimensão</strong> (gênero, região no mapa) e um <strong>ranking</strong> (óbitos por
          comorbidade). Note o que isso tem de SAD: quem olha não recebe uma resposta pronta —
          recebe um instrumento para investigar hipóteses e decidir com base em dados.
        </p>
      </HighlightBox>
    </section>
  );
}
