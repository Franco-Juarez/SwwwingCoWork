import './App.css'
import AboutUsSection from './components/AboutUsSection'
import BlogSection from './components/BlogSection'
import CallToActionSection from './components/CallToAction'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import PropertiesSection from './components/PropertiesSection'

function App() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutUsSection />
      <PropertiesSection />
      <BlogSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default App
