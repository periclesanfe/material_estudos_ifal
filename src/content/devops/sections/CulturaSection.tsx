import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function CulturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O que é DevOps"
        subtitle="Uma definição que não menciona nenhuma ferramenta — e por que isso é o ponto"
        colorClass="text-accent"
        badge="Etapa 01"
      />

      <TheoryBlock title="A definição de Patrick Debois">
        <p className="text-lg text-text">
          "DevOps é um método para desenvolvimento de software que enfatiza a{' '}
          <strong className="text-accent">comunicação</strong>, <strong className="text-accent2">colaboração</strong>,{' '}
          <strong className="text-accent3">integração</strong>, <strong className="text-accent4">automação</strong> e o{' '}
          <strong className="text-accent5">uso de métricas</strong>."
        </p>
        <p>
          Leia de novo e repare no que <em>não</em> está ali: nenhum produto, nenhuma sigla de fornecedor, nenhuma
          arquitetura. Docker, Kubernetes e Jenkins são <strong>consequências</strong> — formas de implementar
          essas cinco ênfases num momento particular da história da tecnologia.
        </p>
        <p>
          Essa é a razão de a disciplina insistir nos conceitos: quem entende o que é integração contínua troca de
          Jenkins para GitHub Actions em uma tarde; quem decorou os menus de uma ferramenta recomeça do zero a
          cada mudança de mercado.
        </p>
      </TheoryBlock>

      <Subsection title="As cinco ênfases, uma a uma" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Comunicação',
              description:
                'Dev e Ops precisam conversar antes do incidente, não durante. Boa parte das falhas de produção nasce de premissas que ninguém verbalizou — sobre carga esperada, sobre dependências, sobre o que acontece quando um serviço externo cai.',
            },
            {
              title: 'Colaboração',
              description:
                'Mais forte que comunicação: significa responsabilidade compartilhada pelo resultado. Não é o Dev "avisar" o Ops sobre o deploy, é os dois responderem juntos por ele estar no ar e funcionando.',
            },
            {
              title: 'Integração',
              description:
                'Integrar cedo e com frequência, em vez de acumular meses de trabalho separado para juntar tudo na véspera. Vale para o código (integração contínua) e para as equipes.',
            },
            {
              title: 'Automação',
              description:
                'Todo processo manual repetido é uma fonte de erro e um gargalo. Automatizar não é só ganhar velocidade: é tornar o processo REPETÍVEL e AUDITÁVEL — a mesma sequência, executada do mesmo jeito, toda vez.',
            },
            {
              title: 'Uso de métricas',
              description:
                'Sem medir, discussões sobre desempenho e confiabilidade viram opinião. As métricas também são o que permite ao ciclo se realimentar: é o monitoramento que informa o próximo planejamento.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A intersecção de três mundos" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O material define DevOps como uma grande <strong>intersecção</strong> entre desenvolvimento, operações e
          garantia de qualidade. Não é uma quarta equipe entre as outras — é a área onde as três se sobrepõem.
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Development',
              description:
                'Engenharia de software: escrever o código, versioná-lo, testá-lo automaticamente, integrá-lo continuamente e entregá-lo em ritmo previsível.',
              accent: 'accent',
            },
            {
              title: 'Technology Operations',
              description:
                'Manter o sistema no ar: provisionar infraestrutura, monitorar desempenho, responder a incidentes e garantir que a mudança de ontem não derrube o serviço de hoje.',
              accent: 'accent2',
            },
            {
              title: 'Quality Assurance',
              description:
                'Garantir que o que foi entregue faz o que promete — com autoescalabilidade, provisionamento automático de múltiplos ambientes e gerenciamento de configuração e mudanças.',
              accent: 'accent3',
            },
          ]}
        />
        <HighlightBox title="As práticas que emergem da intersecção">
          <p>
            Infraestrutura como código, integração contínua, automação de testes, entrega contínua, gerenciamento
            de versões e monitoramento de desempenho das aplicações. Note que cada uma dessas práticas{' '}
            <strong>pertence a mais de um mundo ao mesmo tempo</strong> — e é justamente por isso que só funcionam
            quando as equipes deixam de operar em separado.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O engenheiro DevOps" accentClass="text-accent4">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O material o define de forma direta: <strong>é o responsável por integrar os dois mundos</strong>. Vale
          registrar a tensão que existe nessa figura — se ela virar uma terceira equipe isolada, com seu próprio
          backlog e suas próprias metas, o resultado é apenas <em>mais um silo</em>, e o muro se reconstrói um
          pouco mais adiante. O papel só cumpre sua função enquanto aproxima quem desenvolve de quem opera.
        </p>
      </Subsection>
    </section>
  );
}
