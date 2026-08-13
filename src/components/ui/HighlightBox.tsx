import type { ReactNode } from 'react';

interface HighlightBoxProps {
  title?: string;
  children: ReactNode;
  accent?: string;
}

export default function HighlightBox({ title, children, accent }: HighlightBoxProps) {
  const borderColor = accent || 'rgba(99, 102, 241, 0.3)';
  const titleColor = accent || 'var(--color-accent)';

  return (
    <div
      className="highlight-box"
      style={{ borderColor }}
    >
      {title && <h3 className="font-display font-bold text-2xl mb-2 text-pretty" style={{ color: titleColor }}>{title}</h3>}
      <div className="reading-measure text-text text-sm md:text-base leading-relaxed space-y-1.5">{children}</div>
    </div>
  );
}
