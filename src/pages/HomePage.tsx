import { NavLink } from 'react-router-dom';
import SubjectCatalog from '../components/ui/SubjectCatalog';
import subjects, { getTotalSubjects, getSubjectsWithContentCount } from '../data/curriculum';
import { SITE_LAST_UPDATED_LABEL } from '../data/siteMetadata';

export default function HomePage() {
  const totalSubjects = getTotalSubjects();
  const contentCount = getSubjectsWithContentCount();
  const progressPercent = Math.round((contentCount / totalSubjects) * 100);

  return (
    <div className="page-wrap py-10 md:py-12 content-stack stagger-children">
      <section className="study-surface relative overflow-hidden px-6 py-14 md:px-10 md:py-20 text-center">
        <div className="home-hero-bg absolute inset-0 pointer-events-none opacity-70">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 25% 30%, rgba(108,99,255,0.18) 0%, transparent 46%), radial-gradient(circle at 75% 65%, rgba(78,205,196,0.10) 0%, transparent 44%)',
            }}
          />
        </div>

        <p className="text-accent text-[11px] font-bold tracking-[0.22em] uppercase relative z-10 mb-4">
          Bacharelado em Sistemas de Informação · IFAL
        </p>
        <h1 className="font-display font-black text-5xl md:text-7xl text-text relative z-10 mb-4 leading-[1.03] tracking-tight text-balance">
          Material de <span className="gradient-text">Estudo</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg relative z-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Conteúdos organizados por matéria, quizzes interativos e geração de perguntas por IA.
        </p>
        <NavLink
          to="/atualizacoes"
          className="text-text-muted/80 hover:text-text text-xs relative z-10 mt-4 inline-block underline underline-offset-2 transition-colors"
        >
          Atualizado em {SITE_LAST_UPDATED_LABEL}
        </NavLink>
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

      <SubjectCatalog subjects={subjects} />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {[
          { label: 'Períodos', value: '8' },
          { label: 'Matérias', value: String(totalSubjects) },
          { label: 'Com conteúdo', value: String(contentCount) },
          { label: 'Quiz IA', value: '∞' },
        ].map(stat => (
          <div key={stat.label} className="study-surface card-hover p-4 text-center">
            <span className="font-display font-black text-3xl text-accent block tabular-nums leading-none mb-1.5">{stat.value}</span>
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
