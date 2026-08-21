import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arquitetura e Organização de Computadores"
        subtitle="Descer a escada da abstração: do computador como máquina de níveis até os bits que atravessam o caminho de dados"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          AOCP (80h, 2º período, 4h semanais) responde a uma pergunta que quase todo o resto do curso evita:{' '}
          <strong>o que acontece de fato quando um programa roda?</strong> A disciplina desmonta o computador
          camada por camada — primeiro a visão de sistema (CPU, memória, barramentos, E/S), depois as portas
          lógicas que formam os circuitos, depois a linguagem de montagem que o processador realmente executa, e
          por fim o caminho de dados que decodifica e cumpre cada instrução.
        </p>
        <p>
          O fio condutor é a arquitetura <strong>MIPS</strong>: pequena o bastante para caber num semestre e
          regular o bastante para que cada decisão de projeto fique visível. Você vai escrever assembly de
          verdade no simulador MARS.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Módulo 1 — Introdução: máquinas de níveis, evolução, lei de Moore e análise de desempenho',
            'Módulo 2 — Organização de sistemas: CPU, ciclo de execução, RISC × CISC, paralelismo, memória e E/S',
            '1ª Prova (unidades 1 e 2)',
            'Módulo 3 — Nível lógico digital: portas, álgebra de Boole, circuitos combinatórios e sequenciais',
            'Módulo 4 — Assembly MIPS: registradores, diretivas, syscalls, estruturas de controle e procedimentos',
            'Arquitetura MIPS: formatos de instrução, modos de endereçamento, caminho de dados e controle',
            '2ª Prova · Trabalho MIPS entregue por repositório git',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: '1ª Prova — unidades 1 e 2',
              description:
                'Organização em níveis, evolução das arquiteturas, CPU e ciclo de execução, RISC × CISC, paralelismo, hierarquia de memória, entrada/saída e análise de desempenho.',
            },
            {
              title: '2ª Prova',
              description:
                'Nível lógico digital, assembly MIPS, formatos de instrução, modos de endereçamento e caminho de dados monociclo e multiciclo.',
            },
            {
              title: 'Trabalho MIPS',
              description:
                'Programa com menu: conversão Fahrenheit–Celsius, enésimo termo de Fibonacci e enésimo número par, cada cálculo obrigatoriamente dentro de um procedimento com argumento e retorno.',
            },
            {
              title: 'Quizzes semanais',
              description:
                'Um quiz por módulo (semanas 1 a 4), aplicados por formulário, acompanhando o ritmo das leituras dirigidas nos livros-base.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O trabalho foi entregue por repositório git em vez de apresentação presencial — e o professor avisou que{' '}
          <strong>comentar o código exaustivamente seria critério de avaliação</strong>, justamente porque não
          haveria defesa oral. Vale a pena manter o hábito.
        </p>
      </Subsection>

      <Subsection title="Livros e ferramentas" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Tanenbaum — Organização Estruturada de Computadores',
              description:
                'O livro que dá a espinha dorsal dos módulos 1 a 3: a ideia de máquina de níveis, a organização de sistemas e o nível lógico digital. As leituras dirigidas foram os capítulos 1, 2 e as seções 3.1 a 3.3.3.',
              accent: 'accent',
            },
            {
              title: 'Patterson & Hennessy — Organização e Projeto de Computadores',
              description:
                'A referência da parte MIPS: o capítulo 2 (conjunto de instruções) e as seções sobre caminho de dados. É de Patterson, com Séquin, que vêm o RISC e os quatro princípios de projeto.',
              accent: 'accent2',
            },
            {
              title: 'Stallings — Arquitetura e Organização de Computadores',
              description:
                'Terceiro livro-base, usado nas leituras sobre barramentos, memória e entrada/saída (seções 4.1, 6.1, 6.2, capítulo 7 e 12.1 a 12.5).',
              accent: 'accent3',
            },
            {
              title: 'MARS 4.5',
              description:
                'MIPS Assembler and Runtime Simulator: monta e executa o assembly, mostrando registradores e memória a cada passo. É nele que todos os exemplos da disciplina rodam — e é a única forma honesta de estudar assembly.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma ARQC 2022.2 — BSI/IFAL: ementa, slides
          das aulas de lógica digital, assembly e arquitetura MIPS, os decks dos capítulos 1 a 3 de Tanenbaum, a
          coleção de quinze exemplos comentados em assembly distribuída pelo professor, o enunciado do trabalho
          prático e os roteiros de leitura dos livros-base. Os exemplos de código foram reescritos e recomentados;
          os exercícios numéricos de desempenho aparecem resolvidos passo a passo.
        </p>
      </HighlightBox>
    </section>
  );
}
