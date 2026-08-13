/**
 * Motor do grafo da trilha de aprendizado: layout 3D e projeção em tela.
 *
 * Sem dependência externa e sem React: recebe tópicos e dependências, devolve
 * posições. Fica separado do componente para poder ser exercitado sozinho.
 *
 * O posicionamento é ANALÍTICO, não simulado. Cada nó recebe altura, raio e
 * ângulo por fórmula fechada, sem iteração de forças. Isso não é atalho: é o que
 * produz a silhueta limpa de funil em vez do emaranhado que uma simulação
 * entrega. As três regras:
 *
 * 1. Altura pelo nível. O nível é a profundidade no grafo (quantos
 *    pré-requisitos vêm antes) ou o período do curso, à escolha do leitor.
 * 2. Raio pelo nível, com expoente. A base fica estreita e o topo abre, então
 *    os conceitos de partida formam um núcleo denso e a especialização se
 *    espalha. Os nós da base se sobrepõem de propósito: é a cauda brilhante.
 * 3. Ângulo pela matéria, com torção progressiva. Cada disciplina ocupa um
 *    setor, e o setor gira conforme o nível sobe. A torção é o que transforma um
 *    cone reto em vórtice, e é ela que faz as arestas longas desenharem as
 *    linhas curvas que dão a leitura de profundidade.
 */

/** Geometria do funil. Unidades de mundo, projetadas com perspectiva. */
const GEO = {
  /** Distância focal. Quanto menor, mais dramática a perspectiva. */
  fov: 1400,
  /** Afastamento da câmera. */
  distancia: 900,
  /** Extensão vertical total. */
  altura: 1150,
  /** Raio máximo, no topo do funil. */
  raio: 560,
  /**
   * Expoente do raio. Acima de 1 a base fecha rápido e o topo abre com calma,
   * que é o perfil de funil e não de cone reto.
   */
  expoente: 1.35,
  /** Voltas de torção acumuladas da base ao topo, em radianos. */
  torcao: 2.2,
  /** Amplitude do respiro vertical, para nós de mesmo nível não se alinharem. */
  respiro: 30,
  raioNoMinimo: 1.5,
  raioNoMaximo: 5.2,
} as const;

/**
 * O que o eixo vertical representa.
 *
 * `profundidade`: quantos pré-requisitos existem atrás do conceito. É a ordem
 * real de aprendizado, e é o que desenha o funil, porque há muitos conceitos de
 * partida e poucos no fim de cadeias longas.
 *
 * `periodo`: o semestre em que a matéria é ofertada. Responde "quando eu vejo
 * isso no curso", ao custo de empilhar as matérias em faixas.
 */
export type EixoVertical = 'profundidade' | 'periodo';

export interface NoGrafo {
  id: string;
  disciplina: string;
  /** Período do curso. 9 representa optativa. */
  periodo: number;
  /** Posição na sequência didática da matéria, começando em 1. */
  ordem: number;
  /** Fração dos conceitos que dependem deste. Define o raio do ponto. */
  centralidade: number;
}

export interface ArestaGrafo {
  topicoId: string;
  prerequisitoId: string;
  forca: 'hard' | 'soft';
}

export interface Layout {
  /** Coordenadas de mundo por índice do nó. */
  x: Float64Array;
  y: Float64Array;
  z: Float64Array;
  /** Raio do ponto em pixels na escala 1. */
  raioNo: Float64Array;
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
  /** Profundidade no grafo por índice. */
  profundidade: Int32Array;
  /** Marcações do eixo vertical, em unidades de mundo. */
  marcacoes: { rotulo: string; altura: number }[];
}

/** Semente determinística: o mesmo dataset gera sempre o mesmo desenho. */
function pseudoAleatorio(texto: string, sal: number): number {
  let h = 2166136261 ^ sal;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}

export function montarLayout(
  nos: readonly NoGrafo[],
  arestasEntrada: readonly ArestaGrafo[],
  ordemDisciplinas: readonly string[],
  eixo: EixoVertical = 'profundidade',
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

  // profundidade: maior cadeia de pré-requisitos atrás do nó
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

  const periodos = [...new Set(nos.map(n => n.periodo))].sort((a, b) => a - b);
  const totalPorDisciplina = new Map<string, number>();
  for (const n of nos) {
    totalPorDisciplina.set(n.disciplina, Math.max(totalPorDisciplina.get(n.disciplina) ?? 0, n.ordem));
  }

  /** Nível normalizado, de 0 na base estreita a 1 no topo aberto. */
  const nivel = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    if (eixo === 'profundidade') {
      nivel[i] = profundidade[i] / profundidadeMaxima;
    } else {
      const posicaoPeriodo = periodos.indexOf(nos[i].periodo) / Math.max(1, periodos.length - 1);
      const total = totalPorDisciplina.get(nos[i].disciplina) ?? 1;
      const progresso = total > 1 ? (nos[i].ordem - 1) / (total - 1) : 0.5;
      // o período dá a faixa e a sequência didática dá o lugar dentro dela
      nivel[i] = Math.min(1, Math.max(0, posicaoPeriodo + (progresso - 0.5) / Math.max(1, periodos.length - 1)));
    }
  }

  const setorPorDisciplina = new Map<string, number>();
  const quantas = Math.max(1, ordemDisciplinas.length);
  ordemDisciplinas.forEach((codigo, i) => {
    setorPorDisciplina.set(codigo, ((i + 0.5) / quantas) * Math.PI * 2);
  });
  const aberturaDoSetor = ((Math.PI * 2) / quantas) * 0.9;

  const x = new Float64Array(N);
  const y = new Float64Array(N);
  const z = new Float64Array(N);
  const raioNo = new Float64Array(N);

  for (let i = 0; i < N; i++) {
    const no = nos[i];
    const t = nivel[i];
    const setor = setorPorDisciplina.get(no.disciplina) ?? 0;

    // ângulo: setor da matéria, um respiro dentro do setor, e a torção que sobe
    const angulo = setor + (pseudoAleatorio(no.id, 1) - 0.5) * aberturaDoSetor + t * GEO.torcao;

    // raio: fecha na base, abre no topo, com dispersão para preencher o volume
    const raio = GEO.raio * (0.08 + 0.92 * Math.pow(t, GEO.expoente)) * (0.5 + 0.5 * pseudoAleatorio(no.id, 2));

    x[i] = Math.cos(angulo) * raio;
    z[i] = Math.sin(angulo) * raio;
    y[i] = (t - 0.5) * GEO.altura + (pseudoAleatorio(no.id, 3) - 0.5) * GEO.respiro;

    // o ponto cresce com quantos conceitos dependem dele
    raioNo[i] = GEO.raioNoMinimo + (GEO.raioNoMaximo - GEO.raioNoMinimo) * Math.sqrt(no.centralidade);
  }

  // marcações do eixo, na mesma fórmula de altura dos nós
  const alturaDoNivel = (t: number) => (t - 0.5) * GEO.altura;
  const marcacoes: Layout['marcacoes'] = [];
  if (eixo === 'profundidade') {
    const passo = profundidadeMaxima > 8 ? Math.ceil(profundidadeMaxima / 5) : 2;
    for (let d = 0; d <= profundidadeMaxima; d += passo) {
      marcacoes.push({
        rotulo: d === 0 ? 'ponto de partida' : `nível ${d}`,
        altura: alturaDoNivel(d / profundidadeMaxima),
      });
    }
  } else {
    periodos.forEach((p, i) => {
      marcacoes.push({
        rotulo: p >= 9 ? 'optativas' : `${p}º período`,
        altura: alturaDoNivel(i / Math.max(1, periodos.length - 1)),
      });
    });
  }

  return {
    x,
    y,
    z,
    raioNo,
    alcance,
    alcanceMaximo,
    indicePorId,
    pais,
    filhos,
    arestas,
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

/**
 * Zoom de referência para uma viewport de 900 px de altura.
 *
 * Deduzido, não chutado: no centro da cena a perspectiva vale
 * fov / (fov + distancia) = 1400 / 2300 = 0,609, então a altura projetada do
 * funil é altura * 0,609 * zoom. Para ele ocupar 82% de 900 px:
 * zoom = 0,82 * 900 / (1150 * 0,609) = 1,05.
 */
export const ZOOM_BASE = 1.05;

/** Fator de perspectiva de um ponto, dada sua profundidade projetada. */
function perspectivaDe(z: number): number {
  return GEO.fov / (GEO.fov + z + GEO.distancia);
}

export function projetar(
  layout: Layout,
  camera: Camera,
  centroX: number,
  centroY: number,
  destino: Projecao,
): void {
  const { x, y, z } = layout;
  const cosYaw = Math.cos(camera.yaw);
  const senYaw = Math.sin(camera.yaw);
  const cosPitch = Math.cos(camera.pitch);
  const senPitch = Math.sin(camera.pitch);

  for (let i = 0; i < x.length; i++) {
    const xr = x[i] * cosYaw + z[i] * senYaw;
    const zr = -x[i] * senYaw + z[i] * cosYaw;
    const yr = y[i] * cosPitch - zr * senPitch;
    const zf = y[i] * senPitch + zr * cosPitch;
    const s = perspectivaDe(zf);
    destino.px[i] = centroX + xr * s * camera.zoom;
    destino.py[i] = centroY - yr * s * camera.zoom;
    destino.pz[i] = zf;
    destino.escala[i] = s;
  }
}

/** Converte uma altura de mundo em pixel de tela, para os rótulos do eixo. */
export function alturaEmTela(altura: number, camera: Camera, centroY: number): number {
  const yr = altura * Math.cos(camera.pitch);
  const zf = altura * Math.sin(camera.pitch);
  return centroY - yr * perspectivaDe(zf) * camera.zoom;
}

/**
 * Fecho transitivo dos pré-requisitos de um nó, com a profundidade de cada um.
 * A profundidade alimenta a animação: a luz sobe da raiz para o conceito
 * escolhido, na ordem em que o aluno estudaria.
 */
export function fecharTrilha(
  layout: Layout,
  no: number,
): { fecho: Set<number>; profundidade: Map<number, number> } {
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
