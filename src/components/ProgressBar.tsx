import { Check, Loader2 } from 'lucide-react';
import type { ModuleId } from '@/types';
import { useProgress } from '@/hooks/useProgress';

export function ProgressBar({
  modules,
  state,
}: {
  modules: { id: ModuleId; shortTitle: string }[];
  state: ReturnType<typeof useProgress>['state'];
}) {
  const completed = state.completedModules.length;
  const total = modules.length;
  const pct = Math.round((completed / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-xs text-white/60">
        <span className="font-medium">
          {completed} of {total} modules complete
        </span>
        <span className="font-semibold text-lavender-medium">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-royal-600 via-royal-500 to-lavender-medium transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {modules.map((m) => {
          const isDone = state.completedModules.includes(m.id);
          const isCurrent = state.currentModule === m.id;
          return (
            <span
              key={m.id}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-all ${
                isDone
                  ? 'bg-mint-400/20 text-mint-300'
                  : isCurrent
                    ? 'bg-royal-600/30 text-lavender-medium ring-1 ring-royal-500/40'
                    : 'bg-white/5 text-white/40'
              }`}
            >
              {isDone ? (
                <Check className="h-3 w-3" />
              ) : isCurrent ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : null}
              {m.shortTitle}
            </span>
          );
        })}
      </div>
    </div>
  );
}
