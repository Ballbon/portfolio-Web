import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-(--bg)/80 backdrop-blur-md border-b border-(--border) px-6 py-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="font-bold text-(--text-h) text-xl uppercase tracking-tighter cursor-default">
          PORT<span className="text-(--accent)">FOLIO</span>
        </span>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="/#about" className="hover:text-(--accent) transition">About</a>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 flex items-center justify-center rounded-full border border-(--border) bg-(--code-bg) hover:bg-(--accent-bg) transition text-(--text-h)"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <a 
            href="/Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-(--accent) text-white px-5 py-2 rounded-full hover:opacity-90 transition shadow-lg shadow-(--accent)/20"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}