import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Logo = memo(() => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 dark:text-blue-400"
                >
                    <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <text
                        x="24"
                        y="30"
                        textAnchor="middle"
                        fill="currentColor"
                        style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace'
                        }}
                    >
                        64
                    </text>
                    <path
                        d="M12 16 L36 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <h1 className="text-4xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 
                    dark:to-cyan-300 bg-clip-text text-transparent font-mono">
                        Base64
                    </span>
                    <span className="text-gray-800 dark:text-gray-100 font-semibold ml-2">
                        Tool
                    </span>
                </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center max-w-2xl">
                {t('app.description')}
            </p>
        </div>
    );
});

Logo.displayName = 'Logo';

export default Logo;
