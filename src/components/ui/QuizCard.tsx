import { useState } from 'react';

export interface QuizQuestionData {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackWrong: string;
}

interface QuizCardProps {
  data: QuizQuestionData;
}

export default function QuizCard({ data }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === data.correctIndex;

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
  };

  return (
    <div className="study-surface p-6 mb-4">
      <h4 className="font-display text-xl font-bold text-accent3 mb-4 leading-tight">{data.question}</h4>
      <div className="flex flex-col gap-1.5">
        {data.options.map((option, i) => {
          let classes = 'w-full text-left quiz-option-base px-4 py-3 text-sm transition-colors duration-200';

          if (answered) {
            if (i === data.correctIndex) {
              classes += ' border-accent5 bg-accent5/10 text-accent5';
            } else if (i === selected) {
              classes += ' border-accent2 bg-accent2/10 text-accent2';
            } else {
              classes += ' border-border text-text-muted/30';
            }
          } else {
            classes += ' text-text cursor-pointer';
          }

          return (
            <button key={i} onClick={() => handleAnswer(i)} className={classes} disabled={answered}>
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`mt-4 p-4 rounded-lg text-sm leading-relaxed ${
          isCorrect
            ? 'bg-accent5/5 border border-accent5/20 text-accent5'
            : 'bg-accent2/5 border border-accent2/20 text-accent2'
        }`}>
          {isCorrect ? data.feedbackCorrect : data.feedbackWrong}
        </div>
      )}
    </div>
  );
}
