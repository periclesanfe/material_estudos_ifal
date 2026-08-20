import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function ModeloErSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelo Entidade-Relacionamento"
        subtitle="Entidades, atributos, cardinalidades e entidades fracas — nos dois dialetos que a disciplina usa"
        colorClass="text-accent"
      />

      <TheoryBlock title="Os blocos de construção">
        <p>
          <strong>Entidade</strong> é uma coisa do mundo real com existência própria (ALUNO, DISCIPLINA); o{' '}
          <em>tipo</em> de entidade descreve o conjunto — e vira tabela mais adiante. <strong>Atributos</strong>{' '}
          são suas propriedades. <strong>Relacionamentos</strong> associam entidades e também podem ter atributos
          próprios (as horas em TRABALHA_EM; a ordem de autoria em AUTOR–ARTIGO). As{' '}
          <strong>regras de negócio</strong> guiam a modelagem: substantivos viram entidades, verbos viram
          relacionamentos, e a cardinalidade sai de duas perguntas — "quantos B para um A?" e "quantos A para um B?".
        </p>
      </TheoryBlock>

      <Subsection title="A taxonomia dos atributos" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Simples × composto',
              description: 'Simples é atômico; composto se subdivide em partes com significado: nome = (pnome, mnome, unome). Só subdivida se as partes forem consultadas separadamente.',
              accent: 'accent',
            },
            {
              title: 'Monovalorado × multivalorado',
              description: 'Multivalorado admite vários valores por entidade — os telefones do professor (elipse dupla no Chen). No relacional, vira tabela própria.',
              accent: 'accent2',
            },
            {
              title: 'Armazenado × derivado',
              description: 'Derivado é calculável de outro: idade ← data de nascimento (elipse tracejada). Armazenar economiza CPU mas arrisca desatualização — trade-off clássico.',
              accent: 'accent3',
            },
            {
              title: 'Atributo-chave',
              description: 'Identifica exclusivamente cada instância (sublinhado). Pode haver mais de um candidato; domínio é o conjunto de valores válidos.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Relacionamentos: grau, cardinalidade e participação" accentClass="text-accent3">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Razão de cardinalidade',
              description: '1:1 (professor dirige uma escola), 1:N (departamento emprega professores), N:M (aluno cursa turmas). A notação (min,max) é mais precisa: PROFESSOR (1,1) ensina (0,4) TURMA.',
            },
            {
              title: 'Participação',
              description: 'TOTAL (linha dupla): toda instância participa — todo dependente pertence a alguém. PARCIAL: pode ficar de fora — nem todo empregado gerencia.',
            },
            {
              title: 'Grau',
              description: 'Unário (auto-relacionamento: DISCIPLINA é pré-requisito de DISCIPLINA; FUNCIONÁRIO gerencia FUNCIONÁRIO), binário (o comum) e ternário.',
            },
            {
              title: 'Papéis (role names)',
              description: 'No auto-relacionamento, os papéis desambiguam: o mesmo FUNCIONÁRIO entra como "supervisor" e como "supervisionado".',
            },
          ]}
        />
        <ExampleBox title="Ternário ≠ três binários">
          <p>
            "FORNECEDOR fornece PEÇA para PROJETO" registra um fato de <strong>três participantes ao mesmo
            tempo</strong>. Trocá-lo por três binários (fornecedor-peça, peça-projeto, fornecedor-projeto) guarda as
            associações par a par, mas perde <em>quem forneceu qual peça para qual projeto</em>. A professora
            insiste nesse ponto — e ele volta na transformação: o ternário vira tabela com as três FKs como PK.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Entidade fraca" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Uma entidade <strong>fraca</strong> não tem chave própria: DEPENDENTE só se identifica pelo FUNCIONÁRIO a
          quem pertence. Os quatro sinais, na notação Chen: retângulo <strong>duplo</strong>; losango duplo no{' '}
          <strong>relacionamento de identificação</strong> com a entidade proprietária; <strong>chave parcial</strong>{' '}
          (sublinhado tracejado — o nome distingue entre os dependentes do <em>mesmo</em> funcionário); e
          participação sempre <strong>total</strong>. No relacional, sua PK vira composta: chave do proprietário +
          chave parcial.
        </p>
      </Subsection>

      <Subsection title="Os dois dialetos da disciplina" accentClass="text-accent4">
        <ComparisonTable
          criterionLabel="Conceito"
          leftLabel="Chen / Elmasri"
          rightLabel="Pé de galinha / Rob & Coronel"
          rows={[
            { criterion: 'Tipos de relacionamento', left: 'Razão de cardinalidade: 1:1, 1:N, N:M', right: 'Conectividade: 1:1, 1:M, M:N' },
            { criterion: 'Mínimos', left: 'Participação total (linha dupla) × parcial', right: 'Participação obrigatória ( | ) × opcional ( ○ )' },
            { criterion: 'Símbolos de máximo', left: 'Rótulos 1 / N nos ramos + (min,max)', right: '○< = (0,N) · |< = (1,N) · || = (1,1) · ○| = (0,1)' },
            { criterion: 'Entidade', left: 'Retângulo; atributos em elipses', right: 'Caixa com lista de atributos e marcação PK/FK' },
            { criterion: 'Relacionamento', left: 'Losango nomeado', right: 'Verbo sobre a linha entre as caixas' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Exercícios da turma (resolvidos nas suas linhas gerais)" accent="var(--color-accent3)">
        <p>
          <strong>ER 1 — Sistema acadêmico:</strong> DEPARTAMENTO oferece CURSOs e DISCIPLINAs (1:N cada);
          DISCIPLINA é pré-requisito de DISCIPLINA (auto-relacionamento N:M); ALUNO em um único CURSO (1:N);
          DISCIPLINA no currículo de vários cursos (N:M); PROFESSOR lotado em um departamento (1:N) ministrando
          várias disciplinas (N:M) — com nome composto e telefones multivalorados de brinde.{' '}
          <strong>ER 2 — Eventos:</strong> o destaque são os <em>atributos de relacionamento</em> (ordem dos temas
          do artigo, ordem de autoria, função do autor em cada instituição) e os DOIS relacionamentos distintos
          entre EVENTO e INSTITUIÇÃO (realiza-se em; é organizado por). A ferramenta usada em aula foi o BrModelo.
        </p>
      </HighlightBox>
    </section>
  );
}
