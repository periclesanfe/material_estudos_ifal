import { useMemo } from 'react';

interface VideoEmbedProps {
  /** URL do vídeo no YouTube ou Google Drive (aceita vários formatos). */
  url: string;
  /** Título exibido acima do player e usado no iframe (acessibilidade). */
  title: string;
  /** Texto opcional de apoio abaixo do título. */
  description?: string;
}

type Provider = 'youtube' | 'drive' | 'unknown';

interface ResolvedVideo {
  provider: Provider;
  /** URL pronta para o src do iframe, ou null se não reconhecida. */
  embedUrl: string | null;
  providerLabel: string;
}

/** Extrai o ID de um vídeo do YouTube em qualquer um dos formatos usuais. */
function parseYouTubeId(u: URL): string | null {
  const host = u.hostname.replace(/^www\./, '');

  if (host === 'youtu.be') {
    return u.pathname.slice(1) || null;
  }
  if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
    // /watch?v=ID
    const v = u.searchParams.get('v');
    if (v) return v;
    // /embed/ID, /shorts/ID, /live/ID
    const match = u.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/);
    if (match) return match[1];
  }
  return null;
}

/** Extrai o ID de um arquivo do Google Drive. */
function parseDriveId(u: URL): string | null {
  if (!u.hostname.endsWith('drive.google.com')) return null;
  // /file/d/ID/view
  const match = u.pathname.match(/\/file\/d\/([^/]+)/);
  if (match) return match[1];
  // ?id=ID (formato open/uc)
  return u.searchParams.get('id');
}

function resolveVideo(rawUrl: string): ResolvedVideo {
  let u: URL;
  try {
    u = new URL(rawUrl.trim());
  } catch {
    return { provider: 'unknown', embedUrl: null, providerLabel: 'Vídeo' };
  }

  const youtubeId = parseYouTubeId(u);
  if (youtubeId) {
    return {
      provider: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
      providerLabel: 'YouTube',
    };
  }

  const driveId = parseDriveId(u);
  if (driveId) {
    return {
      provider: 'drive',
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
      providerLabel: 'Google Drive',
    };
  }

  return { provider: 'unknown', embedUrl: null, providerLabel: 'Vídeo' };
}

/**
 * Player de vídeo incorporado (YouTube ou Google Drive), com proporção 16:9
 * responsiva, carregamento tardio e fallback para abrir em nova aba.
 */
export default function VideoEmbed({ url, title, description }: VideoEmbedProps) {
  const { embedUrl, providerLabel } = useMemo(() => resolveVideo(url), [url]);

  return (
    <div className="study-surface overflow-hidden">
      <div className="border-b border-border p-5 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">{providerLabel}</p>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1 min-w-0">
            <h3 className="font-display text-2xl font-bold text-text text-pretty">{title}</h3>
            {description && (
              <p className="max-w-2xl text-sm leading-relaxed text-text-muted reading-measure">{description}</p>
            )}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex shrink-0 items-center justify-center px-4 py-2 text-xs"
          >
            Abrir em nova aba
          </a>
        </div>
      </div>

      <div className="p-3 md:p-4">
        {embedUrl ? (
          <div className="overflow-hidden rounded-xl border border-border bg-black">
            {/* Proporção 16:9 sem depender de plugin: padding-top de 56.25% */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={embedUrl}
                title={title}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div role="alert" className="rounded-xl border border-accent2/25 bg-accent2/10 p-4 text-sm leading-relaxed">
            <p className="font-semibold text-accent2">Não foi possível incorporar este vídeo</p>
            <p className="text-text-muted mt-1">
              O link não parece ser um vídeo público do YouTube ou do Google Drive. Use o botão
              “Abrir em nova aba” para assistir diretamente na fonte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
