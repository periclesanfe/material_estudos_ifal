import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';

export default function EngenhariaSoftwareSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Engenharia de Software"
        subtitle="O que é, o que não é, e por que ela nasceu de uma crise"
        colorClass="text-accent"
      />

      <TheoryBlock title="Software, bom software e engenharia">
        <p>
          Na definição de Sommerville, <strong>software é o programa MAIS a documentação
          associada</strong> — a documentação não é um extra, é parte do produto. E um{' '}
          <strong>bom software</strong> entrega a funcionalidade e o desempenho de que o usuário
          precisa sendo <strong>mantível, confiável e usável</strong>.
        </p>
        <p>
          <strong>Engenharia de software</strong> é a disciplina de engenharia preocupada com{' '}
          <em>todos</em> os aspectos da produção de software — gerenciais e tecnológicos — buscando
          uma abordagem sistemática e organizada. Como resume o material:{' '}
          <strong>"desenvolver software NÃO É APENAS programação"</strong>. O SWEBOK formaliza:
          "a aplicação de uma abordagem <strong>sistemática, disciplinada e quantificável</strong>{' '}
          ao desenvolvimento, operação e manutenção de software".
        </p>
      </TheoryBlock>

      <Subsection title="As quatro atividades fundamentais" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: '1 · Especificação', description: 'Definir O QUE o sistema deve fazer e sob quais restrições — é o território da engenharia de requisitos.', accent: 'accent' },
            { title: '2 · Projeto', description: 'Definir COMO o sistema fará: estrutura de classes, interações e arquitetura. O coração desta disciplina.', accent: 'accent2' },
            { title: '3 · Validação', description: 'Verificar se o que foi construído atende ao que foi especificado — testes, revisões, aceitação.', accent: 'accent3' },
            { title: '4 · Evolução', description: 'Mudar o software conforme as necessidades mudam. É onde ele passa a maior parte da vida — daí "mantível" ser critério de qualidade.', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <Subsection title="Engenharia de software × engenharia de sistemas" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed">
          A <strong>engenharia de sistemas</strong> é o campo maior: cuida de todos os aspectos de
          sistemas baseados em computador — software, <em>hardware</em>, processos, pessoas e a
          integração com outros sistemas. A engenharia de software é <strong>parte</strong> desse
          esforço, focada em produzir software de qualidade. Os objetivos, em uma frase: qualidade
          e produtividade dentro de custos, prazos e níveis de qualidade <em>controlados</em>.
        </p>
      </Subsection>

      <Subsection title="De onde viemos: a crise do software" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            { title: 'Anos 60 — a crise', description: 'O desenvolvimento fora de controle apareceu como problema de custo e produtividade, mas o diagnóstico central foi a QUALIDADE. É a origem da disciplina.' },
            { title: 'Anos 70 — estruturação', description: 'Programação estruturada e projeto estruturado: disciplinar o código.' },
            { title: 'Anos 80 — análise e ferramentas', description: 'Análise estruturada (DFDs, dicionário de dados, diagramas ER e de estados) e as ferramentas CASE.' },
            { title: 'Anos 90 — orientação a objetos', description: 'Análise e projeto OO, modelagem próxima do mundo real e o Processo Unificado (RUP).' },
            { title: 'Anos 2000 em diante', description: 'Métodos ágeis, SOA e aspectos, arquiteturas dirigidas por modelo e por domínio, microsserviços, DevOps e cloud.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Processo: quem faz o quê, quando e como" accent="var(--color-accent3)">
        <p>
          <strong>Processo</strong> é uma série conectada de ações com a intenção de satisfazer um
          objetivo — define <em>quem</em> está fazendo <em>o quê</em>, <em>quando</em> e{' '}
          <em>como</em>. Um <strong>processo de software</strong> é o conjunto estruturado de
          atividades para desenvolver um sistema: especificação, projeto, validação e evolução. As
          próximas seções mostram as formas de organizar essas atividades — do cascata ao ágil,
          passando pelo RUP.
        </p>
      </HighlightBox>
    </section>
  );
}
