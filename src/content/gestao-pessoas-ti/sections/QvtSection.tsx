import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function QvtSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Higiene, Segurança e QVT"
        subtitle="O processo de MANTER pessoas — e dois modelos que tentam medir algo tão amplo quanto “qualidade de vida”"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <TheoryBlock title="Um construto complexo">
        <p>
          A qualidade de vida no trabalho é descrita no material como um{' '}
          <strong>construto complexo e multidisciplinar</strong>, que envolve uma constelação de fatores. Não é
          um item que se compra nem uma política que se anuncia: resulta de muitas decisões tomadas em outros
          processos — desenho de cargos, remuneração, avaliação, liderança.
        </p>
      </TheoryBlock>

      <Subsection title="Os componentes da QVT" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Satisfação com o trabalho executado', description: 'A relação da pessoa com o que ela efetivamente faz.', accent: 'accent' },
            { title: 'Possibilidades de futuro na organização', description: 'Enxergar um caminho adiante, e não apenas o cargo atual.', accent: 'accent2' },
            { title: 'Reconhecimento pelos resultados alcançados', description: 'Que o esforço e a entrega sejam vistos e nomeados.', accent: 'accent3' },
            { title: 'Salário percebido e benefícios auferidos', description: 'A contrapartida material — necessária, embora insuficiente sozinha.', accent: 'accent4' },
            { title: 'Relacionamento humano na equipe', description: 'A convivência cotidiana, que ocupa boa parte das horas de trabalho.', accent: 'accent5' },
            { title: 'Ambiente psicológico e físico', description: 'As condições em que o trabalho acontece, nas duas dimensões.', accent: 'accent' },
            {
              title: 'Liberdade de atuar e responsabilidade de decidir',
              description: 'Autonomia — que aparece aqui e também entre as recompensas não financeiras e os fatores motivacionais.',
              accent: 'accent2',
            },
            { title: 'Possibilidade de engajar-se e participar ativamente', description: 'Ter voz nas decisões que afetam o próprio trabalho.', accent: 'accent3' },
          ]}
        />
      </Subsection>

      <Subsection title="O modelo de Nadler e Lawler" accentClass="text-accent3">
        <ColoredPanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Participação dos funcionários',
              description: 'Nas decisões que os afetam. É o aspecto que devolve à pessoa alguma influência sobre o próprio trabalho.',
            },
            {
              title: '2. Reestruturação do trabalho',
              description: 'Pelo enriquecimento de tarefas e pela adoção de grupos autônomos de trabalho.',
            },
            {
              title: '3. Inovação no sistema de recompensas',
              description: 'Novas formas de remunerar e reconhecer, com o objetivo de influenciar o clima organizacional.',
            },
            {
              title: '4. Melhoria do ambiente de trabalho',
              description: 'Nas condições físicas e psicológicas, incluindo flexibilidade de horário e de local de trabalho.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Na medida em que esses quatro aspectos são incrementados, melhora a QVT. Repare que{' '}
          <strong>dois deles mexem em como o trabalho é organizado</strong> — participação nas decisões e
          reestruturação por enriquecimento de tarefas —, e não apenas nas condições em volta dele. É a diferença
          entre tratar QVT como benefício e tratá-la como desenho de trabalho.
        </p>
      </Subsection>

      <Subsection title="O modelo de Walton: oito fatores" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Compensação justa e adequada',
              description: 'Renda adequada ao trabalho, equidade INTERNA (comparação dentro da organização) e equidade EXTERNA (comparação com o mercado).',
            },
            {
              title: '2. Condições de segurança e saúde no trabalho',
              description: 'Jornada de trabalho e ambiente físico seguro e saudável.',
            },
            {
              title: '3. Utilização e desenvolvimento de capacidades',
              description: 'Autonomia, significado da tarefa, identidade da tarefa, variedade de habilidades e retroação — usar o que a pessoa sabe, e não só uma fração disso.',
            },
            {
              title: '4. Oportunidades de crescimento contínuo e segurança',
              description: 'Possibilidade de carreira, crescimento profissional e segurança do emprego.',
            },
            {
              title: '5. Integração social na organização',
              description: 'Igualdade de oportunidades, relacionamentos interpessoais e grupais, senso comunitário.',
            },
            {
              title: '6. Constitucionalismo',
              description:
                'Respeito às leis e aos direitos trabalhistas, privacidade pessoal, liberdade de expressão e normas e rotinas claras. O nome vem da ideia de direitos que não dependem da boa vontade da chefia.',
            },
            {
              title: '7. Trabalho e espaço total de vida',
              description: 'O papel balanceado do trabalho na vida pessoal — o reconhecimento de que existe vida fora do expediente.',
            },
            {
              title: '8. Relevância social da vida no trabalho',
              description: 'Imagem da empresa, responsabilidade social pelos produtos e serviços e responsabilidade social pelos empregados.',
            },
          ]}
        />
        <HighlightBox title="O que o modelo de Walton acrescenta" accent="var(--color-accent4)">
          <p>
            Os dois últimos fatores puxam a QVT para fora dos muros da organização. O{' '}
            <strong>espaço total de vida</strong> reconhece que jornada e exigências afetam a vida pessoal; a{' '}
            <strong>relevância social</strong> admite que trabalhar numa empresa cuja conduta a pessoa reprova
            deteriora a qualidade da sua vida no trabalho — mesmo com salário, ambiente e autonomia adequados.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
