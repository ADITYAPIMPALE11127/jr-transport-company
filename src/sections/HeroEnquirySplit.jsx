// HeroEnquirySplit.jsx
import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import EnquiryForm from "./EnquiryForm";
import "./HeroEnquirySplit.css";

const HeroEnquirySplit = () => {
  const [currentBg, setCurrentBg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev % 8) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const imagesConfig = [
    { num: 1, ext: "jpg" },
    { num: 2, ext: "jpeg" },
    { num: 3, ext: "jpg" },
    { num: 4, ext: "jpg" },
    { num: 5, ext: "jpg" },
    { num: 10, ext: "jpeg" },
    { num: 11, ext: "jpeg" },
    { num: 12, ext: "jpeg" }
  ];

  // Preload images so no flash of blank (supports both jpg/jpeg for 8 images: 1-5,10-12)
  useEffect(() => {
    imagesConfig.forEach(({ num, ext }) => {
      const img = new Image();
      img.src = `/assets/hero-bg-${num}.${ext}`;
    });
  }, []);

  const getBgSlides = (currentIndex) => (
    imagesConfig.map(({ num, ext }, index) => (
      <div
        key={num}
        className={`bg-slide ${currentIndex === index + 1 ? "active" : ""}`}
        style={{
          backgroundImage: `url(/assets/hero-bg-${num}.${ext})`,
        }}
      />
    ))
  );

  return (
    <section id="hero-split">
      <div className="bg-slideshow">
        {getBgSlides(currentBg)}

        {/* LIGHT overlay — this is the fix! */}
        <div className="bg-dark-overlay"></div>
      </div>

      <div className="container hero-container">
        <HeroSection />
        <EnquiryForm />
      </div>

      <div className="bg-progress">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
          const slideNum = imagesConfig[index - 1]?.num || index;
          return (
            <button
              key={index}
              className={`progress-dot ${currentBg === index ? "active" : ""}`}
              onClick={() => setCurrentBg(index)}
              aria-label={`Go to slide ${slideNum}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroEnquirySplit;