import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function HttpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Web e o Protocolo HTTP"
        subtitle="Sem estado por projeto — e as consequências disso"
        colorClass="text-accent"
        badge="Av1"
      />

      <TheoryBlock title="HTTP em uma frase">
        <p>
          O HTTP é o protocolo da Web, roda sobre <strong>TCP na porta 80</strong> (HTTPS na 443) e é{' '}
          <strong>sem estado</strong>: o servidor não guarda informação alguma sobre requisições anteriores do
          mesmo cliente.
        </p>
        <p>
          Isso simplifica enormemente o servidor — cada requisição é atendida isoladamente. E é justamente por
          isso que precisaram inventar os cookies.
        </p>
      </TheoryBlock>

      <Subsection title="Persistente × não persistente" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'HTTP não persistente',
              description:
                'Abre uma conexão TCP por objeto e a fecha em seguida. Uma página com trinta imagens exige trinta handshakes TCP — cada um custando um RTT antes de qualquer dado útil trafegar.',
            },
            {
              title: 'HTTP persistente',
              description:
                'Reaproveita a mesma conexão TCP para vários objetos. Elimina os handshakes repetidos e permite que a conexão já "aquecida" transmita em ritmo melhor. É o comportamento padrão desde o HTTP/1.1.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Métodos e códigos de estado" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Métodos principais',
              description:
                'GET solicita um recurso; POST envia dados ao servidor; HEAD pede apenas o cabeçalho, sem o corpo; PUT e DELETE completam o conjunto em APIs.',
              accent: 'accent',
            },
            {
              title: 'A faixa já diz de quem é a culpa',
              description:
                '2xx sucesso · 3xx redirecionamento · 4xx erro do CLIENTE · 5xx erro do SERVIDOR. Saber a faixa é saber onde procurar o problema.',
              accent: 'accent2',
            },
          ]}
        />
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: '200 OK', description: 'A requisição foi bem-sucedida e o objeto vem no corpo da resposta.' },
            { title: '301 Moved Permanently', description: 'O recurso mudou de endereço em definitivo.' },
            {
              title: '304 Not Modified',
              description: 'O objeto não mudou desde a data informada — peça central do funcionamento dos caches.',
            },
            { title: '400 Bad Request', description: 'A requisição está malformada; o servidor não a entendeu.' },
            { title: '404 Not Found', description: 'O recurso pedido não existe no servidor.' },
            { title: '500 Internal Server Error', description: 'O servidor falhou ao processar uma requisição válida.' },
          ]}
        />
      </Subsection>

      <Subsection title="Cookies — devolvendo memória a um protocolo sem memória" accentClass="text-accent4">
        <HighlightBox title="A consequência direta da ausência de estado" accent="var(--color-accent4)">
          <p>
            Se o servidor não lembra de nada, como um carrinho de compras sobrevive entre páginas? A resposta são
            os <strong>cookies</strong>: o servidor envia um identificador na resposta, o navegador o guarda e o
            devolve nas requisições seguintes.
          </p>
          <p>
            O estado passa a viver no cliente e numa base de dados do lado do servidor, não na conexão. É uma
            camada construída <em>sobre</em> o HTTP justamente porque o HTTP não a oferece.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Caches web" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed">
          Um cache web (ou servidor proxy) guarda cópias de objetos já requisitados. Os benefícios andam em par:{' '}
          <strong>o usuário recebe mais rápido</strong>, porque o objeto vem de perto, e{' '}
          <strong>a instituição economiza banda</strong> no enlace de acesso — que costuma ser exatamente o
          gargalo discutido na seção de desempenho.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Para não servir conteúdo velho, o cache usa a requisição condicional: pergunta ao servidor de origem se
          o objeto mudou desde certa data. Se não mudou, a resposta é um <strong>304 Not Modified</strong> — que
          não carrega o objeto, apenas a autorização de usar a cópia local.
        </p>
      </Subsection>
    </section>
  );
}
