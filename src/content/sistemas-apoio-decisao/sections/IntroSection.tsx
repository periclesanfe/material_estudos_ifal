import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sistemas de Apoio à Decisão"
        subtitle="A última disciplina do eixo de sistemas: transformar dados em decisão, do ETL ao dashboard"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          SADE (8º período, 80h) fecha o curso ligando tudo o que veio antes:{' '}
          <strong>banco de dados</strong> vira data warehouse,{' '}
          <strong>programação</strong> vira pipeline de ETL em Python, e{' '}
          <strong>análise de sistemas</strong> vira apoio real à tomada de decisão. É uma
          disciplina prática — nove exercícios ao longo do semestre, cada um com uma técnica —
          que atravessa mineração de dados, modelos preditivos, decisão multicritério e
          visualização.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Conceitos: decisão, níveis gerenciais e o que é um SAD',
            'Pandas e ETL — limpeza da base real da COVID em Alagoas',
            'Data warehouse, modelagem dimensional e OLAP',
            'Regras de associação: suporte, confiança e lift (Apriori)',
            'Regressão linear e correlação',
            'AHP — decisão com múltiplos critérios',
            'Agrupamento com k-means (dataset Mall Customers)',
            'Redes neurais: do perceptron ao MNIST',
            'Dashboards no Power BI e o projeto final com a RAIS',
          ]}
        />
      </Subsection>

      <Subsection title="Como a disciplina é avaliada" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Avaliação por atividades',
              description:
                'A nota vem dos exercícios entregues ao longo do semestre — nove ao todo na turma 2026.1, um por técnica —, mais o projeto final. Não há prova bimestral no formato tradicional; quem fica pendente faz a avaliação de reposição.',
            },
            {
              title: 'O projeto final',
              description:
                'Análise da empregabilidade dos profissionais de enfermagem no Brasil com os microdados da RAIS: um dashboard interativo com cortes por gênero, faixa etária, faixa salarial, UF, município, região, CNAE e evolução mensal — respondendo a dez perguntas de negócio.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Ferramentas e datasets do curso" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Python: pandas e scikit-learn',
              description:
                'O ETL é feito em pandas (no Google Colab); os modelos, em scikit-learn (árvores, k-means) e Keras (redes neurais). Apyori e pyECLAT para regras de associação; Librosa para áudio.',
              accent: 'accent',
            },
            {
              title: 'Bases reais',
              description:
                'COVID-19 em Alagoas (dados.gov.br), Mall Customers e Iris (Kaggle), microdados da RAIS e do CAGED (Ministério do Trabalho), MNIST e EMNIST para reconhecimento de dígitos e letras.',
              accent: 'accent2',
            },
            {
              title: 'Visualização',
              description:
                'Power BI para os dashboards. O material inclui um exemplo completo de DW da COVID com fato, dimensões e o painel final com casos, óbitos e comorbidades.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma SAD 2026.1 —
          BSI/IFAL (Prof. Edison Camilo): slides das aulas, exercícios com enunciados e
          gabaritos, exemplos numéricos resolvidos (AHP, lift, perceptron, k-means) e os
          datasets usados em sala. A ementa oficial da disciplina cobre decisão, modelos
          decisórios, análise multicritério com AHP e o processo de KDD.
        </p>
      </HighlightBox>
    </section>
  );
}
