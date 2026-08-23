import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, ExampleBox } from '../../../components/sections';

export default function EquivalenciaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Propriedades e Classes de Equivalência"
        subtitle="Quatro propriedades que geram duas estruturas fundamentais"
        colorClass="text-accent4"
        badge="Estruturas discretas"
      />

      <Subsection title="As quatro propriedades" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'REFLEXIVA',
              description:
                'Todo elemento se relaciona consigo mesmo. "Tem a mesma idade que" é reflexiva: toda pessoa tem a mesma idade que ela própria.',
            },
            {
              title: 'SIMÉTRICA',
              description:
                'Se a se relaciona com b, então b se relaciona com a. "É irmão de" é simétrica; "é pai de" não é.',
            },
            {
              title: 'TRANSITIVA',
              description:
                'Se a se relaciona com b e b com c, então a se relaciona com c. "É ancestral de" é transitiva; "é pai de" não é — o pai do pai é avô, não pai.',
            },
            {
              title: 'ANTISSIMÉTRICA',
              description:
                'Se a se relaciona com b E b com a, então a e b são o mesmo elemento. "É menor ou igual a" é antissimétrica: se x ≤ y e y ≤ x, então x = y.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Duas combinações que têm nome" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'RELAÇÃO DE EQUIVALÊNCIA',
              description:
                'Reflexiva + SIMÉTRICA + transitiva. Captura a ideia de "ser do mesmo tipo que" — e particiona o conjunto em blocos.',
              accent: 'accent',
            },
            {
              title: 'RELAÇÃO DE ORDEM PARCIAL',
              description:
                'Reflexiva + ANTISSIMÉTRICA + transitiva. Captura a ideia de "vem antes de" — e permite ordenar, ainda que nem todo par seja comparável.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A diferença entre as duas é uma única propriedade — simetria contra antissimetria — e ela muda
          completamente a estrutura resultante. Trocar uma pela outra é o erro mais frequente na prova.
        </p>
      </Subsection>

      <HighlightBox title="O que uma relação de equivalência produz" accent="var(--color-accent5)">
        <p>
          Toda relação de equivalência <strong>particiona</strong> o conjunto em{' '}
          <strong>classes de equivalência</strong>: subconjuntos <strong>disjuntos</strong> (sem elementos em
          comum) cuja <strong>união é o conjunto todo</strong>.
        </p>
        <p>
          Cada elemento pertence a exatamente uma classe — a dos elementos equivalentes a ele. Não sobra nada
          fora, e nada pertence a duas classes ao mesmo tempo.
        </p>
      </HighlightBox>

      <Subsection title="O exemplo canônico: congruência módulo n" accentClass="text-accent5">
        <ExampleBox title="Módulo 3 divide os inteiros em três classes">
          <p>
            Dois inteiros são <strong>congruentes módulo 3</strong> quando deixam o <strong>mesmo resto</strong>{' '}
            na divisão por 3. Verifica-se facilmente que a relação é reflexiva, simétrica e transitiva — logo, é
            de equivalência.
          </p>
          <p>
            As classes são exatamente três: <strong>resto 0</strong> (…, 0, 3, 6, 9, …),{' '}
            <strong>resto 1</strong> (…, 1, 4, 7, 10, …) e <strong>resto 2</strong> (…, 2, 5, 8, 11, …).
          </p>
          <p>
            Todo inteiro está em uma delas, e em nenhuma outra. A partição é perfeita — e generaliza para
            qualquer <InlineFormula>n</InlineFormula>, produzindo <InlineFormula>n</InlineFormula> classes.
          </p>
        </ExampleBox>
        <FormulaBlock
          label="Congruência módulo n"
          accent="accent5"
          caption="a e b são congruentes módulo n quando a diferença entre eles é múltipla de n."
        >
          a <span className="op">≡</span> b (mod n) <span className="op">⟺</span> n | (a{' '}
          <span className="op">−</span> b)
        </FormulaBlock>
      </Subsection>

      <Subsection title="Onde isso aparece em computação" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Tabelas de hash',
              description:
                'A função de hash mais simples é o resto da divisão pelo tamanho da tabela. Cada bucket é literalmente uma classe de equivalência módulo n — e colisão é ter dois elementos na mesma classe.',
              accent: 'accent',
            },
            {
              title: 'Ordenação topológica',
              description:
                'Relações de ordem parcial modelam dependências: qual módulo compila antes de qual, qual tarefa precede qual. É como compiladores e gerenciadores de pacotes decidem a ordem de execução.',
              accent: 'accent3',
            },
            {
              title: 'Criptografia',
              description:
                'A aritmética modular é a base do RSA e de boa parte da criptografia de chave pública — operar dentro das classes de resto é o que torna certas contas fáceis num sentido e difíceis no outro.',
              accent: 'accent4',
            },
            {
              title: 'Deduplicação e agrupamento',
              description:
                'Qualquer operação de "agrupar por" define uma relação de equivalência: os registros ficam particionados em classes pelo valor da chave.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
