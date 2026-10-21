import { Trophy, RotateCcw, ArrowRight, Sparkles, Download } from 'lucide-react';
import type { Module, ProgressState } from '@/types';
import { Icon } from '@/components/Icon';

export function Completion({
  modules,
  state,
  onRestart,
  onReview,
}: {
  modules: Module[];
  state: ProgressState;
  onRestart: () => void;
  onReview: (id: Module['id']) => void;
}) {
  const totalQuestions = modules.reduce((sum, m) => sum + m.quiz.length, 0);
  const totalCorrect = modules.reduce(
    (sum, m) => sum + (state.quizScores[m.id] ?? 0),
    0,
  );
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const handleDownload = () => {
    const lines = [
      'VIVA READY — Interview Prep Summary',
      '====================================',
      '',
      ...modules.map((m) => {
        const score = state.quizScores[m.id] ?? 0;
        const total = m.quiz.length;
        return `${m.title}\n  Objective: ${m.objective}\n  Quiz: ${score}/${total}\n`;
      }),
      '',
      `Overall quiz score: ${totalCorrect}/${totalQuestions} (${pct}%)`,
      '',
      'Key things to remember:',
      '- Viva connects Latin American talent with executives at US/Canada startups.',
      '- Mission: empower women and reduce gender inequality by creating 1,000 jobs for women across Latin America.',
      '- Five values: Drive Fast, Empower Each Other, Embrace Feedback, Customer Obsession, Use Your Voice.',
      '- An EA is a force multiplier for executive time.',
      '- Use STAR (Situation, Task, Action, Result) in interviews.',
      '- Speak in outcomes, not tasks. Show values through stories.',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'viva-ready-summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-up">
      <div className="relative mb-8 inline-block">
        <div className="absolute inset-0 rounded-full bg-royal-600/30 blur-2xl animate-pulse-soft" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-lavender-medium text-white shadow-xl shadow-royal-600/40">
          <Trophy className="h-10 w-10" />
        </div>
      </div>

      <div className="inline-flex items-center gap-2 rounded-full border border-lavender-medium/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-lavender-medium mb-4">
        <Sparkles className="h-3.5 w-3.5" />
        You’re Viva Ready
      </div>

      <h2 className="font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
        Congratulations!
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
        You’ve completed all seven modules. You now understand what Viva does, its mission and
        values, the EA role, and how to communicate confidently in your interview.
      </p>

      {/* Score card */}
      <div className="mx-auto mt-8 max-w-md card p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
          Your overall quiz score
        </p>
        <p className="mt-2 font-serif text-5xl font-semibold text-white">
          {totalCorrect}
          <span className="text-2xl text-white/40">/{totalQuestions}</span>
        </p>
        <div className="mx-auto mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-royal-600 via-royal-500 to-mint-400 transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-white/50">
          {pct >= 80
            ? 'Excellent — you’re well prepared.'
            : pct >= 60
              ? 'Good foundation — a quick review will sharpen it.'
              : 'Keep practicing — review the modules and try again.'}
        </p>
      </div>

      {/* Module recap */}
      <div className="mt-8 space-y-2 text-left">
        {modules.map((m) => {
          const score = state.quizScores[m.id] ?? 0;
          const total = m.quiz.length;
          return (
            <button
              key={m.id}
              onClick={() => onReview(m.id)}
              className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-lavender-medium/30 hover:bg-white/10"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-royal-600/20 text-lavender-medium">
                <Icon name={m.icon} className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{m.title}</p>
                {total > 0 && (
                  <p className="text-xs text-white/40">
                    Quiz: {score}/{total}
                  </p>
                )}
              </div>
              <ArrowRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-lavender-medium" />
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button onClick={handleDownload} className="btn-primary">
          <Download className="h-4 w-4" />
          Download Summary
        </button>
        <button onClick={onRestart} className="btn-ghost">
          <RotateCcw className="h-4 w-4" />
          Start Over
        </button>
      </div>
    </div>
  );
}
