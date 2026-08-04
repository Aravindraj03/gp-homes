import React, { useState } from "react";

const JointVenturesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    property_type: "",
    property_address: "",
    property_city: "",
    property_road_width: "",
    property_area: "",
    property_road_facing_direction: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    
    switch(name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!validateEmail(value)) error = "Please enter a valid email address";
        break;
      case "mobile":
        if (!value.trim()) error = "Mobile number is required";
        else if (!validatePhone(value)) error = "Mobile number must be exactly 10 digits";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      case "property_address":
        if (!value.trim()) error = "Property address is required";
        break;
      case "property_city":
        if (!value.trim()) error = "City is required";
        break;
      case "property_road_width":
        if (!value.trim()) error = "Road width is required";
        else if (isNaN(value) || Number(value) <= 0) error = "Please enter a valid number";
        break;
      case "property_area":
        if (!value.trim()) error = "Area is required";
        else if (isNaN(value) || Number(value) <= 0) error = "Please enter a valid number";
        break;
      case "property_road_facing_direction":
        if (!value.trim()) error = "Road facing direction is required";
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

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      property_type: prev.property_type === option ? "" : option,
    }));
    // Clear error for property_type if exists
    if (errors.property_type) {
      setErrors((prev) => ({ ...prev, property_type: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    let hasError = false;
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    // Special validation for property_type
    if (!formData.property_type) {
      newErrors.property_type = "Please select property type";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      property_type: formData.property_type,
      property_address: formData.property_address.trim(),
      property_city: formData.property_city.trim(),
      property_road_width: formData.property_road_width.trim(),
      property_area: formData.property_area.trim(),
      property_road_facing_direction: formData.property_road_facing_direction.trim(),
    };

    try {
      const res = await fetch("https://cms.gphomes.in/api/joint-venture-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Response:", result);

      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
          property_type: "",
          property_address: "",
          property_city: "",
          property_road_width: "",
          property_area: "",
          property_road_facing_direction: "",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section-padding joint-venture-section">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-info-wrapper">
              <div className="section-header mb-4">
                <h2 className="section-title">Features</h2>
                <p className="section-description">
                  At GP Homes, we envision growing more quickly, driving innovation
                  in the construction industry, and delivering higher profitability.
                  Moreover, our doors are always open for a joint venture
                  collaborator with whom we can pool our resources and conjoin our
                  expertise to get there faster, together.
                </p>
              </div>

              <h3 className="mt-4 mb-3">Are you ready?</h3>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <span className="flaticon-call"></span>
                  </div>
                  <div className="contact-card-content">
                    <p className="contact-card-label">Contact Us for Apartment Details</p>
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
                    <p className="contact-card-label">Contact Us for Plot Details</p>
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
              
              {submitSuccess && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
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
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <div className="error-message">{errors.name}</div>
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
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  {/* Mobile & Subject */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter 10-digit mobile number"
                        className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                        maxLength="10"
                        disabled={isSubmitting}
                      />
                      {errors.mobile && (
                        <div className="error-message">{errors.mobile}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="required">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter subject"
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <div className="error-message">{errors.subject}</div>
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
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Write your message here..."
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <div className="error-message">{errors.message}</div>
                      )}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">
                        What is the property to you? <span className="required">*</span>
                      </label>
                      <div className="checkbox-group">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Owner"
                            checked={formData.property_type === "Owner"}
                            onChange={() => handleCheckboxChange("Owner")}
                            className="checkbox-input"
                            disabled={isSubmitting}
                          />
                          <span className="checkbox-text">Owner</span>
                        </label>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Agent"
                            checked={formData.property_type === "Agent"}
                            onChange={() => handleCheckboxChange("Agent")}
                            className="checkbox-input"
                            disabled={isSubmitting}
                          />
                          <span className="checkbox-text">Agent</span>
                        </label>
                      </div>
                      {errors.property_type && (
                        <div className="error-message">{errors.property_type}</div>
                      )}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="col-12">
                    <h4 className="sub-title">Property Details</h4>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="property_address" className="form-label">
                        Property Address <span className="required">*</span>
                      </label>
                      <input
                        id="property_address"
                        name="property_address"
                        type="text"
                        value={formData.property_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter property address"
                        className={`form-control ${errors.property_address ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.property_address && (
                        <div className="error-message">{errors.property_address}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="property_city" className="form-label">
                        City <span className="required">*</span>
                      </label>
                      <input
                        id="property_city"
                        name="property_city"
                        type="text"
                        value={formData.property_city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter city name"
                        className={`form-control ${errors.property_city ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.property_city && (
                        <div className="error-message">{errors.property_city}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="property_road_width" className="form-label">
                        Road Width (in feet) <span className="required">*</span>
                      </label>
                      <input
                        id="property_road_width"
                        name="property_road_width"
                        type="text"
                        value={formData.property_road_width}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter road width"
                        className={`form-control ${errors.property_road_width ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.property_road_width && (
                        <div className="error-message">{errors.property_road_width}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="property_area" className="form-label">
                        Area (Extent) <span className="required">*</span>
                      </label>
                      <input
                        id="property_area"
                        name="property_area"
                        type="text"
                        value={formData.property_area}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter area extent"
                        className={`form-control ${errors.property_area ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.property_area && (
                        <div className="error-message">{errors.property_area}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="property_road_facing_direction" className="form-label">
                        Road Facing Direction <span className="required">*</span>
                      </label>
                      <input
                        id="property_road_facing_direction"
                        name="property_road_facing_direction"
                        type="text"
                        value={formData.property_road_facing_direction}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="E.g., North, South, East, West"
                        className={`form-control ${errors.property_road_facing_direction ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.property_road_facing_direction && (
                        <div className="error-message">{errors.property_road_facing_direction}</div>
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
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointVenturesForm;