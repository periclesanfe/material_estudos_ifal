import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { Subject } from '../../data/curriculum';

type ContentFilter = 'all' | 'documented' | 'pending';

interface SubjectCatalogProps {
  subjects: Subject[];
}

const filterOptions: { id: ContentFilter; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'documented', label: 'Com conteúdo' },
  { id: 'pending', label: 'Sem conteúdo' },
];

function subjectMeta(subject: Subject) {
  const period = subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`;
  return `${period} · ${subject.hours}h · ${subject.code}`;
}

export default function SubjectCatalog({ subjects }: SubjectCatalogProps) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<ContentFilter>('all');

  const filteredSubjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');

    return subjects.filter(subject => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'documented' && subject.hasContent) ||
        (filter === 'pending' && !subject.hasContent);
      const matchesQuery = subject.name.toLocaleLowerCase('pt-BR').includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query, subjects]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title text-accent">Catálogo de Matérias</h2>
          <p className="section-subtitle max-w-2xl">
            Busque por disciplina e filtre pelo status da documentação.
          </p>
        </div>
        <span className="text-text-muted text-xs font-semibold tabular-nums">
          {filteredSubjects.length}/{subjects.length} matérias
        </span>
      </div>

      <div className="study-surface p-3 md:p-4 space-y-3">
        <input
          type="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Buscar por título da disciplina"
          className="w-full bg-bg border border-border rounded-lg px-3 py-2.5 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-accent"
        />
        <div className="grid grid-cols-3 gap-1.5 rounded-lg border border-border bg-bg/40 p-1 text-xs font-bold">
          {filterOptions.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={filter === option.id}
              className={`rounded-md px-2 py-2 transition-colors ${filter === option.id ? 'bg-accent text-white' : 'text-text-muted hover:text-text'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredSubjects.map(subject => (
            <NavLink
              key={subject.id}
              to={`/materia/${subject.slug}`}
              className="study-surface study-surface-hover px-4 py-3.5 group flex items-center justify-between min-h-[78px]"
            >
              <div>
                <h3 className="font-semibold text-sm md:text-base text-text group-hover:text-accent transition-colors">
                  {subject.name}
                </h3>
                <p className="text-text-muted text-xs md:text-sm mt-0.5">{subjectMeta(subject)}</p>
              </div>
              <span className={`ml-3 shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${subject.hasContent ? 'bg-accent/10 text-accent' : 'bg-card-hover text-text-muted'}`}>
                {subject.hasContent ? 'Com conteúdo' : 'Pendente'}
              </span>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="study-surface p-6 text-center text-sm text-text-muted">
          Nenhuma matéria encontrada.
        </div>
      )}
    </section>
  );
}
