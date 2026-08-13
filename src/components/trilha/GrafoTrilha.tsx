import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  alturaEmTela,
  criarProjecao,
  fecharTrilha,
  montarLayout,
  projetar,
  ZOOM_BASE,
  type Camera,
  type EixoVertical,
} from '../../lib/grafoTrilha';
import { dependencias, disciplinasTaxonomia, topicos } from '../../data/taxonomia';
import { useTokensDoTema } from '../../hooks/useTokensDoTema';

/** Paleta categórica da trilha: uma matéria por matiz. Definida em index.css. */
const PALETA = [
  '--color-taxo-1',
  '--color-taxo-2',
  '--color-taxo-3',
  '--color-taxo-4',
  '--color-taxo-5',
  '--color-taxo-6',
  '--color-taxo-7',
  '--color-taxo-8',
  '--color-taxo-9',
  '--color-taxo-10',
] as const;

/** Tokens que o canvas precisa resolver por conta própria. */
const TOKENS = [
  '--color-trilha-fundo',
  '--color-trilha-fio',
  '--color-trilha-eixo',
  '--color-text',
  '--color-accent',
  ...PALETA,
] as const;

export interface NoSobCursor {
  id: string;
  /** Posição do cursor na área do grafo, para posicionar o balão. */
  x: number;
  y: number;
}

interface Props {
  /** O que o eixo vertical representa. */
  eixo: EixoVertical;
  /** Tópico destacado ao abrir, quando vem de link profundo. */
  topicoInicial?: string;
  /** Disciplinas ocultas, controladas pela legenda de fora. */
  ocultas?: ReadonlySet<string>;
  onSelecionar?: (id: string | null) => void;
  onCores?: (cores: Record<string, string>) => void;
  onSobCursor?: (no: NoSobCursor | null) => void;
}

export default function GrafoTrilha({
  eixo,
  topicoInicial,
  ocultas,
  onSelecionar,
  onCores,
  onSobCursor,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tokens = useTokensDoTema(TOKENS);
  const [reduzir] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const ordem = useMemo(() => disciplinasTaxonomia.map(d => d.codigo), []);

  const layout = useMemo(
    () =>
      montarLayout(
        topicos.map(t => ({
          id: t.id,
          disciplina: t.disciplina,
          periodo: t.periodo,
          ordem: t.ordem,
          centralidade: t.centralidade,
        })),
        dependencias.map(d => ({ topicoId: d.topicoId, prerequisitoId: d.prerequisitoId, forca: d.forca })),
        ordem,
        eixo,
      ),
    [ordem, eixo],
  );

  const cores = useMemo(() => {
    const mapa: Record<string, string> = {};
    disciplinasTaxonomia.forEach((d, i) => {
      mapa[d.codigo] = tokens[PALETA[i % PALETA.length]] || tokens['--color-accent'] || '#6c63ff';
    });
    return mapa;
  }, [tokens]);

  useEffect(() => {
    if (Object.keys(cores).length) onCores?.(cores);
  }, [cores, onCores]);

  // estado imperativo: muda a 60 fps e não deve re-renderizar o React
  const camera = useRef<Camera>({ yaw: 0.4, pitch: -0.12, zoom: ZOOM_BASE });
  const inercia = useRef({ yaw: 0, pitch: 0 });
  const gira = useRef(!reduzir);
  const arrasta = useRef(false);
  const ultimo = useRef({ x: 0, y: 0 });
  const hover = useRef(-1);
  const selecionado = useRef(-1);
  const trilha = useRef<{ fecho: Set<number>; profundidade: Map<number, number> } | null>(null);
  const inicioAnimacao = useRef(0);
  const geometria = useRef({ largura: 0, altura: 0, cx: 0, cy: 0 });

  const projecao = useMemo(() => criarProjecao(topicos.length), []);
  const visivel = useCallback((i: number) => !ocultas?.has(topicos[i].disciplina), [ocultas]);

  const selecionar = useCallback(
    (i: number) => {
      selecionado.current = i;
      trilha.current = i >= 0 ? fecharTrilha(layout, i) : null;
      inicioAnimacao.current = performance.now();
      onSelecionar?.(i >= 0 ? topicos[i].id : null);
    },
    [layout, onSelecionar],
  );

  useEffect(() => {
    if (!topicoInicial) return;
    const i = layout.indicePorId.get(topicoInicial);
    if (i !== undefined) selecionar(i);
  }, [topicoInicial, layout, selecionar]);

  useEffect(() => {
    if (selecionado.current >= 0 && !visivel(selecionado.current)) selecionar(-1);
  }, [visivel, selecionar]);

  const acharNo = useCallback(
    (mx: number, my: number): number => {
      const { px, py, escala } = projecao;
      let melhor = -1;
      let menor = 16;
      for (let i = 0; i < topicos.length; i++) {
        if (!visivel(i)) continue;
        const d = Math.hypot(px[i] - mx, py[i] - my);
        const alvo = Math.max(4, layout.raioNo[i] * escala[i] * camera.current.zoom * 1.7) + 5;
        if (d < alvo && d < menor) {
          menor = d;
          melhor = i;
        }
      }
      return melhor;
    },
    [projecao, layout, visivel],
  );

  // laço de desenho
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !tokens['--color-trilha-fundo']) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const medir = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const caixa = canvas.getBoundingClientRect();
      const largura = Math.max(1, caixa.width);
      const altura = Math.max(1, caixa.height);
      canvas.width = Math.round(largura * dpr);
      canvas.height = Math.round(altura * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      geometria.current = {
        largura,
        altura,
        // em tela larga o funil desloca para a direita, porque o bloco editorial
        // ocupa a esquerda
        cx: largura / 2 + (largura > 980 ? largura * 0.12 : 0),
        // levemente acima do centro: o bico do funil desce quase até a borda, e
        // embaixo à direita mora a linha de dicas
        cy: altura * 0.46,
      };
      // o funil mede ALTURA_MUNDO em unidades de mundo; o zoom é calibrado para
      // que ele ocupe a fração ENQUADRAMENTO da altura disponível, em qualquer tela
      camera.current.zoom = ZOOM_BASE * (altura / 900);
    };
    medir();

    const observador = new ResizeObserver(medir);
    observador.observe(canvas);

    const comAlfa = (cor: string, alfa: number): string => {
      const c = cor.trim();
      if (/^#[0-9a-f]{3}$/i.test(c) || /^#[0-9a-f]{6}$/i.test(c)) {
        const hex = c.length === 4 ? c.replace(/#(.)(.)(.)/, '#$1$1$2$2$3$3') : c;
        const n = parseInt(hex.slice(1), 16);
        return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alfa})`;
      }
      return `color-mix(in srgb, ${c} ${(alfa * 100).toFixed(1)}%, transparent)`;
    };

    const corDe = (i: number) => cores[topicos[i].disciplina] || tokens['--color-accent'];
    const ordemDesenho = new Int32Array(topicos.length);
    let vivo = true;

    const desenhar = (agora: number) => {
      if (!vivo) return;
      const { largura, altura, cx, cy } = geometria.current;
      const cam = camera.current;

      if (!arrasta.current) {
        cam.yaw += (reduzir ? 0 : 0.0013) + inercia.current.yaw;
        cam.pitch = Math.max(-1.2, Math.min(1.2, cam.pitch + inercia.current.pitch));
        inercia.current.yaw *= 0.94;
        inercia.current.pitch *= 0.94;
      }

      projetar(layout, cam, cx, cy, projecao);
      const { px, py, pz, escala } = projecao;

      ctx.fillStyle = tokens['--color-trilha-fundo'];
      ctx.fillRect(0, 0, largura, altura);

      // halo de fundo, embaixo e ao centro do funil
      const halo = ctx.createRadialGradient(cx, altura * 1.15, 0, cx, altura * 1.15, Math.max(largura, altura) * 1.1);
      halo.addColorStop(0, comAlfa(tokens['--color-accent'], 0.22));
      halo.addColorStop(0.55, comAlfa(tokens['--color-accent'], 0.05));
      halo.addColorStop(1, comAlfa(tokens['--color-accent'], 0));
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, largura, altura);

      // rótulos do eixo, ancorados na borda DIREITA. Ficavam à esquerda e caíam
      // debaixo do bloco editorial, que ocupa aquele lado.
      ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'right';
      for (const marca of layout.marcacoes) {
        const sy = alturaEmTela(marca.altura, cam, cy);
        if (sy < 14 || sy > altura - 42) continue;
        ctx.fillStyle = comAlfa(tokens['--color-trilha-eixo'], 0.8);
        ctx.fillText(marca.rotulo, largura - 16, sy);
      }
      ctx.textAlign = 'left';

      // arestas: fio de cabelo quase branco. É o emaranhado delas que desenha a
      // silhueta do funil, então elas não recebem a cor da matéria: cor aqui
      // viraria ruído e apagaria a forma.
      const fecho = trilha.current?.fecho;
      ctx.lineWidth = 1;
      for (const a of layout.arestas) {
        if (!visivel(a.t) || !visivel(a.p)) continue;
        let alfa: number;
        if (fecho) {
          const naTrilha = fecho.has(a.t) && fecho.has(a.p);
          alfa = naTrilha ? 0.45 : 0.012;
        } else {
          alfa = 0.055 * (0.5 + 0.5 * ((escala[a.t] + escala[a.p]) / 2));
        }
        if (alfa < 0.01) continue;
        ctx.strokeStyle = comAlfa(tokens['--color-trilha-fio'], alfa);
        ctx.beginPath();
        ctx.moveTo(px[a.p], py[a.p]);
        ctx.lineTo(px[a.t], py[a.t]);
        ctx.stroke();
      }

      // luz correndo pela trilha, da raiz até o conceito escolhido
      if (trilha.current && !reduzir) {
        const { profundidade } = trilha.current;
        const maior = Math.max(1, ...profundidade.values());
        const fase = ((agora - inicioAnimacao.current) % 2600) / 2600;
        for (const a of layout.arestas) {
          if (!fecho?.has(a.t) || !fecho.has(a.p)) continue;
          const frac = (profundidade.get(a.p) ?? 0) / maior;
          const u = (fase - frac * 0.55) * 1.9;
          if (u < 0 || u > 1) continue;
          const intensidade = 1 - Math.abs(u * 2 - 1);
          ctx.fillStyle = comAlfa(corDe(a.p), 0.9 * intensidade);
          ctx.beginPath();
          ctx.arc(
            px[a.p] + (px[a.t] - px[a.p]) * u,
            py[a.p] + (py[a.t] - py[a.p]) * u,
            2 * intensidade + 0.5,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      }

      // nós, do fundo para a frente
      for (let i = 0; i < topicos.length; i++) ordemDesenho[i] = i;
      ordemDesenho.sort((a, b) => pz[b] - pz[a]);

      for (let k = 0; k < ordemDesenho.length; k++) {
        const i = ordemDesenho[k];
        if (!visivel(i)) continue;
        const dentro = !fecho || fecho.has(i);
        const eSelecionado = i === selecionado.current;
        const r = Math.max(0.6, layout.raioNo[i] * escala[i] * cam.zoom * 1.7);
        const cor = corDe(i);
        const alfa = (0.35 + 0.65 * escala[i]) * (dentro ? 1 : 0.12);

        if (dentro && eSelecionado) {
          const brilho = r * 8;
          const g = ctx.createRadialGradient(px[i], py[i], 0, px[i], py[i], brilho);
          g.addColorStop(0, comAlfa(cor, 0.45));
          g.addColorStop(1, comAlfa(cor, 0));
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px[i], py[i], brilho, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = comAlfa(cor, alfa);
        ctx.beginPath();
        ctx.arc(px[i], py[i], r, 0, Math.PI * 2);
        ctx.fill();

        if (i === hover.current || eSelecionado) {
          ctx.strokeStyle = tokens['--color-text'];
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(px[i], py[i], r + 3.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 1;
        }
      }

      requestAnimationFrame(desenhar);
    };

    requestAnimationFrame(t => {
      inicioAnimacao.current = t;
      desenhar(t);
    });

    return () => {
      vivo = false;
      observador.disconnect();
    };
  }, [layout, projecao, tokens, cores, visivel, reduzir]);

  /**
   * Zoom pela roda do mouse.
   *
   * Precisa de listener NATIVO com passive: false. O React anexa wheel como
   * passivo no root desde a versão 17, e num listener passivo o
   * preventDefault() é ignorado pelo navegador: o resultado era o zoom
   * funcionar E a página rolar junto, que é exatamente o defeito relatado.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const aoRolar = (ev: WheelEvent) => {
      ev.preventDefault();
      camera.current.zoom = Math.max(0.18, Math.min(4, camera.current.zoom * Math.pow(0.999, ev.deltaY)));
    };
    canvas.addEventListener('wheel', aoRolar, { passive: false });
    return () => canvas.removeEventListener('wheel', aoRolar);
  }, []);

  // interação
  const aoApontarBaixo = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    arrasta.current = true;
    ultimo.current = { x: ev.clientX, y: ev.clientY };
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };

  const aoMover = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const caixa = ev.currentTarget.getBoundingClientRect();
    if (arrasta.current) {
      const dx = (ev.clientX - ultimo.current.x) * 0.005;
      const dy = (ev.clientY - ultimo.current.y) * 0.004;
      camera.current.yaw += dx;
      camera.current.pitch = Math.max(-1.2, Math.min(1.2, camera.current.pitch + dy));
      inercia.current = { yaw: dx * 0.5, pitch: dy * 0.5 };
      ultimo.current = { x: ev.clientX, y: ev.clientY };
      if (Math.abs(ev.movementX) > 1) gira.current = false;
      onSobCursor?.(null);
      return;
    }
    const mx = ev.clientX - caixa.left;
    const my = ev.clientY - caixa.top;
    const i = acharNo(mx, my);
    hover.current = i;
    onSobCursor?.(i >= 0 ? { id: topicos[i].id, x: mx, y: my } : null);
  };

  const aoApontarCima = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    arrasta.current = false;
    const movimento = Math.abs(ev.clientX - ultimo.current.x) + Math.abs(ev.clientY - ultimo.current.y);
    if (movimento >= 4) return;
    const caixa = ev.currentTarget.getBoundingClientRect();
    selecionar(acharNo(ev.clientX - caixa.left, ev.clientY - caixa.top));
  };

  const aoTeclar = (ev: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (ev.key === 'Escape') {
      selecionar(-1);
      return;
    }
    if (ev.key === ' ') {
      gira.current = !gira.current;
      ev.preventDefault();
      return;
    }
    const avanca = ev.key === 'ArrowRight' || ev.key === 'ArrowDown';
    const volta = ev.key === 'ArrowLeft' || ev.key === 'ArrowUp';
    if (!avanca && !volta) return;
    ev.preventDefault();
    const total = topicos.length;
    let i = selecionado.current < 0 ? (avanca ? -1 : 0) : selecionado.current;
    for (let passo = 0; passo < total; passo++) {
      i = (i + (avanca ? 1 : -1) + total) % total;
      if (visivel(i)) break;
    }
    selecionar(i);
  };

  return (
    <canvas
      ref={canvasRef}
      tabIndex={0}
      role="application"
      aria-label="Grafo de pré-requisitos do curso. Use as setas para percorrer os conceitos e Escape para limpar a seleção."
      className="block h-full w-full cursor-grab touch-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      onPointerDown={aoApontarBaixo}
      onPointerMove={aoMover}
      onPointerUp={aoApontarCima}
      onPointerLeave={() => {
        hover.current = -1;
        onSobCursor?.(null);
      }}
      onKeyDown={aoTeclar}
    />
  );
}
