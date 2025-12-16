import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = memo(() => {
    const { i18n } = useTranslation();

    const toggleLanguage = useCallback(() => {
        const newLang = i18n.language === 'en' ? 'pl' : 'en';
        i18n.changeLanguage(newLang);
    }, [i18n]);

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-4 right-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
            text-gray-800 dark:text-gray-100 font-semibold py-2 px-4 border border-gray-300 dark:border-gray-600 
            rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 z-50"
            aria-label="Change language"
        >
            <span className="text-sm font-medium">
                {i18n.language === 'en' ? 'PL' : 'EN'}
            </span>
        </button>
    );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;
