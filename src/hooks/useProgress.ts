import { useCallback, useEffect, useState } from 'react';
import type { ModuleId, ProgressState } from '@/types';

const STORAGE_KEY = 'viva-ready-progress';

const initialState: ProgressState = {
  completedModules: [],
  quizScores: {},
  currentModule: 'about-viva',
  started: false,
  finalAnswers: {},
  finalScore: null,
  confidence: [],
  interviewAnswers: {},
};

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as ProgressState;
    return { ...initialState, ...parsed, finalAnswers: parsed.finalAnswers ?? {}, confidence: parsed.confidence ?? [], interviewAnswers: parsed.interviewAnswers ?? {} };
  } catch {
    return initialState;
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

  const start = useCallback(() => {
    setState((s) => ({ ...s, started: true }));
  }, []);

  const setCurrent = useCallback((id: ModuleId) => {
    setState((s) => ({ ...s, currentModule: id, started: true }));
  }, []);

  const completeModule = useCallback((id: ModuleId, score: number) => {
    setState((s) => {
      const completed = s.completedModules.includes(id)
        ? s.completedModules
        : [...s.completedModules, id];
      const prevScore = s.quizScores[id] ?? 0;
      return {
        ...s,
        completedModules: completed,
        quizScores: { ...s.quizScores, [id]: Math.max(prevScore, score) },
        currentModule: id,
      };
    });
  }, []);

  const setFinal = useCallback((answers: Record<string, string>, score: number) => {
    setState(s => ({ ...s, finalAnswers: answers, finalScore: score }));
  }, []);
  const setConfidence = useCallback((confidence: number[]) => {
    setState(s => ({ ...s, confidence }));
  }, []);
  const setInterviewAnswer = useCallback((key: string, answer: string) => {
    setState(s => ({ ...s, interviewAnswers: { ...s.interviewAnswers, [key]: answer } }));
  }, []);
  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const totalModules = 7;
  const progressPct = Math.round((state.completedModules.length / totalModules) * 100);

  return { state, start, setCurrent, completeModule, setFinal, setConfidence, setInterviewAnswer, reset, progressPct, totalModules };
}
