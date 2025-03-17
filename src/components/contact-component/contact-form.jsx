import React from "react";

const ContactForm = () => {
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
                <p>Contact Us</p>
                <a href="tel:855-100-4444">9344481444</a>
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
                    name="location"
                    type="text"
                    placeholder="Location *"
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
