/**
 * Motor do grafo da trilha de aprendizado: layout 3D e projeção em tela.
 *
 * Sem dependência externa e sem React: recebe tópicos e dependências, devolve
 * posições. Fica separado do componente para poder ser exercitado sozinho.
 *
 * O eixo vertical não é contínuo: cada período do curso é um estrato discreto,
 * porque a grade é uma escada de semestres, não um gradiente. O plano
 * horizontal vem de força dirigida com âncora radial por disciplina, o que
 * mantém cada matéria como um lobo de cor legível em vez de uma nuvem única.
 */

export interface NoGrafo {
  id: string;
  disciplina: string;
  /** Período do curso. 9 representa optativa. */
  periodo: number;
}

export interface ArestaGrafo {
  topicoId: string;
  prerequisitoId: string;
  forca: 'hard' | 'soft';
}

export interface Layout {
  /** Coordenadas por índice do nó. */
  x: Float64Array;
  y: Float64Array;
  z: Float64Array;
  /** Quantos nós dependem de cada nó, direta ou indiretamente. */
  alcance: Int32Array;
  alcanceMaximo: number;
  /** Índice de cada id, na mesma ordem de entrada. */
  indicePorId: Map<string, number>;
  /** Pré-requisitos diretos, por índice. */
  pais: number[][];
  /** Dependentes diretos, por índice. */
  filhos: number[][];
  /** Arestas com as pontas já resolvidas para índice. */
  arestas: { t: number; p: number; forca: 'hard' | 'soft' }[];
  /** Períodos presentes, em ordem crescente. */
  periodos: number[];
}

/** Semente determinística: o mesmo dataset gera sempre o mesmo desenho. */
function pseudoAleatorio(i: number, sal: number): number {
  const n = Math.imul(i + 1, 2654435761) ^ Math.imul(sal + 1, 40503);
  return ((n >>> 0) % 100000) / 100000;
}

export function montarLayout(
  nos: readonly NoGrafo[],
  arestasEntrada: readonly ArestaGrafo[],
  ordemDisciplinas: readonly string[],
  iteracoes = 240,
): Layout {
  const N = nos.length;
  const indicePorId = new Map<string, number>();
  for (let i = 0; i < N; i++) indicePorId.set(nos[i].id, i);

  const arestas: Layout['arestas'] = [];
  for (const a of arestasEntrada) {
    const t = indicePorId.get(a.topicoId);
    const p = indicePorId.get(a.prerequisitoId);
    if (t === undefined || p === undefined) continue;
    arestas.push({ t, p, forca: a.forca });
  }

  const pais: number[][] = Array.from({ length: N }, () => []);
  const filhos: number[][] = Array.from({ length: N }, () => []);
  for (const a of arestas) {
    pais[a.t].push(a.p);
    filhos[a.p].push(a.t);
  }

  // alcance: quantos nós dependem deste, transitivamente
  const alcance = new Int32Array(N);
  {
    const memo: (Set<number> | null)[] = new Array(N).fill(null);
    const visita = (n: number, guarda: Set<number>): Set<number> => {
      const m = memo[n];
      if (m) return m;
      if (guarda.has(n)) return new Set();
      guarda.add(n);
      const acc = new Set<number>();
      for (const f of filhos[n]) {
        acc.add(f);
        for (const x of visita(f, guarda)) acc.add(x);
      }
      guarda.delete(n);
      memo[n] = acc;
      return acc;
    };
    for (let i = 0; i < N; i++) alcance[i] = visita(i, new Set()).size;
  }
  const alcanceMaximo = Math.max(1, ...alcance);

  const periodos = [...new Set(nos.map(n => n.periodo))].sort((a, b) => a - b);
  const alturaDe = (periodo: number): number => {
    const i = periodos.indexOf(periodo);
    return periodos.length > 1 ? -1.05 + (i / (periodos.length - 1)) * 2.1 : 0;
  };

  const anguloPorDisciplina = new Map<string, number>();
  ordemDisciplinas.forEach((codigo, i) => {
    anguloPorDisciplina.set(codigo, (i / Math.max(1, ordemDisciplinas.length)) * Math.PI * 2);
  });

  const x = new Float64Array(N);
  const y = new Float64Array(N);
  const z = new Float64Array(N);

  for (let i = 0; i < N; i++) {
    const base = anguloPorDisciplina.get(nos[i].disciplina) ?? 0;
    const raio = 0.34 + pseudoAleatorio(i, 1) * 0.5;
    const angulo = base + (pseudoAleatorio(i, 2) - 0.5) * 1.05;
    x[i] = Math.cos(angulo) * raio;
    z[i] = Math.sin(angulo) * raio;
    y[i] = alturaDe(nos[i].periodo);
  }

  const fx = new Float64Array(N);
  const fz = new Float64Array(N);

  for (let passo = 0; passo < iteracoes; passo++) {
    const esfria = 1 - passo / iteracoes;
    fx.fill(0);
    fz.fill(0);

    // repulsão apenas entre nós de altura próxima: mantém os estratos legíveis
    // e evita o custo de comparar o grafo inteiro par a par
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dy = y[i] - y[j];
        if (dy * dy > 0.16) continue;
        let dx = x[i] - x[j];
        let dz = z[i] - z[j];
        let d2 = dx * dx + dz * dz;
        if (d2 < 1e-6) {
          dx = 1e-3 * ((i % 3) - 1);
          dz = 1e-3 * ((j % 3) - 1);
          d2 = 1e-6;
        }
        const d = Math.sqrt(d2);
        const f = 0.0021 / d2;
        fx[i] += (dx / d) * f;
        fz[i] += (dz / d) * f;
        fx[j] -= (dx / d) * f;
        fz[j] -= (dz / d) * f;
      }
    }

    // molas nas arestas: aproxima quem depende de quem
    for (const a of arestas) {
      const dx = x[a.t] - x[a.p];
      const dz = z[a.t] - z[a.p];
      const d = Math.hypot(dx, dz) || 1e-6;
      const f = (d - 0.16) * (a.forca === 'hard' ? 0.075 : 0.035);
      fx[a.t] -= (dx / d) * f;
      fz[a.t] -= (dz / d) * f;
      fx[a.p] += (dx / d) * f;
      fz[a.p] += (dz / d) * f;
    }

    // âncora radial por disciplina
    for (let i = 0; i < N; i++) {
      const base = anguloPorDisciplina.get(nos[i].disciplina) ?? 0;
      fx[i] += (Math.cos(base) * 0.62 - x[i]) * 0.02;
      fz[i] += (Math.sin(base) * 0.62 - z[i]) * 0.02;
    }

    for (let i = 0; i < N; i++) {
      x[i] += Math.max(-0.05, Math.min(0.05, fx[i])) * esfria;
      z[i] += Math.max(-0.05, Math.min(0.05, fz[i])) * esfria;
    }
  }

  // normaliza o raio para o enquadramento não depender do tamanho do dataset
  let raioMaximo = 0;
  for (let i = 0; i < N; i++) raioMaximo = Math.max(raioMaximo, Math.hypot(x[i], z[i]));
  if (raioMaximo > 0) {
    for (let i = 0; i < N; i++) {
      x[i] /= raioMaximo;
      z[i] /= raioMaximo;
    }
  }

  return { x, y, z, alcance, alcanceMaximo, indicePorId, pais, filhos, arestas, periodos };
}

export interface Camera {
  yaw: number;
  pitch: number;
  zoom: number;
}

export interface Projecao {
  /** Coordenada horizontal em pixels. */
  px: Float64Array;
  /** Coordenada vertical em pixels. */
  py: Float64Array;
  /** Profundidade, para ordenar o desenho de trás para frente. */
  pz: Float64Array;
  /** Fator de perspectiva, usado para escalar raio e opacidade. */
  escala: Float64Array;
}

export function criarProjecao(n: number): Projecao {
  return {
    px: new Float64Array(n),
    py: new Float64Array(n),
    pz: new Float64Array(n),
    escala: new Float64Array(n),
  };
}

/** Distância da câmera. Fixa: a perspectiva é sutil de propósito. */
const DISTANCIA = 3.05;

export function projetar(
  layout: Layout,
  camera: Camera,
  centroX: number,
  centroY: number,
  raio: number,
  destino: Projecao,
): void {
  const { x, y, z } = layout;
  const cosYaw = Math.cos(camera.yaw);
  const senYaw = Math.sin(camera.yaw);
  const cosPitch = Math.cos(camera.pitch);
  const senPitch = Math.sin(camera.pitch);
  const s = raio * camera.zoom;

  for (let i = 0; i < x.length; i++) {
    const x1 = x[i] * cosYaw - z[i] * senYaw;
    const z1 = x[i] * senYaw + z[i] * cosYaw;
    const y2 = y[i] * cosPitch - z1 * senPitch;
    const z2 = y[i] * senPitch + z1 * cosPitch;
    const perspectiva = DISTANCIA / (DISTANCIA + z2);
    destino.px[i] = centroX + x1 * s * perspectiva;
    destino.py[i] = centroY - y2 * s * perspectiva;
    destino.pz[i] = z2;
    destino.escala[i] = perspectiva;
  }
}

/** Altura em pixels do estrato de um período, para a régua lateral. */
export function alturaDoEstrato(
  layout: Layout,
  periodo: number,
  camera: Camera,
  centroY: number,
  raio: number,
): number {
  const i = layout.periodos.indexOf(periodo);
  const altura = layout.periodos.length > 1 ? -1.05 + (i / (layout.periodos.length - 1)) * 2.1 : 0;
  const y2 = altura * Math.cos(camera.pitch);
  const z2 = altura * Math.sin(camera.pitch);
  const perspectiva = DISTANCIA / (DISTANCIA + z2);
  return centroY - y2 * raio * camera.zoom * perspectiva;
}

/**
 * Fecho transitivo dos pré-requisitos de um nó, com a profundidade de cada um.
 * A profundidade alimenta a animação: a luz sobe da raiz para o conceito
 * escolhido, na ordem em que o aluno estudaria.
 */
export function fecharTrilha(layout: Layout, no: number): { fecho: Set<number>; profundidade: Map<number, number> } {
  const fecho = new Set<number>([no]);
  const fila = [no];
  while (fila.length) {
    const atual = fila.pop() as number;
    for (const p of layout.pais[atual]) {
      if (!fecho.has(p)) {
        fecho.add(p);
        fila.push(p);
      }
    }
  }

  const profundidade = new Map<number, number>();
  const calcula = (n: number, guarda: Set<number>): number => {
    const memo = profundidade.get(n);
    if (memo !== undefined) return memo;
    if (guarda.has(n)) return 0;
    guarda.add(n);
    let maior = 0;
    for (const p of layout.pais[n]) {
      if (!fecho.has(p)) continue;
      const v = 1 + calcula(p, guarda);
      if (v > maior) maior = v;
    }
    guarda.delete(n);
    profundidade.set(n, maior);
    return maior;
  };
  for (const n of fecho) calcula(n, new Set());

  return { fecho, profundidade };
}
