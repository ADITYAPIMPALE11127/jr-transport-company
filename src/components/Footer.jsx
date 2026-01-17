import React, { useState } from "react";
import { FaPhone, FaCopy } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import "./Footer.css";
import { Translate } from "@mui/icons-material";

const Footer = () => {
  const [copied, setCopied] = useState("");
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  const phone1 = "+919766958932";
  const phone2 = "+919890371038";
  const whatsappNumber = "919766958932";
  const email = "jrtransportco@yahoo.com";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* ---------------- LEFT SECTION ---------------- */}
          <div>
            <div className="footer-logo-title-row">
              <img
                src="/assets/company-logo.png"
                alt="JR Transport Company Logo"
                className="footer-logo-small"
              />
              <h3 className="footer-title">
                JR Transport Company
              </h3>
            </div>
            
            <p className="footer-description">
              India's trusted partner for heavy & over-dimensional cargo
              transportation since 2020.
            </p>

            <div className="footer-address-section">
              <p className="footer-address-title">
                Office Address
              </p>
              <p className="footer-address">
                A-113, A-Wing, Jai Ganesh Vision,
                <br />
                Akurdi, Pune - 411035
                <br />
                Maharashtra, India
              </p>
            </div>

            <p className="footer-email-section">
              <strong>Email:</strong>
              <br />
              <a
                href={`mailto:${email}`}
                className="footer-email-link"
                title="Send email to JR Transport"
              >
                {email}
              </a>
            </p>
          </div>

          {/* ---------------- CENTER SECTION ---------------- */}
          <div className="footer-center">
            {/* GOOGLE MAP */}
            <h3 className="footer-location-title">
              Our Location
            </h3>

            <iframe
              title="JR Transport Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.379637546158!2d73.78449379999999!3d18.6469526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93f9d252eed%3A0x8b889696bc6ec21a!2sJR%20TRANSPORT%20COMPANY!5e0!3m2!1sen!2sin!4v1768396092998!5m2!1sen!2sin"
              width="100%"
              className="footer-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* SPACE BELOW MAP */}
            <div className="footer-map-spacer"></div>

            {/* CALL SECTION 24x7 */}
            <h3 className="footer-call-title">
              Call Us 24×7
            </h3>

            <div className="footer-call-container">
              <button
                className="footer-call-btn"
                onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                onMouseEnter={() =>
                  window.innerWidth > 768 && setShowPhoneDropdown(true)
                }
              >
                <FaPhone /> Call
                Now
              </button>

              {showPhoneDropdown && (
                <div
                  className="footer-phone-dropdown"
                  onMouseLeave={() => setShowPhoneDropdown(false)}
                >
                  <div
                    className={`footer-dropdown-item ${copied === phone1 ? "copied" : ""}`}
                    onClick={() => copyToClipboard(phone1)}
                  >
                    <a
                      href={`tel:${phone1}`}
                      className="footer-dropdown-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {phone1}
                    </a>
                    <span className={`footer-copy-indicator ${copied === phone1 ? "copied" : ""}`}>
                      {copied === phone1 ? "Copied!" : <><FaCopy /> Copy</>}
                    </span>
                  </div>

                  <div
                    className={`footer-dropdown-item ${copied === phone2 ? "copied" : ""}`}
                    onClick={() => copyToClipboard(phone2)}
                  >
                    <a
                      href={`tel:${phone2}`}
                      className="footer-dropdown-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {phone2}
                    </a>
                    <span className={`footer-copy-indicator ${copied === phone2 ? "copied" : ""}`}>
                      {copied === phone2 ? "Copied!" : <><FaCopy /> Copy</>}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* SOCIAL + EMAIL + CALL */}
            <div className="footer-connect-section">
              <p className="footer-connect-title">
                Connect With Us
              </p>

              <SocialLinks />

              <div className="footer-connect-links">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-whatsapp-link"
                >
                  Quick WhatsApp Chat
                </a>
                <a
                  href={`mailto:${email}?subject=Transportation%20Service%20Inquiry`}
                  className="footer-email-link-alt"
                >
                  Send Email
                </a>
                <a
                  href={`tel:${phone1}`}
                  className="footer-call-link"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SECTION ---------------- */}
          <div>
            <h3 className="footer-legal-title">
              Legal
            </h3>
            <ul className="footer-legal-list">
              <li className="footer-compliance-item">
                <span className="verified-icon" style={{transform: 'translateY(-18px)'}}>✓</span>
                Business Compliance Registered<br />
                MSME: UDYAM-MH-26-0208706
              </li>
              <li className="footer-compliance-item">
                <span className="verified-icon">✓</span>
                GST Registered: 27AARFJ7412Q1ZJ
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        <div className="footer-copyright-logo">
          <img
            src="/assets/company-logo.png"
            alt="JR Transport Company Logo"
          />
        </div>
        <div className="footer-copyright-text">
          JR Transport Company
          <br />
          © 2025 JR Transport Company – All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;