import { Sparkles, ArrowRight, GraduationCap, RotateCcw } from 'lucide-react';
import type { Module } from '@/types';
import type { useProgress } from '@/hooks/useProgress';

export function Hero({
  modules,
  progress,
  onStart,
  onJump,
  onReset,
}: {
  modules: Module[];
  progress: ReturnType<typeof useProgress>;
  onStart: () => void;
  onJump: (id: Module['id']) => void;
  onReset: () => void;
}) {
  const { state, progressPct } = progress;
  const hasProgress = state.completedModules.length > 0;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-royal" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal-600/20 blur-3xl animate-pulse-soft" />
      <div className="absolute top-40 -left-20 h-64 w-64 rounded-full bg-lavender-medium/10 blur-3xl animate-float" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender-medium/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-lavender-medium backdrop-blur-sm animate-fade-in">
          <Sparkles className="h-3.5 w-3.5" />
          Talent Partner Skill Assessment — Prototype
        </div>

        <h1 className="font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-white animate-fade-up sm:text-6xl md:text-7xl text-balance">
          VIVA <span className="shimmer-text">READY</span>
        </h1>

        <p className="mt-4 text-lg font-medium text-lavender-medium animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Your Interactive Executive Assistant Interview Prep Hub
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Learn it. Apply it. Explain it. A short, interactive experience that prepares you to
          confidently talk about Viva Talent, the Executive Assistant role, and your own judgment
          in interviews.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <button onClick={onStart} className="btn-primary text-base px-8 py-4">
            <GraduationCap className="h-5 w-5" />
            {hasProgress ? 'Continue Learning' : 'Start the Prep'}
            <ArrowRight className="h-4 w-4" />
          </button>
          {hasProgress && (
            <button onClick={onReset} className="btn-ghost">
              <RotateCcw className="h-4 w-4" />
              Reset Progress
            </button>
          )}
        </div>

        {hasProgress && (
          <div className="mx-auto mt-10 max-w-md animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
              <span>Your progress</span>
              <span className="font-semibold text-lavender-medium">{progressPct}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-royal-600 to-lavender-medium transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        <p className="mt-12 text-xs text-white/40 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Takes about 10–15 minutes · All content is in English · No account needed
        </p>
      </div>
    </section>
  );
}
