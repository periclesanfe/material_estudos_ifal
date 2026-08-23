import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function TeoriasXYSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Teorias X e Y de McGregor"
        subtitle="Duas concepções opostas sobre a natureza humana — e o modo de administrar que cada uma produz"
        colorClass="text-accent"
        badge="1ª Prova · Trabalhos"
      />

      <TheoryBlock title="O que McGregor propôs">
        <p>
          Douglas McGregor, um dos mais influentes behavioristas na teoria das organizações, distinguiu{' '}
          <strong>duas concepções opostas de administração</strong>, baseadas em pressuposições diferentes sobre
          a natureza humana.
        </p>
        <p>
          O ponto que interessa não é qual delas é "verdadeira", e sim que{' '}
          <strong>a pressuposição do gestor molda o sistema que ele constrói</strong> — e o sistema, por sua vez,
          produz o comportamento que confirma a pressuposição. Quem acredita que as pessoas evitam trabalho
          instala controles rígidos; sob controle rígido, as pessoas de fato deixam de tomar iniciativa.
        </p>
      </TheoryBlock>

      <Subsection title="As seis pressuposições de cada teoria" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="TEORIA X"
          rightLabel="TEORIA Y"
          criterionLabel="Sobre..."
          rows={[
            {
              criterion: 'O trabalho',
              left: 'Os seres humanos não gostam do trabalho e o evitarão sempre que puderem',
              right: 'O trabalho pode ser fonte de satisfação OU de sofrimento, dependendo das condições',
            },
            {
              criterion: 'Controle',
              left: 'Para atingir os objetivos, as pessoas devem ser compelidas, controladas e mesmo ameaçadas com punições',
              right: 'Controle externo e ameaça de punição não são os únicos meios: as pessoas podem ter autocontrole e autodirigir-se, desde que convencidas e comprometidas',
            },
            {
              criterion: 'Direção',
              left: 'Em geral, preferem ser dirigidas a dirigir',
              right: 'As recompensas no trabalho estão ligadas aos compromissos assumidos',
            },
            {
              criterion: 'Responsabilidade',
              left: 'Procuram evitar as responsabilidades',
              right: 'Podem aprender a aceitar e assumir responsabilidades',
            },
            {
              criterion: 'Potencial',
              left: 'As pessoas médias têm pouca ambição',
              right: 'Imaginação, criatividade e engenhosidade são largamente encontradas nas pessoas',
            },
            {
              criterion: 'Aproveitamento',
              left: 'Preocupam-se acima de tudo com a própria segurança e bem-estar',
              right: 'O potencial intelectual do ser humano médio está longe de ser totalmente utilizado',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Não confunda com Herzberg" accentClass="text-accent3">
        <HighlightBox title="Duas teorias, dois autores, dois objetos" accent="var(--color-accent4)">
          <p>
            É a confusão mais comum desta unidade, porque as duas teorias trabalham com pares:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Herzberg</strong> — teoria dos <strong>DOIS FATORES</strong> (higiênicos e motivacionais).
              Trata do que gera <em>satisfação no trabalho</em>.
            </li>
            <li>
              <strong>McGregor</strong> — <strong>TEORIAS X e Y</strong>. Trata de dois <em>estilos de
              administrar</em> pessoas.
            </li>
          </ul>
          <p>
            O cronograma da disciplina, aliás, as ensina em aulas separadas — Herzberg em 04/12, McGregor em
            11/12 — precisamente porque são assuntos distintos.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A atividade da turma" accentClass="text-accent4">
        <ExampleBox title="Encontrar as duas teorias no cotidiano">
          <p>
            A atividade pedia que os grupos apresentassem <strong>situações práticas do cotidiano
            organizacional</strong> que demonstrassem manifestações das duas teorias.
          </p>
          <p>
            É um exercício mais interessante do que parece, porque as manifestações raramente vêm declaradas.
            Ninguém diz "eu acho que meus funcionários são preguiçosos" — mas instala ponto biométrico com
            tolerância de zero minuto, exige justificativa por escrito para cada saída, bloqueia sites e mede
            produtividade por horas de tela ativa. Nada disso é dito; tudo isso pressupõe a Teoria X.
          </p>
          <p>
            No sentido oposto, horário flexível, trabalho remoto por confiança, metas acordadas em vez de tarefas
            distribuídas e autonomia para escolher <em>como</em> fazer são manifestações da Teoria Y — também sem
            que ninguém precise citar McGregor.
          </p>
          <p className="text-sm">
            O aprendizado é aprender a ler a pressuposição por trás da prática. As políticas de uma empresa
            revelam o que ela pensa das pessoas, mesmo quando o discurso oficial diz outra coisa.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
