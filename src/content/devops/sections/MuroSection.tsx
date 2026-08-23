import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function MuroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Muro da Confusão e os Silos"
        subtitle="O problema que DevOps existe para resolver — e por que ele não se resolve com ferramenta"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <ExampleBox title="O diálogo que abre a disciplina">
        <div className="space-y-3">
          <p className="text-accent font-medium">
            Dev: "Não é minha máquina, é o seu código!"
          </p>
          <p className="text-accent2 font-medium">
            Ops: "Não é o meu código, é a sua máquina!"
          </p>
        </div>
        <p className="mt-4">
          É o <strong>Wall of Confusion</strong>, o muro da confusão: o código atravessa a parede em direção à
          operação e, quando algo quebra, cada lado tem uma explicação que responsabiliza o outro. O detalhe
          cruel é que <strong>os dois costumam estar dizendo a verdade</strong> — o código realmente funcionava no
          ambiente de desenvolvimento, e o ambiente de produção realmente é diferente.
        </p>
      </ExampleBox>

      <TheoryBlock title="A causa raiz: incentivos conflitantes">
        <p>
          É tentador tratar o muro como falta de boa vontade ou de competência. O material vai mais fundo e
          localiza a causa nos <strong>focos conflitantes</strong> que cada lado recebe da organização:
        </p>
        <ComparisonTable
          leftLabel="Desenvolvimento"
          rightLabel="Operações"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que se espera',
              left: '"Eu quero mudanças!" — novas funcionalidades, entregues rápido',
              right: '"Eu quero estabilidade!" — o sistema no ar, sem incidentes',
            },
            {
              criterion: 'Como é medido',
              left: 'Pelo que foi entregue: funcionalidades, prazos, velocidade',
              right: 'Pelo que NÃO aconteceu: disponibilidade, ausência de falhas',
            },
            {
              criterion: 'Como enxerga o deploy',
              left: 'O momento em que o trabalho finalmente gera valor',
              right: 'O momento de maior risco — mudança é a principal causa de falha',
            },
          ]}
        />
        <p>
          Aqui está o nó: <strong>mudar é exatamente o que ameaça a estabilidade</strong>. Enquanto um lado for
          cobrado por produzir mudanças e o outro por evitá-las, o conflito é estrutural, não pessoal. Trocar as
          pessoas não resolve; comprar uma ferramenta muito menos. É por isso que DevOps começa por cultura e
          métricas compartilhadas — e só depois chega às ferramentas.
        </p>
      </TheoryBlock>

      <Subsection title="Os sintomas típicos" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: '"Já está pronto, só falta testar"',
              description:
                'A funcionalidade é declarada concluída antes de ser verificada. O que resta é justamente a parte que descobre problemas — e ela cai no colo de outra pessoa, depois do prazo.',
              accent: 'accent',
            },
            {
              title: '"Funcionava em dev"',
              description:
                'A diferença entre ambientes vira argumento de defesa em vez de problema a resolver. É exatamente essa lacuna que os containers atacam mais adiante na disciplina.',
              accent: 'accent2',
            },
            {
              title: 'Operação como suporte reativo',
              description:
                'Ops deixa de participar do projeto e passa a apagar incêndios do que já foi decidido sem ela. Perde-se a chance de evitar problemas que só quem opera enxerga.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Cavernas de conhecimento e o mito do herói" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O segundo grande problema é a formação de <strong>silos de conhecimento</strong> — o material os chama de
          "cavernas". Eles têm duas causas bem definidas:
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Falta de documentação',
              description:
                'O procedimento existe apenas na memória de quem o executa. Ninguém mais sabe a ordem exata dos passos, nem por que aquele parâmetro tem aquele valor.',
              accent: 'accent',
            },
            {
              title: 'Falta de automatização',
              description:
                'O processo depende de alguém digitar os comandos certos, na ordem certa, no servidor certo. Cada execução é uma chance de errar de um jeito novo.',
              accent: 'accent2',
            },
          ]}
        />
        <HighlightBox title="O funcionário que perdeu o direito de morrer" accent="var(--color-accent4)">
          <p>
            É assim, com humor, que o material nomeia o resultado: a pessoa única capaz de executar um
            procedimento crítico. Ela costuma ser vista como o funcionário mais valioso da equipe — e o material
            faz questão de inverter essa leitura.
          </p>
          <p>
            O herói não é uma virtude: é o <strong>sintoma de um processo doente</strong> e um{' '}
            <strong>grande risco para o negócio</strong>. Se essa pessoa sai de férias, adoece ou muda de emprego,
            a capacidade de operar vai junto. E note o efeito perverso: quanto mais indispensável ela se torna,
            menos tempo tem para documentar e automatizar — o que a torna ainda mais indispensável.
          </p>
          <p>
            O antídoto são as duas causas invertidas: <strong>documentar e automatizar</strong>, transformando
            conhecimento tácito em processo repetível. Não é sobre desvalorizar a pessoa — é sobre libertá-la de
            ser um ponto único de falha.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
