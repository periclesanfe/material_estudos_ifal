import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { revisionOverview, examTopics, miniProjects } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Estrutura de Dados"
        subtitle="Da representação em memória à análise de complexidade: escolher a estrutura certa para cada problema"
        colorClass="text-accent"
      />

      <HighlightBox title="Objetivo da disciplina">
        <p>
          A disciplina parte de Python como linguagem de implementação e avança progressivamente: dos tipos primitivos
          até TADs complexos como árvores e tabelas hash. O fio condutor é sempre a análise de complexidade - saber
          escolher a estrutura certa para o problema certo.
        </p>
      </HighlightBox>

      <Subsection title="Visão geral da disciplina" accentClass="text-accent2">
        <ConceptGrid items={revisionOverview} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Fluxo de aprendizado" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'Python Básico (tipos, controle, funções)',
            'Strings e Listas (sequências Python)',
            'Recursividade (base para DFS, divisão)',
            'Notação Big O (critério de comparação)',
            'TAD (abstração de dados)',
            'Estruturas Lineares (listas, pilhas, filas, deque)',
            'Encadeamento e Busca (O(n) vs O(log n))',
            'Hashing e Ordenação (rumo a O(1) e O(n log n))',
            'Árvores, BST e Heap (estruturas hierárquicas)',
          ]}
        />
      </Subsection>

      <Subsection title="Assuntos declarados pelo professor" accentClass="text-accent5">
        <PanelList items={examTopics} columns="" />
      </Subsection>

      <HighlightBox title="Big O cai nas três avaliações" accent="var(--color-accent3)">
        <p>
          Recursividade, pilhas, filas, busca, ordenação e árvores se dividem entre AV1 e AV2. A{' '}
          <strong>análise de desempenho com notação Big O</strong> é o único assunto que aparece nas três listas — AV1,
          AV2 e prova final.
        </p>
      </HighlightBox>

      <Subsection title="Os três miniprojetos da turma" accentClass="text-accent4">
        <PanelList items={miniProjects} columns="" />
      </Subsection>

      <HighlightBox title="Fonte do conteúdo" accent="var(--color-accent5)">
        <p>
          Todo o material desta matéria foi resumido e reorganizado a partir das aulas, listas de exercícios e
          miniprojetos do <strong>Prof. MSc. Ricardo Nunes · ESTD · BSI/IFAL · 2023.1</strong> — que assina as listas
          de exercícios como <em>Prof. Ricardo Rubens</em>, sob o mesmo e-mail institucional. A bibliografia indicada
          por ele inclui <em>Problem Solving with Algorithms and Data Structures using Python</em>, de Miller e Ranum,
          e <em>Algoritmo e Estrutura de Dados I e II</em>, de A. C. Santos.
        </p>
      </HighlightBox>
    </section>
  );
}
