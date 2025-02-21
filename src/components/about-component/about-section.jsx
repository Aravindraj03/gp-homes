import React from "react";
import roomImage1 from "../../assets/img/rooms/8.jpg";
import roomImage2 from "../../assets/img/rooms/2.jpg";

const AboutSection = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            {/* <span>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </span> */}
            <div className="section-subtitle">GP Homes</div>
            <div className="section-title">Enjoy a Luxury Experience</div>
            <p>
              At GP Homes, our legacy is built on trust, quality, and timely
              delivery. With over 2000 happy families residing in 200+
              thoughtfully crafted homes, we have consistently upheld our
              promise of on-time handovers, solidifying our reputation as one of
              Chennai’s leading real estate developers.
            </p>
            <p>
              In an industry where delays have become common, GP Homes has
              remained steadfast in delivering projects as promised, overcoming
              challenges while staying true to our commitments. This unwavering
              reliability has earned us the trust of thousands, making
              affordable, high-quality homes a reality for aspiring homeowners.
            </p>
            <p>
              Since our inception in 2005, we have been redefining urban living
              with intelligently designed residences that seamlessly blend
              tradition with modernity. Our projects stand as architectural
              landmarks, catering to the aspirations of every generation.
            </p>
            <p>
              Recognized with multiple awards, GP Homes is committed to customer
              satisfaction, creating contemporary, secure, and aesthetically
              pleasing homes that reflect our dedication to excellence. With
              premium features such as advanced security systems, elegant
              lobbies, and beautifully landscaped gardens, every project we
              deliver is a testament to our passion for innovation and quality.
            </p>
            <p>
              Whether you're looking for your dream home or the perfect
              investment, GP Homes is where your aspirations take shape.
            </p>
            {/* Call Reservation */}
            <div className="reservations">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Reservation</p>
                <a href="tel:855-100-4444">855 100 4444</a>
              </div>
            </div>
          </div>
          <div
            className="col col-md-3 animate-box"
            data-animate-effect="fadeInUp"
          >
            <img src={roomImage1} alt="Room 1" className="mt-90 mb-30" />
          </div>
          <div
            className="col col-md-3 animate-box"
            data-animate-effect="fadeInUp"
          >
            <img src={roomImage2} alt="Room 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
