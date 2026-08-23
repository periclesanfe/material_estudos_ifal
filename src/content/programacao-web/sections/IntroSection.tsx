import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Programação Web 2"
        subtitle="Do primeiro npm init à arquitetura hexagonal com ORM"
        colorClass="text-accent"
      />

      <HighlightBox title="O que a disciplina se propõe">
        <p>
          PGWB (5º período, 80h, pré-requisito de Introdução a Tecnologias Web) tem o objetivo
          declarado de <strong>capacitar os alunos a desenvolverem aplicações web robustas e seguras,
          integradas a bancos de dados e utilizando padrões avançados de desenvolvimento</strong>.
        </p>
        <p>
          Os temas anunciados no plano de curso: os fundamentos do <strong>protocolo HTTP</strong>,
          desenvolvimento de <strong>APIs</strong>, manipulação de dados e arquivos multimídia, os padrões{' '}
          <strong>MVC e DAO</strong>, e <strong>segurança</strong> em aplicações web.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'A Web: história, arquitetura e o fluxo de uma requisição',
            'HTTP: mensagens, métodos, status e cabeçalhos',
            'HTML e o sistema de endereçamento (URL)',
            'A API DOM: manipular a página em tempo real',
            'Ajax e Fetch API: carregar dados sem recarregar',
            'Separar o que roda no cliente do que roda no servidor',
            'Criar a aplicação Node/Express do zero',
            'Rotas e as quatro formas de receber dados',
            'Validação no backend — a que de fato protege',
            'Cookies e sessões: estado num protocolo sem estado',
            'Persistência e o CRUD completo',
            'As quatro camadas e o Ports & Adapters',
            'Testes com Jest e Supertest',
            'ORM: a impedância objeto-relacional e o Sequelize',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'Resolução dos questionários',
              description:
                'Formulários com perguntas sobre vídeos — o que é a World Wide Web, o protocolo IP e o DNS foram os três primeiros.',
            },
            {
              title: 'Atividades práticas individuais',
              description:
                'Cada uma entregue como repositório público no GitHub: atualizar 4 divs com Fetch API, validar formulário no backend, e criar backend para diferentes requisições.',
            },
            {
              title: 'Projeto em equipe',
              description:
                'Entrega com vídeo de demonstração no YouTube e link do repositório com o código-fonte e os integrantes. O projeto era definido para cada equipe.',
            },
            {
              title: 'Participação no curso (extra)',
              description: 'A participação nas aulas era obrigatória, e contava como pontuação extra.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os <strong>percentuais de cada categoria estão em branco</strong> no plano de curso
          distribuído — a tabela existe, mas os valores não foram preenchidos.
        </p>
      </Subsection>

      <Subsection title="A metodologia: codificação em pares" accentClass="text-accent3">
        <HighlightBox title="Pair programming como método de aula" accent="var(--color-accent3)">
          <p>
            O plano de curso descreve a prática com precisão: os estudantes trabalham{' '}
            <strong>em duplas, revezando o uso do teclado</strong>. Uma pessoa lidera digitando
            enquanto a outra faz sugestões e, passado um tempo definido pelo professor,{' '}
            <strong>trocam de lugar</strong>.
          </p>
          <p>
            O rodízio é a parte que costuma ser esquecida — e é a essencial. Sem ele, uma pessoa digita
            o semestre inteiro e a outra assiste, que é justamente o que a prática pretende evitar.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="De onde vem o material" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Notas de aula autorais',
              description:
                'Dois capítulos preparados pelo professor: "A Web" (34 slides) e "Usando APIs Web" (19 slides), cobrindo HTTP, HTML, URL, DOM e Fetch.',
              accent: 'accent',
            },
            {
              title: 'Guia passo a passo — 107 páginas',
              description:
                'O material mais importante do curso. Oito seções, de A a H, construindo a mesma aplicação em complexidade crescente: do npm init à arquitetura em camadas com ORM.',
              accent: 'accent2',
            },
            {
              title: 'Deck de cliente/servidor',
              description:
                'Comunicação entre cliente e servidor, path params, query strings, corpo da requisição, cabeçalhos, cookies e sessões — com código Express real.',
              accent: 'accent3',
            },
            {
              title: 'Enunciados de atividade',
              description:
                'Com requisitos específicos e nome de repositório definido, entregues via GitHub.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Duas observações sobre a turma" accent="var(--color-accent5)">
        <p>
          <strong>Houve troca de professor no meio do semestre.</strong> O primeiro conduziu de agosto
          a outubro e comunicou afastamento de um ano para pós-doutorado; o segundo assumiu em outubro
          e levou o curso até dezembro. Isso aparece no conteúdo: a primeira metade usa{' '}
          <strong>EJS + SQLite</strong>, e a segunda introduz <strong>Handlebars, MySQL e Sequelize</strong>.
          As duas abordagens convivem no material da mesma turma.
        </p>
        <p>
          <strong>Lacuna conhecida:</strong> a bibliografia básica é o próprio material de apoio da
          disciplina, escrito pelo professor — mas ele ficou numa pasta do Drive que não foi capturada
          na raspagem. Seu Capítulo 3 havia sido atualizado com seções sobre URL param e query string,
          dados de formulário, cookies e sessões, e motores de template. Este resumo se apoia nas notas
          de aula, nos slides e no guia, que estão completos.
        </p>
      </HighlightBox>
    </section>
  );
}
