import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Base64Converter = memo(() => {
    const { t } = useTranslation();
    const [encodeInput, setEncodeInput] = useState('');
    const [encodeOutput, setEncodeOutput] = useState('');
    const [decodeInput, setDecodeInput] = useState('');
    const [decodeOutput, setDecodeOutput] = useState('');

    const handleEncode = useCallback(() => {
        if (!encodeInput.trim()) {
            setEncodeOutput('');
            return;
        }
        try {
            const encoded = btoa(encodeInput);
            setEncodeOutput(encoded);
        } catch {
            setEncodeOutput('Error: Invalid input');
        }
    }, [encodeInput]);

    const handleDecode = useCallback(() => {
        if (!decodeInput.trim()) {
            setDecodeOutput('');
            return;
        }
        try {
            const decoded = atob(decodeInput);
            setDecodeOutput(decoded);
        } catch {
            setDecodeOutput('Error: Invalid Base64 string');
        }
    }, [decodeInput]);

    const handleEncodeInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEncodeInput(e.target.value);
    }, []);

    const handleDecodeInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDecodeInput(e.target.value);
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg 
            shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] p-8 transition-all 
            duration-200 border border-gray-200/50 dark:border-gray-700/50 relative">
                <a
                    href="https://en.wikipedia.org/wiki/Base64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center 
                    rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                     text-white transition-colors duration-200 shadow-md font-bold text-sm md:text-lg"
                    aria-label="What is Base64?"
                    title="What is Base64?"
                >
                    ?
                </a>
                <div className="mb-8">
                    <Logo />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="encode-input" className="block text-sm font-medium text-gray-600 
                            dark:text-gray-300">
                                {t('encode.inputLabel')}
                            </label>
                            <textarea
                                id="encode-input"
                                value={encodeInput}
                                onChange={handleEncodeInputChange}
                                className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none 
                                font-mono text-sm transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                placeholder={t('encode.inputPlaceholder')}
                            />
                            <button
                                type="button"
                                onClick={handleEncode}
                                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                                text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                            >
                                {t('encode.button')}
                            </button>
                            <label htmlFor="encode-output" className="block text-sm font-medium text-gray-600 
                            dark:text-gray-300 pt-2">
                                {t('encode.outputLabel')}
                            </label>
                            <textarea
                                id="encode-output"
                                value={encodeOutput}
                                className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-gray-50 dark:bg-gray-900 resize-none text-gray-900 dark:text-gray-100 outline-none"
                                placeholder={t('encode.outputPlaceholder')}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="decode-input" className="block text-sm font-medium text-gray-600 
                            dark:text-gray-300">
                                {t('decode.inputLabel')}
                            </label>
                            <textarea
                                id="decode-input"
                                value={decodeInput}
                                onChange={handleDecodeInputChange}
                                className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none font-mono 
                                text-sm transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                placeholder={t('decode.inputPlaceholder')}
                            />
                            <button
                                type="button"
                                onClick={handleDecode}
                                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 
                                text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                            >
                                {t('decode.button')}
                            </button>
                            <label htmlFor="decode-output" className="block text-sm font-medium text-gray-600 
                            dark:text-gray-300 pt-2">
                                {t('decode.outputLabel')}
                            </label>
                            <textarea
                                id="decode-output"
                                value={decodeOutput}
                                className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-gray-50 dark:bg-gray-900 resize-none text-gray-900 dark:text-gray-100 outline-none"
                                placeholder={t('decode.outputPlaceholder')}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

Base64Converter.displayName = 'Base64Converter';

export default Base64Converter;
