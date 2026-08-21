import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function ContainersSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Containers × Máquinas Virtuais"
        subtitle="Uma diferença de arquitetura — o kernel — da qual todas as outras decorrem"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <TheoryBlock title="O problema: “funciona na minha máquina”">
        <p>
          O material apresenta Docker como{' '}
          <strong>"uma plataforma para building, running e shipping application"</strong> — construir, executar e
          enviar aplicações — com a promessa de que, se a aplicação funciona com Docker na sua máquina, vai
          funcionar nas outras.
        </p>
        <p>Os três defeitos que ele elimina no envio de uma aplicação:</p>
      </TheoryBlock>

      <ConceptGrid
        columns="md:grid-cols-3"
        items={[
          {
            title: 'Arquivos faltando',
            description:
              'A aplicação depende de algo que estava na máquina de origem e não foi junto — uma biblioteca, um certificado, um arquivo de configuração que ninguém lembrou de listar.',
            accent: 'accent',
          },
          {
            title: 'Versão errada de software',
            description:
              'O exemplo do material é direto: o ambiente tem Node 14, mas a aplicação precisa de Node 20. Vale igualmente para versão de JDK, de banco, de biblioteca do sistema.',
            accent: 'accent2',
          },
          {
            title: 'Configuração divergente',
            description:
              'Variáveis de ambiente diferentes, caminhos diferentes, limites diferentes. A aplicação é a mesma; o ambiente em volta não é.',
            accent: 'accent3',
          },
        ]}
      />

      <p className="text-text-muted text-sm md:text-base leading-relaxed">
        A solução é empacotar <strong>aplicação e dependências juntas</strong>, de modo que subir tudo seja um
        comando reprodutível. É a mesma frase do "muro da confusão", agora respondida por engenharia: se o
        ambiente viaja junto com o código, a diferença entre as máquinas deixa de ser argumento.
      </p>

      <Subsection title="As duas definições" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Container',
              description:
                'Um ambiente isolado para executar aplicações. Não emula hardware: é um processo do host, cercado por mecanismos de isolamento, que enxerga apenas o que lhe foi destinado.',
              accent: 'accent',
            },
            {
              title: 'Máquina virtual',
              description:
                'Uma abstração de máquina — de hardware físico — criada por um hipervisor como VirtualBox, VMware ou Hyper-V. Dentro dela roda um sistema operacional completo, com kernel próprio.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A comparação que importa" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Máquina virtual"
          rightLabel="Container"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'Sistema operacional',
              left: 'Cada VM carrega um SO INTEIRO, com patches e licença próprios',
              right: 'Compartilha o KERNEL do sistema operacional do host',
            },
            {
              criterion: 'Inicialização',
              left: 'Lenta — equivale a ligar um computador',
              right: 'Rápida: segundos, às vezes menos',
            },
            {
              criterion: 'Consumo de recursos',
              left: 'Alto e reservado: 16 GB de RAM precisam ser divididos entre as VMs',
              right: 'Baixo — usa o que o processo precisa, sem reservar um SO inteiro',
            },
            {
              criterion: 'Isolamento',
              left: 'Forte: kernels separados, fronteira mais difícil de atravessar',
              right: 'Menor: o kernel é compartilhado, o que impõe limites',
            },
            {
              criterion: 'Sistemas suportados',
              left: 'Qualquer SO, independente do host',
              right: 'Preso à família do kernel do host — não se roda container Windows sobre kernel Linux',
            },
            {
              criterion: 'Adequação a microsserviços',
              left: 'Ruim: subir e derrubar instâncias o tempo todo fica proibitivo',
              right: 'Boa: é o que torna a elasticidade praticável',
            },
          ]}
        />
        <HighlightBox title="Tudo decorre do kernel">
          <p>
            Vale reduzir a tabela a uma frase: <strong>a VM traz seu próprio kernel, o container usa o do
            host</strong>. Leveza, velocidade de inicialização e baixo consumo são consequências disso — e o
            isolamento menor e a dependência da família do sistema também. Entendendo a causa, as seis linhas
            acima deixam de ser lista para decorar.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Por que isso muda tudo para microsserviços" accentClass="text-accent4">
        <ExampleBox title="Escalar sob demanda">
          <p>
            Uma arquitetura de microsserviços cria e destrói instâncias continuamente — para acompanhar picos de
            uso, para substituir instâncias defeituosas, para implantar uma nova versão aos poucos.
          </p>
          <p>
            Se cada instância leva o tempo de ligar um computador e reserva CPU e memória fixas, a elasticidade
            desaparece na prática: quando a capacidade extra fica pronta, o pico já passou. Com containers
            iniciando em segundos, esse padrão se torna viável — e é exatamente sobre ele que Kubernetes, Helm e
            as estratégias de implantação das próximas seções foram construídos.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Isolamento lado a lado" accentClass="text-accent5">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O material destaca uma vantagem concreta: containers permitem executar processos{' '}
          <strong>isolados lado a lado na mesma máquina</strong>. Um container com Node 14 e Mongo 4 pode conviver
          com outro rodando Java 17 e PostgreSQL, no mesmo host, sem que as versões conflitem.
        </p>
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A outra face da mesma moeda é a remoção: descartar a aplicação é rápido e transparente, sem deixar
          resíduo de instalação pelo sistema. Somando as duas coisas — subir depressa e descartar sem rastro — o
          material resume o ganho: com Docker é possível <strong>construir, executar e implantar</strong> com
          rapidez e de forma consistente.
        </p>
      </Subsection>
    </section>
  );
}
