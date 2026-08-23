import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function TreinamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Treinamento e Desenvolvimento"
        subtitle="Quatro etapas, cinco tipos de mudança e cinco níveis de avaliação — sendo que quase todo mundo para no primeiro"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="O treinamento como sistema" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'ENTRADA — treinandos e recursos organizacionais',
            'PROCESSO — programas de treinamento e processo de aprendizagem individual',
            'SAÍDA — conhecimento, atitudes, habilidades, eficácia organizacional',
            'RETROAÇÃO — avaliação dos resultados, que realimenta a entrada',
          ]}
        />
      </Subsection>

      <Subsection title="Cinco tipos de mudança que o treinamento provoca" accentClass="text-accent3">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Transmissão de informações → aumentar o conhecimento',
              description: 'Informações sobre a organização, seus produtos e serviços, políticas e diretrizes, regras, regulamentos e clientes.',
            },
            {
              title: 'Desenvolvimento de habilidades → melhorar destreza',
              description: 'Habilitar para a execução e operação de tarefas, manejar equipamentos, máquinas e ferramentas.',
            },
            {
              title: 'Desenvolvimento de atitudes → mudar comportamentos',
              description: 'Mudança de atitudes negativas para favoráveis, conscientização e sensibilidade com as pessoas e com os clientes internos e externos.',
            },
            {
              title: 'Desenvolvimento de conceitos → elevar o nível de abstração',
              description:
                'Desenvolver ideias e conceitos para ajudar as pessoas a pensar em termos globais e amplos. É o tipo de mudança que separa quem executa bem uma tarefa de quem entende o sistema em que ela se insere.',
            },
            {
              title: 'Construção de competências → criar competências individuais',
              description: 'Criar e desenvolver competências individuais alinhadas com os objetivos da organização.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As quatro etapas do processo" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Levantamento das necessidades',
              description:
                'Diagnóstico da situação a partir dos objetivos da organização, das competências necessárias, dos problemas de produção e de pessoal e dos resultados da avaliação de desempenho. Pular esta etapa é o erro mais comum: treina-se no que é fácil oferecer, e não no que faz falta.',
              accent: 'accent',
            },
            {
              title: '2. Desenho do programa',
              description:
                'A decisão sobre a estratégia, respondendo a sete perguntas: quem treinar, como, em que, por quem, onde, quando e para quê.',
              accent: 'accent2',
            },
            {
              title: '3. Aplicação',
              description:
                'A condução do programa, que pode ser feita pelo gerente de linha, pela assessoria de RH, por ambos ou por terceiros.',
              accent: 'accent3',
            },
            {
              title: '4. Avaliação dos resultados',
              description:
                'Monitoração do processo, medição de resultados, comparação da situação atual com a anterior e análise do custo-benefício.',
              accent: 'accent4',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O processo é <strong>cíclico</strong>: os resultados da avaliação alimentam o próximo levantamento de
          necessidades.
        </p>
      </Subsection>

      <Subsection title="Os cinco níveis de avaliação" accentClass="text-accent5">
        <TheoryBlock title="Do 'gostei' ao retorno financeiro">
          <p>Os níveis são crescentes em dificuldade de medição — e em valor da informação:</p>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>
              <strong>Reação do aprendiz</strong> — o programa provoca satisfação e melhora a atitude, predispondo
              a novas ações de aprendizagem.
            </li>
            <li>
              <strong>Aprendizagem</strong> — provoca mudanças no conhecimento, nas habilidades e nas atitudes,
              melhorando as competências pessoais.
            </li>
            <li>
              <strong>Impacto no desempenho</strong> — provoca mudança no comportamento no trabalho: há{' '}
              <em>transferência</em> da aprendizagem para a atividade.
            </li>
            <li>
              <strong>Impacto nos resultados</strong> — provoca impacto nos negócios e agrega valor à
              organização, ao cliente e ao mercado.
            </li>
            <li>
              <strong>Retorno do investimento</strong> — cria valor que compensa fartamente os custos envolvidos.
            </li>
          </ol>
        </TheoryBlock>
        <HighlightBox title="Por que quase todo treinamento é avaliado só no nível 1" accent="var(--color-accent4)">
          <p>
            Porque é o único fácil de medir: basta um formulário no fim da sessão. O problema é que{' '}
            <strong>reação não prevê aprendizado</strong>, e aprendizado não garante transferência para o
            trabalho. Um treinamento divertido pode pontuar alto no nível 1 e zero no nível 3 — e é no 3 que a
            organização começa a receber algo pelo que pagou.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Classificação das técnicas" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Quanto ao uso',
              description:
                'Orientadas para o CONTEÚDO (leitura, instrução programada, instrução assistida por computador); para o PROCESSO (dramatização, treinamento da sensitividade, desenvolvimento de grupos); ou MISTAS (estudo de casos, jogos e simulações, conferências e técnicas no próprio trabalho).',
              accent: 'accent',
            },
            {
              title: 'Quanto ao tempo',
              description:
                'ANTES do ingresso na empresa — os programas de indução ou integração; ou DEPOIS do ingresso, no local de trabalho ou fora dele.',
              accent: 'accent2',
            },
            {
              title: 'Quanto ao local',
              description:
                'NO local de trabalho (treinamento em tarefas, rodízio de cargos, enriquecimento de cargos) ou FORA dele (aulas, filmes, painéis, casos, dramatização, debates, simulações, jogos).',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
