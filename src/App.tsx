import { useState, useEffect } from 'react'
import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import FeatureGrid from './components/home/FeatureGrid'
import HowItWorks from './components/home/HowItWorks'
import CtaBanner from './components/home/CtaBanner'
import DownloadModal from './components/home/DownloadModal'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Support from './components/Support'
import SecurityInfo from './components/SecurityInfo'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'support' | 'security'>('home');

  useEffect(() => {
    const pathToView = (path: string): typeof currentView => {
      switch (path) {
        case '/privacy': return 'privacy';
        case '/terms': return 'terms';
        case '/support': return 'support';
        case '/security': return 'security';
        default: return 'home';
      }
    };

    // Compat: enlaces viejos con hash (#privacy) → ruta limpia (/privacy)
    const legacyHash: Record<string, string> = {
      '#privacy': '/privacy', '#terms': '/terms',
      '#support': '/support', '#security': '/security',
    };

    const resolve = () => {
      const mapped = legacyHash[window.location.hash];
      if (mapped) window.history.replaceState(null, '', mapped);
      setCurrentView(pathToView(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    resolve();
    window.addEventListener('popstate', resolve);

    // Navegación SPA: interceptar clicks en enlaces internos (href="/...").
    // Los anchors de scroll (#features, #how-it-works) empiezan con '#' y se ignoran.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const anchor = (e.target as HTMLElement).closest('a');
      const href = anchor?.getAttribute('href');
      if (!anchor || !href || !href.startsWith('/') || anchor.target === '_blank') return;
      e.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState(null, '', href);
        setCurrentView(pathToView(href));
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('popstate', resolve);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="relative bg-background text-on-surface overflow-x-hidden min-h-screen">
      {/* Global ambient mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none" />

      <div className="relative">
        <TopNavBar onDownloadClick={() => setIsModalOpen(true)} />

        <main className="pt-20">
          {currentView === 'privacy' && <PrivacyPolicy />}
          {currentView === 'terms' && <TermsOfService />}
          {currentView === 'support' && <Support />}
          {currentView === 'security' && <SecurityInfo />}
          {currentView === 'home' && (
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
