import React from 'react'
import './About.css'
import fleetImage from "../../public/assets/transport-fleet.png";// Adjust path based on your folder structure

const About = () => {
  const values = ["Safety First", "On-Time Delivery", "Customer Satisfaction", "Team Work", "Integrity", "Continuous Improvement"]

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Company Story + Image Split */}
        <div className="about-story-grid">
          <div className="about-story-content">
            <h2>Built on Trust, Driven by Excellence</h2>
            <p className="about-story-text">
              Founded in 2019 in Pune, Maharashtra, JR Transport Company has rapidly grown to become one of India's most reliable heavy and over-dimensional cargo specialists.
            </p>
            <p className="about-story-text-small">
              Starting with just 5 trailers, we now operate a fleet of over 800 vehicles including hydraulic modular trailers, low-bed/high-bed trailers, and specialized heavy-lift equipment. Our commitment to safety, punctuality, and customer satisfaction has earned us the trust of India's biggest infrastructure giants.
            </p>
          </div>

          <div className="about-image-container">
<img src={fleetImage} alt="JR Transport Fleet" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="about-vision-mission-grid">
          <div className="vision-mission-card">
            <h3>Our Vision</h3>
            <p>
             To be the most reliable and
 innovative transportation and
 logistics partner, seamlessly
 connecting businesses across India
 and becoming the preferred choice
 for businesses seeking efficient,
 cost-effective, and sustainable
 transportation solutions.
            </p>
          </div>

          <div className="vision-mission-card">
            <h3>Our Mission</h3>
            <p>
             Provide safe, timely, and cost
effective transportation services
 that exceed customer expectations
 and build long-term partnerships
 with our clients by delivering
 consistent, reliable, and sustainable
 transportation services.
            </p>
          </div>
        </div>



      </div>
    </section>
  )
}

export default About