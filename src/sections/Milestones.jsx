import React, { useEffect, useRef, useState } from 'react'
import './MilestonesResponsive.css'

const Milestones = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0
  })

  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const animateCounter = (target, key) => {
            let count = 0
            const increment = target / 50
            const timer = setInterval(() => {
              count += increment
              if (count >= target) {
                setCounters(prev => ({ ...prev, [key]: target }))
                clearInterval(timer)
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.ceil(count) }))
              }
            }, 40)
          }

          animateCounter(6, 'years')
          animateCounter(250, 'clients')
          animateCounter(1800, 'projects')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const timelineData = [
    { year: "2019", title: "Company Founded", desc: "JR Transport started operations from Pune" },
    { year: "2020", title: "PAN India Expansion", desc: "Network expanded to 20+ states" },
    { year: "2021", title: "Heavy ODC Division", desc: "Specialized Over-Dimension Cargo fleet launched" },
    { year: "2023", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification" },
    { year: "2024", title: "250+ Clients", desc: "Trusted by industry leaders across India" },
    { year: "2025", title: "1800+ Projects", desc: "Successfully completed nationwide" },
  ]

  return (
    <section id="milestones" ref={sectionRef} style={{
      padding: 'clamp(60px, 10vw, 100px) 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: 'var(--primary-dark)',
            marginBottom: '20px'
          }}>
            Our Journey Since 2019
          </h2>
          <p style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            From a single truck to becoming India's trusted heavy transport partner
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(25px, 5vw, 40px)',
          marginBottom: 'clamp(60px, 10vw, 100px)',
        }}>
          {[
            { number: counters.years, label: "Years of Excellence", suffix: "+" },
            { number: counters.clients, label: "Happy Clients", suffix: "+" },
            { number: counters.projects, label: "Projects Completed", suffix: "+" },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: 'clamp(30px, 5vw, 40px) clamp(15px, 3vw, 20px)',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
              transform: hasAnimated.current ? 'translateY(0)' : 'translateY(30px)',
              opacity: hasAnimated.current ? 1 : 0,
              transition: `all 0.8s ease ${i * 0.2}s`
            }}>
              <h3 style={{
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {item.number}{item.suffix}
              </h3>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: 'var(--gray)', fontWeight: 500 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="timeline-section">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-card">
                <h4>{item.year}</h4>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Milestones
