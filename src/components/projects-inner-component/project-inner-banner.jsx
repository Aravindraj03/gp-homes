import React from 'react';
import bgimage from '../../assets/img/slider/1.jpg';

const ProjectInnerPageBanner = ({ project }) => {
  
  const bannerImage =
    project?.banner_image && typeof project.banner_image === 'string'
      ? project.banner_image
      : bgimage;

  return (
    <div
      className="hero-apartment section-padding valign bg-img text-center item bg-img" 
      style={{
        backgroundImage: `url(${bannerImage})`,
        // backgroundBlendMode: 'overlay',
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-12 mt-24">
            <h5 className="text-lg font-medium text-white">GP Homes</h5>
            <h1 className="text-4xl font-bold text-white">{project?.name}</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectInnerPageBanner;
