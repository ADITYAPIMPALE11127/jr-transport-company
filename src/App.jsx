import Navbar from './components/Navbar'
import Milestones from './sections/Milestones'
import Solutions from './sections/Solutions'
import Services from './sections/Services'
import Clients from './sections/Clients'
import About from './sections/About'
import Footer from './components/Footer'
import HeroEnquirySplit from './sections/HeroEnquirySplit'
function App() {
  return (
    <>
      <Navbar />
      <HeroEnquirySplit />
      <Milestones />
      <Solutions />
      <Services />
      <Clients />
      <About />

      <Footer />
    </>
  )
}

export default App