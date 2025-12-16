import { memo } from 'react';

interface ThemeTransitionProps {
    isChanging: boolean;
}

const ThemeTransition = memo(({ isChanging }: ThemeTransitionProps) => {
    if (!isChanging) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-gray-900 flex items-center 
        justify-center transition-opacity duration-300">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-300 font-medium">Changing theme...</p>
            </div>
        </div>
    );
});

ThemeTransition.displayName = 'ThemeTransition';

export default ThemeTransition;
