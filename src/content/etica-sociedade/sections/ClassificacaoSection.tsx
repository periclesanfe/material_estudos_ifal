import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid } from '../../../components/sections';

export default function ClassificacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="As Cinco Éticas"
        subtitle="A classificação didática — e onde a área de TI entra em cada uma"
        colorClass="text-accent5"
        badge="AV1"
      />

      <p className="text-text-muted leading-relaxed">
        A classificação não divide a ética em cinco éticas incompatíveis: separa <strong>âmbitos de
        aplicação</strong>, cada um com sua referência normativa própria. Uma mesma pessoa costuma estar sob
        várias delas ao mesmo tempo.
      </p>

      <Subsection title="As cinco categorias" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'ÉTICA UNIVERSAL',
              description:
                'Tem como referência a Declaração Universal dos Direitos do Homem. É o piso comum — aquilo que vale independentemente de profissão, país ou empresa.',
            },
            {
              title: 'ÉTICA PROFISSIONAL',
              description:
                'Normativa e específica para profissões regulamentadas. Assume a forma de códigos, como o da SBC para os profissionais de informática, estudado adiante.',
            },
            {
              title: 'ÉTICA NA ADMINISTRAÇÃO PÚBLICA',
              description:
                'Voltada a bem servir à coletividade e à imagem do serviço público. É normativa e relativa aos servidores públicos — quem lida com recursos e dados que não são seus.',
            },
            {
              title: 'ÉTICA AMBIENTAL',
              description:
                'Trata da relação entre o homem e o meio ambiente e da sensibilidade ambiental. É a categoria que se desdobra na discussão de logística reversa e lixo eletrônico.',
            },
            {
              title: 'ÉTICA EMPRESARIAL',
              description:
                'Movimento que ganha força nos anos 90, evoluindo da filantropia empresarial ao conceito de RESPONSABILIDADE SOCIAL das empresas, desenvolvido no final do século XX.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Filantropia não é responsabilidade social" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Filantropia empresarial',
              description:
                'A empresa devolve parte do que ganhou, por meio de doações e patrocínios. É voluntária, eventual, e não interroga como o lucro foi obtido.',
              accent: 'accent3',
            },
            {
              title: 'Responsabilidade social',
              description:
                'A empresa responde pelas consequências da própria operação — sobre trabalhadores, consumidores, comunidade e ambiente. É contínua e alcança o núcleo do negócio.',
              accent: 'accent',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A passagem de uma à outra é o que o material registra ao situar o conceito no final do século XX. Uma
          empresa pode ser filantrópica e socialmente irresponsável ao mesmo tempo — daí a distinção importar.
        </p>
      </Subsection>

      <HighlightBox title="O tripé da área de TI" accent="var(--color-accent4)">
        <p>
          O material é explícito: a área de <strong>Tecnologia da Informação, Sistemas de Informação e
          Computação</strong> deve contribuir também para o <strong>desenvolvimento sustentável</strong> por meio
          de seu tripé — <strong>econômico, social e ambiental</strong>.
        </p>
        <p>
          O "também" na frase é o ponto: a contribuição econômica da área é evidente e ninguém a discute. As
          outras duas dimensões é que precisam ser lembradas — e a seção seguinte trata da terceira delas com
          números e legislação.
        </p>
      </HighlightBox>
    </section>
  );
}
