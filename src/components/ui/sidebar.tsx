import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useMovimentoReduzido } from '../../hooks/useMovimentoReduzido';
import {
  SidebarContext,
  useSidebar,
  type EstadoSidebar,
  type SidebarContextValue,
} from '../../contexts/sidebarContext';

/**
 * Primitivos de sidebar composta, no padrão do shadcn/ui, adaptados ao Falcão
 * System Design.
 *
 * Por que composta em vez de um componente único: a sidebar antiga era um
 * arquivo de 364 linhas que acumulava estado de tema, de modo limpo, de colapso,
 * de folha mobile e de acordeão dos períodos, além da própria marcação. Nada
 * daquilo era reutilizável e qualquer ajuste mexia no arquivo inteiro. Aqui o
 * estado vive no provider, o layout vive nas peças, e a composição vive em
 * AppSidebar.
 *
 * Diferenças conscientes em relação ao shadcn:
 * - Persistência em localStorage, não cookie: este projeto é estático no GitHub
 *   Pages e não tem servidor para ler cookie.
 * - Sem Radix: o projeto não tem a dependência, então a folha mobile é um
 *   portal simples com trava de foco por handler de Tab.
 * - Motion em vez de transição CSS, para o colapso acompanhar o resto do sistema.
 */

const LARGURA = '17rem';
const LARGURA_ICONE = '3.75rem';
const LARGURA_MOBILE = '18rem';
const CHAVE_ESTADO = 'ifal_bsi_sidebar';


function estadoInicial(): boolean {
  try {
    const salvo = localStorage.getItem(CHAVE_ESTADO);
    return salvo === null ? true : salvo === 'expanded';
  } catch {
    return true;
  }
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [aberta, setAbertaRaw] = useState(estadoInicial);
  const [mobileAberta, setMobileAberta] = useState(false);
  const [ehMobile, setEhMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024,
  );

  useEffect(() => {
    const midia = window.matchMedia('(max-width: 1023px)');
    const aoMudar = () => setEhMobile(midia.matches);
    aoMudar();
    midia.addEventListener('change', aoMudar);
    return () => midia.removeEventListener('change', aoMudar);
  }, []);

  const setAberta = useCallback((v: boolean) => {
    setAbertaRaw(v);
    try {
      localStorage.setItem(CHAVE_ESTADO, v ? 'expanded' : 'collapsed');
    } catch {
      // preferência de layout é opcional
    }
  }, []);

  const alternar = useCallback(() => {
    if (ehMobile) setMobileAberta(m => !m);
    else setAberta(!aberta);
  }, [ehMobile, aberta, setAberta]);

  // atalho de teclado do padrão shadcn
  useEffect(() => {
    const aoTeclar = (ev: KeyboardEvent) => {
      if (ev.key.toLowerCase() === 'b' && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault();
        alternar();
      }
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [alternar]);

  const valor = useMemo<SidebarContextValue>(
    () => ({
      estado: (aberta ? 'expanded' : 'collapsed') as EstadoSidebar,
      aberta,
      setAberta,
      mobileAberta,
      setMobileAberta,
      ehMobile,
      alternar,
    }),
    [aberta, setAberta, mobileAberta, ehMobile, alternar],
  );

  return (
    <SidebarContext.Provider value={valor}>
      <div
        className="flex min-h-screen w-full"
        style={
          {
            '--sidebar-width': LARGURA,
            '--sidebar-width-icon': LARGURA_ICONE,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

/** Painel da sidebar. No desktop encolhe para trilho de ícones; no mobile é folha. */
export function Sidebar({ children }: { children: ReactNode }) {
  const { estado, ehMobile, mobileAberta, setMobileAberta } = useSidebar();
  const reduzido = useMovimentoReduzido();

  // fecha a folha ao passar para desktop, senão fica presa aberta
  useEffect(() => {
    if (!ehMobile && mobileAberta) setMobileAberta(false);
  }, [ehMobile, mobileAberta, setMobileAberta]);

  useEffect(() => {
    if (!ehMobile || !mobileAberta) return;
    const aoTeclar = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setMobileAberta(false);
    };
    document.addEventListener('keydown', aoTeclar);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = '';
    };
  }, [ehMobile, mobileAberta, setMobileAberta]);

  if (ehMobile) {
    return (
      <AnimatePresence>
        {mobileAberta && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileAberta(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Navegação"
              initial={reduzido ? { x: 0 } : { x: '-100%' }}
              animate={{ x: 0 }}
              exit={reduzido ? { x: 0 } : { x: '-100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 32, mass: 0.9 }}
              style={{ width: LARGURA_MOBILE }}
              className="fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-sidebar lg:hidden"
            >
              {children}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.aside
      data-estado={estado}
      aria-label="Navegação"
      initial={false}
      animate={{ width: estado === 'expanded' ? LARGURA : LARGURA_ICONE }}
      transition={reduzido ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group/sidebar sticky top-0 hidden h-screen shrink-0 flex-col overflow-hidden border-r border-border bg-sidebar lg:flex"
    >
      {children}
    </motion.aside>
  );
}

/** Área fixa do topo, para marca. */
export function SidebarHeader({ children, className = '' }: ComponentProps<'div'>) {
  return <div className={`shrink-0 px-3 py-4 ${className}`}>{children}</div>;
}

/** Região rolável entre topo e rodapé. */
export function SidebarContent({ children, className = '' }: ComponentProps<'div'>) {
  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden px-2 py-2 ${className}`}>
      {children}
    </div>
  );
}

/** Área fixa do rodapé. */
export function SidebarFooter({ children, className = '' }: ComponentProps<'div'>) {
  return <div className={`shrink-0 border-t border-border px-2 py-2 ${className}`}>{children}</div>;
}

export function SidebarGroup({ children, className = '' }: ComponentProps<'div'>) {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>;
}

/**
 * Rótulo do grupo. Desaparece quando a sidebar está em trilho de ícones, porque
 * texto de 10 px em 60 px de largura vira ruído.
 */
export function SidebarGroupLabel({ children }: { children: ReactNode }) {
  const { estado, ehMobile } = useSidebar();
  if (estado === 'collapsed' && !ehMobile) return null;
  return (
    <p className="px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted/80">
      {children}
    </p>
  );
}

export function SidebarMenu({ children, className = '' }: ComponentProps<'ul'>) {
  return <ul className={`flex list-none flex-col gap-0.5 ${className}`}>{children}</ul>;
}

export function SidebarMenuItem({ children, className = '' }: ComponentProps<'li'>) {
  return <li className={`relative ${className}`}>{children}</li>;
}

interface SidebarMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Marca o item como rota atual. */
  ativo?: boolean;
  /** Texto mostrado no balão quando a sidebar está recolhida. */
  tooltip?: string;
  /** Renderiza como filho arbitrário (um NavLink, por exemplo). */
  asChild?: boolean;
  children: ReactNode;
}

/**
 * Linha clicável do menu. Em trilho de ícones o rótulo é escondido por CSS e o
 * título nativo assume, o que dá o balão sem precisar de biblioteca de overlay.
 */
export function SidebarMenuButton({
  ativo = false,
  tooltip,
  asChild = false,
  children,
  className = '',
  ...resto
}: SidebarMenuButtonProps) {
  const { estado, ehMobile } = useSidebar();
  const recolhida = estado === 'collapsed' && !ehMobile;

  const classes = [
    'group/item flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left text-[13px] font-medium',
    'transition-colors duration-150 outline-none',
    'focus-visible:ring-2 focus-visible:ring-accent/50',
    recolhida ? 'justify-center' : '',
    ativo
      ? 'bg-[color-mix(in_srgb,var(--accent-primary)_14%,transparent)] text-accent'
      : 'text-text-muted hover:bg-card-hover hover:text-text',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (asChild) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <button type="button" title={recolhida ? tooltip : undefined} className={classes} {...resto}>
      {children}
    </button>
  );
}

/** Esconde o rótulo no trilho de ícones. Usar em volta do texto do item. */
export function SidebarLabel({ children, className = '' }: ComponentProps<'span'>) {
  const { estado, ehMobile } = useSidebar();
  if (estado === 'collapsed' && !ehMobile) return null;
  return <span className={`min-w-0 flex-1 truncate ${className}`}>{children}</span>;
}

/** Submenu recuado, com fio de guia à esquerda. */
export function SidebarMenuSub({ children, className = '' }: ComponentProps<'ul'>) {
  return (
    <ul className={`ml-4 flex list-none flex-col gap-0.5 border-l border-border pl-2 ${className}`}>
      {children}
    </ul>
  );
}

export function SidebarSeparator() {
  return <div className="mx-2 h-px bg-border" />;
}

/** Botão que abre e fecha. Vive na barra do topo, não dentro da sidebar. */
export function SidebarTrigger({ className = '' }: { className?: string }) {
  const { alternar, estado, ehMobile } = useSidebar();
  const rotulo = ehMobile
    ? 'Abrir navegação'
    : estado === 'expanded'
      ? 'Recolher navegação'
      : 'Expandir navegação';

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={rotulo}
      title={`${rotulo} (⌘B)`}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-card-hover hover:text-text focus-visible:ring-2 focus-visible:ring-accent/50 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
          opacity="0.5"
        />
        <path d="M9 4v16" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.8 8.6h2.4M4.8 12h2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

/** Área de conteúdo ao lado da sidebar. */
export function SidebarInset({ children, className = '' }: ComponentProps<'div'>) {
  return <div className={`flex min-w-0 flex-1 flex-col ${className}`}>{children}</div>;
}
