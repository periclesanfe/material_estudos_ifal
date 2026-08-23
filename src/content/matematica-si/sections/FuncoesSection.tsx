import HighlightBox from '../../../components/ui/HighlightBox';
import FormulaBlock, { InlineFormula } from '../../../components/ui/FormulaBlock';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Funções, Injeção e Bijeção"
        subtitle="Um caso particular de relação — com duas exigências que mudam tudo"
        colorClass="text-accent5"
        badge="Estruturas discretas"
      />

      <TheoryBlock title="Função é relação com regras">
        <p>
          Uma <strong>função</strong> de A em B é uma relação que satisfaz duas exigências:
        </p>
        <p>
          <strong>1. Todo</strong> elemento de A precisa ter imagem — nenhum pode ficar sem par.
          <br />
          <strong>2. Cada</strong> elemento de A tem <strong>exatamente uma</strong> imagem — nenhum pode ter
          duas.
        </p>
        <p>
          Resumindo: <em>toda função é uma relação, mas nem toda relação é função</em>. Faltar imagem ou ter
          imagem dupla descaracteriza a função.
        </p>
      </TheoryBlock>

      <Subsection title="Os três conjuntos" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'DOMÍNIO', description: 'O conjunto de partida — todos os elementos que entram na função.', accent: 'accent' },
            {
              title: 'CONTRADOMÍNIO',
              description: 'O conjunto de chegada declarado — onde os resultados podem cair.',
              accent: 'accent2',
            },
            {
              title: 'IMAGEM',
              description:
                'O subconjunto do contradomínio efetivamente atingido. Está sempre contido no contradomínio, e pode ser menor que ele.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A distinção entre contradomínio e imagem parece pedante até se perceber que é exatamente ela que
          define a sobrejetividade.
        </p>
      </Subsection>

      <Subsection title="As três classificações" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'INJETORA — nunca dois no mesmo lugar',
              description:
                'Elementos distintos do domínio têm imagens distintas. Nenhum elemento do contradomínio recebe duas setas. É a propriedade que uma função de hash idealmente teria — e colisão é precisamente uma falha de injetividade.',
            },
            {
              title: 'SOBREJETORA — nada sobra no destino',
              description:
                'A imagem é IGUAL ao contradomínio: todo elemento de chegada é atingido por alguém. Nenhum elemento do contradomínio fica sem receber seta.',
            },
            {
              title: 'BIJETORA — as duas ao mesmo tempo',
              description:
                'Injetora e sobrejetora simultaneamente. Estabelece uma correspondência perfeita, um para um, entre domínio e contradomínio — cada elemento de um lado emparelha com exatamente um do outro.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Só bijeções têm inversa" accent="var(--color-accent4)">
        <p>
          A <strong>função inversa</strong> desfaz o que a função fez. Para que ela exista, a função precisa ser{' '}
          <strong>bijetora</strong> — e cada metade da exigência tem uma razão clara:
        </p>
        <p>
          <strong>Sem injetividade</strong>, dois elementos teriam a mesma imagem, e a inversa não saberia para
          qual dos dois voltar — seria ambígua, e portanto não seria função.
        </p>
        <p>
          <strong>Sem sobrejetividade</strong>, haveria elementos no contradomínio sem origem alguma, e a inversa
          ficaria indefinida neles — violando a exigência de que toda função cubra seu domínio inteiro.
        </p>
      </HighlightBox>

      <Subsection title="Composição de funções" accentClass="text-accent3">
        <FormulaBlock
          label="Composição"
          accent="accent3"
          caption="Lê-se da direita para a esquerda: aplica-se g primeiro, depois f."
        >
          (f <span className="op">∘</span> g)(x) <span className="op">=</span> f(g(x))
        </FormulaBlock>
        <p className="text-text-muted leading-relaxed">
          A notação engana quem lê da esquerda para a direita: embora <InlineFormula>f</InlineFormula> apareça
          primeiro, é <InlineFormula>g</InlineFormula> que se aplica antes.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Como a multiplicação de matrizes, a composição <strong>não é comutativa</strong>:{' '}
          <InlineFormula>f <span className="op">∘</span> g</InlineFormula> em geral difere de{' '}
          <InlineFormula>g <span className="op">∘</span> f</InlineFormula>. E a semelhança não é coincidência —
          compor transformações lineares é multiplicar suas matrizes.
        </p>
      </Subsection>

      <Subsection title="Onde essas propriedades aparecem no código" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Propriedade"
          rightLabel="Consequência prática"
          criterionLabel="Contexto"
          rows={[
            {
              criterion: 'Função de hash',
              left: 'Não é injetora (o domínio é maior que o contradomínio)',
              right: 'Colisões são inevitáveis — daí toda tabela de hash precisar de estratégia de tratamento',
            },
            {
              criterion: 'Codificação (UTF-8, Base64)',
              left: 'Precisa ser injetora',
              right: 'Sem injetividade, decodificar seria ambíguo e a informação se perderia',
            },
            {
              criterion: 'Criptografia simétrica',
              left: 'Precisa ser bijetora',
              right: 'Só assim existe a operação inversa — descriptografar',
            },
            {
              criterion: 'Compressão com perda (JPEG)',
              left: 'Deliberadamente não injetora',
              right: 'Várias imagens originais viram o mesmo arquivo — a perda é o preço do tamanho menor',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
