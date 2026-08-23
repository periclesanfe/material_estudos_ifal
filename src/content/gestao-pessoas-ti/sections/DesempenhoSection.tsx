import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function DesempenhoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Avaliação do Desempenho"
        subtitle="Cinco fatores explicam o desempenho — e só um deles é “esforço”"
        colorClass="text-accent"
        badge="2ª Prova · Trabalhos"
      />

      <Subsection title="O que determina o desempenho no cargo" accentClass="text-accent2">
        <TheoryBlock title="Cinco fatores que interagem">
          <p>
            É tentador reduzir desempenho a esforço — e essa redução produz avaliações injustas. O material
            apresenta cinco fatores que interagem para determinar o desempenho de alguém num cargo:
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Valor das recompensas',
              description: 'Quanto o indivíduo efetivamente valoriza aquilo que a organização oferece em troca. Recompensa que a pessoa não valoriza não move ninguém.',
              accent: 'accent',
            },
            {
              title: 'Capacidades do indivíduo',
              description: 'Conhecimentos, habilidades e competências. Sem elas, nenhum esforço compensa.',
              accent: 'accent2',
            },
            {
              title: 'Esforço individual',
              description: 'A dedicação aplicada — o único fator que costuma ser lembrado quando se avalia alguém.',
              accent: 'accent3',
            },
            {
              title: 'Percepção de que as recompensas dependem do esforço',
              description:
                'A crença de que esforçar-se leva de fato a ser recompensado. Onde essa crença se quebra — porque promoções parecem arbitrárias, por exemplo — o esforço despenca, independentemente da capacidade.',
              accent: 'accent4',
            },
            {
              title: 'Percepções de papel',
              description:
                'A compreensão das responsabilidades e expectativas do cargo. É o fator mais silencioso: alguém pode ter capacidade e dedicação de sobra e ainda assim ir mal, por estar aplicando as duas no que não era esperado dele.',
              accent: 'accent5',
            },
          ]}
        />
        <HighlightBox title="A consequência para quem avalia" accent="var(--color-accent4)">
          <p>
            Diante de um desempenho ruim, a pergunta útil não é "essa pessoa se esforçou?", e sim{' '}
            <strong>qual dos cinco fatores falhou</strong>. Cada um pede uma resposta diferente: falta de
            capacidade pede treinamento; percepção de papel confusa pede conversa e clareza de expectativas;
            descrença na relação entre esforço e recompensa pede revisão do sistema de reconhecimento. Tratar
            tudo como falta de empenho é errar o diagnóstico na maioria dos casos.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Administração participativa por objetivos" accentClass="text-accent3">
        <FlowDiagram
          items={[
            '1. Formulação CONJUNTA de objetivos consensuais',
            '2. Compromisso pessoal quanto ao alcance dos objetivos formulados',
            '3. Negociação com o gerente sobre a alocação dos meios e recursos necessários',
            '4. Desempenho: comportamento no sentido de alcançar os objetivos',
            '5. Constante medição dos resultados e comparação com os objetivos',
            '6. Retroação intensiva e avaliação conjunta e contínua do processo',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Duas etapas merecem atenção. A <strong>primeira</strong> é conjunta e consensual — se a chefia define e
          comunica, não é administração participativa. E a <strong>terceira</strong> é a mais frequentemente
          pulada: cobrar um objetivo sem negociar os meios para alcançá-lo transfere ao avaliado a
          responsabilidade por uma condição que ele não controla.
        </p>
      </Subsection>

      <Subsection title="A atividade da turma" accentClass="text-accent4">
        <ExampleBox title="Descrever o processo de avaliação de uma empresa real">
          <p>
            A atividade em grupo pedia: <strong>escolher uma empresa e, após pesquisa, descrever o seu processo
            de avaliação de desempenho dos funcionários</strong>. O professor pediu ainda que os grupos
            anunciassem no mural a empresa escolhida, para evitar repetições.
          </p>
          <p>
            É um exercício revelador porque expõe a distância entre teoria e prática. Muitas organizações
            avaliam anualmente, com formulário padronizado, sem negociação prévia de objetivos e sem retroação
            contínua — ou seja, cumprem a etapa 5 (medição) sem as etapas 1, 3 e 6. O resultado é a avaliação
            vivida como ritual burocrático, que ninguém leva a sério.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
