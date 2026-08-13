import { useCallback, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import GrafoTrilha, { type NoSobCursor } from '../components/trilha/GrafoTrilha';
import {
  contaDesbloqueados,
  dependencias,
  disciplinasTaxonomia,
  getDesbloqueia,
  getPrerequisitos,
  getTopico,
  getTrilha,
  topicos,
} from '../data/taxonomia';
import type { EixoVertical } from '../lib/grafoTrilha';

const TOTAL_HARD = dependencias.filter(d => d.forca === 'hard').length;

const EIXOS: { valor: EixoVertical; rotulo: string }[] = [
  { valor: 'profundidade', rotulo: 'ordem de aprendizado' },
  { valor: 'periodo', rotulo: 'período do curso' },
];

function rotuloPeriodo(periodo: number): string {
  return periodo >= 9 ? 'optativa' : `${periodo}º período`;
}

export default function TrilhaPage() {
  const [params, setParams] = useSearchParams();
  const selecionadoId = params.get('topico');
  const materiaFoco = params.get('materia');

  /**
   * Chegando de uma matéria, o grafo abre focado nela e nas que fornecem
   * pré-requisitos, porque "o que vem antes desta matéria" não se responde sem
   * os fornecedores.
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
  const [sobCursor, setSobCursor] = useState<NoSobCursor | null>(null);
  const [historico, setHistorico] = useState<string[]>([]);

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

  /** Navega para outro conceito guardando de onde veio, para o botão voltar. */
  const navegarPara = (id: string) => {
    if (selecionadoId && selecionadoId !== id) setHistorico(h => [...h, selecionadoId]);
    aoSelecionar(id);
  };

  const voltar = () => {
    setHistorico(h => {
      const anterior = h[h.length - 1];
      if (anterior) aoSelecionar(anterior);
      return h.slice(0, -1);
    });
  };

  const fechar = () => {
    setHistorico([]);
    aoSelecionar(null);
  };

  const alternar = (codigo: string) => {
    setOcultas(anterior => {
      const proximo = new Set(anterior);
      if (proximo.has(codigo)) proximo.delete(codigo);
      else proximo.add(codigo);
      return proximo;
    });
  };

  const topico = selecionadoId ? getTopico(selecionadoId) : undefined;
  const trilha = topico ? getTrilha(topico.id) : [];
  const prerequisitos = topico ? getPrerequisitos(topico.id) : [];
  const desbloqueiaDireto = topico ? getDesbloqueia(topico.id) : [];
  const desbloqueados = topico ? contaDesbloqueados(topico.id) : 0;
  const disciplinaDoTopico = topico ? disciplinasTaxonomia.find(d => d.codigo === topico.disciplina) : undefined;
  const materiaEmFoco = materiaFoco ? disciplinasTaxonomia.find(d => d.codigo === materiaFoco) : undefined;

  const noSobCursor = sobCursor ? getTopico(sobCursor.id) : undefined;

  return (
    <div className="trilha-cena">
      <GrafoTrilha
        eixo={eixo}
        topicoInicial={selecionadoId ?? undefined}
        ocultas={ocultas}
        onSelecionar={aoSelecionar}
        onCores={setCores}
        onSobCursor={setSobCursor}
      />

      {/* ── bloco editorial, à esquerda e centrado na vertical ── */}
      <header className="trilha-editorial">
        <p className="trilha-kicker">
          BSI · IFAL · {disciplinasTaxonomia.length} matérias mapeadas
        </p>
        <h1 className="trilha-titulo">
          {materiaEmFoco ? (
            <>
              O que vem antes de
              <br />
              {materiaEmFoco.nome}
              <span className="trilha-ponto">.</span>
            </>
          ) : (
            <>
              Tudo que um
              <br />
              analista aprende<span className="trilha-ponto">.</span>
            </>
          )}
        </h1>
        <p className="trilha-lead">
          O mapa aberto do curso, construído a partir do material dos professores.
        </p>
        <p className="trilha-stats">
          <b>{topicos.length}</b> conceitos e <b>{dependencias.length}</b> pré-requisitos, de "o que é um algoritmo" a
          banco de dados distribuído. <b>{TOTAL_HARD}</b> são indispensáveis: sem eles o conceito não fecha.{' '}
          <b>Clique em qualquer ponto</b> para ver tudo que vem antes dele.
        </p>
        <p className="trilha-ctx">
          Cada dependência cita a frase do material que a sustenta. Ancorado também na ementa oficial do PPC.
        </p>

        <div className="trilha-acoes">
          <div className="trilha-eixo" role="group" aria-label="Eixo vertical do grafo">
            {EIXOS.map(op => (
              <button
                key={op.valor}
                type="button"
                onClick={() => setEixo(op.valor)}
                aria-pressed={eixo === op.valor}
                className={eixo === op.valor ? 'ativo' : undefined}
              >
                {op.rotulo}
              </button>
            ))}
          </div>
          {materiaEmFoco && (
            <button type="button" onClick={() => setOcultas(new Set())} className="trilha-lic-botao">
              ver o curso inteiro
            </button>
          )}
        </div>
      </header>

      {/* ── legenda, canto inferior esquerdo ── */}
      <div className="trilha-legenda">
        <p className="trilha-legenda-titulo">Matérias · clique para filtrar</p>
        <div>
          {disciplinasTaxonomia.map(d => {
            const ativa = !ocultas.has(d.codigo);
            return (
              <button
                key={d.codigo}
                type="button"
                onClick={() => alternar(d.codigo)}
                aria-pressed={ativa}
                className={`trilha-chip${ativa ? '' : ' off'}`}
              >
                <span className="sw" style={{ background: cores[d.codigo] ?? 'currentColor' }} />
                <span className="nm">{d.nome}</span>
                <span className="ct">{contagemPorDisciplina.get(d.codigo) ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── balão de passagem do cursor ── */}
      {noSobCursor && !sobCursor?.id.startsWith('__') && (
        <div
          className="trilha-balao"
          style={{
            left: Math.min(sobCursor?.x ?? 0, 9999) + 16,
            top: (sobCursor?.y ?? 0) + 16,
          }}
        >
          <p className="meta">
            <span className="sw" style={{ background: cores[noSobCursor.disciplina] ?? 'currentColor' }} />
            {noSobCursor.unidade} · {rotuloPeriodo(noSobCursor.periodo)}
          </p>
          <p className="ttl">{noSobCursor.nome}</p>
          <p className="q">{noSobCursor.checagem || noSobCursor.descricao}</p>
        </div>
      )}

      {/* ── card do conceito selecionado, à direita ── */}
      {topico && (
        <aside className="trilha-card" aria-live="polite">
          <div className="barra">
            {historico.length > 0 && (
              <button type="button" onClick={voltar} className="voltar">
                ← voltar
              </button>
            )}
          </div>
          <button type="button" onClick={fechar} className="fechar" aria-label="Fechar painel">
            ×
          </button>

          <p className="meta">
            <span className="sw" style={{ background: cores[topico.disciplina] ?? 'currentColor' }} />
            {disciplinaDoTopico?.nome ?? topico.disciplina} · {rotuloPeriodo(topico.periodo)} · {topico.unidade}
          </p>
          <h2 className="titulo">{topico.nome}</h2>
          {topico.checagem && <p className="pergunta">{topico.checagem}</p>}

          <div className="numero">
            <span className="n">{trilha.length}</span>
            <span className="u">{trilha.length === 1 ? 'pré-requisito' : 'pré-requisitos'}</span>
          </div>
          <p className="sub">
            {trilha.length === 0
              ? 'Nenhum: é por aqui que se começa.'
              : 'Tudo que precisa ser dominado antes deste conceito, traçado até a raiz do curso.'}
          </p>

          {prerequisitos.length > 0 && (
            <section className="secao">
              <p className="rotulo">
                Depende diretamente de <span className="k">{prerequisitos.length}</span>
              </p>
              <div className="linhas">
                {prerequisitos.map(d => {
                  const pai = getTopico(d.prerequisitoId);
                  if (!pai) return null;
                  return (
                    <button
                      key={`${d.topicoId}-${d.prerequisitoId}`}
                      type="button"
                      onClick={() => navegarPara(pai.id)}
                      className="linha"
                    >
                      <span className="rdot" style={{ background: cores[pai.disciplina] ?? 'currentColor' }} />
                      <span className="rt">
                        {pai.nome}
                        <span className="razao">{d.razao}</span>
                        {d.trecho && <span className="citacao">“{d.trecho}”</span>}
                      </span>
                      <span className="ra">{d.forca === 'hard' ? 'duro' : 'ajuda'}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {desbloqueiaDireto.length > 0 && (
            <section className="secao">
              <p className="rotulo">
                Destrava em seguida <span className="k">{desbloqueiaDireto.length}</span>
              </p>
              <div className="linhas">
                {desbloqueiaDireto.slice(0, 8).map(d => {
                  const filho = getTopico(d.topicoId);
                  if (!filho) return null;
                  return (
                    <button
                      key={`${d.topicoId}-${d.prerequisitoId}`}
                      type="button"
                      onClick={() => navegarPara(filho.id)}
                      className="linha"
                    >
                      <span className="rdot" style={{ background: cores[filho.disciplina] ?? 'currentColor' }} />
                      <span className="rt">{filho.nome}</span>
                      <span className="ra">{filho.disciplina}</span>
                    </button>
                  );
                })}
                {desbloqueados > desbloqueiaDireto.length && (
                  <p className="nota">
                    {desbloqueados} conceitos dependem deste no total, contando as cadeias adiante.
                  </p>
                )}
              </div>
            </section>
          )}

          {trilha.length > 0 && (
            <section className="secao">
              <p className="rotulo">A trilha, do começo até aqui</p>
              <ol className="linhas">
                {trilha.map((t, i) => (
                  <li key={t.id}>
                    <button type="button" onClick={() => navegarPara(t.id)} className="linha">
                      <span className="ord">{String(i + 1).padStart(2, '0')}</span>
                      <span className="rdot" style={{ background: cores[t.disciplina] ?? 'currentColor' }} />
                      <span className="rt">{t.nome}</span>
                      <span className="ra">{t.disciplina}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <footer className="rodape">
            {topico.ementaPPC.length > 0 && <p>Ementa do PPC: {topico.ementaPPC.join(' · ')}</p>}
            {topico.avaliacoes.length > 0 && <p>Cobrado em: {topico.avaliacoes.join(', ')}</p>}
            {disciplinaDoTopico?.slug && (
              <Link to={`/materia/${disciplinaDoTopico.slug}`}>abrir o conteúdo da matéria</Link>
            )}
          </footer>
        </aside>
      )}

      <p className="trilha-dica">
        <b>Arraste</b> para girar · <b>Scroll</b> para zoom · <b>Clique</b> num ponto para ver a cadeia
      </p>
    </div>
  );
}
