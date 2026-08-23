import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ComparisonTable, ExampleBox, PanelList } from '../../../components/sections';

export default function RegressaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Regressão Linear"
        subtitle="Da correlação à reta que prevê — e o que o R² realmente diz"
        colorClass="text-accent"
      />

      <TheoryBlock title="Correlação e regressão: a ordem importa">
        <p>
          <strong>Correlação</strong> mede o <em>grau</em> de relacionamento entre duas
          variáveis. <strong>Regressão</strong> estabelece a <em>equação</em> que descreve esse
          relacionamento e permite <strong>prever</strong>. Na prática se faz nessa ordem: primeiro
          verificar se existe relação e quão forte é; depois ajustar a reta.
        </p>
        <p>
          A variável <strong>dependente (Y)</strong> é a resposta — o que se quer prever; a{' '}
          <strong>independente (X)</strong> é a explanatória — a informação disponível. Com uma
          única X, é regressão <strong>simples</strong>; com várias, <strong>múltipla</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="O coeficiente de Pearson" accentClass="text-accent2">
        <CodeBlock
          language="python"
          title="A fórmula e suas propriedades"
          code={`        n·Σxy − Σx·Σy
r = ─────────────────────────────────────────
    √(n·Σx² − (Σx)²) · √(n·Σy² − (Σy)²)

# Propriedades:
#  - ADIMENSIONAL: não muda se você trocar reais por dólares, cm por metros
#  - SINAL positivo: diretamente proporcional (uma sobe, a outra sobe)
#  - SINAL negativo: inversamente proporcional
#  - Está SEMPRE no intervalo [-1, 1]`}
        />
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: '0,00 a 0,19', description: 'Correlação bem fraca.' },
            { title: '0,20 a 0,39', description: 'Correlação fraca.' },
            { title: '0,40 a 0,69', description: 'Correlação moderada.' },
            { title: '0,70 a 0,89', description: 'Correlação forte.' },
            { title: '0,90 a 1,00', description: 'Correlação muito forte.' },
            { title: 'O sinal', description: 'Vale para os dois lados: −0,85 é uma correlação FORTE e inversa.' },
          ]}
        />
      </Subsection>

      <Subsection title="O método dos mínimos quadrados" accentClass="text-accent3">
        <CodeBlock
          language="python"
          title="Do modelo à reta ajustada"
          code={`# O modelo:  yi = α + β·xi + ei     (ei = erro aleatório)

# Minimiza-se a soma dos QUADRADOS dos resíduos:
#   S = Σ (yi − α − β·xi)²
# Elevar ao quadrado impede que erros + e − se cancelem
# e penaliza mais os desvios grandes.

# Derivando e igualando a zero, chega-se às estimativas:

    n·Σxy − Σx·Σy                  Σy − b·Σx
b = ─────────────────         a = ───────────
    n·Σx² − (Σx)²                      n

# A reta ajustada:     ŷ = a + b·x
# O resíduo de cada ponto:  ei = yi − ŷi`}
        />
      </Subsection>

      <Subsection title="R²: quanto o modelo explica" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Valor de R²"
          leftLabel="Significado"
          rightLabel="Cuidado"
          rows={[
            { criterion: 'R² = 0', left: 'O modelo não explica nada da variabilidade de Y', right: 'A reta não é melhor que usar a média de Y' },
            { criterion: '0 < R² < 1', left: 'A proporção da variação de Y explicada pelo modelo', right: 'R² = 0,82 significa 82% da VARIAÇÃO explicada — não 82% de acertos' },
            { criterion: 'R² = 1', left: 'Ajuste perfeito: todos os pontos sobre a reta', right: 'Em dados reais, desconfie: pode ser overfitting ou vazamento' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Formalmente, R² = Σ(ŷi − ȳ)² / Σ(yi − ȳ)² — a variação explicada pelo modelo dividida
          pela variação total. Na regressão simples, R² é exatamente o quadrado do r de Pearson.
        </p>
      </Subsection>

      <ExampleBox title="O exercício da turma: octanagem × aditivo">
        <p>
          Dados do experimento — <strong>x</strong> (% de aditivo): 1, 2, 3, 4, 5, 6;{' '}
          <strong>y</strong> (índice de octanagem): 80,5 · 81,6 · 82,1 · 83,7 · 83,9 · 85,0. As
          três perguntas: <strong>(a)</strong> existe relação linear e qual o grau?{' '}
          <strong>(b)</strong> determine a reta de regressão e calcule o R²;{' '}
          <strong>(c)</strong> qual a octanagem esperada com 5,5% de aditivo? O outro exemplo do
          material usa preços de ações e títulos da Bolsa de Nova York entre 1950 e 1959 para o
          cálculo do r.
        </p>
      </ExampleBox>

      <HighlightBox title="Regressão múltipla" accent="var(--color-accent3)">
        <p>
          Quando Y depende de várias variáveis, o modelo se estende para X₁, X₂ … Xₖ. Os exemplos
          do material: <strong>preço de imóvel</strong> (área, custo do m², localização),{' '}
          <strong>tempo de resposta de um sistema</strong> (RAM, sistema operacional,
          processador) e <strong>valor de revenda de um carro</strong> (valor do modelo novo,
          quilometragem, idade, conservação, opcionais). Os cálculos ficam mais complexos e são
          resolvidos por computador — mas a lógica dos mínimos quadrados é a mesma.
        </p>
      </HighlightBox>
    </section>
  );
}
