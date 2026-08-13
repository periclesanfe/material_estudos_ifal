import { createContext, useContext } from 'react';

export type EstadoSidebar = 'expanded' | 'collapsed';

export interface SidebarContextValue {
  estado: EstadoSidebar;
  aberta: boolean;
  setAberta: (v: boolean) => void;
  mobileAberta: boolean;
  setMobileAberta: (v: boolean) => void;
  ehMobile: boolean;
  alternar: () => void;
}

/**
 * Contexto e hook vivem fora do arquivo de componentes por exigência do lint:
 * a regra react-refresh/only-export-components quebra o fast refresh quando um
 * arquivo exporta componente e não-componente ao mesmo tempo.
 */
export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar precisa estar dentro de SidebarProvider');
  return ctx;
}
