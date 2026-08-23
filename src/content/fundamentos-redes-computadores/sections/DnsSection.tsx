import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function DnsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Serviço de Nomes da Internet"
        subtitle="DNS — a base de dados distribuída que ninguém percebe até falhar"
        colorClass="text-accent3"
        badge="Av1"
      />

      <TheoryBlock title="O problema que o DNS resolve">
        <p>
          Pessoas lembram nomes; roteadores encaminham por números. O DNS traduz{' '}
          <strong>nomes de hospedeiro em endereços IP</strong>, e roda sobre <strong>UDP na porta 53</strong>.
        </p>
        <p>
          A escolha do UDP faz sentido: consultas são pequenas e frequentes, e o custo de estabelecer uma conexão
          TCP superaria o benefício. Se a resposta não vier, consulta-se de novo.
        </p>
      </TheoryBlock>

      <Subsection title="Por que distribuído" accentClass="text-accent">
        <p className="text-text-muted leading-relaxed mb-4">
          Um servidor central único seria insustentável: não aguentaria o volume de consultas, cairia inteiro numa
          única falha, ficaria longe demais da maioria dos usuários e seria um pesadelo de manutenção. Daí a
          hierarquia:
        </p>
        <FlowDiagram
          items={[
            'Servidores RAIZ — sabem quem responde por cada domínio de topo',
            'Servidores TLD — responsáveis por .com, .org, .br e demais topos',
            'Servidores COM AUTORIDADE — guardam os registros de cada organização',
          ]}
        />
      </Subsection>

      <Subsection title="Consultas recursivas × iterativas" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Consulta RECURSIVA"
          rightLabel="Consulta ITERATIVA"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Quem faz o trabalho',
              left: 'O servidor consultado assume a responsabilidade de obter a resposta COMPLETA',
              right: 'O servidor apenas indica qual é o PRÓXIMO servidor a consultar',
            },
            {
              criterion: 'O que o solicitante recebe',
              left: 'A resposta final, pronta',
              right: 'Uma referência, e precisa continuar perguntando',
            },
            {
              criterion: 'Uso típico',
              left: 'Do cliente para o servidor DNS local',
              right: 'Do servidor local para raiz, TLD e autoridade',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Na prática as duas convivem: seu computador faz uma consulta recursiva ao servidor local, e ele resolve
          o resto iterativamente, descendo a hierarquia até obter o endereço.
        </p>
      </Subsection>

      <Subsection title="Registros de recurso" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'A', description: 'Mapeia um nome de hospedeiro para um endereço IPv4.' },
            { title: 'AAAA', description: 'Mapeia um nome para um endereço IPv6.' },
            { title: 'NS', description: 'Indica o servidor de nomes com autoridade sobre o domínio.' },
            { title: 'CNAME', description: 'Define um apelido — um nome que aponta para outro nome canônico.' },
            { title: 'MX', description: 'Indica o servidor de CORREIO responsável por receber e-mails do domínio.' },
          ]}
        />
      </Subsection>

      <Subsection title="Cache — a razão de tudo funcionar" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Por que existe',
              description:
                'Sem cache, cada acesso a um site geraria uma cadeia completa de consultas até a raiz. Os servidores raiz colapsariam em minutos.',
              accent: 'accent',
            },
            {
              title: 'O preço',
              description:
                'É por causa do cache que mudanças de DNS demoram a se propagar: enquanto o registro antigo não expirar, os servidores continuam servindo a resposta que já têm.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Mais do que tradução de nomes" accent="var(--color-accent2)">
        <p>
          O DNS também sustenta o <strong>apelidamento de hospedeiros</strong> (um nome amigável apontando para
          outro complicado), o <strong>apelidamento de servidores de correio</strong> e a{' '}
          <strong>distribuição de carga</strong> — um mesmo nome pode devolver vários endereços IP, alternando a
          ordem entre consultas para espalhar clientes por servidores replicados.
        </p>
      </HighlightBox>
    </section>
  );
}
