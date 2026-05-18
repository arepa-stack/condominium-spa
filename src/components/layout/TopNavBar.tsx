import React, { useEffect, useState } from 'react';

interface TopNavBarProps {
  onDownloadClick: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onDownloadClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3.5 max-w-7xl mx-auto">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined fill-1 text-white" style={{ fontSize: '18px' }}>apartment</span>
            <div className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
          </div>
          <span className="text-lg font-bold tracking-tight text-on-surface">Apto</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-on-surface-variant">
          <a href="#features"     className="px-3 py-2 hover:text-on-surface transition-colors rounded-lg hover:bg-white/[0.04]">Funcionalidades</a>
          <a href="#how-it-works" className="px-3 py-2 hover:text-on-surface transition-colors rounded-lg hover:bg-white/[0.04]">¿Cómo funciona?</a>
        </div>

        {/* CTA */}
        <button
          onClick={onDownloadClick}
          className="btn-primary px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined fill-1" style={{ fontSize: '16px' }}>download</span>
          Descargar APK
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
