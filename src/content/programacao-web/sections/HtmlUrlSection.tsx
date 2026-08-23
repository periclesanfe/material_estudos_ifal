import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, PanelList, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function HtmlUrlSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="HTML e o Sistema de Endereçamento"
        subtitle="A espinha dorsal da Web e o modo de encontrar cada recurso"
        colorClass="text-accent4"
        badge="Fundamentos"
      />

      <TheoryBlock title="HTML">
        <p>
          O material chama o HTML de <strong>espinha dorsal da Web</strong>: é ele que cria e estrutura o
          conteúdo, usando <strong>tags</strong> para definir os elementos de um documento.
        </p>
      </TheoryBlock>

      <Subsection title="A estrutura básica de um documento" accentClass="text-accent">
        <ColoredPanelList
          items={[
            { title: 'DOCTYPE', description: 'Declara o tipo do documento e a versão do HTML.' },
            { title: '<html>', description: 'Encapsula todo o conteúdo do documento.' },
            { title: '<head>', description: 'Contém os metadados sobre o documento — título, charset, viewport.' },
            { title: '<body>', description: 'Contém todo o conteúdo visível para o usuário.' },
          ]}
        />
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html>
  <head>
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Bem-vindo à Web</h1>
    <p>Este é um exemplo de documento HTML.</p>
  </body>
</html>`}
        />
      </Subsection>

      <Subsection title="Os elementos fundamentais" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Cabeçalhos — <h1> a <h6>', description: 'Criam títulos e subtítulos, em seis níveis de hierarquia.' },
            { title: 'Parágrafo — <p>', description: 'Define parágrafos de texto.' },
            { title: 'Link — <a href="...">', description: 'Cria hiperlinks para outros documentos. É o "hyper" do hipertexto.' },
            { title: 'Imagem — <img src="...">', description: 'Inclui imagens no documento.' },
            { title: 'Listas — <ol> e <ul>', description: 'Criam listas ordenadas (numeradas) ou não ordenadas (com marcadores).' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O HTML evoluiu de uma linguagem básica de estruturação para suportar multimídia e APIs
          avançadas. O <strong>HTML5</strong> é amplamente adotado, projetado para dispositivos modernos,
          com suporte a vídeo, gráficos e aplicativos interativos.
        </p>
      </Subsection>

      <Subsection title="URL — as seis partes" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-4">
          A <strong>URL</strong> (Uniform Resource Locator) é o sistema de endereçamento usado na Web
          para identificar e localizar recursos. Ela se decompõe em seis partes:
        </p>
        <CodeBlock
          language="text"
          code={`http://www.exemplo.com:80/caminho/para/recurso?query=parametro#ancora
└──┬──┘ └──────┬──────┘└┬┘└────────┬────────┘└───────┬───────┘└──┬──┘
protocolo   domínio   porta     caminho          query string  fragmento`}
        />
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Protocolo', description: 'Como acessar: http:// ou https://' },
            { title: 'Nome de domínio', description: 'Onde está: www.exemplo.com' },
            { title: 'Porta', description: 'Qual serviço na máquina: :80 ou :443' },
            { title: 'Caminho', description: 'Qual recurso: /caminho/para/recurso' },
            { title: 'Query string', description: 'Parâmetros: ?query=parametro' },
            { title: 'Fragmento', description: 'Âncora dentro da página: #ancora' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Em resumo: o protocolo diz <strong>como</strong> acessar, domínio e porta dizem{' '}
          <strong>onde</strong>, e caminho, query e fragmento dizem <strong>o quê</strong>.
        </p>
      </Subsection>

      <HighlightBox title="URLs, SEO e segurança" accent="var(--color-accent5)">
        <p>
          URLs indicam ao navegador onde encontrar um recurso e como interagir com ele, e podem incluir
          parâmetros que modificam a apresentação do conteúdo ou o resultado de uma pesquisa.
        </p>
        <p>
          URLs <strong>claras, descritivas e bem estruturadas</strong> melhoram a indexação pelos
          motores de busca e a visibilidade do site — é um dos poucos pontos em que decisão técnica e
          decisão de comunicação coincidem.
        </p>
        <p>
          E o <strong>HTTPS</strong> protege as comunicações entre navegador e servidor, criptografando
          os dados para evitar interceptações maliciosas. O "s" não é detalhe: é a diferença entre
          trafegar em claro e trafegar cifrado.
        </p>
      </HighlightBox>
    </section>
  );
}
