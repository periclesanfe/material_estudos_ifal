import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function MotivacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Motivação: Maslow e Herzberg"
        subtitle="Duas teorias clássicas que se encaixam — e a descoberta contraintuitiva sobre salário"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Motivo e motivação">
        <p>
          <strong>Motivo</strong> é tudo aquilo que impulsiona a pessoa a agir de determinada forma.{' '}
          <strong>Motivação</strong> relaciona-se ao sistema de cognição do indivíduo: os atos são guiados pelo
          que ele <em>pensa, acredita e prevê</em>. Ela funciona em termos de forças ativas e impulsionadoras,
          traduzidas por palavras como "desejo" e "receio".
        </p>
        <p>
          E há uma consequência prática nessa definição: as pessoas <strong>diferem</strong> quanto à motivação.
          Necessidades, valores e capacidades variam de indivíduo para indivíduo, produzindo padrões de
          comportamento diferentes. Não existe o incentivo que funciona para todos.
        </p>
      </TheoryBlock>

      <Subsection title="As três premissas do comportamento" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'O comportamento é causado',
              description: 'Há sempre uma causa, interna ou externa. Comportamento no trabalho não brota do nada.',
              accent: 'accent',
            },
            {
              title: 'O comportamento é motivado',
              description: 'Não é casual nem aleatório: é sempre orientado e dirigido para algum objetivo.',
              accent: 'accent2',
            },
            {
              title: 'O comportamento é orientado para objetivos',
              description: 'Em todo comportamento existe sempre um impulso, um desejo, uma necessidade ou uma tendência.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Somadas, as três dizem algo útil ao gestor: quando um comportamento parece incompreensível, a hipótese
          correta não é "essa pessoa é assim" — é que existe uma causa e um objetivo que ainda não foram
          identificados.
        </p>
      </Subsection>

      <Subsection title="O ciclo motivacional" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'Equilíbrio interno',
            'Estímulo ou incentivo',
            'Necessidade',
            'Tensão',
            'Comportamento ou ação',
            'Satisfação — que realimenta o equilíbrio interno',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O ciclo é fechado: satisfeita a necessidade, retorna-se ao equilíbrio — até que um novo estímulo o
          rompa. Isso explica por que motivação não é um estado permanente que se "instala" numa equipe: é um
          processo que se repete.
        </p>
      </Subsection>

      <Subsection title="A hierarquia das necessidades de Maslow" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '5. Autorrealização — o topo',
              description: 'Crescimento, desenvolvimento pessoal, sucesso profissional. É a necessidade que nunca se satisfaz plenamente.',
            },
            {
              title: '4. Estima (ego)',
              description: 'Status, prestígio, autorrespeito, autoconfiança, reconhecimento. Não basta pertencer ao grupo: é preciso ser reconhecido nele.',
            },
            {
              title: '3. Sociais',
              description: 'Amizade, amor, pertencer ao grupo, atividades sociais. A primeira das necessidades secundárias.',
            },
            {
              title: '2. Segurança',
              description: 'Proteção, abrigo, inexistência de perigo. No trabalho, aparece como estabilidade e previsibilidade.',
            },
            {
              title: '1. Fisiológicas — a base',
              description: 'Fome, sede, sono. Enquanto não atendidas, dominam o comportamento e as demais mal aparecem.',
            },
          ]}
        />
        <HighlightBox title="Primárias e secundárias">
          <p>
            As duas da base — fisiológicas e de segurança — são as <strong>necessidades primárias</strong>. As
            três de cima — sociais, estima e autorrealização — são as <strong>secundárias</strong>. Essa divisão
            reaparece na próxima teoria, e não por acaso.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A teoria dos dois fatores de Herzberg" accentClass="text-accent5">
        <ComparisonTable
          leftLabel="Fatores HIGIÊNICOS"
          rightLabel="Fatores MOTIVACIONAIS"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'A que se referem',
              left: 'Às condições que RODEIAM a pessoa enquanto trabalha',
              right: 'Ao CONTEÚDO do cargo, às tarefas e aos deveres do cargo em si',
            },
            {
              criterion: 'Exemplos',
              left: 'Salário, benefícios sociais, condições físicas e ambientais, políticas da empresa, tipo de supervisão, relações interpessoais, segurança no cargo, vida pessoal',
              right: 'O trabalho em si, responsabilidade, progresso, crescimento',
            },
            {
              criterion: 'Efeito',
              left: 'LIMITADOS em sua capacidade de influenciar poderosamente o comportamento — sua ausência gera insatisfação, sua presença não motiva',
              right: 'Produzem efeito DURADOURO de satisfação e aumento de produtividade',
            },
            {
              criterion: 'Correspondência com Maslow',
              left: 'Cobrem sobretudo as necessidades inferiores (fisiológicas, segurança, parte das sociais)',
              right: 'Cobrem as superiores (estima e autorrealização)',
            },
          ]}
        />
        <HighlightBox title="A descoberta contraintuitiva" accent="var(--color-accent4)">
          <p>
            O achado de Herzberg que mais desafia o senso comum é este:{' '}
            <strong>salário é fator higiênico</strong>. Um salário baixo gera insatisfação genuína; mas
            aumentá-lo <em>remove a insatisfação</em> sem produzir motivação duradoura.
          </p>
          <p>
            A implicação para quem gere equipes é forte e desconfortável: melhorar as condições em volta do
            trabalho — sala, benefícios, remuneração — resolve reclamações, e só. O que motiva de fato está{' '}
            <strong>dentro do trabalho</strong>: a natureza da tarefa, a responsabilidade confiada, a
            possibilidade de progredir e crescer. É por isso que a seção sobre desenho de cargos importa tanto
            quanto a de remuneração.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
