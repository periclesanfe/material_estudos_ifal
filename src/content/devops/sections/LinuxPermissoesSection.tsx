import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function LinuxPermissoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Permissões de Arquivos"
        subtitle="Três níveis, três permissões e uma notação numérica que parece críptica até você somar 4+2+1"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <TheoryBlock title="Dono, grupo e outros">
        <p>
          No Linux, cada arquivo e cada diretório tem um <strong>dono</strong> e pertence a um{' '}
          <strong>grupo</strong>. As permissões são definidas separadamente para três níveis de acesso:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>u (user)</strong> — o dono, normalmente quem criou o arquivo. Só ele e o root podem alterar
            as permissões.
          </li>
          <li>
            <strong>g (group)</strong> — os usuários que pertencem ao grupo do arquivo.
          </li>
          <li>
            <strong>o (others)</strong> — todo o resto dos usuários do sistema.
          </li>
        </ul>
        <p>
          Existe ainda o atalho <strong>a (all)</strong>, que aplica a mudança aos três de uma vez. E vale
          registrar: o <strong>root ignora as permissões</strong> — elas organizam o uso normal do sistema, não
          contêm o superusuário.
        </p>
      </TheoryBlock>

      <Subsection title="As três permissões, e o que elas significam" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Em um ARQUIVO"
          rightLabel="Em um DIRETÓRIO"
          criterionLabel="Permissão"
          rows={[
            {
              criterion: 'r (read) — leitura',
              left: 'Permite ler o conteúdo do arquivo',
              right: 'Permite LISTAR os nomes que estão dentro dele',
            },
            {
              criterion: 'w (write) — escrita',
              left: 'Permite alterar o conteúdo do arquivo',
              right: 'Permite CRIAR e REMOVER entradas dentro dele',
            },
            {
              criterion: 'x (execute) — execução',
              left: 'Permite executar o arquivo como um programa',
              right: 'Permite ATRAVESSAR o diretório — entrar nele e alcançar o que está dentro',
            },
          ]}
        />
        <HighlightBox title="O x em diretórios é a maior fonte de confusão" accent="var(--color-accent4)">
          <p>
            Diretórios não são executados como programas. Ali o <code className="text-accent2">x</code> significa
            poder <strong>atravessar</strong>. A consequência prática é contraintuitiva: sem o{' '}
            <code className="text-accent2">x</code> em um diretório do caminho, você não alcança um arquivo lá
            dentro <em>nem que tenha permissão total sobre o arquivo</em>. E com apenas{' '}
            <code className="text-accent2">x</code>, sem <code className="text-accent2">r</code>, você consegue
            acessar um arquivo cujo nome já conheça, mas não consegue listar o diretório para descobrir o que
            existe nele.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Lendo uma linha de permissões" accentClass="text-accent3">
        <ExampleBox title="Decompondo a saída do ls -l">
          <CodeBlock
            language="python"
            code={`-rwxr-xr-x  1  aluno  users  2,0K  script1.sh
│└┬┘└┬┘└┬┘     └─┬─┘  └─┬─┘
│ │  │  │        │      └── grupo do arquivo
│ │  │  │        └───────── dono do arquivo
│ │  │  └── outros: r-x  (ler e executar)
│ │  └───── grupo:  r-x  (ler e executar)
│ └──────── dono:   rwx  (ler, escrever e executar)
└────────── TIPO: - arquivo, d diretório, l link simbólico`}
          />
          <p className="mt-3">
            São dez caracteres: <strong>um de tipo</strong> e depois <strong>três grupos de três</strong>. Um
            traço em qualquer posição significa que aquela permissão específica está ausente.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A notação octal" accentClass="text-accent4">
        <TheoryBlock title="Por que 755 e 644 aparecem em toda parte">
          <p>
            Cada permissão tem um valor numérico, e a soma dos valores presentes forma um dígito por nível:
          </p>
        </TheoryBlock>
        <div className="mt-4">
          <StatStrip
            items={[
              { label: '4', value: 'r — leitura', accent: 'text-accent' },
              { label: '2', value: 'w — escrita', accent: 'text-accent2' },
              { label: '1', value: 'x — execução', accent: 'text-accent3' },
            ]}
          />
        </div>
        <div className="mt-4">
          <ConceptGrid
            columns="md:grid-cols-2"
            items={[
              {
                title: '7 = rwx (4+2+1)',
                description: 'Tudo: ler, escrever e executar. Típico do dono de um script ou de um diretório.',
                accent: 'accent',
              },
              {
                title: '6 = rw- (4+2)',
                description:
                  'Ler e escrever, sem executar. É o que um arquivo de dados precisa — e nada além disso.',
                accent: 'accent2',
              },
              {
                title: '5 = r-x (4+1)',
                description:
                  'Ler e executar, sem escrever. Permite usar um programa ou entrar num diretório sem poder alterá-lo.',
                accent: 'accent3',
              },
              {
                title: '4 = r-- ',
                description: 'Apenas leitura. O mínimo para que alguém consiga consultar um arquivo.',
                accent: 'accent4',
              },
            ]}
          />
        </div>
        <ExampleBox title="Os dois casos que você mais vai escrever">
          <CodeBlock
            language="python"
            code={`chmod 755 script.sh
#      │││
#      ││└── outros: 5 = r-x  → podem ler e executar
#      │└─── grupo:  5 = r-x  → podem ler e executar
#      └──── dono:   7 = rwx  → pode tudo
# Uso típico: um script ou diretório que outros precisam usar, mas não alterar.

chmod 644 documento.txt
#      │││
#      ││└── outros: 4 = r--  → só leitura
#      │└─── grupo:  4 = r--  → só leitura
#      └──── dono:   6 = rw-  → lê e escreve, mas não executa
# Uso típico: um arquivo comum de dados ou configuração.`}
          />
        </ExampleBox>
      </Subsection>

      <Subsection title="Mudando permissões e donos" accentClass="text-accent5">
        <ExampleBox title="chmod, chown e chgrp">
          <CodeBlock
            language="python"
            code={`# Forma OCTAL — define as permissões inteiras de uma vez
chmod 755 script.sh
chmod 644 config.yaml
chmod -R 755 diretorio/      # -R aplica recursivamente

# Forma SIMBÓLICA — ajusta apenas o que se quer, preservando o resto
chmod u+x script.sh          # dá execução ao dono
chmod go-w arquivo.txt       # tira escrita de grupo e outros
chmod a+r arquivo.txt        # dá leitura a todos
chmod ug+x script.sh         # dá execução ao dono e ao grupo

# Dono e grupo
chown aluno arquivo.txt          # muda o dono
chown aluno:users arquivo.txt    # muda dono e grupo de uma vez
chgrp users arquivo.txt          # muda apenas o grupo
chown -R aluno:users diretorio/  # recursivo

# umask define as permissões PADRÃO dos arquivos recém-criados
umask`}
          />
          <p className="mt-3">
            As duas formas servem a propósitos diferentes. A <strong>octal</strong> é absoluta: você declara o
            estado final, sem precisar saber o que havia antes. A <strong>simbólica</strong> é incremental: ajusta
            um aspecto e preserva o resto — mais segura quando você não quer sobrescrever permissões que não
            examinou.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A pegadinha que o material destaca" accentClass="text-accent">
        <HighlightBox title="Quem manda no apagar é o DIRETÓRIO">
          <p>
            Se você tem permissão de <strong>escrita no diretório</strong> mas não no arquivo,{' '}
            <strong>ainda assim consegue apagá-lo</strong> — o sistema apenas pede confirmação. E o inverso também
            vale: sem escrita no diretório, você <strong>não</strong> apaga o arquivo, mesmo tendo permissão total
            sobre ele.
          </p>
          <p>
            A explicação desfaz o estranhamento: remover um arquivo não modifica o arquivo, modifica a{' '}
            <strong>lista de entradas do diretório</strong> que o contém. Por isso a permissão que decide é a do
            diretório. Guardar essa distinção — o conteúdo é do arquivo, o nome é do diretório — resolve boa parte
            das surpresas com permissões.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
