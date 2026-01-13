
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceSection from './components/Experience';
import EducationSection from './components/Education';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="scanline"></div>
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-60"></div>
      
      {/* Glow effects */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed top-1/2 -right-24 w-80 h-80 bg-lime-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
