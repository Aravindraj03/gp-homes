import React from "react";
import slideImg1 from "../../assets/img/slider/homePage-desktopBanner-7-10.jpeg";
import slideImg2 from "../../assets/img/slider/newBanner.jpeg";

import MobileBanner1 from "../../assets/img/slider/homePage-mobileBanner-7-10.jpeg";
import MobileBanner2 from "../../assets/img/slider/newMobileBanner.jpeg";

const BannerSlider = () => {
  const desktopBanners = [
    // {
    //   image: slideImg2,
    //   link: "/plots-chennai/gp-ponBhoomi",
    // },
    {
      image: slideImg1,
      link: "/plots-chennai/gp-ponBhoomi",
    },
  ];

  const mobileBanners = [
    // {
    //   image: MobileBanner2,
    //   link: "/plots-chennai/gp-ponBhoomi",
    // },
    {
      image: MobileBanner1,
      link: "/plots-chennai/gp-ponBhoomi",
    },
  ];

  return (
    <>
      {/* Desktop Banner */}
      <header className="header slider-fade d-none d-md-block">
        {/* Uncomment the line below when you need the carousel */}
        {/* <div className="owl-carousel owl-theme"> */}
        <div>
          {desktopBanners.map((banner, index) => (
            <div
              key={index}
              className="text-center item bg-img"
              style={{
                backgroundImage: `url(${banner.image})`,
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = banner.link)}
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      {/* Add banner content here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </header>

      {/* Mobile Banner */}
      <header className="header slider-fade d-block d-md-none">
        {/* Uncomment the line below when you need the carousel */}
        {/* <div className="owl-carousel owl-theme"> */}
        <div>
          {mobileBanners.map((banner, index) => (
            <div
              key={index}
              className="text-center item bg-img"
              style={{
                backgroundImage: `url(${banner.image})`,
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = banner.link)}
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      {/* Add banner content here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default BannerSlider;