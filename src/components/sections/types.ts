// Tipos compartilhados pelos componentes de seção do conteúdo das matérias.

/**
 * Nome curto do acento, usado por `ConceptCard` — que resolve o nome para a variável CSS
 * correspondente. Não é uma classe Tailwind: veja `AccentTextClass`.
 */
export type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

/**
 * Classe Tailwind de cor de texto, aplicada direto no `className` (ex.: `StatStrip`).
 * Convenção diferente de `Accent`: aqui o valor já é a classe, com o prefixo `text-`.
 * Tipar isto impede o engano de passar `'accent'` e renderizar sem cor.
 */
export type AccentTextClass =
  | 'text-accent'
  | 'text-accent2'
  | 'text-accent3'
  | 'text-accent4'
  | 'text-accent5';

export interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

export interface PanelItem {
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  accent: AccentTextClass;
}

export interface ComparisonRow {
  criterion: string;
  left: string;
  right: string;
}
