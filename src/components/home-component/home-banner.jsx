import React from "react";
import slideImg1 from "../../assets/img/slider/homePage-desktopBanner-6-25.jpeg";
import slideImg2 from "../../assets/img/slider/newBanner.jpeg";

import MobileBanner1 from "../../assets/img/slider/homePage-mobileBanner-6-25.jpeg";
import MobileBanner2 from "../../assets/img/slider/newMobileBanner.jpeg";

const BannerSlider = () => {
  const desktopBanners = [
    {
      image: slideImg2,
      link: "/plots-chennai/gp-ponBhoomi",
    },
    {
      image: slideImg1,
      link: "/plots-chennai/gp-ponBhoomi",
    },
  ];

  const mobileBanners = [
    {
      image: MobileBanner2,
      link: "/plots-chennai/gp-ponBhoomi",
    },
    {
      image: MobileBanner1,
      link: "/plots-chennai/gp-ponBhoomi",
    },
  ];

  return (
    <>
      {/* Desktop Slider */}
      <header className="header slider-fade d-none d-md-block">
        <div className="owl-carousel owl-theme">
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
      </header>

      {/* Mobile Slider */}
      <header className="header slider-fade d-block d-md-none">
        <div className="owl-carousel owl-theme">
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
      </header>
    </>
  );
};

export default BannerSlider;