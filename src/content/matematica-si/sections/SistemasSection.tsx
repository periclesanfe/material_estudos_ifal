import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ComparisonTable, TheoryBlock } from '../../../components/sections';

export default function SistemasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sistemas Lineares"
        subtitle="Três equações, três incógnitas — e três respostas possíveis"
        colorClass="text-accent5"
        badge="Álgebra linear"
      />

      <TheoryBlock title="O que é">
        <p>
          Um <strong>sistema linear</strong> é um conjunto de equações do primeiro grau nas mesmas incógnitas.
          "Linear" quer dizer que nenhuma incógnita aparece elevada a expoente, sob raiz ou multiplicada por
          outra incógnita.
        </p>
        <p>
          A grande vantagem é que todo sistema linear pode ser escrito como <strong>uma única equação
          matricial</strong> — e passar a ser tratado como um objeto só.
        </p>
      </TheoryBlock>

      <FormulaBlock
        label="Forma matricial"
        accent="accent5"
        caption="O sistema inteiro condensado em uma equação — e é assim que uma biblioteca numérica recebe o problema."
        where={[
          { symbol: 'A', meaning: 'matriz dos coeficientes' },
          { symbol: 'x', meaning: 'vetor das incógnitas' },
          { symbol: 'b', meaning: 'vetor dos termos independentes' },
        ]}
      >
        A <span className="op">·</span> x <span className="op">=</span> b
      </FormulaBlock>

      <Subsection title="As três classificações" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'SPD — Sistema Possível e Determinado',
              description:
                'Tem solução ÚNICA. É o caso em que o determinante da matriz dos coeficientes é diferente de zero — e o único em que a Regra de Cramer se aplica.',
            },
            {
              title: 'SPI — Sistema Possível e Indeterminado',
              description:
                'Tem INFINITAS soluções. Acontece quando as equações não são independentes: uma delas é combinação das outras, e sobra grau de liberdade.',
            },
            {
              title: 'SI — Sistema Impossível',
              description:
                'NÃO tem solução. As equações se contradizem — o escalonamento revela isso ao produzir uma linha do tipo 0 = k, com k diferente de zero.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A leitura geométrica" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          Com duas equações e duas incógnitas, cada equação é uma <strong>reta no plano</strong>, e resolver o
          sistema é achar onde elas se encontram. As três classificações viram três posições relativas:
        </p>
        <ComparisonTable
          leftLabel="Posição das retas"
          rightLabel="Classificação"
          criterionLabel="Caso"
          rows={[
            { criterion: 'Concorrentes', left: 'Cruzam-se em um único ponto', right: 'SPD — solução única' },
            { criterion: 'Coincidentes', left: 'São a mesma reta, sobrepostas', right: 'SPI — infinitas soluções' },
            { criterion: 'Paralelas distintas', left: 'Nunca se encontram', right: 'SI — sem solução' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Em três incógnitas a mesma lógica vale com <strong>planos no espaço</strong>: três planos podem se
          cruzar num ponto (SPD), numa reta ou num plano comum (SPI), ou não ter ponto comum algum (SI).
        </p>
      </Subsection>

      <HighlightBox title="Sistemas lineares estão em toda parte" accent="var(--color-accent2)">
        <p>
          Não é um tópico escolar isolado. Ajustar uma reta a um conjunto de pontos (regressão linear), balancear
          fluxos numa rede, calcular iluminação numa cena 3D, treinar boa parte dos modelos de aprendizado de
          máquina — todos esses problemas terminam em{' '}
          <InlineFormula>A<span className="op">·</span>x <span className="op">=</span> b</InlineFormula>, muitas
          vezes com milhares de equações.
        </p>
        <p>
          É por isso que a próxima seção importa tanto: <strong>como</strong> resolver o sistema faz diferença de
          horas para milissegundos.
        </p>
      </HighlightBox>
    </section>
  );
}
