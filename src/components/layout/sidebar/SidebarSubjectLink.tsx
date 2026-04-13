import { NavLink } from 'react-router-dom';
import type { Subject } from '../../../data/curriculum';

interface SidebarSubjectLinkProps {
  subject: Subject;
  onNavigate: () => void;
}

export default function SidebarSubjectLink({ subject, onNavigate }: SidebarSubjectLinkProps) {
  return (
    <NavLink
      to={`/materia/${subject.slug}`}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm leading-snug transition-all duration-200 ${
          isActive
            ? 'bg-accent/20 text-text border border-accent/30 shadow-[0_6px_16px_rgba(108,99,255,0.2)]'
            : subject.hasContent
              ? 'text-text-muted hover:text-text hover:bg-white/[0.04]'
              : 'text-text-muted/55 hover:text-text-muted/80'
        }`
      }
    >
      <span className="truncate flex-1">{subject.name}</span>
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${subject.hasContent ? 'bg-accent5' : 'bg-border'}`}
      />
    </NavLink>
  );
}
