import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ModeloEerSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelo EER"
        subtitle="Especialização, generalização, categorias e a entidade associativa — o ER com semântica de herança"
        colorClass="text-accent"
      />

      <TheoryBlock title="Superclasse, subclasse e herança">
        <p>
          O EER (ER Estendido) acrescenta ao ER a ideia de <strong>superclasse/subclasse</strong> com relação
          "é um": EMPREGADO se especializa em SECRETÁRIA, TÉCNICO e ENGENHEIRO. Três regras semânticas centrais: a
          instância da subclasse <strong>é a mesma entidade</strong> da superclasse (não uma cópia); ela{' '}
          <strong>não pode existir só na subclasse</strong>; e <strong>herda todos os atributos E
          relacionamentos</strong> da superclasse, somando os seus específicos (a velocidade de digitação só existe
          na secretária).
        </p>
        <p>
          A motivação prática, no exemplo da empresa aérea do livro: sem subclasses, a tabela única de empregados
          fica cheia de <strong>nulos</strong> — licença de voo vazia para todo mundo que não é piloto.
        </p>
      </TheoryBlock>

      <Subsection title="Especialização × generalização" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Especialização (top-down)"
          rightLabel="Generalização (bottom-up)"
          rows={[
            { criterion: 'Direção', left: 'Da superclasse para subgrupos com base numa característica', right: 'De entidades existentes para uma superclasse com o que é comum' },
            { criterion: 'Exemplo da aula', left: 'EMPREGADO → por tipo de trabalho (secretária/técnico/engenheiro) E por contrato (assalariado/horista) — várias especializações da mesma superclasse', right: 'CARRO + CAMINHÃO → VEÍCULO (chassi, preço e placa sobem; eixos e lugares ficam)' },
            { criterion: 'Completude típica', left: 'Total ou parcial, conforme o minimundo', right: '"Normalmente, a generalização é total" (slide da professora)' },
          ]}
        />
      </Subsection>

      <Subsection title="As duas restrições — independentes entre si" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Disjunção: (d) × (o)',
              description: 'DISJUNTA (d): cada instância em NO MÁXIMO uma subclasse. SOBREPOSTA (o): pode estar em várias — a conta que é corrente E poupança.',
              accent: 'accent',
            },
            {
              title: 'Completude: total × parcial',
              description: 'TOTAL (linha dupla): toda instância da superclasse pertence a pelo menos uma subclasse. PARCIAL: pode ficar de fora (e o discriminador fica nulo).',
              accent: 'accent2',
            },
            {
              title: 'As 4 combinações',
              description: 'Disjunta-total, disjunta-parcial, sobreposta-total, sobreposta-parcial — as duas dimensões são INDEPENDENTES; o minimundo decide. O gabarito da turma anota "T, O" (total, overlap).',
              accent: 'accent3',
            },
            {
              title: 'Quem define o subtipo',
              description: 'Por PREDICADO/condição (salário > X), por ATRIBUTO discriminador (EMP_TYPE = "P" → piloto) ou pelo USUÁRIO (sem condição; quem insere decide).',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Hierarquia, reticulado e categoria" accentClass="text-accent5">
        <ComparisonTable
          criterionLabel="Construção"
          leftLabel="Subclasse compartilhada (reticulado)"
          rightLabel="Categoria (tipo união)"
          rows={[
            { criterion: 'Operação de conjunto', left: 'INTERSEÇÃO das superclasses', right: 'Subconjunto da UNIÃO das superclasses' },
            { criterion: 'Pertinência', left: 'A instância existe em TODAS as superclasses (GERENTE_ENGENHARIA é engenheiro E gerente E assalariado)', right: 'A instância pertence a UMA das superclasses (PROPRIETÁRIO é pessoa OU banco OU empresa)' },
            { criterion: 'Herança', left: 'MÚLTIPLA — herda de todas (atributo por dois caminhos entra uma vez)', right: 'SELETIVA — herda só os atributos da superclasse a que pertence' },
            { criterion: 'Recomendação do Elmasri', left: 'Suportada, mas nem toda metodologia tem', right: '"Geralmente devem ser evitadas" — use com parcimônia' },
          ]}
        />
      </Subsection>

      <Subsection title="Entidade associativa (agregação)" accentClass="text-accent4">
        <ExampleBox title="O exemplo da professora: criminoso, vítima e arma">
          <p>
            CRIMINOSO <em>assassina</em> VÍTIMA é um relacionamento N:M. Onde registrar as <strong>armas
            apreendidas</strong> de cada assassinato? A arma não pertence ao criminoso nem à vítima — pertence ao{' '}
            <strong>fato</strong>, que é o próprio relacionamento. Como "o modelo ER não suporta relacionamento
            entre relacionamentos", promove-se <em>assassina</em> a <strong>entidade associativa</strong> (o
            retângulo em volta do losango), que então se relaciona com ARMA. No relacional: a agregação vira tabela
            com PK composta, e a tabela de armas a referencia.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Escolhendo a chave primária (e quando usar surrogate)" accent="var(--color-accent3)">
        <p>
          Critérios do livro para uma boa PK: valores <strong>únicos e sem nulos</strong>,{' '}
          <strong>não intuitiva</strong> (sem significado de negócio embutido), <strong>imutável</strong> no tempo,
          preferencialmente <strong>um único atributo numérico</strong> (autoincremento) e sem dados sensíveis (nada
          de CPF como PK). Quando a chave natural é longa, composta ou semântica, usa-se uma{' '}
          <strong>chave surrogate</strong> — protegendo a candidata natural com índice único e NOT NULL.
        </p>
      </HighlightBox>
    </section>
  );
}
