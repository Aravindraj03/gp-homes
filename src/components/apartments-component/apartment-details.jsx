import React, { useState } from "react";
import { Link } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/valencia-ruby.jpg";

import room7 from "../../assets/img/rooms/gp-garden-bay2.jpg";
import room8 from "../../assets/img/rooms/ethulia.jpg";
import room9 from "../../assets/img/rooms/nammannai.jpg";
import room11 from "../../assets/img/rooms/lakebreeze.jpg";
import apartCompleted1 from "../../assets/img/apartments/blossom-icf.jpg";
import apartCompleted2 from "../../assets/img/apartments/Blue-Bell.jpg";
import apartCompleted3 from "../../assets/img/apartments/Blue-Bell-Phase-2.jpg";
import apartCompleted4 from "../../assets/img/apartments/Caspia.jpg";
import apartCompleted5 from "../../assets/img/apartments/Cherry-Blossom-1.jpg";
import apartCompleted6 from "../../assets/img/apartments/Cherry-Blossom-2.jpg";
import apartCompleted7 from "../../assets/img/rooms/athipetApartment.jpg";
import ponbhoomiVilla from "../../assets/img/rooms/ponbhoomiVilla.jpg";

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
        iconClass: matchedKey
          ? featureIcons[matchedKey]
          : "bi bi-check-circle",
      };
    });
};

const roomsData = [
  {
    id: 1,
    category: "Apartments-Completed",
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
    category: "Apartments-Completed",
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
    category: "Apartments-Completed",
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
    category: "Apartments-Completed",
    location: "Ayanambakkam",
    title: "GP Valencia Emerald",
    image: room4,
    description:
      "Welcome to GP Valencia Emerald, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK 2 & 3, Sq. ft. 857 to 1305, Blocks Stilt + 4"],
    slug: "gp-valencia-emerald",
  },
  {
    id: 5,
    category: "Apartments-Completed",
    location: "Ayanambakkam",
    title: "GP Valencia Ruby",
    image: room5,
    description:
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 912 – 1580, Floors Stilt + 5"],
    slug: "gp-valencia-ruby",
  },
  // {
  //   id: 6,
  //   category: "Apartments-Completed",
  //   location: "Ayanambakkam",
  //   title: "Lake Breeze",
  //   image: room11,
  //   description:
  //     "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
  //   project_status: "Ongoing Project",
  //   features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
  //   slug: "gp-valencia-ruby",
  // },
  {
    id: 7,
    category: "Apartments-Completed",
    location: "CHENNAI",
    title: "Blossom icf colony",
    image: apartCompleted1,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 8,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Blue Bell",
    image: apartCompleted2,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 9,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Blue Bell Phase II",
    image: apartCompleted3,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 10,
    category: "Apartments-Completed",
    location: "KORATTUR",
    title: "Caspia (Mohan Gardens)",
    image: apartCompleted4,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 11,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Cherry Blossom I",
    image: apartCompleted5,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 12,
    category: "Apartments-Completed",
    location: "Ayanambakkam",
    title: "Cherry Blossom II",
    image: apartCompleted6,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 13,
    category: "Apartments-Completed",
    location: "Ayanambakkam",
    title: "Cherry Blossom II",
    image: apartCompleted6,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
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
  {
    id: 15,
    category: "Apartments-Ongoing",
    location: "Pattabiram",
    title: "Ponbhoomi",
    image: ponbhoomiVilla,
    description:
      "Welcome to Pon Bhoomi by GP Homes – a serene residential villa built with superior quality and thoughtful planning.",
    project_status: "Ongoing Project",
    features: ["Black, 24/7, Potable,  CCTV"],
    slug: "gp-ponBhoomiVilla",
  },
];



const ApartmentDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Apartments-Ongoing"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Apartments-Ongoing")
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

  return (
    <section
      className="rooms1 section-padding bg-cream apartments-page"
      data-scroll-index="1"
      id="apartments"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="section-title">Our Projects</div> */}
            <h1 className="section-title m-0 p-0 mb-2">
              Apartments For Sale in Chennai
            </h1>
            <h2 className="mb-3">Flat For Sale in Chennai</h2>
            {/* <p>GP Homes, 1BHK, 2BHK, 3BHK, Apartment for Sale, Best Builders in Chennai</p> */}
            <p>
              GP Homes offers 2BHK, and 3BHK apartments for sale in Chennai,
              designed for modern living. As one of the best builders in
              Chennai, we provide high-quality, affordable homes in prime
              locations. Find your dream home with GP Homes today!
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
              onClick={() => handleFilter("Apartments-Ongoing")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Ongoing"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Ongoing
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Apartments-Upcoming")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Upcoming"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              UP Coming
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Apartments-Completed")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Completed"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Completed
            </button>
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

                      {![7,8,9,10,11,12,13,14].includes(room.id) && (
                        <Link
                          className="btn-form1-submit text-center"
                          to={`/apartments-chennai/${room.slug}`}
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

export default ApartmentDetails;
