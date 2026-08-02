import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black/60 backdrop-blur-md py-8 border-t border-white/10 relative z-10">
      <div className="w-full px-[15px] flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 tracking-wider uppercase font-medium space-y-4 sm:space-y-0">
        <div>
          © {new Date().getFullYear()} GAURAV VERMA. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center space-x-6">
          <span>KIET GHAZIABAD, INDIA</span>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-neutral-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
