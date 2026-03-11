import React from 'react';
import bgimage from '../../assets/img/slider/1.jpg';

const ProjectInnerPageBanner = ({ project }) => {
  
  const bannerImage =
    project?.banner_image && typeof project.banner_image === 'string'
    ? project.banner_image
    : bgimage;
    return (
    <>
   <header className="header slider">
      <div className="owl-carousel owl-theme owl-projectDetail">
      <div
      className="text-center item bg-img"
    style={{
      backgroundImage: `url(${bannerImage})`
    }}
    ></div>
    </div>
    </header>
    
        </>
  );
};

export default ProjectInnerPageBanner;
