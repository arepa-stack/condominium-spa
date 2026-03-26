import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import FeatureGrid from './components/home/FeatureGrid'

function App() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-fixed overflow-x-hidden min-h-screen">
      <TopNavBar />
      <main className="relative pt-32 pb-20 kinetic-bg">
        <HeroSection />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
