import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function NormalizacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Normalização"
        subtitle="Dependências funcionais e o caminho 1FN → 2FN → 3FN, com o exemplo do PEDIDO e a questão da prova"
        colorClass="text-accent"
      />

      <TheoryBlock title="Por que normalizar">
        <p>
          Normalização é o processo <strong>por estágios</strong> que avalia e corrige as tabelas para minimizar
          redundância — e com ela as <strong>anomalias de inserção, atualização e exclusão</strong>. O motor de
          tudo é a <strong>dependência funcional</strong>: A → B ("A determina B") quando, para cada valor de A,
          aparece sempre o mesmo valor de B — A é o <strong>determinante</strong>, B o <strong>dependente</strong>.
          Para a maioria dos projetos comerciais, a <strong>3FN</strong> é o alvo.
        </p>
      </TheoryBlock>

      <Subsection title="Os três tipos de dependência (definições da professora)" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'DF Total',
              description: 'O atributo depende de TODOS os atributos da PK composta. Em ITEM_DO_PEDIDO, quantidade depende de (nopedido + codprod) inteiros.',
              accent: 'accent',
            },
            {
              title: 'DF Parcial',
              description: 'Depende só de PARTE da PK composta — descrição_produto depende apenas de codprod. É o que a 2FN elimina.',
              accent: 'accent2',
            },
            {
              title: 'DF Transitiva',
              description: 'Não-chave dependendo de outro não-chave: nomevendedor ← codvendedor; Sal ← Cat ← CodEmp. É o que a 3FN elimina.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As formas normais" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Forma"
          leftLabel="Exigência"
          rightLabel="Como converter"
          rows={[
            { criterion: '1FN', left: 'Formato de tabela: sem grupos de valores repetidos, sem atributos compostos/multivalorados, PK identificada', right: 'Eliminar grupos repetidos (achatar ou extrair tabela), definir a PK, mapear as dependências' },
            { criterion: '2FN', left: '1FN + SEM dependências parciais. PK simples ⇒ automaticamente 2FN', right: 'Cada componente da chave vira chave de tabela própria; distribuir os dependentes' },
            { criterion: '3FN', left: '2FN + SEM dependências transitivas', right: 'O determinante da transitiva vira PK de nova tabela; o dependente sai da original' },
            { criterion: 'BCNF', left: 'Todo DETERMINANTE é chave candidata', right: 'Só difere da 3FN quando há mais de uma chave candidata' },
          ]}
        />
      </Subsection>

      <Subsection title="Exemplo condutor: o PEDIDO, da bagunça à 3FN" accentClass="text-accent5">
        <CodeBlock
          language="sql"
          title="O caminho completo (slides da professora)"
          code={`-- NÃO NORMALIZADO: tudo numa relação só
-- PEDIDO {nopedido, prazoentrega, cliente, endereço, cidade, UF, CGC,
--         inscestadual, codprod, unidade, quant, descrição, valunit,
--         valtotalprod, valtotalpedido, codvendedor, nomevendedor}

-- 1FN: separa o grupo repetido (itens) — PK composta no item
-- PEDIDO(nopedido, prazoentrega, cliente, endereço, cidade, UF, CGC,
--        inscestadual, valtotalpedido, codvendedor, nomevendedor)
-- ITEM_DO_PEDIDO(nopedido, codprod, unidade, quant, descrição, valunit, valtotalprod)

-- 2FN: remove as PARCIAIS do item (descrição/unidade/valunit dependem só de codprod)
-- ITEM_DO_PEDIDO(nopedido, codprod, quant, valtotalprod)
-- PRODUTO(codprod, unidade, valunit, descrição)

-- 3FN: remove as TRANSITIVAS do pedido
--   endereço, cidade, UF, CGC, inscestadual dependem de CLIENTE
--   nomevendedor depende de codvendedor
-- PEDIDO(nopedido, prazoentrega, codcliente, codvendedor, valtotalpedido)
-- CLIENTE(codcliente, cliente, endereço, cidade, UF, CGC, inscestadual)
-- VENDEDOR(codvendedor, nomevendedor)
-- + ITEM_DO_PEDIDO + PRODUTO           → 5 tabelas na 3FN`}
        />
        <ExampleBox title="A questão 1 da 2ª prova (resolvida no gabarito)">
          <p>
            FUNCIONARIO com grupo repetido de cargos {'{'}codcargo, nome_cargo, datas{'}'} e dados de dependente:
            a <strong>1FN</strong> extrai CARGO; a <strong>3FN</strong> extrai DEPENDENTE com PK composta
            (MATR + NOME_DO_DEPENDENTE) — o mesmo padrão de entidade fraca da transformação. Resultado: FUNCIONARIO
            + CARGO + DEPENDENTE. Note como normalização e modelagem convergem para o mesmo desenho.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="BCNF e desnormalização" accentClass="text-accent4">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <strong>BCNF</strong>: com uma única chave candidata, 3FN já garante BCNF; a diferença aparece no caso
          A+B→C,D com C→B — um determinante (C) que não é chave candidata. Decompõe-se expondo a dependência.{' '}
          <strong>Desnormalização</strong> é o movimento inverso e consciente: aceitar forma normal mais baixa para
          ganhar desempenho (menos junções), pagando com redundância — comum em relatórios e data warehouses.
        </p>
      </Subsection>

      <HighlightBox title="Exercícios da lista (diagnóstico rápido)" accent="var(--color-accent3)">
        <p>
          <strong>VENDA_CARRO</strong>(nrcar + nrvendedor | data_venda, comissão%, desconto): está na 1FN;{' '}
          <em>nrvendedor → comissão%</em> é parcial (viola a 2FN) e <em>datavenda → desconto</em> é transitiva
          (viola a 3FN). <strong>LIVRO</strong>(título + nomeautor | tipolivro, preço, afiautor, editora): parciais{' '}
          <em>título → editora, tipolivro</em> e <em>autor → afiautor</em>; transitiva <em>tipolivro → preço</em>.
          O exercício BOLETIM segue o mesmo roteiro com PK tripla. Treine apontando primeiro as DFs — a
          decomposição sai sozinha.
        </p>
      </HighlightBox>
    </section>
  );
}
