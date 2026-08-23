import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ColoredPanelList, ExampleBox, TheoryBlock } from '../../../components/sections';

export default function ValidacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Validação no Backend"
        subtitle="A única validação que de fato protege"
        colorClass="text-accent5"
        badge="Backend"
      />

      <TheoryBlock title="Por que validar no servidor, se o formulário já valida">
        <p>
          A validação no formulário HTML — <code>required</code>, <code>minlength</code>,{' '}
          <code>type="email"</code> — melhora a experiência: avisa o usuário na hora, sem ida e volta ao
          servidor.
        </p>
        <p>
          Mas ela <strong>não é segurança</strong>. Tudo que roda no cliente é território do usuário:
          basta usar cURL, Postman ou o próprio console do navegador para enviar uma requisição direto
          ao servidor, <strong>ignorando o formulário por completo</strong>.
        </p>
        <p>
          Por isso as duas coexistem com propósitos distintos:{' '}
          <strong>no cliente para conveniência, no servidor para segurança</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="A atividade da turma" accentClass="text-accent">
        <ExampleBox title="Validando dados no backend Node/Express">
          <p>
            O enunciado pedia um formulário HTML que, ao ser enviado, fizesse uma requisição{' '}
            <strong>POST</strong> para o servidor. E então, <strong>no lado do servidor</strong>, cinco
            validações:
          </p>
          <p>
            <strong>1.</strong> Todos os campos obrigatórios — exceto o checkbox, que devia ser opcional.
            <br />
            <strong>2.</strong> Nascimento aceitando apenas datas válidas.
            <br />
            <strong>3.</strong> E-mail contendo arroba e ponto.
            <br />
            <strong>4.</strong> Apenas DDDs válidos no Brasil (pegando a lista na internet).
            <br />
            <strong>5.</strong> No máximo 3 atividades extracurriculares.
          </p>
          <p>
            A resposta devia ser uma <strong>página HTML</strong> com mensagem de sucesso no cadastro ou
            com as informações sobre o preenchimento incorreto. Entrega no repositório{' '}
            <code>validacao-dados-backend</code>.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare na quarta regra: ela exige <strong>pesquisa externa</strong>. Não há como validar DDD
          sem buscar a lista real — é uma validação de domínio, não de formato.
        </p>
      </Subsection>

      <Subsection title="Como o guia implementa" accentClass="text-accent3">
        <p className="text-text-muted leading-relaxed mb-3">
          O curso usa a biblioteca <strong>express-validator</strong>, que encadeia regras por campo:
        </p>
        <CodeBlock
          language="javascript"
          code={`body('idade')
  .isInt({ min: 1, max: 120 })
  .withMessage('Idade deve ser um número entre 1 e 120'),

body('genero')
  .isIn(['', 'feminino', 'masculino', 'nao-binario', 'prefiro-nao-informar'])
  .withMessage('Selecione uma opção válida')`}
        />
        <ColoredPanelList
          items={[
            { title: 'isInt({ min, max })', description: 'Verifica se é inteiro dentro de uma faixa.' },
            { title: 'isIn([...])', description: 'Verifica se o valor está na lista de opções aceitas.' },
            {
              title: 'withMessage()',
              description: 'Define a mensagem exibida ao usuário — específica por regra, não genérica.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O padrão de resposta que o guia adota" accent="var(--color-accent4)">
        <p>
          Quando a validação falha, a aplicação <strong>reexibe o formulário com os dados que o usuário
          já digitou</strong> e mostra a mensagem de erro <strong>ao lado de cada campo</strong> com
          problema.
        </p>
        <CodeBlock
          language="html"
          code={`<input id="nome" name="nome" type="text"
       value="<%= data.nome || '' %>" required minlength="3" />

<% if (errors.email) { %>
  <div class="error"><%= errors.email.msg %></div>
<% } %>`}
        />
        <p>
          O <code>value="&lt;%= data.nome %&gt;"</code> é o detalhe que faz a diferença: sem ele, o
          formulário volta vazio e o usuário precisa <strong>redigitar tudo</strong> por causa de um erro
          num único campo. É o comportamento que mais irrita, e é evitável com uma linha.
        </p>
      </HighlightBox>

      <Subsection title="A outra atividade: regra de negócio no servidor" accentClass="text-accent2">
        <ExampleBox title="Backend para diferentes requisições">
          <p>
            A atividade pedia analisar um código cliente e compreender as diferentes requisições sendo
            feitas — <strong>GET, POST, PUT e DELETE</strong> —, completando o servidor para lidar com o
            registro de alunos.
          </p>
          <p>
            E trazia uma exigência de <strong>regra de negócio</strong>: não permitir alunos com a{' '}
            <strong>mesma matrícula</strong>, tanto na <strong>inserção</strong> quanto na{' '}
            <strong>atualização</strong>.
          </p>
          <p>
            Os dois casos importam. É fácil lembrar de checar duplicidade ao inserir e esquecer ao
            editar — deixando a duplicidade entrar pela porta dos fundos.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
