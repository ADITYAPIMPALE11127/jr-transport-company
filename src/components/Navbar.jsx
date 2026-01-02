import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Only add scroll listener on home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll)
    } else {
      setScrolled(true) // Navbar always solid on other pages
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate home first then scroll
      window.location.href = `/#${id}`
      return
    }
    
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', id: 'hero-section', path: '/', type: 'home' },
    { label: 'About', id: 'about', path: '/about', type: 'page' },
    { label: 'Services', id: 'services', path: '/#services', type: 'section' },
    { label: 'Clients', id: 'clients', path: '/#clients', type: 'section' },
    { label: 'Contact', id: 'footer', path: '/#footer', type: 'section' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">

          {/* Logo + Company Name */}
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img
                src="/assets/company-logo.png"
                alt="JR Transport Company Logo"
                className="navbar-logo"
              />
              <div className="logo-text">
                <div className="logo-title">
                  <span className="logo-part-1">JR</span>
                  <span className="logo-part-2">Transport Company</span>
                  
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            {navItems.map((item) => {
              if (item.type === 'page') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              } else if (item.type === 'section') {
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className={location.pathname === '/' && window.location.hash === `#${item.id}` ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                )
              } else {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
          </div>

          {/* Mobile Hamburger */}
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => {
          if (item.type === 'page') {
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            )
          } else if (item.type === 'section') {
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            )
          } else {
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            )
          }
        })}
      </div>
    </>
  )
}

export default Navbar