import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import HomeReservation from "../home-component/home-reservation";
import { Link } from "react-router-dom"; // Make sure you're using react-router
import AparmentBanner from "../apartments-component/apartment-banner";

import ponbhoomiVilla from "../../assets/img/rooms/ponbhoomiVilla.jpg";

import apartCompleted7 from "../../assets/img/rooms/athipetApartment.jpg";

import bhkIcon from "../../assets/img/icons/BHK.png";
import aptIcon from "../../assets/img/icons/Apartment.png";
import aptIconWhite from "../../assets/img/icons/Apartments_White.png";
import plotIcon from "../../assets/img/icons/Plot-White.png";
import sqft from "../../assets/img/icons/Sq.Fi.png";
import stiltFloor from "../../assets/img/icons/Stilt+Floor.png";
import roadIcon from "../../assets/img/icons/Road.png";
import cctvIcon from "../../assets/img/icons/CCTV.png";
import ebIcon from "../../assets/img/icons/EB-Connection.png"
import wallIcon from "../../assets/img/icons/compund-wall.png";
import readyToConstruct from "../../assets/img/icons/Ready-to-cinstruct.png";
import security from "../../assets/img/icons/24-7-securiry.png";
import groundwater from "../../assets/img/icons/Ground-water.png";
import roadICon from "../../assets/img/icons/Road.png";
import compoundWall from "../../assets/img/icons/compund-wall.png";
import solarLight from "../../assets/img/icons/Solar-lights.png";
import archIcon from "../../assets/img/icons/Arch.png";

import coming from "../../assets/img/rooms/ComingSoon.png";
import bgimage from "../../assets/img/slider/apartment-2.png";

const featureIcons = {
  Units: aptIcon,
  BHK: bhkIcon,
  "Sq. ft.": sqft,
  Floors: stiltFloor,
  Blocks: stiltFloor,
  Black: roadIcon,
  CCTV: cctvIcon,
  EB: ebIcon,
  Fenced: wallIcon,
  Ready: readyToConstruct,
  "24/7": security,
  Potable: groundwater,
  Well: roadIcon,
  Fully: compoundWall,
  Solar: solarLight,
  Grand: archIcon,
};

const getFeatureWithIcons = (feature) => {
  return feature.split(",").map((item) => {
    const trimmedItem = item.trim();

    const matchedKey = Object.keys(featureIcons).find((key) =>
      trimmedItem.includes(key),
    );

    return {
      text: trimmedItem,
      iconClass: matchedKey ? featureIcons[matchedKey] : "bi bi-check-circle",
    };
  });
};

// ONLY APARTMENTS - UPCOMING PROJECTS
const roomsData = [
  {
    id: 14,
    category: "Apartments-Upcoming",
    location: "Athipet",
    title: "New Launch",
    image: apartCompleted7,
    description:
      "GP Homes proudly launches its newest landmark development — an exclusive enclave in the thriving neighbourhood of Athipet.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
];

function ApartmentUpcoming() {
  return (
    <Fragment>
      <Header />
      <div
        className="banner-header section-padding valign bg-img"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-md-12 mt-24">
              <h5 className="text-lg font-medium text-white">GP Homes</h5>
              <h3 className="text-4xl font-bold text-white">
                Apartments Upcoming
              </h3>
            </div>
          </div>
        </div>
      </div>
      <section
        className="rooms1 section-padding bg-cream apartments-page"
        data-scroll-index="1"
        id="apartments"
      >
        {/* PAGE TITLE */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title m-0 p-0 mb-2">
                Apartments For Sale in Chennai
              </h3>

              <h2 className="mb-3">Flat For Sale in Chennai</h2>

              <p>
                GP Homes offers 2BHK, and 3BHK apartments for sale in Chennai,
                designed for modern living. As one of the best builders in
                Chennai, we provide high-quality, affordable homes in prime
                locations. Find your dream home with GP Homes today!
              </p>
            </div>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="rooms3">
          <div className="container">
            <div className="row">
              {roomsData.map((room) => (
                <div className="col-md-4" key={room.id}>
                  <div className="square-flip">
                    {/* FRONT SIDE */}
                    <div
                      className="square bg-img"
                      style={{
                        backgroundImage: `url(${room.image})`,
                      }}
                    >
                      {/* COMING SOON BADGE */}
                      <img
                        src={coming}
                        alt="Coming Soon"
                        className="completed-badge"
                      />

                      <div className="square-container d-flex align-items-end justify-content-end">
                        <div
                          className="box-title w-100 p-2"
                          style={{
                            backgroundColor: "#f26522",
                          }}
                        >
                          <h6>{room.location}</h6>

                          <h4>{room.title}</h4>
                        </div>
                      </div>

                      <div className="flip-overlay"></div>
                    </div>

                    {/* BACK SIDE */}
                    <div className="square2">
                      <div className="square-container2">
                        <h6>{room.location}</h6>

                        <h4>{room.title}</h4>

                        <p>{room.description}</p>

                        {/* FEATURES */}
                        {room.features && room.features.length > 0 && (
                          <div className="row room-facilities mb-30">
                            {room.features.map((feature, index) => {
                              const featureItems = getFeatureWithIcons(feature);

                              return featureItems.map((item, subIndex) => (
                                <div
                                  className="col-6"
                                  key={`${index}-${subIndex}`}
                                >
                                  <ul>
                                    <li className="fs-6">
                                      <img
                                        src={item.iconClass}
                                        alt="icons"
                                        style={{
                                          width: "25px",
                                          marginRight: "8px",
                                        }}
                                      />

                                      {item.text}
                                    </li>
                                  </ul>
                                </div>
                              ));
                            })}
                          </div>
                        )}

                        {/* DETAILS BUTTON */}
                        {/* <Link
                          className="btn-form1-submit text-center"
                          to={`/apartments-chennai/${room.slug}`}
                        >
                          Details
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <ContactBanner />
      <ContactForm />*/}
      <HomeReservation />
      <Footer />

      <div
        className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top d-block d-md-none"
        style={{ zIndex: 1050 }}
      >
        <Link
          to={`/apartments/enquiry-form?type=Apartment`}
          className="btn w-50 me-1 text-white"
          style={{ backgroundColor: "rgb(40 167 69)" }}
        >
          Enquiry
        </Link>
        <a
          href="tel:+918098725026"
          className="btn btn-success w-50 ms-1 text-white"
        >
          Call
        </a>
      </div>

      {/* Fixed "Enquire Now" Button */}
      <Link
        to={`/apartments/enquiry-form?type=Apartment`}
        className="side-enquiry-button"
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "rgb(242 101 34)",
          color: "#fff",
          padding: "12px 8px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          zIndex: 1000,
          textDecoration: "none",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontWeight: "600",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgb(255 82 0)  ")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgb(242 101 34)")
        }
      >
        Enquire Now
      </Link>
    </Fragment>
  );
}

export default ApartmentUpcoming;
