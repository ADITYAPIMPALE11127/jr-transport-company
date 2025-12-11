import React, { useState } from "react";
import { FaPhone, FaCopy } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

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

  const btnStyle = {
    background: "var(--secondary)",
    color: "white",
    padding: "clamp(16px, 3vw, 20px) clamp(24px, 4vw, 30px)",
    borderRadius: "16px",
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "none",
    outline: "none",
    width: "100%",
    maxWidth: "280px",
    justifyContent: "center",
  };

  const dropdownCard = (phone) => ({
    padding: "clamp(16px, 3vw, 20px)",
    color: "var(--primary-dark)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: copied === phone ? "#e6f7ff" : "white",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    gap: "10px",
  });

  return (
    <footer
      style={{
        background: "black",
        color: "white",
        padding: "clamp(60px, 10vw, 100px) 0 0",
        marginTop: "clamp(30px, 6vw, 50px)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "clamp(35px, 6vw, 50px)",
            marginBottom: "clamp(50px, 8vw, 80px)",
          }}
        >
          {/* ---------------- LEFT SECTION ---------------- */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >
              <img
                src="/assets/company-logo.png"
                alt="JR Transport Company Logo"
                style={{
                  height: "clamp(2rem, 4vw, 3rem)",
                  width: "auto",
                }}
              />
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
                  fontWeight: 700,
                  margin: 0,
                  background: "linear-gradient(135deg, #FF0000 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                JR Transport Company
              </h3>
            </div>
            <p
              style={{
                opacity: 1,
                lineHeight: "2.0",
                marginBottom: "20px",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
              }}
            >
              India's trusted partner for heavy & over-dimensional cargo
              transportation since 2019.
            </p>

            <div style={{ margin: "30px 0" }}>
              <p
                style={{
                  fontWeight: 600,
                  marginBottom: "10px",
                  fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
                }}
              >
                Office Address
              </p>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  opacity: 1,
                  lineHeight: "2.0",
                }}
              >
                A-113, A-Wing, Jai Ganesh Vision,
                <br />
                Akurdi, Pune - 411035
                <br />
                Maharashtra, India
              </p>
            </div>

            <p style={{ margin: "20px 0" }}>
              <strong>Email:</strong>
              <br />
              <a
                href={`mailto:${email}`}
                style={{
                  color: "#00a3e0",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                }}
                title="Send email to JR Transport"
              >
                {email}
              </a>
            </p>
          </div>

          {/* ---------------- CENTER SECTION ---------------- */}
          <div style={{ textAlign: "center" }}>
            {/* GOOGLE MAP */}
            <h3
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.6rem)",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              Our Location
            </h3>

            <iframe
              title="JR Transport Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.021998666228!2d73.75980217502066!3d18.531189682544995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cd38d91f03%3A0xd5e11bc567c90e1c!2sJai%20Ganesh%20Vision%2C%20Akurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411035!5e0!3m2!1sen!2sin!4v1733916150000!5m2!1sen!2sin"
              width="100%"
              height="230"
              style={{
                border: 0,
                borderRadius: "12px",
                maxWidth: "350px",
                margin: "0 auto",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* SPACE BELOW MAP */}
            <div style={{ height: "30px" }}></div>

            {/* CALL SECTION 24x7 */}
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
                fontWeight: 700,
                marginBottom: "25px",
              }}
            >
              Call Us 24×7
            </h3>

            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              <button
                onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                onMouseEnter={() =>
                  window.innerWidth > 768 && setShowPhoneDropdown(true)
                }
                style={btnStyle}
              >
                <FaPhone style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }} /> Call
                Now
              </button>

              {showPhoneDropdown && (
                <div
                  className="phone-dropdown"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    minWidth: "280px",
                    background: "white",
                    borderRadius: "12px",
                    marginTop: "10px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                    overflow: "hidden",
                    zIndex: 10,
                  }}
                  onMouseLeave={() => setShowPhoneDropdown(false)}
                >
                  <div
                    style={dropdownCard(phone1)}
                    onClick={() => copyToClipboard(phone1)}
                  >
                    <a
                      href={`tel:${phone1}`}
                      style={{
                        color: "var(--primary-dark)",
                        textDecoration: "none",
                        fontWeight: 600,
                        flex: 1,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {phone1}
                    </a>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: copied === phone1 ? "green" : "#666",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {copied === phone1 ? "Copied!" : <><FaCopy /> Copy</>}
                    </span>
                  </div>

                  <div
                    style={dropdownCard(phone2)}
                    onClick={() => copyToClipboard(phone2)}
                  >
                    <a
                      href={`tel:${phone2}`}
                      style={{
                        color: "var(--primary-dark)",
                        textDecoration: "none",
                        fontWeight: 600,
                        flex: 1,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {phone2}
                    </a>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: copied === phone2 ? "green" : "#666",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {copied === phone2 ? "Copied!" : <><FaCopy /> Copy</>}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* SOCIAL + EMAIL + CALL */}
            <div style={{ marginTop: "40px" }}>
              <p
                style={{
                  fontWeight: 600,
                  marginBottom: "20px",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                }}
              >
                Connect With Us
              </p>

              <SocialLinks />

              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#25D366", textDecoration: "none" }}
                >
                  Quick WhatsApp Chat
                </a>
                <a
                  href={`mailto:${email}?subject=Transportation%20Service%20Inquiry`}
                  style={{ color: "#EA4335", textDecoration: "none" }}
                >
                  Send Email
                </a>
                <a
                  href={`tel:${phone1}`}
                  style={{ color: "var(--secondary)", textDecoration: "none" }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SECTION ---------------- */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
                fontWeight: 700,
                marginBottom: "25px",
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", lineHeight: "2.4", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "#aaa" }}>
                  Terms & Conditions (National Courier)
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#aaa" }}>
                  Terms & Conditions (Intracity)
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#aaa" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#aaa" }}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#aaa" }}>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "clamp(30px, 5vw, 40px)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            opacity: 0.8,
          }}
        >
          © 2025 JR Transport Company. All rights reserved. | Made with Passion
          in Pune, India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
