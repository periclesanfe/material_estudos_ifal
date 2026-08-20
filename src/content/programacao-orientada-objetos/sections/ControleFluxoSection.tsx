import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function ControleFluxoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Condicionais e Laços"
        subtitle="if/switch, os três laços e o Jogo da Adivinhação que costura as aulas"
        colorClass="text-accent"
      />

      <Subsection title="Decisões: if/else e switch" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <code>if / else if / else</code> resolve qualquer decisão; <code>switch/case</code> é a alternativa
          legível quando se compara <strong>uma variável contra valores discretos</strong> — cada <code>case</code>{' '}
          termina em <code>break</code> (sem ele, a execução "vaza" para o próximo caso) e <code>default</code>{' '}
          captura o resto. A entrada do usuário vem do <code>Scanner</code>.
        </p>
        <CodeBlock
          language="java"
          title="Dia da semana (Lista 01, Q1) — versão switch com entrada robusta"
          code={`Scanner in = new Scanner(System.in);
try {
    int dia = in.nextInt();
    switch (dia) {
        case 1: System.out.println("Domingo"); break;
        case 2: System.out.println("Segunda"); break;
        // ... 3 a 6 ...
        case 7: System.out.println("Sábado"); break;
        default: System.out.println("Não existe dia com esse número");
    }
} catch (Exception e) {
    System.out.println("Digite um número inteiro!");
}`}
        />
        <ExampleBox title="Ache o bug (código real da aula)">
          <CodeBlock
            language="java"
            title="Questao1a.java — por que só domingo e segunda funcionam?"
            code={`if (dia == 1) System.out.println("Domingo");
else if (dia == 2) System.out.println("Segunda");
else if (dia == 2) System.out.println("Terça");   // <- copy-paste!
else if (dia == 2) System.out.println("Quarta");  // todos testam 2
// ...
else System.out.println("Dia inválido");`}
          />
          <p>
            Todos os <code>else if</code> seguintes testam <code>dia == 2</code> — clássico erro de copiar e colar.
            Como o primeiro <code>dia == 2</code> já captura a segunda-feira, os demais são inalcançáveis e 3–7 caem
            no "Dia inválido". Foi exatamente para consertar isso que a aula refez a questão com <code>switch</code>.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Lógica booleana que cai em prova" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Ano bissexto (Lista 01, Q3)',
              description:
                'ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0). Múltiplo de 4 é bissexto, EXCETO múltiplo de 100 (1900, 2100), SALVO múltiplo de 400 (2000, 2400).',
            },
            {
              title: 'Triângulo (Lista 01, Q4)',
              description:
                'Três lados formam triângulo se cada um é menor que a soma e maior que o módulo da diferença dos outros dois. Depois classifica: equilátero (3 iguais), isósceles (2 iguais), escaleno (todos diferentes).',
            },
          ]}
        />
      </Subsection>

      <TheoryBlock title="Os três laços — e quando usar cada um">
        <p>
          O <strong>for</strong> tem início, fim e incremento: serve quando a quantidade de repetições é{' '}
          <strong>conhecida</strong>. Quando não se sabe quantas vezes o bloco vai rodar — "repita enquanto o
          usuário não acertar" — entra o <strong>while</strong>, que testa a condição <em>antes</em> de cada volta.
          O <strong>do-while</strong> move o teste para o <em>final</em>: o bloco executa <strong>pelo menos uma
          vez</strong>, teste depois. Complementos: <code>break</code> abandona o laço; <code>continue</code> pula
          direto para a próxima iteração.
        </p>
      </TheoryBlock>

      <Subsection title="O Jogo da Adivinhação, em três atos" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="Ato 1 — com FOR: número limitado de chutes"
          code={`for (int i = 0; i <= 4; i++) {   // ATENÇÃO: <= 4 → executa 5 vezes!
    int chute = in.nextInt();
    if (chute == numeroSecreto) System.out.println("Acertou!");
    else if (chute > numeroSecreto) System.out.println("Muito alto");
    else System.out.println("Muito baixo");
}`}
        />
        <CodeBlock
          language="java"
          title="Ato 2 — com WHILE e flag booleana: chuta até acertar"
          code={`boolean isAcertou = false;       // inicializar ANTES: o while testa primeiro
while (!isAcertou) {
    int chute = in.nextInt();
    if (chute == numeroSecreto) {
        System.out.println("Acertou!");
        isAcertou = true;            // a flag encerra o laço
    }
}`}
        />
        <CodeBlock
          language="java"
          title="Ato 3 — com DO-WHILE: o primeiro chute é garantido"
          code={`boolean acertou;
do {
    int chute = in.nextInt();
    acertou = (chute == numeroSecreto);
} while (!acertou);                  // testa DEPOIS de executar`}
        />
      </Subsection>

      <Subsection title="for × while × do-while" accentClass="text-accent4">
        <ComparisonTable
          criterionLabel="Laço"
          leftLabel="Quando testa"
          rightLabel="Uso típico"
          rows={[
            { criterion: 'for', left: 'Antes de cada volta (com contador embutido)', right: 'Quantidade de repetições conhecida: percorrer array, N jogadas' },
            { criterion: 'while', left: 'ANTES — pode executar zero vezes', right: 'Repetir enquanto uma condição vale; variável de controle inicializada antes' },
            { criterion: 'do-while', left: 'DEPOIS — executa no mínimo uma vez', right: 'Menus e leituras que precisam rodar ao menos uma vez' },
          ]}
        />
      </Subsection>

      <HighlightBox title="continue em ação: mega-sena sem repetição" accent="var(--color-accent3)">
        <p>
          O exemplo <code>While3.java</code> sorteia 6 números de 1 a 60 sem repetir: a cada sorteio, um laço
          interno confere se o número já saiu; se sim, <code>continue</code> descarta e sorteia de novo. É o padrão
          "gerar-validar-repetir" que combina <code>while</code>, flag booleana e <code>continue</code>.
        </p>
      </HighlightBox>
    </section>
  );
}
