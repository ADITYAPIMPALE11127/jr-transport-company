import React from "react";
import { FaWhatsapp, FaLinkedin, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "30px",
      flexWrap: "wrap"
    }}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919766958932"
        target="_blank"
        rel="noreferrer"
        style={{
          background: "#25D366",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          textDecoration: "none",
        }}
      >
        <FaWhatsapp />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/your-company"  // ← update this later
        target="_blank"
        rel="noreferrer"
        style={{
          background: "#0077b5",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        }}
      >
        <FaLinkedin />
      </a>

      {/* Phone */}
      <a
        href="tel:+919766958932"
        style={{
          background: "#00d66b",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        }}
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default SocialLinks;