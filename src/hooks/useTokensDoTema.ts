import { useEffect, useState } from 'react';

/**
 * Lê tokens de cor do design system em tempo de execução e reavalia quando o
 * tema muda.
 *
 * O grafo é desenhado em canvas, então não herda CSS: precisa dos valores
 * resolvidos. Ler `getComputedStyle` no lugar de repetir os hex aqui garante que
 * o grafo acompanhe o tema escuro, o claro e o modo limpo sem duplicar paleta.
 */
export function useTokensDoTema(nomes: readonly string[]): Record<string, string> {
  const [tokens, setTokens] = useState<Record<string, string>>({});

  useEffect(() => {
    const raiz = document.documentElement;

    const ler = () => {
      const estilo = getComputedStyle(raiz);
      const lidos: Record<string, string> = {};
      for (const nome of nomes) {
        lidos[nome] = estilo.getPropertyValue(nome).trim();
      }
      setTokens(anterior => {
        // evita re-render quando nada mudou de fato
        const igual = nomes.every(n => anterior[n] === lidos[n]);
        return igual ? anterior : lidos;
      });
    };

    ler();

    // o tema vive em data-theme e data-clean-mode no <html> (ver Sidebar)
    const observador = new MutationObserver(ler);
    observador.observe(raiz, { attributes: true, attributeFilter: ['data-theme', 'data-clean-mode'] });

    const midia = window.matchMedia('(prefers-color-scheme: dark)');
    midia.addEventListener('change', ler);

    return () => {
      observador.disconnect();
      midia.removeEventListener('change', ler);
    };
  }, [nomes]);

  return tokens;
}
