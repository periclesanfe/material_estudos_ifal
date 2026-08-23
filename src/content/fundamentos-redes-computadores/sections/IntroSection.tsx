import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fundamentos de Redes de Computadores"
        subtitle="De cima para baixo — do navegador que você já usa até os bits no fio"
        colorClass="text-accent"
      />

      <HighlightBox title="A abordagem top-down">
        <p>
          FRDC (4º período, 80h, 4h semanais) segue a lógica <strong>top-down</strong>: começa pela camada de{' '}
          <strong>aplicação</strong> — navegador, e-mail, DNS, coisas que você usa todo dia — e desce até a
          camada física, em vez do caminho tradicional de baixo para cima.
        </p>
        <p>
          A vantagem é motivacional e real: cada camada nova responde a uma pergunta que a anterior deixou em
          aberto, em vez de acumular abstrações antes de mostrar para que servem.
        </p>
      </HighlightBox>

      <Subsection title="Os quatro módulos da turma" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Módulo 1 — Redes de computadores e a Internet: o panorama geral',
            'Módulo 2 — Camada de aplicação: HTTP, FTP, e-mail, DNS e P2P',
            'Módulo 3 — Camada de transporte: UDP, TCP e congestionamento',
            'Módulo 4 — Camada de rede: IP, endereçamento e roteamento',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'Um quiz por módulo',
              description:
                'Quatro quizzes aplicados em Google Forms, um ao final de cada módulo — avaliação formativa, acompanhando o avanço pela pilha de protocolos.',
            },
            {
              title: 'Av1 — capítulos 1 e 2',
              description: 'Fundamentos de redes e Internet mais a camada de aplicação.',
            },
            {
              title: 'Av2 — capítulos 3 e 4',
              description: 'Camada de transporte e camada de rede.',
            },
            {
              title: 'Av3 — projeto de sockets',
              description:
                'Projeto prático de programação em rede. As propostas vinham do site codingchallenges.fyi, e o professor destacou o desafio de implementar um load balancer.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A ementa oficial" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          O PPC do curso define para FNRC: introdução às redes e à Internet, arquiteturas e padrões, topologias e
          meios físicos de transmissão, camada de aplicação (DNS e serviços da Internet), camada de transporte
          (TCP e UDP), camada de rede (endereçamento e roteamento), camada de enlace, camada física, redes locais,
          redes públicas de comunicação de dados, interligação de redes e projeto de redes.
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Kurose & Ross',
              description:
                '"Redes de Computadores e a Internet — Uma Abordagem Top-Down" (Pearson). É o livro que dá a estrutura à disciplina, e de onde vem a divisão em módulos.',
              accent: 'accent',
            },
            {
              title: 'Tanenbaum & Wetherall',
              description: '"Redes de Computadores" (Pearson). Bibliografia básica, com abordagem complementar.',
              accent: 'accent2',
            },
            {
              title: 'Soares et al.',
              description: '"Das LANs, MANs, WANs às Redes ATM" (Campus). Completa a bibliografia básica do PPC.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O recorte efetivo desta turma" accentClass="text-accent4">
        <HighlightBox title="Quatro capítulos, não nove" accent="var(--color-accent4)">
          <p>
            A ementa prevê também camada de enlace e camada física, e o pacote de slides distribuído contém nove
            capítulos. Mas o mural da turma mostra materiais, quizzes e avaliações apenas para os{' '}
            <strong>capítulos 1 a 4</strong>.
          </p>
          <p>
            O semestre foi atravessado por uma <strong>greve de professores</strong>, encerrada em junho de 2024,
            e por uma suspensão de aulas por questões de segurança no campus em abril. O calendário ficou
            comprimido — o próprio professor avisou que restaria "um período bastante curto para finalização do
            semestre". Este material acompanha o recorte que foi efetivamente trabalhado.
          </p>
        </HighlightBox>
      </Subsection>

      <HighlightBox title="Sobre a origem deste material" accent="var(--color-accent3)">
        <p>
          Uma diferença importante em relação às outras matérias do site: aqui{' '}
          <strong>o material distribuído não é de autoria do professor</strong>. Os slides são o pacote oficial
          da editora que acompanha o livro do Kurose, e os PDFs anexados são os livros completos de Kurose e
          Tanenbaum — todos obras protegidas por direito autoral.
        </p>
        <p>
          Por isso este conteúdo <strong>não resume nem transcreve esses materiais</strong>. O que ele registra é
          a <strong>estrutura da disciplina</strong> — que é decisão do professor: a divisão em módulos, o desenho
          das avaliações, o projeto de sockets, as ferramentas escolhidas — apoiada na ementa oficial do PPC e
          escrita com os <strong>conceitos padrão de redes</strong>, que são conhecimento técnico de domínio
          comum. Para estudar a fundo, use os livros da bibliografia.
        </p>
        <p className="text-sm">
          <strong>Lacunas:</strong> os quatro quizzes são formulários do Google e não foram capturados, então as
          questões reais da turma não estão disponíveis. Os enunciados de Av1, Av2 e Av3 não têm anexo no mural —
          conhece-se o escopo, mas não o formato nem os critérios de correção.
        </p>
      </HighlightBox>
    </section>
  );
}
