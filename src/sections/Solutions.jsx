import React from 'react'
import { Factory, Truck, Ship, Package, Ruler, Scale } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: <Factory />,
      title: "Industrial Projects Transport",
      desc: "End-to-end logistics for complete industrial projects including plant relocation & heavy machinery shifting across India"
    },
    {
      icon: <Truck />,
      title: "Heavy Equipment Logistics",
      desc: "Safe & timely transportation of construction machinery, cranes, excavators, and oversized equipment PAN India"
    },
    {
      icon: <Ship />,
      title: "Container Transportation",
      desc: "Full container load (FCL) & less than container load (LCL) services with door-to-door delivery nationwide"
    },
    {
      icon: <Package />,
      title: "Bulk Cargo Solutions",
      desc: "Specialized handling of bulk commodities - cement, steel, grains, chemicals with dedicated fleet"
    },
    {
      icon: <Ruler />,
      title: "Over-Dimension Cargo",
      desc: "Expertise in moving ODC consignments up to 60m length, 8m width & 1000+ MT with route surveys & escorts"
    },
    {
      icon: <Scale />,
      title: "Over-Weight Consignments",
      desc: "Hydraulic axle trailers & specialized equipment for super heavy lifts up to 1500 MT single unit"
    },
  ]

  return (
    <section 
      id="solutions" 
      aria-label="Our Specialized Transport Solutions"
      style={{
        padding: 'clamp(4rem, 8vw, 7.5rem) clamp(1rem, 5vw, 2rem)',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 'clamp(200px, 40vw, 500px)',
        height: 'clamp(200px, 40vw, 500px)',
        background: 'radial-gradient(circle, rgba(0, 100, 235, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: 'translate(30%, -30%)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 'clamp(150px, 30vw, 400px)',
        height: 'clamp(150px, 30vw, 400px)',
        background: 'radial-gradient(circle, rgba(255, 140, 0, 0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: 'translate(-30%, 30%)',
        zIndex: 0
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <header style={{ 
          textAlign: 'center', 
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          padding: '0 clamp(1rem, 3vw, 2rem)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(0, 100, 235, 0.08)',
            borderRadius: '50px',
            color: 'var(--primary)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              background: 'var(--primary)',
              borderRadius: '50%'
            }} />
            Our Expertise
            <span style={{
              width: '6px',
              height: '6px',
              background: 'var(--primary)',
              borderRadius: '50%'
            }} />
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: '#1A1F36',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.5px'
          }}>
            <span style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, #0052CC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Specialized Transport
            </span>
            <br />
            Solutions
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#4A5568',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            We handle the most challenging heavy cargo movements with precision, safety, and cutting-edge equipment
          </p>
        </header>

        {/* Solutions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          padding: '0 clamp(0.5rem, 2vw, 1rem)'
        }}>
          {solutions.map((solution, index) => (
            <article
              key={index}
              aria-label={solution.title}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 48, 135, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(0, 100, 235, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
              }}
              onTouchStart={(e) => {
                if (window.innerWidth <= 768) {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }
              }}
              onTouchEnd={(e) => {
                if (window.innerWidth <= 768) {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {/* Hover effect overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s ease',
                zIndex: 2
              }} 
              className="solution-hover-bar"
              />
              
              {/* Icon container */}
              <div style={{
                width: 'clamp(5rem, 10vw, 6rem)',
                height: 'clamp(5rem, 10vw, 6rem)',
                background: 'linear-gradient(135deg, rgba(0, 100, 235, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                transition: 'all 0.3s ease'
              }}>
                {solution.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: '#1A1F36',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                lineHeight: 1.4
              }}>
                {solution.title}
              </h3>

              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.0625rem)',
                color: '#4A5568',
                lineHeight: 1.7,
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                opacity: 0.9
              }}>
                {solution.desc}
              </p>

              {/* Learn more link */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                opacity: 0,
                transform: 'translateY(10px)',
                transition: 'all 0.3s ease'
              }}
              className="learn-more-link"
              >
                <span>Learn more</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transition: 'transform 0.3s ease' }}
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Add CSS for hover effects */}
              <style jsx>{`
                article:hover .solution-hover-bar {
                  transform: scaleX(1);
                }
                article:hover .learn-more-link {
                  opacity: 1;
                  transform: translateY(0);
                }
                article:hover div[style*="background: linear-gradient"] {
                  transform: scale(1.05);
                  box-shadow: 0 10px 25px rgba(0, 100, 235, 0.15);
                }
                article:hover .learn-more-link svg {
                  transform: translateX(4px);
                }
              `}</style>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(3rem, 6vw, 5rem)',
          padding: '0 1rem'
        }}>
          <button
            aria-label="Get a free quote for your transport needs"
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, #0052CC 100%)',
              color: 'white',
              border: 'none',
              padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontWeight: 600,
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 100, 235, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 100, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 100, 235, 0.3)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              Get Your Free Quote Now
            </span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              transition: 'left 0.6s ease'
            }}
            className="button-shine"
            />
          </button>
          
          <p style={{
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            color: '#718096',
            opacity: 0.8
          }}>
            Trusted by 500+ industrial clients across India
          </p>
        </div>
      </div>

      {/* Add shine effect on button hover */}
      <style jsx>{`
        button:hover .button-shine {
          left: 100%;
        }
        
        @media (max-width: 768px) {
          section {
            padding: 3rem 1rem;
          }
          
          article {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04) !important;
          }
          
          button {
            width: 100%;
            max-width: 320px;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Solutions