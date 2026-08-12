import { useState } from 'react';
import { useApiKey } from '../hooks/useApiKey';
import {
  PROVIDERS,
  getProvider,
  listModels,
  type AIConfig,
  type ModelOption,
  type ProviderId,
} from '../lib/aiProviders';

export default function SettingsPage() {
  const { getConfig, setConfig, removeConfig, hasApiKey } = useApiKey();

  const initial = getConfig();
  const [provider, setProvider] = useState<ProviderId>(initial.provider);
  const [apiKey, setApiKeyValue] = useState(initial.apiKey);
  const [baseUrl, setBaseUrl] = useState(initial.baseUrl ?? '');
  const [model, setModel] = useState(initial.model);
  const [models, setModels] = useState<ModelOption[]>(
    initial.model ? [{ id: initial.model, label: initial.model }] : []
  );

  const [showKey, setShowKey] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [modelsError, setModelsError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const providerInfo = getProvider(provider);

  const handleProviderChange = (id: ProviderId) => {
    setProvider(id);
    // Trocar de provedor invalida modelos e chave anteriores.
    setModels([]);
    setModel('');
    setModelsError(null);
    setBaseUrl(getProvider(id).requiresBaseUrl ? baseUrl : '');
  };

  const handleFetchModels = async () => {
    setModelsError(null);
    setLoadingModels(true);
    try {
      const result = await listModels({ provider, apiKey: apiKey.trim(), baseUrl: baseUrl.trim() });
      setModels(result);
      if (result.length === 0) {
        setModelsError('Nenhum modelo retornado por este provedor.');
      } else if (!result.some(m => m.id === model)) {
        setModel(result[0].id);
      }
    } catch (err) {
      setModels([]);
      setModelsError(err instanceof Error ? err.message : 'Falha ao buscar modelos.');
    } finally {
      setLoadingModels(false);
    }
  };

  const canFetchModels =
    apiKey.trim().length > 0 && (!providerInfo.requiresBaseUrl || baseUrl.trim().length > 0);

  const canSave = canFetchModels && model.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    const config: AIConfig = {
      provider,
      apiKey: apiKey.trim(),
      model: model.trim(),
      baseUrl: providerInfo.requiresBaseUrl ? baseUrl.trim() : '',
    };
    setConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRemove = () => {
    removeConfig();
    setApiKeyValue('');
    setBaseUrl('');
    setModel('');
    setModels([]);
    setModelsError(null);
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
              <h2 className="font-display font-bold text-2xl text-text">Provedor de IA</h2>
              <p className="text-text-muted text-sm md:text-base mt-1">
                Escolha o provedor, informe a chave e selecione um modelo para usar no Quiz com IA.
              </p>
            </div>
            {hasApiKey() && (
              <span className="px-3 py-1.5 bg-accent5/10 text-accent5 text-[11px] font-bold rounded-md uppercase tracking-[0.14em]">
                Configurada
              </span>
            )}
          </div>

          <div className="space-y-5">
            {/* Provedor */}
            <div>
              <label htmlFor="provider-select" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.12em] mb-2">
                Provedor
              </label>
              <select
                id="provider-select"
                value={provider}
                onChange={(e) => handleProviderChange(e.target.value as ProviderId)}
                className="w-full bg-bg border border-border rounded-lg px-3 py-2.5 text-text focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors text-sm"
              >
                {PROVIDERS.map(p => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Base URL (apenas genérico) */}
            {providerInfo.requiresBaseUrl && (
              <div>
                <label htmlFor="base-url-input" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.12em] mb-2">
                  Base URL (compatível com OpenAI)
                </label>
                <input
                  id="base-url-input"
                  type="text"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="https://api.deepseek.com/v1"
                  className="w-full bg-bg border border-border rounded-lg px-3 py-2.5 text-text placeholder-text-muted/40 focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors font-mono text-sm"
                />
                <p className="text-text-muted/70 text-xs mt-1.5">
                  Ex.: DeepSeek <code>https://api.deepseek.com/v1</code> · OpenRouter <code>https://openrouter.ai/api/v1</code> · Groq <code>https://api.groq.com/openai/v1</code> · Ollama <code>http://localhost:11434/v1</code>
                </p>
              </div>
            )}

            {/* API Key */}
            <div>
              <label htmlFor="api-key-input" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.12em] mb-2">
                Token da API
              </label>
              <div className="relative">
                <input
                  id="api-key-input"
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKeyValue(e.target.value)}
                  name="ai-api-key"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder={providerInfo.placeholder || 'Cole aqui seu token…'}
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

            {/* Buscar + selecionar modelo */}
            <div>
              <label htmlFor="model-select" className="block text-xs font-semibold text-text-muted uppercase tracking-[0.12em] mb-2">
                Modelo
              </label>
              <div className="flex gap-2.5 flex-wrap">
                <select
                  id="model-select"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={models.length === 0}
                  className="flex-1 min-w-[200px] bg-bg border border-border rounded-lg px-3 py-2.5 text-text focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors text-sm disabled:opacity-40"
                >
                  {models.length === 0 ? (
                    <option value="">Busque os modelos disponíveis…</option>
                  ) : (
                    models.map(m => (
                      <option key={m.id} value={m.id}>{m.label}</option>
                    ))
                  )}
                </select>
                <button
                  onClick={handleFetchModels}
                  disabled={!canFetchModels || loadingModels}
                  type="button"
                  className="btn-secondary px-5 py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loadingModels ? 'Buscando…' : 'Buscar modelos'}
                </button>
              </div>
              <p role="alert" aria-live="polite" className="text-accent2 text-sm mt-2 empty:hidden">{modelsError}</p>
            </div>

            {/* Ações */}
            <div className="flex gap-2.5 flex-wrap pt-1">
              <button
                onClick={handleSave}
                disabled={!canSave}
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
              {providerInfo.apiKeyUrl && (
                <a
                  href={providerInfo.apiKeyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-2.5 text-sm"
                >
                  Gerar token
                </a>
              )}
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
              React · TypeScript · Tailwind CSS · Vite · Gemini / OpenAI / Anthropic / APIs compatíveis
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
