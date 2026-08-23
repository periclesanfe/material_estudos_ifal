import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ComparisonTable, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function EstruturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Separando Cliente e Servidor"
        subtitle="A distinção que a estrutura de pastas torna visível"
        colorClass="text-accent2"
        badge="Backend"
      />

      <TheoryBlock title="Onde cada arquivo roda">
        <p>
          A pergunta que organiza todo o projeto é simples de enunciar e fácil de errar:{' '}
          <strong>este arquivo é processado no cliente ou no servidor?</strong>
        </p>
        <p>
          A estrutura de pastas de um projeto Node/Express materializa essa separação — e entendê-la
          evita a confusão mais comum de quem começa em backend.
        </p>
      </TheoryBlock>

      <CodeBlock
        language="text"
        code={`meu-projeto-node
│   app.js           // Servidor Node.js (BACKEND)
│   package.json     // Manifesto do projeto
│
├───public           // Estáticos processados no CLIENTE (frontend)
│   ├───css
│   │   └───styles.css
│   └───js
│       └───script.js
│
└───views            // Processados no SERVIDOR (backend)
    │   index.ejs
    │   dashboard.ejs`}
      />

      <Subsection title="public × views" accentClass="text-accent">
        <ComparisonTable
          leftLabel="public/"
          rightLabel="views/"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Onde é processado',
              left: 'No CLIENTE — o navegador recebe e executa',
              right: 'No SERVIDOR — antes de ser enviado ao cliente',
            },
            {
              criterion: 'O que contém',
              left: 'Arquivos estáticos: CSS, JavaScript de interface, imagens',
              right: 'Templates (.ejs) que geram HTML dinamicamente',
            },
            {
              criterion: 'Como é servido',
              left: 'Diretamente pelo Express, como veio (express.static)',
              right: 'Renderizado com dados do servidor (res.render)',
            },
            {
              criterion: 'Acesso',
              left: 'Publicamente acessível pela URL',
              right: 'Nunca acessado diretamente — só pelo resultado renderizado',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os arquivos da raiz" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'app.js',
              description:
                'O arquivo principal do servidor, onde a lógica do backend é definida: configuração do Express, definição de rotas, lógica de negócio, manipulação de requisições e respostas.',
            },
            {
              title: 'package.json',
              description:
                'Metadados do projeto Node: dependências, scripts de inicialização, autor, versão. É o manifesto que permite a outra pessoa clonar o repositório e rodar npm install.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A consequência prática da separação" accent="var(--color-accent4)">
        <p>
          Tudo que está em <strong>public/</strong> é visível e alterável por quem usa a aplicação: o
          usuário pode abrir o JavaScript, ler o código e modificá-lo no próprio navegador.
        </p>
        <p>
          Tudo que está em <strong>views/</strong> e no <strong>app.js</strong> roda no servidor, e o
          usuário nunca vê o código — só o resultado.
        </p>
        <p>
          É daí que decorre a regra que aparece adiante na disciplina:{' '}
          <strong>validação e regra de negócio precisam viver no servidor</strong>. O que está no
          cliente é território do usuário.
        </p>
      </HighlightBox>
    </section>
  );
}
