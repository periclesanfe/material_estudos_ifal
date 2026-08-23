import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fundamentos de Banco de Dados"
        subtitle="Da modelagem conceitual ao SQL: a trilha completa que sustenta APBD e TABD mais adiante"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          FDBD (código FNBD, 80h, 3º período) é a porta de entrada do eixo de banco de dados do BSI: você aprende a{' '}
          <strong>modelar</strong> um domínio (ER/EER), <strong>convertê-lo</strong> em tabelas relacionais bem
          formadas, <strong>normalizá-las</strong> e, por fim, <strong>consultá-las</strong> — primeiro na álgebra
          relacional, depois em SQL de verdade no MySQL. Este material resume e reorganiza as aulas da turma 2023.1
          da Profa. Wladia Bessa, incluindo os exercícios corrigidos em sala e o gabarito oficial da 2ª prova.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Conceitos iniciais: dado, banco de dados, SGBD e sistemas de arquivos',
            'Arquitetura de um SGBD (três esquemas, independência de dados)',
            'Modelo Entidade-Relacionamento (ER) — com a ferramenta BrModelo',
            'Modelo ER Estendido (EER): especialização, ternários e agregação',
            'Modelo Relacional e restrições de integridade',
            'Regras de conversão do conceitual para o relacional',
            'Normalização (1FN, 2FN, 3FN)',
            '1ª Prova',
            'Álgebra Relacional',
            'SQL: DDL → DML → DTL → DQL (o maior bloco da disciplina)',
            '2ª Prova e Prova Final',
          ]}
        />
      </Subsection>

      <Subsection title="O que cai em cada prova (listas declaradas no mural)" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: '1ª Prova',
              description:
                'Sistema de banco de dados, conceitos e arquitetura · Modelo ER · Modelo EER · Modelo Relacional · Transformação de ER/EER para Relacional.',
            },
            {
              title: '2ª Prova',
              description: 'Normalização · Álgebra Relacional · SQL (DDL, DML, DTL, DQL).',
            },
            {
              title: 'Prova Final',
              description: 'Modelo ER/EER · Modelo Relacional · Transformação do Conceitual para Relacional · Normalização · SQL.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Houve ainda atividades valendo <strong>ponto extra</strong> (modelagem ER em dupla e a atividade de
          DDL/DML/DQL no MySQL) — todas incorporadas às seções como exercícios resolvidos.
        </p>
      </Subsection>

      <Subsection title="Livros e ambiente" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Dois livros-base',
              description:
                'Rob & Coronel (Sistemas de Banco de Dados — capítulos 1 a 6 usados em aula) e Elmasri & Navathe (Sistemas de Banco de Dados — slides oficiais). Os vocabulários divergem em alguns pontos; o material sinaliza quando isso acontece.',
              accent: 'accent',
            },
            {
              title: 'Prática no MySQL',
              description:
                'O ambiente oficial é o XAMPP: instale, dê Start em Apache e MySQL e acesse o phpMyAdmin em localhost. Todos os exercícios de SQL assumem esse ambiente.',
              accent: 'accent2',
            },
            {
              title: 'Dialetos de SQL',
              description:
                'Os slides teóricos usam Oracle (NUMBER, VARCHAR2, SYSDATE, DUAL); a prática usa MySQL. As seções indicam o dialeto de cada sintaxe e trazem a tabela de equivalências.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma FNBD 2023.1 — BSI/IFAL (Profa. Wladia
          Bessa da Cruz): capítulos dos livros-base, slides de aula (incluindo os decks de SQL do Prof. Luiz
          Frederico e os slides autorais da professora), anotações do quadro, listas de exercícios e gabaritos
          oficiais. Onde o gabarito original traz erros de digitação ou deslizes conceituais, este guia corrige e
          sinaliza — alguns viraram questões "ache o erro" no quiz.
        </p>
      </HighlightBox>
    </section>
  );
}
