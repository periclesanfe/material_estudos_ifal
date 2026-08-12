import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { ALPG_EXAMS, ALPG_GUIDE_CONTEXT, ALPG_TOPICS, QUIZ_DATA } from './data';

interface ALPGSectionsProps {
  activeSection: string;
}

/* ============================ AV1 ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Aprender a pensar como um programador" subtitle="A porta de entrada da programação: transformar problemas em algoritmos e escrevê-los em Python" colorClass="text-accent" />
      <HighlightBox title="A ideia central">
        <p>
          O computador manipula dados a partir de uma <strong>lista de instruções</strong>. Nossa tarefa é descobrir a sequência de passos que resolve um problema — o <strong>algoritmo</strong> — e escrevê-la em uma <strong>linguagem de programação</strong>. Nesta disciplina, essa linguagem é o <strong>Python</strong>.
        </p>
      </HighlightBox>
      <Subsection title="Todo programa segue o mesmo modelo" accentClass="text-accent3">
        <FlowDiagram items={['Entrada', 'Processamento', 'Saída']} />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Para somar dois números: a <strong>entrada</strong> fornece os números, o <strong>processamento</strong> faz a soma e a <strong>saída</strong> mostra o resultado.
        </p>
      </Subsection>

      <HighlightBox title="O fio condutor: dois jogos" accent="var(--color-accent4)">
        <p>
          A disciplina não apresenta os conceitos soltos. Ela reescreve <strong>dois programas</strong> — o <strong>Jogo de Adivinhação</strong> e o <strong>Jogo da Forca</strong> — a cada ferramenta nova: primeiro só com <code>if</code>, depois com laço, depois com lista, depois com funções. Se você quiser entender <em>para que serve</em> cada assunto, comece pela seção <strong>Os dois jogos da disciplina</strong> e volte aqui.
        </p>
      </HighlightBox>

      <Subsection title="Como o conteúdo se organiza" accentClass="text-accent5">
        <ConceptGrid items={disciplinaMapa} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="O que este guia cobre — e o que não cobre" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          Este guia é a síntese dos <strong>slides e códigos de aula disponíveis</strong> da turma. A ementa oficial do curso é maior: alguns itens do conteúdo programático não tiveram deck próprio entre o material da turma e, para não inventar conteúdo, não foram desenvolvidos aqui.
        </p>
        <PanelList items={recorteGuia} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Para onde isso continua" accent="var(--color-accent3)">
        <p>
          As <strong>listas</strong>, o <strong>for</strong> e as <strong>funções</strong> aprendidos aqui voltam no período seguinte, em <strong>Estrutura de Dados</strong>, como pilhas, filas, listas encadeadas e algoritmos de ordenação e busca. Esta disciplina é a base de vocabulário para aquela.
        </p>
      </HighlightBox>
    </section>
  );
}

const disciplinaMapa: ConceptItem[] = [
  { title: 'AV1 — Fundamentos', description: 'Conceitos de algoritmo e lógica, Python básico (tipos, entrada/saída, operadores), estruturas condicionais, escopo e estruturas de repetição.', accent: 'accent' },
  { title: 'AV2 — Aprofundamento', description: 'Listas e tuplas, módulos (math e random), funções (parâmetros e retorno), strings, arquivos e tratamento de exceções.', accent: 'accent3' },
];

const recorteGuia: PanelItem[] = [
  { title: 'Desenvolvido aqui', description: 'Conceitos e lógica, Python (tipos, entrada/saída, operadores), condicionais, escopo, while e for, listas e tuplas, módulos math e random, funções, strings, arquivos e exceções — mais os dois jogos e a estrutura de avaliação da disciplina.' },
  { title: 'Da ementa, sem deck próprio no material', description: 'Estrutura condicional de múltipla escolha, vetores/matrizes/arrays multidimensionais, passagem de parâmetro por valor e por referência, recursividade e tipos abstratos de dados. Constam do conteúdo programático, mas não há slide da turma para sintetizar sem inventar.' },
  { title: 'break e continue', description: 'Não há deck específico sobre desvio de fluxo entre os slides disponíveis, embora o professor os liste no conteúdo programático e use break em código de aula. Por isso eles aparecem aqui pelo código real, na seção dos dois jogos.' },
  { title: 'Fonte', description: 'Síntese do material da disciplina Algoritmos e Lógica de Programação, do Prof. Fernando Kenji Kamei (BSI/IFAL Campus Maceió, turma 2022.1). Vários decks originais são de 2016, de autoria de César Felipe, Felipe Alencar, Fernando Kenji e Ricardo Rubens.' },
];

function ConceitosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Conceitos de Algoritmo e Lógica" subtitle="O que é pensar logicamente e como isso vira um algoritmo" colorClass="text-accent" />
      <TheoryBlock title="Lógica: a arte de bem pensar">
        <p>
          A <strong>lógica</strong> determina quais raciocínios são válidos. Parte de <strong>premissas</strong> e chega a uma <strong>conclusão</strong> — que precisa ser verificada. A <strong>lógica de programação</strong> é a técnica de desenvolver <strong>algoritmos</strong> (sequências lógicas) para resolver problemas com uma linguagem de programação.
        </p>
      </TheoryBlock>

      <HighlightBox title="Um exemplo de raciocínio lógico">
        <p>
          Premissa: todo mamífero é um animal. Premissa: todo cavalo é um mamífero. <strong>Conclusão:</strong> logo, todo cavalo é um animal.
        </p>
      </HighlightBox>

      <Subsection title="Resolvendo um problema com algoritmo" accentClass="text-accent3">
        <PanelList items={algoritmoPassos} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Formas de representar um algoritmo" accentClass="text-accent5">
        <ConceptGrid items={representacoes} columns="md:grid-cols-2" />
      </Subsection>

      <TheoryBlock title="Teste de mesa: rodar o programa no papel">
        <p>
          O <strong>teste de mesa</strong> é simular a execução do algoritmo <strong>à mão</strong>, numa tabela em que cada coluna é uma variável e cada linha é uma volta do laço. É a técnica que permite achar um erro de lógica <strong>sem computador e sem depurador</strong> — e é o que o professor cobra quando pede para prever a saída de um trecho.
        </p>
        <p>
          Rastreando o contador <code>while contador &lt; 3</code>, anota-se o valor da variável <strong>antes</strong> de cada teste da condição e o que foi impresso:
        </p>
      </TheoryBlock>

      <Subsection title="Teste de mesa do contador" accentClass="text-accent4">
        <ComparisonTable rows={testeDeMesa} leftLabel="contador < 3 ?" rightLabel="Saída na tela" />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          A tabela mostra por que o <strong>3 nunca é impresso</strong>: quando <code>contador</code> chega a 3, a condição já é falsa e o laço termina antes do <code>print</code>. Esse é o erro de contagem mais comum em prova.
        </p>
      </Subsection>
    </section>
  );
}

const testeDeMesa: ComparisonRow[] = [
  { criterion: 'contador = 0', left: '0 < 3 → verdadeiro', right: 'Valor do contador: 0' },
  { criterion: 'contador = 1', left: '1 < 3 → verdadeiro', right: 'Valor do contador: 1' },
  { criterion: 'contador = 2', left: '2 < 3 → verdadeiro', right: 'Valor do contador: 2' },
  { criterion: 'contador = 3', left: '3 < 3 → FALSO', right: 'sai do laço e imprime "Tchau!"' },
];

const algoritmoPassos: PanelItem[] = [
  { title: '1. Entender o problema', description: 'Pensar sobre o que precisa ser resolvido e quais dados estão envolvidos.' },
  { title: '2. Planejar os passos', description: 'Definir a sequência lógica de passos que leva à solução.' },
  { title: '3. Executar e verificar', description: 'Rodar a sequência e conferir se ela realmente resolve o problema.' },
];

const representacoes: ConceptItem[] = [
  { title: 'Textual (passo a passo)', description: 'Descreve o algoritmo em linguagem natural ou pseudocódigo: "Passo 1: fazer isso; Passo 2: fazer aquilo...".', accent: 'accent' },
  { title: 'Gráfica (fluxograma)', description: 'Representa o algoritmo por um diagrama, com símbolos para início, entrada, decisão, processo e fim.', accent: 'accent3' },
];

function PythonSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Python: Dados e Expressões" subtitle="Tipos de dados, variáveis, entrada, saída e operadores" colorClass="text-accent3" />
      <HighlightBox title="Saída com print()">
        <p>
          O comando de saída é o <code>print()</code> — os parênteses são obrigatórios. Texto vai entre aspas; expressões são calculadas antes de aparecer.
        </p>
      </HighlightBox>
      <CodeBlock
        language="python"
        title="Saída de dados"
        code={`print(1 + 1)          # mostra 2 (expressão calculada)
print("oi mundo")     # mostra o texto entre aspas
print(1, 2, "fim")    # vários valores separados por vírgula`}
      />

      <Subsection title="Os tipos de dados">
        <ConceptGrid items={tiposDados} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Cuidado com as armadilhas" accent="var(--color-accent2)">
        <p>
          <code>type("13")</code> devolve <code>str</code> (com aspas, é texto, não número). E <code>print(1,000,000)</code> imprime <code>1 0 0</code> — as vírgulas separam três argumentos, não formam um milhão.
        </p>
      </HighlightBox>

      <TheoryBlock title="Entrada e conversão de tipos">
        <p>
          A entrada de dados usa <code>input()</code>, que <strong>sempre retorna texto (str)</strong>. Para fazer contas, é preciso converter (fazer <em>casting</em>) com <code>int()</code> ou <code>float()</code>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Entrada e casting"
        code={`nome = input("Qual seu nome? ")           # texto (str)
idade = int(input("Qual sua idade? "))     # convertido para inteiro
altura = float(input("Qual sua altura? ")) # convertido para real`}
      />

      <Subsection title="Operadores" accentClass="text-accent4">
        <PanelList items={operadores} columns="md:grid-cols-3" />
      </Subsection>

      <TheoryBlock title="Nomes de variáveis: uma regra cobrada na correção">
        <p>
          O professor voltou ao assunto <strong>duas vezes</strong> durante o semestre, porque perdia-se nota por isso. Um nome de variável deve <strong>dizer o que ela guarda</strong>: quem lê o código precisa entender sem comentário.
        </p>
        <p>
          A recomendação registrada foi direta: <em>&quot;se o nome da variável for adequado, nem precisa de comentários explicando&quot;</em>.
        </p>
      </TheoryBlock>

      <Subsection title="Como nomear" accentClass="text-accent5">
        <ColoredPanelList items={nomesVariaveis} columns="md:grid-cols-2" />
      </Subsection>

      <ExampleBox title="Antes e depois">
        <p>
          <code>v</code>, <code>vh</code>, <code>s</code>, <code>sl</code> e <code>id</code> viram <code>valor</code>, <code>valor_hora</code>, <code>salario</code>, <code>salario_liquido</code> e <code>idade</code>. E um nome composto se escreve <code>alunosAprovadosMatematica</code> ou <code>alunos_aprovados_matematica</code> — <strong>nunca</strong> <code>alunosaprovadosmatematica</code>, que é ilegível.
        </p>
      </ExampleBox>
    </section>
  );
}

const nomesVariaveis: PanelItem[] = [
  { title: 'Sem acentuação', description: 'Nada de acento ou cedilha no nome: use media (não média), salario (não salário), numero (não número).' },
  { title: 'Nome composto legível', description: 'Separe as palavras por maiúscula (alunosAprovadosMatematica) ou por underscore (alunos_aprovados_matematica). Grudar tudo em minúsculas torna o nome ilegível.' },
  { title: 'Sem abreviações obscuras', description: 'Prefira o nome inteiro: valor no lugar de v, valor_hora no lugar de vh, salario no lugar de s ou sl.' },
  { title: 'Cuidado com id', description: 'Evite id para idade — id é a abreviação consagrada de identificador, e além disso é o nome de uma função built-in do Python.' },
];

const tiposDados: ConceptItem[] = [
  { title: 'int', description: 'Número inteiro. Ex.: 2, -5, 100.', accent: 'accent' },
  { title: 'float', description: 'Número real, com ponto decimal. Ex.: 3.2, -0.5.', accent: 'accent3' },
  { title: 'str', description: 'Texto (string), entre aspas. Ex.: "oi mundo".', accent: 'accent4' },
  { title: 'bool', description: 'Valor lógico: True (verdadeiro) ou False (falso).', accent: 'accent5' },
];

const operadores: PanelItem[] = [
  { title: 'Aritméticos', description: 'Fazem contas: + (soma), - (subtração), * (multiplicação), / (divisão) e ** (potência).' },
  { title: 'Relacionais', description: 'Comparam valores: == (igual), != (diferente), > (maior), < (menor), >= e <=. Resultam em True ou False.' },
  { title: 'Lógicos', description: 'Combinam ou negam condições: and (e), or (ou), not (negação).' },
];

function CondicionaisSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Estruturas Condicionais" subtitle="Tomar decisões no programa conforme uma condição" colorClass="text-accent4" />
      <Subsection title="Três formas de condicional">
        <ConceptGrid items={condicionaisTipos} columns="md:grid-cols-3" />
      </Subsection>

      <TheoryBlock title="A condicional encadeada (if / elif / else)">
        <p>
          Quando há várias alternativas, usamos <code>if</code>, <code>elif</code> (senão, se) e <code>else</code>. A condição é sempre uma <strong>expressão lógica</strong>, e o <code>else</code> é opcional.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Jogo do número secreto"
        code={`numeroSecreto = 10
chute = 12

if chute == numeroSecreto:
    print("Acertou!")
elif chute > numeroSecreto:
    print("O chute foi maior")
else:
    print("O chute foi menor")`}
      />

      <HighlightBox title="Condições aninhadas" accent="var(--color-accent3)">
        <p>
          Às vezes, dentro de uma alternativa, é preciso testar outra condição. Combinando faixas: aprovado se <code>media &gt;= 6.0</code>; recuperação se <code>media &gt;= 4.1 and media &lt; 6.0</code>; reprovado se <code>media &lt; 4.0</code>.
        </p>
      </HighlightBox>

      <ExampleBox title="Achou o furo? A faixa entre 4.0 e 4.1 ficou sem regra">
        <p>
          Repare nos números acima: uma média de <strong>4.05</strong> não é <code>&gt;= 4.1</code>, nem <code>&lt; 4.0</code> — ela <strong>não cai em caso nenhum</strong>, e o programa não imprime nada para esse aluno. Esse é o <strong>erro clássico de faixa descoberta</strong> em condicional encadeada, e ele é fácil de cometer quando cada condição é escrita isoladamente.
        </p>
        <p>
          As faixas precisam ser <strong>contíguas</strong>: o limite em que uma termina é o mesmo em que a próxima começa. Trocando <code>&lt; 4.0</code> por <code>&lt; 4.1</code>, todo valor real passa a ter exatamente um destino.
        </p>
      </ExampleBox>

      <CodeBlock
        language="python"
        title="Condicional encadeada sem faixa descoberta"
        code={`media = float(input("Digite a media: "))

if media >= 6.0:
    print("Aprovado. Media =", media)
elif media >= 4.1:          # ja se sabe que media < 6.0
    print("Recuperacao. Media =", media)
else:                        # tudo que sobrou: media < 4.1
    print("Reprovado direto. Media =", media)`}
      />

      <HighlightBox title="Por que o elif dispensa a segunda comparação" accent="var(--color-accent5)">
        <p>
          Quando o programa chega ao <code>elif</code>, o <code>if</code> anterior <strong>já foi testado e deu falso</strong> — então <code>media &lt; 6.0</code> é garantido. Escrever <code>elif media &gt;= 4.1 and media &lt; 6.0</code> funciona, mas a segunda metade é redundante. Deixar o <code>else</code> como último caso é o que <strong>fecha</strong> todas as faixas: ele pega tudo que não coube antes.
        </p>
      </HighlightBox>
    </section>
  );
}

const condicionaisTipos: ConceptItem[] = [
  { title: 'Simples (if)', description: 'Executa um bloco só quando a condição é verdadeira.', accent: 'accent' },
  { title: 'Composta (if/else)', description: 'Duas alternativas: um caminho quando é verdadeira, outro quando é falsa.', accent: 'accent3' },
  { title: 'Encadeada (if/elif/else)', description: 'Várias alternativas testadas em sequência, com um elif para cada caso.', accent: 'accent5' },
];

function EscopoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Escopo de Variáveis" subtitle="Onde cada variável é válida — e por que isso causa erros comuns" colorClass="text-accent2" />
      <HighlightBox title="O que é escopo">
        <p>
          O <strong>escopo</strong> determina <strong>onde uma variável pode ser usada</strong>. Uma variável <strong>global</strong> existe durante toda a execução; uma <strong>local</strong> só existe dentro do bloco ou função em que foi criada.
        </p>
      </HighlightBox>

      <TheoryBlock title="O erro clássico de escopo">
        <p>
          Se uma variável é criada <strong>dentro de um bloco if</strong> e esse bloco não é executado, ela <strong>não existe</strong> — e usá-la depois causa erro. Veja: se o usuário não escolher "+", a variável <code>soma</code> nunca é criada.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Variável presa dentro do if"
        code={`opcao = input("Escolha (+, -): ")
if opcao == "+":
    soma = numero1 + numero2
print("Soma =", soma)   # ERRO se opcao não foi "+"`}
      />

      <HighlightBox title="Como resolver" accent="var(--color-accent5)">
        <p>
          Coloque a variável em um escopo mais amplo: <strong>inicialize-a antes do if</strong> (ex.: <code>soma = 0</code>), garantindo que ela sempre exista quando for usada.
        </p>
      </HighlightBox>

      <CodeBlock
        language="python"
        title="A versão corrigida"
        code={`numero1 = 10
numero2 = 5
soma = 0                   # existe ANTES do if: sempre definida

opcao = input("Escolha (+, -): ")
if opcao == "+":
    soma = numero1 + numero2
print("Soma =", soma)      # agora nunca quebra`}
      />

      <TheoryBlock title="O caso mais sutil: escopo entre funções">
        <p>
          O bloco <code>if</code> é só o começo. O erro fica mais difícil de enxergar quando aparece <strong>entre funções</strong>: uma variável criada dentro de <code>imprime_nome()</code> <strong>não existe</strong> dentro de <code>imprime_idade()</code>, mesmo que uma seja chamada logo depois da outra.
        </p>
        <p>
          A variável <code>nome</code> abaixo é <strong>global</strong> (foi criada fora de qualquer função) e por isso pode ser lida em qualquer lugar. Já <code>idade</code> é <strong>local</strong> a <code>imprime_nome</code> — ela nasce e morre ali dentro.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Variável local de uma função, acessada de outra"
        code={`nome = "Fulano"          # global: visivel em todo o arquivo

def imprime_nome():
    idade = 10           # LOCAL: so existe dentro desta funcao
    print(nome)          # ok, le a global
    print(idade)         # ok, esta no proprio escopo

def imprime_idade():
    print(idade)         # ERRO: idade nao existe aqui

def main():
    imprime_nome()       # imprime "Fulano" e 10
    imprime_idade()      # NameError: name 'idade' is not defined

main()`}
      />

      <ExampleBox title="A saída real deste programa">
        <p>
          Ele imprime <code>Fulano</code> e <code>10</code> normalmente — e então <strong>quebra</strong> na segunda função, com <code>NameError: name &apos;idade&apos; is not defined</code>. O programa não avisa nada no momento em que <code>idade</code> é criada; o erro só aparece quando alguém tenta usá-la <strong>fora do escopo dela</strong>.
        </p>
        <p>
          Para compartilhar um valor entre funções há dois caminhos honestos: <strong>passá-lo como parâmetro</strong> (o preferível) ou declará-lo <strong>global</strong>. É exatamente o que o Jogo da Forca com funções faz com <code>palavra_secreta</code> e <code>qtd_chances</code>.
        </p>
      </ExampleBox>
    </section>
  );
}

function RepeticaoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Estruturas de Repetição" subtitle="Repetir instruções: os laços while e for" colorClass="text-accent5" />
      <HighlightBox title="Iteração">
        <p>
          Quando é preciso <strong>repetir</strong> a execução de comandos, usamos um <strong>laço</strong> (iteração). Há dois principais: o <code>while</code> (repetição por condição) e o <code>for</code> (percorre um conjunto).
        </p>
      </HighlightBox>

      <TheoryBlock title="Laço while — repete enquanto a condição for verdadeira">
        <p>
          É preciso <strong>atualizar a variável de controle</strong> dentro do laço; senão, a condição nunca fica falsa e ocorre um <strong>loop infinito</strong>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Contador com while"
        code={`contador = 0
while contador < 9:
    print("Valor do contador:", contador)
    contador = contador + 1   # atualiza o contador
print("Tchau!")`}
      />

      <Subsection title="Laço for e a função range">
        <PanelList items={rangeFormas} columns="md:grid-cols-3" />
      </Subsection>
      <CodeBlock
        language="python"
        title="Números pares de 2 a 100 com for + range"
        code={`for numero in range(2, 101, 2):
    print(numero)`}
      />

      <Subsection title="while × for" accentClass="text-accent4">
        <ComparisonTable rows={whileVsFor} leftLabel="while" rightLabel="for" />
      </Subsection>

      <TheoryBlock title="Sair do laço antes da hora: break e continue">
        <p>
          Nem sempre o laço deve ir até o fim. O <code>break</code> <strong>encerra o laço imediatamente</strong>; o <code>continue</code> <strong>pula para a próxima volta</strong>, ignorando o resto do bloco naquela iteração.
        </p>
        <p>
          <em>Nota sobre a fonte:</em> não há deck específico sobre desvio de fluxo entre os slides disponíveis da turma — mas o professor lista <code>break</code> e <code>continue</code> no conteúdo programático, e o <strong>Jogo da Forca distribuído em aula usa <code>break</code></strong> na condição de vitória. O exemplo abaixo é a estrutura desse código real.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="O break do Jogo da Forca (condição de vitória)"
        code={`palavra_secreta = "banana"
letras_descobertas = ["_"] * len(palavra_secreta)
qtd_chances = 5

for j in range(0, qtd_chances):
    qtd_chances = qtd_chances - 1
    chute = input("Qual o seu chute? ")

    for i in range(0, len(palavra_secreta)):
        if chute.upper() == palavra_secreta[i].upper():
            letras_descobertas[i] = chute

    if ("_" not in letras_descobertas) or (qtd_chances < 1):
        print("".join(letras_descobertas))
        print("Parabens! Voce acertou a palavra secreta!")
        break            # ganhou (ou acabaram as chances): sai do laco`}
      />

      <ExampleBox title="Por que o break importa aqui">
        <p>
          Sem ele, o jogador continuaria sendo obrigado a chutar mesmo <strong>depois de já ter acertado a palavra</strong> — o <code>for</code> percorreria todas as chances restantes. O <code>break</code> é o que permite que a condição de vitória <strong>termine o jogo na hora</strong>.
        </p>
        <p>
          Repare também no <code>or (qtd_chances &lt; 1)</code>: o mesmo <code>break</code> serve para os dois finais possíveis — venceu ou esgotou as chances. Só que, como está, o código <strong>parabeniza nos dois casos</strong>; é um defeito real do código da turma, e um bom exercício corrigi-lo separando as duas condições.
        </p>
      </ExampleBox>

      <Subsection title="break × continue" accentClass="text-accent2">
        <ComparisonTable rows={breakVsContinue} leftLabel="break" rightLabel="continue" />
      </Subsection>
    </section>
  );
}

const breakVsContinue: ComparisonRow[] = [
  { criterion: 'O que faz', left: 'Encerra o laço na hora e segue para a linha depois dele', right: 'Abandona só a volta atual e vai para a próxima iteração' },
  { criterion: 'Quando usar', left: 'A resposta já foi encontrada e não há motivo para continuar (achou a palavra, o usuário escolheu "Sair")', right: 'Este item deve ser ignorado, mas os próximos ainda interessam (pular um chute repetido)' },
  { criterion: 'Efeito no restante', left: 'Nenhuma iteração seguinte acontece', right: 'As iterações seguintes acontecem normalmente' },
];

const rangeFormas: PanelItem[] = [
  { title: 'range(stop)', description: 'De 0 até stop-1. range(5) gera 0, 1, 2, 3, 4.' },
  { title: 'range(start, stop)', description: 'De start até stop-1. range(4, 8) gera 4, 5, 6, 7.' },
  { title: 'range(start, stop, step)', description: 'Com passo. range(1, 8, 2) gera 1, 3, 5, 7.' },
];

const whileVsFor: ComparisonRow[] = [
  { criterion: 'Quando usar', left: 'Repetição condicional (não se sabe quantas vezes)', right: 'Percorrer um conjunto conhecido (lista, range)' },
  { criterion: 'Controle', left: 'Contador e condição controlados à mão', right: 'O range substitui o contador' },
  { criterion: 'Risco', left: 'Loop infinito se a condição não muda', right: 'Termina ao esgotar o conjunto' },
];

/* ============================ AV2 ============================ */

function ListasSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Listas" subtitle="Coleções ordenadas de valores — a base para percorrer dados" colorClass="text-accent" />
      <HighlightBox title="O que é uma lista">
        <p>
          Uma <strong>lista</strong> é uma coleção <strong>ordenada</strong> de valores. Cada valor tem um <strong>índice que começa em 0</strong>; os elementos podem ter tipos diferentes e a lista pode ser aninhada.
        </p>
      </HighlightBox>
      <CodeBlock
        language="python"
        title="Operações com listas"
        code={`frutas = ["umbu", "jaca", "pitomba", "manga"]

print(frutas[0])         # "umbu" (primeiro, índice 0)
print(frutas[-1])        # "manga" (último)
print("jaca" in frutas)  # True (pertinência)

frutas.append("coco")    # adiciona ao final
del(frutas[1])           # remove o índice 1
print(len(frutas))       # tamanho da lista`}
      />
      <TheoryBlock title="Percorrer uma lista">
        <p>
          Com <code>for</code>, a variável recebe cada item automaticamente — a forma mais direta de percorrer uma lista.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Percorrendo com for"
        code={`alunos = ["joao", "pedro", "jose", "maria"]
for aluno in alunos:
    print("aluno:", aluno)`}
      />

      <TheoryBlock title="A outra forma de percorrer: while com len">
        <p>
          O <code>for</code> é o caminho curto, mas existe o percurso <strong>por índice</strong>, com <code>while</code> e <code>len</code>. Ele é mais trabalhoso — exige criar e atualizar o contador à mão — e por isso mesmo é o contraponto didático: mostra o que o <code>for</code> faz por você.
        </p>
        <p>
          Ele é necessário quando você precisa <strong>do índice</strong>, e não só do valor — que é exatamente o caso do Jogo da Forca, onde é preciso saber <em>em qual posição</em> a letra foi acertada para atualizar os traços.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Percorrendo por índice (saída idêntica ao for)"
        code={`frutas = ["umbu", "jaca", "pitomba"]

i = 0
while i < len(frutas):
    print(i, frutas[i])   # 0 umbu / 1 jaca / 2 pitomba
    i = i + 1`}
      />

      <Subsection title="Pertinência, concatenação e listas aninhadas" accentClass="text-accent3">
        <PanelList items={listaOperacoes} columns="md:grid-cols-2" />
      </Subsection>
      <CodeBlock
        language="python"
        title="not in, concatenação e indexação dupla"
        code={`frutas = ["umbu", "jaca", "pitomba", "manga"]

print("jaca" in frutas)      # True
print("caju" not in frutas)  # True  -> util para "ainda nao tenho"

frutas = frutas + ["coco"]   # concatenacao: alternativa ao append
print(len(frutas))           # 5

# Lista aninhada: cada item e' outra lista (notas de 2 bimestres)
notas = [[1, 10], [10, 10], [8.5, 10]]
print(notas[0])              # [1, 10]   -> a lista inteira
print(notas[2][0])           # 8.5       -> indexacao dupla
print(len(notas))            # 3         -> tamanho da 1a dimensao`}
      />

      <ExampleBox title="Onde o not in aparece de verdade">
        <p>
          No Jogo da Forca, a condição de vitória é <code>if &quot;_&quot; not in letras_descobertas</code> — ou seja, <strong>&quot;não sobrou nenhum traço&quot;</strong>. É a forma mais legível de dizer que a palavra foi inteiramente descoberta, e é o motivo de o <code>not in</code> ser mais que uma curiosidade de sintaxe.
        </p>
      </ExampleBox>

      <TheoryBlock title="Tuplas: a lista que não muda">
        <p>
          A <strong>tupla</strong> é uma coleção ordenada como a lista, mas criada com <strong>parênteses</strong> e <strong>imutável</strong>. Ela aceita <code>len()</code>, indexação e o operador <code>in</code> normalmente — o que ela não aceita é <strong>atribuição a um item</strong>.
        </p>
        <p>
          Serve para dados que não devem mudar durante o programa: os meses do ano, os dias da semana, as opções fixas de um menu.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Tupla: o que pode e o que não pode"
        code={`meses = ("janeiro", "fevereiro", "marco", "abril")

print(meses)            # ('janeiro', 'fevereiro', 'marco', 'abril')
print(len(meses))       # 4
print(meses[0])         # janeiro
print("marco" in meses) # True

meses[0] = "maio"       # TypeError: 'tuple' object does
                        # not support item assignment`}
      />

      <Subsection title="Lista × Tupla" accentClass="text-accent5">
        <ComparisonTable rows={listaVsTupla} leftLabel="Lista []" rightLabel="Tupla ()" />
      </Subsection>
    </section>
  );
}

const listaOperacoes: PanelItem[] = [
  { title: 'in e not in', description: 'Verificam pertinência e devolvem True/False. "jaca" in frutas pergunta se o item está lá; "caju" not in frutas pergunta se ainda não está.' },
  { title: 'Concatenação com +', description: 'lista + [item] devolve uma lista nova com os itens somados — alternativa ao append, que altera a lista original no lugar.' },
  { title: 'Listas aninhadas', description: 'Um item de uma lista pode ser outra lista. notas = [[1, 10], [10, 10]] guarda pares de notas por bimestre.' },
  { title: 'Indexação dupla', description: 'Em lista aninhada, o primeiro índice escolhe a sublista e o segundo escolhe o item dentro dela: notas[2][0] é a primeira nota do terceiro bimestre.' },
];

const listaVsTupla: ComparisonRow[] = [
  { criterion: 'Como se cria', left: 'Colchetes: frutas = ["umbu", "jaca"]', right: 'Parênteses: meses = ("janeiro", "fevereiro")' },
  { criterion: 'Alterar um item', left: 'Permitido: frutas[0] = "caju"', right: 'Proibido: lança TypeError' },
  { criterion: 'Adicionar/remover', left: 'append, del e concatenação com +', right: 'Não é possível: o tamanho é fixo' },
  { criterion: 'len, índice e in', left: 'Funcionam', right: 'Funcionam igualmente' },
  { criterion: 'Quando usar', left: 'A coleção vai crescer ou mudar (chutes do jogador, usuários cadastrados)', right: 'Os valores são fixos por natureza (meses, dias da semana, opções do menu)' },
];

function ModulosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Módulos: math e random" subtitle="Reaproveitar código pronto do Python" colorClass="text-accent3" />
      <HighlightBox title="O que é um módulo">
        <p>
          Um <strong>módulo</strong> é um arquivo Python com definições reutilizáveis. Para usar suas funções, é preciso <strong>importá-lo antes</strong> (<code>import modulo</code>) e chamá-las como <code>modulo.funcao</code>. Algumas funções são <em>built-in</em> (como <code>print</code> e <code>input</code>) e não exigem importação.
        </p>
      </HighlightBox>

      <Subsection title="Módulo math (cálculos prontos)">
        <PanelList items={mathFuncoes} columns="md:grid-cols-2" />
      </Subsection>
      <CodeBlock
        language="python"
        title="Raiz quadrada com math"
        code={`import math

numero = float(input("Número para a raiz quadrada: "))
print("Resultado:", math.sqrt(numero))
print("Valor de Pi:", math.pi)`}
      />

      <HighlightBox title="Cuidado: pow é built-in, não é do math">
        <p>
          <code>pow</code> é uma função <strong>built-in</strong> — funciona sem <code>import math</code>. O módulo também tem uma <code>math.pow</code>, mas as duas <strong>não são iguais</strong>: a built-in devolve <code>int</code> quando recebe inteiros e ainda aceita um terceiro argumento (o resto da divisão), enquanto <code>math.pow</code> sempre devolve <code>float</code>.
        </p>
      </HighlightBox>
      <CodeBlock
        language="python"
        title="pow built-in x math.pow"
        code={`print(pow(2, 3))        # 8   -> int, sem precisar de import
print(2 ** 3)           # 8   -> mesmo resultado, com operador
print(pow(2, 3, 5))     # 3   -> (2**3) % 5, só a built-in faz isso

import math
print(math.pow(2, 3))   # 8.0 -> sempre float`}
      />

      <Subsection title="Módulo random (aleatoriedade)" accentClass="text-accent4">
        <PanelList items={randomFuncoes} columns="md:grid-cols-2" />
      </Subsection>
      <CodeBlock
        language="python"
        title="Sorteios com random"
        code={`import random

print(random.randint(0, 5))                 # inteiro aleatório de 0 a 5
print(random.choice(["praia", "serra", 42]))  # escolhe um item da lista`}
      />
    </section>
  );
}

const mathFuncoes: PanelItem[] = [
  { title: 'sqrt(x)', description: 'Raiz quadrada de x. Para potência, veja o cuidado com pow logo abaixo.' },
  { title: 'pi', description: 'A constante Pi já armazenada (3.14159...).' },
  { title: 'log(x, y) e log10(x)', description: 'Logaritmo de x na base y, e logaritmo na base 10.' },
  { title: 'floor(x) e ceil(x)', description: 'Arredondam para baixo e para cima. A vantagem do módulo é justamente usar o cálculo pronto, sem precisar decorar a fórmula.' },
];

const randomFuncoes: PanelItem[] = [
  { title: 'randint(a, b)', description: 'Sorteia um número inteiro entre a e b.' },
  { title: 'uniform', description: 'Sorteia um número fracionado (real).' },
  { title: 'choice([lista])', description: 'Escolhe um item aleatório de uma lista (de tipos variados).' },
  { title: 'shuffle e sample', description: 'shuffle embaralha a própria lista, no lugar (a original muda). sample não mexe na lista: devolve uma nova, com a quantidade de itens que você pedir.' },
];

function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Funções" subtitle="Agrupar código em blocos reutilizáveis: dividir para conquistar" colorClass="text-accent4" />
      <HighlightBox title="O que é uma função">
        <p>
          Uma <strong>função</strong> é uma sequência de instruções agrupadas para realizar uma tarefa. Define-se com <code>def</code>, e o código indentado pertence a ela. Há dois momentos: a <strong>definição</strong> (criar) e a <strong>chamada</strong> (usar) — se a função nunca for chamada, nada acontece.
        </p>
      </HighlightBox>

      <Subsection title="Por que usar funções" accentClass="text-accent3">
        <ConceptGrid items={funcoesVantagens} columns="md:grid-cols-2" />
      </Subsection>

      <TheoryBlock title="Parâmetros e retorno">
        <p>
          <strong>Parâmetros</strong> passam valores para a função. O <code>return</code> devolve um resultado a quem chamou; sem <code>return</code>, a função apenas executa (por exemplo, imprime).
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Função com parâmetros e retorno"
        code={`def calcular_media(m1, m2, m3, m4):
    media = (m1 + m2 + m3 + m4) / 4
    return media                 # devolve o resultado

def verificar_aprovacao(media):
    if media >= 6:
        print("Aprovado")
    else:
        print("Reprovado")

def main():
    media = calcular_media(9.0, 5.0, 4.0, 3.0)  # recebe o retorno
    verificar_aprovacao(media)                  # passa como parâmetro

if __name__ == '__main__':
    main()`}
      />

      <HighlightBox title="A função main()" accent="var(--color-accent5)">
        <p>
          A <code>main()</code> é o ponto de entrada do programa, reconhecido por <code>if __name__ == &apos;__main__&apos;:</code>. Ela é executada primeiro e organiza as chamadas das demais funções. A palavra <code>global</code> indica variáveis de escopo maior, válidas em todo o programa.
        </p>
      </HighlightBox>

      <SectionHeader title="Módulos próprios: por que existe o if __name__" subtitle="O problema real que essa linha resolve — reconstruído passo a passo, como na aula" colorClass="text-accent3" />

      <TheoryBlock title="O ponto de partida: juntar os dois jogos">
        <p>
          Até aqui, <code>if __name__ == &apos;__main__&apos;</code> parece uma fórmula a decorar. Ela não é: é a <strong>solução de um problema concreto</strong>, e o professor construiu esse problema em aula com os dois jogos que a turma já tinha escrito.
        </p>
        <p>
          A tarefa: criar um <code>jogos.py</code> que <strong>importe</strong> <code>adivinhacao.py</code> e <code>forca.py</code> e deixe o jogador <strong>escolher</strong> qual quer jogar. Um arquivo <code>.py</code> qualquer pode ser importado como <strong>módulo</strong> — é assim que se separa um programa grande em vários arquivos.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="jogos.py — a primeira tentativa"
        code={`import adivinhacao
import forca

print("*********************************")
print("*******Escolha o seu jogo!*******")
print("*********************************")

print("(1) Forca (2) Adivinhacao")
jogo = int(input("Qual jogo? "))

if (jogo == 1):
    forca.jogar()
elif (jogo == 2):
    adivinhacao.jogar()`}
      />

      <ExampleBox title="Execute esse programa. Deu certo?" accent="var(--color-accent2)">
        <p>
          <strong>Não deu.</strong> Os dois jogos <strong>começam sozinhos</strong>, antes mesmo de o menu aparecer na tela — e o jogador nunca chega a escolher nada.
        </p>
        <p>
          O motivo: quando o Python <strong>importa</strong> um módulo, ele <strong>executa todo o código solto</strong> desse arquivo, de cima a baixo. Como a lógica dos jogos estava escrita direto no corpo do arquivo (e não dentro de uma função), <code>import forca</code> significa, na prática, <em>&quot;rode a Forca agora&quot;</em>.
        </p>
      </ExampleBox>

      <CodeBlock
        language="python"
        title="A saída do jogos.py sem a guarda — o jogo dispara no import"
        code={`*** Jogo de Adivinhacao ***
O jogo comecou sozinho!            <- executou no "import"
*********************************
*******Escolha o seu jogo!*******
*********************************`}
      />

      <TheoryBlock title="A correção: uma função jogar() e uma guarda">
        <p>
          A solução tem <strong>duas partes</strong>, e as duas são necessárias:
        </p>
        <p>
          <strong>1.</strong> Colocar toda a lógica do jogo dentro de uma função <code>jogar()</code> — assim, importar o arquivo apenas <em>define</em> a função, sem executá-la. <strong>2.</strong> Proteger a chamada com <code>if __name__ == &quot;__main__&quot;</code>, para que o jogo continue funcionando quando o arquivo for <strong>executado diretamente</strong>.
        </p>
        <p>
          A variável <code>__name__</code> é preenchida pelo próprio Python: vale <code>&quot;__main__&quot;</code> quando o arquivo é o que você mandou rodar, e vale o <strong>nome do módulo</strong> (<code>&quot;forca&quot;</code>) quando ele foi importado por outro. A condição, portanto, significa literalmente: <em>&quot;só execute isto se eu for o programa principal&quot;</em>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="forca.py / adivinhacao.py — a estrutura correta"
        code={`def jogar():
    print("*** Jogo de Adivinhacao ***")
    # ... todo o codigo do jogo aqui dentro ...


if (__name__ == "__main__"):
    jogar()      # so roda se este arquivo for executado diretamente`}
      />

      <ExampleBox title="Agora sim: a saída na ordem certa">
        <p>
          Com a guarda no lugar, o <code>import</code> apenas carrega as funções. O menu aparece <strong>primeiro</strong>, o jogador escolhe, e só então o jogo começa:
        </p>
      </ExampleBox>
      <CodeBlock
        language="python"
        title="A saída do jogos.py com a guarda"
        code={`*********************************
*******Escolha o seu jogo!*******
*********************************
(2) Adivinhacao
*** Jogo de Adivinhacao ***       <- so depois da escolha
Jogando adivinhacao...`}
      />

      <Subsection title="O mesmo arquivo, dois papéis" accentClass="text-accent4">
        <ComparisonTable rows={nameMainTabela} leftLabel="python forca.py" rightLabel="import forca" />
      </Subsection>

      <HighlightBox title="O que levar para a prova" accent="var(--color-accent5)">
        <p>
          Um arquivo <code>.py</code> pode ser <strong>programa</strong> e <strong>biblioteca</strong> ao mesmo tempo. O <code>if __name__ == &quot;__main__&quot;</code> é o que separa os dois papéis: acima dele, <strong>definições</strong> que qualquer um pode importar; dentro dele, a <strong>execução</strong> que só vale quando o arquivo é o principal. Por isso a <code>main()</code> aparece sempre dentro dessa guarda.
        </p>
      </HighlightBox>
    </section>
  );
}

const nameMainTabela: ComparisonRow[] = [
  { criterion: 'Valor de __name__', left: 'A string "__main__"', right: 'O nome do módulo: "forca"' },
  { criterion: 'A condição do if', left: 'Verdadeira', right: 'Falsa' },
  { criterion: 'A função jogar()', left: 'É definida e chamada', right: 'É apenas definida, ficando disponível' },
  { criterion: 'Resultado', left: 'O jogo roda, como esperado', right: 'Nada acontece até alguém chamar forca.jogar()' },
];

const funcoesVantagens: ConceptItem[] = [
  { title: 'Dividir para conquistar', description: 'Quebrar uma solução grande em partes pequenas e gerenciáveis.', accent: 'accent' },
  { title: 'Reuso', description: 'Escrever uma vez e chamar quantas vezes precisar, sem repetir código.', accent: 'accent3' },
  { title: 'Teste', description: 'Testar cada função isoladamente é mais fácil do que testar tudo de uma vez.', accent: 'accent4' },
  { title: 'Manutenção', description: 'Corrigir ou melhorar um trecho num único lugar afeta todos os usos.', accent: 'accent5' },
];

function StringsSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Strings" subtitle="Trabalhar com texto: uma sequência de caracteres que não pode ser alterada no lugar" colorClass="text-accent" />
      <HighlightBox title="O que é uma string">
        <p>
          Uma <strong>string</strong> (<code>str</code>) é uma sequência de caracteres, criada com aspas simples ou duplas. Ela é <strong>imutável</strong>: não se pode alterar um caractere pelo índice — <code>linguagem[0] = "a"</code> gera um <code>TypeError</code>.
        </p>
      </HighlightBox>

      <TheoryBlock title="Formatação de texto">
        <p>
          O <code>print</code> concatena com um espaço entre os argumentos; o operador <code>+</code> concatena <strong>sem</strong> espaço. Para montar mensagens, usam-se o <code>.format()</code> e as <strong>f-strings</strong>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Formatando strings"
        code={`print("Admiravel", "Mundo", "Novo")    # espaço entre os argumentos
print("#" + "Python" + "3")            # sem espaço (concatenação com +)

frase = "base {0}, altura {1}, area {2}".format(3, 4, 12)
linguagem = "Python"
print(f"Programando em {linguagem}")   # f-string`}
      />

      <Subsection title="Métodos úteis de string" accentClass="text-accent4">
        <PanelList items={stringMetodos} columns="md:grid-cols-2" />
      </Subsection>
    </section>
  );
}

const stringMetodos: PanelItem[] = [
  { title: 'len(s)', description: 'Quantidade de caracteres. len("Banana") → 6.' },
  { title: 'upper() / lower()', description: 'Tudo em maiúsculas ou minúsculas. "banana".upper() → "BANANA".' },
  { title: 'capitalize()', description: 'Primeira letra maiúscula, resto minúsculo. "banana" → "Banana".' },
  { title: 'strip() / lstrip() / rstrip()', description: 'Remove espaços em branco do início e/ou do fim.' },
  { title: 'find(sub) / count(sub)', description: 'Posição da primeira ocorrência e número de ocorrências de um trecho. O find devolve -1 quando não encontra, e aceita um segundo parâmetro com a posição a partir da qual procurar: "banana".find("na") é 2, mas "banana".find("na", 3) é 4.' },
  { title: 'replace(a, b)', description: 'Substitui todas as ocorrências de a por b.' },
  { title: 'startswith / endswith', description: 'Verifica se a string começa ou termina com um trecho (retorna True/False).' },
  { title: 'isdigit() / isalnum()', description: 'Verifica se são só dígitos, ou só letras e números.' },
];

function ExcecoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Tratamento de Exceções" subtitle="Lidar com erros sem deixar o programa quebrar" colorClass="text-accent2" />
      <HighlightBox title="O que é uma exceção">
        <p>
          Uma <strong>exceção</strong> é uma situação inesperada, que foge ao fluxo previsto — como dividir por zero ou acessar um índice que não existe. Quando ela ocorre, o programa <strong>para</strong> e lança o erro. Como não se pode parar um sistema por causa disso, é preciso <strong>tratar</strong> as exceções.
        </p>
      </HighlightBox>

      <Subsection title="Erros comuns">
        <PanelList items={errosComuns} columns="md:grid-cols-3" />
      </Subsection>

      <TheoryBlock title="A ideia central: a exceção sobe pela pilha">
        <p>
          Antes do <code>try</code>, é preciso entender <strong>o que uma exceção faz quando ninguém a trata</strong> — e isso não se vê num programa de uma função só. O deck da disciplina monta uma <strong>pilha de chamadas</strong> para mostrar: <code>main()</code> chama <code>m1()</code>, que chama <code>m2()</code>, e o erro acontece lá no fundo, dentro de <code>m2()</code>.
        </p>
        <p>
          A pergunta da aula é: <strong>o que aparece na tela?</strong>
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Três funções encadeadas, sem nenhum tratamento"
        code={`def m2():
    print(">>> inicio m2")
    lista = [1, 2, 3]
    for x in range(0, 5):     # vai ate o indice 4: a lista so tem 3
        print(lista[x])
    print(">>> fim m2")

def m1():
    print(">>> inicio m1")
    m2()
    print(">>> fim m1")

def main():
    print(">>> inicio main")
    m1()
    print(">>> fim main")

if __name__ == "__main__":
    main()`}
      />

      <Subsection title="O que esperávamos × o que aconteceu" accentClass="text-accent2">
        <ComparisonTable rows={pilhaEsperadoReal} leftLabel="O que se espera" rightLabel="O que realmente sai" />
      </Subsection>

      <ExampleBox title="Nenhum dos três &quot;fim&quot; foi impresso" accent="var(--color-accent2)">
        <p>
          O programa imprime os três &quot;início&quot;, os valores 1, 2 e 3 — e então <strong>morre</strong>. Não sai o <code>fim m2</code>, nem o <code>fim m1</code>, nem o <code>fim main</code>. A exceção nasceu em <code>m2</code>, mas não ficou lá: ela <strong>subiu</strong> para <code>m1</code>, de <code>m1</code> para <code>main</code>, e de <code>main</code> para fora do programa, <strong>abortando cada função pelo caminho</strong>.
        </p>
        <p>
          É por isso que o <em>traceback</em> mostra a lista inteira de arquivos e linhas: ele é o <strong>mapa do caminho que a exceção percorreu</strong>, do erro até o topo.
        </p>
      </ExampleBox>

      <CodeBlock
        language="python"
        title="A saída real (executada)"
        code={`>>> inicio main
>>> inicio m1
>>> inicio m2
1
2
3
Traceback (most recent call last):
  File "excecoes.py", line 19, in <module>
    main()
  File "excecoes.py", line 15, in main
    m1()
  File "excecoes.py", line 10, in m1
    m2()
  File "excecoes.py", line 5, in m2
    print(lista[x])
IndexError: list index out of range`}
      />

      <TheoryBlock title="try / except: onde você põe decide o que sobrevive">
        <p>
          O <code>try</code> tenta executar o código; se algo falha, a exceção é capturada pelo <code>except</code> e <strong>para de subir</strong>. O ponto que o professor pede para experimentar (movendo o <code>try/except</code> de nível em nível) é este: <strong>a execução continua a partir do lugar onde a exceção foi capturada</strong>, e tudo o que ficou abaixo na pilha se perde.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="try/except na main(), em volta da chamada a m1()"
        code={`def main():
    print(">>> inicio main")
    try:
        m1()
    except Exception as e:
        print("Erro:", e)
    print(">>> fim main")

# Saida real:
# >>> inicio main
# >>> inicio m1
# >>> inicio m2
# 1
# 2
# 3
# Erro: list index out of range
# >>> fim main          <- so a main sobreviveu`}
      />

      <Subsection title="O mesmo erro, tratado em níveis diferentes" accentClass="text-accent4">
        <PanelList items={ondeTratar} columns="md:grid-cols-3" />
      </Subsection>

      <TheoryBlock title="O finally: o que acontece de qualquer jeito">
        <p>
          O <code>finally</code> executa <strong>sempre</strong>, tendo havido erro ou não. Ele existe para o que não pode ser esquecido em nenhum cenário — tipicamente <strong>fechar um arquivo</strong> ou liberar um recurso.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="try / except / finally dentro de m2()"
        code={`def m2():
    print(">>> inicio m2")
    lista = [1, 2, 3]
    try:
        for x in range(0, 5):
            print(lista[x])
    except Exception as e:
        print("Erro:", e)
    finally:
        print(">>> Sempre executa")
    print(">>> fim m2")

# Saida real: o erro e' tratado no fundo da pilha, entao
# TODAS as funcoes terminam normalmente:
# >>> inicio main / >>> inicio m1 / >>> inicio m2
# 1 / 2 / 3
# Erro: list index out of range
# >>> Sempre executa
# >>> fim m2 / >>> fim m1 / >>> fim main`}
      />

      <HighlightBox title="A regra prática" accent="var(--color-accent5)">
        <p>
          Trate a exceção <strong>o mais perto possível de onde você sabe o que fazer com ela</strong>. Tratar no fundo (<code>m2</code>) preserva toda a execução; tratar no topo (<code>main</code>) só garante que o programa não quebre, mas perde tudo que estava no meio. Nas provas da disciplina, o padrão pedido é tratar <strong>onde o dado entra</strong> — no <code>input</code> do menu, para que uma letra digitada no lugar de um número não derrube o programa inteiro.
        </p>
      </HighlightBox>
    </section>
  );
}

const pilhaEsperadoReal: ComparisonRow[] = [
  { criterion: 'Início das funções', left: 'inicio main, inicio m1, inicio m2', right: 'inicio main, inicio m1, inicio m2 (igual)' },
  { criterion: 'Itens da lista', left: '1, 2, 3', right: '1, 2, 3 (igual)' },
  { criterion: 'Índice 3 (inexistente)', left: '—', right: 'IndexError: list index out of range' },
  { criterion: 'fim m2', left: 'impresso', right: 'NÃO sai: m2 foi abortada' },
  { criterion: 'fim m1', left: 'impresso', right: 'NÃO sai: a exceção subiu e abortou m1' },
  { criterion: 'fim main', left: 'impresso', right: 'NÃO sai: a exceção chegou ao topo e encerrou tudo' },
];

const ondeTratar: PanelItem[] = [
  { title: 'Sem try/except', description: 'A exceção sobe até o topo e encerra o programa. Nenhum "fim" é impresso e o usuário vê um traceback.' },
  { title: 'try/except na main()', description: 'A exceção ainda aborta m2 e m1, mas para na main. Só o "fim main" é impresso — o programa não quebra, mas perdeu o meio do trabalho.' },
  { title: 'try/except dentro de m2()', description: 'A exceção é capturada onde nasceu: m2, m1 e main terminam normalmente, e os três "fim" são impressos.' },
];

const errosComuns: PanelItem[] = [
  { title: 'ZeroDivisionError', description: 'Tentar dividir um número por zero.' },
  { title: 'IndexError', description: 'Acessar um índice que não existe em uma lista.' },
  { title: 'TypeError', description: 'Usar um tipo onde outro é esperado (ex.: texto onde se espera número).' },
];

function ArquivosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Manipulação de Arquivos" subtitle="Guardar dados que sobrevivem ao fim do programa" colorClass="text-accent3" />
      <HighlightBox title="Por que arquivos">
        <p>
          Tudo o que está numa <strong>variável</strong> desaparece quando o programa termina. Para que um dado <strong>persista</strong> — a lista de palavras da Forca, os usuários cadastrados, um relatório — é preciso gravá-lo em <strong>arquivo</strong>.
        </p>
        <p>
          O ciclo é sempre o mesmo: <strong>abrir</strong> (<code>open</code>), <strong>usar</strong> (<code>write</code> ou <code>readlines</code>) e <strong>fechar</strong> (<code>close</code>).
        </p>
      </HighlightBox>

      <Subsection title="Os modos de abertura" accentClass="text-accent4">
        <ColoredPanelList items={modosArquivo} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Cuidado: o modo &quot;w&quot; apaga o que havia antes" accent="var(--color-accent2)">
        <p>
          Abrir um arquivo existente com <code>&quot;w&quot;</code> <strong>zera o conteúdo dele imediatamente</strong>, mesmo que você não escreva nada depois. Quando a intenção é <strong>acrescentar</strong> sem perder o que já estava lá, o modo é <code>&quot;a&quot;</code>.
        </p>
      </HighlightBox>

      <TheoryBlock title="Escrevendo linha a linha">
        <p>
          O <code>write()</code> grava exatamente o texto que recebe — e <strong>não coloca quebra de linha sozinho</strong>. Se cada dado deve ficar em uma linha, o <code>&quot;\n&quot;</code> é responsabilidade sua.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Gravando as frutas em um arquivo"
        code={`arquivo = open("frutas.txt", "w")   # cria (ou zera) o arquivo
arquivo.write("banana\\n")           # o \\n separa as linhas
arquivo.write("pera\\n")
arquivo.write("uva\\n")
arquivo.close()                     # fecha: garante a gravacao`}
      />

      <TheoryBlock title="Lendo de volta para uma lista">
        <p>
          O <code>readlines()</code> devolve uma <strong>lista com todas as linhas</strong> do arquivo. Cada item ainda traz o <code>&quot;\n&quot;</code> no fim — por isso se usa <code>strip()</code>, que remove espaços e quebras de linha das pontas, antes de guardar o valor.
        </p>
        <p>
          Este é o programa que <strong>fecha o ciclo do Jogo da Forca</strong>: as palavras secretas deixam de ser uma lista fixa no código e passam a vir de um arquivo que se pode editar sem mexer no programa.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Carregando as palavras da Forca de um arquivo"
        code={`import random

arquivo = open("frutas.txt", "r")

listaFrutas = []
for fruta in arquivo.readlines():
    listaFrutas.append(fruta.strip())   # tira o "\\n" do fim

arquivo.close()

print(listaFrutas)                      # ['banana', 'pera', 'uva']

palavraSecreta = random.choice(listaFrutas)
print(palavraSecreta)                   # sorteia uma delas`}
      />

      <ExampleBox title="Três seções amarradas num programa de 12 linhas">
        <p>
          Repare no que esse arquivo combina: <strong>arquivos</strong> (<code>open</code>/<code>readlines</code>/<code>close</code>), <strong>listas</strong> (<code>append</code>), <strong>strings</strong> (<code>strip</code>) e <strong>módulos</strong> (<code>random.choice</code>). É o exemplo mais econômico do material inteiro — e o formato exato que as provas cobram.
        </p>
      </ExampleBox>

      <TheoryBlock title="Arquivos e exceções andam juntos">
        <p>
          Abrir para <strong>leitura</strong> um arquivo que não existe lança <code>FileNotFoundError</code> e derruba o programa. Como o arquivo é um recurso <strong>externo</strong> — pode ter sido apagado, renomeado ou estar sem permissão —, essa é a situação em que o <code>try/except</code> deixa de ser opcional.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Abrindo com tratamento de erro"
        code={`try:
    arquivo = open("arquivo.txt", "w")    # funciona: modo "w" cria
    arquivo2 = open("aaa.txt", "r")       # ERRO: nao existe para ler
    arquivo.close()
except Exception as e:
    print("Erro: ", e)
    # Erro: [Errno 2] No such file or directory: 'aaa.txt'

print("O programa continua")   # graças ao except, esta linha executa`}
      />

      <HighlightBox title="Resumo operacional" accent="var(--color-accent5)">
        <p>
          <code>open(nome, modo)</code> abre · <code>write(texto)</code> grava (com <code>\n</code> seu) · <code>readlines()</code> devolve a lista de linhas · <code>strip()</code> limpa cada uma · <code>close()</code> fecha. Modo <code>&quot;w&quot;</code> escreve do zero, <code>&quot;r&quot;</code> lê (e exige que exista), <code>&quot;a&quot;</code> acrescenta ao final.
        </p>
      </HighlightBox>
    </section>
  );
}

const modosArquivo: PanelItem[] = [
  { title: '"w" — escrita', description: 'Cria o arquivo se não existir e APAGA todo o conteúdo se existir. Use quando o arquivo deve ser reescrito do zero.' },
  { title: '"r" — leitura', description: 'Abre só para ler. O arquivo precisa existir: se não existir, lança FileNotFoundError.' },
  { title: '"a" — acréscimo', description: 'Escreve no final, preservando o que já estava gravado. É o modo para acumular registros (append).' },
];

function JogosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Os dois jogos da disciplina" subtitle="Adivinhação e Forca reescritos a cada conceito novo — o fio condutor do semestre" colorClass="text-accent4" />

      <HighlightBox title="Como ler esta seção">
        <p>
          A disciplina não ensinou <code>while</code>, listas e funções como assuntos soltos. Ensinou <strong>reescrevendo os mesmos dois programas</strong>, cada vez com a ferramenta nova. Cada versão abaixo resolve <strong>uma limitação concreta</strong> da anterior — e é essa a pergunta que a página quer responder: <em>para que eu precisaria disso?</em>
        </p>
      </HighlightBox>

      <SectionHeader title="Jogo 1 — Adivinhação" subtitle="Do if solitário à lista de chutes" colorClass="text-accent" />

      <Subsection title="Etapa 1 — Só condicional: um único chute" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          A primeira versão sabe apenas comparar. O <code>elif</code> já dá a dica de &quot;maior&quot; ou &quot;menor&quot;, mas o programa <strong>acaba depois de um chute</strong> — não há como tentar de novo.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="adivinhacao02.py — condicional encadeada"
        code={`numeroSecreto = 76

print("** Jogo de Adivinhacao 02")
print("\\nDescubra o numero secreto de 1 a 100")
chute = int(input("Digite o seu chute: "))

if chute == numeroSecreto:
    print("ACERTOU!")
elif chute > numeroSecreto:
    print("Chute foi MAIOR que o numero secreto!")
else:
    print("Chute foi MENOR que o numero secreto!")`}
      />
      <ExampleBox title="A limitação que motiva a próxima etapa" accent="var(--color-accent2)">
        <p>
          Um jogo de adivinhação com <strong>um chute só</strong> não é um jogo. Para deixar o jogador tentar até acertar, é preciso <strong>repetir</strong> — e é exatamente aí que entra o <code>while</code>.
        </p>
      </ExampleBox>

      <Subsection title="Etapa 2 — Com while: chutes até acertar" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          Duas novidades: a variável <strong>de controle</strong> <code>acertou</code>, que decide quando parar, e o <code>random.randint</code>, que faz o número secreto mudar a cada partida.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="adivinhacaocomwhile.py — laço por condição"
        code={`import random

numeroSecreto = random.randint(1, 10)
acertou = False                      # variavel de controle do laco

print("Jogo de Adivinhacao com chutes ate acertar")

while acertou == False:
    chute = int(input("Digite o seu chute: "))

    if chute == numeroSecreto:
        print("ACERTOU!")
        acertou = True               # so aqui o laco termina
    elif chute > numeroSecreto:
        print("Chute foi MAIOR que o numero secreto!")
    else:
        print("Chute foi MENOR que o numero secreto!")`}
      />
      <ExampleBox title="A limitação seguinte" accent="var(--color-accent2)">
        <p>
          Agora o jogador tenta para sempre — literalmente. Sem um <strong>limite de chances</strong>, não há como perder, e um jogo em que não se pode perder não tem graça.
        </p>
      </ExampleBox>

      <Subsection title="Etapa 3 — Com limite: duas condições no while" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          O <code>and</code> aparece por um motivo real: o laço deve continuar enquanto <strong>não acertou</strong> <em>e</em> <strong>ainda há chances</strong>. Basta uma das duas ficar falsa para o jogo terminar.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="adivinhacaocomwhileelimite.py — while com and"
        code={`numeroSecreto = 10
acertou = False
chances = 0

print("Jogo de Adivinhacao com direito a 4 chutes")

while acertou == False and chances < 4:
    chances += 1                  # o mesmo que chances = chances + 1
    print(f"\\nChute de no. {chances}")
    chute = int(input("Digite o seu chute: "))

    if chute == numeroSecreto:
        print("ACERTOU!")
        acertou = True
    elif chute > numeroSecreto:
        print("Chute foi MAIOR que o numero secreto!")
    else:
        print("Chute foi MENOR que o numero secreto!")`}
      />
      <HighlightBox title="Rastreando a saída real (número secreto = 10)" accent="var(--color-accent3)">
        <p>
          Com os chutes 5, 8 e 10, o programa imprime <code>Chute de no. 1</code> / MENOR, <code>Chute de no. 2</code> / MENOR, <code>Chute de no. 3</code> / <code>ACERTOU!</code> — e o laço para, mesmo tendo sobrado uma chance, porque <code>acertou</code> virou <code>True</code>.
        </p>
      </HighlightBox>

      <Subsection title="Etapa 4 — Com lista: lembrar os chutes anteriores" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          Aqui a <strong>lista</strong> entra pelo motivo certo: o programa precisa <strong>guardar</strong> os chutes já dados para avisar quando o jogador repetir um. Uma variável simples não serve — ela guarda um valor só.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="A ideia da etapa 4, com in no lugar do laço manual"
        code={`import random

numeroSecreto = random.randint(1, 10)
acertou = False
chutes = []                        # a lista guarda o historico

while acertou == False:
    chute = int(input("Digite o seu chute: "))

    if chute in chutes:            # pertinencia: ja foi dado?
        print("Voce ja deu esse chute!")
    else:
        chutes.append(chute)       # so guarda se for novo

    if chute == numeroSecreto:
        print("ACERTOU!")
        acertou = True
    elif chute > numeroSecreto:
        print("Chute foi MAIOR que o numero secreto!")
    else:
        print("Chute foi MENOR que o numero secreto!")`}
      />
      <ExampleBox title="Uma divergência honesta em relação ao código da aula">
        <p>
          O arquivo <code>adivinhacaocomlistas.py</code> distribuído em aula percorre a lista com <code>for i in range(0, len(chutes))</code> e faz o <code>append</code> <strong>dentro</strong> do <code>else</code> desse laço — o que acaba <strong>guardando o mesmo chute várias vezes</strong> (uma para cada item diferente já na lista) e não detecta a repetição corretamente.
        </p>
        <p>
          A versão acima usa <code>if chute in chutes</code>, que é o operador de pertinência que a própria disciplina ensina na seção de listas: mais curto, mais legível e <strong>correto</strong>. Vale conhecer as duas — a da aula mostra o percurso por índice; esta mostra por que o <code>in</code> existe.
        </p>
      </ExampleBox>

      <SectionHeader title="Jogo 2 — Forca" subtitle="Do for linear às cinco funções da AV2" colorClass="text-accent3" />

      <Subsection title="Etapa 1 — Linear: for, len e indexação de string" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          A primeira Forca mostra os traços e testa <strong>um único chute</strong>. Ela já usa <code>random.choice</code>, <code>len</code> e o percurso por índice — mas ainda não guarda nada.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="jogo-forca.py — a versão inicial"
        code={`import random

palavras = ["IFAL", "ALAGOAS"]
palavra_secreta = random.choice(palavras)

print("A palavra tem", len(palavra_secreta), "letras")

for i in range(0, len(palavra_secreta)):
    print("_ ", end="")            # end="" nao pula linha

chute = input("\\n\\nQual a letra quer chutar? ")

for i in range(0, len(palavra_secreta)):
    if chute == palavra_secreta[i]:
        print(chute, end="")       # acertou nesta posicao
    else:
        print("_ ", end="")`}
      />
      <ExampleBox title="O problema estrutural" accent="var(--color-accent2)">
        <p>
          Como a string <strong>é imutável</strong>, o programa não tem onde <strong>anotar</strong> as letras descobertas — ele recalcula os traços do zero a cada vez e <strong>esquece</strong> o chute anterior. A solução é uma <strong>lista</strong> paralela, que pode ser alterada posição a posição.
        </p>
      </ExampleBox>

      <Subsection title="Etapa 2 — Com lista: memória e níveis" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          A <code>letras_descobertas</code> começa toda de <code>&quot;_&quot;</code> e vai sendo <strong>preenchida</strong> a cada acerto. Aparecem também o menu de níveis (condicional encadeada), o <code>upper()</code> para aceitar maiúscula ou minúscula, o <code>not in</code> como condição de vitória e o <code>break</code>.
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="jogo-forca-com-lista.py — o jogo completo em um bloco"
        code={`import random as r

frutas = ["banana", "morango", "melancia"]
palavra_secreta = r.choice(frutas)

letras_descobertas = []
qtd_chances = 0

for i in range(0, len(palavra_secreta)):
    letras_descobertas.append("_")      # um traco por letra

print("Escolha um nivel:")
print("1 - Facil / 2 - Medio / 3 - Dificil")
nivel = input()

if nivel == "1":
    qtd_chances = 15
elif nivel == "2":
    qtd_chances = 10
elif nivel == "3":
    qtd_chances = 5
else:
    print("Nivel invalido!")

for j in range(0, qtd_chances):
    qtd_chances = qtd_chances - 1

    for i in range(0, len(letras_descobertas)):
        print(letras_descobertas[i], end="")

    chute = str(input("\\nQual o seu chute? "))

    for i in range(0, len(palavra_secreta)):
        if chute.upper() == palavra_secreta[i].upper():
            letras_descobertas[i] = chute    # anota na posicao

    if ("_" not in letras_descobertas) or (qtd_chances < 1):
        print("".join(letras_descobertas))
        print("Parabens! Voce acertou a palavra secreta!")
        break`}
      />
      <HighlightBox title="Por que o percurso é por índice, e não por item" accent="var(--color-accent3)">
        <p>
          Repare no <code>for i in range(0, len(palavra_secreta))</code>: aqui o índice <code>i</code> é <strong>indispensável</strong>, porque a comparação acontece em <code>palavra_secreta[i]</code> mas a escrita acontece em <code>letras_descobertas[i]</code> — <strong>a mesma posição em duas coleções diferentes</strong>. Um <code>for letra in palavra</code> daria a letra, mas não diria <em>onde</em> ela está.
        </p>
        <p>
          O <code>&quot;&quot;.join(letras_descobertas)</code>, no final, cola a lista de caracteres numa única string para exibir a palavra inteira.
        </p>
      </HighlightBox>
      <ExampleBox title="A limitação final" accent="var(--color-accent2)">
        <p>
          O programa <strong>funciona</strong>, mas é um bloco único de 40 linhas: configuração, menu e jogo misturados. Para testar só o menu, ou reaproveitar o jogo em outro programa, não há por onde pegar. É o argumento para as <strong>funções</strong>.
        </p>
      </ExampleBox>

      <Subsection title="Etapa 3 — Com funções: a versão da AV2" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 reading-measure">
          O mesmo jogo, agora dividido em <strong>cinco funções</strong> com responsabilidades separadas — exatamente o formato que o exame de proficiência cobra (&quot;o programa deve ser separado em funções específicas&quot;).
        </p>
      </Subsection>
      <CodeBlock
        language="python"
        title="jogo-forca-funcao.py — dividir para conquistar"
        code={`import random as r

letras_descobertas = []
palavra_secreta = ""
qtd_chances = 0

def configuracoes_iniciais():
    global palavra_secreta
    global letras_descobertas

    frutas = ["banana", "morango", "melancia"]
    palavra_secreta = r.choice(frutas)

    for i in range(0, len(palavra_secreta)):
        letras_descobertas.append("_")

def define_nivel(nivel):
    global qtd_chances

    if nivel == "1":
        qtd_chances = 15
    elif nivel == "2":
        qtd_chances = 10
    elif nivel == "3":
        qtd_chances = 5
    else:
        print("Nivel invalido!")

def tela_inicial():
    print("*** Jogo da Forca ***")
    print("1 - Facil / 2 - Medio / 3 - Dificil")
    nivel = input()
    define_nivel(nivel)          # uma funcao chamando outra

def jogar():
    global qtd_chances
    global letras_descobertas
    global palavra_secreta

    for j in range(0, qtd_chances):
        qtd_chances = qtd_chances - 1

        for i in range(0, len(letras_descobertas)):
            print(letras_descobertas[i], end="")

        chute = str(input("\\nQual o seu chute? "))

        for i in range(0, len(palavra_secreta)):
            if chute.upper() == palavra_secreta[i].upper():
                letras_descobertas[i] = chute

        if ("_" not in letras_descobertas) or (qtd_chances < 1):
            print("".join(letras_descobertas))
            print("Parabens! Voce acertou a palavra secreta!")
            break

def main():
    configuracoes_iniciais()
    tela_inicial()
    jogar()

if __name__ == '__main__':
    main()`}
      />

      <Subsection title="As cinco funções e suas responsabilidades" accentClass="text-accent">
        <PanelList items={forcaFuncoes} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Por que aparecem tantos global" accent="var(--color-accent2)">
        <p>
          Porque as variáveis do jogo (<code>palavra_secreta</code>, <code>letras_descobertas</code>, <code>qtd_chances</code>) precisam ser <strong>compartilhadas entre funções</strong>: uma cria, outra altera, outra lê. Sem <code>global</code>, uma atribuição dentro da função criaria uma variável <strong>local</strong> e a de fora ficaria intacta — o bug de escopo da seção anterior.
        </p>
        <p>
          Vale a nota honesta: <strong>usar tantas globais não é boa prática</strong>. A alternativa madura é cada função <strong>receber parâmetros e devolver resultados</strong> com <code>return</code>, sem estado compartilhado. O código da turma usa <code>global</code> porque é a ferramenta apresentada até aquele ponto do semestre — e conhecer o custo dessa escolha já é parte do aprendizado.
        </p>
      </HighlightBox>

      <Subsection title="A progressão inteira, de uma vez" accentClass="text-accent5">
        <ComparisonTable rows={progressaoJogos} leftLabel="Adivinhação" rightLabel="Forca" />
      </Subsection>

      <HighlightBox title="O que essa progressão ensina" accent="var(--color-accent5)">
        <p>
          Cada conceito da ementa apareceu <strong>quando o programa anterior não dava mais conta</strong>: o <code>while</code> porque um chute era pouco; o <code>and</code> porque faltava limite; a <strong>lista</strong> porque era preciso lembrar; as <strong>funções</strong> porque o bloco único ficou grande demais; o <code>if __name__</code> porque os dois jogos precisaram virar módulos. Estudar por essa ordem é entender <strong>por que</strong> cada ferramenta existe — e é o que as provas cobram, já que todas elas pedem um programa inteiro, não uma definição.
        </p>
      </HighlightBox>
    </section>
  );
}

const forcaFuncoes: PanelItem[] = [
  { title: 'configuracoes_iniciais()', description: 'Sorteia a palavra secreta e monta a lista de traços do tamanho dela. É o "preparar o tabuleiro", feito uma vez só.' },
  { title: 'tela_inicial()', description: 'Mostra o menu de níveis, lê a escolha do jogador e repassa para define_nivel — um exemplo de função chamando outra.' },
  { title: 'define_nivel(nivel)', description: 'Recebe a escolha como PARÂMETRO e converte em quantidade de chances (15, 10 ou 5). É a única que recebe valor de fora.' },
  { title: 'jogar()', description: 'O laço principal: mostra os traços, lê o chute, marca os acertos e decide quando terminar com break.' },
  { title: 'main()', description: 'Não faz nada sozinha: apenas chama as outras três na ordem certa. É o roteiro do programa, e o que o if __name__ protege.' },
];

const progressaoJogos: ComparisonRow[] = [
  { criterion: 'Só condicional', left: 'Um chute e o programa acaba (if/elif/else)', right: 'Mostra os traços e testa um único chute (for + len)' },
  { criterion: 'Repetição', left: 'while acertou == False: chuta até acertar', right: 'for pelas chances, com um chute por volta' },
  { criterion: 'Condição composta', left: 'while ... and chances < 4: limita as tentativas', right: 'if vitória or chances esgotadas: break' },
  { criterion: 'Listas', left: 'Guarda os chutes dados e detecta repetição com in', right: 'letras_descobertas registra os acertos por posição' },
  { criterion: 'Funções', left: 'Vira módulo importável por jogos.py', right: 'Cinco funções + main, com global e if __name__' },
  { criterion: 'Arquivos', left: '—', right: 'As palavras passam a vir de frutas.txt (readlines + strip)' },
];

function ProjetoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Projeto em grupo e provas" subtitle="Como a disciplina realmente avalia: metade prova escrita, metade jogo entregue em equipe" colorClass="text-accent2" />

      <HighlightBox title="A nota não vem só de prova">
        <p>
          A estrutura de avaliação declarada pelo professor é: <strong>Nota 1</strong> — minitestes, prova escrita ou prática; <strong>Nota 2</strong> — prova <strong>ou projeto</strong>; e a nota do bimestre é a <strong>média das duas</strong>. Na prática, o segundo bimestre da turma foi quase inteiramente <strong>projeto</strong>: um <strong>jogo em grupo</strong>, desenvolvido com Git, Trello e entregas semanais.
        </p>
        <p>
          Quem estuda só o conteúdo técnico chega despreparado para <strong>metade do trabalho</strong>.
        </p>
      </HighlightBox>

      <Subsection title="O que o projeto exigia" accentClass="text-accent4">
        <ColoredPanelList items={projetoArtefatos} columns="md:grid-cols-2" />
      </Subsection>

      <TheoryBlock title="Por que Git e commits individuais">
        <p>
          O professor foi explícito: <em>&quot;preciso ver que todos tenham significativa contribuição nos códigos. Ou seja, preciso ver os <strong>commits individuais</strong>, para entender em que parte cada um contribuiu. Isso será parte da avaliação individual para compor a nota&quot;</em>.
        </p>
        <p>
          Ou seja: o histórico do repositório <strong>é</strong> instrumento de avaliação. Um integrante que programou muito mas nunca deu commit em seu próprio nome não tem como comprovar. E houve ainda uma <strong>avaliação 360</strong> — cada membro avaliando os colegas — também compondo a nota do projeto.
        </p>
      </TheoryBlock>

      <Subsection title="O vocabulário ágil usado na disciplina" accentClass="text-accent3">
        <PanelList items={vocabularioAgil} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Pygame: a biblioteca do jogo" accent="var(--color-accent5)">
        <p>
          Os jogos foram feitos com <strong>Pygame</strong>, apresentada num <strong>workshop conduzido pelos próprios alunos</strong>. O essencial: <code>pygame.init()</code> inicializa, <code>set_mode</code> cria a janela, <code>blit</code> desenha uma imagem na tela, <code>display.flip</code> atualiza o quadro, mais recursos de som e fonte — tudo dentro de um <strong>laço principal</strong> que roda a cada quadro.
        </p>
        <p>
          Repare que esse laço principal é o mesmo <code>while</code> da AV1: a lógica não muda, só o que acontece dentro dela.
        </p>
      </HighlightBox>

      <SectionHeader title="O que as provas realmente cobraram" subtitle="Três avaliações reais da turma — e o padrão que se repete nas três" colorClass="text-accent" />

      <HighlightBox title="O padrão" accent="var(--color-accent2)">
        <p>
          <strong>Nenhuma</strong> das três provas pediu &quot;o que é um algoritmo&quot;. Todas pediram <strong>programas inteiros</strong>, e quase sempre com a mesma anatomia: <strong>um menu</strong>, <strong>um laço principal</strong> que repete até o usuário escolher sair, e <strong>uma função específica por operação</strong>. Se você souber montar esse esqueleto de cabeça, já resolveu a maior parte de qualquer questão.
        </p>
      </HighlightBox>

      <Subsection title="AV1 — condicionais e entrada/saída" accentClass="text-accent">
        <PanelList items={av1Questoes} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="AV2 — menu, funções e laço principal" accentClass="text-accent3">
        <PanelList items={av2Questoes} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Exame de proficiência — os dois programas completos" accentClass="text-accent4">
        <PanelList items={proficienciaQuestoes} columns="md:grid-cols-2" />
      </Subsection>

      <TheoryBlock title="O esqueleto que resolve quase todas as questões">
        <p>
          Menu numerado, laço principal que repete até a opção &quot;Sair&quot;, uma função por operação e <code>try/except</code> em volta da leitura da opção. Este é o padrão de <code>conta-com-tratamento.py</code>, código de aula, e serve de molde para a AV2 inteira e para a Q2 do exame de proficiência.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="O molde de menu com laço e tratamento de erro"
        code={`saldo = 0

def get_saldo():
    print("Saldo =", saldo)

def depositar():
    try:
        valor = float(input("Qual o valor a depositar? "))
        print("Depositado:", valor)
    except Exception:
        print("Valor invalido")      # nao derruba o programa

def menu():
    opcao = 0

    while opcao != 4:                # laco principal ate "Sair"
        print("\\n** Operacoes **")
        print("1. Saldo")
        print("2. Depositar")
        print("3. Sacar")
        print("4. Sair")

        try:
            opcao = int(input("Escolha uma opcao: "))

            if opcao == 1:
                get_saldo()
            elif opcao == 2:
                depositar()
            elif opcao == 4:
                print("Ate logo!")
            else:
                print("Opcao invalida")
        except Exception:
            print("Erro na opcao do menu.")   # letra no lugar de numero

def main():
    menu()

if __name__ == "__main__":
    main()`}
      />

      <ExampleBox title="Os quatro detalhes que valem ponto">
        <p>
          <strong>1.</strong> O <code>try/except</code> em volta do <code>int(input(...))</code> — sem ele, digitar uma letra derruba o programa (a AV2 e o exame cobram isso explicitamente). <strong>2.</strong> O <code>else</code> com &quot;Opção inválida&quot;, exigido em texto no enunciado da AV2. <strong>3.</strong> Uma função <strong>por operação</strong>, não tudo dentro do menu. <strong>4.</strong> O laço que volta ao menu <strong>depois</strong> de cada operação, em vez de encerrar.
        </p>
      </ExampleBox>

      <HighlightBox title="Como estudar para essas provas" accent="var(--color-accent5)">
        <p>
          Escrever, não ler. Pegue os enunciados acima e <strong>implemente do zero</strong>, num arquivo por questão — que é inclusive o formato de entrega pedido (<code>q1.py</code>, <code>q2.py</code>, <code>q3.py</code>). Se travar em alguma estrutura, volte à seção correspondente do guia; se travar na <strong>organização</strong>, releia a etapa 3 do Jogo da Forca, que é o mesmo esqueleto.
        </p>
      </HighlightBox>
    </section>
  );
}

const projetoArtefatos: PanelItem[] = [
  { title: 'Repositório no GitHub', description: 'Projeto criado no GitHub, com o professor convidado. O histórico de commits é parte da avaliação individual.' },
  { title: 'README.md', description: 'A definição geral do projeto escrita no readme do repositório, mais uma apresentação de 1 minuto do jogo.' },
  { title: 'MVP', description: 'Definir as funcionalidades mínimas que o jogo precisa ter para funcionar adequadamente — o recorte do que entra na primeira versão.' },
  { title: 'Trello com estórias', description: 'Quadro criado com todos os membros e o professor, contendo as estórias de usuário priorizadas no backlog.' },
  { title: 'Planning semanal', description: 'Toda terça a equipe fazia o planning, puxando estórias do backlog — por isso o backlog precisava estar sempre alimentado.' },
  { title: 'Avaliação 360', description: 'Formulário em que cada integrante avalia os colegas do grupo. Compõe a nota do projeto junto com o código entregue.' },
];

const vocabularioAgil: PanelItem[] = [
  { title: 'MVP (Produto Mínimo Viável)', description: 'A menor versão do jogo que já funciona e faz sentido para quem joga. Serve para evitar começar pelo enfeite e não terminar o essencial.' },
  { title: 'Estória de usuário', description: 'Uma funcionalidade descrita do ponto de vista de quem usa ("como jogador, quero pular para desviar dos obstáculos"). É a unidade de trabalho do quadro.' },
  { title: 'Backlog', description: 'A lista de estórias ainda não feitas, em ordem de prioridade. O que está no topo é o que será puxado no próximo planning.' },
  { title: 'Planning', description: 'A reunião em que a equipe escolhe quais estórias entram no período seguinte e quem faz o quê. Na turma, acontecia toda terça.' },
  { title: 'Commit', description: 'Um registro de alteração no Git, com mensagem descrevendo o que mudou. Commits pequenos e frequentes, em nome de cada autor, é o que comprova a contribuição.' },
  { title: 'Bom commit', description: 'Mensagem no imperativo, dizendo o que a mudança faz; um assunto por commit. O material indicado tratava justamente de tamanho e escrita de mensagem.' },
];

const av1Questoes: PanelItem[] = [
  { title: 'Q1 (3,0) — Cálculo de salário', description: 'Ler valor da hora e horas trabalhadas; mostrar o salário bruto e o líquido, descontando 11% de IR, 8% de INSS e 5% de sindicato. Entrada, cálculo e saída.' },
  { title: 'Q2 (4,0) — Sistema escolar', description: 'Ler as médias de 4 bimestres, calcular a média geral e decidir: aprovado (>= 6), recuperação (>= 3 e < 6, pedindo a nota da recuperação e testando >= 5) ou reprovado sem recuperação (< 3). Condicional encadeada com mensagens exatas.' },
  { title: 'Q3 (3,0) — Percentuais', description: 'Ler situação, gênero e área de 5 estudantes e apresentar percentuais de aprovação no geral, por área e por gênero. Exige acumuladores e divisão cuidadosa.' },
];

const av2Questoes: PanelItem[] = [
  { title: 'Q1 — Conversor de temperaturas', description: 'Menu com 5 opções (Celsius/Fahrenheit/Kelvin nos dois sentidos e Sair). Uma função por conversão, recebendo a temperatura como parâmetro; opção fora de 1 a 5 imprime "Opção inválida" e mostra o menu de novo.' },
  { title: 'Q2 — valorPagamento', description: 'Função que recebe o valor da prestação e os dias de atraso e devolve o valor a pagar (3% de multa mais 0,1% de juros por dia). Repete até a prestação ser zero e então imprime o relatório do dia: quantidade e valor total.' },
  { title: 'Q3 — Notação 12h/24h', description: 'Converter entre os dois formatos, com um parâmetro registrando A (A.M.) ou P (P.M.), dentro de um laço que permite repetir o cálculo quantas vezes o usuário quiser.' },
  { title: 'Q4 — Projeção salarial', description: 'Três perfis (operador, técnico, gerente) com salário inicial e percentual de aumento próprios; projetar por N anos com juros compostos, chamando uma função específica por perfil.' },
];

const proficienciaQuestoes: PanelItem[] = [
  { title: 'Q1 (4,0) — Jogo da Forca em 6 funções', description: 'main chamando função de nível (sorteio aleatório com random ou escolha por letra inicial, usando funções de string), função que mostra a quantidade de letras e os traços, função de chute aceitando só letras (número lança exceção tratada), função de chances (letras exclusivas + 3, exibindo "Chances 1/8"), registro de chutes com aviso de repetido sem descontar chance, e verificação de vitória.' },
  { title: 'Q2 (6,0) — Gerenciador de usuários', description: 'Menu com listar, cadastrar, remover e sair. Listagem em ordem crescente; cadastro validando se o usuário já existe, se o e-mail é válido (nome, @ e domínio com ponto) e se a senha tem no mínimo 6 dígitos, letras e números e ao menos uma maiúscula; remoção por e-mail com confirmação. Cada item é uma função específica.' },
];

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={ALPG_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={ALPG_GUIDE_CONTEXT} topics={ALPG_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={ALPG_EXAMS} />}
        aiKahoot={<AIKahootQuiz guideContext={ALPG_GUIDE_CONTEXT} topics={ALPG_TOPICS} />}
      />
    </section>
  );
}

export default function ALPGSections({ activeSection }: ALPGSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'conceitos':
      return <ConceitosSection />;
    case 'python':
      return <PythonSection />;
    case 'condicionais':
      return <CondicionaisSection />;
    case 'escopo':
      return <EscopoSection />;
    case 'repeticao':
      return <RepeticaoSection />;
    case 'listas':
      return <ListasSection />;
    case 'modulos':
      return <ModulosSection />;
    case 'funcoes':
      return <FuncoesSection />;
    case 'strings':
      return <StringsSection />;
    case 'excecoes':
      return <ExcecoesSection />;
    case 'arquivos':
      return <ArquivosSection />;
    case 'jogos':
      return <JogosSection />;
    case 'projeto':
      return <ProjetoSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
