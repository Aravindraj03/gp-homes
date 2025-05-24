import React, { Fragment } from "react";
import brochure from "../../assets/img/pdf/brochure.pdf"; 
import thankYouBanner from "../../assets/img/projects/thankyouBanner.jpg"; 
import thankYouBannerMobile from "../../assets/img/projects/thankYouBannerMobile.jpg";
// import "./ThankYouPage.css";

function ThankYouPage() {
  return (
    <Fragment>
    <div
      className="thankyou-container d-md-block d-none"
      style={{ backgroundImage: `url(${thankYouBanner})` }}
    >
      <a
          href={brochure}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="thankyou-button"
        >
        📄 Download Brochure
      </a>
    </div>

    <div
      className="thankyou-container-mobile d-block d-md-none"
      style={{ backgroundImage: `url(${thankYouBannerMobile})` }}
    >
        <a
          href={brochure}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="thankyou-button-mobile"
        >
        📄 Download Brochure
      </a>
      
    </div>
    </Fragment>

    
  );
}

export default ThankYouPage;
