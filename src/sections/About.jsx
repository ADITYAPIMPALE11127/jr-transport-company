import React from 'react'
import './About.css'
import transportFleetImage from '../../public/assets/trasnport Fleet.png' // Adjust path based on your folder structure

const About = () => {
  const principles = [
    { s: "Seiri (Sort)", desc: "Remove unnecessary items from workplace", color: "#e74c3c" },
    { s: "Seiton (Set in Order)", desc: "Arrange tools & equipment efficiently", color: "#f39c12" },
    { s: "Seiso (Shine)", desc: "Keep workplace clean and tidy daily", color: "#27ae60" },
    { s: "Seiketsu (Standardize)", desc: "Maintain and monitor first three categories", color: "#2980b9" },
    { s: "Shitsuke (Sustain)", desc: "Discipline to follow established procedures", color: "#8e44ad" }
  ]

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
            <img 
              src={transportFleetImage}
              alt="JR Transport Fleet"
              className="about-image"
            />
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

        {/* 5S Principles */}
        <div className="about-principles">
          <h2>We Follow Japanese 5S Methodology</h2>

          <div className="about-principles-grid">
            {principles.map((item, i) => (
              <div 
                key={i} 
                className="principle-card"
                style={{ borderTopColor: item.color }}
              >
                <h4 style={{ color: item.color }}>
                  {item.s}
                </h4>
                <p>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About