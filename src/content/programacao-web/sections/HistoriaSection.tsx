import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, StatStrip, TheoryBlock } from '../../../components/sections';

export default function HistoriaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="História e Arquitetura da Web"
        subtitle="Três componentes inventados juntos — e que continuam sendo os mesmos"
        colorClass="text-accent2"
        badge="Fundamentos"
      />

      <Subsection title="As datas que importam" accentClass="text-accent">
        <StatStrip
          items={[
            { label: '1989', value: 'Tim Berners-Lee inventa a WWW no CERN', accent: 'text-accent' },
            { label: '1993', value: 'O navegador Mosaic populariza a Web', accent: 'text-accent2' },
            { label: '1994', value: 'Fundação do W3C, que desenvolve padrões abertos', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O propósito original era prático e modesto: <strong>compartilhar documentos entre
          pesquisadores</strong>. A Web evoluiu de plataforma estática para dinâmica e interativa,
          com impacto em comunicação, comércio, educação e entretenimento.
        </p>
      </Subsection>

      <Subsection title="Os três componentes essenciais" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'HTML',
              description: 'A linguagem de marcação usada para CRIAR os documentos da Web.',
              accent: 'accent',
            },
            {
              title: 'HTTP',
              description: 'O protocolo usado para TRANSFERIR esses documentos entre cliente e servidor.',
              accent: 'accent2',
            },
            {
              title: 'URL',
              description: 'O sistema de endereçamento que permite IDENTIFICAR e LOCALIZAR cada documento.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Criar, transferir e endereçar — três problemas distintos, três soluções. Nasceram juntos em
          1989 e continuam sendo a base de tudo que veio depois.
        </p>
      </Subsection>

      <HighlightBox title="A distinção que a disciplina cobra" accent="var(--color-accent4)">
        <p>
          <strong>Qual é a diferença entre Internet e Web?</strong> A pergunta aparece literalmente no
          slide 5 das notas de aula, com a resposta no slide seguinte:
        </p>
        <p>
          A <strong>INTERNET</strong> é uma infraestrutura global de redes interconectadas que permite
          a comunicação entre computadores. A <strong>WEB</strong> é uma <em>aplicação</em> que utiliza
          a Internet para acessar e interagir com documentos e recursos através do protocolo HTTP.
        </p>
        <p>
          Ou seja: a Internet é o meio, a Web é um dos serviços que trafegam por ele — ao lado de
          e-mail, FTP e tantos outros. Usar as palavras como sinônimos é um erro conceitual, não de
          vocabulário.
        </p>
      </HighlightBox>

      <Subsection title="A arquitetura cliente-servidor" accentClass="text-accent5">
        <TheoryBlock title="O modelo básico">
          <p>
            A Web é baseada na arquitetura <strong>cliente-servidor</strong>: o cliente (navegador)
            solicita recursos ao servidor, que processa e responde. É esse desenho que permite construir
            aplicações escaláveis e modulares.
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Servidores web',
              description: 'Hospedam e servem os conteúdos.',
              accent: 'accent',
            },
            {
              title: 'Navegadores e aplicações',
              description: 'Interpretam e renderizam o conteúdo HTML, CSS e JavaScript.',
              accent: 'accent2',
            },
            {
              title: 'DNS',
              description:
                'Traduz nomes de domínio em endereços IP — sem ele, seria preciso decorar números para acessar sites.',
              accent: 'accent3',
            },
            {
              title: 'Servidores de banco de dados',
              description: 'Armazenam e gerenciam os dados acessados pelas aplicações web.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O fluxo de uma requisição" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'Resolução DNS — traduz a URL em endereço IP',
            'Requisição e resposta HTTP — cliente pede, servidor responde com HTML, CSS e JS',
            'Renderização — o navegador processa e apresenta o conteúdo ao usuário',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          São três etapas que acontecem em milissegundos e que, quando falham, falham de formas
          distinguíveis: erro de DNS não é erro de HTTP, que não é erro de renderização. Saber separá-las
          é metade do trabalho de diagnosticar um problema.
        </p>
      </Subsection>

      <Subsection title="A arquitetura em três camadas" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Apresentação',
              description: 'A interface do usuário: HTML, CSS e JavaScript.',
              accent: 'accent',
            },
            {
              title: 'Aplicação (lógica de negócios)',
              description: 'Processa a lógica da aplicação, no servidor.',
              accent: 'accent2',
            },
            {
              title: 'Dados',
              description: 'Armazena e recupera informações em bancos de dados.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Guarde esta divisão: ela é a versão simplificada das <strong>quatro camadas</strong> que o
          guia da disciplina desenvolve no final do curso, quando o CRUD ganha forma de projeto real.
        </p>
      </Subsection>

      <Subsection title="Além do HTTP: WebSockets" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed">
          O HTTP resolve bem o modelo requisição-resposta, mas tem um limite: quem inicia a conversa é
          sempre o cliente. Os <strong>WebSockets</strong> permitem comunicação{' '}
          <strong>bidirecional em tempo real</strong> entre cliente e servidor — o que viabiliza chat,
          notificações e atualizações ao vivo sem o cliente ficar perguntando repetidamente se há
          novidade.
        </p>
      </Subsection>
    </section>
  );
}
