import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function RecursosNaturezaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Recursos e a Natureza Humana"
        subtitle="Por que o recurso humano é diferente de todos os outros"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <Subsection title="Os cinco recursos organizacionais" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Denominação tradicional"
          rightLabel="Concepção americana"
          criterionLabel="Recurso"
          rows={[
            { criterion: 'Materiais ou físicos', left: 'Natureza', right: 'Materials and machinery' },
            { criterion: 'Financeiros', left: 'Capital', right: 'Money' },
            { criterion: 'Humanos', left: 'Trabalho', right: 'Man' },
            { criterion: 'Mercadológicos', left: '— (não tem correspondente)', right: 'Marketing' },
            { criterion: 'Administrativos', left: 'Empresa', right: 'Management' },
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Materiais ou físicos',
              description: 'Edifícios e terrenos, máquinas, equipamentos, instalações, matérias-primas, materiais e tecnologia de produção.',
              accent: 'accent',
            },
            {
              title: 'Financeiros',
              description: 'Capital, fluxo de dinheiro, crédito, receita, financiamentos e investimentos.',
              accent: 'accent2',
            },
            {
              title: 'Humanos',
              description: 'Diretores, gerentes, chefes, supervisores, funcionários, operários e técnicos — todos os níveis, e não apenas a base.',
              accent: 'accent3',
            },
            {
              title: 'Mercadológicos',
              description: 'O mercado de clientes, consumidores ou usuários. É o único sem correspondente na denominação tradicional — sinal de que foi reconhecido como recurso mais tarde.',
              accent: 'accent4',
            },
            {
              title: 'Administrativos',
              description: 'Planejamento, organização, direção e controle — as próprias funções administrativas tratadas como recurso.',
              accent: 'accent5',
            },
          ]}
        />
        <HighlightBox title="A assimetria que justifica a disciplina" accent="var(--color-accent4)">
          <p>
            Quatro desses cinco recursos são <strong>passivos</strong>: um prédio não decide nada, o capital não
            se aplica sozinho, uma tecnologia não se implanta. O recurso humano é o único que{' '}
            <strong>ativa os demais</strong> — e o único que tem objetivos próprios, que podem coincidir ou não
            com os da organização.
          </p>
          <p>
            É daí que vem toda a dificuldade e todo o interesse do assunto: não se "administra" pessoas como se
            administra estoque.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A complexa natureza do homem" accentClass="text-accent3">
        <TheoryBlock title="Três enfoques do comportamento das pessoas">
          <p>
            O material abre a disciplina com três afirmações sobre a natureza humana que, juntas, explicam por
            que gerir pessoas não se reduz a dar ordens:
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'O homem como ser transacional',
              description:
                'Não apenas recebe insumos do ambiente e reage a eles — adota uma posição PROATIVA. As trocas com o ambiente são de mão dupla: a pessoa também age sobre ele.',
              accent: 'accent',
            },
            {
              title: 'Comportamento dirigido para um objetivo',
              description:
                'É capaz de ter objetivos ou aspirações próprias e de aplicar esforços no sentido de alcançá-los. Ou seja: traz uma agenda para dentro da organização.',
              accent: 'accent2',
            },
            {
              title: 'O homem como sistema aberto',
              description:
                'Dirigido para objetivos, interdependente do meio físico e social, e ativamente envolvido em transações com esse ambiente à medida que persegue seus objetivos.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare no que os três têm em comum: a recusa da imagem da pessoa como <em>peça</em>. Cada uma das três
          formulações insiste em iniciativa, objetivo próprio e interação — e é essa recusa que separa a moderna
          gestão de pessoas da administração de recursos humanos tradicional, tema da seção sobre a moderna GP.
        </p>
      </Subsection>
    </section>
  );
}
