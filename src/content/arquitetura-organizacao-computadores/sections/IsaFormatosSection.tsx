import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function IsaFormatosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Formatos de Instrução e Endereçamento"
        subtitle="Como uma linha de assembly vira 32 bits — e as decisões de projeto que se enxergam nesses bits"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="Os quatro princípios de projeto" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Simplicidade favorece a regularidade',
              description:
                'Todas as instruções têm exatamente 32 bits, existem poucos formatos e o opcode fica SEMPRE nos 6 bits mais significativos. O decodificador pode começar a trabalhar antes de saber que instrução é — a posição do campo nunca muda.',
            },
            {
              title: '2. Bons projetos exigem compromissos',
              description:
                'A regularidade pura pediria um formato único. Mas constantes de 16 bits e endereços de 26 não cabem no mesmo molde de três registradores. Os TRÊS formatos são o meio-termo entre regularidade e capacidade.',
            },
            {
              title: '3. Menor é melhor',
              description:
                'Conjunto de instruções, número de registradores e modos de endereçamento todos limitados. Cada item a mais é hardware a mais no caminho crítico — e o caminho crítico define o período do clock.',
            },
            {
              title: '4. Torne rápido o caso comum',
              description:
                'Operandos aritméticos vivem no banco de registradores (máquina load-store) e há instruções com operando imediato, porque constantes pequenas aparecem o tempo todo. Otimiza-se o que acontece muito, não o que é impressionante.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os três formatos" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Todas as instruções MIPS ocupam <strong>32 bits</strong>. O que muda é como esses bits se repartem.
        </p>
        <ConceptGrid
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Formato R — operações entre registradores',
              description:
                'opcode(6) | rs(5) | rt(5) | rd(5) | shamt(5) | funct(6). rs e rt são os registradores de origem, rd é o destino, shamt é a quantidade de bits a deslocar e funct especifica a operação. Como todas as instruções tipo R compartilham o opcode 0, é o funct que distingue add de sub, and, or e slt. Cinco bits bastam para endereçar um registrador porque são 32 = 2⁵.',
              accent: 'accent',
            },
            {
              title: 'Formato I — imediato e acesso à memória',
              description:
                'opcode(6) | rs(5) | rt(5) | constante ou endereço(16). Usado por addi, lw, sw, beq e bne. O campo imediato de 16 bits comporta valores de −2¹⁵ a +2¹⁵−1 — o suficiente para deslocamentos e constantes pequenas, que são o caso comum.',
              accent: 'accent2',
            },
            {
              title: 'Formato J — desvio incondicional',
              description:
                'opcode(6) | endereço(26). Os 26 bits viram 32 assim: deslocam-se 2 bits à esquerda (as instruções estão alinhadas em 4 bytes, então os dois bits finais são sempre 00 e não precisam ser guardados) e herdam-se os 2 bits mais significativos do PC atual.',
              accent: 'accent3',
            },
          ]}
        />
        <div className="mt-4">
          <StatStrip
            items={[
              { label: '32', value: 'bits em toda instrução, sem exceção', accent: 'text-accent' },
              { label: '3', value: 'formatos: R, I e J', accent: 'text-accent2' },
              { label: '6', value: 'bits de opcode, sempre na mesma posição', accent: 'text-accent3' },
            ]}
          />
        </div>
      </Subsection>

      <Subsection title="Codificações resolvidas" accentClass="text-accent4">
        <ExampleBox title="add $t2, $t1, $t0 em binário">
          <p>
            Traduzindo os registradores para seus números: $t0 = 8, $t1 = 9, $t2 = 10. Como é uma instrução tipo
            R, o opcode é 0 e a operação vem do funct (0x20 para add). Não há deslocamento, então shamt = 0.
          </p>
          <CodeBlock
            language="mips"
            code={`# add $t2, $t1, $t0     →  rd = $t2, rs = $t1, rt = $t0

# op     rs      rt      rd     shamt   funct
# 000000 01001   01000   01010  00000   100000
#   0      9       8      10      0      0x20
#  (6)    (5)     (5)     (5)    (5)     (6)   = 32 bits`}
          />
          <p className="mt-3">
            Atenção à ordem: no assembly o <strong>destino vem primeiro</strong> (add rd, rs, rt), mas nos bits o{' '}
            <strong>destino é o terceiro campo</strong>. Confundir isso é o erro clássico da questão de
            codificação.
          </p>
        </ExampleBox>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'sub $s7, $t8, $t0',
              description:
                'Também tipo R: op = 0x0, rs = 24 ($t8), rt = 0, rd = 23 ($s7), shamt = 0, funct = 0x22 — só o funct muda em relação ao add.',
              accent: 'accent',
            },
            {
              title: 'addi $s1, $s2, 100',
              description:
                'Tipo I: op = 0x8, rs = 18 ($s2), rt = 17 ($s1) e constante = 100. No formato I, rt é o DESTINO, não uma segunda origem.',
              accent: 'accent2',
            },
            {
              title: 'beq $t0, $t1, 100',
              description:
                'Tipo I: op = 0x4, com os dois registradores comparados e a constante 100 funcionando como deslocamento relativo ao PC.',
              accent: 'accent3',
            },
            {
              title: 'j 245',
              description:
                'Tipo J: op = 0x2 e endereço = 245 nos 26 bits restantes. Sem registradores envolvidos.',
              accent: 'accent4',
            },
          ]}
        />
        <HighlightBox title="Por que carregar uma constante de 32 bits exige DUAS instruções" accent="var(--color-accent4)">
          <p>
            O campo imediato do formato I tem <strong>16 bits</strong> — e não pode ter mais, porque a instrução
            inteira tem 32 e o resto precisa acomodar opcode e registradores. Uma constante de 32 bits
            simplesmente não cabe.
          </p>
          <p>
            A solução é montá-la em duas etapas: <code className="text-accent2">lui</code> (load upper immediate)
            coloca os 16 bits altos, e <code className="text-accent2">ori</code> preenche os 16 baixos. É o preço
            direto do princípio "simplicidade favorece a regularidade": todas as instruções têm o mesmo tamanho,
            e nenhuma pode abrir exceção nem para uma constante grande.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Os cinco modos de endereçamento" accentClass="text-accent5">
        <TheoryBlock title="Onde está o operando?">
          <p>
            Modo de endereçamento é a resposta à pergunta "onde a instrução vai buscar o valor com que trabalha".
            O MIPS oferece cinco — poucos, em obediência ao princípio "menor é melhor".
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Imediato — addi $s2, $s1, 100',
              description:
                'O operando está na PRÓPRIA instrução, no campo imediato. Nenhum acesso à memória, nenhuma leitura extra de registrador: é o modo mais rápido que existe.',
              accent: 'accent',
            },
            {
              title: '2. Por registrador — add $t2, $t1, $t0',
              description:
                'Todos os operandos estão em registradores. Também não toca a memória. É o modo em que a arquitetura load-store quer que quase tudo aconteça.',
              accent: 'accent2',
            },
            {
              title: '3. Com base (ou deslocamento) — lw $t0, 8($s1)',
              description:
                'O endereço é a SOMA do conteúdo do registrador-base com a constante da instrução. É o que torna natural o acesso a vetores (base no início, constante escolhendo o elemento) e a campos de estruturas.',
              accent: 'accent3',
            },
            {
              title: '4. Relativo ao PC — beq $t0, $t1, 28',
              description:
                'O endereço de destino é o PC somado ao deslocamento da instrução. Como o alvo é expresso em distância e não em posição absoluta, o código pode ser carregado em qualquer lugar da memória e continuar correto — é o que o torna realocável.',
              accent: 'accent4',
            },
            {
              title: '5. Pseudodireto — j 300',
              description:
                'Os 26 bits de endereço da instrução, deslocados de 2 e concatenados com os bits altos do PC. Chama-se PSEUDO-direto justamente porque não é o endereço completo: parte dele vem do PC.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
