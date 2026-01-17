import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Milestones from './sections/Milestones'
import Solutions from './sections/Solutions'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroEnquirySplit from './sections/HeroEnquirySplit'
// Remove About import since it's now a separate page

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds to allow content to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <HeroEnquirySplit />
      <Milestones />
      <Solutions />
      <Services />
      <Clients />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
