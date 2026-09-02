import { getEmentaPPC } from '../../data/ppc';

interface Props {
  /** Código da matéria, o mesmo de curriculum.ts. */
  codigo: string;
}

const ROTULO_PERIODO = (periodo: number | 'optativa') =>
  periodo === 'optativa' ? 'Optativa' : `${periodo}º período`;

/**
 * Ementa oficial do PPC, na abertura da matéria.
 *
 * Recolhido por padrão: é referência normativa, não a leitura principal. Uma
 * matéria como FNSI tem 12 unidades e EMPD tem 15, e abrir isso por cima do
 * conteúdo autoral empurraria o guia inteiro para baixo da dobra.
 *
 * Usa <details> nativo em vez de estado no React porque o conteúdo precisa
 * existir no DOM mesmo fechado: é assim que a busca do navegador acha um termo
 * da ementa e abre a seção sozinha. Um accordion com useState não renderiza o
 * texto fechado e perderia isso, além de exigir o trabalho de teclado e ARIA
 * que o <details> já traz de fábrica.
 *
 * Some quando a matéria não tem ficha no ementário, então não precisa de guarda
 * em quem chama.
 */
export default function EmentaPPC({ codigo }: Props) {
  const ementa = getEmentaPPC(codigo);
  if (!ementa) return null;

  const { codigoPPC, periodo, cargaHoraria, preRequisito, unidades } = ementa;
  // Uma unidade só significa que a ementa é uma frase corrida (PJSI, TOSI):
  // enumerá-la como lista de um item sugeriria uma estrutura que o PPC não tem.
  const unidadeUnica = unidades.length <= 1;

  return (
    <aside className="page-wrap pt-4">
      <details className="ementa-ppc group rounded-xl border border-border bg-card">
        <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1.5 px-5 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Ementa oficial do PPC</span>

          <span className="font-mono text-[11px] text-text-muted">
            {codigoPPC} · {ROTULO_PERIODO(periodo)} · <span className="tabular-nums">{cargaHoraria}h</span>
            {!unidadeUnica && (
              <>
                {' · '}
                <span className="tabular-nums">{unidades.length}</span> unidades
              </>
            )}
          </span>

          <span
            aria-hidden="true"
            className="ml-auto font-mono text-[11px] text-text-muted transition-transform group-open:rotate-90"
          >
            ▸
          </span>
        </summary>

        <div className="border-t border-rule px-5 pb-5 pt-4">
          {preRequisito && (
            <p className="mb-4 text-[13px] leading-relaxed text-text-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted/80">
                Pré-requisito
              </span>
              <br />
              <strong className="text-text">{preRequisito}</strong>
            </p>
          )}

          {unidadeUnica ? (
            <p className="reading-measure text-[13px] leading-relaxed text-text-muted">{ementa.ementa}</p>
          ) : (
            <ol className="space-y-2">
              {unidades.map((unidade, i) => (
                <li key={unidade} className="flex gap-3 text-[13px] leading-relaxed text-text-muted">
                  <span className="shrink-0 pt-px font-mono text-[11px] tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{unidade}</span>
                </li>
              ))}
            </ol>
          )}

          <p className="mt-4 border-t border-rule pt-3 font-mono text-[10px] leading-relaxed text-text-muted/80">
            Transcrito do ementário do PPC do BSI/IFAL. É o que a matéria deve cobrir oficialmente — o conteúdo
            desta página é mais amplo em algumas unidades e reorganiza a ordem.
          </p>
        </div>
      </details>
    </aside>
  );
}
