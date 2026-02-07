import React from "react";
import Marquee from "react-fast-marquee";

import blazingStarLogo from "../../assets/img/99acres.jpg";
import breezeBayLogo from "../../assets/img/CommonFloor.jpg";
import elanzaLogo from "../../assets/img/Housing.com.jpg";
import elloraCastleLogo from "../../assets/img/MagicBricks.jpg";
import ethuliaLogo from "../../assets/img/NoBroker.jpg";
import gardenBayLogo from "../../assets/img/PropTiger.jpg";

const logos = [
  blazingStarLogo,  
  breezeBayLogo,
  elanzaLogo,
  elloraCastleLogo,
  ethuliaLogo,
  gardenBayLogo,

];

const ChannelMarquee = () => {
  return (
    <section className="logo-marquee bg-white py-3 py-md-5 bg-light" dataanimate-effect="fadeInLeft">
      <h2 className="text-center mb-4">Our Esteemed Channel Partners </h2>
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

export default ChannelMarquee;
