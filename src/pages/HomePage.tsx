import { NavLink } from 'react-router-dom';
import { getSubjectsWithContent, getTotalSubjects, getSubjectsWithContentCount } from '../data/curriculum';
import { SITE_LAST_UPDATED_LABEL } from '../data/siteMetadata';

export default function HomePage() {
  const subjectsWithContent = getSubjectsWithContent();
  const totalSubjects = getTotalSubjects();
  const contentCount = getSubjectsWithContentCount();
  const progressPercent = Math.round((contentCount / totalSubjects) * 100);

  return (
    <div className="page-wrap py-10 md:py-12 animate-fade-in content-stack">
      <section className="study-surface relative overflow-hidden px-6 py-12 md:px-10 md:py-14 text-center">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 25% 30%, rgba(108,99,255,0.16) 0%, transparent 46%), radial-gradient(circle at 75% 65%, rgba(78,205,196,0.08) 0%, transparent 44%)',
            }}
          />
        </div>

        <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
          Bacharelado em Sistemas de Informação · IFAL
        </p>
        <h1 className="font-display font-black text-5xl md:text-7xl text-text relative z-10 mb-4 leading-[1.03] tracking-tight">
          Material de <span className="gradient-text">Estudo</span>
        </h1>
        <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl mx-auto leading-relaxed">
          Conteúdos organizados por matéria, quizzes interativos e geração de perguntas por IA.
        </p>
        <p className="text-text-muted/80 text-xs relative z-10 mt-4">
          Atualizado em {SITE_LAST_UPDATED_LABEL}
        </p>
      </section>

      <section className="study-surface p-5 md:p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-semibold text-[11px] text-text-muted uppercase tracking-[0.16em]">Progresso do Conteúdo</h2>
          <span className="text-accent font-bold text-sm tabular-nums">
            {contentCount}/{totalSubjects} matérias
          </span>
        </div>
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{
              width: `${Math.max(progressPercent, 2)}%`,
              background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent3))',
            }}
          />
        </div>
      </section>

      {subjectsWithContent.length > 0 && (
        <section className="space-y-4">
          <h2 className="section-title text-accent">Matérias Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {subjectsWithContent.map(subject => (
              <NavLink
                key={subject.id}
                to={`/materia/${subject.slug}`}
                className="study-surface study-surface-hover px-4 py-3.5 group flex items-center justify-between min-h-[78px]"
              >
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-text group-hover:text-accent transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-text-muted text-xs md:text-sm mt-0.5">
                    {subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`} · {subject.hours}h · {subject.code}
                  </p>
                </div>
                <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            ))}
          </div>
        </section>
      )}

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {[
          { label: 'Períodos', value: '8' },
          { label: 'Matérias', value: String(totalSubjects) },
          { label: 'Com conteúdo', value: String(contentCount) },
          { label: 'Quiz IA', value: '∞' },
        ].map(stat => (
          <div key={stat.label} className="study-surface p-4 text-center">
            <span className="font-display font-black text-2xl text-text block">{stat.value}</span>
            <span className="text-text-muted text-[11px] font-semibold uppercase tracking-[0.14em]">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="study-surface p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h3 className="font-semibold text-sm md:text-base text-text mb-1">Quer contribuir?</h3>
          <p className="text-text-muted text-sm">
            Adicione conteúdo de qualquer matéria seguindo nosso guia de contribuição.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap md:flex-nowrap">
          <a
            href="https://github.com/periclesanfe/material_estudos_ifal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2.5 text-xs md:text-sm"
          >
            Ver no GitHub
          </a>
          <NavLink
            to="/configuracoes"
            className="btn-secondary px-4 py-2.5 text-xs md:text-sm"
          >
            Configurar Quiz IA
          </NavLink>
        </div>
      </section>
    </div>
  );
}
