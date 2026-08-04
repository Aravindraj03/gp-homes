import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Please enter your full name";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Please enter your email address";
        else if (!validateEmail(value)) error = "Please enter a valid email address (e.g., name@domain.com)";
        break;
      case "mobile":
        if (!value.trim()) error = "Please enter your mobile number";
        else if (!validatePhone(value)) error = "Mobile number must be exactly 10 digits";
        break;
      case "location":
        if (!value.trim()) error = "Please enter your location";
        else if (value.trim().length < 2) error = "Location must be at least 2 characters";
        break;
      case "message":
        if (!value.trim()) error = "Please leave your message";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-format mobile number to only allow digits
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    let formIsValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://cms.gphomes.in/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          location: formData.location.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
        });
        setErrors({});
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Submission failed. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section-padding joint-venture-section">
      <div className="container">
        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info-wrapper">
              <div className="info-header">
                <h2 className="info-title">Enquire Now</h2>
                <p className="info-description">
                  Interested in learning more? Our property experts are here to
                  help! Reach out to us, and we'll get back to you with all the
                  details soon.
                </p>
              </div>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span className="flaticon-call"></span>
                  </div>
                  <div className="contact-card-content">
                    <p className="contact-card-label">Apartment Details</p>
                    <a href="tel:9344481444" className="contact-card-link">
                      934 448 1444
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span className="flaticon-call"></span>
                  </div>
                  <div className="contact-card-content">
                    <p className="contact-card-label">Plot Details</p>
                    <a href="tel:6384003003" className="contact-card-link">
                      638 400 3003
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span className="flaticon-location-pin"></span>
                  </div>
                  <div className="contact-card-content">
                    <p className="contact-card-label">Address</p>
                    <address className="contact-card-address">
                      W-820, 9th St, Syndicate Colony,
                      <br />
                      D-Sector, Anna Nagar West Extension,
                      <br />
                      Chennai, Tamil Nadu 600101
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 col-md-12">
            <div className="form-wrapper">
              <h3 className="form-title">Get in touch</h3>
              
              {submitted && (
                <div className="alert alert-success">
                  <svg style={{width:"20px"}} className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Your message was sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="row g-3">
                  {/* Name & Email */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <div className="error-message">
                          <svg style={{width:"20px"}} className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {errors.name}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="error-message">
                          <svg style={{width:"20px"}} className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile & Location */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="Enter 10-digit number"
                        value={formData.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                        maxLength="10"
                        disabled={isSubmitting}
                      />
                      {errors.mobile && (
                        <div className="error-message">
                          <svg style={{width:"20px"}} className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {errors.mobile}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="location" className="form-label">
                        Location <span className="required">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.location ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.location && (
                        <div className="error-message">
                          <svg style={{width:"20px"}} className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {errors.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <div className="error-message">
                          <svg style={{width:"20px"}} className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {errors.message}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg style={{width:"20px"}} className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.136082116756!2d80.1947873!3d13.0905609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640f8f35254b%3A0x28feec223f06426a!2sGP%20HOMES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1740117006660!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="GP Homes Location"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;