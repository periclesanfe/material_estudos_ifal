import { useState } from 'react';
import { useApiKey } from '../hooks/useApiKey';

export default function SettingsPage() {
  const { getApiKey, setApiKey, removeApiKey, hasApiKey } = useApiKey();
  const [keyValue, setKeyValue] = useState(() => getApiKey() ?? '');
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!keyValue.trim()) return;
    setApiKey(keyValue.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRemove = () => {
    removeApiKey();
    setKeyValue('');
  };

  return (
    <div className="page-wrap py-10 md:py-12 animate-fade-in">
      <div className="max-w-4xl content-stack">
        <header>
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">Configurações</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">Preferências e integrações</h1>
        </header>

        <section className="study-surface p-6 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-text">API Key — Google Gemini</h2>
              <p className="text-text-muted text-sm md:text-base mt-1">Necessária para gerar perguntas no Quiz com IA.</p>
            </div>
            {hasApiKey() && (
              <span className="px-3 py-1.5 bg-accent5/10 text-accent5 text-[11px] font-bold rounded-md uppercase tracking-[0.14em]">
                Configurada
              </span>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="api-key-input" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.12em] mb-2">
                Token da API
              </label>
              <div className="relative">
                <input
                  id="api-key-input"
                  type={showKey ? 'text' : 'password'}
                  value={keyValue}
                  onChange={(e) => setKeyValue(e.target.value)}
                  name="gemini-api-key"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Cole aqui seu token…"
                  className="w-full bg-bg border border-border rounded-lg px-3 py-2.5 text-text placeholder-text-muted/40 focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors font-mono text-sm"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-sm transition-colors"
                  type="button"
                >
                  {showKey ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <div className="flex gap-2.5 flex-wrap">
              <button
                onClick={handleSave}
                disabled={!keyValue.trim()}
                className="btn-primary px-5 py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {saved ? 'Salvo' : 'Salvar'}
              </button>
              {hasApiKey() && (
                <button
                  onClick={handleRemove}
                  className="px-5 py-2.5 border border-accent2/40 text-accent2 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Remover
                </button>
              )}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-5 py-2.5 text-sm"
              >
                Gerar token no Gemini
              </a>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border">
            <p className="text-text-muted text-sm leading-relaxed">
              <strong className="text-text">Privacidade:</strong> seu token fica apenas nesta sessão do navegador
              e nunca é enviado para servidores do projeto. Ao fechar a aba ou o navegador, informe a chave novamente.
            </p>
          </div>
        </section>

        <section className="study-surface p-6 md:p-7">
          <h2 className="font-display font-bold text-2xl text-text mb-3">Sobre o Projeto</h2>
          <div className="space-y-2.5 text-text-muted text-sm md:text-base leading-relaxed">
            <p>
              Repositório colaborativo de conteúdos do Bacharelado em Sistemas de Informação do IFAL,
              mantido por alunos e egressos do curso.
            </p>
            <p className="text-text-muted/70 text-sm">
              React · TypeScript · Tailwind CSS · Vite · Google Gemini API
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
