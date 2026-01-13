
import React from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: "IoT Safety Device with GPS & SOS Alert System",
    description: "GPS and GSM-based personal safety device providing real-time location sharing and emergency communication features.",
    tags: ["IoT", "GPS", "GSM", "Hardware"],
    githubUrl: "https://github.com/SM09-04"
  },
  {
    title: "Data Analytics Internship Dashboard",
    description: "Comprehensive Power BI dashboard developed during internship focusing on deep insights and data visualization.",
    tags: ["Power BI", "Data Visualization", "Analytics"],
    githubUrl: "https://github.com/SM09-04"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-emerald-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest text-center">
          &lt;05_Lab_Work /&gt;
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg dark:hover:shadow-emerald-900/20 transition-all transform hover:-translate-y-2 group shadow-sm">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-transparent dark:from-emerald-900/20 group-hover:from-emerald-200/40 dark:group-hover:from-emerald-800/30 transition-all"></div>
                
                {project.title.includes("IoT") ? (
                   <div className="flex items-center gap-8 group-hover:scale-110 transition-transform duration-500">
                      {/* GPS Icon */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm text-emerald-600 dark:text-emerald-400">
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-emerald-600/80 dark:text-emerald-400/80">GPS</span>
                      </div>
                      
                      {/* SOS Icon */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm text-emerald-600 dark:text-emerald-400">
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                           </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-emerald-600/80 dark:text-emerald-400/80">SOS</span>
                      </div>
                   </div>
                ) : project.title.includes("Data Analytics") ? (
                    <svg className="w-20 h-20 text-emerald-200 dark:text-emerald-800 group-hover:text-emerald-400 dark:group-hover:text-emerald-600 transition-colors transform group-hover:scale-110 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                ) : (
                    <svg className="w-20 h-20 text-emerald-200 dark:text-emerald-800 group-hover:text-emerald-400 dark:group-hover:text-emerald-600 transition-colors transform group-hover:scale-110 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase rounded-full border border-emerald-200 dark:border-emerald-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center text-sm font-medium">
                    CODE BASE 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
