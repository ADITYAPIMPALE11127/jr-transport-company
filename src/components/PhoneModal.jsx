import React, { useState } from "react";
import { FaPhone, FaCopy, FaTimes } from "react-icons/fa";
import "./PhoneModal.css";

const PhoneModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState("");

  const phoneNumbers = [
    "+919022201892",
    "+919766630480",
    "+919766958932",
    "+919890371038"
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="phone-modal-overlay" onClick={onClose}>
      <div className="phone-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="phone-modal-header">
          <h3 className="phone-modal-title">
            <FaPhone /> Contact Numbers
          </h3>
          <button className="phone-modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="phone-modal-body">
          <p className="phone-modal-subtitle">Call us 24×7 for your transportation needs</p>

          <div className="phone-numbers-list">
            {phoneNumbers.map((number, index) => (
              <div key={index} className="phone-number-item">
                <a
                  href={`tel:${number}`}
                  className="phone-number-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {number}
                </a>
                <button
                  className={`phone-copy-btn ${copied === number ? "copied" : ""}`}
                  onClick={() => copyToClipboard(number)}
                  title="Copy to clipboard"
                >
                  {copied === number ? "Copied!" : <FaCopy />}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="phone-modal-footer">
          <button className="phone-modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
