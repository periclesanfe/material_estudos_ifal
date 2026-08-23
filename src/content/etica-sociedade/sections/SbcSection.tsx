import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, StatStrip, TheoryBlock } from '../../../components/sections';

export default function SbcSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Sociedade Brasileira de Computação"
        subtitle="Quem escreve o código de ética da profissão"
        colorClass="text-accent4"
        badge="AV2"
      />

      <TheoryBlock title="O que é a SBC">
        <p>
          Sociedade científica <strong>sem fins lucrativos</strong>, fundada em{' '}
          <strong>24 de julho de 1978</strong>, que reúne estudantes, professores, profissionais, pesquisadores e
          entusiastas da área de Computação e Informática de todo o Brasil.
        </p>
        <p>
          Sua função declarada: fomentar o acesso à informação e à cultura por meio da informática, promover a{' '}
          <strong>inclusão digital</strong>, incentivar a pesquisa e o ensino em computação no Brasil, e
          contribuir para a formação do profissional da computação <strong>com responsabilidade social</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Quase cinco décadas" accentClass="text-accent">
        <StatStrip
          items={[
            { label: '1978', value: 'Fundação da SBC, em 24 de julho', accent: 'text-accent' },
            { label: '2013', value: 'Instituição do Código de Ética do Profissional de Informática, em 15 de julho', accent: 'text-accent2' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As duas datas costumam ser confundidas nas provas. A entidade é de 1978; o Código de Ética veio{' '}
          <strong>trinta e cinco anos depois</strong>.
        </p>
      </Subsection>

      <Subsection title="As finalidades principais" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Ensino, pesquisa e desenvolvimento',
              description: 'Incentivar atividades de ensino, pesquisa e desenvolvimento em computação e informática no Brasil.',
            },
            {
              title: 'Espírito crítico e personalidade nacional',
              description:
                'Zelar pela preservação e aprimoramento do ESPÍRITO CRÍTICO, da responsabilidade profissional e da personalidade nacional da comunidade técnico-científica que atua no setor.',
            },
            {
              title: 'Emancipação tecnológica',
              description:
                'Manter-se permanentemente atenta à política governamental que afeta as atividades de computação no Brasil, no sentido de assegurar a EMANCIPAÇÃO TECNOLÓGICA do país.',
            },
            {
              title: 'Disseminação do conhecimento',
              description:
                'Promover a disseminação do conhecimento científico por meio de reuniões, congressos, conferências e publicações.',
            },
            {
              title: 'Desenvolvimento científico e tecnológico',
              description: 'Contribuir para o desenvolvimento científico e tecnológico do país.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Um vocabulário que diz muito" accent="var(--color-accent5)">
        <p>
          Expressões como <strong>"emancipação tecnológica"</strong> e{' '}
          <strong>"personalidade nacional da comunidade técnico-científica"</strong> não são linguagem neutra de
          associação técnica.
        </p>
        <p>
          Elas indicam que a entidade se pensa também como <strong>ator de soberania</strong>: manter-se atenta à
          política governamental, defender que o país desenvolva capacidade própria, e zelar pelo espírito
          crítico de quem trabalha na área. É uma posição, e uma posição declarada nos seus estatutos.
        </p>
      </HighlightBox>

      <Subsection title="Presença em Alagoas" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed">
          A SBC mantém <strong>secretarias regionais</strong> pelo país, e a de Alagoas é sediada no{' '}
          <strong>IFAL</strong> — o que aproxima a entidade dos estudantes do curso de forma bastante concreta.
        </p>
      </Subsection>
    </section>
  );
}
