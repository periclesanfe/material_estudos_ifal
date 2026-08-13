import type { ReactNode } from 'react';
import { LIMIAR_ESQUELETO_MS, useEsqueletoVisivel } from '../../hooks/useEsqueletoVisivel';

/* ═══════════════════════════════════════════════════════════════════════════
   ESQUELETO DE CARREGAMENTO

   ADAPTAÇÃO, NÃO INVENÇÃO. O sistema canônico (~/Projects/frontend-falcao,
   src/components/ui/Skeleton.tsx) tem um primitivo de quatro linhas:
   `animate-pulse rounded-lg bg-bg-glass`. Aqui ele continua sendo o mesmo
   primitivo, só com as FORMAS que este projeto pede em volta.

   Por que formas e não um retângulo genérico: o valor de um esqueleto não está
   em avisar que algo carrega, está em ocupar a geometria exata do conteúdo que
   vem depois. Esqueleto de tamanho errado troca a espera por um salto de layout,
   e aí o remédio virou doença.

   DUAS ADAPTAÇÕES OBRIGATÓRIAS em relação ao canônico:

   1. `bg-bg-glass` não existe neste projeto e, se existisse, não serviria: o
      token --bg-glass no tema claro é rgba(246,247,250,0.72), praticamente a cor
      do próprio cartão (#f6f7fa). O esqueleto ficaria invisível no claro. A
      tinta daqui é derivada do texto com color-mix, então inverte junto com o
      tema e mantém o mesmo peso percebido no escuro, no claro e no modo limpo.

   2. `animate-pulse` do Tailwind (opacidade 1 → 0.5) virou `animate-pulse-soft`,
      que é o token que este projeto já declarava no @theme e que nenhum arquivo
      usava: 2s, ease-in-out, 1 → 0.7. Amplitude menor, porque o bloco tem que
      respirar e não chamar.

   ─────────────────────────────────────────────────────────────────────────────
   DECISÃO SOBRE SHIMMER: NÃO TEM SHIMMER. Quatro razões, na ordem do peso:

   a) O movimento deste projeto é mecânico, não decorativo (src/lib/movimento.ts).
      Shimmer é uma faixa de luz viajando em laço infinito: movimento que se
      nota, apontando para nada. É o oposto da regra da casa, que é "movimento
      que se nota é movimento errado".

   b) Duração. O Non-Negotiable do sistema é nunca passar de 350 ms, e shimmer
      convincente pede 1,2s a 2s por passada, para sempre. Um laço infinito não
      é uma exceção ao teto de duração: é o teto ignorado.

   c) Cor. Shimmer é gradiente, e gradiente exige paradas de cor explícitas
      (rgba fixo) que não existem como token. Seria hex na mão dentro do
      componente, que o sistema proíbe, e quebraria nos três temas.

   d) Custo. A faixa anima `background-position` ou `transform` em cada bloco;
      numa grade de 20 cartões são 20 elementos repintando sem parar enquanto o
      usuário espera, justamente quando a CPU está ocupada com o parse do chunk
      que ele pediu.

   O que fica no lugar: a pulsação lenta de opacidade, em CSS. É CSS de propósito.
   O bloco `@media (prefers-reduced-motion: reduce)` do index.css zera a duração
   de toda animação, então quem pede movimento reduzido recebe um bloco cinza
   parado, sem nenhuma linha de JavaScript a mais. Se a pulsação fosse feita com
   Motion, ela escaparia da regra de mídia (é estilo em linha) e precisaria do
   useMovimentoReduzido para ser desligada, como o próprio hook documenta.
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Tinta do esqueleto: 9% da cor do texto sobre o que estiver atrás.
 *
 * Derivada do texto e não de um token de superfície porque assim ela inverte
 * sozinha nos três temas e mantém o contraste baixo e constante. 9% dá um bloco
 * legível e mudo: acima de ~14% o esqueleto começa a parecer conteúdo de
 * verdade, e o usuário tenta ler.
 */
const TINTA_ESQUELETO = 'color-mix(in srgb, var(--color-text) 9%, transparent)';

interface SkeletonProps {
  /** Classes de layout (margem, flex, visibilidade). Cor e forma vêm das props. */
  className?: string;
  /** Comprimento CSS. Aceita %, rem, clamp(). */
  largura?: string;
  /** Altura CSS. Aceita %, rem, clamp(). */
  altura?: string;
  /**
   * Raio do canto. Prefira um token --radius-*; raio é geometria e não cor, então
   * valor cru é aceitável quando nenhum token serve, como no 2px da linha de
   * texto (o menor token, --radius-sm, tem 6px e transformaria uma linha de 12px
   * numa cápsula).
   */
  raio?: string;
}

/**
 * Primitivo base: um bloco de tinta que pulsa.
 *
 * É `<span>` com `display: block` e não `<div>` para poder aparecer dentro de
 * `<p>`, `<h1>` e `<td>` sem gerar HTML inválido, o que acontece direto quando o
 * esqueleto imita texto.
 *
 * Forma e tamanho vêm por props em CSS, não por classe do Tailwind, porque duas
 * classes de raio ou de altura na mesma pilha vencem por ordem na folha gerada e
 * não pela ordem em que foram escritas. Com style o resultado é determinístico.
 *
 * `aria-hidden` porque bloco de tinta não é conteúdo. Quem anuncia a espera é o
 * composto de página, uma vez, em `role="status"`.
 */
export function Skeleton({ className = '', largura, altura, raio = 'var(--radius-md)' }: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className={`block animate-pulse-soft ${className}`}
      style={{ backgroundColor: TINTA_ESQUELETO, width: largura, height: altura, borderRadius: raio }}
    />
  );
}

interface SkeletonLinhaProps {
  largura?: string;
  /**
   * Altura da MANCHA de tinta, não da caixa de linha.
   *
   * Uma linha de 16px com line-height 1.7 ocupa 27px de caixa, mas a tinta da
   * letra ocupa perto de 60% disso. Esqueleto na altura da caixa fica mais gordo
   * que o texto que substitui, e a página parece pesar mais carregando do que
   * carregada.
   */
  altura?: string;
  className?: string;
}

/** Linha de texto. */
export function SkeletonLinha({ largura = '100%', altura = '0.85rem', className = '' }: SkeletonLinhaProps) {
  // Raio de 2px: linha de texto é tipografia, não cápsula. Cápsula (--radius-full)
  // fica reservada para o que é cápsula de verdade, como o selo do cartão.
  return <Skeleton className={className} largura={largura} altura={altura} raio="2px" />;
}

/**
 * Larguras do parágrafo.
 *
 * Fixas, não aleatórias. Largura sorteada muda a cada renderização, então o
 * esqueleto tremeria a cada ciclo do React enquanto o dado não chega, e ainda
 * ficaria impossível de comparar em teste visual.
 */
const LARGURAS_PARAGRAFO = ['100%', '97%', '93%', '99%', '95%'];

interface SkeletonParagrafoProps {
  linhas?: number;
  className?: string;
}

/**
 * Bloco de parágrafo.
 *
 * A última linha é curta de propósito: é o que faz o bloco ser lido como prosa e
 * não como tabela. Sem isso o retângulo perfeito parece um campo vazio.
 */
export function SkeletonParagrafo({ linhas = 3, className = '' }: SkeletonParagrafoProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: linhas }, (_, indice) => (
        <SkeletonLinha
          key={indice}
          largura={
            indice === linhas - 1 && linhas > 1
              ? '62%'
              : LARGURAS_PARAGRAFO[indice % LARGURAS_PARAGRAFO.length]
          }
        />
      ))}
    </div>
  );
}

/**
 * Cartão de matéria, na geometria do cartão do catálogo.
 *
 * Espelha o `min-h-[78px]`, o `px-4 py-3.5` e as duas linhas de texto com o selo
 * à direita de SubjectCatalog, para a troca não mover nada.
 *
 * Não recebe `study-surface-hover` nem `tabIndex`: esqueleto não é alvo. Cartão
 * que levanta no hover enquanto carrega promete uma interação que não existe, e
 * o Tab paginando por dez placeholders é armadilha de teclado.
 */
export function SkeletonCartaoMateria({ className = '' }: { className?: string }) {
  return (
    <div className={`study-surface flex min-h-[78px] items-center justify-between px-4 py-3.5 ${className}`}>
      <div className="min-w-0 flex-1">
        <SkeletonLinha largura="72%" altura="1rem" />
        <SkeletonLinha largura="46%" altura="0.75rem" className="mt-2.5" />
      </div>
      <Skeleton className="ml-3 shrink-0" largura="5.5rem" altura="1.35rem" raio="var(--radius-full)" />
    </div>
  );
}

/** Grade de cartões, na mesma malha do catálogo (uma coluna, duas no md). */
export function SkeletonCatalogoMaterias({ quantidade = 4 }: { quantidade?: number }) {
  return (
    <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
      {Array.from({ length: quantidade }, (_, indice) => (
        <SkeletonCartaoMateria key={indice} />
      ))}
    </div>
  );
}

/**
 * Larguras por coluna da tabela: critério curto, dois lados longos.
 * Espelha a proporção de ComparisonTable, cuja primeira coluna é `w-1/4`.
 */
const LARGURAS_CELULA = ['70%', '92%', '84%'];

/**
 * Linha de tabela.
 *
 * Devolve `<tr>`, então precisa estar dentro de `<tbody>`: `<div>` entre tbody e
 * tr é HTML inválido e o navegador reordena o nó para fora da tabela, o que
 * destrói o alinhamento das colunas justamente no estado de carregamento.
 */
export function SkeletonLinhaTabela({ colunas = 3 }: { colunas?: number }) {
  return (
    <tr className="border-b border-border/50 last:border-0">
      {Array.from({ length: colunas }, (_, indice) => (
        <td key={indice} className="px-4 py-3">
          <SkeletonLinha
            largura={LARGURAS_CELULA[indice % LARGURAS_CELULA.length]}
            altura="0.7rem"
          />
        </td>
      ))}
    </tr>
  );
}

interface SkeletonTabelaProps {
  linhas?: number;
  colunas?: number;
}

/** Tabela inteira, com cabeçalho, na moldura de ComparisonTable. */
export function SkeletonTabela({ linhas = 4, colunas = 3 }: SkeletonTabelaProps) {
  return (
    <div className="study-surface overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {Array.from({ length: colunas }, (_, indice) => (
              <th key={indice} className={`px-4 py-3 text-left ${indice === 0 ? 'w-1/4' : ''}`}>
                <SkeletonLinha largura={indice === 0 ? '4.5rem' : '6.5rem'} altura="0.6rem" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: linhas }, (_, indice) => (
            <SkeletonLinhaTabela key={indice} colunas={colunas} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Esqueleto da página de matéria.
 *
 * Substitui o `SubjectContentFallback` de SubjectPage, que hoje é um círculo
 * girando e a frase "Carregando conteúdo da matéria". O spinner tem dois
 * defeitos: não diz nada sobre o que vem (todo carregamento parece igual) e
 * ocupa 8px de altura onde vai entrar uma página de 2000px, então a chegada do
 * conteúdo é um salto.
 *
 * A geometria daqui é a de SubjectHero (page-wrap, régua embaixo, sobrescrito em
 * mono, título em clamp, descrição em medida de leitura), seguida da fileira de
 * abas de SectionNav e dos blocos de conteúdo. Quem trocar essas medidas precisa
 * trocar aqui também: é a única duplicação que este arquivo aceita, e ela existe
 * porque o esqueleto não pode montar os componentes reais (eles são o que ainda
 * não chegou).
 *
 * `role="status"` uma única vez, no composto: leitor de tela anuncia "carregando"
 * uma vez. Se cada linha fosse região viva, a página falaria trinta vezes.
 */
export function SkeletonPaginaMateria() {
  return (
    <div role="status" aria-busy="true">
      <span className="sr-only">Carregando conteúdo da matéria</span>

      {/* Abertura: mesma caixa do SubjectHero. */}
      <header className="page-wrap border-b border-rule pb-7 pt-10 md:pb-9 md:pt-14">
        <SkeletonLinha largura="11rem" altura="0.65rem" />
        <div className="mt-3 space-y-2.5">
          {/* Duas linhas porque título de matéria quase sempre quebra em duas.
              Altura em clamp acompanha o clamp do título real, reduzida à mancha. */}
          <SkeletonLinha largura="84%" altura="clamp(1.4rem, 3.1vw, 2.3rem)" />
          <SkeletonLinha largura="52%" altura="clamp(1.4rem, 3.1vw, 2.3rem)" />
        </div>
        <div className="reading-measure mt-5">
          <SkeletonParagrafo linhas={2} />
        </div>
        <SkeletonLinha largura="9rem" altura="0.6rem" className="mt-6" />
      </header>

      {/* Botão de modo prova mais a navegação de seções.
          A fileira de abas não é uma fileira solta: no SectionNav ela mora dentro
          de uma caixa de vidro com borda e px-3 py-3. O esqueleto repete a caixa,
          senão a altura do bloco muda quando o conteúdo chega. */}
      <div className="page-wrap flex flex-col gap-2 pt-5 sm:flex-row sm:items-stretch">
        <Skeleton className="shrink-0" largura="7.5rem" altura="2.5rem" />
        <div className="glass hidden min-w-0 flex-1 gap-2 rounded-xl border border-border px-3 py-3 sm:flex">
          {['5rem', '6.5rem', '4.5rem', '7rem', '5.5rem'].map(largura => (
            <Skeleton key={largura} largura={largura} altura="2.2rem" raio="var(--radius-full)" />
          ))}
        </div>
        {/* No mobile o SectionNav é um gatilho só, com duas linhas de texto dentro. */}
        <Skeleton className="sm:hidden" largura="100%" altura="3.4rem" raio="var(--radius-md)" />
      </div>

      {/* Corpo: dois blocos de seção no ritmo do content-stack. */}
      <div className="page-wrap content-stack pb-20 pt-10 md:pt-12">
        <section className="study-surface p-6 md:p-7">
          <SkeletonLinha largura="13rem" altura="0.95rem" />
          <SkeletonParagrafo linhas={4} className="mt-5" />
        </section>
        <section className="study-surface p-6 md:p-7">
          <SkeletonLinha largura="9rem" altura="0.95rem" />
          <SkeletonParagrafo linhas={3} className="mt-5" />
        </section>
      </div>
    </div>
  );
}

interface SkeletonComLimiarProps {
  /** Espera antes de pintar. Padrão: {@link LIMIAR_ESQUELETO_MS}. */
  atraso?: number;
  children: ReactNode;
}

/**
 * Só pinta o esqueleto se a espera passar do limiar.
 *
 * Feito para `Suspense`: o fallback monta no instante em que o componente
 * suspende, então o relógio deste componente começa junto com a espera. Se o
 * chunk chega antes do limiar, o fallback desmonta sem nunca ter pintado nada, e
 * o usuário vê a página aparecer inteira, sem lampejo cinza no meio.
 *
 * Limite honesto: aqui só o atraso é aplicável. Permanência mínima é impossível
 * de dentro de um fallback, porque quem decide desmontá-lo é o React no momento
 * em que a promessa resolve. Para carregamento com booleano próprio, use
 * `useEsqueletoVisivel`, que aplica atraso e permanência.
 *
 *   <Suspense fallback={<SkeletonComLimiar><SkeletonPaginaMateria /></SkeletonComLimiar>}>
 */
export function SkeletonComLimiar({ atraso = LIMIAR_ESQUELETO_MS, children }: SkeletonComLimiarProps) {
  const visivel = useEsqueletoVisivel(true, { atraso, minimo: 0 });

  if (!visivel) return null;

  return <>{children}</>;
}
