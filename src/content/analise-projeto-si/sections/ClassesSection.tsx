import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function ClassesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelagem de Classes"
        subtitle="O dicionário visual do domínio: classes, associações, multiplicidade e os mecanismos gerais da UML"
        colorClass="text-accent"
      />

      <TheoryBlock title="O modelo conceitual">
        <p>
          Se os casos de uso mostram o comportamento, o modelo de classes mostra a{' '}
          <strong>estrutura</strong> — o aspecto estático do sistema. O modelo de classes de{' '}
          <strong>análise</strong> representa termos do <strong>domínio do negócio</strong> e
          descreve o <strong>problema</strong>, sem considerar a solução: é, nas palavras do
          material, um <strong>"dicionário visual"</strong> dos conceitos relevantes.
        </p>
        <p>
          A cadeia é: <strong>análise</strong> (o problema) → <strong>projeto</strong> (as classes de
          software, com métodos e dependências) → <strong>implementação</strong>. A mesma classe
          Conta aparece nas três etapas, com nível de detalhe crescente.
        </p>
      </TheoryBlock>

      <Subsection title="Anatomia de uma classe" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="A classe evolui com o estágio do projeto (exemplo ContaBancária)"
          code={`// Análise: só o conceito e suas informações
class ContaBancaria {
    numero
    saldo
    titular
}

// Projeto: tipos, visibilidade e operações
class ContaBancaria {
    - numero: String        // (-) privado
    - saldo: double
    # titular: Cliente      // (#) protegido
    + depositar(valor: double): void   // (+) público
    + sacar(valor: double): boolean
    + getSaldo(): double
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Atributos</strong> são as informações que o objeto armazena;{' '}
          <strong>operações</strong>, as ações que ele sabe realizar. Na UML, a classe é uma caixa
          com até três compartimentos — e o detalhamento exibido depende do estágio e do nível de
          abstração desejado.
        </p>
      </Subsection>

      <Subsection title="Associações e seus adornos" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Associações representam ligações formadas entre <strong>objetos</strong> durante a{' '}
          <strong>execução</strong> — são desenhadas entre classes, mas valem para as instâncias.
          Adornos disponíveis: <strong>nome</strong> da associação (dá o sentido semântico),{' '}
          <strong>direção de leitura</strong> (a setinha que diz como ler) e{' '}
          <strong>papel</strong> desempenhado por cada extremo. Exemplo do material: Organização{' '}
          <em>"Contrata"</em> Indivíduo, com os papéis <em>contratante</em> e <em>contratado</em>.
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Multiplicidade',
              description: 'Os limites inferior e superior de objetos associados: 1..1 (ou 1), 0..* (ou *), 1..*, 0..1 ou um intervalo como 1..8. Há duas por associação, uma em cada extremo.',
              accent: 'accent',
            },
            {
              title: 'Conectividade',
              description: 'O tipo resultante, lido pelos MÁXIMOS: um-para-um, um-para-muitos ou muitos-para-muitos.',
              accent: 'accent2',
            },
            {
              title: 'Participação',
              description: 'Lida pelo MÍNIMO: se o mínimo é 1, a participação é OBRIGATÓRIA; se é 0, é OPCIONAL. Regra mecânica e certeira em prova.',
              accent: 'accent3',
            },
          ]}
        />
        <ExampleBox title="Lendo uma associação completa">
          <p>
            <code>CLIENTE 1..1 ——faz——&gt; 0..* PEDIDO</code>: todo pedido tem exatamente um cliente
            (participação <strong>obrigatória</strong> do lado do pedido); um cliente pode ter zero
            ou muitos pedidos (participação <strong>opcional</strong> do lado do cliente); a
            conectividade é <strong>um-para-muitos</strong>.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Os outros relacionamentos" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Agregação e composição', description: 'Relações parte-todo (o "tem um"). A composição é a forma forte: a parte não existe sem o todo.' },
            { title: 'Generalização', description: 'A herança (o "é um"): Pessoa Física e Pessoa Jurídica generalizadas em Pessoa.' },
            { title: 'Classe de associação', description: 'Quando a própria ligação tem atributos — Pessoa e Projeto ligados por Alocação, que guarda carga horária e remuneração.' },
            { title: 'Dependência', description: 'Uma classe usa serviços de outra sem guardá-la como atributo — detalhada na seção de projeto de classes.' },
          ]}
        />
      </Subsection>

      <Subsection title="Mecanismos gerais da UML" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Estereótipos', description: 'Estendem o significado de um elemento. GRÁFICOS (um ícone: ator, componente, firewall) ou DE RÓTULO (nome entre << e >>, como <<fronteira>> ou <<entity>>).' },
            { title: 'Notas explicativas', description: 'Comentam parte do diagrama, ligadas por linha tracejada; texto livre ou expressão OCL.' },
            { title: 'Etiquetas (tagged values)', description: 'Propriedades extras além das predefinidas: { autor = "Ana" }, { versão = 2.1 }.' },
            { title: 'Restrições', description: 'Estendem ou alteram a semântica natural de um elemento, limitando valores.' },
            { title: 'OCL', description: 'A Object Constraint Language, linguagem FORMAL da UML para restrições. Estrutura: CONTEXTO (a classe ou instância) · PROPRIEDADE (um atributo ou associação) · OPERAÇÃO (o que se aplica). Serve para pré e pós-condições e navegação entre objetos.' },
            { title: 'Pacotes', description: 'Agrupam artefatos (ícone de pasta com aba), com visibilidade por elemento (+, #, −) e relacionamentos de dependência que formam o diagrama de pacotes.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Continuando o exercício do leilão" accent="var(--color-accent3)">
        <p>
          O mesmo enunciado do leilão pede também o <strong>modelo de classes de domínio</strong>:
          cada <strong>Leilão</strong> tem data e hora de início e de encerramento; cada{' '}
          <strong>Item</strong> pertence a um único leilão e tem um lance mínimo (se não for
          arrematado, é recadastrado em outro leilão); um item pode receber{' '}
          <strong>muitos Lances ou nenhum</strong> — sem lance, não é arrematado; e cada{' '}
          <strong>Participante</strong>, registrado antes do início, pode dar quantos lances quiser
          ou nenhum. Traduza cada "pode não" em multiplicidade mínima 0 e cada "deve" em 1 — o
          modelo sai do texto quase pronto.
        </p>
      </HighlightBox>
    </section>
  );
}
