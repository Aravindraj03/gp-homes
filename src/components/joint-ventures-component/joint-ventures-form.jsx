import React, { useState } from "react";

const JointVenturesForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleCheckboxChange = (option) => {
  //   setSelectedOptions((prev) =>
  //     prev.includes(option)
  //       ? prev.filter((item) => item !== option)
  //       : [...prev, option]
  //   );
  // };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      property_type: prev.property_type === option ? "" : option,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      subject: formData.subject,
      message: formData.message,
      property_type: formData.property_type,
      property_address: formData.property_address,
      property_city: formData.property_city,
      property_road_width: formData.property_road_width,
      property_area: formData.property_area,
      property_road_facing_direction: formData.property_road_facing_direction,
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
        alert("Form submitted successfully!");
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
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed.");
    }
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row mb-90">
          {/* Contact Information */}
          <div className="col-md-6 mb-60">
            <h3>Features</h3>
            <p>
              At GP Homes, we envision growing more quickly, driving innovation
              in the construction industry, and delivering higher profitability.
              Moreover, our doors are always open for a joint venture
              collaborator with whom we can pool our resources and conjoin our
              expertise’s to get there faster, together.{" "}
            </p>
            <h3>Are you ready?</h3>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Contact Us for Apartment Details</p>
                <a href="tel:855-100-4444">934 448 1444</a>
              </div>
            </div>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Contact Us for Plot Details</p>
                <a href="tel:855-100-4444">638 400 3003</a>
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
            <form className="contact__form" onSubmit={handleSubmit}>
              {/* Form Message */}
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
              {/* Form Elements */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="email"
                    type="text"
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="mobile"
                    type="text"
                    value={formData.mobile} 
                    onChange={handleChange}
                    placeholder="Your Number *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    required
                  ></textarea>
                </div>

                <h4>Property Details</h4>
                <div className="S my-3">
                  <span
                    className="text-lg font-semibold"
                    style={{
                      color: "#676666",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                  >
                    What is the property to you?
                  </span>
                  <label className="flex items-center space-x-2 cursor-pointer me-2">
                    <input
                      type="checkbox"
                      value="Owner"
                      checked={formData.property_type === "Owner"}                     
                      onChange={() => handleCheckboxChange("Owner")}
                      className="w-4 h-4 me-1"
                    />
                    <span>Owner</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value="Agent"
                      checked={formData.property_type === "Agent"}
                      onChange={() => handleCheckboxChange("Agent")}
                      className="w-4 h-4 me-1"
                    />
                    <span>Agent</span>
                  </label>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="property_address"
                    type="text"
                    value={formData.property_address} 
                    onChange={handleChange}
                    placeholder="Enter Your Property Address"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="property_city" 
                    value={formData.property_city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your City *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="property_road_width" 
                    value={formData.property_road_width} 
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your Road Width *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="property_area"
                    value={formData.property_area}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your Area (Extent)*"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="property_road_facing_direction"
                    value={formData.property_road_facing_direction}
                    onChange={handleChange}
                    type="text"
                    placeholder="Road Facing Direction*"
                    required
                  />
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
      </div>
    </section>
  );
};

export default JointVenturesForm;
