import React, { useState } from 'react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, isCompleted, onToggleComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Play icon component
  const PlayIcon = () => (
    <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-[2px]">
      <div className="ml-1 w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
    </div>
  );

  // Check icon component
  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" className={`w-[18px] h-[18px] transition-fill duration-300 ${isCompleted ? 'fill-black' : 'fill-transparent'}`}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" stroke={isCompleted ? "black" : "#A0A0A0"} strokeWidth="1" />
    </svg>
  );

  return (
    <div className={`bg-garmin-card rounded-lg mb-4 overflow-hidden border transition-colors duration-300 shadow-lg ${isCompleted ? 'border-garmin-success' : 'border-[#333]'}`}>
      
      {/* Media Box */}
      <div 
        className="relative w-full pb-[56.25%] bg-black cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${exercise.videoId}/hqdefault.jpg`} 
              alt={exercise.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isCompleted ? 'grayscale opacity-60' : 'opacity-80 group-active:opacity-100'}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <PlayIcon />
            </div>
          </>
        ) : (
          <iframe 
            className="absolute top-0 left-0 w-full h-full border-0"
            src={`https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&playsinline=1`}
            title={exercise.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex-grow">
          <div className={`text-base font-bold mb-1 transition-colors ${isCompleted ? 'text-garmin-textSub line-through' : 'text-garmin-textMain'}`}>
            {exercise.title}
          </div>
          <div className={`font-condensed text-[0.85rem] uppercase tracking-wide flex items-center gap-2 ${isCompleted ? 'text-garmin-textSub' : 'text-garmin-primary'}`}>
            {exercise.meta ? (
               <span>{exercise.meta}</span>
            ) : (
              <>
                 {exercise.reps && (
                   <span className="after:content-['|'] after:text-[#444] after:ml-2 last:after:content-none">
                     {exercise.reps}
                   </span>
                 )}
                 {exercise.sets && (
                   <span>{exercise.sets}</span>
                 )}
              </>
            )}
          </div>
        </div>

        {/* Check Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete(exercise.id);
          }}
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 outline-none
            ${isCompleted 
              ? 'bg-garmin-success border-garmin-success shadow-glow-green' 
              : 'bg-transparent border-garmin-textSub hover:border-garmin-primary'
            }
          `}
        >
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;