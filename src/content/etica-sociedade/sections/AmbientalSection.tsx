import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function AmbientalSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Logística Reversa e Lixo Eletrônico"
        subtitle="A ética ambiental com legislação, prazo e destino"
        colorClass="text-accent"
        badge="AV1"
      />

      <TheoryBlock title="Onde a área de TI é diretamente responsável">
        <p>
          Entre as cinco categorias da classificação, a ambiental é a que produz a conexão mais concreta com a
          área: computadores, servidores, celulares, monitores e baterias{' '}
          <strong>viram resíduo</strong>, e um resíduo com componentes perigosos.
        </p>
        <p>
          A disciplina não trata o tema por apelo genérico à sustentabilidade — trata por{' '}
          <strong>legislação, definição legal e destino concreto</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="A lei e a definição" accentClass="text-accent2">
        <ExampleBox title="Lei Federal 12.305/2010 — Art. 3º, inciso XII">
          <p>
            A lei institui a <strong>Política Nacional de Resíduos Sólidos (PNRS)</strong> e define logística
            reversa como
          </p>
          <p>
            <em>
              "um conjunto de ações, procedimentos e meios destinados a viabilizar a coleta e a restituição dos
              resíduos sólidos ao setor empresarial, para reaproveitamento, em seu ciclo ou em outros ciclos
              produtivos, ou outra destinação final ambientalmente adequada"
            </em>
            .
          </p>
          <p>
            A palavra decisiva é <strong>restituição</strong>: o resíduo volta a quem o produziu. A lógica
            inverte o fluxo habitual da cadeia — daí "reversa".
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Como funciona na prática" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'O que os sistemas promovem',
              description:
                'Coleta, reuso, reciclagem, tratamento e/ou disposição final dos resíduos gerados APÓS O CONSUMO — seja o próprio produto já sem uso, sejam suas embalagens descartadas.',
            },
            {
              title: 'O Brasil está atrasado',
              description:
                'Embora a implementação da PNRS ainda seja recente no país, a logística reversa já é realidade há MAIS DE TRINTA ANOS em alguns países, principalmente da Europa.',
            },
            {
              title: 'Mas já há experiências consolidadas',
              description:
                'No Brasil, existem sistemas específicos há mais de dez anos para quatro categorias de produto.',
            },
          ]}
        />
        <PanelList
          columns="md:grid-cols-4"
          items={[
            { title: 'Pneus', description: 'Um dos primeiros sistemas específicos implantados.' },
            { title: 'Óleo lubrificante', description: 'Resíduo perigoso com destinação regulada.' },
            { title: 'Embalagens de agrotóxicos', description: 'Recolhimento obrigatório após o uso.' },
            { title: 'Pilhas e baterias', description: 'A categoria mais próxima do universo da eletrônica.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="O que NÃO está na lista" accent="var(--color-accent5)">
        <p>
          Repare na ausência: <strong>equipamentos de informática</strong>. Justamente o resíduo que a área
          produz é o que ainda não tinha, no período retratado pelo material, um sistema específico consolidado
          com uma década de funcionamento — ao contrário de pneus e agrotóxicos.
        </p>
        <p>
          O material acompanha o tema com marcos regulatórios posteriores, os <strong>Decretos 10.240/2020</strong>{' '}
          e <strong>10.936/2022</strong>, e com reportagens sobre a posição do Brasil entre os maiores produtores
          mundiais de <strong>lixo eletrônico</strong>. É um problema em construção, não resolvido.
        </p>
      </HighlightBox>

      <Subsection title="A conexão com o resto da disciplina" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed">
          Vale notar que o valor <strong>"respeito com a natureza"</strong> reaparecerá adiante, no §56 da
          Declaração de Princípios de Genebra, ao lado de liberdade, igualdade, solidariedade e tolerância — num
          documento internacional sobre a Sociedade da Informação.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Não é coincidência. Se "tudo se liga a tudo", como diz o paradigma da complexidade, a questão ambiental
          não é um apêndice da discussão sobre tecnologia: é uma de suas dimensões.
        </p>
      </Subsection>
    </section>
  );
}
