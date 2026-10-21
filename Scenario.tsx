import { useState } from 'react';
import { Lightbulb, ArrowRight, Star, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Scenario as ScenarioType } from '@/types';

export function Scenario({
  scenario,
  onComplete,
}: {
  scenario: ScenarioType;
  onComplete: () => void;
}) {
  const [chosen, setChosen] = useState<string | null>(null);
  const chosenOption = scenario.choices.find((c) => c.id === chosen);

  const handleSelect = (id: string) => {
    if (chosen) return;
    setChosen(id);
  };

  return (
    <div className="card overflow-hidden animate-fade-up">
      <div className="border-b border-white/10 bg-royal-600/10 px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lavender-medium">
          <Lightbulb className="h-4 w-4" />
          Real-World Scenario
        </div>
        <h4 className="mt-2 font-serif text-xl font-medium text-white">{scenario.title}</h4>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-xl border border-lavender-medium/20 bg-lavender-soft/5 p-4">
          <p className="text-sm leading-relaxed text-white/85">{scenario.situation}</p>
          <p className="mt-2 text-xs italic text-white/45">{scenario.context}</p>
        </div>

        <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
          How do you respond?
        </p>

        <div className="space-y-2.5">
          {scenario.choices.map((choice) => {
            const isChosen = chosen === choice.id;
            const showResult = chosen !== null;
            return (
              <button
                key={choice.id}
                onClick={() => handleSelect(choice.id)}
                disabled={showResult}
                className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition-all ${
                  showResult && choice.best
                    ? 'border-mint-400/60 bg-mint-400/10'
                    : showResult && isChosen && !choice.best && !choice.ok
                      ? 'border-red-400/50 bg-red-400/10'
                      : showResult && isChosen && choice.ok
                        ? 'border-amber-400/50 bg-amber-400/10'
                        : 'border-white/10 bg-white/5 hover:border-lavender-medium/40 hover:bg-white/10'
                }`}
              >
                <span className="flex-1 leading-relaxed text-white/85">{choice.label}</span>
                {showResult && choice.best && (
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint-300 fill-mint-300" />
                )}
                {showResult && isChosen && choice.ok && !choice.best && (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                )}
                {showResult && isChosen && !choice.best && !choice.ok && (
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-300" />
                )}
              </button>
            );
          })}
        </div>

        {chosenOption && (
          <div className="mt-5 animate-fade-up space-y-4">
            <div
              className={`rounded-xl border p-4 ${
                chosenOption.best
                  ? 'border-mint-400/30 bg-mint-400/5'
                  : chosenOption.ok
                    ? 'border-amber-400/30 bg-amber-400/5'
                    : 'border-red-400/30 bg-red-400/5'
              }`}
            >
              <p
                className={`mb-1 text-sm font-semibold ${
                  chosenOption.best
                    ? 'text-mint-200'
                    : chosenOption.ok
                      ? 'text-amber-200'
                      : 'text-red-200'
                }`}
              >
                {chosenOption.best
                  ? 'Best answer'
                  : chosenOption.ok
                    ? 'Acceptable, with caveats'
                    : 'Reconsider this approach'}
              </p>
              <p className="text-sm leading-relaxed text-white/70">{chosenOption.feedback}</p>
            </div>

            <div className="rounded-xl border border-royal-500/30 bg-royal-600/10 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lavender-medium">
                <Lightbulb className="h-3.5 w-3.5" />
                Key Takeaway
              </p>
              <p className="text-sm leading-relaxed text-white/80">{scenario.takeaway}</p>
            </div>

            <div className="flex justify-end">
              <button onClick={onComplete} className="btn-primary">
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
