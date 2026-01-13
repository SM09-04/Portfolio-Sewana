
import React from 'react';
import { Experience } from '../types';

const experienceData: Experience[] = [
  {
    company: "Edunet, Bengaluru",
    role: "Intern – Advanced Data Analytics",
    period: "Dec 2023 – Jan 2024",
    description: [
      "Worked on regression analysis and ML concepts.",
      "Developed Power BI dashboards and implemented data visualization techniques."
    ]
  },
  {
    company: "Freelance",
    role: "Freelance Trainer",
    period: "",
    description: [
      "Focused on project management and delivery.",
      "Practiced effective teamwork and communication.",
      "Applied problem-solving and analytical thinking to diverse challenges."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-emerald-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest text-center">
          &lt;03_Experience /&gt;
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Field Operations</h2>

        <div className="grid grid-cols-1 gap-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="group relative bg-white dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg dark:hover:shadow-emerald-900/20 transition-all hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                  <div className="text-emerald-700 dark:text-emerald-400 font-semibold text-lg">{exp.company}</div>
                </div>
                {exp.period && (
                  <div className="mono-text text-slate-600 dark:text-slate-300 mt-2 md:mt-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm self-start font-medium">
                    {exp.period}
                  </div>
                )}
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 mr-3 mt-1.5 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
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

export default ExperienceSection;
