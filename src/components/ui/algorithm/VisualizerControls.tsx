interface VisualizerControlsProps {
  index: number;
  total: number;
  tocando: boolean;
  /** Quando `true`, esconde play e velocidade: o avanço é só manual. */
  somenteManual?: boolean;
  velocidade: number;
  onAnterior: () => void;
  onProximo: () => void;
  onAlternarPlay: () => void;
  onReiniciar: () => void;
  onEmbaralhar: () => void;
  onVelocidade: (valor: number) => void;
  onIr: (indice: number) => void;
}

const BOTAO =
  'rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-text transition-colors hover:bg-card-hover hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40';

/** Controles do visualizador: passo a passo, play/pause, reiniciar e embaralhar. */
export default function VisualizerControls({
  index,
  total,
  tocando,
  somenteManual = false,
  velocidade,
  onAnterior,
  onProximo,
  onAlternarPlay,
  onReiniciar,
  onEmbaralhar,
  onVelocidade,
  onIr,
}: VisualizerControlsProps) {
  const ultimo = total - 1;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={BOTAO} onClick={onAnterior} disabled={index === 0}>
          ← Anterior
        </button>
        {!somenteManual && (
          <button
            type="button"
            className={`${BOTAO} border-accent/40 bg-accent/10 text-accent`}
            onClick={onAlternarPlay}
            disabled={index >= ultimo && !tocando}
          >
            {tocando ? '⏸ Pausar' : '▶ Reproduzir'}
          </button>
        )}
        <button type="button" className={BOTAO} onClick={onProximo} disabled={index >= ultimo}>
          Próximo →
        </button>
        <button type="button" className={BOTAO} onClick={onReiniciar}>
          ↺ Reiniciar
        </button>
        <button type="button" className={BOTAO} onClick={onEmbaralhar}>
          🔀 Embaralhar
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <label className="flex flex-1 items-center gap-2 text-xs text-text-muted sm:min-w-64">
          <span className="shrink-0">
            Passo{' '}
            <strong className="tabular-nums text-text">
              {index + 1}/{total}
            </strong>
          </span>
          <input
            type="range"
            min={0}
            max={ultimo}
            value={index}
            onChange={(e) => onIr(Number(e.target.value))}
            className="h-1.5 w-full flex-1 cursor-pointer accent-[var(--color-accent)]"
            aria-label="Ir para um passo específico"
          />
        </label>

        <label className={`flex items-center gap-2 text-xs text-text-muted ${somenteManual ? 'hidden' : ''}`}>
          Velocidade
          <select
            value={velocidade}
            onChange={(e) => onVelocidade(Number(e.target.value))}
            className="rounded-md border border-border bg-card px-2 py-1 text-xs text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <option value={1200}>0,5×</option>
            <option value={600}>1×</option>
            <option value={300}>2×</option>
            <option value={150}>4×</option>
          </select>
        </label>
      </div>
    </div>
  );
}
