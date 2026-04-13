import { getOptativesByCategory, optativeCategories } from '../../../data/curriculum';
import SidebarSubjectLink from './SidebarSubjectLink';

interface SidebarOptativesSectionProps {
  expandedPeriods: Set<string>;
  expandedOptCategories: Set<string>;
  onTogglePeriod: (key: string) => void;
  onToggleOptCategory: (key: string) => void;
  onNavigate: () => void;
}

export default function SidebarOptativesSection({
  expandedPeriods,
  expandedOptCategories,
  onTogglePeriod,
  onToggleOptCategory,
  onNavigate,
}: SidebarOptativesSectionProps) {
  return (
    <div>
      <p className="px-2 mb-1.5 text-[10px] font-semibold text-text-muted/70 uppercase tracking-[0.18em]">Optativas</p>

      <button
        onClick={() => onTogglePeriod('opt')}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          expandedPeriods.has('opt')
            ? 'text-text bg-accent/15 border border-accent/20'
            : 'text-text-muted hover:text-text hover:bg-white/[0.04]'
        }`}
      >
        <span>Categorias</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedPeriods.has('opt') ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {expandedPeriods.has('opt') && (
        <div className="ml-3 pl-3 border-l border-white/10 space-y-1 mt-1.5 animate-fade-in">
          {(Object.keys(optativeCategories) as Array<keyof typeof optativeCategories>).map(catKey => {
            const isCatExpanded = expandedOptCategories.has(catKey);
            const subjects = getOptativesByCategory(catKey);
            const cat = optativeCategories[catKey];

            return (
              <div key={catKey}>
                <button
                  onClick={() => onToggleOptCategory(catKey)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isCatExpanded
                      ? 'text-text bg-white/[0.04]'
                      : 'text-text-muted hover:text-text hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isCatExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {isCatExpanded && (
                  <div className="ml-3 pl-3 border-l border-white/10 space-y-0.5 mt-1 animate-fade-in">
                    {subjects.map(subject => (
                      <SidebarSubjectLink key={subject.id} subject={subject} onNavigate={onNavigate} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
