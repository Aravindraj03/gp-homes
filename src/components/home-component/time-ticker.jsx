import React from "react";
import Marquee from "react-fast-marquee";

import blazingStarLogo from "../../assets/img/projects/blazing-star.png";
import breezeBayLogo from "../../assets/img/projects/breeze-logo.png";
import buildingTrustLogo from "../../assets/img/projects/building-trust.png";
import elanzaLogo from "../../assets/img/projects/elanza.png";
import elloraCastleLogo from "../../assets/img/projects/ellora-castle.png";
import ethuliaLogo from "../../assets/img/projects/ethulia-logo.png";
import gardenBayLogo from "../../assets/img/projects/garden-bay.png";
import rubyLogo from "../../assets/img/projects/ruby-logo.png";

const logos = [
  blazingStarLogo,  
  breezeBayLogo,
  buildingTrustLogo,
  elanzaLogo,
  elloraCastleLogo,
  ethuliaLogo,
  gardenBayLogo,
  rubyLogo,
];

const HomeLogoMarquee = () => {
  return (
    <section className="logo-marquee bg-white pb-3 pb-md-0 py-md-5 bg-light">
      <Marquee speed={50} gradient={false}>
     
        <div className="marquee-div">
          {logos.map((logo, index) => (
            <div key={index} className="marquee-item d-flex justify-content-center align-items-center">
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
        <div style={{ width: "50px" }} />
      </Marquee>
    </section>
  );
};

export default HomeLogoMarquee;
