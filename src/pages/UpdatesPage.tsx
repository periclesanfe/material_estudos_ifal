import { UPDATE_GROUPS } from '../data/updates';

const tipoLabel: Record<string, string> = {
  conteudo_materia: 'Conteúdo',
  questao_quiz: 'Quiz',
  correcao: 'Correção',
  melhoria: 'Melhoria',
  revisao: 'Revisão',
  issue: 'Issue',
  documentacao: 'Documentação',
  codigo: 'Código',
  design_ui: 'Design/UI',
  dados: 'Dados',
  infraestrutura: 'Infraestrutura',
  outro: 'Outro',
};

export default function UpdatesPage() {
  return (
    <div className="page-wrap py-10 md:py-12 animate-fade-in">
      <div className="max-w-3xl content-stack">
        <header>
          <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">Histórico</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight text-balance">
            Atualizações
          </h1>
          <p className="section-subtitle reading-measure">
            O que mudou no material, organizado por matéria. Cada entrada vem do registro de
            contribuições do projeto.
          </p>
        </header>

        {UPDATE_GROUPS.length === 0 ? (
          <p className="text-text-muted text-sm">Nenhuma atualização registrada ainda.</p>
        ) : (
          <div className="content-stack">
            {UPDATE_GROUPS.map(group => (
              <section key={group.key} className="space-y-4">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h2 className="section-title text-accent">{group.titulo}</h2>
                  {group.codigo && (
                    <span className="text-[10px] font-bold uppercase tracking-wider rounded px-1.5 py-0.5 bg-accent/10 text-accent">
                      {group.codigo}
                    </span>
                  )}
                </div>

                <ol className="relative border-l border-border ml-1.5 stagger-children">
                  {group.entries.map(update => (
                    <li key={update.id} className="relative pl-6 pb-6 last:pb-0">
                      <span
                        aria-hidden
                        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                      />
                      <div className="study-surface p-4 md:p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <time className="text-xs font-semibold text-accent tabular-nums" dateTime={update.data}>
                            {update.dataLabel}
                          </time>
                          <span className="text-[10px] font-bold uppercase tracking-wider rounded px-1.5 py-0.5 bg-accent3/10 text-accent3">
                            {tipoLabel[update.tipo] ?? update.tipo}
                          </span>
                        </div>

                        <p className="text-text text-sm md:text-base leading-relaxed text-pretty">{update.resumo}</p>

                        <p className="text-text-muted text-xs mt-2">
                          por <span className="font-semibold text-text">{update.autor}</span>
                          {update.referencia && update.referencia.startsWith('#') && (
                            <> · <span className="font-mono">{update.referencia}</span></>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
