/**
 * Matriz de comparação com número livre de colunas.
 *
 * O `ComparisonTable` compartilhado é fixo em três colunas (critério + dois lados), o que
 * não serve às comparações desta matéria: financiamento confronta quatro fontes de capital
 * ao mesmo tempo, as modalidades de comércio eletrônico são oito, e a escolha do experimento
 * cruza hipótese, MVP indicado e o que aquele MVP *não* prova. Enquanto uma segunda matéria
 * não precisar do mesmo, a tabela fica no escopo de EMPD — reaproveitando as classes visuais
 * do design system, como o `TruthTable` de LMMD faz.
 */

export interface CriteriaRow {
  /** Rótulo da linha, exibido na primeira coluna. */
  criterion: string;
  /** Uma célula por coluna de `headers`; os tamanhos precisam bater. */
  cells: string[];
}

export interface CriteriaMatrixProps {
  /** Cabeçalho da primeira coluna. Padrão: "Critério". */
  criterionLabel?: string;
  /** Cabeçalhos das colunas de comparação, sem contar a de critério. */
  headers: string[];
  rows: CriteriaRow[];
  /** Legenda opcional abaixo da tabela. */
  caption?: string;
}

/** Rodízio pelos cinco acentos do design system, na ordem em que aparecem no tema. */
const HEADER_ACCENTS = ['text-accent', 'text-accent2', 'text-accent3', 'text-accent4', 'text-accent5'];

export default function CriteriaMatrix({
  criterionLabel = 'Critério',
  headers,
  rows,
  caption,
}: CriteriaMatrixProps) {
  return (
    <figure className="study-surface overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th
              scope="col"
              className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs"
            >
              {criterionLabel}
            </th>
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className={`text-left py-3 px-4 font-semibold uppercase tracking-wider text-xs ${
                  HEADER_ACCENTS[index % HEADER_ACCENTS.length]
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.criterion} className="border-b border-border/50 last:border-0">
              <th scope="row" className="text-left py-3 px-4 font-semibold text-text text-xs align-top">
                {row.criterion}
              </th>
              {row.cells.map((cell, index) => (
                <td key={index} className="py-3 px-4 text-text-muted text-xs leading-relaxed align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <figcaption className="text-text-muted text-xs leading-relaxed px-4 py-3 border-t border-border">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
