import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function LinuxProcessosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Processos e Contas de Usuário"
        subtitle="Quem está rodando, e quem tem permissão para quê"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <Subsection title="Primeiro plano e segundo plano" accentClass="text-accent2">
        <TheoryBlock title="Quem espera por quem">
          <p>
            Um comando executado em <strong>primeiro plano</strong> (foreground) prende o terminal: você só
            recupera o prompt quando ele termina. Em <strong>segundo plano</strong> (background), o comando roda
            enquanto você continua trabalhando.
          </p>
        </TheoryBlock>
        <ExampleBox title="Controlando a execução">
          <CodeBlock
            language="python"
            code={`df -h                       # primeiro plano: o terminal fica preso até acabar
find / -name fstab &         # o & no final manda para segundo plano

echo um; echo dois; echo tres  # ; executa em sequência, um após o outro

jobs                        # lista o que está parado ou em segundo plano
fg 1                        # traz o job 1 para primeiro plano
bg 1                        # retoma em segundo plano o job 1 (que estava pausado)
                            # Ctrl+Z pausa o processo em primeiro plano
                            # Ctrl+C encerra o processo em primeiro plano`}
          />
          <p className="mt-3">
            Em containers isso ganha um significado extra: o{' '}
            <strong>processo principal é o que mantém o container vivo</strong>. Quando ele termina, o container
            para — por mais que outros processos ainda existissem lá dentro. É a causa mais comum de um container
            que "sobe e morre na hora".
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Observando o sistema" accentClass="text-accent3">
        <ExampleBox title="Processos e recursos">
          <CodeBlock
            language="python"
            code={`ps aux                   # todos os processos, com usuário e hora de início
top                      # visão viva: CPU, memória, processos ativos (q para sair)

pidof nginx              # descobre o PID de um processo pelo nome
kill -9 3412             # encerra o processo de PID 3412 (sinal 9 = KILL)
killall -9 top           # encerra TODOS os processos chamados "top"

nice -n 10 comando       # executa com prioridade menor (escala de -20 a 19;
                         # quanto menor o número, MAIOR a prioridade)

df -h                    # espaço livre e ocupado por partição
du -h --max-depth=1      # espaço ocupado pelos subdiretórios daqui
free -m                  # uso da memória RAM, em megabytes
uptime                   # há quanto tempo o sistema está no ar
uname -a                 # nome e versão do kernel
dmesg | tail             # mensagens do kernel — útil quando algo falha ao subir
time comando             # quanto tempo o comando levou para executar
which ls                 # onde está o executável que será chamado`}
          />
          <p className="mt-3">
            Sobre o <code className="text-accent2">kill</code>: o número é um <strong>sinal</strong>, não uma
            intensidade. O sinal 15 (TERM), que é o padrão, <em>pede</em> ao processo que encerre, permitindo que
            ele salve o que precisa; o 9 (KILL) não pode ser ignorado nem tratado. Comece sempre pelo padrão — o{' '}
            <code className="text-accent2">-9</code> é o último recurso, não o primeiro.
          </p>
          <p>
            A dupla <code className="text-accent2">df</code> e <code className="text-accent2">du</code> se
            confunde com facilidade: <code className="text-accent2">df</code> mostra o espaço das{' '}
            <strong>partições</strong> (disk free) e <code className="text-accent2">du</code> mostra o espaço
            usado por <strong>arquivos e diretórios</strong> (disk usage). Quando o disco enche, usa-se o primeiro
            para descobrir qual partição e o segundo para descobrir o culpado.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Contas de usuário e grupos" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O Linux é <strong>multiusuário</strong> desde a origem, herança direta do Unix. Cada coisa tem dono e
          permissões, e é isso que permite que várias pessoas — ou vários serviços — usem a mesma máquina sem
          interferir umas nas outras. Criar usuários serve para restringir ou permitir acesso a recursos,
          organizar o espaço em disco e personalizar ambientes.
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: '/etc/passwd',
              description:
                'Uma linha por conta, com login, UID, GID, informações do usuário, diretório home e shell. É legível por todos — e foi justamente por isso que as senhas saíram dali.',
              accent: 'accent',
            },
            {
              title: '/etc/shadow',
              description:
                'Onde ficam as senhas cifradas, com leitura restrita ao root. A separação em relação ao passwd é uma decisão de segurança: os dados da conta precisam ser públicos, a senha não.',
              accent: 'accent2',
            },
            {
              title: '/etc/group',
              description:
                'Define os grupos e quem pertence a cada um. Grupos são o mecanismo para dar permissão a um conjunto de pessoas sem repetir a configuração pessoa a pessoa.',
              accent: 'accent3',
            },
          ]}
        />
        <ExampleBox title="Administrando contas">
          <CodeBlock
            language="python"
            code={`adduser fulano                     # cria usuário (pede senha e dados)
adduser --disabled-password fulano # cria sem definir senha
addgroup professores               # cria um grupo
adduser fulano professores         # adiciona o usuário a um grupo existente

passwd                             # troca a própria senha
sudo passwd fulano                 # troca a senha de outro usuário
sudo passwd -l fulano              # bloqueia a conta
sudo passwd -u fulano              # desbloqueia
sudo passwd -S fulano              # mostra o status da conta
passwd -e fulano                   # força a troca no próximo login
passwd -x 5 fulano                 # senha expira em 5 dias

userdel fulano                     # remove o usuário
userdel -r fulano                  # remove também o diretório home
groupdel professores               # remove o grupo

id                                 # UID, GID e grupos do usuário atual
groups aluno                       # grupos a que "aluno" pertence
last                               # histórico de entradas e saídas no sistema
lastlog -u aluno                   # último login de um usuário

su - fulano                        # muda de identidade (o - carrega o ambiente dele)
sudo comando                       # executa UM comando como root`}
          />
          <p className="mt-3">
            A diferença entre <code className="text-accent2">su</code> e{' '}
            <code className="text-accent2">sudo</code> importa: <code className="text-accent2">su</code> abre uma
            sessão como outro usuário e exige a senha <em>dele</em>;{' '}
            <code className="text-accent2">sudo</code> executa um único comando com privilégios elevados, pede a
            sua <em>própria</em> senha e — o ponto decisivo — <strong>deixa registro de quem fez o quê</strong>.
            Em servidor compartilhado, essa auditabilidade é a razão de o sudo ser preferido.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Por que isso reaparece em containers" accent="var(--color-accent3)">
        <p>
          Duas conexões diretas com o resto da disciplina. Primeira: por padrão, o processo dentro de um container
          roda como <strong>root</strong>, e uma das boas práticas de imagem é criar um usuário sem privilégios e
          mudar para ele — exatamente com os comandos desta seção. Segunda: entender UID e GID explica um erro
          clássico ao montar volumes, quando o usuário de dentro do container não tem permissão sobre arquivos
          criados fora dele.
        </p>
      </HighlightBox>
    </section>
  );
}
