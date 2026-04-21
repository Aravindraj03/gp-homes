import React from 'react';
import bgimage from '../../assets/img/slider/aboutUsBanner.jpg';

const AboutBanner = () => {
  return (
    <div
      className="banner-header section-padding valign bg-img"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-12 mt-24">            
            <h5 className="text-lg font-medium text-white">GP Homes</h5>
            <h3 className="text-4xl font-bold text-white">About Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;