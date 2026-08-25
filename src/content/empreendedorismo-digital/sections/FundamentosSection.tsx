import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { entrepreneurshipViews, keyAuthors, classicVsContemporary, siCompetencies, hardVsSoftSkills, tripleHelix, stakeholderInterests, economicContributions } from './blocks';

export default function FundamentosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fundamentos, Escolas e o Empreendedor de SI"
        subtitle="O que é empreender, quem são os autores que definiram o conceito e o que distingue quem consegue executá-lo em tecnologia"
        colorClass="text-accent"
      />

      <HighlightBox title="A definição que vale para a prova">
        <p>
          Empreender é <strong>identificar, construir e explorar uma oportunidade sob incerteza</strong>, mobilizando
          recursos para gerar valor. Abrir uma empresa pode ser consequência desse processo, mas não é sua definição
          completa — e é justamente por confundir as duas coisas que muita resposta perde ponto.
        </p>
        <p>
          A palavra vem do francês <em>entreprendre</em>, associada a assumir ou realizar uma iniciativa. Nos séculos
          XVII e XVIII, o termo designava agentes que assumiam contratos e riscos.
        </p>
      </HighlightBox>

      <Subsection title="Autores e ideias-chave" accentClass="text-accent2">
        <PanelList items={keyAuthors} columns="" />
      </Subsection>

      <HighlightBox title="Risco não é incerteza" accent="var(--color-accent2)">
        <p>
          A distinção de Frank Knight é a mais cobrada da seção. <strong>Risco</strong> admite probabilidades
          estimáveis: dá para calcular, precificar e até segurar. <strong>Incerteza</strong> envolve eventos cuja
          distribuição não se conhece — não há histórico do qual extrair a probabilidade.
        </p>
        <p>
          Uma operadora sabe estatisticamente quantos sinistros terá no ano: isso é risco. Ninguém sabe se um produto
          inédito terá demanda, a que preço e com que comportamento de uso: isso é incerteza. É por isso que uma startup
          não pode ser administrada apenas por previsões rígidas — o plano precisaria de dados que ainda não existem.
        </p>
      </HighlightBox>

      <Subsection title="As seis perspectivas sobre o fenômeno" accentClass="text-accent3">
        <ConceptGrid items={entrepreneurshipViews} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Clássico e contemporâneo" accentClass="text-accent4">
        <ComparisonTable
          rows={classicVsContemporary}
          leftLabel="Clássico"
          rightLabel="Contemporâneo"
          criterionLabel="Aspecto"
        />
      </Subsection>

      <HighlightBox title="A diferença não é moral" accent="var(--color-accent4)">
        <p>
          Um pequeno comércio pode ser excelente sem ser startup. A questão é a <strong>natureza do modelo</strong>: uma
          empresa tradicional executa um modelo relativamente conhecido; uma startup procura um modelo repetível,
          escalável e economicamente sustentável sob incerteza extrema. Dizer que todo negócio digital é startup é o
          erro clássico desta comparação.
        </p>
      </HighlightBox>

      <Subsection title="Competências do empreendedor em SI" accentClass="text-accent5">
        <ConceptGrid items={siCompetencies} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Hard skills e soft skills" accentClass="text-accent">
        <ComparisonTable
          rows={hardVsSoftSkills}
          leftLabel="Hard skills"
          rightLabel="Soft skills"
          criterionLabel="Dimensão"
        />
      </Subsection>

      <HighlightBox title="Cientista, engenheiro e líder" accent="var(--color-accent5)">
        <p>
          Em uma startup, o profissional de SI atua nos três papéis ao mesmo tempo. Como <strong>cientista</strong>,
          formula hipóteses e mede resultados. Como <strong>engenheiro</strong>, constrói sistemas confiáveis. Como
          <strong> líder</strong>, alinha pessoas e decisões.
        </p>
        <p>
          O erro frequente é deixar a identidade de engenheiro dominar: desenvolver muito antes de descobrir se alguém
          realmente precisa da solução. Domínio técnico não garante sucesso empreendedor — permite construir, não saber
          o que construir.
        </p>
      </HighlightBox>

      <Subsection title="O que a prática empreendedora traz para a economia" accentClass="text-accent4">
        <PanelList items={economicContributions} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Os agentes afetados e o que cada um enxerga" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-4 reading-measure">
          A ação empreendedora não interessa apenas a quem empreende. O mesmo empreendimento é lido de forma
          diferente por cada agente que ele toca — e reconhecer esses interesses é o que permite negociar
          parcerias, atrair investimento e sustentar licença social para operar.
        </p>
        <PanelList items={stakeholderInterests} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Hélice tríplice e ecossistema local" accentClass="text-accent2">
        <PanelList items={tripleHelix} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Olhar o território" accent="var(--color-accent3)">
        <p>
          Incubadoras, aceleradoras, comunidades, eventos e redes de mentoria reduzem assimetrias de informação e
          ampliam o acesso a recursos. Os casos <strong>Hand Talk</strong> e <strong>Trakto</strong>, ambos alagoanos,
          mostram como problemas locais podem originar produtos tecnológicos de alcance amplo.
        </p>
        <p>
          Limitações de acessibilidade, serviços públicos, pequenos negócios, logística e educação são fontes concretas
          de oportunidade para quem observa o próprio território em vez de copiar o que já existe em outro mercado.
        </p>
      </HighlightBox>
    </section>
  );
}
