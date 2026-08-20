import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function TestesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Testes Unitários com JUnit"
        subtitle="Asserts, o teste que espera exceção, valores-limite e o rollback que deixa o banco limpo"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que testar (e testar primeiro)">
        <p>
          Teste unitário é código que verifica código: cada regra de negócio ganha um método de teste automatizado
          que roda em segundos e denuncia regressões na hora. A disciplina apresenta o <strong>JUnit</strong> desde
          a Parte 01 do plano e menciona <strong>TDD</strong> (Test-Driven Development): escrever o teste{' '}
          <em>antes</em> da implementação, deixando o teste guiar o design. No projeto final, testes de{' '}
          <strong>cada BO e cada DAO</strong> são critério explícito de avaliação.
        </p>
        <p>
          O vocabulário dos asserts: <code>assertEquals(esperado, obtido)</code>,{' '}
          <code>assertTrue / assertFalse</code>, <code>assertNotNull</code> e <code>fail(mensagem)</code> — que
          derruba o teste incondicionalmente ao ser alcançado.
        </p>
      </TheoryBlock>

      <Subsection title="O padrão da turma para testar exceções" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="ContaTest.java — o fail dentro do try"
          code={`@Test
public void testDepositarValorInvalido() {
    Conta c = new Conta();
    try {
        c.depositar(-1);
        fail("Não deveria ter passado no método");   // se chegou aqui, a validação sumiu
    } catch (Exception e) {
        // exceção lançada = comportamento CORRETO → o teste passa
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A lógica é invertida: o comportamento correto de <code>depositar(-1)</code> é <strong>lançar
          exceção</strong>. Se lançar, o fluxo pula o <code>fail()</code> e cai no catch — aprovado. Se o método
          aceitar o valor inválido, o <code>fail()</code> executa e o teste quebra. A variação mais rigorosa
          confere <strong>a mensagem</strong>:
        </p>
        <CodeBlock
          language="java"
          title="PessoaServiceTest.java (JUnit 5) — verificando a mensagem e nomeando a regra"
          code={`@Test
@DisplayName("Nome não pode ser vazio")
void testNomeVazio() {
    try {
        new PessoaService().cadastrar(nomeVazio, cpf);
        fail("Deveria ter lançado ServiceException");
    } catch (ServiceException e) {
        assertEquals("Erro no serviço: nome inválido", e.getMessage());
    }
}`}
        />
      </Subsection>

      <Subsection title="Valores-limite e partição de equivalência" accentClass="text-accent3">
        <ExampleBox title="CadastrarNotasTest — quatro casos que cercam o intervalo">
          <CodeBlock
            language="java"
            title="ValidarNota.validar aceita notas de 0 a 10"
            code={`ValidarNota v = new ValidarNota();

assertTrue(v.validar(0));      // fronteira inferior, DENTRO
assertFalse(v.validar(-1));    // imediatamente FORA, embaixo
assertTrue(v.validar(9));      // dentro do intervalo
assertFalse(v.validar(10.1));  // imediatamente FORA, em cima`}
          />
          <p>
            Os bugs moram nas <strong>fronteiras</strong> (trocar <code>&gt;=</code> por <code>&gt;</code> passa
            despercebido no meio do intervalo). A técnica: um caso dentro e um caso fora de cada limite —
            <em>análise de valores-limite</em> sobre as <em>partições de equivalência</em> (válida e inválidas).
            Quatro casos certeiros valem mais que cem sorteados.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Teste de integração com banco: transação + rollback" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="AlunoDAOTest.java — o banco fica exatamente como estava"
          code={`private Connection conexao;
private AlunoDAO dao;

@BeforeEach
void setUp() throws SQLException {
    conexao = new ConexaoMySQL().conectar();
    conexao.setAutoCommit(false);      // segura tudo numa transação aberta
    dao = new AlunoDAO(conexao);       // INJETA a mesma conexão no DAO
}

@AfterEach
void tearDown() throws SQLException {
    conexao.rollback();                // desfaz TODOS os inserts do teste
    conexao.close();
}

@Test
void testCadastrarEListar() throws SQLException {
    dao.cadastrar("Maria", 20);
    ArrayList<AlunoVO> alunos = dao.listar();
    assertEquals("Maria", alunos.get(0).getNome());
}   // após o rollback, Maria não existe mais no banco`}
        />
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Por que injetar a conexão',
              description: 'Se o DAO criasse a própria conexão, os INSERTs cairiam em outra transação e persistiriam. Compartilhando a conexão do teste, o rollback desfaz tudo — passem ou falhem os asserts.',
            },
            {
              title: 'Classe de cenário (fixture)',
              description: 'AlunoDAOCenarioTest não é um teste: é o "montador de massa" que cadastra uma lista de AlunoVO antes dos testes de listar/excluir. Separar preparação de verificação mantém cada teste legível.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="setUp e tearDown" accent="var(--color-accent3)">
        <p>
          <code>@BeforeEach</code>/<code>@AfterEach</code> (ou <code>setUp</code>/<code>tearDown</code> nas versões
          antigas do JUnit) rodam <strong>antes e depois de CADA teste</strong>: cada método começa em ambiente
          limpo e independente da ordem de execução. O material da turma mistura JUnit 3, 4 e 5 — os nomes mudam,
          o conceito não.
        </p>
      </HighlightBox>
    </section>
  );
}
