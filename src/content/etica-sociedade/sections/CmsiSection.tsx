import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, ExampleBox } from '../../../components/sections';

export default function CmsiSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Cúpula Mundial e seus Documentos"
        subtitle="Construir a Sociedade da Informação: um desafio global para o novo milênio"
        colorClass="text-accent"
        badge="AV2"
      />

      <Subsection title="Duas fases, quatro documentos" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'GENEBRA 2003 — Declaração de Princípios',
            'GENEBRA 2003 — Plano de Ação',
            'TÚNIS 2005 — Compromisso de Túnis',
            'TÚNIS 2005 — Agenda de Túnis para a Sociedade da Informação',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A divisão de trabalho entre as fases: Genebra estabelece <strong>princípios</strong> e um{' '}
          <strong>plano</strong>; Túnis assume <strong>compromissos</strong> e detalha a{' '}
          <strong>agenda</strong> de implementação.
        </p>
      </Subsection>

      <Subsection title="A visão comum" accentClass="text-accent3">
        <ExampleBox title="O que a Declaração se propõe">
          <p>
            Construir uma Sociedade da Informação <strong>voltada para as pessoas, inclusiva e orientada para o
            desenvolvimento</strong>, em que todos possam criar, acessar, utilizar e compartilhar informação e
            conhecimento — permitindo a indivíduos, comunidades e povos empregar todo o seu potencial na promoção
            do desenvolvimento sustentável e da melhor qualidade de vida.
          </p>
          <p>
            A base declarada são os propósitos e princípios da <strong>Carta das Nações Unidas</strong>, com
            respeito pleno à <strong>Declaração Universal dos Direitos Humanos</strong>.
          </p>
        </ExampleBox>
        <HighlightBox title="O Artigo 19 como fundamento" accent="var(--color-accent3)">
          <p>
            A Declaração reafirma, como fundamento essencial da Sociedade da Informação, o{' '}
            <strong>Artigo 19 da Declaração Universal dos Direitos Humanos</strong>: todos têm direito à liberdade
            de opinião e de expressão, incluindo a liberdade de, sem interferência, ter opiniões e de procurar,
            receber e transmitir informações e ideias{' '}
            <strong>por quaisquer meios e independentemente de fronteiras</strong>.
          </p>
          <p>
            E acrescenta uma definição forte: <strong>"a comunicação é um processo social fundamental, uma
            necessidade humana básica e o fundamento de todas as organizações sociais"</strong>. Ao colocá-la
            nesse patamar, o documento justifica tratar o acesso à informação como questão de direitos — e não
            como mercadoria.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O hiato digital" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'O reconhecimento',
              description:
                'Os benefícios da revolução das TIC são distribuídos DE FORMA DESIGUAL entre países desenvolvidos e em desenvolvimento — e também DENTRO das próprias sociedades. A desigualdade digital não é só internacional: é doméstica.',
            },
            {
              title: 'O compromisso',
              description:
                'Transformar esse hiato digital em OPORTUNIDADE DIGITAL para todos, especialmente para aqueles que correm o risco de serem deixados para trás e ainda mais marginalizados.',
            },
            {
              title: 'A solidariedade digital',
              description:
                'A construção de uma Sociedade da Informação inclusiva requer novas formas de solidariedade, parceria e cooperação entre GOVERNOS, SETOR PRIVADO, SOCIEDADE CIVIL e ORGANIZAÇÕES INTERNACIONAIS — em nível nacional e internacional.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Quem o documento nomeia" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Os jovens',
              description:
                'Constituem a força de trabalho do futuro, são os principais criadores e os primeiros a adotarem as TIC. Suas capacidades devem ser promovidas como estudantes, desenvolvedores, colaboradores, empresários e tomadores de decisões.',
              accent: 'accent',
            },
            {
              title: 'As crianças',
              description:
                'O desenvolvimento de aplicações de TIC e o funcionamento dos serviços devem respeitar os direitos das crianças, sua proteção e seu bem-estar.',
              accent: 'accent2',
            },
            {
              title: 'As mulheres',
              description:
                'Devem ser parte integrante e atores-chave da Sociedade da Informação, com plena participação em condições de igualdade em todas as esferas e processos de decisão — integrando a perspectiva de igualdade de gênero.',
              accent: 'accent3',
            },
            {
              title: 'Grupos marginalizados e vulneráveis',
              description:
                'Migrantes, pessoas deslocadas internamente, refugiados, desempregados e carentes, minorias, povos nômades, pessoas mais velhas e pessoas com deficiência.',
              accent: 'accent4',
            },
            {
              title: 'Países em situação especial',
              description:
                'Países em desenvolvimento, economias em transição, países menos desenvolvidos, pequenos Estados insulares, países sem litoral, países pobres altamente endividados, territórios sob ocupação, países se recuperando de conflitos e regiões atingidas por desastres naturais.',
              accent: 'accent5',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Listas assim, em documentos internacionais, não são retórica: nomear é o que permite cobrar depois. O
          que não está nomeado tende a não ser considerado na hora de desenhar política pública.
        </p>
      </Subsection>
    </section>
  );
}
