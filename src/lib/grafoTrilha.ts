/**
 * Motor do grafo da trilha de aprendizado: layout 3D e projeção em tela.
 *
 * Sem dependência externa e sem React: recebe tópicos e dependências, devolve
 * posições. Fica separado do componente para poder ser exercitado sozinho.
 *
 * A forma de funil não é imposta, ela emerge de duas regras:
 *
 * 1. A altura é contínua. O período dá a faixa e a posição na sequência
 *    didática da matéria dá o lugar dentro dela, então cada disciplina é um fio
 *    que sobe em vez de um disco achatado. As faixas se sobrepõem de leve, o que
 *    é honesto: um conceito do fim do 3º período vem depois de um do começo do 4º.
 * 2. O raio acompanha a densidade. Cada nó é atraído para um raio proporcional à
 *    raiz da quantidade de nós na sua altura, então onde há muito conteúdo o
 *    grafo se abre e onde há pouco ele afunila.
 *
 * O ângulo vem da matéria, o que mantém cada disciplina como um lobo de cor
 * legível em vez de uma nuvem única.
 */

export interface NoGrafo {
  id: string;
  disciplina: string;
  /** Período do curso. 9 representa optativa. */
  periodo: number;
  /** Posição na sequência didática da matéria, começando em 1. */
  ordem: number;
}

export interface ArestaGrafo {
  topicoId: string;
  prerequisitoId: string;
  forca: 'hard' | 'soft';
}

/**
 * O que o eixo vertical representa.
 *
 * `profundidade`: quantos pré-requisitos existem atrás do conceito. É a ordem
 * real de aprendizado e é o que desenha o funil, porque há muitos conceitos de
 * partida e poucos no fim de cadeias longas.
 *
 * `periodo`: o semestre em que a matéria é ofertada. Responde "quando eu vejo
 * isso no curso", ao custo de empilhar as matérias em faixas.
 */
export type EixoVertical = 'profundidade' | 'periodo';

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
  /** Profundidade no grafo por índice, para o painel e para os rótulos. */
  profundidade: Int32Array;
  /** Marcações do eixo vertical, já em unidades de mundo. */
  marcacoes: { rotulo: string; altura: number }[];
}

/**
 * Extensão vertical do grafo em unidades de mundo, contra um raio máximo de 1.
 * Mais que o dobro da largura: o funil é uma coluna alta, não um disco.
 */
const ALTURA_TOTAL = 3.4;

/** Semente determinística: o mesmo dataset gera sempre o mesmo desenho. */
function pseudoAleatorio(i: number, sal: number): number {
  const n = Math.imul(i + 1, 2654435761) ^ Math.imul(sal + 1, 40503);
  return ((n >>> 0) % 100000) / 100000;
}

export function montarLayout(
  nos: readonly NoGrafo[],
  arestasEntrada: readonly ArestaGrafo[],
  ordemDisciplinas: readonly string[],
  eixo: EixoVertical = 'profundidade',
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
  const faixaDe = (periodo: number): number => {
    const i = periodos.indexOf(periodo);
    return periodos.length > 1 ? -ALTURA_TOTAL / 2 + (i / (periodos.length - 1)) * ALTURA_TOTAL : 0;
  };

  // espessura da faixa de um período: 0.78 do espaçamento deixa as faixas se
  // sobreporem de leve, o que evita o empilhamento de discos achatados
  const espacamento = periodos.length > 1 ? ALTURA_TOTAL / (periodos.length - 1) : 1;
  const espessura = espacamento * 0.78;

  /** Quantos tópicos cada matéria tem, para normalizar o progresso didático. */
  const totalPorDisciplina = new Map<string, number>();
  for (const n of nos) totalPorDisciplina.set(n.disciplina, Math.max(totalPorDisciplina.get(n.disciplina) ?? 0, n.ordem));

  const anguloPorDisciplina = new Map<string, number>();
  ordemDisciplinas.forEach((codigo, i) => {
    anguloPorDisciplina.set(codigo, (i / Math.max(1, ordemDisciplinas.length)) * Math.PI * 2);
  });

  const x = new Float64Array(N);
  const y = new Float64Array(N);
  const z = new Float64Array(N);

  /**
   * Profundidade no grafo: o tamanho da maior cadeia de pré-requisitos atrás do
   * nó. Zero para quem não depende de nada.
   */
  const profundidade = new Int32Array(N);
  {
    const memo = new Int32Array(N).fill(-1);
    const calcula = (n: number, guarda: Set<number>): number => {
      if (memo[n] >= 0) return memo[n];
      if (guarda.has(n)) return 0;
      guarda.add(n);
      let maior = 0;
      for (const p of pais[n]) {
        const v = 1 + calcula(p, guarda);
        if (v > maior) maior = v;
      }
      guarda.delete(n);
      memo[n] = maior;
      return maior;
    };
    for (let i = 0; i < N; i++) profundidade[i] = calcula(i, new Set());
  }
  const profundidadeMaxima = Math.max(1, ...profundidade);

  /** Posição vertical normalizada, de 0 na base a 1 no topo. */
  const nivel = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    if (eixo === 'profundidade') {
      nivel[i] = profundidade[i] / profundidadeMaxima;
    } else {
      const total = totalPorDisciplina.get(nos[i].disciplina) ?? 1;
      const progresso = total > 1 ? (nos[i].ordem - 1) / (total - 1) : 0.5;
      const faixa = faixaDe(nos[i].periodo) + (progresso - 0.5) * espessura;
      nivel[i] = (faixa + ALTURA_TOTAL / 2) / ALTURA_TOTAL;
    }
  }

  /**
   * Altura. No eixo de profundidade o sentido é invertido de propósito: o nível
   * zero fica no TOPO e as cadeias longas descem. É a forma de funil, e ela cai
   * bem com o dado real, porque 198 dos conceitos estão nos quatro primeiros
   * níveis e precisam da boca larga, enquanto o fim das cadeias é rarefeito e
   * cabe no bico.
   *
   * O respiro aleatório impede que nós de mesmo nível caiam numa linha perfeita:
   * é o que separa uma nuvem orgânica de discos empilhados.
   */
  const respiro = eixo === 'profundidade' ? (ALTURA_TOTAL / profundidadeMaxima) * 0.62 : 0;
  for (let i = 0; i < N; i++) {
    const posicao = eixo === 'profundidade' ? 1 - nivel[i] : nivel[i];
    y[i] = -ALTURA_TOTAL / 2 + posicao * ALTURA_TOTAL + (pseudoAleatorio(i, 7) - 0.5) * respiro;
  }

  /**
   * Raio que cada nó persegue, e é daqui que sai o funil: largo onde há muitos
   * conceitos, estreito onde há poucos. No eixo de profundidade isso significa
   * boca larga nos pontos de partida e bico fino no fim das cadeias longas.
   *
   * O raio do nível é um teto, não um anel: a raiz quadrada do sorteio distribui
   * os nós por área e preenche o volume do cone, em vez de empilhar argolas.
   */
  const raioAlvo = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const abertura = eixo === 'profundidade' ? 1 - nivel[i] : nivel[i];
    const teto = 0.08 + Math.pow(abertura, 0.62) * 0.92;
    raioAlvo[i] = teto * (0.32 + Math.sqrt(pseudoAleatorio(i, 3)) * 0.68);
  }

  for (let i = 0; i < N; i++) {
    const base = anguloPorDisciplina.get(nos[i].disciplina) ?? 0;
    const raio = raioAlvo[i] * (0.8 + pseudoAleatorio(i, 1) * 0.4);
    const angulo = base + (pseudoAleatorio(i, 2) - 0.5) * 1.05;
    x[i] = Math.cos(angulo) * raio;
    z[i] = Math.sin(angulo) * raio;
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
        if (dy * dy > 0.2) continue;
        let dx = x[i] - x[j];
        let dz = z[i] - z[j];
        let d2 = dx * dx + dz * dz;
        if (d2 < 1e-6) {
          dx = 1e-3 * ((i % 3) - 1);
          dz = 1e-3 * ((j % 3) - 1);
          d2 = 1e-6;
        }
        const d = Math.sqrt(d2);
        // repulsão fraca de propósito: o desenho da referência é denso, e
        // repulsão forte espalharia o funil numa nuvem rala
        const f = 0.0011 / d2;
        fx[i] += (dx / d) * f;
        fz[i] += (dz / d) * f;
        fx[j] -= (dx / d) * f;
        fz[j] -= (dz / d) * f;
      }
    }

    // molas nas arestas: a estrutura do grafo é a força dominante, é ela que faz
    // o descendente orbitar o pré-requisito e dá a silhueta orgânica
    for (const a of arestas) {
      const dx = x[a.t] - x[a.p];
      const dz = z[a.t] - z[a.p];
      const d = Math.hypot(dx, dz) || 1e-6;
      const f = (d - 0.13) * (a.forca === 'hard' ? 0.115 : 0.05);
      fx[a.t] -= (dx / d) * f;
      fz[a.t] -= (dz / d) * f;
      fx[a.p] += (dx / d) * f;
      fz[a.p] += (dz / d) * f;
    }

    for (let i = 0; i < N; i++) {
      const r = Math.hypot(x[i], z[i]) || 1e-6;

      // raio pela profundidade no grafo: firme, porque é o que desenha o cone
      const correcao = (raioAlvo[i] - r) * 0.055;
      fx[i] += (x[i] / r) * correcao;
      fz[i] += (z[i] / r) * correcao;

      // dica angular por disciplina, deliberadamente fraca: o suficiente para a
      // cor não virar ruído, fraca o bastante para as matérias se entrelaçarem
      // em vez de virarem gomos separados
      const base = anguloPorDisciplina.get(nos[i].disciplina) ?? 0;
      fx[i] += (Math.cos(base) * raioAlvo[i] - x[i]) * 0.004;
      fz[i] += (Math.sin(base) * raioAlvo[i] - z[i]) * 0.004;
    }

    for (let i = 0; i < N; i++) {
      x[i] += Math.max(-0.05, Math.min(0.05, fx[i])) * esfria;
      z[i] += Math.max(-0.05, Math.min(0.05, fz[i])) * esfria;
    }
  }

  // normaliza pelo percentil 97 em vez do máximo: um nó solto muito afastado
  // encolheria o grafo inteiro para caber
  {
    const raios = new Float64Array(N);
    for (let i = 0; i < N; i++) raios[i] = Math.hypot(x[i], z[i]);
    const ordenados = Float64Array.from(raios).sort();
    const referencia = ordenados[Math.min(N - 1, Math.floor(N * 0.97))] || 1;
    for (let i = 0; i < N; i++) {
      x[i] /= referencia;
      z[i] /= referencia;
    }
  }

  // marcações do eixo: níveis de profundidade ou faixas de período
  const marcacoes: Layout['marcacoes'] = [];
  if (eixo === 'profundidade') {
    const passo = profundidadeMaxima > 8 ? Math.ceil(profundidadeMaxima / 6) : 2;
    for (let d = 0; d <= profundidadeMaxima; d += passo) {
      marcacoes.push({
        rotulo: d === 0 ? 'ponto de partida' : `nível ${d}`,
        altura: -ALTURA_TOTAL / 2 + (1 - d / profundidadeMaxima) * ALTURA_TOTAL,
      });
    }
  } else {
    for (const p of periodos) {
      marcacoes.push({ rotulo: p >= 9 ? 'OPT' : `${p}º`, altura: faixaDe(p) });
    }
  }

  return {
    x,
    y,
    z,
    alcance,
    alcanceMaximo,
    indicePorId,
    pais,
    filhos,
    arestas,
    periodos,
    profundidade,
    marcacoes,
  };
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

/** Converte uma altura de mundo em pixel de tela, para os rótulos do eixo. */
export function alturaEmTela(
  altura: number,
  camera: Camera,
  centroY: number,
  raio: number,
): number {
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
