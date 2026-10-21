import { useState } from 'react';
import type { ProgressState } from '@/types';

const questions = [
  { q: "What is Viva's social mission?", options: ['Hire only women for remote positions.', 'Create 1,000 meaningful job opportunities for women across Latin America.', 'Replace administrative roles with automation.'], answer: 1, why: 'Viva aims to expand meaningful career opportunities for women while welcoming qualified talent of all genders.' },
  { q: 'What does Viva primarily do?', options: ['Connect Latin American talent with executives at U.S. and Canadian startups.', 'Offer only temporary internships.', 'Recruit exclusively for engineering positions.'], answer: 0, why: 'Viva connects professionals with growing startups that need executive support.' },
  { q: "Which option lists Viva's five values?", options: ['Drive Fast, Empower Each Other, Embrace Feedback, Customer Obsession, Use Your Voice.', 'Speed, Competition, Independence, Authority, Perfection.', 'Innovation, Sales, Finance, Growth, Efficiency.'], answer: 0, why: 'These five values describe Viva’s culture.' },
  { q: 'Who does a Viva Executive Assistant support?', options: ['C-level executives at growing startups.', 'Only university students.', 'Only the recruiting department.'], answer: 0, why: 'EAs support executives, including CEOs, at startups.' },
  { q: 'Which is an example of operational support?', options: ['Improving a workflow and preparing a report.', 'Only answering personal phone calls.', 'Avoiding process decisions.'], answer: 0, why: 'Operational work includes reporting, process improvement and problem-solving.' },
  { q: 'What best demonstrates proactive EA behavior?', options: ['Waiting until a problem becomes urgent.', 'Identifying a scheduling conflict early and proposing a solution.', 'Ignoring issues outside a checklist.'], answer: 1, why: 'Effective EAs anticipate needs and offer solutions.' },
  { q: 'Your CEO has an investor meeting in 30 minutes, and the presentation is missing. What comes first?', options: ["Planning next month's travel.", 'Resolving the missing presentation.', "Organizing next week's team lunch."], answer: 1, why: 'The investor meeting is both urgent and high impact.' },
  { q: 'What does Headline First communication mean?', options: ['Begin with extensive background.', 'Start with the main answer, then add one or two supporting points.', 'Avoid direct answers.'], answer: 1, why: 'A clear headline helps listeners understand the answer immediately.' },
];

export function FinalQuiz({ state, onSubmit, onReview, onComplete }: { state: ProgressState; onSubmit: (answers: Record<string,string>, score: number) => void; onReview: () => void; onComplete: () => void }) {
  const [answers, setAnswers] = useState<Record<string,string>>(state.finalAnswers ?? {});
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((sum, q, i) => sum + (Number(answers[String(i)]) === q.answer ? 1 : 0), 0);
  const q = questions[index];
  const allAnswered = questions.every((_, i) => answers[String(i)] !== undefined);
  const result = score <= 4 ? "You're building your foundation. Review the modules and try again." : score <= 6 ? 'Good progress! A quick review will strengthen your confidence.' : "You're ready to explain the essentials. Keep practicing with your own examples.";
  return <div className="animate-fade-up space-y-6">
    <div><p className="text-sm font-semibold text-lavender-medium">FINAL READINESS CHECK</p><h2 className="mt-2 font-serif text-3xl">Show what you understand</h2><p className="mt-2 text-white/60">Eight questions · No answers revealed until submission · You can retry</p></div>
    <div className="card p-6 sm:p-8">
      <div className="flex justify-between text-xs text-white/55"><span>Question {index+1} of 8</span><span>{Object.keys(answers).length} answered</span></div>
      <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-royal-500" style={{width:`${(index+1)/8*100}%`}} /></div>
      <h3 className="mt-7 text-xl font-semibold">{q.q}</h3>
      <div className="mt-5 space-y-3">{q.options.map((opt, i) => <button key={i} disabled={submitted} onClick={() => setAnswers(a=>({...a,[index]:String(i)}))} className={`block w-full rounded-xl border p-4 text-left text-sm transition-colors ${answers[String(index)] === String(i) ? 'border-lavender-medium bg-royal-600/25' : 'border-white/15 bg-white/5 hover:bg-white/10'}`}>{String.fromCharCode(65+i)}. {opt}</button>)}</div>
      {submitted && <div className="mt-5 rounded-xl border border-mint-400/30 bg-mint-400/5 p-4 text-sm"><p className="font-semibold text-mint-300">Correct answer: {String.fromCharCode(65+q.answer)} {Number(answers[String(index)]) === q.answer ? '· Your answer is correct' : '· Review this answer'}</p><p className="mt-2 text-white/70">{q.why}</p></div>}
      <div className="mt-8 flex flex-wrap justify-between gap-3"><button className="btn-ghost disabled:opacity-30" disabled={index===0} onClick={()=>setIndex(i=>i-1)}>Previous</button>{index<7 ? <button className="btn-primary" onClick={()=>setIndex(i=>i+1)}>Next question →</button> : !submitted ? <button className="btn-primary disabled:opacity-40" disabled={!allAnswered} onClick={()=>{onSubmit(answers,score);setSubmitted(true);}}>Submit answers</button> : <button className="btn-primary" onClick={onComplete}>View my results →</button>}</div>
    </div>
    {submitted && <div className="card p-6 text-center"><p className="text-xs uppercase text-white/50">Final assessment score</p><p className="mt-2 font-serif text-5xl">{score}/8 <span className="text-xl text-lavender-medium">({Math.round(score/8*100)}%)</span></p><p className="mt-3 text-white/70">{result}</p><div className="mt-5 flex flex-wrap justify-center gap-3"><button className="btn-ghost" onClick={()=>{setSubmitted(false);setAnswers({});setIndex(0);}}>Retake quiz</button><button className="btn-ghost" onClick={onReview}>Review modules</button><button className="btn-primary" onClick={onComplete}>View my results</button></div></div>}
  </div>;
}
