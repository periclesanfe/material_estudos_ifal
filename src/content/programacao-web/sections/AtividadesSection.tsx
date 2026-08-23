import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, PanelList, ConceptGrid } from '../../../components/sections';

export default function AtividadesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="As Atividades e o Projeto"
        subtitle="Sete entregas, quase todas por repositório no GitHub"
        colorClass="text-accent"
        badge="Arquitetura"
      />

      <Subsection title="Os questionários iniciais" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'O que é a world wide web?', description: 'Questionário sobre vídeo, aplicado no início do curso.' },
            { title: 'Como funciona a Internet? — O protocolo IP', description: 'Questionário sobre vídeo.' },
            { title: 'Como funciona a Internet? — DNS', description: 'Questionário sobre vídeo.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os três acompanhavam o Capítulo 1 e cobriam a infraestrutura sobre a qual a Web funciona —
          coerente com a distinção entre Internet e Web que abre a disciplina.
        </p>
      </Subsection>

      <Subsection title="As três atividades práticas" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'Atualizando 4 divs simultaneamente',
              description:
                'Usar Fetch API e DOM API para atualizar quatro seções da página, com quatro requisições distintas ou quatro APIs diferentes, analisando o comportamento do carregamento assíncrono. Entrega: repositório público com nomes e e-mails no README.',
            },
            {
              title: 'Validação de formulários no backend',
              description:
                'Formulário enviado por POST com cinco validações NO SERVIDOR: obrigatoriedade (menos o checkbox), datas válidas, e-mail com @ e ponto, DDDs válidos no Brasil e no máximo 3 atividades extracurriculares. Repositório: validacao-dados-backend.',
            },
            {
              title: 'Backend para diferentes requisições',
              description:
                'Analisar o código cliente, compreender GET, POST, PUT e DELETE, completar o servidor para o registro de alunos e impedir matrículas duplicadas na inserção E na atualização. Repositório: backend-para-diferentes-requisicoes.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O projeto final" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'A entrega',
              description:
                'Link de vídeo no YouTube com a demonstração do sistema, mais o link do GitHub com os códigos-fonte e os integrantes da equipe.',
              accent: 'accent',
            },
            {
              title: 'As equipes',
              description:
                'Podiam ser o mesmo grupo da disciplina de Propriedade Intelectual ou um grupo formado só para PWEB. O projeto era definido para cada equipe.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Houve pré-avaliação em dezembro, com o professor pedindo que as equipes levassem os projetos
          para uma revisão antes da entrega definitiva.
        </p>
      </Subsection>

      <HighlightBox title="Um padrão que atravessa todas as atividades" accent="var(--color-accent4)">
        <p>
          Toda entrega prática era feita por <strong>repositório público no GitHub</strong>, com{' '}
          <strong>nome de repositório definido pelo professor</strong> e a exigência de identificar os
          participantes no README.
        </p>
        <p>
          Não é formalidade: o versionamento estava entre os pré-requisitos declarados no plano de
          curso, e a prática de entregar por repositório é a mesma do trabalho profissional. O
          cadastro em serviços de nuvem devia usar o e-mail institucional.
        </p>
      </HighlightBox>

      <Subsection title="A troca de professor e o que veio depois" accentClass="text-accent2">
        <p className="text-text-muted leading-relaxed">
          A disciplina teve <strong>dois professores</strong>. O primeiro conduziu até outubro, quando
          comunicou afastamento de um ano para pós-doutorado. O segundo assumiu em seguida e levou o
          curso até dezembro.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          O material da segunda metade introduz tecnologias diferentes das usadas até ali:{' '}
          <strong>template engine Handlebars</strong> (com <code>{'{{#each}}'}</code> e{' '}
          <code>{'{{#with}}'}</code>), <strong>MySQL</strong> no lugar do SQLite, o{' '}
          <strong>ORM Sequelize</strong> e a <strong>arquitetura MVC no Node.js</strong>, com uma aula
          gravada construindo um CRUD básico.
        </p>
        <p className="text-text-muted leading-relaxed mt-3">
          Vale registrar como fato do semestre: <strong>as duas abordagens convivem</strong> no material
          da mesma turma — EJS com SQLite de um lado, Handlebars com MySQL do outro. Os conceitos
          (rotas, template engine, ORM, MVC) são os mesmos; muda a ferramenta que os concretiza.
        </p>
      </Subsection>
    </section>
  );
}
