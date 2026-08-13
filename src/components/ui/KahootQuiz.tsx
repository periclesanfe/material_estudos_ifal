import { useMemo, useState } from 'react';
import type { QuizQuestionData } from './QuizCard';

interface KahootQuizProps {
  questions: QuizQuestionData[];
  onGenerateNewQuiz?: () => void;
  newQuizButtonLabel?: string;
}

interface AnswerRecord {
  question: QuizQuestionData;
  selectedIndex: number;
  isCorrect: boolean;
}

const answerStyles = [
  { color: 'bg-[#d91f45] hover:bg-[#e02a50]', shape: 'triangle' },
  { color: 'bg-[#2378b8] hover:bg-[#2a86ca]', shape: 'diamond' },
  { color: 'bg-[#e7bf32] hover:bg-[#f0ca42]', shape: 'circle' },
  { color: 'bg-[#87bb4f] hover:bg-[#93c95a]', shape: 'square' },
];

function formatQuestionNumber(current: number, total: number) {
  const width = String(total).length;
  return `${String(current).padStart(width, '0')}/${total}`;
}

function cleanQuestion(question: string) {
  return question.replace(/^\s*\d+\.\s*/, '');
}

function getQuestionTextClass(question: string) {
  const length = cleanQuestion(question).length;

  if (length > 520) {
    return 'max-w-5xl text-left text-sm leading-normal md:text-justify md:text-base lg:text-lg';
  }

  if (length > 360) {
    return 'max-w-5xl text-left text-base leading-snug md:text-justify md:text-xl lg:text-2xl';
  }

  if (length > 260) {
    return 'max-w-5xl text-left text-lg leading-snug md:text-justify md:text-2xl lg:text-3xl';
  }

  if (length > 180) {
    return 'max-w-5xl text-center text-2xl leading-tight md:text-3xl lg:text-4xl';
  }

  if (length > 110) {
    return 'max-w-5xl text-center text-3xl leading-tight md:text-4xl lg:text-5xl';
  }

  return 'max-w-5xl text-center text-3xl leading-tight md:text-5xl lg:text-6xl';
}

function shuffleQuestions(questions: QuizQuestionData[]) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function KahootQuiz({ questions, onGenerateNewQuiz, newQuizButtonLabel = 'Gerar novo quiz' }: KahootQuizProps) {
  const [quizQuestions, setQuizQuestions] = useState(() => shuffleQuestions(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [records, setRecords] = useState<AnswerRecord[]>([]);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const correctCount = useMemo(() => records.filter(record => record.isCorrect).length, [records]);
  const wrongCount = records.length - correctCount;

  const resetQuiz = () => {
    setQuizQuestions(shuffleQuestions(questions));
    setCurrentIndex(0);
    setSelectedIndex(null);
    setRecords([]);
    setFinished(false);
  };

  const handleSelect = (index: number) => {
    if (selectedIndex !== null || !currentQuestion) return;

    const isCorrect = index === currentQuestion.correctIndex;
    setSelectedIndex(index);
    setRecords(prev => [...prev, { question: currentQuestion, selectedIndex: index, isCorrect }]);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;

    if (currentIndex === totalQuestions - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setSelectedIndex(null);
  };

  if (totalQuestions === 0) {
    return (
      <div className="study-surface p-6 text-sm text-text-muted">
        Nenhuma pergunta disponível para este quiz.
      </div>
    );
  }

  if (finished) {
    return (
      <div className="animate-fade-in space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.18em]">Resultado final</p>
            <h3 className="font-display text-4xl md:text-5xl font-black text-text leading-tight mt-1 tabular-nums">
              {correctCount} / {totalQuestions}
            </h3>
            <p className="text-text-muted text-sm md:text-base mt-2">
              Resumo das perguntas respondidas e das alternativas assinaladas.
            </p>
          </div>
          <button type="button" onClick={onGenerateNewQuiz || resetQuiz} className="btn-primary px-5 py-2.5 text-sm">
            {newQuizButtonLabel}
          </button>
        </div>

        <div className="space-y-3">
          {records.map((record, index) => {
            const selectedAnswer = record.question.options[record.selectedIndex];
            const correctAnswer = record.question.options[record.question.correctIndex];

            return (
              <article key={`${record.question.id}-${index}`} className="study-surface p-4 md:p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <h4 className="font-semibold text-text leading-snug">
                    <span className="text-text-muted mr-2">Q{index + 1}</span>
                    {cleanQuestion(record.question.question)}
                  </h4>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${
                      record.isCorrect ? 'bg-accent5/10 text-accent5' : 'bg-accent2/10 text-accent2'
                    }`}
                  >
                    {record.isCorrect ? 'Correta' : 'Revisar'}
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-sm leading-relaxed">
                  <p className="text-text-muted">
                    Sua resposta: <span className="font-semibold text-text">{selectedAnswer}</span>
                  </p>
                  {!record.isCorrect && (
                    <p className="text-text-muted">
                      Resposta certa: <span className="font-semibold text-accent5">{correctAnswer}</span>
                    </p>
                  )}
                  <p className={record.isCorrect ? 'text-accent5' : 'text-accent2'}>
                    {record.isCorrect ? record.question.feedbackCorrect : record.question.feedbackWrong}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  const answered = selectedIndex !== null;
  const selectedIsCorrect = selectedIndex === currentQuestion.correctIndex;
  const questionText = cleanQuestion(currentQuestion.question);

  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center gap-3">
        <span className="shrink-0 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-black tabular-nums text-text">
          {formatQuestionNumber(currentIndex + 1, totalQuestions)}
        </span>
        <div
          className="grid flex-1 items-center gap-1"
          style={{ gridTemplateColumns: `repeat(${totalQuestions}, minmax(0, 1fr))` }}
          aria-label={`Pergunta ${currentIndex + 1} de ${totalQuestions}`}
        >
          {quizQuestions.map((question, index) => {
            const answeredSegment = index < records.length;
            const currentSegment = index === currentIndex;

            return (
              <span
                key={`${question.id}-${index}`}
                className={`block rounded-full transition-all duration-300 ${
                  currentSegment
                    ? 'h-4 bg-accent shadow-[0_0_0_3px_rgba(99, 102, 241,0.22)]'
                    : answeredSegment
                      ? 'h-2.5 bg-accent'
                      : 'h-2.5 bg-border'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[3.5rem_minmax(0,1fr)]">
        <aside className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:content-start">
          <div
            aria-label={`Acertos: ${correctCount}`}
            className="flex min-h-12 items-center justify-center rounded-xl border border-accent5/30 bg-accent5/10 text-2xl font-black text-accent5"
          >
            {correctCount}
          </div>
          <div
            aria-label={`Erros: ${wrongCount}`}
            className="flex min-h-12 items-center justify-center rounded-xl border border-accent2/30 bg-accent2/10 text-2xl font-black text-accent2"
          >
            {wrongCount}
          </div>
        </aside>

        <div className="space-y-3">
          <section className="study-surface flex h-[260px] items-center justify-center overflow-y-auto px-5 py-6 md:h-[320px] md:px-8">
            <h4 className={`font-display font-black text-text break-words hyphens-auto ${getQuestionTextClass(currentQuestion.question)}`}>
              {questionText}
            </h4>
          </section>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
            {currentQuestion.options.map((option, index) => {
              const style = answerStyles[index % answerStyles.length];
              const isCorrectOption = answered && index === currentQuestion.correctIndex;
              const isSelectedWrong = answered && index === selectedIndex && index !== currentQuestion.correctIndex;
              const isDimmed = answered && !isCorrectOption && !isSelectedWrong;
              const stateClass = isCorrectOption
                ? 'border-accent5 bg-accent5 text-bg shadow-[0_0_0_3px_rgba(34, 197, 94,0.22)]'
                : isSelectedWrong
                  ? 'border-accent2 bg-accent2 text-white shadow-[0_0_0_3px_rgba(239, 68, 68,0.22)]'
                  : isDimmed
                    ? 'border-border bg-card text-text-muted opacity-45'
                    : `border-transparent ${style.color} text-white`;

              return (
                <button
                  key={`${currentQuestion.id}-${option}`}
                  type="button"
                  onClick={() => handleSelect(index)}
                  disabled={answered}
                  className={`kahoot-answer-button group flex min-h-[108px] items-center gap-4 rounded-xl border px-5 py-5 text-left text-xl font-black leading-tight transition duration-200 md:min-h-[138px] md:text-2xl ${stateClass}`}
                >
                  <span className={`kahoot-symbol kahoot-symbol-${style.shape}`} aria-hidden="true" />
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div
              className={`rounded-xl border px-4 py-3 text-sm leading-relaxed md:px-5 ${
                selectedIsCorrect
                  ? 'border-accent5/20 bg-accent5/10 text-accent5'
                  : 'border-accent2/20 bg-accent2/10 text-accent2'
              }`}
            >
              <p className="font-bold">{selectedIsCorrect ? 'Resposta correta.' : 'Resposta incorreta.'}</p>
              <p className="mt-1">
                {selectedIsCorrect ? currentQuestion.feedbackCorrect : currentQuestion.feedbackWrong}
              </p>
            </div>
          )}

          {answered && (
            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="btn-primary px-5 py-2.5 text-sm">
                {currentIndex === totalQuestions - 1 ? 'Ver resumo' : 'Próxima'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
