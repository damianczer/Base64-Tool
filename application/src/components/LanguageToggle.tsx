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
            className="md:fixed md:top-4 md:right-4 w-[60px] bg-slate-800 dark:bg-slate-950 hover:bg-slate-700
            dark:hover:bg-slate-900 text-gray-100 dark:text-gray-100 font-semibold py-2 px-4 border border-slate-700
            dark:border-slate-800 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 md:z-50"
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
