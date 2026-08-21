import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function OQueEProjetoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O que é um Projeto"
        subtitle="Uma definição de duas palavras — temporário e único — com mais consequências do que parece"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <TheoryBlock title="A definição do PMBOK">
        <p className="text-lg text-text">
          Projeto é um <strong className="text-accent">esforço temporário</strong> empreendido para criar um{' '}
          <strong className="text-accent2">produto, serviço ou resultado exclusivo</strong>.
        </p>
        <p>
          Duas palavras carregam a definição inteira. <strong>Temporário</strong> significa que há início e fim
          determinados — não que seja curto. <strong>Exclusivo</strong> significa que a entrega é única: mesmo
          construindo o vigésimo prédio, aquele terreno, aquele cliente e aquela equipe formam uma combinação
          que não se repetiu antes.
        </p>
      </TheoryBlock>

      <Subsection title="O erro clássico sobre o “temporário”" accentClass="text-accent2">
        <HighlightBox title="O temporário é o ESFORÇO, não o resultado">
          <p>
            O material é explícito nesse ponto, e vale fixá-lo: o termo "temporário"{' '}
            <strong>não se aplica ao resultado ou ao serviço gerado</strong>. O projeto pode ser finito sem que o
            resultado seja.
          </p>
          <p>
            O exemplo dado: projetos de melhoria constroem processos rotineiros dentro da empresa; os processos{' '}
            <strong>continuam funcionando</strong> depois de o projeto ter formalmente acabado. Uma ponte dura
            décadas; o projeto que a construiu terminou no dia da inauguração.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As sete características" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Empreendimento não repetitivo',
              description: 'É algo novo. Se a organização já faz aquilo rotineiramente, não é projeto — é operação.',
              accent: 'accent',
            },
            {
              title: 'Sequência clara e lógica de eventos',
              description: 'Atividades encadeadas, passíveis de acompanhamento e controle — não um amontoado de tarefas.',
              accent: 'accent2',
            },
            {
              title: 'Início, meio e fim',
              description: 'O ciclo de vida. Um trabalho sem fim previsto não é projeto, por mais organizado que seja.',
              accent: 'accent3',
            },
            {
              title: 'Objetivo claro e definido',
              description: 'Metas e resultados estabelecidos. Sem isso não há como declarar o projeto concluído nem bem-sucedido.',
              accent: 'accent4',
            },
            {
              title: 'Conduzido por pessoas',
              description:
                'O material comenta a obviedade com humor — e ela é lembrada de propósito, porque boa parte dos fracassos é de coordenação, não de técnica.',
              accent: 'accent5',
            },
            {
              title: 'Utiliza recursos e tem parâmetros predefinidos',
              description:
                'Recursos humanos, materiais e financeiros, dentro de referências acordadas de prazo, custo e qualidade.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Três aspectos desenvolvidos pela apostila" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Tempo',
              description:
                'O esforço é temporário; o resultado, não necessariamente. Confundir os dois leva a tratar como projeto o que é operação — e a nunca "terminar" nada.',
              accent: 'accent',
            },
            {
              title: 'Custos e recursos',
              description:
                'Força de trabalho, materiais, infraestrutura, orçamento e prazos devem ser estimados já na fase inicial, para evitar tanto a falta de recursos quanto o estouro da verba.',
              accent: 'accent2',
            },
            {
              title: 'Elaboração progressiva',
              description:
                'O projeto progride em etapas e sua DEFINIÇÃO é refinada em cada uma. No início se conhece pouco; exigir precisão total logo de saída é exigir adivinhação.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Projeto × Operação" accentClass="text-accent5">
        <ComparisonTable
          leftLabel="Operação (rotina)"
          rightLabel="Projeto"
          criterionLabel="Critério"
          rows={[
            { criterion: 'Duração', left: 'Evento contínuo, esforço permanente', right: 'Evento temporário, com início e fim' },
            { criterion: 'Saída', left: 'Produtos ou serviços REPETITIVOS', right: 'Produto, serviço ou resultado ÚNICO' },
            { criterion: 'Gerenciamento', left: 'Gerenciamento de processos de negócio', right: 'Gerenciamento de projetos' },
            { criterion: 'Papel na organização', left: 'Sustenta o negócio, seguindo padrão conhecido', right: 'Muda o negócio, criando o que não existia' },
            {
              criterion: 'O que têm em comum',
              left: 'Realizados por pessoas · limitados por recursos · planejados, executados e controlados',
              right: 'Servem a objetivos organizacionais como instrumentos estratégicos',
            },
          ]}
        />
        <ExampleBox title="Distinguindo na prática">
          <p>
            <strong>São projetos:</strong> desenvolver um software, lançar um novo produto, construir uma
            fábrica, montar um data center, implantar o Serviço de Informação ao Cidadão em um órgão, reformar
            uma agência.
          </p>
          <p>
            <strong>Não são projetos:</strong> gerenciar uma rede de computadores, fabricar automóveis em linha
            de montagem, comprar insumos e materiais, fazer manutenção de equipamentos, rodar a folha de
            pagamento, atender ao público no balcão.
          </p>
          <p className="text-sm">
            Repare que a distinção não é de importância nem de complexidade: operar a rede de um hospital é
            crítico e difícil. É de <strong>natureza</strong> — repetitivo e permanente contra único e
            temporário.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Outras definições recolhidas no material" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'ISO 21500:2012',
              description:
                '"Um conjunto único de processos que consistem em atividades coordenadas e controladas com datas de início e fim, empreendidas para alcançar os objetivos do projeto."',
              accent: 'accent',
            },
            {
              title: 'PRINCE2',
              description:
                '"Uma organização temporária criada com o propósito de entregar um ou mais produtos de negócio de acordo com uma justificativa de negócio acordada." Note o acento na justificativa de NEGÓCIO.',
              accent: 'accent2',
            },
            {
              title: 'Turner e Müller (2002)',
              description:
                'Empreendimento único em que recursos humanos, materiais e financeiros são organizados para tratar um escopo único de trabalho, com restrições de custo e tempo, visando uma mudança benéfica definida por objetivos quantitativos e qualitativos.',
              accent: 'accent3',
            },
            {
              title: 'Tipos de projeto',
              description:
                'A apostila lista projetos de pesquisa, sociais, culturais, empresariais e pessoais — lembrete de que o método não pertence à engenharia nem à TI.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Quando um projeto é bem-sucedido" accentClass="text-accent2">
        <HighlightBox title="Seis critérios">
          <p>
            O material lista: entregou todos os produtos conforme planejado; foi executado dentro do prazo;
            utilizou o orçamento estipulado; alcançou metas, objetivos e propósitos; atendeu aos requisitos
            técnicos, legais e funcionais conforme a expectativa das partes interessadas; e não causou impacto
            negativo social, legal ou organizacional.
          </p>
          <p>
            Vale notar o que os critérios <em>quatro</em> e <em>cinco</em> acrescentam aos três primeiros:
            entregar no prazo e no orçamento aquilo que ninguém queria continua sendo fracasso. Prazo e custo são
            restrições, não finalidades.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
