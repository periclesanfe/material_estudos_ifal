// Camada de abstração multi-provedor para as requisições de IA.
// Suporta Google Gemini, OpenAI, Anthropic (Claude) e qualquer endpoint
// compatível com a API da OpenAI (DeepSeek, OpenRouter, Groq, Ollama, etc.).

export type ProviderId = 'gemini' | 'openai' | 'anthropic' | 'openai-compatible';

export interface ProviderInfo {
  id: ProviderId;
  label: string;
  /** Endpoint base padrão (vazio para o genérico, que exige base URL do usuário). */
  defaultBaseUrl: string;
  /** Se o usuário precisa informar uma base URL (caso genérico). */
  requiresBaseUrl: boolean;
  /** Página para o usuário gerar a chave. */
  apiKeyUrl: string;
  placeholder: string;
}

export const PROVIDERS: ProviderInfo[] = [
  {
    id: 'gemini',
    label: 'Google Gemini',
    defaultBaseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    requiresBaseUrl: false,
    apiKeyUrl: 'https://aistudio.google.com/apikey',
    placeholder: 'AIza…',
  },
  {
    id: 'openai',
    label: 'OpenAI (GPT)',
    defaultBaseUrl: 'https://api.openai.com/v1',
    requiresBaseUrl: false,
    apiKeyUrl: 'https://platform.openai.com/api-keys',
    placeholder: 'sk-…',
  },
  {
    id: 'anthropic',
    label: 'Anthropic (Claude)',
    defaultBaseUrl: 'https://api.anthropic.com/v1',
    requiresBaseUrl: false,
    apiKeyUrl: 'https://console.anthropic.com/settings/keys',
    placeholder: 'sk-ant-…',
  },
  {
    id: 'openai-compatible',
    label: 'Compatível com OpenAI (DeepSeek, OpenRouter, Groq, Ollama…)',
    defaultBaseUrl: '',
    requiresBaseUrl: true,
    apiKeyUrl: '',
    placeholder: 'Chave do provedor escolhido',
  },
];

export function getProvider(id: ProviderId): ProviderInfo {
  return PROVIDERS.find(p => p.id === id) ?? PROVIDERS[0];
}

export interface AIConfig {
  provider: ProviderId;
  apiKey: string;
  model: string;
  /** Usada apenas pelo provedor genérico; nos demais cai no defaultBaseUrl. */
  baseUrl?: string;
}

/** Versão da Anthropic API e header que permite chamada direta do browser. */
const ANTHROPIC_VERSION = '2023-06-01';

function resolveBaseUrl(config: AIConfig): string {
  const info = getProvider(config.provider);
  const base = info.requiresBaseUrl ? config.baseUrl?.trim() : info.defaultBaseUrl;
  if (!base) throw new Error('Informe a Base URL do provedor nas Configurações.');
  return base.replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Listagem dinâmica de modelos
// ---------------------------------------------------------------------------

export interface ModelOption {
  id: string;
  label: string;
}

async function readError(res: Response): Promise<string> {
  const data = await res.json().catch(() => null);
  return (
    data?.error?.message ||
    data?.error ||
    data?.message ||
    `Erro HTTP ${res.status}`
  );
}

export async function listModels(config: Omit<AIConfig, 'model'>): Promise<ModelOption[]> {
  const apiKey = config.apiKey.trim();
  if (!apiKey) throw new Error('Informe a API key antes de buscar os modelos.');

  const base = resolveBaseUrl({ ...config, model: '' });

  if (config.provider === 'gemini') {
    const res = await fetch(`${base}/models?key=${encodeURIComponent(apiKey)}&pageSize=200`);
    if (!res.ok) throw new Error(await readError(res));
    const data = await res.json();
    return (data?.models ?? [])
      .filter((m: { supportedGenerationMethods?: string[] }) =>
        m.supportedGenerationMethods?.includes('generateContent'))
      .map((m: { name: string; displayName?: string }) => {
        const id = m.name.replace(/^models\//, '');
        return { id, label: m.displayName ? `${m.displayName} (${id})` : id };
      })
      .sort((a: ModelOption, b: ModelOption) => a.id.localeCompare(b.id));
  }

  if (config.provider === 'anthropic') {
    const res = await fetch(`${base}/models?limit=1000`, {
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
        'anthropic-dangerous-direct-browser-access': 'true',
      },
    });
    if (!res.ok) throw new Error(await readError(res));
    const data = await res.json();
    return (data?.data ?? [])
      .map((m: { id: string; display_name?: string }) => ({
        id: m.id,
        label: m.display_name ? `${m.display_name} (${m.id})` : m.id,
      }));
  }

  // OpenAI e compatíveis usam GET /models com Bearer.
  const res = await fetch(`${base}/models`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) throw new Error(await readError(res));
  const data = await res.json();
  return (data?.data ?? [])
    .map((m: { id: string }) => ({ id: m.id, label: m.id }))
    .sort((a: ModelOption, b: ModelOption) => a.id.localeCompare(b.id));
}

// ---------------------------------------------------------------------------
// Geração de conteúdo (texto -> texto, com resposta em JSON quando possível)
// ---------------------------------------------------------------------------

export interface GenerateOptions {
  prompt: string;
  temperature?: number;
  maxOutputTokens?: number;
  /** Pede ao provedor para responder estritamente em JSON quando suportado. */
  jsonMode?: boolean;
}

/**
 * Envia o prompt para o provedor configurado e devolve o texto da resposta.
 * Abstrai as diferenças de endpoint, headers e formato de body/resposta.
 */
export async function generateContent(config: AIConfig, options: GenerateOptions): Promise<string> {
  const apiKey = config.apiKey.trim();
  if (!apiKey) throw new Error('Configure sua API key nas Configurações antes de usar o quiz com IA.');
  if (!config.model) throw new Error('Selecione um modelo nas Configurações antes de usar o quiz com IA.');

  const base = resolveBaseUrl(config);
  const { prompt, temperature = 0.9, maxOutputTokens = 4096, jsonMode = true } = options;

  if (config.provider === 'gemini') {
    const res = await fetch(`${base}/models/${config.model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          maxOutputTokens,
          ...(jsonMode ? { responseMimeType: 'application/json' } : {}),
        },
      }),
    });
    if (!res.ok) throw new Error(await readError(res));
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || '')
      .join('');
    if (!text) throw new Error('Resposta vazia da API.');
    return text;
  }

  if (config.provider === 'anthropic') {
    const res = await fetch(`${base}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: config.model,
        max_tokens: maxOutputTokens,
        temperature,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(await readError(res));
    const data = await res.json();
    const text = (data?.content ?? [])
      .map((block: { type?: string; text?: string }) => (block.type === 'text' ? block.text || '' : ''))
      .join('');
    if (!text) throw new Error('Resposta vazia da API.');
    return text;
  }

  // OpenAI e compatíveis: POST /chat/completions
  const res = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: config.model,
      temperature,
      max_tokens: maxOutputTokens,
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!res.ok) throw new Error(await readError(res));
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('Resposta vazia da API.');
  return text;
}

// ---------------------------------------------------------------------------
// Mensagens de erro amigáveis
// ---------------------------------------------------------------------------

/** Erro normalizado e amigável para exibição na UI. */
export interface AIErrorInfo {
  /** Título curto da falha. */
  title: string;
  /** Explicação do que provavelmente aconteceu e como resolver. */
  detail: string;
  /** Mensagem técnica original (opcional, mostrada em "detalhes"). */
  raw?: string;
  /** Ação sugerida: leva o usuário ao lugar certo. */
  action?: { label: string; to?: string; href?: string };
}

/**
 * Converte uma mensagem de erro bruta da API em algo que o estudante entenda,
 * classificando os casos mais comuns (auth, quota, modelo, rede, CORS).
 */
export function describeAIError(message: string, provider: ProviderId): AIErrorInfo {
  const m = message.toLowerCase();
  const info = getProvider(provider);
  const settingsAction = { label: 'Abrir Configurações', to: '/configuracoes' };

  const isAuth = /401|403|unauthorized|forbidden|api[_ -]?key|invalid.*key|permission|authentication/i.test(m);
  const isQuota = /quota|rate|limit|exceeded|429|insufficient_quota|billing/i.test(m);
  const isZeroFreeTier = /free_tier|limit:\s*0/i.test(m);
  const isModel = /model|not found|404|does not exist|unsupported|decommission/i.test(m);
  const isNetwork = /failed to fetch|networkerror|load failed|cors|err_/i.test(m);

  if (isNetwork) {
    return {
      title: 'Não foi possível conectar ao provedor',
      detail:
        provider === 'openai-compatible'
          ? 'Verifique se a Base URL está correta e acessível pelo navegador. Alguns provedores bloqueiam chamadas diretas do browser (CORS).'
          : 'Verifique sua conexão. O provedor pode estar fora do ar ou bloqueando chamadas diretas do navegador (CORS).',
      raw: message,
      action: settingsAction,
    };
  }

  if (isAuth) {
    return {
      title: 'Chave de API inválida ou sem permissão',
      detail: `A chave configurada para ${info.label} foi recusada. Confira se você colou a chave certa e se ela tem permissão para usar este modelo.`,
      raw: message,
      action: info.apiKeyUrl
        ? { label: 'Gerar nova chave', href: info.apiKeyUrl }
        : settingsAction,
    };
  }

  if (isQuota) {
    return {
      title: 'Limite de uso atingido',
      detail:
        provider === 'gemini' && isZeroFreeTier
          ? 'Sua chave do Gemini está sem quota gratuita para este modelo. Aguarde a renovação do limite, escolha outro modelo ou ative o billing no Google AI Studio.'
          : 'Você atingiu o limite de requisições do seu provedor. Aguarde alguns instantes, gere menos perguntas por lote ou confira sua quota/billing.',
      raw: message,
      action: settingsAction,
    };
  }

  if (isModel) {
    return {
      title: 'Modelo indisponível',
      detail: 'O modelo selecionado não está mais disponível ou não suporta esta operação. Volte às Configurações e busque os modelos novamente.',
      raw: message,
      action: settingsAction,
    };
  }

  return {
    title: 'Não foi possível gerar o quiz',
    detail: 'Ocorreu um erro inesperado ao falar com a IA. Tente novamente em instantes.',
    raw: message,
  };
}
