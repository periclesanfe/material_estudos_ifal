import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ComparisonTable, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function FetchSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Ajax e Fetch API"
        subtitle="Buscar dados sem recarregar a página"
        colorClass="text-accent"
        badge="Fundamentos"
      />

      <TheoryBlock title="Síncrono × assíncrono">
        <p>
          No modelo tradicional, cada interação recarregava a página inteira: o usuário clicava, a tela
          piscava, tudo era baixado de novo.
        </p>
        <p>
          O <strong>Ajax</strong> permite o <strong>carregamento assíncrono</strong> de dados{' '}
          <strong>sem recarregar a página</strong>. A comunicação assíncrona melhora a performance e a
          experiência do usuário — a interface continua utilizável enquanto os dados chegam.
        </p>
      </TheoryBlock>

      <Subsection title="A Fetch API" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="XMLHttpRequest"
          rightLabel="Fetch API"
          criterionLabel="Aspecto"
          rows={[
            { criterion: 'Base', left: 'Callbacks e eventos de mudança de estado', right: 'PROMISES' },
            { criterion: 'Legibilidade', left: 'Encadeamento aninhado, difícil de seguir', right: 'Encadeamento linear com then' },
            { criterion: 'Status', left: 'A abordagem antiga', right: 'A abordagem moderna — substitui o XMLHttpRequest' },
          ]}
        />
        <CodeBlock
          language="javascript"
          code={`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O padrão tem três elos: o primeiro <code>then</code> converte a resposta em JSON, o segundo
          trata os dados e o <code>catch</code> captura qualquer erro da cadeia.
        </p>
      </Subsection>

      <Subsection title="A atividade da turma" accentClass="text-accent3">
        <ExampleBox title="Atualizando 4 divs simultaneamente">
          <p>
            Depois de usar Fetch API e DOM API em aula para exibir dados de um serviço web de forma
            assíncrona, a turma recebeu o exercício de{' '}
            <strong>atualizar quatro divs diferentes da mesma página</strong> — usando quatro requisições
            distintas ao mesmo serviço ou quatro APIs web diferentes.
          </p>
          <p>
            A instrução final era <strong>validar a funcionalidade no navegador e analisar o
            comportamento do carregamento assíncrono</strong>. É aí que está a lição: as quatro seções se
            preenchem <em>conforme cada resposta chega</em>, não necessariamente na ordem em que foram
            pedidas.
          </p>
          <p className="text-sm">
            A entrega era o link de um repositório público no GitHub, com os nomes e e-mails dos
            participantes no README. A API podia ser escolhida da lista pública de APIs gratuitas
            indicada pelo professor.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Por que assíncrono importa" accent="var(--color-accent5)">
        <p>
          Se as quatro requisições fossem síncronas, cada uma bloquearia a página até terminar, e o
          tempo total seria a <strong>soma</strong> dos quatro tempos.
        </p>
        <p>
          Sendo assíncronas, elas partem juntas e o tempo total é aproximadamente o da{' '}
          <strong>mais lenta</strong> — enquanto a interface permanece responsiva o tempo todo. É a
          mesma diferença entre esperar quatro filas em sequência e entrar nas quatro ao mesmo tempo.
        </p>
      </HighlightBox>
    </section>
  );
}
