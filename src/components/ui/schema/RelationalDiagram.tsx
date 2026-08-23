import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Esquema } from './parseDdl';

/**
 * Esquema relacional: uma caixa por tabela, uma linha por coluna, e curvas
 * ligando cada FK à PK que ela referencia.
 *
 * As linhas são medidas do DOM depois da montagem (não calculadas a partir de
 * tamanhos fixos) porque a altura de cada caixa depende da fonte, do tema e da
 * quebra de texto. Medir é o que mantém a seta grudada na linha certa quando o
 * usuário aumenta o zoom ou troca o tema.
 */

interface Props {
  esquema: Esquema;
  /** Coluna destacada ao passar o mouse, para acompanhar um caminho de FK. */
  destaque?: string | null;
  onDestaque?: (chave: string | null) => void;
}

interface Traco {
  d: string;
  chave: string;
  cardinalidade: string;
  meio: { x: number; y: number };
}

export default function RelationalDiagram({ esquema, destaque, onDestaque }: Props) {
  const areaRef = useRef<HTMLDivElement>(null);
  const linhasRef = useRef(new Map<string, HTMLElement>());
  const [tracos, setTracos] = useState<Traco[]>([]);
  const [caixa, setCaixa] = useState({ w: 0, h: 0 });

  // Ordena para que as tabelas referenciadas venham antes das que referenciam:
  // com as "donas" à esquerda, as curvas de FK cruzam bem menos.
  const ordenadas = useMemo(() => {
    const grau = new Map(esquema.tabelas.map(t => [t.nome, 0]));
    for (const l of esquema.ligacoes) grau.set(l.de, (grau.get(l.de) ?? 0) + 1);
    return [...esquema.tabelas].sort((a, b) => (grau.get(a.nome)! - grau.get(b.nome)!));
  }, [esquema]);

  useLayoutEffect(() => {
    const desenhar = () => {
      const area = areaRef.current;
      if (!area) return;
      const base = area.getBoundingClientRect();
      setCaixa({ w: base.width, h: base.height });

      const novos: Traco[] = [];
      for (const l of esquema.ligacoes) {
        const origem = linhasRef.current.get(`${l.de}.${l.deColuna}`);
        const alvo = linhasRef.current.get(`${l.para}.${l.paraColuna}`);
        if (!origem || !alvo) continue;

        const a = origem.getBoundingClientRect();
        const b = alvo.getBoundingClientRect();

        // Escolhe entre rota horizontal e vertical pela sobreposição das caixas.
        // Quando duas tabelas estão EMPILHADAS (mesma coluna do grid), sair pela
        // lateral joga a curva para fora da área — o caso da associativa logo
        // abaixo da entidade que ela referencia. Aí a rota certa é por cima.
        const sobrepoeX = a.left < b.right && b.left < a.right;

        let x1: number, y1: number, x2: number, y2: number, c1x: number, c1y: number, c2x: number, c2y: number;

        if (sobrepoeX) {
          const alvoAcima = b.top + b.height / 2 < a.top + a.height / 2;
          x1 = a.left + a.width / 2 - base.left;
          y1 = (alvoAcima ? a.top : a.bottom) - base.top;
          x2 = b.left + b.width / 2 - base.left;
          y2 = (alvoAcima ? b.bottom : b.top) - base.top;
          const dy = Math.max(24, Math.abs(y2 - y1) * 0.4);
          c1x = x1; c1y = alvoAcima ? y1 - dy : y1 + dy;
          c2x = x2; c2y = alvoAcima ? y2 + dy : y2 - dy;
        } else {
          const aDireita = a.left + a.width / 2 < b.left + b.width / 2;
          x1 = (aDireita ? a.right : a.left) - base.left;
          y1 = a.top + a.height / 2 - base.top;
          x2 = (aDireita ? b.left : b.right) - base.left;
          y2 = b.top + b.height / 2 - base.top;
          const dx = Math.max(28, Math.abs(x2 - x1) * 0.45);
          c1x = aDireita ? x1 + dx : x1 - dx; c1y = y1;
          c2x = aDireita ? x2 - dx : x2 + dx; c2y = y2;
        }

        novos.push({
          d: `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`,
          chave: `${l.de}.${l.deColuna}`,
          cardinalidade: l.cardinalidade,
          meio: { x: (x1 + x2) / 2, y: (y1 + y2) / 2 },
        });
      }
      setTracos(novos);
    };

    desenhar();
    // Redesenha em qualquer mudança de layout: redimensionar a janela, abrir a
    // barra lateral, ou a fonte carregar depois da primeira pintura.
    const ro = new ResizeObserver(desenhar);
    if (areaRef.current) ro.observe(areaRef.current);
    window.addEventListener('resize', desenhar);
    const t = setTimeout(desenhar, 120);
    return () => { ro.disconnect(); window.removeEventListener('resize', desenhar); clearTimeout(t); };
  }, [esquema, ordenadas]);

  return (
    <div className="db-rel" ref={areaRef}>
      <svg className="db-rel__linhas" width={caixa.w} height={caixa.h} aria-hidden="true">
        {tracos.map((t, i) => {
          const ativo = destaque === t.chave;
          return (
            <g key={i} className={`db-rel__traco${ativo ? ' is-ativo' : ''}`}>
              <path d={t.d} />
              <circle cx={t.meio.x} cy={t.meio.y} r="9" />
              <text x={t.meio.x} y={t.meio.y}>{t.cardinalidade === 'N:M' ? 'N' : t.cardinalidade === '1:1' ? '1' : 'N'}</text>
            </g>
          );
        })}
      </svg>

      <div className="db-rel__grade">
        {ordenadas.map(tabela => (
          <figure
            key={tabela.nome}
            className={`db-tabela${esquema.associativas.has(tabela.nome) ? ' db-tabela--assoc' : ''}`}
          >
            <figcaption className="db-tabela__nome">
              {tabela.nome}
              {esquema.associativas.has(tabela.nome) && (
                <span className="db-tabela__selo" title="Tabela associativa: resolve um relacionamento N:M">
                  N:M
                </span>
              )}
            </figcaption>

            <ul className="db-tabela__colunas">
              {tabela.colunas.map(col => {
                const chave = `${tabela.nome}.${col.nome}`;
                return (
                  <li
                    key={col.nome}
                    ref={el => { if (el) linhasRef.current.set(chave, el); else linhasRef.current.delete(chave); }}
                    className={`db-col${destaque === chave ? ' is-ativo' : ''}`}
                    onMouseEnter={() => onDestaque?.(col.fk ? chave : null)}
                    onMouseLeave={() => onDestaque?.(null)}
                  >
                    <span className="db-col__marcas">
                      {col.pk && <span className="db-col__pk" title="Chave primária">PK</span>}
                      {col.fk && <span className="db-col__fk" title={`Referencia ${col.fk.tabela}.${col.fk.coluna}`}>FK</span>}
                    </span>
                    <span className={`db-col__nome${col.pk ? ' is-pk' : ''}`}>{col.nome}</span>
                    <span className="db-col__tipo">{col.tipo}</span>
                    {col.notNull && !col.pk && <span className="db-col__nn" title="NOT NULL">•</span>}
                  </li>
                );
              })}
            </ul>
          </figure>
        ))}
      </div>
    </div>
  );
}
