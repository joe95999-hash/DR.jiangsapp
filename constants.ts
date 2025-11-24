import { Exercise } from './types';

export const EXERCISES: Exercise[] = [
  // Strength Section
  {
    id: 's-ex1',
    category: 'strength',
    title: 'Dynamic Warmup (動態伸展)',
    videoId: '-r0TYqz7INw',
    meta: 'WARM UP'
  },
  {
    id: 's-ex2',
    category: 'strength',
    title: 'Bulgarian Split Squat (保加利亞分腿蹲)',
    videoId: 'd-RU2HtKoXs',
    reps: '12 REPS',
    sets: '3 SETS'
  },
  {
    id: 's-ex3',
    category: 'strength',
    title: 'Single/Double Leg Deadlift (硬舉)',
    videoId: 'l1-_acQF6v4',
    reps: '12 REPS',
    sets: '3 SETS'
  },
  {
    id: 's-ex4',
    category: 'strength',
    title: 'Goblet Squat (高腳杯深蹲)',
    videoId: 'Jb3pTR5O8Yg',
    reps: '12 REPS',
    sets: '3 SETS'
  },
  {
    id: 's-ex5',
    category: 'strength',
    title: 'Sumo Deadlift (相撲硬舉)',
    videoId: 'EtnEFgGbqG8',
    reps: '12 REPS',
    sets: '3 SETS'
  },
  
  // Movement Section
  {
    id: 'm-ex1',
    category: 'movement',
    title: 'Dynamic Warmup (動態伸展)',
    videoId: '-r0TYqz7INw', // Reusing same warmup video as per request pattern
    meta: 'WARM UP'
  },
  {
    id: 'm-ex2',
    category: 'movement',
    title: 'Landing Practice (落地練習)',
    videoId: '0URq44w4cjU',
    reps: '6-8 REPS',
    sets: '3 SETS'
  },
  {
    id: 'm-ex3',
    category: 'movement',
    title: 'Adv. Landing Practice (落地練習進階)',
    videoId: 'LvQLWtzQsRE',
    reps: '6-8 REPS',
    sets: '3 SETS'
  },
  {
    id: 'm-ex4',
    category: 'movement',
    title: 'Sled Push (雪橇推)',
    videoId: 'w_GuoPFQs8c',
    reps: '10-20 M',
    sets: '4 SETS'
  },
  {
    id: 'm-ex5',
    category: 'movement',
    title: 'Sled Drag (雪橇後拉)',
    videoId: '5j6mh_VV2rU',
    reps: '10-20 M',
    sets: '4 SETS'
  },
  {
    id: 'm-ex6',
    category: 'movement',
    title: 'Single Leg Stand (坐姿單腳站立)',
    videoId: 'NeDKAuootaE',
    reps: '12 REPS',
    sets: '4 SETS'
  },
  {
    id: 'm-ex7',
    category: 'movement',
    title: 'Split Rocket Push (分腿單邊火箭推)',
    videoId: 'RhXb6oKP04s',
    reps: '12 REPS',
    sets: '4 SETS'
  },
  {
    id: 'm-ex8',
    category: 'movement',
    title: 'Spinning (騎飛輪)',
    videoId: '-R0yay35Kc0',
    reps: '40 MINS',
    sets: 'CARDIO'
  }
];