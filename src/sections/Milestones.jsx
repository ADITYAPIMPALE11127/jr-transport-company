import React from "react";
import "./MilestonesResponsive.css";
import Flag from "@mui/icons-material/Flag";
import LocationOn from "@mui/icons-material/LocationOn";
import LocalShipping from "@mui/icons-material/LocalShipping";
import AcUnit from "@mui/icons-material/AcUnit";
import Verified from "@mui/icons-material/Verified";
import Engineering from "@mui/icons-material/Engineering";


const timelineData = [
  {
    year: "2020",
    title: "Inception & Foundation",
    desc: "JR Transport commenced operations from Pune with a dedicated fleet of 5 heavy-duty trucks, establishing our core transport capabilities.",
    icon: Flag
  },
  {
    year: "2021",
    title: "National Expansion",
    desc: "Successfully scaled operations to establish a robust network spanning over 20 states across India, building extensive logistical reach.",
    icon: LocationOn
  },
  {
    year: "2022",
    title: "Heavy Haulage Division Growth",
    desc: "Built a specialized fleet of 50+ experienced heavy-duty vehicles and cultivated partnerships with 100+ reputable clients.",
    icon: LocalShipping
  },
  {
    year: "2023",
    title: "Fleet Diversification",
    desc: "Expanded our asset base with a comprehensive range of specialized commercial vehicles and state-of-the-art transportation equipment.",
    icon: AcUnit
  },
  {
    year: "2024",
    title: "Strategic Machinery Logistics",
    desc: "Executed a critical project delivering heavy machinery for a major automobile plant expansion, meeting stringent timeline requirements.",
    icon: Engineering
  },
];

const Milestones = () => {
  return (
    <section className="milestones-section">
      <div className="container">

        <div className="milestones-header">
          <h2 className="section-title">Milestones in Our Journey</h2>
          <p className="section-subtitle">Driving Excellence in Transport & Logistics</p>
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
                      <h5 className="milestone-title">{item.title}</h5>
                      <p className="milestone-desc">{item.desc}</p>
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