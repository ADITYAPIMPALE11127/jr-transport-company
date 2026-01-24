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
import { useLocation } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('Location state:', location.state);

    if (location.state?.scrollTo && !isLoading) {
      console.log('Scrolling to:', location.state.scrollTo);

      setTimeout(() => {
        const sectionId = location.state.scrollTo;
        const section = document.getElementById(sectionId);

        if (section) {
          console.log('Section found:', section);

          const navbarHeight = 80;
          const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });

          section.style.transition = 'box-shadow 0.5s ease';
          section.style.boxShadow = '0 0 0 3px #d32f2f';
          setTimeout(() => {
            section.style.boxShadow = 'none';
          }, 1500);
        } else {
          console.log('Section NOT found:', sectionId);
        }

        window.history.replaceState({}, document.title);
      }, 1000);
    }
  }, [location.state, isLoading]);

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