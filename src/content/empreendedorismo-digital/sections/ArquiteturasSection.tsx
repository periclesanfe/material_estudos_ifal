import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import CriteriaMatrix from './CriteriaMatrix';
import {
  pipelineVsPlatform,
  networkEffects,
  marketplaceRequirements,
  saasEconomics,
  ecommerceLayers,
  ecommerceTraits,
  ecommerceModalities,
  tamVsEcm,
} from './blocks';

export default function ArquiteturasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arquiteturas Digitais e Comércio Eletrônico"
        subtitle="Como tecnologia, participantes, dados, receitas e custos se combinam para produzir valor — e por que a escolha da arquitetura decide a economia do negócio"
        colorClass="text-accent2"
        badge="Estudo de caso"
      />

      <Subsection title="Pipeline ou plataforma?" accentClass="text-accent">
        <ComparisonTable
          rows={pipelineVsPlatform}
          leftLabel="Pipeline"
          rightLabel="Plataforma"
          criterionLabel="Aspecto"
        />
      </Subsection>

      <Subsection title="Efeitos de rede" accentClass="text-accent3">
        <ConceptGrid items={networkEffects} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Liquidez importa mais que usuários" accent="var(--color-accent3)">
        <p>
          <strong>Liquidez</strong> é a capacidade de encontrar contraparte adequada em tempo aceitável. Crescer o
          número de usuários sem densidade de oferta e demanda <em>piora</em> a experiência: mais gente procurando o que
          ninguém oferece.
        </p>
        <p>
          É por isso que marketplaces costumam crescer por cidade, categoria ou nicho antes de abrir tudo — densidade
          local vale mais que alcance disperso.
        </p>
      </HighlightBox>

      <Subsection title="O que um marketplace precisa ter" accentClass="text-accent4">
        <PanelList items={marketplaceRequirements} />
      </Subsection>

      <Subsection title="A economia do SaaS" accentClass="text-accent5">
        <PanelList items={saasEconomics} />
      </Subsection>

      <HighlightBox title="Rule of 40" accent="var(--color-accent5)">
        <p>
          <strong>Rule of 40 = crescimento percentual anual + margem operacional percentual.</strong> A heurística diz
          que os dois somados deveriam beirar 40: uma empresa pode crescer 50% com margem de −10%, ou crescer 15% com
          margem de 25%, e as duas passam.
        </p>
        <p>
          Não é lei universal — estágio e mercado importam, e uma empresa muito jovem raramente atinge o número. Serve
          como semáforo, não como veredicto.
        </p>
      </HighlightBox>

      <Subsection title="As três camadas do comércio eletrônico" accentClass="text-accent">
        <ConceptGrid items={ecommerceLayers} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="E-commerce e e-business não são a mesma coisa" accent="var(--color-accent2)">
        <p>
          <strong>E-commerce</strong> é a transação comercial por meios digitais — a compra e a venda.{' '}
          <strong>E-business</strong> abrange processos, integração, relacionamento e gestão digital, que podem ir muito
          além da transação: um ERP, um CRM ou a integração com fornecedores são e-business sem serem e-commerce.
        </p>
      </HighlightBox>

      <Subsection title="Características do comércio digital" accentClass="text-accent3">
        <PanelList items={ecommerceTraits} />
      </Subsection>

      <Subsection title="Adoção e continuidade" accentClass="text-accent4">
        <ComparisonTable
          rows={tamVsEcm}
          leftLabel="TAM — Technology Acceptance Model"
          rightLabel="ECM — Expectation-Confirmation Model"
          criterionLabel="Aspecto"
        />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          Os dois modelos explicam <strong>momentos diferentes</strong> da jornada, e é assim que costumam ser cobrados.
          Segurança, privacidade, prova social, transparência e suporte reduzem o risco percebido em ambos.
        </p>
      </Subsection>

      <Subsection title="Modalidades" accentClass="text-accent5">
        <CriteriaMatrix
          criterionLabel="Modalidade"
          headers={['Quem oferece', 'Quem recebe', 'Exemplo']}
          rows={ecommerceModalities}
          caption="As siglas descrevem quem está em cada ponta da transação — não o tipo de produto nem o canal usado."
        />
      </Subsection>

      <HighlightBox title="O contexto brasileiro muda o desenho" accent="var(--color-accent4)">
        <p>
          Logística, desigualdade de conectividade, meios de pagamento, tributação e LGPD moldam modelos digitais no
          Brasil de forma que a referência internacional não captura. Casos como VTEX, Magalu, Conta Azul e Omie mostram
          estratégias de plataforma, comércio e SaaS adaptadas ao ambiente local.
        </p>
        <p>
          Esta seção conversa diretamente com a matéria <strong>Marketing e Comércio Eletrônico</strong>, que aprofunda
          a frente de loja, os canais e a jornada de compra.
        </p>
      </HighlightBox>
    </section>
  );
}
