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

function ColoredPanelList({ items }: { items: PanelItem[] }) {
  const styles = [
    'border-accent/35 bg-accent/8 text-accent',
    'border-accent2/35 bg-accent2/8 text-accent2',
    'border-accent3/35 bg-accent3/8 text-accent3',
    'border-accent4/35 bg-accent4/8 text-accent4',
    'border-accent5/35 bg-accent5/8 text-accent5',
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {items.map((item, index) => {
        const colorClass = styles[index % styles.length];

        return (
          <div key={item.title} className={`border rounded-xl px-5 py-4 ${colorClass}`}>
            <h3 className="font-semibold text-sm md:text-base mb-1 text-text">{item.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
          </div>
        );
      })}
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

const armazenamentoHierarquiaItems: PanelItem[] = [
  {
    title: 'Oracle Data Block',
    description: 'Menor unidade que o Oracle gerencia. Leituras e gravações acontecem em múltiplos de blocos, não em bytes isolados.',
  },
  {
    title: 'Extent',
    description: 'Conjunto contíguo de blocos alocado quando um objeto precisa crescer. Reduz alocações pequenas e ajuda a controlar fragmentação.',
  },
  {
    title: 'Segmento',
    description: 'Conjunto de extents de um objeto, como tabela, índice, segmento temporário ou segmento de UNDO.',
  },
  {
    title: 'Tablespace',
    description: 'Coleção nomeada de segmentos. Organiza objetos, apoia controle de espaço, manutenção e planejamento de desempenho.',
  },
  {
    title: 'Datafile',
    description: 'Arquivo físico do sistema operacional onde os blocos são gravados. Um tablespace pode ter um ou mais datafiles.',
  },
  {
    title: 'Database',
    description: 'Contêiner maior: reúne tablespaces e permite que a aplicação trabalhe com objetos sem lidar diretamente com arquivos físicos.',
  },
];

const segmentoItems: PanelItem[] = [
  {
    title: 'Segmentos de dados',
    description: 'Guardam os dados das tabelas. Cada tabela cresce com seus próprios extents conforme recebe mais linhas.',
  },
  {
    title: 'Segmentos de índice',
    description: 'Armazenam estruturas de índice. Eles também ocupam espaço e devem ser planejados como parte do armazenamento.',
  },
  {
    title: 'Segmentos temporários',
    description: 'Aparecem em operações como ORDER BY, GROUP BY e joins que precisam de área temporária para processar resultados.',
  },
  {
    title: 'Segmentos de UNDO',
    description: 'Guardam versões anteriores dos dados para rollback de transações e leitura consistente.',
  },
];

const profileItems: PanelItem[] = [
  {
    title: 'PROFILE',
    description: 'Conjunto nomeado de regras para senha e consumo de recursos. Pode ser aplicado no CREATE USER ou depois com ALTER USER.',
  },
  {
    title: 'DEFAULT',
    description: 'Perfil base aplicado automaticamente quando nenhum outro profile é informado. Ele não pode ser eliminado, mas pode ser ajustado.',
  },
  {
    title: 'Role x profile',
    description: 'Role concede privilégios; profile impõe limites. Misturar esses conceitos leva a desenho inseguro de autorização.',
  },
  {
    title: 'Sessões abertas',
    description: 'Alterar um profile não derruba sessões já conectadas. A política nova passa a valer para conexões futuras.',
  },
];

const senhaItems: PanelItem[] = [
  {
    title: 'FAILED_LOGIN_ATTEMPTS',
    description: 'Quantidade de falhas de autenticação permitidas antes do bloqueio da conta.',
  },
  {
    title: 'PASSWORD_LOCK_TIME',
    description: 'Tempo durante o qual a conta permanece bloqueada após exceder o limite de tentativas.',
  },
  {
    title: 'PASSWORD_LIFE_TIME',
    description: 'Prazo de validade da senha. Ao vencer, o próximo login força a troca conforme a política.',
  },
  {
    title: 'PASSWORD_GRACE_TIME',
    description: 'Período de tolerância após a expiração, evitando interrupção abrupta sem abandonar a exigência de troca.',
  },
  {
    title: 'PASSWORD_REUSE_TIME e PASSWORD_REUSE_MAX',
    description: 'Impedem reutilização imediata de senhas antigas por tempo mínimo ou número mínimo de trocas.',
  },
  {
    title: 'PASSWORD_VERIFY_FUNCTION',
    description: 'Função PL/SQL que valida complexidade, diferença em relação à senha anterior e regras locais antes da troca.',
  },
];

const limiteSessaoItems: PanelItem[] = [
  {
    title: 'SESSIONS_PER_USER',
    description: 'Limita quantas sessões simultâneas um usuário pode manter, evitando acúmulo de conexões abertas.',
  },
  {
    title: 'CONNECT_TIME',
    description: 'Define o tempo total de conexão permitido, útil para contas temporárias ou rotinas com janela controlada.',
  },
  {
    title: 'IDLE_TIME',
    description: 'Encerra sessões ociosas após determinado tempo, reduzindo risco e liberando recursos.',
  },
  {
    title: 'CPU_PER_SESSION',
    description: 'Controla o total de CPU consumido pela sessão inteira.',
  },
  {
    title: 'LOGICAL_READS_PER_SESSION',
    description: 'Limita leituras lógicas acumuladas pela sessão, protegendo o banco contra uso excessivo.',
  },
  {
    title: 'COMPOSITE_LIMIT',
    description: 'Combina medidas diferentes em uma fórmula ponderada para limitar consumo geral.',
  },
];

const recuperacaoItems: PanelItem[] = [
  {
    title: 'LogMiner',
    description: 'Analisa redo logs para reconstruir operações, identificar SQL_REDO e, quando possível, SQL_UNDO.',
  },
  {
    title: 'Flashback Query',
    description: 'Consulta dados como estavam em um SCN ou timestamp anterior, sem restaurar o banco inteiro.',
  },
  {
    title: 'Flashback Table',
    description: 'Retorna uma tabela a um ponto anterior no tempo; normalmente exige ROW MOVEMENT habilitado.',
  },
  {
    title: 'Flashback Drop',
    description: 'Recupera tabelas apagadas quando elas ainda estão no Recycle Bin.',
  },
  {
    title: 'Flashback Data Archive',
    description: 'Mantém histórico de longo prazo em tablespace dedicado, útil para auditoria e rastreabilidade.',
  },
  {
    title: 'Flashback Transaction',
    description: 'Permite analisar e desfazer transações com base em XID e dependências, exigindo mais cuidado operacional.',
  },
];

const backupItems: ConceptItem[] = [
  {
    title: 'Data Pump',
    description: 'Backup lógico com expdp e impdp para exportar/importar schemas, tabelas, tablespaces ou objetos específicos.',
    accent: 'accent',
  },
  {
    title: 'RMAN',
    description: 'Backup físico e recovery de datafiles, archived redo logs, control file, SPFILE e FRA.',
    accent: 'accent3',
  },
  {
    title: 'RESTORE',
    description: 'Traz arquivos de volta a partir do backup. Resolve a ausência ou corrupção do arquivo físico.',
    accent: 'accent4',
  },
  {
    title: 'RECOVER',
    description: 'Aplica redo logs para reconstruir consistência e avançar o banco até o ponto necessário.',
    accent: 'accent5',
  },
];

const falhaRespostaItems: PanelItem[] = [
  {
    title: 'Falha de instância',
    description: 'Queda de energia ou crash normalmente pede recuperação automática e rápida, com atuação de processos como SMON.',
  },
  {
    title: 'Avaria de software ou hardware',
    description: 'Exige diagnóstico da camada afetada e pode combinar correção de infraestrutura com restore e recover.',
  },
  {
    title: 'Perda de mídia',
    description: 'Datafile corrompido ou perdido costuma apontar para backup físico, RMAN, restore e aplicação de redo logs.',
  },
  {
    title: 'Catástrofe',
    description: 'Quando o data center é afetado, a resposta passa por site alternativo, redundância e replicação remota.',
  },
];

const solucaoOracleItems: PanelItem[] = [
  {
    title: 'SMON',
    description: 'Processo que participa da recuperação automática após falha de instância.',
  },
  {
    title: 'Active Data Guard',
    description: 'Mantém standby pronto para assumir em modelo ativo-passivo e ainda pode permitir leitura no standby.',
  },
  {
    title: 'Oracle RAC',
    description: 'Aumenta disponibilidade ao distribuir a operação em múltiplos nós de banco.',
  },
  {
    title: 'Data Guard',
    description: 'Mantém cópia remota para continuidade e redução de perda em falhas maiores.',
  },
  {
    title: 'TDE',
    description: 'Protege confidencialidade de dados em repouso e backups por criptografia.',
  },
  {
    title: 'RMAN, Flashback e LogMiner',
    description: 'Cobrem recuperação física, correção rápida de erros lógicos e reconstrução/auditoria de alterações.',
  },
];

const relacaoRecursosItems: PanelItem[] = [
  {
    title: 'Perfis e limites',
    description: 'Reduzem abuso, erro operacional e consumo excessivo antes que o problema afete a disponibilidade.',
  },
  {
    title: 'Flashback',
    description: 'Resolve erros lógicos recentes com recuperação mais granular do que restaurar o banco inteiro.',
  },
  {
    title: 'LogMiner',
    description: 'Ajuda a descobrir quem alterou, qual comando executou e qual SQL pode desfazer a mudança.',
  },
  {
    title: 'Data Pump',
    description: 'Atende migração, homologação e cópias lógicas de schemas, tabelas e objetos.',
  },
  {
    title: 'RMAN',
    description: 'Cobre falhas físicas, arquivos corrompidos e recuperação com archived redo logs.',
  },
  {
    title: 'DRP',
    description: 'Amarra prevenção, recuperação lógica, backup físico e continuidade em um plano executável.',
  },
];

const estudoCenarioItems: PanelItem[] = [
  {
    title: 'Alguém errou uma atualização',
    description: 'Use Flashback Query, Flashback Table ou LogMiner, conforme tempo, granularidade e necessidade de auditoria.',
  },
  {
    title: 'Um usuário sobrecarrega o banco',
    description: 'Use PROFILE, limites de recursos e, no desenho mais amplo, Resource Manager.',
  },
  {
    title: 'Preciso migrar um schema',
    description: 'Use Data Pump para exportação/importação lógica com expdp, impdp e parâmetros como SCHEMAS ou REMAP_SCHEMA.',
  },
  {
    title: 'Perdi um arquivo físico',
    description: 'Use RMAN para RESTORE do arquivo e RECOVER com logs até o ponto necessário.',
  },
  {
    title: 'Perdi o site inteiro',
    description: 'Use DRP com Data Guard, RAC, site remoto, backups testados e metas claras de RTO/RPO.',
  },
  {
    title: 'Preciso escolher entre ferramentas',
    description: 'Compare impacto, urgência, perda aceitável, escopo afetado e se a falha é lógica, física ou de continuidade.',
  },
];

const arquiteturaMemoriaItems: PanelItem[] = [
  {
    title: 'Instância',
    description: 'Parte em execução do Oracle: estruturas de memória e processos que coordenam leituras, escritas, sessões e recuperação.',
  },
  {
    title: 'Banco de dados',
    description: 'Conjunto de arquivos físicos em disco, incluindo control files, datafiles, redo logs e arquivos associados.',
  },
  {
    title: 'User Process',
    description: 'Processo do lado cliente, como SQL*Plus ou uma aplicação, que envia comandos para o servidor Oracle.',
  },
  {
    title: 'Server Process',
    description: 'Processo no servidor que executa a solicitação do usuário, acessa a SGA e usa uma PGA privada.',
  },
  {
    title: 'SGA',
    description: 'Memória compartilhada alocada no startup e usada por processos Oracle para cache, parsing e redo.',
  },
  {
    title: 'PGA',
    description: 'Memória privada de cada Server Process, usada para informações da sessão, binds e áreas de ordenação.',
  },
];

const sgaItems: PanelItem[] = [
  {
    title: 'Shared Pool',
    description: 'Armazena SQL e PL/SQL interpretados, planos reutilizáveis, Library Cache e Row Cache/Dictionary Cache.',
  },
  {
    title: 'Database Buffer Cache',
    description: 'Mantém blocos de dados lidos dos datafiles; blocos alterados e ainda não gravados são dirty blocks.',
  },
  {
    title: 'Redo Log Buffer',
    description: 'Registra alterações DML em ordem cronológica antes da gravação nos redo logs pelo LGWR.',
  },
  {
    title: 'Java, Large e Streams Pool',
    description: 'Componentes opcionais usados por JVM, RMAN/Shared Server e recursos como Advanced Queuing.',
  },
];

const backgroundProcessItems: PanelItem[] = [
  {
    title: 'SMON',
    description: 'Faz crash recovery automático após falha de instância e executa manutenção de espaço.',
  },
  {
    title: 'PMON',
    description: 'Limpa sessões encerradas abruptamente, libera locks e trata rollback de transações abertas.',
  },
  {
    title: 'DBWn',
    description: 'Grava dirty blocks do Database Buffer Cache nos datafiles em lote, não a cada alteração.',
  },
  {
    title: 'LGWR',
    description: 'Grava redo em disco no COMMIT, por tempo, por volume de buffer ou antes de checkpoints.',
  },
  {
    title: 'CKPT',
    description: 'Atualiza cabeçalhos de datafiles e control file com o número do checkpoint mais recente.',
  },
  {
    title: 'ARCn, MMAN e RVWR',
    description: 'Arquivam redo logs, gerenciam memória automaticamente e suportam Flashback Database.',
  },
];

const arquivoOracleItems: PanelItem[] = [
  {
    title: 'Control file',
    description: 'Arquivo crítico com estrutura do banco e localização de datafiles e redo logs; deve ser multiplexado.',
  },
  {
    title: 'Datafiles',
    description: 'Guardam os dados e pertencem a tablespaces permanentes, temporárias ou UNDO.',
  },
  {
    title: 'Redo log files',
    description: 'Registram alterações para recuperação; são usados em grupos circulares e devem ser multiplexados.',
  },
  {
    title: 'PFILE e SPFILE',
    description: 'PFILE é texto e exige restart; SPFILE é binário, alterado por ALTER SYSTEM e geralmente dinâmico.',
  },
  {
    title: 'Password file',
    description: 'Armazena credenciais de usuários com privilégios administrativos como SYSDBA e SYSOPER.',
  },
  {
    title: 'Trace e alert log',
    description: 'Trace registra erros por processo; alert log registra eventos críticos, startup, shutdown e operações administrativas.',
  },
];

const dicionarioItems: PanelItem[] = [
  {
    title: 'DBA_xxx',
    description: 'Mostra todos os objetos do banco, exigindo privilégios administrativos.',
  },
  {
    title: 'ALL_xxx',
    description: 'Mostra objetos que o usuário atual consegue acessar, próprios ou concedidos.',
  },
  {
    title: 'USER_xxx',
    description: 'Mostra apenas objetos pertencentes ao schema do usuário atual.',
  },
  {
    title: 'V$',
    description: 'Visões dinâmicas que mostram o estado atual da instância, sessões, parâmetros, waits e arquivos.',
  },
];

const monitoramentoItems: PanelItem[] = [
  {
    title: 'DBMS_STATS',
    description: 'Coleta estatísticas de banco, schema ou tabela para apoiar o otimizador na escolha de planos.',
  },
  {
    title: 'Objetos INVALID',
    description: 'Visões e PL/SQL podem ficar inválidos após alterações; precisam ser recompilados ou recriados.',
  },
  {
    title: 'Índices UNUSABLE',
    description: 'Podem surgir após carga direta ou rebuild incompleto; consultas deixam de aproveitar o índice.',
  },
  {
    title: 'Sessões bloqueadas',
    description: 'Locks em sistemas transacionais aparecem em V$SESSION por blocking_session, SID e SERIAL#.',
  },
  {
    title: 'Eventos de espera',
    description: 'Mostram se sessões aguardam disco, rede, locks ou outros recursos.',
  },
  {
    title: 'Operações longas',
    description: 'V$SESSION_LONGOPS acompanha full scans, backups, rebuilds e tarefas com progresso mensurável.',
  },
];

const advisorItems: PanelItem[] = [
  {
    title: 'AWR',
    description: 'Repositório de snapshots de estatísticas coletados por MMON e MMNL, usado para análise histórica.',
  },
  {
    title: 'ADDM',
    description: 'Analisa snapshots do AWR e gera recomendações para reduzir DB Time.',
  },
  {
    title: 'SQL Tuning Advisor',
    description: 'Analisa SQL problemático e sugere reescrita, índices, perfis SQL ou outras melhorias.',
  },
  {
    title: 'SQL Access Advisor',
    description: 'Recomenda índices, materialized views e particionamento para conjuntos de consultas.',
  },
  {
    title: 'MTTR e Memory Advisors',
    description: 'Ajudam a definir FAST_START_MTTR_TARGET, SGA e PGA com base no comportamento observado.',
  },
  {
    title: 'Segment e Undo Advisors',
    description: 'Identificam segmentos candidatos a shrink e dimensionamento adequado da tablespace de UNDO.',
  },
];

const startupShutdownItems: PanelItem[] = [
  {
    title: 'NOMOUNT',
    description: 'Lê SPFILE/PFILE, aloca SGA e inicia processos. Útil para criação de banco.',
  },
  {
    title: 'MOUNT',
    description: 'Abre control files e associa a instância ao banco, mas ainda não abre datafiles e redo logs.',
  },
  {
    title: 'OPEN',
    description: 'Abre datafiles e redo logs online. É o estado normal de operação.',
  },
  {
    title: 'NORMAL',
    description: 'Espera todos os usuários saírem voluntariamente; seguro, mas pode demorar.',
  },
  {
    title: 'TRANSACTIONAL',
    description: 'Não aceita novas transações e aguarda as transações atuais terminarem.',
  },
  {
    title: 'IMMEDIATE e ABORT',
    description: 'IMMEDIATE faz rollback e encerra limpo; ABORT derruba abruptamente e exige crash recovery.',
  },
];

const networkItems: PanelItem[] = [
  {
    title: 'Listener',
    description: 'Processo no servidor que escuta conexões remotas, por padrão na porta 1521, administrado com lsnrctl.',
  },
  {
    title: 'tnsnames.ora',
    description: 'Mapeia aliases para host, porta, protocolo e service name no método Local Naming.',
  },
  {
    title: 'EZCONNECT',
    description: 'Permite conexão direta com usuario/senha@hostname:porta/servicename, sem arquivo local.',
  },
  {
    title: 'sqlnet.ora',
    description: 'Define ordem de resolução de nomes e parâmetros globais de autenticação e segurança.',
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

      <HighlightBox title="Importante" accent="var(--color-accent4)">
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-text-muted">
          <p>
            Os conteúdos desta disciplina foram organizados a partir dos slides disponibilizados pelo professor
            <strong className="text-text"> Luiz Frederico Lopes de Oliveira</strong>. No Google Classroom, os slides são agrupados em postagens diferentes,
            de modo que o conteúdo pode ser encontrado ao acessar as publicações:
          </p>
          <div className="space-y-2">
            <p><strong className="text-text">Agrupamento no Classroom:</strong></p>
            <ul className="list-disc space-y-1 pl-5">
              <li>"Slides 1" reúne 01 a 05.</li>
              <li>"Slides 2" reúne 06 e 07.</li>
              <li>"Slides 3" reúne 08 e 09.</li>
              <li>"Slides 4" reúne 10, 11 e 12.</li>
              <li>"Slides 5" reúne 13, 14, 15 e 16.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p><strong className="text-text">Fontes por conteúdo:</strong></p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-card">
                  <tr>
                    <th className="border-b border-border px-4 py-3 font-semibold text-text">Seção</th>
                    <th className="border-b border-border px-4 py-3 font-semibold text-text">Slides-base</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card/40">
                    <td className="border-b border-border px-4 py-3 text-text">Introdução</td>
                    <td className="border-b border-border px-4 py-3">01 - Administração e Projeto de Banco de Dados - Dia 01.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-border px-4 py-3 text-text">Modelagem</td>
                    <td className="border-b border-border px-4 py-3">02 - SQL Data Modeler<br/>03 - SQL DDL e 04 - Índices.</td>
                  </tr>
                  <tr className="bg-card/40">
                    <td className="border-b border-border px-4 py-3 text-text">Armazenamento</td>
                    <td className="border-b border-border px-4 py-3">05 - Armazenamento.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-border px-4 py-3 text-text">Segurança</td>
                    <td className="border-b border-border px-4 py-3">06 - Segurança - Usuários<br/>07 - Segurança - Senhas e Recursos<br/>08 - Segurança - Backup e Recovery<br/>09 - Segurança - Recuperação de Desastres.</td>
                  </tr>
                  <tr className="bg-card/40">
                    <td className="border-b border-border px-4 py-3 text-text">Arquitetura</td>
                    <td className="border-b border-border px-4 py-3">10 - Arquitetura,<br/>1 - Gerenciando a Instância <br/> 12 - Dicionário de Dados.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-text">PL/SQL</td>
                    <td className="px-4 py-3">13 - PL/SQL Básico<br/>14 - SQL em PL/SQL<br/>15 - Exceções e Armazenados <br/>16 - Triggers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

function ArmazenamentoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Armazenamento Oracle"
        subtitle="Como o Oracle separa a organização lógica dos dados da ocupação física em disco."
        colorClass="text-accent5"
      />

      <HighlightBox title="Ideia central" accent="var(--color-accent5)">
        <p>
          No Oracle, os dados existem em dois níveis ao mesmo tempo. O nível lógico mostra como o banco organiza
          tablespaces, segmentos, extents e blocos. O nível físico mostra onde esses dados são gravados de verdade:
          em datafiles do sistema operacional.
        </p>
      </HighlightBox>

      <TheoryBlock title="Por que separar lógico e físico?">
        <p>
          A separação entre armazenamento lógico e físico dá flexibilidade para administração. Um desenvolvedor ou
          usuário pensa em tabelas, índices e tablespaces; o DBA consegue lidar com arquivos, discos e distribuição
          física sem obrigar a aplicação a mudar sua forma de acesso.
        </p>
        <p>
          Em um sistema de frota, por exemplo, a aplicação pode consultar `TAB_VEICULO`, `TAB_MOTORISTA` e
          `TAB_TRAJETO` como objetos normais. Por trás disso, cada tabela pode ser um segmento diferente, ocupando
          extents distintos dentro de um tablespace. O tablespace, por sua vez, pode estar apoiado em mais de um
          datafile físico, como `ARQUIVO_01.dbf` e `ARQUIVO_02.dbf`.
        </p>
      </TheoryBlock>

      <div className="study-surface p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent5">Hierarquia de armazenamento</h3>
        <FlowDiagram items={['Database', 'Tablespace', 'Segmento', 'Extent', 'Bloco']} />
        <PanelList items={armazenamentoHierarquiaItems} />
      </div>

      <TheoryBlock title="Bloco de dados: a menor unidade gerenciada">
        <p>
          O Oracle Data Block é a unidade mínima que o Oracle lê e grava. O banco não trabalha gravando um byte solto
          de uma linha; ele movimenta blocos. O tamanho padrão é definido na criação do banco pelo parâmetro
          `DB_BLOCK_SIZE`, com valores comuns como 4KB, 8KB ou 16KB.
        </p>
        <p>
          Dentro de um bloco existem três áreas importantes. O cabeçalho guarda metadados, como endereço do bloco,
          tipo de segmento e informações sobre transações ativas. A área de dados guarda linhas de tabela ou entradas
          de índice. O espaço livre é a reserva usada para acomodar mudanças futuras nas linhas.
        </p>
      </TheoryBlock>

      <ConceptGrid
        items={[
          {
            title: 'Cabeçalho do bloco',
            description: 'Mantém metadados e informações transacionais. O tamanho pode variar conforme INITRANS.',
            accent: 'accent',
          },
          {
            title: 'Área de dados',
            description: 'Guarda o conteúdo útil: linhas de tabela ou entradas de índice.',
            accent: 'accent3',
          },
          {
            title: 'Espaço livre',
            description: 'Reserva interna do bloco controlada por PCTFREE e PCTUSED.',
            accent: 'accent4',
          },
          {
            title: 'DB_BLOCK_SIZE',
            description: 'Parâmetro definido na criação do banco que influencia o tamanho padrão dos blocos.',
            accent: 'accent5',
          },
        ]}
      />

      <TheoryBlock title="PCTFREE e PCTUSED na prática">
        <p>
          `PCTFREE` define quanto do bloco deve permanecer livre para updates que aumentem o tamanho das linhas já
          existentes. Se `PCTFREE = 20`, o Oracle insere novas linhas até o bloco ficar aproximadamente 80% cheio.
          A partir daí, ele preserva os 20% restantes para crescimento de linhas que já estão ali.
        </p>
        <p>
          `PCTUSED` define o ponto em que um bloco volta a aceitar inserções depois de perder dados por deleções. Se
          `PCTUSED = 40`, um bloco que estava cheio só volta para a lista de blocos disponíveis quando sua ocupação
          cair abaixo de 40%. Isso evita que o banco fique alternando o mesmo bloco entre disponível e indisponível a
          cada pequena mudança.
        </p>
      </TheoryBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent4">Exemplo mental de ocupação do bloco</h3>
        <CodeBlock>{`Bloco com PCTFREE = 20 e PCTUSED = 40

1. Inserts ocupam o bloco ate cerca de 80%.
2. O Oracle para de inserir novas linhas nesse bloco.
3. Updates ainda podem usar a reserva de 20%.
4. Deletes reduzem a ocupacao do bloco.
5. Se o uso cair abaixo de 40%, o bloco volta a aceitar inserts.`}</CodeBlock>
      </div>

      <TheoryBlock title="Extents e segmentos: como os objetos crescem">
        <p>
          Quando uma tabela precisa de mais espaço, o Oracle não aloca um bloco isolado por vez. Ele aloca um extent,
          isto é, um conjunto contíguo de blocos. Quando esse extent enche, outro extent pode ser alocado para o
          mesmo objeto. Os extents de um objeto não precisam ficar todos lado a lado no disco.
        </p>
        <p>
          O segmento é o conjunto desses extents para um objeto específico. Se `TAB_VEICULO`, `TAB_MOTORISTA` e
          `TAB_TRAJETO` estão no mesmo tablespace, elas ainda são segmentos diferentes. Cada uma cresce de forma
          própria, de acordo com o volume de dados que recebe.
        </p>
      </TheoryBlock>

      <PanelList items={segmentoItems} />

      <TheoryBlock title="Tablespace e datafile: a ponte entre os mundos">
        <p>
          O tablespace é lógico: ele agrupa segmentos e dá ao DBA uma forma de organizar o banco por finalidade. Em
          uma aplicação de frota, uma escolha comum seria separar dados e índices, por exemplo `TBS_FROTA_DD` para
          tabelas e `TBS_FROTA_IX` para índices.
        </p>
        <p>
          O datafile é físico: é o arquivo real gravado no sistema operacional. Um tablespace pode usar um ou mais
          datafiles. Isso permite distribuir armazenamento, controlar crescimento e fazer manutenção sem que a
          aplicação precise saber em qual arquivo uma linha ficou armazenada.
        </p>
      </TheoryBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent3">Mapa lógico e físico</h3>
        <CodeBlock>{`DATABASE
  TABLESPACE FROTA
    DATAFILE ARQUIVO_01.dbf
    DATAFILE ARQUIVO_02.dbf

    SEGMENTO TAB_VEICULO
      EXTENT 1 -> blocos de dados
      EXTENT 2 -> blocos de dados

    SEGMENTO TAB_MOTORISTA
      EXTENT 1 -> blocos de dados

    SEGMENTO IDX_VEICULO_PLACA
      EXTENT 1 -> blocos de indice`}</CodeBlock>
      </div>

      <ConceptGrid
        columns="md:grid-cols-3"
        items={[
          {
            title: 'Performance',
            description: 'Separar dados e índices em tablespaces diferentes pode ajudar a distribuir carga de I/O quando a infraestrutura permite.',
            accent: 'accent',
          },
          {
            title: 'Manutenção',
            description: 'Um tablespace pode ser administrado de forma independente, inclusive com operações como modo read-only ou offline.',
            accent: 'accent3',
          },
          {
            title: 'Controle de espaço',
            description: 'O DBA acompanha crescimento e quotas por tablespace, em vez de depender apenas da visão objeto por objeto.',
            accent: 'accent5',
          },
        ]}
      />

      <HighlightBox title="Resumo para prova" accent="var(--color-accent4)">
        <p>
          A hierarquia essencial é: database contém tablespaces; tablespaces contêm segmentos; segmentos são formados
          por extents; extents são conjuntos de blocos; blocos são a menor unidade gerenciada. Fisicamente, o
          tablespace é sustentado por datafiles.
        </p>
      </HighlightBox>
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

function SegurancaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Segurança e Recuperação"
        subtitle="Usuários, profiles, políticas de senha, limites de recursos, LogMiner, Flashback, backup e continuidade no Oracle."
        colorClass="text-accent2"
      />

      <HighlightBox title="Ideia central" accent="var(--color-accent2)">
        <p>
          Segurança em banco de dados não é apenas impedir login indevido. No Oracle, ela combina prevenção,
          limitação de impacto, investigação de incidentes e recuperação. A pergunta prática é: como reduzir a chance
          de erro, abuso ou falha e, quando algo acontecer, como voltar com a menor perda possível?
        </p>
      </HighlightBox>

      <TheoryBlock title="Usuário como identidade administrada">
        <p>
          Um usuário Oracle deve representar uma identidade com responsabilidade clara. Ele pode ser uma pessoa, uma
          aplicação, uma rotina de integração ou uma conta administrativa, mas em todos os casos precisa ter limites e
          permissões proporcionais ao seu papel. Conta genérica, senha fraca e privilégios amplos demais dificultam
          auditoria e aumentam o impacto de qualquer erro.
        </p>
        <p>
          O `PROFILE` entra nessa camada como um pacote de política. Em vez de configurar senha e consumo de recursos
          usuário por usuário, o DBA cria perfis reutilizáveis, como um profile para aplicações, outro para analistas
          de relatório e outro para contas de teste. Isso melhora padronização e reduz esquecimento operacional.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={profileItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent2">Exemplo de profile</h3>
        <CodeBlock>{`CREATE PROFILE app_restrito LIMIT
  FAILED_LOGIN_ATTEMPTS 3
  PASSWORD_LOCK_TIME 1/24
  PASSWORD_LIFE_TIME 90
  PASSWORD_GRACE_TIME 7
  PASSWORD_REUSE_TIME 180
  PASSWORD_REUSE_MAX 5
  SESSIONS_PER_USER 2
  IDLE_TIME 30;

CREATE USER sistema_frota IDENTIFIED BY senha_inicial
  PROFILE app_restrito;

ALTER USER sistema_frota PROFILE app_restrito;`}</CodeBlock>
      </div>

      <TheoryBlock title="Política de senha">
        <p>
          A política de senha tenta bloquear padrões previsíveis. `FAILED_LOGIN_ATTEMPTS` e `PASSWORD_LOCK_TIME`
          reduzem ataques por tentativa repetida. Se o limite for 3 e a quarta tentativa falhar, a conta é bloqueada
          pelo tempo configurado. Como o Oracle aceita frações de dia, `1/24` representa aproximadamente uma hora.
        </p>
        <p>
          Expiração e histórico resolvem outro problema: o usuário trocar a senha apenas formalmente e voltar para a
          antiga. `PASSWORD_LIFE_TIME` define a validade; `PASSWORD_GRACE_TIME` dá uma janela curta para troca;
          `PASSWORD_REUSE_TIME` e `PASSWORD_REUSE_MAX` impedem reutilização fácil. Já `PASSWORD_VERIFY_FUNCTION`
          permite aplicar uma função PL/SQL para rejeitar senhas triviais, curtas ou muito parecidas com a anterior.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={senhaItems} />

      <TheoryBlock title="Limites de recursos também são segurança">
        <p>
          Disponibilidade faz parte da segurança. Um usuário não precisa ser malicioso para prejudicar o banco: basta
          abrir sessões demais, deixar conexões ociosas por horas ou executar uma consulta pesada em horário crítico.
          Profiles ajudam a limitar esse impacto antes que o problema vire indisponibilidade para todos.
        </p>
        <p>
          Limites por sessão olham a conexão como um todo. Limites por chamada olham cada comando SQL individual. Se
          um `SELECT` ultrapassa `CPU_PER_CALL`, por exemplo, o comando pode ser interrompido sem necessariamente
          derrubar a sessão inteira. Para que esses limites sejam aplicados, o parâmetro global `RESOURCE_LIMIT`
          precisa estar habilitado.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={limiteSessaoItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent3">Cenários de limite</h3>
        <CodeBlock>{`-- Usuario de relatorios abre conexoes demais:
SESSIONS_PER_USER 3

-- Processo conectado sem atividade por muito tempo:
IDLE_TIME 20

-- Consulta individual pesada demais:
CPU_PER_CALL 3000
LOGICAL_READS_PER_CALL 10000

-- Enforcement dos limites:
ALTER SYSTEM SET RESOURCE_LIMIT = TRUE;`}</CodeBlock>
      </div>

      <TheoryBlock title="Falhas lógicas">
        <p>
          Nem toda falha exige restaurar arquivos físicos. Muitas ocorrências são lógicas: um `UPDATE` sem `WHERE`,
          um `DELETE` indevido, um `TRUNCATE` acidental ou uma alteração de atributo feita no conjunto errado de
          registros. Nesses casos, restaurar o banco inteiro pode ser mais caro e perigoso do que recuperar apenas o
          dado afetado.
        </p>
        <p>
          O LogMiner ajuda na investigação porque lê redo logs e reconstrói a história das alterações. Com
          supplemental logging e dicionário adequado, ele permite consultar `V$LOGMNR_CONTENTS` para enxergar comandos
          executados, ordem dos eventos, objetos afetados e possíveis instruções de desfazer.
        </p>
      </TheoryBlock>

      <FlowDiagram
        items={[
          'Habilitar supplemental logging',
          'Preparar dicionário',
          'Adicionar redo logs',
          'Iniciar LogMiner',
          'Consultar V$LOGMNR_CONTENTS',
          'Encerrar sessão',
        ]}
      />

      <ColoredPanelList items={recuperacaoItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent4">Flashback por cenário</h3>
        <CodeBlock>{`-- Comparar estado antigo sem restaurar:
SELECT *
FROM tab_cliente AS OF TIMESTAMP (SYSTIMESTAMP - INTERVAL '20' MINUTE)
WHERE cod_cliente = 10;

-- Voltar uma tabela para antes do erro:
ALTER TABLE tab_cliente ENABLE ROW MOVEMENT;
FLASHBACK TABLE tab_cliente TO TIMESTAMP
  (SYSTIMESTAMP - INTERVAL '20' MINUTE);

-- Recuperar tabela removida, se ainda estiver no recycle bin:
FLASHBACK TABLE tab_cliente TO BEFORE DROP;`}</CodeBlock>
      </div>

      <TheoryBlock title="Backup lógico e físico">
        <p>
          Data Pump e RMAN respondem a problemas diferentes. Data Pump trabalha no nível lógico: schemas, tabelas,
          objetos e subconjuntos de dados. Ele é indicado para migração, homologação, cópia seletiva e transporte de
          partes do banco. Antes de usar `expdp` e `impdp`, o DBA normalmente cria um `DIRECTORY` no Oracle e concede
          permissões de leitura e escrita sobre esse diretório.
        </p>
        <p>
          RMAN trabalha no nível físico e é o caminho principal para backup e recovery de arquivos do banco. Ele lida
          com datafiles, archived redo logs, control file, SPFILE e Flash Recovery Area. A diferença entre `RESTORE` e
          `RECOVER` é essencial: restore traz arquivos do backup; recover aplica logs para deixar os arquivos
          consistentes no ponto necessário.
        </p>
      </TheoryBlock>

      <ConceptGrid items={backupItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent5">Exemplos de escolha</h3>
        <CodeBlock>{`-- Migrar um schema para homologacao:
expdp system DIRECTORY=dp_dir DUMPFILE=frota.dmp LOGFILE=frota.log SCHEMAS=FROTA
impdp system DIRECTORY=dp_dir DUMPFILE=frota.dmp LOGFILE=imp_frota.log REMAP_SCHEMA=FROTA:FROTA_TESTE

-- Perda de arquivo fisico:
RMAN> RESTORE DATAFILE 5;
RMAN> RECOVER DATAFILE 5;

-- Recuperacao incompleta:
RMAN> RECOVER DATABASE UNTIL TIME "TO_DATE('2026-05-29 10:30:00','YYYY-MM-DD HH24:MI:SS')";
SQL> ALTER DATABASE OPEN RESETLOGS;`}</CodeBlock>
      </div>

      <TheoryBlock title="Continuidade e DRP">
        <p>
          O plano de recuperação de desastres entra quando a falha ultrapassa um erro local. Perda de mídia, queda de
          infraestrutura, indisponibilidade do data center e catástrofes exigem decisões anteriores ao incidente.
          Nessa etapa, duas métricas orientam a estratégia: `RTO`, tempo máximo aceitável para voltar a operar, e
          `RPO`, perda máxima de dados aceitável.
        </p>
        <p>
          Um RTO baixo tende a exigir alta disponibilidade, failover e ambientes standby. Um RPO baixo exige backups
          frequentes, archived logs, replicação e, em cenários críticos, Data Guard. Recursos como RAC, Active Data
          Guard, RMAN, TDE, Flashback e LogMiner não competem entre si; eles formam camadas complementares de
          prevenção, confidencialidade, recuperação e continuidade.
        </p>
      </TheoryBlock>

      <div className="border border-accent2/25 bg-accent2/5 rounded-xl p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent2">Tipos de falha e resposta</h3>
        <ColoredPanelList items={falhaRespostaItems} />
      </div>

      <div className="border border-accent3/25 bg-accent3/5 rounded-xl p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent3">Soluções Oracle no DRP</h3>
        <ColoredPanelList items={solucaoOracleItems} />
      </div>

      <TheoryBlock title="Mapa de recursos por incidente">
        <p>
          A forma mais útil de entender segurança e recuperação é associar cada recurso ao tipo de incidente que ele
          resolve melhor. Perfis e limites evitam abuso e mau uso; Flashback ajuda quando a falha é lógica e recente;
          Data Pump atende movimentação lógica de dados; RMAN cobre falhas físicas; DRP organiza continuidade quando o
          problema ultrapassa o banco local.
        </p>
        <p>
          Essas camadas não competem. Em um incidente real, elas se complementam. Um `UPDATE` errado pode ser
          investigado com LogMiner e revertido com Flashback. Um datafile corrompido chama RMAN. Uma indisponibilidade
          do data center exige Data Guard, RAC, site alternativo e um plano de operação previamente testado.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={relacaoRecursosItems} />

      <TheoryBlock title="Decisão por cenário">
        <p>
          Decorar siglas isoladas é pouco eficiente porque o Oracle oferece mais de uma ferramenta para recuperar ou
          investigar problemas. O raciocínio mais forte é partir do cenário: o que aconteceu, qual dado foi afetado,
          quanto tempo há para voltar, quanta perda é aceitável e qual granularidade de recuperação é necessária.
        </p>
        <p>
          Essa leitura ajuda na prova e na prática. Se a falha é lógica e recente, pense em Flashback e LogMiner. Se
          envolve transporte de schema, pense em Data Pump. Se envolve arquivo físico, pense em RMAN. Se envolve perda
          de site, pense em DRP, Data Guard, RAC, replicação e site remoto.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={estudoCenarioItems} />

      <HighlightBox title="Resumo por incidente" accent="var(--color-accent4)">
        <p>
          Senha fraca ou abuso de conexão aponta para profiles. `UPDATE` errado aponta para LogMiner ou Flashback.
          Migração de schema aponta para Data Pump. Datafile perdido aponta para RMAN. Data center indisponível aponta
          para DRP com redundância, Data Guard, RAC e site alternativo.
        </p>
      </HighlightBox>
    </section>
  );
}

function ArquiteturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arquitetura e Administração Oracle"
        subtitle="Instância, memória, processos, arquivos, multitenant, dicionário, monitoramento, rede, startup e shutdown."
        colorClass="text-accent"
      />

      <HighlightBox title="Ideia central">
        <p>
          Oracle separa claramente a parte que executa da parte que persiste. A instância é memória mais processos em
          execução; o banco de dados é o conjunto de arquivos físicos. Essa separação explica por que uma instância
          pode estar iniciada em `NOMOUNT` sem ainda ter aberto os arquivos do banco, e por que recovery depende tanto
          de redo logs, control files e checkpoints.
        </p>
      </HighlightBox>

      <TheoryBlock title="Instância, banco e sessão">
        <p>
          Quando uma aplicação conecta no Oracle, existe um processo do lado cliente, chamado User Process, e um
          Server Process no servidor. O Server Process atende aquela sessão, consulta ou modifica blocos, conversa com
          estruturas compartilhadas da SGA e mantém uma área privada chamada PGA. A PGA guarda informações de sessão,
          variáveis de bind e áreas de trabalho como ordenações.
        </p>
        <p>
          O banco em si não é esse processo. Ele é persistente: control files, datafiles, redo logs e arquivos
          associados. Por isso, administrar Oracle exige pensar sempre nos dois lados: memória/processos para operação
          e arquivos para persistência e recuperação.
        </p>
      </TheoryBlock>

      <HighlightBox title="Exemplo operacional">
        <p>
          Se um usuário abre o SQL Developer e executa um `SELECT`, o User Process envia a solicitação ao Oracle Net.
          O Listener direciona a conexão, o Server Process usa PGA para o contexto privado da sessão e consulta a SGA
          para reaproveitar SQL já interpretado e blocos que talvez já estejam em memória. Esse encadeamento mostra
          que sessão, memória compartilhada e arquivos físicos participam da mesma operação, mas com papéis diferentes.
        </p>
      </HighlightBox>

      <ColoredPanelList items={arquiteturaMemoriaItems} />

      <div className="border border-accent/25 bg-accent/5 rounded-xl p-5 md:p-6 space-y-4">
        <h3 className="font-display font-bold text-2xl text-accent">SGA e componentes</h3>
        <ColoredPanelList items={sgaItems} />
        <CodeBlock>{`SELECT component, current_size
FROM v$sga_dynamic_components;`}</CodeBlock>
      </div>

      <TheoryBlock title="Exemplo de leitura repetida e reaproveitamento de cache">
        <p>
          Imagine duas execuções seguidas de `SELECT * FROM clientes WHERE cliente_id = 10`. Na primeira, o Oracle pode
          precisar interpretar o SQL, localizar o plano e buscar o bloco no disco. Na segunda, se o SQL já estiver no
          Shared Pool e o bloco no Buffer Cache, parte desse trabalho desaparece. Esse reaproveitamento é um dos
          motivos pelos quais a arquitetura de memória influencia tanto desempenho.
        </p>
        <p>
          Também vale distinguir estados práticos dos buffers. Um bloco `clean` já pode ser reutilizado; um bloco
          `dirty` ainda precisa ser gravado pelo DBWn; um bloco `pinned` está em uso ativo por alguma sessão. Essa
          leitura ajuda a entender por que o Oracle não grava cada alteração imediatamente no disco.
        </p>
      </TheoryBlock>

      <PanelList
        items={[
          {
            title: 'Primeira execução do SQL',
            description: 'Pode exigir parse, acesso ao dicionário e leitura física do bloco caso ele ainda não esteja em memória.',
          },
          {
            title: 'Execução repetida',
            description: 'Pode reutilizar SQL já interpretado e blocos em cache, reduzindo CPU e I/O físico.',
          },
          {
            title: 'Bloco clean',
            description: 'Não foi modificado desde a última gravação e pode ser descartado ou reutilizado sem escrita pendente.',
          },
          {
            title: 'Bloco dirty',
            description: 'Foi alterado em memória e ainda aguarda persistência em datafile pelo DBWn.',
          },
        ]}
      />

      <TheoryBlock title="Como uma alteração chega ao disco">
        <p>
          Um `UPDATE` altera blocos no Database Buffer Cache e gera registros no Redo Log Buffer. O bloco alterado em
          memória vira um dirty block, mas o Oracle não precisa gravá-lo imediatamente no datafile. Quem garante a
          durabilidade da transação no `COMMIT` é o LGWR, gravando o redo em disco. Depois, em momento oportuno, o
          DBWn grava os dirty blocks nos datafiles.
        </p>
        <p>
          Essa ordem é decisiva para desempenho e recovery. Se o banco caísse logo após o commit, o dado talvez ainda
          não estivesse no datafile, mas o redo estaria gravado. Na próxima abertura, o Oracle consegue reaplicar o
          redo necessário e recuperar a consistência.
        </p>
      </TheoryBlock>

      <FlowDiagram items={['DML', 'Buffer Cache', 'Redo Log Buffer', 'LGWR', 'Redo Log', 'DBWn', 'Datafile']} />

      <ColoredPanelList items={backgroundProcessItems} />

      <TheoryBlock title="Arquivos físicos e parâmetros">
        <p>
          O control file é um dos arquivos mais críticos porque registra a estrutura física do banco: localização dos
          datafiles e redo logs, estado do banco e metadados necessários para montagem e recuperação. Sem ele, a
          instância não sabe como associar memória/processos aos arquivos corretos. Por isso, a prática recomendada é
          multiplexar control files em discos diferentes.
        </p>
        <p>
          Datafiles guardam os dados das tablespaces. Redo logs guardam o histórico de alterações necessário para
          recuperação e também devem ser multiplexados. PFILE e SPFILE controlam parâmetros de inicialização: PFILE é
          texto e normalmente exige restart; SPFILE é binário e deve ser alterado por comandos SQL.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={arquivoOracleItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent3">Consultas de arquivos</h3>
        <CodeBlock>{`SELECT * FROM v$controlfile;
SELECT * FROM dba_data_files;
SELECT * FROM dba_temp_files;
SELECT * FROM v$logfile;
SELECT * FROM v$diag_info;`}</CodeBlock>
      </div>

      <TheoryBlock title="Como interpretar esses arquivos no dia a dia">
        <p>
          `V$CONTROLFILE` responde onde estão os arquivos de controle realmente usados pela instância. `DBA_DATA_FILES`
          e `DBA_TEMP_FILES` ajudam a conferir capacidade, autoextend e distribuição por tablespace. `V$LOGFILE`
          expõe membros de redo log e ajuda a validar multiplexação. `V$DIAG_INFO` aponta para diagnóstico, inclusive
          diretórios do alert log e traces.
        </p>
        <p>
          Em troubleshooting, a pergunta correta quase nunca é apenas "qual arquivo existe?". O ponto é saber se ele
          está no lugar certo, se há redundância, se a instância está de fato usando aquele arquivo e se o layout faz
          sentido para recuperação e manutenção.
        </p>
      </TheoryBlock>

      <TheoryBlock title="Arquitetura Multitenant">
        <p>
          A partir do Oracle 12c, o modelo Multitenant permite que um CDB contenha vários PDBs. O `CDB$ROOT` guarda
          metadados comuns, o `PDB$SEED` funciona como template somente leitura e os PDBs de usuário são onde as
          aplicações normalmente residem. Isso permite provisionamento mais rápido, isolamento lógico e administração
          centralizada.
        </p>
        <p>
          A navegação entre containers importa porque alguns comandos fazem sentido no root e outros no PDB. Um DBA
          precisa saber onde está antes de criar objetos, consultar estruturas ou abrir e fechar bancos plugáveis.
        </p>
      </TheoryBlock>

      <CodeBlock>{`SHOW CON_NAME;

ALTER SESSION SET CONTAINER = MEU_PDB;

SELECT name, open_mode
FROM v$pdbs;`}</CodeBlock>

      <HighlightBox title="Exemplo de erro comum em Multitenant" accent="var(--color-accent4)">
        <p>
          Criar usuário ou tabela no container errado é um erro frequente. Se o DBA pensa estar no PDB da aplicação,
          mas ainda está em `CDB$ROOT`, o objeto nasce em outro escopo. Por isso, `SHOW CON_NAME` e a leitura de
          `V$PDBS` devem virar hábito antes de qualquer operação administrativa relevante.
        </p>
      </HighlightBox>

      <TheoryBlock title="Dicionário de dados">
        <p>
          O dicionário de dados é o catálogo interno do Oracle. Ele descreve objetos, usuários, privilégios,
          constraints, tablespaces e espaço alocado. O servidor o atualiza automaticamente quando comandos DDL são
          executados. Ele pertence ao usuário `SYS`, fica na tablespace `SYSTEM` e deve ser consultado, não alterado
          manualmente.
        </p>
        <p>
          As famílias `DBA_xxx`, `ALL_xxx` e `USER_xxx` mudam o escopo da consulta. Já as visões `V$` mostram o que
          está acontecendo agora na instância, sendo essenciais para diagnóstico operacional.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={dicionarioItems} />

      <CodeBlock>{`SELECT instance_name, status, startup_time
FROM v$instance;

SELECT name, open_mode, log_mode
FROM v$database;

SELECT name, value
FROM v$spparameter
WHERE value IS NOT NULL;

SELECT banner
FROM v$version;`}</CodeBlock>

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent4">Monitoramento operacional</h3>
        <ColoredPanelList items={monitoramentoItems} />
        <CodeBlock>{`EXEC DBMS_STATS.GATHER_SCHEMA_STATS('HR', CASCADE => TRUE);

SELECT * FROM dba_objects WHERE status = 'INVALID';
SELECT * FROM dba_indexes WHERE status = 'UNUSABLE';

SELECT blocking_session, sid, serial#, wait_class, seconds_in_wait
FROM v$session
WHERE blocking_session IS NOT NULL
ORDER BY blocking_session;

SELECT event, COUNT(*) sessions
FROM v$session_wait
WHERE state = 'WAITING'
GROUP BY event
ORDER BY 2 DESC;`}</CodeBlock>
      </div>

      <TheoryBlock title="Exemplos de resposta a problemas operacionais">
        <p>
          Se uma tabela ficou `INVALID`, a ação costuma ser recompilar ou recriar o objeto afetado. Se um índice ficou
          `UNUSABLE`, a consequência prática é perda do benefício do índice até um `REBUILD`. Se há sessões bloqueadas,
          o DBA precisa decidir entre esperar, agir na aplicação ou matar a sessão ofensora de forma controlada.
        </p>
        <p>
          Em operações demoradas, monitorar progresso é melhor do que agir por ansiedade. Um `ALTER INDEX ... REBUILD`
          ou um backup RMAN pode estar saudável e apenas consumindo tempo. Nesses cenários, `V$SESSION_LONGOPS`
          fornece visibilidade mais útil do que olhar apenas para sessões ativas.
        </p>
      </TheoryBlock>

      <CodeBlock>{`SELECT opname, sid, serial#, sofar, totalwork,
       ROUND(sofar / totalwork * 100, 2) AS pct_concluido,
       time_remaining
FROM v$session_longops
WHERE totalwork > 0;

ALTER SYSTEM KILL SESSION 'SID,SERIAL#';`}</CodeBlock>

      <TheoryBlock title="AWR, ADDM e advisors">
        <p>
          O AWR é o repositório histórico de estatísticas do Oracle. Snapshots periódicos permitem comparar períodos,
          entender carga de trabalho e investigar degradação. O ADDM usa snapshots do AWR para identificar gargalos e
          priorizar recomendações com foco em reduzir `DB Time`, que combina tempo de CPU e tempo de espera das
          sessões.
        </p>
        <p>
          Por trás disso, processos como `MMON` e `MMNL` coletam e descarregam métricas. A disponibilidade desses
          recursos depende de parâmetros como `STATISTICS_LEVEL` e `CONTROL_MANAGEMENT_PACK_ACCESS`, que controlam o
          quanto o Oracle mede e quais pacotes de diagnóstico/tuning ficam habilitados.
        </p>
        <p>
          Os advisors especializam esse diagnóstico: SQL Tuning Advisor olha SQL problemático, SQL Access Advisor
          sugere estruturas de acesso, MTTR Advisor trata tempo de recuperação, Memory Advisor apoia SGA/PGA, Segment
          Advisor aponta desperdício de espaço e Undo Management Advisor ajuda a dimensionar UNDO.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={advisorItems} />

      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl text-accent5">Relatório e recomendações</h3>
        <CodeBlock>{`-- Relatorio AWR via SQL*Plus
@?/rdbms/admin/awrrpt.sql

SELECT snap_id, begin_interval_time, end_interval_time
FROM dba_hist_snapshot
ORDER BY snap_id DESC;

-- Visoes com resultados dos advisors
SELECT * FROM dba_advisor_tasks;
SELECT * FROM dba_advisor_findings;
SELECT * FROM dba_advisor_recommendations;
SELECT * FROM dba_advisor_actions;
SELECT * FROM dba_advisor_rationale;`}</CodeBlock>
      </div>

      <TheoryBlock title="Oracle Net e conexões">
        <p>
          Antes de administrar startup e shutdown, é preciso entender como as conexões chegam. O Listener escuta
          conexões remotas e normalmente usa a porta 1521. O cliente pode resolver o destino por `tnsnames.ora`, por
          `EZCONNECT` ou por parâmetros globais em `sqlnet.ora`. Quando uma conexão falha, o diagnóstico começa pelo
          servidor e depois passa para cliente, rede, listener e variável `TNS_ADMIN`.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={networkItems} />

      <PanelList
        items={[
          {
            title: 'Diagnóstico no servidor',
            description: 'Confirmar se a instância sobe localmente e se o Listener está ativo antes de culpar a rede.',
          },
          {
            title: 'Diagnóstico no cliente',
            description: 'Testar alias, hostname, porta, service name e diretório apontado por TNS_ADMIN.',
          },
          {
            title: 'Local Naming',
            description: 'Usa tnsnames.ora para mapear um apelido de conexão para host, porta e service name.',
          },
          {
            title: 'EZCONNECT',
            description: 'Evita arquivo local e conecta direto com usuario/senha@host:porta/servicename.',
          },
        ]}
      />

      <CodeBlock>{`lsnrctl start
lsnrctl status
lsnrctl stop

CONNECT usuario/senha@MEU_ALIAS
CONNECT usuario/senha@hostname:1521/servicename`}</CodeBlock>

      <CodeBlock>{`ping hostname
tnsping MEU_ALIAS
traceroute hostname`}</CodeBlock>

      <TheoryBlock title="Startup e shutdown">
        <p>
          O `STARTUP` passa por etapas. Em `NOMOUNT`, o Oracle lê parâmetros, aloca SGA e inicia processos. Em
          `MOUNT`, abre control files e descobre a estrutura física. Em `OPEN`, abre datafiles e redo logs para
          operação normal. Essa progressão permite manutenção controlada, como restaurar backup em MOUNT ou criar um
          banco em NOMOUNT.
        </p>
        <p>
          Encerrar a instância também tem níveis. `NORMAL` espera usuários saírem, `TRANSACTIONAL` espera transações
          terminarem, `IMMEDIATE` faz rollback e encerra limpo, e `ABORT` derruba a instância de forma abrupta. Após
          `ABORT`, o SMON precisa executar crash recovery na próxima inicialização.
        </p>
      </TheoryBlock>

      <ColoredPanelList items={startupShutdownItems} />

      <CodeBlock>{`STARTUP;
STARTUP FORCE;
STARTUP MOUNT;
STARTUP OPEN READ ONLY;
STARTUP NOMOUNT;
STARTUP PFILE = /caminho/meu_pfile.ora;

ALTER DATABASE MOUNT;
ALTER DATABASE OPEN;

STARTUP RESTRICT;
ALTER SYSTEM ENABLE RESTRICTED SESSION;
ALTER SYSTEM DISABLE RESTRICTED SESSION;

SHUTDOWN IMMEDIATE;
SHUTDOWN ABORT;`}</CodeBlock>

      <TheoryBlock title="Alert log e eventos críticos">
        <p>
          O alert log é a narrativa cronológica da instância. Startup, shutdown, erros internos, mudanças
          administrativas relevantes e mensagens de background processes aparecem ali. Quando há falha séria, não basta
          olhar a mensagem da ferramenta cliente; o caminho mais confiável costuma começar no alert log e seguir para
          os trace files relacionados.
        </p>
      </TheoryBlock>

      <CodeBlock>{`SELECT * FROM v$diag_info WHERE name = 'Diag Trace';`}</CodeBlock>

      <TheoryBlock title="Gerenciamento em Multitenant">
        <p>
          Em ambientes CDB/PDB, `STARTUP` inicia o CDB, mas PDBs de usuário podem permanecer em `MOUNTED` até serem
          abertos explicitamente. O `PDB$SEED` sobe automaticamente como template, enquanto os PDBs reais precisam ser
          administrados com comandos `ALTER PLUGGABLE DATABASE`. Para manter um PDB abrindo após restart, usa-se
          `SAVE STATE`.
        </p>
      </TheoryBlock>

      <CodeBlock>{`CONNECT / AS SYSDBA
STARTUP;

ALTER PLUGGABLE DATABASE ALL OPEN;
ALTER PLUGGABLE DATABASE nome_do_pdb OPEN;
ALTER PLUGGABLE DATABASE ALL CLOSE IMMEDIATE;
ALTER PLUGGABLE DATABASE nome_do_pdb SAVE STATE;

SELECT name, open_mode FROM v$pdbs;`}</CodeBlock>
    </section>
  );
}

function StaticQuizSection() {
  return (
    <section className="animate-fade-in space-y-5">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Perguntas fixas baseadas nas fontes disponíveis: introdução, modelagem, armazenamento, desempenho, segurança e arquitetura."
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
        subtitle="Geração de perguntas inéditas com base no resumo dos tópicos documentados da matéria."
        colorClass="text-accent3"
      />
      <HighlightBox title="Escopo atual">
        <p>
          A IA foi limitada aos conteúdos presentes em .docs/apdb já implementados no guia, incluindo a seção de
          segurança, backup, recuperação e arquitetura Oracle.
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
    case 'armazenamento':
      return <ArmazenamentoSection />;
    case 'objetos':
      return <ObjetosSection />;
    case 'desempenho':
      return <DesempenhoSection />;
    case 'seguranca':
      return <SegurancaSection />;
    case 'arquitetura':
      return <ArquiteturaSection />;
    case 'quiz':
      return <StaticQuizSection />;
    case 'iaquiz':
      return <AIQuizSection />;
    default:
      return null;
  }
}
