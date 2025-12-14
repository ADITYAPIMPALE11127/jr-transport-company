import React from "react";
import "./MilestonesResponsive.css";
import Flag from "@mui/icons-material/Flag";
import LocationOn from "@mui/icons-material/LocationOn";
import LocalShipping from "@mui/icons-material/LocalShipping";
import AcUnit from "@mui/icons-material/AcUnit";
import Verified from "@mui/icons-material/Verified";
import ElectricCar from "@mui/icons-material/ElectricCar";

const timelineData = [
  {
    year: "2019",
    title: "Company Founded",
    desc: "JR Transport started operations from Pune with 5-truck fleet",
    icon: Flag
  },
  {
    year: "2020",
    title: "PAN India Expansion",
    desc: "Network expanded to 20+ states with 50+ trucks",
    icon: LocationOn
  },
  {
    year: "2021",
    title: "Heavy ODC Division",
    desc: "Specialized Over-Dimension Cargo fleet launched",
    icon: LocalShipping
  },
  {
    year: "2022",
    title: "Cold Chain Logistics",
    desc: "Added refrigerated transport for perishable goods",
    icon: AcUnit
  },
  {
    year: "2023",
    title: "ISO Certified",
    desc: "Achieved ISO 9001:2015 certification for quality management",
    icon: Verified
  },
  {
    year: "2024",
    title: "EV Fleet Addition",
    desc: "Launched eco-friendly electric cargo vehicles",
    icon: ElectricCar
  },
];

const Milestones = () => {
  return (
    <section className="milestones-section">
      <div className="container">

        <div className="milestones-header">
          <h2>Our Journey of Excellence</h2>
          <p className="section-subtitle">Milestones in Transport & Logistics</p>
        </div>

        <div className="timeline-section">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="card-icon">
                      <IconComponent />
                    </div>
                    <div className="card-text">
                      <span className="year-badge">{item.year}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Add a decorative timeline line */}
        <div className="timeline-line"></div>

      </div>
    </section>
  );
};

export default Milestones;