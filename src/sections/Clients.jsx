import React from 'react'
import './Clients.css'

const Clients = () => {
  const clientsList1 = [
    "/assets/client-logo/bhavani.jpeg",
    "/assets/client-logo/chakr-innovation.jpeg",
    "/assets/client-logo/fitwell-gasket.jpeg",
    "/assets/client-logo/hw-cranes.jpeg",
    "/assets/client-logo/inox-air.jpeg",
    "/assets/client-logo/orange-machinetech.jpeg",
    "/assets/client-logo/padmatech.jpeg",
    "/assets/client-logo/gardner-denver.svg"
  ]
  const clientList2 = [
    "/assets/client-logo/Potain.jpeg",
    "/assets/client-logo/see-dee-vaccum.jpeg",
    "/assets/client-logo/sharp-eng.jpeg",
    "/assets/client-logo/shirke.jpeg",
    "/assets/client-logo/Sparkon.jpeg",
    "/assets/client-logo/surya-group.jpeg",
    "/assets/client-logo/unitherm.jpeg",
    "assets/client-logo/Klaus-world.jpeg",
    "assets/client-logo/images.jfif"
  ]

  const marqueeClients1 = [...clientsList1, ...clientsList1]
  const marqueeClients2 = [...clientList2, ...clientList2]

  return (
    <section id="clients-section" className="clients-wrapper">
      <div className="clients-section">
        <div className="clients-container">
          <div className="clients-header">
            <h2 className="clients-title">
              Trusted By Industry Leaders
            </h2>
            <p className="clients-subtitle">
              Proud to serve India's top engineering and manufacturing companies with flawless heavy transport execution
            </p>
          </div>

          <div className="clients-marquee-container">
            <div className="marquee marquee-ltr">
              {marqueeClients1.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt="Client logo"
                  className="client-logo-image"
                />
              ))}
            </div>
          </div>
          <div className="clients-marquee-container">
            <div className="marquee marquee-rtl">
              {marqueeClients2.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt="Client logo"
                  className="client-logo-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients