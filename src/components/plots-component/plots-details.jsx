import React, { useState } from "react";
import { Link } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/valencia-ruby.jpg";

import room7 from "../../assets/img/rooms/Garden-Bay-01.jpg";
import room8 from "../../assets/img/rooms/Ethuliya.jpg";
import room9 from "../../assets/img/rooms/Namanai.jpg";
import room10 from "../../assets/img/rooms/Pon-bhoomi.png";
import room11 from "../../assets/img/rooms/Mid-way.jpg";
import room12 from "../../assets/img/rooms/VijayaLakshmi-Nagar.jpg";
import room13 from "../../assets/img/rooms/fairmont.jpg";
import room14 from "../../assets/img/rooms/serenevista.jpg";
import room15 from "../../assets/img/rooms/siruvapuri.jpg";
import room16 from "../../assets/img/rooms/thalakancheri.jpg";
import room17 from "../../assets/img/rooms/mambakkam.jpg";
import room18 from "../../assets/img/rooms/keelamani.jpg";
import room19 from "../../assets/img/rooms/thirumudivakkam.jpg";
import room20 from "../../assets/img/rooms/cressidaPark.jpg";
import room21 from "../../assets/img/rooms/11.jpeg";
import room22 from "../../assets/img/rooms/12.jpeg";
import room23 from "../../assets/img/rooms/13.jpeg";
import room24 from "../../assets/img/rooms/14.jpeg";
import room25 from "../../assets/img/rooms/15.jpeg";


import sold from "../../assets/img/rooms/sold out.png";
import sold2 from "../../assets/img/rooms/sold2.png";
import units from "../../assets/img/rooms/unitsleft.png";
import coming from "../../assets/img/rooms/ComingSoon.png"

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
  Well: roadICon,
  Fully: compoundWall,
  Solar: solarLight,
  Grand: archIcon
};

const getFeatureWithIcons = (feature) => {
  return feature
    .split(",") // Split features into an array
    .map((item) => {
      const trimmedItem = item.trim();
      const matchedKey = Object.keys(featureIcons).find((key) =>
        trimmedItem.includes(key)
      );

      return {
        text: trimmedItem,
        iconClass: matchedKey ? featureIcons[matchedKey] : "bi bi-check-circle",
      };
    });
};

const roomsData = [
  {
    id: 11,
    category: "Plots-Ongoing",
    location: "Sevvapet",
    title: "GP Pon Bhoomi",
    image: room10,
    description:
      "PonBhoomi symbolizes growth and prosperity. Investing in land is wiser than gold, as property values appreciate over time. Now is the ideal time to build your dream home in this serene paradise.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-ponBhoomi",
  },
  {
    id: 1,
    category: "Apartments-Ongoing",
    location: "Porur",
    title: "GP Blazing Star",
    image: room1,
    description:
      "Welcome to Blazing Star by GP Homes – a residential project located near Porur, one of the rapidly developing suburbs in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of contemporary design and functionality.",
    project_status: "Ongoing Project",
    features: ["Units 25, BHK 2 & 3, Sq. ft. 845 – 1405, Floors Stilt + 5"],
    slug: "gp-blazing-star",
  },
  {
    id: 2,
    category: "Apartments-Ongoing",
    location: "Menambedu",
    title: "GP Breeze Way",
    image: room2,
    description:
      "Welcome to Breeze Way by GP Homes, a residential project located at Menambedu, one of the rapidly growing neighborhoods in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of modern design and functionality.",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK2 & 3, Sq. ft.817 – 1240, Floors Stilt + 5"],
    slug: "gp-breeze-way",
  },
  {
    id: 3,
    category: "Apartments-Ongoing",
    location: "Madhanadhapuram",
    title: "GP Homes Elanza",
    image: room3,
    description:
      "GP homes is proud to announce yet another project, GP Elanza, which has a range of beautifully designed apartments in Madhanadhapuram.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 835 – 1326, Blocks 1"],
    slug: "gp-homes-elanza",
  },
  {
    id: 4,
    category: "Apartments-Ongoing",
    location: "Ayanambakkam",
    title: "GP Valencia Emarald",
    image: room4,
    description:
      "Welcome to GP Valencia Emerald, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK 2 & 3, Sq. ft. 857 to 1305, Blocks Stilt + 4"],
    slug: "gp-valencia-emarald",
  },
  {
    id: 5,
    category: "Apartments-Ongoing",
    location: "Ayanambakkam",
    title: "GP Valencia Ruby",
    image: room5,
    description:
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 912 – 1580, Floors Stilt + 5"],
    slug: "gp-valencia-ruby",
  },

   

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
  // {
  //   id: 11,
  //   category: "Plots-Ongoing",
  //   location: "Aynambakkam ",
  //   title: "GP Dream Scape",
  //   image: room14,
  //   description:
  //     "GP Homes presents its next landmark development, an exclusive enclave of 8 villa plots in Heart of Ambattur.",
  //   project_status: "Upcoming Project",
  //   features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
  //   slug: "gp-dreamscape",
  // },
  {
    id: 14,
    category: "Plots-Upcoming",
    location: "Near Amman temple",
    title: "Siruvapuri",
    image: room15,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave located near Amman Temple, Siruvapuri.",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-siruvapuri",
  },
  {
    id: 15,
    category: "Plots-Upcoming",
    // location: "Near Amman temple",
    title: "Thirumudivakkam",
    image: room19 ,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave located in Thirumudivakkam.",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-thirumudivakkam",
  },
  {
    id: 16,
    category: "Plots-Upcoming",
    // location: "Near Amman temple",
    title: "Mambakkam",
    image: room17,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave located in Mambakkam.",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-Mambakkam",
  },
  {
    id: 17,
    category: "Plots-Upcoming",
    location: "ON GNT Road",
    title: "Keelameni",
    image: room18,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave located on GNT Road, Keelameni.",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-Keelameni",
  },
  {
    id: 18,
    category: "Plots-Upcoming",
    location: "Thiruvallur",
    title: "Thalakancheri",
    image: room16,
    description:
      "GP Homes presents its next landmark development, an exclusive enclave located in Thiruvallur, Thalakancheri.",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-Thalakancheri",
  },
  {
    id: 19,
    category: "Plots-Ongoing",
    location: "Pattabiram-ORR",
    title: "GP Cressida Park",
    image: room20,
    description:"Land extent: 5.7 Acres   Size ranging: 500 - 2900 sq.ft",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-cressida-park",   
  },
  {
    id: 20,
    category: "Plots-Ongoing",
    location: "Tiruninravur-Pakkam",
    title: "AISHWARYA GARDEN ll",
    image: room25,
    description:
      "Land extent: 4.5 Acres  Size ranging: 500 - 3500 sq.ft",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "aishwarya-garden-ll",   
  },
  // {
  //   id: 21,
  //   category: "Plots-Ongoing",
  //   // location: "Tiruninravur-Nr.Hirudayaaleeswarar Temple",
  //   title: "Tiruninravur-Nr.Hirudayaaleeswarar Temple",
  //   image: room21,
  //   description:"Land extent: 4.5 Acres  Size ranging: 500 - 3000 sq.ft",
  //   project_status: "Ongoing Project",
  //   features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
  //   slug: "gp-cressida-park",   
  // },
  {
    id: 22,
    category: "Plots-Upcoming",
    location: "Nr.Siruvapuri",
    title: "SEYYON GRAND CITY",
    image: room22,
    description:"Land extent: 17 Acres  Size ranging: 450 - 3600 sq.ft",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-cressida-park",   
  },
  {
    id: 23,
    category: "Plots-Upcoming",
    location: "OMR-Siruthavur",
    title: "PETAL WING MEADOWS",
    image: room23,
    description:"Land extent: 2.4 Acres  Size ranging: 800 - 3000 sq.ft",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-cressida-park",   
  },
  {
    id: 24,
    category: "Plots-Upcoming",
    // location: "Mambakkam",
    title: "Mambakkam",
    image: room24,
    description:"Land extent: 18 Acres  Size ranging: 450 - 4200 sq.ft",
    project_status: "Upcoming Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-cressida-park",   
  },

];

const PlotDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Plots-Ongoing"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Plots-Ongoing")
  );

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setSelectedFilter(category);
    // setVisibleRooms([]);
    const filteredRooms =
      category === "All"
        ? roomsData
        : roomsData.filter((room) => room.category === category);
    setVisibleRooms(filteredRooms.slice(0, 12)); // Limit to 9 items
  };

  return (
    <section
      className="rooms1 section-padding bg-cream plots-page"
      data-scroll-index="1"
      id="plots"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="section-title">Our Projects</div> */}
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

      <div className="container padding-bottom">
        <div className="row">
          {/* <div className="col-md-4">
            <button
              onClick={() => handleFilter("Villa")}
              className="btn-form1-submit"
            >
              Villa
            </button>
          </div> */}

          <div className="col-md-4">
            <button
              onClick={() => {
                // setVisibleRooms([]);
                handleFilter("Plots-Ongoing");
              }}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Ongoing"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Ongoing
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => {
                // setVisibleRooms([]);
                handleFilter("Plots-Upcoming");
              }}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Upcoming"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              UP Coming
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => {
                // setVisibleRooms([]);
                handleFilter("Plots-Completed");
              }}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Completed"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">GP Homes</div>
            <div className="section-title">Our Projects</div>
          </div>
        </div>
      </div> */}

      <div className="rooms3">
        <div className="container">
          <div className="row">
            {visibleRooms.map((room) => (
              <div className="col-md-4" key={room.id}>
                <div className="square-flip">
                  <div
                    className="square bg-img position-relative"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    {/* COMPLETED BADGE */}
                    {room.project_status === "Completed Project" && (
                      <img
                        src={sold} // adjust path
                        alt="Completed"
                        className="completed-badge"
                      />
                    )}

                    {/* {room.id === 6 && (
                      <img
                        src={sold2}
                        alt="Completed"
                        className="completed-badge"
                      />
                    )} */}

                    {room.id === 20 && (
                      <img
                        src={coming}
                        alt="Coming Soon"
                        className="completed-badge"
                      />
                    )}

                    {/* {room.id === 7 && (
                      <img
                        src={units}
                        alt="Completed"
                        className="completed-badge"
                      />
                    )} */}

                    <div className="square-container d-flex align-items-end justify-content-end">
                      <div
                        className="box-title w-100 p-2"
                        style={{ backgroundColor: "#f26522" }}
                      >
                        <h6>{room.location}</h6>
                        <h4>{room.title}</h4>
                      </div>
                    </div>

                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <h6>{room.location}</h6>
                      <h4>{room.title}</h4>
                      <p>{room.description}</p>
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
                                    ></img>
                                    {item.text}
                                  </li>
                                </ul>
                              </div>
                            ));
                          })}
                        </div>
                      )}
                      {![14, 15, 16, 17, 18, 22, 23, 24].includes(
                        room.id,
                      ) && (
                        <Link
                          className="btn-form1-submit text-center"
                          to={`/plots-chennai/${room.slug}`}
                        >
                          Details
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotDetails;