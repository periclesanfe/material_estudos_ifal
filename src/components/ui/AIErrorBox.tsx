import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { AIErrorInfo } from '../../lib/aiProviders';

interface AIErrorBoxProps {
  error: AIErrorInfo;
}

/** Caixa de erro amigável: título, explicação, ação sugerida e detalhe técnico opcional. */
export default function AIErrorBox({ error }: AIErrorBoxProps) {
  const [showRaw, setShowRaw] = useState(false);

  return (
    <div
      role="alert"
      className="bg-accent2/10 border border-accent2/25 rounded-lg p-4 text-sm leading-relaxed"
    >
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-accent2 text-lg leading-none mt-0.5">⚠</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-accent2">{error.title}</p>
          <p className="text-text-muted mt-1">{error.detail}</p>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            {error.action?.to && (
              <Link to={error.action.to} className="btn-primary inline-flex px-4 py-2 text-xs">
                {error.action.label}
              </Link>
            )}
            {error.action?.href && (
              <a
                href={error.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-4 py-2 text-xs"
              >
                {error.action.label}
              </a>
            )}
            {error.raw && (
              <button
                type="button"
                onClick={() => setShowRaw(v => !v)}
                className="text-text-muted hover:text-text text-xs font-semibold underline underline-offset-2 transition-colors"
              >
                {showRaw ? 'Ocultar detalhes técnicos' : 'Ver detalhes técnicos'}
              </button>
            )}
          </div>

          {showRaw && error.raw && (
            <pre className="mt-3 bg-bg/60 border border-border rounded-md p-3 text-[11px] text-text-muted whitespace-pre-wrap break-words font-mono">
              {error.raw}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
