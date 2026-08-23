import HighlightBox from '../../../components/ui/HighlightBox';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import { SectionHeader, Subsection, ColoredPanelList, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function CookiesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cookies e Sessões"
        subtitle="Como manter estado num protocolo que não tem nenhum"
        colorClass="text-accent"
        badge="Backend"
      />

      <TheoryBlock title="O problema">
        <p>
          O HTTP é um <strong>protocolo sem estado</strong> — conforme a RFC-2616, seção 5, citada no
          material —, em que <strong>cada par de solicitação e resposta é independente</strong> das
          demais interações.
        </p>
        <p>
          Sem algum mecanismo adicional, o servidor <strong>trataria cada requisição como um cliente
          novo</strong>. Não haveria login, carrinho de compras nem preferência salva: cada clique
          começaria do zero.
        </p>
      </TheoryBlock>

      <Subsection title="O cookie" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed mb-4">
          Um <strong>cookie HTTP</strong> é um pequeno pedaço de informação{' '}
          <strong>armazenada pelo servidor no navegador do usuário</strong>.
        </p>
        <FlowDiagram
          items={[
            'O servidor DEFINE o cookie ao retornar a resposta',
            'O navegador ARMAZENA o cookie',
            'O navegador REENVIA o cookie na próxima solicitação ao MESMO servidor',
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O "ao mesmo servidor" não é detalhe: o navegador não envia os cookies de um site para outro, e
          é esse isolamento por domínio que impede um site de ler as credenciais que você tem em outro.
        </p>
        <ColoredPanelList
          items={[
            { title: 'Gerenciamento de sessão', description: 'Manter o usuário identificado entre requisições.' },
            { title: 'Rastreamento de usuários', description: 'Acompanhar comportamento e navegação.' },
            { title: 'Preferências do usuário', description: 'Idioma, tema, configurações de exibição.' },
          ]}
        />
      </Subsection>

      <Subsection title="A sessão web" accentClass="text-accent3">
        <TheoryBlock title="Definição">
          <p>
            Uma <strong>sessão web</strong> é uma <strong>sequência de transações de requisição e
            resposta HTTP associadas ao mesmo usuário</strong>.
          </p>
          <p>
            Aplicações modernas precisam reter informação ou status sobre cada usuário ao longo de
            múltiplas solicitações — e a sessão é a estrutura que guarda isso.
          </p>
        </TheoryBlock>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'O identificador de sessão',
              description:
                'Um token atribuído no momento da criação da sessão, compartilhado e trocado entre usuário e aplicação durante toda a sua duração — enviado a CADA requisição HTTP. Tem a forma de um par nome=valor.',
              accent: 'accent',
            },
            {
              title: 'Por que ele é sensível',
              description:
                'É o identificador que permite reconhecer o usuário em qualquer requisição subsequente. Quem o obtém, assume a sessão — daí a importância de protegê-lo.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Mecanismos de troca do identificador" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'Cookies — o preferido',
              description:
                'Cabeçalho HTTP padrão. É o mecanismo recomendado porque permite definir propriedades avançadas do token, como data de expiração e restrições de escopo.',
            },
            {
              title: 'Parâmetros de URL (reescrita — RFC2396)',
              description: 'O identificador viaja na própria URL — o que o expõe em histórico, logs e links compartilhados.',
            },
            { title: 'Argumentos em requisições GET', description: 'Mesma exposição da reescrita de URL.' },
            {
              title: 'Campos ocultos de formulário em POST',
              description: 'O token vai no corpo, o que evita a exposição na URL, mas exige formulário em cada navegação.',
            },
            { title: 'Cabeçalhos HTTP proprietários', description: 'Cabeçalhos personalizados definidos pela aplicação.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Sessões existem antes do login" accent="var(--color-accent3)">
        <p>
          É um ponto que o material destaca e que costuma surpreender: aplicações web criam sessões{' '}
          <strong>para acompanhar usuários anônimos já a partir da primeira solicitação</strong>.
        </p>
        <p>
          O exemplo dado é a <strong>preferência de idioma</strong> — algo que precisa persistir sem que
          ninguém tenha se identificado. Carrinhos de compras de visitantes funcionam do mesmo jeito.
        </p>
        <p>
          Depois da autenticação, a sessão ganha responsabilidades adicionais: identificar o usuário em
          cada requisição, <strong>aplicar controles de acesso de segurança</strong> e liberar acesso
          autorizado aos dados privados. Ou seja, aplicações fornecem capacidades de sessão{' '}
          <strong>tanto pré quanto pós autenticação</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
