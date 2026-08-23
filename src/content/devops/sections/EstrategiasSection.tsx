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

export default function EstrategiasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="BlueGreen e Canary"
        subtitle="Separar “implantar” de “liberar” — e transformar o deploy em decisão, não em salto no escuro"
        colorClass="text-accent"
        badge="Etapa 03"
      />

      <TheoryBlock title="Implantar não é liberar">
        <p>
          Lá no ciclo DevOps, <strong>RELEASE</strong> e <strong>DEPLOY</strong> apareciam como fases distintas. É
          aqui que essa separação cobra seu sentido: colocar a nova versão em execução e{' '}
          <strong>expô-la aos usuários</strong> podem ser dois momentos diferentes.
        </p>
        <p>
          As duas estratégias desta seção exploram essa folga de formas opostas: a BlueGreen mantém a nova versão
          pronta e invisível até um chaveamento único; a Canary a expõe a poucos usuários e vai ampliando. As duas
          existem para o mesmo fim — <strong>reduzir o risco do momento mais perigoso do ciclo</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="BlueGreen" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'O ambiente "azul" está em produção, recebendo todo o tráfego',
            'A nova versão sobe no ambiente "verde", completo e isolado',
            'Verifica-se o verde — ele está no ar, mas ainda sem usuários',
            'O tráfego é chaveado de uma vez: azul → verde',
            'O azul permanece de pé; se algo der errado, aponta-se de volta',
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'A favor',
              description:
                'O rollback é praticamente instantâneo — o ambiente antigo continua intacto, e voltar é redirecionar o tráfego. Só existe uma versão atendendo por vez, o que evita conviver com dois comportamentos ao mesmo tempo.',
              accent: 'accent',
            },
            {
              title: 'O custo',
              description:
                'Manter o DOBRO da infraestrutura durante a transição. E, como o chaveamento é total, um defeito que passou pela verificação atinge todos os usuários de uma só vez.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Canary" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'A nova versão sobe ao lado da atual',
            'Uma fatia pequena do tráfego é desviada para ela',
            'As métricas dessa fatia são observadas: erros, latência, comportamento',
            'Se tudo está sadio, a fatia aumenta — e se repete a observação',
            'A ampliação continua até 100%; se algo degrada, reverte-se cedo',
          ]}
        />
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'A favor',
              description:
                'A falha aparece cedo e afeta poucos usuários. O risco é proporcional à exposição: com 5% do tráfego, um defeito atinge 5% das pessoas — e a decisão de continuar é tomada com dados reais de produção.',
              accent: 'accent3',
            },
            {
              title: 'O custo',
              description:
                'Exige boa OBSERVABILIDADE — sem métricas confiáveis, não há como julgar se a fatia exposta está saudável, e o Canary vira só um deploy lento. Além disso, duas versões convivem por mais tempo, o que exige compatibilidade entre elas (inclusive no banco).',
              accent: 'accent4',
            },
          ]}
        />
        <HighlightBox title="De onde vem o nome" accent="var(--color-accent4)">
          <p>
            Da prática de levar canários às minas de carvão: o pássaro, mais sensível a gases tóxicos, adoecia
            antes dos mineiros e servia de alerta. A fatia pequena de tráfego cumpre o mesmo papel — sente o
            problema primeiro, enquanto ainda há tempo de recuar.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Comparando as duas" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="BlueGreen"
          rightLabel="Canary"
          criterionLabel="Critério"
          rows={[
            {
              criterion: 'Transição de tráfego',
              left: 'De uma vez, 0% → 100%',
              right: 'Gradual: 5%, 20%, 50%… conforme as métricas',
            },
            {
              criterion: 'Infraestrutura',
              left: 'Dois ambientes completos durante a troca',
              right: 'Uma versão extra parcial, proporcional à fatia',
            },
            {
              criterion: 'Alcance de uma falha',
              left: 'Todos os usuários, de imediato',
              right: 'Apenas a fatia já exposta',
            },
            {
              criterion: 'Velocidade do rollback',
              left: 'Imediata — aponta-se de volta para o ambiente antigo',
              right: 'Rápida, reduzindo a fatia a zero',
            },
            {
              criterion: 'Exige observabilidade?',
              left: 'Desejável, para verificar antes de chavear',
              right: 'Indispensável — é o que decide cada ampliação',
            },
            {
              criterion: 'Convivência de versões',
              left: 'Breve, só durante a verificação',
              right: 'Prolongada — as duas atendem em paralelo',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que a Etapa 03 exige" accentClass="text-accent5">
        <ExampleBox title="Os requisitos, e a lógica por trás deles">
          <p>A terceira etapa pede a instalação do Argo Rollouts no cluster e, então:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>BlueGreen na instância de dev</strong> e <strong>Canary na de produção</strong>.
            </li>
            <li>
              No BlueGreen, manter a <strong>auto-promoção desabilitada</strong>, promovendo manualmente — e o
              professor deixa a pesquisa de "como se faz" a cargo da equipe.
            </li>
            <li>
              No Canary, <strong>demonstrar durante a apresentação</strong> como se ajusta o tráfego entre as
              versões.
            </li>
          </ul>
          <p className="mt-3">
            A distribuição não é arbitrária. Em <strong>dev</strong>, onde não há usuários reais a proteger, o
            BlueGreen com promoção manual serve para <em>ver o mecanismo funcionando</em>: a nova versão fica de
            pé, alguém verifica, alguém decide, o tráfego vira. Em <strong>produção</strong>, onde o risco é real,
            o Canary limita o estrago de um defeito à fatia já exposta.
          </p>
          <p>
            E desabilitar a auto-promoção é o detalhe que carrega a lição inteira:{' '}
            <strong>transforma a promoção em decisão consciente</strong>. Com auto-promoção, o chaveamento vira
            automatismo e não sobra janela para verificar nada — que é justamente o contrário do que a etapa
            quer ensinar.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Fechando o ciclo" accentClass="text-accent">
        <HighlightBox title="Onde as três etapas se encontram">
          <p>
            Vale olhar o arco inteiro. A <strong>Etapa 01</strong> torna a aplicação portável e reprodutível
            (12 fatores, multi-stage, compose). A <strong>Etapa 02</strong> a torna declarada e automatizada
            (Helm, GitOps, CI/CD). A <strong>Etapa 03</strong> a torna liberável com segurança (BlueGreen e
            Canary).
          </p>
          <p>
            E repare que a última etapa só é possível por causa das anteriores: sem imagem versionada não há duas
            versões para comparar; sem estado declarado não há como o Argo alternar entre elas; sem métricas não
            há como decidir ampliar o Canary. É o mesmo laço do início da disciplina, agora percorrido de ponta a
            ponta —{' '}
            <strong>monitorar para decidir, decidir para liberar, liberar para aprender e recomeçar</strong>.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
