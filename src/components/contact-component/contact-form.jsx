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

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Please enter your Name";
        break;
      case "email":
        if (!value.trim()) error = "Please enter your Email ID";
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email.";
        break;
      case "mobile":
        if (!value.trim()) error = "Please enter your Mobile number";
        else if (!/^\d{10}$/.test(value)) error = "Enter 10-digit number.";
        break;
      case "location":
        if (!value.trim()) error = "Please enter your Location";
        break;
      case "message":
        if (!value.trim()) error = "Please Leave your Message";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (!value.trim()) formIsValid = false;
    });

    if (!formIsValid) return;

    try {
      const response = await fetch("https://cms.gphomes.in/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          location: formData.location,
          message: formData.message,
        }),
      });

      const data = await response.json();
      alert("Form submitted Successfully:");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        location: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row mb-90">
          {/* Contact Information */}
          <div className="col-md-6 mb-60">
            <h3>Enquire Now</h3>
            <p>
              Interested in learning more? Our property experts are here to
              help! Reach out to us, and we’ll get back to you with all the
              details soon.
            </p>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Contact Us for Apartment Details</p>
                <a href="tel:934 448 1444">934 448 1444</a>
              </div>
            </div>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Contact Us for Plot Details</p>
                <a href="tel:638 400 3003">638 400 3003</a>
              </div>
            </div>
            {/* <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-envelope"></span>
              </div>
              <div className="text">
                <p>Email Info</p>
                <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
              </div>
            </div> */}
            <div className="reservations">
              <div className="icon">
                <span className="flaticon-location-pin"></span>
              </div>
              <div className="text">
                <p>Address</p>
                W-820, 9th St, Syndicate Colony,
                <br />
                D-Sector, Anna Nagar West Extension,
                <br />
                Chennai, Tamil Nadu 600101
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-md-5 mb-30 offset-md-1">
            <h3>Get in touch</h3>
            <form onSubmit={handleSubmit} className="contact__form">
              {/* Form Message */}
              {submitted && (
                <div className="alert alert-success contact__msg" role="alert">
                  Your message was sent successfully.
                </div>
              )}

              {/* Form Elements */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="mobile"
                    type="text"
                    placeholder="Your Number *"
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                  {errors.mobile && (
                    <small className="text-danger">{errors.mobile}</small>
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="location"
                    type="text"
                    placeholder="Location *"
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                  {errors.location && (
                    <small className="text-danger">{errors.location}</small>
                  )}
                </div>
                <div className="col-md-12 form-group">
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  ></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                <div className="col-md-12">
                  <button type="submit" className="butn-dark2">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Map Section */}
        <div className="row">
          <div
            className="col-md-12 map animate-box"
            data-animate-effect="fadeInUp"
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.136082116756!2d80.1947873!3d13.0905609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640f8f35254b%3A0x28feec223f06426a!2sGP%20HOMES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1740117006660!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
