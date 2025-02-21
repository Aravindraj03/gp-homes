import React from 'react';
import slideImg2 from '../../assets/img/slider/2.jpg';

const HomePromoVideo = () => {
  return (
    <section 
      className="video-wrapper video section-padding bg-img bg-fixed" 
      data-overlay-dark="3" 
      style={{ backgroundImage: `url(${slideImg2})` }}
          >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <span>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </span>
            <div className="section-subtitle"><span>The Cappa Luxury Hotel</span></div>
            <div className="section-title"><span>Promotional Video</span></div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <a className="vid" href="https://youtu.be/7BGNAGahig8" target="_blank" rel="noopener noreferrer">
              <div className="vid-butn">
                <span className="icon">
                  <i className="ti-control-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePromoVideo;
