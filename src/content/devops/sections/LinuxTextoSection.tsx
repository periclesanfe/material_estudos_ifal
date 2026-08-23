import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function LinuxTextoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Texto, Pipes e Redirecionamentos"
        subtitle="O mecanismo que transforma comandos isolados em uma linguagem de automação"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <TheoryBlock title="Tudo é texto">
        <p>
          Em sistemas Unix, configurações, logs e a saída da maioria dos comandos são{' '}
          <strong>texto simples</strong>. Essa uniformidade é o que permite que os mesmos poucos comandos sirvam
          para investigar qualquer coisa — de um arquivo de configuração a um log de container.
        </p>
        <p>
          Para o dia a dia de DevOps, esta seção é a mais rentável de todas: ler logs, filtrar erros e contar
          ocorrências é boa parte do trabalho de diagnosticar um sistema no ar.
        </p>
      </TheoryBlock>

      <Subsection title="Ver e percorrer arquivos" accentClass="text-accent2">
        <ExampleBox title="Comandos de leitura">
          <CodeBlock
            language="python"
            code={`cat /etc/fstab           # despeja o conteúdo inteiro na tela
tac /etc/fstab           # o mesmo, na ordem inversa das linhas
nl /etc/fstab            # exibe numerando as linhas

head arquivo.log         # as primeiras linhas
head -n 20 arquivo.log   # as 20 primeiras
tail arquivo.log         # as últimas linhas
tail -n 50 arquivo.log   # as 50 últimas

more arquivo.log         # pagina a saída — só avança
less arquivo.log         # pagina e permite VOLTAR (setas, Page Up/Down); sai com q

wc -l arquivo.log        # conta linhas
wc -w arquivo.log        # conta palavras
wc -c arquivo.log        # conta bytes

diff texto1.txt texto2.txt   # mostra as diferenças entre dois arquivos
nano arquivo.txt             # editor simples: Ctrl+O salva, Ctrl+X sai`}
          />
          <p className="mt-3">
            Entre <code className="text-accent2">more</code> e <code className="text-accent2">less</code>, prefira
            o segundo: ele vai e volta. A piada consagrada entre administradores é que{' '}
            <em>"less is more than more"</em> — e, neste caso, é literalmente verdade.
          </p>
          <p>
            O <code className="text-accent2">tail</code> tem um uso que vale destacar:{' '}
            <code className="text-accent2">tail -f</code> acompanha um arquivo em tempo real, exibindo cada nova
            linha à medida que ela é escrita. É assim que se observa um log enquanto se reproduz um erro.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="grep: encontrar o que interessa" accentClass="text-accent3">
        <ExampleBox title="O comando mais usado no diagnóstico">
          <CodeBlock
            language="python"
            code={`grep erro aplicacao.log            # linhas que contêm "erro"
grep -i erro aplicacao.log         # ignora maiúsculas e minúsculas
grep -n erro aplicacao.log         # mostra o número de cada linha encontrada
grep -A 3 erro aplicacao.log       # 3 linhas DEPOIS de cada ocorrência
grep -B 3 erro aplicacao.log       # 3 linhas ANTES de cada ocorrência
grep -E "erro|falha" aplicacao.log # expressão regular: uma coisa OU outra

grep "duas palavras" arquivo.txt   # com espaços, use aspas — senão a segunda
                                   # palavra seria lida como nome de arquivo`}
          />
          <p className="mt-3">
            As flags <code className="text-accent2">-A</code> e <code className="text-accent2">-B</code> são as
            mais subestimadas: uma mensagem de erro raramente basta sozinha, e o contexto em volta é o que revela
            a causa. <code className="text-accent2">grep -B 5 -A 5 exception app.log</code> costuma responder mais
            do que qualquer busca isolada.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Redirecionamentos" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '> — sobrescreve',
              description:
                'Redireciona a saída para um arquivo, APAGANDO o conteúdo anterior. Exemplo: ls -lha > listagem.txt. Usar aqui onde se queria >> destrói um log inteiro em silêncio, sem aviso e sem confirmação.',
              accent: 'accent',
            },
            {
              title: '>> — acrescenta',
              description:
                'Redireciona a saída para o FINAL do arquivo, preservando o que já existia. Exemplo: ls -lha >> listagem.txt. É a forma correta de alimentar um arquivo de log ao longo do tempo.',
              accent: 'accent2',
            },
            {
              title: '< — alimenta a entrada',
              description:
                'Faz o comando ler de um arquivo em vez do teclado. Menos frequente no dia a dia, mas essencial para automatizar comandos que esperam entrada interativa.',
              accent: 'accent3',
            },
            {
              title: '| — encadeia (pipe)',
              description:
                'Liga a SAÍDA de um comando à ENTRADA do próximo, sem passar por arquivo nenhum. É o mecanismo central da composição Unix, e o que dá poder real à linha de comando.',
              accent: 'accent4',
            },
          ]}
        />
        <HighlightBox title="A diferença entre > e >> em uma frase" accent="var(--color-accent4)">
          <p>
            <code className="text-accent2">&gt;</code> começa do zero;{' '}
            <code className="text-accent2">&gt;&gt;</code> continua de onde parou. O material chega a levantar a
            pergunta explicitamente num slide, porque é o erro que todo iniciante comete uma vez — e só uma, se
            tiver sorte quanto ao arquivo escolhido.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Compondo: onde tudo isso se junta" accentClass="text-accent5">
        <ExampleBox title="Perguntas reais respondidas por composição">
          <CodeBlock
            language="python"
            code={`# Quantos erros apareceram no log de hoje?
cat aplicacao.log | grep -i erro | wc -l

# Quais são os 10 IPs que mais aparecem no log de acesso?
cat acesso.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -n 10

# Ver o log em tempo real, mas só as linhas de erro
tail -f aplicacao.log | grep -i erro

# Guardar o resultado da investigação para analisar depois
grep -i erro aplicacao.log > erros-de-hoje.txt

# Listar os arquivos do /etc paginando a saída
ls /etc | less`}
          />
          <p className="mt-3">
            Vale ler o segundo exemplo devagar, porque ele é a filosofia Unix inteira em uma linha:{' '}
            <code className="text-accent2">cut</code> extrai a primeira coluna,{' '}
            <code className="text-accent2">sort</code> ordena para agrupar iguais,{' '}
            <code className="text-accent2">uniq -c</code> conta as repetições,{' '}
            <code className="text-accent2">sort -rn</code> ordena por quantidade decrescente e{' '}
            <code className="text-accent2">head</code> corta nos dez primeiros.
          </p>
          <p>
            <strong>Nenhum desses comandos sabe o que é um log de acesso.</strong> Cada um faz uma
            transformação genérica sobre texto, e a combinação é que responde à pergunta. Esse é o motivo de
            aprender as peças em vez de procurar uma ferramenta pronta para cada necessidade nova.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
