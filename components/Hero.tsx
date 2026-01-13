
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  
  // ---------------------------------------------------------
  // UPDATE YOUR PROFILE IMAGE LINK HERE
  // You can use a local file path (e.g., "profile.jpg") or a web URL (e.g., "https://example.com/photo.jpg")
  const PROFILE_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D5603AQG5HOuzNzb68Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690092091487?e=1769644800&v=beta&t=8H519iS6_z5clVx5eUGnuFl_wQshC2jJS9Le849bTSE"; 
  // ---------------------------------------------------------

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
          {/* Cyber ring effect */}
          <div className="absolute -inset-2 rounded-full border border-emerald-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full blur opacity-40 animate-pulse"></div>
          
          <div className="relative z-10">
            {!imgError ? (
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Sewana M" 
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-emerald-500 p-1 bg-white dark:bg-slate-900 shadow-2xl"
                onError={() => setImgError(true)}
              />
            ) : (
               <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-slate-800 flex flex-col items-center justify-center border-2 border-emerald-500 p-4 shadow-2xl">
                  <svg className="w-12 h-12 text-emerald-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-emerald-500 text-[10px] mono-text tracking-widest text-center">IMAGE NOT FOUND</span>
               </div>
            )}
          </div>
          
          <div className="absolute bottom-4 right-4 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 shadow-sm flex items-center justify-center z-20 pointer-events-none">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="mono-text mb-4 text-emerald-600 dark:text-emerald-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase animate-fade-in" style={{animationDelay: '0.2s'}}>
          [ INITIALIZING ANALYST PROFILE ]
        </div>

        <div className="mb-6 relative inline-block animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white glitch" data-text="Sewana M">
            Sewana M
          </h1>
        </div>

        <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
           <span className="border-r-2 border-emerald-500 pr-2 animate-pulse">
            M.Tech Cyber Security Student | <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Data Analytics</span> & 
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold"> Dashboard Developer</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.5s'}}>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-sm transition-all shadow-lg shadow-emerald-200 dark:shadow-none transform hover:-translate-y-1"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-emerald-600 hover:border-emerald-500 text-emerald-700 dark:text-emerald-400 font-bold rounded-sm transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transform hover:-translate-y-1"
          >
            CONTACT ME
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
