export type ModuleId =
  | 'about-viva'
  | 'social-mission'
  | 'values'
  | 'what-is-ea'
  | 'a-day-in-life'
  | 'scenarios'
  | 'interview-prep';

export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface LearnCard {
  title: string;
  body: string;
  icon: string;
}

export interface ScenarioChoice {
  id: string;
  label: string;
  best: boolean;
  ok: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  title: string;
  situation: string;
  context: string;
  choices: ScenarioChoice[];
  takeaway: string;
}

export interface Module {
  id: ModuleId;
  title: string;
  shortTitle: string;
  subtitle: string;
  duration: string;
  icon: string;
  objective: string;
  learnCards: LearnCard[];
  quiz: QuizQuestion[];
  scenario?: Scenario;
}

export interface ProgressState {
  completedModules: ModuleId[];
  quizScores: Partial<Record<ModuleId, number>>;
  currentModule: ModuleId;
  started: boolean;
}
