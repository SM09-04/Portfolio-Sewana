
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mono-text text-emerald-600 dark:text-emerald-400 mb-4 text-sm font-bold uppercase tracking-widest">
          &lt;06_Comms /&gt;
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Establish Secure Connection</h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-12 max-w-xl mx-auto">
          Open for collaboration, consulting, or professional opportunities within the security landscape.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a 
            href="https://github.com/SM09-04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-xl hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all hover:scale-105"
          >
            <svg className="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
            <span className="font-bold text-slate-700 dark:text-slate-200">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sewana-m-b9a858271/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-xl hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all hover:scale-105"
          >
            <svg className="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
            </svg>
            <span className="font-bold text-slate-700 dark:text-slate-200">LinkedIn</span>
          </a>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-2xl mx-auto">
          <p className="mono-text text-sm text-emerald-600 dark:text-emerald-400 mb-6"># SEND DIRECT PACKET</p>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-800 dark:text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none w-full transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-800 dark:text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none w-full transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>
            <textarea 
              rows={4} 
              placeholder="Your Message" 
              className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-800 dark:text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none w-full resize-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            ></textarea>
            <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded shadow-lg shadow-emerald-200 dark:shadow-none transition-all transform hover:-translate-y-1">
              EXECUTE TRANSMISSION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
