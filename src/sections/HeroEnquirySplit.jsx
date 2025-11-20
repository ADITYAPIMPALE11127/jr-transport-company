import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const HeroEnquirySplit = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('') // success or error
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'message') setCharCount(value.length)
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    // ==== REPLACE THESE WITH YOUR REAL EMAILJS KEYS LATER ====
    const SERVICE_ID = "service_yourid"
    const TEMPLATE_ID = "template_yourid"
    const PUBLIC_KEY = "your_public_key"

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', company: '', phone: '', message: '' })
        setCharCount(0)
      })
      .catch(() => setStatus('error'))
      .finally(() => {
        setLoading(false)
        setTimeout(() => setStatus(''), 5000)
      })
  }

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: `linear-gradient(135deg, rgba(0,48,135,0.9) 0%, rgba(0,20,60,0.95) 100%),
                     url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&q=85&w=2200') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
      }} />

      {/* Split Grid */}
      <div className="container" style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* LEFT: Hero Content */}
        <div style={{
          color: 'white',
          padding: '40px 20px',
          maxWidth: '700px',
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            India's Premier Heavy Transport Specialists
          </h1>
          <p style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            marginBottom: '3rem',
            opacity: 0.95,
          }}>
            PAN India Over-Dimension & Over-Weight Cargo Solutions Since 2019
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: '#00a3e0',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '1.2rem',
                boxShadow: '0 10px 30px rgba(0,163,224,0.4)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT: Enquiry Form (Sticky on Desktop) */}
        <div style={{
          padding: '40px 30px',
          display: 'grid',
          placeItems: 'center',
        }}>
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255,255,255,0.97)',
            padding: '40px 35px',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '480px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '25px', color: 'var(--primary-dark)', fontSize: '1.8rem' }}>
              Get Instant Quote
            </h2>

            <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange}
              style={inputStyle} />

            <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange}
              style={inputStyle} />

            <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange}
              style={inputStyle} />

            <div style={{ position: 'relative' }}>
              <textarea name="message" rows="4" placeholder="Message (max 50 words)" maxLength="300"
                required value={formData.message} onChange={handleChange}
                style={{ ...inputStyle, resize: 'none' }}></textarea>
              <span style={{ position: 'absolute', bottom: '10px', right: '15px', fontSize: '0.8rem', color: '#666' }}>
                {charCount}/300
              </span>
            </div>

            <button type="submit" disabled={loading}
              style={{
                width: '100%',
                background: 'var(--primary)',
                color: 'white',
                padding: '16px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--primary-dark)'}
              onMouseLeave={e => e.target.style.background = 'var(--primary)'}
            >
              {loading ? 'Sending...' : 'Send Enquiry'}
            </button>

            {status === 'success' && <p style={{ color: 'green', textAlign: 'center', marginTop: '15px' }}>Thank you! We'll contact you soon.</p>}
            {status === 'error' && <p style={{ color: 'red', textAlign: 'center', marginTop: '15px' }}>Error. Please try again.</p>}
          </form>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <div style={{
          width: '30px', height: '50px', border: '2px solid white', borderRadius: '25px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
            width: '6px', height: '10px', background: 'white', borderRadius: '3px',
            animation: 'scrollDown 2s infinite',
          }}></div>
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '15px 18px',
  marginBottom: '18px',
  border: '1px solid #ddd',
  borderRadius: '12px',
  fontSize: '1rem',
  transition: 'var(--transition)',
  outline: 'none',
}
inputStyle[':focus'] = { borderColor: 'var(--primary)', boxShadow: '0 0 0 3px rgba(0,48,135,0.1)' }

export default HeroEnquirySplit