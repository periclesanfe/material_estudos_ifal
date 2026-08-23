import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function AhpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="AHP — Decisão Multicritério"
        subtitle="O método de Saaty: transformar julgamentos subjetivos em um ranking defensável"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que é o AHP">
        <p>
          <strong>AHP (Analytic Hierarchy Process)</strong> é "uma aproximação para tomada de
          decisão que envolve estruturação de multicritérios de escolha numa{' '}
          <strong>hierarquia</strong>; o método avalia a importância relativa desses critérios,
          compara alternativas para cada critério e determina um <strong>ranking total</strong> das
          alternativas". É simples e confiável, e aceita dados{' '}
          <strong>qualitativos e quantitativos</strong>, tangíveis ou intangíveis — por isso
          resolve decisões em que "comparar maçãs com laranjas" é inevitável.
        </p>
        <p>
          Surgiu nos anos 70, com o <strong>Dr. Thomas L. Saaty</strong>, no Departamento de Defesa
          dos EUA, num estudo sobre racionamento de energia; amadureceu num estudo de transportes
          do Sudão.
        </p>
      </TheoryBlock>

      <Subsection title="A hierarquia em três níveis" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'NÍVEL 1 — PROBLEMA: o objetivo da decisão (escolher um emprego, um fornecedor, um sistema)',
            'NÍVEL 2 — CRITÉRIOS: os fatores que influenciam (salário, prazo, qualidade, localização)',
            'NÍVEL 3 — ALTERNATIVAS: as opções disponíveis, comparadas dentro de cada critério',
          ]}
        />
      </Subsection>

      <Subsection title="A escala fundamental de Saaty" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1 — Igual importância', description: 'As duas atividades contribuem igualmente para o objetivo.' },
            { title: '3 — Fraca importância', description: 'A experiência e o julgamento favorecem LEVEMENTE uma sobre a outra.' },
            { title: '5 — Forte importância', description: 'A experiência e o julgamento favorecem FORTEMENTE uma sobre a outra.' },
            { title: '7 — Muito forte', description: 'Uma é muito fortemente favorecida; sua dominação é demonstrada na prática.' },
            { title: '9 — Importância absoluta', description: 'A evidência favorece uma atividade com o mais alto grau de certeza.' },
            { title: '2, 4, 6, 8 e recíprocos', description: 'Valores intermediários. E se A vale n contra B, então B vale 1/n contra A — o que preenche o outro lado da matriz.' },
          ]}
        />
      </Subsection>

      <Subsection title="As oito etapas do método" accentClass="text-accent5">
        <CodeBlock
          language="python"
          title="O roteiro completo"
          code={`1. Construir a estrutura hierárquica (problema, critérios, alternativas)
2. Construir as matrizes de preferência PARA CADA CRITÉRIO (comparação par a par)
3. NORMALIZAR as matrizes  -> dividir cada valor pela SOMA DA SUA COLUNA
4. Obter a MÉDIA de cada linha -> o vetor de prioridades (os pesos)
5. Construir a matriz de prioridade (os pesos das alternativas por critério)
6. Construir a matriz de comparação DOS CRITÉRIOS entre si -> pesos dos critérios
7. Obter o resultado -> multiplicar os pesos das alternativas pelos pesos dos critérios
8. Calcular a COERÊNCIA (razão de consistência)`}
        />
      </Subsection>

      <Subsection title="Exemplo resolvido: escolhendo um emprego" accentClass="text-accent4">
        <CodeBlock
          language="python"
          title="Um engenheiro civil, duas ofertas, quatro critérios"
          code={`# O cenário: mora em Coimbra, disposto a mudar se compensar.
#   C1 Salário anual:  Emprego1 = 14.000€   |  Emprego2 = 21.000€
#   C2 Oportunidade:   Emprego1 = Alta      |  Emprego2 = Baixa
#   C3 Localização:    Emprego1 = Lisboa    |  Emprego2 = Coimbra
#   C4 Custo de vida:  Emprego1 = Alto      |  Emprego2 = Médio

# ETAPAS 2 a 5 — pesos das ALTERNATIVAS em cada critério:
#              C1       C2       C3       C4
# Emprego 1   0,143    0,889    0,167    0,800
# Emprego 2   0,857    0,111    0,833    0,200

# ETAPA 6 — pesos dos CRITÉRIOS (o decisor valoriza muito a carreira):
#   C1 salário = 0,067 | C2 oportunidade = 0,615
#   C3 localização = 0,207 | C4 custo de vida = 0,110

# ETAPA 7 — o resultado:
# Emprego 1 = (0,143×0,067)+(0,889×0,615)+(0,167×0,207)+(0,800×0,110) = 0,679
# Emprego 2 = (0,857×0,067)+(0,111×0,615)+(0,833×0,207)+(0,200×0,110) = 0,321

#   -> EMPREGO 1 vence com 67,9%`}
        />
        <ExampleBox title="A lição do exemplo">
          <p>
            O Emprego 2 paga <strong>50% mais</strong> — e perde. Por quê? Porque o próprio
            decisor declarou que <strong>oportunidade profissional</strong> (peso 0,615) importa
            muito mais que <strong>salário</strong> (peso 0,067). O AHP não inventa a preferência:
            ele a torna <strong>explícita</strong> e propaga com coerência até o ranking. É essa
            rastreabilidade que torna a decisão defensável diante de terceiros.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="A razão de consistência" accent="var(--color-accent4)">
        <p>
          Julgamentos par a par podem se contradizer — dizer que A &gt; B, B &gt; C, mas C &gt; A.
          A <strong>razão de consistência</strong> detecta isso:{' '}
          <strong>RC = [(λ<sub>máx</sub> − n) / (n − 1)] / IA</strong>, onde n é o número de
          critérios e IA é o índice aleatório tabelado. A régua:{' '}
          <strong>RC &lt; 0,10</strong> indica consistência aceitável;{' '}
          <strong>RC ≥ 0,10</strong> exige revisar as comparações antes de confiar no resultado.
        </p>
      </HighlightBox>

      <HighlightBox title="O exercício da turma" accent="var(--color-accent3)">
        <p>
          O Exercício 6 pede uma <strong>página web</strong> que resolva o AHP: recebe o nome do
          problema, os critérios e as alternativas, mais duas matrizes — uma comparando a
          importância entre critérios usando os <strong>nomes da tabela Saaty</strong> nas opções,
          e outra comparando as alternativas dentro de cada critério. O professor disponibilizou
          uma implementação de referência em JavaScript, que segue exatamente o fluxo das oito
          etapas: montar as matrizes, somar as colunas, normalizar, tirar as médias e combinar os
          vetores de prioridade.
        </p>
      </HighlightBox>
    </section>
  );
}
