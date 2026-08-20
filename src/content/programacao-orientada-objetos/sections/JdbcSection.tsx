import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ConceptGrid } from '../../../components/sections';

export default function JdbcSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="JDBC e Banco de Dados"
        subtitle="O DAO de verdade: Connection, PreparedStatement, ResultSet — e a interface que liberta do MySQL"
        colorClass="text-accent"
      />

      <TheoryBlock title="A ponte entre Java e o banco">
        <p>
          <strong>JDBC</strong> (Java Database Connectivity) é a API padrão para conversar com bancos relacionais.
          O fluxo tem três peças: a <code>Connection</code> aberta por{' '}
          <code>DriverManager.getConnection(url, usuario, senha)</code> — a URL identifica o banco, como{' '}
          <code>jdbc:mysql://servidor/IFAL</code> —, o <code>PreparedStatement</code> que executa comandos SQL, e o{' '}
          <code>ResultSet</code> que carrega as linhas devolvidas por uma consulta.
        </p>
      </TheoryBlock>

      <Subsection title="Conexão atrás de interface" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="abr/03 — IConexao e a implementação MySQL"
          code={`public interface IConexao {
    Connection conectar() throws SQLException;
    Connection desconectar() throws SQLException;
}

public class ConexaoMySQL implements IConexao {
    private String url = "jdbc:mysql://" + serverName + "/" + mydatabase;
    private Connection conexao;

    public Connection conectar() throws SQLException {
        this.conexao = DriverManager.getConnection(url, usuario, senha);
        return this.conexao;
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O DAO depende do <em>contrato</em> <code>IConexao</code>: se o projeto migrar para Postgres, nasce uma{' '}
          <code>ConexaoPostgres implements IConexao</code> e o DAO não muda uma linha. É a seção de interfaces
          aplicada à infraestrutura.
        </p>
      </Subsection>

      <Subsection title="O AlunoDAO completo" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="CRUD com PreparedStatement e mapeamento para VO"
          code={`public class AlunoDAO {
    private Connection conexao;

    public AlunoDAO() throws SQLException {           // produção: cria a própria conexão
        this.conexao = new ConexaoMySQL().conectar();
    }

    public AlunoDAO(Connection conexao) {             // teste: RECEBE a conexão (injeção)
        this.conexao = conexao;
    }

    public void cadastrar(String nome, int idade) throws SQLException {
        PreparedStatement pstmt = this.conexao.prepareStatement(
            "INSERT INTO IFAL.ALUNOS(nome, idade) VALUES(?,?)");
        pstmt.setString(1, nome);   // os ? recebem valores TIPADOS,
        pstmt.setInt(2, idade);     // nunca concatenados na string SQL
        pstmt.execute();
    }

    public ArrayList<AlunoVO> listar() throws SQLException {
        PreparedStatement pstmt = this.conexao.prepareStatement(
            "SELECT * FROM IFAL.ALUNOS");
        ResultSet rs = pstmt.executeQuery();

        ArrayList<AlunoVO> alunos = new ArrayList<>();
        while (rs.next()) {                       // linha a linha do resultado
            AlunoVO aluno = new AlunoVO();
            aluno.setNome(rs.getString("nome"));  // coluna → atributo do VO
            aluno.setIdade(rs.getInt("idade"));
            alunos.add(aluno);
        }
        return alunos;
    }

    public void excluir(String nome, int idade) throws SQLException {
        PreparedStatement pstmt = this.conexao.prepareStatement(
            "DELETE FROM IFAL.ALUNOS WHERE nome = ? AND idade = ?");
        pstmt.setString(1, nome);
        pstmt.setInt(2, idade);
        pstmt.execute();
    }
}`}
        />
      </Subsection>

      <Subsection title="As três decisões de projeto que valem nota" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Placeholders ? sempre',
              description: 'PreparedStatement separa COMANDO de DADOS: setString/setInt entram tipados e escapados — sem concatenação, sem injeção de SQL.',
              accent: 'accent',
            },
            {
              title: 'DAO concentra o SQL',
              description: 'Todo insert/select/delete mora no DAO. BO e View nunca veem SQL — o critério 8 do projeto (CRUD) é avaliado aqui.',
              accent: 'accent2',
            },
            {
              title: 'Dois construtores',
              description: 'O sem parâmetro cria a conexão (produção); o AlunoDAO(Connection) recebe de fora — a injeção que permite testes transacionais com rollback.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="SQLException com contexto" accent="var(--color-accent3)">
        <p>
          O padrão da turma relança a <code>SQLException</code> com mensagem contextualizada ("erro ao cadastrar
          aluno: …") — a mesma lógica da tradução de exceções das camadas: quem recebe o erro entende{' '}
          <em>o que</em> falhou no domínio, não só o código do driver. O VO segue o de sempre:{' '}
          <code>AlunoVO</code> com id, nome, idade, construtor vazio e parametrizado.
        </p>
      </HighlightBox>
    </section>
  );
}
