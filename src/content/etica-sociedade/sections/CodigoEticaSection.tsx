import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, TheoryBlock } from '../../../components/sections';

export default function CodigoEticaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Doze Deveres do Profissional"
        subtitle="Código de Ética do Profissional de Informática — SBC, 15 de julho de 2013"
        colorClass="text-accent"
        badge="AV2"
      />

      <TheoryBlock title="Para que serve um código de ética profissional">
        <p>
          O objetivo declarado é orientar os profissionais sobre os <strong>valores, as responsabilidades e os
          compromissos</strong> necessários na conduta de suas atividades <strong>em benefício da
          sociedade</strong>.
        </p>
        <p>
          É a ética profissional da classificação didática, tornada concreta: normativa, específica e escrita
          por quem exerce a atividade.
        </p>
      </TheoryBlock>

      <Subsection title="Os doze artigos" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed mb-4">
          O código abre com a fórmula <em>"São deveres dos profissionais de Informática:"</em>
        </p>
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Art. 1º — bem-estar social',
              description:
                'Contribuir para o bem-estar social, promovendo, sempre que possível, a inclusão de todos os setores da sociedade.',
            },
            {
              title: 'Art. 2º — como exercer o trabalho',
              description:
                'Exercer o trabalho profissional com responsabilidade, dedicação, honestidade e justiça, buscando sempre a melhor solução.',
            },
            {
              title: 'Art. 3º — competência continuada',
              description:
                'Esforçar-se para adquirir continuamente competência técnica e profissional, mantendo-se sempre atualizado com os avanços da profissão.',
            },
            {
              title: 'Art. 4º — limites e espírito público',
              description:
                'Atuar dentro dos limites de sua competência profissional e orientar-se por elevado espírito público.',
            },
            {
              title: 'Art. 5º — sigilo',
              description:
                'Guardar sigilo profissional das informações a que tiver acesso em decorrência das atividades exercidas.',
            },
            {
              title: 'Art. 6º — não discriminação',
              description:
                'Conduzir as atividades profissionais sem discriminação, seja de raça, sexo, religião, nacionalidade, cor da pele, idade, estado civil ou qualquer outra condição humana.',
            },
            {
              title: 'Art. 7º — legislação e terceiros',
              description: 'Respeitar a legislação vigente, o interesse social e os direitos de terceiros.',
            },
            {
              title: 'Art. 8º — compromissos e propriedade',
              description:
                'Honrar compromissos, contratos, termos de responsabilidade, direitos de propriedade, copyrights e patentes.',
            },
            {
              title: 'Art. 9º — relação com os colegas',
              description:
                'Pautar sua relação com os colegas de profissão nos princípios de consideração, respeito, apreço, solidariedade e da harmonia da classe.',
            },
            {
              title: 'Art. 10 — honra, dignidade e privacidade',
              description:
                'Não praticar atos que possam comprometer a honra, a dignidade e a privacidade de qualquer pessoa.',
            },
            {
              title: 'Art. 11 — trabalho intelectual alheio',
              description:
                'Nunca apropriar-se de trabalho intelectual, iniciativas ou soluções encontradas por outras pessoas.',
            },
            {
              title: 'Art. 12 — zelar pelo código',
              description: 'Zelar pelo cumprimento deste código.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A ordem dos artigos é uma declaração" accent="var(--color-accent5)">
        <p>
          Repare por onde o código <strong>não</strong> começa. Não começa pela competência técnica (que é o
          Art. 3º), nem pelo dever para com o cliente ou empregador.
        </p>
        <p>
          Começa pelo <strong>bem-estar social e pela inclusão</strong>. A ordem estabelece uma hierarquia: a
          primeira obrigação do profissional de informática, segundo sua própria entidade, é para com a
          sociedade — e só depois vêm as obrigações de ofício e as relações contratuais.
        </p>
      </HighlightBox>

      <Subsection title="Três artigos que merecem leitura atenta" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Art. 6º — a cláusula aberta',
              description:
                'A lista de critérios de não discriminação termina com "ou qualquer outra condição humana". A cláusula aberta impede que a enumeração funcione como limite: o que se veda é a discriminação, não apenas as formas nomeadas.',
            },
            {
              title: 'Art. 11 — além da lei',
              description:
                'Vai adiante do Art. 8º, que trata de copyrights e patentes. O Art. 11 protege também INICIATIVAS e SOLUÇÕES — coisas que muitas vezes não têm proteção legal formal, mas cuja apropriação continua sendo antiética.',
            },
            {
              title: 'Art. 10 — privacidade como dever profissional',
              description:
                'Não comprometer a honra, a dignidade e a privacidade de qualquer pessoa. Para quem lida com bases de dados e sistemas de informação, é o artigo mais operacional do conjunto.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Onde os casos da AV1 encontram o código" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed">
          Não é difícil ligar os pontos. No caso da denúncia, o <strong>Art. 7º</strong> (respeitar a legislação e
          o interesse social), o <strong>Art. 8º</strong> (honrar compromissos e contratos) e o{' '}
          <strong>Art. 10</strong> (não comprometer a honra e a dignidade de qualquer pessoa) apontam para lados
          que precisam ser ponderados entre si.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          No caso do aplicativo manipulador, o <strong>Art. 1º</strong> — contribuir para o bem-estar social — é
          diretamente contrariado por um produto cujo mecanismo declarado é a manipulação do comportamento. Um
          código não decide o caso por você, mas nomeia o que está em jogo.
        </p>
      </Subsection>
    </section>
  );
}
