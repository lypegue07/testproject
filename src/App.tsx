import { useMemo, useState } from 'react';
import { GraduationCap, Home, Menu, X } from 'lucide-react';
import { modules } from '@/content';
import type { ModuleId } from '@/types';
import { useProgress } from '@/hooks/useProgress';
import { Hero } from '@/components/Hero';
import { ModuleList } from '@/components/ModuleList';
import { ModuleView } from '@/components/ModuleView';
import { Completion } from '@/components/Completion';
import { FinalQuiz } from '@/components/FinalQuiz';
import { ProgressBar } from '@/components/ProgressBar';

type View = 'home' | 'learn' | 'final' | 'complete';

export default function App() {
  const progress = useProgress();
  const { state, start, setCurrent, completeModule, setFinal, setConfidence, setInterviewAnswer, reset } = progress;

  const [view, setView] = useState<View>('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const currentIndex = useMemo(
    () => modules.findIndex((m) => m.id === state.currentModule),
    [state.currentModule],
  );
  const currentModule = modules[currentIndex] ?? modules[0];

  const handleStart = () => {
    start();
    setView('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (id: ModuleId) => {
    setCurrent(id);
    setView('learn');
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHome = () => {
    setView('home');
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < modules.length) {
      setCurrent(modules[nextIdx].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('final');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const prevIdx = currentIndex - 1;
    if (prevIdx >= 0) {
      setCurrent(modules[prevIdx].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    if (window.confirm('Restart your journey? This clears your saved progress, quiz results, and practice answers.')) {
      reset(); setView('home');
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <button onClick={handleHome} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-lavender-medium text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              VIVA <span className="text-lavender-medium">READY</span>
            </span>
          </button>

          {state.started && (
            <div className="hidden md:block w-64">
              <ProgressBar modules={modules} state={state} />
            </div>
          )}

          <div className="flex items-center gap-2">
            {view !== 'home' && (
              <button
                onClick={handleHome}
                className="hidden sm:inline-flex btn-ghost px-4 py-2 text-xs"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </button>
            )}
            {state.started && (
              <button
                onClick={() => setMobileNavOpen((o) => !o)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
                aria-label="Toggle navigation"
              >
                {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileNavOpen && state.started && (
          <div className="border-t border-white/10 bg-navy-900 px-6 py-4 md:hidden animate-slide-in">
            <ProgressBar modules={modules} state={state} />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {modules.map((m, idx) => {
                const done = state.completedModules.includes(m.id);
                const isCurrent = state.currentModule === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleSelectModule(m.id)}
                    className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all ${
                      isCurrent
                        ? 'border-royal-500/60 bg-royal-600/15 text-white'
                        : done
                          ? 'border-mint-400/30 bg-mint-400/5 text-mint-200'
                          : 'border-white/10 bg-white/5 text-white/70'
                    }`}
                  >
                    {idx + 1}. {m.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main>
        {view === 'home' && (
          <>
            <Hero
              modules={modules}
              progress={progress}
              onStart={handleStart}
              onJump={handleSelectModule}
              onReset={handleReset}
            />
            <section className="mx-auto max-w-6xl px-6 py-16">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-semibold text-white">
                  Your Learning Path
                </h2>
                <p className="mt-2 text-sm text-white/55">
                  Four focused learning stages, followed by a final readiness check.
                </p>
              </div>
              <div className="mb-7 grid gap-3 sm:grid-cols-2">
                {[
                  ['01', 'Discover Viva', 'Company, mission and values', 'about-viva'],
                  ['02', 'Understand the EA Role', 'Responsibilities and a typical day', 'what-is-ea'],
                  ['03', 'Think Like an EA', 'Real workplace decisions', 'scenarios'],
                  ['04', 'Interview Practice', 'Communicate with clarity', 'interview-prep'],
                ].map(([n,title,description,id]) => <button key={n} onClick={() => handleSelectModule(id as ModuleId)} className="card p-5 text-left hover:border-lavender-medium/50 transition-colors"><span className="text-xs text-lavender-medium">STAGE {n}</span><h3 className="mt-2 font-serif text-xl">{title}</h3><p className="mt-2 text-sm text-white/55">{description}</p></button>)}
              </div>
              <p className="mb-4 text-xs uppercase tracking-wider text-white/45">Explore the short lessons in each stage</p>
              <ModuleList
                modules={modules}
                currentId={state.currentModule}
                completedIds={state.completedModules}
                onSelect={handleSelectModule}
              />

              {/* Learning principles */}
              <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'Active learning', body: 'Quizzes and scenarios, not just reading.', icon: 'Zap' },
                  { title: 'Immediate feedback', body: 'Every answer explained so you learn why.', icon: 'Sparkles' },
                  { title: 'Built for confidence', body: 'Practice explaining Viva before the interview.', icon: 'Mic' },
                ].map((p) => (
                  <div key={p.title} className="card p-5">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {view === 'learn' && (
          <section className="mx-auto max-w-4xl px-6 py-10">
            <ModuleView
              key={currentModule.id}
              module={currentModule}
              index={currentIndex}
              total={modules.length}
              isCompleted={state.completedModules.includes(currentModule.id)}
              onPrev={handlePrev}
              onNext={handleNext}
              onComplete={completeModule}
              interviewAnswers={state.interviewAnswers}
              onInterviewAnswer={setInterviewAnswer}
              confidence={state.confidence}
              onConfidence={setConfidence}
            />
          </section>
        )}

        {view === 'final' && (
          <section className="mx-auto max-w-4xl px-6 py-12">
            <FinalQuiz state={state} onSubmit={setFinal} onReview={handleHome} onComplete={() => {setView('complete');window.scrollTo({top:0,behavior:'smooth'});}} />
          </section>
        )}
        {view === 'complete' && (
          <section className="mx-auto max-w-4xl px-6 py-16">
            <Completion
              modules={modules}
              state={state}
              onRestart={handleReset}
              onRetake={() => setView('final')}
              onReview={(id) => {
                setCurrent(id);
                setView('learn');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </section>
        )}
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-xs text-white/40">
          VIVA READY — Learn it. Apply it. Explain it.
        </p>
        <p className="mt-1 text-[11px] text-white/25">
          Independent candidate-preparation prototype created for a Viva Talent skill assessment. Not an official Viva Talent website.
        </p>
      </footer>
    </div>
  );
}
