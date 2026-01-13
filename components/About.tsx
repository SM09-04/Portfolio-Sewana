
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest">
              &lt;01_About_Me /&gt;
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Mission Directive</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>
                Motivated M.Tech Cyber Security student with a strong foundation in computer science and hands-on learning in security concepts, network security, threat analysis, and incident response.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-square border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden group hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-500 shadow-sm dark:shadow-none">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500"></div>
                
                <div className="mono-text text-[10px] text-emerald-900 dark:text-emerald-500 space-y-1 opacity-20 dark:opacity-40">
                  {Array.from({length: 20}).map((_, i) => (
                    <div key={i} className="whitespace-nowrap overflow-hidden">
                      {Math.random().toString(16).substring(2, 40)}{Math.random().toString(16).substring(2, 40)}
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-10">
                   <div className="text-center p-6 bg-white/90 dark:bg-slate-900/90 rounded border border-emerald-100 dark:border-emerald-900/50 shadow-md backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold text-4xl mb-2">M.Tech</div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-widest uppercase">Cyber Security</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
