import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function StakeholdersSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Partes Interessadas"
        subtitle="Quem pode ajudar — e quem pode atrapalhar — o resultado do projeto"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <TheoryBlock title="A definição, e o detalhe que ela esconde">
        <p>
          Partes interessadas são <strong>pessoas ou organizações ativamente envolvidas no projeto, ou cujos
          interesses podem ser positiva ou negativamente afetados</strong> pela execução ou pelo término dele.
          Elas também podem exercer influência sobre os objetivos e resultados.
        </p>
        <p>
          O detalhe importante está em "negativamente". Nem toda parte interessada quer o sucesso do projeto:
          quem perde poder, orçamento ou autonomia com a mudança também é stakeholder — e ignorar isso é uma
          forma confiável de ser surpreendido. Por isso o material fala em identificar quem pode{' '}
          <strong>ajudar ou atrapalhar</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Os papéis" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Patrocinador (sponsor)',
              description:
                'Fornece apoio político e recursos financeiros, esclarece dúvidas de escopo e exerce influência sobre outros para beneficiar o projeto. Serve de porta-voz nos níveis gerenciais mais elevados. Cabe a ele tomar as decisões empresariais importantes, aprovar o orçamento, garantir a disponibilidade de recursos e comunicar os objetivos pela organização.',
            },
            {
              title: 'Cliente e usuários',
              description:
                'Em algumas áreas os termos são sinônimos; em outras, o CLIENTE é quem adquire o produto e os USUÁRIOS são quem efetivamente o utiliza. Quando são pessoas diferentes, atender a um não garante atender ao outro — e essa distância é origem frequente de insatisfação na entrega.',
            },
            {
              title: 'Gerente ou líder do projeto',
              description:
                'Designado pela organização, responde pelo gerenciamento e por atingir os objetivos definidos. É a pessoa responsável pela COMUNICAÇÃO com todas as partes interessadas, em especial o patrocinador e a equipe. Requer flexibilidade, bom senso, liderança e habilidade de negociação.',
            },
            {
              title: 'Equipe do projeto e equipe de gerenciamento',
              description:
                'A equipe do projeto conduz as atividades do ciclo de vida; a equipe de gerenciamento é a parte dela diretamente envolvida em gerenciar. É desejável que a equipe inclua pessoas das áreas que serão afetadas pela execução ou pelo produto.',
            },
            {
              title: 'Comitê diretor',
              description:
                'Formado pelo patrocinador e pelos principais interessados. Aprova o termo de abertura, garante recursos e julga os pedidos de mudança nos elementos principais do projeto — entregas, cronograma e orçamento.',
            },
            {
              title: 'Fornecedores e organização executora',
              description:
                'Fornecedores são pessoas jurídicas ou físicas externas que entregam produtos ou serviços usados no projeto; a organização executora é a responsável pelo planejamento e pela execução.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A lista completa citada no material inclui ainda proprietários do investimento, fonte de recursos
          financeiros, diretor do projeto, gerente de programa, grupos de negócio, o público em geral e a mídia —
          estes últimos especialmente relevantes em projetos públicos.
        </p>
      </Subsection>

      <Subsection title="Como identificar" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Analisar o ambiente do projeto',
              description:
                'Mapear o contexto organizacional em que o projeto acontece: quem opera hoje o processo que será alterado, quem responde por ele, quem depende do seu resultado.',
              accent: 'accent',
            },
            {
              title: 'Determinar o TIPO de influência',
              description:
                'Nem toda influência é a mesma: há quem decida, quem financie, quem opere, quem fiscalize e quem simplesmente possa criar obstáculos.',
              accent: 'accent2',
            },
            {
              title: 'Categorizar o NÍVEL de influência',
              description:
                'Priorizar. Tratar todas as partes com a mesma intensidade de comunicação desperdiça o recurso mais escasso do gerente, que é atenção.',
              accent: 'accent3',
            },
            {
              title: 'Coletar informações',
              description:
                'Levantar expectativas e necessidades reais — que raramente coincidem com o que está escrito na solicitação inicial.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Presentes em todos os projetos — e os demais" accentClass="text-accent4">
        <ExampleBox title="A distinção feita pelo material, com foco em projetos de TI">
          <p>
            <strong>Em todos os projetos:</strong> proprietários do investimento, fonte de recursos financeiros,
            cliente, gerente do projeto e time do projeto. É o núcleo mínimo — sem qualquer um deles, não há
            projeto.
          </p>
          <p>
            <strong>Em apenas alguns:</strong> patrocinador (presente na maioria dos projetos de TI), diretor do
            projeto, gerente de programa, usuários, grupos de negócio, público em geral e mídia.
          </p>
          <p className="text-sm">
            Chama a atenção que <em>usuários</em> apareçam na segunda lista. Faz sentido em projetos de
            infraestrutura interna, mas é um alerta: quando o usuário final não é identificado como parte
            interessada, ele costuma reaparecer no momento da entrega — em geral discordando.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Por que isso decide o projeto" accentClass="text-accent5">
        <HighlightBox title="O papel do gerente">
          <p>
            O material atribui ao gerente duas atividades para garantir que o projeto se realize:{' '}
            <strong>identificar os stakeholders</strong> e <strong>definir os requisitos deles</strong>. As duas
            juntas, porque identificar sem levantar expectativas produz uma lista de nomes sem utilidade.
          </p>
          <p>
            E há uma razão numérica para a insistência: no estudo de benchmarking citado adiante, problemas de
            comunicação lideram a lista de dificuldades, aparecendo em <strong>76%</strong> dos projetos. Boa
            parte deles começa aqui — em alguém que deveria ter sido consultado e não foi.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
