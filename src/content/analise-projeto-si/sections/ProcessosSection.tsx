import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ProcessosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelos de Ciclo de Vida"
        subtitle="Cascata, incremental, iterativo, espiral e ágil — e a diferença que quase todo mundo confunde"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que existem tantos modelos">
        <p>
          Todo processo organiza as mesmas quatro atividades (especificação, projeto, validação e
          evolução) — o que muda é <strong>a ordem e a frequência</strong>. A motivação dos modelos
          iterativos é uma constatação simples: <strong>os requisitos evoluem durante o
          projeto</strong>. Um processo que exige congelá-los no início luta contra a realidade.
        </p>
      </TheoryBlock>

      <Subsection title="Métodos formais" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed">
          Baseados em técnicas <strong>matemáticas</strong> para especificar, desenvolver e
          verificar. A especificação formal é "provada" e depois transformada em código — o próprio
          processo garante que o programa faz exatamente o especificado, permitindo gerar{' '}
          <strong>programas corretos por construção</strong>. O custo é alto: na prática, aplicam-se
          apenas a <strong>sistemas críticos</strong>, em que uma falha custa vidas ou fortunas.
        </p>
      </Subsection>

      <Subsection title="Incremental × iterativo: a analogia da Monalisa" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Incremental"
          rightLabel="Iterativo"
          rows={[
            { criterion: 'O que cresce', left: 'PEDAÇOS COMPLETOS somados: a cabeça pronta, depois o corpo, depois o fundo', right: 'O quadro INTEIRO refinado: rascunho → esboço com sombras → pintura detalhada' },
            { criterion: 'Cada volta entrega', left: 'Parte da funcionalidade, acabada e utilizável', right: 'Uma versão melhorada do todo' },
            { criterion: 'Ideia central', left: 'Priorizar os requisitos mais críticos e entregá-los primeiro', right: 'Aceitar que a primeira versão está incompleta e melhorá-la' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          No <strong>desenvolvimento incremental</strong>, cada iteração funciona como um "mini
          projeto em cascata". As vantagens: o cliente recebe e avalia mais cedo, os desvios são
          identificados a tempo de replanejar, e o risco geral de fracasso cai. Na prática, os
          processos modernos combinam os dois — o RUP se define como{' '}
          <strong>"iterativo E incremental"</strong>.
        </p>
      </Subsection>

      <Subsection title="Iterativo × cascata" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed">
          O gráfico comparativo do material mostra o essencial: no <strong>iterativo</strong> o
          progresso sobe rápido e a <strong>falha tardia é minimizada</strong> — problemas aparecem
          cedo, quando ainda dá para corrigir. Na <strong>cascata</strong>, o avanço é lento e só
          chega perto de 100% às vésperas do prazo, exatamente quando descobrir um erro grave é mais
          caro.
        </p>
      </Subsection>

      <Subsection title="Modelo em espiral" accentClass="text-accent4">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Aqui o processo é uma <strong>espiral</strong>, não uma sequência: cada volta é uma fase e{' '}
          <strong>não há fases fixas</strong> — os loops são escolhidos conforme a necessidade. O
          diferencial é acrescentar a dimensão gerencial: planejamento, tomada de decisão e,
          sobretudo, <strong>análise de riscos</strong> a cada ciclo. Nas versões de{' '}
          <strong>Boehm</strong> (planejamento, análise de riscos, engenharia, avaliação do cliente)
          e <strong>Pressman</strong> (comunicação, planejamento, análise de risco, engenharia,
          construção e release, avaliação). O preço: é complexo e exige experiência real na
          avaliação de riscos.
        </p>
      </Subsection>

      <Subsection title="Métodos ágeis" accentClass="text-accent2">
        <PanelList
          columns=""
          items={[
            {
              title: 'Os quatro valores do Manifesto Ágil (2001)',
              description:
                'Indivíduos e interações MAIS QUE processos e ferramentas · Software funcionando MAIS QUE documentação completa e detalhada · Colaboração com o cliente MAIS QUE negociação de contratos · Adaptação a mudanças MAIS QUE seguir o plano inicial.',
            },
            {
              title: 'A ressalva que quase ninguém lê',
              description:
                '"Mesmo tendo valor os itens à direita, valorizamos mais os itens à esquerda." Documentação, contrato e plano continuam tendo valor — apenas não vencem quando há conflito.',
            },
            {
              title: 'A família ágil',
              description: 'eXtreme Programming (XP), Scrum, FDD (Feature Driven Development) e Lean Software Development.',
            },
          ]}
        />
        <ExampleBox title="O mito: ágil não é caos">
          <p>
            O material traz uma tirinha do Dilbert em que a equipe entende "ágil" como{' '}
            <em>"chega de planejamento e de documentação — vamos escrever código e reclamar"</em>. A
            correção é explícita: <strong>metodologia ágil não é o caos</strong>. Ágil é iterativo,
            disciplinado e orientado a entregar software funcionando — o oposto de improviso.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Escolhendo um processo" accent="var(--color-accent3)">
        <p>
          Não há modelo universalmente melhor. Sistemas críticos pedem formalidade; domínios
          instáveis pedem iterações curtas; projetos grandes e contratuais se beneficiam da estrutura
          do RUP. O critério prático é o <strong>risco</strong>: quanto maior a incerteza sobre os
          requisitos, mais curto deve ser o ciclo de feedback.
        </p>
      </HighlightBox>
    </section>
  );
}
