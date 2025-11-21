import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SocialLinks from "../components/SocialLinks";
const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate individual fields
  const validateField = (name, value) => {
    let msg = "";

    if (name === "name" && !value.trim()) msg = "Name is required";

    if (name === "email") {
      if (!value.trim()) msg = "Email is required";
      else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) msg = "Enter a valid email";
      }
    }

    if (name === "phone") {
      if (!value.trim()) msg = "Phone number is required";
      else {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) msg = "Phone must be 10 digits";
      }
    }

    if (name === "message" && !value.trim())
      msg = "Message cannot be empty";

    return msg;
  };

  // Handle change with live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  // Validate all fields before submit
  const validateAll = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const msg = validateField(key, formData[key]);
      if (msg) newErrors[key] = msg;
    });
    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check all fields at once
    const newErrors = validateAll();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the highlighted errors");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  // Helper for red border if error exists
  const inputStyle = (field) => ({
    border: errors[field] ? "2px solid #ff4d4d" : "",
  });

  return (
    <div className="hero-right">
      <form className="enquiry-form" onSubmit={sendEmail}>
        <h2>Enquire Now</h2>

        {/* NAME */}
        <input
          type="text"
          name="name"
          style={inputStyle("name")}
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small className="error">{errors.name}</small>}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          style={inputStyle("email")}
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        {/* PHONE */}
        <input
          type="text"
          name="phone"
          style={inputStyle("phone")}
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}

        {/* MESSAGE */}
        <textarea
          name="message"
          style={inputStyle("message")}
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
        <SocialLinks />
      </form>
    </div>
  );
};

export default EnquiryForm;
