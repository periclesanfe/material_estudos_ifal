import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList } from '../../../components/sections';
import { journeyStages, guideMap, essentialFormulas } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A jornada de uma startup"
        subtitle="Empreendedorismo Digital não é um catálogo de definições — é a sequência de decisões que leva de um problema mal formulado a um negócio que se sustenta"
        colorClass="text-accent"
      />

      <HighlightBox title="Como este guia está organizado">
        <p>
          Os capítulos acompanham a jornada de uma startup. Primeiro se compreende o fenômeno empreendedor; depois se
          identifica uma oportunidade; em seguida se desenha e valida o modelo; por fim, mede-se a viabilidade,
          organiza-se o crescimento e apresenta-se o negócio a parceiros ou investidores.
        </p>
        <p>
          O objetivo não é memorizar definições, mas compreender as <strong>relações</strong> entre oportunidade, modelo
          de negócio, validação, arquitetura digital, aquisição, retenção, sustentabilidade financeira e captação. Nas
          seções com fórmulas, crie pelo menos um cenário numérico próprio antes de seguir adiante.
        </p>
      </HighlightBox>

      <Subsection title="As seis etapas" accentClass="text-accent2">
        <FlowDiagram items={journeyStages} />
      </Subsection>

      <Subsection title="Mapa das seções" accentClass="text-accent3">
        <PanelList items={guideMap} />
      </Subsection>

      <HighlightBox title="O que amarra tudo" accent="var(--color-accent3)">
        <p>
          A <strong>oportunidade</strong> define o problema; o <strong>Canvas</strong> organiza as hipóteses;
          <strong> Customer Development</strong> testa o mercado; <strong>Lean</strong> organiza a aprendizagem; o
          <strong> MVP</strong> operacionaliza o teste. Depois disso, a aquisição traz clientes, a retenção preserva o
          valor e o <strong>Unit Economics</strong> verifica se crescer é financeiramente saudável. A arquitetura
          digital influencia efeitos de rede, custos, escala e governança; o plano de negócio detalha operação e
          finanças; o pitch comunica a oportunidade; e o financiamento precisa corresponder ao estágio, à incerteza e à
          capacidade de gerar retorno.
        </p>
      </HighlightBox>

      <Subsection title="Formulário de consulta rápida" accentClass="text-accent4">
        <PanelList items={essentialFormulas} columns="" />
      </Subsection>

      <HighlightBox title="Lacunas conhecidas deste guia" accent="var(--color-accent2)">
        <p>
          A ementa do PPC inclui <strong>gerenciamento e negociação</strong>, <strong>qualidade e competitividade</strong>,{' '}
          <strong>marketing pessoal e empresarial</strong> e os <strong>mecanismos e procedimentos para criação de
          empresas</strong>. Esses tópicos não foram trabalhados na turma de 2026.1 e, como este guia se baseia no
          material real da disciplina, não têm seção própria — apenas menções laterais no plano de negócio. Estude-os
          pela bibliografia indicada abaixo.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte do conteúdo" accent="var(--color-accent5)">
        <p>
          Todo o material desta matéria foi resumido e reorganizado a partir dos PDFs, apresentações, vídeos e
          instruções de atividade do <strong>Prof. Anderson Rodrigues Gomes · Empreendedorismo Digital · BSI/IFAL ·
          2026.1</strong>. A bibliografia
          básica indicada no PPC é <em>A Startup Enxuta</em>, de Eric Ries; <em>O Empreendedor Viável</em>, de Carlos
          Matos e André Telles; e <em>Empreendedorismo: Dando Asas ao Espírito Empreendedor</em>, de Idalberto
          Chiavenato. Entre as complementares estão <em>O Segredo de Luísa</em> (Dolabela),{' '}
          <em>Empreendedorismo: Transformando Ideias em Negócios</em> (Dornelas) e <em>Empreendedorismo</em> (Hisrich,
          Peter e Shepherd).
        </p>
      </HighlightBox>
    </section>
  );
}
