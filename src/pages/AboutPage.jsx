import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './AboutPage.css'

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slidesData = [
    {
      id: 1,
      title: "Built on Two Decades of Trust",
      isFounderSlide: true,
      founders: [
        { name: "Mr. Rashid Kamate", image: "/assets/co-fon-1.jpeg",designation:"Founder" },
        { name: "Mr. Kadar Vali Kokane", image: "/assets/co-fon-2.jpeg",designation:'Managing Director' }
      ],
      content: [
        "Founded in 2020 (Registered under MSME – UDYAM-MH-26-0208706",
        "Started operations in 2019 with 20+ years of legacy experience",
        "Professional, relationship-driven approach with PAN India reach",
        "Head Office: Akurdi, Pune | Hubs: Chakan & Bhosari"
      ]
    },
    {
      id: 2,
      title: "Heavy & ODC Transport Experts",
      image: "/assets/hero-bg-4.jpg",
      content: [
        "Loads up to 130 tons capacity",
        "Dimensions: 22H × 24W × 120L ft",
        "Specialized in Sugar plants, EOT cranes",
        "PAN-India with strong coverage in South Region"
      ]
    },
    {
      id: 3,
      title: "Our Diverse Fleet",
      image: "/assets/transport-fleet.png",
      content: [
        "15+ owned trucks & trailers",
        "150+ vehicle partner network",
        "Commercial Trucks (14ft to 22ft LPT Series)",
        "Heavy-duty trailers: HBT, SLBT, LBT",
        "Multi-axle pullers for extreme ODC loads",
        "Pickup vehicles for small consignments"
      ]
    },
    {
      id: 4,
      title: "Industries We Serve",
      image: "/assets/hero-bg-6.jpeg",
      content: [
        "Sugar Equipment & Distillery Plants",
        "Boilers & Heat Exchanges",
        "Power Energy & Generators",
        "Automobile OEM & Components",
        "Food, Pharma & Chemical Plants",
        "Material Handling Cranes (EOT, Gantry)",
        "Infrastructure & Construction Equipment",
        "Industrial Furnaces & Heat-treatment"
      ]
    },
    {
      id: 5,
      title: "Our Commitment to Excellence",
      image: "/assets/hero-bg-7.jpeg",
      content: [
        "24×7 operations & emergency support",
        "GPS tracking & live shipment updates",
        "Proper lashing, tarpaulin & escort vehicles for ODC",
        "Trained workforce & damage-free handling",
        "Transparent communication & timely deliveries",
        "Customized solutions for every industry need"
      ]
    },
    {
      id: 6,
      title: "Connect With Our Team",
      image: "/assets/hero-bg-8.jpg",
      content: [
        "Emergency: +91 9766958932 / +91 9766630480",
        "24/7 Support: +91 9022201892 / +91 9890371038",
        "Email: info@jrtransportcompany.com",
        "Office Hours: 9 AM – 7 PM | Operations: 24/7",
        "PAN India Transport Services"
      ]
    }
  ]

  const handleNavigation = (sectionId) => {
    console.log(`Navigating to: ${sectionId}`);
    navigate('/', { 
      state: { scrollTo: sectionId }
    });
  };

  return (
    <div className="about-page">
      <Navbar />
      
      <div style={{marginTop:100}}></div>

      <div className="container">
        <div className="slideshow-section">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="about-swiper"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content">
                  <div className="slide-image-container">
                    {slide.isFounderSlide ? (
                      <div className="founders-left-container">
                        <div className="founders-left-grid">
                          {slide.founders.map((founder, index) => (
                            <div key={index} className="founder-left-card">
                              <img 
                                src={founder.image} 
                                alt={founder.name}
                                className="founder-left-image"
                                onError={(e) => {
                                  e.target.src = '/assets/placeholder-profile.jpg'
                                }}
                              />
                              <div className="founder-left-info">
                                <p className="founder-left-name">{founder.name}</p>
                                <p className="founder-left-title">{founder.designation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="founders-left-quote">
                          <p>"Building trust through reliable transportation for over two decades"</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className={`slide-image ${slide.id === 4 ? 'slide-image-contain' : ''} ${slide.id === 6 ? 'slide-image-narrow' : ''}`}
                          onError={(e) => {
                            e.target.src = '/assets/placeholder-transport.jpg'
                          }}
                        />
                        <div className="image-overlay"></div>
                      </>
                    )}
                  </div>

                  <div className="slide-text">
                    <h2>{slide.title}</h2>
                    <ul className="slide-list">
                      {slide.content.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                    {!slide.isFounderSlide && slide.id === 3 && (
                      <div className="fleet-highlight">
                        <p><strong>Fleet Types:</strong> LPT Trucks • Pickup Vehicles • JCB Trucks • Trailers • Puller Vehicles</p>
                      </div>
                    )}
                    
                    {!slide.isFounderSlide && slide.id === 6 && (
                      <div className="contact-actions">
                        <button 
                          onClick={() => handleNavigation('footer')}
                          className="contact-btn"
                        >
                          Get Instant Quote
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="quick-stats">
          <div className="stat-card">
            <h3>20+</h3>
            <p>Years of Legacy</p>
          </div>
          <div className="stat-card">
            <h3>130T</h3>
            <p>Load Capacity</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Client Network</p>
          </div>
          <div className="stat-card">
            <h3 className="small-text">PAN India</h3>
            <p>Operations</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>

        <div className="about-cta">
          <h2>Need to Transport Heavy Industrial Equipment?</h2>
          <p>Get a personalized quote from our heavy transport experts.</p>
          <div className="cta-buttons">
            <button 
              onClick={() => handleNavigation('services-section')}
              className="btn-secondary"
            >
              View Our Services
            </button>
            <button 
              onClick={() => handleNavigation('clients-section')}
              className="btn-secondary"
            >
              Our Clients
            </button>
          </div>
          <p className="cta-note" style={{transform: 'translateY(10px)'}}>
            Office: 9 AM – 7 PM | Transport Operations: 24/7
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage