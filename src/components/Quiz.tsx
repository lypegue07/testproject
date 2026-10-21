import { useState } from 'react';
import { Check, X, ArrowRight, RotateCw, Trophy } from 'lucide-react';
import type { QuizQuestion } from '@/types';

export function Quiz({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) return null;

  const q = questions[current];
  const selectedOption = q.options.find((o) => o.id === selected);

  const handleSelect = (id: string) => {
    if (revealed) return;
    setSelected(id);
  };

  const handleCheck = () => {
    if (!selected) return;
    const opt = q.options.find((o) => o.id === selected);
    if (opt?.correct) setScore((s) => s + 1);
    setRevealed(true);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setFinished(true);
      onComplete(score);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    return (
      <div className="card p-8 text-center animate-scale-in">
        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
            passed ? 'bg-mint-400/20 text-mint-300' : 'bg-royal-600/20 text-lavender-medium'
          }`}
        >
          <Trophy className="h-8 w-8" />
        </div>
        <h4 className="font-serif text-2xl font-semibold text-white">
          You scored {score}/{questions.length}
        </h4>
        <p className="mt-2 text-sm text-white/60">
          {passed
            ? 'Nice work — you\u2019ve got a solid grasp of this module.'
            : 'Almost there. Review the cards and try again to lock it in.'}
        </p>
        <div className="mx-auto mt-4 h-2 max-w-xs rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              passed ? 'bg-mint-400' : 'bg-royal-500'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <button onClick={handleRetry} className="btn-ghost mt-6">
          <RotateCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8 animate-fade-up">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-lavender-medium">
          Quick Check
        </span>
        <span className="text-xs text-white/40">
          Question {current + 1} of {questions.length}
        </span>
      </div>

      <div className="mb-4 h-1 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-royal-500 transition-all duration-500"
          style={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <h4 className="font-serif text-xl font-medium leading-snug text-white text-balance">
        {q.question}
      </h4>

      <div className="mt-5 space-y-2.5">
        {q.options.map((opt) => {
          const isSelected = selected === opt.id;
          const showCorrect = revealed && opt.correct;
          const showWrong = revealed && isSelected && !opt.correct;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={revealed}
              className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition-all ${
                showCorrect
                  ? 'border-mint-400/60 bg-mint-400/10 text-white'
                  : showWrong
                    ? 'border-red-400/60 bg-red-400/10 text-white'
                    : isSelected
                      ? 'border-royal-500/60 bg-royal-600/15 text-white'
                      : 'border-white/10 bg-white/5 text-white/80 hover:border-lavender-medium/40 hover:bg-white/10'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                  showCorrect
                    ? 'border-mint-400 bg-mint-400 text-navy-900'
                    : showWrong
                      ? 'border-red-400 bg-red-400 text-white'
                      : isSelected
                        ? 'border-royal-400 bg-royal-600 text-white'
                        : 'border-white/30 text-white/50'
                }`}
              >
                {showCorrect ? (
                  <Check className="h-3 w-3" />
                ) : showWrong ? (
                  <X className="h-3 w-3" />
                ) : (
                  opt.id.toUpperCase()
                )}
              </span>
              <span className="leading-relaxed">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {revealed && selectedOption && (
        <div
          className={`mt-4 rounded-xl border p-4 text-sm animate-fade-up ${
            selectedOption.correct
              ? 'border-mint-400/30 bg-mint-400/5 text-mint-100'
              : 'border-royal-500/30 bg-royal-600/10 text-lavender-soft'
          }`}
        >
          <p className="font-semibold mb-1">
            {selectedOption.correct ? 'Correct!' : 'Not quite.'}
          </p>
          <p className="text-white/70 leading-relaxed">{selectedOption.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!revealed ? (
          <button onClick={handleCheck} disabled={!selected} className="btn-primary">
            Check Answer
          </button>
        ) : (
          <button onClick={handleNext} className="btn-primary">
            {current + 1 < questions.length ? 'Next Question' : 'See Results'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
