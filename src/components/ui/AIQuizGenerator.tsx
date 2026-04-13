import { useState } from 'react';
import { useGeminiQuiz } from '../../hooks/useGeminiQuiz';
import { useApiKey } from '../../hooks/useApiKey';

interface AIQuizGeneratorProps {
  guideContext: string;
  topics: { value: string; label: string }[];
}

export default function AIQuizGenerator({ guideContext, topics }: AIQuizGeneratorProps) {
  const { hasApiKey } = useApiKey();
  const { question, loading, error, score, answered, generateQuestion, answerQuestion, resetScore } = useGeminiQuiz(guideContext);
  const [selectedTopic, setSelectedTopic] = useState('aleatorio');
  const [selectedDifficulty, setSelectedDifficulty] = useState('mista');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const difficultyLabels: Record<string, string> = {
    facil: 'Fácil',
    media: 'Média',
    dificil: 'Difícil',
    mista: 'Mista',
  };

  const handleGenerate = () => {
    setSelectedAnswer(null);
    generateQuestion(selectedTopic, selectedDifficulty);
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    answerQuestion(index);
  };

  const progressPct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  if (!hasApiKey()) {
    return (
      <div className="study-surface p-6 md:p-8 text-center">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-text mb-2 leading-tight">Configure sua API Key</h3>
        <p className="text-text-muted text-sm md:text-base mb-5">
          Para usar o Quiz com IA, configure sua API Key do Google Gemini nas Configurações.
        </p>
        <a
          href="/configuracoes"
          className="btn-primary inline-flex px-5 py-2.5 text-sm"
        >
          Ir para Configurações
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="study-surface p-4 md:p-5 flex gap-3 flex-wrap items-end">
        <div className="flex-1 min-w-[180px]">
          <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Tema</label>
          <select
            value={selectedTopic}
            onChange={e => setSelectedTopic(e.target.value)}
            className="w-full bg-bg text-text border border-border rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-accent"
          >
            <option value="aleatorio">Aleatório</option>
            {topics.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Dificuldade</label>
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
            className="w-full bg-bg text-text border border-border rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-accent"
          >
            <option value="mista">Mista</option>
            <option value="facil">Fácil</option>
            <option value="media">Média</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="btn-primary px-5 py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Gerando...' : 'Gerar Pergunta'}
        </button>
      </div>

      {/* Score */}
      <div className="study-surface flex gap-5 items-center px-4 py-3.5 text-sm">
        <div className="text-center">
          <div className="font-bold text-accent5">{score.correct}</div>
          <div className="text-[11px] text-text-muted uppercase tracking-wider">Acertos</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-accent2">{score.wrong}</div>
          <div className="text-[11px] text-text-muted uppercase tracking-wider">Erros</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-text-muted">{score.total}</div>
          <div className="text-[11px] text-text-muted uppercase tracking-wider">Total</div>
        </div>
        <div className="flex-1">
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: 'var(--color-accent5)' }}
            />
          </div>
        </div>
        <button onClick={resetScore} className="text-text-muted hover:text-text text-sm font-semibold transition-colors">
          Resetar
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10">
          <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin mx-auto" />
          <p className="text-text-muted mt-3 text-sm">Consultando a IA...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-accent2/10 border border-accent2/20 rounded-lg p-3 text-accent2 text-sm">
          {error}
        </div>
      )}

      {/* Question */}
      {question && !loading && (
        <div className="study-surface p-5 md:p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent uppercase tracking-wider">
              {question.tema}
            </span>
            <span className="text-xs font-semibold text-text-muted">
              {difficultyLabels[question.dificuldade] || question.dificuldade}
            </span>
          </div>

          <h4 className="text-sm md:text-base font-semibold text-text mb-4 leading-relaxed">{question.pergunta}</h4>

          <div className="flex flex-col gap-1.5">
            {question.alternativas.map((alt, i) => {
              let classes = 'w-full text-left quiz-option-base px-4 py-3 text-sm md:text-base transition-all duration-200';

              if (answered) {
                if (i === question.respostaCorreta) {
                  classes += ' border-accent5 bg-accent5/10 text-accent5';
                } else if (i === selectedAnswer) {
                  classes += ' border-accent2 bg-accent2/10 text-accent2';
                } else {
                  classes += ' border-border text-text-muted/30';
                }
              } else {
                classes += ' text-text cursor-pointer';
              }

              return (
                <button key={i} onClick={() => handleAnswer(i)} className={classes} disabled={answered}>
                  {alt}
                </button>
              );
            })}
          </div>

          {answered && (
            <>
              <div className={`mt-4 p-4 rounded-lg text-sm leading-relaxed ${
                selectedAnswer === question.respostaCorreta
                  ? 'bg-accent5/5 border border-accent5/20 text-accent5'
                  : 'bg-accent2/5 border border-accent2/20 text-accent2'
              }`}>
                {question.explicacao}
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={handleGenerate}
                  className="btn-primary px-5 py-2.5 text-sm"
                >
                  Próxima Pergunta
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
