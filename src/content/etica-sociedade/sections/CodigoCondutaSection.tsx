import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';

export default function CodigoCondutaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Integridade na Publicação Científica"
        subtitle="Código de Conduta para Publicações da SBC — um documento distinto do Código de Ética"
        colorClass="text-accent3"
        badge="AV2"
      />

      <TheoryBlock title="Dois documentos, dois propósitos">
        <p>
          A SBC mantém <strong>dois</strong> documentos que costumam ser confundidos. O{' '}
          <strong>Código de Ética</strong> trata da conduta profissional em geral, com seus doze artigos. O{' '}
          <strong>Código de Conduta para Publicações</strong> trata especificamente da integridade na publicação
          científica.
        </p>
        <p>
          A premissa declarada: uma das principais formas de difundir o conhecimento científico é a publicação,
          após revisão por pares — e uma boa publicação pressupõe o comportamento ético, honesto e responsável{' '}
          <strong>dos autores E dos revisores</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Parte I — condutas NÃO aceitáveis" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            {
              title: 'Art. 1º — PLÁGIO, classificado como FRAUDE',
              description:
                'Cópia de parte de material publicado por outro autor — textos ou resultados de pesquisa — em que seja possível identificar a ocorrência de cópia, sem explicitar e citar o trabalho de origem. O código usa a palavra "fraude", sem atenuação.',
            },
            {
              title: 'Art. 2º — AUTOPLÁGIO, classificado como antiético',
              description:
                'Reutilização total ou parcial de material anteriormente publicado ou submetido PELO PRÓPRIO AUTOR, sem citar o trabalho de origem e sem respeitar a percentagem mínima de material novo solicitada e os direitos autorais do material original.',
            },
            {
              title: 'Art. 3º — SUBMISSÃO MÚLTIPLA',
              description:
                'Submeter o mesmo trabalho ou conjunto de resultados a mais de um veículo simultaneamente é antiético SE ao menos um dos veículos não aceitar explicitamente submissões múltiplas.',
            },
            {
              title: 'Art. 4º — EXCLUSÃO DE ARTIGO',
              description:
                'Caso os problemas dos artigos 1º, 2º e 3º só sejam percebidos APÓS a publicação, a observação posterior resultará na exclusão do artigo do veículo onde foi publicado, e poderá levar a uma representação ao Conselho de Ética da SBC.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As três exceções da submissão múltipla" accentClass="text-accent">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            {
              title: 'I — natureza diferente',
              description:
                'Veículos de natureza diferente, desde que os organizadores e editores de TODOS os veículos tenham sido informados, no momento da submissão, da existência da outra submissão.',
            },
            {
              title: 'II — idiomas diferentes',
              description:
                'Todos escritos em idiomas diferentes, desde que os editores de todos os veículos aceitem submissões múltiplas em idiomas distintos e tenham sido informados explicitamente.',
            },
            {
              title: 'III — após rejeição',
              description: 'A submissão para outro veículo ocorra APÓS a rejeição da submissão anterior.',
            },
          ]}
        />
        <HighlightBox title="O fio comum é a transparência" accent="var(--color-accent3)">
          <p>
            Nas duas primeiras exceções, a condição é sempre a mesma: <strong>todos os editores informados no
            momento da submissão</strong>. O problema não é o duplo envio em si — é a <strong>omissão</strong>.
          </p>
          <p>
            É a mesma lógica que atravessa os três primeiros artigos: plágio e autoplágio são definidos pela
            ausência de citação da origem, não pela reutilização em si. O que o código combate é a informação
            escondida.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Parte II — ações recomendáveis" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Art. 5º — REPRODUTIBILIDADE',
              description:
                'Recomenda-se que os artigos indiquem a disponibilidade pública do material utilizado na pesquisa — como CÓDIGOS e BASES DE DADOS —, de modo a facilitar a reprodução dos resultados por outros pesquisadores. Em computação, isso é particularmente concreto.',
              accent: 'accent',
            },
            {
              title: 'Art. 6º — PARTICIPAÇÃO EM AUTORIA',
              description:
                'Espera-se que todos os autores de um trabalho publicado ou submetido tenham tido EFETIVA PARTICIPAÇÃO no respectivo trabalho. É a resposta do código à autoria de cortesia — nomes acrescentados por hierarquia ou reciprocidade.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Parte III — disposições gerais" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'Art. 7º — como se denuncia uma violação',
              description:
                'A ocorrência de violações pode ser apresentada ao editor dos anais do evento ou do periódico, que deverá dar a solução adequada ou encaminhar ao Comitê de Ética da SBC, que decidirá pela aplicação ou não de alguma penalidade.',
            },
            {
              title: 'Art. 8º — abrangência',
              description:
                'O código deve ser seguido por TODOS os eventos e publicações realizados ou apoiados pela SBC — o que alcança a maior parte da produção científica em computação no Brasil.',
            },
            {
              title: 'Art. 9º — o que não estiver previsto',
              description: 'Situações não previstas no código serão analisadas pelo Comitê de Ética da SBC.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Vale registrar uma inconsistência do próprio documento: o Art. 4º menciona{' '}
          <strong>"Conselho de Ética"</strong>, enquanto os artigos 7º e 9º mencionam{' '}
          <strong>"Comitê de Ética"</strong>. A divergência está no texto original reproduzido no material, e
          fica anotada aqui em vez de ser silenciosamente uniformizada.
        </p>
      </Subsection>

      <HighlightBox title="Por que isso interessa a um estudante de graduação" accent="var(--color-accent2)">
        <p>
          Porque o TCC, os artigos de iniciação científica e os trabalhos submetidos a eventos da SBC estão sob
          este código. O Art. 8º é explícito quanto à abrangência.
        </p>
        <p>
          E porque os conceitos de <strong>autoplágio</strong> e de <strong>autoria de cortesia</strong>{' '}
          costumam ser desconhecidos justamente por quem está começando a publicar — que é quando o
          desconhecimento custa mais caro.
        </p>
      </HighlightBox>
    </section>
  );
}
