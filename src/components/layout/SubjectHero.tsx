import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SITE_LAST_UPDATED_LABEL } from '../../data/siteMetadata';

interface SubjectHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  background: string;
  /** Ações da matéria (ex.: exportar), abaixo da descrição. Opcional. */
  actions?: ReactNode;
}

/** Capa da matéria, exibida apenas na seção de introdução. */
export default function SubjectHero({ eyebrow, title, description, background, actions }: SubjectHeroProps) {
  return (
    <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0" style={{ background }} />
      </div>

      <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
        {eyebrow}
      </p>
      <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
        {title}
      </h1>
      <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
        {description}
      </p>
      {actions}
      <Link
        to="/atualizacoes"
        className="text-text-muted/80 hover:text-text text-xs relative z-10 mt-4 underline underline-offset-2 transition-colors"
      >
        Atualizado em {SITE_LAST_UPDATED_LABEL}
      </Link>
    </div>
  );
}
