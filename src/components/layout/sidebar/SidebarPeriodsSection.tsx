import type { Period } from '../../../data/curriculum';
import SidebarSubjectLink from './SidebarSubjectLink';

interface SidebarPeriodsSectionProps {
  periods: Period[];
  pathname: string;
  expandedPeriods: Set<string>;
  onTogglePeriod: (key: string) => void;
  onNavigate: () => void;
}

export default function SidebarPeriodsSection({
  periods,
  pathname,
  expandedPeriods,
  onTogglePeriod,
  onNavigate,
}: SidebarPeriodsSectionProps) {
  return (
    <div>
      <p className="px-2 mb-1.5 text-[10px] font-semibold text-text-muted/70 uppercase tracking-[0.18em]">Períodos</p>
      <div className="space-y-1">
        {periods.filter(period => period.number !== 'optativa').map(period => {
          const key = `p${period.number}`;
          const isExpanded = expandedPeriods.has(key);
          const hasActiveChild = period.subjects.some(s => pathname === `/materia/${s.slug}`);

          return (
            <div key={key}>
              <button
                onClick={() => onTogglePeriod(key)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  hasActiveChild
                    ? 'text-text bg-accent/15 border border-accent/20'
                    : 'text-text-muted hover:text-text hover:bg-card-hover'
                }`}
              >
                <span>{period.label}</span>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-text-muted/70">{period.subjects.length}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="ml-3 pl-3 border-l border-border space-y-0.5 mt-1.5 animate-fade-in">
                  {period.subjects.map(subject => (
                    <SidebarSubjectLink key={subject.id} subject={subject} onNavigate={onNavigate} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
