import { createContext } from 'react';

export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    isChanging: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
