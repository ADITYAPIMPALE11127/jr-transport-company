import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      image: "/assets/solutions/c1.png",
      title: "Industrial Projects Transport",
      desc: "End-to-end logistics for complete industrial projects including plant relocation & heavy machinery shifting across India"
    },
    {
      image: "/assets/solutions/c2.png",
      title: "Heavy Equipment Logistics",
      desc: "Safe & timely transportation of construction machinery, cranes, excavators, and heavy equipment PAN India"
    },
       {
      image: "/assets/solutions/c3.png",
      title: "Over-Dimension Cargo",
      desc: "Expertise in moving ODC consignments up to 45m length, 8m width & 100 MT with route surveys & escorts"
    },
    {
      image: "/assets/solutions/c4.jpg",
      title: "Container Transportation",
      desc: "Full container load (FCL) & less than container load (LCL) services with door-to-door delivery nationwide"
    },
 
    {
      image: "/assets/hero-bg-9.jpg.jpeg",
      title: "Over-Weight Consignments",
      desc: "Hydraulic axle trailers & specialized equipment for super heavy lifts up to 150 MT single unit"
    },
  ];

  return (
    <div className="solutions-container">
      <div className="solutions-header">
        <h2 className="solutions-title">Our Logistics Solutions</h2>
        <p className="solutions-subtitle">Comprehensive transport solutions for all your industrial needs</p>
      </div>
      
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <div className="solution-image-container">
              <img
                src={solution.image}
                alt={solution.title}
                className="solution-image"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/1a237e/ffffff?text=${encodeURIComponent(solution.title)}`;
                }}
              />
              <div className="image-overlay"></div>
            </div>

            <div className="solution-content">
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-desc">{solution.desc}</p>
            </div>

          </div>
        ))}
      </div>

      <div className="solutions-cta">
        <button
          className="solutions-button"
          onClick={() => {
            const heroSection = document.getElementById('hero-split');
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Solutions;