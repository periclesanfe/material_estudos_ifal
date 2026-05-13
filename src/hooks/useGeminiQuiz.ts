import { useState, useCallback } from 'react';
import { useApiKey } from './useApiKey';

export interface AIQuizQuestion {
  pergunta: string;
  alternativas: string[];
  respostaCorreta: number;
  explicacao: string;
  tema: string;
  dificuldade: string;
}

interface AIQuizState {
  question: AIQuizQuestion | null;
  loading: boolean;
  error: string | null;
  score: { correct: number; wrong: number; total: number };
  answered: boolean;
}

export function useGeminiQuiz(guideContext: string) {
  const { getApiKey, hasApiKey } = useApiKey();
  const [state, setState] = useState<AIQuizState>({
    question: null,
    loading: false,
    error: null,
    score: { correct: 0, wrong: 0, total: 0 },
    answered: false,
  });

  const generateQuestion = useCallback(async (topic: string = 'aleatorio', difficulty: string = 'mista') => {
    if (!hasApiKey()) {
      setState(prev => ({ ...prev, error: 'Configure sua API key nas Configurações antes de usar o quiz com IA.' }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null, answered: false, question: null }));

    const topicInstruction = topic === 'aleatorio'
      ? 'Escolha ALEATORIAMENTE um dos temas do guia para gerar a pergunta. Varie bastante.'
      : `Gere a pergunta especificamente sobre o tema: ${topic}.`;

    const diffInstruction: Record<string, string> = {
      facil: 'Nível FÁCIL: foque em definições diretas e conceitos básicos.',
      media: 'Nível MÉDIO: foque em aplicação, comparação entre conceitos ou distinções importantes.',
      dificil: 'Nível DIFÍCIL: crie situações práticas, casos de estudo ou perguntas que exijam raciocínio analítico.',
      mista: 'Escolha aleatoriamente entre fácil, médio e difícil.',
    };

    const prompt = `Você é um professor especialista. Com base no conteúdo do guia abaixo, gere UMA pergunta de múltipla escolha inédita para estudo.

CONTEÚDO DO GUIA:
${guideContext}

INSTRUÇÃO DE TEMA: ${topicInstruction}
INSTRUÇÃO DE DIFICULDADE: ${diffInstruction[difficulty] || diffInstruction.mista}

REGRAS OBRIGATÓRIAS:
1. A pergunta deve ter exatamente 4 alternativas (A, B, C, D)
2. Apenas UMA alternativa deve ser a correta
3. As alternativas incorretas devem ser plausíveis
4. A explicação deve detalhar POR QUE a resposta é correta
5. Responda EXCLUSIVAMENTE em JSON válido, sem markdown

Formato JSON exato:
{
  "pergunta": "texto da pergunta",
  "alternativas": ["A) ...", "B) ...", "C) ...", "D) ..."],
  "respostaCorreta": 0,
  "explicacao": "explicação detalhada",
  "tema": "nome do tema escolhido",
  "dificuldade": "facil|media|dificil"
}`;

    try {
      const apiKey = getApiKey()!;
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
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
              maxOutputTokens: 1024,
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
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Resposta vazia da API.');

      const parsed: AIQuizQuestion = JSON.parse(text);
      if (!parsed.pergunta || !parsed.alternativas || parsed.alternativas.length !== 4) {
        throw new Error('Formato de resposta inválido.');
      }

      setState(prev => ({ ...prev, question: parsed, loading: false }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Erro desconhecido.',
      }));
    }
  }, [guideContext, getApiKey, hasApiKey]);

  const answerQuestion = useCallback((selectedIndex: number) => {
    if (!state.question || state.answered) return;

    const isCorrect = selectedIndex === state.question.respostaCorreta;
    setState(prev => ({
      ...prev,
      answered: true,
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        wrong: prev.score.wrong + (isCorrect ? 0 : 1),
        total: prev.score.total + 1,
      },
    }));

    return isCorrect;
  }, [state.question, state.answered]);

  const resetScore = useCallback(() => {
    setState(prev => ({
      ...prev,
      score: { correct: 0, wrong: 0, total: 0 },
      question: null,
      answered: false,
    }));
  }, []);

  return {
    ...state,
    generateQuestion,
    answerQuestion,
    resetScore,
  };
}
