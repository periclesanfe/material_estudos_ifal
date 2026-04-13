import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPeriods } from '../../data/curriculum';
import SidebarOptativesSection from './sidebar/SidebarOptativesSection';
import SidebarPeriodsSection from './sidebar/SidebarPeriodsSection';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(new Set());
  const [expandedOptCategories, setExpandedOptCategories] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const periods = getPeriods();

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

  const mainNavItem = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-accent/20 text-text border border-accent/30 shadow-[0_6px_16px_rgba(108,99,255,0.2)]'
        : 'text-text-muted hover:text-text hover:bg-white/[0.04]'
    }`;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <NavLink
        to="/"
        onClick={handleNavigate}
        className="block px-4 pt-5 pb-4 border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]"
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

      <div className="border-t border-white/10 p-3">
        <NavLink to="/configuracoes" onClick={handleNavigate} className={mainNavItem}>
          Configurações
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-card/90 border border-white/10 rounded-xl p-2.5 shadow-lg backdrop-blur transition-all duration-200 hover:bg-card"
        aria-label="Menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center gap-1">
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`sidebar-surface hidden lg:flex flex-col border-r border-white/10 ${collapsed ? 'w-[4.5rem]' : 'w-[17rem]'} transition-all duration-300 flex-shrink-0`}
      >
        {!collapsed && sidebarContent}
        {collapsed && (
          <div className="flex flex-col items-center pt-7 gap-3">
            <span className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30" />
            <span className="font-display font-bold text-sm text-text-muted">BSI</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-10 text-text-muted hover:text-text border-t border-white/10 transition-colors"
          aria-label={collapsed ? 'Expandir' : 'Colapsar'}
        >
          <svg className={`w-4 h-4 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </aside>

      <aside
        className={`sidebar-surface-mobile lg:hidden fixed top-0 left-0 h-full w-[17rem] border-r border-white/10 z-50 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
