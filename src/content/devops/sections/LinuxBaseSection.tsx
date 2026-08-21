import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function LinuxBaseSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Linux: Fundamentos e Navegação"
        subtitle="Por que uma disciplina de DevOps começa com sete aulas de Linux"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <HighlightBox title="A razão de estar aqui">
        <p>
          Containers <strong>compartilham o kernel do host</strong>, e esse kernel é quase sempre Linux. Toda a
          automação de que a disciplina trata — Dockerfile, scripts de CI, manifestos aplicados por{' '}
          <code className="text-accent2">kubectl</code> — é executada por linha de comando. Sem Linux, o resto da
          disciplina vira memorização de receitas.
        </p>
      </HighlightBox>

      <Subsection title="Kernel, GNU e distribuição" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Kernel Linux',
              description:
                'Apenas o núcleo: gerencia processos, memória, dispositivos e sistemas de arquivos. Todo programa faz chamadas a ele durante a execução. Iniciado por Linus Torvalds em 1991, na Universidade de Helsinki, inspirado no MINIX; versão 1.0 em 1994.',
              accent: 'accent',
            },
            {
              title: 'GNU/Linux',
              description:
                'O kernel MAIS o ferramental GNU de Richard Stallman: compilador, bibliotecas, shell e utilitários. É a soma dos dois que forma um sistema utilizável — daí o nome composto.',
              accent: 'accent2',
            },
            {
              title: 'Distribuição',
              description:
                'O conjunto de softwares reunidos em torno do kernel para formar um sistema completo: instalador, gerenciador de pacotes, utilitários e políticas de atualização. Debian e Slackware rodam o mesmo kernel e são experiências muito diferentes.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="De onde o Linux veio" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'MULTICS (1965)',
              description:
                'Projeto do MIT com Bell Labs e GE: o primeiro sistema multiusuário, multiprocessado e multiprogramado. Ambicioso e complexo demais — e é dessa complexidade que nasce a reação seguinte.',
              accent: 'accent',
            },
            {
              title: 'Unix (1969)',
              description:
                'Ken Thompson e Dennis Ritchie, na AT&T, fazem algo deliberadamente mais simples. Escrito primeiro em Assembly e reescrito em C em 1973 — decisão que o tornou portável entre máquinas, coisa inédita à época.',
              accent: 'accent2',
            },
            {
              title: 'BSD (1978)',
              description:
                'Berkeley Software Distribution, derivada do UNIX V6, foi removendo progressivamente o código da AT&T. A última versão foi a 4.4BSD, em 1993; dela descendem FreeBSD, NetBSD e OpenBSD.',
              accent: 'accent3',
            },
            {
              title: 'POSIX (1990) e Linux (1991)',
              description:
                'O padrão POSIX do IEEE define uma interface comum compatível com Unix — é o que permite que programas migrem entre sistemas da família. No ano seguinte, Torvalds inicia o Linux, com desenvolvimento cooperativo e código aberto.',
              accent: 'accent4',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Características herdadas dessa linhagem: multitarefa e multiusuário, suporte nativo a TCP/IP,
          portabilidade entre arquiteturas, kernel modular (carrega em memória só o necessário), licença GNU com
          liberdade de uso, estudo, redistribuição e melhoria, e padronização por POSIX e Linux Standard Base.
        </p>
      </Subsection>

      <Subsection title="A filosofia que importa para DevOps" accentClass="text-accent4">
        <TheoryBlock title="Programas pequenos que se compõem">
          <p>
            A ideia condutora do Unix é que <strong>cada comando faz uma coisa bem feita</strong> e se combina com
            os outros. Não existe um comando gigante que resolva tudo; existem dezenas de comandos pequenos e um
            mecanismo para encadeá-los.
          </p>
          <p>
            É isso que transforma a linha de comando em uma <strong>linguagem de automação</strong>, e não apenas
            um menu de operações. Cada tarefa nova é uma combinação diferente das mesmas peças — e é por isso que
            aprender vinte comandos rende muito mais do que decorar vinte procedimentos.
          </p>
        </TheoryBlock>
      </Subsection>

      <Subsection title="Navegação e caminhos" accentClass="text-accent5">
        <ComparisonTable
          leftLabel="Caminho absoluto"
          rightLabel="Caminho relativo"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Ponto de partida',
              left: 'A raiz do sistema — começa sempre com /',
              right: 'O diretório em que você está agora',
            },
            {
              criterion: 'Exemplo',
              left: '/home/aluno/Desktop',
              right: 'Desktop  ou  ../projetos',
            },
            {
              criterion: 'Comportamento',
              left: 'Aponta para o mesmo lugar de qualquer ponto do sistema',
              right: 'Muda de significado conforme o diretório corrente',
            },
            {
              criterion: 'Quando usar',
              left: 'Em scripts e automação, onde o diretório de execução é imprevisível',
              right: 'No uso interativo, onde é mais curto e conveniente',
            },
          ]}
        />
        <ExampleBox title="Os comandos de navegação e manipulação">
          <CodeBlock
            language="python"
            code={`pwd                      # print working directory: onde estou?
cd /home/aluno/Desktop   # entra num caminho absoluto
cd ..                    # sobe um nível

ls                       # lista o conteúdo
ls -l                    # formato longo: permissões, dono, grupo, tamanho, data
ls -lh                   # o mesmo, com tamanho legível (234M, 2G)
ls -la                   # inclui os arquivos ocultos (iniciados por ponto)

cp origem destino        # copia
cp -R /etc/gconf /home/aluno   # -R copia diretórios recursivamente
cp -i origem destino     # -i pede confirmação antes de sobrescrever

mv antigo novo           # move E renomeia: é o mesmo comando
rm arquivo               # remove
rm -r diretorio          # -r remove diretório e conteúdo
rm -rf diretorio         # -f não pede confirmação alguma — cuidado

mkdir exercicios         # cria diretório
mkdir um dois tres       # vários de uma vez
rmdir exercicios         # remove diretório (precisa estar vazio)

ln -s origem link        # cria link simbólico
find /home -name fstab   # procura por nome na árvore de diretórios
find / -name "tes*"      # aceita curingas
file /bin/cp             # diz que tipo de conteúdo o arquivo tem`}
          />
          <p className="mt-3">
            Duas observações que economizam sofrimento. Primeiro: <strong>não há lixeira</strong> — o{' '}
            <code className="text-accent2">rm</code> apaga de verdade, e o{' '}
            <code className="text-accent2">-rf</code> apaga sem perguntar nada. Segundo:{' '}
            <code className="text-accent2">mv</code> serve tanto para mover quanto para renomear, porque no fundo
            as duas operações são a mesma coisa — mudar a entrada que aponta para o arquivo.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Lendo uma listagem" accentClass="text-accent">
        <ExampleBox title="Os tipos de item no primeiro caractere">
          <CodeBlock
            language="python"
            code={`$ ls -lh
-rwxr-xr-x 1 aluno users  2,0K script1.sh
drwxr-xr-x 2 aluno users  4,0K arquivos
lrwxrwxrwx 1 aluno users    14 testelink -> arquivos/teste
^
└── o primeiro caractere é o TIPO, não uma permissão`}
          />
          <p className="mt-3">
            Os tipos possíveis: <code className="text-accent2">-</code> arquivo regular,{' '}
            <code className="text-accent2">d</code> diretório, <code className="text-accent2">l</code> link
            simbólico, <code className="text-accent2">p</code> named pipe, <code className="text-accent2">c</code>{' '}
            dispositivo de caractere, <code className="text-accent2">b</code> dispositivo de bloco e{' '}
            <code className="text-accent2">s</code> socket Unix.
          </p>
          <p>
            Só <em>depois</em> desse caractere começam os nove bits de permissão, em três grupos de três — assunto
            de uma seção inteira mais adiante. Confundir o caractere de tipo com a primeira permissão é o erro
            mais comum ao ler uma listagem.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Para descobrir o que um comando faz e quais flags aceita, os manuais estão no próprio sistema:{' '}
          <code className="text-accent2">man ls</code> e <code className="text-accent2">info ls</code>. É o
          primeiro lugar a consultar — antes do buscador.
        </p>
      </Subsection>
    </section>
  );
}
