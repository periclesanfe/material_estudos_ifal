import type { Ref } from 'react';
import type { ExamTagged } from '../../lib/exams';
import type { SectionNavItem } from './SectionNav';

interface SectionSheetProps {
  ref: Ref<HTMLDivElement>;
  sections: readonly SectionNavItem[];
  /** Rótulo das avaliações da seção, já unindo as várias provas (ex.: "AV1 · AV2"). */
  examBadgeOf: (section: ExamTagged) => string;
  activeSection: string;
  onSelect: (sectionId: string) => void;
  onClose: () => void;
}

/**
 * Folha mobile com a lista completa de seções.
 * Mostra a posição (n de total), o rótulo de avaliação e destaca a seção atual,
 * coisas que a faixa de rolagem horizontal não conseguia comunicar no celular.
 */
export default function SectionSheet({ ref, sections, examBadgeOf, activeSection, onSelect, onClose }: SectionSheetProps) {
  return (
    <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar lista de seções"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Seções da matéria"
        className="relative max-h-[75vh] overflow-y-auto rounded-t-2xl border-t border-border bg-card px-3 pb-6 pt-3"
      >
        <div className="sticky top-0 -mx-3 mb-2 flex items-center justify-between gap-3 border-b border-border bg-card px-3 pb-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">Seções</p>
          <button type="button" onClick={onClose} className="btn-secondary px-3 py-1 text-xs">
            Fechar
          </button>
        </div>

        <ul className="space-y-1.5">
          {sections.map((section, index) => {
            const selected = activeSection === section.id;
            const badge = examBadgeOf(section);
            return (
              <li key={section.id}>
                <button
                  type="button"
                  aria-current={selected}
                  onClick={() => onSelect(section.id)}
                  className={`flex w-full items-center gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    selected
                      ? 'border-accent bg-accent/15 text-text'
                      : 'border-border bg-bg text-text-muted hover:bg-card-hover hover:text-text'
                  }`}
                >
                  <span className="w-5 shrink-0 text-[11px] font-black tabular-nums text-text-muted">{index + 1}</span>
                  {badge && <span className="text-[10px] font-black text-accent">{badge}</span>}
                  <span className="min-w-0 flex-1">{section.shortTitle}</span>
                  {selected && <span className="text-[10px] font-black uppercase text-accent">atual</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
