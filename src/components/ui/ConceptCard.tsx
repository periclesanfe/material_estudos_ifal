interface ConceptCardProps {
  title: string;
  description: string;
  accent?: 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';
}

const accentColors = {
  accent: 'var(--color-accent)',
  accent2: 'var(--color-accent2)',
  accent3: 'var(--color-accent3)',
  accent4: 'var(--color-accent4)',
  accent5: 'var(--color-accent5)',
};

export default function ConceptCard({ title, description, accent = 'accent' }: ConceptCardProps) {
  return (
    <div className="concept-card" data-accent={accent}>
      <h3 className="font-display font-bold text-xl mb-1.5 leading-tight" style={{ color: accentColors[accent] }}>{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
