import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ConceptGrid, ExampleBox } from '../../../components/sections';

export default function ExcecoesCamadasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Exceções e Arquitetura em Camadas"
        subtitle="Erros que não derrubam o sistema, e o View → BO → DAO que organiza o projeto final"
        colorClass="text-accent"
      />

      <TheoryBlock title="try, catch, throw, throws">
        <p>
          Exceções sinalizam erros em <strong>tempo de execução</strong> sem matar o programa:{' '}
          <code>throw new</code> <strong>lança</strong>, <code>throws</code> na assinatura declara que o método{' '}
          <strong>propaga</strong> (empurra a responsabilidade para quem chamou), e <code>try/catch</code>{' '}
          <strong>captura e trata</strong>. Depois do catch, a execução continua — na View da aula, o programa
          imprime o erro e segue vivo.
        </p>
        <p>
          <strong>Exceção própria</strong> é uma classe que <code>extends Exception</code>, tipicamente com um
          construtor que prefixa a mensagem: cada camada do sistema declara a <em>sua</em>, e é isso que o critério
          10 do projeto cobra.
        </p>
      </TheoryBlock>

      <Subsection title="As camadas da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'View — interação com o usuário (Scanner, prints, try/catch de exibição)',
            'BO / Service — regras de negócio e validações; lança a exceção da camada',
            'DAO — persistência: só ele conversa com o banco',
            'VO — objeto de valor: atributos + getters/setters, transita entre as camadas',
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: 'Pacotes espelham camadas', description: 'view/, bo/ (ou service/), dao/, vo/, util/ — abrir o projeto já revela a arquitetura. É o layout que o professor espera no GitHub.', accent: 'accent' },
            { title: 'Por que separar', description: 'Cada camada muda por um motivo: trocar a tela não mexe na regra; trocar o banco não mexe na View. Testar o BO isolado fica trivial.', accent: 'accent2' },
            { title: 'Util reutilizável', description: 'Validadores static (ValidarEmail.verificarSeEmailValido) servem a qualquer BO — utilidade sem estado é método estático.', accent: 'accent3' },
            { title: 'MVC do plano de curso', description: 'A "Parte 03" chama essa organização de arquitetura MVC: a View é o V; BO+VO fazem o papel do Model; o fluxo de controle liga as pontas.', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <Subsection title="mar/06: a primeira versão — Service + ServiceException" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="Cada peça no seu pacote"
          code={`// vo/PessoaVO.java — só dados
public class PessoaVO {
    private String nome;
    // getters e setters
}

// service/ServiceException.java — a exceção DA CAMADA
public class ServiceException extends Exception {
    public ServiceException(String erro) {
        super("Erro no serviço: " + erro);
    }
}

// service/PessoaService.java — regra de negócio valida ANTES de delegar
public void cadastrar(String nome, String cpf) throws ServiceException {
    if (nome.isBlank() || nome.length() <= 1) {
        throw new ServiceException("nome inválido");
    }
    new PessoaDAO().cadastrar();   // só chega ao DAO quem passou na regra
}

// view/PessoaView.java — a fronteira com o usuário trata
try {
    service.cadastrar(nome, cpf);
} catch (ServiceException e) {
    System.out.println(e.getMessage());   // "Erro no serviço: nome inválido"
}
System.out.println("O programa continua...");   // exceção tratada não derruba`}
        />
      </Subsection>

      <Subsection title="mar/13: a evolução — BO + tradução de exceções" accentClass="text-accent5">
        <CodeBlock
          language="java"
          title="EstudanteBO — capturar embaixo, relançar com a exceção da camada"
          code={`// util/validacao/ValidarEmail.java lança ValidationException (baixo nível)

// bo/EstudanteBO.java
public void validarCadastro(EstudanteVO estudanteVO) throws EstudanteException {
    if (estudanteVO.getNome().length() < 2) {
        throw new EstudanteException("erro na validação do cadastro");
    }
    try {
        ValidarEmail.verificarSeEmailValido(estudanteVO.getEmail());
    } catch (ValidationException e) {
        // TRADUÇÃO: a exceção de baixo nível vira a exceção DESTA camada
        throw new EstudanteException(e.getMessage());
    }
}`}
        />
        <ExampleBox title="Por que traduzir em vez de propagar?">
          <p>
            Se o BO deixasse a <code>ValidationException</code> vazar, a View precisaria conhecer o mecanismo
            interno de validação — e trocá-lo quebraria a View. Traduzindo, <strong>cada camada expõe apenas a sua
            exceção</strong>: quem usa o BO trata <code>EstudanteException</code> e pronto. É o padrão{' '}
            <em>exception translation</em>, e cai direto na correção do projeto.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Cuidado herdado do material: catch vazio" accent="var(--color-accent4)">
        <p>
          A View de exemplo da turma tem um <code>catch</code> vazio no <code>main</code> — o erro é engolido sem
          nem uma mensagem. Em teste de exceção o catch vazio tem função (aprovar o lançamento); em código de
          produção é armadilha: <strong>todo catch deve, no mínimo, registrar o que aconteceu</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
