const COOKIE_NAME = 'dc_base64_tool';

interface AppSettings {
    theme: 'light' | 'dark';
    language: 'en' | 'pl';
}

const DEFAULT_SETTINGS: AppSettings = {
    theme: 'light',
    language: 'en',
};

export const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }
    return null;
};

export const setCookie = (name: string, value: string, days: number = 365): void => {
    if (typeof document === 'undefined') return;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
};

export const getSettings = (): AppSettings => {
    const cookie = getCookie(COOKIE_NAME);
    if (!cookie) return DEFAULT_SETTINGS;

    try {
        const parsed = JSON.parse(decodeURIComponent(cookie));
        return {
            theme: parsed.theme || DEFAULT_SETTINGS.theme,
            language: parsed.language || DEFAULT_SETTINGS.language,
        };
    } catch {
        return DEFAULT_SETTINGS;
    }
};

export const updateSettings = (settings: Partial<AppSettings>): void => {
    const currentSettings = getSettings();
    const newSettings = { ...currentSettings, ...settings };
    setCookie(COOKIE_NAME, encodeURIComponent(JSON.stringify(newSettings)));
};
