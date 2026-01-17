import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Milestones from './sections/Milestones'
import Solutions from './sections/Solutions'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroEnquirySplit from './sections/HeroEnquirySplit'
// Remove About import since it's now a separate page

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const section = document.getElementById(id);
      if (section) {
        const offset = 100; // navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Home Section */}
      <div id="hero-section">
        <HeroEnquirySplit />
      </div>

      <Milestones />
      <Solutions />

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* Clients Section */}
      <div id="clients">
        <Clients />
      </div>

      {/* About Section REMOVED - Now accessible via /about route */}

      {/* Contact → Footer */}
      <div id="footer" style={{ marginTop: 'auto' }}>
        <Footer />
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}

export default App