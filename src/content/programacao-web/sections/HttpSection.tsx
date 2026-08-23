import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ComparisonTable, TheoryBlock } from '../../../components/sections';

export default function HttpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Protocolo HTTP"
        subtitle="Requisição e resposta, com três partes cada"
        colorClass="text-accent3"
        badge="Fundamentos"
      />

      <TheoryBlock title="O modelo">
        <p>
          O HTTP funciona por <strong>requisição e resposta</strong>: o cliente faz uma requisição, o
          servidor responde com os dados solicitados. Toda a Web se apoia nessa troca — e as duas
          mensagens têm estrutura de três partes, simétrica mas não idêntica.
        </p>
      </TheoryBlock>

      <Subsection title="Estrutura da requisição" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'Linha de requisição',
              description: 'Contém o método HTTP, o caminho da URL e a versão do protocolo.',
            },
            {
              title: 'Cabeçalhos',
              description: 'Metadados que fornecem informações adicionais sobre a requisição.',
            },
            { title: 'Corpo (opcional)', description: 'Contém os dados enviados com a requisição.' },
          ]}
        />
        <CodeBlock
          language="http"
          code={`GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html`}
        />
      </Subsection>

      <Subsection title="Estrutura da resposta" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Linha de status',
              description: 'Inclui a versão do protocolo, um código de status e uma frase descritiva.',
            },
            {
              title: 'Cabeçalhos',
              description: 'Informações sobre o servidor e sobre os dados que estão sendo enviados.',
            },
            { title: 'Corpo (opcional)', description: 'Contém o conteúdo real da resposta.' },
          ]}
        />
        <CodeBlock
          language="http"
          code={`HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<html> <body>...</body> </html>`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A confusão mais comum: <strong>linha de requisição</strong> (método, caminho, versão) contra{' '}
          <strong>linha de status</strong> (versão, código, frase). São a primeira linha de cada
          mensagem, mas carregam coisas diferentes.
        </p>
      </Subsection>

      <Subsection title="Os quatro tipos de cabeçalho" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Gerais',
              description: 'Aplicam-se tanto a requisições quanto a respostas — por exemplo, Cache-Control.',
            },
            {
              title: 'De requisição',
              description: 'Específicos da requisição, como Accept e User-Agent.',
            },
            { title: 'De resposta', description: 'Específicos da resposta, como Content-Type.' },
            {
              title: 'De entidade',
              description: 'Relacionam-se ao corpo da mensagem, como Content-Length.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os seis métodos" accentClass="text-accent5">
        <ColoredPanelList
          items={[
            { title: 'GET', description: 'Solicita a representação de um recurso específico.' },
            { title: 'POST', description: 'Envia dados para o servidor para criar ou modificar um recurso.' },
            {
              title: 'PUT',
              description:
                'SUBSTITUI o recurso no servidor pela carga útil da requisição — o recurso inteiro, não parte dele.',
            },
            { title: 'DELETE', description: 'Remove um recurso específico do servidor.' },
            {
              title: 'HEAD',
              description:
                'Solicita uma resposta idêntica ao GET, mas SEM o corpo — útil para checar existência, tamanho ou data de modificação sem baixar o recurso.',
            },
            { title: 'PATCH', description: 'Aplica modificações PARCIAIS a um recurso.' },
          ]}
        />
        <HighlightBox title="PUT × PATCH — a diferença tem consequência" accent="var(--color-accent5)">
          <p>
            O PUT substitui o recurso <strong>inteiro</strong> pelo que veio na requisição. Se o corpo
            omite um campo, aquele campo é apagado.
          </p>
          <p>
            O PATCH aplica <strong>modificações parciais</strong>: o que não foi enviado permanece como
            estava. Confundir os dois ao projetar uma API produz perda de dados silenciosa.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As cinco faixas de status" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Significado"
          rightLabel="De quem é o problema"
          criterionLabel="Faixa"
          rows={[
            { criterion: '1xx', left: 'Informativo — requisição recebida, em processamento', right: 'De ninguém: é andamento' },
            { criterion: '2xx', left: 'Sucesso — a requisição foi bem-sucedida', right: 'De ninguém: deu certo' },
            { criterion: '3xx', left: 'Redirecionamento — o cliente precisa tomar ação adicional', right: 'Do cliente, mas é esperado' },
            { criterion: '4xx', left: 'Erro do CLIENTE — houve erro na requisição', right: 'De quem fez a requisição' },
            { criterion: '5xx', left: 'Erro do SERVIDOR — falhou ao processar a requisição', right: 'De quem recebeu' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Saber a faixa já indica onde procurar o problema — e é por isso que ela é a primeira coisa a
          olhar quando algo falha.
        </p>
      </Subsection>

      <Subsection title="Tipos MIME e cURL" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'text/html', description: 'Para documentos HTML.' },
            { title: 'application/json', description: 'Para dados no formato JSON.' },
            { title: 'image/png', description: 'Para imagens no formato PNG.' },
            { title: 'application/xml', description: 'Para dados no formato XML.' },
          ]}
        />
        <p className="text-text-muted leading-relaxed mt-3">
          O tipo MIME informa ao cliente <strong>como interpretar</strong> o corpo da mensagem. Errá-lo
          faz o navegador tratar JSON como texto puro, ou tentar baixar um HTML em vez de exibi-lo.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Ferramentas como o <strong>cURL</strong> permitem fazer requisições HTTP direto da linha de
          comando — o que é a forma mais rápida de testar um endpoint sem escrever cliente nenhum:
        </p>
        <CodeBlock language="bash" code={`curl -X GET https://api.example.com/data`} />
      </Subsection>
    </section>
  );
}
