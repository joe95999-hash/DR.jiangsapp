import React, { useState, useEffect, useMemo } from 'react';
import { EXERCISES } from './constants';
import { TabType, ExerciseState } from './types';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import Tabs from './components/Tabs';
import ExerciseCard from './components/ExerciseCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('strength');
  const [completed, setCompleted] = useState<ExerciseState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('garmin-training-progress');
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('garmin-training-progress', JSON.stringify(completed));
    }
  }, [completed, isLoaded]);

  const handleToggleComplete = (id: string) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    setCompleted({});
  };

  const completedCount = useMemo(() => {
    return Object.values(completed).filter(Boolean).length;
  }, [completed]);

  const totalCount = EXERCISES.length;

  const currentExercises = useMemo(() => {
    return EXERCISES.filter(ex => ex.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen pb-24 bg-garmin-bg text-garmin-textMain font-sans">
      <div className="sticky top-0 z-[1000] bg-garmin-bg/95 backdrop-blur-md">
        <Header onReset={handleReset} />
        <DashboardStats completedCount={completedCount} totalCount={totalCount} />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="p-4 animate-[fadeIn_0.4s_ease-out]">
        {currentExercises.map(ex => (
          <ExerciseCard 
            key={ex.id}
            exercise={ex}
            isCompleted={!!completed[ex.id]}
            onToggleComplete={handleToggleComplete}
          />
        ))}
        
        {currentExercises.length === 0 && (
          <div className="text-center text-garmin-textSub py-10">
            No exercises found for this category.
          </div>
        )}

        <div className="text-center text-[#444] text-xs uppercase tracking-widest mt-8 mb-4">
          BEAT YESTERDAY
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;