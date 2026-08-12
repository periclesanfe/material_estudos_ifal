import { useState, useCallback } from 'react';
import { useApiKey } from './useApiKey';
import { generateContent, describeAIError, type AIErrorInfo } from '../lib/aiProviders';

export const QUESTION_COUNT_OPTIONS = [1, 5, 10] as const;

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
  error: AIErrorInfo | null;
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

export function useGeminiQuiz(guideContext: string) {
  const { getConfig, hasApiKey } = useApiKey();
  const [state, setState] = useState<AIQuizState>({
    questions: [],
    loading: false,
    error: null,
    score: { correct: 0, wrong: 0, total: 0 },
    selectedAnswers: {},
  });

  const generateQuestion = useCallback(async (topicSelection: string | string[] = 'aleatorio', difficulty: string = 'mista', count: number = 1) => {
    if (!hasApiKey()) {
      setState(prev => ({
        ...prev,
        error: {
          title: 'Configuração incompleta',
          detail: 'Escolha um provedor de IA, informe sua API key e selecione um modelo nas Configurações antes de usar o quiz.',
          action: { label: 'Abrir Configurações', to: '/configuracoes' },
        },
      }));
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

    const selectedTopics = (Array.isArray(topicSelection) ? topicSelection : [topicSelection]).filter(Boolean);
    const hasSpecificTopics = selectedTopics.length > 0 && !selectedTopics.includes('aleatorio');

    const topicInstruction = hasSpecificTopics
      ? `Gere as perguntas APENAS sobre os seguintes conteudos selecionados: ${selectedTopics.join(', ')}. Varie entre eles quando novas perguntas forem solicitadas.`
      : 'Escolha ALEATORIAMENTE temas do guia para gerar as perguntas. Varie bastante.';

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

    const config = getConfig();

    try {
      const text = await generateContent(config, {
        prompt,
        temperature: 0.9,
        maxOutputTokens: Math.min(8192, Math.max(1024, desiredCount * 900)),
        jsonMode: true,
      });

      const questions = normalizeGeneratedQuestions(text, desiredCount);
      if (questions.length === 0) {
        throw new Error('A IA não retornou perguntas válidas. Tente novamente.');
      }

      setState(prev => ({ ...prev, questions, loading: false }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido.';
      setState(prev => ({
        ...prev,
        loading: false,
        error: describeAIError(message, config.provider),
      }));
    }
  }, [guideContext, getConfig, hasApiKey]);

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
