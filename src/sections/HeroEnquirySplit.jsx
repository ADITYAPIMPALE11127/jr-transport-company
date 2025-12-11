// HeroEnquirySplit.jsx
import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import EnquiryForm from "./EnquiryForm";
import "./HeroEnquirySplit.css";

const HeroEnquirySplit = () => {
  const [currentBg, setCurrentBg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev % 5) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Preload images so no flash of blank
  useEffect(() => {
    ["1", "2", "3", "4", "5"].forEach((n) => {
      const img = new Image();
      img.src = `/assets/hero-bg-${n}.jpg`;
    });
  }, []);

  return (
    <section id="hero-split">
      <div className="bg-slideshow">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`bg-slide ${currentBg === num ? "active" : ""}`}
            style={{
              backgroundImage: `url(/assets/hero-bg-${num}.jpg)`,
            }}
          />
        ))}
        
        {/* LIGHT overlay — this is the fix! */}
        <div className="bg-dark-overlay"></div>
      </div>

      <div className="container hero-container">
        <HeroSection />
        <EnquiryForm />
      </div>

      <div className="bg-progress">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`progress-dot ${currentBg === num ? "active" : ""}`}
            onClick={() => setCurrentBg(num)}
            aria-label={`Go to slide ${num}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroEnquirySplit;