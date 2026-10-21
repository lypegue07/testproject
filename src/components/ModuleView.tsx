import { useState } from 'react';
import { Target, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import type { Module, ModuleId } from '@/types';
import { Icon } from '@/components/Icon';
import { Quiz } from '@/components/Quiz';
import { ScenarioJourney } from '@/components/ScenarioJourney';
import { InterviewPractice } from '@/components/InterviewPractice';

type Phase = 'learn' | 'practice';

export function ModuleView({
  module,
  index,
  total,
  isCompleted,
  onPrev,
  onNext,
  onComplete,
  interviewAnswers, onInterviewAnswer, confidence, onConfidence,
}: {
  module: Module;
  index: number;
  total: number;
  isCompleted: boolean;
  onPrev: () => void;
  onNext: () => void;
  onComplete: (id: ModuleId, score: number) => void;
  interviewAnswers: Record<string,string>;
  onInterviewAnswer: (k:string,v:string)=>void;
  confidence: number[];
  onConfidence: (v:number[])=>void;
}) {
  const [phase, setPhase] = useState<Phase>('learn');
  const [quizScore, setQuizScore] = useState(0);

  const hasQuiz = module.quiz.length > 0;
  const hasScenario = !!module.scenario;

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    if (!hasScenario) {
      onComplete(module.id, score);
    }
  };

  const handleScenarioComplete = () => {
    onComplete(module.id, quizScore);
  };

  return (
    <div className="animate-fade-up">
      {/* Module header */}
      <div className="mb-6 flex items-start gap-4">
        <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-royal-600 text-white shadow-lg shadow-royal-600/30">
          <Icon name={module.icon} className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="font-medium uppercase tracking-wider">
              Module {index + 1} of {total}
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 rounded-full bg-mint-400/15 px-2 py-0.5 text-[10px] font-semibold text-mint-300">
                <CheckCircle2 className="h-3 w-3" />
                Completed
              </span>
            )}
          </div>
          <h2 className="mt-1 font-serif text-3xl font-semibold leading-tight text-white">
            {module.title}
          </h2>
          <p className="mt-1 text-sm text-white/55">{module.subtitle}</p>
        </div>
      </div>

      {/* Objective banner */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-royal-500/20 bg-royal-600/10 px-4 py-3">
        <Target className="h-4 w-4 flex-shrink-0 text-lavender-medium" />
        <p className="text-sm text-white/75">
          <span className="font-semibold text-lavender-medium">Objective: </span>
          {module.objective}
        </p>
      </div>

      {/* Phase toggle */}
      <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
        <button
          onClick={() => setPhase('learn')}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
            phase === 'learn' ? 'bg-royal-600 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          Learn
        </button>
        <button
          onClick={() => setPhase('practice')}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
            phase === 'practice' ? 'bg-royal-600 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          Practice
        </button>
      </div>

      {phase === 'learn' ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {module.learnCards.map((card, i) => (
            <div
              key={card.title}
              className="card p-5 animate-fade-up hover:border-lavender-medium/30 transition-all"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600/30 to-lavender-medium/20 text-lavender-medium">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{card.body}</p>
            </div>
          ))}

          <div className="sm:col-span-2 mt-2 flex justify-end">
            <button onClick={() => setPhase('practice')} className="btn-primary">
              {hasQuiz || hasScenario ? 'Go to Practice' : 'Mark Complete'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {module.id === 'interview-prep' && <InterviewPractice answers={interviewAnswers} onAnswer={onInterviewAnswer} confidence={confidence} onConfidence={onConfidence} />}
          {hasQuiz && <Quiz questions={module.quiz} onComplete={handleQuizComplete} />}
          {hasScenario && module.scenario && (
            <ScenarioJourney first={module.scenario} onComplete={handleScenarioComplete} />
          )}
          {!hasQuiz && !hasScenario && (
            <div className="card p-8 text-center">
              <p className="text-white/60">No practice for this module yet.</p>
              <button onClick={() => onComplete(module.id, 0)} className="btn-primary mt-4">
                Mark Complete
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={onPrev}
              disabled={index === 0}
              className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              disabled={!isCompleted}
              className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
            >
              {index === total - 1 ? 'Finish' : 'Next Module'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
