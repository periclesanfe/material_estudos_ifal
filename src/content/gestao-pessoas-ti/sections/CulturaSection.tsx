import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function CulturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cultura Organizacional"
        subtitle="A parte invisível que decide o que realmente acontece — e por que estabilidade também é necessária"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <TheoryBlock title="Três definições complementares">
        <p>
          <strong>Cultura organizacional é a maneira costumeira ou tradicional de pensar e fazer as
          coisas</strong>, compartilhada por todos os membros da organização, e que os novos membros devem
          aprender e aceitar para serem aceitos.
        </p>
        <p>
          É também um <strong>sistema de significados compartilhados</strong> pelos membros, que distingue uma
          organização das demais.
        </p>
        <p>
          E sua essência provém da maneira como a organização faz negócios, como trata clientes e empregados, do
          grau de autonomia que existe nos departamentos e do grau de lealdade expresso pelos empregados. É uma
          complexa mistura de <em>pressuposições, crenças, valores, comportamentos, histórias, mitos e
          metáforas</em> que, tomadas juntas, representam a maneira particular de uma organização funcionar.
        </p>
      </TheoryBlock>

      <Subsection title="Quatro culturas, quatro empresas" accentClass="text-accent2">
        <ExampleBox title="Os exemplos do material">
          <p>
            "Antigamente, as organizações eram conhecidas por seus prédios e edifícios. Atualmente, o são pela
            cultura corporativa." O material ilustra com quatro casos, cada um com uma prioridade que virou
            identidade:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>DuPont</strong> — uma cultura voltada para a <strong>segurança</strong>;</li>
            <li><strong>Dell</strong> — uma cultura focalizada nos <strong>serviços</strong>;</li>
            <li><strong>3M</strong> — uma cultura de <strong>inovação</strong>;</li>
            <li><strong>Toyota</strong> — uma cultura de <strong>qualidade</strong>.</li>
          </ul>
          <p className="mt-3">
            Dentro de cada uma dessas organizações, diz o material, as pessoas aprenderam uma maneira peculiar de
            lidar com uma variedade de assuntos relacionados ao cotidiano do trabalho. Cultura não é o que está
            escrito no quadro da recepção — é o que se aprende observando como as decisões são de fato tomadas.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A parte visível e a parte oculta" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Aspectos FORMAIS e ABERTOS"
          rightLabel="Aspectos INFORMAIS e OCULTOS"
          criterionLabel="Característica"
          rows={[
            {
              criterion: 'Natureza',
              left: 'Visíveis e publicamente observáveis, orientados a aspectos operacionais e de tarefas',
              right: 'Invisíveis e encobertos, afetivos e emocionais, orientados a aspectos sociais e psicológicos',
            },
            {
              criterion: 'O que inclui',
              left: 'Estrutura organizacional · títulos e descrições de cargos · objetivos e estratégias · tecnologia e práticas operacionais · políticas de pessoal · métodos e procedimentos · medidas de produtividade',
              right: 'Padrões de influência e de poder · percepções e atitudes das pessoas · sentimentos e normas de grupos · valores e expectativas · padrões de interação informal · relações afetivas',
            },
          ]}
        />
        <HighlightBox title="Por que a parte oculta decide mais" accent="var(--color-accent4)">
          <p>
            A parte formal é a que se documenta e se apresenta; a informal é a que se aprende convivendo. Quando
            as duas divergem — o organograma diz uma coisa e os padrões reais de influência dizem outra —{' '}
            <strong>é a informal que prevalece</strong> no comportamento cotidiano.
          </p>
          <p>
            É por isso que mudar cultura por decreto raramente funciona: altera-se a camada visível (novos
            valores no site, nova política de pessoal) enquanto os padrões de poder, os sentimentos e as normas
            de grupo permanecem intactos.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Culturas adaptativas e não adaptativas" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Cultura ADAPTATIVA"
          rightLabel="Cultura NÃO ADAPTATIVA"
          criterionLabel="Dimensão"
          rows={[
            {
              criterion: 'Normas de comportamento',
              left: 'Os administradores prestam atenção a todos os aspectos, especialmente aos CLIENTES, e iniciam a mudança quando preciso — mesmo que isso signifique assumir riscos',
              right: 'Os administradores tendem a comportar-se política e burocraticamente, de modo ISOLADO, e não mudam suas estratégias prontamente para se ajustar ao ambiente',
            },
            {
              criterion: 'Valores compartilhados',
              left: 'Cuidam profundamente de clientes, investidores e empregados, e atribuem forte valor às pessoas e aos processos capazes de criar mudança útil',
              right: 'Cuidam principalmente de si mesmos, de seu grupo imediato ou de seu produto, e atribuem mais valor à ORDEM e à REDUÇÃO DE RISCOS do que a liderar iniciativas',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Mas mudar sempre não é a resposta" accentClass="text-accent5">
        <HighlightBox title="O equilíbrio entre estabilidade e mudança">
          <p>
            Seria fácil ler a comparação anterior como "adaptativa é boa, não adaptativa é ruim, logo mude
            sempre". O material fecha o assunto desmontando essa conclusão:
          </p>
          <p>
            A sobrevivência e o crescimento de uma organização dependem de que{' '}
            <strong>estabilidade e mudança estejam razoavelmente equilibradas</strong>. Uma organização
            altamente mutável e pouco estável tem <em>tanta</em> probabilidade de desaparecer quanto uma
            organização rígida e imutável.
          </p>
          <p>
            E a razão é concreta:{' '}
            <strong>mudança após mudança, sem estabilidade alguma, resulta em enorme confusão, desorientação e
            tensões</strong> entre os membros da organização. Toda organização precisa de alguma dose de
            estabilidade como complemento à mudança — inclusive porque as pessoas precisam de previsibilidade
            suficiente para conseguir trabalhar.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
