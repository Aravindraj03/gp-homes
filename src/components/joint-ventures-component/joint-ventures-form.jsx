import React from "react";

const JointVenturesForm = () => {
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
            <form
              method="post"
              className="contact__form"
              action=""
            >
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
