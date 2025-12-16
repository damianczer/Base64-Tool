import { memo, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeToggle = lazy(() => import('./ThemeToggle'));
const LanguageToggle = lazy(() => import('./LanguageToggle'));

const Footer = memo(() => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-800 dark:bg-slate-950 text-gray-300 py-6 mt-auto relative z-10 
        shadow-[0_-5px_20px_rgba(0,0,0,0.15)]">
            <div className="container mx-auto px-4">
                <div className="md:hidden flex justify-center gap-4 mb-4">
                    <Suspense fallback={null}>
                        <ThemeToggle />
                        <LanguageToggle />
                    </Suspense>
                </div>
                <div className="text-center">
                    <p className="text-sm">
                        Copyright &copy; {new Date().getFullYear()} {t('footer.copyright')}
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                        {t('footer.createdBy')}{' '}
                        <a
                            href="https://www.damianczerwinski.pl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Damian Czerwiński
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
