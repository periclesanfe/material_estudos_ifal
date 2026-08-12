import type { AIConfig, ProviderId } from '../lib/aiProviders';

const CONFIG_STORAGE_KEY = 'ifal_bsi_ai_config';
// Chave legada (apenas Gemini). Mantida para migrar configs antigas.
const LEGACY_KEY = 'ifal_bsi_gemini_api_key';

const DEFAULT_CONFIG: AIConfig = {
  provider: 'gemini',
  apiKey: '',
  model: '',
  baseUrl: '',
};

function readConfig(): AIConfig {
  const raw = sessionStorage.getItem(CONFIG_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Partial<AIConfig>;
      return { ...DEFAULT_CONFIG, ...parsed };
    } catch {
      // cai para a migração / default
    }
  }

  // Migração transparente da chave antiga somente-Gemini.
  const legacy = sessionStorage.getItem(LEGACY_KEY);
  if (legacy) {
    return { ...DEFAULT_CONFIG, provider: 'gemini', apiKey: legacy };
  }

  return { ...DEFAULT_CONFIG };
}

export function useApiKey() {
  const getConfig = (): AIConfig => readConfig();

  const setConfig = (config: AIConfig): void => {
    sessionStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    sessionStorage.removeItem(LEGACY_KEY);
  };

  const removeConfig = (): void => {
    sessionStorage.removeItem(CONFIG_STORAGE_KEY);
    sessionStorage.removeItem(LEGACY_KEY);
  };

  /** Configurado = tem provedor com chave e modelo escolhidos. */
  const hasApiKey = (): boolean => {
    const c = readConfig();
    return c.apiKey.trim().length > 0 && c.model.trim().length > 0;
  };

  // Helpers de compatibilidade com o código existente.
  const getApiKey = (): string | null => {
    const key = readConfig().apiKey;
    return key.trim().length > 0 ? key : null;
  };

  const setApiKey = (key: string): void => {
    setConfig({ ...readConfig(), apiKey: key });
  };

  const removeApiKey = (): void => removeConfig();

  return {
    getConfig,
    setConfig,
    removeConfig,
    hasApiKey,
    getApiKey,
    setApiKey,
    removeApiKey,
  };
}

export type { AIConfig, ProviderId };
