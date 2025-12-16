import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pl from './locales/pl.json';
import { getSettings, updateSettings } from '../utils/settings';

const savedLanguage = getSettings().language;

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            pl: {
                translation: pl,
            },
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

i18n.on('languageChanged', (lng) => {
    updateSettings({ language: lng as 'en' | 'pl' });
});

export default i18n;
