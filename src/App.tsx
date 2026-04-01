import React, { useState } from 'react'
import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import FeatureGrid from './components/home/FeatureGrid'
import DownloadModal from './components/home/DownloadModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-fixed overflow-x-hidden min-h-screen">
      <TopNavBar onDownloadClick={handleDownloadClick} />
      <main className="relative pt-32 pb-20 kinetic-bg">
        <HeroSection onDownloadClick={handleDownloadClick} />
        <FeatureGrid />
      </main>
      <Footer />
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
