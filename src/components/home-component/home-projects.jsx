import React, { useState } from "react";
import { Link } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/Mid-way.jpg";

import room7 from "../../assets/img/rooms/Garden-Bay-01.jpg";
import room8 from "../../assets/img/rooms/Ethuliya.jpg";
import room9 from "../../assets/img/rooms/Namanai.jpg";
import room10 from "../../assets/img/rooms/Pon-bhoomi.png";
import room11 from "../../assets/img/rooms/lakebreeze.jpg";
import room12 from "../../assets/img/rooms/VijayaLakshmi-Nagar.jpg"
import room13 from "../../assets/img/rooms/valencia-ruby.jpg"
import room14 from "../../assets/img/rooms/fairmont.jpg";

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

import ponbhoomiVilla from "../../assets/img/rooms/ponbhoomiVilla.jpg";
import room20 from "../../assets/img/rooms/cressidaPark.jpg";
import room25 from "../../assets/img/rooms/15.jpeg";
import room21 from "../../assets/img/rooms/11.jpeg";

import sold from "../../assets/img/rooms/sold out.png";
import sold2 from "../../assets/img/rooms/sold2.png";
import units from "../../assets/img/rooms/unitsleft.png";
import coming from "../../assets/img/rooms/ComingSoon.png"

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

const roomsData = [
  {
    id: 1,
    category: "Apartments",
    location: "Porur",
    title: "GP Blazing Star",
    image: room1,
    description:
      "Welcome to Blazing Star by GP Homes – a residential project located near Porur, one of the rapidly developing suburbs in Chennai.",
    project_status: "Ongoing Project",
    features: ["Units 25, BHK 2 & 3, Sq. ft. 845 – 1405, Floors Stilt + 5"],
    slug: "gp-blazing-star",
  },
  {
    id: 2,
    category: "Apartments",
    location: "Menambedu",
    title: "GP Breeze Way",
    image: room2,
    description:
      "Welcome to Breeze Way by GP Homes, a residential project located at Menambedu, one of the rapidly growing neighborhoods in Chennai.",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK2 & 3, Sq. ft.817 – 1240, Floors Stilt + 5"],
    slug: "gp-breeze-way",
  },
  {
    id: 3,
    category: "Apartments",
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
    category: "Apartments",
    location: "Ayanambakkam",
    title: "GP Valencia Emerald",
    image: room4,
    description:
      "Welcome to GP Valencia Emerald, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK 2 & 3, Sq. ft. 857 to 1305, Blocks Stilt + 4"],
    slug: "gp-valencia-emarald",
  },
  {
    id: 5,
    category: "Apartments",
    location: "Ayanambakkam",
    title: "GP Valencia Ruby",
    image: room13,
    description:
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 912 – 1580, Floors Stilt + 5"],
    slug: "gp-valencia-ruby",
  },

  {
    id: 12,
    category: "Plots",
    location: "Pattabiram",
    title: "GP Pon Bhoomi",
    image: room10,
    description:
      "PonBhoomi promises growth and prosperity, making land a better investment than gold due to its appreciating value. Now is the ideal time to build your dream home in this serene paradise.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-ponBhoomi",
  },

  {
    id: 6,
    category: "Plots",
    location: "Pattabiram-ORR",
    title: "GP Cressida Park",
    image: room20,
    description:"Land extent: 5.7 Acres   Size ranging: 500 - 2900 sq.ft",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-cressida-park",   
  },
  {
    id: 7,
    category: "Plots",
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
//     id: 21,
//     category: "Plots",
//     // location: "Tiruninravur-Nr.Hirudayaaleeswarar Temple",
//     title: "Tiruninravur-Nr.Hirudayaaleeswarar Temple",
//     image: room21,
//     description:"Land extent: 4.5 Acres  Size ranging: 500 - 3000 sq.ft",
//     project_status: "Ongoing Project",
//     features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
//     slug: "gp-cressida-park",   
//   },
  // {
  //   id: 10,
  //   category: "Plots",
  //   location: "Parivakkam",
  //   title: "GP Fairmont",
  //   image: room14,
  //   description:
  //     "Discover GP Fairmont at Parivakkam – your gateway to balanced living in the thriving Poonamalle Hub",
  //   project_status: "Ongoing Project",
  //   features: [
  //     "Ready for Construction, Potable Water, Well laid Tar Roads, Fully Compound",
  //   ],
  //   slug: "gp-fairmont",
  // },
  // {
  //   id: 10,
  //   category: "Plots",
  //   location: "Thiruvallur",
  //   title: "GP Vijayalakshmi",
  //   image: room12,
  //   description:
  //     "Nanmanai by GP Homes offers happy and healthy family living, all together in a beautifully planned 1.5 - acre sanctuary. Located in the green lush surroundings of Redhills, our premium villa plots, range from 535 to 3130 sq. Ft., offers a peaceful retreat from the bustle of city life.",
  //   project_status: "Ongoing Project",
  //   features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
  //   slug: "gp-vijayalakshmi",
  // },
  {
    id: 11,
    category: "Apartments",
    location: "Korattur",
    title: "GP Lake Breeze",
    image: room11,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
      id: 12,
      category: "Villa",
      location: "Pattabiram",
      title: "Ponbhoomi",
      image: ponbhoomiVilla,
      description:
        "Welcome to Pon Bhoomi by GP Homes – a serene residential villa built with superior quality and thoughtful planning.",
      project_status: "Ongoing Project",
      features: ["Black top roads, 24/7 Security, Potable ground water,  CCTV"],
      slug: "gp-ponbhoomi-villa",
    },
];

const HomeProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Apartments"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Apartments")
  );

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setSelectedFilter(category);
    const filteredRooms =
      category === "All"
        ? roomsData
        : roomsData.filter((room) => room.category === category);
    setVisibleRooms(filteredRooms.slice(0, 12)); // Limit to 9 items
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
          iconClass: matchedKey
            ? featureIcons[matchedKey]
            : "bi bi-check-circle",
        };
      });
  };

  return (
    <section
      className="rooms1 section-padding bg-cream"
      data-scroll-index="1"
      id="apartments"
    >
      <div className="container padding-bottom">
        <div className="row">
          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Villa")}
              className={`btn-form1-submit mb-30  ${
                selectedFilter === "Villa" ? "btn-form1-submit-active" : ""
              }`}
            >
              <img
                src={aptIconWhite}
                alt="Apartment"
                style={{ width: "40px", marginRight: "1rem" }}
              />
              Villa
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Apartments")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30  ${
                selectedFilter === "Apartments" ? "btn-form1-submit-active" : ""
              }`}
            >
              <img
                src={aptIconWhite}
                alt="Apartment"
                style={{ width: "40px", marginRight: "1rem" }}
              />
              Apartments
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Plots")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 ${
                selectedFilter === "Plots" ? "btn-form1-submit-active" : ""
              }`}
            >
              <img
                src={plotIcon}
                alt="Apartment"
                style={{ width: "40px", marginRight: "1rem" }}
              />
              Plots
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">GP Homes</div>
            <h1 className="section-title">Real Estate Developers in Chennai</h1>
          </div>
        </div>
      </div>

      <div className="rooms3">
        <div className="container">
          <div className="row">
            {visibleRooms.map((room) => (
              <div className="col-md-4" key={room.id}>
                <div className="square-flip">
                  <div
                    className="square bg-img"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    {room.category === "Apartments" && (
                      <img
                        src={sold} // adjust path
                        alt="Completed"
                        className="completed-badge"
                      />
                    )}

                    {room.id === 7 && (
                                          <img
                                            src={coming}
                                            alt="Coming Soon"
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
                    {/* {room.id === 7 && (
                      <img
                        src={units}
                        alt="Completed"
                        className="completed-badge"
                      />
                    )} */}

                    {/* <span className="category">
                      <Link to="/">Book</Link>
                    </span> */}

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

                      {/* <div className="row room-facilities mb-30">
                        <div className="col-md-6">
                          <ul>
                            <li>
                              <i className="flaticon-group"></i> 1-2 Persons
                            </li>
                            <li>
                              <i className="flaticon-wifi"></i> Free Wifi
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>
                              <i className="flaticon-bed"></i> Twin Bed
                            </li>
                            <li>
                              <i className="flaticon-breakfast"></i> Breakfast
                            </li>
                          </ul>
                        </div>
                      </div> */}

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
                                  <li
                                    style={{
                                      fontSize: "14px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    {/* <i className={`${item.iconClass} me-2`}></i>{" "} */}
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

                      {/* <div className="btn-line">
                        <Link
                          to={
                            room.category === "Plots"
                              ? `/project-details/${room.slug}`

                              : `/project/${room.slug}`
                          }
                        >
                          Details
                        </Link>
                      </div> */}

                      {room.id != "11" ? (
                        <Link
                          className="btn-form1-submit text-center"
                          to={
                            room.category === "Villa"
                              ? `/villas-chennai/${room.slug}`
                              : room.category === "Plots"
                                ? `/plots-chennai/${room.slug}`
                                : `/apartments-chennai/${room.slug}`
                          }
                        >
                          Details
                        </Link>
                      ) : (
                        <div className="btn-form1-submit text-center">
                          Details
                        </div>
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

export default HomeProjects;
