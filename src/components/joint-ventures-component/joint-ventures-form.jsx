import React, { useState } from "react";

const JointVenturesForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row mb-90">
          {/* Contact Information */}
          <div className="col-md-6 mb-60">
            <h3>The Cappa Luxury Hotel</h3>
            <p>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
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
                <p>Reservation</p>
                <a href="tel:855-100-4444">855 100 4444</a>
              </div>
            </div>
            <div className="reservations mb-30">
              <div className="icon">
                <span className="flaticon-envelope"></span>
              </div>
              <div className="text">
                <p>Email Info</p>
                <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
              </div>
            </div>
            <div className="reservations">
              <div className="icon">
                <span className="flaticon-location-pin"></span>
              </div>
              <div className="text">
                <p>Address</p>
                1616 Broadway NY, New York 10001
                <br />
                United States of America
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-md-5 mb-30 offset-md-1">
            <h3>Get in touch</h3>
            <form method="post" className="contact__form" action="">
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
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Your Number *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="subject"
                    type="text"
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
                      checked={selectedOptions.includes("Owner")}
                      onChange={() => handleCheckboxChange("Owner")}
                      className="w-4 h-4 me-1"
                    />
                    <span>Owner</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value="Agent"
                      checked={selectedOptions.includes("Agent")}
                      onChange={() => handleCheckboxChange("Agent")}
                      className="w-4 h-4 me-1"
                    />
                    <span>Agent</span>
                  </label>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="address"
                    type="text"
                    placeholder="Enter Your Property Address"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="city"
                    type="text"
                    placeholder="Enter Your City *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="roadWidth"
                    type="text"
                    placeholder="Enter Your Road Width *"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="area"
                    type="text"
                    placeholder="Enter Your Area (Extent)*"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="direction"
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
