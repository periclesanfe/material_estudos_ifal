import type { QuizQuestionData } from './QuizCard';

interface ExportSubjectActionsProps {
  title: string;
  fileName: string;
  guideContext: string;
  quizData: QuizQuestionData[];
}

function buildMarkdown({ title, guideContext, quizData }: ExportSubjectActionsProps) {
  const quizMarkdown = quizData.map((question, index) => {
    const options = question.options
      .map((option, optionIndex) => `${optionIndex + 1}. ${option}`)
      .join('\n');
    const correctOption = question.options[question.correctIndex];

    return [
      `### ${index + 1}. ${question.question.replace(/^\d+\.\s*/, '')}`,
      '',
      options,
      '',
      `**Resposta correta:** ${correctOption}`,
      '',
      `**Comentário:** ${question.feedbackCorrect}`,
    ].join('\n');
  }).join('\n\n');

  return [
    `# ${title}`,
    '',
    '## Guia de Estudo',
    '',
    guideContext.trim(),
    '',
    '## Quiz de Revisão',
    '',
    quizMarkdown,
    '',
  ].join('\n');
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default function ExportSubjectActions(props: ExportSubjectActionsProps) {
  const downloadMarkdown = () => {
    const markdown = buildMarkdown(props);
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${props.fileName}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const printPdf = () => {
    const markdown = buildMarkdown(props);
    const printWindow = window.open('', '_blank', 'noopener,noreferrer');

    if (!printWindow) return;

    printWindow.document.write(`
      <!doctype html>
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <title>${escapeHtml(props.title)}</title>
          <style>
            body { color: #1f2933; font: 14px/1.65 Arial, sans-serif; margin: 40px; }
            pre { font: inherit; white-space: pre-wrap; word-break: break-word; }
          </style>
        </head>
        <body><pre>${escapeHtml(markdown)}</pre></body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="relative z-10 mt-5 flex flex-wrap justify-center gap-2">
      <button type="button" onClick={downloadMarkdown} className="btn-primary px-4 py-2.5 text-xs md:text-sm">
        Exportar .md
      </button>
      <button type="button" onClick={printPdf} className="btn-secondary px-4 py-2.5 text-xs md:text-sm">
        Exportar PDF
      </button>
    </div>
  );
}
