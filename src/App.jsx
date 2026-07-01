import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import About from './components/About'
import Reviews from './components/Reviews'
import Internship from './components/Internship'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCallButton from './components/FloatingCallButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <About />
        <Reviews />
        <Internship />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
