import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList } from '../../../components/sections';

export default function ExpressSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Criando a Aplicação Node/Express"
        subtitle="Dois caminhos: montar à mão ou usar o gerador"
        colorClass="text-accent3"
        badge="Backend"
      />

      <Subsection title="Caminho A — usando Node e o npm" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: '1. Inicializar o projeto',
              description: 'npm init -y gera o package.json com as configurações básicas.',
            },
            {
              title: '2. Instalar as dependências',
              description: 'npm install express ejs traz o framework e o motor de template.',
            },
            {
              title: '3. Criar a estrutura',
              description: 'As pastas views/ (templates) e public/css/ (estáticos), mais o app.js na raiz.',
            },
            {
              title: '4. Configurar e subir o servidor',
              description: 'No app.js: definir a view engine, servir os estáticos, declarar as rotas e chamar listen.',
            },
          ]}
        />
        <CodeBlock
          language="javascript"
          code={`// app.js
const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como template engine
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Minha Aplicação Express' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(\`Servidor rodando em http://localhost:\${port}\`);
});`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Quatro linhas de configuração e uma rota — é o mínimo para uma aplicação Express funcionando.
          Acessando <code>http://localhost:3000</code>, ela responde.
        </p>
      </Subsection>

      <Subsection title="Caminho B — Express Generator" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed mb-3">
          O <strong>Express Generator</strong> cria automaticamente a estrutura de diretórios e arquivos
          de um projeto Express, já configurada para o motor de template escolhido.
        </p>
        <CodeBlock
          language="bash"
          code={`npm install -g express-generator
express --view ejs meu-projeto
cd meu-projeto
npm install`}
        />
        <CodeBlock
          language="text"
          code={`meu-projeto/
├── bin/
│   └── www          // Script que sobe o servidor
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/          // Rotas em arquivos separados
├── views/
├── app.js
└── package.json`}
        />
      </Subsection>

      <Subsection title="Quando usar cada um" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Manual (npm)"
          rightLabel="Express Generator"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que ensina',
              left: 'Cada peça é adicionada conscientemente — você sabe por que cada linha existe',
              right: 'A estrutura vem pronta; entender o porquê fica para depois',
            },
            {
              criterion: 'Organização das rotas',
              left: 'Tudo no app.js até você decidir separar',
              right: 'Já separadas em routes/, com bin/www isolando a subida do servidor',
            },
            {
              criterion: 'Melhor para',
              left: 'Aprender e para projetos pequenos',
              right: 'Começar rápido um projeto com estrutura convencional',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que o guia mostra os dois" accent="var(--color-accent5)">
        <p>
          Começar pelo caminho manual é decisão pedagógica: quem monta o <code>app.js</code> linha a
          linha entende o que <code>app.set</code>, <code>express.static</code> e{' '}
          <code>res.render</code> fazem.
        </p>
        <p>
          Depois disso, a estrutura que o gerador cria deixa de ser mágica e passa a ser reconhecível —
          e é possível avaliar se ela serve ou não ao projeto em questão.
        </p>
      </HighlightBox>
    </section>
  );
}
