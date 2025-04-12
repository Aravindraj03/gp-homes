import React, { useEffect } from 'react';
import slideImg2 from '../../assets/img/projects/videobg.jpg';
import quot from '../../assets/img/quot.png';
import testimonialsimg1 from '../../assets/img/team/4.jpg';
import testimonialsimg2 from '../../assets/img/team/1.jpg';
import testimonialsimg3 from '../../assets/img/team/5.jpg';

const AboutTestimonials = () => {

  return (
    <section className="testimonials">
    <div
      className="background bg-img bg-fixed section-padding pb-0"
      style={{ backgroundImage: `url(${slideImg2})` }}
      data-overlay-dark="3"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="testimonials-box">
              <div className="head-box">
                <h6>Testimonials</h6>
                <h4>What Client's Say?</h4>
                <div className="line"></div>
              </div>
              {/* Carousel or Static Testimonials */}
              <div className="owl-carousel owl-theme">
                {/* Testimonial 1 */}
                <div className="item">
                  <span className="quote">
                    <img src={quot} alt="quote" />
                  </span>
                  <p>
                    “It is our pleasure to accolade our experience with GP
                    Homes when we bought our apartment from them. GP Homes had
                    dedicated quality of work all through the time during the
                    construction. They gracefully explained us the status and
                    progress of the works, whenever we visited the site or
                    inquired through phone.”{" "}
                  </p>
                  <div className="info">
                    {/* <div className="author-img">
                      <img src={testimonialsimg1} alt="Emily Brown" />
                    </div> */}
                    {/* <div className="cont"> */}
                      <span>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                      </span>
                      <h6>Lincy Marry Luke</h6>
                      <span>GP Caspia</span>
                    {/* </div> */}
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="item">
                  <span className="quote">
                    <img src={quot} alt="quote" />
                  </span>
                  <p>
                    “We take this opportunity to thank GP Homes for making our
                    dream of an own abode true. GP Homes took care in every
                    detail and workmanship of the project right from the time
                    when we booked our flat till they handed over the keys to
                    us.”
                  </p>
                  <div className="info">
                    {/* <div className="author-img">
                      <img src={testimonialsimg2} alt="Nolan White" />
                    </div> */}
                    {/* <div className="cont"> */}
                      <span>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                      </span>
                      <h6>MR. Shankar </h6>
                      <span>GP Freesia</span>
                    {/* </div> */}
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="item">
                  <span className="quote">
                    <img src={quot} alt="quote" />
                  </span>
                  <p>
                    “My first investment in property was a home of GP Homes
                    which opened me to a new beginning. I was very much
                    contented and felt myself comfortable with them always
                    during the processes. I would openly recommend anyone to
                    buy home at GP Homes.”
                  </p>
                  <div className="info">
                    {/* <div className="author-img">
                      <img src={testimonialsimg3} alt="Olivia Martin" />
                    </div> */}
                    {/* <div className="cont"> */}
                      <span>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                        <i className="star-rating"></i>
                      </span>
                      <h6>Mohana Krishnan </h6>
                      <span>GP Magnolia</span>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutTestimonials;
