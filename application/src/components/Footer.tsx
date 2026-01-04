import { memo, lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LegalModal from './LegalModal';

const ThemeToggle = lazy(() => import('./ThemeToggle'));
const LanguageToggle = lazy(() => import('./LanguageToggle'));

type ModalType = 'privacy' | 'terms' | null;

const Footer = memo(() => {
    const { t } = useTranslation();
    const [modalType, setModalType] = useState<ModalType>(null);

    return (
        <>
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
                        <div className="flex justify-center gap-4 mt-3 text-xs">
                            <button
                                onClick={() => setModalType('privacy')}
                                className="text-blue-400 hover:text-blue-300 transition-colors underline-offset-2 hover:underline"
                            >
                                {t('footer.privacyPolicy')}
                            </button>
                            <span className="text-gray-500">|</span>
                            <button
                                onClick={() => setModalType('terms')}
                                className="text-blue-400 hover:text-blue-300 transition-colors underline-offset-2 hover:underline"
                            >
                                {t('footer.termsOfService')}
                            </button>
                        </div>
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
            <LegalModal type={modalType} onClose={() => setModalType(null)} />
        </>
    );
});

Footer.displayName = 'Footer';

export default Footer;
