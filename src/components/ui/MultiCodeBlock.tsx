import { useMemo, useState, type KeyboardEvent } from 'react';
import CodeBlock, { type Language } from './CodeBlock';

/**
 * O mesmo exemplo escrito em várias linguagens. Todas são opcionais: só aparecem
 * abas para as versões realmente fornecidas (fallback).
 *
 * A ordem das abas (ver `ORDER`) segue o peso da linguagem NA DISCIPLINA, não a
 * ordem em que o objeto é escrito: Python primeiro (a linguagem do curso), C em
 * seguida (projeto final e opção de prova de recuperação), e depois as demais,
 * que entram só para comparação conceitual.
 */
export interface MultiCode {
  python?: string;
  c?: string;
  cpp?: string;
  java?: string;
  javascript?: string;
  php?: string;
}

interface MultiCodeBlockProps {
  /** Versões do mesmo exemplo por linguagem (qualquer subconjunto das 5). */
  code: MultiCode;
  /** Título mostrado acima do código (ex.: "Olá, mundo"). */
  title?: string;
  /** Linguagem inicialmente selecionada (default: a primeira disponível). */
  defaultLanguage?: Language;
}

// Ordem fixa das abas e rótulos curtos. Python primeiro: é a linguagem do curso,
// então é ela que abre por padrão quando `defaultLanguage` não é informado.
const ORDER: { key: keyof MultiCode; lang: Language; label: string }[] = [
  { key: 'python', lang: 'python', label: 'Python' },
  { key: 'c', lang: 'c', label: 'C' },
  { key: 'cpp', lang: 'cpp', label: 'C++' },
  { key: 'java', lang: 'java', label: 'Java' },
  { key: 'javascript', lang: 'javascript', label: 'JavaScript' },
  { key: 'php', lang: 'php', label: 'PHP' },
];

export default function MultiCodeBlock({ code, title, defaultLanguage }: MultiCodeBlockProps) {
  // Só as linguagens que foram fornecidas, na ordem fixa.
  const available = useMemo(
    () => ORDER.filter(entry => typeof code[entry.key] === 'string' && code[entry.key]!.trim().length > 0),
    [code],
  );

  const initial = useMemo(() => {
    const preferida = available.find(entry => entry.lang === defaultLanguage);
    return (preferida ?? available[0])?.lang;
  }, [available, defaultLanguage]);

  const [active, setActive] = useState<Language | undefined>(initial);

  if (available.length === 0) return null;

  const activeEntry = available.find(entry => entry.lang === active) ?? available[0];
  const activeCode = code[activeEntry.key]!;

  // Setas esquerda/direita navegam entre as abas (roving tabindex).
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const idx = available.findIndex(entry => entry.lang === activeEntry.lang);
    const next = available[(idx + delta + available.length) % available.length];
    setActive(next.lang);
  };

  return (
    <div className="space-y-2">
      <div
        role="tablist"
        aria-label={title ? `Linguagem do exemplo: ${title}` : 'Linguagem do exemplo'}
        onKeyDown={handleKeyDown}
        className="flex flex-wrap gap-1.5"
      >
        {available.map(entry => {
          const selected = entry.lang === activeEntry.lang;
          return (
            <button
              key={entry.lang}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(entry.lang)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                selected
                  ? 'bg-accent text-white'
                  : 'bg-card border border-border text-text-muted hover:border-border-hover hover:text-text'
              }`}
            >
              {entry.label}
            </button>
          );
        })}
      </div>

      {/* key força o re-render (e o realce) ao trocar de linguagem */}
      <CodeBlock key={activeEntry.lang} code={activeCode} language={activeEntry.lang} title={title} />
    </div>
  );
}
