import { useEffect, useState } from 'react';

/**
 * Diz se o sistema pede movimento reduzido, e reavalia se a preferência mudar.
 *
 * Existe porque `prefers-reduced-motion` no CSS não alcança animação de
 * biblioteca: o Motion anima via estilo em linha, que a regra de mídia não
 * intercepta. Quem consome desliga a animação na origem, passando `false` para
 * `animate` ou zerando a transição.
 */
export function useMovimentoReduzido(): boolean {
  const [reduzido, setReduzido] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const midia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const aoMudar = () => setReduzido(midia.matches);
    midia.addEventListener('change', aoMudar);
    return () => midia.removeEventListener('change', aoMudar);
  }, []);

  return reduzido;
}
