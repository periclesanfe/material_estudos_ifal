import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ConceptGrid, PanelList } from '../../../components/sections';

export default function PadroesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Padrões de Projeto (AV1)"
        subtitle="Soluções com nome e sobrenome para problemas que todo sistema OO repete"
        colorClass="text-accent"
      />

      <TheoryBlock title="O que é um padrão de projeto">
        <p>
          Um <strong>padrão de projeto</strong> (design pattern) é uma solução consagrada e reutilizável para um
          problema <strong>recorrente</strong> de design de software — descrita de forma genérica, independente de
          aplicação. Não é código para copiar: é uma <em>receita de estrutura</em> que cada equipe adapta. O
          catálogo clássico (Gang of Four) tem 23 padrões, organizados em três famílias, e está inteiro em
          português no <strong>refactoring.guru/pt-br/design-patterns</strong> — a referência indicada na atividade.
        </p>
      </TheoryBlock>

      <Subsection title="As três famílias do catálogo" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Criacionais',
              description: 'COMO criar objetos com flexibilidade: Singleton (instância única), Factory Method (fábrica decide a classe concreta), Builder (montagem passo a passo).',
              accent: 'accent',
            },
            {
              title: 'Estruturais',
              description: 'COMO compor classes e objetos: Adapter (compatibiliza interfaces), Decorator (adiciona responsabilidade sem herança), Facade (fachada simples para subsistema complexo).',
              accent: 'accent2',
            },
            {
              title: 'Comportamentais',
              description: 'COMO distribuir responsabilidades e comunicação: Strategy (algoritmos intercambiáveis), Observer (notificação a interessados), Template Method (esqueleto no pai, passos nas filhas).',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Você já implementou um: o Singleton" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="A aula de encapsulamento fez isso sem dar o nome"
          code={`class Conta {
    private static Conta conta;      // a ÚNICA instância, guardada na classe

    private Conta() {}               // construtor privado: new externo proibido

    static Conta getInstance() {
        if (Conta.conta == null) {           // lazy initialization:
            Conta.conta = new Conta();       // cria na primeira chamada
        }
        return Conta.conta;                  // e sempre devolve a MESMA
    }
}`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          <strong>Singleton</strong> (família criacional): garante uma única instância com ponto de acesso global.
          A receita usa três peças da disciplina — construtor <code>private</code>, atributo <code>static</code> e
          método <code>static</code>. Note também que o polimorfismo da FolhaDePagamento flerta com o{' '}
          <em>Strategy</em>, e o esqueleto-com-passos do Template Method é herança + métodos abstratos: padrões são
          os conceitos do curso combinados com intenção.
        </p>
      </Subsection>

      <Subsection title="Como foi a AV1 da turma" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'A tarefa',
              description:
                'Em grupos de até 4: explicar o que é um padrão de projeto; escolher UM padrão do catálogo; mostrar que problema ele resolve e as vantagens/desvantagens do uso; e apresentar DOIS exemplos em código Java.',
            },
            {
              title: 'As regras',
              description:
                'Entrega via Classroom (apresentação em PDF + códigos). Apresentação em sala POR SORTEIO — todos os integrantes deviam estar preparados para explicar, no dia marcado.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Vantagens e desvantagens — o que a banca quer ouvir" accent="var(--color-accent3)">
        <p>
          <strong>A favor:</strong> vocabulário comum ("aqui é um Observer" comunica a estrutura inteira), soluções
          já testadas pela comunidade, código mais aberto a extensão. <strong>Contra:</strong> padrão aplicado sem
          necessidade é complexidade gratuita — o Singleton, por exemplo, cria estado global que dificulta testes.
          Padrão bom é o que resolve um problema que você <em>de fato</em> tem.
        </p>
      </HighlightBox>
    </section>
  );
}
