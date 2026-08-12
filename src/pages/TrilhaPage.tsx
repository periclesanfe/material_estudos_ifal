import { useCallback, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import GrafoTrilha from '../components/trilha/GrafoTrilha';
import {
  contaDesbloqueados,
  dependencias,
  disciplinasTaxonomia,
  getPrerequisitos,
  getTopico,
  getTrilha,
  topicos,
} from '../data/taxonomia';
import type { EixoVertical } from '../lib/grafoTrilha';

const EIXOS: { valor: EixoVertical; rotulo: string; explica: string }[] = [
  {
    valor: 'profundidade',
    rotulo: 'ordem de aprendizado',
    explica:
      'A altura é quantos pré-requisitos existem atrás do conceito. A boca larga em cima são os pontos de partida, e o funil afina até o fim das cadeias mais longas.',
  },
  {
    valor: 'periodo',
    rotulo: 'período do curso',
    explica: 'A altura é o semestre em que a matéria é ofertada, do 1º período às optativas.',
  },
];

const TOTAL_HARD = dependencias.filter(d => d.forca === 'hard').length;

/** Rótulo do período, com optativa em vez de "9º". */
function rotuloPeriodo(periodo: number): string {
  return periodo >= 9 ? 'Optativa' : `${periodo}º período`;
}

export default function TrilhaPage() {
  const [params, setParams] = useSearchParams();
  const selecionadoId = params.get('topico');
  const materiaFoco = params.get('materia');

  /**
   * Chegando de uma matéria, o grafo abre focado nela e nas matérias que
   * fornecem pré-requisitos, porque "os pré-requisitos desta matéria" não é uma
   * pergunta que se responde sem os fornecedores.
   */
  const [ocultas, setOcultas] = useState<ReadonlySet<string>>(() => {
    if (!materiaFoco) return new Set();
    const manter = new Set([materiaFoco]);
    for (const d of dependencias) {
      if (d.escopo !== 'cruzada') continue;
      if (getTopico(d.topicoId)?.disciplina === materiaFoco) {
        const fornecedor = getTopico(d.prerequisitoId)?.disciplina;
        if (fornecedor) manter.add(fornecedor);
      }
    }
    return new Set(disciplinasTaxonomia.filter(d => !manter.has(d.codigo)).map(d => d.codigo));
  });
  const [cores, setCores] = useState<Record<string, string>>({});
  const [eixo, setEixo] = useState<EixoVertical>('profundidade');

  const contagemPorDisciplina = useMemo(() => {
    const mapa = new Map<string, number>();
    for (const t of topicos) mapa.set(t.disciplina, (mapa.get(t.disciplina) ?? 0) + 1);
    return mapa;
  }, []);

  const aoSelecionar = useCallback(
    (id: string | null) => {
      setParams(
        anterior => {
          const proximo = new URLSearchParams(anterior);
          if (id) proximo.set('topico', id);
          else proximo.delete('topico');
          return proximo;
        },
        { replace: true },
      );
    },
    [setParams],
  );

  const alternar = (codigo: string) => {
    setOcultas(anterior => {
      const proximo = new Set(anterior);
      if (proximo.has(codigo)) proximo.delete(codigo);
      else proximo.add(codigo);
      return proximo;
    });
  };

  const materiaEmFoco = materiaFoco ? disciplinasTaxonomia.find(d => d.codigo === materiaFoco) : undefined;

  const topico = selecionadoId ? getTopico(selecionadoId) : undefined;
  const trilha = topico ? getTrilha(topico.id) : [];
  const prerequisitos = topico ? getPrerequisitos(topico.id) : [];
  const desbloqueados = topico ? contaDesbloqueados(topico.id) : 0;
  const disciplinaDoTopico = topico ? disciplinasTaxonomia.find(d => d.codigo === topico.disciplina) : undefined;
  // resolvido pelo slug que o próprio dataset carrega, e não por busca em
  // curriculum.ts pelo código: PINT está duplicado lá (Projeto Integrador e
  // Propriedade Intelectual), e Array.find devolveria sempre a primeira
  const slugDaMateria = disciplinaDoTopico?.slug ?? null;

  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-10">
      <header className="mb-6">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Trilha de aprendizado · {disciplinasTaxonomia.length} matérias
        </p>
        <h1 className="font-display text-3xl font-black tracking-tight text-text text-balance sm:text-4xl">
          {materiaEmFoco ? `O que vem antes de ${materiaEmFoco.nome}` : 'O curso como grafo'}
        </h1>
        <p className="reading-measure mt-3 text-sm leading-relaxed text-text-muted">
          São <strong className="tabular-nums text-text">{topicos.length}</strong> conceitos ensináveis ligados por{' '}
          <strong className="tabular-nums text-text">{dependencias.length}</strong> pré-requisitos, extraídos do material
          das matérias e da ementa oficial do PPC.{' '}
          <strong className="tabular-nums text-text">{TOTAL_HARD}</strong> são dependências duras: sem elas o conceito
          não fecha. Clique em qualquer ponto para ver tudo que vem antes, na ordem de estudo.
        </p>
        {materiaEmFoco && (
          <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
            O grafo está mostrando {materiaEmFoco.nome} e as matérias que fornecem pré-requisitos a ela.{' '}
            <button
              type="button"
              onClick={() => setOcultas(new Set())}
              className="text-accent underline underline-offset-2 hover:no-underline"
            >
              mostrar o curso inteiro
            </button>
          </p>
        )}
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                Eixo vertical
              </p>
              <div className="inline-flex rounded-lg border border-border p-0.5">
                {EIXOS.map(op => (
                  <button
                    key={op.valor}
                    type="button"
                    onClick={() => setEixo(op.valor)}
                    aria-pressed={eixo === op.valor}
                    className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
                      eixo === op.valor
                        ? 'bg-accent/15 font-semibold text-accent'
                        : 'text-text-muted hover:bg-card-hover hover:text-text'
                    }`}
                  >
                    {op.rotulo}
                  </button>
                ))}
              </div>
            </div>
            <p className="reading-measure max-w-[46ch] text-[11.5px] leading-relaxed text-text-muted">
              {EIXOS.find(op => op.valor === eixo)?.explica}
            </p>
          </div>

          <div className="relative h-[clamp(460px,72vh,860px)] overflow-hidden rounded-xl border border-border bg-card">
            <GrafoTrilha
              eixo={eixo}
              topicoInicial={selecionadoId ?? undefined}
              ocultas={ocultas}
              onSelecionar={aoSelecionar}
              onCores={setCores}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] text-text-muted">
            <span>arrastar: girar</span>
            <span>scroll: zoom</span>
            <span>clique: traçar trilha</span>
            <span>setas: percorrer</span>
            <span>esc: limpar</span>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">Matérias no grafo</p>
              {ocultas.size > 0 && (
                <button
                  type="button"
                  onClick={() => setOcultas(new Set())}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent hover:underline"
                >
                  mostrar tudo
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {disciplinasTaxonomia.map(d => {
                const ativa = !ocultas.has(d.codigo);
                return (
                  <button
                    key={d.codigo}
                    type="button"
                    onClick={() => alternar(d.codigo)}
                    aria-pressed={ativa}
                    className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-card-hover ${
                      ativa ? 'text-text' : 'text-text-muted/55'
                    }`}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full transition-opacity"
                      style={{
                        backgroundColor: cores[d.codigo] ?? 'currentColor',
                        opacity: ativa ? 1 : 0.25,
                      }}
                    />
                    <span className="min-w-0 flex-1 truncate">{d.nome}</span>
                    <span className="font-mono text-[10px] tabular-nums text-text-muted">
                      {contagemPorDisciplina.get(d.codigo) ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          {topico ? (
            <div className="flex max-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-xl border border-border bg-card">
              <div className="border-b border-border/60 p-4">
                <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: cores[topico.disciplina] ?? 'currentColor' }}
                  />
                  <span className="truncate">
                    {disciplinaDoTopico?.nome ?? topico.disciplina} · {rotuloPeriodo(topico.periodo)}
                  </span>
                </p>
                <h2 className="font-display text-xl font-bold leading-tight text-text text-balance">{topico.nome}</h2>
                <p className="mt-1 font-mono text-[10px] text-text-muted">{topico.unidade}</p>
              </div>

              <div className="flex items-baseline gap-3 border-b border-border/60 p-4">
                <span className="font-display text-4xl font-black leading-none tabular-nums text-text">
                  {trilha.length}
                </span>
                <span className="text-xs leading-snug text-text-muted">
                  {trilha.length === 0
                    ? 'nenhum pré-requisito: é por aqui que se começa'
                    : `conceito${trilha.length > 1 ? 's' : ''} que vêm antes, até a raiz do curso`}
                </span>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto p-4">
                <section>
                  <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">O que é</h3>
                  <p className="text-[13px] leading-relaxed text-text-muted">{topico.descricao}</p>
                </section>

                {topico.checagem && (
                  <section>
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                      Pergunta de checagem
                    </h3>
                    <p
                      className="border-l-2 pl-3 text-[13px] leading-relaxed text-text"
                      style={{ borderColor: cores[topico.disciplina] ?? 'currentColor' }}
                    >
                      {topico.checagem}
                    </p>
                  </section>
                )}

                {topico.evidencia.length > 0 && (
                  <section>
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                      Evidência de domínio
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      {topico.evidencia.map(e => (
                        <li key={e} className="text-xs leading-relaxed text-text-muted">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {trilha.length > 0 && (
                  <section>
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                      A trilha, do começo até aqui
                    </h3>
                    <ol className="flex flex-col">
                      {trilha.map((t, i) => (
                        <li key={t.id}>
                          <button
                            type="button"
                            onClick={() => aoSelecionar(t.id)}
                            className="flex w-full items-center gap-2 rounded px-1 py-1 text-left transition-colors hover:bg-card-hover"
                          >
                            <span className="w-5 shrink-0 text-right font-mono text-[9.5px] tabular-nums text-text-muted">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: cores[t.disciplina] ?? 'currentColor' }}
                            />
                            <span className="min-w-0 flex-1 truncate text-xs text-text-muted">{t.nome}</span>
                            <span className="shrink-0 font-mono text-[9px] text-text-muted/70">{t.disciplina}</span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {prerequisitos.length > 0 && (
                  <section>
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                      Por que depende
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {prerequisitos.map(d => {
                        const pai = getTopico(d.prerequisitoId);
                        return (
                          <li key={`${d.topicoId}-${d.prerequisitoId}`} className="text-xs leading-relaxed">
                            <p>
                              <button
                                type="button"
                                onClick={() => aoSelecionar(d.prerequisitoId)}
                                className="text-left font-semibold text-text hover:underline"
                              >
                                {pai?.nome ?? d.prerequisitoId}
                              </button>
                              <span className="ml-1 font-mono text-[9px] uppercase text-text-muted/70">
                                {d.forca === 'hard' ? 'indispensável' : 'ajuda'}
                              </span>
                            </p>
                            <p className="text-text-muted">{d.razao}</p>
                            {/* a citação é o que separa este dataset de um palpite:
                                mostra no material do professor onde a dependência está escrita */}
                            {d.trecho && (
                              <p className="mt-1 border-l border-border pl-2 text-[11px] italic leading-relaxed text-text-muted/85">
                                “{d.trecho}”
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}

                {desbloqueados > 0 && (
                  <section>
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                      Desbloqueia
                    </h3>
                    <p className="text-[13px] leading-relaxed text-text-muted">
                      <strong className="tabular-nums text-text">{desbloqueados}</strong>{' '}
                      {desbloqueados > 1 ? 'conceitos dependem' : 'conceito depende'} deste, direta ou indiretamente.
                    </p>
                  </section>
                )}

                <footer className="flex flex-col gap-2 border-t border-border/60 pt-3 font-mono text-[9.5px] leading-relaxed text-text-muted">
                  {topico.ementaPPC.length > 0 && <p>Ementa do PPC: {topico.ementaPPC.join(' · ')}</p>}
                  {topico.avaliacoes.length > 0 && <p>Cobrado em: {topico.avaliacoes.join(', ')}</p>}
                  {slugDaMateria && (
                    <Link to={`/materia/${slugDaMateria}`} className="text-accent hover:underline">
                      abrir o conteúdo de {disciplinaDoTopico?.nome}
                    </Link>
                  )}
                </footer>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-base font-bold text-text">Nenhum conceito selecionado</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                Clique num ponto do grafo para traçar a trilha até ele. Os pontos maiores são os conceitos que travam
                mais conteúdo adiante.
              </p>
              <h3 className="mt-5 mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                Os que travam mais o curso
              </h3>
              <ol className="flex flex-col">
                {[...topicos]
                  .sort((a, b) => b.centralidade - a.centralidade)
                  .slice(0, 8)
                  .map((t, i) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => aoSelecionar(t.id)}
                        className="flex w-full items-center gap-2 rounded px-1 py-1 text-left transition-colors hover:bg-card-hover"
                      >
                        <span className="w-5 shrink-0 text-right font-mono text-[9.5px] tabular-nums text-text-muted">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: cores[t.disciplina] ?? 'currentColor' }}
                        />
                        <span className="min-w-0 flex-1 truncate text-xs text-text-muted">{t.nome}</span>
                        <span className="shrink-0 font-mono text-[9px] text-text-muted/70">{t.disciplina}</span>
                      </button>
                    </li>
                  ))}
              </ol>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
