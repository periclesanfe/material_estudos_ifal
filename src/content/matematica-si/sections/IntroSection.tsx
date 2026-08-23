import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Matemática para Sistemas de Informação"
        subtitle="A matemática com que os problemas de computação são formulados"
        colorClass="text-accent"
      />

      <HighlightBox title="O que esta disciplina é — e o que não é">
        <p>
          MTSI (2º período, 80h, Formação Básica) <strong>não é revisão do ensino médio</strong>. A ementa
          oficial do PPC é <strong>Sistemas Lineares, Matrizes, Transformações Lineares, Relações, Funções,
          Recursão e Grafos</strong> — álgebra linear e estruturas discretas.
        </p>
        <p>
          São as estruturas que reaparecem em estrutura de dados, computação gráfica, banco de dados e análise
          de algoritmos. A palavra "relacional", em banco de dados relacional, vem literalmente do bloco de
          Relações desta disciplina.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Matrizes: definição, tipos e a diagonal principal',
            'Operações — e a multiplicação que não é comutativa',
            'Determinante, inversa e a leitura geométrica',
            'Sistemas lineares e sua classificação',
            'Cramer e o escalonamento de Gauss',
            'Transformações lineares e computação gráfica',
            'Produto cartesiano e relações',
            'Equivalência, ordem e classes',
            'Funções: injeção, sobrejeção e bijeção',
            'Recursão: caso base e passo',
            'Grafos: vértices, arestas e graus',
            'Matriz × lista de adjacência, BFS e DFS',
          ]}
        />
      </Subsection>

      <Subsection title="Onde MTSI se encaixa no currículo" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'LMMD (1º período) — o que vem antes',
              description:
                'Fundamentos da lógica, lógica proposicional, teoria dos conjuntos, sequências, teoria dos números, e prova e indução matemática. É a base formal sobre a qual MTSI constrói.',
            },
            {
              title: 'MTSI (2º período) — esta disciplina',
              description:
                'Sistemas lineares, matrizes, transformações lineares, relações, funções, recursão e grafos. Álgebra linear e as estruturas discretas que a computação usa.',
            },
            {
              title: 'ESTD (3º período) — o que vem depois',
              description:
                'Tipos abstratos de dados, listas encadeadas, pilhas, filas, árvores e algoritmos recursivos. É MTSI virando código: a árvore de grafos vira estrutura, a recursão vira algoritmo.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A sequência não é acidental. Cada disciplina fornece o vocabulário que a seguinte assume conhecido.
        </p>
      </Subsection>

      <Subsection title="Os dois blocos da matéria" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Álgebra linear',
              description:
                'Matrizes, determinantes, sistemas lineares e transformações. É a matemática do contínuo aplicada a dados organizados em tabelas — e a base de computação gráfica, processamento de imagem e aprendizado de máquina.',
              accent: 'accent',
            },
            {
              title: 'Estruturas discretas',
              description:
                'Relações, funções, recursão e grafos. É a matemática do discreto — objetos contáveis e suas conexões —, e a base de banco de dados, algoritmos e modelagem de redes.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Sobre a fonte deste material" accent="var(--color-accent4)">
        <p>
          Uma observação de transparência, porque este caso é diferente das outras matérias do site.
        </p>
        <p>
          A turma raspada de Fundamentos de Matemática I foi arquivada tendo servido{' '}
          <strong>apenas como repositório de bibliografia</strong>: cinco materiais, nenhum aviso, nenhuma
          atividade. Os arquivos são <strong>obras comerciais publicadas de terceiros</strong> — a coleção
          Fundamentos de Matemática Elementar (Iezzi), Contexto e Aplicações (Dante), a coleção Telaris e um
          livro de Introdução ao Cálculo da UFSC/UAB. Não há slide autoral do professor, ementa da turma,
          enunciado de avaliação ou cronograma.
        </p>
        <p>
          Por isso este conteúdo <strong>não resume nem reproduz esses livros</strong>. Ele foi escrito a partir
          da <strong>ementa oficial do PPC</strong> — documento institucional do IFAL — e dos conceitos padrão
          de álgebra linear e matemática discreta, que são conhecimento técnico de domínio comum. Vale notar que
          a bibliografia depositada na turma (trigonometria, geometria, probabilidade) tem{' '}
          <strong>pouca sobreposição com a ementa oficial</strong>, que é de álgebra linear e estruturas
          discretas — o material seguiu a ementa.
        </p>
        <p className="text-sm">
          Para estudo aprofundado, procure a bibliografia da disciplina junto à coordenação. As avaliações
          apresentadas aqui (álgebra linear e estruturas discretas) são um agrupamento temático dos blocos da
          ementa, não as provas de uma turma específica — não há registro delas no material.
        </p>
      </HighlightBox>
    </section>
  );
}
