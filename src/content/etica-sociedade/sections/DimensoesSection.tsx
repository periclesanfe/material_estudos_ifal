import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, StatStrip, TheoryBlock } from '../../../components/sections';

export default function DimensoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="As Dimensões Éticas e a Linha C10"
        subtitle="Onde a ética aparece nominalmente nos documentos de Genebra"
        colorClass="text-accent3"
        badge="AV2"
      />

      <TheoryBlock title="Duas aparições, dois documentos">
        <p>
          A ética não é um tema disperso pelos documentos de Genebra: ela tem lugar próprio nos dois. Na{' '}
          <strong>Declaração de Princípios</strong>, é a <strong>seção 10</strong> — "As dimensões éticas da
          Sociedade da Informação", parágrafos 56 a 59. No <strong>Plano de Ação</strong>, é a{' '}
          <strong>Linha de Ação C10</strong>, parágrafo 25.
        </p>
        <p>
          A diferença entre os dois é a diferença entre declarar e agir: a Declaração afirma valores; o Plano
          transforma cada valor em ação atribuída a alguém.
        </p>
      </TheoryBlock>

      <Subsection title="Declaração de Princípios — parágrafos 56 a 59" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: '§56 — os valores fundamentais',
              description:
                'A Sociedade da Informação deve respeitar a paz e preservar os valores fundamentais de LIBERDADE, IGUALDADE, SOLIDARIEDADE, TOLERÂNCIA, RESPONSABILIDADE COMPARTILHADA e RESPEITO COM A NATUREZA.',
            },
            {
              title: '§57 — justiça e dignidade',
              description:
                'Reconhece a importância da ética para a Sociedade da Informação, que deve promover a justiça, assim como a dignidade e o valor da pessoa humana. Determina a mais ampla proteção possível à família.',
            },
            {
              title: '§58 — direitos humanos e privacidade',
              description:
                'A utilização das TIC e a criação de conteúdo devem respeitar os direitos humanos e as liberdades fundamentais de terceiros, INCLUSIVE A PRIVACIDADE PESSOAL e o direito de liberdade de pensamento, consciência e religião.',
            },
            {
              title: '§59 — contra os usos abusivos',
              description:
                'Todos os atores devem adotar ações e medidas preventivas, conforme determinado em lei, contra usos abusivos das TIC: atos ilícitos motivados por racismo, discriminação racial, xenofobia e formas correlatas de intolerância, ódio e violência; todas as formas de abuso de menores, incluindo pedofilia e pornografia infantil; e o tráfico e a exploração de seres humanos.',
            },
          ]}
        />
        <HighlightBox title="Um detalhe que vale notar" accent="var(--color-accent4)">
          <p>
            Entre os valores fundamentais do §56 está o <strong>respeito com a natureza</strong> — num documento
            sobre tecnologia da informação, ao lado de liberdade e igualdade.
          </p>
          <p>
            É a mesma conexão que a disciplina faz ao tratar de logística reversa e lixo eletrônico:{' '}
            <em>tudo se liga a tudo</em>, como diria o paradigma da complexidade que abriu o semestre.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Plano de Ação — Linha C10, parágrafo 25" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed mb-4">
          O §25 estabelece que a Sociedade da Informação deve estar sujeita a{' '}
          <strong>valores universalmente reconhecidos</strong>, promover o bem comum e evitar o uso abusivo das
          TIC. E se desdobra em quatro ações:
        </p>
        <ColoredPanelList
          items={[
            {
              title: '(a) Promover paz e valores fundamentais',
              description:
                'Tomar medidas para promover o respeito pela paz e para defender liberdade, igualdade, solidariedade, tolerância, responsabilidade compartilhada e respeito à natureza — os mesmos valores do §56.',
            },
            {
              title: '(b) Aumentar a consciência da dimensão ética',
              description:
                'Todos os interessados devem aumentar sua consciência da dimensão ética de sua utilização das TIC. É uma ação formativa, não regulatória: antes de norma, consciência.',
            },
            {
              title: '(c) Proteger privacidade e dados pessoais',
              description:
                'Todos os protagonistas devem promover o bem comum, proteger a privacidade e os dados pessoais e tomar medidas adequadas e preventivas, conforme a lei, contra usos abusivos das TIC.',
            },
            {
              title: '(d) Convocar a academia à pesquisa',
              description:
                'Convidar as partes interessadas, EM ESPECIAL A ACADEMIA, a continuar a investigação sobre as dimensões éticas das TIC.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A alínea que justifica esta disciplina" accent="var(--color-accent2)">
        <StatStrip
          items={[
            {
              label: '(d)',
              value: 'Um documento internacional atribuindo à universidade um papel formal na investigação das dimensões éticas das TIC',
              accent: 'text-accent3',
            },
          ]}
        />
        <p>
          A menção explícita à academia não é detalhe protocolar. Ela reconhece que os problemas éticos das TIC
          não estão resolvidos e não se resolvem só por norma — exigem <strong>investigação continuada</strong>,
          e a universidade é nomeada como responsável por ela.
        </p>
        <p>
          Uma disciplina como Ética, Tecnologia e Sociedade, num curso de Sistemas de Informação, é a forma
          concreta que esse compromisso assume.
        </p>
      </HighlightBox>
    </section>
  );
}
