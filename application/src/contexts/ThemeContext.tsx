import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { getSettings, updateSettings } from '../utils/settings';
import { ThemeContext } from './theme.context';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => getSettings().theme);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setIsChanging(true);

        setTimeout(() => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            updateSettings({ theme: newTheme });

            setTimeout(() => {
                setIsChanging(false);
            }, 300);
        }, 150);
    }, [theme]);

    const value = useMemo(
        () => ({ theme, toggleTheme, isChanging }),
        [theme, toggleTheme, isChanging]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
