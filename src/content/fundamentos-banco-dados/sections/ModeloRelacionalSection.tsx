import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ModeloRelacionalSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelo Relacional e Integridade"
        subtitle="Relações, a hierarquia de chaves e as duas regras que mantêm o banco coerente"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que é uma relação">
        <p>
          Proposto por E. F. Codd em 1970, o modelo relacional enxerga os dados como <strong>relações</strong> —
          tabelas bidimensionais em que cada <strong>linha (tupla)</strong> é uma ocorrência da entidade e cada{' '}
          <strong>coluna (atributo)</strong> tem nome único e um <strong>domínio</strong> (faixa de valores
          válidos). Formalmente, r(R) ⊆ dom(A₁) × dom(A₂) × ... × dom(Aₙ): a relação é um subconjunto do produto
          cartesiano dos domínios. Regras práticas do livro: cada célula guarda <strong>um único valor</strong>; a
          ordem de linhas e colunas é <strong>irrelevante</strong>; e toda tabela precisa de um identificador único
          por linha.
        </p>
      </TheoryBlock>

      <Subsection title="A hierarquia de chaves" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Superchave',
              description: 'Qualquer conjunto de atributos que identifica exclusivamente cada linha — mesmo com atributos sobrando: (matrícula, nome) é superchave.',
              accent: 'accent',
            },
            {
              title: 'Chave candidata',
              description: 'Superchave MÍNIMA: remover qualquer atributo quebra a unicidade. Toda candidata é superchave; a recíproca é falsa.',
              accent: 'accent2',
            },
            {
              title: 'Chave primária',
              description: 'A candidata eleita para identificar as linhas. Regra absoluta: NENHUMA parte dela pode ser nula.',
              accent: 'accent3',
            },
            {
              title: 'Chave estrangeira (FK)',
              description: 'Atributo cujos valores coincidem com a PK de outra tabela — ou são nulos. É o elo entre tabelas e o mecanismo da redundância controlada.',
              accent: 'accent4',
            },
            {
              title: 'Chave composta',
              description: 'Chave com mais de um atributo — a PK das tabelas de ligação e das entidades fracas.',
              accent: 'accent5',
            },
            {
              title: 'Chave secundária',
              description: 'Usada estritamente para recuperação de dados (buscas), sem papel de identificação.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <Subsection title="NULL: três significados, muitos problemas" accentClass="text-accent3">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          NULL representa <strong>valor desconhecido</strong>, <strong>valor conhecido mas ausente</strong> ou
          condição <strong>não aplicável</strong> — e por isso não é comparável nem confiável: distorce
          COUNT/AVG/SUM, complica junções e é <strong>proibido na chave primária</strong>. Alguns projetos usam
          flags no lugar (código −99, "Nenhum"), com seus próprios riscos.
        </p>
      </Subsection>

      <Subsection title="As duas regras de integridade" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Integridade de ENTIDADE"
          rightLabel="Integridade REFERENCIAL"
          rows={[
            { criterion: 'Exigência', left: 'Todas as entradas de PK são ÚNICAS e nenhuma parte da PK é nula', right: 'Toda FK não nula referencia um valor de PK EXISTENTE na tabela relacionada' },
            { criterion: 'Finalidade', left: 'Cada linha tem identidade exclusiva; as FKs têm o que referenciar', right: 'Impossível apontar para quem não existe; impede excluir linha ainda referenciada' },
            { criterion: 'Exemplo do livro', left: 'Nenhuma fatura pode ter número duplicado nem nulo', right: 'Cliente pode não ter corretor (FK nula), mas jamais um corretor INVÁLIDO' },
          ]}
        />
      </Subsection>

      <Subsection title="Como os relacionamentos viram tabelas" accentClass="text-accent4">
        <PanelList
          columns=""
          items={[
            {
              title: '1:M — a norma do modelo relacional',
              description: 'A FK fica no lado M: cada PINTURA carrega o código do seu PINTOR. É o desenho ideal, o mais comum e o mais simples.',
            },
            {
              title: '1:1 — raro, e às vezes um alerta',
              description: 'Pode indicar entidades que deviam ser uma só; quando legítimo (PROFESSOR dirige DEPARTAMENTO), a FK vai para o lado apropriado — critério detalhado na seção de transformação.',
            },
            {
              title: 'M:N — nunca direto',
              description: 'Válido no modelo conceitual, IMPOSSÍVEL de implementar diretamente: vira dois 1:M através da tabela de ligação (entidade composta). ALUNO—MATRÍCULA—TURMA: MATRÍCULA tem PK composta (aluno + turma, ambas FKs) e carrega os atributos do relacionamento, como a nota.',
            },
          ]}
        />
        <ExampleBox title="Dicionário de dados e as regras de Codd">
          <p>
            O <strong>dicionário de dados</strong> descreve todas as tabelas e colunas (tipos, formatos, chaves) —
            metadados; o <strong>catálogo do sistema</strong> é a versão que o próprio SGBD mantém sobre todos os
            objetos. E em 1985 Codd publicou as <strong>12 regras</strong> que definem um SGBD relacional — que nem
            os fornecedores dominantes cumprem por completo.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Redundância controlada ≠ redundância" accent="var(--color-accent3)">
        <p>
          A FK repetida em muitas linhas <strong>não é redundância</strong> — é o elo necessário entre as tabelas.
          Redundância de verdade é duplicação <em>desnecessária</em> de dados. E há redundância deliberada e
          legítima: a linha da fatura guarda o preço praticado <em>naquele momento</em>, mesmo existindo o preço
          atual na tabela de produtos — precisão histórica vale a cópia.
        </p>
      </HighlightBox>
    </section>
  );
}
