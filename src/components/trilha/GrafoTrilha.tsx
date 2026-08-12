import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  alturaEmTela,
  criarProjecao,
  fecharTrilha,
  montarLayout,
  projetar,
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

/** Tokens do design system que o canvas precisa resolver por conta própria. */
const TOKENS = [
  '--color-bg',
  '--color-card',
  '--color-text',
  '--color-text-muted',
  '--color-border',
  '--color-accent',
  ...PALETA,
] as const;

interface Props {
  /** O que o eixo vertical representa. */
  eixo: EixoVertical;
  /** Tópico destacado ao abrir, quando vem de link profundo. */
  topicoInicial?: string;
  /** Disciplinas ocultas, controladas pela legenda de fora. */
  ocultas?: ReadonlySet<string>;
  /** Avisa a página qual tópico foi selecionado. */
  onSelecionar?: (id: string | null) => void;
  /** Cor de cada disciplina, para a legenda combinar com o grafo. */
  onCores?: (cores: Record<string, string>) => void;
}

export default function GrafoTrilha({ eixo, topicoInicial, ocultas, onSelecionar, onCores }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tokens = useTokensDoTema(TOKENS);
  const [reduzir] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const ordem = useMemo(() => disciplinasTaxonomia.map(d => d.codigo), []);

  const layout = useMemo(
    () =>
      montarLayout(
        topicos.map(t => ({ id: t.id, disciplina: t.disciplina, periodo: t.periodo, ordem: t.ordem })),
        dependencias.map(d => ({ topicoId: d.topicoId, prerequisitoId: d.prerequisitoId, forca: d.forca })),
        ordem,
        eixo,
      ),
    [ordem, eixo],
  );

  /** Cor resolvida por disciplina, do design system e não do dataset. */
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

  // ── estado imperativo: fica em ref porque muda a 60 fps e não deve re-renderizar
  const camera = useRef<Camera>({ yaw: 0.6, pitch: -0.17, zoom: 1 });
  const gira = useRef(!reduzir);
  const arrasta = useRef(false);
  const ultimo = useRef({ x: 0, y: 0 });
  const hover = useRef(-1);
  const selecionado = useRef(-1);
  const trilha = useRef<{ fecho: Set<number>; profundidade: Map<number, number> } | null>(null);
  const inicioAnimacao = useRef(0);
  const geometria = useRef({ largura: 0, altura: 0, cx: 0, cy: 0, raio: 1 });

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

  // seleção inicial vinda da URL
  useEffect(() => {
    if (!topicoInicial) return;
    const i = layout.indicePorId.get(topicoInicial);
    if (i !== undefined) selecionar(i);
  }, [topicoInicial, layout, selecionar]);

  // limpa a seleção se a disciplina do selecionado for ocultada
  useEffect(() => {
    if (selecionado.current >= 0 && !visivel(selecionado.current)) selecionar(-1);
  }, [visivel, selecionar]);

  const acharNo = useCallback(
    (mx: number, my: number): number => {
      const { px, py } = projecao;
      let melhor = -1;
      let menor = 22 * 22;
      for (let i = 0; i < topicos.length; i++) {
        if (!visivel(i)) continue;
        const d = (px[i] - mx) ** 2 + (py[i] - my) ** 2;
        const alvo = Math.max((7 + (layout.alcance[i] / layout.alcanceMaximo) * 6) ** 2, 64);
        if (d < alvo && d < menor) {
          menor = d;
          melhor = i;
        }
      }
      return melhor;
    },
    [projecao, layout, visivel],
  );

  // ── laço de desenho
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !tokens['--color-bg']) return;
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
        cx: largura * 0.5,
        cy: altura * 0.5,
        // o grafo mede 3,4 de altura por 2 de largura em unidades de mundo, então
        // o enquadramento é limitado pela altura na maioria das telas. A folga do
        // 0,245 evita que a boca larga do funil encoste na borda de cima.
        raio: Math.min(largura * 0.44, altura * 0.245),
      };
    };
    medir();

    const observador = new ResizeObserver(medir);
    observador.observe(canvas);

    /**
     * Aplica transparência a um token de cor. Os tokens do projeto são hex, que
     * vira rgba direto; qualquer outro formato (oklch, rgb, hsl) cai no
     * color-mix, resolvido pelo próprio navegador.
     */
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
      const { largura, altura, cx, cy, raio } = geometria.current;

      if (gira.current && !arrasta.current) camera.current.yaw += 0.0013;
      projetar(layout, camera.current, cx, cy, raio, projecao);
      const { px, py, pz, escala } = projecao;

      ctx.fillStyle = tokens['--color-bg'];
      ctx.fillRect(0, 0, largura, altura);

      // rótulos do eixo vertical na borda esquerda, com um traço curto de
      // ancoragem. A linha de largura total foi removida de propósito: ela
      // achatava o grafo em discos empilhados e brigava com a forma de funil.
      ctx.font = '9px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      for (const marca of layout.marcacoes) {
        const sy = alturaEmTela(marca.altura, camera.current, cy, raio);
        if (sy < 10 || sy > altura - 10) continue;
        ctx.strokeStyle = comAlfa(tokens['--color-border'], 0.7);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(48, sy);
        ctx.lineTo(58, sy);
        ctx.stroke();
        ctx.fillStyle = comAlfa(tokens['--color-text-muted'], 0.7);
        ctx.fillText(marca.rotulo, 5, sy);
      }

      // arestas: fios finos e quase brancos quando nada está selecionado, porque
      // é o emaranhado deles que desenha a silhueta do funil. Coloridas apenas
      // na trilha, onde a cor identifica a matéria de origem.
      const fecho = trilha.current?.fecho;
      ctx.lineCap = 'round';
      for (const a of layout.arestas) {
        if (!visivel(a.t) || !visivel(a.p)) continue;
        const naTrilha = fecho ? fecho.has(a.t) && fecho.has(a.p) : false;
        if (fecho) {
          const alfa = naTrilha ? 0.7 : 0.025;
          if (alfa < 0.015) continue;
          ctx.strokeStyle = comAlfa(naTrilha ? corDe(a.p) : tokens['--color-text-muted'], alfa);
          ctx.lineWidth = naTrilha ? 1.35 : 0.5;
        } else {
          ctx.strokeStyle = comAlfa(
            tokens['--color-text-muted'],
            (a.forca === 'hard' ? 0.2 : 0.1) * (0.5 + escala[a.t] * 0.5),
          );
          ctx.lineWidth = 0.55;
        }
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
            2.1 * intensidade + 0.5,
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
        // o raio cresce com quantos conceitos dependem deste: o ponto grande é o
        // que trava mais conteúdo adiante
        const base = 2.4 + (layout.alcance[i] / layout.alcanceMaximo) * 6.4;
        const r = base * escala[i] * (0.72 + camera.current.zoom * 0.28) * (eSelecionado ? 1.7 : 1);
        const cor = corDe(i);

        if (dentro && eSelecionado) {
          const brilho = r * 7;
          const g = ctx.createRadialGradient(px[i], py[i], 0, px[i], py[i], brilho);
          g.addColorStop(0, comAlfa(cor, 0.5));
          g.addColorStop(1, comAlfa(cor, 0));
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px[i], py[i], brilho, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = comAlfa(cor, dentro ? 0.62 + escala[i] * 0.38 : 0.08);
        ctx.beginPath();
        ctx.arc(px[i], py[i], r, 0, Math.PI * 2);
        ctx.fill();

        if (eSelecionado) {
          ctx.strokeStyle = tokens['--color-text'];
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(px[i], py[i], r + 3.4, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // rótulo sob o cursor
      const h = hover.current;
      if (h >= 0 && h !== selecionado.current && visivel(h)) {
        const texto = topicos[h].nome;
        ctx.font = '600 11.5px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'left';
        const w = ctx.measureText(texto).width;
        let lx = px[h] + 13;
        if (lx + w + 11 > largura - 8) lx = px[h] - w - 24;
        ctx.fillStyle = comAlfa(tokens['--color-card'], 0.94);
        ctx.beginPath();
        ctx.roundRect(lx - 6, py[h] - 10, w + 12, 20, 4);
        ctx.fill();
        ctx.strokeStyle = comAlfa(corDe(h), 0.4);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = tokens['--color-text'];
        ctx.fillText(texto, lx, py[h] + 0.5);
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

  // ── interação
  const aoApontarBaixo = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    arrasta.current = true;
    ultimo.current = { x: ev.clientX, y: ev.clientY };
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };

  const aoMover = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const caixa = ev.currentTarget.getBoundingClientRect();
    if (arrasta.current) {
      camera.current.yaw += (ev.clientX - ultimo.current.x) * 0.0062;
      camera.current.pitch = Math.max(
        -1.2,
        Math.min(1.2, camera.current.pitch + (ev.clientY - ultimo.current.y) * 0.0042),
      );
      ultimo.current = { x: ev.clientX, y: ev.clientY };
      if (Math.abs(ev.movementX) > 1) gira.current = false;
    } else {
      hover.current = acharNo(ev.clientX - caixa.left, ev.clientY - caixa.top);
    }
  };

  const aoApontarCima = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    arrasta.current = false;
    const movimento = Math.abs(ev.clientX - ultimo.current.x) + Math.abs(ev.clientY - ultimo.current.y);
    if (movimento >= 4) return;
    const caixa = ev.currentTarget.getBoundingClientRect();
    selecionar(acharNo(ev.clientX - caixa.left, ev.clientY - caixa.top));
  };

  const aoRolar = (ev: React.WheelEvent<HTMLCanvasElement>) => {
    ev.preventDefault();
    camera.current.zoom = Math.max(0.45, Math.min(4.2, camera.current.zoom * (ev.deltaY > 0 ? 0.92 : 1.087)));
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
      className="block h-full w-full cursor-grab touch-none rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
      onPointerDown={aoApontarBaixo}
      onPointerMove={aoMover}
      onPointerUp={aoApontarCima}
      onPointerLeave={() => {
        hover.current = -1;
      }}
      onWheel={aoRolar}
      onKeyDown={aoTeclar}
    />
  );
}
