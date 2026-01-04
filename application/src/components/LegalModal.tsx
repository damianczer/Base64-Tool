import { memo, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

type ModalType = 'privacy' | 'terms' | null;

interface LegalModalProps {
    type: ModalType;
    onClose: () => void;
}

const LegalModal = memo(({ type, onClose }: LegalModalProps) => {
    const { t } = useTranslation();
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
            return;
        }

        if (e.key === 'Tab' && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    }, [onClose]);

    useEffect(() => {
        if (type) {
            previousActiveElement.current = document.activeElement as HTMLElement;
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
                previousActiveElement.current?.focus();
            };
        }
    }, [handleKeyDown, type]);

    if (!type) return null;

    const modalId = `legal-modal-${type}`;
    const titleId = `${modalId}-title`;
    const descriptionId = `${modalId}-description`;

    const title = type === 'privacy'
        ? t('legal.privacy.title')
        : t('legal.terms.title');

    const content = type === 'privacy'
        ? t('legal.privacy.content', { returnObjects: true }) as string[]
        : t('legal.terms.content', { returnObjects: true }) as string[];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
        >
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                    <h2
                        id={titleId}
                        className="text-xl font-semibold text-slate-800 dark:text-white"
                    >
                        {title}
                    </h2>
                    <button
                        ref={closeButtonRef}
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
                        aria-label={t('legal.closeModal')}
                    >
                        <svg
                            className="w-5 h-5 text-slate-600 dark:text-slate-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    id={descriptionId}
                    className="p-6 pt-2 overflow-y-auto max-h-[calc(80vh-80px)]"
                >
                    <ul className="list-disc list-inside space-y-2" role="list">
                        {Array.isArray(content) && content.map((paragraph, index) => (
                            <li
                                key={index}
                                className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                            >
                                {paragraph}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});

LegalModal.displayName = 'LegalModal';

export default LegalModal;
