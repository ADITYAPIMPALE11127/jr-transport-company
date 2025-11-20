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
    <section id="solutions" style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--primary-dark)',
            marginBottom: '24px'
          }}>
            Our Specialized Transport Solutions
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--gray)', maxWidth: '900px', margin: '0 auto' }}>
            We handle the most challenging heavy cargo movements with precision, safety, and cutting-edge equipment
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '40px',
          marginTop: '40px'
        }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '50px 40px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                transition: 'var(--transition)',
                cursor: 'default',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-20px) scale(1.03)'
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,48,135,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                fontSize: '5rem',
                marginBottom: '30px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {solution.icon}
              </div>

              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                marginBottom: '20px'
              }}>
                {solution.title}
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: 'var(--gray)',
                lineHeight: '1.7'
              }}>
                {solution.desc}
              </p>

              {/* Subtle gradient line */}
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                margin: '30px auto 0',
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