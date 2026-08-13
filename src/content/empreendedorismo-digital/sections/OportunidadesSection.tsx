import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { opportunityCriteria, segmentationTypes, stakeholderRoles, benchmarkingTypes, fiveWhysCauses } from './blocks';

export default function OportunidadesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Identificação e Validação de Oportunidades"
        subtitle="O mercado não remunera esforço: remunera a solução de problemas relevantes para pessoas dispostas e capazes de adotar ou pagar"
        colorClass="text-accent3"
      />

      <HighlightBox title="Ideia não é oportunidade">
        <p>
          Uma ideia se torna oportunidade quando combina <strong>problema relevante</strong>,{' '}
          <strong>público identificável</strong>, <strong>solução possível</strong>,{' '}
          <strong>momento adequado</strong> e <strong>mecanismo econômico</strong>. Faltando qualquer um dos cinco, o
          que existe é uma boa intenção.
        </p>
        <p>
          O entusiasmo do fundador não é evidência. É preciso procurar dados que <em>confirmem ou refutem</em> as
          hipóteses — e o viés de confirmação faz exatamente o contrário: seleciona só o que agrada.
        </p>
      </HighlightBox>

      <Subsection title="As cinco condições" accentClass="text-accent">
        <ConceptGrid items={opportunityCriteria} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Problema antes da solução: os 5 Porquês" accentClass="text-accent2">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          O método dos 5 Porquês investiga causas, mas precisa ser confrontado com observação e entrevistas. Uma fila em
          UBS, por exemplo, pode ter origens muito diferentes — e digitalizar o agendamento não resolve automaticamente
          nenhuma delas:
        </p>
        <PanelList items={fiveWhysCauses} />
      </Subsection>

      <HighlightBox title="Onde a análise de causa muda o produto" accent="var(--color-accent2)">
        <p>
          Se a causa dominante for <strong>chegada simultânea</strong>, agendamento resolve. Se for{' '}
          <strong>demanda acima da capacidade</strong>, o aplicativo apenas transfere a espera de um lugar para o outro
          e a insatisfação continua. Investigar a causa antes de construir é o que separa uma solução que muda o
          indicador de uma que só muda a interface.
        </p>
      </HighlightBox>

      <Subsection title="Formas de segmentar" accentClass="text-accent4">
        <ConceptGrid items={segmentationTypes} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Quem é quem na decisão" accentClass="text-accent5">
        <PanelList items={stakeholderRoles} />
      </Subsection>

      <HighlightBox title="Ignorar os papéis produz uma proposta impossível de contratar" accent="var(--color-accent5)">
        <p>
          No FilaZero, o paciente é usuário e beneficiário; a gestão municipal ou da unidade pode ser decisora e
          pagadora; profissionais de saúde influenciam a adoção; órgãos reguladores e de controle condicionam a
          operação.
        </p>
        <p>
          Desenhar tudo pensando apenas no paciente produz uma solução atraente que <strong>ninguém pode comprar</strong>:
          o pagador tem outros critérios, o decisor responde a outra prestação de contas e a equipe da unidade
          simplesmente não usa o que aumenta o trabalho dela.
        </p>
      </HighlightBox>

      <Subsection title="Benchmarking" accentClass="text-accent">
        <PanelList items={benchmarkingTypes} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Founder-market fit e time-to-market" accent="var(--color-accent4)">
        <p>
          <strong>Founder-market fit</strong> é a adequação entre equipe e problema. Experiência de domínio facilita o
          acesso a clientes e a interpretação de sinais — mas <em>não substitui validação</em>: reduz o custo de
          aprender e melhora a qualidade das hipóteses iniciais, nada além disso.
        </p>
        <p>
          O <strong>time-to-market</strong> também pesa. Ser pioneiro pode criar vantagem, mas exige educar o mercado a
          custo próprio; um <em>fast follower</em> aprende com os erros dos pioneiros e executa melhor. Nenhuma das duas
          posições é superior em abstrato.
        </p>
      </HighlightBox>

      <HighlightBox title="A oportunidade precisa fechar a conta" accent="var(--color-accent3)">
        <p>
          Toda oportunidade precisa suportar aquisição de clientes, entrega, retenção e margem. LTV/CAC, ponto de
          equilíbrio, liquidez e necessidade de capital ajudam a avaliar viabilidade — e devem ser estimados antes de
          construir, ainda que grosseiramente.
        </p>
      </HighlightBox>
    </section>
  );
}
