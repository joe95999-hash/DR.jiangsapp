import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (confirming) {
      timer = setTimeout(() => setConfirming(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [confirming]);

  const handleClick = () => {
    if (confirming) {
      onReset();
      setConfirming(false);
    } else {
      setConfirming(true);
    }
  };

  return (
    <header className="flex items-center justify-between px-5 py-4 pt-[max(15px,env(safe-area-inset-top))] border-b border-garmin-border bg-black/95 backdrop-blur-sm">
      <h1 className="m-0 text-[1.1rem] uppercase tracking-wider font-condensed font-bold text-white">
        My Training
      </h1>
      <button 
        type="button"
        onClick={handleClick}
        className={`
          cursor-pointer px-2.5 py-1 rounded text-xs uppercase transition-all duration-300 outline-none border
          ${confirming 
            ? 'bg-red-900/20 border-red-500 text-red-500 hover:bg-red-900/40' 
            : 'bg-transparent border-garmin-textSub text-garmin-textSub hover:border-garmin-primary hover:text-garmin-primary active:border-garmin-primary active:text-garmin-primary'
          }
        `}
      >
        {confirming ? 'Confirm?' : 'Reset'}
      </button>
    </header>
  );
};

export default Header;