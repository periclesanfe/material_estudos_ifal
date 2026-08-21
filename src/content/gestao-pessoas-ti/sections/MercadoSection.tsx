import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function MercadoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Mercado, Rotatividade e o Futuro do Emprego"
        subtitle="A organização como sistema aberto — e o que dizem os textos sobre o emprego que está desaparecendo"
        colorClass="text-accent"
        badge="1ª Prova · Trabalhos"
      />

      <Subsection title="Dois mercados, não um" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="Mercado de Trabalho"
          rightLabel="Mercado de Recursos Humanos"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Do que é composto', left: 'Das VAGAS oferecidas pelas organizações', right: 'Dos CANDIDATOS disponíveis' },
            { criterion: 'Quem oferece', left: 'As empresas', right: 'As pessoas' },
            {
              criterion: 'Quando está em alta',
              left: 'Muitas vagas abertas — recrutar fica difícil e caro',
              right: 'Muitos candidatos disponíveis — recrutar fica fácil e barato',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois se movem em sentidos opostos, e é essa relação que determina a dificuldade de contratar. Em TI,
          períodos de mercado de trabalho aquecido e mercado de RH escasso são justamente aqueles em que salário
          deixa de ser suficiente para atrair — e os fatores motivacionais de Herzberg passam a fazer diferença.
        </p>
      </Subsection>

      <Subsection title="Rotatividade: a organização como sistema aberto" accentClass="text-accent3">
        <TheoryBlock title="O fluxo de entrada e saída">
          <p>
            O material representa a rotatividade (turnover) com um diagrama que trata a organização como{' '}
            <strong>sistema aberto</strong>: pessoas entram e saem continuamente, atravessando a fronteira com o
            meio ambiente.
          </p>
        </TheoryBlock>
        <ExampleBox title="O diagrama de Chiavenato">
          <CodeBlock
            language="python"
            code={`                        ┌──────────────────┐
                   ┌───▶│    COMPARAÇÃO    │◀─── Realimentação
                   │    └────────┬─────────┘      de dados
                   │             │ Controle
                   │             ▼                       │
   Meio      ┌──────────┐  ┌───────────┐  ┌───────────┐  │
 ambiente ──▶│ ADMISSÕES│─▶│ RECURSOS  │─▶│DESLIGAMEN-│──┴──▶  Meio
             └──────────┘  │  HUMANOS  │  │   TOS     │      ambiente
                           └───────────┘  └───────────┘`}
          />
          <p className="mt-3">
            Os elementos: o <strong>meio ambiente</strong> nas duas pontas, <strong>admissões</strong> como
            entrada, <strong>recursos humanos</strong> como o estoque de pessoas na organização,{' '}
            <strong>desligamentos</strong> como saída, e — atuando sobre esse fluxo — a{' '}
            <strong>comparação</strong> entre o que entra e o que sai, o <strong>controle</strong> e a{' '}
            <strong>realimentação de dados</strong>.
          </p>
          <p>
            A leitura: rotatividade não é um evento isolado ("fulano pediu demissão"), é um{' '}
            <strong>fluxo permanente</strong> que precisa ser medido e regulado. Uma organização sem
            desligamento algum estagna; com desligamento demais, perde conhecimento acumulado mais rápido do que
            consegue repor.
          </p>
        </ExampleBox>
        <HighlightBox title="Uma lacuna do material, dita com honestidade" accent="var(--color-accent4)">
          <p>
            As <strong>fórmulas</strong> de índice de rotatividade e de absenteísmo não constam do material
            distribuído na turma — o assunto teve uma aula expositiva e um vídeo indicado no mural
            ("Indicadores de gestão de pessoas: rotatividade e absenteísmo"). Esta página apresenta o conceito e o
            modelo, sem inventar cálculos que a fonte não traz.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Qual é o futuro do emprego?" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Dois textos de apoio foram discutidos numa atividade em grupo. O primeiro contesta a tese do "fim do
          emprego"; o segundo anuncia o fim de um <em>tipo</em> de emprego. Não se contradizem tanto quanto
          parece.
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Texto 1 — a destruição criadora',
              description:
                'Argumenta que o mesmo se dizia na Revolução Industrial. A taxa bruta de desemprego pode ficar constante enquanto há intenso movimento de criação e destruição de postos. É o conceito de DESTRUIÇÃO CRIADORA, de Joseph Schumpeter.',
              accent: 'accent',
            },
            {
              title: 'O caso citado',
              description:
                'Uma fabricante de mainframes que dominava seu mercado mas, por deficiências culturais e organizacionais, não se moveu com rapidez para os micros: brutal destruição de empregos nela, brutal criação em concorrentes mais ágeis. O texto adverte contra "tomar a parte pelo todo" — fotografar o lado destruído e generalizar.',
              accent: 'accent2',
            },
            {
              title: 'Educação e empregabilidade',
              description:
                'As taxas de desemprego tendem a ser mais altas onde a educação é pior, e o problema educacional é apontado como um dos principais responsáveis pela concentração de renda. A revolução tecnológica aumenta a demanda por pessoal qualificado e reduz a de empregos tradicionais.',
              accent: 'accent3',
            },
            {
              title: 'Texto 2 — a notícia ruim e a boa',
              description:
                'A ruim: a era do emprego formal — carteira assinada, horário fixo, carreira até a aposentadoria — é um conceito do século XIX que está desaparecendo. A boa: trabalhar não é mais sinônimo de ter um emprego.',
              accent: 'accent4',
            },
          ]}
        />
        <HighlightBox title="A empresa virtual e a economia flexível">
          <p>
            O segundo texto descreve a <strong>empresa virtual</strong>: entidade sem existência física, sem
            edifícios, salas, arquivos ou estacionamentos, cujas partes funcionais se ligam{' '}
            <strong>apenas eletronicamente</strong>. Duas palavras-chave a viabilizam:{' '}
            <strong>miniaturização</strong> e <strong>conectibilidade</strong>.
          </p>
          <p>
            Daí decorrem as novas formas de trabalho: emprego temporário, tempo parcial, horários flexíveis,
            trabalho remoto e home office, contratos de curto prazo, subcontratação, terceirização e parceria — a
            chamada <strong>economia flexível</strong>, com trabalho em regime "just-in-time".
          </p>
          <p className="text-sm">
            Vale ler esses textos com a consciência de que foram escritos antes da pandemia. Muito do que
            anunciavam como tendência distante — trabalho remoto em escala, equipes distribuídas, contratos
            flexíveis — virou cotidiano de quem trabalha com tecnologia. É uma boa oportunidade de avaliar quais
            previsões se cumpriram e quais não.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
