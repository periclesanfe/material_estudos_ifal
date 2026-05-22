import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUESTION_COUNT_OPTIONS, type QuestionCount, useGeminiQuiz } from '../../hooks/useGeminiQuiz';
import { useApiKey } from '../../hooks/useApiKey';
import type { QuizTopicOption } from './QuizCard';

interface AIQuizGeneratorProps {
  guideContext: string;
  topics: QuizTopicOption[];
}

export default function AIQuizGenerator({ guideContext, topics }: AIQuizGeneratorProps) {
  const { hasApiKey } = useApiKey();
  const {
    questions,
    loading,
    error,
    score,
    selectedAnswers,
    generateQuestion,
    answerQuestion,
    resetScore,
  } = useGeminiQuiz(guideContext);
  const [selectedTopicValues, setSelectedTopicValues] = useState<string[]>(() => topics.map(topic => topic.value));
  const [selectedDifficulty, setSelectedDifficulty] = useState('mista');
  const [selectedCount, setSelectedCount] = useState<QuestionCount>(1);

  const difficultyLabels: Record<string, string> = {
    facil: 'Fácil',
    media: 'Média',
    dificil: 'Difícil',
    mista: 'Mista',
  };

  const handleGenerate = () => {
    if (selectedTopicValues.length === 0) return;

    const selectedTopics = selectedTopicValues.length === topics.length
      ? ['aleatorio']
      : topics
        .filter(topic => selectedTopicValues.includes(topic.value))
        .map(topic => topic.prompt || topic.label);

    generateQuestion(selectedTopics, selectedDifficulty, selectedCount);
  };

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    answerQuestion(questionIndex, optionIndex);
  };

  const toggleTopic = (value: string) => {
    setSelectedTopicValues(prev => {
      if (prev.includes(value)) return prev.filter(item => item !== value);
      return [...prev, value];
    });
  };

  const toggleAllTopics = () => {
    setSelectedTopicValues(prev => (
      prev.length === topics.length ? [] : topics.map(topic => topic.value)
    ));
  };

  const allTopicsSelected = selectedTopicValues.length === topics.length;
  const progressPct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const generateLabel = loading
    ? `Gerando ${selectedCount}...`
    : selectedCount === 1
      ? 'Gerar pergunta'
      : `Gerar ${selectedCount} perguntas`;

  if (!hasApiKey()) {
    return (
      <div className="study-surface p-6 md:p-8 text-center">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-text mb-2 leading-tight">Configure sua API Key</h3>
        <p className="text-text-muted text-sm md:text-base mb-5">
          Para usar o Quiz com IA, configure sua API Key do Google Gemini nas Configurações.
        </p>
        <Link
          to="/configuracoes"
          className="btn-primary inline-flex px-5 py-2.5 text-sm"
        >
          Ir para Configurações
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="study-surface p-4 md:p-5 space-y-4">
        <div>
          <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
            Conteúdos para gerar perguntas
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
            <label
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold cursor-pointer transition-colors ${
                allTopicsSelected
                  ? 'border-accent bg-accent/10 text-text'
                  : 'border-border bg-bg/40 text-text-muted hover:border-border-hover hover:text-text'
              }`}
            >
              <input
                type="checkbox"
                checked={allTopicsSelected}
                onChange={toggleAllTopics}
                className="sr-only"
              />
              <span className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                allTopicsSelected ? 'border-accent bg-accent text-white' : 'border-border'
              }`}>
                {allTopicsSelected ? '✓' : ''}
              </span>
              Todos
            </label>
            {topics.map(topic => {
              const checked = selectedTopicValues.includes(topic.value);

              return (
                <label
                  key={topic.value}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold cursor-pointer transition-colors ${
                    checked
                      ? 'border-accent bg-accent/10 text-text'
                      : 'border-border bg-bg/40 text-text-muted hover:border-border-hover hover:text-text'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTopic(topic.value)}
                    className="sr-only"
                  />
                  <span className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                    checked ? 'border-accent bg-accent text-white' : 'border-border'
                  }`}>
                    {checked ? '✓' : ''}
                  </span>
                  {topic.label}
                </label>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
          <div className="flex-1 min-w-[170px]">
            <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Dificuldade</label>
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="w-full bg-bg text-text border border-border rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <option value="mista">Mista</option>
              <option value="facil">Fácil</option>
              <option value="media">Média</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>

          <div className="flex-1 min-w-[150px]">
            <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Quantidade</label>
            <select
              value={selectedCount}
              onChange={e => setSelectedCount(Number(e.target.value) as QuestionCount)}
              className="w-full bg-bg text-text border border-border rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {QUESTION_COUNT_OPTIONS.map(count => (
                <option key={count} value={count}>
                  {count === 1 ? '1 pergunta' : `${count} perguntas`}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || selectedTopicValues.length === 0}
            className="btn-primary px-5 py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {generateLabel}
          </button>
        </div>
      </div>

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
              className="h-full rounded-full transition-[width] duration-500"
              style={{ width: `${progressPct}%`, background: 'var(--color-accent5)' }}
            />
          </div>
        </div>
        <button onClick={resetScore} className="text-text-muted hover:text-text text-sm font-semibold transition-colors">
          Resetar
        </button>
      </div>

      {loading && (
        <div className="text-center py-10">
          <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin mx-auto" />
          <p className="text-text-muted mt-3 text-sm">Consultando a IA...</p>
        </div>
      )}

      {error && (
        <div className="bg-accent2/10 border border-accent2/20 rounded-lg p-3 text-accent2 text-sm leading-relaxed">
          {error}
        </div>
      )}

      {questions.length > 0 && !loading && (
        <div className="space-y-4 animate-fade-in">
          {questions.map((question, questionIndex) => {
            const selectedAnswer = selectedAnswers[questionIndex];
            const answered = selectedAnswer !== undefined;

            return (
              <div key={`${question.pergunta}-${questionIndex}`} className="study-surface p-5 md:p-6">
                <div className="flex justify-between items-center gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent uppercase tracking-wider">
                      Pergunta {questionIndex + 1} de {questions.length}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-accent3/10 text-accent3 uppercase tracking-wider">
                      {question.tema}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-text-muted">
                    {difficultyLabels[question.dificuldade] || question.dificuldade}
                  </span>
                </div>

                <h4 className="text-sm md:text-base font-semibold text-text mb-4 leading-relaxed">{question.pergunta}</h4>

                <div className="flex flex-col gap-1.5">
                  {question.alternativas.map((alt, optionIndex) => {
                    let classes = 'w-full text-left quiz-option-base px-4 py-3 text-sm md:text-base transition-colors duration-200';

                    if (answered) {
                      if (optionIndex === question.respostaCorreta) {
                        classes += ' border-accent5 bg-accent5/10 text-accent5';
                      } else if (optionIndex === selectedAnswer) {
                        classes += ' border-accent2 bg-accent2/10 text-accent2';
                      } else {
                        classes += ' border-border text-text-muted/30';
                      }
                    } else {
                      classes += ' text-text cursor-pointer';
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswer(questionIndex, optionIndex)}
                        className={classes}
                        disabled={answered}
                      >
                        {alt}
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div className={`mt-4 p-4 rounded-lg text-sm leading-relaxed ${
                    selectedAnswer === question.respostaCorreta
                      ? 'bg-accent5/5 border border-accent5/20 text-accent5'
                      : 'bg-accent2/5 border border-accent2/20 text-accent2'
                  }`}>
                    {question.explicacao}
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-center">
            <button
              onClick={handleGenerate}
              className="btn-primary px-5 py-2.5 text-sm"
            >
              {selectedCount === 1 ? 'Nova pergunta' : 'Novo lote'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
