import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
  const linkStyle = {
    color: "white",
    width: "clamp(50px, 8vw, 60px)",
    height: "clamp(50px, 8vw, 60px)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(26px, 5vw, 32px)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  return (
    <div style={{
      display: "flex",
      gap: "clamp(15px, 3vw, 20px)",
      justifyContent: "center",
      marginTop: "30px",
      flexWrap: "wrap"
    }}>
      <a
        href="https://wa.me/919766958932"
        target="_blank"
        rel="noreferrer"
        style={{
          ...linkStyle,
          background: "#25D366",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
        }}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919766958932"
        style={{
          ...linkStyle,
          background: "#28bad4",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
        }}
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default SocialLinks;
