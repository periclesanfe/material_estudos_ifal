import { useMemo } from 'react';
import type { Esquema } from './parseDdl';

/**
 * Diagrama ER em notação de Chen, derivado do MESMO DDL do esquema relacional.
 *
 * O ganho didático está justamente em ver os dois lado a lado: a tabela
 * associativa que aparece como caixa no relacional aparece aqui como LOSANGO,
 * que é exatamente o passo 6 da transformação ER→relacional que a disciplina
 * ensina. O aluno vê a mesma informação nas duas gramáticas.
 *
 * Vale dizer o que isto NÃO é: engenharia reversa não recupera o que o DDL não
 * guarda (atributo multivalorado já virou tabela; a participação total/parcial
 * some). O desenho mostra o conceitual RECONSTRUÍVEL, e é assim que deve ser
 * lido.
 */

interface Props {
  esquema: Esquema;
}

const L_CAIXA = 132;
const A_CAIXA = 46;
const L_LOSANGO = 108;
const A_LOSANGO = 56;
const ESPACO_Y = 132;

export default function ErDiagram({ esquema }: Props) {
  const modelo = useMemo(() => {
    // Entidades são as tabelas não associativas; as associativas viram losangos.
    const entidades = esquema.tabelas.filter(t => !esquema.associativas.has(t.nome));
    const relAssoc = esquema.tabelas.filter(t => esquema.associativas.has(t.nome));

    // FKs simples (fora de tabela associativa) também são relacionamentos: viram
    // losango entre as duas entidades, com o nome derivado do par.
    const relSimples = esquema.ligacoes.filter(
      l => !esquema.associativas.has(l.de) && !esquema.associativas.has(l.para),
    );

    return { entidades, relAssoc, relSimples };
  }, [esquema]);

  const { entidades, relAssoc, relSimples } = modelo;

  // Duas colunas de entidades com os relacionamentos entre elas — leitura
  // esquerda→direita, que é como o diagrama de Chen é ensinado.
  const largura = 760;
  // Cada entidade ocupa meia-linha (duas por faixa) e cada relacionamento uma
  // linha inteira. Medir os dois separadamente evita a faixa morta no rodapé
  // que aparecia ao dimensionar pelo simples máximo entre as contagens.
  const faixasEnt = Math.ceil(entidades.length / 2);
  const nRels = relAssoc.length + relSimples.length;
  const fimEnt = faixasEnt > 0 ? 60 + (faixasEnt - 1) * ESPACO_Y + ESPACO_Y / 2 + A_CAIXA : 0;
  // Relacionamento com atributos precisa de espaço para as elipses penduradas.
  const temAttr = relAssoc.some(t => t.colunas.some(c => !c.pk));
  const fimRel = nRels > 0 ? 60 + (nRels - 1) * ESPACO_Y + ESPACO_Y / 4 + (temAttr ? 96 : A_LOSANGO) : 0;
  const altura = Math.max(fimEnt, fimRel, ESPACO_Y) + 30;

  const posEnt = new Map<string, { x: number; y: number }>();
  entidades.forEach((e, i) => {
    const esquerda = i % 2 === 0;
    posEnt.set(e.nome, {
      x: esquerda ? 90 : largura - 90,
      y: 60 + Math.floor(i / 2) * ESPACO_Y + (esquerda ? 0 : ESPACO_Y / 2),
    });
  });

  const rels = [
    ...relAssoc.map(t => ({
      nome: t.nome,
      tipo: 'N:M' as const,
      pontas: esquema.ligacoes.filter(l => l.de === t.nome).map(l => l.para),
      extras: t.colunas.filter(c => !c.pk).map(c => c.nome),
    })),
    ...relSimples.map(l => ({
      // O nome do losango sai da coluna FK sem o ruído de chave: `cod_disc`,
      // `disc_id` e `id_disc` devem todos ler "disc". Quando a coluna não tem
      // afixo de chave para tirar (`numeroreg`, `codisciplina`), o nome dela não
      // descreve o relacionamento — aí o nome da tabela referenciada informa
      // mais, e é ele que vai para o losango.
      nome: (() => {
        const limpo = l.deColuna
          .replace(/^(id|cod(igo)?|fk)_/i, '')
          .replace(/_(id|cod(igo)?|fk)$/i, '');
        return limpo && limpo.toLowerCase() !== l.deColuna.toLowerCase() ? limpo : l.para;
      })(),
      tipo: l.cardinalidade,
      pontas: [l.para, l.de],
      extras: [] as string[],
    })),
  ];

  const posRel = new Map<number, { x: number; y: number }>();
  rels.forEach((_, i) => {
    posRel.set(i, { x: largura / 2, y: 60 + i * ESPACO_Y + ESPACO_Y / 4 });
  });

  const centro = (nome: string) => posEnt.get(nome);

  return (
    <div className="db-er">
      <svg viewBox={`0 0 ${largura} ${altura}`} className="db-er__svg" role="img"
           aria-label="Diagrama entidade-relacionamento em notação de Chen">
        {/* Linhas primeiro, para ficarem sob as formas. */}
        {rels.map((r, i) => {
          const pr = posRel.get(i)!;
          return r.pontas.map((alvo, j) => {
            const pe = centro(alvo);
            if (!pe) return null;
            return (
              <g key={`${i}-${j}`} className="db-er__aresta">
                <line x1={pr.x} y1={pr.y} x2={pe.x} y2={pe.y} />
                <text
                  x={pr.x + (pe.x - pr.x) * 0.62}
                  y={pr.y + (pe.y - pr.y) * 0.62 - 6}
                >
                  {r.tipo === 'N:M' ? 'N' : j === 0 ? '1' : 'N'}
                </text>
              </g>
            );
          });
        })}

        {/* Entidades: retângulos. */}
        {entidades.map(e => {
          const p = posEnt.get(e.nome)!;
          const pk = e.colunas.find(c => c.pk);
          return (
            <g key={e.nome} className="db-er__entidade">
              <rect x={p.x - L_CAIXA / 2} y={p.y - A_CAIXA / 2} width={L_CAIXA} height={A_CAIXA} rx="4" />
              <text x={p.x} y={pk ? p.y - 3 : p.y}>{e.nome}</text>
              {pk && <text className="db-er__pk" x={p.x} y={p.y + 13}>{pk.nome}</text>}
            </g>
          );
        })}

        {/* Relacionamentos: losangos. */}
        {rels.map((r, i) => {
          const p = posRel.get(i)!;
          const pts = [
            `${p.x},${p.y - A_LOSANGO / 2}`,
            `${p.x + L_LOSANGO / 2},${p.y}`,
            `${p.x},${p.y + A_LOSANGO / 2}`,
            `${p.x - L_LOSANGO / 2},${p.y}`,
          ].join(' ');
          return (
            <g key={i} className="db-er__rel">
              <polygon points={pts} />
              <text x={p.x} y={p.y}>{r.nome}</text>
              {/* Atributos do relacionamento: elipses penduradas no losango. */}
              {r.extras.slice(0, 2).map((attr, k) => {
                // Bem abaixo do losango e não muito para os lados: as arestas
                // que saem do losango rumo às entidades correm na diagonal, e
                // elipse alta/larga demais cruza justamente com elas.
                const ax = p.x + (k === 0 ? -58 : 58);
                const ay = p.y + A_LOSANGO / 2 + 52;
                return (
                  <g key={attr} className="db-er__attr">
                    <line x1={p.x} y1={p.y + A_LOSANGO / 2} x2={ax} y2={ay - 12} />
                    <ellipse cx={ax} cy={ay} rx="42" ry="15" />
                    <text x={ax} y={ay}>{attr}</text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
