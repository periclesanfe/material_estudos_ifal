import { useState, useCallback } from 'react';
import { useApiKey } from './useApiKey';

export const QUESTION_COUNT_OPTIONS = [1, 5, 10] as const;
const GEMINI_MODEL = 'gemini-3-flash-preview';

export type QuestionCount = (typeof QUESTION_COUNT_OPTIONS)[number];

export interface AIQuizQuestion {
  pergunta: string;
  alternativas: string[];
  respostaCorreta: number;
  explicacao: string;
  tema: string;
  dificuldade: string;
}

interface AIQuizState {
  questions: AIQuizQuestion[];
  loading: boolean;
  error: string | null;
  score: { correct: number; wrong: number; total: number };
  selectedAnswers: Record<number, number>;
}

function normalizeQuestionCount(count: number): QuestionCount {
  if (count >= 10) return 10;
  if (count >= 5) return 5;
  return 1;
}

function parseCorrectIndex(value: unknown): number {
  if (typeof value === 'number' && Number.isInteger(value)) return value;

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (/^[0-3]$/.test(normalized)) return Number.parseInt(normalized, 10);
    if (/^[a-d]/.test(normalized)) return normalized.charCodeAt(0) - 97;
  }

  return -1;
}

function normalizeGeneratedQuestions(rawText: string, desiredCount: number): AIQuizQuestion[] {
  const parsed = JSON.parse(rawText.replace(/```json|```/g, '').trim());
  const rawQuestions = Array.isArray(parsed?.perguntas)
    ? parsed.perguntas
    : parsed?.pergunta
      ? [parsed]
      : [];

  return rawQuestions
    .slice(0, desiredCount)
    .map((item: Record<string, unknown>) => {
      const alternativas = Array.isArray(item.alternativas)
        ? item.alternativas.map(alternative => String(alternative))
        : [];
      const respostaCorreta = parseCorrectIndex(item.respostaCorreta ?? item.correta);

      return {
        pergunta: String(item.pergunta || ''),
        alternativas,
        respostaCorreta,
        explicacao: String(item.explicacao || ''),
        tema: String(item.tema || 'Tema geral'),
        dificuldade: String(item.dificuldade || 'mista').toLowerCase(),
      };
    })
    .filter((question: AIQuizQuestion) =>
      question.pergunta.length > 0 &&
      question.alternativas.length === 4 &&
      question.respostaCorreta >= 0 &&
      question.respostaCorreta <= 3 &&
      question.explicacao.length > 0
    );
}

function formatGeminiError(message: string): string {
  const isQuotaError = /quota|rate|limit|exceeded|429/i.test(message);
  const isZeroFreeTier = /free_tier|limit:\s*0/i.test(message);

  if (isQuotaError && isZeroFreeTier) {
    return `Sua API key do Gemini está sem quota gratuita disponível para este modelo/projeto. Confira os limites em https://ai.dev/rate-limit ou ative billing no Google AI Studio. Detalhes: ${message}`;
  }

  if (isQuotaError) {
    return `Limite de uso do Gemini atingido. Aguarde um pouco, gere menos perguntas por lote ou confira sua quota em https://ai.dev/rate-limit. Detalhes: ${message}`;
  }

  return message;
}

export function useGeminiQuiz(guideContext: string) {
  const { getApiKey, hasApiKey } = useApiKey();
  const [state, setState] = useState<AIQuizState>({
    questions: [],
    loading: false,
    error: null,
    score: { correct: 0, wrong: 0, total: 0 },
    selectedAnswers: {},
  });

  const generateQuestion = useCallback(async (topic: string = 'aleatorio', difficulty: string = 'mista', count: number = 1) => {
    if (!hasApiKey()) {
      setState(prev => ({ ...prev, error: 'Configure sua API key nas Configurações antes de usar o quiz com IA.' }));
      return;
    }

    const desiredCount = normalizeQuestionCount(count);

    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
      questions: [],
      selectedAnswers: {},
    }));

    const topicInstruction = topic === 'aleatorio'
      ? 'Escolha ALEATORIAMENTE temas do guia para gerar as perguntas. Varie bastante.'
      : `Gere as perguntas especificamente sobre o tema: ${topic}.`;

    const diffInstruction: Record<string, string> = {
      facil: 'Nivel FACIL: foque em definicoes diretas e conceitos basicos.',
      media: 'Nivel MEDIO: foque em aplicacao, comparacao entre conceitos ou distincoes importantes.',
      dificil: 'Nivel DIFICIL: crie situacoes praticas, casos de estudo ou perguntas que exijam raciocinio analitico.',
      mista: 'Misture perguntas faceis, medias e dificeis de forma equilibrada.',
    };

    const prompt = `Voce e um professor especialista. Com base no conteudo do guia abaixo, gere um questionario de multipla escolha inedito para estudo.

CONTEUDO DO GUIA:
${guideContext}

CONFIGURACAO DO QUESTIONARIO:
- Quantidade exata de perguntas: ${desiredCount}
- Tema: ${topicInstruction}
- Dificuldade: ${diffInstruction[difficulty] || diffInstruction.mista}

REGRAS OBRIGATORIAS:
1. Cada pergunta deve ter exatamente 4 alternativas (A, B, C, D)
2. Apenas UMA alternativa deve ser a correta
3. As alternativas incorretas devem ser plausiveis
4. A explicacao deve detalhar POR QUE a resposta e correta
5. Gere perguntas diferentes entre si no mesmo lote
6. Responda EXCLUSIVAMENTE em JSON valido, sem markdown

Formato JSON exato:
{
  "perguntas": [
    {
      "pergunta": "texto da pergunta",
      "alternativas": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "respostaCorreta": 0,
      "explicacao": "explicacao detalhada",
      "tema": "nome do tema escolhido",
      "dificuldade": "facil|media|dificil"
    }
  ]
}`;

    try {
      const apiKey = getApiKey()!;
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.9,
              maxOutputTokens: Math.min(8192, Math.max(1024, desiredCount * 900)),
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `Erro HTTP ${res.status}`);
      }

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text || '').join('');
      if (!text) throw new Error('Resposta vazia da API.');

      const questions = normalizeGeneratedQuestions(text, desiredCount);
      if (questions.length === 0) {
        throw new Error('O Gemini não retornou perguntas válidas. Tente novamente.');
      }

      setState(prev => ({ ...prev, questions, loading: false }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? formatGeminiError(err.message) : 'Erro desconhecido.',
      }));
    }
  }, [guideContext, getApiKey, hasApiKey]);

  const answerQuestion = useCallback((questionIndex: number, selectedIndex: number) => {
    setState(prev => {
      const question = prev.questions[questionIndex];
      if (!question || prev.selectedAnswers[questionIndex] !== undefined) return prev;

      const isCorrect = selectedIndex === question.respostaCorreta;
      return {
        ...prev,
        selectedAnswers: {
          ...prev.selectedAnswers,
          [questionIndex]: selectedIndex,
        },
        score: {
          correct: prev.score.correct + (isCorrect ? 1 : 0),
          wrong: prev.score.wrong + (isCorrect ? 0 : 1),
          total: prev.score.total + 1,
        },
      };
    });
  }, []);

  const resetScore = useCallback(() => {
    setState(prev => ({
      ...prev,
      score: { correct: 0, wrong: 0, total: 0 },
      questions: [],
      selectedAnswers: {},
    }));
  }, []);

  return {
    ...state,
    generateQuestion,
    answerQuestion,
    resetScore,
  };
}
