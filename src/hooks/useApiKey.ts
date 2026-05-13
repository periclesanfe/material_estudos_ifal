const SESSION_STORAGE_KEY = 'ifal_bsi_gemini_api_key';

export function useApiKey() {
  const getApiKey = (): string | null => {
    return sessionStorage.getItem(SESSION_STORAGE_KEY);
  };

  const setApiKey = (key: string): void => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, key);
  };

  const removeApiKey = (): void => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  };

  const hasApiKey = (): boolean => {
    const key = getApiKey();
    return !!key && key.trim().length > 0;
  };

  return { getApiKey, setApiKey, removeApiKey, hasApiKey };
}
