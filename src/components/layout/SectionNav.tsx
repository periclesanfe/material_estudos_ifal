import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { motion } from 'motion/react';
import { examIdsOf, type ExamDefinition, type ExamTagged } from '../../lib/exams';
import { useMovimentoReduzido } from '../../hooks/useMovimentoReduzido';
import { DESLIZE } from '../../lib/movimento';
import SectionSheet from './SectionSheet';

export interface SectionNavItem extends ExamTagged {
  id: string;
  shortTitle: string;
}

interface SectionNavProps {
  sections: readonly SectionNavItem[];
  /** Avaliações declaradas pela matéria; sem elas os ids das seções viram rótulo. */
  exams?: readonly ExamDefinition[];
  activeSection: string;
  /** `moveFocusToContent` leva o foco ao painel; usado ao escolher, não ao percorrer com setas. */
  onSelect: (sectionId: string, moveFocusToContent?: boolean) => void;
  /**
   * Id do painel controlado pelas abas. As matérias que ainda não usam
   * `SubjectContentLayout` não renderizam o painel, então omitem o vínculo.
   */
  panelId?: string;
}

/**
 * Navegação entre seções da matéria.
 *
 * No desktop mostra o tablist horizontal completo. No mobile, onde as 10–18 seções
 * das matérias somam mais de 1.700px e viravam uma faixa de rolagem horizontal quase
 * invisível, mostra um botão com a seção atual que abre uma folha com a lista inteira.
 */
export default function SectionNav({ sections, exams, activeSection, onSelect, panelId }: SectionNavProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const reduzido = useMovimentoReduzido();
  const tablistRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const activeIndex = Math.max(0, sections.findIndex(section => section.id === activeSection));
  const active = sections[activeIndex];

  /**
   * Rótulo das avaliações da seção. Uma seção pode cair em mais de uma prova
   * (ex.: Big O em AV1 e AV2), então todas entram no badge, não só a primeira.
   * A matéria pode renomear cada id via `exams`.
   */
  const examBadgeOf = useMemo(() => {
    const labels = new Map(exams?.map(exam => [exam.id, exam.label]));
    return (section: ExamTagged) => examIdsOf(section).map(id => labels.get(id) ?? id).join(' · ');
  }, [exams]);

  const activeBadge = active ? examBadgeOf(active) : '';

  // Fecha a folha com Escape e devolve o foco ao botão que a abriu.
  useEffect(() => {
    if (!sheetOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSheetOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Leva o foco para a seção atual ao abrir, para quem navega por teclado.
    sheetRef.current?.querySelector<HTMLButtonElement>('[aria-current="true"]')?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sheetOpen]);

  const selectFromSheet = (sectionId: string) => {
    setSheetOpen(false);
    onSelect(sectionId, true);
  };

  // Navegação por teclado no tablist: setas movem o foco entre as abas (roving tabindex).
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyToDelta: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let nextIndex: number | null = null;

    if (event.key in keyToDelta) {
      nextIndex = (index + keyToDelta[event.key] + sections.length) % sections.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = sections.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    const buttons = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
    onSelect(sections[nextIndex].id);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setSheetOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={sheetOpen}
        className="sm:hidden glass border border-border rounded-xl px-4 py-3 flex items-center justify-between gap-3 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
            Seção {activeIndex + 1} de {sections.length}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-bold text-text truncate">
            {activeBadge && <span className="text-[10px] font-black text-accent">{activeBadge}</span>}
            {active?.shortTitle}
          </span>
        </span>
        <svg className="h-4 w-4 shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {sheetOpen && (
        <SectionSheet
          ref={sheetRef}
          sections={sections}
          examBadgeOf={examBadgeOf}
          activeSection={activeSection}
          onSelect={selectFromSheet}
          onClose={() => {
            setSheetOpen(false);
            triggerRef.current?.focus();
          }}
        />
      )}

      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Seções da matéria"
        aria-orientation="horizontal"
        className="hidden sm:flex sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 gap-2 overflow-x-auto whitespace-nowrap flex-1 min-w-0"
      >
        {sections.map((section, index) => {
          const selected = activeSection === section.id;
          const badge = examBadgeOf(section);
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`tab-${section.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => onSelect(section.id, true)}
              onKeyDown={event => handleTabKeyDown(event, index)}
              className={`study-pill relative px-3 py-1.5 inline-flex items-center gap-1.5 ${selected ? 'active' : ''}`}
            >
              {/* O fio de estado ativo é um elemento ÚNICO, compartilhado por
                  layoutId: em vez de acender e apagar em cada aba, ele desliza da
                  anterior até a nova. É o gesto que mais separa interface
                  cuidada de interface montada às pressas. */}
              {selected && !reduzido && (
                <motion.span
                  layoutId="secao-ativa"
                  transition={DESLIZE}
                  className="pointer-events-none absolute inset-x-1 -bottom-px h-[2px] bg-accent"
                />
              )}
              {badge && <span className="font-mono text-micro opacity-70">{badge}</span>}
              {section.shortTitle}
            </button>
          );
        })}
      </div>
    </>
  );
}
