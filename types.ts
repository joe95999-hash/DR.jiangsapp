export type TabType = 'strength' | 'movement';

export interface Exercise {
  id: string;
  title: string;
  category: TabType;
  videoId: string;
  reps?: string;
  sets?: string;
  meta?: string; // For things like "WARM UP"
}

export interface ExerciseState {
  [key: string]: boolean; // id: completed
}