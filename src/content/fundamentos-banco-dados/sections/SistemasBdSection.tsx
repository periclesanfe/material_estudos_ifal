import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable } from '../../../components/sections';

export default function SistemasBdSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Banco de Dados e SGBD"
        subtitle="Dado, informação, metadados — e por que abandonamos os sistemas de arquivos"
        colorClass="text-accent"
      />

      <TheoryBlock title="Dado, informação e o papel do banco">
        <p>
          <strong>Dados</strong> são fatos brutos, ainda não processados; <strong>informação</strong> é o resultado
          do processamento que revela significado — exige contexto. Um <strong>banco de dados</strong>, na
          definição do Rob &amp; Coronel, é a estrutura compartilhada e integrada que guarda duas coisas: os dados
          do usuário final e os <strong>metadados</strong> — "dados sobre dados", que descrevem características e
          relacionamentos. Na definição do Elmasri (a que a professora cobra): coleção de dados relacionados que
          representa um <strong>minimundo</strong>, logicamente coerente e construída para uma finalidade.
        </p>
        <p>
          O <strong>SGBD</strong> é o conjunto de programas que gerencia a estrutura e controla o acesso — o
          intermediário obrigatório entre usuário e dados. Pela definição de Elmasri, ele facilita{' '}
          <strong>definir, construir, manipular e compartilhar</strong> bancos de dados.
        </p>
      </TheoryBlock>

      <Subsection title="Sistemas de arquivos × abordagem de banco de dados" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Sistema de arquivos"
          rightLabel="Abordagem de BD"
          rows={[
            { criterion: 'Estrutura', left: 'Cada setor com seus arquivos e programas — "ilhas de informação"', right: 'Estrutura integrada e compartilhada, descrita no catálogo' },
            { criterion: 'Consultas', left: 'Cada pergunta nova exige programação extensiva; sem consulta ad hoc', right: 'Linguagem de consulta (SQL) responde perguntas novas na hora' },
            { criterion: 'Redundância', left: 'Mesmos dados repetidos entre arquivos → inconsistência e anomalias', right: 'Redundância controlada; FKs ligam sem duplicar' },
            { criterion: 'Estrutura × programas', left: 'Dependência estrutural: mudar o arquivo quebra todos os programas', right: 'Independência: a estrutura vive no catálogo, separada dos programas' },
          ]}
        />
        <HighlightBox title="As três anomalias" accent="var(--color-accent4)">
          <p>
            Redundância descontrolada gera <strong>inconsistência</strong> (versões conflitantes do mesmo dado) e
            as três anomalias clássicas: de <strong>atualização</strong> (mudar em N lugares, esquecer um), de{' '}
            <strong>inserção</strong> (não dá para cadastrar X sem inventar um Y) e de <strong>exclusão</strong>{' '}
            (apagar um registro leva junto informação de outra coisa). Elas voltam como motivação da normalização.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="As 4 características da abordagem de BD (Elmasri)" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1 · Autodescrição',
              description: 'O sistema contém o banco E sua descrição completa (estrutura, tipos, restrições), armazenada no CATÁLOGO — usado pelo software e pelos usuários.',
              accent: 'accent',
            },
            {
              title: '2 · Isolamento programa-dados',
              description: 'A estrutura fica no catálogo, fora dos programas: mudá-la não exige reescrever aplicações. É a abstração de dados em ação.',
              accent: 'accent2',
            },
            {
              title: '3 · Múltiplas visões',
              description: 'Cada usuário enxerga a perspectiva de que precisa: um vê o histórico do aluno, outro só confere pré-requisitos — sobre os mesmos dados.',
              accent: 'accent3',
            },
            {
              title: '4 · Compartilhamento multiusuário',
              description: 'Controle de concorrência garante que transações simultâneas não se corrompam — cada uma parece executar sozinha (isolamento).',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Sistema de BD ≠ SGBD: os cinco componentes" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Hardware', description: 'Servidores, armazenamento, rede.' },
            { title: 'Software', description: 'SO + SGBD + aplicativos e utilitários.' },
            { title: 'Pessoas', description: 'Administradores de sistema, DBA, projetistas, programadores/analistas e usuários finais.' },
            { title: 'Procedimentos', description: 'Regras e instruções de uso e operação.' },
            { title: 'Dados', description: 'A coleção de fatos que dá sentido a tudo.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Pegadinha de prova: o <strong>SGBD é só o software</strong>; o <strong>sistema</strong> de banco de dados
          é o conjunto dos cinco componentes — pessoas incluídas.
        </p>
      </Subsection>

      <Subsection title="As 8 funções do SGBD" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1 · Dicionário de dados', description: 'Gerencia os metadados — é o que remove as dependências estrutural e de dados.' },
            { title: '2 · Armazenamento', description: 'Gerencia os dados em disco, incluindo sintonização de desempenho.' },
            { title: '3 · Transformação e apresentação', description: 'Converte entre o formato físico gravado e o formato lógico esperado pelo usuário.' },
            { title: '4 · Segurança', description: 'Define quem acessa o quê e com quais operações.' },
            { title: '5 · Controle multiusuário', description: 'Concorrência: vários usuários no mesmo dado sem corrompê-lo.' },
            { title: '6 · Backup e recuperação', description: 'Garante a volta a um estado válido após falhas.' },
            { title: '7 · Integridade', description: 'Minimiza redundância e maximiza consistência, aplicando as regras do esquema.' },
            { title: '8 · Linguagens e APIs', description: 'Linguagem de consulta não procedural — SQL é o padrão — e interfaces de programação.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Quando NÃO usar um SGBD" accent="var(--color-accent3)">
        <p>
          O Elmasri lista os casos em que o custo não compensa: aplicações <strong>simples e estáveis</strong>, sem
          expectativa de mudança; requisitos <strong>rígidos de tempo real</strong> que a generalidade do SGBD
          atrapalha; <strong>sistemas embarcados</strong> com armazenamento limitado; e cenários{' '}
          <strong>sem acesso multiusuário</strong>. Saber a exceção é tão cobrado quanto saber a regra.
        </p>
      </HighlightBox>
    </section>
  );
}
