import { useState } from 'react'
import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import FeatureGrid from './components/home/FeatureGrid'
import HowItWorks from './components/home/HowItWorks'
import CtaBanner from './components/home/CtaBanner'
import DownloadModal from './components/home/DownloadModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-background text-on-surface overflow-x-hidden min-h-screen">
      {/* Global ambient mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none" />

      <div className="relative">
        <TopNavBar onDownloadClick={() => setIsModalOpen(true)} />

        <main className="pt-20">
          <HeroSection onDownloadClick={() => setIsModalOpen(true)} />
          <FeatureGrid />
          <HowItWorks />
          <CtaBanner onDownloadClick={() => setIsModalOpen(true)} />
        </main>

        <Footer />
      </div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
