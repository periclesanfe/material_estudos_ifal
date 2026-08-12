import { useCallback, useEffect, useMemo, useState } from 'react';
import ArrayTrack from './ArrayTrack';
import VisualizerControls from './VisualizerControls';
import { SLIDE_ARRAY, SORT_ALGORITHMS } from '../../../lib/sortSteps';

/** `true` quando o usuário pede menos animação no sistema. */
function usaMovimentoReduzido(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function embaralhar(base: readonly number[]): number[] {
  const saida = [...base];
  for (let i = saida.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [saida[i], saida[j]] = [saida[j], saida[i]];
  }
  return saida;
}

/**
 * Visualizador passo a passo dos algoritmos de ordenação da disciplina.
 *
 * Os passos vêm prontos dos geradores puros de `lib/sortSteps`; aqui só se
 * controla qual índice está visível. O array padrão é o dos slides do Prof.
 * Ricardo Nunes, para o aluno reconhecer o que viu em aula.
 */
export default function AlgorithmVisualizer() {
  const [algoritmoId, setAlgoritmoId] = useState(SORT_ALGORITHMS[0].id);
  const [entrada, setEntrada] = useState<number[]>([...SLIDE_ARRAY]);
  const [index, setIndex] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [velocidade, setVelocidade] = useState(600);
  const [movimentoReduzido] = useState(usaMovimentoReduzido);

  const algoritmo = SORT_ALGORITHMS.find((a) => a.id === algoritmoId) ?? SORT_ALGORITHMS[0];
  const passos = useMemo(() => algoritmo.gerar(entrada), [algoritmo, entrada]);
  const maxValue = useMemo(() => Math.max(...entrada, 1), [entrada]);

  const ultimo = passos.length - 1;
  /**
   * Índice efetivo. Trocar de algoritmo ou embaralhar muda o número de passos,
   * e o índice guardado pode ficar além do fim da nova lista — daí o clamp.
   */
  const passoAtual = Math.min(index, ultimo);
  const passo = passos[passoAtual];
  /**
   * Só reproduz enquanto houver passo seguinte — e nunca quando o usuário pede
   * movimento reduzido, caso em que o avanço fica só no controle manual.
   */
  const reproduzindo = tocando && passoAtual < ultimo && !movimentoReduzido;

  // Avanço automático. O único temporizador do visualizador: a lógica dos
  // algoritmos é síncrona e já rodou por inteiro. Ao chegar no último passo o
  // agendamento simplesmente para — sem setState síncrono dentro do efeito.
  useEffect(() => {
    if (!reproduzindo) return;
    const timer = window.setTimeout(() => setIndex((i) => Math.min(i + 1, ultimo)), velocidade);
    return () => window.clearTimeout(timer);
  }, [reproduzindo, index, ultimo, velocidade]);

  const reiniciar = useCallback(() => {
    setIndex(0);
    setTocando(false);
  }, []);

  const trocarAlgoritmo = useCallback((id: string) => {
    setAlgoritmoId(id);
    setIndex(0);
    setTocando(false);
  }, []);

  const onEmbaralhar = useCallback(() => {
    setEntrada(embaralhar(SLIDE_ARRAY));
    setIndex(0);
    setTocando(false);
  }, []);

  const onAlternarPlay = useCallback(() => {
    setTocando((t) => {
      if (t) return false;
      if (passoAtual >= ultimo) setIndex(0);
      return true;
    });
  }, [passoAtual, ultimo]);

  return (
    <div className="study-surface space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Escolha do algoritmo">
        {SORT_ALGORITHMS.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => trocarAlgoritmo(a.id)}
            aria-pressed={a.id === algoritmoId}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm ${
              a.id === algoritmoId
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-border bg-card text-text-muted hover:border-border-hover hover:text-text'
            }`}
          >
            {a.nome}
          </button>
        ))}
      </div>

      <p className="text-sm text-text-muted">{algoritmo.descricao}</p>

      <div className="overflow-x-auto pb-1">
        <ArrayTrack step={passo} maxValue={maxValue} />
      </div>

      <p
        aria-live="polite"
        className="min-h-12 rounded-lg border border-border bg-card/60 px-4 py-3 text-sm text-text"
      >
        <span className="mr-2 font-mono text-xs text-text-muted">
          {passoAtual + 1}/{passos.length}
        </span>
        {passo.label}
      </p>

      <VisualizerControls
        index={passoAtual}
        total={passos.length}
        tocando={reproduzindo}
        somenteManual={movimentoReduzido}
        velocidade={velocidade}
        onAnterior={() => {
          setTocando(false);
          setIndex((i) => Math.max(0, i - 1));
        }}
        onProximo={() => {
          setTocando(false);
          setIndex((i) => Math.min(ultimo, i + 1));
        }}
        onAlternarPlay={onAlternarPlay}
        onReiniciar={reiniciar}
        onEmbaralhar={onEmbaralhar}
        onVelocidade={setVelocidade}
        onIr={(i) => {
          setTocando(false);
          setIndex(i);
        }}
      />

      {movimentoReduzido && (
        <p className="text-xs text-text-muted">
          Movimento reduzido está ativo no seu sistema: a reprodução automática não começa sozinha. Use “Próximo”
          para avançar no seu ritmo.
        </p>
      )}
    </div>
  );
}
