import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPeriods } from '../../data/curriculum';
import Logo from '../ui/Logo';
import SidebarOptativesSection from './sidebar/SidebarOptativesSection';
import SidebarPeriodsSection from './sidebar/SidebarPeriodsSection';

const THEME_STORAGE_KEY = 'ifal_bsi_theme';
const CLEAN_MODE_STORAGE_KEY = 'ifal_bsi_clean_mode';

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

function HomeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 10.8 9-7.2 9 7.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 9.5V20h13V9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 20v-6h5v6" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 0 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.37a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 0 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 0 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
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

function getInitialCleanMode(): boolean {
  try {
    return localStorage.getItem(CLEAN_MODE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(new Set());
  const [expandedOptCategories, setExpandedOptCategories] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [cleanMode, setCleanMode] = useState(getInitialCleanMode);

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

  useEffect(() => {
    document.documentElement.dataset.cleanMode = cleanMode ? 'true' : 'false';
    document.documentElement.style.colorScheme = cleanMode ? 'light' : theme;

    try {
      localStorage.setItem(CLEAN_MODE_STORAGE_KEY, String(cleanMode));
    } catch {
      // O modo de leitura é opcional; se o navegador bloquear, o app segue funcionando.
    }
  }, [cleanMode, theme]);

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
  const activeOptatives = periods.find(period => period.number === 'optativa')?.subjects.some(s => location.pathname === `/materia/${s.slug}`) || false;

  const expandCollapsedGroup = (key: string) => {
    setCollapsed(false);
    setExpandedPeriods(prev => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  };

  const mainNavItem = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-accent/20 text-text border border-accent/30 shadow-[0_6px_16px_rgba(108,99,255,0.2)]'
        : 'text-text-muted hover:text-text hover:bg-card-hover'
    }`;

  const renderThemeToggle = (compact = false) => (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      aria-pressed={theme === 'light'}
      title={theme === 'dark' ? 'Tema escuro' : 'Tema claro'}
      className={`${compact ? 'h-10 w-10 justify-center rounded-xl px-0' : 'h-10 w-[4.75rem] rounded-full px-1.5'} relative flex shrink-0 items-center border border-border bg-card transition-colors duration-300 hover:border-border-hover hover:bg-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg`}
    >
      {!compact && (
        <span className={`absolute ${theme === 'dark' ? 'left-2 text-accent4' : 'right-2 text-accent'} transition-opacity duration-300`}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </span>
      )}
      <span
        className={`${compact ? 'h-7 w-7 translate-x-0' : `h-7 w-7 ${theme === 'dark' ? 'translate-x-[2rem]' : 'translate-x-0'}`} relative z-10 flex items-center justify-center rounded-full text-white shadow-[0_6px_16px_rgba(0,0,0,0.26)] transition-transform duration-300 ease-out ${
          theme === 'dark'
            ? 'bg-accent'
            : 'bg-accent4'
        }`}
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );

  const renderCleanModeToggle = () => (
    <button
      type="button"
      onClick={() => setCleanMode(active => !active)}
      aria-label={cleanMode ? 'Desativar modo foco' : 'Ativar modo foco'}
      aria-pressed={cleanMode}
      title={cleanMode ? 'Modo foco ativo' : 'Modo foco'}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        cleanMode
          ? 'border-accent bg-accent text-white'
          : 'border-border bg-card text-text-muted hover:border-border-hover hover:bg-card-hover hover:text-text'
      }`}
    >
      <FocusIcon />
    </button>
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <NavLink
        to="/"
        onClick={handleNavigate}
        className="sidebar-brand block px-4 pt-5 pb-4 border-b border-border"
      >
        <div className="flex items-center gap-2.5">
          <Logo className="text-[2rem]" />
          <p className="text-[10px] text-text-muted tracking-[0.22em] uppercase leading-tight">
            IFAL
            <br />
            BSI
          </p>
        </div>
        <h1 className="font-display font-bold text-[1.95rem] text-text leading-[1.02] tracking-tight mt-2">
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
          <NavLink to="/trilha" onClick={handleNavigate} className={mainNavItem}>
            Trilha de aprendizado
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
            <GearIcon />
            Configurações
          </NavLink>
          {renderCleanModeToggle()}
          {renderThemeToggle()}
        </div>
      </div>
    </div>
  );

  const collapsedNavButton = (active = false) =>
    `flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-black transition-colors duration-200 ${
      active
        ? 'border-accent/40 bg-accent/20 text-text shadow-[0_6px_16px_rgba(108,99,255,0.2)]'
        : 'border-border bg-card text-text-muted hover:border-border-hover hover:bg-card-hover hover:text-text'
    }`;

  const collapsedSidebarContent = (
    <div className="flex h-full flex-col items-center">
      <NavLink
        to="/"
        end
        title="Início"
        aria-label="Início"
        onClick={handleNavigate}
        className={({ isActive }) => `${collapsedNavButton(isActive)} mt-5 mb-3`}
      >
        <HomeIcon />
      </NavLink>

      <nav className="flex min-h-0 flex-1 flex-col items-center gap-2 overflow-y-auto px-2 py-2">
        {periods.filter(period => period.number !== 'optativa').map(period => {
          const key = `p${period.number}`;
          const hasActiveChild = period.subjects.some(s => location.pathname === `/materia/${s.slug}`);

          return (
            <button
              key={key}
              type="button"
              onClick={() => expandCollapsedGroup(key)}
              className={collapsedNavButton(hasActiveChild)}
              title={period.label}
              aria-label={`Abrir ${period.label}`}
            >
              {period.number}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => expandCollapsedGroup('opt')}
          className={collapsedNavButton(activeOptatives)}
          title="Optativas"
          aria-label="Abrir optativas"
        >
          OP
        </button>
      </nav>

      <div className="flex w-full flex-col items-center gap-2 border-t border-border p-2.5">
        <NavLink
          to="/configuracoes"
          title="Configurações"
          aria-label="Configurações"
          onClick={handleNavigate}
          className={({ isActive }) => collapsedNavButton(isActive)}
        >
          <GearIcon />
        </NavLink>
        {renderCleanModeToggle()}
        {renderThemeToggle(true)}
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
        className={`sidebar-surface relative hidden lg:sticky lg:top-0 lg:flex h-screen self-start flex-col border-r border-border ${collapsed ? 'w-[4.5rem]' : 'w-[18rem]'} transition-[width] duration-300 flex-shrink-0`}
      >
        <div className="min-h-0 flex-1">{collapsed ? collapsedSidebarContent : sidebarContent}</div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-[18px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-text-muted shadow-[0_8px_22px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:border-border-hover hover:bg-card-hover hover:text-text lg:flex"
          aria-label={collapsed ? 'Expandir sidebar' : 'Minimizar sidebar'}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={collapsed ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
          </svg>
        </button>
      </aside>

      <aside
        className={`sidebar-surface-mobile lg:hidden fixed top-0 left-0 h-full w-[18rem] border-r border-border z-50 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
