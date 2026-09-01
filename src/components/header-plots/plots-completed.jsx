import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Link } from "react-router-dom";
import AparmentBanner from "../plots-component/plots-banner";
import PlotDetails from "../plots-component/plots-details";

import room7 from "../../assets/img/rooms/Garden-Bay-01.jpg";
import room8 from "../../assets/img/rooms/Ethuliya.jpg";
import room9 from "../../assets/img/rooms/Namanai.jpg";
import room11 from "../../assets/img/rooms/Mid-way.jpg";
import room12 from "../../assets/img/rooms/VijayaLakshmi-Nagar.jpg";
import room13 from "../../assets/img/rooms/fairmont.jpg";
import room14 from "../../assets/img/rooms/serenevista.jpg";

import aptIcon from "../../assets/img/icons/Apartment.png";
import roadIcon from "../../assets/img/icons/Road.png";
import cctvIcon from "../../assets/img/icons/CCTV.png";
import ebIcon from "../../assets/img/icons/EB-Connection.png";
import wallIcon from "../../assets/img/icons/compund-wall.png";
import readyToConstruct from "../../assets/img/icons/Ready-to-cinstruct.png";
import security from "../../assets/img/icons/24-7-securiry.png";
import groundwater from "../../assets/img/icons/Ground-water.png";
import compoundWall from "../../assets/img/icons/compund-wall.png";
import solarLight from "../../assets/img/icons/Solar-lights.png";
import archIcon from "../../assets/img/icons/Arch.png";

import sold from "../../assets/img/rooms/sold out.png";
import bgimage from "../../assets/img/slider/plots-3.jpg";

const featureIcons = {
  Units: aptIcon,
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

// ONLY PLOTS - COMPLETED PROJECTS
const roomsData = [
  {
    id: 6,
    category: "Plots-Completed",
    location: "Athipet",
    title: "GP Midway Avenue",
    image: room11,
    description:
      "Midway Avenue in Athipet 2.0 offers modern living amidst nature's tranquility, with lush green landscapes at your doorstep.",
    project_status: "Completed Project",
    features: [
      "Well laid Tar Roads, 24/7 Security, Ready To Construct, EB Provided",
    ],
    slug: "gp-midway-avenue",
  },

  {
    id: 7,
    category: "Plots-Completed",
    location: "Kolathur",
    title: "GP Garden Bay",
    image: room7,
    description:
      "Garden Bay offers serene living near Anna Nagar, Chennai, with residential plots ideal for your dream home.",
    project_status: "Completed Project",
    features: [
      "Ready for Construction, Potable Water, Well laid Tar Roads, Fully Compound",
    ],
    slug: "gp-garden-bay",
  },

  {
    id: 8,
    category: "Plots-Completed",
    location: "Mogappair",
    title: "GP Ethulia",
    image: room8,
    description:
      "Ethulia by GP Homes in Mogappair offers 55 ready-to-build villa plots across 2.46 acres, ensuring prime location and value appreciation.",
    project_status: "Completed Project",
    features: [
      "Branded Solar Street Lights, Well Laid Blacktop Roads, Grand Entrance Arch, EB Provided",
    ],
    slug: "gp-ethulia",
  },

  {
    id: 9,
    category: "Plots-Completed",
    location: "Redhills",
    title: "GP Nanmanai",
    image: room9,
    description:
      "Nanmanai by GP Homes offers premium villa plots in a 1.5-acre sanctuary at Redhills, providing a peaceful retreat amidst lush greenery.",
    project_status: "Completed Project",
    features: [
      "Well laid Tar Roads, 24/7 Security, Ready To Construct, EB Provided",
    ],
    slug: "gp-nanmanai",
  },

  {
    id: 10,
    category: "Plots-Completed",
    location: "Thiruvallur",
    title: "GP Vijayalakshmi",
    image: room12,
    description:
      "GP Homes presents VL Nagar in Thiruvallur near Ikkadu, offering prime residential plots ideal for building your dream home.",
    project_status: "Completed Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-vijayalakshmi",
  },

  {
    id: 12,
    category: "Plots-Completed",
    location: "Ambattur",
    title: "GP Serene Vista",
    image: room14,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave of 8 villa plots in Heart of Ambattur.",
    project_status: "Completed Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-serenevista",
  },

  {
    id: 13,
    category: "Plots-Completed",
    location: "Parivakkam",
    title: "GP Fairmont",
    image: room13,
    description:
      "Discover GP Fairmont at Parivakkam – your gateway to balanced living in the thriving Poonamalle Hub",
    project_status: "Completed Project",
    features: [
      "Ready for Construction, Potable Water, Well laid Tar Roads, Fully Compound",
    ],
    slug: "gp-fairmont",
  },
];

function PlotsUpCompleted() {
  const location = useLocation();
  const category = location.pathname.includes("/plots")
    ? "plots"
    : "apartments";

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
              <h3 className="text-4xl font-bold text-white">Plots Completed</h3>
            </div>
          </div>
        </div>
      </div>
      <section
        className="rooms1 section-padding bg-cream plots-page"
        data-scroll-index="1"
        id="plots"
      >
        {/* PAGE TITLE */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title m-0 p-0 mb-2">
                Plots For Sale in Chennai
              </h3>

              <h2 className="mb-3">Residential Land For Sale in Chennai</h2>

              <p>
                GP Homes, Residential Plots For Sale, CMDA Approved Plots, Real
                Estate Developers in Chennai
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
                      className="square bg-img position-relative"
                      style={{
                        backgroundImage: `url(${room.image})`,
                      }}
                    >
                      {/* COMPLETED BADGE */}
                      <img
                        src={sold}
                        alt="Completed"
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
                        <Link
                          className="btn-form1-submit text-center"
                          to={`/plots-chennai/${room.slug}`}
                        >
                          Details
                        </Link>
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
      <ContactForm /> */}
      <HomeReservation />
      <Footer />

      <div
        className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top d-block d-md-none"
        style={{ zIndex: 1050 }}
      >
        <Link
          to={`/plots/enquiry-form?type=Plot`}
          className="btn btn-primary w-50 me-1 text-white"
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
        className="side-enquiry-button"
        to={`/plots/enquiry-form?type=Plot`}
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

export default PlotsUpCompleted;
