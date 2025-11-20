import React from 'react'
import './Clients.css'

const Clients = () => {
  const clients = [
    "Klaus world equipment",
    "Mojj Engineering Systems Ltd.",
    "Aichelin Unitherm Heat Treatment Pvt. Ltd.",
    "Meru Industries LLP",
    "Enpro Industries Pvt. Ltd.",
    "GardnerDenver Engineered Products Pvt. Ltd.",
    "Group Surya (GS Peb)",
    "CEE DEE Vaccum Equipment Pvt. Ltd",
    "ION Exchange India Ltd.",
    "Potain India Pvt. Ltd.",
    "Mechatro cranes LLP"
  ]

  // Color mapping for each client
  const getClientColor = (index) => {
    const colorIndex = (index % 11) + 1;
    return `color-${colorIndex}`;
  }

  // Duplicate array for seamless loop with color mapping
  const marqueeClients = [...clients, ...clients].map((client, index) => ({
    name: client,
    color: getClientColor(index)
  }))

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">
            Trusted By Industry Leaders
          </h2>
          <p className="clients-subtitle">
            Proud to serve India's top engineering and manufacturing companies with flawless heavy transport execution
          </p>
        </div>

        {/* Marquee Container - Single Row Only */}
        <div className="clients-marquee-container">
          <div className="marquee">
            {marqueeClients.map((client, index) => (
              <div 
                key={index} 
                className="client-logo"
                data-color={client.color}
              >
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients