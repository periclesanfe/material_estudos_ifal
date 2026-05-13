import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-wrap min-h-screen py-12 md:py-16 flex items-center animate-fade-in">
      <section className="w-full overflow-hidden">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
          <div className="relative min-h-[15rem] flex items-center justify-center border-y border-border">
            <div className="absolute inset-0 pointer-events-none opacity-80 bg-[linear-gradient(135deg,transparent_0_20%,rgba(108,99,255,0.18)_20%_21%,transparent_21%_44%,rgba(78,205,196,0.16)_44%_45%,transparent_45%_100%)]" />
            <p className="relative font-display font-black text-[7rem] sm:text-[9rem] md:text-[11rem] leading-none text-text tracking-normal">
              404
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase mb-3">
              Página não encontrada
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight mb-4">
              Esse caminho não existe no material.
            </h1>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-7">
              A rota pode ter mudado, ou o link acessado não faz parte das páginas disponíveis do projeto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="btn-primary px-5 py-2.5 text-sm inline-flex">
                Voltar ao início
              </Link>
              <Link to="/configuracoes" className="btn-secondary px-5 py-2.5 text-sm inline-flex">
                Configurações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
