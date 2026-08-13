import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

/** Ponto de origem do reveal radial, em coordenadas de viewport. */
export interface OrigemReveal {
  x: number;
  y: number;
}

export interface ThemeContextValue {
  theme: Theme;
  /** Troca o tema com o reveal radial a partir do ponto do clique. */
  toggleTheme: (origem?: OrigemReveal) => void;
  cleanMode: boolean;
  setCleanMode: (valor: boolean) => void;
}

/** Ver a nota em sidebarContext.ts: separação exigida pelo fast refresh. */
export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme precisa estar dentro de ThemeProvider');
  return ctx;
}
