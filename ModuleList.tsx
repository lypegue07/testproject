import { CheckCircle2, Circle, Clock, ArrowRight } from 'lucide-react';
import type { Module, ModuleId } from '@/types';
import { Icon } from '@/components/Icon';

export function ModuleList({
  modules,
  currentId,
  completedIds,
  onSelect,
}: {
  modules: Module[];
  currentId: ModuleId;
  completedIds: ModuleId[];
  onSelect: (id: ModuleId) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m, idx) => {
        const done = completedIds.includes(m.id);
        const current = currentId === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
            className={`group relative flex flex-col gap-3 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
              current
                ? 'border-royal-500/60 bg-royal-600/15 shadow-lg shadow-royal-600/20'
                : done
                  ? 'border-mint-400/30 bg-mint-400/5 hover:border-mint-400/50'
                  : 'border-white/10 bg-white/5 hover:border-lavender-medium/40 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
                  current
                    ? 'bg-royal-600 text-white'
                    : done
                      ? 'bg-mint-400/20 text-mint-300'
                      : 'bg-white/10 text-lavender-medium group-hover:bg-royal-600/30 group-hover:text-white'
                }`}
              >
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              {done ? (
                <CheckCircle2 className="h-5 w-5 text-mint-300" />
              ) : current ? (
                <span className="text-[10px] font-bold uppercase tracking-wider text-royal-300">
                  In progress
                </span>
              ) : (
                <Circle className="h-5 w-5 text-white/20" />
              )}
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                Module {idx + 1}
              </p>
              <h3 className="mt-0.5 font-semibold leading-tight text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-white/55 leading-snug">{m.subtitle}</p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-2 text-xs text-white/40">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {m.duration}
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-lavender-medium opacity-0 transition-opacity group-hover:opacity-100">
                {done ? 'Review' : 'Start'}
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
