import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ArvoresSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores de Decisão"
        subtitle="Classificação supervisionada que se lê como um fluxograma — e explica a própria decisão"
        colorClass="text-accent"
      />

      <TheoryBlock title="Dividir para separar">
        <p>
          Árvores de decisão são algoritmos de aprendizado <strong>supervisionado</strong>, para
          classificação e regressão, que <strong>dividem recursivamente</strong> os dados em
          subconjuntos cada vez mais <strong>homogêneos</strong>. O objetivo a cada passo:
          encontrar a característica que melhor <strong>separa</strong> os dados segundo a
          variável alvo.
        </p>
        <p>
          Sua estrutura: o <strong>nó raiz</strong> (a primeira divisão, com a característica mais
          importante), os <strong>nós internos</strong> (testes em atributos, cujo resultado
          escolhe o ramo) e as <strong>folhas</strong> (a classificação final). Classificar um
          exemplo novo é percorrer a árvore da raiz até uma folha — e por isso o modelo{' '}
          <strong>explica</strong> a própria decisão, virtude rara em aprendizado de máquina.
        </p>
      </TheoryBlock>

      <Subsection title="Como escolher a divisão: as métricas de impureza" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Métrica"
          leftLabel="Fórmula e leitura"
          rightLabel="Onde é usada"
          rows={[
            { criterion: 'Índice GINI', left: '1 − Σ(pi)² — mede a probabilidade de erro de classificação naquele nó. Gini = 0 significa nó PURO (todos da mesma classe).', right: 'Algoritmo CART (o padrão do scikit-learn)' },
            { criterion: 'ENTROPIA', left: '−Σ pi·log2(pi) — mede a desordem/incerteza dos dados. Busca-se maximizar o GANHO DE INFORMAÇÃO.', right: 'Algoritmos ID3 e C4.5' },
          ]}
        />
        <ExampleBox title="Ganho de informação">
          <p>
            <strong>Ganho = entropia do nó PAI − média PONDERADA das entropias dos FILHOS</strong>.
            Traduzindo: quanta desordem aquela divisão eliminou. O atributo escolhido para cada nó
            é o que <strong>maximiza</strong> esse ganho. A ponderação pelo tamanho dos filhos
            evita premiar divisões que isolam pouquíssimas amostras.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Os três algoritmos clássicos" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'ID3', description: 'O pioneiro: usa entropia e ganho de informação. Trabalha com atributos categóricos.', accent: 'accent' },
            { title: 'C4.5', description: 'Evolução do ID3 — passa a tratar valores contínuos e dados faltantes.', accent: 'accent2' },
            { title: 'CART', description: 'Usa o índice Gini e produz árvores estritamente BINÁRIAS. É a base do scikit-learn.', accent: 'accent3' },
          ]}
        />
      </Subsection>

      <Subsection title="O risco: overfitting" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Deixada livre, a árvore cresce até separar cada exemplo — e passa a{' '}
          <strong>decorar o treino</strong> em vez de aprender o padrão. O sintoma clássico:
          acurácia perfeita no treino e desempenho ruim no teste. As correções:{' '}
          <strong>poda</strong> (pruning) e <strong>limitação da profundidade</strong>.
        </p>
        <CodeBlock
          language="python"
          title="As rédeas no scikit-learn"
          code={`from sklearn.tree import DecisionTreeClassifier, plot_tree

modelo = DecisionTreeClassifier(
    criterion='gini',        # ou 'entropy'
    max_depth=4,             # CRUCIAL contra overfitting
    min_samples_split=2,     # mínimo de amostras para dividir um nó
    min_samples_leaf=1,      # mínimo de amostras numa folha
    class_weight='balanced', # útil com classes desbalanceadas
    random_state=42,
)

modelo.fit(X_treino, y_treino)
modelo.predict(X_teste)          # a classe prevista
modelo.predict_proba(X_teste)    # a probabilidade de cada classe
modelo.score(X_teste, y_teste)   # acurácia
modelo.get_depth(), modelo.get_n_leaves()

# visualizar a árvore — e conseguir explicá-la
plot_tree(modelo, feature_names=X.columns, class_names=['Saudável', 'Doente'],
          filled=True, rounded=True, fontsize=10)`}
        />
      </Subsection>

      <HighlightBox title="O exemplo da turma e o exercício de áudio" accent="var(--color-accent3)">
        <p>
          O material treina uma árvore para <strong>diagnóstico cardíaco</strong> com idade,
          colesterol e pressão arterial — e a raiz da árvore resultante testa{' '}
          <em>colesterol ≤ 250</em>, seguida por divisões em pressão e idade. Já o exercício
          avaliado é mais ambicioso: identificar <strong>espécies animais por áudio</strong>,
          extraindo 40 features dos arquivos .wav com a biblioteca <strong>Librosa</strong> e
          classificando com árvore de decisão, com relatório de predições e níveis de confiança.
          A lição estrutural: modelos não consomem áudio cru — alguém precisa transformar sinal
          em atributos.
        </p>
      </HighlightBox>
    </section>
  );
}
