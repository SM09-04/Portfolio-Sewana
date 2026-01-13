
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mono-text text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">
            © 2024 SEWANA M. | ALL SYSTEMS OPERATIONAL
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[10px] mono-text text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              ENCRYPTED CONNECTION
            </span>
          </div>
          <div className="mono-text text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">
            MADE WITH REACT & CYBER-DETERMINATION
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
