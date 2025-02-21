import React from 'react';
import bgimage from '../../assets/img/slider/5.jpg';

const FAQBanner = () => {
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
            <h5 className="text-lg font-medium text-white">F.A.Qs</h5>
            <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;