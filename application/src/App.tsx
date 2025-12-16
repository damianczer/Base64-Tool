import { lazy, memo, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './hooks/useTheme';

const Base64Converter = lazy(() => import('./components/Base64Converter'));
const Footer = lazy(() => import('./components/Footer'));
const LanguageToggle = lazy(() => import('./components/LanguageToggle'));
const ThemeToggle = lazy(() => import('./components/ThemeToggle'));
const ThemeTransition = lazy(() => import('./components/ThemeTransition'));

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppContent = memo(() => {
  const { isChanging } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-slate-800 dark:bg-slate-950" />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gray-50 dark:bg-gray-900" />
        <svg className="absolute left-0 w-full" style={{ top: '40%', transform: 'translateY(-50%)', height: '80px' }}
          viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 L200,15 L400,55 L600,20 L800,50 L1000,18 L1200,45 L1200,80 L0,80 Z"
            fill="currentColor"
            className="text-gray-50 dark:text-gray-900" />
        </svg>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <ThemeTransition isChanging={isChanging} />
        <div className="hidden md:block">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <main className="flex-grow flex items-center justify-center pt-4 pb-4 md:pt-16 md:pb-4 relative z-10">
          <Base64Converter />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
});

AppContent.displayName = 'AppContent';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
