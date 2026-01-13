
import React from 'react';
import { Education } from '../types';

const educationData: Education[] = [
  {
    institution: "REVA University (RACE)",
    degree: "M.Tech in Cyber Security",
    year: "2025 – 2027",
  },
  {
    institution: "Sri Krishna Institute of Technology",
    degree: "B.Tech in Computer Science Engineering",
    year: "2020 – 2024",
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest text-center">
          &lt;02_Education /&gt;
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Academic Roadmap</h2>
        
        <div className="relative border-l-2 border-emerald-200 dark:border-emerald-800 ml-4 md:ml-0 md:left-1/2">
          {educationData.map((edu, index) => (
            <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:-translate-x-full md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
              <div className="absolute top-2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] z-10 
                left-[-9px] md:left-auto md:right-[-9px] 
                ${index % 2 !== 0 ? 'md:left-[-9px]' : ''}"></div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-400 hover:shadow-lg dark:hover:shadow-emerald-900/20 transition-all hover:translate-x-1 duration-300">
                <span className="mono-text text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-1 block">{edu.year}</span>
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{edu.institution}</p>
                {edu.details && <p className="text-slate-500 dark:text-slate-400 text-sm italic">{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
