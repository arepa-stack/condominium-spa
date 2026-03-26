import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09151a] w-full border-t border-[#ffffff]/5 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold text-[#d7e4ec]">CondoConcierge</div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#e2bfb0]">© 2024 CondoConcierge. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-[#e2bfb0] hover:text-[#ff6d00] transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-[#e2bfb0] hover:text-[#ff6d00] transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-[#e2bfb0] hover:text-[#ff6d00] transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
          <a className="font-['Plus_Jakarta_Sans'] text-xs text-[#e2bfb0] hover:text-[#ff6d00] transition-colors opacity-80 hover:opacity-100" href="#">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
