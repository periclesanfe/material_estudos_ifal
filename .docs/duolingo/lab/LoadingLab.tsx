import { lazy, Suspense, useState, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import SectionNav, { type SectionNavItem } from '../components/layout/SectionNav';
import SubjectHero from '../components/layout/SubjectHero';
import { ComparisonTable } from '../components/sections';
import {
  Skeleton,
  SkeletonCartaoMateria,
  SkeletonCatalogoMaterias,
  SkeletonComLimiar,
  SkeletonLinha,
  SkeletonPaginaMateria,
  SkeletonParagrafo,
  SkeletonTabela,
} from '../components/ui/Skeleton';
import { getSubjectBySlug, type Subject } from '../data/curriculum';
import {
  LIMIAR_ESQUELETO_MS,
  MINIMO_ESQUELETO_MS,
  useEsqueletoVisivel,
} from '../hooks/useEsqueletoVisivel';
import { ATRASO_INTENCAO_MS, usePrefetchRota } from '../hooks/usePrefetchRota';

/* ═══════════════════════════════════════════════════════════════════════════
   LOADING LAB

   Bancada dos primitivos de carregamento. Cada esqueleto aparece ao lado do
   conteúdo real que ele substitui, porque é a única forma de verificar a coisa
   que importa num esqueleto: se a troca move a página ou não.

   NÃO ESTÁ INTEGRADA. A página não tem rota. Para abrir, uma linha em App.tsx:

     <Route path="/loading-lab" element={<LoadingLab />} />

   Integrar de verdade (trocar o spinner de SubjectPage pelo esqueleto, pendurar
   o prefetch na sidebar e no catálogo) é decisão de quem for revisar, não deste
   protótipo.
   ═══════════════════════════════════════════════════════════════════════════ */

/** Matéria de verdade, para o cartão real ter nome e carga horária de verdade. */
const MATERIA_EXEMPLO: Subject | undefined = getSubjectBySlug('estrutura-dados');

const SECOES_EXEMPLO: SectionNavItem[] = [
  { id: 'intro', shortTitle: 'Introdução' },
  { id: 'listas', shortTitle: 'Listas' },
  { id: 'pilhas', shortTitle: 'Pilhas' },
  { id: 'filas', shortTitle: 'Filas' },
  { id: 'arvores', shortTitle: 'Árvores' },
];

const LINHAS_TABELA = [
  { criterion: 'Acesso por índice', left: 'O(1)', right: 'O(n)' },
  { criterion: 'Inserção no início', left: 'O(n)', right: 'O(1)' },
  { criterion: 'Memória por elemento', left: 'só o dado', right: 'dado mais ponteiro' },
];

function esperar(ms: number): Promise<void> {
  return new Promise(resolve => {
    window.setTimeout(resolve, ms);
  });
}

/** Conteúdo do módulo tardio da demonstração de Suspense. */
function ConteudoTardio() {
  return (
    <div className="study-surface p-5">
      <p className="text-sm text-text">Módulo carregado.</p>
      <p className="mt-2 text-xs text-text-muted">
        Monte de novo: agora resolve no primeiro quadro e o esqueleto não aparece, porque o módulo
        já está na memória. É o mesmo efeito que o prefetch produz antes do clique.
      </p>
    </div>
  );
}

/**
 * Módulo tardio simulado.
 *
 * A espera é artificial, o mecanismo é real: `lazy` guarda a promessa, o Suspense
 * mostra o fallback enquanto ela não resolve e a desmonta quando resolve. Como o
 * componente vive neste arquivo, não há chunk separado: quem quiser ver a divisão
 * real de chunk é a demonstração de prefetch mais abaixo, que aquece a /trilha.
 */
const ConteudoTardioLazy = lazy(async () => {
  await esperar(1400);
  return { default: ConteudoTardio };
});

function Rotulo({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">{children}</p>
  );
}

function Coluna({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <Rotulo>{rotulo}</Rotulo>
      <div className="rounded-lg border border-dashed border-border p-4">{children}</div>
    </div>
  );
}

interface VitrineProps {
  titulo: string;
  nota: string;
  esqueleto: ReactNode;
  real: ReactNode;
}

/** Uma forma, duas colunas: esqueleto à esquerda, conteúdo real à direita. */
function Vitrine({ titulo, nota, esqueleto, real }: VitrineProps) {
  return (
    <section className="study-surface p-6 md:p-7">
      <h2 className="font-display text-xl font-bold tracking-tight text-text">{titulo}</h2>
      <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">{nota}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Coluna rotulo="Esqueleto">{esqueleto}</Coluna>
        <Coluna rotulo="Conteúdo real">{real}</Coluna>
      </div>
    </section>
  );
}

/** Cartão do catálogo, na marcação de SubjectCatalog, para a comparação ser honesta. */
function CartaoMateriaReal({ subject }: { subject: Subject }) {
  const periodo = subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`;

  return (
    <NavLink
      to={`/materia/${subject.slug}`}
      className="study-surface study-surface-hover group flex min-h-[78px] items-center justify-between px-4 py-3.5"
    >
      <div className="min-w-0">
        <h3 className="break-words text-sm font-semibold text-text transition-colors group-hover:text-accent md:text-base">
          {subject.name}
        </h3>
        <p className="mt-0.5 text-xs text-text-muted md:text-sm">
          {periodo} · {subject.hours}h · {subject.code}
        </p>
      </div>
      <span
        className={`ml-3 shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
          subject.hasContent ? 'bg-accent/10 text-accent' : 'bg-card-hover text-text-muted'
        }`}
      >
        {subject.hasContent ? 'Com conteúdo' : 'Pendente'}
      </span>
    </NavLink>
  );
}

/**
 * Demonstração do limiar.
 *
 * Dois botões, duas respostas: uma abaixo do limiar e uma bem acima. O painel
 * mostra o que o usuário veria, e o registro guarda o que aconteceu, porque a
 * prova de que o esqueleto NÃO piscou é justamente não ter nada para ver.
 */
function DemoLimiar() {
  const [carregando, setCarregando] = useState(false);
  const [resposta, setResposta] = useState<string | null>(null);
  const [registro, setRegistro] = useState<string[]>([]);
  const mostrarEsqueleto = useEsqueletoVisivel(carregando);

  const simular = (ms: number) => {
    setCarregando(true);
    setResposta(null);
    window.setTimeout(() => {
      setCarregando(false);
      setResposta(`Resposta em ${ms} ms.`);
      setRegistro(anterior =>
        [
          ms < LIMIAR_ESQUELETO_MS
            ? `${ms} ms: rápido demais para esqueleto, a tela não mudou`
            : `${ms} ms: esqueleto entrou em ${LIMIAR_ESQUELETO_MS} ms e ficou no mínimo ${MINIMO_ESQUELETO_MS} ms`,
          ...anterior,
        ].slice(0, 4),
      );
    }, ms);
  };

  return (
    <section className="study-surface p-6 md:p-7">
      <h2 className="font-display text-xl font-bold tracking-tight text-text">
        Limiar de {LIMIAR_ESQUELETO_MS} ms
      </h2>
      <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">
        Esqueleto que aparece para tudo pisca. Aqui ele só entra se a espera passar de{' '}
        {LIMIAR_ESQUELETO_MS} ms e, uma vez dentro, fica no mínimo {MINIMO_ESQUELETO_MS} ms, senão o
        dado que chega em {LIMIAR_ESQUELETO_MS + 10} ms produziria o mesmo lampejo que o limiar
        tentava evitar.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => simular(90)} className="btn-secondary px-4 py-2 text-xs">
          Responder em 90 ms
        </button>
        <button type="button" onClick={() => simular(1200)} className="btn-primary px-4 py-2 text-xs">
          Responder em 1200 ms
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="min-w-0">
          <Rotulo>Painel</Rotulo>
          <div className="min-h-[9rem] rounded-lg border border-dashed border-border p-4">
            {mostrarEsqueleto ? (
              <div role="status" aria-busy="true">
                <span className="sr-only">Carregando</span>
                <SkeletonLinha largura="45%" altura="0.95rem" />
                <SkeletonParagrafo linhas={3} className="mt-4" />
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-text">{resposta ?? 'Aguardando comando.'}</p>
                <p className="mt-2 text-xs text-text-muted">
                  Enquanto a espera é curta, o painel fica como está: nada de espaço reservado, nada
                  de cinza.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <Rotulo>O que aconteceu</Rotulo>
          <div className="min-h-[9rem] rounded-lg border border-dashed border-border p-4">
            <p className="font-mono text-[11px] text-text-muted">
              carregando: {carregando ? 'sim' : 'não'} · esqueleto em tela:{' '}
              {mostrarEsqueleto ? 'sim' : 'não'}
            </p>
            <ul className="mt-3 space-y-1.5">
              {registro.length === 0 && (
                <li className="text-xs text-text-muted">Nenhuma simulação ainda.</li>
              )}
              {registro.map((linha, indice) => (
                <li key={`${linha}-${indice}`} className="text-xs text-text-muted">
                  {linha}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Suspense de verdade, com o esqueleto atrás do limiar. */
function DemoSuspense() {
  const [montado, setMontado] = useState(false);

  return (
    <section className="study-surface p-6 md:p-7">
      <h2 className="font-display text-xl font-bold tracking-tight text-text">
        Suspense com esqueleto atrasado
      </h2>
      <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">
        O fallback monta no instante em que o componente suspende, então o relógio do{' '}
        <code className="font-mono text-xs">SkeletonComLimiar</code> começa junto com a espera. Se o
        módulo chegasse em 100 ms, o fallback sairia sem ter pintado nada.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMontado(true)}
          disabled={montado}
          className="btn-primary px-4 py-2 text-xs disabled:opacity-40"
        >
          Montar módulo tardio
        </button>
        <button
          type="button"
          onClick={() => setMontado(false)}
          className="btn-secondary px-4 py-2 text-xs"
        >
          Desmontar
        </button>
      </div>

      <div className="mt-5 min-h-[7rem]">
        {montado ? (
          <Suspense
            fallback={
              <SkeletonComLimiar>
                <div role="status" aria-busy="true">
                  <span className="sr-only">Carregando módulo</span>
                  <SkeletonLinha largura="38%" altura="0.9rem" />
                  <SkeletonParagrafo linhas={2} className="mt-4" />
                </div>
              </SkeletonComLimiar>
            }
          >
            <ConteudoTardioLazy />
          </Suspense>
        ) : (
          <p className="text-xs text-text-muted">Módulo desmontado.</p>
        )}
      </div>
    </section>
  );
}

/** Prefetch da /trilha no hover e no foco, contra um link que não aquece nada. */
function DemoPrefetch() {
  const prefetch = usePrefetchRota('/trilha', () => import('./TrilhaPage'));

  const rotulos: Record<typeof prefetch.estado, string> = {
    ocioso: 'ocioso, nada baixado',
    aquecendo: 'baixando o chunk da trilha',
    pronto: 'pronto, o clique não vai esperar',
    falhou: 'falhou, o clique vai tentar de novo',
  };

  return (
    <section className="study-surface p-6 md:p-7">
      <h2 className="font-display text-xl font-bold tracking-tight text-text">
        Prefetch no hover e no foco
      </h2>
      <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">
        A /trilha é o maior chunk do projeto, cerca de 145 kB comprimidos, porque carrega a
        taxonomia inteira. Hoje o download começa no clique e o usuário encara o fallback. Passe o
        mouse pelo primeiro link, ou chegue nele com Tab, e veja o estado mudar {ATRASO_INTENCAO_MS}{' '}
        ms depois. Abra a aba de rede do navegador para ver que o segundo link não pede nada.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <NavLink to="/trilha" {...prefetch.atributos} className="btn-primary px-4 py-2 text-xs">
          Trilha (com prefetch)
        </NavLink>
        <NavLink to="/trilha" className="btn-secondary px-4 py-2 text-xs">
          Trilha (sem prefetch)
        </NavLink>
        <span className="font-mono text-[11px] text-text-muted">{rotulos[prefetch.estado]}</span>
      </div>

      <ul className="mt-5 space-y-1.5 text-xs text-text-muted">
        <li>
          A espera de {ATRASO_INTENCAO_MS} ms separa o mouse que passou do mouse que parou. Sem ela,
          atravessar a sidebar do curso baixaria meio site.
        </li>
        <li>Save-Data ligado ou rede 2G cancelam o palpite: a banda é do usuário.</li>
        <li>
          Aquece código, não dado. A busca que a página faz ao montar continua existindo, e é ela
          que o esqueleto cobre.
        </li>
      </ul>
    </section>
  );
}

/** Painel das decisões, para quem revisa não precisar abrir o código. */
function Decisoes() {
  const itens = [
    {
      titulo: 'Sem shimmer',
      texto:
        'Shimmer é uma faixa de luz em laço infinito: movimento que se nota apontando para nada, com 1,2s a 2s por passada contra o teto de 350 ms do sistema, gradiente que exige cor fora dos tokens e repintura constante em cada bloco. No lugar entra a pulsação lenta de opacidade, no token animate-pulse-soft que o projeto já declarava e ninguém usava.',
    },
    {
      titulo: 'Pulsação em CSS, não em Motion',
      texto:
        'O bloco prefers-reduced-motion do index.css zera a duração de qualquer animação CSS, então quem pede movimento reduzido recebe um bloco parado sem uma linha de JavaScript. Feita com Motion, a pulsação seria estilo em linha e escaparia da regra de mídia.',
    },
    {
      titulo: `Limiar de ${LIMIAR_ESQUELETO_MS} ms e permanência de ${MINIMO_ESQUELETO_MS} ms`,
      texto:
        'Abaixo do limiar não aparece nada, porque o lampejo cinza parece defeito. Acima dele o esqueleto fica o suficiente para ser lido como estado. Em Suspense só o atraso é aplicável, já que quem desmonta o fallback é o React.',
    },
    {
      titulo: 'Geometria antes de aparência',
      texto:
        'Cada forma copia as medidas do componente que substitui (min-h-[78px] do cartão, a caixa de vidro das abas, o clamp do título da matéria). Esqueleto de tamanho errado troca a espera por um salto de layout.',
    },
    {
      titulo: 'Esqueleto não é alvo',
      texto:
        'Nenhuma forma recebe hover, foco ou tabindex, e só o composto de página é região viva, com um anúncio único. Dez placeholders focáveis viram armadilha de teclado, e trinta regiões vivas fazem o leitor de tela falar trinta vezes.',
    },
  ];

  return (
    <section className="study-surface p-6 md:p-7">
      <h2 className="section-title text-accent">Decisões</h2>
      <dl className="mt-5 space-y-4">
        {itens.map(item => (
          <div key={item.titulo}>
            <dt className="text-sm font-semibold text-text">{item.titulo}</dt>
            <dd className="reading-measure mt-1 text-xs leading-relaxed text-text-muted">
              {item.texto}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function LoadingLab() {
  const [secaoAtiva, setSecaoAtiva] = useState('intro');

  return (
    <div className="page-wrap content-stack py-10 md:py-12">
      <header className="border-b border-rule pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
          protótipo, sem rota no aplicativo
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-text">
          Loading Lab
        </h1>
        <p className="reading-measure mt-4 text-base leading-relaxed text-text-muted">
          Os primitivos de carregamento ao lado do conteúdo que eles substituem. A pergunta que esta
          página responde não é se o esqueleto é bonito, é se a troca move a página.
        </p>
      </header>

      <Decisoes />

      <DemoLimiar />

      <Vitrine
        titulo="Linha de texto"
        nota="A altura é a da mancha de tinta, não a da caixa de linha: com line-height 1.7 a caixa tem 27 px e a letra ocupa perto de 60% disso. Na altura da caixa, o esqueleto fica mais gordo que o texto."
        esqueleto={
          <div className="space-y-3">
            <SkeletonLinha largura="100%" />
            <SkeletonLinha largura="62%" />
          </div>
        }
        real={
          <p className="text-base leading-relaxed text-text">
            Estruturas de dados lineares guardam elementos em sequência.
            <br />
            Cada uma paga um preço diferente.
          </p>
        }
      />

      <Vitrine
        titulo="Bloco de parágrafo"
        nota="Larguras fixas, nunca sorteadas: largura aleatória muda a cada renderização e o bloco tremeria enquanto o dado não chega. A última linha é curta de propósito, porque é isso que faz o bloco ser lido como prosa."
        esqueleto={<SkeletonParagrafo linhas={4} />}
        real={
          <p className="text-base leading-relaxed text-text">
            Uma lista encadeada troca acesso por índice por inserção barata: para chegar ao
            enésimo elemento é preciso percorrer os anteriores, mas inserir no início custa um
            ponteiro. O vetor faz o contrário, e é por isso que a escolha entre os dois é sobre a
            operação frequente, não sobre qual é melhor.
          </p>
        }
      />

      <Vitrine
        titulo="Cartão de matéria"
        nota="Espelha o cartão do catálogo, inclusive o min-h-[78px] e o selo à direita. O esqueleto não recebe study-surface-hover: cartão que levanta no hover promete uma interação que ainda não existe."
        esqueleto={<SkeletonCartaoMateria />}
        real={
          MATERIA_EXEMPLO ? (
            <CartaoMateriaReal subject={MATERIA_EXEMPLO} />
          ) : (
            <p className="text-xs text-text-muted">Matéria de exemplo não encontrada.</p>
          )
        }
      />

      <Vitrine
        titulo="Grade do catálogo"
        nota="A mesma malha do catálogo (uma coluna, duas no md). Quatro cartões bastam: esqueleto que imita a lista inteira vira parede cinza e o usuário para de entender que aquilo é espera."
        esqueleto={<SkeletonCatalogoMaterias quantidade={4} />}
        real={
          MATERIA_EXEMPLO ? (
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              <CartaoMateriaReal subject={MATERIA_EXEMPLO} />
              <CartaoMateriaReal subject={MATERIA_EXEMPLO} />
              <CartaoMateriaReal subject={MATERIA_EXEMPLO} />
              <CartaoMateriaReal subject={MATERIA_EXEMPLO} />
            </div>
          ) : (
            <p className="text-xs text-text-muted">Matéria de exemplo não encontrada.</p>
          )
        }
      />

      <Vitrine
        titulo="Linha de tabela"
        nota="SkeletonLinhaTabela devolve <tr>, então precisa estar dentro de <tbody>: uma div entre tbody e tr é HTML inválido e o navegador joga o nó para fora da tabela, o que destrói o alinhamento das colunas exatamente no estado de carregamento."
        esqueleto={<SkeletonTabela linhas={3} colunas={3} />}
        real={
          <ComparisonTable
            rows={LINHAS_TABELA}
            leftLabel="Vetor"
            rightLabel="Lista encadeada"
            criterionLabel="Critério"
          />
        }
      />

      <section className="study-surface p-6 md:p-7">
        <h2 className="font-display text-xl font-bold tracking-tight text-text">
          Página de matéria
        </h2>
        <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">
          O que hoje é um círculo girando de 8 px onde vai entrar uma página inteira. Empilhado e
          não em duas colunas porque a peça é de largura total: role de uma para a outra e observe
          que o sobrescrito, o título, a régua e a fileira de abas caem na mesma altura. O
          conteúdo real abaixo usa os componentes de verdade, SubjectHero e SectionNav.
        </p>

        <div className="mt-6">
          <Rotulo>Esqueleto</Rotulo>
          <div className="overflow-hidden rounded-lg border border-dashed border-border">
            <SkeletonPaginaMateria />
          </div>
        </div>

        <div className="mt-6">
          <Rotulo>Conteúdo real</Rotulo>
          <div className="overflow-hidden rounded-lg border border-dashed border-border">
            <SubjectHero
              eyebrow="4º Período · 80h · ESTD"
              title="Estrutura de Dados"
              description="Como o dado é guardado muda o custo de tudo que se faz com ele. O curso trata das estruturas lineares, das árvores e do custo de cada operação."
            />
            <div className="flex flex-col gap-2 px-4 pt-5 sm:flex-row sm:items-stretch">
              <button type="button" className="btn-primary shrink-0 px-4 py-2 text-sm">
                Modo Prova
              </button>
              <SectionNav
                sections={SECOES_EXEMPLO}
                activeSection={secaoAtiva}
                onSelect={setSecaoAtiva}
              />
            </div>
            <div className="content-stack px-4 pb-10 pt-10">
              <section className="study-surface p-6 md:p-7">
                <h3 className="font-display text-lg font-bold text-text">O que é uma estrutura</h3>
                <p className="mt-4 text-base leading-relaxed text-text">
                  Uma estrutura de dados é um acordo sobre onde cada coisa fica, e todo acordo tem
                  preço: o que fica barato de um lado fica caro do outro.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <DemoSuspense />

      <DemoPrefetch />

      <section className="study-surface p-6 md:p-7">
        <h2 className="font-display text-xl font-bold tracking-tight text-text">
          Pulsação isolada
        </h2>
        <p className="reading-measure mt-2 text-sm leading-relaxed text-text-muted">
          O primitivo cru, para conferir a tinta nos três temas (escuro, claro e modo de leitura).
          Ligue movimento reduzido no sistema e recarregue: os blocos param sem que nenhuma linha
          de JavaScript participe da decisão.
        </p>
        <div className="mt-5 flex flex-wrap items-end gap-3">
          <Skeleton largura="6rem" altura="6rem" raio="var(--radius-lg)" />
          <Skeleton largura="10rem" altura="2.5rem" />
          <Skeleton largura="7rem" altura="1.35rem" raio="var(--radius-full)" />
          <SkeletonLinha largura="12rem" />
        </div>
      </section>
    </div>
  );
}
