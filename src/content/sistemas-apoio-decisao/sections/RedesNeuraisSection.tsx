import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function RedesNeuraisSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Redes Neurais"
        subtitle="Do neurônio de 1943 ao MNIST — passando pelo problema que travou a área por uma década"
        colorClass="text-accent"
      />

      <TheoryBlock title="O neurônio artificial">
        <p>
          No modelo de <strong>McCulloch-Pitts (1943)</strong>, a unidade de processamento faz
          três coisas: recebe os sinais de entrada x₁…x<sub>p</sub>, multiplica cada um por um{' '}
          <strong>peso</strong> que indica sua influência, e soma tudo junto com o limiar w₀ —{' '}
          <code>a = w₁x₁ + w₂x₂ + … + w<sub>p</sub>x<sub>p</sub> + w₀</code>. Se esse nível de
          atividade exceder um certo limite, a <strong>função de ativação</strong> produz a saída.
        </p>
      </TheoryBlock>

      <Subsection title="Funções de ativação" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Degrau (step)', description: 'y = 1 se net > 0, senão y = 0. A do perceptron clássico — binária e não diferenciável.' },
            { title: 'Sigmoide', description: 'f(x) = 1 / (1 + e^−x). Suave e diferenciável, o que viabiliza a retropropagação. Saída entre 0 e 1.' },
            { title: 'ReLU', description: 'Padrão nas redes profundas modernas; é uma das opções que o exercício do MNIST manda testar.' },
            { title: 'Tangente hiperbólica e Softmax', description: 'A tanh centra a saída em zero; a softmax converte saídas em probabilidades — usada na camada final de classificação multiclasse.' },
          ]}
        />
      </Subsection>

      <Subsection title="O perceptron e sua regra de aprendizado" accentClass="text-accent3">
        <CodeBlock
          language="python"
          title="Como a rede aprende com o próprio erro"
          code={`# Ativação:   net = Σ wi·xi        (incluindo w0, o limiar)
# Saída:      y = 1 se net > 0, senão 0

# REGRA DE APRENDIZADO:
#   w(k+1) = w(k) + λ · e · x
#
#   λ = taxa de aprendizado (o tamanho do passo)
#   e = erro = (saída desejada − saída obtida)
#
# Consequência elegante: quando a rede ACERTA, o erro é 0
# e os pesos não mudam. A rede só aprende quando erra.`}
        />
        <ExampleBox title="Exemplo resolvido: treinando a porta AND">
          <p>
            Pesos iniciais wx = 1, wy = 2, w₀ = −1, com λ = 1. Padrão{' '}
            <strong>(0,0)</strong>: net = −1 → saída 0, <em>correto</em>. Padrão{' '}
            <strong>(0,1)</strong>: net = 1 → saída 1, mas o esperado era 0 —{' '}
            <em>erro</em>: ajusta para wy = 1, w₀ = −2 (reta x + y − 2 = 0). Padrão{' '}
            <strong>(1,0)</strong>: net = −1, <em>correto</em>. Padrão{' '}
            <strong>(1,1)</strong>: net = 0 → saída 0, mas o esperado era 1 —{' '}
            <em>erro</em>: ajusta para wx = 2, wy = 2, w₀ = −1, chegando à reta{' '}
            <strong>2x + 2y − 1 = 0</strong>, que separa corretamente o AND.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="O problema do XOR" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed">
          O perceptron de uma camada define <strong>uma única reta</strong> (net = 0). AND e OR
          são <strong>linearmente separáveis</strong> — uma reta basta. Já o{' '}
          <strong>XOR</strong> tem (0,0) e (1,1) dando 0 enquanto (0,1) e (1,0) dão 1: as classes
          ficam em <strong>diagonais opostas</strong>, e nenhuma reta as separa. Essa limitação
          congelou a pesquisa em redes neurais por anos — até o perceptron multicamadas.
        </p>
      </Subsection>

      <Subsection title="MLP e retropropagação" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Camada de ENTRADA', description: 'Onde os padrões são apresentados à rede.', accent: 'accent' },
            { title: 'Camadas ESCONDIDAS', description: 'Onde acontece a maior parte do processamento, pelas conexões ponderadas. Funcionam como "extratoras de características".', accent: 'accent2' },
            { title: 'Camada de SAÍDA', description: 'Onde o resultado final é concluído e apresentado.', accent: 'accent3' },
          ]}
        />
        <CodeBlock
          language="python"
          title="Os quatro passos do backpropagation"
          code={`# 1. Gerar os pesos ALEATÓRIOS entre as camadas, no intervalo [-2, 2]
# 2. Propagar: somatório e ativação, entrada -> escondida -> saída
#       sum = inputs · pesos_entrada_escondida
#       hiddens = sigmoide(sum)
#       outputs = sigmoide(hiddens · pesos_escondida_saida)
# 3. Calcular o ERRO na camada de saída
# 4. Atualizar os pesos de trás para frente (daí "retro" propagação)

def sigmoide(x):
    return 1.0 / (1.0 + math.exp(-x))`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os <strong>três tipos de aprendizagem</strong>: <strong>supervisionada</strong> (um
          agente externo indica a resposta desejada), <strong>não supervisionada</strong>{' '}
          (auto-organização, sem resposta indicada — a família do k-means) e por{' '}
          <strong>reforço</strong> (um crítico externo avalia a resposta dada).
        </p>
      </Subsection>

      <HighlightBox title="Os exercícios: OR, XOR e o MNIST" accent="var(--color-accent3)">
        <p>
          O primeiro exercício implementa um <strong>perceptron para a porta OR</strong> em
          numpy (learning_rate 0.1, 10 épocas, pesos aleatórios) e pergunta: o que é a taxa de
          aprendizagem? O que muda com 1000 épocas? Tente o XOR — conseguiu? Pesquise o motivo. O
          segundo constrói uma <strong>MLP em Keras</strong> (2 entradas → 2 neurônios ReLU →
          1 sigmoide, 100 épocas) e pergunta se agora o XOR treina.
        </p>
        <p>
          O exercício maior é o <strong>MNIST</strong> (60 mil exemplos de treino, 10 mil de
          teste, matriz 28×28) e depois o <strong>EMNIST</strong> com letras: variar de uma a duas
          camadas e de 2 a 150 neurônios, trocar a função de ativação, testar taxas de 0,3 e 0,7,
          inicializar pesos entre −2 e 2 e <strong>verificar se os dados estão
          balanceados</strong> — avaliando por <strong>acurácia E F1-score</strong>, porque a
          acurácia sozinha engana quando as classes são desbalanceadas.
        </p>
      </HighlightBox>
    </section>
  );
}
