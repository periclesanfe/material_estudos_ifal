import { useTheme } from '../../contexts/themeContext';

function SolIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
      </g>
    </svg>
  );
}

function LuaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 13.4A8 8 0 1 1 10.6 4a6.4 6.4 0 0 0 9.4 9.4z" fill="currentColor" />
    </svg>
  );
}

/**
 * Alterna claro e escuro com o reveal radial.
 *
 * A animação vive no ThemeContext, não aqui: qualquer outro gatilho (paleta de
 * comandos, atalho, tela de configurações) chama o mesmo toggleTheme e ganha a
 * mesma transição. O que este componente faz de essencial é PASSAR AS
 * COORDENADAS do clique, que é o que faz o círculo nascer sob o dedo.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const escuro = theme === 'dark';

  return (
    <button
      type="button"
      onClick={ev => toggleTheme({ x: ev.clientX, y: ev.clientY })}
      aria-label={escuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={escuro ? 'Tema claro' : 'Tema escuro'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-card-hover hover:text-text focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      {escuro ? <SolIcon /> : <LuaIcon />}
    </button>
  );
}
