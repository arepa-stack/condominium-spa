import { useState, useEffect } from 'react'
import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import FeatureGrid from './components/home/FeatureGrid'
import HowItWorks from './components/home/HowItWorks'
import CtaBanner from './components/home/CtaBanner'
import DownloadModal from './components/home/DownloadModal'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setCurrentView('home');
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative bg-background text-on-surface overflow-x-hidden min-h-screen">
      {/* Global ambient mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none" />

      <div className="relative">
        <TopNavBar onDownloadClick={() => setIsModalOpen(true)} />

        <main className="pt-20">
          {currentView === 'privacy' ? (
            <PrivacyPolicy />
          ) : (
            <>
              <HeroSection onDownloadClick={() => setIsModalOpen(true)} />
              <FeatureGrid />
              <HowItWorks />
              <CtaBanner onDownloadClick={() => setIsModalOpen(true)} />
            </>
          )}
        </main>

        <Footer />
      </div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
