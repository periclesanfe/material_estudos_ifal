import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function EscopoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Escopo, Requisitos e SMART"
        subtitle="A base de tudo — “a qualidade do planejamento é delimitada pela definição do escopo”"
        colorClass="text-accent"
        badge="EAP e Escopo"
      />

      <TheoryBlock title="O que significa definir o escopo">
        <p>Definir o escopo de um projeto significa identificar quatro coisas:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>o <strong>problema ou oportunidade</strong> que será endereçado;</li>
          <li>os <strong>objetivos e metas</strong> do projeto;</li>
          <li><strong>como o sucesso será medido</strong>;</li>
          <li>os <strong>riscos, obstáculos e considerações</strong> que podem afetar o resultado.</li>
        </ul>
        <p>
          O terceiro item é o mais negligenciado e o mais decisivo. Sem definir a medida do sucesso antes de
          começar, a avaliação final vira disputa de interpretação — cada parte lembra de um combinado
          diferente.
        </p>
        <p>
          O material adverte que <strong>à fase de escopo costuma ser dada menos atenção do que às outras</strong>,
          e completa com a frase que resume a seção: a qualidade do planejamento é delimitada pela qualidade da
          definição do escopo. Não se planeja bem o que se definiu mal.
        </p>
      </TheoryBlock>

      <Subsection title="Escopo do produto × escopo do projeto" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Escopo do PRODUTO',
              description:
                'As características e funções do produto, serviço ou resultado a ser entregue. Responde: o que a coisa entregue faz? É verificado por TESTE — o produto atende às especificações?',
              accent: 'accent',
            },
            {
              title: 'Escopo do PROJETO',
              description:
                'O TRABALHO que precisa ser realizado para entregar aquele produto. Responde: o que faremos para produzir isso? É verificado contra o PLANO — o trabalho previsto foi realizado?',
              accent: 'accent2',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A distinção tem consequência prática: treinar usuários, migrar dados e escrever documentação são
          escopo do <em>projeto</em> e não aparecem no produto — mas consomem prazo e orçamento, e precisam
          estar previstos. É um dos temas que o professor destacou em material próprio.
        </p>
      </Subsection>

      <Subsection title="Metas SMART, na formulação do modelo" accentClass="text-accent3">
        <HighlightBox title="Atenção à letra A">
          <p>
            O modelo de Declaração de Escopo da disciplina define SMART assim:{' '}
            <strong>S</strong>pecific (específico), <strong>M</strong>easurable (indicador e meta),{' '}
            <strong>A</strong>ssignable (quem), <strong>R</strong>ealistic (realístico) e{' '}
            <strong>T</strong>ime-related (quando).
          </p>
          <p>
            Vale registrar que esta é a formulação <strong>original de George Doran</strong>, de 1981, em que o
            "A" é <em>Assignable</em> — especifique quem vai fazer. A versão mais difundida hoje troca o A por{' '}
            <em>Achievable</em> (alcançável) e o R por <em>Relevant</em> (relevante). Conhecer as duas evita
            errar quando a pergunta cobra uma delas — e a versão original tem um mérito próprio: obriga a
            nomear um responsável, que é o item mais fácil de deixar implícito.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A estrutura da Declaração de Escopo" accentClass="text-accent4">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Controle de versões',
              description: 'Versão, data, autor e notas da revisão — o documento muda ao longo do projeto, e é preciso saber qual versão vale.',
            },
            {
              title: 'Objetivos do documento',
              description: '"Descrever de forma clara qual trabalho deverá ser realizado e quais entregas serão produzidas."',
            },
            {
              title: 'Situação atual e justificativa',
              description: 'O passado e o presente: onde se está e o que motivou o projeto. O modelo instrui: "[Passado, onde está]".',
            },
            {
              title: 'Objetivos e critérios de sucesso',
              description: 'O futuro: onde se quer chegar, com benefícios esperados detalhados em objetivos SMART e critérios de sucesso relacionados.',
            },
            {
              title: 'Escopo do produto',
              description: 'Requisitos e características do produto ou serviço a ser entregue pelo projeto.',
            },
            {
              title: 'Exclusões / Fora do escopo',
              description:
                '"Liste itens reconhecidos como não-escopo de modo a evitar mal-entendidos na conclusão do projeto." O campo mais subestimado do documento — e o que mais previne conflito na entrega.',
            },
            {
              title: 'Restrições',
              description: '"Lista e descreve as restrições específicas associadas com o escopo que LIMITAM AS OPÇÕES da equipe."',
            },
            {
              title: 'Premissas',
              description:
                'As premissas adotadas — e, diz o modelo, "o impacto potencial dessas premissas SE FOREM PROVADAS FALSAS". Premissa sem análise de impacto é só otimismo documentado.',
            },
            {
              title: 'Entregas e critérios de aceitação',
              description: 'Podem ser descritos na EAP e em seu dicionário — a ligação direta com a próxima seção.',
            },
            {
              title: 'Aprovações',
              description: 'Participante, assinatura e data, com as linhas do Patrocinador e do Gerente do Projeto.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O modelo de requisitos" accentClass="text-accent5">
        <ExampleBox title="Quatro categorias, todas com ID, descrição e comentários">
          <p>
            O "Modelo de Requisitos de Projeto Simples" abre com identificação (organização, nome do projeto,
            contato, data e autor) e um <strong>controle de documentos</strong> — versão, quem editou, data e
            descrição da edição. Em seguida, a visão geral do projeto: "informações detalhadas descrevendo
            solução proposta, o que o projeto pretende atingir e justificativa comercial".
          </p>
          <p>Os requisitos técnicos se dividem em quatro tabelas:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Requisitos funcionais</strong> — o que o sistema faz;</li>
            <li><strong>Requisitos de relatórios</strong> — o que o sistema precisa informar;</li>
            <li><strong>Requisitos de segurança</strong> — controle de acesso, proteção de dados;</li>
            <li><strong>Requisitos não-funcionais</strong> — desempenho, disponibilidade, usabilidade.</li>
          </ul>
          <p className="mt-3 text-sm">
            Vale notar uma escolha do modelo: relatórios e segurança são tecnicamente requisitos{' '}
            <em>não-funcionais</em>, mas ganharam tabelas próprias. É uma decisão prática — são justamente as
            duas categorias que costumam ser esquecidas quando ficam diluídas numa lista genérica.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Goldplating: quando entregar demais é problema" accentClass="text-accent">
        <HighlightBox title="Banhar a ouro">
          <p>
            <strong>Goldplating</strong> é fornecer mais do que o cliente solicitou, acrescentando produtos ou
            serviços não previstos no escopo. O material é direto: o projeto deve entregar{' '}
            <strong>o escopo solicitado pelas partes interessadas</strong> — nem menos, nem mais.
          </p>
          <p>
            Parece generosidade, e é um problema por três razões: consome prazo e orçamento que ninguém
            autorizou, adiciona risco a um trabalho que já tinha o que fazer, e cria expectativa de que aquilo
            fará parte do produto — inclusive de manutenção futura. Se o extra é realmente valioso, o caminho é
            propor uma mudança de escopo, não presentear.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
