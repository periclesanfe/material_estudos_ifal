import type { AlgorithmStep } from '../../../lib/sortSteps';

interface ArrayTrackProps {
  step: AlgorithmStep;
  /** Maior valor do array original — mantém a altura das barras estável entre passos. */
  maxValue: number;
}

/**
 * A faixa de células do array, como nos slides: o valor em foco destacado, as
 * posições já ordenadas em verde e a célula vazia durante um deslocamento.
 *
 * A barra proporcional acima do número dá a leitura visual da ordenação sem
 * depender só da cor (importante para daltônicos).
 */
export default function ArrayTrack({ step, maxValue }: ArrayTrackProps) {
  const emFoco = new Set(step.highlight ?? []);
  const ordenados = new Set(step.sorted ?? []);

  return (
    <ul
      className="flex min-w-max items-end justify-center gap-1 sm:gap-1.5"
      aria-label="Estado atual do array"
    >
      {step.array.map((valor, i) => {
        const buraco = step.hole === i;
        const foco = emFoco.has(i);
        const ordenado = ordenados.has(i) && !foco;

        let cor = 'border-border bg-card text-text';
        if (foco) cor = 'border-accent bg-accent/15 text-accent';
        else if (ordenado) cor = 'border-accent5 bg-accent5/10 text-accent5';
        if (buraco) cor = 'border-dashed border-border-hover bg-transparent text-transparent';

        const altura = Math.max(6, Math.round((valor / maxValue) * 40));

        return (
          <li key={i} className="flex flex-col items-center gap-1">
            <span
              aria-hidden="true"
              className={`w-7 rounded-t-sm transition-all duration-200 sm:w-9 ${
                buraco ? 'bg-transparent' : foco ? 'bg-accent' : ordenado ? 'bg-accent5' : 'bg-border-hover'
              }`}
              style={{ height: `${buraco ? 0 : altura}px` }}
            />
            <span
              className={`flex h-9 w-7 items-center justify-center rounded-md border text-xs font-semibold tabular-nums transition-colors duration-200 sm:h-10 sm:w-9 sm:text-sm ${cor}`}
            >
              {buraco ? '' : valor}
            </span>
            <span className="text-[10px] tabular-nums text-text-muted/60">{i}</span>
          </li>
        );
      })}
    </ul>
  );
}
