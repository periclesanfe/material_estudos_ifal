import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { QUESTION_COUNT_OPTIONS, type AIQuizQuestion, type QuestionCount, useGeminiQuiz } from '../../hooks/useGeminiQuiz';
import { useApiKey } from '../../hooks/useApiKey';
import KahootQuiz from './KahootQuiz';
import type { QuizQuestionData, QuizTopicOption } from './QuizCard';

interface AIKahootQuizProps {
  guideContext: string;
  topics: QuizTopicOption[];
}

function toKahootQuestions(questions: AIQuizQuestion[]): QuizQuestionData[] {
  return questions.map((question, index) => {
    const correctAnswer = question.alternativas[question.respostaCorreta] || '';

    return {
      id: `ai-kahoot-${index}-${question.pergunta}`,
      question: question.pergunta,
      options: question.alternativas,
      correctIndex: question.respostaCorreta,
      feedbackCorrect: question.explicacao,
      feedbackWrong: `A resposta correta é ${correctAnswer}. ${question.explicacao}`,
    };
  });
}

export default function AIKahootQuiz({ guideContext, topics }: AIKahootQuizProps) {
  const { hasApiKey } = useApiKey();
  const { questions, loading, error, generateQuestion, resetScore } = useGeminiQuiz(guideContext);
  const [selectedTopicValues, setSelectedTopicValues] = useState<string[]>(() => topics.map(topic => topic.value));
  const [selectedDifficulty, setSelectedDifficulty] = useState('mista');
  const [selectedCount, setSelectedCount] = useState<QuestionCount>(5);

  const kahootQuestions = useMemo(() => toKahootQuestions(questions), [questions]);
  const allTopicsSelected = selectedTopicValues.length === topics.length;
  const quizKey = kahootQuestions.map(question => question.id).join('|');

  const generateLabel = loading
    ? `Gerando ${selectedCount}...`
    : selectedCount === 1
      ? 'Gerar Kahoot'
      : `Gerar Kahoot com ${selectedCount}`;

  const handleGenerate = () => {
    if (selectedTopicValues.length === 0) return;

    const selectedTopics = selectedTopicValues.length === topics.length
      ? ['aleatorio']
      : topics
        .filter(topic => selectedTopicValues.includes(topic.value))
        .map(topic => topic.prompt || topic.label);

    resetScore();
    generateQuestion(selectedTopics, selectedDifficulty, selectedCount);
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

  if (!hasApiKey()) {
    return (
      <div className="study-surface p-6 md:p-8 text-center">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-text mb-2 leading-tight">Configure sua API Key</h3>
        <p className="text-text-muted text-sm md:text-base mb-5">
          Para usar o Kahoot com IA, configure sua API Key do Google Gemini nas Configurações.
        </p>
        <Link to="/configuracoes" className="btn-primary inline-flex px-5 py-2.5 text-sm">
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
            Conteúdos do Kahoot
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

      {kahootQuestions.length > 0 && !loading && (
        <KahootQuiz
          key={quizKey}
          questions={kahootQuestions}
          onGenerateNewQuiz={handleGenerate}
          newQuizButtonLabel="Gerar novo Kahoot com IA"
        />
      )}
    </div>
  );
}
