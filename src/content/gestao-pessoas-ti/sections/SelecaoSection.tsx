import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function SelecaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Seleção de Pessoas"
        subtitle="Uma comparação entre duas colunas: o que o cargo requer e o que o candidato oferece"
        colorClass="text-accent"
        badge="1ª Prova · Trabalhos"
      />

      <TheoryBlock title="Recrutar atrai, selecionar escolhe">
        <p>
          Se o recrutamento é um sistema de informação que <em>atrai</em>, a seleção é o processo que{' '}
          <em>escolhe</em>. E sua lógica, no material, é apresentada como uma balança de dois pratos.
        </p>
      </TheoryBlock>

      <Subsection title="A lógica da seleção" accentClass="text-accent2">
        <ExampleBox title="Duas colunas que precisam ser comparadas">
          <CodeBlock
            language="python"
            code={`   O QUE O CARGO REQUER              ⚖️              O QUE O CANDIDATO OFERECE
   ─────────────────────                            ─────────────────────────
   Especificações do cargo                          Características do candidato

   Obtidas pela ANÁLISE E                           Obtidas pelas
   DESCRIÇÃO DO CARGO                               TÉCNICAS DE SELEÇÃO
   (quais requisitos o cargo                        (quais as condições pessoais
    exige de seu ocupante)                           para ocupar o cargo)`}
          />
          <p className="mt-3">
            A consequência prática é severa: <strong>a coluna da esquerda vem primeiro</strong>. Sem análise e
            descrição do cargo bem-feitas, nenhuma bateria de testes resolve — não se sabe contra o que comparar,
            e a seleção degenera em escolher "quem pareceu melhor".
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="De onde vêm as informações sobre o cargo" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            { title: 'Descrição e análise do cargo', description: 'As atividades a executar e as responsabilidades atribuídas.', accent: 'accent' },
            { title: 'Requisição de pessoal', description: 'O pedido formal da área que precisa preencher a vaga.', accent: 'accent2' },
            { title: 'Competências requeridas', description: 'O que a pessoa precisa saber, saber fazer e como precisa agir.', accent: 'accent3' },
            { title: 'Pesquisa do cargo no mercado', description: 'Como outras organizações definem cargo equivalente.', accent: 'accent4' },
            {
              title: 'Técnica de incidentes críticos',
              description: 'Levantar situações reais em que o desempenho foi excepcionalmente bom ou ruim, para identificar o que de fato diferencia no cargo.',
              accent: 'accent5',
            },
            { title: 'Hipótese de trabalho', description: 'Uma previsão do conteúdo do cargo quando ele ainda não existe na organização.', accent: 'accent' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As seis fontes convergem para a <strong>ficha de especificações do cargo</strong>, e é ela que
          fundamenta a escolha das técnicas de seleção.
        </p>
      </Subsection>

      <Subsection title="Os quatro modelos" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Colocação — um candidato, uma vaga',
              description: 'Não há comparação entre pessoas: decide-se apenas se aquele candidato serve ou não para aquela vaga.',
            },
            {
              title: 'Seleção — vários candidatos, uma vaga',
              description: 'O modelo mais comum: compara-se o conjunto e escolhe-se um. Os demais são dispensados.',
            },
            {
              title: 'Classificação — vários candidatos, várias vagas',
              description:
                'O candidato não aprovado para uma vaga pode ser aproveitado em outra. Aproveita muito melhor o esforço de recrutamento, porque ninguém bom se perde por não caber num cargo específico.',
            },
            {
              title: 'Agregação de valor — competências, não vagas',
              description:
                'Vários candidatos oferecem competências que possam interessar à organização, independentemente de uma vaga definida. Inverte a lógica: em vez de perguntar "quem preenche este cargo?", pergunta "o que esta pessoa pode acrescentar?".',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As cinco técnicas de seleção" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Entrevistas',
              description: 'A técnica mais usada e a mais sujeita a viés. Explora trajetória, motivação e comportamento relatado.',
              accent: 'accent',
            },
            {
              title: '2. Provas de conhecimento',
              description: 'Medem o que a pessoa sabe — conhecimento técnico, domínio de ferramentas, conteúdo específico do cargo.',
              accent: 'accent2',
            },
            {
              title: '3. Testes psicológicos',
              description: 'Avaliam aptidões. Exigem aplicação e interpretação por profissional habilitado.',
              accent: 'accent3',
            },
            {
              title: '4. Testes de personalidade',
              description: 'Investigam traços de caráter e temperamento — e não capacidade técnica.',
              accent: 'accent4',
            },
            {
              title: '5. Técnicas de simulação',
              description:
                'Colocam o candidato numa situação semelhante à do cargo e observam o que ele faz. Das cinco, é a que melhor prevê desempenho, porque mede comportamento em vez de relato sobre comportamento.',
              accent: 'accent5',
            },
          ]}
        />
        <HighlightBox title="A atividade da turma">
          <p>
            Os grupos fizeram <strong>apresentações sobre técnicas de seleção dos candidatos</strong>. Vale notar
            o que a lista das cinco técnicas ensina: elas medem coisas diferentes, e nenhuma sozinha cobre o
            necessário. Um bom processo combina — tipicamente uma prova de conhecimento para verificar domínio
            técnico, uma simulação para ver a pessoa trabalhando e uma entrevista para explorar trajetória e
            expectativas.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
