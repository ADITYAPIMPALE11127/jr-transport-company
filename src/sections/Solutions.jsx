import React from 'react'

const Solutions = () => {
  const solutions = [
    {
      icon: "🏭",
      title: "Industrial Projects Transport",
      desc: "End-to-end logistics for complete industrial projects including plant relocation & heavy machinery shifting across India"
    },
    {
      icon: "🚜",
      title: "Heavy Equipment Logistics",
      desc: "Safe & timely transportation of construction machinery, cranes, excavators, and oversized equipment PAN India"
    },
    {
      icon: "🛳️",
      title: "Container Transportation",
      desc: "Full container load (FCL) & less than container load (LCL) services with door-to-door delivery nationwide"
    },
    {
      icon: "📦",
      title: "Bulk Cargo Solutions",
      desc: "Specialized handling of bulk commodities - cement, steel, grains, chemicals with dedicated fleet"
    },
    {
      icon: "📏",
      title: "Over-Dimension Cargo",
      desc: "Expertise in moving ODC consignments up to 60m length, 8m width & 1000+ MT with route surveys & escorts"
    },
    {
      icon: "⚖️",
      title: "Over-Weight Consignments",
      desc: "Hydraulic axle trailers & specialized equipment for super heavy lifts up to 1500 MT single unit"
    },
  ]

  return (
    <section id="solutions" style={{
      padding: 'clamp(60px, 10vw, 120px) 0',
      background: 'white'
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
            Our Specialized Transport Solutions
          </h2>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
            color: 'var(--gray)',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            We handle the most challenging heavy cargo movements with precision, safety, and cutting-edge equipment
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(30px, 5vw, 40px)',
          marginTop: '40px'
        }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: 'clamp(35px, 6vw, 50px) clamp(25px, 5vw, 40px)',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                transition: 'var(--transition)',
                cursor: 'default',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-20px) scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,48,135,0.25)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                marginBottom: 'clamp(20px, 4vw, 30px)',
                height: 'clamp(80px, 15vw, 120px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {solution.icon}
              </div>

              <h3 style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                marginBottom: 'clamp(15px, 3vw, 20px)'
              }}>
                {solution.title}
              </h3>

              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: 'var(--gray)',
                lineHeight: '1.7'
              }}>
                {solution.desc}
              </p>

              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                margin: 'clamp(20px, 4vw, 30px) auto 0',
                borderRadius: '2px'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
