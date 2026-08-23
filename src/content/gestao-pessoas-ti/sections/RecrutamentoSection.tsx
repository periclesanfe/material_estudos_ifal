import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ComparisonTable,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function RecrutamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Recrutamento de Pessoas"
        subtitle="O processo que ATRAI — e por que ele é descrito como um sistema de informação"
        colorClass="text-accent"
        badge="1ª Prova · Trabalhos"
      />

      <TheoryBlock title="O que é recrutar">
        <p>
          Recrutamento é o <strong>conjunto de técnicas e procedimentos que visa a ATRAIR candidatos
          potencialmente qualificados</strong> e capazes de ocupar cargos na organização. O material acrescenta
          uma caracterização que vale reter: é <strong>basicamente um sistema de informação</strong>, pelo qual a
          organização divulga e oferece ao mercado de recursos humanos as oportunidades que pretende preencher.
        </p>
        <p>
          Também definido como o conjunto de políticas e ações destinadas a atrair e agregar talentos, dotando a
          organização das competências necessárias ao seu sucesso.
        </p>
        <p>
          Fixe o verbo: recrutamento <strong>atrai</strong>. Escolher entre os atraídos é o processo seguinte.
        </p>
      </TheoryBlock>

      <Subsection title="O processo" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Pesquisa INTERNA — o que a organização precisa: pessoas necessárias para a tarefa organizacional',
            'Pesquisa EXTERNA — o que o mercado de RH pode oferecer: fontes de recrutamento a localizar',
            'Escolha da técnica de recrutamento a aplicar',
            'Candidatos recrutados → encaminhamento à seleção',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Note que o processo começa com <strong>duas pesquisas</strong>, e não com o anúncio. Recrutar sem saber
          exatamente o que se precisa (pesquisa interna) e sem saber onde estão as pessoas com esse perfil
          (pesquisa externa) produz volume de currículos, não candidatos adequados.
        </p>
      </Subsection>

      <Subsection title="Interno, externo e misto" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Recrutamento INTERNO"
          rightLabel="Recrutamento EXTERNO"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Quem são os candidatos',
              left: 'Os próprios colaboradores atuais — são os candidatos preferidos',
              right: 'Candidatos de fora da organização — são os candidatos preferidos',
            },
            {
              criterion: 'Como se preenche a vaga',
              left: 'Por PROMOÇÕES ou TRANSFERÊNCIAS para as novas oportunidades',
              right: 'Por ADMISSÃO: os candidatos são recrutados externamente e selecionados',
            },
            {
              criterion: 'O que a organização oferece',
              left: 'Uma CARREIRA de oportunidades ao colaborador',
              right: 'Oportunidades aos candidatos do mercado',
            },
          ]}
        />
        <HighlightBox title="A escolha tem consequências" accent="var(--color-accent4)">
          <p>
            O recrutamento interno motiva quem já está na casa — a vaga vira sinal de que há carreira possível —,
            aproveita conhecimento acumulado sobre a organização e custa menos. Em troca, não traz repertório
            novo e apenas <em>desloca</em> a vaga: promover alguém abre o cargo que essa pessoa ocupava.
          </p>
          <p>
            O externo traz experiência e práticas de fora, mas exige tempo de adaptação, custa mais e pode
            desmotivar quem esperava a promoção. Daí existir também o <strong>misto</strong>, que combina os
            dois — normalmente abrindo primeiro internamente e recorrendo ao mercado se não houver candidato
            adequado.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O caso do candidato digital" accentClass="text-accent4">
        <ExampleBox title="Recrutamento pela internet — três casos discutidos em aula">
          <p>
            O caso apresentado à turma reúne exemplos reais de empresas que migraram o recebimento de currículos
            para formulários on-line:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Um <strong>grupo hoteleiro</strong> que, num programa de trainees, fez a primeira triagem de{' '}
              <strong>3 mil candidatos em 45 minutos</strong>, com custos operacionais reduzidos em{' '}
              <strong>seis vezes</strong>.
            </li>
            <li>
              Uma <strong>agência de propaganda</strong> que substituiu o tradicional "Dia do Estagiário" —
              que trazia centenas de estudantes à porta da empresa — por formulário on-line seguido de uma prova
              de conhecimentos na tela. O efeito colateral positivo: passou a alcançar candidatos de outros
              estados, que não viriam presencialmente.
            </li>
            <li>
              Uma <strong>empresa de tecnologia</strong> que implantou seleção pela internet em vários países,
              substituindo o envio de currículos por e-mail e facilitando a triagem no banco de dados.
            </li>
          </ul>
        </ExampleBox>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Ganhos para a empresa',
              description:
                'Agilidade, redução de custos e — o mais subestimado — PADRONIZAÇÃO: como todos preenchem o mesmo formulário, as informações chegam no mesmo formato, e comparar candidatos deixa de exigir leitura de currículos com estruturas diferentes.',
              accent: 'accent',
            },
            {
              title: 'Ganhos para o candidato',
              description:
                'Facilidade de acesso, possibilidade de concorrer a distância, garantia de que o currículo não se extravia — e, nos sites que publicam as vagas e as qualificações exigidas, saber de antemão quais são suas chances, em vez de enviar currículo no escuro.',
              accent: 'accent2',
            },
          ]}
        />
        <HighlightBox title="A pergunta mais interessante do caso">
          <p>
            Entre as questões propostas — como montar um formulário presencial, como montar um formulário para a
            internet e qual a opinião sobre recrutamento por e-mail —, a que mais rende é a última:{' '}
            <strong>como CONCILIAR o recrutamento por técnicas convencionais e via internet?</strong>
          </p>
          <p>
            O verbo já indica a resposta esperada. Os canais alcançam públicos diferentes: depender só do digital
            exclui quem tem menos acesso ou familiaridade; depender só do presencial exclui candidatos de outras
            regiões — exatamente o ganho que a agência de propaganda relatou. Como o objetivo do recrutamento é
            ATRAIR, fechar um canal significa reduzir o conjunto de atraídos, o que contraria o próprio processo.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
