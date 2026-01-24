import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../utils/emailjsConfig";
import SocialLinks from "../components/SocialLinks";
import {
  Button,
  Paper,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

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
      else if (!/^[0-9]{10}$/.test(value)) msg = "Phone must be 10 digits";
    }

    if (name === "message" && !value.trim()) msg = "Message cannot be empty";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateAll();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.warn("Please fix the highlighted errors.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    setLoading(true);

    try {
      console.log("📤 Sending enquiry data via EmailJS:", formData);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("✅ EmailJS response:", result);

      toast.success("Enquiry submitted successfully! We'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setErrors({});

    } catch (error) {
      console.error("❌ EmailJS error details:", error);

      let userMessage = "Failed to send enquiry. Please try again later.";

      if (error.text) {
        userMessage = `Email service error: ${error.text}`;
      } else if (error.message) {
        userMessage = error.message;
      }

      toast.error(`Submission failed: ${userMessage}`, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="hero-right">
      {/* ToastContainer to render all notifications */}
      <ToastContainer />

      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 3 }}>
          Enquire Now
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate className="enquiry-form">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <input
                type="text"
                placeholder="Your Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  border: `2px solid ${errors.name ? '#FF3333' : 'rgba(224, 224, 224, 0.8)'}`,
                  borderRadius: '12px',
                  fontSize: '16px',
                  transition: '0.3s',
                  boxSizing: 'border-box',
                }}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </Grid>

            <Grid item xs={12}>
              <input
                type="email"
                placeholder="Email Address (optional)"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: `2px solid ${errors.email ? '#FF3333' : 'rgba(224, 224, 224, 0.8)'}`,
                  borderRadius: '12px',
                  fontSize: '16px',
                  transition: '0.3s',
                  boxSizing: 'border-box',
                }}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </Grid>

            <Grid item xs={12}>
              <input
                type="tel"
                placeholder="Phone Number *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  border: `2px solid ${errors.phone ? '#FF3333' : 'rgba(224, 224, 224, 0.8)'}`,
                  borderRadius: '12px',
                  fontSize: '16px',
                  transition: '0.3s',
                  boxSizing: 'border-box',
                }}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </Grid>

            <Grid item xs={12}>
              <input
                type="text"
                placeholder="Company Name (optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid rgba(224, 224, 224, 0.8)',
                  borderRadius: '12px',
                  fontSize: '16px',
                  transition: '0.3s',
                  boxSizing: 'border-box',
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <textarea
                placeholder="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                required
                rows={3}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: `2px solid ${errors.message ? '#FF3333' : 'rgba(224, 224, 224, 0.8)'}`,
                  borderRadius: '12px',
                  fontSize: '16px',
                  transition: '0.3s',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  minHeight: '80px',
                }}
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  mt: 2,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #FF0000, #FF6666)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #CC0000, #FF3333)',
                  },
                }}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            * Required fields
            <br />
            We'll respond within 24 hours
          </Typography>
          <SocialLinks />
        </Box>
      </Paper>
    </div>
  );
};

export default EnquiryForm;