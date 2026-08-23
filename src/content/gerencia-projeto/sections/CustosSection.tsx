import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CustosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Custos e Valor Agregado"
        subtitle="Três números e quatro fórmulas que respondem se o projeto está caro, atrasado — ou as duas coisas"
        colorClass="text-accent"
        badge="Caminho Crítico"
      />

      <TheoryBlock title="Por que gasto não mede progresso">
        <p>
          Comparar o quanto se gastou com o quanto se planejou gastar não diz nada sobre o projeto. Gastar menos
          que o previsto pode significar economia — ou que quase nada foi feito. Gastar mais pode significar
          desperdício — ou que se adiantou trabalho.
        </p>
        <p>
          A <strong>Análise de Valor Agregado</strong> resolve isso introduzindo um terceiro número: quanto vale
          o trabalho <em>efetivamente realizado</em>. Com três grandezas na mesma unidade — dinheiro — passa a
          ser possível separar o desempenho de prazo do desempenho de custo.
        </p>
      </TheoryBlock>

      <Subsection title="Os três valores-chave" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'VP — Valor Planejado',
              description:
                'O valor planejado referente à data de avaliação: quanto de trabalho, em dinheiro, deveria estar pronto agora segundo o plano.',
              accent: 'accent',
            },
            {
              title: 'CA — Custo Atual',
              description:
                'O valor efetivamente aplicado no trabalho realizado até o momento. É o que saiu do caixa (com ressalvas — veja abaixo).',
              accent: 'accent2',
            },
            {
              title: 'VA — Valor Agregado',
              description:
                'O VALOR DO TRABALHO REALIZADO. Calcula-se como VA = progresso físico [%] × valor orçado [$]. É a grandeza que traduz progresso em dinheiro.',
              accent: 'accent3',
            },
          ]}
        />
        <HighlightBox title="Medir o CA é mais difícil do que parece" accent="var(--color-accent4)">
          <p>
            O material lista quatro complicações que separam "custo" de "desembolso": pagamentos{' '}
            <strong>antecipados</strong> ao trabalho; geração de <strong>estoque</strong>; trabalhos já
            realizados e <strong>ainda não pagos</strong> (contas a pagar, ou pagamento só na entrega); e{' '}
            <strong>custos econômicos</strong> sem desembolso direto no projeto — como a hora de um servidor já
            contratado.
          </p>
          <p>
            Ou seja: olhar o extrato bancário não dá o CA. Ele exige apropriar custo ao período em que o trabalho
            aconteceu, e não ao período em que o dinheiro se moveu.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As quatro fórmulas" accentClass="text-accent3">
        <ExampleBox title="Duas variações e dois índices">
          <CodeBlock
            language="python"
            code={`# VARIAÇÕES — resultado em DINHEIRO, negativo é ruim
VC  = VA - CA     # Variação no Custo:      trabalho feito - dinheiro gasto
VCr = VA - VP     # Variação no Cronograma: trabalho feito - trabalho previsto

# ÍNDICES — resultado adimensional, menor que 1 é ruim
IDT = VA / VP     # Indicador de Desempenho de Tempo
IDC = VA / CA     # Indicador de Desempenho de Custo`}
          />
          <p className="mt-3">
            Repare no padrão que evita decorar: o <strong>VA está sempre no numerador</strong> (ou como primeiro
            termo). O que muda é o par de comparação — <strong>VP para prazo</strong>, <strong>CA para
            custo</strong>. As subtrações dão o desvio em reais; as divisões dão a eficiência relativa.
          </p>
          <p className="text-sm">
            Leituras dadas pelo próprio material: um IDT de 0,85 indica 15% de perda de tempo na produção de
            trabalho; um IDC de 0,95 indica que 95% dos recursos financeiros aplicados foram convertidos em
            trabalho.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="O modelo semáforo" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Condição"
          rightLabel="Leitura"
          criterionLabel="Diagnóstico"
          rows={[
            { criterion: '🔴 PROBLEMA', left: 'IDC < 1  E  IDT < 1', right: 'Acima do orçamento E atrasado — as duas dimensões ruins ao mesmo tempo' },
            { criterion: '🟡 ALERTA', left: 'IDC < 1  OU  IDT < 1', right: 'Uma das duas dimensões fora do previsto; exige investigar a causa' },
            { criterion: '🟢 OK', left: 'IDC ≥ 1  E  IDT ≥ 1', right: 'Dentro do prazo e dos custos estabelecidos' },
          ]}
        />
      </Subsection>

      <Subsection title="Como medir o progresso físico" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Avaliação física de avanço',
              description:
                'Estabelece um parâmetro físico mensurável. O exemplo do material: num muro de 1.000 m², foram medidos 300 m² — avanço de 30%. É o método mais objetivo, quando existe algo contável.',
              accent: 'accent',
            },
            {
              title: 'Marcos fixos',
              description:
                'Divide o pacote em dois pontos: 0% não iniciado, 50% iniciado, 100% encerrado (ou 25/75, ou 20/80). Grosseiro, mas imune à estimativa otimista do "está quase pronto".',
              accent: 'accent2',
            },
            {
              title: 'Marcos percentual completo',
              description:
                'Atribui percentuais a etapas. Exemplo: pesquisa preliminar até 5 dias = 10%; projeto básico até 15 dias = 60%; aprovação inicial até 25 dias = 70%; emissão final até 35 dias = 90%; emissão para construção até 40 dias = 100%.',
              accent: 'accent3',
            },
            {
              title: 'Marcos com valores ponderados',
              description:
                'Cada marco recebe um valor em dinheiro. No mesmo exemplo de engenharia: R$ 2.000, R$ 3.000, R$ 1.000, R$ 2.000 e R$ 1.000 — totalizando R$ 9.000.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O exemplo resolvido — e por que ele é o melhor do material" accentClass="text-accent">
        <ExampleBox title="Pacote “Formação de multiplicadores”">
          <CodeBlock
            language="python"
            code={`# Marcos críticos do pacote (peso do trabalho, prazo, valor)
1. Levantamento da demanda      10%   até  2s   R$  5,0K
2. Plano didático metodológico  25%   até  5s   R$ 12,5K
3. Professores selecionados     15%   até  5s   R$  3,5K
4. Aulas realizadas             40%   até 11s   R$ 22,5K
5. Avaliação                    10%   até 12s   R$  2,0K

# Relatório de monitoramento, na semana 7 (data de análise):
#   planejado: início 0, fim 12s, custo R$ 50K
#   execução:  início 0, status 50%, custo R$ 31K

VP = marcos 1+2+3 (previstos até a semana 7) = 10% + 25% + 15% = 50%  →  R$ 21,0K
VA = progresso físico x valor orçado = 50% x R$ 50K                   →  R$ 25,0K
CA = informado no relatório                                           →  R$ 31,0K

VC  = VA - CA = 25 - 31 = -6,0K    → gastou-se mais do que o trabalho vale
VCr = VA - VP = 25 - 21 = +4,0K    → há mais trabalho pronto que o previsto
IDT = VA / VP = 25 / 21 = 1,19     → ADIANTADO
IDC = VA / CA = 25 / 31 = 0,81     → só 81% do dinheiro virou trabalho

Semáforo: IDC < 1 mas IDT >= 1  →  🟡 ALERTA`}
          />
        </ExampleBox>
        <HighlightBox title="O que este resultado ensina">
          <p>
            O projeto está <strong>adiantado no cronograma E acima do orçamento — ao mesmo tempo</strong>. Se
            você olhasse apenas o prazo, comemoraria; se olhasse apenas o gasto, entraria em pânico. Nenhuma das
            duas leituras isoladas contaria a história.
          </p>
          <p>
            A interpretação mais plausível é que se <strong>comprou velocidade com dinheiro</strong>: mais
            recursos foram alocados e o trabalho andou mais rápido, a um custo unitário maior. Isso pode ser uma
            decisão consciente e correta — se o prazo importava mais que o custo — ou um descontrole que ninguém
            percebeu. A análise não decide por você; ela mostra o que exige explicação.
          </p>
        </HighlightBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Uma inconsistência do material, digna de nota:</strong> a soma dos valores dos cinco marcos dá
          R$ 45,5K, enquanto o orçamento do pacote no relatório é R$ 50K. Os slides não explicam a diferença de
          R$ 4,5K. O cálculo do VA aqui usa o valor orçado do pacote (R$ 50K), como o próprio relatório de
          monitoramento indica — mas vale saber que os números da fonte não fecham perfeitamente.
        </p>
      </Subsection>

      <Subsection title="Projetar o orçamento final" accentClass="text-accent2">
        <ExampleBox title="Três cenários, três fórmulas">
          <CodeBlock
            language="python"
            code={`# (a) DESCRÉDITO no orçamento — assume-se que o planejamento estava errado
#     e se replaneja todo o trabalho restante
OPF = CA + EOP        # EOP recalculado do zero

# (b) CONFIANÇA no orçamento — a ineficiência foi pontual, o resto segue o plano
OPF = CA + OP - VA
#   = 31 + 50 - 25 = R$ 56K

# (c) MESMA TENDÊNCIA — a ineficiência observada vai continuar
OPF = CA + (OP - VA) / IDC
#   = 31 + (50 - 25) / 0,806 = R$ 62K`}
          />
          <p className="mt-3">
            A diferença entre R$ 56K e R$ 62K é exatamente a pergunta gerencial que a análise coloca:{' '}
            <strong>o que aconteceu até aqui vai continuar acontecendo?</strong> Se o estouro veio de um problema
            já resolvido, vale o cenário (b); se veio de uma subestimação sistemática, o (c) é o realista — e a
            diferença de R$ 6K precisa aparecer no orçamento agora, não na última semana.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Definições auxiliares: <strong>OP</strong> (Orçamento do Projeto) é a linha de base de custo, o valor
          orçado para o projeto no seu final; <strong>OPF</strong> é o valor final após a revisão; e{' '}
          <strong>EOP</strong> é, dada a data de análise, o valor que <em>falta</em> para completar o trabalho.
        </p>
      </Subsection>
    </section>
  );
}
