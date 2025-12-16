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
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<LoadingFallback />}>
        <ThemeTransition isChanging={isChanging} />
        <ThemeToggle />
        <LanguageToggle />
        <main className="flex-grow flex items-center justify-center py-12">
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
