import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function EncerramentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Encerramento e Lições Aprendidas"
        subtitle="A fase que quase todo projeto atropela — e a que decide se a organização aprende alguma coisa"
        colorClass="text-accent"
      />

      <TheoryBlock title="Encerrar é um processo, não um evento">
        <p>
          No encerramento, formaliza-se a aceitação do produto, serviço ou resultado e conduz-se o projeto a um
          final ordenado. O material faz uma observação certeira:{' '}
          <strong>o projeto se encaminha para o fim desde o primeiro dia de vida</strong> — não se deve pensar no
          encerramento apenas nas fases finais.
        </p>
      </TheoryBlock>

      <Subsection title="Os quatro processos" accentClass="text-accent2">
        <FlowDiagram
          items={[
            '1. Avaliação do produto entregue',
            '2. Formalização do encerramento de contratos',
            '3. Feedback à equipe quanto à aceitação do produto',
            '4. Avaliação do projeto e levantamento de Lições Aprendidas',
          ]}
        />
      </Subsection>

      <Subsection title="Aceitação não é satisfação" accentClass="text-accent3">
        <HighlightBox title="A distinção mais fina do material">
          <p>
            A avaliação dos resultados se fundamenta no processo de negociação e em documentos que comprovem e
            atestem a qualidade do trabalho realizado. E então vem a frase decisiva:{' '}
            <strong>o encerramento não depende da satisfação ou insatisfação do cliente, mas sim da ACEITAÇÃO
            dos resultados</strong>. A aceitação formal significa que o trabalho está encerrado.
          </p>
          <p>
            A diferença é prática, não jurídica. Satisfação é um estado subjetivo, que pode variar com
            expectativas nunca declaradas. Aceitação é a verificação objetiva de que o entregue corresponde ao
            acordado — e é por isso que os <em>critérios de aceitação</em> precisam estar na declaração de
            escopo, escritos antes de começar.
          </p>
          <p className="text-sm">
            Um cliente pode estar insatisfeito e ainda assim aceitar formalmente, se recebeu o que contratou. O
            inverso também ocorre: cliente satisfeito, mas sem aceitação formal — e o projeto que nunca encerra,
            consumindo equipe indefinidamente.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Encerrar contratos e dar feedback" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Encerramento de contratos',
              description:
                'A formalização do fim de um serviço ou produto junto a um fornecedor. O material chama o documento que atesta o encerramento das obrigações comerciais de VITAL para a sustentabilidade do projeto — pendências contratuais sobrevivem ao projeto e voltam como passivo.',
              accent: 'accent',
            },
            {
              title: 'Feedback à equipe',
              description:
                'Fundamental para o moral. A equipe espera reconhecimento da organização, e valorizar o trabalho é ação ESTRATÉGICA para conseguir apoio e empenho em projetos futuros — quem trabalhou num projeto que terminou sem reconhecimento se engaja menos no próximo.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Lições aprendidas" accentClass="text-accent5">
        <ExampleBox title="Por que registrar durante, e não no fim">
          <p>
            Lições aprendidas são informações obtidas no decorrer do projeto que podem beneficiar projetos
            futuros ou em andamento. A ideia é gerar um <strong>banco de conhecimento</strong> que sirva de
            melhores práticas para quem usar as mesmas pessoas, tecnologias ou processos.
          </p>
          <p>
            E aqui vai a orientação mais prática do material: <strong>devem ser registradas durante TODO o ciclo
            de vida</strong>, não na última hora — porque na última hora você não vai se lembrar de tudo. A
            lição mais valiosa costuma ser a do problema que se resolveu no mês três e que, no mês doze, já
            parece óbvio.
          </p>
          <p>
            Ao final, vale reunir equipe, líder e escritório de projetos numa reunião dedicada a registrar os
            conhecimentos adquiridos. As lições podem compreender fatores positivos e negativos, tanto técnicos
            quanto de gerenciamento.
          </p>
        </ExampleBox>
        <HighlightBox title="O ciclo que se fecha" accent="var(--color-accent3)">
          <p>
            Repare que o registro das lições é o passo 5 do processo de controle e o passo 4 do encerramento — ele
            aparece nos dois. É o mecanismo pelo qual a organização deixa de repetir os mesmos erros: sem ele,
            cada projeto novo recomeça a curva de aprendizado do zero, e o "checklist de um projeto arruinado"
            volta a se cumprir item por item.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Quando o projeto acaba sem terminar" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Nem todo encerramento vem da conclusão natural. O material lista outras causas: o trabalho foi{' '}
          <strong>absorvido por outro projeto maior</strong>, houve <strong>falta de recursos</strong> ou o
          projeto foi <strong>cancelado</strong> — por ineficiência, inviabilidade ou outras razões.
        </p>
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Mesmo nesses casos, o gerente deve providenciar o encerramento formal. Um projeto abandonado sem
          encerramento deixa contratos abertos, recursos alocados no papel, expectativas não resolvidas e — o
          mais custoso — nenhuma lição registrada sobre por que não deu certo.
        </p>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          E o material fecha com uma recomendação que não é decorativa: realizar uma{' '}
          <strong>comemoração com a equipe</strong> e demais interessados para festejar a finalização. Marcar o
          fim é o que permite às pessoas encerrarem também — e começarem o próximo projeto sem arrastar o
          anterior.
        </p>
      </Subsection>
    </section>
  );
}
