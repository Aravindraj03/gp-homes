import React, { useEffect } from 'react';
import slideImg2 from '../../assets/img/slider/2.jpg';
import quot from '../../assets/img/quot.png';
import testimonialsimg1 from '../../assets/img/team/4.jpg';
import testimonialsimg2 from '../../assets/img/team/1.jpg';
import testimonialsimg3 from '../../assets/img/team/5.jpg';

const Testimonials = () => {

  return (
    <section className="testimonials">
      <div 
        className="background bg-img bg-fixed section-padding pb-0" 
        style={{ backgroundColor: `#222222` }}
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
                    <span className="quote"><img src={quot} alt="quote" /></span>
                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="info">
                      <div className="author-img">
                        <img src={testimonialsimg1} alt="Emily Brown" />
                      </div>
                      <div className="cont">
                        <span>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                        </span>
                        <h6>Emily Brown</h6>
                        <span>Guest review</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="item">
                    <span className="quote"><img src={quot} alt="quote" /></span>
                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="info">
                      <div className="author-img">
                        <img src={testimonialsimg2} alt="Nolan White" />
                      </div>
                      <div className="cont">
                        <span>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                        </span>
                        <h6>Nolan White</h6>
                        <span>Guest review</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="item">
                    <span className="quote"><img src={quot} alt="quote" /></span>
                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                    <div className="info">
                      <div className="author-img">
                        <img src={testimonialsimg3} alt="Olivia Martin" />
                      </div>
                      <div className="cont">
                        <span>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                          <i className="star-rating"></i>
                        </span>
                        <h6>Olivia Martin</h6>
                        <span>Guest review</span>
                      </div>
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

export default Testimonials;
