import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, ComparisonTable, TheoryBlock } from '../../../components/sections';

export default function RotasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Rotas e Recebimento de Dados"
        subtitle="Tudo começa pela rota — e os dados chegam por quatro caminhos"
        colorClass="text-accent4"
        badge="Backend"
      />

      <TheoryBlock title="O que é uma rota">
        <p>
          As rotas mapeiam <strong>solicitações HTTP para funções de tratamento específicas</strong>.
          Elas definem como o servidor deve responder a diferentes URLs e métodos — GET, POST, PUT,
          DELETE.
        </p>
        <p>
          O material resume assim: <strong>"tudo começa pela rota"</strong>.
        </p>
      </TheoryBlock>

      <CodeBlock
        language="javascript"
        code={`// Rota GET para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota POST para processar dados de um formulário
app.post('/submit', (req, res) => {
  const data = req.body;
  res.send('Dados recebidos com sucesso!');
});`}
      />

      <Subsection title="As quatro formas de RECEBER dados" accentClass="text-accent">
        <ColoredPanelList
          items={[
            { title: 'Parâmetros de URL (query strings)', description: 'O que vem depois do ponto de interrogação.' },
            {
              title: 'Parâmetros de corpo',
              description: 'Dados de formulário enviados numa requisição POST, no corpo da mensagem.',
            },
            { title: 'Cabeçalhos HTTP', description: 'Metadados enviados junto com a requisição.' },
            {
              title: 'Cookies e sessões',
              description: 'Para armazenar e recuperar informações do cliente entre requisições.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Note que <strong>GET, POST, PUT e DELETE não são formas de receber dados</strong> — são
          métodos, que dizem a intenção da requisição. Cada método pode carregar dados por qualquer uma
          dessas quatro vias.
        </p>
      </Subsection>

      <Subsection title="Path param × query string" accentClass="text-accent2">
        <CodeBlock
          language="text"
          code={`http://ifal.edu.br/maceio/cursos?cod=23&ano=2023
└──┬─┘ └────┬─────┘└──────┬──────┘└──────┬───────┘
schema   domain         path            query`}
        />
        <ComparisonTable
          leftLabel="Path param"
          rightLabel="Query string"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Onde fica', left: 'Faz parte do CAMINHO da URL', right: 'Depois do ponto de interrogação' },
            { criterion: 'Como se declara', left: "app.get('/produto/:id', ...)", right: 'Não se declara — vem solta' },
            { criterion: 'Como se acessa', left: 'req.params.id', right: 'req.query.categoria' },
            {
              criterion: 'Para que serve',
              left: 'Identificar UM recurso específico',
              right: 'Filtrar, ordenar, paginar — modificar a consulta',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os três exemplos do material" accentClass="text-accent3">
        <CodeBlock
          language="javascript"
          code={`// PATH PARAM — o :id é um espaço reservado no caminho
app.get('/produto/:id', (req, res) => {
  const productId = req.params.id;
  res.send(\`Detalhes do produto \${productId}\`);
});

// QUERY STRING — /pesquisar?categoria=eletronicos&precoMaximo=1000
app.get('/pesquisar', (req, res) => {
  const categoria = req.query.categoria;
  const precoMaximo = req.query.precoMaximo;
  res.send(\`Categoria: \${categoria}, Preço Máximo: \${precoMaximo}\`);
});

// CORPO DA REQUISIÇÃO — exige middleware para o parse
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  res.send(\`Dados recebidos - Nome: \${nome}, Email: \${email}\`);
});`}
        />
      </Subsection>

      <HighlightBox title="Por que req.body precisa de middleware" accent="var(--color-accent5)">
        <p>
          O Express <strong>não interpreta o corpo da requisição por padrão</strong>. Sem o middleware
          que faz o parse do formato recebido, <code>req.body</code> vem{' '}
          <strong>indefinido</strong> — e a tentativa de ler <code>req.body.nome</code> gera o clássico
          "cannot read property of undefined".
        </p>
        <p>
          É provavelmente o erro mais frequente de quem está aprendendo Express, e a causa é sempre a
          mesma: faltou registrar o middleware antes da rota.
        </p>
        <p className="text-sm">
          O material usa <code>bodyParser.urlencoded</code>; nas versões modernas do Express a mesma
          função está embutida como <code>express.urlencoded</code>, sem dependência externa.
        </p>
      </HighlightBox>

      <Subsection title="Cabeçalhos e as formas de ENVIAR dados" accentClass="text-accent">
        <CodeBlock
          language="javascript"
          code={`// Acessando os cabeçalhos da requisição
app.get('/headers', (req, res) => {
  const headers = req.headers;
  res.json({ headers });
});`}
        />
        <ColoredPanelList
          items={[
            {
              title: 'Renderizar HTML com view engine',
              description: 'res.render() processa um template EJS com os dados e devolve HTML pronto.',
            },
            {
              title: 'Enviar JSON',
              description: 'res.json() devolve dados para o cliente processar — é o padrão de uma API RESTful.',
            },
            {
              title: 'Servir arquivos estáticos',
              description: 'Imagens, CSS e JavaScript entregues como estão, via express.static.',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
