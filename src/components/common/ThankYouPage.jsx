import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import brochure from "../../assets/img/pdf/brochure.pdf"; 
import thankYouBanner from "../../assets/img/projects/thankyouBanner.jpg"; 
import thankYouBannerMobile from "../../assets/img/projects/thankYouBannerMobile.jpg";
// import "./ThankYouPage.css";

function ThankYouPage() {
   const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // navigate to previous page
  };

  const goHome = () => {
    navigate("/"); 
  }
  return (
    <Fragment>

      {/* Top Bar with Logo and Back Button */}
      <div className="thankyou-topbar">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
        <img src="https://www.gphomes.in/static/media/gp-logo-2.8eebfeda67aeef20b0e0.png" alt="Logo" className="thankyou-logo" onClick={goHome}/>
      </div>
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
