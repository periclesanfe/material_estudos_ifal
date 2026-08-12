import ExternalBookReader from '../../../components/ui/ExternalBookReader';
import { SectionHeader } from '../../../components/sections';
import { PDSW_BOOK_CHAPTERS } from '../data';

export default function LivroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Livro Base"
        subtitle="Leitura guiada dos dez primeiros capítulos de Engenharia de Software Moderna."
        colorClass="text-accent3"
      />
      <ExternalBookReader
        title="Engenharia de Software Moderna"
        description="Livro online de Marco Tulio Valente usado como base da disciplina. O leitor aponta para o site oficial e preserva o conteúdo na origem."
        chapters={PDSW_BOOK_CHAPTERS}
      />
    </section>
  );
}
