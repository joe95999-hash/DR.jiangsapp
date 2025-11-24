import React from 'react';
import { TabType } from '../types';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const getTabClass = (tab: TabType) => {
    const base = "flex-1 py-4 bg-transparent border-none text-[0.95rem] font-bold uppercase relative cursor-pointer font-condensed transition-colors duration-300";
    const active = "text-garmin-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-garmin-primary after:shadow-tab";
    const inactive = "text-garmin-textSub hover:text-white";
    return `${base} ${activeTab === tab ? active : inactive}`;
  };

  return (
    <div className="flex bg-garmin-bg border-b border-garmin-border sticky top-[57px] z-[900]">
      <button 
        className={getTabClass('strength')}
        onClick={() => onTabChange('strength')}
      >
        Strength
      </button>
      <button 
        className={getTabClass('movement')}
        onClick={() => onTabChange('movement')}
      >
        Movement
      </button>
    </div>
  );
};

export default Tabs;