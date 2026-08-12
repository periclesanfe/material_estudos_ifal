import type { ReactNode } from 'react';
import ConceptCard from '../ui/ConceptCard';
import HighlightBox from '../ui/HighlightBox';
import type { Accent, AccentTextClass, ComparisonRow, ConceptItem, PanelItem, StatItem } from './types';

export type { Accent, AccentTextClass, ComparisonRow, ConceptItem, PanelItem, StatItem };

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  colorClass?: string;
  badge?: string;
}

/** Cabeçalho de seção: badge opcional, título com cor de acento e subtítulo. */
export function SectionHeader({ title, subtitle, colorClass = 'text-accent', badge }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      {badge && (
        <span className="inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
          {badge}
        </span>
      )}
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl text-pretty">{subtitle}</p>
    </div>
  );
}

/**
 * Subseção: título `h3` com cor de acento seguido do conteúdo.
 * Substitui o par `<div><h3 className="font-display …">…</h3>{filhos}</div>`,
 * que se repetia dezenas de vezes nos arquivos de seção.
 */
export function Subsection({
  title,
  accentClass = 'text-accent',
  children,
}: {
  title: string;
  accentClass?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className={`font-display font-bold text-xl ${accentClass} mb-3`}>{title}</h3>
      {children}
    </div>
  );
}

/** Grade de cards de conceito. */
export function ConceptGrid({
  items,
  columns = 'md:grid-cols-2',
}: {
  items: ConceptItem[];
  columns?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${columns}`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

/** Lista de painéis simples. Em grade quando `columns` é informado; senão, coluna única. */
export function PanelList({
  items,
  columns = 'md:grid-cols-2',
}: {
  items: PanelItem[];
  columns?: string;
}) {
  return (
    <div className={columns ? `grid grid-cols-1 gap-3 ${columns}` : 'space-y-3'}>
      {items.map(item => (
        <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
          <h3 className="font-semibold text-sm md:text-base text-text mb-1">{item.title}</h3>
          <p className="reading-measure text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/** Lista de painéis com borda/fundo coloridos em rodízio pelos 5 acentos. */
export function ColoredPanelList({
  items,
  columns = 'md:grid-cols-2',
}: {
  items: PanelItem[];
  columns?: string;
}) {
  const styles = [
    'border-accent/35 bg-accent/8 text-accent',
    'border-accent2/35 bg-accent2/8 text-accent2',
    'border-accent3/35 bg-accent3/8 text-accent3',
    'border-accent4/35 bg-accent4/8 text-accent4',
    'border-accent5/35 bg-accent5/8 text-accent5',
  ];

  return (
    <div className={`grid grid-cols-1 gap-3 ${columns}`}>
      {items.map((item, index) => (
        <div key={item.title} className={`border rounded-xl px-5 py-4 ${styles[index % styles.length]}`}>
          <h3 className="font-semibold text-sm md:text-base mb-1 text-text">{item.title}</h3>
          <p className="reading-measure text-text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/** Faixa de estatísticas (rótulo grande, valor abaixo). */
export function StatStrip({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map(item => (
        <div key={item.label} className="bg-card border border-border rounded-xl px-5 py-5 text-center">
          <p className={`font-display font-black text-2xl tabular-nums ${item.accent}`}>{item.label}</p>
          <p className="text-text-muted text-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

/** Bloco de teoria: título + prosa corrida com medida de leitura confortável. */
export function TheoryBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="study-surface p-5 md:p-6 space-y-3">
      <h3 className="font-display font-bold text-2xl text-text text-pretty">{title}</h3>
      <div className="reading-measure text-text-muted text-sm md:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

/** Caixa de exemplo: wrapper do HighlightBox com acento padrão amarelo. */
export function ExampleBox({
  title,
  children,
  accent = 'var(--color-accent4)',
}: {
  title: string;
  children: ReactNode;
  accent?: string;
}) {
  return (
    <HighlightBox title={title} accent={accent}>
      {children}
    </HighlightBox>
  );
}

/** Tabela comparativa de dois lados, com cabeçalhos coloridos. */
export function ComparisonTable({
  rows,
  leftLabel,
  rightLabel,
  criterionLabel = 'Critério',
}: {
  rows: ComparisonRow[];
  leftLabel: string;
  rightLabel: string;
  /** Cabeçalho da primeira coluna. Padrão: "Critério". */
  criterionLabel?: string;
}) {
  return (
    <div className="overflow-x-auto study-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs w-1/4">{criterionLabel}</th>
            <th className="text-left py-3 px-4 font-semibold text-accent uppercase tracking-wider text-xs">{leftLabel}</th>
            <th className="text-left py-3 px-4 font-semibold text-accent3 uppercase tracking-wider text-xs">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0">
              <td className="py-3 px-4 font-semibold text-text text-xs">{row.criterion}</td>
              <td className="py-3 px-4 text-text-muted text-xs leading-relaxed">{row.left}</td>
              <td className="py-3 px-4 text-text-muted text-xs leading-relaxed">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
