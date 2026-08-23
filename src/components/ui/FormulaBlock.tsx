import type { ReactNode } from 'react';

/**
 * Fração renderizada como numerador sobre denominador, com a barra no meio.
 *
 * Existe porque escrever `a/b` em texto corrido perde a leitura vertical que
 * torna uma fração reconhecível de relance — e em fórmulas encaixadas (uma
 * fração dentro de um limite, por exemplo) a versão em linha vira ilegível.
 */
export function Frac({ over, under }: { over: ReactNode; under: ReactNode }) {
  return (
    <span className="formula-frac">
      <span className="formula-frac__over">{over}</span>
      <span className="formula-frac__bar" aria-hidden="true" />
      <span className="formula-frac__under">{under}</span>
    </span>
  );
}

/** Expoente. `<Pow base="2" exp="n" />` lê-se "dois elevado a n". */
export function Pow({ base, exp }: { base: ReactNode; exp: ReactNode }) {
  return (
    <span className="formula-pow">
      {base}
      <sup>{exp}</sup>
    </span>
  );
}

/** Índice subscrito, para termos de sequência (a₁, aₙ) e bases de logaritmo. */
export function Sub({ base, idx }: { base: ReactNode; idx: ReactNode }) {
  return (
    <span className="formula-pow">
      {base}
      <sub>{idx}</sub>
    </span>
  );
}

/** Raiz. Sem `index` é raiz quadrada; com `index` vira raiz n-ésima. */
export function Root({ children, index }: { children: ReactNode; index?: ReactNode }) {
  return (
    <span className="formula-root">
      {index && <sup className="formula-root__index">{index}</sup>}
      <span className="formula-root__sign" aria-hidden="true">
        √
      </span>
      <span className="formula-root__body">{children}</span>
    </span>
  );
}

interface FormulaBlockProps {
  /** A fórmula em si. Aceita texto, os helpers acima, ou uma composição deles. */
  children: ReactNode;
  /** Rótulo curto acima da fórmula — o nome do resultado ("Termo geral da PA"). */
  label?: string;
  /** Leitura em português do que a fórmula diz, abaixo dela. */
  caption?: ReactNode;
  /** Legenda dos símbolos: cada par vira uma linha "símbolo = significado". */
  where?: { symbol: ReactNode; meaning: string }[];
  accent?: 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';
  /** Numeração da fórmula, quando o texto se refere a ela depois ("(1)"). */
  tag?: string;
}

/**
 * Bloco destacado para uma fórmula matemática.
 *
 * Diferente de `CodeBlock`: código é lido linha a linha, da esquerda para a
 * direita; fórmula é lida como uma figura, com frações e expoentes ocupando
 * espaço vertical. Daí o tratamento tipográfico próprio, com serifa e itálico
 * nas variáveis, e o `where` para não obrigar o leitor a caçar no texto o que
 * cada letra significa.
 */
export default function FormulaBlock({
  children,
  label,
  caption,
  where,
  accent = 'accent',
  tag,
}: FormulaBlockProps) {
  return (
    <figure className={`formula-block formula-block--${accent}`}>
      {label && <figcaption className="formula-block__label">{label}</figcaption>}

      <div className="formula-block__body">
        <div className="formula-block__expr">{children}</div>
        {tag && <span className="formula-block__tag">{tag}</span>}
      </div>

      {caption && <p className="formula-block__caption">{caption}</p>}

      {where && where.length > 0 && (
        <dl className="formula-block__where">
          {where.map((item, i) => (
            <div key={i} className="formula-block__where-row">
              <dt>{item.symbol}</dt>
              <dd>{item.meaning}</dd>
            </div>
          ))}
        </dl>
      )}
    </figure>
  );
}

/** Fórmula curta no meio de um parágrafo, sem quebrar o fluxo do texto. */
export function InlineFormula({ children }: { children: ReactNode }) {
  return <span className="formula-inline">{children}</span>;
}
