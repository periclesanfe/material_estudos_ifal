import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function InteracaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Diagramas de Interação"
        subtitle="Sequência e comunicação: como os objetos colaboram para realizar um caso de uso"
        colorClass="text-accent"
      />

      <TheoryBlock title="Do caso de uso para a colaboração">
        <p>
          O diagrama de <strong>sequência</strong> captura um <strong>cenário específico</strong> de
          um caso de uso, mostrando a colaboração entre objetos com as linhas de vida na{' '}
          <strong>vertical</strong> e as mensagens na <strong>horizontal</strong>, em ordem temporal.
          É o diagrama que responde "quem chama quem, em que ordem" — e, por isso, o que mais ajuda a
          descobrir os métodos de cada classe.
        </p>
      </TheoryBlock>

      <Subsection title="Os elementos do diagrama de sequência" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Linha de vida', description: 'Linha tracejada vertical que representa a existência do objeto ao longo do tempo.' },
            { title: 'Barra de ativação', description: 'Retângulo sobre a linha de vida indicando o período em que o objeto está processando.' },
            { title: 'Mensagem SÍNCRONA', description: 'Seta sólida: o remetente AGUARDA a resposta. É a chamada de método comum.' },
            { title: 'Mensagem ASSÍNCRONA', description: 'Seta aberta: o remetente segue processando sem esperar resposta.' },
            { title: 'Mensagem de RETORNO', description: 'Seta tracejada, devolvendo o resultado de uma chamada síncrona.' },
            { title: 'Criação e destruição', description: 'A criação é uma mensagem que aponta para o objeto (frequentemente com «create»); a destruição é um X ao final da linha de vida.' },
          ]}
        />
      </Subsection>

      <Subsection title="Fragmentos: lógica dentro do diagrama" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Fragmento"
          leftLabel="O que representa"
          rightLabel="Equivalente em código"
          rows={[
            { criterion: 'alt', left: 'Caminhos alternativos, cada um com sua condição de guarda', right: 'if / else if / else' },
            { criterion: 'opt', left: 'Trecho que pode ou não ocorrer', right: 'if sem else' },
            { criterion: 'loop', left: 'Repetição do trecho', right: 'for / while' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Sem os fragmentos combinados da UML 2, o diagrama de sequência só conseguiria mostrar um
          cenário linear — um caminho por diagrama.
        </p>
      </Subsection>

      <Subsection title="Sequência × comunicação" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Diagrama de sequência"
          rightLabel="Diagrama de comunicação"
          rows={[
            { criterion: 'O que enfatiza', left: 'A ORDEM TEMPORAL das mensagens', right: 'Os VÍNCULOS estruturais entre os participantes' },
            { criterion: 'Como ordena', left: 'Pela posição vertical (de cima para baixo)', right: 'Pela NUMERAÇÃO das mensagens (1, 1.1, 1.2, 2)' },
            { criterion: 'Posicionamento', left: 'Linhas de vida lado a lado, em colunas', right: 'Objetos livres no espaço, conectados por linhas' },
            { criterion: 'Quando preferir', left: 'Quando a sequência no tempo é o que importa', right: 'Quando importa ver quem se conecta a quem' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois são <strong>equivalentes em conteúdo</strong>: qualquer sequência pode ser
          convertida em comunicação e vice-versa. A <strong>Visão Geral de Interação</strong>, nova
          na UML 2, mistura os dois com o diagrama de atividades — substituindo atividades por
          diagramas de sequência.
        </p>
      </Subsection>

      <Subsection title="Exemplo do material: Emitir Saldo" accentClass="text-accent4">
        <CodeBlock
          language="java"
          title="A mesma colaboração nas duas notações (representada em texto)"
          code={`// DIAGRAMA DE SEQUÊNCIA (ordem = posição vertical)
Cliente        -> Interface_Banco    : inserir cartão
Interface_Banco-> Controlador_Banco  : consultar_Conta(numeroConta)
Controlador    -> Interface_Banco    : solicitar senha        (retorno)
Cliente        -> Interface_Banco    : senha
Interface_Banco-> Controlador_Banco  : validar_Senha(senha)
Controlador    -> Conta_Comum        : saldo_Conta()
Conta_Comum    -> Controlador        : saldo                  (retorno)

// DIAGRAMA DE COMUNICAÇÃO (ordem = numeração)
1.   Cliente -> Interface_Banco: inserir cartão
1.1  Interface_Banco -> Controlador_Banco: número da conta
1.2  Controlador_Banco -> Conta_Comum: consultar_Conta()
2.1  Cliente -> Interface_Banco: senha`}
        />
      </Subsection>

      <HighlightBox title="Para que servem, no projeto" accent="var(--color-accent3)">
        <p>
          Os diagramas de interação são a principal fonte para duas decisões de projeto: quais{' '}
          <strong>métodos</strong> cada classe precisa ter (toda mensagem recebida vira uma operação)
          e qual a <strong>navegabilidade</strong> de cada associação (se nenhuma mensagem parte de B
          para A, B não precisa conhecer A). Voltamos a isso na seção de arquitetura.
        </p>
      </HighlightBox>
    </section>
  );
}
