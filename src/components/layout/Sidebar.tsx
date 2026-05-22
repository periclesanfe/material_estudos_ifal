import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPeriods } from '../../data/curriculum';
import SidebarOptativesSection from './sidebar/SidebarOptativesSection';
import SidebarPeriodsSection from './sidebar/SidebarPeriodsSection';

const THEME_STORAGE_KEY = 'ifal_bsi_theme';

type Theme = 'dark' | 'light';

function SunIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 14.7A8.5 8.5 0 0 1 9.3 3a7 7 0 1 0 11.7 11.7Z" />
    </svg>
  );
}

function getInitialTheme(): Theme {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(new Set());
  const [expandedOptCategories, setExpandedOptCategories] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const location = useLocation();
  const periods = getPeriods();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // A preferência visual é opcional; se o navegador bloquear, o app segue funcionando.
    }
  }, [theme]);

  const togglePeriod = (key: string) => {
    setExpandedPeriods(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const toggleOptCategory = (key: string) => {
    setExpandedOptCategories(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleNavigate = () => setMobileOpen(false);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const mainNavItem = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-accent/20 text-text border border-accent/30 shadow-[0_6px_16px_rgba(108,99,255,0.2)]'
        : 'text-text-muted hover:text-text hover:bg-card-hover'
    }`;

  const themeToggle = (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      aria-pressed={theme === 'light'}
      className="group relative flex h-10 w-[4.75rem] shrink-0 items-center rounded-full border border-border bg-card px-1.5 transition-colors duration-300 hover:border-border-hover hover:bg-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span className="absolute left-2 text-accent4 transition-opacity duration-300 group-aria-pressed:opacity-100 opacity-35">
        <SunIcon />
      </span>
      <span className="absolute right-2 text-accent transition-opacity duration-300 group-aria-pressed:opacity-35 opacity-100">
        <MoonIcon />
      </span>
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-white shadow-[0_6px_16px_rgba(0,0,0,0.26)] transition-transform duration-300 ease-out ${
          theme === 'light'
            ? 'translate-x-[2rem] bg-accent4'
            : 'translate-x-0 bg-accent'
        }`}
      >
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <NavLink
        to="/"
        onClick={handleNavigate}
        className="sidebar-brand block px-4 pt-5 pb-4 border-b border-border"
      >
        <p className="text-[10px] text-text-muted tracking-[0.22em] uppercase">IFAL BSI</p>
        <h1 className="font-display font-bold text-[1.95rem] text-text leading-[1.02] tracking-tight mt-1.5">
          Material de Estudo
        </h1>
        <p className="text-text-muted/80 text-xs mt-2">Navegação por período, optativas e conteúdo disponível.</p>
      </NavLink>

      <nav className="flex-1 overflow-y-auto px-3 py-3.5 space-y-3.5">
        <div>
          <p className="px-2 mb-1.5 text-[10px] font-semibold text-text-muted/70 uppercase tracking-[0.18em]">Geral</p>
          <NavLink to="/" end onClick={handleNavigate} className={mainNavItem}>
            Início
          </NavLink>
        </div>

        <SidebarPeriodsSection
          periods={periods}
          pathname={location.pathname}
          expandedPeriods={expandedPeriods}
          onTogglePeriod={togglePeriod}
          onNavigate={handleNavigate}
        />

        <SidebarOptativesSection
          expandedPeriods={expandedPeriods}
          expandedOptCategories={expandedOptCategories}
          onTogglePeriod={togglePeriod}
          onToggleOptCategory={toggleOptCategory}
          onNavigate={handleNavigate}
        />
      </nav>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2">
          <NavLink to="/configuracoes" onClick={handleNavigate} className={({ isActive }) => `${mainNavItem({ isActive })} flex-1`}>
          Configurações
          </NavLink>
          {themeToggle}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-card/90 border border-border rounded-xl p-2.5 shadow-lg backdrop-blur transition-colors duration-200 hover:bg-card-hover"
        aria-label="Menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center gap-1">
          <span className={`block h-0.5 bg-text rounded transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`sidebar-surface hidden lg:sticky lg:top-0 lg:flex h-screen self-start flex-col border-r border-border ${collapsed ? 'w-[4.5rem]' : 'w-[18rem]'} transition-[width] duration-300 flex-shrink-0`}
      >
        <div className="min-h-0 flex-1">
          {!collapsed && sidebarContent}
          {collapsed && (
            <div className="flex h-full flex-col items-center pt-7 gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30" />
              <span className="font-display font-bold text-sm text-text-muted">BSI</span>
            </div>
          )}
        </div>
        <div className="relative h-11 border-t border-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute left-1/2 top-0 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-text-muted shadow-[0_8px_22px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:border-border-hover hover:bg-card-hover hover:text-text lg:flex"
            aria-label={collapsed ? 'Expandir sidebar' : 'Minimizar sidebar'}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={collapsed ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
            </svg>
          </button>
        </div>
      </aside>

      <aside
        className={`sidebar-surface-mobile lg:hidden fixed top-0 left-0 h-full w-[18rem] border-r border-border z-50 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
