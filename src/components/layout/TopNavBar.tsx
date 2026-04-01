import React from 'react';

interface TopNavBarProps {
  onDownloadClick: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onDownloadClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09151a]/70 backdrop-blur-xl border-b border-[#ffffff]/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-[#d7e4ec]">CondoConcierge</div>
        <button 
          onClick={onDownloadClick}
          className="bg-[#ff6d00] text-[#341100] px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#fd9000] hover:shadow-[0_0_15px_#ff6d00] transition-all duration-300 scale-95 active:scale-90"
        >
          Descargar APK
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
