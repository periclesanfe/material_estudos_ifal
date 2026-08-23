import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CicloVidaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Ciclo de Vida e Estruturas"
        subtitle="As três curvas que justificam planejar cedo — e onde o gerente de projeto tem (ou não tem) poder"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <TheoryBlock title="O ciclo de vida">
        <p>
          É a sequência de fases pelas quais o projeto passa do início à conclusão. Não há forma única de
          definir a estrutura ideal: setores diferentes, e até projetos dentro da mesma organização, podem
          apresentar variações significativas. Algumas organizações padronizam todos os projetos; outras deixam a
          escolha das fases para a equipe.
        </p>
        <p>
          O material apresenta a divisão em quatro partes — <strong>iniciação, planejamento, execução e
          encerramento</strong> —, ressalvando que em projetos ágeis essa divisão é questionada, e que o PMBOK
          mais recente já não recomenda dividir projetos em fases, buscando maior agilidade.
        </p>
      </TheoryBlock>

      <Subsection title="Preditivo × adaptativo" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Preditivo (pré-determinado)"
          rightLabel="Adaptativo (ágil)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Escopo',
              left: 'Detalhado desde a INICIAÇÃO do projeto',
              right: 'Inicia sem escopo fechado; vai sendo determinado conforme o andamento',
            },
            {
              criterion: 'Entrega',
              left: 'Adequado a produtos entregues de UMA ÚNICA VEZ, de forma não parcial',
              right: 'Baseado em ENTREGAS PARCIAIS ao longo do percurso',
            },
            {
              criterion: 'Quando usar',
              left: 'Quando se sabe bem o que se quer e a variação esperada é pequena',
              right: 'Recomendado para projetos que podem sofrer variações durante o percurso',
            },
            {
              criterion: 'Ferramentas',
              left: 'As clássicas — EAP, cronograma, caminho crítico, linha de base',
              right: 'Backlog, sprints, quadros visuais, revisões frequentes',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O critério de escolha é a <strong>incerteza do escopo</strong>, não o tamanho do projeto. Uma obra de
          grande porte com projeto executivo aprovado é preditiva; um produto digital novo, cuja aceitação
          ninguém conhece, pede adaptação — mesmo sendo pequeno.
        </p>
      </Subsection>

      <Subsection title="As três curvas do ciclo de vida" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Custo e pessoal',
              description:
                'Baixos no início, atingem o MÁXIMO durante a execução e caem rapidamente no encerramento. É a curva que explica por que atrasos na execução doem tanto no orçamento.',
              accent: 'accent',
            },
            {
              title: 'Riscos e incertezas',
              description:
                'MAIORES no início e decrescentes ao longo do tempo. No começo quase tudo é desconhecido; cada decisão tomada e cada entrega feita reduzem o que resta de incerto.',
              accent: 'accent2',
            },
            {
              title: 'Capacidade de influenciar',
              description:
                'A capacidade de mudar as características finais do produto SEM impacto significativo de custo é MÁXIMA no início e diminui conforme o projeto progride.',
              accent: 'accent3',
            },
          ]}
        />
        <HighlightBox title="Por que essas curvas justificam planejar" accent="var(--color-accent4)">
          <p>
            Junte as duas últimas e você tem o paradoxo central do gerenciamento de projetos:{' '}
            <strong>é no início que se sabe menos e é no início que as decisões são mais baratas</strong>. Quando
            finalmente se conhece bem o problema, mudar já custa caro.
          </p>
          <p>
            Não há como escapar do paradoxo — só como administrá-lo. É isso que justifica investir esforço em
            planejamento, definição de escopo e análise de riscos: são as ferramentas para decidir melhor no
            momento em que se sabe pouco. E é também o argumento das abordagens ágeis, que respondem à mesma
            tensão por outro caminho: adiar decisões até que a informação exista.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Estruturas organizacionais" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A estrutura da organização define quanto poder o gerente de projetos realmente tem. É uma variável que
          o gerente não escolhe, mas precisa conhecer — porque ela determina o que é possível fazer.
        </p>
        <ComparisonTable
          leftLabel="Autoridade do gerente de projeto"
          rightLabel="Quem controla o orçamento"
          criterionLabel="Estrutura"
          rows={[
            { criterion: 'Funcional', left: 'Pouca ou nenhuma — papel de tempo parcial', right: 'Gerente funcional' },
            { criterion: 'Matricial fraca', left: 'Limitada — tempo parcial', right: 'Gerente funcional' },
            { criterion: 'Matricial balanceada', left: 'Baixa a moderada — tempo integral', right: 'Misto' },
            { criterion: 'Matricial forte', left: 'Moderada a alta — tempo integral', right: 'Gerente de projetos' },
            { criterion: 'Projetizada', left: 'Alta a quase total — tempo integral', right: 'Gerente de projetos' },
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Funcional',
              description:
                'A hierarquia clássica: cada colaborador tem um superior bem definido e as pessoas são agrupadas por especialidade (RH, contabilidade, logística). É a mais comum no serviço público, e nela a burocracia tende a pesar mais.',
              accent: 'accent',
            },
            {
              title: 'Projetizada',
              description:
                'As pessoas são alocadas em equipes de projeto e, ao final, o grupo é desfeito ou realocado. O gerente de projeto tem alto grau de independência e autonomia.',
              accent: 'accent2',
            },
            {
              title: 'Matriciais e composta',
              description:
                'Combinações das duas anteriores, em três graus — fraca, balanceada e forte. A COMPOSTA mistura elementos: departamentos ou projetos diferentes podem ter estruturas diferentes na mesma organização.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O Escritório de Gerenciamento de Projetos (EGP)" accentClass="text-accent5">
        <ExampleBox title="O que um PMO faz">
          <p>
            É a estrutura, função ou unidade que <strong>centraliza e coordena</strong> o gerenciamento dos
            projetos sob sua responsabilidade. Suas atribuições variam de simplesmente dar suporte até
            efetivamente gerenciar os projetos. As responsabilidades listadas no material:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>gerenciar recursos compartilhados entre todos os projetos;</li>
            <li>identificar e desenvolver metodologia, melhores práticas e padrões;</li>
            <li>orientar, aconselhar, treinar e supervisionar;</li>
            <li>monitorar a conformidade com políticas e modelos padrão, por meio de auditorias;</li>
            <li>desenvolver e gerenciar políticas, procedimentos, formulários e documentação compartilhada;</li>
            <li>implantar, padronizar e gerenciar as ferramentas de gerenciamento de projetos;</li>
            <li>coordenar as comunicações ENTRE projetos.</li>
          </ul>
          <p className="mt-3 text-sm">
            A última é a mais fácil de subestimar: dois projetos que dependem do mesmo recurso, ou que entregam
            partes do mesmo sistema, precisam de alguém que enxergue os dois — e nenhum dos dois gerentes tem
            essa visão.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
