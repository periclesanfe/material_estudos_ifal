import type { ReactNode } from 'react';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import ConceptCard from '../../components/ui/ConceptCard';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import KahootQuiz from '../../components/ui/KahootQuiz';
import QuizCard from '../../components/ui/QuizCard';
import {
  ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT,
  ADMINISTRACAO_PROJETO_BANCO_DADOS_QUIZ_DATA,
  ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS,
} from './data';

interface AdministracaoProjetoBancoDadosSectionsProps {
  activeSection: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  colorClass?: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

interface PanelItem {
  title: string;
  description: string;
}

function SectionHeader({ title, subtitle, colorClass = 'text-accent' }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
    </div>
  );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-4`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

function PanelList({ items }: { items: PanelItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {items.map(item => (
        <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
          <h3 className="font-semibold text-sm md:text-base text-text mb-1">{item.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="study-surface overflow-x-auto p-4 text-xs md:text-sm leading-relaxed text-text-muted">
      <code>{children}</code>
    </pre>
  );
}

function TheoryBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="study-surface p-5 md:p-6 space-y-3">
      <h3 className="font-display font-bold text-2xl text-text">{title}</h3>
      <div className="text-text-muted text-sm md:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

const avaliacaoItems: ConceptItem[] = [
  {
    title: 'NOTA 1',
    description: 'Projeto Fase 1 (2 pts), Projeto Fase 2 (2 pts), Prova 1 Parte 1 (3 pts) e Prova 1 Parte 2 (3 pts).',
    accent: 'accent',
  },
  {
    title: 'NOTA 2',
    description: 'Projeto Fase 3 (2 pts), Projeto Fase 4 (2 pts), Projeto Fase 5 (2 pts) e Prova 2 individual (4 pts).',
    accent: 'accent3',
  },
  {
    title: 'Projeto em grupo',
    description: 'O projeto soma 10 pontos ao longo das fases e equilibra prática, modelagem e aderência a cenários reais.',
    accent: 'accent4',
  },
  {
    title: 'Provas individuais',
    description: 'As provas também somam 10 pontos no total, mantendo peso equilibrado entre prática em equipe e avaliação individual.',
    accent: 'accent5',
  },
];

const ferramentasItems: ConceptItem[] = [
  {
    title: 'Oracle Database',
    description: 'SGBD principal usado na disciplina para modelagem, SQL, administração e prática de laboratório.',
    accent: 'accent',
  },
  {
    title: 'SQL Developer',
    description: 'Ferramenta gráfica para escrever, executar e testar comandos SQL no ambiente Oracle.',
    accent: 'accent3',
  },
  {
    title: 'Data Modeler',
    description: 'Ferramenta para desenhar modelos, configurar padrões e gerar SQL coerente com a versão do banco.',
    accent: 'accent4',
  },
  {
    title: 'VirtualBox e Live SQL',
    description: 'VirtualBox apoia a execução de ambiente local; Live SQL permite praticar SQL online sem instalação local.',
    accent: 'accent5',
  },
];

const nomenclaturaItems: PanelItem[] = [
  { title: 'PK_{tabela}', description: 'Convenção comum para nomear chave primária.' },
  { title: 'FK_{pai}_{filho}', description: 'Indica relacionamento entre tabela referenciada e tabela dependente.' },
  { title: 'AK/UK_{tabela}_{coluna}', description: 'Usado para restrições alternativas ou únicas.' },
  { title: 'IDX_{tabela}_{coluna}', description: 'Identifica índices criados para acelerar consultas.' },
  { title: 'CK e NN', description: 'CK representa validação; NN indica obrigatoriedade de valor não nulo.' },
  { title: 'Cod, Dta, Nom, Des, Qtd, Val, Id', description: 'Abreviações úteis para nomes curtos, consistentes e previsíveis.' },
];

const objetoItems: PanelItem[] = [
  {
    title: 'Tabelas',
    description: 'Devem nascer com colunas, chave primária, chaves estrangeiras, obrigatoriedade, unicidade e validações.',
  },
  {
    title: 'Alterações',
    description: 'ALTER TABLE evolui estruturas existentes com ADD, MODIFY e DROP COLUMN conforme novas regras de negócio.',
  },
  {
    title: 'Comentários',
    description: 'Documentam tabelas e colunas dentro do banco, reduzindo ambiguidade para equipes e manutenção.',
  },
  {
    title: 'Visões',
    description: 'Consultas salvas que filtram, simplificam ou protegem o acesso a dados sem armazená-los diretamente.',
  },
  {
    title: 'Sequences',
    description: 'Geram valores numéricos automáticos; NEXTVAL retorna o próximo valor e CURRVAL recupera o valor atual da sessão.',
  },
  {
    title: 'Constraints',
    description: 'Regras de integridade ajudam o banco a evitar duplicidade, valores inválidos e relacionamentos quebrados.',
  },
];

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Introdução à Disciplina"
        subtitle="Visão geral da disciplina, avaliação, critérios do projeto e ferramentas usadas em laboratório."
      />

      <HighlightBox title="Foco da disciplina">
        <p>
          Administração e Projeto de Banco de Dados combina projeto, SQL e administração usando a plataforma Oracle.
          O material disponível cobre a apresentação da disciplina e a primeira parte de modelagem.
        </p>
      </HighlightBox>

      <TheoryBlock title="Por que a disciplina junta projeto e administração?">
        <p>
          O projeto de banco de dados define a estrutura que vai sustentar uma aplicação: quais objetos existem,
          como eles se relacionam, quais regras protegem os dados e como o acesso será organizado. A administração
          entra para manter essa estrutura funcionando em ambiente real, tratando usuários, instâncias, segurança,
          backup, desempenho e manutenção.
        </p>
        <p>
          Por isso, a disciplina não separa completamente modelagem, SQL e DBA. Um modelo mal definido gera SQL mais
          difícil de manter; um SQL sem regras de integridade deixa o banco vulnerável a inconsistências; e uma
          administração sem compreensão do projeto tende a resolver sintomas em vez de corrigir a causa.
        </p>
      </TheoryBlock>

      <ConceptGrid items={avaliacaoItems} />

      <div className="study-surface p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent3">Conteúdo programático geral</h3>
        <FlowDiagram items={['SQL', 'Transações', 'DBA', 'PL/SQL']} />
        <p className="text-text-muted text-sm leading-relaxed">
          SQL envolve DDL, DML e DCL; controle de transações trabalha comandos como COMMIT e ROLLBACK; DBA cobre
          instâncias, usuários, backup e segurança; PL/SQL introduz programação procedural no Oracle.
        </p>
      </div>

      <ConceptGrid items={ferramentasItems} />

      <PanelList
        items={[
          {
            title: 'Critérios do projeto',
            description: 'Correção técnica, inovação/criatividade, complexidade/desafio e abrangência/aderência à realidade.',
          },
          {
            title: 'Dicas de estudo',
            description: 'Praticar autoquestionamento, escrever pontos importantes, fazer exercícios, organizar o tempo e tirar dúvidas.',
          },
        ]}
      />

      <TheoryBlock title="Leitura dos critérios do projeto">
        <p>
          Correção técnica significa que o banco precisa representar bem o domínio escolhido, com tabelas,
          relacionamentos, constraints e nomes coerentes. Inovação e criatividade indicam que o projeto não deve ser
          apenas uma cópia mínima de exemplos de aula, mas uma proposta com escolhas próprias.
        </p>
        <p>
          Complexidade não quer dizer complicar artificialmente o modelo. O ponto é trabalhar um problema com
          dificuldade real, no qual existam entidades, regras e relacionamentos suficientes para demonstrar domínio.
          Aderência à realidade fecha essa ideia: o modelo precisa parecer útil fora do exercício.
        </p>
      </TheoryBlock>
    </section>
  );
}

function ModelagemSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelagem de Dados"
        subtitle="Organização do esquema, configuração da ferramenta e padronização do projeto físico."
        colorClass="text-accent3"
      />

      <HighlightBox title="Esquema bem definido" accent="var(--color-accent3)">
        <p>
          O esquema agrupa os objetos da aplicação, como tabelas, visões, índices e estruturas do mesmo domínio.
          Quando essa base é clara, o banco fica mais fácil de entender, manter e expandir.
        </p>
      </HighlightBox>

      <TheoryBlock title="O papel do esquema no projeto físico">
        <p>
          Pensar em esquema é pensar em fronteira de organização. Ele concentra os objetos que pertencem a uma mesma
          aplicação ou domínio, evitando que tabelas, visões e índices fiquem espalhados sem uma lógica comum. Essa
          organização facilita leitura, permissões, manutenção e evolução.
        </p>
        <p>
          Em um projeto real, o esquema também ajuda a separar responsabilidades. Um conjunto de objetos de vendas,
          por exemplo, pode ter regras e acessos diferentes de um conjunto financeiro. Mesmo quando a disciplina
          trabalha exemplos menores, a lógica é a mesma: o banco precisa se explicar pela própria estrutura.
        </p>
      </TheoryBlock>

      <PanelList
        items={[
          {
            title: 'Configuração inicial',
            description: 'Antes de criar objetos, configure versão do SGBD, tipos preferidos e comportamento padrão do modelo.',
          },
          {
            title: 'Impacto da versão',
            description: 'A versão do banco influencia os recursos disponíveis, os tipos aceitos e o formato do SQL gerado.',
          },
          {
            title: 'Tipos e domínios',
            description: 'Padronizam colunas semelhantes e centralizam regras recorrentes, evitando inconsistência e repetição manual.',
          },
          {
            title: 'Data Modeler',
            description: 'Ajuda a configurar regras gerais, relacionamentos, colunas obrigatórias, índices de FK e propriedades de objetos.',
          },
        ]}
      />

      <div className="study-surface p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent">Padrões de nomenclatura</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          A padronização de nomes é uma decisão de projeto físico porque afeta diretamente a leitura do DDL e a
          manutenção do banco. Nomes consistentes reduzem ambiguidade, ajudam a reconhecer o tipo de objeto e tornam
          erros mais fáceis de localizar em scripts, diagramas e mensagens do SGBD.
        </p>
        <PanelList items={nomenclaturaItems} />
      </div>

      <TheoryBlock title="Tipos e domínios como prevenção de inconsistência">
        <p>
          Tipos e domínios são úteis porque transformam decisões repetidas em padrões reutilizáveis. Se várias tabelas
          têm colunas de data, valor monetário, quantidade ou código, repetir a definição manualmente aumenta a chance
          de pequenas diferenças aparecerem sem necessidade.
        </p>
        <p>
          Quando uma regra de negócio se repete, o domínio centraliza essa regra. Isso não substitui a análise do
          modelo, mas diminui retrabalho e deixa claro que colunas semelhantes devem obedecer ao mesmo comportamento.
        </p>
      </TheoryBlock>
    </section>
  );
}

function ObjetosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Objetos SQL"
        subtitle="Tabelas, constraints, alterações, comentários, visões e sequences no projeto físico."
        colorClass="text-accent4"
      />

      <PanelList items={objetoItems} />

      <TheoryBlock title="Tabelas como ponto de defesa da integridade">
        <p>
          Uma tabela não deve ser vista apenas como um recipiente de colunas. Ela é o lugar onde parte importante das
          regras do sistema pode ser protegida pelo próprio banco. Chave primária evita identificação ambígua; chave
          estrangeira evita relacionamento quebrado; unicidade evita duplicidade indevida; obrigatoriedade evita
          registros incompletos.
        </p>
        <p>
          Essa postura reduz dependência exclusiva da aplicação. Mesmo que outro sistema, script ou usuário acesse o
          banco, as regras continuam existindo no nível dos dados. Em projetos reais, isso é decisivo para manter a
          consistência ao longo do tempo.
        </p>
      </TheoryBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent4">Exemplo de tabela com constraints</h3>
        <CodeBlock>{`CREATE TABLE tab_departamento (
  num_departamento NUMBER(10) CONSTRAINT nn_depto_numdepto NOT NULL,
  nom_departamento VARCHAR2(100) CONSTRAINT nn_depto_nomdepto NOT NULL,
  qtd_empregados NUMBER(4),
  num_nss_gerente NUMBER(10) CONSTRAINT nn_depto_numnssger NOT NULL,
  dat_inicio_gerencia DATE CONSTRAINT nn_depto_datiniger NOT NULL,
  CONSTRAINT departamento_pk PRIMARY KEY (num_departamento),
  CONSTRAINT departamento_nssger_un UNIQUE (num_nss_gerente),
  CONSTRAINT depto_empregado_fk FOREIGN KEY (num_nss_gerente)
    REFERENCES tab_empregado (num_nss)
);`}</CodeBlock>
      </div>

      <ConceptGrid
        columns="md:grid-cols-3"
        items={[
          {
            title: 'ADD',
            description: 'Inclui novas colunas quando uma regra de negócio exige mais informação.',
            accent: 'accent',
          },
          {
            title: 'MODIFY',
            description: 'Altera tipo, padrão ou obrigatoriedade de uma coluna existente.',
            accent: 'accent3',
          },
          {
            title: 'DROP COLUMN',
            description: 'Remove uma coluna que não é mais necessária no modelo.',
            accent: 'accent2',
          },
        ]}
      />

      <TheoryBlock title="Evolução do modelo com ALTER TABLE">
        <p>
          Modelos de dados mudam porque o negócio muda. Novas informações passam a ser necessárias, regras antigas
          deixam de fazer sentido e algumas estruturas precisam ser refinadas. O `ALTER TABLE` representa esse ciclo
          de evolução no banco físico.
        </p>
        <p>
          A decisão importante é não tratar alterações como remendos soltos. Adicionar, modificar ou remover colunas
          deve preservar a coerência do modelo, a documentação e as constraints. Assim, o banco continua legível mesmo
          depois de várias mudanças.
        </p>
      </TheoryBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent3">Visão e sequence</h3>
        <CodeBlock>{`CREATE VIEW V_VEICULO_2020 AS
SELECT *
FROM TAB_VEICULO
WHERE ANO_FABRICACAO = 2020;`}</CodeBlock>
        <CodeBlock>{`CREATE SEQUENCE seq_cliente
INCREMENT BY 1
START WITH 1
NOMAXVALUE
NOCYCLE
CACHE 20;`}</CodeBlock>
      </div>

      <TheoryBlock title="Visões e sequences no desenho da solução">
        <p>
          Visões criam uma camada lógica sobre as tabelas. Elas podem simplificar consultas repetidas, expor apenas
          parte dos dados ou oferecer uma forma mais segura de leitura para usuários e sistemas. Como representam uma
          consulta salva, não substituem a tabela, mas organizam o acesso a ela.
        </p>
        <p>
          Sequences resolvem o problema de gerar identificadores sem depender de digitação manual. Em vez de cada
          inserção inventar um número, o banco fornece o próximo valor disponível. Isso é especialmente útil para
          chaves artificiais, desde que o uso de `NEXTVAL` e `CURRVAL` respeite os contextos permitidos pelo Oracle.
        </p>
      </TheoryBlock>
    </section>
  );
}

function DesempenhoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Desempenho e Particionamento"
        subtitle="Índices, monitoramento e divisão física de grandes volumes de dados."
        colorClass="text-accent5"
      />

      <ConceptGrid
        items={[
          {
            title: 'Índice B-tree',
            description: 'Mais comum em buscas por chave, filtros seletivos, junções e ambientes transacionais com manutenção constante.',
            accent: 'accent',
          },
          {
            title: 'Índice bitmap',
            description: 'Adequado para baixa cardinalidade e consultas analíticas com combinação de filtros; pior em muitas atualizações.',
            accent: 'accent3',
          },
          {
            title: 'Índice por expressão',
            description: 'Permite otimizar consultas que aplicam funções, como indexar UPPER(last_name) para busca sem diferenciar caixa.',
            accent: 'accent4',
          },
          {
            title: 'Monitoramento',
            description: 'Ajuda a decidir se um índice ainda vale a pena ou apenas ocupa espaço e aumenta custo de manutenção.',
            accent: 'accent5',
          },
        ]}
      />

      <TheoryBlock title="Índice é uma troca, não uma regra automática">
        <p>
          Índices aceleram a busca porque oferecem caminhos de acesso alternativos aos dados. Sem eles, o banco pode
          precisar examinar muitas linhas até encontrar o que interessa. Com eles, filtros e junções frequentes podem
          ser resolvidos com menos leitura.
        </p>
        <p>
          A troca é que índices ocupam espaço e precisam ser mantidos quando os dados mudam. Por isso, criar índice
          em toda coluna não é boa prática. O ideal é observar quais consultas são importantes, quais colunas aparecem
          em filtros e junções e se o ganho de leitura compensa o custo de escrita e manutenção.
        </p>
      </TheoryBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent5">Formas de particionar</h3>
        <PanelList
          items={[
            {
              title: 'Faixa',
              description: 'Separa dados por intervalos contínuos, como datas de pedido ou faixas de valores.',
            },
            {
              title: 'Lista',
              description: 'Separa registros por valores específicos, como estados, regiões ou categorias conhecidas.',
            },
            {
              title: 'Hash',
              description: 'Distribui dados de forma equilibrada quando o objetivo é espalhar carga entre partições.',
            },
            {
              title: 'Índices particionados',
              description: 'Podem seguir a mesma lógica da tabela ou uma lógica própria, conforme desempenho e manutenção.',
            },
          ]}
        />
      </div>

      <TheoryBlock title="Particionamento como estratégia de crescimento">
        <p>
          Particionar não muda a forma como a aplicação enxerga a tabela, mas muda como o banco organiza internamente
          grandes volumes. Em vez de lidar sempre com uma estrutura única e pesada, o SGBD pode trabalhar com partes
          menores, facilitando consultas, cargas e manutenção.
        </p>
        <p>
          A escolha entre faixa, lista e hash depende do significado dos dados. Datas combinam naturalmente com faixa;
          categorias conhecidas, como estados, combinam com lista; distribuição equilibrada sem agrupamento semântico
          claro pode apontar para hash. O mesmo raciocínio vale para índices particionados: eles devem acompanhar a
          estratégia de acesso e manutenção.
        </p>
      </TheoryBlock>

      <HighlightBox title="Decisão de projeto" accent="var(--color-accent5)">
        <p>
          Índices e partições não são enfeites técnicos. Eles precisam responder ao padrão real de consulta, escrita,
          volume de dados e manutenção esperada do banco.
        </p>
      </HighlightBox>
    </section>
  );
}

function StaticQuizSection() {
  return (
    <section className="animate-fade-in space-y-5">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Perguntas fixas baseadas somente nas fontes disponíveis: introdução e modelagem de dados."
      />
      <div>
        {ADMINISTRACAO_PROJETO_BANCO_DADOS_QUIZ_DATA.map(question => (
          <QuizCard key={question.id} data={question} />
        ))}
      </div>
      <div className="study-surface p-5">
        <h3 className="font-display font-bold text-2xl text-accent3 mb-3">Modo Kahoot</h3>
        <KahootQuiz questions={ADMINISTRACAO_PROJETO_BANCO_DADOS_QUIZ_DATA} />
      </div>
    </section>
  );
}

function AIQuizSection() {
  return (
    <section className="animate-fade-in space-y-5">
      <SectionHeader
        title="Quiz com IA"
        subtitle="Geração de perguntas inéditas com base no resumo dos tópicos já documentados da matéria."
        colorClass="text-accent3"
      />
      <HighlightBox title="Escopo atual">
        <p>
          A IA foi limitada aos conteúdos presentes em .docs/apdb: introdução da disciplina e modelagem de dados.
          Novos tópicos devem ser adicionados ao contexto quando houver fonte correspondente.
        </p>
      </HighlightBox>
      <AIQuizGenerator
        guideContext={ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT}
        topics={ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS}
      />
      <div className="study-surface p-5">
        <h3 className="font-display font-bold text-2xl text-accent4 mb-3">Kahoot com IA</h3>
        <AIKahootQuiz
          guideContext={ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT}
          topics={ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS}
        />
      </div>
    </section>
  );
}

export default function AdministracaoProjetoBancoDadosSections({ activeSection }: AdministracaoProjetoBancoDadosSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'modelagem':
      return <ModelagemSection />;
    case 'objetos':
      return <ObjetosSection />;
    case 'desempenho':
      return <DesempenhoSection />;
    case 'quiz':
      return <StaticQuizSection />;
    case 'iaquiz':
      return <AIQuizSection />;
    default:
      return null;
  }
}
