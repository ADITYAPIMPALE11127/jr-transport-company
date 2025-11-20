import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone, FaCopy } from 'react-icons/fa'

const Footer = () => {
  const [copied, setCopied] = useState('')
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(''), 2000)
  }

  const phone1 = "+919766958932"
  const phone2 = "+919890371038"
  const whatsappNumber = "919766958932"
  const email = "jrtransportco@yahoo.com"

  return (
    <footer style={{
      background: 'var(--primary-dark)',
      color: 'white',
      padding: '100px 0 40px',
      marginTop: '50px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          marginBottom: '80px'
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>
              JR Transport Company
            </h3>
            <p style={{ opacity: 0.9, lineHeight: '1.8', marginBottom: '20px' }}>
              India's trusted partner for heavy & over-dimensional cargo transportation since 2019.
            </p>

            {/* Office Address */}
            <div style={{ margin: '30px 0' }}>
              <p style={{ fontWeight: 600, marginBottom: '10px' }}>Office Address</p>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                A-113, A-Wing, Jai Ganesh Vision,<br />
                Akurdi, Pune - 410035<br />
                Maharashtra, India
              </p>
            </div>

            {/* Email */}
            <p style={{ margin: '20px 0' }}>
              <strong>Email:</strong><br />
              <a 
                href={`mailto:${email}`} 
                style={{ color: '#00a3e0' }}
                title="Send email to JR Transport"
              >
                {email}
              </a>
            </p>
          </div>

          {/* Phone Numbers with Dropdown */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>
              Call Us 24×7
            </h3>
            
            {/* Call Now Button with Dropdown */}
            <div style={{
              position: 'relative',
              display: 'inline-block'
            }}>
              <button
                onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                style={{
                  background: 'var(--secondary)',
                  color: 'white',
                  padding: '20px 30px',
                  borderRadius: '16px',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseEnter={() => setShowPhoneDropdown(true)}
              >
                <FaPhone style={{ fontSize: '1.2rem' }} />
                Call Now
              </button>

              {/* Phone Dropdown */}
              {showPhoneDropdown && (
                <div 
                  className="phone-dropdown" 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'white',
                    borderRadius: '12px',
                    marginTop: '10px',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                    zIndex: 10
                  }}
                  onMouseLeave={() => setShowPhoneDropdown(false)}
                >
                  <div style={{
                    padding: '20px',
                    color: 'var(--primary-dark)',
                    cursor: 'pointer',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: copied === phone1 ? '#e6f7ff' : 'white'
                  }}
                    onClick={() => copyToClipboard(phone1)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <a 
                        href={`tel:${phone1}`} 
                        style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 600 }}
                        title="Call first number"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {phone1}
                      </a>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: copied === phone1 ? 'green' : '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {copied === phone1 ? 'Copied!' : <><FaCopy /> Copy</>}
                    </span>
                  </div>
                  <div style={{
                    padding: '20px',
                    color: 'var(--primary-dark)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: copied === phone2 ? '#e6f7ff' : 'white'
                  }}
                    onClick={() => copyToClipboard(phone2)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <a 
                        href={`tel:${phone2}`} 
                        style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 600 }}
                        title="Call second number"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {phone2}
                      </a>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: copied === phone2 ? 'green' : '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {copied === phone2 ? 'Copied!' : <><FaCopy /> Copy</>}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links - Fixed Email Link */}
            <div style={{ marginTop: '40px' }}>
              <p style={{ fontWeight: 600, marginBottom: '20px', fontSize: '1.1rem' }}>
                Connect With Us
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                {/* WhatsApp - Direct Chat */}
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20JR%20Transport,%20I%20would%20like%20to%20get%20a%20quote%20for%20transportation%20services.`} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '55px',
                    height: '55px',
                    background: '#25D366',
                    borderRadius: '12px',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.6rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                {/* Email - FIXED: Removed target="_blank" and rel="noreferrer" */}
                <a 
                  href={`mailto:${email}?subject=Transportation%20Service%20Inquiry&body=Hello%20JR%20Transport,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20transportation%20services.`}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '55px',
                    height: '55px',
                    background: '#EA4335',
                    borderRadius: '12px',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.6rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(234, 67, 53, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="Send us an email"
                >
                  <FaEnvelope />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '55px',
                    height: '55px',
                    background: '#0077b5',
                    borderRadius: '12px',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.6rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0, 119, 181, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="Follow us on LinkedIn"
                >
                  <FaLinkedin />
                </a>

                {/* Phone - Direct Dial */}
                <a 
                  href={`tel:${phone1}`}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '55px',
                    height: '55px',
                    background: 'var(--secondary)',
                    borderRadius: '12px',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.6rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0, 163, 224, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="Call us directly"
                >
                  <FaPhone />
                </a>
              </div>
              
              {/* Quick Action Links */}
              <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    color: '#25D366', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <FaWhatsapp /> Quick WhatsApp Chat
                </a>
                <a 
                  href={`mailto:${email}?subject=Transportation%20Service%20Inquiry&body=Hello%20JR%20Transport,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20transportation%20services.`}
                  style={{ 
                    color: '#EA4335', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <FaEnvelope /> Send Email
                </a>
                <a 
                  href={`tel:${phone1}`}
                  style={{ 
                    color: 'var(--secondary)', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', lineHeight: '2.4' }}>
              <li><a href="#" style={{ color: '#aaa', fontSize: '1.05rem' }}>Terms & Conditions (National Courier)</a></li>
              <li><a href="#" style={{ color: '#aaa', fontSize: '1.05rem' }}>Terms & Conditions (Intracity)</a></li>
              <li><a href="#" style={{ color: '#aaa', fontSize: '1.05rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#aaa', fontSize: '1.05rem' }}>Cookie Policy</a></li>
              <li><a href="#" style={{ color: '#aaa', fontSize: '1.05rem' }}>Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '1rem',
          opacity: 0.8
        }}>
          © 2025 JR Transport Company. All rights reserved. | Made with Passion in Pune, India
        </div>
      </div>
    </footer>
  )
}

export default Footer