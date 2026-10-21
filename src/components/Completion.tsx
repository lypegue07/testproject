import { Trophy, RotateCcw, ArrowRight, Sparkles, Download } from 'lucide-react';
import type { Module, ProgressState } from '@/types';
import { Icon } from '@/components/Icon';

export function Completion({
  modules,
  state,
  onRestart,
  onReview,
  onRetake,
}: {
  modules: Module[];
  state: ProgressState;
  onRestart: () => void;
  onReview: (id: Module['id']) => void;
  onRetake: () => void;
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
      `Module practice score: ${totalCorrect}/${totalQuestions} (${pct}%)`,
      `Final readiness score: ${state.finalScore === null ? 'Not taken' : `${state.finalScore}/8 (${Math.round(state.finalScore/8*100)}%)`}`,
      `Confidence reflection: ${state.confidence.length === 5 ? state.confidence.join(', ') : 'Not completed'}`, 
      '',
      'Key things to remember:',
      '- Viva connects Latin American talent with executives at US/Canada startups.',
      '- Mission: empower women and reduce gender inequality by creating 1,000 jobs for women across Latin America.',
      '- Five values: Drive Fast, Empower Each Other, Embrace Feedback, Customer Obsession, Use Your Voice.',
      '- An EA is a force multiplier for executive time.',
      '- Headline First: lead with the main answer, then one or two supporting points.',
      '- Prioritize urgent, high-impact work and communicate proactively.',
      '- STAR can help organize behavioral examples.',
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
        You're one step closer to interview confidence.
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
        You've explored Viva, discovered the EA role, practiced real-world decisions, and strengthened your communication skills.
      </p>

      {/* Score card */}
      <div className="mx-auto mt-8 max-w-md card p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
          Your final readiness score
        </p>
        <p className="mt-2 font-serif text-5xl font-semibold text-white">
          {state.finalScore === null ? "—" : state.finalScore}
          <span className="text-2xl text-white/40">/8</span>
        </p>
        <div className="mx-auto mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-royal-600 via-royal-500 to-mint-400 transition-all duration-1000"
            style={{ width: `${(state.finalScore ?? 0)/8*100}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-white/50">
          {state.finalScore === null ? 'Take the final assessment to see your score.' : state.finalScore >= 7 ? 'You can explain the essentials. Keep practicing your own examples.' : 'Review the modules and try again.'}
        </p>
      </div>

      <div className="mt-6 card p-5 text-left"><p className="font-semibold">Your readiness checklist</p><div className="mt-3 grid gap-2 text-sm text-white/70">{['Explain what Viva does and its mission','Name the five Viva values','Describe the EA role beyond administrative tasks','Describe real EA responsibilities','Prioritize practical workplace scenarios','Answer interview questions clearly'].map(t=><p key={t}>✓ {t}</p>)}</div>{state.confidence.length===5 && <p className="mt-3 text-xs text-lavender-medium">Confidence reflection: {state.confidence.join(' · ')} (out of 5)</p>}</div>
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
        <button onClick={onRetake} className="btn-ghost">Retake Final Quiz</button>
        <button onClick={() => onReview(modules[0].id)} className="btn-ghost">Review Modules</button>
        <button onClick={handleDownload} className="btn-primary">
          <Download className="h-4 w-4" />
          Download Summary
        </button>
        <button onClick={onRestart} className="btn-ghost">
          <RotateCcw className="h-4 w-4" />
          Restart Journey
        </button>
      </div>
    </div>
  );
}
