import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid } from '../../../components/sections';
import { PDSW_EVALUATIONS } from '../data';
import { overviewItems } from './blocks';

function AssessmentMap() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {PDSW_EVALUATIONS.map(evaluation => (
        <div key={evaluation.id} className="study-surface p-4">
          <span className="mb-2 inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
            {evaluation.label}
          </span>
          <h3 className="mb-1 text-sm font-bold text-text">{evaluation.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{evaluation.scope}</p>
        </div>
      ))}
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Visão Geral"
        subtitle="Uma trilha de estudo para entender como software é concebido, projetado, testado, evoluído e entregue."
        colorClass="text-accent"
      />
      <ConceptGrid items={overviewItems} columns="md:grid-cols-3" />
      <HighlightBox title="Fonte e créditos">
        <p>
          A disciplina foi organizada a partir dos dez primeiros capítulos do livro <strong>Engenharia de Software Moderna</strong>, de Marco Tulio Valente, dos materiais locais de PDSW e das orientações do professor <strong>Elvys Alves Soares</strong>.
        </p>
      </HighlightBox>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Mapa de avaliações</h3>
        <AssessmentMap />
      </div>
    </section>
  );
}
