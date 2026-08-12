import { useMemo, useState } from 'react';

export interface ExternalBookChapter {
  id: string;
  title: string;
  shortTitle: string;
  url: string;
}

interface ExternalBookReaderProps {
  title: string;
  description: string;
  chapters: readonly ExternalBookChapter[];
}

export default function ExternalBookReader({ title, description, chapters }: ExternalBookReaderProps) {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? '');
  const activeChapter = useMemo(
    () => chapters.find(chapter => chapter.id === activeChapterId) ?? chapters[0],
    [activeChapterId, chapters],
  );

  if (!activeChapter) {
    return null;
  }

  return (
    <div className="study-surface overflow-hidden">
      <div className="border-b border-border p-5 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">Livro base</p>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-bold text-text">{title}</h3>
            <p className="max-w-2xl text-sm leading-relaxed text-text-muted">{description}</p>
          </div>
          <a
            href={activeChapter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center px-4 py-2 text-xs"
          >
            Abrir capítulo
          </a>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="border-b border-border p-3 lg:border-b-0 lg:border-r">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {chapters.map(chapter => {
              const active = chapter.id === activeChapter.id;

              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    active
                      ? 'border-accent bg-accent/10 text-text'
                      : 'border-border bg-bg/40 text-text-muted hover:border-border-hover hover:text-text'
                  }`}
                >
                  <span className="block text-xs font-bold">{chapter.shortTitle}</span>
                  <span className="block text-[11px] leading-snug">{chapter.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 p-3 md:p-4">
          <div className="overflow-hidden rounded-xl border border-border bg-bg">
            <iframe
              key={activeChapter.url}
              src={activeChapter.url}
              title={`Leitor externo - ${activeChapter.title}`}
              className="h-[560px] w-full bg-white"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs leading-relaxed text-text-muted">
            O capítulo é carregado diretamente do site externo. Se o navegador bloquear a incorporação,
            use o botão para abrir o material em uma nova aba.
          </p>
        </div>
      </div>
    </div>
  );
}
