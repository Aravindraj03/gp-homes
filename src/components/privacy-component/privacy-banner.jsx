import React from 'react';
import bgimage from '../../assets/img/slider/privacyPolicy.jpg';

const PrivacyBanner = () => {
  return (
    <div
      className="banner-header section-padding valign bg-img bg-fixed"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-12 mt-24"> 
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;