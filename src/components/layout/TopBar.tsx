import { Link, useLocation } from 'react-router-dom';
import { getSubjectBySlug } from '../../data/curriculum';
import { useTheme } from '../../contexts/themeContext';
import ThemeToggle from '../ui/ThemeToggle';
import { SidebarTrigger } from '../ui/sidebar';

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 0 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.37a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 0 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 0 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.08a1.7 1.7 0 0 0-1.52 1Z"
      />
    </svg>
  );
}

function FocoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4"
      />
      <path strokeLinecap="round" d="M8 12h8" />
    </svg>
  );
}

/** Rótulo da rota atual, para o usuário saber onde está com a sidebar recolhida. */
function useTituloDaRota(): string {
  const { pathname } = useLocation();
  if (pathname === '/') return 'Início';
  if (pathname === '/trilha') return 'Trilha de aprendizado';
  if (pathname === '/configuracoes') return 'Configurações';
  if (pathname === '/atualizacoes') return 'Atualizações';
  if (pathname.startsWith('/materia/')) {
    const slug = pathname.replace('/materia/', '');
    return getSubjectBySlug(slug)?.name ?? 'Matéria';
  }
  return '';
}

/**
 * Barra do topo: gatilho da sidebar à esquerda, contexto no meio, controles à
 * direita.
 *
 * Existe porque o rodapé da sidebar era o único lugar dos controles, e ali eles
 * desapareciam quando a sidebar recolhia. Tema, modo de leitura e configurações
 * são preferências globais e pertencem a uma superfície que não colapsa.
 */
export default function TopBar() {
  const { cleanMode, setCleanMode } = useTheme();
  const titulo = useTituloDaRota();

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-[color-mix(in_srgb,var(--bg-primary)_86%,transparent)] px-3 backdrop-blur-md">
      <SidebarTrigger />

      <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

      <p className="min-w-0 flex-1 truncate text-[13px] font-semibold text-text">{titulo}</p>

      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setCleanMode(!cleanMode)}
          aria-pressed={cleanMode}
          aria-label={cleanMode ? 'Desativar modo de leitura' : 'Ativar modo de leitura'}
          title={cleanMode ? 'Desativar modo de leitura' : 'Modo de leitura'}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-accent/50 ${
            cleanMode
              ? 'bg-[color-mix(in_srgb,var(--accent-primary)_14%,transparent)] text-accent'
              : 'text-text-muted hover:bg-card-hover hover:text-text'
          }`}
        >
          <FocoIcon />
        </button>

        <ThemeToggle />

        <Link
          to="/configuracoes"
          aria-label="Configurações"
          title="Configurações"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-card-hover hover:text-text focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <GearIcon />
        </Link>
      </div>
    </header>
  );
}
