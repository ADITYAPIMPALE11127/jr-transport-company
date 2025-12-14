import React, { useState } from "react";
import { toast } from "react-toastify";
import SocialLinks from "../components/SocialLinks";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let msg = "";

    if (name === "name" && !value.trim()) msg = "Name is required";

    if (name === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) msg = "Enter a valid email";
    }

    if (name === "phone") {
      if (!value.trim()) msg = "Phone number is required";
      else if (!/^[0-9]{10}$/.test(value))
        msg = "Phone must be 10 digits";
    }

    if (name === "message" && !value.trim())
      msg = "Message cannot be empty";

    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateAll = () => {
    let newErrors = {};
    ["name", "phone", "message"].forEach((key) => {
      const msg = validateField(key, formData[key]);
      if (msg) newErrors[key] = msg;
    });

    if (formData.email.trim()) {
      const emailMsg = validateField("email", formData.email);
      if (emailMsg) newErrors.email = emailMsg;
    }

    return newErrors;
  };

  /* -------------------- FIXED SUBMIT -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateAll();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the highlighted errors");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send enquiry");
      }

      console.log("📨 Server response:", data);
      toast.success("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("❌ Submit error:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    }

    setLoading(false);
  };

  const inputStyle = (field) => ({
    border: errors[field] ? "2px solid #ff4d4d" : "",
  });

  return (
    <div className="hero-right">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <h2>Enquire Now</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle("name")}
        />
        {errors.name && <small className="error">{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder="Email Address (optional)"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle("email")}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle("phone")}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <input
          type="text"
          name="company"
          placeholder="Company Name (optional)"
          value={formData.company}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message *"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle("message")}
        />
        {errors.message && <small className="error">{errors.message}</small>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        <SocialLinks />
      </form>
    </div>
  );
};

export default EnquiryForm;
