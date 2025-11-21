import Navbar from './components/Navbar'
import Milestones from './sections/Milestones'
import Solutions from './sections/Solutions'
import Services from './sections/Services'
import Clients from './sections/Clients'
import About from './sections/About'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroEnquirySplit from './sections/HeroEnquirySplit'

function App() {
  return (
    <>
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

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Contact → Footer */}
      <div id="footer">
        <Footer />
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
