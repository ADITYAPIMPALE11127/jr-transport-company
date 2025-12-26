import React from 'react'
import './Clients.css'

const Clients = () => {
  const clientsList1 = [
    "Aichelin Unitherm Heat Treatment Systems (I) Pvt Ltd",
    "BAJAJ EARTHS PVT LTD",
    "B G SHIRKE CONSTRUCTION TECHNOLOGY PVT LTD",
    "BHAVANI INDUSTRIES PVT LTD",
    "CANGRAFT EQUIPMENT PVT LTD",
    "CEE DEE VACUUM EQUIPMENT PRIVATE LIMITED",
    "CHAKR INNOVATION PRIVATE LIMITED",
    "ENDURANCE TECHNOLOGIES LTD",
    "ENPRO INDUSTRIES PVT LTD",
    "FAPAL ROOFS INDIA PRIVATE LIMITED",
    "FITWEL GASKET COMPANY INDIA PVT LTD UNIT - II",
    "GARDNER DENVER ENGINEERED PRODUCTS INDIA PVT LTD",
    "GLOBAL STEEL",
    "GS PEB AND CIVIL WORKS PVT LTD",
    "HERAMB EQUIPMENT & PROJECTS LLP",
    "IEW CRANE PVT LTD",
    "INDO-GERMAN VACU TREAT PRIVATE LIMITED",
    "INOX AIR PRODUCTS PRIVATE LIMITED",
    "ISHANVI CRANE PVT LTD",
    "JS PROCESS EQUIPMENT PVT LTD",
    "K K NAG PRIVATE LIMITED",
    "KLAUS WORLD EQUIPMENT",
    "KRITIJA CONSTRUCTION",
    "LIFT INDIA RENTAL EQUIPMENT",
    "LIMRA VACUUM",
    "MACHINE TECH",
    "MAGNA CASTING AND MACHINEWORKS PVT LTD",
    "MARUTI INDUSTRIES",
    "MERU INDUSTRIES LLP",
    "M M CRANE SERVICES",
    "MOJJ ENGINEERING SYSTEMS LTD",
    "M/S BEN ENTERPRISES",
    "MS-PRG AUTOMATION PVT LTD",
    "ORANGE MACHINETECH PRIVATE LIMITED",
    "PADMATECH INDUSTRIES PVT LTD",
    "PROCESS MASTERS EQUIPMENTS (I) PVT LTD",
    "ROSS PROCESS EQUIPMENT PRIVATE LIMITED",
    "R R ENTERPRISES",
    "SHALAX PROCESS EQUIPMENTS",
    "SHARP DESIGNERS AND ENGINEERS INDIA PRIVATE LIMITED",
    "SHREE ADITI ENGG WORKS",
    "SPARKON ENGINEERS",
    "SPRUCE PAX PRIVATE LIMITED",
    "S S ENGINEERS",
    "STERLING ENGINEERS",
    "STERLING ENGINEERS & BOILERS PVT LTD",
    "SVTN CONSTRUCTIONS PRIVATE LIMITED",
    "TALIB AND SHAMSI CONSTRUCTIONS PVT LTD  MH",
    "TAMBOLI ENGINEERS PVT LTD",
    "TRUETECH VISION INDUSTRY PVT LTD",
    "UNITED ENGINEERS & CONSULTANTS",
    "UNITHERM ENGINEERS LIMITED (KA)",
    "VARROC ENGINEERING LIMITED",
    "YES ENTERPRISES",
    "ZOOMLION INDIA PVT LTD"
  ]
  const clientList2 = [
    "AAVISHKAR HYFAB INDUSTRIES PVT LTD",
    "ADITYA ENTERPRISES",
    "Aichelin Unitherm Heat Treatment Systems (I) Pvt Ltd",
    "BAJAJ EARTHS PVT LTD",
    "B G SHIRKE CONSTRUCTION TECHNOLOGY PVT LTD",
    "BHAVANI INDUSTRIES PVT LTD",
    "CANGRAFT EQUIPMENT PVT LTD",
    "CEE DEE VACUUM EQUIPMENT PRIVATE LIMITED",
    "CHAKR INNOVATION PRIVATE LIMITED",
    "ENDURANCE TECHNOLOGIES LTD",
    "ENPRO INDUSTRIES PVT LTD",
    "FAPAL ROOFS INDIA PRIVATE LIMITED",
    "FITWEL GASKET COMPANY INDIA PVT LTD UNIT - II",
    "GARDNER DENVER ENGINEERED PRODUCTS INDIA PVT LTD",
    "GLOBAL STEEL",
    "GS PEB AND CIVIL WORKS PVT LTD",
    "HERAMB EQUIPMENT & PROJECTS LLP",
    "IEW CRANE PVT LTD",
    "INDO-GERMAN VACU TREAT PRIVATE LIMITED",
    "INOX AIR PRODUCTS PRIVATE LIMITED",
    "ISHANVI CRANE PVT LTD",
    "JS PROCESS EQUIPMENT PVT LTD",
    "K K NAG PRIVATE LIMITED",
    "KLAUS WORLD EQUIPMENT",
    "KRITIJA CONSTRUCTION",
    "LIFT INDIA RENTAL EQUIPMENT",
    "LIMRA VACUUM",
    "MACHINE TECH",
    "MAGNA CASTING AND MACHINEWORKS PVT LTD",
    "MARUTI INDUSTRIES",
    "MERU INDUSTRIES LLP",
    "M M CRANE SERVICES",
    "MOJJ ENGINEERING SYSTEMS LTD",
    "M/S BEN ENTERPRISES",
    "MS-PRG AUTOMATION PVT LTD",
    "ORANGE MACHINETECH PRIVATE LIMITED",
    "PADMATECH INDUSTRIES PVT LTD",
    "PROCESS MASTERS EQUIPMENTS (I) PVT LTD",
    "ROSS PROCESS EQUIPMENT PRIVATE LIMITED",
    "R R ENTERPRISES",
    "SHALAX PROCESS EQUIPMENTS",
    "SHARP DESIGNERS AND ENGINEERS INDIA PRIVATE LIMITED",
    "SHREE ADITI ENGG WORKS",
    "SPARKON ENGINEERS",
    "SPRUCE PAX PRIVATE LIMITED",
    "S S ENGINEERS",
    "STERLING ENGINEERS",
    "STERLING ENGINEERS & BOILERS PVT LTD",
    "SVTN CONSTRUCTIONS PRIVATE LIMITED",
    "TALIB AND SHAMSI CONSTRUCTIONS PVT LTD  MH",
    "TAMBOLI ENGINEERS PVT LTD",
    "TRUETECH VISION INDUSTRY PVT LTD",
    "UNITED ENGINEERS & CONSULTANTS",
    "UNITHERM ENGINEERS LIMITED (KA)",
    "VARROC ENGINEERING LIMITED",
    "YES ENTERPRISES"
  ]

  // Color mapping for each client
  const getClientColor = (index) => {
    const colorIndex = (index % 11) + 1;
    return `color-${colorIndex}`;
  }

  // Duplicate arrays for seamless loop with color mapping
  const marqueeClients1 = [...clientsList1, ...clientsList1].map((client, index) => ({
    name: client,
    color: getClientColor(index)
  }))

  const marqueeClients2 = [...clientList2, ...clientList2].map((client, index) => ({
    name: client,
    color: getClientColor(index) // No offset needed for separate lists
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

        {/* Marquee Containers - Two Rows */}
        <div className="clients-marquee-container">
          <div className="marquee marquee-ltr">
            {marqueeClients1.map((client, index) => (
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
        <div className="clients-marquee-container">
          <div className="marquee marquee-rtl">
            {marqueeClients2.map((client, index) => (
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