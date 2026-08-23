import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Ética, Tecnologia e Sociedade"
        subtitle="Que interesses mobilizam as ações humanas?"
        colorClass="text-accent"
      />

      <HighlightBox title="A pergunta da disciplina">
        <p>
          ETSO (optativa humanística, 40h) começa por uma pergunta simples e difícil — a que dá título a este
          bloco — e a persegue por <strong>três escalas</strong>: a do sujeito que decide, a da profissão que
          estabelece deveres, e a dos acordos internacionais que tentam orientar a Sociedade da Informação.
        </p>
        <p>
          A ordem importa. Antes de chegar a códigos e declarações, a disciplina estabelece de onde a ética vem —
          e a resposta que dá é que ela vem <strong>do encontro com o outro</strong>, não de uma norma escrita.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'O paradigma da complexidade: por que não dá para pensar em partes',
            'O que é ética — e por que não se nasce ético',
            'Leonardo Boff: a ética nasce quando o outro emerge',
            'As cinco éticas da classificação didática',
            'Ética ambiental na prática: logística reversa e lixo eletrônico',
            'Dilema, conflito e decisão',
            'Dois estudos de caso: a denúncia e o aplicativo manipulador',
            'A Cúpula Mundial sobre a Sociedade da Informação',
            'As dimensões éticas: Genebra e a Linha de Ação C10',
            'Túnis: segurança, crimes cibernéticos e direitos',
            'A Recomendação da UNESCO sobre a Ética da IA',
            'A SBC e seus dois códigos',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'AV1 — três atividades de fixação',
              description:
                'A leitura comentada da entrevista de Luciano Floridi sobre ética digital, e dois estudos de caso de dilema ético resolvidos em grupo. A avaliação foi deliberadamente fracionada, em vez de concentrada numa prova.',
            },
            {
              title: 'AV2 — ciclo de seminários',
              description:
                'Equipes de 4 a 5 pessoas apresentando temas escolhidos por elas mesmas, com 35 a 40 minutos cada. Também era avaliada a presença nas apresentações das outras equipes — a atividade é coletiva.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="De onde vem o material" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Quatro decks autorais',
              description:
                'Preparados pela professora: complexidade e conceito de ética; processos de tomada de decisão e IA; a Cúpula Mundial sobre a Sociedade da Informação; e a Sociedade Brasileira de Computação.',
              accent: 'accent',
            },
            {
              title: 'Documentos da CMSI',
              description:
                'A Declaração de Princípios e o Plano de Ação de Genebra (2003) e o Compromisso e a Agenda de Túnis (2005), reunidos na publicação Cadernos CGI.br.',
              accent: 'accent2',
            },
            {
              title: 'Documentos da SBC',
              description:
                'O Código de Ética do Profissional de Informática (2013) e o Código de Conduta para Publicações — dois documentos distintos, com propósitos distintos.',
              accent: 'accent3',
            },
            {
              title: 'Textos de referência',
              description:
                'Leonardo Boff, "Como nasce a ética"; Luciano Floridi sobre ética digital; Eduardo Nuvens sobre critérios de quem e para quem; e Edgar Morin, pela leitura de Petraglia (2022).',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Sobre este material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma de Ética, Tecnologia e Sociedade
          2023.2 — BSI/IFAL. Os documentos internacionais (ONU, UNESCO) e os códigos da SBC são de circulação
          pública; ainda assim, aparecem aqui resumidos e com a fonte indicada.
        </p>
        <p className="text-sm">
          <strong>Lacunas:</strong> os enunciados formais de AV1 e AV2 não constam além do que foi publicado no
          mural da turma. Os nomes dos estudantes citados nos avisos não são reproduzidos aqui, e os temas dos
          seminários aparecem apenas por título — as apresentações em si são trabalho autoral das equipes.
        </p>
      </HighlightBox>
    </section>
  );
}
