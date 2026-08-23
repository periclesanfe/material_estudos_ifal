import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function AtividadesEstadosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Atividades e Máquina de Estados"
        subtitle="Dois diagramas comportamentais: um segue o FLUXO do processo, o outro segue a VIDA de um objeto"
        colorClass="text-accent"
      />

      <TheoryBlock title="Diagrama de atividades: o fluxograma que aceita paralelismo">
        <p>
          Descreve a lógica de um procedimento, um processo de negócio ou um fluxo de trabalho. É
          parecido com um fluxograma, <strong>mas suporta comportamento paralelo</strong> — e essa é
          a diferença que justifica sua existência. É orientado a{' '}
          <strong>fluxos de controle</strong> (enquanto a máquina de estados é orientada a{' '}
          <strong>eventos</strong>).
        </p>
      </TheoryBlock>

      <Subsection title="Elementos do diagrama de atividades" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: 'Ação × Atividade', description: 'O estado AÇÃO é instantâneo; o estado ATIVIDADE leva tempo para ser concluído.', accent: 'accent' },
            { title: 'Inicial e finais', description: 'Um único estado inicial (círculo preenchido); estados finais podem ser vários.', accent: 'accent2' },
            { title: 'Ramificação (decision)', description: 'Uma entrada, várias saídas, cada uma com condição de guarda entre colchetes — pode ter [else]. Escolhe UM caminho.', accent: 'accent3' },
            { title: 'União (merge)', description: 'Reúne transições que vieram de uma ramificação, voltando ao fluxo único.', accent: 'accent4' },
            { title: 'Bifurcação (fork)', description: 'Barra que dispara vários fluxos PARALELOS, executados independentemente.', accent: 'accent5' },
            { title: 'Junção (join)', description: 'Barra que sincroniza: só prossegue quando TODAS as entradas dispararam.', accent: 'accent' },
            { title: 'Raias (swimlanes)', description: 'Partições que dividem o diagrama por ENTIDADE RESPONSÁVEL — pessoa, departamento ou sistema.', accent: 'accent2' },
            { title: 'Fluxo de objeto', description: 'Opcional: mostra os dados que fluem entre as atividades.', accent: 'accent3' },
          ]}
        />
        <ExampleBox title="Exemplos do material">
          <p>
            <strong>Processamento de pedido</strong> com raias (atendimento ao cliente e departamento
            financeiro): receber pedido → pré-processar → [entrega normal ou expressa] → enviar
            fatura → receber pagamento → fechar pedido. E <strong>Matricular Aluno</strong>: verifica
            o limite de inscrições e, conforme a guarda, informa o limite, adiciona à lista de espera
            ou inscreve o aluno na oferta — o mesmo fluxo do caso de uso do SCA, agora como diagrama.
          </p>
        </ExampleBox>
      </Subsection>

      <TheoryBlock title="Máquina de estados: a vida de um objeto">
        <p>
          <strong>Estado</strong> é a situação na vida de um objeto em que ele satisfaz alguma
          condição ou realiza alguma atividade — e o material dá a definição precisa: é{' '}
          <strong>função dos valores dos atributos e das ligações</strong> com outros objetos. Ou
          seja: estados são uma <strong>abstração dos atributos e associações</strong>. Exemplos:
          uma conta no vermelho, um professor licenciado, um tanque na reserva, um pedido atendido.
        </p>
      </TheoryBlock>

      <Subsection title="A anatomia de uma transição" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="evento(parâmetros) [guarda] / ação"
          code={`// Exemplo da OfertaDisciplina (material da turma):

realizarInscricao(aluno) [qtdAlunos < capacidadeMaxima] / qtdAlunos := qtdAlunos + 1

//  ^ evento                ^ condição de guarda           ^ ação executada na transição

// A transição dispara SE E SOMENTE SE o evento ocorre E a guarda é verdadeira.
// Sem guarda, basta o evento ocorrer.`}
        />
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Evento de CHAMADA', description: 'Recebimento de uma mensagem de outro objeto — SÍNCRONO: quem envia aguarda a execução.' },
            { title: 'Evento de SINAL', description: 'Recebimento de um sinal — ASSÍNCRONO: o remetente continua processando após enviar.' },
            { title: 'Evento TEMPORAL', description: 'A passagem de um intervalo predefinido, com a cláusula after: after(30 segundos).' },
            { title: 'Evento de MUDANÇA', description: 'Uma condição que se torna verdadeira, com a cláusula when: when(saldo > 0), when(horário = 00:00h).' },
          ]}
        />
      </Subsection>

      <Subsection title="A distinção fina: ação × atividade" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="AÇÃO"
          rightLabel="ATIVIDADE"
          rows={[
            { criterion: 'Onde vive', left: 'Associada à TRANSIÇÃO (após a barra no rótulo)', right: 'Associada ao ESTADO (o "do/" dentro dele)' },
            { criterion: 'Pode ser interrompida?', left: 'NÃO — é atômica', right: 'SIM — um evento pode disparar a saída do estado' },
            { criterion: 'Quando executa', left: 'Se e somente se a transição dispara', right: 'Enquanto o objeto permanece no estado' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Ponto de junção e exemplos da turma" accent="var(--color-accent3)">
        <p>
          O <strong>ponto de junção</strong> permite que várias transições compartilhem uma
          trajetória, com uma guarda em cada saída e a possibilidade de <code>[else]</code> para o
          caso restante. Exemplos trabalhados: <strong>ContaBancária</strong> (disponível ↔ bloqueada,
          com <code>when(saldo &gt; 0)</code>) e <strong>OfertaDisciplina</strong> (Aberta → Lotada
          quando a capacidade se esgota; Cancelada; Fechada). Quando vários estados compartilham
          transições e atividades comuns, podem ser agrupados em <strong>superestados</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
