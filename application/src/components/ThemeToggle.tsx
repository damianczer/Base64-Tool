import { memo } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="md:fixed md:top-4 md:right-[5.5rem] w-[60px] bg-slate-800 dark:bg-slate-950 hover:bg-slate-700 
            dark:hover:bg-slate-900 text-gray-100 dark:text-gray-100 font-semibold py-2 px-4 border border-slate-700
            dark:border-slate-800 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 md:z-50"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 
                        6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )}
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
