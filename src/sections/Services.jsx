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
    <section id="services" style={{
      padding: 'clamp(60px, 10vw, 120px) 0',
      background: 'var(--light)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--primary-dark)',
            marginBottom: '24px',
            padding: '0 15px'
          }}>
            Our Comprehensive Services
          </h2>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
            color: 'var(--gray)',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            End-to-end heavy transport solutions backed by experience, technology and a commitment to safety
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(35px, 6vw, 50px)',
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
                maxWidth: '900px',
                width: '100%',
                margin: index % 2 === 1 ? '0 0 0 auto' : '0 auto 0 0'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-15px)'
                  e.currentTarget.style.boxShadow = '0 35px 80px rgba(0,48,135,0.25)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                alignItems: 'stretch',
                minHeight: window.innerWidth > 768 ? '320px' : 'auto',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  width: window.innerWidth > 768 ? '180px' : '100%',
                  height: window.innerWidth <= 768 ? '140px' : 'auto',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                }}>
                  {service.icon}
                </div>

                <div style={{
                  padding: 'clamp(30px, 5vw, 50px)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--primary-dark)',
                    marginBottom: 'clamp(15px, 3vw, 20px)'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    color: 'var(--gray)',
                    lineHeight: '1.7',
                    marginBottom: 'clamp(20px, 4vw, 30px)'
                  }}>
                    {service.desc}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 600 ? 'repeat(2, 1fr)' : '1fr',
                    gap: '12px',
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
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
