import React from "react";
import HeroSection from "./HeroSection";
import EnquiryForm from "./EnquiryForm";
import "./HeroEnquirySplit.css";

const HeroEnquirySplit = () => {
  return (
    <section id="hero-split">
      <div className="container hero-container">
        <HeroSection />
        <EnquiryForm />
      </div>
    </section>
  );
};

export default HeroEnquirySplit;
