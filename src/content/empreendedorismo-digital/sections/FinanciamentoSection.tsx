import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ExampleBox } from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import { fundingSources, fundingMatrix, crowdfundingTypes, stageToFunding } from './blocks';

export default function FinanciamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Financiamento de Startups"
        subtitle="A fonte de capital altera velocidade, controle, governança, risco e expectativa de saída — não existe fonte melhor, existe adequação ao estágio"
        colorClass="text-accent4"
        badge="Financiamento"
      />

      <Subsection title="As quatro fontes" accentClass="text-accent">
        <ConceptGrid items={fundingSources} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Comparando as fontes critério a critério" accentClass="text-accent2">
        <CriteriaMatrix
          criterionLabel="Critério"
          headers={['Bootstrapping', 'Investidor-anjo', 'Venture Capital', 'Crowdfunding']}
          rows={fundingMatrix}
          caption="Nenhuma coluna é a resposta certa: a pergunta é sempre qual delas corresponde ao estágio, à incerteza e à ambição do negócio."
        />
      </Subsection>

      <HighlightBox title="Diluição — e quando ela é racional" accent="var(--color-accent2)">
        <p>
          <strong>Diluição</strong> é a redução percentual da participação dos sócios quando novas quotas ou ações são
          emitidas. Ela pode ser perfeitamente racional se o investimento aumentar o valor total da empresa em proporção
          superior à participação cedida.
        </p>
        <p>
          O risco não é diluir: é trocar participação e controle <em>sem clareza</em> sobre o uso do capital e os marcos
          de crescimento que ele deveria comprar.
        </p>
      </HighlightBox>

      <ExampleBox title="Diluição em números">
        <p>
          Dois sócios detêm 100% de uma empresa avaliada em R$ 1.000.000. Um investidor aporta R$ 250.000 por 20% do
          capital — o que implica avaliar a empresa em R$ 1.250.000 depois do aporte.
        </p>
        <p>
          Se cada sócio tinha 50%, cada um passa a ter 40%. Em percentual, perderam. Em valor, a fatia de cada um saiu
          de R$ 500.000 (50% de 1 milhão) para R$ 500.000 (40% de 1,25 milhão) — <strong>empataram</strong>, e só saem
          ganhando se o capital fizer a empresa valer mais do que R$ 1,25 milhão. É essa a conta que precisa fechar
          antes de assinar.
        </p>
      </ExampleBox>

      <HighlightBox title="Instrumentos conversíveis" accent="var(--color-accent3)">
        <p>
          Um instrumento conversível <strong>posterga a definição do valuation</strong>: o aporte entra agora e converte
          em participação numa rodada futura, segundo desconto, teto (<em>cap</em>) ou outras condições acordadas.
        </p>
        <p>
          É útil justamente quando precificar a empresa hoje seria arbitrário — estágio muito inicial, sem métricas —
          e negociar o valuation consumiria mais tempo e confiança do que o aporte justifica.
        </p>
      </HighlightBox>

      <Subsection title="As três modalidades de crowdfunding" accentClass="text-accent5">
        <CriteriaMatrix
          criterionLabel="Modalidade"
          headers={['O que o apoiador recebe', 'O que valida', 'Risco principal']}
          rows={crowdfundingTypes}
          caption="Além de capital, o crowdfunding produz marketing e comunidade — e, na mesma medida, expõe a ideia e cria obrigação com muitos apoiadores ao mesmo tempo."
        />
      </Subsection>

      <Subsection title="Que fonte para que estágio" accentClass="text-accent">
        <CriteriaMatrix
          criterionLabel="Estágio"
          headers={['Fontes adequadas', 'Por quê']}
          rows={stageToFunding}
          caption="A regra geral: quanto maior a incerteza, mais barato precisa ser o capital em termos de controle cedido."
        />
      </Subsection>

      <HighlightBox title="Por que VC pode ser inadequado a uma empresa lucrativa" accent="var(--color-accent5)">
        <p>
          Um fundo de venture capital precisa que <em>alguns</em> investimentos devolvam muitas vezes o capital, porque
          a maioria não devolve nada. Isso exige empresas com potencial de escala compatível com o tamanho do fundo e um
          evento de liquidez — venda ou abertura de capital — num horizonte determinado.
        </p>
        <p>
          Uma empresa lucrativa, estável e de crescimento moderado é um <strong>ótimo negócio</strong> e um péssimo
          ativo de VC: não entrega o múltiplo esperado nem a saída no prazo do fundo. Recusar VC nesse caso é decisão
          acertada, não falta de ambição.
        </p>
      </HighlightBox>
    </section>
  );
}
