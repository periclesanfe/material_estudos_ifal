import { lazy, Suspense, type ComponentType } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSubjectBySlug } from '../data/curriculum';
import { SITE_LAST_UPDATED_LABEL } from '../data/siteMetadata';
import NotFoundPage from './NotFoundPage';
import { importadoresConteudo } from '../content/registro';

/** Construído a partir dos importadores compartilhados: ver src/content/registro.ts. */
const contentRegistry: Record<string, ComponentType> = Object.fromEntries(
  Object.entries(importadoresConteudo).map(([slug, importar]) => [slug, lazy(importar)]),
);

function SubjectContentFallback() {
  return (
    <div className="page-wrap py-10 md:py-12 animate-fade-in">
      <section className="study-surface px-6 py-12 md:px-10 md:py-14 text-center">
        <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin mx-auto" />
        <p className="text-text-muted text-sm mt-4">Carregando conteúdo da matéria…</p>
      </section>
    </div>
  );
}

export default function SubjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const subject = slug ? getSubjectBySlug(slug) : undefined;

  if (!subject) {
    return <NotFoundPage />;
  }

  const ContentComponent = contentRegistry[subject.slug];

  if (!ContentComponent || !subject.hasContent) {
    return (
      <div className="page-wrap py-10 md:py-12 animate-fade-in content-stack">
        <section className="study-surface relative overflow-hidden px-6 py-12 md:px-10 md:py-14 text-center">
          <div className="absolute inset-0 pointer-events-none opacity-45">
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 50% 35%, rgba(99, 102, 241,0.18) 0%, transparent 50%)' }}
            />
          </div>

          <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase relative z-10 mb-4">
            {subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`} · {subject.hours}h · {subject.code}
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text relative z-10 mb-3 tracking-tight">{subject.name}</h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-xl mx-auto mb-3">
            Esta matéria ainda não tem conteúdo disponível. Quer ser o primeiro a contribuir?
          </p>
          <Link
            to="/atualizacoes"
            className="text-text-muted/80 hover:text-text text-xs relative z-10 mb-7 inline-block underline underline-offset-2 transition-colors"
          >
            Atualizado em {SITE_LAST_UPDATED_LABEL}
          </Link>
          <div className="flex gap-2 flex-wrap justify-center relative z-10">
            <a
              href="https://github.com/periclesanfe/material_estudos_ifal/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-xs md:text-sm"
            >
              Abrir Issue
            </a>
            <a
              href="https://github.com/periclesanfe/material_estudos_ifal/blob/main/.github/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-2.5 text-xs md:text-sm"
            >
              Como contribuir
            </a>
          </div>
        </section>

        <section className="study-surface p-6 md:p-7">
          <h2 className="font-semibold text-[11px] text-text-muted uppercase tracking-[0.16em] mb-4">Informações da Matéria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Código', value: subject.code },
              { label: 'Carga Horária', value: `${subject.hours}h` },
              { label: 'Período', value: subject.period === 'optativa' ? 'Optativa' : `${subject.period}º` },
              { label: 'Eixo', value: subject.axis },
            ].map(info => (
              <div key={info.label} className="text-center study-surface py-3 px-2">
                <span className="text-text-muted text-[11px] font-semibold block mb-0.5 uppercase tracking-[0.14em]">{info.label}</span>
                <span className="font-semibold text-sm md:text-base text-text">{info.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <Suspense fallback={<SubjectContentFallback />}>
      <ContentComponent />
    </Suspense>
  );
}
