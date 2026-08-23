import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function AssociacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Regras de Associação"
        subtitle="Suporte, confiança e lift — e por que a confiança sozinha engana"
        colorClass="text-accent"
      />

      <TheoryBlock title="Market basket analysis">
        <p>
          Regras de associação buscam <strong>relações entre itens</strong>: "98% de quem comprou
          A e B também comprou C". A aplicação clássica é a <strong>análise de cesta de
          compras</strong>, mas o método serve a qualquer domínio com transações — filmes
          assistidos, sintomas de pacientes, produtos de um e-commerce.
        </p>
        <p>
          Uma regra tem a forma <strong>A → B</strong>, onde A é o <strong>antecedente</strong> e
          B o <strong>consequente</strong>. Três métricas decidem se a regra vale alguma coisa.
        </p>
      </TheoryBlock>

      <Subsection title="As três métricas" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'SUPORTE',
              description: 'A FREQUÊNCIA do itemset: a proporção de transações que contêm aqueles itens. Suporte(A∪B) = transações com A e B ÷ total. Mede se a regra é relevante em volume.',
              accent: 'accent',
            },
            {
              title: 'CONFIANÇA',
              description: 'A probabilidade CONDICIONAL P(B|A) = Suporte(A∪B) ÷ Suporte(A). Responde: "dentre quem levou A, que fração levou B?". Cuidado — pode enganar.',
              accent: 'accent2',
            },
            {
              title: 'LIFT',
              description: 'Lift(A→B) = Confiança(A→B) ÷ Suporte(B). Corrige a confiança pela popularidade do consequente: mede quanto A realmente MUDA a chance de B.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Exemplo resolvido: cebola e ovos" accentClass="text-accent3">
        <CodeBlock
          language="python"
          title="Cinco transações de supermercado"
          code={`# T1: Leite, Cebola, Batata, Feijão, Ovos, Iogurte
# T2: Arroz, Cebola, Batata, Feijão, Ovos, Iogurte
# T3: Leite, Maçã, Feijão, Ovos
# T4: Leite, Cerveja, Milho, Feijão, Iogurte
# T5: Milho, Cebola, Feijão, Sorvete, Ovos

Suporte({Cebola})        = 3/5 = 0,6     # cebola em 3 das 5 transações
Suporte({Ovos})          = 4/5 = 0,8
Suporte({Cebola, Ovos})  = 3/5 = 0,6     # as duas juntas

Confiança({Cebola} -> {Ovos}) = 0,6 / 0,6 = 1,0    # 100%!
Lift({Cebola} -> {Ovos})      = 1,0 / 0,8 = 1,25`}
        />
        <ExampleBox title="A leitura correta">
          <p>
            A confiança de <strong>100%</strong> parece espetacular — toda transação com cebola
            tinha ovos. Mas ovos aparecem em 80% das transações de qualquer jeito! O{' '}
            <strong>lift de 1,25</strong> dá a medida honesta: comprar cebola aumenta em{' '}
            <strong>25%</strong> a chance de comprar ovos em relação ao acaso. Associação real,
            porém bem mais modesta do que a confiança sugeria.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Interpretando o lift" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Valor"
          leftLabel="Significado"
          rightLabel="Leitura de negócio"
          rows={[
            { criterion: 'Lift > 1', left: 'Associação POSITIVA: A aumenta a probabilidade de B (quanto maior, mais forte)', right: 'Itens complementares — candidatos a exposição conjunta ou recomendação' },
            { criterion: 'Lift = 1', left: 'INDEPENDÊNCIA: A não tem impacto nenhum sobre B', right: 'A regra não informa nada; a coocorrência é só o acaso' },
            { criterion: 'Lift < 1', left: 'Associação NEGATIVA: A diminui a probabilidade de B', right: 'Itens substitutos — quem leva um tende a não levar o outro' },
          ]}
        />
      </Subsection>

      <Subsection title="O algoritmo Apriori" accentClass="text-accent4">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          O Apriori se apoia na <strong>propriedade anti-monotônica</strong> (ou fechamento para
          baixo): <strong>se um conjunto de itens é frequente, todos os seus SUBCONJUNTOS também
          são</strong>. A contrapositiva é o que economiza trabalho — se {'{'}pão, leite{'}'} não
          atinge o suporte mínimo, nenhum conjunto que o contenha atingirá, e toda essa
          ramificação é <strong>podada</strong> sem precisar ser contada.
        </p>
        <CodeBlock
          language="python"
          title="Na prática, com a biblioteca apyori"
          code={`from apyori import apriori

regras = apriori(transacoes,
                 min_support=0.5,      # suporte mínimo
                 min_confidence=0.5,   # confiança mínima
                 min_length=2)         # ao menos 2 itens na regra

# cada resultado traz: items (o itemset), support e, em ordered_statistics:
#   items_base  -> o ANTECEDENTE
#   items_add   -> o CONSEQUENTE
#   confidence  -> a confiança
#   lift        -> o lift`}
        />
        <HighlightBox title="Limitação e alternativa" accent="var(--color-accent4)">
          <p>
            O Apriori exige <strong>múltiplas passagens</strong> pelo banco para contar os
            suportes de cada nível de itemset — trabalha na horizontal, como uma busca em
            largura. Em bases muito grandes isso fica lento. O <strong>ECLAT</strong> inverte a
            estratégia: percorre na <strong>vertical</strong> (busca em profundidade),
            intersectando <em>tidsets</em> — os conjuntos de IDs de transação —, o que o torna
            mais rápido e escalável.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
