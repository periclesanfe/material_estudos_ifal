import { useId, useState, type KeyboardEvent, type ReactNode } from 'react';

type QuizFormat = 'quiz' | 'kahoot';
type QuizSource = 'normal' | 'ia';

interface QuizTabsProps {
  normal: ReactNode;
  ai: ReactNode;
  kahoot: ReactNode;
  aiKahoot: ReactNode;
}

const formatOptions: { id: QuizFormat; label: string }[] = [
  { id: 'quiz', label: 'Quiz' },
  { id: 'kahoot', label: 'Kahoot' },
];

const sourceOptions: { id: QuizSource; label: string; hint?: string }[] = [
  { id: 'normal', label: 'Normal' },
  { id: 'ia', label: 'IA' },
];

/** Grupo de alternância acessível (escolha 1 de N) com indicador deslizante. */
function ToggleGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string; hint?: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  const activeIndex = options.findIndex(option => option.id === value);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (activeIndex + delta + options.length) % options.length;
    onChange(options[next].id);
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className="relative grid grid-cols-2 gap-1 rounded-lg bg-bg/50 p-1"
    >
      {/* Indicador deslizante */}
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-md bg-accent shadow-[0_6px_18px_rgba(99, 102, 241,0.3)] transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 0.5rem) / ${options.length})`,
          transform: `translateX(calc(${activeIndex} * 100%))`,
        }}
      />
      {options.map(option => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.id)}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2 text-sm font-bold transition-colors duration-200 ${
              selected ? 'text-white' : 'text-text-muted hover:text-text'
            }`}
          >
            {option.label}
            {option.id === 'ia' && (
              <span
                className={`text-[9px] font-black uppercase tracking-wider rounded px-1 py-0.5 leading-none transition-colors ${
                  selected ? 'bg-white/20 text-white' : 'bg-accent3/15 text-accent3'
                }`}
              >
                key
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function QuizTabs({ normal, ai, kahoot, aiKahoot }: QuizTabsProps) {
  const [format, setFormat] = useState<QuizFormat>('quiz');
  const [source, setSource] = useState<QuizSource>('normal');
  const panelId = useId();

  const activeContent = {
    quiz: { normal, ia: ai },
    kahoot: { normal: kahoot, ia: aiKahoot },
  }[format][source];

  return (
    <div className="space-y-4">
      <div className="glass border border-border rounded-xl p-1.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <ToggleGroup label="Tipo de quiz" options={formatOptions} value={format} onChange={setFormat} />
        <ToggleGroup label="Origem das perguntas" options={sourceOptions} value={source} onChange={setSource} />
      </div>

      <div id={panelId} key={`${format}-${source}`} className="panel-enter">
        {activeContent}
      </div>
    </div>
  );
}
