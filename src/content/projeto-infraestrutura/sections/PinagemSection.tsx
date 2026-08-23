import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, PanelList, TheoryBlock } from '../../../components/sections';

export default function PinagemSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="T568A, T568B e Conectores"
        subtitle="Duas sequências de cores que diferem em um detalhe — e o detalhe importa"
        colorClass="text-accent"
        badge="Normas e mídias"
      />

      <TheoryBlock title="Dois padrões, uma regra">
        <p>
          Para conectar o cabo ao conector RJ45 existem dois padrões principais de ordem das cores, definidos pela
          TIA-568. O <strong>T568B é o mais utilizado comercialmente hoje</strong>.
        </p>
        <p>
          A regra prática é simples: <strong>use o mesmo padrão nas duas pontas</strong> para obter um cabo
          direto. Padrões diferentes em cada ponta produzem um crossover.
        </p>
      </TheoryBlock>

      <Subsection title="As duas sequências" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="T568A"
          rightLabel="T568B (mais usado)"
          criterionLabel="Pino"
          rows={[
            { criterion: '1', left: 'Verde/Branco', right: 'Laranja/Branco' },
            { criterion: '2', left: 'Verde', right: 'Laranja' },
            { criterion: '3', left: 'Laranja/Branco', right: 'Verde/Branco' },
            { criterion: '4', left: 'Azul', right: 'Azul' },
            { criterion: '5', left: 'Azul/Branco', right: 'Azul/Branco' },
            { criterion: '6', left: 'Laranja', right: 'Verde' },
            { criterion: '7', left: 'Marrom/Branco', right: 'Marrom/Branco' },
            { criterion: '8', left: 'Marrom', right: 'Marrom' },
          ]}
        />
        <HighlightBox title="O truque para memorizar" accent="var(--color-accent3)">
          <p>
            Os dois padrões são <strong>idênticos, exceto pela troca dos pares VERDE e LARANJA</strong>. Azul e
            marrom ficam nas mesmas posições (4, 5, 7, 8) nos dois. Quem decora um padrão sabe o outro
            invertendo verde e laranja.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Cabo direto × crossover" accentClass="text-accent4">
        <pre className="overflow-x-auto rounded-xl border border-border bg-bg-secondary px-5 py-4 text-xs md:text-sm leading-relaxed text-text-muted">
{`CABO DIRETO (patch cord comum)
  Ponta A: T568B  ──────────────  Ponta B: T568B
  (ou T568A nas duas pontas — o que importa é serem IGUAIS)

CABO CROSSOVER (raro hoje)
  Ponta A: T568A  ──────────────  Ponta B: T568B
  Usado para ligar dois equipamentos do mesmo tipo
  (switch-switch, PC-PC) antes do Auto-MDIX`}
        </pre>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O crossover ficou raro porque as placas de rede modernas detectam e ajustam a transmissão
          automaticamente. Ainda assim, entender por que ele existia é entender que os pares de transmissão e
          recepção precisam se encontrar cruzados em algum ponto do caminho.
        </p>
      </Subsection>

      <Subsection title="Conectores e acessórios vistos em aula" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'RJ45 vazado blindado',
              description:
                'Conector para Cat6a, Cat7 e Cat8. A versão blindada é o que permite conectar a malha do cabo ao aterramento do patch panel.',
            },
            {
              title: 'Capa RJ45 snap',
              description: 'Protege a trava do conector e organiza a saída do cabo, reduzindo o risco de quebra.',
            },
            {
              title: 'Anilhas de marcação',
              description:
                'Identificam cada cabo no rack — a materialização prática do que a ANSI/TIA-606 exige em norma.',
            },
            {
              title: 'Conectores TERA e GG45',
              description:
                'Conectores específicos do Cat7, embora na prática ele seja muitas vezes terminado em RJ45 comum.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Um detalhe que cai nas 50 questões" accent="var(--color-accent5)">
        <p>
          A atividade do IFAL pergunta por que{' '}
          <strong>não se deve destrançar o par de fios mais do que 13 mm</strong> ao fazer a terminação no
          keystone. A razão conecta com a seção anterior: o trançado é o que cancela o crosstalk entre os pares.
          Destrançar demais expõe condutores paralelos e o cabo passa a falhar nos testes de NEXT — mesmo com
          todas as cores na ordem certa.
        </p>
      </HighlightBox>
    </section>
  );
}
