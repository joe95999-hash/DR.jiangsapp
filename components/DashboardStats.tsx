import React from 'react';

interface DashboardStatsProps {
  completedCount: number;
  totalCount: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ completedCount, totalCount }) => {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  return (
    <div className="px-5 pb-5 pt-2.5 text-center bg-black/95 backdrop-blur-sm">
      <div className="flex justify-between text-sm text-garmin-textSub font-condensed uppercase mb-1.5">
        <span>Completion</span>
        <span className="text-garmin-primary font-bold text-base">{percent}%</span>
      </div>
      
      <div className="bg-[#333] h-1.5 rounded-full w-full mb-2 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out shadow-glow bg-gradient-to-r from-garmin-primary to-[#0088cc]"
          style={{ width: `${percent}%` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-garmin-textSub font-condensed uppercase">
        <span>{completedCount} / {totalCount}</span>
        <span>Status: {percent === 100 ? <span className="text-garmin-success">Completed</span> : 'Active'}</span>
      </div>
    </div>
  );
};

export default DashboardStats;