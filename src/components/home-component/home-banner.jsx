import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import slideImg1 from "../../assets/img/slider/hero-banner-2.jpg";
import slideImg2 from "../../assets/img/slider/banner-2.jpg";

import MobileBanner2 from "../../assets/img/slider/Mobile-Banner-2.jpg";
import MobileBanner1 from "../../assets/img/slider/Mobile-Banner-1.jpg";
import { ServiceWrapper } from "../../service/ApiService";

const BannerSlider = () => {
 const service = new ServiceWrapper();
  const [images, setImages] = useState([]); // Initialize as empty array
  const [imageBaseLink, setImageBaseLink] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    service
      .callGet("list-of-banners")
      .then((response) => {
        setImages(response.data.Results); // ✅ fix here
        setImageBaseLink(response.data.img_base_url);
      })
      .catch((error) => {
        console.error("Banner fetch error", error);
      });
  }, []);
  console.log(images, "images---------------------");
  // console.log(imageBaseLink,"imageBaseLink---------------------")
  // console.log(imageBaseLink+images[0].image,"imageBaseLinkimages[0].image---------------------")

  return (
    <>
      <header className="header slider-fade d-none d-md-block">
        <div className="owl-carousel owl-theme">
          {/* {images?.map((banner) => ( */}
            <div
              // key={banner.id}
              className="text-center item bg-img"
              style={{
                backgroundImage: `url(${slideImg2})`,
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href = "/plots-chennai/gp-ponBhoomi")
              }
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <div className="butn-light mt-30 mb-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* ))} */}

          {/* Second Slide */}
          <div
            className="text-center item bg-img"
            style={{ backgroundImage: `url(${slideImg1})` }}
            onClick={() =>
              (window.location.href = "/plots-chennai/gp-ponBhoomi")
            }
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <button
                      className="button-77"
                      onClick={(e) => {
                        e.stopPropagation(); // prevents parent div click
                        window.open(
                          "https://ponbhoomi.gphomes.in/inventory",
                          "_blank"
                        );
                      }}
                    >
                      Know More
                      
                    </button>
                    <div className="butn-light mt-30 mb-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Reservation */}
        {/* <div className="reservation">
        <a href="tel:8551004444">
          <div className="icon d-flex justify-content-center align-items-center">
            <i className="flaticon-call"></i>
          </div>
          <div className="call">
            <span>855 100 4444</span>
            <br />
            Reservation
          </div>
        </a>
      </div> */}
      </header>
      <header className="header slider-fade d-block d-md-none">
        <div className="owl-carousel owl-theme">
          {/* First Slide */}
          <div
            className="text-center item bg-img"
            style={{
              backgroundImage: `url(${MobileBanner2})`,
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href = "/plots-chennai/gp-ponBhoomi")
            }
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    {/* <span>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                 </span> */}
                    <h4></h4>
                    <div className="butn-light mt-30 mb-30">
                      {/* <Link to={"/#apartments"} data-scroll-nav="1">
                     <span>View Project</span>
                   </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div
            className="text-center item bg-img"
            style={{
              backgroundImage: `url(${MobileBanner1})`,
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href = "/plots-chennai/gp-ponBhoomi")
            }
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <button
                      className="button-77"
                      onClick={(e) => {
                        e.stopPropagation(); // prevents parent div click
                        window.open(
                          "https://ponbhoomi.gphomes.in/inventory",
                          "_blank"
                        );
                      }}
                    >
                      Know More
                    </button>
                    {/* <span>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                   <i className="star-rating"></i>
                 </span> */}

                    <div className="butn-light mt-30 mb-30">
                      {/* <Link to={"/#apartments"} data-scroll-nav="1">
                     <span>View Project</span>
                   </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Reservation */}
        {/* <div className="reservation">
       <a href="tel:8551004444">
         <div className="icon d-flex justify-content-center align-items-center">
           <i className="flaticon-call"></i>
         </div>
         <div className="call">
           <span>855 100 4444</span>
           <br />
           Reservation
         </div>
       </a>
     </div> */}
      </header>
    </>
  );
};

export default BannerSlider;
