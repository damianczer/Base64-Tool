import { memo } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-20 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
            text-gray-800 dark:text-gray-100 font-semibold py-2 px-4 border border-gray-300 dark:border-gray-600 
            rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 z-50"
            aria-label="Toggle theme"
        >
            <span className="text-sm font-medium">
                {theme === 'light' ? 'Dark' : 'Light'}
            </span>
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
