import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ComparisonTable,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function BlindagemSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Blindagens, EMI e Crosstalk"
        subtitle="O escudo, o ruído e o vazamento entre pares"
        colorClass="text-accent5"
        badge="Normas e mídias"
      />

      <TheoryBlock title="Os dois inimigos do sinal">
        <p>
          <strong>EMI (interferência eletromagnética)</strong> vem de fora: motores, iluminação fluorescente,
          cabos elétricos próximos. É ruído externo tentando entrar no cabo.
        </p>
        <p>
          <strong>Crosstalk (diafonia)</strong> vem de dentro: é a interferência de um sinal em um canal vizinho
          por acoplamento eletromagnético — capacitivo ou indutivo —, "vazando" o sinal de um par para o outro. O
          efeito é corromper a informação e degradar a qualidade do sinal.
        </p>
        <p>
          Essa distinção comanda a escolha da blindagem: proteger contra o mundo externo e proteger os pares uns
          dos outros são problemas diferentes, resolvidos por construções diferentes.
        </p>
      </TheoryBlock>

      <Subsection title="F/UTP × S/FTP" accentClass="text-accent">
        <ComparisonTable
          leftLabel="FTP (F/UTP)"
          rightLabel="STP (U/FTP ou S/FTP)"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Construção da blindagem',
              left: 'UMA única folha de alumínio ("F" de Foil) envolvendo os quatro pares trançados não blindados',
              right: 'Blindagem de malha ou folha ao redor de CADA par individualmente, às vezes com blindagem geral adicional',
            },
            {
              criterion: 'Contra o que protege melhor',
              left: 'Interferência EXTERNA tentando entrar ou sair do cabo',
              right: 'Interferência entre os PRÓPRIOS PARES (crosstalk), além do ruído externo',
            },
            {
              criterion: 'Nomenclatura',
              left: 'Termo específico e bem definido',
              right: '"STP" é usado de forma mais genérica; as siglas precisas são U/FTP e S/FTP',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os termos são frequentemente usados de forma intercambiável no mercado, mas a diferença técnica é real:
          só a blindagem por par combate eficazmente o crosstalk interno.
        </p>
      </Subsection>

      <Subsection title="SFTP — quando o ambiente é hostil de verdade" accentClass="text-accent3">
        <ExampleBox title="As duas blindagens somadas">
          <p>
            O <strong>SFTP</strong> (Screened Foiled Twisted Pair), também chamado de SSTP, é "praticamente o FTP
            e o STP juntos": blindagem envolvendo <strong>cada par trançado</strong> e ainda uma{' '}
            <strong>segunda blindagem externa</strong> cobrindo todos os pares.
          </p>
          <p>
            É a construção indicada para instalações em ambientes onde exista grande escala de interferência — o
            cenário da planta industrial, com motores de grande porte gerando EMI constante.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Blindagem sem aterramento não é blindagem" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'A exigência',
              description:
                'Cabos blindados exigem aterramento adequado nas extremidades — em ambas ou em uma, dependendo da norma e do equipamento — para que a blindagem funcione corretamente.',
              accent: 'accent5',
            },
            {
              title: 'A prática',
              description:
                'Envolve instalar conectores RJ45 blindados e conectar ao aterramento do patch panel ou do switch. O material trata isso como habilidade prática crucial.',
              accent: 'accent3',
            },
            {
              title: 'Por que importa',
              description:
                'A blindagem precisa de caminho para escoar o ruído captado. Sem aterramento, ela pode inclusive se comportar como antena — gastar com cabo blindado e não aterrar é desperdício.',
              accent: 'accent',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Onde a blindagem faz diferença mensurável" accent="var(--color-accent2)">
        <p>
          Em redes de <strong>10 Gbps (10GBASE-T)</strong>, a blindagem é o que garante a integridade do sinal em
          distâncias maiores e suprime o crosstalk nas frequências mais altas. Quanto mais MHz, mais crítica a
          blindagem — o que explica por que Cat7 e Cat8 são necessariamente blindados.
        </p>
      </HighlightBox>
    </section>
  );
}
