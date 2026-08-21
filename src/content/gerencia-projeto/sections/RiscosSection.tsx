import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function RiscosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Gerenciamento de Riscos"
        subtitle="Não elimina a incerteza — garante que ela seja considerada"
        colorClass="text-accent"
        badge="EAP e Escopo"
      />

      <TheoryBlock title="A definição, e o que ela inclui de surpreendente">
        <p className="text-lg text-text">
          Risco é <strong className="text-accent">um evento ou condição incerta</strong> que, se ocorrer,
          provocará um efeito <strong className="text-accent2">positivo ou negativo</strong> nos objetivos do
          projeto.
        </p>
        <p>
          A definição do PMBOK inclui deliberadamente o efeito <strong>positivo</strong>. Risco não é sinônimo de
          ameaça: há riscos que são <em>oportunidades</em>. Uma tecnologia nova pode acelerar o projeto tanto
          quanto atrasá-lo; um fornecedor pode entregar antes do prazo. Gerenciar riscos positivos significa
          aumentar a chance de que ocorram, e estar pronto para aproveitá-los.
        </p>
        <p>
          A palavra-chave é <strong>incerta</strong>: o que já se sabe que vai acontecer não é risco, é
          restrição. E o gerenciamento de riscos <strong>não elimina a incerteza</strong> — garante que ela seja
          considerada e que os efeitos negativos sejam reconhecidos e tratados.
        </p>
      </TheoryBlock>

      <Subsection title="Por que gerenciar" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Melhora a visibilidade',
              description:
                'Alerta a gerência sobre fatores que podem interferir no sucesso — antes que virem crise, quando ainda há alternativas.',
              accent: 'accent',
            },
            {
              title: 'Reduz a incerteza',
              description:
                'Não por eliminá-la, mas por desenvolver estratégias alternativas para os desafios previsíveis do projeto.',
              accent: 'accent2',
            },
            {
              title: 'Facilita a transferência de conhecimento',
              description:
                'Organizar e documentar experiências faz o aprendizado sobreviver à equipe que o adquiriu.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O processo em quatro passos" accentClass="text-accent3">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Identificar',
              description:
                'Usar o conhecimento sobre os recursos do projeto para determinar em que situações eles poderiam falhar em satisfazer os requisitos — considerando riscos INTERNOS e EXTERNOS. Fontes típicas: clientes, tecnologias, recursos, estimativas e fatores organizacionais.',
            },
            {
              title: '2. Quantificar',
              description:
                'Atribuir notas à GRAVIDADE (o dano, se ocorrer) e à PROBABILIDADE de ocorrência. A combinação das duas define o grau de importância do risco e orienta quanto investir nele.',
            },
            {
              title: '3. Controlar',
              description:
                'Usar estratégias para reduzir o impacto. Pode envolver mudar sensivelmente requisitos e planos — e o material recomenda documentar formalmente e obter aprovações, para que o controle seja recorrente e não abra caminho para scope creep.',
            },
            {
              title: '4. Iterar',
              description:
                'Repetir regularmente ao longo do projeto: revisar o progresso geral, reavaliar os riscos existentes, identificar novos e desenvolver controles. Riscos são identificados nas fases iniciais, justamente quando menos se conhece o projeto — por isso a revisão é obrigatória.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Duas formas de identificar" accentClass="text-accent4">
        <ComparisonTable
          leftLabel="Top-down"
          rightLabel="Bottom-up"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Ponto de partida',
              left: 'Os REQUISITOS do projeto — o que precisa ser cumprido',
              right: 'As CAUSAS possíveis de risco — o que pode dar errado',
            },
            {
              criterion: 'Pergunta que se faz',
              left: 'Que problemas podem impedir que este requisito seja satisfeito?',
              right: 'Como o projeto ficaria exposto se esta causa se materializasse?',
            },
            {
              criterion: 'Exemplo do material',
              left: 'Requisito: dados do sistema antigo. Falha possível: estruturas de dados inconsistentes',
              right: 'Causa: time técnico pouco experiente. Exposição: pode não mapear os campos de dados corretamente',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          As duas abordagens encontram riscos diferentes, e por isso se complementam. Partir dos requisitos
          revela o que ameaça as entregas; partir das causas revela fragilidades do próprio time e do ambiente —
          que raramente aparecem quando se olha só para o produto.
        </p>
      </Subsection>

      <Subsection title="Quantificar para decidir onde investir" accentClass="text-accent5">
        <HighlightBox title="Severidade × probabilidade">
          <p>
            Depois de identificar, atribui-se nota à <strong>gravidade</strong> (o dano potencial se o risco
            ocorrer) e à <strong>probabilidade</strong> de ocorrência. A combinação define a importância.
          </p>
          <p>
            E o material dá uma orientação prática que costuma ser ignorada:{' '}
            <strong>um risco severo com baixa probabilidade deve ser MONITORADO</strong> — normalmente não vale a
            pena investir em estratégias extensivas e caras para controlá-lo.
          </p>
          <p className="text-sm">
            A razão é simples: o orçamento de mitigação é finito. Gastá-lo com o que é grave mas improvável
            significa não ter recurso para o que é provável — e a soma de vários riscos moderados costuma
            derrubar mais projetos do que a catástrofe que nunca veio.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Estratégias de resposta" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Estratégias alternativas',
              description:
                'Mudar a abordagem inicialmente planejada para o projeto, contornando a fonte do risco em vez de enfrentá-la.',
              accent: 'accent',
            },
            {
              title: 'Planejamento de contingência',
              description:
                'Definir de antemão os passos a executar SE o risco ocorrer. Não evita o evento; reduz o tempo de reação e o improviso no pior momento.',
              accent: 'accent2',
            },
            {
              title: 'Recorrer a fornecedores',
              description:
                'Obter bens e serviços fora da organização executora — transferindo para terceiros parte do risco que a equipe não tem condições de assumir.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Em todos os casos, o material lembra: <strong>os riscos vão existir, com ou sem planejamento</strong>.
          A escolha não é entre ter riscos e não ter — é entre encontrá-los agora, no papel, ou depois, na
          execução.
        </p>
      </Subsection>
    </section>
  );
}
