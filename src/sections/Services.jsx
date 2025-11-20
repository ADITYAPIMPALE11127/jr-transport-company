import React from 'react'

const Services = () => {
  const services = [
    {
      icon: "📦",
      title: "Heavy Size Consignment",
      desc: "Expert handling of Over-Dimension & Over-Weight cargo with hydraulic modular trailers, low-bed/high-bed trailers up to 1500 MT capacity.",
      features: ["Route survey & feasibility study", "Police escorts & permissions", "Hydraulic axle configurations", "Real-time tracking"]
    },
    {
      icon: "🇮🇳",
      title: "PAN India Transportation",
      desc: "Seamless door-to-door transportation across all states & union territories with dedicated fleet and established network partners.",
      features: ["800+ owned & attached vehicles", "Coverage in 28 states & 7 UTs", "24x7 control room", "Multi-modal options"]
    },
    {
      icon: "⚙️",
      title: "Project Logistics",
      desc: "Complete turnkey solutions for industrial projects - power plants, refineries, wind mills, steel plants & infrastructure projects.",
      features: ["Site survey & planning", "Heavy lift cranes & equipment", "Customized loading/unloading", "On-site supervision"]
    },
    {
      icon: "🔧",
      title: "Specialized Cargo Handling",
      desc: "Professional lashing, chaining, packing & securing of abnormal loads using certified material and experienced riggers.",
      features: ["Certified rigging team", "International standard lashing", "Load distribution calculation", "Insurance coverage"]
    },
    {
      icon: "📱",
      title: "Technology-Driven Solutions",
      desc: "GPS-enabled real-time tracking, digital documentation, online quotation system & dedicated customer portal.",
      features: ["Live vehicle tracking", "Instant quote generation", "Digital POD delivery", "WhatsApp updates"]
    },
  ]

  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
          fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
          fontWeight: 800,
          color: 'var(--primary-dark)',
          marginBottom: '24px'
        }}>
          Our Comprehensive Services
        </h2>
        <p style={{ fontSize: '1.3rem', color: 'var(--gray)', maxWidth: '900px', margin: '0 auto' }}>
          End-to-end heavy transport solutions backed by experience, technology and a commitment to safety
        </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '50px',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column',
                [index % 2 === 1 ? 'marginLeft' : 'marginRight']: 'auto',
                maxWidth: '900px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)'
                e.currentTarget.style.boxShadow = '0 35px 80px rgba(0,48,135,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                minHeight: '320px',
              }}>
                {/* Icon Side */}
                <div style={{
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  width: '180px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                }}>
                  {service.icon}
                </div>

                {/* Content Side */}
                <div style={{ padding: '50px 50px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--primary-dark)',
                    marginBottom: '20px'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '1.15rem',
                    color: 'var(--gray)',
                    lineHeight: '1.7',
                    marginBottom: '30px'
                  }}>
                    {service.desc}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '1rem',
                        color: 'var(--dark)',
                        position: 'relative',
                        paddingLeft: '28px',
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '2px',
                          color: 'var(--secondary)',
                          fontSize: '1.2rem'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services