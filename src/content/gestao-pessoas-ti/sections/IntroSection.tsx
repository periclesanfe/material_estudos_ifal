import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Gestão de Pessoas em TI"
        subtitle="Quem constrói os sistemas também precisa ser gerido — e isso tem método, teoria e história"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          GPTI (40h, 4º período) é a matéria que trata do <strong>recurso que ativa todos os outros</strong>.
          Máquinas, capital e tecnologia são inertes: quem os põe em movimento são as pessoas — e gerir pessoas
          tem um corpo de conhecimento próprio, com teorias que se acumulam desde a primeira metade do século XX.
        </p>
        <p>
          O percurso é o clássico de Chiavenato: primeiro entender o que motiva alguém a trabalhar, depois
          percorrer os seis processos que uma organização executa sobre as pessoas — agregar, aplicar,
          recompensar, desenvolver, manter e monitorar.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Recursos organizacionais e a complexa natureza do homem',
            'Motivação: o ciclo motivacional, Maslow e os dois fatores de Herzberg',
            'Teorias X e Y: dois modos opostos de enxergar quem trabalha',
            'A moderna gestão de pessoas e os seis processos',
            'Mercado de trabalho, rotatividade e o futuro do emprego',
            'AGREGAR: recrutamento e seleção',
            'APLICAR: cargos e avaliação do desempenho',
            'RECOMPENSAR: remuneração e benefícios',
            'DESENVOLVER: treinamento e desenvolvimento',
            'MANTER: higiene, segurança e qualidade de vida',
            'Cultura organizacional: o que sustenta tudo isso',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'Duas provas',
              description:
                'A primeira cobrindo os fundamentos — recursos, natureza humana, motivação, Maslow, Herzberg, teorias X e Y, moderna gestão de pessoas, mercado de trabalho, recrutamento e seleção. A segunda, os processos de aplicar, recompensar, desenvolver e manter, além de cultura organizacional.',
            },
            {
              title: 'Trabalhos em grupo, sempre ancorados em caso real',
              description:
                'Apresentação sobre estilos de administração de RH; análise do caso da empresa ABC; pesquisa sobre o futuro do emprego a partir de dois textos; discussão do caso do candidato digital; apresentações sobre técnicas de seleção; e uma pesquisa em que cada grupo escolhia uma empresa real e descrevia seu processo de avaliação de desempenho — com os grupos anunciando no mural a empresa escolhida, para não haver repetição.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Livro-base" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Chiavenato — Gestão de Pessoas (Manole, 2014)',
              description:
                'É a espinha dorsal da disciplina. Praticamente todo o material de aula são digitalizações deste livro: as figuras, os quadros comparativos e as definições vêm dele, e a sequência dos onze módulos segue sua organização.',
              accent: 'accent',
            },
            {
              title: 'Barbieri — Gestão de Pessoas nas Organizações (Atlas, 2014)',
              description:
                'Subtitulado "o talento humano na sociedade da informação", é a referência complementar — e a que mais se aproxima do recorte de TI que dá nome à disciplina.',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Uma observação de fidelidade: o cronograma da turma lista ainda três títulos de{' '}
          <strong>finanças</strong> na bibliografia — princípios de administração financeira, gestão de
          investimentos e finanças pessoais. Eles não têm relação com gestão de pessoas e são, quase certamente,
          resquício de cópia do plano de outra disciplina. Ficam registrados aqui apenas como curiosidade
          documental.
        </p>
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma de Gestão de Pessoas em TI 2023.2 —
          BSI/IFAL: cronograma da disciplina, os onze módulos de slides baseados em Chiavenato, os textos de
          apoio sobre o futuro do emprego e os dois casos discutidos em aula (a empresa ABC e o candidato
          digital).
        </p>
        <p className="text-sm">
          Nota técnica: dez dos onze módulos foram distribuídos como apresentações antigas cujo conteúdo são{' '}
          <strong>digitalizações do livro coladas como imagem</strong> — não havia texto a extrair. As 42
          páginas escaneadas foram recuperadas dos arquivos e lidas uma a uma. Onde a cobertura do material é
          rasa, esta página diz isso em vez de preencher a lacuna.
        </p>
      </HighlightBox>
    </section>
  );
}
