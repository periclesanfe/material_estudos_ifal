import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { ThemeContext, type OrigemReveal, type Theme } from './themeContext';

const THEME_STORAGE_KEY = 'ifal_bsi_theme';
const CLEAN_MODE_STORAGE_KEY = 'ifal_bsi_clean_mode';

/** A API de View Transitions ainda não está em todo lib.dom, então narra o tipo. */
type DocumentComTransicao = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

function temaInicial(): Theme {
  try {
    const salvo = localStorage.getItem(THEME_STORAGE_KEY);
    if (salvo === 'dark' || salvo === 'light') return salvo;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function modoLimpoInicial(): boolean {
  try {
    return localStorage.getItem(CLEAN_MODE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Estado de tema da aplicação, com a transição de reveal radial.
 *
 * Saiu da Sidebar e virou contexto porque agora quem mostra o controle é a barra
 * do topo, e a preferência precisa sobreviver ao colapso da sidebar.
 *
 * A transição é a mesma do lucas-falcao-site: um círculo de clip-path que expande
 * do ponto exato do clique, revelando o tema novo por cima do antigo.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(temaInicial);
  const [cleanMode, setCleanMode] = useState(modoLimpoInicial);

  // o modo limpo é um terceiro tema deste projeto e vence o claro/escuro no
  // esquema de cor nativo, porque ele sempre se apresenta claro
  useEffect(() => {
    const raiz = document.documentElement;
    raiz.dataset.cleanMode = cleanMode ? 'true' : 'false';
    raiz.style.colorScheme = cleanMode ? 'light' : theme;
    try {
      localStorage.setItem(CLEAN_MODE_STORAGE_KEY, String(cleanMode));
    } catch {
      // preferência visual é opcional: se o navegador bloquear, o app segue
    }
  }, [cleanMode, theme]);

  // aplica o tema salvo na primeira pintura, sem transição
  useEffect(() => {
    const raiz = document.documentElement;
    raiz.dataset.theme = theme;
    if (!cleanMode) raiz.style.colorScheme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // idem
    }
    // roda só na montagem: as trocas seguintes passam por toggleTheme
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = useCallback(
    (origem?: OrigemReveal) => {
      const proximo: Theme = theme === 'dark' ? 'light' : 'dark';

      const aplicar = () => {
        const raiz = document.documentElement;
        raiz.dataset.theme = proximo;
        if (!document.documentElement.dataset.cleanMode || raiz.dataset.cleanMode === 'false') {
          raiz.style.colorScheme = proximo;
        }
        try {
          localStorage.setItem(THEME_STORAGE_KEY, proximo);
        } catch {
          // idem
        }
        setTheme(proximo);
      };

      const doc = document as DocumentComTransicao;
      const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // três saídas de emergência: sem suporte, movimento reduzido, ou erro
      if (typeof doc.startViewTransition !== 'function' || reduzido) {
        aplicar();
        return;
      }

      const transicao = doc.startViewTransition(() => {
        // flushSync força o commit síncrono ANTES de o snapshot ser capturado.
        // Sem isso o React agenda a troca em lote, os dois snapshots saem com o
        // tema antigo, e a animação revela nada. É a pegadinha número um da API.
        flushSync(aplicar);
      });

      transicao.ready
        .then(() => {
          const cx = origem?.x ?? window.innerWidth / 2;
          const cy = origem?.y ?? window.innerHeight / 2;
          // raio até o canto mais distante, para o círculo cobrir a tela inteira
          const raio = Math.hypot(
            Math.max(cx, window.innerWidth - cx),
            Math.max(cy, window.innerHeight - cy),
          );
          document.documentElement.animate(
            {
              clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${raio}px at ${cx}px ${cy}px)`],
            },
            {
              duration: 550,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-new(root)',
            },
          );
        })
        // ready rejeita quando o navegador desiste da transição: silêncio é o certo
        .catch(() => {});
    },
    [theme],
  );

  const valor = useMemo(
    () => ({ theme, toggleTheme, cleanMode, setCleanMode }),
    [theme, toggleTheme, cleanMode],
  );

  return <ThemeContext.Provider value={valor}>{children}</ThemeContext.Provider>;
}

