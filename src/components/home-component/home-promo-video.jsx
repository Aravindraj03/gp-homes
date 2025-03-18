import React from 'react';
import slideImg2 from '../../assets/img/projects/BG-1.jpg';

const HomePromoVideo = () => {
  return (
    <section 
      className="video-wrapper video d-flex align-items-center section-padding bg-img bg-fixed" 
      data-overlay-dark="2" 
      style={{ backgroundImage: `url(${slideImg2})` }}
          >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            {/* <span>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </span> */}
            <div className="section-subtitle"><span>Chennai Finest Realestate Developer</span></div>
            <div className="section-title"><span>GP Homes</span></div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <a className="vid" href="https://www.youtube.com/watch?v=NNA005FLQJ4" target="_blank" rel="noopener noreferrer">
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
