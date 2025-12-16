import Base64Converter from './components/Base64Converter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12">
        <Base64Converter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
