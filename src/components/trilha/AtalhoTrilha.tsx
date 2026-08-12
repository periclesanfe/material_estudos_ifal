import { Link } from 'react-router-dom';
import { getResumoTaxonomia } from '../../data/taxonomia/resumo';

interface Props {
  /** Código da matéria, o mesmo de curriculum.ts. */
  codigo: string;
}

/**
 * Faixa que liga a matéria à trilha de aprendizado.
 *
 * Some quando a matéria ainda não tem taxonomia, então não precisa de guarda em
 * quem chama. Consome só o resumo gerado, de um quilobyte, e não o dataset: a
 * página de matéria carrega de imediato e não deve pagar por meio megabyte de
 * JSON que só a rota /trilha usa.
 */
export default function AtalhoTrilha({ codigo }: Props) {
  const resumo = getResumoTaxonomia(codigo);
  if (!resumo) return null;

  return (
    <aside className="page-wrap pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4">
        <div className="min-w-0">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Trilha de aprendizado</p>
          <p className="text-[13px] leading-relaxed text-text-muted">
            Esta matéria tem <strong className="tabular-nums text-text">{resumo.conceitos}</strong> conceitos mapeados e{' '}
            <strong className="tabular-nums text-text">{resumo.dependenciasInternas}</strong> pré-requisitos entre eles
            {resumo.dependenciasDeFora > 0 && (
              <>
                , mais <strong className="tabular-nums text-text">{resumo.dependenciasDeFora}</strong> que vêm de outras
                matérias
              </>
            )}
            . O que trava mais conteúdo adiante é <em className="text-text">{resumo.conceitoMaisCentral}</em>.
          </p>
        </div>
        <Link to={`/trilha?materia=${codigo}`} className="btn-secondary shrink-0 px-4 py-2 text-xs md:text-sm">
          Ver os pré-requisitos
        </Link>
      </div>
    </aside>
  );
}
