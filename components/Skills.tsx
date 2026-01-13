
import React from 'react';
import { SkillCategory } from '../types';

const skills: SkillCategory[] = [
  {
    category: "Programming",
    items: ["C (Basics)", "Python (Basics)", "SQL"]
  },
  {
    category: "Data Analysis",
    items: ["Power BI", "Excel (Pivot Tables, Data Cleaning)"]
  },
  {
    category: "Web",
    items: ["HTML", "CSS (Responsive Design)"]
  },
  {
    category: "Tools",
    items: ["Power BI", "Excel", "Canva"]
  },
  {
    category: "Documentation",
    items: ["Technical writing", "Reports"]
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Leadership", "Decision-making", "Adaptability"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest text-center">
          &lt;04_Arsenal /&gt;
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Technical Proficiency</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors shadow-md group hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg dark:hover:shadow-none">
              <h3 className="text-emerald-700 dark:text-emerald-400 font-bold mb-4 uppercase text-xs tracking-widest mono-text border-b border-emerald-100 dark:border-emerald-900 pb-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-700">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:shadow-[0_0_5px_rgba(16,185,129,0.4)] transition-shadow"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
