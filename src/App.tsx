import { useState, useEffect, useRef } from 'react';
import Header from './pages/Header';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';

export default function App() {
  const [isDone, setIsDone] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', !isDone);
    if (isDone) {
      // Delay fade-in slightly for smoother transition
      setTimeout(() => setBodyVisible(true), 300);
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isDone]);

  const handleScrollToBody = () => {
    bodyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f5f0eb]">
      <Header
        onComplete={() => setIsDone(true)}
        isDone={isDone}
        onScrollToBody={handleScrollToBody}
      />

      <div
        ref={bodyRef}
        className={`transition-opacity duration-700 ease-in ${
          bodyVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Gallery />
      </div>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
        .animate-bounce-arrow { animation: bounce 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}