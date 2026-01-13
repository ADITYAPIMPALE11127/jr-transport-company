import React from "react";
import { CheckCircle, Package, Truck, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-left">
      <h1 style={{ color: '#dc2626', fontSize: '2.5rem', fontWeight: 'bold' }}>
        India's Most Trusted Heavy Transport Partner
      </h1>
      
      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ marginRight: '12px', color: '#dc2626', flexShrink: 0 }}>
            <Package size={24} />
          </div>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Specialized in Over-Dimensional and Heavy Cargo Transportation across PAN India
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ marginRight: '12px', color: '#dc2626', flexShrink: 0 }}>
            <Truck size={24} />
          </div>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Grew from 5 clients to 150+ clients since 2020
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ marginRight: '12px', color: '#dc2626', flexShrink: 0 }}>
            <ShieldCheck size={24} />
          </div>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Experienced team, real-time tracking
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ marginRight: '12px', color: '#dc2626', flexShrink: 0 }}>
            <CheckCircle size={24} />
          </div>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
            24x7 support for your most challenging transport needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;